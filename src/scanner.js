import { monuments } from "./data/monuments.js";

export function initScanner() {
  const camera = document.querySelector("#camera");
  const canvas = document.querySelector("#snapshot-canvas");
  const takePhotoButton = document.querySelector("#take-photo-btn");
  const previewImage = document.querySelector("#preview-image");
  const scanLoader = document.querySelector("#scan-loader");
  const monumentSelect = document.querySelector("#monument-select");
  const scannerResult = document.querySelector("#scanner-result");

  if (
    !camera ||
    !canvas ||
    !takePhotoButton ||
    !previewImage ||
    !scanLoader ||
    !monumentSelect ||
    !scannerResult
  ) {
    return;
  }

  startCamera(camera);

  takePhotoButton.addEventListener("click", () => {
    takePhoto(camera, canvas, previewImage);
    simulateScan(scanLoader);
  });

  monumentSelect.addEventListener("change", () => {
    const monumentId = Number(monumentSelect.value);
    const monument = monuments.find((item) => item.id === monumentId);

    if (!monument) {
      scannerResult.innerHTML = "";
      return;
    }

    displayScannerResult(scannerResult, monument);
  });
}

async function startCamera(camera) {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: "environment",
      },
      audio: false,
    });

    camera.srcObject = stream;
  } catch (error) {
    camera.outerHTML = `
      <div class="rounded-xl bg-red-50 p-5 text-red-700">
        Impossible d'accéder à la caméra. Vérifie les permissions du navigateur.
      </div>
    `;
  }
}

function takePhoto(camera, canvas, previewImage) {
  const context = canvas.getContext("2d");

  canvas.width = camera.videoWidth;
  canvas.height = camera.videoHeight;

  context.drawImage(camera, 0, 0, canvas.width, canvas.height);

  const imageData = canvas.toDataURL("image/jpeg");

  previewImage.src = imageData;
  previewImage.classList.remove("hidden");
}

function simulateScan(scanLoader) {
  scanLoader.classList.remove("hidden");
  scanLoader.textContent = "Analyse de la photo en cours...";

  setTimeout(() => {
    scanLoader.textContent =
      "Photo analysée. Veuillez confirmer le monument reconnu dans la liste.";
  }, 1200);
}

function displayScannerResult(scannerResult, monument) {
  scannerResult.innerHTML = `
    <article class="rounded-xl bg-gray-100 p-5">
      <h2 class="text-2xl font-bold text-gray-900">
        ${monument.name}
      </h2>

      <p class="mt-4 text-gray-700">
        ${monument.description}
      </p>

      <p class="mt-4 text-gray-700">
        <strong>Adresse :</strong> ${monument.address}
      </p>

      <a
        href="${monument.googleMapsUrl}"
        target="_blank"
        rel="noopener noreferrer"
        class="mt-5 inline-block rounded-lg bg-blue-700 px-5 py-3 font-semibold text-white transition hover:bg-blue-800"
      >
        Voir sur Google Maps
      </a>
    </article>
  `;
}
import { monuments } from "../data/monuments.js";
import { Header } from "../components/Header.js";
import { Footer } from "../components/Footer.js";

export function ScannerPage() {
  const placeholderImage = `${import.meta.env.BASE_URL}assets/images/scanner/upload-placeholder.jpg`;

  return `
    <div class="min-h-screen bg-slate-950 text-slate-900">
      ${Header()}

      <main class="mx-auto max-w-7xl px-4 py-12 lg:px-6 lg:py-16">
        <div class="max-w-3xl">
          <p class="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Scanner
          </p>
          <h1 class="mt-4 text-4xl font-black tracking-tight text-white md:text-6xl">
            Scanner un monument
          </h1>
          <p class="mt-5 max-w-2xl text-base leading-7 text-white/75 md:text-lg">
            Prenez une photo du monument directement avec la caméra, puis confirmez le monument reconnu.
          </p>
        </div>

        <section class="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div class="overflow-hidden rounded-[2rem] border border-white/10 bg-white p-4 shadow-[0_20px_60px_rgba(15,23,42,0.18)] md:p-6">
            <video
              id="camera"
              autoplay
              playsinline
              class="h-[28rem] w-full rounded-[1.5rem] bg-slate-950 object-cover"
            ></video>

            <canvas id="snapshot-canvas" class="hidden"></canvas>

            <button
              id="take-photo-btn"
              class="mt-5 w-full rounded-2xl bg-cyan-400 px-5 py-3.5 font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              📷 Prendre la photo
            </button>

            <img
              id="preview-image"
              src="${placeholderImage}"
              alt="Photo prise avec la caméra"
              class="mt-6 hidden h-72 w-full rounded-[1.5rem] object-cover"
            />

            <div id="scan-loader" class="mt-6 hidden rounded-2xl border border-cyan-200 bg-cyan-50 p-4 text-cyan-900">
              Analyse de la photo en cours...
            </div>
          </div>

          <aside class="rounded-[2rem] border border-white/10 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.18)]">
            <label class="block text-sm font-bold uppercase tracking-[0.2em] text-slate-500" for="monument-select">
              Monument reconnu
            </label>

            <select
              id="monument-select"
              class="mt-3 w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-900 outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100"
            >
              <option value="">-- Confirmer le monument --</option>
              ${monuments
                .map(
                  (monument) => `
                    <option value="${monument.id}">
                      ${monument.name}
                    </option>
                  `,
                )
                .join("")}
            </select>

            <div id="scanner-result" class="mt-8"></div>
          </aside>
        </section>
      </main>

      ${Footer()}
    </div>
  `;
}

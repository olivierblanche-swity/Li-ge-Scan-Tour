import "./css/style.css";

import { HomePage } from "./pages/HomePage.js";
import { ScannerPage } from "./pages/ScannerPage.js";
import { MonumentDetails } from "./components/MonumentDetails.js";
import { monuments } from "./data/monuments.js";
import { initScanner } from "./scanner.js";
import { MonumentsPage } from "./components/MonumentsPage.js";

const app = document.querySelector("#app");

function renderMonumentsPage() {
  app.innerHTML = MonumentsPage();
  initNavigation();
  initDetailsButtons();
}

function renderHomePage() {
  app.innerHTML = HomePage();
  initNavigation();
  initDetailsButtons();
}

function renderScannerPage() {
  app.innerHTML = ScannerPage();
  initNavigation();
  initScanner();
}

function renderMonumentDetails(monument) {
  app.innerHTML = MonumentDetails(monument);
  initNavigation();

  const backButton = document.querySelector("#back-to-list");

  backButton.addEventListener("click", () => {
    renderHomePage();
  });

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function initNavigation() {
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      const page = link.dataset.page;

      if (page === "home") {
        renderHomePage();
      }

      if (page === "monuments") {
        renderMonumentsPage();
      }

      if (page === "scanner") {
        renderScannerPage();
      }
    });
  });
}

function initDetailsButtons() {
  const detailButtons = document.querySelectorAll(".btn-details");

  detailButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const monumentId = Number(button.dataset.id);
      const monument = monuments.find((item) => item.id === monumentId);

      if (!monument) return;

      renderMonumentDetails(monument);
    });
  });
}

renderHomePage();

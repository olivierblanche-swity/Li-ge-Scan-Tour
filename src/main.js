import "./css/style.css";

import { HomePage } from "./pages/HomePage.js";
import { ScannerPage } from "./pages/ScannerPage.js";
import { ContactPage } from "./pages/ContactPage.js";
import { QuizPage, getQuizQuestions } from "./pages/QuizPage.js";
import { GalleryPage } from "./pages/GalleryPage.js";
import { MonumentDetails } from "./components/MonumentDetails.js";
import { monuments } from "./data/monuments.js";
import { initScanner } from "./scanner.js";
import { MonumentsPage } from "./components/MonumentsPage.js";
import { toggleFavorite } from "./favorites.js";
import { applySavedTheme, isDarkTheme, toggleTheme } from "./theme.js";
import { addConsultation, getConsultationHistory } from "./history.js";

const app = document.querySelector("#app");

applySavedTheme();

function withBackToTop(content) {
  return `
    ${content}
    <button
      id="back-to-top"
      type="button"
      class="fixed bottom-5 right-5 z-[70] hidden h-12 w-12 items-center justify-center rounded-full bg-cyan-400 text-2xl font-black text-slate-950 shadow-xl transition hover:-translate-y-0.5 hover:bg-cyan-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-100"
      aria-label="Retour en haut"
    >
      ↑
    </button>
  `;
}

function renderPage(content, initializer = () => {}) {
  app.innerHTML = withBackToTop(content);
  initNavigation();
  initThemeControls();
  initFavoriteButtons();
  initBackToTop();
  initializer();
}

function renderMonumentsPage() {
  renderPage(MonumentsPage(), () => {
    initMonumentFilters();
    initDetailsButtons();
  });
}

function renderHomePage() {
  const recentMonuments = getRecentMonuments();

  renderPage(HomePage(recentMonuments), () => {
    initDetailsButtons();
  });
}

function renderScannerPage() {
  renderPage(ScannerPage(), initScanner);
}

function renderContactPage() {
  renderPage(ContactPage(), initContactForm);
}

function renderQuizPage() {
  renderPage(QuizPage(), initQuiz);
}

function renderGalleryPage() {
  renderPage(GalleryPage(), initGallery);
}

function renderMonumentDetails(monument) {
  addConsultation(monument.id);

  renderPage(MonumentDetails(monument), () => {
    const backButton = document.querySelector("#back-to-list");

    backButton.addEventListener("click", () => {
      renderMonumentsPage();
    });
  });

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function initNavigation() {
  const navLinks = document.querySelectorAll(".nav-link");
  const mobileMenuButton = document.querySelector("#mobile-menu-button");
  const mobileMenu = document.querySelector("#mobile-menu");

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", () => {
      const isOpen = mobileMenuButton.getAttribute("aria-expanded") === "true";

      mobileMenuButton.setAttribute("aria-expanded", String(!isOpen));
      mobileMenu.classList.toggle("grid-rows-[0fr]", isOpen);
      mobileMenu.classList.toggle("grid-rows-[1fr]", !isOpen);
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      renderRoute(link.dataset.page);
    });
  });
}

function renderRoute(page) {
  const routes = {
    home: renderHomePage,
    monuments: renderMonumentsPage,
    scanner: renderScannerPage,
    quiz: renderQuizPage,
    gallery: renderGalleryPage,
    contact: renderContactPage,
  };

  const route = routes[page] || renderHomePage;

  route();
}

function initThemeControls() {
  const themeButton = document.querySelector("#theme-toggle");
  const themeIcon = document.querySelector("[data-theme-icon]");

  if (!themeButton || !themeIcon) return;

  updateThemeButton(themeButton, themeIcon);

  themeButton.addEventListener("click", () => {
    toggleTheme();
    updateThemeButton(themeButton, themeIcon);
  });
}

function updateThemeButton(themeButton, themeIcon) {
  const darkTheme = isDarkTheme();

  themeIcon.textContent = darkTheme ? "☀" : "☾";
  themeButton.setAttribute(
    "aria-label",
    darkTheme ? "Activer le mode clair" : "Activer le mode sombre",
  );
}

function initMonumentFilters() {
  const searchInput = document.querySelector("#monument-search");
  const categoryFilter = document.querySelector("#category-filter");
  const monumentCards = document.querySelectorAll("[data-monument-card]");
  const emptyMessage = document.querySelector("#monument-search-empty");

  if (!searchInput || !categoryFilter || !emptyMessage) return;

  const updateFilters = () => {
    const searchTerm = searchInput.value.trim().toLowerCase();
    const selectedCategory = categoryFilter.value;
    let visibleCards = 0;

    monumentCards.forEach((card) => {
      const matchesSearch = card.dataset.monumentName.includes(searchTerm);
      const matchesCategory =
        !selectedCategory || card.dataset.monumentCategory === selectedCategory;
      const isVisible = matchesSearch && matchesCategory;

      card.classList.toggle("hidden", !isVisible);

      if (isVisible) {
        visibleCards += 1;
      }
    });

    emptyMessage.classList.toggle("hidden", visibleCards > 0);
  };

  searchInput.addEventListener("input", updateFilters);
  categoryFilter.addEventListener("change", updateFilters);
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

function initFavoriteButtons() {
  const favoriteButtons = document.querySelectorAll(".btn-favorite");

  favoriteButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();

      const monumentId = Number(button.dataset.id);
      const isActive = toggleFavorite(monumentId);

      updateFavoriteButton(button, isActive);
    });
  });
}

function updateFavoriteButton(button, isActive) {
  button.textContent = isActive ? "♥" : "♡";
  button.setAttribute("aria-pressed", String(isActive));
  button.setAttribute(
    "aria-label",
    isActive ? "Retirer des favoris" : "Ajouter aux favoris",
  );
}

function initContactForm() {
  const form = document.querySelector("#contact-form");
  const successMessage = document.querySelector("#contact-success");

  if (!form || !successMessage) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = String(formData.get("name")).trim();
    const email = String(formData.get("email")).trim();
    const message = String(formData.get("message")).trim();
    const isValid = validateContactForm(name, email, message);

    if (!isValid) {
      successMessage.classList.add("hidden");
      return;
    }

    form.reset();
    successMessage.innerHTML = `
      Votre message a bien été envoyé.<br />
      Nous vous répondrons dans les plus brefs délais.
    `;
    successMessage.classList.remove("hidden");
  });
}

function validateContactForm(name, email, message) {
  const isNameValid = validateRequiredField(
    "contact-name-error",
    name,
    "Le nom est obligatoire.",
  );
  const isEmailFilled = validateRequiredField(
    "contact-email-error",
    email,
    "L'email est obligatoire.",
  );
  const isEmailValid = isEmailFilled ? validateEmailField(email) : false;
  const isMessageValid = validateRequiredField(
    "contact-message-error",
    message,
    "Le message est obligatoire.",
  );

  return isNameValid && isEmailValid && isMessageValid;
}

function validateRequiredField(errorId, value, message) {
  const errorElement = document.querySelector(`#${errorId}`);
  const isValid = value.length > 0;

  if (!errorElement) return isValid;

  errorElement.textContent = isValid ? "" : message;
  errorElement.classList.toggle("hidden", isValid);

  return isValid;
}

function validateEmailField(email) {
  const errorElement = document.querySelector("#contact-email-error");
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!errorElement) return isValid;

  errorElement.textContent = isValid ? "" : "L'email doit être valide.";
  errorElement.classList.toggle("hidden", isValid);

  return isValid;
}

function initQuiz() {
  const form = document.querySelector("#quiz-form");
  const result = document.querySelector("#quiz-result");
  const resetButton = document.querySelector("#quiz-reset");
  const questions = getQuizQuestions();

  if (!form || !result || !resetButton) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const score = questions.reduce((total, question, index) => {
      const answer = formData.get(`question-${index}`);

      return answer === question.correctAnswer ? total + 1 : total;
    }, 0);

    result.textContent = `Votre score : ${score} / ${questions.length}`;
    result.classList.remove("hidden");
  });

  resetButton.addEventListener("click", () => {
    form.reset();
    result.classList.add("hidden");
  });
}

function initGallery() {
  const lightbox = document.querySelector("#gallery-lightbox");
  const image = document.querySelector("#gallery-lightbox-image");
  const title = document.querySelector("#gallery-lightbox-title");
  const closeButton = document.querySelector("#gallery-close");
  const galleryItems = document.querySelectorAll(".gallery-item");

  if (!lightbox || !image || !title || !closeButton) return;

  galleryItems.forEach((item) => {
    item.addEventListener("click", () => {
      image.src = item.dataset.image;
      image.alt = item.dataset.title;
      title.textContent = item.dataset.title;
      lightbox.classList.remove("hidden");
      closeButton.focus();
    });
  });

  closeButton.addEventListener("click", closeGallery);
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeGallery();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeGallery();
    }
  });
}

function closeGallery() {
  const lightbox = document.querySelector("#gallery-lightbox");

  if (!lightbox) return;

  lightbox.classList.add("hidden");
}

function initBackToTop() {
  const button = document.querySelector("#back-to-top");

  if (!button) return;

  const updateVisibility = () => {
    button.classList.toggle("hidden", window.scrollY < 320);
    button.classList.toggle("inline-flex", window.scrollY >= 320);
  };

  button.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  window.addEventListener("scroll", updateVisibility, { passive: true });
  updateVisibility();
}

function getRecentMonuments() {
  const recentIds = getConsultationHistory();

  return recentIds
    .map((id) => monuments.find((monument) => monument.id === id))
    .filter(Boolean);
}

renderHomePage();

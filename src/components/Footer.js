function getFooterLinkClass(page, activePage) {
  const baseClass =
    "nav-link transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950";

  if (page === activePage) {
    return `${baseClass} font-semibold text-cyan-300`;
  }

  return baseClass;
}

export function Footer(activePage = "home") {
  return `
    <footer class="border-t border-white/10 bg-slate-950 py-10 text-white">
      <div class="mx-auto grid max-w-7xl gap-6 px-4 text-center md:grid-cols-3 md:text-left lg:px-6">
        <div>
          <h2 class="text-xl font-black tracking-tight">
            Liège Scan Tour
          </h2>
          <p class="mt-3 text-sm leading-6 text-white/65">
            Découvrir Liège à travers ses monuments, son patrimoine et ses points de vue.
          </p>
        </div>

        <div class="text-sm text-white/65 md:justify-self-center">
          <p class="font-semibold text-white">Navigation</p>
          <nav class="mt-3 flex flex-col gap-2" aria-label="Navigation secondaire">
            <a href="#" class="${getFooterLinkClass("home", activePage)}" data-page="home" ${activePage === "home" ? 'aria-current="page"' : ""}>Accueil</a>
            <a href="#" class="${getFooterLinkClass("monuments", activePage)}" data-page="monuments" ${activePage === "monuments" ? 'aria-current="page"' : ""}>Monuments</a>
            <a href="#" class="${getFooterLinkClass("scanner", activePage)}" data-page="scanner" ${activePage === "scanner" ? 'aria-current="page"' : ""}>Scanner photo</a>
            <a href="#" class="${getFooterLinkClass("quiz", activePage)}" data-page="quiz" ${activePage === "quiz" ? 'aria-current="page"' : ""}>Quiz</a>
            <a href="#" class="${getFooterLinkClass("gallery", activePage)}" data-page="gallery" ${activePage === "gallery" ? 'aria-current="page"' : ""}>Galerie</a>
            <a href="#" class="${getFooterLinkClass("contact", activePage)}" data-page="contact" ${activePage === "contact" ? 'aria-current="page"' : ""}>Contact</a>
          </nav>
        </div>

        <div class="text-sm text-white/65 md:justify-self-end">
          <p class="font-semibold text-white">Technologies</p>
          <p class="mt-3">Vite, Tailwind CSS v4 et JavaScript Vanilla.</p>
        </div>
      </div>
    </footer>
  `;
}

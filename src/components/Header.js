const navItems = [
  {
    label: "Accueil",
    page: "home",
  },
  {
    label: "Monuments",
    page: "monuments",
  },
  {
    label: "Scanner",
    page: "scanner",
  },
  {
    label: "Quiz",
    page: "quiz",
  },
  {
    label: "Galerie",
    page: "gallery",
  },
  {
    label: "Contact",
    page: "contact",
  },
];

function getNavLinkClass(page, activePage) {
  const baseClass =
    "nav-link rounded-full px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 md:text-base";

  if (page === activePage) {
    return `${baseClass} bg-cyan-400 text-slate-950 hover:bg-cyan-300`;
  }

  return `${baseClass} text-white/80 hover:bg-white/10 hover:text-white`;
}

function NavLinks(activePage) {
  return navItems
    .map(
      (item) => `
        <a
          href="#"
          class="${getNavLinkClass(item.page, activePage)}"
          data-page="${item.page}"
          ${item.page === activePage ? 'aria-current="page"' : ""}
        >
          ${item.label}
        </a>
      `,
    )
    .join("");
}

export function Header(activePage = "home") {
  return `
    <header class="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
      <nav class="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-4 lg:px-6" aria-label="Navigation principale">
        <a
          href="#"
          class="nav-link text-xl font-black tracking-tight text-white transition hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          data-page="home"
        >
          Liège Scan Tour
        </a>

        <div class="flex items-center gap-2 md:order-3">
          <button
            id="theme-toggle"
            type="button"
            class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            aria-label="Changer le thème"
          >
            <span data-theme-icon>☾</span>
          </button>

          <button
            id="mobile-menu-button"
            type="button"
            class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 md:hidden"
            aria-controls="mobile-menu"
            aria-expanded="false"
            aria-label="Ouvrir le menu"
          >
            <span class="block h-0.5 w-5 rounded bg-current transition before:block before:h-0.5 before:w-5 before:-translate-y-1.5 before:rounded before:bg-current before:transition after:block after:h-0.5 after:w-5 after:translate-y-1 after:rounded after:bg-current after:transition"></span>
          </button>
        </div>

        <div class="hidden flex-1 justify-end gap-2 md:flex">
          ${NavLinks(activePage)}
        </div>

        <div
          id="mobile-menu"
          class="grid w-full grid-rows-[0fr] transition-all duration-200 ease-out md:hidden"
        >
          <div class="overflow-hidden">
            <div class="flex flex-col gap-2 border-t border-white/10 pt-4">
              ${NavLinks(activePage)}
            </div>
          </div>
        </div>
      </nav>
    </header>
  `;
}

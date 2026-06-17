export function Header() {
  return `
    <header class="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
      <nav class="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 lg:px-6">

        <a
          href="#"
          class="nav-link text-xl font-black tracking-tight text-white transition hover:text-cyan-300"
          data-page="home"
        >
          Liège Scan Tour
        </a>

        <div class="flex flex-wrap gap-2 text-sm font-semibold md:text-base">

          <a
            href="#"
            class="nav-link rounded-full px-4 py-2 text-white/80 transition hover:bg-white/10 hover:text-white"
            data-page="home"
          >
            Accueil
          </a>

          <a
            href="#"
            class="nav-link rounded-full px-4 py-2 text-white/80 transition hover:bg-white/10 hover:text-white"
            data-page="monuments"
          >
            Monuments
          </a>

          <a
            href="#"
            class="nav-link rounded-full px-4 py-2 text-white/80 transition hover:bg-white/10 hover:text-white"
            data-page="scanner"
          >
            Scanner
          </a>

        </div>

      </nav>
    </header>
  `;
}

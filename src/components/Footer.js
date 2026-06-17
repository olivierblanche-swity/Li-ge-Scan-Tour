export function Footer() {
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
            <a
              href="#"
              class="nav-link transition hover:text-white"
              data-page="home"
            >
              Accueil
            </a>
            <a
              href="#"
              class="nav-link transition hover:text-white"
              data-page="monuments"
            >
              Monuments
            </a>
            <a
              href="#"
              class="nav-link transition hover:text-white"
              data-page="scanner"
            >
              Scanner photo
            </a>
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

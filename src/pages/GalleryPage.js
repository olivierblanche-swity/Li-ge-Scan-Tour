import { Header } from "../components/Header.js";
import { Footer } from "../components/Footer.js";
import { monuments } from "../data/monuments.js";

export function GalleryPage() {
  return `
    ${Header("gallery")}

    <main class="bg-slate-50 py-16 transition-colors lg:py-20 dark:bg-slate-950">
      <section class="mx-auto max-w-7xl px-4 lg:px-6">
        <div class="animate-soft-in max-w-2xl">
          <p class="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-700 dark:text-cyan-300">
            Galerie
          </p>
          <h1 class="mt-4 text-4xl font-black tracking-tight text-slate-950 md:text-5xl dark:text-white">
            Galerie photo
          </h1>
          <p class="mt-4 text-base leading-7 text-slate-600 md:text-lg dark:text-slate-300">
            Toutes les photos des monuments disponibles dans le guide.
          </p>
        </div>

        <div class="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          ${monuments
            .map(
              (monument) => `
                <button
                  type="button"
                  class="gallery-item group animate-soft-in overflow-hidden rounded-3xl border border-slate-200 bg-white text-left shadow-[0_12px_40px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_18px_55px_rgba(15,23,42,0.14)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-100 dark:border-white/10 dark:bg-slate-900"
                  data-image="${monument.image}"
                  data-title="${monument.name}"
                >
                  <img
                    src="${monument.image}"
                    alt="${monument.name}"
                    class="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span class="block p-5 font-bold text-slate-950 dark:text-white">
                    ${monument.name}
                  </span>
                </button>
              `,
            )
            .join("")}
        </div>
      </section>

      <div
        id="gallery-lightbox"
        class="fixed inset-0 z-[80] hidden bg-slate-950/90 p-4"
        role="dialog"
        aria-modal="true"
        aria-label="Image agrandie"
      >
        <button
          id="gallery-close"
          type="button"
          class="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-2xl font-bold text-slate-950 transition hover:bg-cyan-100 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-200"
          aria-label="Fermer la galerie"
        >
          ×
        </button>
        <div class="flex h-full items-center justify-center">
          <figure class="max-h-full max-w-5xl">
            <img id="gallery-lightbox-image" src="" alt="" class="max-h-[78vh] w-full rounded-2xl object-contain" />
            <figcaption id="gallery-lightbox-title" class="mt-4 text-center text-lg font-bold text-white"></figcaption>
          </figure>
        </div>
      </div>
    </main>

    ${Footer("gallery")}
  `;
}

import { isFavorite } from "../favorites.js";

export function MonumentDetails(monument) {
  const favoriteActive = isFavorite(monument.id);
  const favoriteLabel = favoriteActive
    ? "Retirer des favoris"
    : "Ajouter aux favoris";

  return `
    <section class="bg-slate-50 py-16 transition-colors lg:py-20 dark:bg-slate-950">
      <div class="mx-auto max-w-5xl px-4 lg:px-6">
        <button
          id="back-to-list"
          class="mb-8 inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-100 dark:border-white/10 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
        >
          ← Retour aux monuments
        </button>

        <article class="animate-soft-in overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-slate-900 dark:shadow-black/20">
          <div class="relative">
            <img
              src="${monument.image}"
              alt="${monument.name}"
              class="h-80 w-full object-cover"
            />

            <button
              type="button"
              class="btn-favorite absolute right-5 top-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/95 text-2xl text-slate-700 shadow-lg transition hover:scale-105 hover:text-red-500 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-100 dark:bg-slate-950/90 dark:text-white"
              data-id="${monument.id}"
              aria-label="${favoriteLabel}"
              aria-pressed="${favoriteActive}"
            >
              ${favoriteActive ? "♥" : "♡"}
            </button>
          </div>

          <div class="p-6 md:p-10">
            <p class="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-700 dark:text-cyan-300">
              ${monument.category}
            </p>

            <h1 class="mt-4 text-3xl font-black tracking-tight text-slate-950 md:text-5xl dark:text-white">
              ${monument.name}
            </h1>

            <p class="mt-6 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
              ${monument.description}
            </p>

            <div class="mt-8 rounded-3xl bg-slate-100 p-5 md:p-6 dark:bg-slate-950">
              <h2 class="text-xl font-bold text-slate-950 dark:text-white">
                Informations pratiques
              </h2>

              <p class="mt-3 text-slate-700 dark:text-slate-300">
                <strong>Adresse :</strong> ${monument.address}
              </p>

              <a
                href="${monument.googleMapsUrl}"
                target="_blank"
                rel="noopener noreferrer"
                class="mt-5 inline-flex rounded-2xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-100"
              >
                Voir sur Google Maps
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  `;
}

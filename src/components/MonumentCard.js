import { isFavorite } from "../favorites.js";

export function MonumentCard(monument) {
  const favoriteActive = isFavorite(monument.id);
  const favoriteLabel = favoriteActive
    ? "Retirer des favoris"
    : "Ajouter aux favoris";

  return `
    <article
      class="group animate-soft-in overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_12px_40px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_55px_rgba(15,23,42,0.14)] dark:border-white/10 dark:bg-slate-900 dark:shadow-black/20"
      data-monument-card
      data-monument-name="${monument.name.toLowerCase()}"
      data-monument-category="${monument.category}"
    >
      <div class="relative">
        <img
          src="${monument.image}"
          alt="${monument.name}"
          class="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <button
          type="button"
          class="btn-favorite absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-xl text-slate-700 shadow-lg transition hover:scale-105 hover:text-red-500 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-100 dark:bg-slate-950/90 dark:text-white"
          data-id="${monument.id}"
          aria-label="${favoriteLabel}"
          aria-pressed="${favoriteActive}"
        >
          ${favoriteActive ? "♥" : "♡"}
        </button>
      </div>

      <div class="p-6">
        <p class="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-700 dark:text-cyan-300">
          ${monument.category}
        </p>

        <h2 class="mt-3 text-2xl font-black tracking-tight text-slate-950 dark:text-white">
          ${monument.name}
        </h2>

        <p class="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
          ${monument.shortDescription}
        </p>

        <p class="mt-4 text-sm font-medium text-slate-500 dark:text-slate-400">
          ${monument.address}
        </p>

        <button
          class="btn-details mt-6 inline-flex items-center justify-center rounded-2xl bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-100 dark:bg-cyan-400 dark:text-slate-950 dark:hover:bg-cyan-300"
          data-id="${monument.id}"
        >
          Voir plus
        </button>
      </div>
    </article>
  `;
}

import { MonumentCard } from "./MonumentCard.js";

export function MonumentGrid(monuments) {
  const categories = [...new Set(monuments.map((monument) => monument.category))];

  return `
    <section id="monuments" class="bg-slate-50 py-20 transition-colors dark:bg-slate-950">
      <div class="mx-auto max-w-7xl px-4 lg:px-6">
        <div class="mx-auto max-w-2xl text-center">
          <p class="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-700 dark:text-cyan-300">
            Monuments
          </p>
          <h2 class="mt-4 text-3xl font-black tracking-tight text-slate-950 md:text-5xl dark:text-white">
            Monuments de Liège
          </h2>
          <p class="mt-4 text-base leading-7 text-slate-600 md:text-lg dark:text-slate-300">
            Une sélection de lieux emblématiques pour explorer la ville à travers son histoire et ses repères visuels.
          </p>
        </div>

        <div class="mx-auto mt-10 grid max-w-4xl gap-4 md:grid-cols-[1fr_16rem]">
          <div>
            <label for="monument-search" class="text-sm font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              Rechercher un monument
            </label>
            <input
              id="monument-search"
              type="search"
              placeholder="Exemple : Gare, montagne..."
              class="mt-3 w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100 dark:border-white/10 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-500 dark:focus:ring-cyan-500/20"
            />
          </div>

          <div>
            <label for="category-filter" class="text-sm font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              Catégorie
            </label>
            <select
              id="category-filter"
              class="mt-3 w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-slate-950 outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100 dark:border-white/10 dark:bg-slate-900 dark:text-white dark:focus:ring-cyan-500/20"
            >
              <option value="">Toutes</option>
              ${categories
                .map((category) => `<option value="${category}">${category}</option>`)
                .join("")}
            </select>
          </div>
        </div>

        <p id="monument-search-empty" class="mt-8 hidden text-center font-semibold text-slate-600 dark:text-slate-300">
          Aucun monument ne correspond à cette recherche.
        </p>

        <div id="monument-list" class="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          ${monuments.map(MonumentCard).join("")}
        </div>
      </div>
    </section>
  `;
}

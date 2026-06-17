export function MonumentCard(monument) {
  return `
    <article class="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_12px_40px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_55px_rgba(15,23,42,0.14)]">

      <img
        src="${monument.image}"
        alt="${monument.name}"
        class="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
      />

      <div class="p-6">
        <p class="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-700">
          ${monument.slug}
        </p>

        <h2 class="mt-3 text-2xl font-black tracking-tight text-slate-950">
          ${monument.name}
        </h2>

        <p class="mt-3 text-sm leading-7 text-slate-600">
          ${monument.shortDescription}
        </p>

        <p class="mt-4 text-sm font-medium text-slate-500">
          ${monument.address}
        </p>

        <button
          class="btn-details mt-6 inline-flex items-center justify-center rounded-2xl bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
          data-id="${monument.id}"
        >
          Voir plus
        </button>

      </div>

    </article>
  `;
}

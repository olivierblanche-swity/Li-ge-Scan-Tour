export function MonumentDetails(monument) {
  return `
    <section class="bg-slate-50 py-16 lg:py-20">
      <div class="mx-auto max-w-5xl px-4 lg:px-6">
      <button
        id="back-to-list"
        class="mb-8 inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-100"
      >
        ← Retour aux monuments
      </button>

      <article class="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
        <img
          src="${monument.image}"
          alt="${monument.name}"
          class="h-80 w-full object-cover"
        />

        <div class="p-6 md:p-10">
          <p class="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-700">
            Monument
          </p>

          <h1 class="mt-4 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
            ${monument.name}
          </h1>

          <p class="mt-6 text-lg leading-relaxed text-slate-700">
            ${monument.description}
          </p>

          <div class="mt-8 rounded-3xl bg-slate-100 p-5 md:p-6">
            <h2 class="text-xl font-bold text-slate-950">
              Informations pratiques
            </h2>

            <p class="mt-3 text-slate-700">
              <strong>Adresse :</strong> ${monument.address}
            </p>

            <a
              href="${monument.googleMapsUrl}"
              target="_blank"
              rel="noopener noreferrer"
              class="mt-5 inline-flex rounded-2xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
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

export function Hero() {
  const heroImage = `${import.meta.env.BASE_URL}assets/images/hero/hero-liege.jpg`;

  return `
    <section class="relative isolate overflow-hidden bg-slate-950">
      <img
        src="${heroImage}"
        alt="Ville de Liège"
        class="absolute inset-0 h-full w-full object-cover"
      />

      <div class="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.16),transparent_42%),linear-gradient(180deg,rgba(2,6,23,0.12),rgba(2,6,23,0.82))]"></div>

      <div class="relative z-10 mx-auto flex min-h-[82vh] max-w-7xl flex-col justify-end px-4 py-16 text-white lg:px-6">
        <div class="max-w-3xl rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-md md:p-8">
          <p class="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold tracking-wide text-cyan-100">
            Guide touristique intelligent de Liège
          </p>

          <h1 class="mt-5 text-4xl font-black tracking-tight md:text-6xl">
            Scannez un monument de Liège
          </h1>

          <p class="mt-5 max-w-2xl text-base leading-7 text-white/85 md:text-xl">
            Prenez ou importez une photo d’un monument, sélectionnez celui que vous voyez,
            et découvrez immédiatement ses informations historiques et pratiques.
          </p>

          <div class="mt-8 flex flex-col gap-4 sm:flex-row">
            <button
              class="nav-link inline-flex items-center justify-center rounded-2xl bg-cyan-400 px-8 py-4 text-lg font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5 hover:bg-cyan-300"
              data-page="scanner"
            >
              📷 Prendre une photo
            </button>

           <button
  class="nav-link rounded-xl bg-white px-8 py-4 text-lg font-bold text-blue-800 shadow-lg transition hover:bg-gray-100"
  data-page="monuments"
>
  Voir les monuments
</button>
          </div>
        </div>
      </div>
    </section>
  `;
}

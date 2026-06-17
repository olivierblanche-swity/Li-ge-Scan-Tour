import { MonumentCard } from "./MonumentCard.js";

export function MonumentGrid(monuments) {
  return `
    <section id="monuments" class="bg-slate-50 py-20">
      <div class="mx-auto max-w-7xl px-4 lg:px-6">
        <div class="mx-auto max-w-2xl text-center">
          <p class="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-700">
            Monuments
          </p>
          <h2 class="mt-4 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
            Monuments de Liège
          </h2>
          <p class="mt-4 text-base leading-7 text-slate-600 md:text-lg">
            Une sélection de lieux emblématiques pour explorer la ville à travers son histoire et ses repères visuels.
          </p>
        </div>

        <div class="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          ${monuments.map(MonumentCard).join("")}
        </div>
      </div>
    </section>
  `;
}

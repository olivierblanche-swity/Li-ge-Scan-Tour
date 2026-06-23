import { Header } from "../components/Header.js";
import { Hero } from "../components/Hero.js";
import { MonumentCard } from "../components/MonumentCard.js";
import { Footer } from "../components/Footer.js";

function RecentMonuments(monuments) {
  if (monuments.length === 0) return "";

  return `
    <section class="bg-white py-16 transition-colors dark:bg-slate-950">
      <div class="mx-auto max-w-7xl px-4 lg:px-6">
        <div class="max-w-2xl">
          <p class="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-700 dark:text-cyan-300">
            Historique
          </p>
          <h2 class="mt-4 text-3xl font-black tracking-tight text-slate-950 md:text-4xl dark:text-white">
            Dernièrement consultés
          </h2>
        </div>

        <div class="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          ${monuments.map(MonumentCard).join("")}
        </div>
      </div>
    </section>
  `;
}

export function HomePage(recentMonuments = []) {
  return `
    ${Header("home")}
    ${Hero()}
    ${RecentMonuments(recentMonuments)}
    ${Footer("home")}
  `;
}

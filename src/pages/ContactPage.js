import { Header } from "../components/Header.js";
import { Footer } from "../components/Footer.js";

export function ContactPage() {
  return `
    ${Header("contact")}

    <main class="bg-slate-50 py-16 transition-colors lg:py-20 dark:bg-slate-950">
      <section class="mx-auto max-w-3xl px-4 lg:px-6">
        <div class="animate-soft-in">
          <p class="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-700 dark:text-cyan-300">
            Contact
          </p>
          <h1 class="mt-4 text-4xl font-black tracking-tight text-slate-950 md:text-5xl dark:text-white">
            Nous contacter
          </h1>
          <p class="mt-4 text-base leading-7 text-slate-600 md:text-lg dark:text-slate-300">
            Une question sur le guide ou un monument de Liège ? Envoyez-nous un message.
          </p>
        </div>

        <form id="contact-form" class="animate-soft-in mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,0.08)] md:p-8 dark:border-white/10 dark:bg-slate-900" novalidate>
          <div class="grid gap-6">
            <div>
              <label for="contact-name" class="text-sm font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                Nom
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                class="mt-3 w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-950 outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100 dark:border-white/10 dark:bg-slate-950 dark:text-white dark:focus:ring-cyan-500/20"
                autocomplete="name"
              />
              <p id="contact-name-error" class="mt-2 hidden text-sm font-semibold text-red-600"></p>
            </div>

            <div>
              <label for="contact-email" class="text-sm font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                class="mt-3 w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-950 outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100 dark:border-white/10 dark:bg-slate-950 dark:text-white dark:focus:ring-cyan-500/20"
                autocomplete="email"
              />
              <p id="contact-email-error" class="mt-2 hidden text-sm font-semibold text-red-600"></p>
            </div>

            <div>
              <label for="contact-message" class="text-sm font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows="6"
                class="mt-3 w-full resize-y rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-950 outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100 dark:border-white/10 dark:bg-slate-950 dark:text-white dark:focus:ring-cyan-500/20"
              ></textarea>
              <p id="contact-message-error" class="mt-2 hidden text-sm font-semibold text-red-600"></p>
            </div>
          </div>

          <button
            type="submit"
            class="mt-8 inline-flex w-full items-center justify-center rounded-2xl bg-slate-950 px-6 py-4 font-bold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-100 sm:w-auto dark:bg-cyan-400 dark:text-slate-950 dark:hover:bg-cyan-300"
          >
            Envoyer le message
          </button>

          <div
            id="contact-success"
            class="mt-6 hidden rounded-2xl border border-emerald-200 bg-emerald-50 p-4 font-semibold text-emerald-900"
            role="status"
            aria-live="polite"
          ></div>
        </form>
      </section>
    </main>

    ${Footer("contact")}
  `;
}

import { Header } from "../components/Header.js";
import { Footer } from "../components/Footer.js";

const questions = [
  {
    question: "Quel monument est une gare conçue par Santiago Calatrava ?",
    answers: [
      "Gare de Liège-Guillemins",
      "Le Perron",
      "Opéra Royal de Wallonie",
    ],
    correctAnswer: "Gare de Liège-Guillemins",
  },
  {
    question: "Combien de marches possède la Montagne de Bueren ?",
    answers: ["374", "184", "512"],
    correctAnswer: "374",
  },
  {
    question: "Quel monument symbolise les libertés communales de Liège ?",
    answers: ["Le Perron", "Cathédrale Saint-Paul", "Gare de Liège-Guillemins"],
    correctAnswer: "Le Perron",
  },
  {
    question: "Quel monument appartient à la catégorie Religieux ?",
    answers: [
      "Cathédrale Saint-Paul",
      "Opéra Royal de Wallonie",
      "Montagne de Bueren",
    ],
    correctAnswer: "Cathédrale Saint-Paul",
  },
  {
    question: "Quelle institution accueille des productions lyriques ?",
    answers: [
      "Opéra Royal de Wallonie",
      "Palais des Princes-Évêques",
      "Le Perron",
    ],
    correctAnswer: "Opéra Royal de Wallonie",
  },
];

export function QuizPage() {
  return `
    ${Header("quiz")}

    <main class="bg-slate-50 py-16 transition-colors lg:py-20 dark:bg-slate-950">
      <section class="mx-auto max-w-3xl px-4 lg:px-6">
        <div class="animate-soft-in">
          <p class="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-700 dark:text-cyan-300">
            Quiz
          </p>
          <h1 class="mt-4 text-4xl font-black tracking-tight text-slate-950 md:text-5xl dark:text-white">
            Quiz touristique
          </h1>
          <p class="mt-4 text-base leading-7 text-slate-600 md:text-lg dark:text-slate-300">
            Testez vos connaissances sur les monuments de Liège.
          </p>
        </div>

        <form id="quiz-form" class="mt-10 grid gap-6">
          ${questions
            .map(
              (item, index) => `
                <fieldset class="animate-soft-in rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-slate-900">
                  <legend class="text-lg font-bold text-slate-950 dark:text-white">
                    ${index + 1}. ${item.question}
                  </legend>

                  <div class="mt-4 grid gap-3">
                    ${item.answers
                      .map(
                        (answer) => `
                          <label class="flex cursor-pointer items-center gap-3 rounded-2xl border border-slate-200 px-4 py-3 text-slate-700 transition hover:border-cyan-300 hover:bg-cyan-50 dark:border-white/10 dark:text-slate-200 dark:hover:bg-cyan-400/10">
                            <input
                              type="radio"
                              name="question-${index}"
                              value="${answer}"
                              class="h-4 w-4 accent-cyan-500"
                            />
                            <span>${answer}</span>
                          </label>
                        `,
                      )
                      .join("")}
                  </div>
                </fieldset>
              `,
            )
            .join("")}

          <div class="flex flex-col gap-3 sm:flex-row">
            <button
              type="submit"
              class="inline-flex justify-center rounded-2xl bg-cyan-400 px-6 py-4 font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-100"
            >
              Voir mon score
            </button>

            <button
              id="quiz-reset"
              type="button"
              class="inline-flex justify-center rounded-2xl border border-slate-200 bg-white px-6 py-4 font-bold text-slate-800 transition hover:-translate-y-0.5 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-100 dark:border-white/10 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
            >
              Recommencer
            </button>
          </div>

          <div
            id="quiz-result"
            class="hidden rounded-2xl border border-emerald-200 bg-emerald-50 p-4 font-semibold text-emerald-900"
            role="status"
            aria-live="polite"
          ></div>
        </form>
      </section>
    </main>

    ${Footer("quiz")}
  `;
}

export function getQuizQuestions() {
  return questions;
}

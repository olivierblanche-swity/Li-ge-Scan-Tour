import { Header } from "../components/Header.js";
import { MonumentGrid } from "../components/MonumentGrid.js";
import { Footer } from "../components/Footer.js";
import { monuments } from "../data/monuments.js";

export function MonumentsPage() {
  return `
    ${Header()}

    <main>
      ${MonumentGrid(monuments)}
    </main>

    ${Footer()}
  `;
}
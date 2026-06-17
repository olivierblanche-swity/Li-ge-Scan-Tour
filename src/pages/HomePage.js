import { Header } from "../components/Header.js";
import { Hero } from "../components/Hero.js";
import { Footer } from "../components/Footer.js";

export function HomePage() {
  return `
    ${Header()}
    ${Hero()}
    ${Footer()}
  `;
}
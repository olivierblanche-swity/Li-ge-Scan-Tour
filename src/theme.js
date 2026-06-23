const THEME_KEY = "liege-scan-tour-theme";

export function applySavedTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY);
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const shouldUseDark = savedTheme ? savedTheme === "dark" : prefersDark;

  document.documentElement.classList.toggle("dark", shouldUseDark);
}

export function toggleTheme() {
  const shouldUseDark = !document.documentElement.classList.contains("dark");

  document.documentElement.classList.toggle("dark", shouldUseDark);
  localStorage.setItem(THEME_KEY, shouldUseDark ? "dark" : "light");

  return shouldUseDark;
}

export function isDarkTheme() {
  return document.documentElement.classList.contains("dark");
}

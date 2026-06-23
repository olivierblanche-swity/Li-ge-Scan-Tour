const FAVORITES_KEY = "liege-scan-tour-favorites";

export function getFavoriteIds() {
  const storedFavorites = localStorage.getItem(FAVORITES_KEY);

  if (!storedFavorites) return [];

  try {
    return JSON.parse(storedFavorites);
  } catch (error) {
    return [];
  }
}

export function isFavorite(monumentId) {
  return getFavoriteIds().includes(monumentId);
}

export function toggleFavorite(monumentId) {
  const favoriteIds = getFavoriteIds();
  const nextFavoriteIds = favoriteIds.includes(monumentId)
    ? favoriteIds.filter((id) => id !== monumentId)
    : [...favoriteIds, monumentId];

  localStorage.setItem(FAVORITES_KEY, JSON.stringify(nextFavoriteIds));

  return nextFavoriteIds.includes(monumentId);
}

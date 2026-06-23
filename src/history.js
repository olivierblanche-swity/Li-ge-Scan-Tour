const HISTORY_KEY = "liege-scan-tour-history";
const HISTORY_LIMIT = 5;

export function getConsultationHistory() {
  const storedHistory = localStorage.getItem(HISTORY_KEY);

  if (!storedHistory) return [];

  try {
    return JSON.parse(storedHistory);
  } catch (error) {
    return [];
  }
}

export function addConsultation(monumentId) {
  const history = getConsultationHistory();
  const nextHistory = [
    monumentId,
    ...history.filter((id) => id !== monumentId),
  ].slice(0, HISTORY_LIMIT);

  localStorage.setItem(HISTORY_KEY, JSON.stringify(nextHistory));
}

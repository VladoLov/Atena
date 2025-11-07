export async function loadMessages(appLocale) {
  // U JS/Node ESM import radi dinamički
  if (appLocale === "en") {
    const m = await import("../messages/en.json");
    return m.default;
  }
  // hr i sr reuse bhs.json (isti stringovi)
  if (appLocale === "hr" || appLocale === "sr" || appLocale === "bhs") {
    const m = await import("../messages/bhs.json");
    return m.default;
  }
  // fallback
  const m = await import("../messages/bhs.json");
  return m.default;
}

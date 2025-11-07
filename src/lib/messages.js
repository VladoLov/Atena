export async function loadMessages(appLocale) {
  if (appLocale === "en") {
    const m = await import("../../messages/en.json");
    return m.default;
  }
  // bhs i sve ostalo → bhs.json
  const m = await import("../../messages/bhs.json");
  return m.default;
}

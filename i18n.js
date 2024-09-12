// /i18n.js
import NextI18Next from "next-i18next";

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: "en",
  otherLanguages: ["bs"],
  localePath: typeof window === "undefined" ? "public/locales" : "locales",
});

export const { appWithTranslation, withTranslation, i18n } =
  NextI18NextInstance;

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          "Revolutionizing Healthcare with Cutting-Edge Technology":
            "Revolutionizing Healthcare with Cutting-Edge Technology",
        },
      },
    },
    bs: {
      translation: {
        "Revolutionizing Healthcare with Cutting-Edge Technology":
          "Revolucioniranje zdravstva s vrhunskom tehnologijom",
      },
    },
  });

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  //   .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    // debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    /*   resources: {
      en: {
        translation: {
          // here we will place our translations...
        },
      },
    }, */
  });

export default i18n;

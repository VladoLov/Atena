import { i18n } from "next-i18next";

export const LanguageSwitcher = () => {
  return (
    <div>
      <button onClick={() => i18n.changeLanguage("en")}>English</button>
      <button onClick={() => i18n.changeLanguage("bs")}>Bosnian</button>
    </div>
  );
};

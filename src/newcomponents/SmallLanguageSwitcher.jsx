import { useTranslation } from "next-i18next";
import { useState, useEffect } from "react";

export function SmallLanguageSwitcher() {
  const { i18n } = useTranslation("common");
  const [selectedLanguage, setSelectedLanguage] = useState(
    i18n.language || "en"
  );

  const languages = [
    { code: "en", name: "English", short: "EN" },
    { code: "hr", name: "Bosnian/Croatian/Serbian", short: "BHS" },
  ];

  useEffect(() => {
    // Handle language detection from browser or saved preference
    const detectedLanguage = window.navigator.language.split("-")[0];
    const savedLanguage = localStorage.getItem("preferredLanguage");

    const initialLanguage = savedLanguage || detectedLanguage;
    if (languages.some((lang) => lang.code === initialLanguage)) {
      i18n.changeLanguage(initialLanguage);
    }
  }, []);

  const handleLanguageChange = (langCode) => {
    if (langCode !== selectedLanguage) {
      setSelectedLanguage(langCode);
      i18n.changeLanguage(langCode);
      localStorage.setItem("preferredLanguage", langCode);
    }
  };

  return (
    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full p-1">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => handleLanguageChange(lang.code)}
          className={`px-3 py-1 text-sm rounded-full transition-all ${
            lang.code === selectedLanguage
              ? "bg-white text-black font-medium"
              : "text-gray-300 hover:text-white hover:bg-white/20"
          }`}
          aria-label={`Switch to ${lang.name}`}
          title={lang.name}
        >
          {lang.short}
        </button>
      ))}
    </div>
  );
}

"use client";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react"; // Import useEffect
import { useTranslation } from "react-i18next";

export function SmallLanguageSwitcher() {
  const { i18n } = useTranslation("common");
  // Initialize selectedLanguage directly from i18n.language to avoid hydration mismatches
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  // Use useEffect to update state if i18n.language changes externally
  useEffect(() => {
    setSelectedLanguage(i18n.language);
  }, [i18n.language]);

  const languages = [
    { code: "en", text: "EN" },
    { code: "hr", text: "BHS" },
  ];

  const handleLanguageChange = (langCode) => {
    if (selectedLanguage !== langCode) {
      // Only change if different
      setSelectedLanguage(langCode);
      i18n.changeLanguage(langCode);
    }
  };

  return (
    <div className="flex items-center flex-row gap-2">
      {languages.map((lang) => (
        <Button
          key={lang.code}
          onClick={() => handleLanguageChange(lang.code)}
          // Add a visual indicator for the active language
          className={`
            flex items-center justify-center 
            flex-col gap-2 cursor-pointer
            object-cover w-full
            ${selectedLanguage === lang.code ? "font-bold underline" : ""} 
          `}
          variant={selectedLanguage === lang.code ? "atena" : "ghost"} // Example: active button gets default variant
          aria-pressed={selectedLanguage === lang.code ? "true" : "false"} // ARIA attribute for accessibility
        >
          {lang.text}
        </Button>
      ))}
    </div>
  );
}

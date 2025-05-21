"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";

export function SmallLanguageSwitcher() {
  const { i18n } = useTranslation("common");
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const languages = [
    { code: "en", text: "EN" },
    { code: "hr", text: "BHS" },
  ];

  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <div className="flex items-center flex-row gap-2">
      {/*   <button className="flex items-center p-2 rounded-md hover:shadow-md">
        <Image
          src={languages.find((lang) => lang.code === selectedLanguage)?.icon}
          alt={selectedLanguage}
          width={24}
          height={24}
        />
        <ChevronDown className="h-4 w-auto" />
      </button> */}

      {languages.map((lang) => (
        <li
          key={lang.code}
          onClick={() => handleLanguageChange(lang.code)}
          className="flex items-center flex-col gap-2 cursor-pointer object-cover w-full"
        >
          <Image src={lang.icon} alt={lang.code} width={20} height={20} />
        </li>
      ))}
    </div>
  );
}

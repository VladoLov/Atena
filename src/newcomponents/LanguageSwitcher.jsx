"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"; // Adjust path to shadcn dropdown component

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const languages = [
    { code: "en", icon: "/sova/england.gif" },
    { code: "hr", icon: "/sova/bosnia.gif" },
  ];

  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center p-2 rounded-md hover:shadow-md">
          <Image
            src={languages.find((lang) => lang.code === selectedLanguage)?.icon}
            alt={selectedLanguage}
            width={24}
            height={24}
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-2">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className="flex items-center gap-2 cursor-pointer w-fit"
          >
            <Image src={lang.icon} alt={lang.code} width={24} height={24} />
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

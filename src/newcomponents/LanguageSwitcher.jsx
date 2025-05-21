"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";

// Adjust path to shadcn dropdown component
// Adjust path to shadcn dropdown component
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function LanguageSwitcher() {
  const { i18n } = useTranslation("common");
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const languages = [
    { code: "en", text: "EN" },
    { code: "hr", text: "BHS" },
  ];
  const languagesIcons = [
    { code: "en", icon: "/sova/uk.png" },
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
          {/*  <Image
            src={languages.find((lang) => lang.code === selectedLanguage)?.icon}
            alt={selectedLanguage}
            width={24}
            height={24}
          /> */}
          <p>
            {languages.find((lang) => lang.code === selectedLanguage)?.text}
          </p>
          <ChevronDown className="h-4 w-auto" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-2">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className="flex items-center gap-2 cursor-pointer w-fit"
          >
            <p>{lang.text}</p>
            {/* <Image src={lang.icon} alt={lang.code} width={24} height={24} /> */}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

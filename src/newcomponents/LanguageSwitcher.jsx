"use client";

import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";
import HeaderLoading from "@/components/HeaderLoading";

export function LanguageSwitcher() {
  const locale = useLocale();

  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true); // Example for internal loading

  useEffect(() => {
    // Simulate some async operation that might cause suspension
    // If your header truly does something async *on the client side* that suspends
    // (e.g., fetching user data for a profile icon in the header)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    // This is where Suspense would catch it if this component is rendered within Suspense
    return <HeaderLoading />;
  }

  const switchLanguage = (newLocale) => {
    // Create new pathname with the new locale
    let newPathname;

    // Check if current path already has a locale
    const hasLocale = pathname.startsWith(`/${locale}`);

    if (hasLocale) {
      // Replace current locale with new one
      newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
    } else {
      // Add new locale to path
      newPathname = `/${newLocale}${pathname}`;
    }

    // Force full page reload to ensure all data refreshes
    window.location.href = newPathname;
  };

  const languages = [
    { code: "en", text: "EN" },
    { code: "bhs", text: "BHS" },
  ];

  const currentLanguage =
    languages.find((lang) => lang.code === locale)?.text || languages[0].text;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center p-2 rounded-md hover:shadow-md">
          <p>{currentLanguage}</p>
          <ChevronDown className="h-4 w-auto" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-2">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => switchLanguage(lang.code)}
            className="flex items-center gap-2 cursor-pointer w-fit"
          >
            <p>{lang.text}</p>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

"use client";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";

export function SmallLanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

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

  return (
    <div className="flex items-center flex-row gap-2">
      {languages.map((lang) => (
        <Button
          key={lang.code}
          onClick={() => switchLanguage(lang.code)} // Fixed: Changed currentLanguage to switchLanguage
          className={`
            flex items-center justify-center 
            flex-col gap-2 cursor-pointer
            object-cover w-full
            ${locale === lang.code ? "font-bold  " : ""} 
          `}
          variant={locale === lang.code ? "atena" : "ghost"}
          aria-pressed={locale === lang.code ? "true" : "false"}
        >
          {lang.text}
        </Button>
      ))}
    </div>
  );
}

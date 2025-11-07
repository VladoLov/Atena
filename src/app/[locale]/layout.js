import { Oswald } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

/* import Footer2 from "@/components/Footer2"; */
import Footer2 from "../../components/Footer2";
/* import Header from "@/newcomponents/Header"; */
import Header from "../../newcomponents/Header";
import { setRequestLocale } from "next-intl/server";
import Script from "next/script";
import { Suspense } from "react";
import Loading from "./about/loading";
import { getTranslations } from "next-intl/server";
import { loadMessages } from "@/lib/messages";

const oswald = Oswald({ subsets: ["latin"], weight: ["400", "600", "700"] });

import { APP_LOCALES, BCP47_MAP, OG_LOCALE_MAP } from "@/lib/locale";

export async function generateMetadata({ params }) {
  const rawLocale = params?.locale;
  const appLocale = APP_LOCALES.includes(rawLocale)
    ? rawLocale
    : DEFAULT_APP_LOCALE;
  const t = await getTranslations("seo"); // Load translations for the 'seo' namespace
  const title = t("homePage.title");
  const description = t("homePage.description");

  const ogLocale = OG_LOCALE_MAP[appLocale];
  return {
    metadataBase: new URL(
      process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
    ),

    title: {
      template: "%s | ATENA Genomics",
      default: title,
    },
    description,
    icons: {
      icon: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
    // Hreflang (ključevi su BCP-47, vrijednosti su tvoje rute)
    alternates: {
      canonical: `/${appLocale}`,
      languages: {
        en: "/en",
        bs: "/bhs",
      },
    },
    openGraph: {
      type: "website",
      siteName: "ATENA Genomics",
      title,
      description,
      locale: ogLocale,
      localeAlternate: Object.values(OG_LOCALE_MAP).filter(
        (l) => l !== ogLocale
      ),
      images: [
        {
          url: "/AtenaGenomicsLogo.png",
          width: 1200,
          height: 630,
          alt: "ATENA Genomics",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/AtenaGenomicsLogo.png"],
    },
  };
}

export default async function RootLayout({ children, params }) {
  const rawLocale = params?.locale;

  // ✅ VALIDACIJA (vrati što je CodeRabbit tražio)
  if (!hasLocale(routing.locales, rawLocale)) {
    notFound();
  }

  // Sada je sigurno validno:
  const appLocale = rawLocale;
  setRequestLocale(appLocale);

  const lang = BCP47_MAP[appLocale]; // "en" ili "bs"
  const messages = await loadMessages(appLocale);
  return (
    <html lang={lang} className="scroll-smooth">
      <body
        className={`relative  ${oswald.className} `}
        suppressHydrationWarning={true}
      >
        <NextIntlClientProvider>
          <Suspense fallback={<Loading />}>
            <Header className="w-full  sticky top-0 left-0 z-50 bg-[#fff]" />
            {children}
            <Footer2 />
          </Suspense>
        </NextIntlClientProvider>
      </body>
      <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
    </html>
  );
}

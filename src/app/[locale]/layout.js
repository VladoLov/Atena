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

const oswald = Oswald({ subsets: ["latin"], weight: ["400", "600", "700"] });

import { APP_LOCALES, BCP47_MAP, OG_LOCALE_MAP } from "@/lib/locale";

export async function generateMetadata({ params }) {
  const appLocale = APP_LOCALES.includes(params?.locale)
    ? params.locale
    : DEFAULT_APP_LOCALE;
  const lang = BCP47_MAP[appLocale];
  const ogLocale = OG_LOCALE_MAP[appLocale];
  const t = await getTranslations("seo"); // Load translations for the 'seo' namespace

  return {
    title: {
      template: `%s | ATENA Genomics`, // This will append " | ATENA Genomics" to other page titles
      default: t("homePage.title"), // Default title for this specific home page
    },
    description: t("homePage.description"),
    icons: {
      icon: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
    alternates: {
      canonical: `/${appLocale}`, // ili "/" ako želiš kanonski na root za default
      languages: {
        en: "/en",
        bs: "/bhs", // iako je URL /bhs, hreflang vrijednost je "bs"
        hr: "/hr",
        sr: "/sr",
      },
    },
    openGraph: {
      type: "website",
      siteName: "ATENA Genomics",
      title: t("homePage.title"),
      description: t("homePage.description"),
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
      title: t("homePage.title"),
      description: t("homePage.description"),
      images: ["/AtenaGenomicsLogo.png"],
    },
  };
}

export default async function RootLayout({ children, params }) {
  /*  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale); */
  const appLocale = APP_LOCALES.includes(params?.locale)
    ? params.locale
    : DEFAULT_APP_LOCALE;
  const lang = BCP47_MAP[appLocale];
  //  <html lang={params.locale} className="scroll-smooth">
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

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

const oswald = Oswald({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata = {
  title: "ATENA Genomics",
  description:
    "Discover ATENA, your trusted partner in advanced genome testing services. Our cutting-edge technology provides comprehensive genomic analysis to empower personalized medicine. Explore our range of services, including cancer genomics, pharmacogenomics, and hereditary disease testing, designed to optimize patient care and treatment outcomes. Join us in advancing healthcare through precision genomics.",
  facebook: {
    card: "summary_large_image",
  },
};

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);
  return (
    <html lang={params.locale} className="scroll-smooth">
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

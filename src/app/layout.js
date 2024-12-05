import { Poppins } from "next/font/google";
import { Oswald } from "next/font/google";
import "./globals.css";

import Footer2 from "@/components/Footer2";
import Header from "@/newcomponents/Header";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });
const oswald = Oswald({ subsets: ["latin"], weight: ["400", "600", "700"] });
import { I18nProvider } from "@/newcomponents/I18nProvider";

export const metadata = {
  title: "ATENA Genomics",
  description:
    "Discover ATENA, your trusted partner in advanced genome testing services. Our cutting-edge technology provides comprehensive genomic analysis to empower personalized medicine. Explore our range of services, including cancer genomics, pharmacogenomics, and hereditary disease testing, designed to optimize patient care and treatment outcomes. Join us in advancing healthcare through precision genomics.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`relative  ${oswald.className} ${poppins.className}`}>
        <I18nProvider>
          <Header className0="w-full sticky top-0 left-0 z-50 bg-[#fff]" />
          {children}
          <Footer2 />
        </I18nProvider>
      </body>
    </html>
  );
}

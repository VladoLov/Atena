import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ATENA Genomics",
  description:
    "Discover ATENA, your trusted partner in advanced genome testing services. Our cutting-edge technology provides comprehensive genomic analysis to empower personalized medicine. Explore our range of services, including cancer genomics, pharmacogenomics, and hereditary disease testing, designed to optimize patient care and treatment outcomes. Join us in advancing healthcare through precision genomics.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

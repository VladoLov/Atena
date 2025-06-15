import Image from "next/image";

import { useTranslations } from "next-intl";
// Placeholder partner data - replace with your actual partner information
const partners = [
  {
    name: "GenomeTech Labs",
    logo: "/iBio.png",
    url: "https://ibio.hu",
    description: "Specialized in advanced NGS sequencing technologies",
  },
  {
    name: "BioDiagnostics Inc.",
    logo: "/dna-genotek.png",
    url: "https://www.dnagenotek.com/",
    description:
      "Global leader eader in tools for collecting, preserving, and preparing biological samples.",
  },
];

export default function PartnersCarousel() {
  const t = useTranslations("partners");
  return (
    <div className=" py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-platinum-950 mb-12">
          {t("title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-12">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col h-full"
            >
              <div className="flex flex-col items-center text-center flex-grow">
                <div className="relative h-20 w-48 ">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

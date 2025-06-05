import Image from "next/image";
import Link from "next/link";

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
  return (
    <div className=" py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-platinum-950 mb-12">
          Our Trusted Partners
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
                {/*      <p className="text-platinum-700 mt-4 max-w-md flex-grow">
                  {partner.description}
                </p>
                <Link
                  href={partner.url}
                  className="mt-6 inline-flex items-center text-sm font-medium text-crimson-600 hover:underline self-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit website
                  <svg
                    className="ml-1 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

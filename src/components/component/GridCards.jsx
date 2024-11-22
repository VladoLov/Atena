import { Dna } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import FlipCard from "./FlipCard";
import { FlipCardSmallScreen } from "./FlipCardSmallScreen";
import { flipCardData } from "@/lib/url";
import Image from "next/image";

function GridCards() {
  return (
    <div className="container mx-auto py-8 lg:pt-32 lg:mb-16 relative ">
      {/*   <div className="inset-1 z-0 absolute opacity-60 ">
        <Image
          src="/Genome-testing-2.jpeg"
          alt="background DNK image"
          fill
          objectFit="cover"
          objectPosition="center"
          className="overflow-visible "
        />
      </div> */}
      <div className="pb-24 text-lg">
        <h2 className="text-center pb-8 text-2xl font-semibold">Coming Soon</h2>
        <h3 className="px-4">
          Clinical NGS testing is launching soon at ATENA Genomics bringing
          advanced genetic insights across key health sectors. ATENA Genomics
          will provide specialized genetic sequencing in{" "}
          <span className="font-semibold">
            cancer genomics, hereditary disease screening, non-invasive prenatal
            assessments, drug-response profiling
          </span>
          , and{" "}
          <span className="font-semibold">infectious disease detection</span>,
          along with
          <spa className="font-semibold"> customized NGS solutions</spa>{" "}
          tailored for specific diagnostic and research needs. These
          next-generation sequencing services empower healthcare providers with
          accurate tools for precision medicine and reliable diagnostics. For
          information on availability or to explore how these services can
          support your clinical or research goals, please contact the ATENA
          Genomics team at info@atenagenomics.com or telnr.xxxxx.
        </h3>
      </div>
      <div className=" relative z-10 hidden lg:grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {flipCardData.map((card, index) => (
          <FlipCard
            key={index}
            /* image={card.image} */
            title={card.title}
            description={card.description}
            subtitle={card.subtitle}
            href={card.href}
            icon={card.icon}
          />
        ))}
      </div>
      <div className="lg:hidden relative z-20 grid grid-cols-1 px-4 sm:grid-cols-1 md:grid-cols-2 gap-4">
        {flipCardData.map((card, index) => (
          <FlipCardSmallScreen
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
            subtitle={card.subtitle}
            href={card.href}
          />
        ))}
      </div>
    </div>
  );
}

export default GridCards;

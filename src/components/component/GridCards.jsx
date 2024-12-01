import { Dna } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import FlipCard from "./FlipCard";
import { FlipCardSmallScreen } from "./FlipCardSmallScreen";
import { flipCardData } from "@/lib/url";
import Image from "next/image";
import { FeatureCard } from "@/newcomponents/FeatureCard";
import FlyonCard from "@/newcomponents/FlyonCard";
import PiereCard from "@/newcomponents/PiereCard";

function GridCards() {
  return (
    <div className="container mx-auto py-8 lg:pt-32 lg:mb-0 relative ">
      <div className=" relative z-10 hidden lg:grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-32">
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
      <div className="lg:hidden relative z-20 w-full pointer-events-auto  inline-flex px-4 md:grid-cols-2 gap-8 overflow-auto">
        {flipCardData.map((card, index) => (
          <PiereCard
            key={index}
            icon={card.icon}
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

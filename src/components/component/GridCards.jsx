import { Dna } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import FlipCard from "./FlipCard";
import { FlipCardSmallScreen } from "./FlipCardSmallScreen";
import { flipCardData } from "@/lib/url";

function GridCards() {
  return (
    <div className="container mx-auto py-8 lg:pt-32 lg:mt-16 lg:mb-16">
      <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {flipCardData.map((card, index) => (
          <FlipCard
            key={index}
            /* image={card.image} */
            title={card.title}
            description={card.description}
            subtitle={card.subtitle}
            href={card.href}
          />
        ))}
      </div>
      <div className="lg:hidden grid grid-cols-1 px-4 sm:grid-cols-1 md:grid-cols-2 gap-4">
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

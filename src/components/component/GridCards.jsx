"use client";
import FlipCard from "./FlipCard";

import { flipCardData } from "@/lib/url";

import PiereCard from "@/newcomponents/PiereCard";
import { useTranslation } from "react-i18next";

function GridCards() {
  const { t } = useTranslation();
  const localizedCardData = flipCardData.map((card) => ({
    ...card,
    title: t(`services.${card.key}.title`),
    description: t(`services.${card.key}.description`),
  }));
  return (
    <div className="container mx-auto py-8 lg:pt-32 lg:mb-0 relative ">
      <div className=" relative z-10 hidden lg:grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-32">
        {localizedCardData.map((card, index) => (
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
      <div className="lg:hidden relative z-20 w-full pointer-events-auto   inline-flex px-4 md:grid-cols-2 gap-8 overflow-auto">
        {localizedCardData.map((card, index) => (
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

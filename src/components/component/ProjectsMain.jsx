"use client";
/* 
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import FlipCard from "./MainCard";
import { useState, useEffect } from "react";
import { FlipCardSmallScreen } from "./FlipCardSmallScreen"; */

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import FlipCard from "./MainCard";
import { useState, useEffect } from "react";
import { FlipCardSmallScreen } from "./FlipCardSmallScreen";
import { flipCardData } from "@/lib/url";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { Dna } from "lucide-react";

export default function ResponsiveCircularCards() {
  /*   const [isLargeScreen, setIsLargeScreen] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []); */

  const calculatePosition = (index, totalCards) => {
    const radius = 370; // Increased radius to accommodate larger cards
    const angle = (index * 2 * Math.PI) / totalCards;
    const centerX = 580; // Adjusted center X to accommodate larger radius
    const centerY = 420; // Adjusted center Y to accommodate larger radius

    return {
      left: `${centerX + radius * Math.cos(angle)}px`,
      top: `${centerY + radius * Math.sin(angle)}px`,
    };
  };

  return (
    <div className="w-full  container mx-auto py-8 lg:pt-32 lg:mt-32 lg:mb-16 ">
      <div className="hidden lg:block  relative w-full max-w-[1100px] h-[900px] mx-auto  ">
        {flipCardData.map((card, index) => (
          <div
            key={index}
            className="absolute transform -translate-x-1/2 -translate-y-1/2"
            style={calculatePosition(index, flipCardData.length)}
          >
            <FlipCard
              image={card.image}
              title={card.title}
              description={card.description}
              subtitle={card.subtitle}
              href={card.href}
            />
          </div>
        ))}
        <div className="absolute top-1/2 left-[54%] transform -translate-x-1/2 -translate-y-1/2 w-[288px] h-[192px] ">
          <Card className="w-full h-full flex items-center justify-center bg-gradient-radial from-white to-white ring-0 border-none rounded-lg shadow-none">
            <CardContent className="flex flex-col space-y-2 justify-center items-center pt-4">
              <Dna className="animate-rotate-x w-10 h-10" viewBox="0 0 24 24" />
              <h2 className="text-2xl font-bold text-center">Services</h2>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="lg:hidden grid grid-cols-1 px-4 sm:grid-cols-2 md:grid-cols-3 gap-4">
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

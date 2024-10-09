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

const flipCardData = [
  {
    image: "/Reproductive-Health.jpeg",
    title: "Card Title 1",
    description: "This is a description for card 1.",
    subtitle: "Subtitle 1",
  },
  {
    image: "/Reproductive-Health.jpeg",
    title: "Card Title 2",
    description: "This is a description for card 2.",
    subtitle: "Subtitle 2",
  },
  {
    image: "/Reproductive-Health.jpeg",
    title: "Card Title 3",
    description: "This is a description for card 3.",
    subtitle: "Subtitle 3",
  },
  {
    image: "/Reproductive-Health.jpeg",
    title: "Card Title 4",
    description: "This is a description for card 4.",
    subtitle: "Subtitle 4",
  },
  {
    image: "/Reproductive-Health.jpeg",
    title: "Card Title 5",
    description: "This is a description for card 5.",
    subtitle: "Subtitle 5",
  },
  {
    image: "/Reproductive-Health.jpeg",
    title: "Card Title 6",
    description: "This is a description for card 6.",
    subtitle: "Subtitle 6",
  },
  {
    image: "/Reproductive-Health.jpeg",
    title: "Card Title 7",
    description: "This is a description for card 7.",
    subtitle: "Subtitle 7",
  },
  // Add as many cards as needed
];
/* 
export default function ResponsiveCircularCards() {
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // Adjust this breakpoint as needed
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 lg:mt-16 lg:mb-32">
      {isLargeScreen ? (
        <div className="relative w-full max-w-[900px] h-[800px] mx-auto">
          {flipCardData.map((card, index) => (
            <div
              key={index}
              className="absolute w-[170px] h-[170px] transform -translate-x-1/2 -translate-y-1/2"
              style={{
                top: `${50 + 40 * Math.sin((index * (2 * Math.PI)) / 7)}%`,
                left: `${50 + 40 * Math.cos((index * (2 * Math.PI)) / 7)}%`,
              }}
            >
              <FlipCard
                image={card.image}
                title={card.title}
                description={card.description}
                subtitle={card.subtitle}
              />
            </div>
          ))}
          <div className="absolute top-[57%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] h-[250px]">
            <Card className="w-full h-full flex items-center justify-center">
              <CardContent>
                <h2 className="text-xl font-bold text-center">Services</h2>
              </CardContent>
            </Card>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="col-span-full mb-4">
            <Card className="w-full max-w-[200px] h-[200px] mx-auto flex items-center justify-center">
              <CardContent>
                <h2 className="text-xl font-bold text-center">Services</h2>
              </CardContent>
            </Card>
          </div>
          {flipCardData.map((card, index) => (
            <div
              key={index}
              className="w-full flex items-center justify-center"
            >
              <FlipCard
                image={card.image}
                title={card.title}
                description={card.description}
                subtitle={card.subtitle}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
 */

export default function ResponsiveCircularCards() {
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const calculatePosition = (index, totalCards) => {
    const radius = 400; // Increased radius to accommodate larger cards
    const angle = (index * 2 * Math.PI) / totalCards;
    const centerX = 550; // Adjusted center X to accommodate larger radius
    const centerY = 450; // Adjusted center Y to accommodate larger radius

    return {
      left: `${centerX + radius * Math.cos(angle)}px`,
      top: `${centerY + radius * Math.sin(angle)}px`,
    };
  };

  return (
    <div className="container mx-auto px-4 py-8 lg:mt-16 lg:mb-32">
      {isLargeScreen ? (
        <div className="relative w-full max-w-[1100px] h-[900px] mx-auto">
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
              />
            </div>
          ))}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[220px]">
            <Card className="w-full h-full flex items-center justify-center">
              <CardContent>
                <h2 className="text-xl font-bold text-center">Services</h2>
              </CardContent>
            </Card>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="col-span-full mb-4">
            <Card className="w-full max-w-[200px] h-[200px] mx-auto flex items-center justify-center">
              <CardContent>
                <h2 className="text-xl font-bold text-center">Services</h2>
              </CardContent>
            </Card>
          </div>
          <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {flipCardData.map((card, index) => (
              <FlipCardSmallScreen
                key={index}
                image={card.image}
                title={card.title}
                description={card.description}
                subtitle={card.subtitle}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

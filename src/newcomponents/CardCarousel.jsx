"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PiereCard from "./PiereCard";
import { Button } from "@/components/ui/button";

export function CardCarousel({ flipCardData }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCards(3);
      } else if (window.innerWidth >= 768) {
        setVisibleCards(3);
      } else {
        setVisibleCards(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flipCardData.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + flipCardData.length) % flipCardData.length
    );
  };

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
        }}
      >
        {flipCardData.map((card, index) => (
          <div
            key={index}
            className={`w-full flex-shrink-0 px-4 ${
              visibleCards === 3
                ? "lg:w-1/3"
                : visibleCards === 2
                ? "md:w-1/2"
                : ""
            }`}
          >
            <PiereCard {...card} />
          </div>
        ))}
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10"
        onClick={nextSlide}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    image: "/placeholder.svg?height=1080&width=1920",
    title: "Discover Nature",
  },
  { image: "/placeholder.svg?height=1080&width=1920", title: "Explore Cities" },
  {
    image: "/placeholder.svg?height=1080&width=1920",
    title: "Experience Culture",
  },
  {
    image: "/placeholder.svg?height=1080&width=1920",
    title: "Embrace Adventure",
  },
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="relative w-full h-[50vh] group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
        className="w-full h-full bg-center bg-cover duration-500"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-4xl font-bold text-white bg-black bg-opacity-50 p-4 rounded">
            {slides[currentIndex].title}
          </h2>
        </div>
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-black/30"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-black/30"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`text-2xl cursor-pointer ${
              currentIndex === slideIndex ? "text-blue-500" : "text-gray-300"
            }`}
          >
            <Button
              variant="ghost"
              size="sm"
              className={`w-3 h-3 rounded-full ${
                currentIndex === slideIndex ? "bg-white" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${slideIndex + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

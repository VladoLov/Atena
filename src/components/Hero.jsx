"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { RadiationIcon } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  const images = [
    "/image1.png",
    "/image2.png",
    "/Oncology.png",
    // Add more image paths if needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Change background every 10 seconds

    return () => clearInterval(intervalId); // Clean up interval on component unmount
  }, [images.length]);

  return (
    <section className="w-full  bg-crimson-50 z-[-2]">
      <div
        className="z-[-1] relative bg-cover bg-center h-screen md:y-6 xl:my-12 shadow-lg rounded-md overflow-hidden bg-crimson-50"
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
          height: "50vh",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 "></div>{" "}
        {/* Overlay for darkening */}
        <div className="relative  px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 text-white">
          <div className="grid grid-cols-1 gap-6F lg:grid-cols-1 lg:gap-12 xl:grid-cols-1">
            {/* Text Section */}
            <div className="flex flex-col justify-center space-y-4 px-5">
              <div className="space-y-2 mx-auto text-center">
                <h1 className="text-xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Revolutionizing Healthcare with Cutting-Edge Technology
                </h1>
                <p className="max-w-screen-2xl md:text-xl py-6">
                  Discover the future of medical care with our innovative
                  platform that connects patients with top specialists across a
                  wide range of specialties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

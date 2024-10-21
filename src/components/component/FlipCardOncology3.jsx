"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "../ui/button";
import { useState } from "react";

export default function FlipCardOncology3({
  image,
  name,
  description,
  subtitle,
  href,
  className,
  ...props
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "h-64 max-w-full relative overflow-hidden rounded-2xl", // Apply border-radius here
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "relative h-full w-full transition-all duration-700 ease-in-out will-change-transform", // Add will-change for better animation
          isHovered ? "translate-y-[-100%]" : ""
        )}
      >
        {/* Front */}
        <div className="absolute h-full w-full flex items-center justify-center">
          <Image
            src={image}
            alt="image"
            height={800}
            width={600}
            className="h-full w-full object-cover" // Removed border-radius here
          />
        </div>

        {/* Back */}
        <div
          className="absolute h-full w-full top-full overflow-hidden" // No border-radius here
        >
          <div className="w-full h-full ">
            <Image
              src={image}
              alt={name}
              width={1800}
              height={800}
              className="object-cover object-center"
            />
          </div>
          <div className="absolute w-full h-full inset-0 bg-black bg-opacity-80">
            <div className="flex min-h-full flex-col gap-2 justify-between">
              <div className="p-6">
                <h1 className="text-2xl font-bold text-white">{name}</h1>
                <p className="mt-1 border-t  border-t-platinum-200 py-4 text-lg font-medium leading-normal text-platinum-100">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black/80 absolute w-full bottom-0 rounded-b-2xl flex text-xl font-bold text-white overflow-hidden">
        <div
          className="h-full w-full bg-black"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Button size="lg" className="w-full h-full text-lg py-4 text-center">
            {name}
          </Button>
        </div>
      </div>
    </div>
  );
}

"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { useState } from "react";

export default function FlipCardOncology({
  image,
  name,
  description,
  subtitle,
  href,
  rotate = "y",
  className,
  ...props
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  const rotationClass = {
    x: "rotateX",
    y: "rotateY",
  };
  const rotateAxis = rotationClass[rotate];

  return (
    <div
      className={cn("h-64 max-w-full [perspective:1000px]", className)}
      {...props}
    >
      <div
        className={cn(
          "relative h-full rounded-[30px] transition-all duration-500 [transform-style:preserve-3d]",
          isFlipped ? `[transform:${rotateAxis}(180deg)]` : ""
        )}
      >
        {/* Front */}
        <div className="absolute h-full w-full flex items-center justify-center [backface-visibility:hidden] ">
          <Image
            src={image}
            alt="image"
            height={200}
            width={200}
            className="h-full w-full rounded-2xl object-cover shadow-2xl shadow-black/40"
          />
          <div className="bg-black/80  rounded-md absolute start-2/4 -translate-x-1/2 text-xl font-bold text-white overflow-hidden ">
            <div
              className="h-full w-full  bg-black"
              onMouseEnter={() => setIsFlipped(true)}
              onMouseLeave={() => setIsFlipped(false)}
            >
              <Button
                size="lg"
                className="w-full z-5 h-full text-lg py-4 text-center"
              >
                {name}
              </Button>
            </div>
          </div>
        </div>

        {/* Back */}
        <div
          className={cn(
            "absolute h-full w-full rounded-[30px] text-platinum-200 [backface-visibility:hidden] overflow-hidden",
            `[transform:${rotateAxis}(180deg)]`
          )}
        >
          <div className="w-full h-full bg-black bg-opacity-50">
            <Image
              src={image}
              alt={name}
              width={1800}
              height={800}
              className="object-cover object-center bg-black bg-opacity-50"
            />
          </div>
          <div className="absolute w-full h-full inset-0 bg-black bg-opacity-50">
            <div className="flex min-h-full flex-col gap-2 justify-between">
              <div className="p-6">
                <h1 className="text-2xl font-bold text-white">{name}</h1>
                <p className="mt-1 border-t border-t-platinum-200 py-4 text-lg font-medium leading-normal text-platinum-100">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

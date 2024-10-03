import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

export const DnaComponent = () => {
  return (
    <section className="w-full container-2xl">
      <div className="relative w-full h-[60vh] bg-platinum-200">
        <div className="w-full h-full overflow-hidden absolute top-0  bg-cover">
          <Image
            src="/pikaso_embed.png"
            width={1640}
            height={1024}
            alt="dna genome"
            /*  objectFit="cover"
            className="object-cover" */
          />
        </div>
        <div className="absolute w-2/3 flex items-left flex-col justify-center ml-4 lg:mg-12 lg:mt-18 mt-8 mx-auto gap-4">
          <h1 className="text-2xl lg:text-6xl font-bold">
            Advance <span className="text-crimson-500">Genome</span> Testing
            Services
          </h1>
          <p className="text-lg text-platinum-600">
            Explore your genetic heritage{" "}
          </p>
          <Button className="w-fit">Explore DNA</Button>
        </div>
        {/* <div className="absolute bottom-0 right-0 flex justify-center">
          <h3>Hello</h3>
        </div> */}
      </div>
    </section>
  );
};

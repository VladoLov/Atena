import { Separator } from "@radix-ui/react-separator";
import Image from "next/image";
import React from "react";

const ImageWithText = () => {
  return (
    <div className="flex flex-col  justify-center items-center w-full">
      <main className="w-full ">
        {/* Hero Section */}
        <section className="min-w-max z-[-1] relative h-[300px] md:h-[400px] lg:h-[500px]">
          <Image
            src="/Oncology.png"
            alt="DNA double helix"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-white bg-opacity-50 flex items-center justify-center">
            <div className="flex flex-col justify-center gap-8 max-w-screen-xl">
              <h2 className="text-black text-4xl md:text-5xl lg:text-5xl font-bold text-center flex items-center justify-center">
                Identify genetic alterations in tumors for customized and
                targeted treatment strategies.
              </h2>
              <Separator
                decorative={true}
                className="bg-white  data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px my-[15px] overflow-x-auto"
                style={{ height: "5px" }}
              />
              <div className="border flex-grow w-full"></div>

              <p className="mx-auto max-w-screen-lg lg:text-2xl ">
                <span className="">
                  <strong>Next-generation sequencing (NGS) in oncology </strong>
                </span>
                identifies key genetic mutations and alterations that drive
                tumor growth. NGS testing enables personalize and precise
                treatment strategies by offering detailed insights in cancer
                genetics enabling application of precision medicine to enhance
                treatment effectiveness in cancer care.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ImageWithText;

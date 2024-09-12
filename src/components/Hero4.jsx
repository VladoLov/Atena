"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

function Hero4() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex items-start w-full overflow-hidden">
          <div className="embla__slide flex w-[30vh]">
            {" "}
            <Image
              src="/Oncology.png"
              alt="Dna image"
              width={300}
              height={500}
              style={{
                width: "100%vh",
                height: "auto",
              }}
            />
          </div>
          <div className="embla__slide flex w-[30vh]">
            <Image src="/image2.png" alt="Dna image" width={300} height={300} />
          </div>
          <div className="embla__slide flex w-[100vh]">
            <Image src="/image1.png" alt="Dna image" width={300} height={300} />
          </div>
        </div>
      </div>
      <button
        className="embla__prev gap-5 items-center justify-center text-center"
        onClick={scrollPrev}
      >
        Prev
      </button>
      <button className="embla__next" onClick={scrollNext}>
        Next
      </button>
    </div>
  );
}

export default Hero4;

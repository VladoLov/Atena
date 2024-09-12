"use client";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { RadiationIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import useEmblaCarousel from "embla-carousel-react/components/useEmblaCarousel";

function Hero3() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  const [emblaRef] = useEmblaCarousel({ loop: true });
  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xs"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        <CarouselItem>
          <div className="p-4 bg-muted rounded-md">
            <Link href="/oncology" className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-4">
                <RadiationIcon className="w-12 h-12" />
                <div>
                  <h3 className="text-xl font-bold">Oncology</h3>
                  <p className="text-muted-foreground">
                    Comprehensive cancer care from leading specialists.
                  </p>
                </div>
              </div>
              <div>
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
            </Link>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="p-4 bg-muted rounded-md">
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-4">
                <RadiationIcon className="w-12 h-12" />
                <div>
                  <h3 className="text-xl font-bold">Neurology</h3>
                  <p className="text-muted-foreground">
                    Expert care for neurological conditions and disorders
                  </p>
                </div>
              </div>
              <div>
                <Image
                  src="/image2.png"
                  alt="Dna image"
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="p-4 bg-muted rounded-md">
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-4">
                <RadiationIcon className="w-12 h-12" />
                <div>
                  <h3 className="text-xl font-bold">Cardiology</h3>
                  <p className="text-muted-foreground">
                    Cutting-edge treatments for heart and vascular conditions.
                  </p>
                </div>
              </div>
              <div>
                <Image
                  src="/image1.png"
                  alt="Dna image"
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default Hero3;

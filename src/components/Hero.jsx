import Image from "next/image";
import { Button } from "./ui/button";

function Hero() {
  return (
    <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 max-w-screen-xl">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24 flex items-center">
        <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h2 className="text-2xl text-crimson-500 font-bold text-rich-black md:text-3xl">
            Long Read Sequencing
          </h2>

          <p className="hidden text-black md:mt-4 md:block">
            Genomic, transcriptomic and epigenetic characterization with high
            precision
          </p>

          <div className="mt-4 md:mt-8">
            <Button
              size="lg"
              className="inline-block  bg-crimson-400     font-medium text-black transition hover:bg-crimson-500 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Get Started Today
            </Button>
          </div>
        </div>
      </div>

      <Image
        alt="Hero image"
        src="/hero-image.png"
        className="h-56 w-full object-cover sm:h-full"
        width="500"
        height="500"
      />
    </section>
  );
}

export default Hero;

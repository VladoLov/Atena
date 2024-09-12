/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Opqt6RZdAFG
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function Component() {
  return (
    <section className="bg-white">
      <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2 ">
          <div className="flex flex-col justify-center space-y-4 px-5">
            <div className="space-y-2 mx-auto text-center ">
              <h1 className=" text-xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Revolutionizing Healthcare with Cutting-Edge Technology
              </h1>
              <p className="w-fit lg:max-w-[600px] text-muted-foreground md:text-xl">
                Discover the future of medical care with our innovative platform
                that connects patients with top specialists across a wide range
                of specialties.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 px-6 ">
            <Carousel
              opts={{
                align: "start",
                loop: true,
                autoplay: true,
                autoplayInterval: 3000,
              }}
              className="w-full max-h-max"
            >
              <CarouselContent>
                <CarouselItem>
                  <div className="p-4 bg-muted rounded-md">
                    <Link
                      href="/oncology"
                      className="flex flex-col items-center gap-4"
                    >
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
                            Expert care for neurological conditions and
                            disorders
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
                            Cutting-edge treatments for heart and vascular
                            conditions.
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
          </div>
        </div>
      </div>
    </section>
  );
}

function BrainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
      <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
      <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
      <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
      <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
      <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
      <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
      <path d="M6 18a4 4 0 0 1-1.967-.516" />
      <path d="M19.967 17.484A4 4 0 0 1 18 18" />
    </svg>
  );
}

function HeartPulseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
    </svg>
  );
}

function RadiationIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 12h0.01" />
      <path d="M7.5 4.2c-.3-.5-.9-.7-1.3-.4C3.9 5.5 2.3 8.1 2 11c-.1.5.4 1 1 1h5c0-1.5.8-2.8 2-3.4-1.1-1.9-2-3.5-2.5-4.4z" />
      <path d="M21 12c.6 0 1-.4 1-1-.3-2.9-1.8-5.5-4.1-7.1-.4-.3-1.1-.2-1.3.3-.6.9-1.5 2.5-2.6 4.3 1.2.7 2 2 2 3.5h5z" />
      <path d="M7.5 19.8c-.3.5-.1 1.1.4 1.3 2.6 1.2 5.6 1.2 8.2 0 .5-.2.7-.8.4-1.3-.5-.9-1.4-2.5-2.5-4.3-1.2.7-2.8.7-4 0-1.1 1.8-2 3.4-2.5 4.3z" />
    </svg>
  );
}

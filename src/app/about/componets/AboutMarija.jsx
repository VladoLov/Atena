import Image from "next/image";

export default function AboutMarija() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-12 items-start">
          {/*    <div className="relative flex justify-center items-start h-96 md:h-48">
            <Image
              src="/Marija.jpg?height=500&width=500"
              alt="Profile"
              width={500}
              height={500}
              objectFit="cover"
              className="rounded-lg shadow-lg mt-16"
            />
          </div> */}
          <div className="mx-auto max-w-screen-lg">
            <h2 className="text-4xl md:text-6xl font-bold text-lightBlue-950 text-center drop-shadow-lg">
              Leadership
            </h2>
            <div className="justify-center items-center flex">
              <Image
                src="/Marija.jpg?height=200&width=200"
                alt="Profile"
                width={200}
                height={200}
                objectFit="cover"
                className="rounded-full shadow-lg my-8  "
              />
            </div>

            <div className="prose prose-lg text-platinum-950 max-h-fit  px-6 font-poppins">
              <p className="pb-2 ">
                Dr. Marija Vujadinović, Founder and CTO of ATENA Genomics,
                brings over 15 years of expertise in molecular biotechnology,
                vaccine development, and GMP manufacturing. She focuses on
                advancing precision genetic testing to improve healthcare in the
                Balkans. Marija holds a PhD from the University of Amsterdam,
                where she specialized in adenoviral vectored vaccines, and dual
                MSc degrees from Vrije Universiteit Amsterdam, combining
                molecular sciences with leadership.
              </p>
              <p className="pb-2 ">
                At Janssen Pharmaceuticals, she played a key role in
                transitioning vaccines, including the Janssen COVID-19 vaccine,
                from research to clinical application. Her expertise spans
                vaccine design, GMP manufacturing, and regulatory compliance.
                Earlier roles at the University of Utah and VU Medical Center
                strengthened her skills in infectious disease research and
                molecular diagnostics.
              </p>
              <p className="pb-2 ">
                Marija&apos;s work includes patents and publications in HPV and
                adenoviral technology. With additional certifications from
                Harvard in Genetic Testing and Cancer Genomics, she is committed
                to transforming healthcare in the Balkans, one genome at a time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

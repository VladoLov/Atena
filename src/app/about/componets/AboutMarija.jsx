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

            <div className="prose prose-lg text-gray-500 max-h-fit  px-6">
              <p className="pb-2 ">
                Dr. Marija Vujadinović has over 15 years of experience in
                vaccine development, GMP manufacturing, and molecular
                biotechnology. As the Founder, Director, and Chief Technology
                Officer of ATENA Genomics, she is focused on advancing precision
                genetic testing to improve healthcare and diagnostics in the
                Balkans.
              </p>
              <p className="pb-2 ">
                Marija started her education with a BSc in Life Sciences
                Molecular Cell Biology and followed this with dual MSc degrees
                in Biomolecular Sciences Cell Biology and Management, Policy
                Analysis & Entrepreneurship from Vrije Universiteit Amsterdam,
                combining the scientific knowledge with leadership and strategy
                skills. Working at Janssen Vaccines and Prevention, she earned
                her doctorate at the Medical Faculty of the University of
                Amsterdam (AMC-UvA), focusing on developing and improving
                adenoviral vectored vaccines.
              </p>
              <p className="pb-2 ">
                While at Janssen Pharmaceutical Companies of Johnson & Johnson,
                Marija played an important role in moving vaccine candidates
                from early research stages to clinical application. In her role
                as a Scientist in Viral Vaccines, she worked on designing vector
                vaccines and improving their manufacturability, helping vaccines
                move smoothly from the lab to large-scale production. As a Drug
                Substance Technical Integrator in Vaccine Process and Analytical
                Development, she managed GMP manufacturing, technical transfers,
                and cross-team collaborations to keep projects on track and meet
                regulatory requirements. Her work contributed to advancing
                several vaccine candidates, including the Janssen COVID-19
                vaccine.
              </p>
              <p className="pb-2 ">
                Prior to her work at Janssen, Dr. Vujadinović advanced her
                technical expertise as a Lab Technician at the University of
                Utah&apos;s Department of Pathology, conducting research on
                Borrelia burgdorferi. At VU University Medical Center (VUMC) in
                Medical Microbiology and Infection Control, she further
                developed her skills in molecular diagnostics and data analysis,
                building a strong foundation in molecular research and
                infectious disease control.
              </p>
              <p className="pb-2 ">
                Marija has published her research in scientific journals and
                holds patents for her contributions to HPV, adenoviral
                technology and vaccine innovation. Earlier roles at the
                University of Utah and VU Medical Center allowed her to build
                expertise in infectious diseases and molecular diagnostics.
                Further development includes certifications from Harvard in
                Genetic Testing, Sequencing Technologies, and Cancer Genomics,
                which have deepened her focus on precision oncology and genetic
                analysis.
              </p>
              <p className="pb-2 ">
                Marija&apos;s personal mission is to transform healthcare in the
                Balkans, one genome at a time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

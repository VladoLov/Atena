import Image from "next/image";

export default function AboutMarija() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="relative flex justify-center items-start h-96 md:h-48">
            <Image
              src="/Marija.jpg?height=500&width=500"
              alt="Profile"
              width={500}
              height={500}
              objectFit="cover"
              className="rounded-lg shadow-lg mt-16"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Me</h2>
            <div className="prose prose-lg text-gray-500 max-h-[1100px]  pr-4">
              <p className="pb-2">
                Dr. Marija Vujadinović is an experienced specialist in molecular
                biotechnology, with over 15 years of expertise in vaccine
                development, vaccine GMP manufacturing, and molecular
                techniques, built on extensive research experience in academia
                and the pharmaceutical industry. As the Founder, Director, and
                Chief Technology Officer of ATENA Genomics, Dr. Marija
                Vujadinović is advancing next-generation sequencing (NGS)
                technologies to improve oncology, hereditary disease screening,
                prenatal testing, pharmacogenomics, and infectious disease
                diagnostics across the Balkans.
              </p>
              <p className="pb-2">
                Her journey into advanced biotechnology began with a PhD in
                Vaccine Development from the Medical Faculty at the University
                of Amsterdam (AMC-UVA) and Janssen Vaccines and Prevention,
                where she specialized in designing and optimizing adenoviral
                vectored vaccines. This experience shaped her focus on
                developing innovative vaccine technologies to enhance immune
                response. Dr. Vujadinović&apos;s expertise is further supported
                by dual MSc degrees in Biomolecular Sciences Cell Biology and
                Management, Policy Analysis & Entrepreneurship from Vrije
                Universiteit Amsterdam. Her roots in biotechnology trace back to
                a BSc in Life Sciences Molecular Cell Biology, providing a solid
                technical foundation. Resulting in a blend of science and
                strategy that equips her to translate complex research into
                effective healthcare solutions.
              </p>
              <p className="pb-2">
                At Janssen Pharmaceutical Companies of Johnson & Johnson, Dr.
                Vujadinović played a key role in advancing vaccine candidates
                from early development to clinical application. As a Drug
                Substance Technical Integrator in Vaccine Process and Analytical
                Development, she coordinated GMP manufacturing and technical
                transfers, working closely with cross-functional teams to ensure
                smooth project execution. Her leadership facilitated successful
                project delivery, strategic risk management, and adherence to
                strict GMP standards. As a Scientist in Viral Vaccines at
                Janssen Vaccine and Prevention, she led a team focused on
                optimizing the manufacturability and early-stage development of
                adenoviral vectors. Her responsibilities ranged from study
                design to data analysis, enabling vaccine candidates to
                transition effectively from laboratory development to
                large-scale production. Dr. Vujadinović has also contributed to
                patents and published research on HPV and adenoviral platforms.
              </p>
              <p className="pb-2">
                Prior to her work at Janssen, Dr. Vujadinović advanced her
                technical expertise as a Lab Technician at the University of
                Utah&apos;s Department of Pathology, conducting research on
                Borrelia burgdorferi. At VU University Medical Center (VUMC) in
                Medical Microbiology and Infection Control, she further
                developed her skills in molecular diagnostics and data analysis,
                building a strong foundation in molecular research and
                infectious disease control.
              </p>
              <p className="pb-2">
                Dr. Vujadinović&apos;s expertise is supported by prestigious
                certifications, including Genetic Testing and Sequencing
                Technologies and Cancer Genomics and Precision Oncology from
                Harvard. Her work combines creativity, technical precision, and
                a strong commitment to advancing biotechnology for practical,
                real-world applications, continually raising standards molecular
                biotechnology.
              </p>
              <p className="pb-2">
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

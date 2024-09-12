import Image from "next/image";
import Link from "next/link";

function ArticleWholeGenomeSequencing() {
  return (
    <section className="py-12 bg-gray-50">
      <article className="overflow-hidden  bg-cover bg-center">
        <div className="relative w-full h-[40vh] rounded-md overflow-hidden shadow-lg">
          <div className="none">
            <Image
              src="/whole-genome-sequencing.jpeg"
              alt="whole genome sequencing"
              layout="fill"
              objectFit="cover"
            />
            {/* Overlay text on the image */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="bg-black bg-opacity-50 text-white p-6 rounded-md">
                <h1 className="text-2xl text-center mb-6">
                  Whole Genome Sequencing (WGS)
                </h1>
                <p className="text-center">
                  Whole Genome Sequencing (WGS) is a laboratory process that
                  involves determining the complete DNA sequence of an
                  organism&apos;s genome at a single time. This includes
                  sequencing all of an individual&apos;s genetic material, both
                  coding (genes) and non-coding regions. WGS provides
                  comprehensive data about the genetic blueprint of an organism.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6  py-6 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">
              Whole Genome Sequencing (WGS)
            </h2>
            <p className="mt-4 text-gray-600 md:text-lg">
              {" "}
              Whole Genome Sequencing (WGS) is a laboratory process that
              involves determining the complete DNA sequence of an
              organism&apos;s genome at a single time. This includes sequencing
              all of an individual&apos;s genetic material, both coding (genes)
              and non-coding regions. WGS provides comprehensive data about the
              genetic blueprint of an organism.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 ">
            <Link href="/services/whole-genome-sequencing">
              <div className="p-6 bg-white shadow-lg rounded-lg  flex hover:bg-platinum-50">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Process
                  </h3>
                  <p className="mt-4 text-gray-600">
                    <strong>DNA Extraction:</strong> DNA is first extracted from
                    a sample, such as blood, saliva, or tissue.
                    <strong>Library Preparation:</strong> The extracted DNA is
                    fragmented into smaller pieces, and special adapters are
                    attached to the ends of these fragments to prepare them for
                    sequencing.
                    <strong>Sequencing:</strong> Modern sequencing technologies
                    (e.g., Illumina, PacBio, or Oxford Nanopore) read the
                    sequence of DNA bases (adenine, guanine, cytosine, and
                    thymine) from the fragments.
                    <strong>Assembly and Alignment:</strong> The short sequences
                    produced are aligned and assembled computationally to
                    reconstruct the entire genome.
                  </p>
                </div>
                <div>
                  <Image
                    src="/wgs.jpeg"
                    alt="Whole Genome Sequencing"
                    width={300}
                    height={300}
                  />
                </div>
              </div>
            </Link>
            <div className="p-6 bg-white shadow-lg rounded-lg flex">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Applications
                </h3>
                <p className="mt-4 text-gray-600">
                  <strong>Personalized Medicine:</strong> WGS can help identify
                  genetic variants that influence disease susceptibility, drug
                  response, and other traits, enabling tailored treatments.
                  <strong>Infectious Disease Surveillance:</strong> Used to
                  track pathogens like viruses and bacteria, especially in
                  outbreaks (e.g., during the COVID-19 pandemic).
                  <strong>Cancer Genomics:</strong> WGS identifies mutations in
                  cancer cells, helping in precision oncology to target
                  treatments based on the patient&apos;s unique genetic makeup.
                  <strong>Evolutionary Biology:</strong> WGS enables the study
                  of the evolutionary history of species, allowing researchers
                  to track genetic changes over time.
                  <strong>Agriculture and Livestock:</strong> It is used for
                  breeding programs, improving disease resistance, and
                  increasing productivity.
                </p>
              </div>
              <div>
                <Image
                  src="/wes.jpeg"
                  alt="Whole Genome Sequencing"
                  width={300}
                  height={300}
                />
              </div>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg flex">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Benefits
                </h3>
                <p className="mt-4 text-gray-600">
                  <strong>Comprehensive Data:</strong> WGS provides the most
                  complete picture of an organism&apos;s genome, capturing both
                  known and novel variants.
                  <strong>Disease Diagnosis:</strong> It helps in diagnosing
                  genetic disorders by identifying even rare mutations that
                  other methods might miss.
                  <strong>Research Advancement:</strong> WGS facilitates
                  advances in genetics and genomics by uncovering the molecular
                  basis of various traits and diseases.
                </p>
              </div>
              <div>
                <Image
                  src="/ts.jpeg"
                  alt="Whole Genome Sequencing"
                  width={300}
                  height={300}
                />
              </div>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg flex">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Challenges
                </h3>
                <p className="mt-4 text-gray-600">
                  <strong>Data Volume:</strong> WGS generates a large amount of
                  data, requiring significant computational resources for
                  storage, analysis, and interpretation.
                  <strong>Interpretation:</strong> Not all identified genetic
                  variants have known clinical significance, so interpreting
                  results can be complex.
                  <strong>Cost:</strong> Although costs have significantly
                  decreased, WGS remains more expensive than other targeted
                  sequencing methods.
                </p>
              </div>
              <div>
                <Image
                  src="/ms.jpeg"
                  alt="Whole Genome Sequencing"
                  width={300}
                  height={300}
                />
              </div>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg flex">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  How WGS Differs from Other Sequencing Methods
                </h3>
                <p className="mt-4 text-gray-600">
                  <strong>Targeted Sequencing:</strong> Focuses on specific
                  regions of the genome, like the exome (protein-coding genes).
                  WGS covers the entire genome, including regulatory regions and
                  non-coding DNA.
                  <strong>Genotyping:</strong> Detects predefined genetic
                  variants; WGS discovers both known and novel variants across
                  the entire genome.
                  <strong>RNA Sequencing (RNA-Seq):</strong> Focuses on
                  sequencing RNA to understand gene expression, while WGS
                  sequences the complete DNA genome.
                  <p>
                    WGS has the potential to revolutionize healthcare by
                    enabling more personalized and precise treatments, while
                    also providing insights into fundamental biological
                    processes.
                  </p>
                </p>
              </div>
              <div>
                <Image
                  src="/ms.jpeg"
                  alt="Whole Genome Sequencing"
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default ArticleWholeGenomeSequencing;

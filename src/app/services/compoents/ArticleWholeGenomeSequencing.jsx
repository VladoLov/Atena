import Image from "next/image";

function ArticleWholeGenomeSequencing() {
  return (
    <article className="overflow-hidden py-12  bg-gray-50 ">
      <div className="container mx-auto px-6 grid grid-cols-1  md:grid-cols-2 max-w-screen-xl gap-5 ">
        <div className="flex justify-center items-center flex-col col-span-2 md:col-span-1">
          <h1 className="text-2xl text-crimson-500 text-center mb-6">
            Whole Genome Sequencing (WGS)
          </h1>
          <p>
            Whole Genome Sequencing (WGS) is a laboratory process that involves
            determining the complete DNA sequence of an organism&apos;s genome
            at a single time. This includes sequencing all of an
            individual&apos;s genetic material, both coding (genes) and
            non-coding regions. WGS provides comprehensive data about the
            genetic blueprint of an organism, which can be used for various
            applications in research, medicine, and evolutionary biology.
          </p>
        </div>
        <div className="flex justify-center items-center col-span-2 md:col-span-1">
          <Image
            src="/whole-genome-sequencing.jpeg"
            alt="whole genome sequencing"
            width={300}
            height={300}
          />
        </div>
        <div className="col-span-2 mt-6 md:mt-9 lg:mt-12 py-6">
          <div className="flex justify-center items-center">
            <h2 className="text-2xl pb-6">
              Key Aspects of Whole Genome Sequencing
            </h2>
          </div>
          <div className="flex flex-col gap-2 px-4">
            <h3 className="text-xl pt-6 pb-2">Process</h3>
            <ul className="list-disc tracking-wide leading-6">
              <li>
                <strong>DNA Extraction:</strong> DNA is first extracted from a
                sample, such as blood, saliva, or tissue.
              </li>
              <li>
                <strong>Library Preparation:</strong> The extracted DNA is
                fragmented into smaller pieces, and special adapters are
                attached to the ends of these fragments to prepare them for
                sequencing.
              </li>
              <li>
                <strong>Sequencing:</strong> Modern sequencing technologies
                (e.g., Illumina, PacBio, or Oxford Nanopore) read the sequence
                of DNA bases (adenine, guanine, cytosine, and thymine) from the
                fragments.
              </li>
              <li>
                <strong>Assembly and Alignment:</strong> The short sequences
                produced are aligned and assembled computationally to
                reconstruct the entire genome.
              </li>
            </ul>

            <h3 className="text-xl py-1">Applications</h3>
            <ul className="list-disc tracking-wide leading-6 ">
              <li>
                <strong>Personalized Medicine:</strong> WGS can help identify
                genetic variants that influence disease susceptibility, drug
                response, and other traits, enabling tailored treatments.
              </li>
              <li>
                <strong>Infectious Disease Surveillance:</strong> Used to track
                pathogens like viruses and bacteria, especially in outbreaks
                (e.g., during the COVID-19 pandemic).
              </li>
              <li>
                <strong>Cancer Genomics:</strong> WGS identifies mutations in
                cancer cells, helping in precision oncology to target treatments
                based on the patient&apos;s unique genetic makeup.
              </li>
              <li>
                <strong>Evolutionary Biology:</strong> WGS enables the study of
                the evolutionary history of species, allowing researchers to
                track genetic changes over time.
              </li>
              <li>
                <strong>Agriculture and Livestock:</strong> It is used for
                breeding programs, improving disease resistance, and increasing
                productivity.
              </li>
            </ul>

            <h3 className="text-xl py-1">Benefits</h3>
            <ul className="list-disc tracking-wide leading-6">
              <li>
                <strong>Comprehensive Data:</strong> WGS provides the most
                complete picture of an organism&apos;s genome, capturing both
                known and novel variants.
              </li>
              <li>
                <strong>Disease Diagnosis:</strong> It helps in diagnosing
                genetic disorders by identifying even rare mutations that other
                methods might miss.
              </li>
              <li>
                <strong>Research Advancement:</strong> WGS facilitates advances
                in genetics and genomics by uncovering the molecular basis of
                various traits and diseases.
              </li>
            </ul>

            <h3 className="text-xl py-1">Challenges</h3>
            <ul className="list-disc tracking-wide leading-6">
              <li>
                <strong>Data Volume:</strong> WGS generates a large amount of
                data, requiring significant computational resources for storage,
                analysis, and interpretation.
              </li>
              <li>
                <strong>Interpretation:</strong> Not all identified genetic
                variants have known clinical significance, so interpreting
                results can be complex.
              </li>
              <li>
                <strong>Cost:</strong> Although costs have significantly
                decreased, WGS remains more expensive than other targeted
                sequencing methods.
              </li>
            </ul>

            <h3 className="text-xl py-1">
              How WGS Differs from Other Sequencing Methods
            </h3>
            <ul className="list-disc tracking-wide leading-6">
              <li>
                <strong>Targeted Sequencing:</strong> Focuses on specific
                regions of the genome, like the exome (protein-coding genes).
                WGS covers the entire genome, including regulatory regions and
                non-coding DNA.
              </li>
              <li>
                <strong>Genotyping:</strong> Detects predefined genetic
                variants; WGS discovers both known and novel variants across the
                entire genome.
              </li>
              <li>
                <strong>RNA Sequencing (RNA-Seq):</strong> Focuses on sequencing
                RNA to understand gene expression, while WGS sequences the
                complete DNA genome.
              </li>
            </ul>

            <p>
              WGS has the potential to revolutionize healthcare by enabling more
              personalized and precise treatments, while also providing insights
              into fundamental biological processes.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ArticleWholeGenomeSequencing;

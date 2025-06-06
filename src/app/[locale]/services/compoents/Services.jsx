import Image from "next/image";
import Link from "next/link";

function Services() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">
            Our Sequencing Services
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            We offer state-of-the-art sequencing services to empower research
            and clinical breakthroughs. Explore our comprehensive sequencing
            options tailored to your specific needs.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 ">
          <Link href="/services/whole-genome-sequencing">
            <div className="p-6 bg-white shadow-lg rounded-lg  flex hover:bg-platinum-50">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Whole Genome Sequencing
                </h3>
                <p className="mt-4 text-gray-600">
                  Unlock the full potential of genetic insights with whole
                  genome sequencing. This method analyzes the entire genome,
                  providing comprehensive data for research and diagnostic
                  purposes.
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
                Whole Exome Sequencing
              </h3>
              <p className="mt-4 text-gray-600">
                Focus on the most functionally important part of the genome with
                whole exome sequencing. This targeted approach examines all
                protein-coding regions, offering critical insights into
                disease-causing mutations.
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
                Targeted Sequencing
              </h3>
              <p className="mt-4 text-gray-600">
                Analyze specific genomic regions of interest with targeted
                sequencing. This cost-effective method is ideal for studying
                known mutations, biomarkers, or pathways linked to specific
                diseases.
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
                Metagenomic Sequencing
              </h3>
              <p className="mt-4 text-gray-600">
                Investigate complex microbial communities in diverse
                environments with metagenomic sequencing. This technique
                provides insights into the genetic material of all organisms
                present in a sample, enabling comprehensive microbial analysis.
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
    </section>
  );
}

export default Services;

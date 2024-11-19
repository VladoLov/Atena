import Image from "next/image";

function News() {
  return (
    <section className="container mx-auto">
      <div className="flex flex-col  items-center md:flex-row   pb-12">
        <div className="flex basis-full md:basis-1/3  px-2">
          <Image
            src="/health.png"
            alt="Atena Genomics Healthcare"
            height={500}
            width={500}
          />
        </div>
        <div className="flex basis md:basis-2/3 bg-crimson-200 px-4">
          <h2>
            <span className="font-semibold">ATENA Genomics</span> delivers
            expert consulting and comprehensive clinical NGS testing, including
            oncology, hereditary disease, prenatal, pharmacogenomics, and
            infectious disease diagnostics. With tailored genomic solutions, we
            empower healthcare providers and researchers to make informed,
            data-driven decisions for enhanced patient outcomes.
          </h2>
        </div>
      </div>
      <div>
        <h2 className="font-bold pb-4 px-4">
          Join ATENA Genomics for Clinical NGS Testing Seminars!
        </h2>
        <p className="px-4 pb-4">
          ATENA Genomics is hosting a series of expert-led seminars on Clinical
          Next-Generation Sequencing (NGS). Tailored for healthcare
          professionals, these sessions will explore the latest advancements in
          NGS applications for personalized medicine, oncology, and infectious
          disease diagnostics.
        </p>
        <p className="px-4">
          Don’t miss this opportunity to learn more on what genomics has to
          offer. Stay tuned for dates and registration!
        </p>
      </div>
    </section>
  );
}

export default News;

import Image from "next/image";

function Info() {
  return (
    <section className="container mx-auto  ">
      <div className="flex flex-col  items-center md:flex-row   pb-12">
        <div className="flex basis-full justify-center items-center md:basis-1/3 mt-8 px-2">
          <Image
            src="/health.png"
            alt="Atena Genomics Healthcare"
            height={500}
            width={500}
          />
        </div>
        <div className="flex basis md:basis-2/3  px-4">
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
    </section>
  );
}

export default Info;

import Image from "next/image";

function AboutTextSection() {
  return (
    <main className="container mx-auto px-4 py-8">
      <section className="bg-white rounded-lg  p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Mission and Vision ATENA Genomics
        </h2>
        <p className="text-gray-600">
          ATENA Genomics is dedicated to reshaping healthcare in the Balkans by
          delivering accessible, cutting-edge genomic technologies. Our goal is
          to empower healthcare providers and researchers with advanced
          next-generation sequencing (NGS) solutions, driving precision medicine
          in fields such as oncology, hereditary disease detection, prenatal
          screening, pharmacogenomics, and infectious disease diagnostics. We
          envision a future where personalized medicine is the cornerstone of
          healthcare, providing timely and accurate genetic insights to improve
          patient outcomes and guide informed clinical decisions. Through
          reliable and customized NGS diagnostics, ATENA Genomics is creating a
          healthier, genomically-empowered Balkan region, advancing the standard
          of care for all.
        </p>
      </section>
      {/*    <section className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>The Company</li>
          <li>Mission</li>
          <li>The Founders</li>
        </ul>
      </section> */}
    </main>
  );
}

export default AboutTextSection;

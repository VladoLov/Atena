import Image from "next/image";

function AboutTextSection() {
  return (
    <main className="w-full bg-platinum-300 mx-auto px-10 pt-12 clip-piere2 pb-16">
      <section className="container mx-auto rounded-lg  px-0 mb-16">
        <p className="text-base md:text-2xl lg:text-3xl text-platinum-900 lg:text-platinum-700  lg:leading-10  lg:font-medium tracking-wide">
          We envision a future where personalized medicine is the cornerstone of
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

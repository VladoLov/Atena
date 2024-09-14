import Image from "next/image";
import Animations from "./Animation";

export default function WholeGenomeSequencingArticle() {
  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="relative h-[500px] bg-center bg-cover w-full overflow-hidden rounded-md">
        <Image
          src="/science-lab-red-liquid.jpg"
          alt="science-lab-red-liquid"
          sizes="100vw"
          style={{ width: "100%", height: "100%" }}
          width={100}
          height={100}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 "></div>
        <header className=" absolute inset-0 flex justify-center items-center text-white shadow-lg">
          <div className="container mx-auto px-6 py-4">
            <h1 className="text-4xl font-bold text-gray-800 text-center">
              Whole Genome Sequencing
            </h1>
            <p className="text-gray-600 mt-2 text-center">
              A comprehensive guide to understanding the future of genomics.
            </p>
          </div>
        </header>
      </div>

      <main className="container mx-auto px-6 py-8">
        <section className=" rounded-lg shadow-md p-6 mb-8 bg-crimson-50">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            What is Whole Genome Sequencing?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Whole Genome Sequencing (WGS) is the process of determining the
            complete DNA sequence of an organism&apos;s genome at a single time.
            This method allows researchers to study the genetic makeup of
            organisms in detail, unlocking insights into their biology and
            evolution.
          </p>
        </section>

        <section className="bg-platinum-50 rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-row">
            <div className="basis-1/2">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                The Benefits of Whole Genome Sequencing
              </h2>
              <ul className="list-disc list-inside text-gray-600 leading-relaxed mb-4">
                <li>Complete view of the genome</li>
                <li>Identifies genetic variants associated with diseases</li>
                <li>Helps in personalizing medicine and treatment</li>
                <li>Understanding evolutionary biology</li>
              </ul>
            </div>
            <div className="basis-1/2">
              <Animations />
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Applications of Whole Genome Sequencing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium text-gray-700">
                Medical Research
              </h3>
              <p className="text-gray-600 mt-2">
                WGS is widely used in medical research to understand the genetic
                basis of diseases and to develop personalized treatments.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium text-gray-700">
                Agriculture and Evolution
              </h3>
              <p className="text-gray-600 mt-2">
                In agriculture, WGS helps improve crop yield and resistance. It
                also plays a crucial role in studying evolutionary biology.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 py-6 mt-8">
        <div className="container mx-auto text-center text-white">
          <p>&copy; 2024 Genome Insights. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

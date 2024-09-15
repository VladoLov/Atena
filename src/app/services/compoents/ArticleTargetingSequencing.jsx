import Image from "next/image";

function ArticleTargetingSequencing() {
  return (
    <div>
      <div className="bg-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Why Targeted Sequencing Matters
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-8 border rounded-md shadow-lg">
              <svg
                /* insert SVG icon */ className="w-12 h-12 mx-auto mb-4 text-blue-600"
              />
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                Precision
              </h3>
              <p className="text-gray-600">
                Discover genetic variants with unprecedented accuracy, enabling
                better treatments.
              </p>
            </div>
            <div className="p-8 border rounded-md shadow-lg">
              <svg
                /* insert SVG icon */ className="w-12 h-12 mx-auto mb-4 text-green-600"
              />
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                Efficiency
              </h3>
              <p className="text-gray-600">
                Target specific regions of interest, saving time and reducing
                sequencing costs.
              </p>
            </div>
            <div className="p-8 border rounded-md shadow-lg">
              <svg
                /* insert SVG icon */ className="w-12 h-12 mx-auto mb-4 text-red-600"
              />
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                Insight
              </h3>
              <p className="text-gray-600">
                Uncover new insights into disease mechanisms, leading to
                personalized healthcare.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            The Evolution of Sequencing Technology
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="relative border-l-4 border-blue-600 pl-8">
              <div className="absolute left-[-18px] top-0 w-8 h-8 bg-blue-600 rounded-full"></div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">2001</h3>
              <p className="text-gray-600">
                The first human genome is sequenced, marking the start of modern
                genomics.
              </p>
            </div>
            <div className="relative border-l-4 border-blue-600 pl-8">
              <div className="absolute left-[-18px] top-0 w-8 h-8 bg-blue-600 rounded-full"></div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">2010</h3>
              <p className="text-gray-600">
                Targeted sequencing emerges as a tool to focus on specific genes
                or regions of interest.
              </p>
            </div>
            <div className="relative border-l-4 border-blue-600 pl-8">
              <div className="absolute left-[-18px] top-0 w-8 h-8 bg-blue-600 rounded-full"></div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">2023</h3>
              <p className="text-gray-600">
                Sequencing technology continues to evolve, providing faster and
                more precise results.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <Image
              src="/genome-research-lab-tests.jpg"
              alt="genomics research"
              width={500}
              height={500}
              className="rounded-md shadow-lg"
            />
          </div>
          <div className="md:w-1/2 px-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Advancements in Genomic Research
            </h2>
            <p className="text-gray-600 mb-6">
              Whole-genome sequencing has revolutionized the field of genomics,
              opening doors to new discoveries that were once unimaginable.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Personalized medicine tailored to your genetic makeup.</li>
              <li>Detection of rare mutations and genetic disorders.</li>
              <li>Progress in cancer research and therapy.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleTargetingSequencing;

import { Card, CardContent } from "@/components/ui/card";
import { Search, Dna, FileQuestion } from "lucide-react";
import Image from "next/image";

function RareGeneticDisorders() {
  return (
    <div className="flex flex-col  justify-center items-center w-full">
      <main className="w-full ">
        {/* Hero Section */}
        <section className="min-w-max z-[-1] relative h-[300px] md:h-[400px] lg:h-[500px]">
          <Image
            src="/rare-genetic-disorders.png?height=500&width=1000"
            alt="DNA double helix"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
            <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold text-center">
              Find Genetic Clarity for Rare or Unexplained Conditions
            </h2>
            <p className="text-white mt-2 text-center text-lg md:text-xl lg:text-2xl">
              One swab. Profound insights into rare conditions
            </p>
          </div>
        </section>
        <div className="container mx-auto py-12 px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-10">
            {/* Header Section */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">
                Find Genetic Clarity for Rare or Unexplained Conditions
              </h2>
              <div className="flex items-center gap-2">
                <div className="h-1 w-20 bg-crimson-500 rounded-full"></div>
                <div className="h-1 w-10 bg-crimson-300 rounded-full"></div>
                <div className="h-1 w-5 bg-crimson-200 rounded-full"></div>
              </div>
              <p className="text-zinc-700 text-lg font-medium">
                One swab. Profound insights into rare conditions.
              </p>
            </div>

            {/* Main Content Section */}
            <div className="space-y-8">
              <Card className="border-crimson-100">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex-shrink-0 bg-crimson-100 p-4 rounded-full">
                      <FileQuestion className="h-10 w-10 text-crimson-600" />
                    </div>
                    <div>
                      <p className="text-zinc-700 leading-relaxed">
                        Rare diseases are conditions that affect a small portion
                        of the population. A disease is considered rare when it
                        affects fewer than 5 in 10,000 people. Despite their
                        individual rarity, there are an estimated 6,000 to 8,000
                        distinct rare diseases, collectively impacting between
                        27 and 36 million people in the EU.
                      </p>
                      <p className="text-zinc-700 leading-relaxed mt-3">
                        Approximately 80% of rare diseases have a genetic
                        origin. These conditions often present complex
                        challenges due to their diverse genetic causes, which
                        can include single-gene mutations, structural changes in
                        chromosomes, or mitochondrial DNA alterations. The
                        variability in symptoms and progression among
                        individuals with the same condition adds to the
                        complexity, making identification and management
                        particularly challenging.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-crimson-100 bg-gradient-to-br from-crimson-50 to-white">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex-shrink-0 bg-crimson-100 p-4 rounded-full">
                      <Dna className="h-10 w-10 text-crimson-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-zinc-900">
                        Testing Process
                      </h3>
                      <p className="text-zinc-700 leading-relaxed">
                        Genetic testing using next-generation sequencing (NGS)
                        can help identify variants associated with a broad
                        spectrum of rare conditions. This includes syndromes and
                        disorders that are difficult to pinpoint without genetic
                        insight and may otherwise remain unexplained.
                      </p>
                      <p className="text-zinc-700 leading-relaxed mt-3">
                        A simple and non-invasive buccal swab is used to collect
                        your DNA. Testing can be performed using targeted gene
                        panels, whole exome sequencing (WES), or whole genome
                        sequencing (WGS), depending on the level of detail
                        needed.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-crimson-100">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex-shrink-0 bg-crimson-100 p-4 rounded-full">
                      <Search className="h-10 w-10 text-crimson-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-zinc-900">
                        Benefits of Genetic Insights
                      </h3>
                      <p className="text-zinc-700 leading-relaxed">
                        Whether you're exploring the cause of unexplained
                        symptoms or want to understand your genetic status, this
                        testing offers the opportunity for greater clarity and
                        informed decision-making.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-crimson-300 to-crimson-400 rounded-xl p-8 text-black">
              <div className="max-w-3xl mx-auto text-center space-y-4">
                <h3 className="text-2xl font-bold">
                  Uncover Answers to Rare Conditions
                </h3>
                <p className="text-black/90">
                  If you're considering this type of testing or would like more
                  information, feel free to contact us — we're here to guide you
                  through the next step.
                </p>
                <button className="mt-4 bg-white text-black hover:bg-crimson-50 px-6 py-3 rounded-lg font-medium transition-colors">
                  Contact Us Today
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default RareGeneticDisorders;

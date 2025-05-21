import { Card, CardContent } from "@/components/ui/card";
import { Brain, Dna, FileSearch } from "lucide-react";
import Image from "next/image";

function NeurologicalNeuromuscularDisorders() {
  return (
    <div className="flex flex-col  justify-center items-center w-full">
      <main className="w-full ">
        {/* Hero Section */}
        <section className="min-w-max z-[-1] relative h-[300px] md:h-[400px] lg:h-[500px]">
          <Image
            src="/neurological-neuromuscular-disorders.png?height=500&width=1000"
            alt="DNA double helix"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
            <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold text-center">
              Genetic Insights into Neurological and Neuromuscular Disorders
            </h2>
            <p className="text-white mt-2 text-center text-lg md:text-xl lg:text-2xl">
              Understand your risk before symptoms begin
            </p>
          </div>
        </section>
        <div className="container mx-auto py-12 px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-10">
            {/* Header Section */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">
                Genetic Insights into Neurological and Neuromuscular Disorders
              </h2>
              <div className="flex items-center gap-2">
                <div className="h-1 w-20 bg-crimson-500 rounded-full"></div>
                <div className="h-1 w-10 bg-crimson-300 rounded-full"></div>
                <div className="h-1 w-5 bg-crimson-200 rounded-full"></div>
              </div>
              <p className="text-zinc-700 text-lg font-medium">
                Understand your risk before symptoms begin
              </p>
            </div>

            {/* Main Content Section */}
            <div className="space-y-8">
              <Card className="border-crimson-100">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex-shrink-0 bg-crimson-100 p-4 rounded-full">
                      <Dna className="h-10 w-10 text-crimson-600" />
                    </div>
                    <div>
                      <p className="text-zinc-700 leading-relaxed">
                        Many neurological and neuromuscular disorders have a
                        genetic basis, caused by inherited changes in DNA that
                        affect nerve or muscle function. Early detection of
                        these genetic variants can help reveal whether you carry
                        changes linked to neurological or neuromuscular
                        conditions — even before symptoms develop. Through
                        advanced genetic testing, your DNA is analyzed using
                        next-generation sequencing (NGS) technology to detect
                        mutations associated with conditions such as muscular
                        dystrophies, hereditary neuropathies, epilepsy
                        syndromes, ataxias, and neurodevelopmental disorders,
                        among others.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-crimson-100 bg-gradient-to-br from-crimson-50 to-white">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex-shrink-0 bg-crimson-100 p-4 rounded-full">
                      <Brain className="h-10 w-10 text-crimson-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-zinc-900">
                        Testing Process
                      </h3>
                      <p className="text-zinc-700 leading-relaxed">
                        This analysis is performed using a simple and
                        non-invasive buccal swab, which collects DNA from cheek
                        cells. Depending on the specific condition, the testing
                        may focus on targeted gene panels, whole exome
                        sequencing (WES), or whole genome sequencing (WGS),
                        offering different levels of detail based on clinical
                        need.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-crimson-100">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex-shrink-0 bg-crimson-100 p-4 rounded-full">
                      <FileSearch className="h-10 w-10 text-crimson-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-zinc-900">
                        Benefits of Genetic Insights
                      </h3>
                      <p className="text-zinc-700 leading-relaxed">
                        Genetic insights can help clarify complex symptoms,
                        guide further medical evaluation, and support informed
                        decision-making for long-term care.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-crimson-300 to-crimson-400 rounded-xl p-8 text-black">
              <div className="max-w-3xl mx-auto text-center space-y-4">
                {/* <h3 className="text-2xl font-bold">Take the Next Step</h3> */}
                <p className="text-black/90">
                  If you're interested in learning more about testing options
                  for neurological or neuromuscular conditions, we invite you to
                  contact us — we're here to help you take the next step.
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

export default NeurologicalNeuromuscularDisorders;

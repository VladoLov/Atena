import { Card, CardContent } from "@/components/ui/card";
import { Brain, Dna, Lightbulb } from "lucide-react";
import Image from "next/image";

function DevelopmentalIntellectualDisabilities() {
  return (
    <div className="flex flex-col  justify-center items-center w-full">
      <main className="w-full ">
        {/* Hero Section */}
        <section className="min-w-max z-[-1] relative h-[300px] md:h-[400px] lg:h-[500px]">
          <Image
            src="/developmental-intellectual-disabilities.png?height=500&width=1000"
            alt="DNA double helix"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
            <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold text-center">
              Understanding Genetic Variants Linked to Cognitive and
              Developmental Traits
            </h2>
            <p className="text-white mt-2 text-center text-lg md:text-xl lg:text-2xl">
              Know more about the genes that shape your development
            </p>
          </div>
        </section>
        <div className="container mx-auto py-12 px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-10">
            {/* Header Section */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-platinum-950 md:text-4xl">
                Understanding Genetic Variants Linked to Cognitive and
                Developmental Traits
              </h2>
              <div className="flex items-center gap-2">
                <div className="h-1 w-20 bg-crimson-500 rounded-full"></div>
                <div className="h-1 w-10 bg-crimson-300 rounded-full"></div>
                <div className="h-1 w-5 bg-crimson-200 rounded-full"></div>
              </div>
              <p className="text-platinum-950 text-lg font-medium">
                Know more about the genes that shape your development.
              </p>
            </div>

            {/* Main Content Section */}
            <div className="space-y-8">
              <Card className="border-crimson-100">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex-shrink-0 bg-crimson-100 p-4 rounded-full">
                      <Brain className="h-10 w-10 text-crimson-600" />
                    </div>
                    <div>
                      <p className="text-platinum-950 leading-relaxed">
                        Certain genetic changes can influence brain development,
                        learning ability, and cognitive function. Understanding
                        your genetic profile can help reveal whether you carry
                        variants associated with developmental or intellectual
                        disabilities — even if signs have not yet appeared.
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
                      <h3 className="text-xl font-semibold mb-2 text-platinum-950">
                        Testing Process
                      </h3>
                      <p className="text-platinum-950 leading-relaxed">
                        Using advanced next-generation sequencing (NGS), your
                        DNA is analyzed to detect inherited changes linked to a
                        wide range of conditions, including autism spectrum
                        traits, global developmental delay, learning
                        difficulties, and other neurodevelopmental challenges.
                      </p>
                      <p className="text-platinum-950 leading-relaxed mt-3">
                        A simple and non-invasive buccal swab is collected to
                        obtain your DNA. Depending on your needs, the analysis
                        may focus on specific genes (targeted panels), all
                        protein-coding regions (whole exome sequencing, WES), or
                        your complete genetic code (whole genome sequencing,
                        WGS), offering different levels of insight.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-crimson-100">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex-shrink-0 bg-crimson-100 p-4 rounded-full">
                      <Lightbulb className="h-10 w-10 text-crimson-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-platinum-950">
                        Benefits of Genetic Insights
                      </h3>
                      <p className="text-platinum-950 leading-relaxed">
                        This information can bring greater clarity to your
                        genetic status and help guide future decisions related
                        to your well-being, learning support, or personal
                        development.
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
                  Explore Your Genetic Profile
                </h3>
                <p
                  className="text-black/90
                "
                >
                  If you would like to explore this type of testing, feel free
                  to contact us — we're here to guide you through the next step.
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

export default DevelopmentalIntellectualDisabilities;

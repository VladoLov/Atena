import { Card, CardContent } from "@/components/ui/card";
import { Shield, Dna, FileSearch } from "lucide-react";
import Image from "next/image";

function ImmunologicalDisorders() {
  return (
    <div className="flex flex-col  justify-center items-center w-full">
      <main className="w-full ">
        {/* Hero Section */}
        <section className="min-w-max z-[-1] relative h-[300px] md:h-[400px] lg:h-[500px]">
          <Image
            src="/immunological-disorders.webp?height=500&width=1000"
            alt="DNA double helix"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center">
            <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold text-center">
              Explore Your Genetic Risk for Immune System Disorders
            </h2>
            <p className="text-white mt-2 text-center text-lg md:text-xl lg:text-2xl">
              Simple testing for deeper insight into immune-related conditions
            </p>
          </div>
        </section>
        <div className="container mx-auto py-12 px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-10">
            {/* Header Section */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-platinum-950 md:text-4xl">
                Explore Your Genetic Risk for Immune System Disorders
              </h2>
              <div className="flex items-center gap-2">
                <div className="h-1 w-20 bg-crimson-500 rounded-full"></div>
                <div className="h-1 w-10 bg-crimson-300 rounded-full"></div>
                <div className="h-1 w-5 bg-crimson-200 rounded-full"></div>
              </div>
              <p className="text-platinum-950 text-lg font-medium">
                Simple testing for deeper insight into immune-related
                conditions.
              </p>
            </div>

            {/* Main Content Section */}
            <div className="space-y-8">
              <Card className="border-crimson-100">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex-shrink-0 bg-crimson-100 p-4 rounded-full">
                      <Shield className="h-10 w-10 text-crimson-600" />
                    </div>
                    <div>
                      <p className="text-platinum-950 leading-relaxed">
                        Your immune system relies on many genes working together
                        to protect your body. When changes occur in these genes,
                        they can lead to inherited immune conditions that affect
                        how your body responds to infections or immune
                        challenges.
                      </p>
                      <p className="text-platinum-950 leading-relaxed mt-3">
                        Genetic testing can identify inherited variants linked
                        to primary immunodeficiencies such as severe combined
                        immunodeficiency (SCID), chronic granulomatous disease
                        (CGD), common variable immunodeficiency (CVID),
                        complement deficiencies, and others. Some of these
                        conditions appear early in life, while others may only
                        become noticeable later. In certain cases, you may carry
                        genetic changes without symptoms, but still benefit from
                        knowing your status.
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
                        A simple and non-invasive buccal swab is collected to
                        obtain your DNA. This sample is then analyzed using
                        next-generation sequencing (NGS) to look for changes in
                        genes related to immune system function. Depending on
                        your needs, the analysis may use targeted panels, whole
                        exome sequencing (WES), or whole genome sequencing (WGS)
                        to provide different levels of insight.
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
                      <h3 className="text-xl font-semibold mb-2 text-platinum-950">
                        Benefits of Genetic Insights
                      </h3>
                      <p className="text-platinum-950 leading-relaxed">
                        Understanding your genetic profile can help reveal
                        whether you carry changes that affect immune function —
                        even before symptoms appear. This insight can support
                        proactive, informed decisions about your health.
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
                  Discover Your Immune System Genetics
                </h3>
                <p className="text-black/90">
                  If you would like to explore this type of testing, feel free
                  to contact us — we're here to guide you every step of the way.
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

export default ImmunologicalDisorders;

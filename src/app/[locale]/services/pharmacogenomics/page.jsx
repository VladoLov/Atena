import { Card, CardContent } from "@/components/ui/card";
import { Pill, Dna, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function Pharmacogenomics() {
  return (
    <div className="flex flex-col  justify-center items-center w-full">
      <main className="w-full ">
        {/* Hero Section */}
        <section className="min-w-max z-[-1] relative h-[300px] md:h-[400px] lg:h-[500px]">
          <Image
            src="/pharmacogenomics.webp?height=500&width=1000"
            alt="DNA double helix"
            layout="fill"
            objectFit="cover"
            priority
          />
          {/* The main overlay div */}
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-wrap flex-col items-start justify-center">
            {/* This is the content container for the text */}
            <div className="text-white text-center px-4 md:text-left md:w-3/5 lg:w-2/4 xl:w-3/5 md:ml-8 lg:ml-12">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Genetic Insights for Safer, Smarter Medication Choices
              </h2>
              <p className="mt-2 text-lg md:text-xl lg:text-2xl">
                Your genes matter — even when it comes to medicine
              </p>
            </div>
          </div>
        </section>
        <div className="container mx-auto py-12 px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-10">
            {/* Header Section */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-platinum-950 md:text-4xl">
                Genetic Insights for Safer, Smarter Medication Choices
              </h2>
              <div className="flex items-center gap-2">
                <div className="h-1 w-20 bg-crimson-500 rounded-full"></div>
                <div className="h-1 w-10 bg-crimson-300 rounded-full"></div>
                <div className="h-1 w-5 bg-crimson-200 rounded-full"></div>
              </div>
              <p className="text-platinum-950 text-lg font-medium">
                Your genes matter — even when it comes to medicine.
              </p>
            </div>

            {/* Main Content Section */}
            <div className="space-y-8">
              <Card className="border-crimson-100">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex-shrink-0 bg-crimson-100 p-4 rounded-full">
                      <Pill className="h-10 w-10 text-crimson-600" />
                    </div>
                    <div>
                      <p className="text-platinum-950 leading-relaxed">
                        Not all medications work the same way for everyone. Your
                        genes play a key role in how your body processes and
                        responds to certain drugs. Pharmacogenomic testing helps
                        uncover how your DNA influences your response to
                        medications — offering a path toward safer, more
                        effective treatment choices.
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
                        Using a simple and non-invasive buccal swab, we collect
                        your DNA and analyze it with next-generation sequencing
                        (NGS) or targeted genotyping methods. This testing looks
                        at specific genes involved in drug metabolism, such as
                        CYP2D6, CYP2C19, TPMT, and others. The results can help
                        identify which medications may be more effective for
                        you, which may cause side effects, or which may require
                        dose adjustments.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-crimson-100">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex-shrink-0 bg-crimson-100 p-4 rounded-full">
                      <CheckCircle className="h-10 w-10 text-crimson-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-platinum-950">
                        Applications
                      </h3>
                      <p className="text-platinum-950 leading-relaxed mb-4">
                        Pharmacogenomic testing is especially useful when
                        considering medications in areas like:
                      </p>
                      <ul className="space-y-2 text-platinum-950">
                        <li className="flex items-start">
                          <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-crimson-100 text-crimson-600 mr-2">
                            •
                          </span>
                          <span>
                            Mental health (antidepressants, antipsychotics)
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-crimson-100 text-crimson-600 mr-2">
                            •
                          </span>
                          <span>Cardiology (anticoagulants, statins)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-crimson-100 text-crimson-600 mr-2">
                            •
                          </span>
                          <span>Pain management (opioids)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-crimson-100 text-crimson-600 mr-2">
                            •
                          </span>
                          <span>Oncology (chemotherapy selection)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-crimson-100 text-crimson-600 mr-2">
                            •
                          </span>
                          <span>Gastroenterology (e.g., PPIs)</span>
                        </li>
                      </ul>
                      <p className="text-platinum-950 leading-relaxed mt-4">
                        Whether you're just beginning a new treatment or looking
                        to optimize current medications, this test provides
                        valuable insight based on your unique genetic profile.
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
                  Personalize Your Medicine with Genetic Testing
                </h3>
                <p className="text-black/90">
                  If you&apos;re interested in personalized medicine guided by
                  your DNA, feel free to contact us — we&apos;re here to help
                  you take the next step.
                </p>
                <Link href={"/contact"}>
                  <button className="mt-4 bg-white text-black hover:bg-crimson-50 px-6 py-3 rounded-lg font-medium transition-colors">
                    Contact Us Today
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Pharmacogenomics;

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dna,
  Brain,
  Microscope,
  Zap,
  Shield,
  FileSearch,
  Pill,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProactiveGenomicHealthScreening() {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <main className="w-full ">
        {/* Hero Section */}
        <section className="min-w-max z-[-1] relative h-[300px] md:h-[400px] lg:h-[500px]">
          <Image
            src="/proactive-genomic-health.webp?height=500&width=1000"
            alt="DNA double helix"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
            <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold text-center">
              Proactive Genomic Health Screening
            </h2>
            {/*  <p className="text-white mt-2 text-center text-lg md:text-xl lg:text-2xl">
              Simple testing. Powerful knowledge. Healthier choices.
            </p> */}
          </div>
        </section>

        {/* Info Section */}
        <div className="container mx-auto py-12 px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-10">
            {/* Header Section */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-platinum-950 md:text-4xl">
                Proactive Genomic Health Screening
              </h2>
              <div className="flex items-center gap-2">
                <div className="h-1 w-20 bg-crimson-500 rounded-full"></div>
                <div className="h-1 w-10 bg-crimson-300 rounded-full"></div>
                <div className="h-1 w-5 bg-crimson-200 rounded-full"></div>
              </div>
              <p className="text-platinum-950 text-lg leading-relaxed">
                Your DNA carries valuable information that can help you better
                understand your health — not only today, but for the future.
                With Proactive Genomic Health Screening, you have the
                opportunity to uncover hidden genetic risks before symptoms
                arise, empowering you to make informed, preventive decisions
                about your well-being.
              </p>
            </div>

            {/* Process Section */}
            <Card className="border-crimson-100 bg-gradient-to-br from-crimson-50 to-white">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="flex-shrink-0 bg-crimson-100 p-4 rounded-full">
                    <Dna className="h-10 w-10 text-crimson-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-platinum-950">
                      How It Works
                    </h3>
                    <p className="text-platinum-950">
                      Using a quick, non-invasive buccal swab (cheek swab), we
                      collect a DNA sample that is analyzed using advanced
                      next-generation sequencing (NGS) technology. This approach
                      allows us to detect a wide range of inherited genetic
                      changes, offering insights into multiple areas of health.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Screening Areas Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-platinum-950">
                Through a single sample, we can screen for potential risks in
                the following areas:
              </h3>

              <Tabs defaultValue="cancer" className="w-full">
                <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 h-auto gap-2">
                  <TabsTrigger
                    value="cancer"
                    className="data-[state=active]:bg-crimson-100 data-[state=active]:text-crimson-700"
                  >
                    Cancer
                  </TabsTrigger>
                  <TabsTrigger
                    value="neuro"
                    className="data-[state=active]:bg-crimson-100 data-[state=active]:text-crimson-700"
                  >
                    Neurological
                  </TabsTrigger>
                  <TabsTrigger
                    value="developmental"
                    className="data-[state=active]:bg-crimson-100 data-[state=active]:text-crimson-700"
                  >
                    Developmental
                  </TabsTrigger>
                  <TabsTrigger
                    value="metabolic"
                    className="data-[state=active]:bg-crimson-100 data-[state=active]:text-crimson-700"
                  >
                    Metabolic
                  </TabsTrigger>
                  <TabsTrigger
                    value="immunological"
                    className="data-[state=active]:bg-crimson-100 data-[state=active]:text-crimson-700"
                  >
                    Immunological
                  </TabsTrigger>
                  <TabsTrigger
                    value="rare"
                    className="data-[state=active]:bg-crimson-100 data-[state=active]:text-crimson-700"
                  >
                    Rare Disorders
                  </TabsTrigger>
                  <TabsTrigger
                    value="pharma"
                    className="data-[state=active]:bg-crimson-100 data-[state=active]:text-crimson-700"
                  >
                    Pharmacogenomics
                  </TabsTrigger>
                </TabsList>

                <div className="mt-6 border rounded-lg overflow-hidden">
                  <TabsContent value="cancer" className="m-0">
                    <Card className="border-0 shadow-none">
                      <CardContent className="p-6 flex gap-4 items-start">
                        <div className="flex-shrink-0 bg-crimson-100 p-3 rounded-full">
                          <Microscope className="h-6 w-6 text-crimson-600" />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold mb-2 text-crimson-700">
                            Hereditary Cancer Screening
                          </h4>
                          <p className="text-platinum-950">
                            Detect inherited mutations that increase the risk of
                            cancers such as breast, ovarian, colorectal,
                            prostate, and others — even before symptoms appear.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="neuro" className="m-0">
                    <Card className="border-0 shadow-none">
                      <CardContent className="p-6 flex gap-4 items-start">
                        <div className="flex-shrink-0 bg-crimson-100 p-3 rounded-full">
                          <Brain className="h-6 w-6 text-crimson-600" />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold mb-2 text-crimson-700">
                            Neurological and Neuromuscular Disorders
                          </h4>
                          <p className="text-platinum-950">
                            Identify genetic variants linked to conditions that
                            affect the nervous or muscular systems, helping to
                            uncover personal risk or carrier status.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="developmental" className="m-0">
                    <Card className="border-0 shadow-none">
                      <CardContent className="p-6 flex gap-4 items-start">
                        <div className="flex-shrink-0 bg-crimson-100 p-3 rounded-full">
                          <FileSearch className="h-6 w-6 text-crimson-600" />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold mb-2 text-crimson-700">
                            Developmental and Intellectual Disabilities
                          </h4>
                          <p className="text-platinum-950">
                            Explore whether you carry genetic changes associated
                            with neurodevelopmental challenges, including
                            learning difficulties and related conditions.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="metabolic" className="m-0">
                    <Card className="border-0 shadow-none">
                      <CardContent className="p-6 flex gap-4 items-start">
                        <div className="flex-shrink-0 bg-crimson-100 p-3 rounded-full">
                          <Zap className="h-6 w-6 text-crimson-600" />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold mb-2 text-crimson-700">
                            Metabolic and Mitochondrial Disorders
                          </h4>
                          <p className="text-platinum-950">
                            Gain insight into inherited changes that may affect
                            how your cells produce energy or process key
                            nutrients.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="immunological" className="m-0">
                    <Card className="border-0 shadow-none">
                      <CardContent className="p-6 flex gap-4 items-start">
                        <div className="flex-shrink-0 bg-crimson-100 p-3 rounded-full">
                          <Shield className="h-6 w-6 text-crimson-600" />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold mb-2 text-crimson-700">
                            Immunological Disorders
                          </h4>
                          <p className="text-platinum-950">
                            Understand whether you carry genetic variants
                            related to primary immunodeficiencies that impact
                            immune function.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="rare" className="m-0">
                    <Card className="border-0 shadow-none">
                      <CardContent className="p-6 flex gap-4 items-start">
                        <div className="flex-shrink-0 bg-crimson-100 p-3 rounded-full">
                          <FileSearch className="h-6 w-6 text-crimson-600" />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold mb-2 text-crimson-700">
                            Rare Genetic Disorders
                          </h4>
                          <p className="text-platinum-950">
                            Explore your genome for rare but impactful
                            conditions that may otherwise go undetected or
                            remain unexplained.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="pharma" className="m-0">
                    <Card className="border-0 shadow-none">
                      <CardContent className="p-6 flex gap-4 items-start">
                        <div className="flex-shrink-0 bg-crimson-100 p-3 rounded-full">
                          <Pill className="h-6 w-6 text-crimson-600" />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold mb-2 text-crimson-700">
                            Pharmacogenomics
                          </h4>
                          <p className="text-platinum-950">
                            Learn how your genes influence your response to
                            medications and discover which treatments may be
                            more effective or better tolerated based on your
                            DNA.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </div>
              </Tabs>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-crimson-300 to-crimson-400 rounded-xl p-8 text-platinum-950">
              <div className="max-w-3xl mx-auto text-center space-y-4">
                <h3 className="text-2xl font-bold">
                  Take Control of Your Genetic Health Journey
                </h3>
                <p className="text-teal-50">
                  Whether you&apos;re seeking peace of mind, early awareness, or
                  a deeper understanding of your genetic health, this screening
                  gives you the tools to take a proactive role in your health
                  journey — with just one non-invasive test.
                </p>
                <p className="text-teal-50">
                  If you&apos;re ready to take the next step or learn more about
                  what this screening can reveal, feel free to contact us.
                  We&apos;re here to help guide you through your personalized
                  genomic insight.
                </p>
                <Link href={"/contact"}>
                  <button className="mt-4 bg-white text-rich-black hover:bg-crimson-50 px-6 py-3 rounded-lg font-medium transition-colors">
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

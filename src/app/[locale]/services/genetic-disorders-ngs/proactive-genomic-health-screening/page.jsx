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
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations("seo"); // Load translations for the 'seo' namespace

  return {
    title: t("proactiveGenomicHealthScreeningPage.title"), // Specific title for this page
    description: t("proactiveGenomicHealthScreeningPage.description"),
    keywords: t("proactiveGenomicHealthScreeningPage.keywords"),
  };
}

export default function ProactiveGenomicHealthScreening() {
  const t = useTranslations("ProactiveGenomicHealthScreening");
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <main className="w-full ">
        {/* Hero Section */}
        <section className="min-w-max z-[-1] relative h-[300px] md:h-[400px] lg:h-[500px]">
          <Image
            src="/proactive-genomic-health.webp"
            alt="DNA double helix"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1000px"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
            <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold text-center">
              {t("headline")}
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
                {t("headline")}
              </h2>
              <div className="flex items-center gap-2">
                <div className="h-1 w-20 bg-crimson-500 rounded-full"></div>
                <div className="h-1 w-10 bg-crimson-300 rounded-full"></div>
                <div className="h-1 w-5 bg-crimson-200 rounded-full"></div>
              </div>
              <p className="text-platinum-950 text-lg leading-relaxed">
                {t("introParagraph1")}
              </p>
            </div>

            {/* Process Section */}
            <Card className="border-crimson-100 bg-gradient-to-br from-crimson-50 to-white">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                  <div className="flex-shrink-0 bg-crimson-100 p-4 rounded-full">
                    <Dna className="h-10 w-10 text-crimson-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-platinum-950">
                      {t("headline2")}
                    </h3>
                    <p className="text-platinum-950 pb-2">
                      {t("introParagraph2")}
                    </p>
                    <p className="text-platinum-950">{t("introParagraph4")}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Screening Areas Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-platinum-950">
                {t("introParagraph3")}
              </h3>

              <Tabs defaultValue="cancer" className="w-full">
                <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 h-auto gap-2">
                  <TabsTrigger
                    value="cancer"
                    className="data-[state=active]:bg-crimson-100 data-[state=active]:text-crimson-700"
                  >
                    {t("categories.cancer")}
                  </TabsTrigger>
                  <TabsTrigger
                    value="neuro"
                    className="data-[state=active]:bg-crimson-100 data-[state=active]:text-crimson-700"
                  >
                    {t("categories.neurological")}
                  </TabsTrigger>
                  <TabsTrigger
                    value="developmental"
                    className="data-[state=active]:bg-crimson-100 data-[state=active]:text-crimson-700"
                  >
                    {t("categories.developmental")}
                  </TabsTrigger>
                  <TabsTrigger
                    value="metabolic"
                    className="data-[state=active]:bg-crimson-100 data-[state=active]:text-crimson-700"
                  >
                    {t("categories.metabolic")}
                  </TabsTrigger>
                  <TabsTrigger
                    value="immunological"
                    className="data-[state=active]:bg-crimson-100 data-[state=active]:text-crimson-700"
                  >
                    {t("categories.immunological")}
                  </TabsTrigger>
                  <TabsTrigger
                    value="rare"
                    className="data-[state=active]:bg-crimson-100 data-[state=active]:text-crimson-700"
                  >
                    {t("categories.rare")}
                  </TabsTrigger>
                  <TabsTrigger
                    value="pharma"
                    className="data-[state=active]:bg-crimson-100 data-[state=active]:text-crimson-700"
                  >
                    {t("categories.pharmacogenomics")}
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
                            {t("hereditaryCancerScreening.title")}
                          </h4>
                          <p className="text-platinum-950">
                            {t("hereditaryCancerScreening.description")}
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
                            {t("neurologicalNeuromuscularDisorders.title")}
                          </h4>
                          <p className="text-platinum-950">
                            {t(
                              "neurologicalNeuromuscularDisorders.description"
                            )}
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
                            {t("developmentalIntellectualDisabilities.title")}
                          </h4>
                          <p className="text-platinum-950">
                            {t(
                              "developmentalIntellectualDisabilities.description"
                            )}
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
                            {t("metabolicMitochondrialDisorders.title")}
                          </h4>
                          <p className="text-platinum-950">
                            {t("metabolicMitochondrialDisorders.description")}
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
                            {t("immunologicalDisorders.title")}
                          </h4>
                          <p className="text-platinum-950">
                            {t("immunologicalDisorders.description")}
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
                            {t("rareGeneticDisorders.title")}
                          </h4>
                          <p className="text-platinum-950">
                            {t("rareGeneticDisorders.description")}
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
                            {t("pharmacogenomics.title")}
                          </h4>
                          <p className="text-platinum-950">
                            {t("pharmacogenomics.description")}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </div>
              </Tabs>
            </div>
            <Card className="border-crimson-100 bg-gradient-to-br from-crimson-50 to-white">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0 bg-crimson-100 p-4 rounded-full">
                    <Shield className="h-10 w-10 text-crimson-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-platinum-950">
                      {t("headline3")}
                    </h3>
                    <p className="text-platinum-950 leading-relaxed">
                      {t("paragraph4")}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Call to Action */}
            <div className="bg-gradient-to-r from-crimson-300 to-crimson-400 rounded-xl p-8 text-platinum-950">
              <div className="max-w-3xl mx-auto text-center space-y-4">
                <h3 className="text-2xl font-bold">{t("contactHeader")}</h3>

                <p className="text-teal-50">{t("contactText")}</p>
                <Link href={"/contact"}>
                  <button className="mt-4 bg-white text-rich-black hover:bg-crimson-50 px-6 py-3 rounded-lg font-medium transition-colors">
                    {t("contact")}
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

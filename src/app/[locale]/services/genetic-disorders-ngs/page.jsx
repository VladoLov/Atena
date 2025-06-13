import Image from "next/image";

import Link from "next/link";
import DNAHelixCards from "@/components/HelixCard";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
export async function generateMetadata() {
  const t = await getTranslations("seo"); // Load translations for the 'seo' namespace

  return {
    title: t("geneticDisordersNgsPage.title"), // Specific title for this page
    description: t("geneticDisordersNgsPage.description"),
    keywords: t("geneticDisordersNgsPage.keywords"),
  };
}

export default function GeneticDisordersNgs() {
  const t = useTranslations("GeneticDisorders");
  const testingCategories = [
    {
      title: t("proactiveGenomicHealthScreening.title"),
      description: t("proactiveGenomicHealthScreening.description"),
      icon: "Dna",
      color: "crimson",
      href: "/services/genetic-disorders-ngs/proactive-genomic-health-screening",
    },
    {
      title: t("neurologicalNeuromuscularDisorders.title"),
      description: t("neurologicalNeuromuscularDisorders.description"),
      icon: "Brain",
      color: "crimson",
      href: "/services/genetic-disorders-ngs/neurological-neuromuscular-disorders",
    },
    {
      title: t("developmentalIntellectualDisabilities.title"),
      description: t("developmentalIntellectualDisabilities.description"),
      icon: "Baby",
      color: "crimson",
      href: "/services/genetic-disorders-ngs/developmental-intellectual-disabilities",
    },
    {
      title: t("metabolicMitochondrialDisorders.title"),
      description: t("metabolicMitochondrialDisorders.description"),
      icon: "Zap",
      color: "crimson",
      href: "/services/genetic-disorders-ngs/metabolic-mitochondrial-disorders",
    },
    {
      title: t("immunologicalDisorders.title"),
      description: t("immunologicalDisorders.description"),
      icon: "Shield",
      color: "crimson",
      href: "/services/genetic-disorders-ngs/proactive-genomic-health-screening",
    },
    {
      title: t("rareGeneticDisorders.title"),
      description: t("rareGeneticDisorders.description"),
      icon: "FileSearch",
      color: "crimson",
      href: "/services/genetic-disorders-ngs/proactive-genomic-health-screening",
    },
    /*   {
    title: "Other",
    description: "Additional genetic testing options and specialized services",
    icon: MoreHorizontal,
    color: "crimson",
    href: "/other-testing",
  }, */
  ];
  return (
    <div className="flex flex-col  justify-center items-center w-full">
      <main className="w-full ">
        {/* Hero Section */}
        <section className="min-w-max z-[-1] relative h-[300px] md:h-[400px] lg:h-[500px]">
          <Image
            src="/genetic-disorders.webp"
            alt="DNA double helix"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1000px"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold text-center">
              {t("head1")}
            </h1>
            {/*
             */}
          </div>
        </section>
        <div className="container mx-auto py-12 px-4 ">
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Header Section */}
            <div className="space-y-6">
              <div className="text-start space-y-4">
                <h2 className="text-3xl font-bold tracking-tight text-platinum-950 md:text-4xl">
                  {t("head2")}
                </h2>
                <div className="flex justify-start items-center gap-2">
                  <div className="h-1 w-20 bg-crimson-500 rounded-full"></div>
                  <div className="h-1 w-10 bg-crimson-300 rounded-full"></div>
                  <div className="h-1 w-5 bg-crimson-200 rounded-full"></div>
                </div>
              </div>

              <div className="max-w-6xl mx-auto">
                <p className="text-platinum-950 text-lg font-medium pb-2">
                  {t("sub1")}
                </p>
                <p className="text-platinum-950 text-lg font-medium">
                  {t("sub2")}
                </p>
              </div>
            </div>

            {/* Testing Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <DNAHelixCards categories={testingCategories} />
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-crimson-300 to-crimson-400 rounded-xl p-8 text-black">
              <div className="max-w-3xl mx-auto text-center space-y-4">
                <h3 className="text-2xl font-bold">{t("bottomCardHead")}</h3>
                <p className="text-black/90">{t("bottomCardText")}</p>
                <Link href={"/contact"}>
                  <button className="mt-4 bg-white text-black hover:bg-crimson-50 px-6 py-3 rounded-lg font-medium transition-colors">
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

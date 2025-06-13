import Image from "next/image";
import Link from "next/link";

import { useTranslations } from "next-intl";

import DNAHelixCards from "@/components/HelixCard";
import { getTranslations } from "next-intl/server";

// Hexagon SVG Component - Copied from the first component

export async function generateMetadata() {
  const t = await getTranslations("seo"); // Load translations for the 'seo' namespace

  return {
    title: t("cancerNgsProfilingPage.title"), // Specific title for this page
    description: t("cancerNgsProfilingPage.description"),
    keywords: t("cancerNgsProfilingPage.keywords"),
  };
}

export default function GeneticDisordersIllustrated() {
  const t = useTranslations();
  const cancerProfiling = [
    {
      title: t("CancerProfiling.tumorProfilingNGS.title"),
      description: t("CancerProfiling.tumorProfilingNGS.description"),
      href: "#",
      href1: "#",
      icon: "Microscope",
      color: "platinum",
      comingSoon: true,
    },
    {
      title: t("CancerProfiling.liquidBiopsiesNGS.title"),
      description: t("CancerProfiling.liquidBiopsiesNGS.description"),
      href: "#",
      href1: "#",
      icon: "Droplet",
      color: "platinum",
      comingSoon: true,
    },
    {
      title: t("CancerProfiling.hereditaryCancerScreening.title"),
      description: t("CancerProfiling.hereditaryCancerScreening.description"),
      href: "/services/cancer-ngs-profiling/hereditary-cancer-screening",
      href1: "/services/cancer-ngs-profiling/hereditary-cancer-screening",
      icon: "Dna",
      color: "crimson",
      comingSoon: false,
    },
    {
      title: t("CancerProfiling.cancerDrugResistanceMonitoring.title"),
      description: t("CancerProfiling.liquidBiopsiesNGS.description"),
      href: "#",
      href1: "#",
      icon: "ShieldOff",
      color: "platinum",
      comingSoon: true,
    },
  ];
  return (
    <div className="min-h-screen ">
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
          <h1 className="text-white text-4xl md:text-6xl lg:text-6xl font-bold text-center">
            {t("CancerProfiling.title")}
          </h1>
          <p className="text-white mt-2 text-center text-lg md:text-xl lg:text-2xl">
            {t("CancerProfiling.description")}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 ">
          <div className="max-w-5xl mx-auto space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-platinum-950 md:text-4xl">
              {t("CancerProfiling.title2")}
            </h2>
            <div className="flex justify-start items-center gap-2 ">
              <div className="h-1 w-20 bg-crimson-500 rounded-full"></div>
              <div className="h-1 w-10 bg-crimson-300 rounded-full"></div>
              <div className="h-1 w-5 bg-crimson-200 rounded-full"></div>
            </div>
            <div className="text-platinum-950 text-lg font-medium">
              <p className="py-2">{t("CancerProfiling.paragraph1")}</p>
              <p>{t("CancerProfiling.paragraph2")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testing Categories */}
      <section className=" ">
        {/*  <div className="container mx-auto px-4 ">
          <h2 className="text-3xl font-bold text-center text-platinum-950 mb-4">
            {t("CancerProfiling.cancerTestingCategories.title3")}
          </h2>
          <p className="text-lg text-platinum-950 text-center mb-16 max-w-6xl mx-auto">
            {t("CancerProfiling.cancerTestingCategories.description2")}
          </p>
        </div> */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 px-4">
          <DNAHelixCards categories={cancerProfiling} />
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-platinum-950 mb-16">
              {t("CancerProfiling.section3.title")}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-crimson-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-crimson-600">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {t("CancerProfiling.section3.subtitle1")}
                </h3>
                <p className="text-platinum-950">
                  {t("CancerProfiling.section3.description1")}
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-crimson-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-crimson-600">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {t("CancerProfiling.section3.subtitle2")}
                </h3>
                <p className="text-platinum-950">
                  {t("CancerProfiling.section3.description2")}
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-crimson-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-crimson-600">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {t("CancerProfiling.section3.subtitle3")}
                </h3>
                <p className="text-platinum-950">
                  {t("CancerProfiling.section3.description3")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="container mx-auto pb-12 px-4 md:px-6">
        <div className=" bg-gradient-to-r from-crimson-300 to-crimson-400 rounded-xl p-8 text-black ">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h3 className="text-2xl font-bold">
              {" "}
              {t("CancerProfiling.actionHeader")}
            </h3>
            <p
              className="text-black/90
                "
            >
              {t("CancerProfiling.actionText")}
            </p>
            <Link href={"/contact"}>
              <button className="mt-4 bg-white text-black hover:bg-crimson-50 px-6 py-3 rounded-lg font-medium transition-colors">
                {t("CancerProfiling.contact")}
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/*   <section className="py-16 bg-gradient-to-r from-crimson-300 to-crimson-500 text-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t("CancerProfiling.actionHeader")}
            </h2>
            <p className="text-xl text-black/80 mb-8">
              {t("CancerProfiling.actionText")}
            </p>
            <Link href={"/contact"}>
              <button className="px-8 py-4 bg-white text-crimson-600 font-medium rounded-full hover:bg-crimson-50 transition-colors text-lg">
                {t("CancerProfiling.contact")}
              </button>
            </Link>
          </div>
        </div>
      </section> */}
    </div>
  );
}

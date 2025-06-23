import { Card, CardContent } from "@/components/ui/card";
import { Brain, Dna, Lightbulb } from "lucide-react";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata() {
  const t = await getTranslations("seo"); // Load translations for the 'seo' namespace

  return {
    title: t("developmentalIntellectualDisabilitiesPage.title"), // Specific title for this page
    description: t("developmentalIntellectualDisabilitiesPage.description"),
    keywords: t("developmentalIntellectualDisabilitiesPage.keywords"),
  };
}

function DevelopmentalIntellectualDisabilities() {
  const t = useTranslations("DevelopmentalIntellectualDisabilities");
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <main className="w-full ">
        {/* Hero Section */}
        <section className="min-w-max z-[-1] relative h-[300px] md:h-[400px] lg:h-[500px]">
          <Image
            src="/developmental-intellectual-disabilities.webp"
            alt="DNA double helix"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1000px"
            className="object-cover"
            priority
          />

          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
            <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold text-center">
              {t("imageHeadline")}
            </h2>
            {/*  <p className="text-white mt-2 text-center text-lg md:text-xl lg:text-2xl">
              {t("tagline")}
            </p> */}
          </div>
        </section>
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
              <h4 className="text-lg font-semibold tracking-tight text-platinum-950 md:text-xl">
                {t("tagline")}
              </h4>
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
                        {t("paragraph1")}
                      </p>
                      <p className="text-platinum-950 leading-relaxed">
                        {t("paragraph2")}
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
                        {t("headline2")}
                      </h3>

                      <p className="text-platinum-950 leading-relaxed mt-3">
                        {t("paragraph3")}
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
                        {t("headline3")}
                      </h3>
                      <p className="text-platinum-950 leading-relaxed">
                        {t("paragraph4")}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-crimson-300 to-crimson-400 rounded-xl p-8 text-black">
              <div className="max-w-3xl mx-auto text-center space-y-4">
                <h3 className="text-2xl font-bold">{t("contactHeader")}</h3>
                <p
                  className="text-black/90
                "
                >
                  {t("contactText")}
                </p>
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

export default DevelopmentalIntellectualDisabilities;

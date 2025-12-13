import { Card, CardContent } from "@/components/ui/card";
import { Users, ShieldCheck, TriangleAlert } from "lucide-react";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata() {
  const t = await getTranslations("seo"); // Load translations for the 'seo' namespace

  return {
    title: t("pharmacogenomicsPage.title"), // Specific title for this page
    description: t("pharmacogenomicsPage.description"),
    keywords: t("pharmacogenomicsPage.keywords"),
  };
}
function Pharmacogenomics() {
  const t = useTranslations("familyRelationship");
  return (
    <div className="flex flex-col  justify-center items-center w-full">
      <main className="w-full ">
        {/* Hero Section */}
        <section className="min-w-max z-[-1] relative h-[300px] md:h-[400px] lg:h-[500px]">
          <Image
            src="/family-relationship.png"
            alt="Family Relationship Testing"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1000px"
            className="object-cover"
            priority
          />
          {/* The main overlay div */}
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
            {/* This is the content container for the text */}

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              {t("imageHeadline")}
            </h2>
            {/* <p className="mt-2 text-lg md:text-xl lg:text-2xl">
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
              {/*  <h4 className="text-lg font-semibold tracking-tight text-platinum-950 md:text-xl">
                {t("tagline")}
              </h4> */}
            </div>

            {/* Main Content Section */}
            <div className="space-y-8">
              <Card className="border-crimson-100">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex-shrink-0 bg-crimson-100 p-4 rounded-full">
                      <Users className="h-10 w-10 text-crimson-600" />
                    </div>
                    <div>
                      <p className="text-platinum-950 leading-relaxed">
                        {t("paragraph1a")}
                      </p>
                      <p className="text-platinum-950 leading-relaxed">
                        {t("paragraph1b")}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/*     <Card className="border-crimson-100 bg-gradient-to-br from-crimson-50 to-white">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex-shrink-0 bg-crimson-100 p-4 rounded-full">
                      <Dna className="h-10 w-10 text-crimson-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-platinum-950">
                        {t("headline2")}
                      </h3>
                      <p className="text-platinum-950 leading-relaxed">
                        {t("paragraph2")}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card> */}

              <Card className="border-crimson-100">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex-shrink-0 bg-crimson-100 p-4 rounded-full">
                      <ShieldCheck className="h-10 w-10 text-crimson-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-platinum-950">
                        {t("headline2")}
                      </h3>
                      <p className="text-platinum-950 leading-relaxed mb-4">
                        {t("paragraph2")}
                      </p>
                      <p className="text-platinum-950 leading-relaxed mb-4">
                        {t("paragraph2a")}
                      </p>
                      <ul className="space-y-2 text-platinum-950">
                        <li className="flex items-start">
                          <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-crimson-100 text-crimson-600 mr-2">
                            •
                          </span>
                          <span>{t("list.item1")}</span>
                        </li>
                        <li className="flex items-start">
                          <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-crimson-100 text-crimson-600 mr-2">
                            •
                          </span>
                          <span>{t("list.item2")}</span>
                        </li>
                        <li className="flex items-start">
                          <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-crimson-100 text-crimson-600 mr-2">
                            •
                          </span>
                          <span>{t("list.item3")}</span>
                        </li>
                        <li className="flex items-start">
                          <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-crimson-100 text-crimson-600 mr-2">
                            •
                          </span>
                          <span>{t("list.item4")}</span>
                        </li>
                      </ul>
                      <p className="text-platinum-950 leading-relaxed mt-4">
                        {t("paragraph2b")}
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
                <p className="text-black/90">{t("contactText")}</p>
                <div className="flex-shrink-0 bg-crimson-100 p-4 rounded-full flex-col  ">
                  <p className="text-black/70 items-center lg:justify-center flex">
                    <span className="inline-flex mr-2">
                      <TriangleAlert className="h-10 w-10 text-crimson-600" />
                    </span>
                    <span className="">{t("contactNote")}</span>
                  </p>
                </div>
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

export default Pharmacogenomics;

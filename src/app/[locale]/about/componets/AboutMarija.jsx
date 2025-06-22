import { useTranslations } from "next-intl";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Award } from "lucide-react";

export default function AboutMarija() {
  const t = useTranslations("about");

  return (
    <div className="flex flex-col  justify-center items-center w-full">
      <main className="w-full ">
        {/* <section className="min-w-max z-[-1] relative h-[300px] md:h-[400px] lg:h-[500px]">
          <Image
            src="/piere-image.webp"
            alt="DNA double helix"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1000px"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
            <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold text-center">
              {t("about")}
            </h2>
             <p className="text-white mt-2 text-center text-lg md:text-xl lg:text-2xl">
            {t("tagline")}
          </p> 
          </div>
        </section>*/}
        <div className="container mx-auto py-12 px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-10">
            {/* Header Section */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-platinum-950 md:text-4xl">
                {t("header")}
              </h2>
              <div className="flex items-center gap-2">
                <div className="h-1 w-20 bg-crimson-500 rounded-full"></div>
                <div className="h-1 w-10 bg-crimson-300 rounded-full"></div>
                <div className="h-1 w-5 bg-crimson-200 rounded-full"></div>
              </div>
              {/*  <p className="text-zinc-700 text-lg font-medium">
                Precision Genetic Testing for Personalized Care
              </p> */}
            </div>

            {/* Main Content Section */}
            <div className="space-y-8">
              <Card className="border-crimson-100">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex-shrink-0 bg-crimson-100 p-4 rounded-full">
                      <Target className="h-10 w-10 text-crimson-600" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-semibold mb-2 text-platinum-950">
                        {t("mission")}
                      </h3>
                      <p className="text-platinum-950 leading-relaxed">
                        {t("subheader")}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-crimson-100 bg-gradient-to-br from-crimson-50 to-white">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    {/*  <div className="flex-shrink-0 bg-crimson-100 p-4 rounded-full">
                      <Users className="h-10 w-10 text-crimson-600" />
                    </div> */}
                    <div className="md:h-16 md:w-16 md:m-3 md:p-4"></div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-platinum-950">
                        {t("leadership")}
                      </h3>
                      <div className="space-y-4">
                        <div className="border-l-4 border-crimson-200 pl-4">
                          <h4 className="text-lg font-semibold text-platinum-950 mb-2">
                            {t("marija.name")}
                          </h4>
                          <p className="text-sm font-medium text-crimson-600 mb-3">
                            {t("marija.title")}
                          </p>
                        </div>
                        <p className="text-platinum-950 leading-relaxed">
                          {t("marija.bio.part1")}
                        </p>
                        <p className="text-platinum-950 leading-relaxed">
                          {t("marija.bio.part2")}
                        </p>
                        <p className="text-platinum-950 leading-relaxed">
                          {t("marija.bio.part3")}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

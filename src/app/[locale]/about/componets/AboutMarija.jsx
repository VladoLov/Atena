import { useTranslations } from "next-intl";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Award } from "lucide-react";

export default function AboutMarija() {
  const t = useTranslations("about");

  return (
    /*  <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-12 items-start">
          <div className="mx-auto max-w-screen-lg">
            <h2 className="text-4xl md:text-6xl font-bold text-lightBlue-950 text-center drop-shadow-lg my-8">
              {t("about.leadership")}
            
            </h2>
           

            <div className="prose prose-lg text-platinum-950 max-h-fit px-6 font-poppins">
              <p className="pb-2">{t("about.marija.bio.part1")}</p>
              <p className="pb-2">{t("about.marija.bio.part2")}</p>
              <p className="pb-2">{t("about.marija.bio.part3")}</p>
            </div>
          </div>
        </div>
      </div>
    </section> */
    <div className="flex flex-col  justify-center items-center w-full">
      <main className="w-full ">
        <section className="min-w-max z-[-1] relative h-[300px] md:h-[400px] lg:h-[500px]">
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
            {/* <p className="text-white mt-2 text-center text-lg md:text-xl lg:text-2xl">
            {t("tagline")}
          </p> */}
          </div>
        </section>
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
                      <h3 className="text-xl font-semibold mb-2 text-platinum-950">
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
                    <div className="flex-shrink-0 bg-crimson-100 p-4 rounded-full">
                      <Users className="h-10 w-10 text-crimson-600" />
                    </div>
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

              {/*           <Card className="border-crimson-100">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 bg-crimson-100 p-4 rounded-full">
                  <Award className="h-10 w-10 text-crimson-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-zinc-900">
                    Our Commitment
                  </h3>
                  <p className="text-zinc-700 leading-relaxed">
                    We are committed to advancing precision medicine through
                    cutting-edge genetic testing technology, making personalized
                    healthcare accessible to communities across the Balkans and
                    beyond. Our dedication to quality, innovation, and patient
                    care drives everything we do.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>*/}
            </div>

            {/* <div className="bg-gradient-to-r from-crimson-500 to-crimson-600 rounded-xl p-8 text-white">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h3 className="text-2xl font-bold">
              Join Us in Transforming Healthcare
            </h3>
            <p className="text-crimson-50">
              Discover how ATENA Genomics is revolutionizing personalized
              medicine through precision genetic testing. Together, we're
              building a healthier future, one genome at a time.
            </p>
            <button className="mt-4 bg-white text-crimson-600 hover:bg-crimson-50 px-6 py-3 rounded-lg font-medium transition-colors">
              Contact Us Today
            </button>
          </div>
        </div>  */}
          </div>
        </div>
      </main>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Link from "next/link";

function Info() {
  const t = useTranslations("info");
  return (
    <section className="container mx-auto py-12">
      {/* Hidden on small screen because grid-col-start does'nt work*/}
      {/* Process Section */}
      <section className="">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-platinum-950 mb-16">
              {t("section3.title")}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-crimson-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-crimson-600">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {t("section3.subtitle1")}
                </h3>
                <p className="text-platinum-950">
                  {t("section3.description1")}
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-crimson-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-crimson-600">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {t("section3.subtitle2")}
                </h3>
                <p className="text-platinum-950">
                  {t("section3.description2")}
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-crimson-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-crimson-600">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {t("section3.subtitle3")}
                </h3>
                <p className="text-platinum-950">
                  {t("section3.description3")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Info;

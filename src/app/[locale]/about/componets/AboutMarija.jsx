import { useTranslations } from "next-intl";
import Image from "next/image";

export default function AboutMarija() {
  const t = useTranslations();

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-12 items-start">
          <div className="mx-auto max-w-screen-lg">
            <h2 className="text-4xl md:text-6xl font-bold text-lightBlue-950 text-center drop-shadow-lg my-8">
              {t("about.leadership")}
              {/**when we add new image, we must remove padding y-8 from h2 line above */}
            </h2>
            {/*   <div className="justify-center items-center flex">
              <Image
                src="/Marija.jpg?height=200&width=200"
                alt={t("about.profile")}
                width={200}
                height={200}
                objectFit="cover"
                className="rounded-full shadow-lg my-8"
              />
            </div> */}

            <div className="prose prose-lg text-platinum-950 max-h-fit px-6 font-poppins">
              <p className="pb-2">{t("about.marija.bio.part1")}</p>
              <p className="pb-2">{t("about.marija.bio.part2")}</p>
              <p className="pb-2">{t("about.marija.bio.part3")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

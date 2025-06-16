import { DnaComponent } from "@/components/DnaComponent";
import GridCards from "@/components/component/GridCards";
import ContactForm from "@/components/ContatForm";
import Info from "@/newcomponents/Info";
import SubHeader from "@/newcomponents/SubHeader";
import Image from "next/image";
import { Suspense, use } from "react";
import Loading from "./loading";
import PartnersCarousel from "../../components/partners-carousel";

import { getTranslations } from "next-intl/server";

/* export const metadata = {
  title: { template: "%s Atena Genomics", default: "ATENA Genomics" },
}; */
export async function generateMetadata() {
  const t = await getTranslations("seo"); // Load translations for the 'seo' namespace

  return {
    title: {
      template: `%s | ATENA Genomics`, // This will append " | ATENA Genomics" to other page titles
      default: t("homePage.title"), // Default title for this specific home page
    },
    description: t("homePage.description"),
  };
}
export default function page() {
  return (
    <main className="">
      <div className="bg-gradient-to-b from-white to-platinum-200">
        <DnaComponent />
      </div>
      {/* <div className="w-full bg-gradient-to-bl from-white from-10% via-white via-30% to-lightblue-300 to-90%  relative"> */}
      <div className="w-full  relative">
        <section className="bg-gradient-to-b from-platinum-200 to-platinum-300 clip-piere2 ">
          <SubHeader />
        </section>
        {/*  <CircularCards /> */}
        <section className="w-full ">
          <div className="inset-0 absolute -z-20 opacity-20">
            <Image
              src="/hexogen/hexogen5.webp"
              alt="background DNK image"
              fill
              className="object-center bg-cover"
            />
          </div>
          <GridCards />
        </section>
      </div>
      <section className="bg-gradient-to-b from-platinum-200 to-platinum-300 h-fit clip-piere4 py-8">
        <Info />
      </section>

      <div className="w-full bg-gradient-to-b from-white to-white relative ">
        <div className="max-w-5xl w-full mx-auto py-12 ">
          <ContactForm />
        </div>
      </div>
      <section className="bg-gradient-to-b from-platinum-200 to-platinum-300 clip-piere5">
        <PartnersCarousel />
      </section>
    </main>
  );
}

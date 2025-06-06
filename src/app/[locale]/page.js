import { DnaComponent } from "@/components/DnaComponent";
import GridCards from "@/components/component/GridCards";
import ContactForm from "@/components/ContatForm";
import Info from "@/newcomponents/Info";
import SubHeader from "@/newcomponents/SubHeader";
import Image from "next/image";
import { Suspense } from "react";
import Loading from "./loading";
import PartnersCarousel from "../../components/partners-carousel";

export const metadata = {
  title: { template: "%s Atena Genomics", default: "ATENA Genomics" },
};
export default function page() {
  return (
    <div className="font-poppins">
      <Suspense fallback={<Loading />}>
        <div>
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
        <section className="bg-gradient-to-b from-platinum-200 to-platinum-300 h-fit clip-piere4 py-24">
          <Info />
        </section>

        <div className="w-full bg-gradient-to-b from-white to-white relative ">
          <div className="max-w-4xl w-full mx-auto pb-12 ">
            <ContactForm />
          </div>
        </div>
        <section className="bg-gradient-to-b from-platinum-200 to-platinum-300 clip-piere5">
          <PartnersCarousel />
        </section>
      </Suspense>
    </div>
  );
}

import { DnaComponent } from "@/components/DnaComponent";

import GridCards from "@/components/component/GridCards";
import ContactForm from "@/components/ContatForm";

import News from "@/newcomponents/News";
import Info from "@/newcomponents/Info";
import DiverseCards from "@/newcomponents/DescriptionCard";
import MarkCards from "@/newcomponents/MarkCards";
import PiereCard from "@/newcomponents/PiereCard";

import FlyonCard from "@/newcomponents/FlyonCard";
import SubHeader from "@/newcomponents/SubHeader";
import ProcesCardCarousel from "@/newcomponents/ProcesCardCarousel";
import { flipCardData } from "@/lib/url";

export const metadata = {
  title: { template: "%s Atena Genomics", default: "ATENA Genomics" },
};
export default function page() {
  return (
    <div>
      {/* <HoverNavigationMenu /> */}

      <div>
        {/* <ManualHeader2 /> */}

        <DnaComponent />
        {/* <SubHeader /> */}
      </div>
      <div className="w-full bg-gradient-to-bl from-white from-10% via-white via-30% to-lightblue-300 to-90%  relative">
        {/*  <CircularCards /> */}
        <section className="bg-gradient-to-b from-platinum-200 to-platinum-300 clip-piere2 ">
          <SubHeader />
        </section>
        <section className="bg-white clip-piere1">
          <GridCards />
        </section>
        <section className="bg-gradient-to-b from-platinum-200 to-platinum-300 h-fit clip-piere py-24">
          <Info />
        </section>

        {/*   <section className="bg-gradient-to-b from-crimson-300 to-crimson-200 h-fit clip-custom2 max-w-screen-xl mx-auto">
            <MarkCards />
          </section> */}

        {/*  <section className="bg-gradient-to-b from-crimson-300 to-crimson-200 h-fit clip-custom2">
          <CarouselSpacing />
        </section> */}
        {/* <section className="bg-gradient-to-b from-crimson-300 to-crimson-200 h-fit clip-custom2">
          <FlyonCard />
        </section> */}
        <section className="bg-gradient-to-bl from-platinum-200 to-lightBlue-200 h-fit clip-path3 py-32">
          <ProcesCardCarousel />
        </section>
        <div className="bg-gradient-to-b from-crimson-500/10 to-white">
          <div className="max-w-4xl w-full mx-auto pb-12 ">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

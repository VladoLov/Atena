import AboutProjects from "@/components/component/AboutProjects";

import HoverNavigationMenu from "@/components/component/ManualHeader";
import CircularCards from "@/components/component/CircularCards";

import SubHeader from "@/components/component/SubHeader";

import { DnaComponent } from "@/components/DnaComponent";
import Footer2 from "@/components/Footer2";

import React from "react";
import GridCards from "@/components/component/GridCards";
import ContactForm from "@/components/ContatForm";
import Header from "@/newcomponents/Header";
import News from "@/newcomponents/News";
import Info from "@/newcomponents/Info";
import DiverseCards from "@/newcomponents/DescriptionCard";
import MarkCards from "@/newcomponents/MarkCards";

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
      <div className="w-full bg-gradient-to-bl from-platinum-100 from-10% via-crimson-100 via-30% to-lightblue-300 to-90%  relative">
        {/*  <CircularCards /> */}
        <section className="bg-white">
          <GridCards />
        </section>
        <section className="bg-gradient-to-b from-crimson-300 to-crimson-200 h-fit clip-custom2">
          <Info />
        </section>
        <section className="bg-gradient-to-b from-crimson-300 to-crimson-200 h-fit clip-custom2">
          <MarkCards />
        </section>

        <section className="bg-gradient-to-b from-crimson-500/10 to-white h-fit clip-custom1">
          <News />
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

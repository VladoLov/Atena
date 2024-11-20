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

export const metadata = {
  title: { template: "%s Atena Genomics", default: "ATENA Genomics" },
};
export default function page() {
  return (
    <div>
      {/* <HoverNavigationMenu /> */}
      <Header />

      <div>
        {/* <ManualHeader2 /> */}

        <DnaComponent />
        {/* <SubHeader /> */}
      </div>
      <div className="w-full bg-gradient-to-bl from-platinum-100 from-10% via-lightBlue-100 via-30% to-lightblue-300 to-90%  relative">
        {/*  <CircularCards /> */}
        <GridCards />
        <section className="bg-lightBlue-500 h-64 clip-polygon"></section>

        <News />
        <section className="bg-lightBlue-500 h-64 clip-diagonal"></section>
        <div className="max-w-4xl w-full mx-auto">
          <ContactForm />
        </div>
        <div class="h-64 bg-gradient-to-b from-lightBlue-500 to-white"></div>
      </div>
      <Footer2 />
    </div>
  );
}

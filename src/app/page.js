import AboutProjects from "@/components/component/AboutProjects";

import HoverNavigationMenu from "@/components/component/ManualHeader";
import CircularCards from "@/components/component/CircularCards";

import SubHeader from "@/components/component/SubHeader";

import { DnaComponent } from "@/components/DnaComponent";
import Footer2 from "@/components/Footer2";

import React from "react";
import GridCards from "@/components/component/GridCards";

export const metadata = {
  title: { template: "%s Atena Genomics", default: "ATENA Genomics" },
};
export default function page() {
  return (
    <div>
      <HoverNavigationMenu />

      <div>
        {/* <ManualHeader2 /> */}

        <DnaComponent />
        <SubHeader />
      </div>
      <div className="w-full from-blue-100 to-transparent bg-gradient-radial">
        {/*  <CircularCards /> */}
        <GridCards />
      </div>
      <Footer2 />
    </div>
  );
}

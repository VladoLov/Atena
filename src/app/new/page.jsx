import AboutProjects from "@/components/component/AboutProjects";

import HoverNavigationMenu from "@/components/component/ManualHeader";

import SubHeader from "@/components/component/SubHeader";

import { DnaComponent } from "@/components/DnaComponent";
import Footer2 from "@/components/Footer2";

import React from "react";

export default function page() {
  return (
    <div>
      <HoverNavigationMenu />

      <div>
        {/* <ManualHeader2 /> */}

        <DnaComponent />
        <SubHeader />
        <AboutProjects />
      </div>
      <Footer2 />
    </div>
  );
}

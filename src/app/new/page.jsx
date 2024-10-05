import AboutProjects from "@/components/component/AboutProjects";
import HoverNavigationMenu from "@/components/component/ManualHeader";
import DynamicNavigationMenu from "@/components/component/ManualHeader";
import ManualHeader2 from "@/components/component/ManualHeader2";
import SubHeader from "@/components/component/SubHeader";
import Testingcss from "@/components/component/Testingcss";
import { DnaComponent } from "@/components/DnaComponent";

import React from "react";

export default function page() {
  return (
    <div>
      {/* <ManualHeader2 /> */}
      <HoverNavigationMenu />

      <DnaComponent />
      <SubHeader />
      <AboutProjects />
    </div>
  );
}

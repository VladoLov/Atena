import HoverNavigationMenu from "@/components/component/ManualHeader";
import DynamicNavigationMenu from "@/components/component/ManualHeader";
import ManualHeader2 from "@/components/component/ManualHeader2";
import Testingcss from "@/components/component/Testingcss";
import { DnaComponent } from "@/components/DnaComponent";

import React from "react";

export default function page() {
  return (
    <div>
      {/* <ManualHeader2 /> */}
      <HoverNavigationMenu />

      <DnaComponent />
    </div>
  );
}

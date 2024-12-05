import CircularCards from "@/components/component/CircularCards";

import SubHeader from "@/components/component/SubHeader";

import { DnaComponent } from "@/components/DnaComponent";

export default function page() {
  return (
    <div>
      <div>
        {/* <ManualHeader2 /> */}

        <DnaComponent />
        <SubHeader />
      </div>
      <div className="w-full from-crimson-200 to-transparent bg-gradient-radial">
        <CircularCards />
      </div>
    </div>
  );
}

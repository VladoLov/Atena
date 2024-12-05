import React from "react";
import CancerSpecificGenePanel from "../components/CancerSpecificGenePanel";
import ImageWithText from "../components/ImageWithText";

const page = () => {
  return (
    <div>
      <ImageWithText />
      <CancerSpecificGenePanel />
    </div>
  );
};

export default page;

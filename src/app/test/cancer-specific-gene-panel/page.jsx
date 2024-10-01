import React from "react";
import CancerSpecificGenePanel from "../components/CancerSpecificGenePanel";
import ImageWithText from "../components/ImageWithText";
import Navbar from "../components/Navbar";

const page = () => {
  return (
    <div>
      <Navbar />
      <ImageWithText />
      <CancerSpecificGenePanel />
    </div>
  );
};

export default page;

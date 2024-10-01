import React from "react";
import Navbar from "../components/Navbar";
import ImageWithText from "../components/ImageWithText";
import OncoPanel from "../components/OncoPanel";

const page = () => {
  return (
    <div>
      <Navbar />
      <ImageWithText />
      <OncoPanel />
    </div>
  );
};

export default page;

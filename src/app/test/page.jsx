import React from "react";
import Navbar from "./components/Navbar";
import ImageWithText from "./components/ImageWithText";
import DropdownButtons from "./components/DropdownButtons";
import SecondOptions from "./components/SecondOptions";

const page = () => {
  return (
    <div>
      <Navbar />
      <ImageWithText />
      <h1 className="text-center text-6xl mt-10">First Options</h1>
      <DropdownButtons />
      <br className="h-10 w-full line" />
      <div className="my-6 h-1 bg-gradient-to-r from-crimson-500 via-teal-500 to-blue-500"></div>
      <div className="flex items-center my-6">
        <div className="flex-grow border-t border-gray-300"></div>

        <div className="flex-grow border-t border-gray-300"></div>
      </div>
      <h1 className="text-center text-6xl">Second Options</h1>
      <SecondOptions />
    </div>
  );
};

export default page;

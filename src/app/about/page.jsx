"use client";

import FramerMotionImage from "./componets/FramerMotionImage";

import AboutMarija from "./componets/AboutMarija";

function page() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-start bg-platinum-300 bg-transparent">
      <FramerMotionImage />
      {/*  <AboutTextSection /> */}

      <AboutMarija />
    </div>
  );
}

export default page;

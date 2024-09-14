"use client";

import { useEffect } from "react";
import { gsap } from "gsap";

const Animations = () => {
  useEffect(() => {
    gsap.to(".circle", { duration: 1, rotation: 360, ease: "power2.inOut" });
  }, []);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="20"
      height="20"
    >
      <circle
        className="circle"
        cx="10"
        cy="20"
        r="10"
        stroke="black"
        strokeWidth="2"
        fill="red"
      />
    </svg>
  );
};

export default Animations;

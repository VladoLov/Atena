"use client";

import React, { createContext, useContext, useRef, useEffect } from "react";
import { GiRollingEnergy } from "react-icons/gi";
// Create a context for the component
const MetagenomicContext = createContext();

export const useMetagenomic = () => {
  return useContext(MetagenomicContext);
};

const MetagenomicSequencingAnimation = ({ children }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svgElement = svgRef.current;

    // Placeholder for future animation logic
    if (svgElement) {
      // Example: Simple CSS animation for an SVG icon
      /*    svgElement.style.transition = "transform 0.5s ease";
      svgElement.style.transform = "scale(1.1)"; */
      svgElement.style.animation = "rotateScale 5s infinite linear";
    }
  }, []);

  return (
    <MetagenomicContext.Provider value={{}}>
      <div className="flex flex-col items-center justify-center bg-#f9f9f9 border-#ff9933  p-5 rounded-md">
        <div className="mb-5" ref={svgRef}>
          {/* Placeholder for SVG icons */}

          <GiRollingEnergy
            className="w-[200px] h-[200px] animate-rotateScale"
            width="50"
            height="50"
            viewBox="0 0 500 500"
          >
            <circle
              cx="200"
              cy="200"
              r="40"
              stroke="#ff9933"
              strokeWidth="5"
              fill="#f9f9f9"
            />
          </GiRollingEnergy>
        </div>
        <div className="w-full text-center">{children}</div>
      </div>
    </MetagenomicContext.Provider>
  );
};

export default MetagenomicSequencingAnimation;

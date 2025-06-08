// @/components/HelixCard.jsx (or .tsx)
"use client";

import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

// --- ADD THESE IMPORTS TO THIS FILE ---
import {
  Dna,
  Brain,
  Baby,
  Zap,
  Shield,
  FileSearch,
  MoreHorizontal, // If you plan to use it for 'Other'
  ShieldOff,
  Microscope,
  Droplet,
} from "lucide-react";

// --- Create a mapping for your icons ---
const LucideIcons = {
  Dna,
  Brain,
  Baby,
  Zap,
  Shield,
  FileSearch,
  MoreHorizontal,
  ShieldOff,
  Microscope,
  Droplet,

  // Add any other Lucide icons you might use
};

const getColorClasses = (color) => {
  switch (color) {
    case "teal":
      return {
        bg: "bg-teal-50",
        iconBg: "bg-teal-100",
        iconColor: "text-teal-600",
        border: "border-teal-200",
        hover: "hover:border-teal-300",
        gradient: "from-teal-500/20 to-teal-100/20",
        helix: "stroke-teal-500",
        helixOpacity: "opacity-40 group-hover:opacity-50",
        helixHover: "group-hover:opacity-50",
        accent: "bg-teal-500",
        corner: "from-teal-400/20 to-teal-500/20",
      };
    case "crimson":
      return {
        bg: "bg-crimson-50",
        iconBg: "bg-crimson-100",
        iconColor: "text-crimson-600",
        border: "border-crimson-200",
        hover: "hover:border-crimson-300",
        gradient: "from-crimson-50/20 to-crimson-100/20",
        helix: "stroke-crimson-500",
        helixOpacity: "opacity-30 group-hover:opacity-50",
        helixHover: "group-hover:opacity-50",
        accent: "bg-crimson-500",
        corner: "from-crimson-400/20 to-crimson-500/20",
      };
    case "purple":
      return {
        bg: "bg-purple-50",
        iconBg: "bg-purple-100",
        iconColor: "text-purple-600",
        border: "border-purple-200",
        hover: "hover:border-purple-300",
        gradient: "from-purple-500/20 to-purple-600/20",
        helix: "stroke-purple-500",
        helixOpacity: "opacity-40 group-hover:opacity-50",
        helixHover: "group-hover:opacity-50",
        accent: "bg-purple-500",
        corner: "from-purple-400/20 to-purple-500/20",
      };
    case "platinum":
      return {
        bg: "bg-zinc-50",
        iconBg: "bg-zinc-100",
        iconColor: "text-zinc-600",
        border: "border-zinc-200",
        hover: "hover:border-zinc-300",
        gradient: "from-zinc-500/20 to-zinc-600/20",
        helix: "stroke-zinc-500",
        helixOpacity: "opacity-40 group-hover:opacity-50",
        helixHover: "group-hover:opacity-50",
        accent: "bg-zinc-500",
        corner: "from-zinc-400/20 to-zinc-500/20",
      };
    default:
      return {
        bg: "bg-crimson-50",
        iconBg: "bg-crimson-100",
        iconColor: "text-crimson-600",
        border: "border-crimson-200",
        hover: "hover:border-crimson-300",
        gradient: "from-crimson-500/20 to-crimson-600/20",
        helix: "stroke-crimson-500",
        helixOpacity: "opacity-30 group-hover:opacity-50",
        helixHover: "group-hover:opacity-50",
        accent: "bg-crimson-500",
        corner: "from-crimson-400/20 to-crimson-500/20",
      };
  }
};

// DNA Helix Animation Component (no changes needed here)
const DNAHelix = ({ className, strokeClass }) => {
  /* ... (your existing DNAHelix component) ... */
  return (
    <div
      className={`absolute inset-0 w-full h-full overflow-hidden ${className}`}
    >
      <svg
        className="w-full h-full absolute top-0 left-0 animate-dna-rotate"
        viewBox="0 0 200 400"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Vertical strands */}
        <line
          x1="70"
          y1="0"
          x2="70"
          y2="400"
          className={`${strokeClass} opacity-10`}
          strokeWidth="1"
        />
        <line
          x1="130"
          y1="0"
          x2="130"
          y2="400"
          className={`${strokeClass} opacity-10`}
          strokeWidth="1"
        />

        {/* Horizontal rungs */}
        {Array.from({ length: 10 }).map((_, i) => (
          <g
            key={i}
            className="animate-dna-fade"
            style={{ animationDelay: `${i * 0.2}s` }}
          >
            <line
              x1="70"
              y1={40 * i + 20}
              x2="130"
              y2={40 * i + 20}
              className={strokeClass}
              strokeWidth="1.5"
              strokeDasharray="5,5"
            />
            <circle
              cx="70"
              cy={40 * i + 20}
              r="3"
              className={strokeClass}
              fill="none"
            />
            <circle
              cx="130"
              cy={40 * i + 20}
              r="3"
              className={strokeClass}
              fill="none"
            />
          </g>
        ))}

        {/* Curved connections */}
        <path
          d="M70,0 Q100,40 130,0"
          fill="none"
          className={strokeClass}
          strokeWidth="1"
          strokeDasharray="3,3"
        />
        <path
          d="M70,40 Q100,80 130,40"
          fill="none"
          className={strokeClass}
          strokeWidth="1"
          strokeDasharray="3,3"
        />
        <path
          d="M70,80 Q100,120 130,80"
          fill="none"
          className={strokeClass}
          strokeWidth="1"
          strokeDasharray="3,3"
        />
        <path
          d="M70,120 Q100,160 130,120"
          fill="none"
          className={strokeClass}
          strokeWidth="1"
          strokeDasharray="3,3"
        />
        <path
          d="M70,160 Q100,200 130,160"
          fill="none"
          className={strokeClass}
          strokeWidth="1"
          strokeDasharray="3,3"
        />
        <path
          d="M70,200 Q100,240 130,200"
          fill="none"
          className={strokeClass}
          strokeWidth="1"
          strokeDasharray="3,3"
        />
        <path
          d="M70,240 Q100,280 130,240"
          fill="none"
          className={strokeClass}
          strokeWidth="1"
          strokeDasharray="3,3"
        />
        <path
          d="M70,280 Q100,320 130,280"
          fill="none"
          className={strokeClass}
          strokeWidth="1"
          strokeDasharray="3,3"
        />
        <path
          d="M70,320 Q100,360 130,320"
          fill="none"
          className={strokeClass}
          strokeWidth="1"
          strokeDasharray="3,3"
        />
        <path
          d="M70,360 Q100,400 130,360"
          fill="none"
          className={strokeClass}
          strokeWidth="1"
          strokeDasharray="3,3"
        />
      </svg>

      {/* Second helix with offset for 3D effect */}
      <svg
        className="w-full h-full absolute top-0 left-0 animate-dna-rotate-reverse"
        viewBox="0 0 200 400"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: "translateX(10px)" }}
      >
        {/* Horizontal rungs */}
        {Array.from({ length: 10 }).map((_, i) => (
          <g
            key={i}
            className="animate-dna-fade"
            style={{ animationDelay: `${i * 0.2 + 0.1}s` }}
          >
            <line
              x1="70"
              y1={40 * i}
              x2="130"
              y2={40 * i}
              className={strokeClass}
              strokeWidth="1.5"
              strokeDasharray="5,5"
            />
            <circle
              cx="70"
              cy={40 * i}
              r="3"
              className={strokeClass}
              fill="none"
            />
            <circle
              cx="130"
              cy={40 * i}
              r="3"
              className={strokeClass}
              fill="none"
            />
          </g>
        ))}

        {/* Curved connections */}
        <path
          d="M70,20 Q100,60 130,20"
          fill="none"
          className={strokeClass}
          strokeWidth="1"
          strokeDasharray="3,3"
        />
        <path
          d="M70,60 Q100,100 130,60"
          fill="none"
          className={strokeClass}
          strokeWidth="1"
          strokeDasharray="3,3"
        />
        <path
          d="M70,100 Q100,140 130,100"
          fill="none"
          className={strokeClass}
          strokeWidth="1"
          strokeDasharray="3,3"
        />
        <path
          d="M70,140 Q100,180 130,140"
          fill="none"
          className={strokeClass}
          strokeWidth="1"
          strokeDasharray="3,3"
        />
        <path
          d="M70,180 Q100,220 130,180"
          fill="none"
          className={strokeClass}
          strokeWidth="1"
          strokeDasharray="3,3"
        />
        <path
          d="M70,220 Q100,260 130,220"
          fill="none"
          className={strokeClass}
          strokeWidth="1"
          strokeDasharray="3,3"
        />
        <path
          d="M70,260 Q100,300 130,260"
          fill="none"
          className={strokeClass}
          strokeWidth="1"
          strokeDasharray="3,3"
        />
        <path
          d="M70,300 Q100,340 130,300"
          fill="none"
          className={strokeClass}
          strokeWidth="1"
          strokeDasharray="3,3"
        />
        <path
          d="M70,340 Q100,380 130,340"
          fill="none"
          className={strokeClass}
          strokeWidth="1"
          strokeDasharray="3,3"
        />
        <path
          d="M70,380 Q100,420 130,380"
          fill="none"
          className={strokeClass}
          strokeWidth="1"
          strokeDasharray="3,3"
        />
      </svg>

      {/* Floating nucleotide particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className={`absolute w-1.5 h-1.5 rounded-full ${strokeClass.replace(
              "stroke",
              "bg"
            )} animate-float`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.3,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

// Floating molecules animation (no changes needed here)
const FloatingMolecules = ({ className }) => {
  /* ... (your existing FloatingMolecules component) ... */
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className="absolute animate-molecule-float"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${i * 1.5}s`,
            animationDuration: `${8 + Math.random() * 7}s`,
          }}
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            className="opacity-30"
          >
            <circle
              cx="15"
              cy="15"
              r="3"
              className={className.replace("opacity-", "")}
            />
            <circle
              cx="22"
              cy="15"
              r="2"
              className={className.replace("opacity-", "")}
            />
            <circle
              cx="15"
              cy="8"
              r="2"
              className={className.replace("opacity-", "")}
            />
            <circle
              cx="8"
              cy="15"
              r="2"
              className={className.replace("opacity-", "")}
            />
            <circle
              cx="15"
              cy="22"
              r="2"
              className={className.replace("opacity-", "")}
            />
            <line
              x1="15"
              y1="15"
              x2="22"
              y2="15"
              stroke="currentColor"
              strokeWidth="1"
            />
            <line
              x1="15"
              y1="15"
              x2="15"
              y2="8"
              stroke="currentColor"
              strokeWidth="1"
            />
            <line
              x1="15"
              y1="15"
              x2="8"
              y2="15"
              stroke="currentColor"
              strokeWidth="1"
            />
            <line
              x1="15"
              y1="15"
              x2="15"
              y2="22"
              stroke="currentColor"
              strokeWidth="1"
            />
          </svg>
        </div>
      ))}
    </div>
  );
};

// Hexagon SVG Component (no changes needed here)
const HexagonPattern = ({ className }) => (
  <svg
    className={`absolute inset-0 w-full h-full opacity-30 ${className}`}
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern
        id="hexagon-pattern"
        x="0"
        y="0"
        width="40"
        height="35"
        patternUnits="userSpaceOnUse"
      >
        <polygon
          points="20,5 35,15 35,25 20,35 5,25 5,15"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          opacity="0.3"
        />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#hexagon-pattern)" />

    {/* Floating hexagons */}
    <polygon
      points="60,20 75,30 75,40 60,50 45,40 45,30"
      className="animate-pulse"
      opacity="0.2"
    />
    <polygon
      points="140,60 155,70 155,80 140,90 125,80 125,70"
      className="animate-pulse"
      style={{ animationDelay: "1s" }}
      opacity="0.15"
    />
    <polygon
      points="80,120 95,130 95,140 80,150 65,140 65,130"
      className="animate-pulse"
      style={{ animationDelay: "2s" }}
      opacity="0.1"
    />
  </svg>
);

export default function DNAHelixCards({ categories }) {
  const cardRefs = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!cardRefs.current || cardRefs.current.length === 0) return;

      cardRefs.current.filter(Boolean).forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
          const xPercent = (x / rect.width - 0.5) * 2;
          const yPercent = (y / rect.height - 0.5) * 2;

          const dnaElement = card.querySelector(".dna-helix");
          if (dnaElement) {
            dnaElement.style.transform = `translate(${xPercent * 5}px, ${
              yPercent * 5
            }px)`;
          }
        } else {
          const dnaElement = card.querySelector(".dna-helix");
          if (dnaElement) {
            dnaElement.style.transform = `translate(0px, 0px)`;
          }
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {categories.map((category, index) => {
        const colorClasses = getColorClasses(category.color);
        // --- CHANGE HERE: Get the IconComponent from the LucideIcons map ---
        const IconComponent = LucideIcons[category.icon]; // Look up the component by string name
        const isNonClickable = category.href === "#";

        // Ensure IconComponent exists, if not, use a fallback (e.g., MoreHorizontal or null)
        if (!IconComponent) {
          console.warn(
            `Icon "${category.icon}" not found in LucideIcons map. Using MoreHorizontal as fallback.`
          );
          // You might want to use a default icon like MoreHorizontal if the specified icon isn't found
          // IconComponent = LucideIcons.MoreHorizontal || (() => null);
          // For now, let's assume all icons are correctly mapped. If you hit this often, uncomment the fallback.
          return null; // Or render an empty div, or fallback icon
        }

        return isNonClickable ? (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className={`group h-full transition-all duration-500 ${colorClasses.border}
                          border-platinum-100 bg-platinum-200 cursor-not-allowed
                          relative overflow-hidden backdrop-blur-sm`}
          >
            <CardContent className="p-6 relative z-10">
              <div className="space-y-4">
                {/* Icon Container with Modern Design */}
                <div className="relative">
                  <div
                    className={`w-16 h-16 bg-platinum-500 rounded-2xl flex items-center justify-center
                                  relative overflow-hidden`}
                  >
                    {/* Icon background hexagon */}
                    <div className="absolute inset-0 opacity-20">
                      <svg viewBox="0 0 64 64" className="w-full h-full">
                        <polygon
                          points="32,8 48,18 48,38 32,48 16,38 16,18"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1"
                          opacity="0.3"
                        />
                      </svg>
                    </div>
                    <IconComponent
                      className={`h-8 w-8 text-platinum-900 relative z-10`}
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-platinum-950 leading-tight">
                    {category.title}
                  </h3>
                  <p className="text-platinum-900 text-sm leading-relaxed">
                    {category.description}
                  </p>
                </div>

                {/* Modern CTA with Arrow Animation (disabled) */}
                <div className="pt-3 flex items-center justify-between">
                  <span className={`text-sm font-semibold text-platinum-900`}>
                    Coming soon
                  </span>
                  {/* No arrow animation for disabled cards */}
                </div>
              </div>
            </CardContent>
          </div>
        ) : (
          <Link key={index} href={category.href} className="group">
            <Card
              ref={(el) => (cardRefs.current[index] = el)}
              className={`h-full transition-all duration-500 ${colorClasses.border} ${colorClasses.hover} hover:shadow-2xl hover:shadow-black/10 cursor-pointer relative overflow-hidden backdrop-blur-sm`}
            >
              {/* DNA Helix Background */}
              <div
                className={`dna-helix absolute inset-0 w-full h-full
                              transition-opacity duration-500 ease-in-out
                              ${colorClasses.helixOpacity}
                              ${colorClasses.helixHover}
                              `}
              >
                <DNAHelix
                  className="scale-125"
                  strokeClass={colorClasses.helix}
                />
              </div>

              {/* Floating molecules */}
              <FloatingMolecules
                className={`${colorClasses.helix} opacity-30
                              group-hover:opacity-40 transition-opacity duration-500`}
              />

              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${colorClasses.gradient}
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Animated Border Effect */}
              <div className="absolute inset-0 rounded-lg">
                <div
                  className={`absolute inset-0 rounded-lg bg-gradient-to-r ${colorClasses.gradient}
                                opacity-0 group-hover:opacity-50 blur-sm transition-all duration-500`}
                />
              </div>

              <CardContent className="p-6 relative z-10 flex flex-col h-full">
                {/* Wrap content above "Learn more" with flex-grow */}
                <div className="space-y-4 flex-grow">
                  {/* Icon Container with Modern Design */}
                  <div className="relative">
                    <div
                      className={`w-16 h-16 ${colorClasses.iconBg} rounded-2xl flex items-center justify-center
                                  group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 relative overflow-hidden`}
                    >
                      {/* Icon background hexagon */}
                      <div className="absolute inset-0 opacity-20">
                        <svg viewBox="0 0 64 64" className="w-full h-full">
                          <polygon
                            points="32,8 48,18 48,38 32,48 16,38 16,18"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1"
                            opacity="0.3"
                            className="group-hover:animate-hexagon-pulse"
                          />
                        </svg>
                      </div>
                      {IconComponent && ( // Render IconComponent only if it's found
                        <IconComponent
                          className={`h-8 w-8 ${colorClasses.iconColor} relative z-10`}
                        />
                      )}
                    </div>

                    {/* Floating particles effect */}
                    <div
                      className={`absolute -top-1 -right-1 w-3 h-3 bg-current rounded-full
                                  opacity-0 group-hover:opacity-30 group-hover:animate-ping`}
                      style={{
                        color: colorClasses.iconColor.replace("text-", ""),
                      }}
                    />
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-black/90 group-hover:text-black transition-colors duration-300 leading-tight">
                      {category.title}
                    </h3>
                    <p className="text-platinum-950 text-sm leading-relaxed group-hover:text-platinum-950 transition-colors duration-300">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Modern CTA with Arrow Animation - this will now be pushed to the bottom */}
                <div className="pt-3 flex items-center justify-between mt-auto">
                  <span
                    className={`text-sm font-semibold text-black group-hover:underline transition-all duration-300`}
                  >
                    Learn more
                  </span>
                  <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    <div
                      className={`w-1 h-1 rounded-full ${colorClasses.iconBg}`}
                    />
                    <div
                      className={`w-2 h-1 rounded-full ${colorClasses.iconBg}`}
                    />
                    <div
                      className={`w-3 h-1 rounded-full ${colorClasses.iconBg}`}
                    />
                  </div>
                </div>
              </CardContent>

              {/* Corner Accent */}
              <div
                className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${colorClasses.corner}
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                style={{ clipPath: "polygon(100% 0%, 0% 0%, 100% 100%)" }}
              />
            </Card>
          </Link>
        );
      })}
    </>
  );
}

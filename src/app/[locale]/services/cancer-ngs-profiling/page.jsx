import { Card, CardContent } from "@/components/ui/card";
import { Microscope, Droplet, Dna, ShieldOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { useTranslations } from "next-intl";
import DNAHelixCards from "@/components/HelixCard";

// Hexagon SVG Component - Copied from the first component
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
          opacity="0.4"
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

const getColorClasses = (color) => {
  switch (color) {
    case "teal":
      return {
        bg: "bg-teal-50",
        iconBg: "bg-teal-100",
        iconColor: "text-teal-600",
        border: "border-teal-200",
        hover: "hover:border-teal-300",
        gradient: "from-teal-100 to-white", // Added gradient for teal
      };
    case "crimson":
      return {
        bg: "bg-crimson-50",
        iconBg: "bg-crimson-100",
        iconColor: "text-crimson-600",
        border: "border-crimson-200",
        gradient: "from-crimson-300/20 to-crimson-200/20",
        hexagon: "fill-crimson-500/10", // Added gradient for crimson
      };
    case "purple":
      return {
        bg: "bg-purple-50",
        iconBg: "bg-purple-100",
        iconColor: "text-purple-600",
        border: "border-purple-200",
        hover: "hover:border-purple-300",
        gradient: "from-purple-100 to-white", // Added gradient for purple
      };

    default:
      return {
        bg: "bg-crimson-50",
        iconBg: "bg-crimson-100",
        iconColor: "text-crimson-600",
        border: "border-crimson-200",
        hover: "hover:border-crimson-300",
        gradient: "from-crimson-100 to-white", // Default gradient
      };
  }
};

export default function GeneticDisordersIllustrated() {
  const t = useTranslations();
  const geneticDisorders = [
    {
      title: t("link.services.cancer_ngs_profiling.items.tumor_profiling_ngs"),
      description: "Comprehensive genomic analysis of tumor tissue",
      href: "#",
      href1: "#",
      icon: "Microscope",
      color: "platinum",
      comingSoon: true,
    },
    {
      title: t("link.services.cancer_ngs_profiling.items.liquid_biopsies_ngs"),
      description: "Non-invasive cancer detection from blood samples",
      href: "#",
      href1: "#",
      icon: "Droplet",
      color: "platinum",
      comingSoon: true,
    },
    {
      title: t(
        "link.services.cancer_ngs_profiling.items.hereditary_cancer_screening"
      ),
      description: "Identification of inherited cancer risk factors",
      href: "/services/cancer-ngs-profiling/hereditary-cancer-screening",
      href1: "/services/cancer-ngs-profiling/hereditary-cancer-screening",
      icon: "Dna",
      color: "crimson",
      comingSoon: false,
    },
    {
      title: t(
        "link.services.cancer_ngs_profiling.items.cancer_drug_resistance_monitoring"
      ),
      description: "Tracking treatment response and resistance development",
      href: "#",
      href1: "#",
      icon: "ShieldOff",
      color: "platinum",
      comingSoon: true,
    },
  ];
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-black to-crimson-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/genetic-disorders.webp?height=500&width=1000"
            alt="DNA double helix"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Cancer NGS profiling
              </h1>
              <p className="text-xl text-platinum-100 mb-8 max-w-lg">
                Advanced genomic analysis to unlock insights about your health
                and empower personalized care decisions.
              </p>
            </div>
          </div>
        </div>

        <div
          className="absolute -bottom-1 left-0 right-0 h-16 bg-white"
          style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 100%)" }}
        ></div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-platinum-950 mb-4 text-center">
              Understanding Genetic Testing
            </h2>
            <div className="flex justify-center items-center gap-1 pb-4">
              <div className="h-1 w-20 bg-crimson-500 rounded-full"></div>
              <div className="h-1 w-10 bg-crimson-300 rounded-full"></div>
              <div className="h-1 w-5 bg-crimson-200 rounded-full"></div>
            </div>
            <div className="prose prose-lg max-w-none">
              <p>
                Genetic disorders can affect many different systems in the body
                — from how we process nutrients to how our brain, muscles, and
                immune system function. These conditions are often caused by
                changes in our DNA that are present from birth, even if no
                symptoms are immediately visible. With next-generation
                sequencing (NGS) technology, we can now identify these inherited
                risks early — using a simple, non-invasive cheek swab.
              </p>
              <p>
                ATENA Genomics offers a broad range of genetic NGS testing
                options to help you better understand your health. Below, you'll
                find an overview of the key categories — including proactive
                health screening, hereditary cancers, neurological and metabolic
                conditions, and more — all designed to support early detection,
                prevention, and personalized care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testing Categories */}
      <section className="py-16 bg-platinum-50">
        <div className="container mx-auto px-4 ">
          <h2 className="text-4xl font-bold text-center text-platinum-950 mb-4">
            Our Testing Categories
          </h2>
          <p className="text-lg text-platinum-950 text-center mb-16 max-w-4xl mx-auto">
            Explore our comprehensive range of genetic testing options designed
            to provide insights into various aspects of your health
          </p>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 px-4">
          <DNAHelixCards categories={geneticDisorders} />
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-platinum-950 mb-16">
              How It Works
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-crimson-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-crimson-600">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Simple Collection
                </h3>
                <p className="text-platinum-950">
                  Quick and painless cheek swab that can be done at home or in
                  our clinic
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-crimson-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-crimson-600">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Advanced Analysis
                </h3>
                <p className="text-platinum-950">
                  State-of-the-art NGS technology to analyze your DNA with high
                  precision
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-crimson-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-crimson-600">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Personalized Results
                </h3>
                <p className="text-platinum-950">
                  Comprehensive report with expert consultation to understand
                  your results
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-crimson-300 to-crimson-500 text-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Discover Your Genetic Profile?
            </h2>
            <p className="text-xl text-black/80 mb-8">
              Take the first step towards personalized healthcare with our
              advanced genetic testing options.
            </p>
            <Link href={"/contact"}>
              <button className="px-8 py-4 bg-white text-crimson-600 font-medium rounded-full hover:bg-crimson-50 transition-colors text-lg">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

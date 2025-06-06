import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dna,
  Brain,
  Baby,
  Zap,
  Shield,
  FileSearch,
  MoreHorizontal,
} from "lucide-react";
import Link from "next/link";

const testingCategories = [
  {
    title: "Proactive Genomic Health Screening",
    description:
      "Comprehensive genetic screening to identify health risks before symptoms appear",
    icon: Dna,
    color: "crimson",
    href: "/services/genetic-disorders-ngs/proactive-genomic-health-screening",
  },
  {
    title: "Neurological and Neuromuscular Disorders",
    description:
      "Testing for conditions affecting the nervous and muscular systems",
    icon: Brain,
    color: "crimson",
    href: "/services/genetic-disorders-ngs/neurological-neuromuscular-disorders",
  },
  {
    title: "Developmental and Intellectual Disabilities",
    description: "Genetic insights into cognitive and developmental traits",
    icon: Baby,
    color: "crimson",
    href: "/services/genetic-disorders-ngs/developmental-intellectual-disabilities",
  },
  {
    title: "Metabolic and Mitochondrial Disorders",
    description:
      "Understanding genetic factors affecting metabolism and energy production",
    icon: Zap,
    color: "crimson",
    href: "/services/genetic-disorders-ngs/metabolic-mitochondrial-disorders",
  },
  {
    title: "Immunological Disorders",
    description: "Genetic testing for immune system related conditions",
    icon: Shield,
    color: "crimson",
    href: "/services/genetic-disorders-ngs/proactive-genomic-health-screening",
  },
  {
    title: "Rare Genetic Disorders",
    description:
      "Comprehensive testing for rare and unexplained genetic conditions",
    icon: FileSearch,
    color: "crimson",
    href: "/services/genetic-disorders-ngs/proactive-genomic-health-screening",
  },
  /*   {
    title: "Other",
    description: "Additional genetic testing options and specialized services",
    icon: MoreHorizontal,
    color: "crimson",
    href: "/other-testing",
  }, */
];

const getColorClasses = (color) => {
  switch (color) {
    case "teal":
      return {
        bg: "bg-teal-50",
        iconBg: "bg-teal-100",
        iconColor: "text-teal-600",
        border: "border-teal-200",
        hover: "hover:border-teal-300",
      };
    case "crimson":
      return {
        bg: "bg-crimson-50",
        iconBg: "bg-crimson-100",
        iconColor: "text-crimson-600",
        border: "border-crimson-200",
        hover: "hover:border-crimson-300",
        gradient: "hover:border-crimson-300",
        hexagon: "fill-crimson-500/10",
      };
    case "purple":
      return {
        bg: "bg-purple-50",
        iconBg: "bg-purple-100",
        iconColor: "text-purple-600",
        border: "border-purple-200",
        hover: "hover:border-purple-300",
      };

    default:
      return {
        bg: "bg-crimson-50",
        iconBg: "bg-crimson-100",
        iconColor: "text-crimson-600",
        border: "border-crimson-200",
        hover: "hover:border-crimson-300",
      };
  }
};
// Hexagon SVG Component
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

export default function GeneticDisordersNgs() {
  return (
    <div className="flex flex-col  justify-center items-center w-full">
      <main className="w-full ">
        {/* Hero Section */}
        <section className="min-w-max z-[-1] relative h-[300px] md:h-[400px] lg:h-[500px]">
          <Image
            src="/genetic-disorders.webp?height=500&width=1000"
            alt="DNA double helix"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center">
            <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold text-center">
              Genetic disorders
            </h2>
            {/*
             */}
          </div>
        </section>
        <div className="container mx-auto py-12 px-4 md:px-6">
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Header Section */}
            <div className="space-y-6">
              <div className="text-center space-y-4">
                <h1 className="text-4xl font-bold tracking-tight text-platinum-950 md:text-5xl">
                  Genetic Disorders NGS Testing
                </h1>
                <div className="flex justify-center items-center gap-2">
                  <div className="h-1 w-20 bg-crimson-500 rounded-full"></div>
                  <div className="h-1 w-10 bg-crimson-300 rounded-full"></div>
                  <div className="h-1 w-5 bg-crimson-200 rounded-full"></div>
                </div>
              </div>

              <div className="max-w-6xl mx-auto">
                <p className="text-lg text-platinum-950 leading-relaxed">
                  Genetic disorders can affect many different systems in the
                  body — from how we process nutrients to how our brain,
                  muscles, and immune system function. These conditions are
                  often caused by changes in our DNA that are present from
                  birth, even if no symptoms are immediately visible. With
                  next-generation sequencing (NGS) technology, we can now
                  identify these inherited risks early — using a simple,
                  non-invasive cheek swab.
                </p>
                <p className="text-lg text-platinum-950 leading-relaxed mt-4">
                  ATENA Genomics offers a broad range of genetic NGS testing
                  options to help you better understand your health. Below,
                  you&apos;ll find an overview of the key categories — including
                  proactive health screening, hereditary cancers, neurological
                  and metabolic conditions, and more — all designed to support
                  early detection, prevention, and personalized care.
                </p>
              </div>
            </div>

            {/* Testing Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testingCategories.map((category, index) => {
                const colorClasses = getColorClasses(category.color);
                const IconComponent = category.icon;

                return (
                  <Link key={index} href={category.href} className="group">
                    <Card
                      className={`h-full transition-all duration-500 ${colorClasses.border} ${colorClasses.hover} hover:shadow-2xl hover:shadow-black/10 cursor-pointer relative overflow-hidden backdrop-blur-sm`}
                    >
                      {/* Hexagon Background Pattern */}
                      <div className="absolute inset-0 opacity-20">
                        <HexagonPattern className={colorClasses.hexagon} />
                      </div>

                      {/* Gradient Overlay */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${colorClasses.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                      />

                      {/* Animated Border Effect */}
                      <div className="absolute inset-0 rounded-lg">
                        <div
                          className={`absolute inset-0 rounded-lg bg-gradient-to-r ${colorClasses.gradient} opacity-0 group-hover:opacity-50 blur-sm transition-all duration-500`}
                        />
                      </div>

                      <CardContent className="p-6 relative z-10">
                        <div className="space-y-4">
                          {/* Icon Container with Modern Design */}
                          <div className="relative">
                            <div
                              className={`w-16 h-16 ${colorClasses.iconBg} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 relative overflow-hidden`}
                            >
                              {/* Icon background hexagon */}
                              <div className="absolute inset-0 opacity-20">
                                <svg
                                  viewBox="0 0 64 64"
                                  className="w-full h-full"
                                >
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
                                className={`h-8 w-8 ${colorClasses.iconColor} relative z-10`}
                              />
                            </div>

                            {/* Floating particles effect */}
                            <div
                              className="absolute -top-1 -right-1 w-3 h-3 bg-current rounded-full opacity-0 group-hover:opacity-30 group-hover:animate-ping"
                              style={{
                                color: colorClasses.iconColor.replace(
                                  "text-",
                                  ""
                                ),
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

                          {/* Modern CTA with Arrow Animation */}
                          <div className="pt-3 flex items-center justify-between">
                            <span
                              className={`text-sm font-semibold text-black/90 group-hover:underline transition-all duration-300`}
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
                        </div>
                      </CardContent>

                      {/* Corner Accent */}
                      <div
                        className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${colorClasses.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                        style={{
                          clipPath: "polygon(100% 0%, 0% 0%, 100% 100%)",
                        }}
                      />
                    </Card>
                  </Link>
                );
              })}
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-crimson-300 to-crimson-400 rounded-xl p-8 text-black">
              <div className="max-w-3xl mx-auto text-center space-y-4">
                <h3 className="text-2xl font-bold">
                  Ready to Explore Your Genetic Health?
                </h3>
                <p className="text-black/90">
                  Take the first step towards understanding your genetic profile
                  with our comprehensive NGS testing options. Our team is here
                  to guide you through the process and help you make informed
                  decisions about your health.
                </p>
                <Link href={"/contact"}>
                  <button className="mt-4 bg-white text-black hover:bg-crimson-50 px-6 py-3 rounded-lg font-medium transition-colors">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

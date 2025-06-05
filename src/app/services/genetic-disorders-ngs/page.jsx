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
    href: "/proactive-screening",
  },
  {
    title: "Neurological and Neuromuscular Disorders",
    description:
      "Testing for conditions affecting the nervous and muscular systems",
    icon: Brain,
    color: "crimson",
    href: "/neurological-disorders",
  },
  {
    title: "Developmental and Intellectual Disabilities",
    description: "Genetic insights into cognitive and developmental traits",
    icon: Baby,
    color: "crimson",
    href: "/developmental-disabilities",
  },
  {
    title: "Metabolic and Mitochondrial Disorders",
    description:
      "Understanding genetic factors affecting metabolism and energy production",
    icon: Zap,
    color: "crimson",
    href: "/metabolic-disorders",
  },
  {
    title: "Immunological Disorders",
    description: "Genetic testing for immune system related conditions",
    icon: Shield,
    color: "crimson",
    href: "/immunological-disorders",
  },
  {
    title: "Rare Genetic Disorders",
    description:
      "Comprehensive testing for rare and unexplained genetic conditions",
    icon: FileSearch,
    color: "crimson",
    href: "/rare-disorders",
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
                <p className="text-lg text-platinum-900 leading-relaxed">
                  Genetic disorders can affect many different systems in the
                  body — from how we process nutrients to how our brain,
                  muscles, and immune system function. These conditions are
                  often caused by changes in our DNA that are present from
                  birth, even if no symptoms are immediately visible. With
                  next-generation sequencing (NGS) technology, we can now
                  identify these inherited risks early — using a simple,
                  non-invasive cheek swab.
                </p>
                <p className="text-lg text-platinum-900 leading-relaxed mt-4">
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
                      className={`h-full transition-all duration-300 ${colorClasses.border} ${colorClasses.hover} hover:shadow-lg cursor-pointer`}
                    >
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <div
                            className={`w-12 h-12 ${colorClasses.iconBg} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                          >
                            <IconComponent
                              className={`h-6 w-6 ${colorClasses.iconColor}`}
                            />
                          </div>

                          <div className="space-y-2">
                            <h3 className="text-xl font-semibold text-black/90 group-hover:text-black/80 transition-colors">
                              {category.title}
                            </h3>
                            <p className="text-platinum-900 text-sm leading-relaxed">
                              {category.description}
                            </p>
                          </div>

                          <div className="pt-2">
                            <span
                              className={`text-sm font-medium ${colorClasses.iconColor} group-hover:underline`}
                            >
                              Learn more →
                            </span>
                          </div>
                        </div>
                      </CardContent>
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
                <button className="mt-4 bg-white text-black hover:bg-crimson-50 px-6 py-3 rounded-lg font-medium transition-colors">
                  Contact Us Today
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

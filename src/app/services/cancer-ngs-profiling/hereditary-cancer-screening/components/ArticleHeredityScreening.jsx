"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Heart, Dna, Shield } from "lucide-react";
import Image from "next/image";

import { useState } from "react";

export default function ArticleHeredityScreening() {
  const [selectedFamilyMember, setSelectedFamilyMember] = useState(null);

  const familyTree = [
    { id: 1, name: "Grandparent", risk: "Medium" },
    { id: 2, name: "Parent", risk: "High" },
    { id: 3, name: "Sibling", risk: "Low" },
    { id: 4, name: "You", risk: "Unknown" },
    { id: 5, name: "Child", risk: "Unknown" },
  ];

  return (
    <div className="flex flex-col  justify-center items-center w-full">
      <main className="w-full ">
        {/* Hero Section */}
        <section className="min-w-max z-[-1] relative h-[300px] md:h-[400px] lg:h-[500px]">
          <Image
            src="/hereditary-cancer-screening.webp?height=500&width=1000"
            alt="DNA double helix"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
            <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold text-center">
              Hereditary Cancer Screening
            </h2>
            <p className="text-white mt-2 text-center text-lg md:text-xl lg:text-2xl">
              Simple testing. Powerful knowledge. Healthier choices.
            </p>
          </div>
        </section>

        {/* Info Section */}
        <div className="container mx-auto py-12 px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-10">
            {/* Header Section */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-platinum-950 md:text-4xl">
                What is Hereditary Cancer Screening?
              </h2>
              <div className="flex items-center gap-2">
                <div className="h-1 w-20 bg-crimson-500 rounded-full"></div>
                <div className="h-1 w-10 bg-crimson-300 rounded-full"></div>
                <div className="h-1 w-5 bg-crimson-200 rounded-full"></div>
              </div>
              <p className="text-platinum-900 text-lg font-medium">
                Know your genetic cancer risks before symptoms appear
              </p>
            </div>

            {/* Main Content Section */}
            <div className="space-y-8">
              <Card className="border-crimson-100">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex-shrink-0 bg-crimson-100 p-4 rounded-full">
                      <Heart className="h-10 w-10 text-crimson-600" />
                    </div>
                    <div>
                      <p className="text-platinum-900 leading-relaxed">
                        Certain genetic mutations, which can be inherited, can
                        significantly increase the risk of developing cancer,
                        often before any symptoms appear. Through hereditary
                        cancer screening, your DNA is analyzed to identify
                        inherited changes linked to cancers such as breast,
                        ovarian, colorectal, prostate, pancreatic, lung,
                        melanoma, and others.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-crimson-100 bg-gradient-to-br from-crimson-50 to-white">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex-shrink-0 bg-crimson-100 p-4 rounded-full">
                      <Dna className="h-10 w-10 text-crimson-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-platinum-950">
                        Testing Process
                      </h3>
                      <p className="text-platinum-900 leading-relaxed">
                        A simple and non-invasive buccal swab is collected. The
                        DNA from the swab is then analyzed using next-generation
                        sequencing (NGS) technology, allowing you to uncover
                        vital information about your genetic risks.
                      </p>
                      <p className="text-platinum-900 leading-relaxed mt-3">
                        Depending on your needs, the analysis can focus on
                        specific groups of genes (targeted panels), all
                        protein-coding regions (whole exome sequencing - WES),
                        or your entire genetic code (whole genome sequencing -
                        WGS), providing different levels of detail and insight.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-crimson-100">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex-shrink-0 bg-crimson-100 p-4 rounded-full">
                      <Shield className="h-10 w-10 text-crimson-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-platinum-950">
                        Empowering Your Health Journey
                      </h3>
                      <p className="text-platinum-900 leading-relaxed">
                        Understanding your genetic profile empowers you to take
                        proactive steps for early detection, prevention, and
                        better health outcomes. Your genes are part of your
                        story — knowing them can help you protect your health
                        and shape your future.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-crimson-300 to-crimson-400 rounded-xl p-8 text-black">
              <div className="max-w-3xl mx-auto text-center space-y-4">
                <h3 className="text-2xl font-bold">
                  Take Control of Your Cancer Risk
                </h3>
                <p className="text-black/90">
                  Discover your hereditary cancer risks and take proactive steps
                  toward prevention and early detection. Knowledge is power when
                  it comes to your health.
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

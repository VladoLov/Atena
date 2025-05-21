"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
            src="/hereditary-cancer-screening.png?height=500&width=1000"
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
        <section className="py-8 bg-background min-w-screen items-center md:mx-6 lg:mx-auto mx-4">
          <div className="container-md flex items-center justify-center mx-auto">
            <div className="mb-4 max-w-7xl">
              <h3 className="text-2xl font-semibold mb-4 ">
                What is Heredity Screening?
              </h3>
              <p className="text-platinum-900">
                § Certain genetic mutations, which can be inherited, can
                significantly increase the risk of developing cancer, often
                before any symptoms appear. Through hereditary cancer screening,
                your DNA is analyzed to identify inherited changes linked to
                cancers such as breast, ovarian, colorectal, prostate,
                pancreatic, lung, melanoma, and others. A simple and
                non-invasive buccal swab is collected. The DNA from the swab is
                then analyzed using next-generation sequencing (NGS) technology,
                allowing you to uncover vital information about your genetic
                risks. Depending on your needs, the analysis can focus on
                specific groups of genes targeted panels, all protein-coding
                regions whole exome sequencing (WES), or your entire genetic
                code whole genome sequencing (WGS), providing different levels
                of detail and insight. Understanding your genetic profile
                empowers you to take proactive steps for early detection,
                prevention, and better health outcomes. Your genes are part of
                your story — knowing them can help you protect your health and
                shape your future.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

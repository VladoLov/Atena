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
            src="/2400-dna-molecule-spiral-structure-model.jpg?height=500&width=1000"
            alt="DNA double helix"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold text-center">
              Understand Your Genetic Legacy
            </h2>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-8 bg-background min-w-screen items-center md:mx-6 lg:mx-auto mx-4">
          <div className="container-md flex items-center justify-center mx-auto">
            <div className="grid max-w-screen-lg md:max-w-screen-md items-center grid-cols-1 md:grid-cols-2 lg:gap-x-32 mx-auto">
              <div className="mb-4">
                <h3 className="text-2xl font-semibold mb-4 ">
                  What is Heredity Screening?
                </h3>
                <p className="text-muted-foreground">
                  Heredity screening is a process that examines your genetic
                  makeup to identify potential inherited health risks. By
                  analyzing your DNA, we can provide insights into your
                  predisposition to certain genetic conditions and help you make
                  informed decisions about your health.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  Why is it Important?
                </h3>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>Early detection of genetic risks</li>
                  <li>Personalized prevention strategies</li>
                  <li>Informed family planning decisions</li>
                  <li>Tailored medical care based on your genetic profile</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Family Tree */}
        <section className="py-12 bg-muted">
          <div className="container-lg ">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Explore Your Family&apos;s Genetic Risk
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {familyTree.map((member) => (
                <Button
                  key={member.id}
                  variant={
                    selectedFamilyMember === member.id ? "default" : "outline"
                  }
                  onClick={() => setSelectedFamilyMember(member.id)}
                >
                  {member.name}
                </Button>
              ))}
            </div>
            {selectedFamilyMember && (
              <Card className="mt-6 max-w-md mx-auto">
                <CardHeader>
                  <CardTitle>
                    {
                      familyTree.find((m) => m.id === selectedFamilyMember)
                        ?.name
                    }
                  </CardTitle>
                  <CardDescription>Genetic Risk Profile</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Risk Level:{" "}
                    {
                      familyTree.find((m) => m.id === selectedFamilyMember)
                        ?.risk
                    }
                  </p>
                  <p className="mt-2">
                    {selectedFamilyMember === 4
                      ? "Schedule a screening to learn about your genetic risk profile."
                      : "This family member's risk level can provide insights into your own genetic predispositions."}
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 bg-background max-w-screen-lg mx-auto">
          <div className="container-lg mx-auto ">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Frequently Asked Questions
            </h3>
            <Accordion
              type="single"
              collapsible
              className="max-w-2xl lg:mx-auto mx-4"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  Is heredity screening painful?
                </AccordionTrigger>
                <AccordionContent>
                  No, heredity screening is typically done through a simple
                  blood test or cheek swab, which is quick and painless.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  How long does it take to get results?
                </AccordionTrigger>
                <AccordionContent>
                  Results usually take 2-4 weeks, depending on the complexity of
                  the tests performed.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Is my genetic information kept confidential?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, we adhere to strict privacy regulations to ensure your
                  genetic information is kept confidential and secure.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-crimson-500 text-black ">
          <div className="container-lg text-center">
            <h3 className="text-2xl font-semibold mb-4">
              Take Control of Your Genetic Health
            </h3>
            <p className="mb-6 max-w-2xl mx-auto">
              Schedule your heredity screening today and gain valuable insights
              into your genetic predispositions.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="hover:bg-platinum-50"
            >
              Schedule Your Screening
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}

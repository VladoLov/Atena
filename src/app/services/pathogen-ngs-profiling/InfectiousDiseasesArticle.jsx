"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  BrainCircuit,
  Shield,
  Syringe,
  Droplet,
  Users,
  TriangleAlert,
} from "lucide-react";
import Image from "next/image";

export default function InfectiousDiseases() {
  const [activeSection, setActiveSection] = useState("overview");

  const diseases = [
    {
      name: "COVID-19",
      icon: <BrainCircuit className="w-6 h-6" />,
      color: "bg-red-500",
    },
    {
      name: "Influenza",
      icon: <Droplet className="w-6 h-6" />,
      color: "bg-blue-500",
    },
    {
      name: "Tuberculosis",
      icon: <TriangleAlert className="w-6 h-6" />,
      color: "bg-yellow-500",
    },
    {
      name: "HIV/AIDS",
      icon: <Shield className="w-6 h-6" />,
      color: "fill-crimson-500",
    },
  ];

  const preventionMethods = [
    {
      name: "Vaccination",
      icon: <Syringe className="w-6 h-6" />,
      description: "Get vaccinated against preventable infectious diseases.",
    },
    {
      name: "Hand Hygiene",
      icon: <Droplet className="w-6 h-6" />,
      description:
        "Wash hands frequently with soap and water or use hand sanitizer.",
    },
    {
      name: "Social Distancing",
      icon: <Users className="w-6 h-6" />,
      description:
        "Maintain physical distance from others, especially when sick.",
    },
    {
      name: "Mask Wearing",
      icon: <Shield className="w-6 h-6" />,
      description:
        "Wear masks in public settings to reduce the spread of airborne pathogens.",
    },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "overview":
        return (
          <div className="space-y-4 ">
            <p className="text-lg text-gray-700">
              Infectious diseases are disorders caused by organisms such as
              bacteria, viruses, fungi or parasites. Many organisms live in and
              on our bodies. They&apos;re normally harmless or even helpful. But
              under certain conditions, some organisms may cause disease.
            </p>
            <p className="text-lg text-gray-700">
              Our Infectious Diseases department specializes in the diagnosis,
              treatment, and prevention of these complex illnesses. We offer
              comprehensive care and cutting-edge research to combat a wide
              range of infectious diseases.
            </p>
          </div>
        );
      case "diseases":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {diseases.map((disease) => (
              <Card key={disease.name} className="overflow-hidden">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div
                    className={`w-12 h-12 rounded-full ${disease.color} flex items-center justify-center flex-shrink-0 text-crimson-500`}
                  >
                    {disease.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {disease.name}
                    </h3>
                    <p className="text-gray-600">
                      Click to learn more about {disease.name}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        );
      case "prevention":
        return (
          <div className="space-y-6">
            {preventionMethods.map((method) => (
              <div key={method.name} className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 text-crimson-500">
                  {method.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {method.name}
                  </h3>
                  <p className="text-gray-600">{method.description}</p>
                </div>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Image
        src="/infectious-diseases.jpeg"
        alt="Reproductive Health Illustration"
        width={1920}
        height={1080}
        className="w-full max-w-screen object-cover h-[45vh]"
      />
      <div className="max-w-7xl mx-auto  py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-green-900 mb-4 text-center">
          Infectious Diseases Center
        </h1>
        <p className="text-xl text-green-700 mb-12 text-center max-w-3xl mx-auto">
          Providing expert care, research, and prevention strategies for
          infectious diseases.
        </p>

        <div className="flex justify-center space-x-4 mb-8">
          {["overview", "diseases", "prevention"].map((section) => (
            <Button
              key={section}
              onClick={() => setActiveSection(section)}
              variant={activeSection === section ? "default" : "outline"}
              className="capitalize"
            >
              {section}
            </Button>
          ))}
        </div>

        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-platinum-50 p-8 rounded-lg shadow-lg"
        >
          {renderContent()}
        </motion.div>

        <div className="mt-12 bg-green-900 text-black p-8 rounded-lg text-center">
          <h2 className="text-3xl font-semibold mb-4">Need Expert Advice?</h2>
          <p className="text-xl mb-6">
            Our team of infectious disease specialists is here to provide you
            with the highest quality care and support.
          </p>
          <Button
            size="lg"
            className="bg-crimson-500 text-green-900 hover:bg-green-100"
          >
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Brain,
  Zap,
  EyeOff,
  HeartPulse,
  Stethoscope,
  Activity,
} from "lucide-react";
import Image from "next/image";

export default function NeurologuArticle() {
  const [activeCondition, setActiveCondition] = useState(null);

  const conditions = [
    {
      name: "Epilepsy",
      icon: <Zap className="w-6 h-6" />,
      color: "text-crimson-500",
    },
    {
      name: "Stroke",
      icon: <Brain className="w-6 h-6" />,
      color: "text-crimson-500",
    },
    {
      name: "Migraine",
      icon: <EyeOff className="w-6 h-6" />,
      color: "text-crimson-500",
    },
    {
      name: "Parkinson's",
      icon: <Activity className="w-6 h-6" />,
      color: "text-crimson-500",
    },
  ];

  const services = [
    {
      name: "Diagnostic Services",
      description:
        "State-of-the-art neurological testing including EEG, MRI, and CT scans.",
      icon: <Stethoscope className="w-6 h-6 text-crimson-500" />,
    },
    {
      name: "Treatment Programs",
      description:
        "Personalized treatment plans for a wide range of neurological conditions.",
      icon: <HeartPulse className="w-6 h-6 text-crimson-500" />,
    },
    {
      name: "Rehabilitation",
      description:
        "Comprehensive rehabilitation services to help patients regain function and independence.",
      icon: <Activity className="w-6 h-6 text-crimson-500" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-platinum-50 to-white ">
      <Image
        src="/neurology.jpeg"
        alt="Neurology article"
        width={1920}
        height={1080}
        className="w-full max-w-screen object-cover h-[45vh]"
      />
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-purple-900 mb-4 text-center">
          Advanced Neurology Care
        </h1>
        <p className="text-xl text-purple-700 mb-12 text-center max-w-3xl mx-auto">
          Providing expert care for complex neurological conditions with
          compassion and cutting-edge technology.
        </p>

        <Tabs defaultValue="conditions" className="mb-12">
          <TabsList className="grid min-w-fit grid-cols-2 gap-2">
            <TabsTrigger value="conditions">
              Neurological Conditions
            </TabsTrigger>
            <TabsTrigger value="services">Our Services</TabsTrigger>
          </TabsList>
          <TabsContent value="conditions">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {conditions.map((condition) => (
                <Card
                  key={condition.name}
                  className={`cursor-pointer transition-all duration-300 ${
                    activeCondition === condition.name
                      ? "ring-2 ring-crimson-400 shadow-lg"
                      : "hover:shadow-md"
                  }`}
                  onClick={() => setActiveCondition(condition.name)}
                >
                  <CardContent className="p-4 flex flex-col items-center">
                    <div
                      className={`w-12 h-12 rounded-full ${condition.color} flex items-center justify-center mb-2`}
                    >
                      {condition.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-purple-900">
                      {condition.name}
                    </h3>
                  </CardContent>
                </Card>
              ))}
            </div>
            <AnimatePresence mode="wait">
              {activeCondition && (
                <motion.div
                  key={activeCondition}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-crimson-50 p-6 rounded-lg"
                >
                  <h3 className="text-xl font-semibold text-purple-900 mb-2">
                    {activeCondition}
                  </h3>
                  <p className="text-purple-700">
                    Our team of expert neurologists provides comprehensive care
                    for {activeCondition.toLowerCase()}, including advanced
                    diagnostics, personalized treatment plans, and ongoing
                    support.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </TabsContent>
          <TabsContent value="services">
            <div className="grid md:grid-cols-3 gap-6">
              {services.map((service) => (
                <Card key={service.name}>
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-purple-900 mb-2">
                      {service.name}
                    </h3>
                    <p className="text-purple-700">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="bg-purple-900 text-black p-8 rounded-lg text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Ready to Take Control of Your Neurological Health?
          </h2>
          <p className="text-xl mb-6">
            Our team of expert neurologists is here to provide you with the
            highest quality care and support.
          </p>
          <Button
            size="lg"
            className="bg-crimson-500 text-purple-900 hover:bg-purple-100"
          >
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </div>
  );
}

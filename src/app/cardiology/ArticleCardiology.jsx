"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { Heart, Activity, Stethoscope, Users } from "lucide-react";

export default function ArticleCardiology() {
  const [activeCard, setActiveCard] = useState(0);

  const services = [
    {
      title: "Diagnostic Cardiology",
      icon: <Stethoscope className="h-6 w-6" />,
      description:
        "Comprehensive heart health evaluations using state-of-the-art diagnostic tools.",
    },
    {
      title: "Interventional Cardiology",
      icon: <Heart className="h-6 w-6" />,
      description:
        "Minimally invasive procedures to treat heart conditions and improve cardiovascular health.",
    },
    {
      title: "Electrophysiology",
      icon: <Activity className="h-6 w-6" />,
      description:
        "Specialized care for heart rhythm disorders and electrical system abnormalities.",
    },
    {
      title: "Cardiac Rehabilitation",
      icon: <Users className="h-6 w-6" />,
      description:
        "Personalized programs to help patients recover from heart procedures and improve overall heart health.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <section className="py-12 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">
          Advanced Cardiology Care
        </h1>
        <p className="text-xl text-blue-700 max-w-3xl mx-auto">
          Providing cutting-edge cardiac care with compassion and expertise.
          Your heart health is our top priority.
        </p>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-blue-900 mb-8 text-center">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`cursor-pointer transition-all duration-300 ${
                  activeCard === index
                    ? "ring-2 ring-blue-500 shadow-lg"
                    : "hover:shadow-md"
                }`}
                onClick={() => setActiveCard(index)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-blue-700">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Our Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-xl">Patients Treated Annually</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-xl">Patient Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-xl">Specialized Cardiologists</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-blue-900 mb-8 text-center">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="text-center">
                <Image
                  src={`/Cardiology.jpeg?height=200&width=200`}
                  alt={`Cardiologist ${index + 1}`}
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                  Dr. John Doe
                </h3>
                <p className="text-blue-700">Interventional Cardiologist</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-blue-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-blue-900 mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-blue-700 mb-8">
            Schedule a consultation with our expert cardiologists and take
            control of your heart health today.
          </p>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Book an Appointment
          </Button>
        </div>
      </section>
    </div>
  );
}

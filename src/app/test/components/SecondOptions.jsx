"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Zap, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

const conditions = [
  {
    id: 1,
    name: "OncoPanel",
    icon: <Zap className="w-6 h-6" />,
    color: "black",
  },
  {
    id: 2,
    name: "Cancer-specific gene panel",
    icon: <Brain className="w-6 h-6" />,
    color: "text-black",
  },
];

const descriptions = {
  1: {
    name: "OncoPanel",
    description:
      "The OncoPanel NGS test offers a broad analysis of tumor genetics by sequencing hundreds of cancer-related genes. This test identifies mutations, gene fusions, and copy number alterations, providing a comprehensive view of the genetic landscape of a patient&apos;s cancer. By focusing on actionable genes, the OncoPanel helps inform personalized treatment plans, guiding the use of targeted therapies and immunotherapies. This powerful tool is particularly valuable in cases where conventional therapies are ineffective, offering clinicians insights into potential clinical trials or novel treatments based on the specific genetic profile of the tumor, ultimately optimizing patient care.",
  },
  2: {
    name: "Cancer-specific gene panel",
    description:
      " Cancer-specific gene panel NGS testing focuses on analyzing a predefined group of genes closely linked to a particular type of cancer, such as ovarian, colorectal, or breast cancer. This targeted approach identifies key mutations, fusions, and alterations that drive the progression of the specific cancer, offering vital insights for personalizing treatment plans. By zeroing in on cancer-relevant genes, the test delivers quicker, actionable results compared to broader panels, helping clinicians make more informed decisions on targeted therapies or clinical trials that are more likely to benefit the patient’s specific cancer profile. It’s a precise, cost-effective tool for focused cancer care.",
  },
};

const SecondOptions = () => {
  const [activeCondition, setActiveCondition] = useState(null); // Initialize state

  const handleOrder = () => {
    if (activeCondition) {
      alert(`Ordering test for: ${descriptions[activeCondition].name}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-platinum-50 to-white">
      <div className="max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <Tabs defaultValue="conditions" className="mb-12">
          <TabsContent value="conditions">
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mb-8">
              {conditions.map((condition) => (
                <Card
                  key={condition.name}
                  className={`cursor-pointer transition-all duration-300 bg-crimson-300 ${
                    activeCondition === condition.id
                      ? "ring-2 ring-crimson-900 shadow-lg"
                      : "hover:shadow-md"
                  }`}
                  onClick={() => setActiveCondition(condition.id)}
                >
                  <CardContent className="p-4 flex flex-col items-center ">
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
                  className="bg-white p-6 rounded-lg"
                >
                  <h3 className="text-xl font-semibold text-purple-900 mb-2">
                    {descriptions[activeCondition].name}
                  </h3>
                  <p className="text-purple-700 pb-8">
                    {descriptions[activeCondition].description}
                  </p>
                  <Button onClick={handleOrder}>
                    Order Test Now {descriptions[activeCondition].name}
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default SecondOptions;

"use client";

import Header from "@/components/Header";
import { motion } from "framer-motion";
import Image from "next/image";
import HeaderInFaramer from "./HeaderInFaramer";
import FramerMainSection from "./FramerMainSection";

export default function FramerMotionImage() {
  return (
    <div className="w-full min-h-screen bg-gray-100 z-[-1]">
      <header className="relative w-full h-[50vh] overflow-hidden ">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full h-full bg-black bg-opacity-50 "
        >
          <Image
            src="/AdobeStock_169041837.jpeg?height=1440&width=2560"
            alt="Featured Image"
            fill
            style={{
              objectFit: "cover",
            }}
            priority
          />
        </motion.div>
        {/*   <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <HeaderInFaramer />
        </motion.div> */}
      </header>
      <FramerMainSection />
    </div>
  );
}

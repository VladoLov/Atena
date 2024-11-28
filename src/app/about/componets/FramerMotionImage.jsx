"use client";

import Header from "@/components/Header";
import { motion } from "framer-motion";
import Image from "next/image";
import HeaderInFaramer from "./HeaderInFaramer";
import FramerMainSection from "./AboutTextSection";

export default function FramerMotionImage() {
  return (
    <section className="w-full max-h-full bg-platinum-300 z-[-1] ">
      <div className="relative w-full h-screen overflow-hidden clip-piere shadow-md bg-opacity-90 text-transparent">
        <Image
          src="/piere-image.png"
          alt="Featured Image"
          fill
          style={{
            objectFit: "cover",
            opacity: "0.6",
          }}
          priority
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute inset-0 flex items-start justify-center flex-col mx-10  max-w-4xl lg:mx-24  pb-8 "
        >
          <HeaderInFaramer />
        </motion.div>
      </div>
    </section>
  );
}

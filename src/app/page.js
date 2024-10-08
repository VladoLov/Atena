import Blog from "@/components/Blog";

import Footer2 from "@/components/Footer2";
import Header from "@/components/Header";
import ServicesComponent from "@/components/ServicesComponent";

import Testimonials from "@/components/Testimonials";
import dynamic from "next/dynamic";
import Slider from "../components/Slider";
import ManualHeader from "@/components/component/ManualHeader";

/* const SliderComp = dynamic(() => import("../components/Slider"), {
  ssr: false,
}); */

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <ManualHeader />
      <Slider />
      {/*  <SliderComp /> */}
      <Blog />
      <ServicesComponent />
      <Testimonials />
      <Footer2 />
    </main>
  );
}

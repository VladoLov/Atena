import Blog from "@/components/Blog";

import ImageSlider from "@/components/component/Slider_adepted_to_next";

import Footer2 from "@/components/Footer2";
import Header from "@/components/Header";
import Slider from "@/components/Slider";

import Testimonials from "@/components/Testimonials";
import dynamic from "next/dynamic";

const SliderComp = dynamic(() => import("../components/Slider"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <Header />

      {/* <ImageSlider /> */}
      <SliderComp />
      <Blog />
      <Testimonials />

      <Footer2 />
    </main>
  );
}

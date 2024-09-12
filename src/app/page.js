import Blog from "@/components/Blog";
import EmblaCarousel from "@/components/component/EmblaCarousel";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero4 from "@/components/Hero4";

import Testimonials from "@/components/Testimonials";
import Image from "next/image";

const images = ["/image1.png", "/image2.png"];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <Header />
      <EmblaCarousel slides={images} options={{ loop: true }} />
      {/* <Hero4 /> */}
      <Blog />
      <Testimonials />
      <Footer />
    </main>
  );
}

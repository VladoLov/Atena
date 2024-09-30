import Blog from "@/components/Blog";
import EmblaCarousel from "@/components/component/EmblaCarousel";
import ImageSlider from "@/components/component/Slider_adepted_to_next";
import Footer from "@/components/Footer";
import Footer2 from "@/components/Footer2";
import Header from "@/components/Header";

import Testimonials from "@/components/Testimonials";

const images = ["/image1.png", "/image2.png"];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <Header />
      {/*  <EmblaCarousel slides={images} options={{ loop: true }} /> */}
      <ImageSlider />
      <Blog />
      <Testimonials />
      {/* <Footer /> */}
      <Footer2 />
    </main>
  );
}

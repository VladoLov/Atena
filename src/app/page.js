import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero2 from "@/components/Hero2";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <Header />
      <Hero2 />
      <Blog />
      <Testimonials />
      <Footer />
    </main>
  );
}

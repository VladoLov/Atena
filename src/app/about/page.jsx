import Footer from "@/components/Footer";
import Header from "@/components/Header";
import FramerMotionImage from "./componets/FramerMotionImage";

function page() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-start">
      <Header />
      <FramerMotionImage />
      <Footer />
    </div>
  );
}

export default page;

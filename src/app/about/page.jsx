import Header from "@/components/Header";
import FramerMotionImage from "./componets/FramerMotionImage";
import Footer2 from "@/components/Footer2";

function page() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-start">
      <Header />
      <FramerMotionImage />
      <Footer2 />
    </div>
  );
}

export default page;

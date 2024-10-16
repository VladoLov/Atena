import Header from "@/components/Header";
import FramerMotionImage from "./componets/FramerMotionImage";
import Footer2 from "@/components/Footer2";
import AboutTeam from "@/components/component/AboutTeam";
import ManualHeader from "@/components/component/ManualHeader";
import AboutTextSection from "./componets/AboutTextSection";

function page() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-start">
      <ManualHeader />
      <FramerMotionImage />
      <AboutTextSection />
      <AboutTeam />
      <Footer2 />
    </div>
  );
}

export default page;

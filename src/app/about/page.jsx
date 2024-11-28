import Header from "@/components/Header";
import FramerMotionImage from "./componets/FramerMotionImage";
import Footer2 from "@/components/Footer2";
import AboutTeam from "@/components/component/AboutTeam";
import ManualHeader from "@/components/component/ManualHeader";
import AboutTextSection from "./componets/AboutTextSection";
import AboutMarija from "./componets/AboutMarija";

function page() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-start bg-platinum-300 bg-transparent">
      <FramerMotionImage />
      <AboutTextSection />
      {/* <AboutTeam /> */}
      <AboutMarija />
    </div>
  );
}

export default page;

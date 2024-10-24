import DownalodPdf from "@/components/component/DownalodPdf";
import FaqAccordion from "@/components/component/FaqAccordion";
import HoverNavigationMenu from "@/components/component/ManualHeader";

import Footer2 from "@/components/Footer2";

export const metadata = {
  title: "faq",
};
function page() {
  return (
    <div>
      <HoverNavigationMenu />
      <div className="max-w-screen-md mx-auto py-8">
        <FaqAccordion />
      </div>
      <Footer2 />
    </div>
  );
}

export default page;

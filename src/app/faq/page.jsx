import DownalodPdf from "@/components/component/DownalodPdf";
import FaqAccordion from "@/components/component/FaqAccordion";
import HoverNavigationMenu from "@/components/component/ManualHeader";
import ContactForm from "@/components/ContatForm";
import EmailTemplate from "@/components/email-template";
import Footer2 from "@/components/Footer2";
function page() {
  return (
    <div>
      <HoverNavigationMenu />
      <div className="max-w-screen-md mx-auto py-8">
        <FaqAccordion />
        <DownalodPdf />
        <ContactForm />
      </div>
      <Footer2 />
    </div>
  );
}

export default page;

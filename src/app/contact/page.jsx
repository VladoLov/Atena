import ManualHeader from "@/components/component/ManualHeader";
import ContactForm from "@/components/ContatForm";
import Footer2 from "@/components/Footer2";

function page() {
  return (
    <div>
      <ManualHeader />
      <div className="max-w-screen-md mx-auto py-8">
        <ContactForm />
      </div>
      <Footer2 />
    </div>
  );
}

export default page;

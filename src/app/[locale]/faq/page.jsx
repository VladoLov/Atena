import FaqAccordion from "@/components/component/FaqAccordion";

export const metadata = {
  title: "faq",
};
function page() {
  return (
    <div>
      <div className="max-w-screen-md mx-auto py-8">
        <FaqAccordion />
      </div>
    </div>
  );
}

export default page;

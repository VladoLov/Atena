import ArticleOncology from "./ArticleOncology";
import Footer2 from "@/components/Footer2";
import ManualHeader from "@/components/component/ManualHeader";

function page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start">
      <ManualHeader />
      <ArticleOncology />
      <Footer2 />
    </div>
  );
}

export default page;

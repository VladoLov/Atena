import ArticleOncology from "./ArticleOncology";
import Footer2 from "@/components/Footer2";
import ManualHeader from "@/components/component/ManualHeader";
import NewArticleOncology from "./NewArticleOncology";

function page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start">
      <ManualHeader />
      <NewArticleOncology />
      <Footer2 />
    </div>
  );
}

export default page;

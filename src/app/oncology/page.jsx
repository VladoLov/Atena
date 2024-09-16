import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ArticleOncology from "./ArticleOncology";

function page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start">
      <Header />
      <ArticleOncology />
      <Footer />
    </div>
  );
}

export default page;

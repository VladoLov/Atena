import Header from "@/components/Header";
import ArticleWholeGenomeSequencing from "../compoents/ArticleWholeGenomeSequencing";
import Footer from "@/components/Footer";

function page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start">
      <Header />
      <ArticleWholeGenomeSequencing />
      <Footer />
    </div>
  );
}

export default page;

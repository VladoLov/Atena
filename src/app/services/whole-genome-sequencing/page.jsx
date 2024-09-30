import Header from "@/components/Header";
import ArticleWholeGenomeSequencing from "../compoents/ArticleWholeGenomeSequencing";

import Footer2 from "@/components/Footer2";

function page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start">
      <Header />
      <ArticleWholeGenomeSequencing />
      <Footer2 />
    </div>
  );
}

export default page;

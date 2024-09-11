import Footer from "@/components/Footer";
import Header from "@/components/Header";

function page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start">
      <Header />
      <h1>Oncology</h1>
      <Footer />
    </div>
  );
}

export default page;

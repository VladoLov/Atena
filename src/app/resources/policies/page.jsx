import ManualHeader from "@/components/component/ManualHeader";
import Footer2 from "@/components/Footer2";
import { polices } from "@/lib/url";

function page() {
  return (
    <div>
      <ManualHeader />
      <div className="max-w-screen-md mx-auto py-8">
        <h2 className="text-2xl md:text-3xl lg:text-6xl font-semibold py-8">
          {" "}
          Privacy policies
        </h2>
        {polices.map((police, index) => (
          <h6 key={police.index}>{police.privacyStatement}</h6>
        ))}
      </div>
      <Footer2 />
    </div>
  );
}

export default page;

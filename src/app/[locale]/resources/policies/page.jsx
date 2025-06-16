import { polices } from "@/lib/url";

function page() {
  return (
    <div>
      <div className="max-w-screen-md mx-auto py-8">
        <h2 className="text-2xl md:text-3xl lg:text-6xl font-semibold py-8">
          {" "}
          Privacy policies
        </h2>
        {polices.map((police) => (
          <div key={police.name}>
            <h3 className="text-xl md:text-1xl lg:text-3xl font-semibold pt-12 pb-6">
              {police.name}
            </h3>
            <p>{police.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;

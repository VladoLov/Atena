import MainHeader from "@/newcomponents/MainHeader";
import Image from "next/image";

export const DnaComponent = () => {
  return (
    <section className="w-full container-2xl  bg-platinum-200">
      <div className="relative w-full h-dvh md:h-[100vh] clip-piere">
        <div className="w-full h-full overflow-hidden absolute top-0 bg-cover">
          <Image
            src="/helix.png"
            /* width={1640}
            height={1024} */
            alt="dna genome"
            priority
            fill
            /*  objectFit="cover"
            className="object-cover" */
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
              opacity: "0.4",
              background: "#001717",
              filter: "sturate(50%)",
            }}
          />
        </div>
        <div className="absolute top-12 w-full flex items-left flex-row justify-center  gap-4 font-oswald">
          <div className="basis-1/2 min-h-[70vh] leading-snug flex flex-col  justify-center items-start  lg:max-w-4xl max-w-xs">
            <MainHeader asChild />
          </div>
          <div className="hidden basis-1/2 items-center justify-center lg:flex animate-in slide-in-from-right duration-700 ease-in-out">
            <Image
              src="/sova/NewLogo.png"
              alt="Atena logotip"
              width={300}
              height={300}
            />
          </div>
          {/*  <p className="text-lg text-platinum-900">
            Explore your genetic heritage{" "}
          </p>
          <Button className="w-fit text-black font-semibold bg-gradient-to-tr from-crimson-500 to-crimson-600 hover:bg-gradient-to-tr hover:from-crimson-600 hover:to-crimson-700">
            Explore DNA
          </Button> */}
        </div>
        {/* <div className="absolute bottom-0 right-0 flex justify-center">
          <h3>Hello</h3>
        </div> */}
      </div>
    </section>
  );
};

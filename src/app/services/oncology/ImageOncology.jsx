import Image from "next/image";

function ImageOncology() {
  return (
    <div className="relative w-full h-[94vh] md:h-[50vh] ">
      <Image
        src="/Oncology4.png?height=1080&width=1920"
        alt="Landscape"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold text-center px-4">
          Identify genetic alterations in tumors for customized and targeted
          treatment strategies
        </h1>
      </div>
    </div>
  );
}

export default ImageOncology;

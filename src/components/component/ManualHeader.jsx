import Image from "next/image";
import Testingcss from "./Testingcss";
import FinalNavbar from "./FinalNavbar";
import SearchBar from "./SearchBar";
import FirstFinalNavbar from "./FirstFInalNavbar";

function ManualHeader() {
  return (
    <>
      <header className="flex justify-end mx-auto items-center bg-crimson-500">
        <FirstFinalNavbar />
      </header>
      <header className=" flex justify-between mx-8 bg-white shadow-lg z-100">
        <div className="flex justify-center items-center">
          <Image
            src="/Atena-logo.png"
            alt="Atena logo"
            width={150}
            height={100}
          />
        </div>
        <div className="flex flex-row space-x-4 items-center">
          <SearchBar />
          {/* <Testingcss /> */}
          <FinalNavbar />
          <div>sadawadsadadw</div>
          <div>sadawadsadadw</div>
          <div>sadawadsadadw</div>
          <div>sadawadsadadw</div>
        </div>
      </header>
    </>
  );
}

export default ManualHeader;

import Image from "next/image";
import Testingcss from "./Testingcss";
import FinalNavbar from "./FinalNavbar";
import SearchBar from "./SearchBar";

function ManualHeader() {
  return (
    <header className="fix flex justify-between mx-auto bg-white shadow-lg z-100">
      <div className="flex justify-center items-center">
        <Image
          src="/Atena-logo.png"
          alt="Atena logo"
          width={150}
          height={100}
        />
      </div>
      <div className="flex flex-row space-x-4">
        <SearchBar />
        {/* <Testingcss /> */}
        <FinalNavbar />
        <div>sadawadsadadw</div>
        <div>sadawadsadadw</div>
        <div>sadawadsadadw</div>
        <div>sadawadsadadw</div>
        <div>sadawadsadadw</div>
        <div>sadawadsadadw</div>
        <div>sadawadsadadw</div>
      </div>
    </header>
  );
}

export default ManualHeader;

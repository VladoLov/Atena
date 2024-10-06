import Image from "next/image";
import Testingcss from "./Testingcss";
import FinalNavbar from "./FinalNavbar";
import SearchBar from "./SearchBar";
import FirstFinalNavbar from "./FirstFInalNavbar";
import { Button } from "../ui/button";
import Link from "next/link";

function ManualHeader() {
  return (
    <>
      <header className="flex justify-end mx-auto w-full items-center z-30  bg-crimson-500">
        <FirstFinalNavbar />
      </header>
      <header className="flex justify-between w-full pr-12  bg-white shadow-lg overlay-hidden">
        <div className="flex justify-center items-center pl-2 sm:pl-4 md:pl-8 lg:pl-12">
          <Link href="/">
            <Image
              src="/Atena-logo.png"
              alt="Atena logo"
              width={150}
              height={150}
            />
          </Link>
        </div>
        <div className="hidden lg:flex flex-row space-x-4 items-center z-29">
          <FinalNavbar />
          <SearchBar />
          {/* <Testingcss /> */}
          <div>
            <Button>My Project</Button>
          </div>
        </div>
      </header>
    </>
  );
}

export default ManualHeader;

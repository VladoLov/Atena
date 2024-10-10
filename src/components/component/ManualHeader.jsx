import Image from "next/image";
import Testingcss from "./Testingcss";
import FinalNavbar from "./FinalNavbar";
import SearchBar from "./SearchBar";
import FirstFinalNavbar from "./FirstFInalNavbar";
import { Button } from "../ui/button";
import Link from "next/link";
import DropdownForSmallScreen from "../ui/DropdownForSmallScreen";
import DropDown from "./DropDown";

function ManualHeader() {
  return (
    <header className="w-full">
      {/* <DropdownForSmallScreen /> */}
      <DropDown />
      <nav className="hidden lg:flex  justify-end mx-auto w-full items-center z-30  bg-crimson-500">
        <FirstFinalNavbar />
      </nav>
      <nav className="hidden lg:flex justify-between w-full pr-12  bg-white shadow-lg overlay-hidden">
        <div className="flex justify-center items-center pl-2 sm:pl-4 md:pl-8 lg:pl-12">
          <Link href="/">
            <Image
              src="/AtenaGenomicsLogo.png"
              alt="Atena logo"
              width={150}
              height={150}
            />
          </Link>
        </div>
        <nav className="hidden lg:flex flex-row space-x-4 items-center z-29">
          <FinalNavbar />
          <div>
            {/* <Testingcss /> */}
            <Button className="bg-crimson-500 text-black font-semibold text-sm hover:bg-crimson-600">
              My Account
            </Button>
          </div>
          <SearchBar />
        </nav>
      </nav>
    </header>
  );
}

export default ManualHeader;

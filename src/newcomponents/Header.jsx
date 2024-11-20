import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

import FinalNavbar from "@/components/component/FinalNavbar";

import FinalNavbarRes from "@/components/component/FinalNavbarRes";
import DropDown from "@/components/component/DropDown";

function Header() {
  return (
    <header className="w-full sticky ">
      <DropDown />
      <div className="hidden lg:flex flex-row justify-between mt-2 mx-4 mb-2items-center">
        <Link href="/" className="max-w-fit  items-center flex">
          <Image
            src="/AtenaGenomicsLogo.png"
            alt="Atena Genomics"
            width={200}
            height={250}
          />
        </Link>
        <div className="flex items-center">
          <FinalNavbar />
          <div className="flex list-none items-center justify-start z-30">
            <Link
              href="/about"
              className="px-4 py-2 flex text-platinum-700 hover:bg-platinum-200 transition-colors duration-300 ease-in-out hover:rounded hover:ring-1 hover:ring-black"
              aria-haspopup="true"
            >
              About
            </Link>
          </div>
          {/*  <div className="flex list-none items-center justify-start z-30">
            <Link
              href="/faq"
              className="px-4 py-2 flex text-platinum-700 hover:bg-platinum-200 transition-colors duration-300 ease-in-out hover:rounded hover:ring-1 hover:ring-black"
              aria-haspopup="true"
            >
              FAQ
            </Link>
          </div> */}
          <div className="flex list-none items-center justify-start z-30">
            <Link
              href="/contact"
              className="px-4 py-2 flex text-platinum-700 hover:bg-platinum-200 transition-colors duration-300 ease-in-out hover:rounded hover:ring-1 hover:ring-black"
              aria-haspopup="true"
            >
              Contact
            </Link>
          </div>

          {/* <FinalNavbarRes /> */}

          <Button className="bg-crimson-500 text-black font-semibold text-sm hover:bg-crimson-600">
            My Account
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import FinalNavbar from "@/components/component/FinalNavbar";
import DropDown from "@/components/component/DropDown";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Globe } from "lucide-react";
import SecondPartOfHeader from "./SecondPartOfHeader";

function Header() {
  return (
    <header className="w-full sticky top-0 left-0 z-50 font-poppins bg-white">
      <DropDown />
      <div className="hidden lg:flex flex-row justify-between mt-2 mx-4 mb-2 items-center">
        <Link href="/" className="max-w-fit  items-center flex">
          <Image
            src="/AtenaGenomicsLogo.png"
            alt="Atena Genomics"
            width={256}
            height={74}
            priority
          />
        </Link>
        <div className="flex items-center space-x-2 ">
          <div className="flex items-center space-x-2">
            <Globe className="h-4 w-auto text-platinum-900" />
            <LanguageSwitcher />
          </div>
          <FinalNavbar />
          <SecondPartOfHeader />
        </div>
      </div>
    </header>
  );
}

export default Header;

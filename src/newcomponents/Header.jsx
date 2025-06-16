import Image from "next/image";
import Link from "next/link";
import FinalNavbar from "@/components/component/FinalNavbar";
import DropDown from "@/components/component/DropDown";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Globe } from "lucide-react";
import SecondPartOfHeader from "./SecondPartOfHeader";

function Header() {
  return (
    <header className="w-full sticky top-0 left-0 z-50 font-oswald bg-white ">
      <DropDown />
      <div className="hidden md:flex  lg:grid grid-cols-2 justify-end mt-2  px-4 mb-2 items-center">
        <Link href="/" className="max-w-fit  items-center flex justify-start">
          <Image
            src="/AtenaGenomicsLogo.png"
            alt="Atena Genomics"
            width={256}
            height={75}
            priority
            quality={90}
            sizes="(max-width: 768px) 180px, 256px"
            style={{
              objectFit: "contain",
              width: "auto",
              height: "auto",
              maxWidth: "256px", // Control the maximum size
            }}
          />
        </Link>
        <div className="flex items-center gap-2 pr-2 justify-end">
          <div className="flex ml-auto items-center space-x-2">
            <Globe className="h-4 w-auto text-platinum-950" />
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

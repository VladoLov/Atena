import { AlignJustify } from "lucide-react";
import { X } from "lucide-react";
import { AArrowDown } from "lucide-react";
import Image from "next/image";

function ManualNavbar() {
  return (
    <nav className="flex justify-between h-full items-center">
      <div className=" inline items-center gap-1 font-semibold">
        <Image src="/hero-image.png" width={50} height={50} alt="Atena logo" />
      </div>
      {/*  <div className="relative h-8 w-8 bg-platinum-200 ">
        <AlignJustify className="absolute max-h-screen max-w-screen- inset-0 mx-auto cursor-pointer text-lg transition-all duration-1000 opacity-1 transform" />
        <X className="absolute max-h-screen max-w-screen-sm inset-0 mx-auto cursor-pointer text-lg transition-all duration-1000 opacity-0 transform" />
      </div> */}
      <div className="">
        <ul>
          <li>Home</li>
          <li>Company</li>

          <li>
            <div className="">
              Analytic
              <AArrowDown />
            </div>
          </li>
          <li>Products</li>
          <li>
            <div className="">
              Users
              <AArrowDown />
            </div>
          </li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
}

export default ManualNavbar;

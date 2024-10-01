import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { Button } from "./ui/button";
import Link from "next/link";

import DropdownForSmallScreen from "./ui/DropdownForSmallScreen";
import SecondNav from "./SecondNav";

// import i18n from "./../utils/i18n";

function Header() {
  return (
    <>
      {/* Dropdown Menu for small screens */}

      <DropdownForSmallScreen />

      <div className="bg-crimson-400 md:w-full z-3 md:justify-end px-20 md:py-0 hidden lg:flex md:flex-col lg:justify-end xl:justify-end items-end">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem className="relative">
              <NavigationMenuTrigger className="flex justify-between items-center bg-crimson-400 hover:bg-crimson-500">
                <Link href="/about">About Us</Link>
              </NavigationMenuTrigger>
              <NavigationMenuContent className="absolute z-20 ">
                <ul className="flex flex-col gap-3 p-6 md:w-[400px] lg:w-[300px] hover:text-primary-800 ">
                  <li className="hover:text-primary-800 hover:bg-crimson-500 w-full rounded-sm">
                    <NavigationMenuLink className="">
                      The Company
                    </NavigationMenuLink>
                  </li>
                  <li className="hover:text-primary-800 hover:bg-crimson-500 w-full rounded-sm">
                    <NavigationMenuLink>Mission</NavigationMenuLink>
                  </li>
                  <li className="hover:text-primary-800 hover:bg-crimson-500 w-full rounded-sm">
                    <NavigationMenuLink>The Founders</NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem className="relative">
              <NavigationMenuTrigger className="flex justify-between items-center  bg-crimson-400 hover:bg-crimson-500">
                Resources
              </NavigationMenuTrigger>
              <NavigationMenuContent className="absolute z-30">
                <ul className="flex flex-col gap-3 p-6 md:w-[400px] lg:w-[300px]">
                  <li className="hover:text-primary-800 hover:bg-crimson-500 w-full rounded-sm">
                    <NavigationMenuLink>Sample Request</NavigationMenuLink>
                  </li>
                  <li className="hover:text-primary-800 hover:bg-crimson-500 w-full rounded-sm">
                    <NavigationMenuLink>FAQ </NavigationMenuLink>
                  </li>
                  <li className="hover:text-primary-800 hover:bg-crimson-500 w-full rounded-sm">
                    <NavigationMenuLink>Policies</NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a className="flex justify-center items-center">
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-white text-black flex items-center justify-between"
                >
                  My Project
                </Button>
              </a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/test">
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-white text-black flex items-center justify-between"
                >
                  Test
                </Button>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <SecondNav />
    </>
  );
}

export default Header;

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import { Button } from "./ui/button";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";

// import i18n from "./../utils/i18n";

function Header() {
  return (
    <>
      {/* Dropdown Menu for small screens */}
      <div className="bg-crimson-400 w-full flex justify-between px-4 py-1 lg:hidden">
        <Link href="/">
          <Image src="/GetImage.png" width={130} height={20} alt="Atena logo" />
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger className="bg-crimson-400 text-white px-4 py-2 rounded-md">
            <GiHamburgerMenu />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white">
            <DropdownMenuLabel>
              <Link href="/about">About Us</Link>
            </DropdownMenuLabel>
            <DropdownMenuItem>The Company</DropdownMenuItem>
            <DropdownMenuItem>Mission</DropdownMenuItem>
            <DropdownMenuItem>The Founders</DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuLabel>
              <Link href="/services">Services</Link>
            </DropdownMenuLabel>
            <DropdownMenuItem>Whole genome sequencing</DropdownMenuItem>
            <DropdownMenuItem>Whole exome sequencing</DropdownMenuItem>
            <DropdownMenuItem>Targeted sequencing</DropdownMenuItem>
            <DropdownMenuItem>Metagenomic sequencing</DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuLabel>Other Links</DropdownMenuLabel>
            <DropdownMenuItem>
              <Link href="/oncology">Oncology</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/neurology">Neurology</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/cardiology">Cardiology</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="heredity-screening">Heredity screening</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="prenatal-screening">Prenatal screening</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="reproductive-health">Reproductive health</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="pharamacogenomics">Pharmacogenomics</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="infectious-diseases">Infectious diseases</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <Button className="bg-crimson-400 text-black">My Project</Button>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

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
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="bg-platinum-50 w-full justify-between px-20 relative z-0 hidden lg:flex flex-row items-center">
        <Link href="/" className="flex items-end gap-4 flex-row">
          <Image src="/GetImage.png" width={130} height={15} alt="Atena logo" />
          <h3 className="text-lg font-semibold">
            Advanced genome testing services
          </h3>
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem className="relative">
              <NavigationMenuTrigger className="hover:text-crimson-500  flex justify-between text-popover-foreground font-normal text-md  text-items-center gap-3 bg-platinum-50">
                <Link href="/services">Services</Link>
              </NavigationMenuTrigger>
              <NavigationMenuContent className="absolute z-100">
                <ul className="flex flex-col gap-3 p-6 md:w-[400px] lg:w-[300px] hover:text-primary-800 z-10">
                  <li className="hover:text-primary-800 hover:bg-crimson-500 w-full rounded-sm">
                    <NavigationMenuLink>
                      <Link href="/services/whole-genome-sequencing">
                        Whole genome sequencing
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li className="hover:text-primary-800 hover:bg-crimson-500 w-full rounded-sm">
                    <NavigationMenuLink>
                      Whole exome sequencing
                    </NavigationMenuLink>
                  </li>
                  <li className="hover:text-primary-800 hover:bg-crimson-500 w-full rounded-sm">
                    <NavigationMenuLink>
                      <Link href="services/targeting-sequencing">
                        Targeted sequencing
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li className="hover:text-primary-800 hover:bg-crimson-500 w-full rounded-sm">
                    <NavigationMenuLink>
                      <Link href="/services/metagenomic-sequencing">
                        Metagenomic sequencing
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem className="flex flex-row  gap-5 border-spacing-1 rounded-lg z-0 relative">
              <NavigationMenuLink className="flex justify-between items-center hover:text-crimson-500">
                <Link href="/oncology">Oncology</Link>
              </NavigationMenuLink>
              <NavigationMenuLink className="flex justify-between items-center  hover:text-crimson-500">
                <Link href="/neurology">Neurology</Link>
              </NavigationMenuLink>
              <NavigationMenuLink className="flex justify-between items-center  hover:text-crimson-500">
                <Link href="/cardiology">Cardiology</Link>
              </NavigationMenuLink>
              <NavigationMenuLink className="flex justify-between items-center  hover:text-crimson-500">
                <Link href="heredity-screening">Heredity screening</Link>
              </NavigationMenuLink>

              <NavigationMenuLink className="flex justify-between items-center  hover:text-crimson-500">
                <Link href="prenatal-screening">Prenatal screening</Link>
              </NavigationMenuLink>
              <NavigationMenuLink className="flex justify-between items-center  hover:text-crimson-500">
                <Link href="reproductive-health">Reproductive health</Link>
              </NavigationMenuLink>
              <NavigationMenuLink className="flex justify-between items-center  hover:text-crimson-500">
                <Link href="pharamacogenomics">Pharmacogenomics</Link>
              </NavigationMenuLink>
              <NavigationMenuLink className="flex justify-between items-center  hover:text-crimson-500">
                <Link href="/infectious-diseases">Infectious diseases</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </>
  );
}

export default Header;

/* 
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  return (
    <>
      // Dropdown Menu for small screens 
      <div className="bg-crimson-400 w-full flex justify-between px-4 py-2 md:hidden">
        <Image src="/atena.png" width={130} height={30} alt="Atena logo" />
        <DropdownMenu>
          <DropdownMenuTrigger className="bg-crimson-700 text-white px-4 py-2 rounded-md">
            <GiHamburgerMenu />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white">
            <DropdownMenuLabel>About Us</DropdownMenuLabel>
            <DropdownMenuItem>The Company</DropdownMenuItem>
            <DropdownMenuItem>Mission</DropdownMenuItem>
            <DropdownMenuItem>The Founders</DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuLabel>Services</DropdownMenuLabel>
            <DropdownMenuItem>DNA sequencing</DropdownMenuItem>
            <DropdownMenuItem>Whole genome sequencing</DropdownMenuItem>
            <DropdownMenuItem>Whole exome sequencing</DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuLabel>Other Links</DropdownMenuLabel>
            <DropdownMenuItem>Oncologyatena</DropdownMenuItem>
            <DropdownMenuItem>Genetic disorders</DropdownMenuItem>
            <DropdownMenuItem>Cardiovascular</DropdownMenuItem>
            <DropdownMenuItem>Infectious diseases</DropdownMenuItem>
            <DropdownMenuSeparator />
            <Button className="bg-crimson-400 text-black">My Project</Button>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      // Navigation Menu for larger screens 
      <div className="hidden md:flex flex-col">
        <div className="bg-crimson-400 w-full flex justify-end px-20 py-0">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem className="relative">
                <NavigationMenuTrigger className="flex justify-between items-center bg-crimson-400 hover:bg-crimson-500">
                  About Us
                </NavigationMenuTrigger>
                <NavigationMenuContent className="absolute z-50">
                  <ul className="flex flex-col gap-3 p-6 md:w-[400px] lg:w-[300px] hover:text-primary-800 ">
                    <li className="hover:text-primary-800 hover:bg-crimson-500 w-full rounded-sm">
                      <NavigationMenuLink>The Company</NavigationMenuLink>
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
                <NavigationMenuTrigger className="flex justify-between items-center bg-crimson-400 hover:bg-crimson-500">
                  Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent className="absolute z-50">
                  <ul className="flex flex-col gap-3 p-6 md:w-[400px] lg:w-[300px] hover:text-primary-800 z-20">
                    <li className="hover:text-primary-800 hover:bg-crimson-500 w-full rounded-sm">
                      <NavigationMenuLink>Sample Request</NavigationMenuLink>
                    </li>
                    <li className="hover:text-primary-800 hover:bg-crimson-500 w-full rounded-sm">
                      <NavigationMenuLink>FAQ</NavigationMenuLink>
                    </li>
                    <li className="hover:text-primary-800 hover:bg-crimson-500 w-full rounded-sm">
                      <NavigationMenuLink>Policies</NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="bg-platinum-50 w-full flex justify-between px-20 gap-5">
          <div>
            <Image src="/atena.png" width={130} height={30} alt="Atena logo" />
            <h3 className="font-bold md:text-sm lg:text-base">
              Advanced genome testing services
            </h3>
          </div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem className="relative">
                <NavigationMenuTrigger className="flex justify-between items-center text-base bg-platinum-50 text-platinum-900">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent className="absolute z-50">
                  <ul className="flex flex-col gap-3 p-6 md:w-[400px] lg:w-[300px] hover:text-primary-800 z-10">
                    <li className="hover:text-primary-800 hover:bg-crimson-500 w-full">
                      <NavigationMenuLink>DNA sequencing</NavigationMenuLink>
                    </li>
                    <li className="hover:text-primary-800 hover:bg-crimson-500 w-full">
                      <NavigationMenuLink>
                        Whole genome sequencing
                      </NavigationMenuLink>
                    </li>
                    <li className="hover:text-primary-800 hover:bg-crimson-500 w-full">
                      <NavigationMenuLink>
                        Whole exome sequencing
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem className="flex flex-row gap-5 items-center border-spacing-1 rounded-lg relative  text-platinum-900 ">
                <NavigationMenuLink className="hover:text-crimson-500 z-1">
                  Oncologyatena
                </NavigationMenuLink>
                <NavigationMenuLink className="hover:text-crimson-500 z-1">
                  Genetic disorders
                </NavigationMenuLink>
                <NavigationMenuLink className="hover:text-crimson-500 z-0">
                  Cardiovascular
                </NavigationMenuLink>
                <NavigationMenuLink className="hover:text-crimson-500 z-0">
                  Infectious diseases
                </NavigationMenuLink>
                <Button className="bg-crimson-400 text-black z-0">
                  My Project
                </Button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </>
  );
}

export default Header;
 */

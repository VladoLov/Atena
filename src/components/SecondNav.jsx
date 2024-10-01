"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function SecondNav() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="bg-platinum-50 w-full justify-between px-20 relative z-0 hidden lg:flex flex-row items-center">
      <Link href="/" className="flex items-end gap-4 flex-row">
        <Image src="/GetImage.png" width={130} height={15} alt="Atena logo" />
        <h3 className="text-lg font-semibold">
          Advanced genome testing services
        </h3>
      </Link>
      {isClient && (
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
      )}
    </div>
  );
}

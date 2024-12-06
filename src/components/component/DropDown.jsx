"use client";
import { useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { Globe, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { firstHeader, services } from "@/lib/url";
import { LanguageSwitcher } from "@/newcomponents/LanguageSwitcher";

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white w-full flex justify-between px-4 py-1 lg:hidden shadow-md mb-1 ">
      <Link href="/">
        <Image
          src="/AtenaGenomicsLogo.png"
          width={130}
          height={50}
          alt="Atena logo"
          priority
        />
      </Link>

      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger
          className="bg-crimson-500 font-poppins text-white px-4 py-2 rounded-md focus:ring-outline-none active:bg-crimson-500 focus:border-crimson-500 "
          onClick={toggleDropdown}
        >
          {isOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <GiHamburgerMenu className="w-5 h-5 " />
          )}
        </DropdownMenuTrigger>

        <DropdownMenuContent className="bg-white min-h-fit w-lvw overflow-y-auto text-center font-poppins">
          {firstHeader.map((item) => (
            <DropdownMenuItem key={item.href}>
              <Link href={item.href}>{item.title}</Link>
            </DropdownMenuItem>
          ))}
          <DropdownMenuSeparator />
          <DropdownMenuLabel>
            <Link href="/services">Services</Link>
          </DropdownMenuLabel>
          {services.map((service) => (
            <DropdownMenuItem key={service.href}>
              <Link href={service.href}>{service.title}</Link>
            </DropdownMenuItem>
          ))}
          <DropdownMenuSeparator />
          <DropdownMenuSeparator />
          <Button className="bg-crimson-500 text-black w-9/12 ">
            <label>My Account</label>
          </Button>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="space-x-2 ">
            Language <Globe className="w-4 h-auto ml-2 " />:{" "}
            <LanguageSwitcher />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default DropDown;

"use client";
import { useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { X } from "lucide-react";
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

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white w-full flex justify-between px-4 py-1 lg:hidden shadow-md mb-1">
      <Link href="/">
        <Image src="/Atena-logo.png" width={130} height={20} alt="Atena logo" />
      </Link>

      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger
          className="bg-crimson-500 text-white px-4 py-2 rounded-md focus:ring-outline-none active:bg-crimson-500 focus:border-crimson-500 "
          onClick={toggleDropdown}
        >
          {isOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <GiHamburgerMenu className="w-5 h-5 " />
          )}
        </DropdownMenuTrigger>

        <DropdownMenuContent className="bg-white max-h-[80vh] min-w-96 overflow-y-auto text-center">
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
            My Account
          </Button>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default DropDown;

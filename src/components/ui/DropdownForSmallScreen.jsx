"use client";
import { useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { ChevronDown, ChevronUp } from "lucide-react";
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

const DropdownForSmallScreen = () => {
  const [isOtherLinksExpanded, setIsOtherLinksExpanded] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleOtherLinks = () => {
    setIsOtherLinksExpanded(!isOtherLinksExpanded);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const otherLinks = [
    { href: "/oncology", label: "Oncology" },
    { href: "/neurology", label: "Neurology" },
    { href: "/cardiology", label: "Cardiology" },
    { href: "/heredity-screening", label: "Heredity screening" },
    { href: "/prenatal-screening", label: "Prenatal screening" },
    { href: "/reproductive-health", label: "Reproductive health" },
    { href: "/pharamacogenomics", label: "Pharmacogenomics" },
    { href: "/infectious-diseases", label: "Infectious diseases" },
  ];

  return (
    <div className="bg-crimson-400 w-full flex justify-between px-4 py-1 lg:hidden">
      <Link href="/">
        <Image src="/GetImage.png" width={130} height={20} alt="Atena logo" />
      </Link>

      <DropdownMenu>
        <DropdownMenuTrigger
          className="bg-crimson-400 text-white px-4 py-2 rounded-md"
          onClick={toggleDropdown}
        >
          <GiHamburgerMenu />
        </DropdownMenuTrigger>

        <DropdownMenuContent className="bg-white max-h-[80vh] overflow-y-auto">
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

          <DropdownMenuLabel
            onClick={toggleOtherLinks}
            className="cursor-pointer flex items-center justify-between"
          >
            Other Links
            {isOtherLinksExpanded ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </DropdownMenuLabel>

          {isOtherLinksExpanded && (
            <>
              {otherLinks.map((link, index) => (
                <DropdownMenuItem key={index}>
                  <Link href={link.href}>{link.label}</Link>
                </DropdownMenuItem>
              ))}
            </>
          )}

          <DropdownMenuSeparator />
          <Button className="bg-crimson-400 text-black w-full">
            My Project
          </Button>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default DropdownForSmallScreen;

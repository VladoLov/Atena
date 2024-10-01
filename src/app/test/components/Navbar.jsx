"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-platinum-50 p-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/GetImage.png"
              width={130}
              height={15}
              alt="Atena logo"
            />
          </Link>
          {/*   <h3 className="ml-4 text-lg font-semibold text-teal-600">
            Advanced genome testing services
          </h3> */}
        </div>

        {/* Navigation Links */}
        <ul className="flex items-center space-x-6">
          <li className="relative">
            <button
              className="text-md text-teal-600 hover:text-crimson-500 focus:outline-none"
              onClick={toggleDropdown}
            >
              Oncology
            </button>
            {/* Dropdown */}
            {isDropdownOpen && (
              <div className="absolute top-full mt-2 w-56 bg-white shadow-lg rounded-md z-50">
                <ul className="flex flex-col">
                  <li className="p-2 hover:bg-teal-100">
                    <Link href="/oncology/onco-panel">OncoPanel</Link>
                  </li>
                  <li className="p-2 hover:bg-teal-100">
                    <Link href="/oncology/onco-panel">
                      Cancer-specific gene panel
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </li>

          <li className="p-2 hover:bg-teal-100">
            <Link href="/oncology/genopathy">Genopathy</Link>
          </li>
          <li className="p-2 hover:bg-teal-100">
            <Link href="/oncology/cardiopathy">Cardiopathy</Link>
          </li>
          <li className="p-2 hover:bg-teal-100">
            <Link href="/oncology/perinatal">Perinatal</Link>
          </li>
          <li className="p-2 hover:bg-teal-100">
            <Link href="/oncology/pharmacogenetics">Pharmacogenetics</Link>
          </li>
          <li className="p-2 hover:bg-teal-100">
            <Link href="/oncology/pathogenomics">Pathogenomics</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

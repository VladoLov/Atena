"use client";

import { ChevronDown, ChevronRight, ChevronUp } from "lucide-react";
import { useState } from "react";
import { services } from "@/lib/url"; // Assuming you have the services structure here
import Link from "next/link";

function FinalNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState(null); // Track the open submenu

  const handleMouseEnter = (index) => {
    setIsOpen(true);
    setOpenSubMenuIndex(index); // Open the specific submenu of the hovered service
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
    setOpenSubMenuIndex(null); // Close all submenus when leaving the Services menu
  };

  return (
    <nav className="flex list-none items-center justify-start">
      <ul className="flex space-x-4 items-center rounded-lg mx-2">
        <li className="relative group z-20">
          <div className="relative">
            <a
              href="#"
              className="px-4 py-2 flex text-platinum-700 hover:bg-platinum-200 transition-colors duration-300 ease-in-out hover:rounded hover:ring-1 hover:ring-black"
              aria-haspopup="true"
              aria-expanded={isOpen ? "true" : "false"}
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              Services
              {isOpen ? (
                <ChevronUp className="ml-1" />
              ) : (
                <ChevronDown className="ml-1" />
              )}
            </a>

            {/* Dropdown for Services */}
            <ul
              className="absolute left-0 hidden mt-[1px] w-48 bg-white shadow-lg group-hover:block hover:rounded-lg transition-colors duration-300 ease-in-out"
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={handleMouseLeave}
            >
              {services.map((service, index) => (
                <li key={service.href} className="relative group">
                  <Link
                    href={service.href}
                    className="block px-4 py-2 text-platinum-700 hover:bg-platinum-200 hover:rounded hover:ring-1 hover:ring-black transition-colors duration-300 ease-in-out"
                    onMouseEnter={() => handleMouseEnter(index)}
                  >
                    {service.title}
                    {service.items &&
                      (openSubMenuIndex === index ? (
                        <ChevronRight className="ml-1 inline-block" />
                      ) : (
                        <ChevronDown className="ml-1 inline-block" />
                      ))}
                  </Link>

                  {/* Submenu */}
                  {service.items && openSubMenuIndex === index && (
                    <ul
                      className="absolute left-full top-0 mt-full ml-[1px] w-48 bg-white shadow-lg transition-all duration-300 ease-in-out transform opacity-100"
                      onMouseEnter={() => setOpenSubMenuIndex(index)}
                      onMouseLeave={() => setOpenSubMenuIndex(null)}
                    >
                      {service.items.map((item) => (
                        <li key={item.href} className="relative group">
                          <Link
                            href={item.href}
                            className="block px-4 py-2 text-platinum-700 hover:bg-platinum-200 transition-colors duration-300 ease-in-out hover:rounded hover:ring-1 hover:ring-black"
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default FinalNavbar;

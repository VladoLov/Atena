"use client";

import { ChevronDown, ChevronRight, ChevronUp } from "lucide-react";
import { useState } from "react";
import { firstHeader } from "@/lib/url";
import Link from "next/link";

function FinalNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState(null); // Track the open submenu

  const handleMouseEnter = (index) => {
    setIsOpen(true);
    setOpenSubMenuIndex(index); // Open the specific submenu of the hovered navItem
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
    setOpenSubMenuIndex(null); // Close all submenus when leaving the Services menu
  };

  return (
    <nav className="flex list-none items-center justify-start">
      <ul className="flex space-x-4 items-center rounded-lg mx-2">
        {firstHeader.map((navItem, index) => (
          <li className="relative group z-20" key={index}>
            <div className="relative">
              {/* Check if navItem.href exists before rendering the Link */}
              {navItem.href && (
                <Link
                  href={navItem.href}
                  className="px-4 py-2 flex text-black hover:bg-crimson-500 transition-colors duration-300 ease-in-out hover:rounded hover:ring-1 hover:ring-black"
                  aria-haspopup="true"
                  aria-expanded={isOpen ? "true" : "false"}
                  onMouseEnter={() => setIsOpen(true)}
                  onMouseLeave={() => setIsOpen(false)}
                >
                  {navItem.title} {/* Use navItem.title to display the title */}
                </Link>
              )}

              {/* Dropdown for Services */}
              <ul
                className="absolute left-0 hidden mt-[1px] w-48 bg-crimson-400 shadow-lg group-hover:block hover:rounded-lg transition-colors duration-300 ease-in-out"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={handleMouseLeave}
              >
                {navItem.items &&
                  navItem.items.map((subItem, subIndex) => (
                    <li key={subIndex} className="relative group">
                      {/* Check if subItem.href exists before rendering the Link */}
                      {subItem.href && (
                        <Link
                          href={subItem.href}
                          className="block px-4 py-2 text-black hover:bg-crimson-500 hover:rounded hover:ring-1 hover:ring-black transition-colors duration-300 ease-in-out"
                          onMouseEnter={() => handleMouseEnter(index)}
                        >
                          {subItem.title}
                        </Link>
                      )}

                      {/* Submenu */}
                      {subItem.items && openSubMenuIndex === subIndex && (
                        <ul
                          className="absolute left-full top-0 mt-full ml-[1px] w-48 bg-crimson-400 shadow-lg transition-all duration-300 ease-in-out transform opacity-100"
                          onMouseEnter={() => setOpenSubMenuIndex(subIndex)}
                          onMouseLeave={() => setOpenSubMenuIndex(null)}
                        >
                          {subItem.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="relative group">
                              {/* Check if item.href exists before rendering the Link */}
                              {item.href && (
                                <Link
                                  href={item.href}
                                  className="block px-4 py-2 text-black hover:bg-crimson-500 transition-colors duration-300 ease-in-out hover:rounded hover:ring-1 hover:ring-black"
                                >
                                  {item.title}
                                </Link>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default FinalNavbar;

"use client";

import {
  ChevronDown,
  ChevronRight,
  ChevronUp,
  ChevronLeft,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { services } from "@/lib/url"; // Assuming you have the services structure here
import Link from "next/link";

function FinalNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState(null); // Track the open submenu
  const [flippedSubmenus, setFlippedSubmenus] = useState({}); // Track flipped state for each submenu

  const handleMouseEnter = (index, event) => {
    setIsOpen(true);
    setOpenSubMenuIndex(index); // Open the specific submenu of the hovered service

    // Calculate if there is enough space on the right for this submenu
    const target = event.currentTarget;
    const submenuRect = target.getBoundingClientRect();
    const windowWidth = window.innerWidth;

    // If the submenu would overflow the right edge of the window, flip it to the left
    if (submenuRect.right + 300 > windowWidth) {
      // 300 is an estimate of submenu width. Adjust as needed.
      setFlippedSubmenus((prev) => ({ ...prev, [index]: true }));
    } else {
      setFlippedSubmenus((prev) => ({ ...prev, [index]: false }));
    }
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
    setOpenSubMenuIndex(null); // Close all submenus when leaving the Services menu
  };

  return (
    <div className="flex list-none items-center justify-start z-29">
      <ul className="flex  items-center rounded-lg mx-2">
        <li className="relative group z-20">
          <div className="relative">
            <Link
              href="#"
              className="px-4 py-2 flex text-platinum-900 hover:bg-platinum-200 duration-300 ease-in-out hover:rounded hover:ring-1 hover:ring-black"
              aria-haspopup="true"
              aria-expanded={isOpen ? "true" : "false"}
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              Services{" "}
              <span className="text-crimson-700 pl-1">Coming Soon ☄️</span>
              {isOpen ? (
                <ChevronUp className="ml-1" />
              ) : (
                <ChevronDown className="ml-1" />
              )}
            </Link>

            {/* Dropdown for Services */}
            <ul
              className="absolute left-0 hidden mt-[1px] w-72 bg-white shadow-lg group-hover:block hover:rounded-lg transition-color duration-300 ease-in-out"
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={handleMouseLeave}
            >
              {services.map((service, index) => (
                <li key={service.href} className="relative group">
                  <Link
                    href={service.href1}
                    className="block px-4 py-2 text-platinum-900 hover:bg-platinum-200 hover:rounded hover:ring-1 hover:ring-black transition-colors duration-300 ease-in-out"
                    onMouseEnter={(event) => handleMouseEnter(index, event)}
                  >
                    {service.title}
                    {service.items &&
                      (openSubMenuIndex === index ? (
                        flippedSubmenus[index] ? (
                          <ChevronLeft className="ml-1 inline-block" />
                        ) : (
                          <ChevronRight className="ml-1 inline-block" />
                        )
                      ) : (
                        <ChevronDown className="ml-1 inline-block" />
                      ))}
                  </Link>

                  {/* Submenu */}
                  {service.items && openSubMenuIndex === index && (
                    <ul
                      className={`absolute top-0 mt-full w-60 bg-white shadow-lg transition-all duration-300 ease-in-out transform opacity-100 ${
                        flippedSubmenus[index]
                          ? "right-full -ml-[1px]"
                          : "left-full"
                      }`}
                      onMouseEnter={() => setOpenSubMenuIndex(index)}
                      onMouseLeave={() => setOpenSubMenuIndex(null)}
                    >
                      {service.items.map((item) => (
                        <li key={item.href} className="relative group">
                          <Link
                            href={item.href1}
                            className="block px-4 py-2 text-platinum-900 hover:bg-platinum-200 transition-colors duration-300 ease-in-out hover:rounded hover:ring-1 hover:ring-black"
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
    </div>
  );
}

export default FinalNavbar;

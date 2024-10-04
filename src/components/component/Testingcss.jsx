"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

function Testingcss() {
  const [isOpen, setIsOpen] = useState(false);
  const [isWebDevOpen, setIsWebDevOpen] = useState(false);

  // To avoid premature closing when hovering between parent and submenu
  const handleMouseEnter = () => {
    setIsOpen(true);
    // Clear any hide timeout if already hovering
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setIsOpen(false);
      setIsWebDevOpen(false); // Close the nested submenu as well
    }, 100); // Small delay to allow for hovering between menus
  };

  return (
    <nav className="flex list-none items-center justify-start ">
      <ul className="flex space-x-4 items-center rounded-lg mx-2">
        <li className="relative group">
          <a
            href="#"
            className="px-4 py-2 text-platinum-700  hover:bg-platinum-200 hover:rounded hover:ring-1 hover:ring-black"
          >
            Home
          </a>
        </li>
        <li className="relative group z-20">
          <div className="relative ">
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
            <ul
              className="absolute left-0 hidden mt-0.5 w-48  bg-white shadow-lg group-hover:block hover:rounded-lg"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <li className="relative group">
                <a
                  href="/web-development"
                  className="block px-4 py-2 text-platinum-700 hover:bg-platinum-200 hover:rounded hover:ring-1 hover:ring-black"
                  onMouseEnter={() => setIsWebDevOpen(true)}
                  onMouseLeave={() => setIsWebDevOpen(false)}
                >
                  Web Development
                </a>
                {/* Submenu for Web Development */}
                <ul
                  className={` absolute left-full top-0 mt-0 ml-0.5 w-48 bg-white shadow-lg transition-all duration-300 ease-in-out transform ${
                    isWebDevOpen ? "translate-y-0 opacity-100" : "opacity-0"
                  } `}
                  onMouseEnter={() => setIsWebDevOpen(true)}
                  onMouseLeave={() => setIsWebDevOpen(false)}
                >
                  <li className="relative group">
                    <a
                      href="/frontend"
                      className="block px-4 py-2 text-platinum-700 hover:bg-platinum-200 transition-colors duration-300 ease-in-out hover:rounded hover:ring-1 hover:ring-black"
                    >
                      Frontend
                    </a>
                  </li>
                  <li className="relative group">
                    <a
                      href="#"
                      className="block px-4 py-2 text-platinum-700 hover:bg-platinum-200 transition-colors duration-300 ease-in-out hover:rounded hover:ring-1 hover:ring-black"
                    >
                      Backend
                    </a>
                  </li>
                </ul>
              </li>
              <li className="">
                <a
                  href="#"
                  className="block px-4 py-2 text-platinum-700 hover:bg-platinum-200 hover:rounded hover:ring-1 hover:ring-black"
                >
                  SEO
                </a>
              </li>
              <li className="">
                <a
                  href="#"
                  className="block px-4 py-2 text-platinum-700 hover:bg-platinum-200 hover:rounded hover:ring-1 hover:ring-black"
                >
                  Graphic Design
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li className="relative group">
          <a
            href="#"
            className=" px-4 py-2 text-platinum-700 hover:bg-platinum-200 hover:rounded hover:ring-1 hover:ring-black"
          >
            About
          </a>
        </li>
        <li className="relative group">
          <a
            href="#"
            className=" px-4 py-2 text-platinum-700 hover:bg-platinum-200 hover:rounded hover:ring-1 hover:ring-black"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Testingcss;

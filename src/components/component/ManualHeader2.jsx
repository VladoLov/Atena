"use client";

/* import Link from "next/link";
import { useState } from "react";

const services = [
  {
    title: "Oncology",
    href: "/services/oncology",
    subItems: [
      { title: "OncoPanel", href: "/services/oncology/oncopanel" },
      {
        title: "Cancer",
        href: "/services/oncology/cancer",
        subItems: [
          { title: "Breast Cancer", href: "/services/oncology/cancer/breast" },
          { title: "Lung Cancer", href: "/services/oncology/cancer/lung" },
          {
            title: "Prostate Cancer",
            href: "/services/oncology/cancer/prostate",
          },
        ],
      },
    ],
  },
  {
    title: "Cardiology",
    href: "/services/cardiology",
    subItems: [
      { title: "Heart Health", href: "/services/cardiology/heart-health" },
      { title: "Arrhythmia", href: "/services/cardiology/arrhythmia" },
    ],
  },
  {
    title: "Neurology",
    href: "/services/neurology",
  },
];

function ManualHeader2() {
  return (
    <header className="flex justify-between w-full bg-black mx-auto">
      <h1 className="text-xl font-bold text-white">LOGO</h1>
      <nav className="inline-flex items-center text-white">
        <ul className="flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent">
          {services.map((service) => (
            <li key={service.href} className="text-white">
              <Link href={service.href}>{service.title}</Link>
              {service.subItems && (
                <ul className="z-50 min-w-[8rem] w-60 h-96 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2">
                  {services.subItems.map((subitem) => (
                    <li
                      key={subitem.href}
                      className={cn(
                        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1.5 text-popover-foreground shadow-md",
                        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
                      )}
                    >
                      <Link
                        className="relative flex cursor-default select-none justify-center items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 inset && pl-8"
                        href={subitem.href}
                      >
                        {subitem.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default ManualHeader2;
 */

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";

const services = [
  {
    title: "Oncology",
    href: "/services/oncology",
    subItems: [
      { title: "OncoPanel", href: "/services/oncology/oncopanel" },
      {
        title: "Cancer",
        href: "/services/oncology/cancer",
        subItems: [
          { title: "Breast Cancer", href: "/services/oncology/cancer/breast" },
          { title: "Lung Cancer", href: "/services/oncology/cancer/lung" },
          {
            title: "Prostate Cancer",
            href: "/services/oncology/cancer/prostate",
          },
        ],
      },
    ],
  },
  {
    title: "Cardiology",
    href: "/services/cardiology",
    subItems: [
      { title: "Heart Health", href: "/services/cardiology/heart-health" },
      { title: "Arrhythmia", href: "/services/cardiology/arrhythmia" },
    ],
  },
  {
    title: "Neurology",
    href: "/services/neurology",
  },
];

function MenuItem({ item, depth = 0 }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <li ref={menuRef} className="relative group">
      <Link
        href={item.href}
        className={`flex items-center justify-between px-4 py-2 text-white hover:bg-gray-700 rounded transition-colors duration-200 ${
          depth > 0 ? "text-sm" : ""
        }`}
        onMouseEnter={() => setIsOpen(true)}
      >
        <span>{item.title}</span>
        {item.subItems &&
          (depth === 0 ? (
            <ChevronDown className="ml-1 h-4 w-4" />
          ) : (
            <ChevronRight className="ml-1 h-4 w-4" />
          ))}
      </Link>
      {item.subItems && isOpen && (
        <ul
          className={`absolute bg-black rounded-md shadow-lg z-10 ${
            depth === 0 ? "left-0 mt-2 w-48" : "left-full top-0  w-48"
          }`}
          onMouseLeave={() => setIsOpen(false)}
        >
          {item.subItems.map((subItem) => (
            <MenuItem key={subItem.href} item={subItem} depth={depth + 1} />
          ))}
        </ul>
      )}
    </li>
  );
}

function ManualHeader2() {
  return (
    <header className="flex justify-between items-center w-full bg-black px-4 py-2">
      <h1 className="text-xl font-bold text-white">LOGO</h1>
      <nav>
        <ul className="flex space-x-4">
          {services.map((service) => (
            <MenuItem key={service.href} item={service} />
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default ManualHeader2;

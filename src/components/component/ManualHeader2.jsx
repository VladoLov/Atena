"use client";

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

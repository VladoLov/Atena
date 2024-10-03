"use client";

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

export default function HoverNavigationMenu() {
  return (
    <nav className="bg-platinum text-black">
      <ul className="flex space-x-6 p-4">
        {/* Home Link */}
        <li>
          <a href="/" className="hover:text-gray-400">
            Home
          </a>
        </li>

        {/* Services with Submenus on Hover */}
        {services.map((service) => (
          <li key={service.title} className="relative group">
            <a href={service.href} className="hover:text-gray-600">
              {service.title}
            </a>

            {/* First-level Submenu */}
            {service.subItems && (
              <ul className="absolute hidden group-hover:block mt-2 bg-platinum p-2 rounded shadow-lg space-y-2 transition-all duration-300 ease-in-out delay-100">
                {service.subItems.map((subItem) => (
                  <li key={subItem.title} className="relative group">
                    <a
                      href={subItem.href}
                      className="block p-2 hover:bg-gray-300 rounded"
                    >
                      {subItem.title}
                    </a>

                    {/* Second-level Submenu (Nested under Cancer) */}
                    {subItem.subItems && (
                      <ul className="absolute left-full top-0 mt-0 hidden group-hover:block bg-platinum p-2 rounded shadow-lg space-y-2 transition-all duration-300 ease-in-out delay-100">
                        {subItem.subItems.map((nestedItem) => (
                          <li key={nestedItem.title}>
                            <a
                              href={nestedItem.href}
                              className="block p-2 hover:bg-gray-300 rounded"
                            >
                              {nestedItem.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}

        {/* About Link */}
        <li>
          <a href="/about" className="hover:text-gray-600">
            About
          </a>
        </li>
      </ul>
    </nav>
  );
}

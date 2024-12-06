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
import { useTranslation } from "react-i18next";

function FinalNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState(null); // Track the open submenu
  const [flippedSubmenus, setFlippedSubmenus] = useState({}); // Track flipped state for each submenu

  const { t } = useTranslation(); // Access the translation function

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

  const services = [
    {
      title: t("link.services.cancer_ngs_profiling.title"),
      href: "/services/cancer-ngs-profiling",
      href1: "#",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ribbon"><path d="M12 11.22C11 9.997 10 9 10 8a2 2 0 0 1 4 0c0 1-.998 2.002-2.01 3.22"/><path d="m12 18 2.57-3.5"/><path d="M6.243 9.016a7 7 0 0 1 11.507-.009"/><path d="M9.35 14.53 12 11.22"/><path d="M9.35 14.53C7.728 12.246 6 10.221 6 7a6 5 0 0 1 12 0c-.005 3.22-1.778 5.235-3.43 7.5l3.557 4.527a1 1 0 0 1-.203 1.43l-1.894 1.36a1 1 0 0 1-1.384-.215L12 18l-2.679 3.593a1 1 0 0 1-1.39.213l-1.865-1.353a1 1 0 0 1-.203-1.422z"/></svg>`,
      items: [
        {
          title: t(
            "link.services.cancer_ngs_profiling.items.tumor_profiling_ngs"
          ),
          href: "/services/cancer-ngs-profiling/tumor-profiling-ngs",
          href1: "#",
        },
        {
          title: t(
            "link.services.cancer_ngs_profiling.items.hematological_malignancies_ngs"
          ),
          href: "/services/cancer-ngs-profiling/hematological-malignancies-ngs",
          href1: "#",
        },
        {
          title: t(
            "link.services.cancer_ngs_profiling.items.liquid_biopsies_ngs"
          ),
          href: "/services/cancer-ngs-profiling/liquid-biopsies-ngs",
          href1: "#",
        },
        {
          title: t(
            "link.services.cancer_ngs_profiling.items.hereditary_cancer_screening"
          ),
          href: "/services/cancer-ngs-profiling/hereditary-cancer-screening",
          href1: "#",
        },
        {
          title: t(
            "link.services.cancer_ngs_profiling.items.cancer_drug_resistance_monitoring"
          ),
          href: "/services/cancer-ngs-profiling/cancer-drug-resistance-monitoring",
          href1: "#",
        },
      ],
    },
    {
      title: t("link.services.genetic_disorders_ngs.title"),
      href: "/services/genetic-disorders-ngs",
      href1: "#",
      items: [
        {
          title: t(
            "link.services.genetic_disorders_ngs.items.neurological_disorders"
          ),
          href: "/services/genetic-disorders-ngs/neurological-disorders",
          href1: "#",
        },
        {
          title: t(
            "link.services.genetic_disorders_ngs.items.developmental_disabilities"
          ),
          href: "/services/genetic-disorders-ngs/developmental-disabilities",
          href1: "#",
        },
        {
          title: t(
            "link.services.genetic_disorders_ngs.items.metabolic_mitochondrial"
          ),
          href: "/services/genetic-disorders-ngs/metabolic-mitochondrial",
          href1: "#",
        },
        {
          title: t(
            "link.services.genetic_disorders_ngs.items.immunological_disorders"
          ),
          href: "/services/genetic-disorders-ngs/immunological-disorders",
          href1: "#",
        },
        {
          title: t(
            "link.services.genetic_disorders_ngs.items.rare_genetic_disorders"
          ),
          href: "/services/genetic-disorders-ngs/rare-genetic-disorders",
          href1: "#",
        },
        {
          title: t("link.services.genetic_disorders_ngs.items.other_genetic"),
          href: "/services/genetic-disorders-ngs/other-genetic",
          href1: "#",
        },
      ],
    },
    {
      title: t("link.services.prenatal_genetic"),
      href: "/services/prenatal-genetic-risk-analysis",
      href1: "/",
    },
    {
      title: t("link.services.genomic_response"),
      href: "/services/genomic-response-to-pharmacotherapy",
      href1: "/",
    },
    {
      title: t("link.services.pathogen"),
      href: "/services/pathogen-ngs-profiling",
      href1: "/",
    },
    {
      title: t("link.services.client_specific"),
      href: "/services/client-specific-ngs-testing",
      href1: "/",
    },
  ];

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
              <span className="text-crimson-900 font-semibold pl-1">
                Coming Soon ☄️
              </span>
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

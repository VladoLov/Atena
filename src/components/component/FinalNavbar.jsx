"use client";

import {
  ChevronDown,
  ChevronRight,
  ChevronUp,
  ChevronLeft,
} from "lucide-react";
import { useState, useEffect } from "react";
// Assuming you have the services structure here
import Link from "next/link";
import { useTranslations } from "next-intl";

function FinalNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState(null); // Track the open submenu
  const [flippedSubmenus, setFlippedSubmenus] = useState({}); // Track flipped state for each submenu
  const [isLoaded, setIsLoaded] = useState(false);

  const t = useTranslations("link"); // Access the translation function

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
      title: t("services.cancer_ngs_profiling.title"),
      href: "/services/cancer-ngs-profiling",
      href1: "/services/cancer-ngs-profiling",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ribbon"><path d="M12 11.22C11 9.997 10 9 10 8a2 2 0 0 1 4 0c0 1-.998 2.002-2.01 3.22"/><path d="m12 18 2.57-3.5"/><path d="M6.243 9.016a7 7 0 0 1 11.507-.009"/><path d="M9.35 14.53 12 11.22"/><path d="M9.35 14.53C7.728 12.246 6 10.221 6 7a6 5 0 0 1 12 0c-.005 3.22-1.778 5.235-3.43 7.5l3.557 4.527a1 1 0 0 1-.203 1.43l-1.894 1.36a1 1 0 0 1-1.384-.215L12 18l-2.679 3.593a1 1 0 0 1-1.39.213l-1.865-1.353a1 1 0 0 1-.203-1.422z"/></svg>`,
      comingSoon: false,
      items: [
        {
          title: t("services.cancer_ngs_profiling.items.tumor_profiling_ngs"),
          href: "/services/cancer-ngs-profiling/tumor-profiling-ngs",
          href1: "#",
          comingSoon: true,
        },
        /*   {
          title: t(
            "services.cancer_ngs_profiling.items.hematological_malignancies_ngs"
          ),
          href: "/services/cancer-ngs-profiling/hematological-malignancies-ngs",
          href1: "#",
        }, */
        {
          title: t("services.cancer_ngs_profiling.items.liquid_biopsies_ngs"),
          href: "/services/cancer-ngs-profiling/liquid-biopsies-ngs",
          href1: "#",
          comingSoon: true,
        },
        {
          title: t(
            "services.cancer_ngs_profiling.items.hereditary_cancer_screening"
          ),
          href: "/services/cancer-ngs-profiling/hereditary-cancer-screening",
          href1: "/services/cancer-ngs-profiling/hereditary-cancer-screening",
          comingSoon: false,
        },
        {
          title: t(
            "services.cancer_ngs_profiling.items.cancer_drug_resistance_monitoring"
          ),
          href: "/services/cancer-ngs-profiling/cancer-drug-resistance-monitoring",
          href1: "#",
          comingSoon: true,
        },
      ],
    },
    {
      title: t("services.genetic_disorders_ngs.title"),
      href: "/services/genetic-disorders-ngs",
      href1: "/services/genetic-disorders-ngs",
      comingSoon: false,
      items: [
        {
          title: t("services.genetic_disorders_ngs.items.proactive_genomic"),
          href: "/services/genetic-disorders-ngs/proactive-genomic-health-screening",
          href1:
            "/services/genetic-disorders-ngs/proactive-genomic-health-screening",
        },
        {
          title: t(
            "services.genetic_disorders_ngs.items.neurological_disorders"
          ),
          href: "/services/genetic-disorders-ngs/neurological-neuromuscular-disorders",
          href1:
            "/services/genetic-disorders-ngs/neurological-neuromuscular-disorders",
        },
        {
          title: t(
            "services.genetic_disorders_ngs.items.developmental_disabilities"
          ),
          href: "/services/genetic-disorders-ngs/developmental-intellectual-disabilities",
          href1:
            "/services/genetic-disorders-ngs/developmental-intellectual-disabilities",
        },
        {
          title: t(
            "services.genetic_disorders_ngs.items.metabolic_mitochondrial"
          ),
          href: "/services/genetic-disorders-ngs/metabolic-mitochondrial-disorders",
          href1:
            "/services/genetic-disorders-ngs/metabolic-mitochondrial-disorders",
        },
        {
          title: t(
            "services.genetic_disorders_ngs.items.immunological_disorders"
          ),
          href: "/services/genetic-disorders-ngs/immunological-disorders",
          href1: "/services/genetic-disorders-ngs/immunological-disorders",
        },
        {
          title: t(
            "services.genetic_disorders_ngs.items.rare_genetic_disorders"
          ),
          href: "/services/genetic-disorders-ngs/rare-genetic-disorders",
          href1: "/services/genetic-disorders-ngs/rare-genetic-disorders",
        },
        {
          title: t("services.genetic_disorders_ngs.items.other_genetic", {
            comingSoon: t("soon"),
          }),
          href: "/services/genetic-disorders-ngs/other-genetic",
          href1: "#",
          comingSoon: true,
        },
      ],
    },
    {
      title: t("services.prenatal_genetic"),
      href: "/services/prenatal-genetic-risk-analysis",
      href1: "/",
      comingSoon: true,
    },
    {
      title: t("services.genomic_response"),
      href: "/services/genomic-response-to-pharmacotherapy",
      href1: "/services/pharmacogenomics",
      comingSoon: false,
    },
    {
      title: t("services.pathogen"),
      href: "/services/pathogen-ngs-profiling",
      href1: "/",
      comingSoon: true,
    },
    {
      title: t("services.client_specific"),
      href: "/services/client-specific-ngs-testing",
      href1: "/",
      comingSoon: true,
    },
  ];
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return null; // or a loading spinner
  }
  return (
    <div className="flex list-none items-center justify-start z-29">
      <ul className="flex  items-center rounded-lg mx-2">
        <li className="relative group z-20">
          <div className="relative">
            <Link
              href="#"
              className="px-4 py-2 flex text-platinum-950 hover:bg-platinum-200 duration-300 ease-in-out hover:rounded hover:ring-1 hover:ring-black"
              aria-haspopup="true"
              aria-expanded={isOpen ? "true" : "false"}
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              <span>{t("services.services")}</span>
              {/*  <span className="text-crimson-900 font-semibold pl-1">
                {t("soon")} ☄️
              </span> */}
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
                    className={`block  px-4 py-2 transition-colors duration-300 ${
                      service.comingSoon
                        ? "text-platinum-500 cursor-not-allowed"
                        : "text-platinum-950 hover:bg-platinum-200 hover:rounded hover:ring-1 hover:ring-black"
                    }`}
                    onMouseEnter={(event) => handleMouseEnter(index, event)}
                  >
                    <div className="flex">
                      <div className="flex flex-col">
                        {service.title}
                        {service.comingSoon && (
                          <span className="text-xs italic mt-0.5">
                            {t("soon")}
                          </span>
                        )}
                      </div>
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
                    </div>
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
                            href={item.comingSoon ? "#" : item.href}
                            className={`block px-4 py-2 transition-colors duration-300 ${
                              item.comingSoon
                                ? "text-platinum-500 cursor-not-allowed"
                                : "text-platinum-950 hover:bg-platinum-200 hover:rounded hover:ring-1 hover:ring-black"
                            }`}
                          >
                            <div className="flex flex-col">
                              <span>{item.title}</span>
                              {item.comingSoon && (
                                <span className="text-xs italic mt-0.5">
                                  {t("soon")}
                                </span>
                              )}
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                  {/* /** Map submenu with coming soon */}
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

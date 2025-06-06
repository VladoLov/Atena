"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";
/* import { firstHeader, services } from "@/lib/url"; */
import { useTranslations } from "next-intl";

function FooterSection({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col w-full sm:w-auto ">
      <div className="flex items-start justify-between h-8 lg:h-14">
        <button
          className="flex px-4 items-center justify-center w-full text-base font-medium text-platinum-900 hover:text-platinum-950 lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
        >
          <span className="line-clamp-2">{title}</span>
          <span className="lg:hidden ml-2 flex-shrink-0">
            {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </span>
        </button>

        <p className="hidden lg:block text-lg  font-medium text-platinum-900 hover:text-platinum-950 line-clamp-2">
          {title}
        </p>
      </div>

      <ul
        className={`space-y-4 mx-auto md:mx-0 md:text-start md:mt-4 text-center my-2 text-sm ${
          isOpen ? "block" : "hidden"
        } lg:block`}
      >
        {children}
      </ul>
    </div>
  );
}

export default function Footer2() {
  const t = useTranslations();

  const services = [
    {
      title: t("link.services.cancer_ngs_profiling.title"),
      href: "/services/cancer-ngs-profiling",
      href1: "/services/cancer-ngs-profiling",
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
          href1: "/services/cancer-ngs-profiling/hereditary-cancer-screening",
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
      href1: "/services/genetic-disorders-ngs",
      items: [
        {
          title: t(
            "link.services.genetic_disorders_ngs.items.proactive_genomic"
          ),
          href: "/services/genetic-disorders-ngs/proactive-genomic",
          href1:
            "/services/genetic-disorders-ngs/proactive-genomic-health-screening",
        },
        {
          title: t(
            "link.services.genetic_disorders_ngs.items.neurological_disorders"
          ),
          href: "/services/genetic-disorders-ngs/neurological-disorders",
          href1:
            "/services/genetic-disorders-ngs/neurological-neuromuscular-disorders",
        },
        {
          title: t(
            "link.services.genetic_disorders_ngs.items.developmental_disabilities"
          ),
          href: "/services/genetic-disorders-ngs/developmental-disabilities",
          href1:
            "/services/genetic-disorders-ngs/developmental-intellectual-disabilities",
        },
        {
          title: t(
            "link.services.genetic_disorders_ngs.items.metabolic_mitochondrial"
          ),
          href: "/services/genetic-disorders-ngs/metabolic-mitochondrial-disorders",
          href1:
            "/services/genetic-disorders-ngs/metabolic-mitochondrial-disorders",
        },
        {
          title: t(
            "link.services.genetic_disorders_ngs.items.immunological_disorders"
          ),
          href: "/services/genetic-disorders-ngs/immunological-disorders",
          href1: "/services/genetic-disorders-ngs/immunological-disorders",
        },
        {
          title: t(
            "link.services.genetic_disorders_ngs.items.rare_genetic_disorders"
          ),
          href: "/services/genetic-disorders-ngs/rare-genetic-disorders",
          href1: "/services/genetic-disorders-ngs/rare-genetic-disorders",
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
      href1: "#",
    },
    {
      title: t("link.services.genomic_response"),
      href: "/services/pharmacogenomics",
      href1: "/services/pharmacogenomics",
    },
    {
      title: t("link.services.pathogen"),
      href: "/services/pathogen-ngs-profiling",
      href1: "#",
    },
    {
      title: t("link.services.client_specific"),
      href: "/services/client-specific-ngs-testing",
      href1: "#",
    },
  ];

  const info = [
    { title: t("link.information.about"), href: "/about" },
    { title: t("link.information.contact"), href: "/contact" },
  ];

  return (
    <footer className="bg-platinum-50 w-full font-poppins">
      <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="flex flex-col items-center lg:items-start">
            <div className="flex justify-center text-crimson-600 sm:justify-start ">
              <Image
                src="/AtenaGenomicsLogo.png"
                width={250}
                height={250}
                alt="Atena logo"
                priority
              />
            </div>
            <p className="mt-6 max-w-md text-center leading-relaxed text-platinum-900 sm:max-w-xs sm:text-left">
              {t("footer.text")}
            </p>
            <div className="flex flex-col gap-1.5 text-center sm:text-left mt-6">
              <p className="text-lg font-medium text-platinum-900">
                {t("footer.contact")}
              </p>
              <ul className=" mt-2 space-y-4 text-sm lg:block lg:mt-4">
                <li>
                  <Link
                    className="flex items-center justify-start gap-1.5 lg:justify-start"
                    href="/contact"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5 shrink-0  text-crimson-600 hover:scale-110 hover:text-crimson-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="flex pl-1 text-platinum-900 hover:text-platinum-950">
                      info@atenagenomics.com
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex justify-start  gap-1.5 lg:justify-start"
                    href="tel:+1234567890"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5 shrink-0  text-crimson-600 hover:scale-110 hover:text-crimson-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span className="flex pl-1 text-platinum-900 hover:text-platinum-950">
                      +38763201361
                    </span>
                  </Link>
                </li>
                <li className="flex justify-start  gap-1.5 lg:justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 shrink-0  text-crimson-600 hover:scale-110 hover:text-crimson-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <address className="-mt-0.5 pl-1 not-italic text-platinum-900 hover:text-platinum-950">
                    <Link
                      href="https://www.google.com/maps/search/?api=1&query=Vukovarska+50+Mostar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="-mt-0.5 pl-1 not-italic text-platinum-900 hover:text-platinum-950"
                    >
                      Vukovarska 50 Mostar
                    </Link>
                  </address>
                </li>
              </ul>
            </div>

            <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
              <li>
                <Link
                  href="https://www.facebook.com/profile.php?id=61569630720471&mibextid=ZbWKwL"
                  rel="noreferrer"
                  target="_blank"
                  className="text-teal-700 transition hover:text-crimson-700"
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="size-6 text-crimson-600 hover:scale-110 hover:text-crimson-700 "
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/atena.genomics/profilecard/?igsh=MXQ3b2Z4eDVxODlyNg%3D%3D"
                  rel="noreferrer"
                  target="_blank"
                  className="text-teal-700 transition hover:text-crimson-700"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="size-6  text-crimson-600 hover:scale-110 hover:text-crimson-700"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </li>
              {/*  <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-teal-700 transition hover:text-crimson-700"
                >
                  <span className="sr-only">Tik Tok</span>
                  <svg
                    className="size-6  text-crimson-600 hover:scale-110 hover:text-crimson-700"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" />
                  </svg>
                </a>
              </li> */}
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
            <FooterSection title={t("footer.info")}>
              {info.map((service) => (
                <li key={service.href}>
                  <Link
                    className="text-platinum-900 hover:text-platinum-950 transition-all"
                    href={service.href}
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </FooterSection>
            <FooterSection title={t("footer.cancer")}>
              {services[0].items.map((service) => (
                <li key={service.href}>
                  {service.href1 === "#" ? (
                    <span className="text-platinum-400 cursor-not-allowed">
                      {service.title}
                    </span>
                  ) : (
                    <Link
                      className="text-platinum-950 hover:text-platinum-950 transition-all"
                      href={service.href1}
                    >
                      {service.title}
                    </Link>
                  )}
                </li>
              ))}
            </FooterSection>

            <FooterSection title={t("footer.genetic")}>
              {services[1].items.map((service) => (
                <li key={service.href}>
                  {service.href1 === "#" ? (
                    <span className="text-platinum-400 cursor-not-allowed">
                      {service.title}
                    </span>
                  ) : (
                    <Link
                      className="text-platinum-950 hover:text-platinum-950 transition-all"
                      href={service.href1}
                    >
                      {service.title}
                    </Link>
                  )}
                </li>
              ))}
            </FooterSection>

            <FooterSection title={t("footer.other")}>
              {services.slice(2).map((service) => (
                <li key={service.href}>
                  {service.href1 === "#" ? (
                    <span className="text-platinum-400 cursor-not-allowed">
                      {service.title}
                    </span>
                  ) : (
                    <Link
                      className="text-platinum-950 hover:text-platinum-950 transition-all"
                      href={service.href1}
                    >
                      {service.title}
                    </Link>
                  )}
                </li>
              ))}
            </FooterSection>
          </div>
        </div>

        <div className="mt-12 border-t border-platinum-100 pt-6">
          <div className="text-center sm:flex sm:justify-center sm:text-left">
            {/*  <p className="text-sm text-platinum-800">
              <span className="block sm:inline">All rights reserved. </span>
              <Link
                href="/docs/Terms_and_Conditions.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-crimson-600 underline transition hover:text-crimson-600/75"
              >
                Terms & Conditions
              </Link>
              <span> &middot; </span>
              <Link
                className="inline-block text-crimson-600 underline transition hover:text-crimson-600/75"
                href="/resources/policies"
              >
                Privacy Policy
              </Link>
            </p> */}
            <p className="mt-4 text-sm text-platinum-800 sm:order-first sm:mt-0">
              &copy; {new Date().getFullYear()} ATENA
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

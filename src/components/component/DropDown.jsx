"use client";
import { useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { Globe, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { firstHeader, services } from "@/lib/url";
import { LanguageSwitcher } from "@/newcomponents/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { SmallLanguageSwitcher } from "@/newcomponents/SmallLanguageSwitcher";

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const { t } = useTranslation("common");
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
  const info = [
    { title: t("link.information.about"), href: "/about" },
    { title: t("link.information.contact"), href: "/contact" },
  ];
  return (
    <div className="bg-white w-full flex justify-between px-4 py-1 lg:hidden shadow-md mb-1 ">
      <Link href="/">
        <Image
          src="/AtenaGenomicsLogo.png"
          width={130}
          height={50}
          alt="Atena logo"
          priority
        />
      </Link>

      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger
          className="bg-crimson-500 font-poppins text-white px-4 py-2 rounded-md focus:ring-outline-none active:bg-crimson-500 focus:border-crimson-500 "
          onClick={toggleDropdown}
        >
          {isOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <GiHamburgerMenu className="w-5 h-5 " />
          )}
        </DropdownMenuTrigger>

        <DropdownMenuContent className="bg-white min-h-fit w-lvw overflow-y-auto text-center font-poppins">
          {info.map((item) => (
            <DropdownMenuItem key={item.href}>
              <Link href={item.href}>{item.title}</Link>
            </DropdownMenuItem>
          ))}
          <DropdownMenuSeparator />
          <DropdownMenuLabel>
            <Link href="/#">{t("link.services.services")}</Link>
          </DropdownMenuLabel>
          {services.map((service) => (
            <DropdownMenuItem key={service.href}>
              <Link href={service.href1}>{service.title}</Link>
            </DropdownMenuItem>
          ))}
          <DropdownMenuSeparator />
          <DropdownMenuSeparator />
          <Button className="bg-crimson-500 text-black w-9/12 ">
            <label>{t("link.account")}</label> {t("link.soon")}
          </Button>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="space-x-2 flex items-center justify-center">
            {t("link.language")} <Globe className="w-4 h-auto ml-2 " />:{" "}
            <SmallLanguageSwitcher />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default DropDown;

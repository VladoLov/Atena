"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTranslation } from "react-i18next";

function SecondPartOfHeader() {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex list-none items-center  justify-start z-30">
        <Link
          href="#"
          className="px-4 py-2 flex  text-platinum-900 hover:bg-platinum-200  duration-300 ease-in-out hover:rounded hover:ring-1 hover:ring-black"
          aria-haspopup="true"
        >
          {t("link.consulting")}
        </Link>
      </div>
      <div className="flex list-none items-center  justify-start z-30">
        <Link
          href="/about"
          className="px-4 py-2 flex  text-platinum-900 hover:bg-platinum-200  duration-300 ease-in-out hover:rounded hover:ring-1 hover:ring-black"
          aria-haspopup="true"
        >
          {t("link.information.about")}
        </Link>
      </div>
      {/*  <div className="flex list-none items-center justify-start z-30">
            <Link
              href="/faq"
              className="px-4 py-2 flex text-platinum-700 hover:bg-platinum-200 transition-colors duration-300 ease-in-out hover:rounded hover:ring-1 hover:ring-black"
              aria-haspopup="true"
            >
              FAQ
            </Link>
          </div> */}
      <div className="flex list-none items-center justify-start z-30">
        <Link
          href="/contact"
          className="px-4 py-2 flex text-platinum-900 space-x-4  hover:bg-platinum-200  duration-300 ease-in-out hover:rounded hover:ring-1 hover:ring-black"
          aria-haspopup="true"
        >
          {t("link.information.contact")}
        </Link>
      </div>

      {/* <FinalNavbarRes /> */}

      <Button className="bg-crimson-500 text-black font-semibold text-sm hover:bg-crimson-600">
        {t("link.account")}{" "}
        <span className="text-platinum-950 pl-1 text-sm font-semibold">
          {t("link.soon")} ☄️
        </span>
      </Button>
    </>
  );
}

export default SecondPartOfHeader;

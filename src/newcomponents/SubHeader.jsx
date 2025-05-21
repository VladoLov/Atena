"use client";
import Link from "next/link";
import { useTranslation } from "react-i18next";

function SubHeader() {
  const { t } = useTranslation("common");
  return (
    <section className="w-full  mx-auto px-10 pt-12 pb-16">
      <div className="container mx-auto rounded-lg  px-0 mb-12">
        {/*   <h2 className="text-bold md:text-3xl lg:text-6xl mb-4 pb-8 text-center text-lightBlue-950 lg:text-platinum-900  lg:leading-10  lg:font-medium tracking-wide">
          {t("subheader.header")}
        </h2> */}

        <p className="text-base md:text-2xl lg:text-3xl text-platinum-900 lg:text-platinum-900  lg:leading-10  lg:font-medium tracking-wide pb-12">
          {t("subheader.subheader")}
          <span>
            {" "}
            <Link
              className="space-x-1 w-fit text-platinum-950 hover:underline underline-offset-4"
              href="/contact"
            >
              info@atenagenomics.com
            </Link>
          </span>
          <span> {t("subheader.conjunction")}</span>
          <span>
            {" "}
            <Link
              href="tel:+38763201361"
              className="bg-green-500 text-platinum-950 px-1 py-2 rounded hover:bg-green-600 hover:underline underline-offset-4"
            >
              +38763201361
            </Link>
          </span>
        </p>
      </div>
    </section>
  );
}

export default SubHeader;

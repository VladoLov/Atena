"use client";

import { useTranslation } from "react-i18next";

function HeaderInFaramer() {
  const { t } = useTranslation();
  return (
    <>
      <h1 className="text-4xl md:text-6xl font-bold text-lightBlue-950  drop-shadow-lg py-1 mb-7">
        {t("about.header")}
      </h1>
      <p className="text-base md:text-2xl lg:text-3xl text-platinum-900 lg:text-platinum-700  lg:leading-10  lg:font-medium tracking-wide">
        {t("about.subheader")}
        {/*    We
        envision a future where personalized medicine is the cornerstone of
        healthcare, providing timely and accurate genetic insights to improve
        patient outcomes and guide informed clinical decisions. Through reliable
        and customized NGS diagnostics, ATENA Genomics is creating a healthier,
        genomically-empowered Balkan region, advancing the standard of care for
        all. */}
      </p>
    </>
  );
}

export default HeaderInFaramer;

"use client";

import { useTranslation } from "react-i18next";

function MainHeader() {
  const { t } = useTranslation("common");
  return (
    <>
      <h1 className="slide-in-from-left md:px-10 text-start md:leading-relaxed lg:text-8xl text-4xl sm:text-6xl animate-in transition ease-in-out duration-700 font-bold text-lightBlue-950  drop-shadow-lg py-1 mb-7 !font-oswald">
        {t("header.first")}{" "}
        <span className="text-crimson-500 pr-1"> {t("header.second")}</span>
        {t("header.three")}
      </h1>
    </>
  );
}

export default MainHeader;

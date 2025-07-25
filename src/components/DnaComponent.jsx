"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export const DnaComponent = () => {
  const t = useTranslations("header");
  return (
    <section className="w-full container-2xl ">
      <div className="relative w-full h-dvh md:h-[100vh] clip-piere">
        {/* Background Image */}
        <div className="w-full h-full overflow-hidden absolute top-0 bg-cover">
          <Image
            src="/helix.webp"
            alt="dna genome"
            priority
            fill
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
              opacity: "0.4",
              background: "#001717",
            }}
          />
        </div>

        {/* Content Container */}
        {/* <div className="absolute inset-0 w-full flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 md:px-8 lg:pl-16 xl:pl-20 lg:pb-12 xl:pb-24"> */}
        <div className="absolute inset-0 w-full flex flex-col lg:flex-row items-center justify-center mx-auto container lg:pb-12 xl:pb-24">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-center text-center lg:items-start  lg:text-left">
            <h1 className="slide-in-from-left tracking-tight font-bold text-lightBlue-950 drop-shadow-lg animate-in transition ease-in-out duration-700 mb-6 lg:mb-8">
              {/* Mobile: 2xl (24px) */}
              <span className="block text-5xl   sm:hidden">
                {t("first")}{" "}
                <span className="text-crimson-500 pr-4">{t("second")}</span>{" "}
                {t("three")}
              </span>

              {/* Small: 3xl (30px) */}
              <span className="hidden sm:block md:hidden text-5xl ">
                {t("first")}{" "}
                <span className="text-crimson-500 ">{t("second")}</span>{" "}
                {t("three")}
              </span>

              {/* Medium: 5xl (48px) */}
              <span className="hidden md:block lg:hidden text-6xl ">
                {t("first")}{" "}
                <span className="text-crimson-500">{t("second")}</span>{" "}
                {t("three")}
              </span>

              {/* Large: 6xl (60px) */}
              <span className="hidden lg:block xl:hidden text-7xl font-bold ">
                {t("first")}{" "}
                <span className="text-crimson-500">{t("second")}</span>{" "}
                {t("three")}
              </span>

              {/* Extra Large: 8xl (96px) */}
              <span className="hidden xl:block text-8xl font-bold ">
                {t("first")}{" "}
                <span className="text-crimson-500">{t("second")}</span>{" "}
                {t("three")}
              </span>
            </h1>
          </div>

          {/* Logo Container */}
          <div className="w-full lg:w-1/2 flex items-center justify-center mt-8 lg:mt-0 animate-in slide-in-from-right duration-700 ease-in-out">
            {/* Mobile Logo - Smaller */}
            {/* <div className="block sm:hidden">
              <Image
                src="/sova/NewLogo.png"
                alt="Atena logotip"
                width={180}
                height={180}
                className="drop-shadow-lg"
              />
            </div> */}

            {/* Small/Medium Logo */}
            <div className="hidden sm:block lg:hidden">
              <Image
                src="/sova/NewLogo.png"
                alt="Atena logotip"
                width={220}
                height={220}
                priority
                className="drop-shadow-lg "
                style={{
                  objectFit: "contain",
                  width: "auto",
                  height: "auto",
                  maxWidth: "300px", // Control the maximum size
                }}
              />
            </div>

            {/* Large Logo */}
            <div className="hidden lg:block">
              <Image
                src="/sova/NewLogo.png"
                alt="Atena logotip"
                width={300}
                height={321}
                priority
                className="drop-shadow-lg "
                style={{
                  objectFit: "contain",
                  width: "auto",
                  height: "auto",
                  maxWidth: "300px",
                  maxHeight: "321px",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="absolute inset-0 bg-gradient-to-b from-white  z-0" /> */}
    </section>
  );
};

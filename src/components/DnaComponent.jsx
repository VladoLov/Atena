"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export const DnaComponent = () => {
  const t = useTranslations("");
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
        <div className="absolute inset-0 w-full flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
            <h1 className="slide-in-from-left text-oswald font-bold text-lightBlue-950 drop-shadow-lg animate-in transition ease-in-out duration-700 mb-6 lg:mb-8">
              {/* Mobile: 2xl (24px) */}
              <span className="block text-4xl leading-tight sm:hidden">
                {t("header.first")}{" "}
                <span className="text-crimson-500">{t("header.second")}</span>{" "}
                {t("header.three")}
              </span>

              {/* Small: 3xl (30px) */}
              <span className="hidden sm:block md:hidden text-5xl leading-tight">
                {t("header.first")}{" "}
                <span className="text-crimson-500">{t("header.second")}</span>{" "}
                {t("header.three")}
              </span>

              {/* Medium: 5xl (48px) */}
              <span className="hidden md:block lg:hidden text-6xl leading-tight">
                {t("header.first")}{" "}
                <span className="text-crimson-500">{t("header.second")}</span>{" "}
                {t("header.three")}
              </span>

              {/* Large: 6xl (60px) */}
              <span className="hidden lg:block xl:hidden text-7xl leading-tight">
                {t("header.first")}{" "}
                <span className="text-crimson-500">{t("header.second")}</span>{" "}
                {t("header.three")}
              </span>

              {/* Extra Large: 8xl (96px) */}
              <span className="hidden xl:block text-8xl leading-tight">
                {t("header.first")}{" "}
                <span className="text-crimson-500">{t("header.second")}</span>{" "}
                {t("header.three")}
              </span>
            </h1>
          </div>

          {/* Logo Container */}
          <div className="w-full lg:w-1/2 flex items-center justify-center mt-8 lg:mt-0 animate-in slide-in-from-right duration-700 ease-in-out">
            {/* Mobile Logo - Smaller */}
            <div className="block sm:hidden">
              <Image
                src="/sova/NewLogo.png"
                alt="Atena logotip"
                width={180}
                height={180}
                className="drop-shadow-lg"
              />
            </div>

            {/* Small/Medium Logo */}
            <div className="hidden sm:block lg:hidden">
              <Image
                src="/sova/NewLogo.png"
                alt="Atena logotip"
                width={220}
                height={220}
                className="drop-shadow-lg"
              />
            </div>

            {/* Large Logo */}
            <div className="hidden lg:block">
              <Image
                src="/sova/NewLogo.png"
                alt="Atena logotip"
                width={300}
                height={300}
                className="drop-shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

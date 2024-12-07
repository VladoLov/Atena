"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useTranslation } from "react-i18next";

function Info() {
  const { t } = useTranslation("common");
  return (
    <section className="container mx-auto py-48">
      <div className=" lg:grid grid-cols-1 lg:grid-cols-2 gap-8 pt-12 pb-24 lg:py-24 px-10 ">
        {/* Hidden on small screen because grid-col-start does'nt work*/}
        <div className="hidden  lg:flex flex-col justify-center items-start pt-24">
          <h2 className="font-bold flex items-start  text-xl lg:text-3xl text-start pb-8">
            {t("info.fHeader")}
          </h2>
          <p className="text-start pb-8 text-base lg:text-xl">
            {t("info.fText")}
          </p>
          <Button
            variant="link"
            className="text-base lg:text-xl mb-8 text-start  font-semibold"
          >
            {t("info.bText")}
          </Button>
        </div>

        {/* First Image */}
        <div className="hidden lg:flex items-center justify-center pb-8">
          <Image
            src="/blocks/consultation.png"
            alt="consultation"
            width={250}
            height={250}
          />
        </div>

        {/* Hidden on lg screen */}

        <div className="lg:hidden flex items-center justify-center pb-8">
          <div className="w-fit max-w-[250px]">
            {/*   <Image
              src="/blocks/consultation.png"
              alt="consultation"
              width={250}
              height={250}
              className="w-full h-auto"
              sizes="(max-width: 640px) 250px, (max-width: 768px) 250px, 250px"
            /> */}
            <Image
              src="/blocks/consultation.png"
              alt="consultation"
              width={250}
              height={250}
            />
          </div>
        </div>
        <div className="lg:hidden flex flex-col justify-center items-start pt-12 pb-16">
          <h2 className="font-bold text-xl lg:text-3xl text-start pb-8">
            {t("info.fHeader")}
          </h2>
          <p className="text-start pb-8 text-base lg:text-xl">
            {t("info.fText")}
          </p>
          <Button
            variant="link"
            className="text-base lg:text-xl mb-8 text-start font-semibold"
          >
            {t("info.bText")}
          </Button>
        </div>

        {/* First Image */}

        <div className="order-3 lg:order-3 flex items-center justify-center pb-8 lg:pb-0">
          <Image
            src="/blocks/presentation.png"
            alt="presentation"
            width={250}
            height={250}
          />
        </div>
        {/* Second Text */}
        <div className="order-4 lg:order-4 mx-auto max-w-6xl mb-16 pb-8">
          <h2 className="font-semibold lg:font-bold pb-8 pt-8 text-start text-xl lg:text-3xl">
            {t("info.sHeader")}
          </h2>
          <p className="pb-8 text-base lg:text-xl">{t("info.sText")}</p>
        </div>

        {/* Second Image */}
      </div>
    </section>
  );
}

export default Info;

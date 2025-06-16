import Link from "next/link";
import { useTranslations } from "next-intl";

function Tagline() {
  const t = useTranslations("subheader");
  return (
    <section className="w-full  mx-auto px-10 pt-12 pb-16">
      <div className="container mx-auto rounded-lg  px-0 mb-12">
        {/*   <h2 className="text-bold md:text-3xl lg:text-6xl mb-4 pb-8 text-center text-lightBlue-950 lg:text-platinum-900  lg:leading-10  lg:font-medium tracking-wide">
          {t("subheader.header")}
        </h2> */}

        <p className="text-semibold md:text-2xl lg:text-2xl text-platinum-950 lg:text-platinum-950  lg:leading-10  tracking-tight pb-12">
          {t("subheader")}
          <span>
            {" "}
            <Link
              className="space-x-1 w-fit text-platinum-950 hover:underline underline-offset-4"
              href="/contact"
            >
              info@atenagenomics.com
            </Link>
          </span>
        </p>
      </div>
    </section>
  );
}

export default Tagline;

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

function SecondPartOfHeader() {
  const t = useTranslations("link.information");
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null; // Or a placeholder if you need some layout
  }
  return (
    <>
      <div className="flex list-none items-center  justify-start z-30">
        <Link
          href="/about"
          className="px-4 py-2 flex  text-platinum-950 hover:bg-platinum-200  duration-300 ease-in-out hover:rounded hover:ring-1 hover:ring-black"
          aria-haspopup="true"
        >
          {t("about")}
        </Link>
      </div>

      <div className="flex list-none items-center justify-start z-30">
        <Link
          href="/contact"
          className="px-4 py-2 flex text-platinum-950 space-x-4  hover:bg-platinum-200  duration-300 ease-in-out hover:rounded hover:ring-1 hover:ring-black"
          aria-haspopup="true"
        >
          {t("contact")}
        </Link>
      </div>

      {/* <FinalNavbarRes /> */}

      {/* <Button className="bg-crimson-500 text-black font-semibold text-sm hover:bg-crimson-600">
        {t("link.account")}{" "}
        <span className="text-platinum-950 pl-1 text-sm font-semibold">
          {t("link.soon")} ☄️
        </span>
      </Button> */}
    </>
  );
}

export default SecondPartOfHeader;

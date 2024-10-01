import Link from "next/link";
import React from "react";

const DropdownButtons = () => {
  return (
    <div className="flex flex-row justify-center gap-10 items-center space-x-6 mt-16">
      <Link href="/test/onco-panel" passHref>
        <button className="bg-crimson-400 text-black px-4 py-2 rounded-lg shadow-md hover:bg-teal-700">
          OncoPanel
        </button>
      </Link>
      <Link href="/test/cancer-specific-gene-panel" passHref>
        <button className="bg-crimson-400 text-black px-4 py-2 rounded-lg shadow-md hover:bg-teal-700">
          Cancer-specific Gene Panel
        </button>
      </Link>
    </div>
  );
};

export default DropdownButtons;

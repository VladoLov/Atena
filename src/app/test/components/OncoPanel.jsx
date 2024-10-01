// pages/onco-panel.jsx

import Link from "next/link";

export default function OncoPanel() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-2xl font-bold mb-4">OncoPanel Testing</h1>
      <p className="mb-8">
        <span>
          <strong>The OncoPanel NGS test </strong>
        </span>
        offers a broad analysis of tumor genetics by sequencing hundreds of
        cancer-related genes. This test identifies mutations, gene fusions, and
        copy number alterations, providing a comprehensive view of the genetic
        landscape of a patient&apos;s cancer. By focusing on actionable genes,
        the OncoPanel helps inform personalized treatment plans, guiding the use
        of targeted therapies and immunotherapies. This powerful tool is
        particularly valuable in cases where conventional therapies are
        ineffective, offering clinicians insights into potential clinical trials
        or novel treatments based on the specific genetic profile of the tumor,
        ultimately optimizing patient care.
      </p>
      <Link href="/test/order" passHref>
        <button className="bg-crimson-600 text-white px-6 py-3 rounded-lg text-lg shadow-md hover:bg-crimson-700">
          Order Test Now
        </button>
      </Link>
    </div>
  );
}

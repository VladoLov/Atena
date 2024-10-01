// pages/cancer-specific-gene-panel.jsx

import Link from "next/link";

export default function CancerSpecificGenePanel() {
  return (
    <div className="p-8 text-center mx-auto max-w-screen-lg">
      <h1 className="text-2xl font-bold mb-4">
        Cancer-specific Gene Panel Testing
      </h1>
      <p className="mb-8">
        <span>
          <strong>Cancer-specific gene panel NGS testing </strong>
        </span>
        focuses on analyzing a predefined group of genes closely linked to a
        particular type of cancer, such as ovarian, colorectal, or breast
        cancer. This targeted approach identifies key mutations, fusions, and
        alterations that drive the progression of the specific cancer, offering
        vital insights for personalizing treatment plans. By zeroing in on
        cancer-relevant genes, the test delivers quicker, actionable results
        compared to broader panels, helping clinicians make more informed
        decisions on targeted therapies or clinical trials that are more likely
        to benefit the patient’s specific cancer profile. It’s a precise,
        cost-effective tool for focused cancer care.
      </p>
      <Link href="/test/order" passHref>
        <button className="bg-crimson-600 text-white px-6 py-3 rounded-lg text-lg shadow-md hover:bg-crimson-700">
          Order Test Now
        </button>
      </Link>
    </div>
  );
}

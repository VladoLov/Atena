"use client";
import Link from "next/link";
import { Button } from "../ui/button";

export default function DownalodPdf() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl mb-4">Download or View PDF</h1>

      <div className="mb-4">
        <Link
          href="/docs/Atena.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          <Button className="bg-gradient-to-tr from-crimson-400 to-crimson-500 hover:bg-gradient-to-tr hover:from-crimson-500 hover:to-crimson-600 text-black focus:ring-1 focus:ring-crimson-300">
            View PDF
          </Button>
        </Link>
      </div>

      {/*    <div>
        <Link
          href="/docs/Atena.pdf"
          target="_blank"
          download
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          <Button>Download PDF</Button>
        </Link>
      </div> */}
    </div>
  );
}

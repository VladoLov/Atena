import { Baby, Microscope, Dna, Pill } from "lucide-react";
import { CardCarousel } from "./CardCarousel";

const flipCardData2 = [
  {
    title: "Genetic Testing",
    description: "Comprehensive genetic analysis for personalized healthcare",
    subtitle: "Unlock Your Genetic Potential",
    href: "/genetic-testing",
    icon: <Baby className="icon-class" />, // Pass JSX here
  },
  {
    title: "Molecular Diagnostics",
    description: "Advanced molecular techniques for accurate disease diagnosis",
    subtitle: "Precision in Diagnosis",
    href: "/molecular-diagnostics",
    icon: <Microscope className="icon-class" />,
  },
  {
    title: "Pharmacogenomics",
    description: "Tailoring drug treatments based on genetic makeup",
    subtitle: "Optimizing Drug Efficacy",
    href: "/pharmacogenomics",
    icon: <Pill className="icon-class" />,
  },
  {
    title: "Genomic Profiling",
    description:
      "In-depth analysis of genetic variations for targeted therapies",
    subtitle: "Personalized Treatment Strategies",
    href: "/genomic-profiling",
    icon: <Dna className="icon-class" />,
  },
];

export default function ProcesCardCarousel() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold mb-8">Our Services</h1>
      <CardCarousel flipCardData={flipCardData2} />
    </main>
  );
}

import Image from "next/image";
import { Button } from "@/components/ui/button";
import FlipCardOncology from "@/components/component/FlipCardOncology";
import FlipCardOncology2 from "@/components/component/FlipCardOncology2";
import FlipCardOncology3 from "@/components/component/FlipCardOncology3";

const oncologyServices = [
  {
    name: "Tumor Profiling NGS",
    description:
      "NGS plays a vital role in sequencing tumor DNA. This process helps identify mutations, gene fusions, and other genetic changes that contribute to cancer growth. Tumor profiling allows doctors to create personalized treatment plans, a key part of precision oncology.",
    image: "/oncology/tumor.jpg?height=400&width=600",
  },
  {
    name: "Hematological Malignancies NGS",
    description:
      "Hematological Malignancies NGS is crucial in diagnosing and subclassifying blood cancers, such as leukemia, lymphoma, and myeloma. By identifying specific genetic mutations, doctors can provide more targeted treatment options for these diseases.",
    image: "/oncology/hematological-malignancies.jpg?height=400&width=600",
  },
  {
    name: "Liquid Biopsies NGS",
    description:
      "Liquid Biopsies NGS enables the detection of circulating tumor DNA (ctDNA) from blood samples, offering a minimally invasive way to monitor cancer progression. Liquid biopsies help track the disease and detect any residual cancer after treatment.",
    image: "/oncology/liquid-biopsies.png?height=1000&width=1400",
  },
  {
    name: "Hereditary Cancer Screening",
    description:
      "Hereditary Cancer Screening NGS is used to screen for inherited gene mutations, such as BRCA1 and BRCA2, which increase the risk of developing hereditary cancers. Early detection of these mutations allows for proactive cancer prevention and personalized monitoring.",
    image: "/oncology/hereditary-screening.png?height=1000&width=1400",
  },
  {
    name: "Cancer Drug Resistance Monitoring",
    description:
      "Cancer Drug Resistance Monitoring NGS helps identify genetic mutations, such as EGFR, KRAS, and BRAF, that cause cancer to become resistant to treatment. This knowledge allows doctors to adjust and optimize treatment plans, improving patient outcomes.",
    image: "/oncology/drug.png?height=1000&width=1400",
  },
];

export default function OncologyGrid() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-8">
        <div className="grid grid-cols-1">
          <h3 className="text-2xl font-semibold pb-4  px-2 sm:px-0 sm:text-center">
            Next-Generation Sequencing (NGS) in Oncology - Revolutionizing
            Cancer Treatment
          </h3>
          <p className="mb-4 lg:text-xl px-6 sm:none">
            NGS is transforming oncology by offering a deeper understanding of
            cancer at the genetic level. With NGS, specific mutations can be
            identified which drive cancer growth, allowing for targeted
            treatments that are potentially more effective and less invasive.
            Choosing NGS means giving patients the best chance for success with
            precision medicine that’s tailored to their unique genetic profile.
            Empower your oncology practice with cutting-edge technology that
            delivers real, life-changing results for your patients.
          </p>
        </div>
        {/* First row - full width */}
        <div className="grid grid-cols-1">
          <GridItem {...oncologyServices[0]} />
        </div>
        <div className="grid grid-cols-1">
          <GridItem {...oncologyServices[1]} />
        </div>
        <div className="grid grid-cols-1">
          <GridItem {...oncologyServices[2]} />
        </div>
        <div className="grid grid-cols-1 mt-16">
          <GridItem {...oncologyServices[3]} />
        </div>
        <div className="grid grid-cols-1">
          <GridItem {...oncologyServices[4]} />
        </div>
        {/* Second row - 60% / 40% split */}
        {/* <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-3">
            <GridItem {...oncologyServices[1]} />
          </div>
          <div className="md:col-span-2">
            <GridItem {...oncologyServices[2]} />
          </div>
        </div>
        {// Third row - 40% / 60% split }
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <GridItem {...oncologyServices[3]} />
          </div>
          <div className="md:col-span-3">
            <GridItem {...oncologyServices[4]} />
          </div> 
        </div>*/}
      </div>
    </div>
  );
}

function GridItem({ name, description, image }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-64">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">{name}</h2>
        <p className="text-platinum-800 mb-4">{description}</p>
        <Button>Learn More</Button>
      </div>
    </div>
  );
}

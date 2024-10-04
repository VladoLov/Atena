import { Dna, Tangent } from "lucide-react";
import Image from "next/image";

function ServicesComponent() {
  return (
    <div className="services-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
      <div className="service-card bg-gray-50 border border-gray-200 rounded-lg p-6 text-center shadow-md transition-transform transform hover:-translate-y-2">
        <div className="service-icon w-16 mx-auto mb-4">
          <Dna />
        </div>
        <h3 className="service-title text-xl font-bold text-gray-800 mb-2">
          Whole Genome Sequencing
        </h3>
        <p className="service-description text-gray-600 mb-4">
          Get a complete analysis of your DNA for personalized health insights.
        </p>
        <a
          href="/services/whole-genome"
          className="cta-button inline-block bg-orange-500 text-white py-2 px-6 rounded-full transition-colors hover:bg-orange-600"
        >
          Learn More
        </a>
      </div>

      <div className="service-card bg-gray-50 border border-gray-200 rounded-lg p-6 text-center shadow-md transition-transform transform hover:-translate-y-2">
        <div className="service-icon w-16 mx-auto mb-4">
          <Tangent className="text-crimson-500" />
        </div>

        <h3 className="service-title text-xl font-bold text-gray-800 mb-2">
          DNA Health Analysis
        </h3>
        <p className="service-description text-gray-600 mb-4">
          Understand your genetic predispositions for better health planning.
        </p>
        <a
          href="/services/dna-health"
          className="cta-button inline-block bg-orange-500 text-white py-2 px-6 rounded-full transition-colors hover:bg-orange-600"
        >
          Order Now
        </a>
      </div>
    </div>
  );
}

export default ServicesComponent;

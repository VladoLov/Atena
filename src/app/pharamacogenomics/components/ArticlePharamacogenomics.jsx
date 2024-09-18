import Image from "next/image";
import Link from "next/link";

export default function ArticlePharamacogenomics() {
  return (
    <div className="flex flex-col min-h-screen">
      <Image
        src="/Pharmacogenomics.jpeg"
        alt="Pharmacogenomics illustration"
        width={1920}
        height={1080}
        className="w-full max-w-screen object-cover h-[45vh]"
      />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6 text-center">
          Pharmacogenomics: Tailoring Medicine to Your Genes
        </h1>
        <div className="grid md:grid-cols-2 gap-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">
              What is Pharmacogenomics?
            </h2>
            <p>
              Pharmacogenomics is the study of how a person&apos;s genes affect
              their response to drugs. This field combines pharmacology (the
              science of drugs) and genomics (the study of genes and their
              functions) to develop effective, safe medications and doses
              tailored to a person&apos;s genetic makeup.
            </p>
            <h3 className="text-xl font-semibold">Key Benefits:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Improved drug efficacy</li>
              <li>Reduced adverse drug reactions</li>
              <li>Optimized drug dosages</li>
              <li>Personalized treatment plans</li>
            </ul>
          </section>
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">How Does It Work?</h2>
            <p>
              Pharmacogenomic tests analyze specific genes to predict how
              you&apos;ll respond to certain medications. These tests can help
              healthcare providers:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Choose the most effective medication for you</li>
              <li>Avoid medications that might cause side effects</li>
              <li>Adjust dosages based on your genetic profile</li>
              <li>Reduce trial-and-error in prescribing</li>
            </ul>
            <div className="mt-6">
              <Link
                href="#learn-more"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
              >
                Learn More
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

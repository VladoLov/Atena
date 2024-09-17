import Image from "next/image";
import { Calendar, Clock, CheckCircle, AlertTriangle } from "lucide-react";

export default function ArticlePrenatalScreening() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Image
        src="/placeholder.svg"
        alt="Prenatal Screening Illustration"
        width={1920}
        height={1080}
        className="w-full max-w-screen object-cover h-[50vh]"
      />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-indigo-800">
          Understanding Prenatal Screening
        </h1>
        <div className="grid gap-8 md:grid-cols-3">
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-700">
              What is Prenatal Screening?
            </h2>
            <p className="text-gray-700">
              Prenatal screening involves tests during pregnancy to assess the
              risk of certain genetic disorders or birth defects in the
              developing fetus. These tests help parents and healthcare
              providers make informed decisions about further diagnostic testing
              and pregnancy management.
            </p>
          </section>
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-700">
              Types of Screening
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <CheckCircle className="text-green-500 mr-2" size={20} />
                Non-invasive prenatal testing (NIPT)
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-green-500 mr-2" size={20} />
                First trimester combined screening
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-green-500 mr-2" size={20} />
                Second trimester maternal serum screening
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-green-500 mr-2" size={20} />
                Ultrasound scans
              </li>
            </ul>
          </section>
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-700">
              When to Get Screened
            </h2>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-center">
                <Calendar className="text-indigo-600 mr-2" size={20} />
                <span>First trimester: 11-13 weeks</span>
              </div>
              <div className="flex items-center">
                <Calendar className="text-indigo-600 mr-2" size={20} />
                <span>Second trimester: 15-20 weeks</span>
              </div>
              <div className="flex items-center">
                <Clock className="text-indigo-600 mr-2" size={20} />
                <span>NIPT can be done as early as 10 weeks</span>
              </div>
            </div>
          </section>
        </div>
        <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-700">
            Important Considerations
          </h2>
          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            <div className="flex items-start">
              <AlertTriangle
                className="text-yellow-500 mr-2 mt-1 flex-shrink-0"
                size={20}
              />
              <p>
                Screening tests provide risk assessment, not definitive
                diagnoses.
              </p>
            </div>
            <div className="flex items-start">
              <AlertTriangle
                className="text-yellow-500 mr-2 mt-1 flex-shrink-0"
                size={20}
              />
              <p>False positives and false negatives can occur.</p>
            </div>
            <div className="flex items-start">
              <AlertTriangle
                className="text-yellow-500 mr-2 mt-1 flex-shrink-0"
                size={20}
              />
              <p>
                Consult with a healthcare provider to understand your options
                and results.
              </p>
            </div>
            <div className="flex items-start">
              <AlertTriangle
                className="text-yellow-500 mr-2 mt-1 flex-shrink-0"
                size={20}
              />
              <p>
                Emotional support is available if screening results cause
                anxiety.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

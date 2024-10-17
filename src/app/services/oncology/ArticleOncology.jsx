import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Microscope, Dna, Pill, Users } from "lucide-react";

export default function ArticleOncology() {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative">
            <Image
              src="/oncology-jo-mcnamara-.jpg"
              alt="Oncology research"
              width={600}
              height={400}
              className="rounded-lg shadow-lg "
            />
          </div>
          <div className="mt-10 lg:mt-0">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Advancing Cancer Care
            </h2>
            <p className="mt-3 max-w-prose mx-auto text-xl text-gray-500 sm:mt-5">
              Our oncology department is dedicated to pioneering research,
              innovative treatments, and compassionate care for cancer patients.
            </p>
            <div className="mt-10">
              <dl className="space-y-10">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-white text-crimson-500">
                      <Microscope className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      Cutting-edge Research
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      Our team conducts groundbreaking research to develop new
                      cancer treatments and therapies.
                    </dd>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-white text-crimson-500">
                      <Dna className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      Personalized Treatment
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      We use advanced genomic testing to tailor treatments to
                      each patient&apos;s unique cancer profile.
                    </dd>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-white text-crimson-500">
                      <Pill className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      Innovative Therapies
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      We offer the latest in immunotherapy, targeted therapy,
                      and precision medicine approaches.
                    </dd>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-white text-crimson-500">
                      <Users className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      Multidisciplinary Care
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      Our team of specialists work together to provide
                      comprehensive care for all types of cancer.
                    </dd>
                  </div>
                </div>
              </dl>
            </div>
            <div className="mt-10">
              <Button className="w-full sm:w-auto">
                Learn More About Our Oncology Services
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import { Button } from "./ui/button";

function Blog() {
  return (
    <section className="bg-platinum-50">
      <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
          <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
            <h2 className="text-3xl font-bold sm:text-4xl text-crimson-500">
              Benefits of working with ATENA
            </h2>

            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vero
              aliquid sint distinctio iure ipsum cupiditate? Quis, odit
              assumenda? Deleniti quasi inventore, libero reiciendis minima
              aliquid tempora. Obcaecati, autem.
            </p>

            <Link
              href="/services"
              className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              <Button size="lg" className="bg-crimson-500 text-black">
                Go to services
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-2">
            <a
              className="block rounded-xl border border-crimson-200 p-4 shadow-sm hover:border-crimson-300 hover:ring-1 hover:ring-crimson-200 focus:outline-none focus:ring"
              href="#"
            >
              <span className="inline-block rounded-lg bg-gray-50 p-3">
                <svg
                  className="size-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  ></path>
                </svg>
              </span>

              <h2 className="mt-2 font-bold">People</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                Our passionate team consists of scientists and technicians with
                diverse scientific backgrounds. You can consider them as an
                extension of your own team with a commitment to provide you with
                excellent, robust, and fast NGS services with matched
                bioinformatics solutions.
              </p>
            </a>

            <a
              className="block rounded-xl border border-crimson-200 p-4 shadow-sm hover:border-crimson-300 hover:ring-1 hover:ring-crimson-200 focus:outline-none focus:ring"
              href="#"
            >
              <span className="inline-block rounded-lg bg-gray-50 p-3">
                <svg
                  className="size-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  ></path>
                </svg>
              </span>

              <h2 className="mt-2 font-bold">Experience</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                With a track record of nearly two decades in genetic services
                and strong support and shareholding of large Academic Medical
                Centers, we are a partner you can rely on. Whether it involves
                batched or single-sample processing, prospective or
                retrospective clinical cohorts, archive samples, biosafety
                testing material, plant, or microbiome samples, we will deliver.
              </p>
            </a>

            <a
              className="block rounded-xl border border-crimson-200 p-4 shadow-sm hover:border-crimson-300 hover:ring-1 hover:ring-crimson-200 focus:outline-none focus:ring"
              href="#"
            >
              <span className="inline-block rounded-lg bg-gray-50 p-3">
                <svg
                  className="size-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  ></path>
                </svg>
              </span>

              <h2 className="mt-2 font-bold">Innovation</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                Our well-established contacts with technology providers, our
                collaborations with academic researchers, and out participation
                in numerous scientific consortia spark our innovation to grant
                you access to the most advanced sequencing methodologies and
                solutions.
              </p>
            </a>

            <a
              className="block rounded-xl border border-crimson-200 p-4 shadow-sm hover:border-crimson-300 hover:ring-1 hover:ring-crimson-200 focus:outline-none focus:ring"
              href="#"
            >
              <span className="inline-block rounded-lg bg-gray-50 p-3">
                <svg
                  className="size-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  ></path>
                </svg>
              </span>

              <h2 className="mt-2 font-bold">Quality</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                We deem quality of a paramount importance, and we fully embrace
                it by operating under ISO/IEC 17025 and ISO 15189 accreditation.
                Your personal data and privacy are secured via data management
                system that guarantees the protection in compliance with
                (inter)national directives.
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;

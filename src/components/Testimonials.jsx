import Image from "next/image";

function Testimonials() {
  return (
    <section className="bg-#4a4a4a w-full  flex justify-center items-center">
      <div className=" max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="flex justify-center pb-10">
          <blockquote className="w-full lg:w-auto rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
            <div className="flex items-center justify-center gap-4">
              <Image
                alt="Image of Marija"
                src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                className="w-14 h-14 rounded-full object-cover"
                width={50}
                height={50}
                priority={true}
              />
              <div className="flex gap-5">
                <p className="mt-0.5 text-lg font-medium text-gray-900">
                  Marija
                </p>
                <div className="flex justify-center gap-0.5 text-green-500">
                  <button className="bg-crimson-500 text-black font-semibold px-4 py-2 rounded text-sm">
                    Contact us
                  </button>
                </div>
              </div>
            </div>
            <p className="mt-4 text-gray-700">
              Our Technical Support Specialist is here to get your project
              started.
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

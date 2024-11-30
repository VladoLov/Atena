import { Button } from "@/components/ui/button";
import Image from "next/image";

function Info() {
  return (
    <section className="container mx-auto py-48">
      <div className=" lg:grid grid-cols-1 lg:grid-cols-2 gap-8 pt-12 pb-24 lg:py-24 px-10 ">
        {/* Hidden on small screen because grid-col-start does'nt work*/}
        <div className="hidden  lg:flex flex-col justify-center items-center pt-24">
          <h3 className="font-bold text-xl lg:text-3xl text-center pb-8">
            Consulting services
          </h3>
          <p className="text-start pb-8 text-base lg:text-xl">
            We offer expert consulting in molecular biotechnology, helping
            organizations and individuals navigate available advanced
            technologies. Our team provides tailored guidance to select the
            right genetic testing solutions, ensuring personalized insights that
            improve decision-making in healthcare, research, and diagnostics.
            Whether implementing advanced genetic testing for clinical
            applications or optimizing processes, our services offer strategic
            advice, technical expertise, and innovative solutions to drive
            better outcomes in your field.
          </p>
          <Button
            variant="link"
            className="text-base lg:text-xl mb-8 font-semibold"
          >
            CLICK HERE TO CONNECT
          </Button>
        </div>

        {/* First Image */}
        <div className="hidden lg:flex items-center justify-center pb-8">
          <Image
            src="/blocks/consultation.png"
            alt="consultation"
            width={250}
            height={250}
          />
        </div>

        {/* Hidden on lg screen */}
        <div className="lg:hidden flex items-center justify-center pb-8">
          <Image
            src="/blocks/consultation.png"
            alt="consultation"
            width={250}
            height={250}
          />
        </div>
        <div className="lg:hidden flex flex-col justify-center items-center pt-12 pb-16">
          <h3 className="font-bold text-xl lg:text-3xl text-center ">
            Consulting services
          </h3>
          <p className="text-start pb-8 text-base lg:text-xl">
            We offer expert consulting in molecular biotechnology, helping
            organizations and individuals navigate available advanced
            technologies. Our team provides tailored guidance to select the
            right genetic testing solutions, ensuring personalized insights that
            improve decision-making in healthcare, research, and diagnostics.
            Whether implementing advanced genetic testing for clinical
            applications or optimizing processes, our services offer strategic
            advice, technical expertise, and innovative solutions to drive
            better outcomes in your field.
          </p>
          <Button
            variant="link"
            className="text-base lg:text-xl mb-8 font-semibold"
          >
            CLICK HERE TO CONNECT
          </Button>
        </div>

        {/* First Image */}

        <div className="order-3 lg:order-3 flex items-center justify-center pb-8 lg:pb-0">
          <Image
            src="/blocks/presentation.png"
            alt="presentation"
            width={250}
            height={250}
          />
        </div>
        {/* Second Text */}
        <div className="order-4 lg:order-4 mx-auto max-w-6xl mb-16 pb-8">
          <h3 className="font-semibold lg:font-bold pb-8 pt-8 text-center text-xl lg:text-3xl">
            Join ATENA Genomics for Clinical NGS Testing Seminars!
          </h3>
          <p className="pb-8 text-base lg:text-xl">
            ATENA Genomics is hosting a series of expert-led seminars on
            precision genetic testing. These sessions will explore the latest
            advancements in genetic testing technologies for personalized
            medicine.
          </p>
          <p className="text-base lg:text-xl">
            Don&apos;t miss this opportunity to learn more on what genomics has
            to offer. Stay tuned for dates and registration!
          </p>
        </div>

        {/* Second Image */}
      </div>
    </section>
  );
}

export default Info;

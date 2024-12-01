import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function Info() {
  return (
    <section className="container mx-auto  scroll py-48">
      <div className="grid lg:grid-rows-2 gap-16 lg:grid-cols-2 py-24 px-10">
        <div className="col-start-2">
          <div className="flex flex-col justify-center items-center pt-24">
            <h3 className="font-bold text-xl  lg:text-3xl text-center  pb-8">
              Consulting services
            </h3>
            <p className="text-start pb-8 text-base lg:text-xl">
              We offer expert consulting in molecular biotechnology, helping
              organizations and individuals navigate available advanced
              technologies. Our team provides tailored guidance to select the
              right genetic testing solutions, ensuring personalized insights
              that improve decision-making in healthcare, research, and
              diagnostics. Whether implementing advanced genetic testing for
              clinical applications or optimizing processes, our services offer
              strategic advice, technical expertise, and innovative solutions to
              drive better outcomes in your field.
            </p>
            <Button
              variant="link"
              className="text-base lg:text-xl mb-8 font-semibold"
            >
              CLICK HERE TO CONNECT
            </Button>
          </div>
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
        <div className="mx-auto max-w-6xl">
          <h3 className="font-semibold lg:font-bold pb-8 pt-8 text-center text-xl lg:text-3xl">
            Join ATENA Genomics for Clinical NGS Testing Seminars!
          </h3>
          <p className=" pb-8 text-base lg:text-xl">
            ATENA Genomics is hosting a series of expert-led seminars on
            precision genetic testing. These sessions will explore the latest
            advancements in genetic testing technologies for personalized
            medicine.
          </p>
          <p className="text-base  lg:text-xl">
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

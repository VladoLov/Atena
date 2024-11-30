import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function Info() {
  return (
    <section className="container mx-auto  scroll py-48">
      <div className="grid lg:grid-rows-2 gap-16 lg:grid-cols-2 py-24 px-10">
        <div className="col-start-2">
          <div className="flex flex-col justify-center items-center pt-24 text-lightBlue-950">
            <h3 className="font-bold text-xl  lg:text-3xl text-center  pb-8">
              Consulting services
            </h3>
            <p className="text-start pb-8 text-platinum-900 lg:text-xl">
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
              className="text-base lg:text-xl mb-8 font-semibold text-primary"
              asChild
            >
              <Link href="#" className="text-lightBlue-200 ">
                CLICK HERE TO CONNECT
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>

        <div className="col-start-1">
          <div className="col-start-1 lg:col-start-2 flex items-center justify-center ">
            <Image
              src="/blocks/consultation.png"
              alt="consultation"
              width={250}
              height={250}
            />
          </div>
        </div>
        <div className="flex items-center justify-center ">
          <Image
            src="/blocks/presentation.png"
            alt="consultation"
            width={250}
            height={250}
          />
        </div>
        <div className="mx-auto max-w-6xl">
          <h3 className="font-semibold lg:font-bold pb-8 pt-8 text-center text-xl lg:text-3xl text-lightBlue-950">
            Join ATENA Genomics for Clinical NGS Testing Seminars!
          </h3>
          <p className=" pb-8 text-base lg:text-xl text-platinum-900">
            ATENA Genomics is hosting a series of expert-led seminars on
            precision genetic testing. These sessions will explore the latest
            advancements in genetic testing technologies for personalized
            medicine.
          </p>
          <p className="text-base  lg:text-xl text-platinum-900">
            Don&apos;t miss this opportunity to learn more on what genomics has
            to offer. Stay tuned for dates and registration!
          </p>
        </div>
      </div>
    </section>
  );
}

export default Info;

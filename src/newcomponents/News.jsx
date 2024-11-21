import Image from "next/image";

function News() {
  return (
    <section className="container mx-auto pb-24 ">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-bold pb-4 pt-6 px-4 text-center text-xl">
          Join ATENA Genomics for Clinical NGS Testing Seminars!
        </h2>
        <p className="px-4 pb-4">
          ATENA Genomics is hosting a series of expert-led seminars on Clinical
          Next-Generation Sequencing (NGS). Tailored for healthcare
          professionals, these sessions will explore the latest advancements in
          NGS applications for personalized medicine, oncology, and infectious
          disease diagnostics.
        </p>
        <p className="px-4">
          Don’t miss this opportunity to learn more on what genomics has to
          offer. Stay tuned for dates and registration!
        </p>
      </div>
    </section>
  );
}

export default News;

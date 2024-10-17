export const services = [
  {
    title: "Oncology",
    href: "/services/oncology",
    items: [
      {
        title: "Onco Gene Panel",
        href: "/services/onco-panel",
      },
      {
        title: "Cancer-Specific Gene Panel",
        href: "cancer-specific-gene",
      },
    ],
  },
  {
    title: "Genopathy",
    href: "/services/genopathy",
    items: [
      {
        title: "Neurological and Neuromuscular Disorders",
        href: "/services/neurological-disorders",
        description: `
          NGS (Next-Generation Sequencing) testing, using neurological disorder panels, whole exome sequencing (WES), or whole genome sequencing (WGS), is essential for diagnosing neurological and neuromuscular disorders. Panel testing enables the analysis of multiple genes at once, leading to quicker and more accurate diagnoses. WES and WGS provide broader and more comprehensive insights by detecting rare or novel mutations. These analyses offer an advanced understanding of neurological disorders for earlier interventions and personalized treatments.
        `,
      },
      {
        title: "Developmental and Intellectual Disabilities",
        href: "/services/developmental-disabilities",
        description: `
          For diagnosis of developmental and intellectual disabilities, different NGS testing options are available: panel testing, whole exome sequencing (WES), or whole genome sequencing (WGS). Panel testing allows for faster and more accurate diagnoses by analyzing multiple genes simultaneously. WES analyzes all protein-coding genes, providing broader coverage for detecting both common and rare mutations. WGS goes further, sequencing the entire genome to uncover non-coding regions and rare variations missed by other methods. This precise approach enables earlier interventions and personalized treatments.
        `,
      },
      {
        title: "Metabolic and Mitochondrial Disorders",
        href: "/services/metabolic-mitochondrial",
        description: `
          NGS (Next-Generation Sequencing) testing, including panel testing, whole exome sequencing (WES), and whole genome sequencing (WGS), is critical for diagnosing metabolic and mitochondrial disorders. Panel testing focuses on a specific set of genes, offering fast and targeted results for known mutations. WES analyzes all protein-coding genes, providing broader coverage for detecting both common and rare mutations. WGS goes further, sequencing the entire genome to uncover non-coding regions and rare variations missed by other methods.
        `,
      },
      {
        title: "Immunological Disorders",
        href: "/services/immunological-disorders",
        description: `
          NGS (Next-Generation Sequencing) testing, using panel testing, whole exome sequencing (WES), and whole genome sequencing (WGS), is key for diagnosing immunological disorders. Panel testing focuses on specific immune-related genes, providing quick, targeted results for known mutations. WES examines all protein-coding genes, offering a broader view for detecting both common and rare variants. WGS sequences the entire genome, capturing non-coding regions and rare mutations that other methods might miss.
        `,
      },
      {
        title: "(Rare) Genetic Disorders",
        href: "/services/rare-genetic-disorders",
        description: `
          NGS (Next-Generation Sequencing) testing, using panel testing, whole exome sequencing (WES), and whole genome sequencing (WGS), is key for diagnosing a plethora of (rare) genetic disorders. Panel testing focuses on specific gene sets, providing quick, targeted results for known mutations. WES examines all protein-coding genes, offering a broader view for detecting both common and rare variants. WGS sequences the entire genome, capturing non-coding regions and rare mutations that other methods might miss.
        `,
      },
      {
        title: "Other",
        href: "/services/other-genetic",
        description: `
          NGS (Next-Generation Sequencing) testing using whole exome sequencing (WES) or whole genome sequencing (WGS) may offer insights into other genetic disorders. Please contact us for available testing options.
        `,
      },
    ],
  },
  {
    title: "Cardiopathy",
    href: "/services/cardiopathy",
  },
  {
    title: "Perinatal",
    href: "/services/perinatal",
  },
  {
    title: "Pharmacogenetics",
    href: "/services/pharmacogenetics",
  },
  {
    title: "Pathogenomics",
    href: "/services/pathogenomics",
  },
  {
    title: "Hereditary Screening",
    href: "/services/hereditary-screening",
  },
];

export const firstHeader = [
  {
    title: "About",
    href: "/about",
    items: [
      {
        title: "Team",
      },
      {
        title: "Career and vacancies",
      },
      {
        title: "Funded projects",
      },
    ],
  },
  {
    title: "FAQ",
    href: "/faq",
    items: [
      { title: "Company solution" },
      { title: "Sample handover" },
      { title: "Testing time" },
      { title: "Testing report" },
      { title: "Quality and policy" },
    ],
  },
  {
    title: "Resources ",
    href: "/resources",
    items: [
      { title: "Sample submission", href: "/resources/sample-submission" },
      {
        title: "Policies",
        href: "/resources/policies",
        items: [
          {
            title: "Terms and conditions",
            href: "/resources/policies/terms-and-conditions",
          },
          {
            title: "Privacy statement",
            href: "/resources/policies/privacy-statement",
          },
          {
            title: "Environmental policy",
            href: "/resources/policies/environmental-policy",
          },
          {
            title: "Sample policy",
            href: "/resources/policies/sample-policy",
          },
          {
            title: "Complaint policy ",
            href: "/resources/policies/complaint-policy ",
          },
        ],
      },
    ],
  },
  { title: "Contact", href: "/contact" },
];

export const teamMembers = [
  {
    id: "1",
    name: "Marija Vujadinović",
    role: "Physicist",
    bio: "Discovered the laws of motion and universal gravitation.",
    imageUrl: "/profile.svg",
  },
  {
    id: "2",
    name: "Irena Lovrić Zovko",
    role: "Primatologist",
    bio: "Renowned for her groundbreaking work with chimpanzees.",
    imageUrl: "/profile.svg",
  },
  {
    id: "3",
    name: "Jasmina Demirović Mustafić",
    role: "Chemist and Physicist",
    bio: "Pioneering researcher of radioactivity, discovered polonium and radium.",
    imageUrl: "/profile.svg",
  },
];

export const flipCardData = [
  {
    image: "/blocks/Oncology.png",
    title: "Oncology",
    description: "Identifies genetic mutations and driving tumor growth.",
    subtitle: "Oncology NGS",
    href: "/oncology",
  },
  {
    image: "/blocks/Genome-testing-2.jpeg",
    title: "Genopathy",
    description: "Involves genetic disorders affecting the body's functions.",
    subtitle: "Genopathy ",
    href: "/oncology",
  },
  {
    image: "/blocks/cardiolog-3.jpeg",
    title: "Cardiopathy",
    description: "Refers to diseases affecting the heart's function.",
    subtitle: "Cardiopathy",
    href: "/oncology",
  },
  {
    image: "/blocks/2400-pregnant-woman.jpg",
    title: "Perinatal",
    description: "Refers to the time around birth, including pregnancy.",
    subtitle: "Perinatal",
    href: "/oncology",
  },
  {
    image: "/blocks/Pharmacogenomics.jpeg",
    title: "Pharmacogenetics",
    description: "Studies how genes affect individual drug responses.",
    subtitle: "Pharmacogenetics",
    href: "/oncology",
  },
  {
    image: "/blocks/genome-research-lab-tests.jpg",
    title: "Pathogenomics",
    description: "Studies the genetic makeup of disease-causing organisms.",
    subtitle: "Pathogenomics",
    href: "/oncology",
  },
  {
    image: "/blocks/2400-dna-molecule-spiral-structure-model.jpg",
    title: "Hereditary screening",
    description: "Identifies genetic conditions passed through family lines.",
    subtitle: "Hereditary screening",
    href: "/services/hereditary-screening",
  },
  // Add as many cards as needed
];

export const faqData = [
  {
    question: "Which services do you offer?",
    answer: (
      <>
        ATENA Genomics offers Next Generation Sequencing (NGS) services
        including DNA extraction from different source samples (see our{" "}
        <strong>Sample Submission Guide</strong>), sample QC, NGS sequencing,
        data QC, and reporting. Please see our services or reach out to our team
        for further details at{" "}
        <a
          href="mailto:info@atenagenomics.com"
          className="text-blue-500 underline"
        >
          info@atenagenomics.com
        </a>
        .
      </>
    ),
  },
  {
    question: "What competencies and accreditation can you offer?",
    answer:
      "ATENA Genomics collaborates with ISO15189 and ISO/IEC17025 accredited laboratories for NGS diagnostic activities.",
  },
  {
    question: "What is the price of your services?",
    answer:
      "Each project is unique, and prices depend on the type of sequencing technology, turnaround time, sample type, number of samples, and the scope of the project. We work with multiple accredited laboratories to ensure accurate results, fast turnaround time, and competitive pricing.",
  },
  {
    question: "Are the Terms and Conditions available online?",
    answer: (
      <>
        Yes. Please read our <strong>Terms and Conditions</strong>.
      </>
    ),
  },
  {
    question: "Do I need a quote for the services?",
    answer: (
      <>
        Yes. Each sequencing project is customized to meet your specific
        requirements. Our team will work closely with you to thoroughly discuss
        your project details and provide a personalized quote. To request a
        quote, use the <strong>Sample Submission form</strong> or reach out to
        the team for any questions you may have at{" "}
        <a
          href="mailto:info@atenagenomics.com"
          className="text-blue-500 underline"
        >
          info@atenagenomics.com
        </a>
        .
      </>
    ),
  },
  {
    question: "How should I prepare my samples?",
    answer: (
      <>
        The <strong>Sample Submission form</strong> is mandatory for each
        project please consult our <strong>Sample Submission Guide</strong> or
        reach out to the team for any questions you may have at{" "}
        <a
          href="mailto:info@atenagenomics.com"
          className="text-blue-500 underline"
        >
          info@atenagenomics.com
        </a>
        .
      </>
    ),
  },
  {
    question: "What type of samples do you accept?",
    answer: (
      <>
        Comprehensive NGS services are available for non-hazardous human and
        microorganism samples. Please consult our{" "}
        <strong>Sample Submission Guide</strong> or reach out to our team for
        further details at{" "}
        <a
          href="mailto:info@atenagenomics.com"
          className="text-blue-500 underline"
        >
          info@atenagenomics.com
        </a>{" "}
        to ensure your submitted sample meets the requirements.
      </>
    ),
  },
  {
    question: "What is the turnaround time for your NGS services?",
    answer: (
      <>
        Timelines for the delivery of the project can vary. Our services include
        sample QC, library preparation, hybridization, sequencing, data QC and
        reporting. Each project is unique, and we always strive to deliver the
        expected results within the agreed timeline. Please contact our team via{" "}
        <a
          href="mailto:info@atenagenomics.com"
          className="text-blue-500 underline"
        >
          info@atenagenomics.com
        </a>{" "}
        to learn more about project specific timelines.
      </>
    ),
  },
  {
    question: "What are the factors that can impact the quality of my data?",
    answer: (
      <>
        There are several factors which can impact the quality of your NGS data
        these include the quality of the samples and the extracted genomic
        material, shipping and storage conditions, sequencing depth, read length
        and number of replicates. Our team may advice you on the optimal
        conditions to enable data and reports with the highest quality please
        reach out to our team at{" "}
        <a
          href="mailto:info@atenagenomics.com"
          className="text-blue-500 underline"
        >
          info@atenagenomics.com
        </a>
        .
      </>
    ),
  },
  {
    question: "What happens when sequencing of my samples fails?",
    answer: (
      <>
        Several factors can lead to NGS sequencing failure, such as sample
        quality issues, shipment or storage problems, instrument malfunctions,
        and technical errors. To reduce the risk of these failures, only samples
        that meet the strict criteria outlined in our{" "}
        <strong>Sample Submission Guide</strong> are accepted. We ensure
        reliable delivery by partnering with professional logistics providers
        and utilizing a traceable cold chain for safe shipment. DNA extraction
        and NGS analysis are conducted in an accredited laboratory, with quality
        control (QC) checks performed after every critical stage of the project.
      </>
    ),
  },
  {
    question: "How does ATENA Genomics deliver the data?",
    answer: (
      <>
        The requestor will be able to generate a <strong>My Account</strong> at
        ATENA Genomics with personal login and password when submitting a sample
        request. In <strong>My Account</strong> access to your sequencing data
        report including the quality control (QC) checks will be available upon
        completion. If you are interested to download the raw data (FASTQ files)
        and analyzed, assembled data (VCF files) or require an alternative data
        delivery option please reach out to our team at{" "}
        <a
          href="mailto:info@atenagenomics.com"
          className="text-blue-500 underline"
        >
          info@atenagenomics.com
        </a>
        .
      </>
    ),
  },
  {
    question: "Is there a way to monitor the progress of my project?",
    answer: (
      <>
        The team is working to enable this functionality in the future which
        will be available via <strong>My Account</strong>. Here the progress of
        the sample sequencing will be able to be tracked in time.
      </>
    ),
  },
  {
    question: "How long do you store my data?",
    answer: (
      <>
        Your NGS data is stored for as long as it is necessary for the purposes
        for which it was collected free of charge. Once the data is no longer
        needed, it will be either deleted or anonymized. Requests for longer
        storage can be submitted to our team at{" "}
        <a
          href="mailto:info@atenagenomics.com"
          className="text-blue-500 underline"
        >
          info@atenagenomics.com
        </a>{" "}
        at additional costs.
      </>
    ),
  },
  {
    question: "How long do you store the samples?",
    answer: (
      <>
        When submitting a sample testing request via the{" "}
        <strong>Sample Submission form</strong>, you can choose whether you
        would like to have your samples returned. If not, we will securely store
        them for at least one year after your project is completed. Requests for
        sample return shipments can be sent to our team at{" "}
        <a
          href="mailto:info@atenagenomics.com"
          className="text-blue-500 underline"
        >
          info@atenagenomics.com
        </a>
        .
      </>
    ),
  },
];

export const polices = [
  {
    privacyStatement: (
      <>
        <p>
          We are committed to ensuring the privacy and security of genetic and
          patient data in compliance with the EU General Data Protection
          Regulation (GDPR) and our internal Data Security Policy. Our data
          handling processes adhere to the highest standards of confidentiality
          and security, ensuring that all personal data, including genetic
          information, is processed lawfully, transparently, and with the utmost
          care.
        </p>
        <br />
        <p>
          Our Data Security Policy is integrated into the company&apos;s
          comprehensive quality management system, ensuring continuous
          compliance with relevant legal and regulatory requirements. This
          policy is aligned with the International standards ISO/IEC 17025 and
          ISO 15189, which set the global benchmarks for laboratory testing and
          medical laboratory quality. These certifications demonstrate our
          commitment to maintaining stringent data protection practices,
          ensuring the accuracy, integrity, and confidentiality of genetic and
          patient information.
        </p>
        <br />
        <p>
          We ensure that all genetic data is securely stored, with restricted
          access only to authorized personnel. Additionally, data is encrypted
          both at rest and during transmission to prevent unauthorized access.
          Any third parties involved in data processing are carefully vetted and
          required to comply with GDPR and our strict data security protocols.
        </p>
        <br />
        <p>
          Our processes are designed to protect your privacy while delivering
          precise and reliable results, safeguarding your trust in our services.
          If you have any questions or require more information about how we
          handle your data, please contact our data protection officer.
        </p>
        <br />
        <p>
          We are committed to ensuring the privacy and security of genetic and
          patient data, fully complying with the EU General Data Protection
          Regulation (GDPR) and our internal Data Security Policy. Our secure
          data handling practices ensure that personal and genetic information
          is processed lawfully, transparently, and confidentially. Our Data
          Security Policy is embedded in our quality management system, aligning
          with international standards such as ISO/IEC 17025 and ISO 15189.
          These certifications guarantee that we meet the highest standards for
          laboratory testing and medical laboratory quality, ensuring the
          protection, integrity, and confidentiality of all genetic and patient
          data.
        </p>
        <br />
        <p>
          We use advanced encryption to safeguard genetic data both during
          storage and transmission, with access restricted to authorized
          personnel. Additionally, any third-party data processors comply with
          GDPR regulations and our stringent security protocols. By maintaining
          these high standards, we deliver reliable, secure genetic testing
          services, protecting your privacy and ensuring compliance with
          international data protection laws. For more information on how we
          handle your genetic and patient data, please contact our data
          protection officer.
        </p>
      </>
    ),
  },
];

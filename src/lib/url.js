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
    href: "/oncology",
  },
  // Add as many cards as needed
];

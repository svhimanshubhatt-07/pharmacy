import { AdminResearchDoc, AdminFundedSeminar, ResearchSubcomponentKey, ResearchSubcomponentMeta } from "../types";

export const RESEARCH_SUBCOMPONENTS: Record<ResearchSubcomponentKey, ResearchSubcomponentMeta> = {
  publications: {
    key: "publications",
    slug: "publications",
    title: "Publications",
    shortTitle: "Publications",
    description: "Manage annual Scopus, Web of Science & UGC peer-reviewed publication list PDFs.",
    categoryPlaceholder: "e.g. Scopus Indexed, Web of Science, UGC-CARE",
    sessionLabel: "Publication Year / Session",
    sessionPlaceholder: "e.g. 2026, 2025",
    defaultCategory: "Journal Papers"
  },
  patents: {
    key: "patents",
    slug: "patents",
    title: "Patents",
    shortTitle: "Patents",
    description: "Manage granted, published & filed pharmaceutical patents register documents.",
    categoryPlaceholder: "e.g. Granted Patent, Published Patent, Design Patent",
    sessionLabel: "Registration / Filing Year",
    sessionPlaceholder: "e.g. 2025, 2024",
    defaultCategory: "Patents Register"
  },
  "sif-facilities": {
    key: "sif-facilities",
    slug: "sif-facilities",
    title: "SIF Facilities",
    shortTitle: "SIF Facilities",
    description: "Manage Sophisticated Instrumentation Facility (SIF) rate charts and testing guidelines.",
    categoryPlaceholder: "e.g. Testing Rates, Equipment SOP, User Guidelines",
    sessionLabel: "Revision Year / Session",
    sessionPlaceholder: "e.g. 2025, 2025-26",
    defaultCategory: "Testing Rates"
  },
  consultancy: {
    key: "consultancy",
    slug: "consultancy",
    title: "Consultancy & Sponsored Research",
    shortTitle: "Consultancy & Grants",
    description: "Manage industry consultancy projects, advisory agreements and sponsored research reports.",
    categoryPlaceholder: "e.g. Sponsored Research, Industrial Consultancy",
    sessionLabel: "Academic Session",
    sessionPlaceholder: "e.g. 2024-25, 2023-24",
    defaultCategory: "Sponsored Research"
  },
  "funded-projects": {
    key: "funded-projects",
    slug: "funded-projects",
    title: "Govt. Funded Projects Received",
    shortTitle: "Funded Projects",
    description: "Manage national and state research grants, DST, AICTE and BIRAC funded project dossiers.",
    categoryPlaceholder: "e.g. National Grants, State Grants, DST-SERB",
    sessionLabel: "Funding Period / Session",
    sessionPlaceholder: "e.g. 2024-25, 2023-24",
    defaultCategory: "National Grants"
  },
  "funded-seminars": {
    key: "funded-seminars",
    slug: "funded-seminars",
    title: "Govt. Funded Seminars",
    shortTitle: "Funded Seminars",
    description: "Manage proceedings, schedules, and reports of government-funded national seminars.",
    categoryPlaceholder: "e.g. DST-SERB Seminar, AICTE Conference, National Workshop",
    sessionLabel: "Event Date / Year",
    sessionPlaceholder: "e.g. June 2022, 2023-24",
    defaultCategory: "DST-SERB Seminar"
  },
  moocs: {
    key: "moocs",
    slug: "moocs",
    title: "Online MOOCs Lectures",
    shortTitle: "Online MOOCs",
    description: "Manage e-learning syllabus, video lecture repositories, and MOOCs course materials.",
    categoryPlaceholder: "e.g. Video Modules, Swayam NPTEL, E-Content Repository",
    sessionLabel: "Academic Term / Session",
    sessionPlaceholder: "e.g. 2024-25, Odd Semester 2025",
    defaultCategory: "E-Learning Lectures"
  },
  magazines: {
    key: "magazines",
    slug: "magazines",
    title: "Institute Magazine",
    shortTitle: "Institute Magazines",
    description: "Manage annual Pharmainnovation student & faculty editorial magazine volumes.",
    categoryPlaceholder: "e.g. Annual Edition, Special Thematic Issue",
    sessionLabel: "Volume / Issue Year",
    sessionPlaceholder: "e.g. Vol-9 Issue 1 (2025), Vol-8 Issue 2",
    defaultCategory: "Institute Magazine"
  },
  newsletters: {
    key: "newsletters",
    slug: "newsletters",
    title: "Institute Newsletter",
    shortTitle: "Institute Newsletters",
    description: "Manage bi-annual Pharma Chronicles research newsletters and institutional circulars.",
    categoryPlaceholder: "e.g. Bi-Annual Newsletter, Research Chronicle",
    sessionLabel: "Edition / Issue Period",
    sessionPlaceholder: "e.g. June 2025, January 2025",
    defaultCategory: "Pharma Chronicles"
  }
};

export const initialResearchDocs: AdminResearchDoc[] = [
  // 1. Publications
  {
    id: 1,
    subcomponent: "publications",
    title: "2026 Publication Compendium",
    yearOrSession: "2026",
    category: "Journal Papers",
    pdfUrl: "/pdf/publications/2026 Publication.pdf",
    description: "Official compilation of peer-reviewed journal papers and indexed conference papers for 2026.",
    status: "Visible"
  },
  {
    id: 2,
    subcomponent: "publications",
    title: "2025 Publication List Volume 2",
    yearOrSession: "2025",
    category: "Journal Papers",
    pdfUrl: "/pdf/publications/2025 Publication-2.pdf",
    description: "Second volume of annual publication compendium covering Scopus, SCI, and Web of Science papers.",
    status: "Visible"
  },
  {
    id: 3,
    subcomponent: "publications",
    title: "2024 Annual Publication Dossier",
    yearOrSession: "2024",
    category: "Journal Papers",
    pdfUrl: "/pdf/publications/2024 PUBLICATION.pdf",
    description: "Peer-reviewed research articles and pharmaceutical science papers published in calendar year 2024.",
    status: "Visible"
  },
  {
    id: 4,
    subcomponent: "publications",
    title: "2023 Annual Publications List",
    yearOrSession: "2023",
    category: "Journal Papers",
    pdfUrl: "/pdf/publications/2023-PUBLICATION-LIST.pdf",
    status: "Visible"
  },
  {
    id: 5,
    subcomponent: "publications",
    title: "2022 Annual Publications List",
    yearOrSession: "2022",
    category: "Journal Papers",
    pdfUrl: "/pdf/publications/2022-PUBLICATION-LIST.pdf",
    status: "Visible"
  },
  {
    id: 6,
    subcomponent: "publications",
    title: "2021 Annual Publications List",
    yearOrSession: "2021",
    category: "Journal Papers",
    pdfUrl: "/pdf/publications/2021-PUBLICATION-LIST.pdf",
    status: "Visible"
  },
  {
    id: 7,
    subcomponent: "publications",
    title: "2020 Annual Publications List",
    yearOrSession: "2020",
    category: "Journal Papers",
    pdfUrl: "/pdf/publications/2020 PUBLICATION.pdf",
    status: "Visible"
  },
  {
    id: 8,
    subcomponent: "publications",
    title: "2019 Annual Publications List",
    yearOrSession: "2019",
    category: "Journal Papers",
    pdfUrl: "/pdf/publications/2019.pdf",
    status: "Visible"
  },
  {
    id: 9,
    subcomponent: "publications",
    title: "2018 Annual Publications List",
    yearOrSession: "2018",
    category: "Journal Papers",
    pdfUrl: "/pdf/publications/2018.pdf",
    status: "Visible"
  },
  {
    id: 10,
    subcomponent: "publications",
    title: "2017 Annual Publications List",
    yearOrSession: "2017",
    category: "Journal Papers",
    pdfUrl: "/pdf/publications/2017.pdf",
    status: "Visible"
  },
  {
    id: 11,
    subcomponent: "publications",
    title: "2016 Annual Publications List",
    yearOrSession: "2016",
    category: "Journal Papers",
    pdfUrl: "/pdf/publications/2016.pdf",
    status: "Visible"
  },

  // 2. Patents
  {
    id: 12,
    subcomponent: "patents",
    title: "PATENTS",
    yearOrSession: "2025",
    category: "Patents Register",
    pdfUrl: "/pdf/PATENTS.pdf",
    status: "Visible"
  },

  // 3. SIF Facilities
  {
    id: 14,
    subcomponent: "sif-facilities",
    title: "SIF Testing Charges & Rates",
    yearOrSession: "2025",
    category: "Testing Rates",
    pdfUrl: "/pdf/sif/SIF Charges 2025.pdf",
    status: "Visible"
  },
  {
    id: 15,
    subcomponent: "sif-facilities",
    title: "SIF Facilities & User Guidelines",
    yearOrSession: "2025",
    category: "Facility Guidelines",
    pdfUrl: "/pdf/sif/SIF Facilities.pdf",
    status: "Visible"
  },

  // 4. Consultancy & Sponsored Research
  {
    id: 16,
    subcomponent: "consultancy",
    title: "CONSULTANCY AND SPONSORED RESEARCH",
    yearOrSession: "2024-25",
    category: "Sponsored Research",
    pdfUrl: "/pdf/research/CONSULTANCY-AND-SPONSORED-RESEARCH.pdf",
    status: "Visible"
  },

  // 5. Govt. Funded Projects Received
  {
    id: 18,
    subcomponent: "funded-projects",
    title: "GOVT FUNDED PROJECTS RECEIVED",
    yearOrSession: "2024-25",
    category: "National Grants",
    pdfUrl: "/pdf/research/GOVT-FUNDED-PROJECTS-RECEIVED.pdf",
    status: "Visible"
  },

  // 6. Govt. Funded Seminars
  {
    id: 20,
    subcomponent: "funded-seminars",
    title: "DST-SERB 3-Days National Seminar Proceedings",
    yearOrSession: "June 2022",
    category: "DST-SERB Seminar",
    pdfUrl: "/pdf/research/GOVT-FUNDED-PROJECTS-RECEIVED.pdf",
    status: "Visible"
  },
  {
    id: 21,
    subcomponent: "funded-seminars",
    title: "AICTE Sponsored National Seminar Report",
    yearOrSession: "2023-24",
    category: "AICTE Sponsored",
    pdfUrl: "/pdf/research/new/govt-funded-project-received.pdf",
    status: "Visible"
  },

  // 7. Online MOOCs Lectures
  {
    id: 22,
    subcomponent: "moocs",
    title: "Moocs Lectures",
    yearOrSession: "2024-25",
    category: "E-Learning Lectures",
    pdfUrl: "/pdf/research/new/MOOCs-LECTURES.pdf",
    status: "Visible"
  },

  // 8. Institute Magazine
  {
    id: 23,
    subcomponent: "magazines",
    title: "Pharmainnovation Vol-9 Issue 1",
    yearOrSession: "2025",
    category: "Institute Magazine",
    pdfUrl: "/pdf/pharma-innovation/Pharmainnovation Volume 9 Issue 1.pdf",
    description: "Volume 9, Issue 1 of the official annual technical magazine containing student scientific articles and faculty reviews.",
    status: "Visible"
  },
  {
    id: 24,
    subcomponent: "magazines",
    title: "Pharmainnovation Vol-8 Issue 2",
    yearOrSession: "2024",
    category: "Institute Magazine",
    pdfUrl: "/pdf/pharma-innovation/Pharmainnovation Volume 8 Issue 2.pdf",
    status: "Visible"
  },
  {
    id: 25,
    subcomponent: "magazines",
    title: "Pharmainnovation Vol-8 Issue 1",
    yearOrSession: "2024",
    category: "Institute Magazine",
    pdfUrl: "/pdf/pharma-innovation/Pharmainnovation-VOL-8-Issue-1.pdf",
    status: "Visible"
  },
  {
    id: 26,
    subcomponent: "magazines",
    title: "Pharmainnovation Vol-7 Issue 2",
    yearOrSession: "2023",
    category: "Institute Magazine",
    pdfUrl: "/pdf/pharma-innovation/Pharmainnovation-vol-7-issue-2.pdf",
    status: "Visible"
  },
  {
    id: 27,
    subcomponent: "magazines",
    title: "Pharmainnovation Vol-7 Issue 1",
    yearOrSession: "2023",
    category: "Institute Magazine",
    pdfUrl: "/pdf/pharma-innovation/Pharmainnovation-vol-7-issue-1.pdf",
    status: "Visible"
  },
  {
    id: 28,
    subcomponent: "magazines",
    title: "Pharmainnovation Vol-6 Issue 2",
    yearOrSession: "2022",
    category: "Institute Magazine",
    pdfUrl: "/pdf/pharma-innovation/Pharmainnovation-vol-6-issue-2.pdf",
    status: "Visible"
  },
  {
    id: 29,
    subcomponent: "magazines",
    title: "Pharmainnovation Vol-6 Issue 1",
    yearOrSession: "2022",
    category: "Institute Magazine",
    pdfUrl: "/pdf/pharma-innovation/Pharmainnovation-Vol-6-issue-1.pdf",
    status: "Visible"
  },

  // 9. Institute Newsletter
  {
    id: 30,
    subcomponent: "newsletters",
    title: "Pharma Chronicles June 2025",
    yearOrSession: "June 2025",
    category: "Pharma Chronicles",
    pdfUrl: "/pdf/newsletter/Pharma-chronicles-June-2025.pdf",
    description: "Mid-year newsletter documenting campus scientific happenings, research achievements, grants and student placements.",
    status: "Visible"
  },
  {
    id: 31,
    subcomponent: "newsletters",
    title: "Pharma Chronicles January 2025",
    yearOrSession: "Jan 2025",
    category: "Pharma Chronicles",
    pdfUrl: "/pdf/newsletter/Pharma-chronicles-jan-2025.pdf",
    status: "Visible"
  },
  {
    id: 32,
    subcomponent: "newsletters",
    title: "Pharma Chronicles June 2024",
    yearOrSession: "June 2024",
    category: "Pharma Chronicles",
    pdfUrl: "/pdf/newsletter/Pharma-Chronicle-June-2024.pdf",
    status: "Visible"
  },
  {
    id: 33,
    subcomponent: "newsletters",
    title: "Pharma Chronicles January 2024",
    yearOrSession: "Jan 2024",
    category: "Pharma Chronicles",
    pdfUrl: "/pdf/newsletter/Pharma-Chronicles-January-2024.pdf",
    status: "Visible"
  },
  {
    id: 34,
    subcomponent: "newsletters",
    title: "Pharma Chronicles June 2023",
    yearOrSession: "June 2023",
    category: "Pharma Chronicles",
    pdfUrl: "/pdf/newsletter/Pharma-Chronicles-June-2023.pdf",
    status: "Visible"
  },
  {
    id: 35,
    subcomponent: "newsletters",
    title: "Pharma Chronicles January 2023",
    yearOrSession: "Jan 2023",
    category: "Pharma Chronicles",
    pdfUrl: "/pdf/newsletter/Pharma-Chronicles-January-2023.pdf",
    status: "Visible"
  },
  {
    id: 36,
    subcomponent: "newsletters",
    title: "Pharma Chronicles June 2022",
    yearOrSession: "June 2022",
    category: "Pharma Chronicles",
    pdfUrl: "/pdf/newsletter/Pharma-Chronicles-June-2022.pdf",
    status: "Visible"
  }
];

export const initialFundedSeminars: AdminFundedSeminar[] = [
  {
    id: 1,
    title: "Seminar Day 1 (Inaugural & Technical Sessions)",
    dayOrSession: "Seminar Day 1",
    description: "Inaugural ceremony, expert keynote lectures, and Technical Sessions on novel drug delivery and digital healthcare.",
    photos: Array.from({ length: 17 }, (_, i) => `/images/seminar/seminar-first/${i + 1}.jpg`),
    status: "Visible"
  },
  {
    id: 2,
    title: "Seminar Day 2 (E-Posters & Keynote Addresses)",
    dayOrSession: "Seminar Day 2",
    description: "E-poster presentations, scientific deliberations, technical addresses, and research review sessions.",
    photos: Array.from({ length: 11 }, (_, i) => `/images/seminar/seminar-second/${i + 1}.jpg`),
    status: "Visible"
  },
  {
    id: 3,
    title: "Seminar Day 3 (Valedictory & Award Ceremony)",
    dayOrSession: "Seminar Day 3",
    description: "Valedictory programme, felicitation of speakers, student and faculty research award ceremony, and concluding session.",
    photos: Array.from({ length: 34 }, (_, i) => `/images/seminar/seminar-third/${i + 1}.jpg`),
    status: "Visible"
  }
];

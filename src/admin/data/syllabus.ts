import { AdminSyllabusDoc, SyllabusCourseKey, SyllabusCourseMeta } from "../types";

export const SYLLABUS_COURSES: Record<SyllabusCourseKey, SyllabusCourseMeta> = {
  "b-pharm": {
    key: "b-pharm",
    slug: "b-pharm",
    name: "Bachelor of Pharmacy (B.Pharm)",
    shortTitle: "B.Pharm",
    duration: "4 Years (8 Semesters)",
    subtitle: "AKTU & PCI Approved 4-Year Credit Scheme",
    description: "Access Dr. A.P.J. Abdul Kalam Technical University (AKTU) and PCI approved 8-semester curriculum credit structures.",
    councilLabel: "Regulatory Council / Body",
    schemePlaceholder: "e.g. AKTU & PCI Approved 4-Year Scheme"
  },
  "d-pharm": {
    key: "d-pharm",
    slug: "d-pharm",
    name: "Diploma in Pharmacy (D.Pharm)",
    shortTitle: "D.Pharm",
    duration: "2 Years (Annual Pattern)",
    subtitle: "PCI Education Regulations (ER-2020) & Board of Technical Education Curriculum",
    description: "Access PCI Education Regulations (ER-2020) and Board of Technical Education curriculum.",
    councilLabel: "Regulatory Council / Body",
    schemePlaceholder: "e.g. PCI ER-2020 Regulations, BTE UP Scheme"
  },
  "m-pharm": {
    key: "m-pharm",
    slug: "m-pharm",
    name: "Master of Pharmacy (M.Pharm)",
    shortTitle: "M.Pharm",
    duration: "2 Years (4 Semesters)",
    subtitle: "AKTU & PCI Approved Postgraduate Specialization Curricula",
    description: "Access Dr. A.P.J. Abdul Kalam Technical University (AKTU) and PCI approved postgraduate specialization curricula.",
    councilLabel: "Specialization / Council",
    schemePlaceholder: "e.g. Pharmaceutics Specialization, Pharmacology Specialization"
  }
};

export const initialSyllabusDocs: AdminSyllabusDoc[] = [
  // B.Pharm Syllabus
  {
    id: 1,
    course: "b-pharm",
    title: "Bachelor of Pharmacy I, II, III & IV Year syllabus",
    regulation: "AKTU & PCI Approved 4-Year Scheme",
    pdfUrl: "/pdf/bachelor-of-pharmacy-I-II-III-IV-year-syllabus.pdf",
    status: "Visible"
  },

  // D.Pharm Syllabi
  {
    id: 2,
    course: "d-pharm",
    title: "D.Pharm New Syllabus (PCI ER 2020)",
    regulation: "PCI ER-2020 Regulations",
    pdfUrl: "/pdf/DPHARM-NEW-SYLLABUS.pdf",
    status: "Visible"
  },
  {
    id: 3,
    course: "d-pharm",
    title: "D.Pharm Old Syllabus",
    regulation: "PCI Previous Regulations",
    pdfUrl: "/pdf/DPHARM-OLD-SYYLABUS.pdf",
    status: "Visible"
  },
  {
    id: 4,
    course: "d-pharm",
    title: "DPharm 1st Year : NEW SYLLABUS",
    regulation: "Pharmacy Council of India (PCI)",
    pdfUrl: "https://www.pci.nic.in/pdf/14-55_ER_20%20_syllabus_23092021.pdf",
    status: "Visible"
  },
  {
    id: 5,
    course: "d-pharm",
    title: "DPharm 2nd Year : NEW SYLLABUS",
    regulation: "Board of Technical Education UP (BTE)",
    pdfUrl: "https://bteup.ac.in/Syllabus/ANNUAL/214.pdf",
    status: "Visible"
  },

  // M.Pharm Syllabi
  {
    id: 6,
    course: "m-pharm",
    title: "M.Pharm (Pharmaceutics) Syllabus",
    regulation: "Pharmaceutics Specialization",
    pdfUrl: "/pdf/pharmaceutics-syllabus.pdf",
    status: "Visible"
  },
  {
    id: 7,
    course: "m-pharm",
    title: "M.Pharm (Pharmacology) Syllabus",
    regulation: "Pharmacology Specialization",
    pdfUrl: "/pdf/pharmacology-syllabus.pdf",
    status: "Visible"
  },
  {
    id: 8,
    course: "m-pharm",
    title: "M.Pharm (Pharmaceutical Chemistry) Syllabus",
    regulation: "Pharmaceutical Chemistry Specialization",
    pdfUrl: "/pdf/pharmaceutical-chemistry-syllabus.pdf",
    status: "Visible"
  },
  {
    id: 9,
    course: "m-pharm",
    title: "Pharmaceutical Chemistry (Proposed) Syllabus",
    regulation: "Curriculum Regulations",
    pdfUrl: "/pdf/pharmaceutical-chemistry-syllabus.pdf",
    status: "Visible"
  }
];

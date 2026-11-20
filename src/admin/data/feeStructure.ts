import { AdminFeeStructureDoc, FeeStructureCourseKey, FeeStructureCourseMeta } from "../types";

export const FEE_STRUCTURE_COURSES: Record<FeeStructureCourseKey, FeeStructureCourseMeta> = {
  "b-pharm": {
    key: "b-pharm",
    slug: "b-pharm",
    name: "Bachelor of Pharmacy (B.Pharm)",
    shortTitle: "B.Pharm",
    subtitle: "Official AFRC Approved Annual Fee Matrix",
    description: "Manage B.Pharm approved tuition fee matrices, AFRC statutory approvals, and official fee schedule PDFs.",
    disclaimer: "Tuition Fee is subject to revision by State Fee Regulatory Committee (AFRC), Government of Uttar Pradesh.",
    categoryPlaceholder: "Official AFRC Approved Document"
  },
  "d-pharm": {
    key: "d-pharm",
    slug: "d-pharm",
    name: "Diploma in Pharmacy (D.Pharm)",
    shortTitle: "D.Pharm",
    subtitle: "Official AFRC Approved Annual Fee Matrix",
    description: "Manage D.Pharm diploma fee schedules, AFRC notifications, and annual fee PDFs.",
    disclaimer: "Tuition Fee is subject to revision by State Fee Regulatory Committee (AFRC), Government of Uttar Pradesh.",
    categoryPlaceholder: "Official AFRC Approved Document"
  },
  "m-pharm": {
    key: "m-pharm",
    slug: "m-pharm",
    name: "Master of Pharmacy (M.Pharm)",
    shortTitle: "M.Pharm",
    subtitle: "Official AFRC Approved Annual Fee Matrix",
    description: "Manage M.Pharm postgraduate fee structures across Pharmaceutics, Pharmacology, and Pharmaceutical Chemistry.",
    disclaimer: "Tuition Fee is subject to revision by State Fee Regulatory Committee (AFRC), Government of Uttar Pradesh.",
    categoryPlaceholder: "Official AFRC Approved Document"
  }
};

export const initialFeeStructureDocs: AdminFeeStructureDoc[] = [
  // B.Pharm Fee Structure
  {
    id: 1,
    course: "b-pharm",
    title: "B.Pharm Fee Structure 2025-26",
    category: "Official AFRC Approved Document",
    pdfUrl: "/pdf/fees-2025/B._Pharm_Fee_Structure_2025.pdf",
    status: "Visible"
  },

  // D.Pharm Fee Structure
  {
    id: 2,
    course: "d-pharm",
    title: "D.Pharm Fee Structure 2025-26",
    category: "Official AFRC Approved Document",
    pdfUrl: "/pdf/fees-2025/D_Pharm_Fee_Structure_2025.pdf",
    status: "Visible"
  },

  // M.Pharm Fee Structure
  {
    id: 3,
    course: "m-pharm",
    title: "M.Pharm Fee Structure 2025-26",
    category: "Official AFRC Approved Document",
    pdfUrl: "/pdf/fees-2025/M._Pharm_Fee_Structure_2025.pdf",
    status: "Visible"
  }
];

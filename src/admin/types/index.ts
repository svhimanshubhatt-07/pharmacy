export type ItemStatus = "Active" | "Inactive" | "Visible" | "Hidden";

export const isItemActive = (status?: ItemStatus | string): boolean => {
  return status === "Active" || status === "Visible";
};

export const getStatusDisplay = (status?: ItemStatus | string): "Active" | "Inactive" => {
  return isItemActive(status) ? "Active" : "Inactive";
};

export const toggleStatusValue = (current?: ItemStatus | string): "Active" | "Inactive" => {
  return isItemActive(current) ? "Inactive" : "Active";
};

export interface AdminItem {
  id: number;
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  status: ItemStatus;
  publication?: string;
  createdAt?: string;
}

export type EventItem = AdminItem;
export type PressReleaseItem = AdminItem;

export type AdminSection =
  | "dashboard"
  | "events"
  | "press-releases"
  | "home"
  | "about"
  | "infrastructure"
  | "approvals";

export interface ActivityLog {
  id: string;
  type: string;
  action: "created" | "updated" | "status_changed" | "deleted";
  title: string;
  timestamp: string;
  details?: string;
}

export interface AdminStats {
  totalEvents: number;
  totalPressReleases: number;
  totalHiddenItems: number;
  visibleEvents: number;
  hiddenEvents: number;
  visiblePressReleases: number;
  hiddenPressReleases: number;
}

// 1. Home - Hero Banner
export interface HeroBannerItem {
  id: number;
  imageUrl: string;
  mobileImageUrl?: string;
  status: ItemStatus;
  heading?: string;
  subheading?: string;
  badge?: string;
  ctaText?: string;
  ctaLink?: string;
}

// 2. Home - Rankings
export interface RankingItem {
  id: number;
  title: string;
  certificateImage: string;
  status: ItemStatus;
  authority?: string;
  year?: string;
  description?: string;
}

// 2b. Home - Government Recognitions
export interface RecognitionItem {
  id: number;
  title: string;
  imageUrl: string;
  status: ItemStatus;
  createdAt?: string;
}

// 3. About - Faculty & Facilities (Full CRUD)
export interface FacultyItem {
  id: number;
  name: string;
  designation: string;
  qualification: string;
  specialization?: string;
  academicExperience?: string;
  experience?: string;
  researchExperience?: string;
  researchInterest?: string;
  status: ItemStatus;
  // Optional legacy fields for mock data compatibility
  department?: string;
  email?: string;
  googleScholar?: string;
  imageUrl?: string;
}

// 4. About - Approvals & Affiliations
export interface ApprovalAffiliationItem {
  id: number;
  bodyName: string;
  code: string;
  scope: string;
  validity: string;
  pdfUrl?: string;
  status: ItemStatus;
}

// 5. About - Authorities & Council (PDF Documents Control)
export type CouncilType = "Members of Advisory Board" | "Governing Body";

export interface AuthorityCouncilItem {
  id: number;
  title: string;
  councilType: CouncilType;
  session: string;
  pdfUrl: string;
  status: ItemStatus;
}

// 6. Infrastructure Module
export interface InfrastructureHubItem {
  id?: string;
  title: string;
  image: string;
}

export interface AdminInfrastructureModule {
  id: string; // e.g. "classrooms", "library"
  slug: string;
  name?: string; // Component Name
  title: string; // Heading
  subtitle: string; // Subheading
  description: string;
  features?: string[];
  imageUrl: string; // Main banner image
  images?: string[]; // Gallery / additional component images
  status: ItemStatus;

  // Custom Hubs / Key Points Section
  sectionHeading?: string; // e.g. "CENTRES OF EXCELLENCE & RESEARCH HUBS"
  sectionSubheading?: string; // e.g. "Shaping learners into achievers through cutting-edge facilities."
  hubItems?: InfrastructureHubItem[]; // Array of key points and images
}

// 7. All Approvals Document Item
export interface ApprovalDocItem {
  id: number;
  session: string; // e.g. "2025-26", "2024-25"
  title: string;
  body: string; // e.g. "PCI", "NBA", "CCSEA"
  pdfUrl: string;
  status: ItemStatus;
}

// 8. Gallery Photos Module
export interface AdminGalleryItem {
  id: number;
  image: string;
  status: ItemStatus;
}

// 9. Blog Articles Module
export interface AdminBlogItem {
  id: number;
  heading: string;
  category: string;
  image: string;
  mobileImage?: string;
  description: string;
  date: string;
  status: ItemStatus;
}

// 10. Research & Development (R&D) Module
export type ResearchSubcomponentKey =
  | "publications"
  | "patents"
  | "sif-facilities"
  | "consultancy"
  | "funded-projects"
  | "funded-seminars"
  | "moocs"
  | "magazines"
  | "newsletters";

export interface ResearchSubcomponentMeta {
  key: ResearchSubcomponentKey;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  categoryPlaceholder: string;
  sessionLabel: string;
  sessionPlaceholder: string;
  defaultCategory: string;
}

export interface AdminResearchDoc {
  id: number;
  subcomponent: ResearchSubcomponentKey;
  title: string;
  yearOrSession: string;
  category: string;
  pdfUrl: string;
  description?: string;
  status: ItemStatus;
  createdAt?: string;
}

export interface AdminFundedSeminar {
  id: number;
  title: string;
  dayOrSession: string;
  description?: string;
  photos: string[];
  status: ItemStatus;
  createdAt?: string;
}

// 11. Syllabus Module (B.Pharm, D.Pharm, M.Pharm Course Syllabi)
export type SyllabusCourseKey = "b-pharm" | "d-pharm" | "m-pharm";

export interface SyllabusCourseMeta {
  key: SyllabusCourseKey;
  slug: string;
  name: string;
  shortTitle: string;
  duration: string;
  subtitle: string;
  description: string;
  councilLabel: string;
  schemePlaceholder: string;
}

export interface AdminSyllabusDoc {
  id: number;
  course: SyllabusCourseKey;
  title: string;
  regulation: string;
  pdfUrl: string;
  yearOrSemester?: string;
  description?: string;
  status: ItemStatus;
  createdAt?: string;
}

// 12. Fee Structure Module (B.Pharm, D.Pharm, M.Pharm Fee Structure PDFs)
export type FeeStructureCourseKey = "b-pharm" | "d-pharm" | "m-pharm";

export interface FeeStructureCourseMeta {
  key: FeeStructureCourseKey;
  slug: string;
  name: string;
  shortTitle: string;
  subtitle: string;
  description: string;
  disclaimer: string;
  categoryPlaceholder: string;
}

export interface AdminFeeStructureDoc {
  id: number;
  course: FeeStructureCourseKey;
  title: string;
  category: string;
  pdfUrl: string;
  academicYear?: string;
  remarks?: string;
  payOnlineUrl?: string;
  status: ItemStatus;
  createdAt?: string;
}




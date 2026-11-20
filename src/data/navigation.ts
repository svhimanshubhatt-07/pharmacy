export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
  hasDropdown?: boolean;
  children?: NavItem[];
}

export const topUtilityNav: NavItem[] = [
  {
    label: "CONFERENCES",
    href: "#",
    children: [
      {
        label: "NICS-2023 on Technology in Pharma Healthcare",
        href: "/ics",
      },
    ],
  },
  {
    label: "NIET-PHARMACY NISP",
    href: "/nietpharmacy-nisp",
  },
  {
    label: "NIET-PHARMACY IIC",
    href: "/IIC-NIET",
    isExternal: true,
  },
  {
    label: "APPROVALS",
    href: "/approvals-and-affiliations",
    hasDropdown: true,
    children: [
      { label: "Approval 2025-26 (CCSEA, NBA, PCI)", href: "/approvals-and-affiliations" },
      { label: "Approval 2024-25 (AKTU, PCI, NIRF)", href: "/approvals-and-affiliations" },
      { label: "Approval 2023-24 (AICTE, NBA, PCI)", href: "/approvals-and-affiliations" },
      { label: "Approval 2022-23 (PCI, AKTU, BTE)", href: "/approvals-and-affiliations" },
      { label: "Approval 2021-22 (PCI & NBA)", href: "/approvals-and-affiliations" },
      { label: "PCI-SIF Mandatory Dossier", href: "/pdf/PCI-SIF.pdf", isExternal: true },
      { label: "All Statutory Approvals & Orders", href: "/approvals-and-affiliations" },
    ],
  },
  {
    label: "RECOGNITION AND ACCREDITATION",
    href: "/#recognition",
  },
  {
    label: "Media",
    href: "#",
    children: [
      {
        label: "Events",
        href: "/event",
      },
      {
        label: "Press Releases",
        href: "/press-releases",
      },
    ],
  },
  {
    label: "GALLERY",
    href: "/gallery",
  },
  {
    label: "CONTACT US",
    href: "/contact-us",
  },
  {
    label: `Admission ${new Date().getFullYear()}`,
    href: "https://applynow.niet.co.in/?_gl=1*watz86*_gcl_au*MTEwOTIzMjc1MS4xNzQzNTEwMDY3",
    isExternal: true,
  },
];

export const mainNav: NavItem[] = [
  {
    label: "ABOUT US",
    href: "/about",
    children: [
      { label: "Vision Mission and Quality Policy", href: "/vision-mission" },
      { label: "Managing Director Message", href: "/managing-director-message" },
      { label: "Additional Managing Director Message", href: "/additional-managing-director-message" },
      { label: "Director Message", href: "/director-message" },
      { label: "Dean Message", href: "/dean-message" },
      { label: "INTELLECTUAL CAPITAL", href: "/intellectual-capital" },
      { label: "IQAC", href: "/iqac" },
      { label: "Authorities", href: "/authorities" },
      { label: "Approvals and Affiliations", href: "/approvals-and-affiliations" },
      { label: "Life at Niet", href: "/life-at-niet" },
      { label: "Committees", href: "/committee" },
      { label: "Policy", href: "/policy" },
      { label: "Audit Statements", href: "/audit-statements" },
      { label: "NIRF", href: "/nirf" },
    ],
  },
  {
    label: "ADMISSIONS",
    href: "/admissions",
    hasDropdown: true,
  },
  {
    label: "PLACEMENT",
    href: "/placement-pharmacy",
  },
  {
    label: "INFRASTRUCTURE",
    href: "/infrastructure",
    hasDropdown: true,
    children: [
      { label: "Classrooms", href: "/infrastructure/classrooms" },
      { label: "Library", href: "/infrastructure/library" },
      { label: "Hostel", href: "/infrastructure/hostel" },
      { label: "Sports & Leisure", href: "/infrastructure/sports-and-leisure" },
      { label: "Instrumentation Lab", href: "/infrastructure/instrumentation-lab" },
      { label: "Machine Room", href: "/infrastructure/machine-room" },
      { label: "Laboratories", href: "/infrastructure/laboratories" },
      { label: "Medical Plant Garden", href: "/infrastructure/medical-plant-garden" },
      { label: "Toxicology Centre", href: "/infrastructure/toxicology-centre" },
      { label: "Animal House", href: "/infrastructure/animal-house" },
      { label: "Transportation", href: "/infrastructure/transportation" },
      { label: "Gymnasium", href: "/infrastructure/gymnasium" },
      { label: "Canteen", href: "/infrastructure/canteen" },
    ],
  },
  {
    label: "R & D",
    href: "/research",
    hasDropdown: true,
  },
  {
    label: "Courses",
    href: "/courses",
  },
  {
    label: "Advance Courses",
    href: "/advance-courses",
  },
  {
    label: "Stakeholder Achievement",
    href: "/stakeholder-achievement",
    hasDropdown: true,
  },
  {
    label: "Important link",
    href: "#",
    children: [
      { label: "PCI - SIF", href: "/pdf/PCI-SIF.pdf", isExternal: true },
      { label: "RTI", href: "/pdf/RTI.pdf", isExternal: true },
      { label: "Mandatory Disclosure", href: "/pdf/Original-Marksheets-and-Degree-by-post.pdf", isExternal: true },
      { label: "Academic Calendar Even Sem 2024-25", href: "/pdf/Academic Calendar 2024-25 Even Semester.pdf", isExternal: true },
      { label: "Academic Calendar Odd Sem 2025-26", href: "/pdf/Academic Calendar 2025-26 ODD Semester.pdf", isExternal: true },
      { label: "NIRF Pharmacy", href: "/pdf/NIRF-PHARMACY.pdf", isExternal: true },
      { label: "NIRF Overall", href: "/pdf/NIRF-OVERALL.pdf", isExternal: true },
      { label: "NIRF Reports", href: "/nirf" },
    ],
  },
];

export const footerQuickLinks1: NavItem[] = [
  { label: "About Us", href: "/about" },
  { label: "Vision & Mission", href: "/vision-mission" },
  { label: "Admissions", href: "/admissions" },
  { label: "Courses", href: "/courses" },
  { label: "Advance Courses", href: "/advance-courses" },
  { label: "Infrastructure", href: "/infrastructure" },
  { label: "Research & Development", href: "/research" },
  { label: "Placement", href: "/placement-pharmacy" },
];

export const footerQuickLinks2: NavItem[] = [
  { label: "Intellectual Capital", href: "/intellectual-capital" },
  { label: "Authorities", href: "/authorities" },
  { label: "Committees", href: "/committee" },
  { label: "Policy", href: "/policy" },
  { label: "IQAC", href: "/iqac" },
  { label: "Approvals & Affiliations", href: "/approvals-and-affiliations" },
  { label: "Audit Statements", href: "/audit-statements" },
  { label: "NIRF Reports", href: "/nirf" },
  { label: "NIET Pharmacy NISP", href: "/nietpharmacy-nisp" },
  { label: "Contact Us", href: "/contact-us" },
];

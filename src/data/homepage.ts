export interface HeroSlide {
  image: string;
  subheading: string;
  heading: string;
  alt: string;
}

export interface RecruiterLogo {
  name: string;
  image: string;
  verified: boolean;
}

export interface CertificateItem {
  id: number;
  alt: string;
  image: string;
  verified: boolean;
}

export interface PlacementRecord {
  rollNo: string;
  company: string;
  programme: string;
}

export const pharmacyMilestones = [
  {
    year: "2025",
    title: "National Recognition",
    desc: "Ranked 37th in India in the NIRF Pharmacy category.",
    theme: "red" as const,
  },
  {
    year: "2024",
    title: "Continued Quality",
    desc: "A further NBA approval period is listed for 2024–2027.",
    theme: "black" as const,
  },
  {
    year: "2017",
    title: "NBA Accreditation",
    desc: "B.Pharm accreditation recorded for the 2017–2020 period.",
    theme: "red" as const,
  },
  {
    year: "2005",
    title: "The Journey Begins",
    desc: "NIET Pharmacy Institute begins its journey in pharmaceutical education.",
    theme: "black" as const,
  },
];

export interface AdmissionCommitteeMember {
  name: string;
  role: string;
}

export const admissionCommitteeMembers: AdmissionCommitteeMember[] = [
  { name: "Dr. Avijit Mazumder", role: "Convener" },
  { name: "Mr. Ranjeet Kumar Yadav", role: "Member" },
  { name: "Ms. Aparna Gupta", role: "Member" },
  { name: "Ms. Kajal", role: "Member" },
  { name: "Mr. Pawan Kumar", role: "Member" },
];

export interface RegulatoryItem {
  id: string;
  title: string;
  documents: {
    title: string;
    url: string;
    labelUrl?: string;
  }[];
}

export const heroSlides: HeroSlide[] = [
  {
    image: "/images/hero banner 1.png",
    subheading: "A Centre of Excellence",
    heading: "Committed to developing highly skilled professionals",
    alt: "NIET Pharmacy - Institution of Happiness Award",
  },
  {
    image: "/images/hero banner 2.png",
    subheading: "Recognition",
    heading: "Award-winning excellence in pharmacy education",
    alt: "QS I-GAUGE Diamond Certificate Award",
  },
  {
    image: "/images/hero banner 3.webp",
    subheading: "A Proud Milestone",
    heading: "Ranked 1st in UP & 4th in India in QCI-PCI Rating",
    alt: "QCI-PCI Rating 1st in UP and 4th in India",
  },
];

export const recruiterLogos: RecruiterLogo[] = [
  { name: "Recruiter logo 1", image: "/images/recruiter_logo/1.svg", verified: true },
  { name: "Recruiter logo 2", image: "/images/recruiter_logo/3.svg", verified: true },
  { name: "Recruiter logo 3", image: "/images/recruiter_logo/4.svg", verified: true },
  { name: "ISO", image: "https://res.cloudinary.com/boss8zib/image/upload/v1793435273/ISO_LOGO.png", verified: true },
  { name: "Recruiter logo 4", image: "/images/recruiter_logo/5.svg", verified: true },
  { name: "Recruiter logo 5", image: "/images/recruiter_logo/3.svg", verified: true },
  { name: "Recruiter logo 6", image: "/images/recruiter_logo/5.svg", verified: true },
  { name: "Recruiter logo 7", image: "/images/recruiter_logo/1.svg", verified: true },
  { name: "Recruiter logo 8", image: "/images/recruiter_logo/5.svg", verified: true },
  { name: "I-GAUGE", image: "https://res.cloudinary.com/boss8zib/image/upload/v1793435272/I-GAUGE.svg", verified: true },
  { name: "ARIIA", image: "https://res.cloudinary.com/boss8zib/image/upload/v1793700070/ARIIA.svg", verified: true },
  {
    name: "Institution Innovation Council",
    image: "https://res.cloudinary.com/boss8zib/image/upload/v1793435272/Instititution-Innovation-Council.svg",
    verified: true,
  },
];

export const certificatesList: CertificateItem[] = [
  { id: 1, alt: "QS I-Gauge Certificate", image: "/images/iqac2025.png", verified: true },
  { id: 2, alt: "QS I-Gauge Certificate", image: "/images/page16.webp", verified: true },
  { id: 3, alt: "QS I-Gauge Certificate", image: "/images/NIRF 2025.JPG", verified: true },
  { id: 4, alt: "QS I-Gauge Certificate", image: "/images/NIET NIRF.png", verified: true },
  { id: 5, alt: "QS I-Gauge Certificate", image: "/images/Qs.jpg", verified: true },
  { id: 6, alt: "QS I-Gauge Certificate", image: "/images/NIRF-2024.png", verified: true },
  { id: 7, alt: "QS World", image: "/images/QS WORLD RANKING_page-0001.jpg", verified: true },
  {
    id: 8,
    alt: "nirf-2022",
    image: "/images/ARIIA CERTIFICATE_JPEG-1.jpg",
    verified: true,
  },
  { id: 9, alt: "Nirf", image: "/images/nirf1.jpg", verified: true },
  { id: 10, alt: "ARIIA CERTIFICATE", image: "/images/nirf-2022_JPEG-1.jpg", verified: true },
  { id: 11, alt: "ARIIA CERTIFICATE", image: "/images/nirf-2021_JPEG-2.jpg", verified: true },
  { id: 12, alt: "ARIIA CERTIFICATE", image: "/images/nirf-2020_JPEG-3.jpg", verified: true },
  { id: 13, alt: "Nirf", image: "/images/nirf2.jpg", verified: true },
];

export const verifiedPlacementHighlights: PlacementRecord[] = [
  {
    rollNo: "1413350047",
    company: "Wipro Limited",
    programme: "B.Pharm",
  },
  {
    rollNo: "1413350091",
    company: "Nestle India Ltd.",
    programme: "B.Pharm",
  },
  {
    rollNo: "1713398511",
    company: "Wipro Limited",
    programme: "M.Pharm",
  },
  {
    rollNo: "1713398505",
    company: "Yatharth Hospital",
    programme: "M.Pharm",
  },
];

export const regulatorySections: RegulatoryItem[] = [
  {
    id: "nirf",
    title: "NIRF",
    documents: [
      { title: "NIRF 2025", url: "/pdf/nirf/NIRF_2025.pdf" },
      { title: "NIRF 2024", url: "/pdf/nirf/NIRF-2024.pdf" },
      { title: "NIRF 2023", url: "/pdf/nirf/NIRF-2023.pdf" },
      { title: "NIRF 2022", url: "/pdf/nirf/nirf-2022-24.pdf" },
      { title: "NIRF 2021", url: "/pdf/nirf/NIRF-2021.jpg" },
      { title: "NIRF 2020", url: "/pdf/nirf/NIRF-2020.jpg" },
    ],
  },
  {
    id: "nba",
    title: "NBA",
    documents: [
      {
        title: "NBA Approval 2024-2027",
        url: "/pdf/app-and-aff/approval-2024-25/NBA_APPROVAL_2024-25.pdf",
      },
      { title: "NBA Approval 2021-2024", url: "/pdf/nba/NBA-APPROVAL-2021-2024.pdf" },
      { title: "NBA Approval 2021", url: "/pdf/nba/NBA-APPROVAL-2021.pdf" },
      { title: "NBA EXTENSION 2020-2021", url: "/pdf/nba/NBA EXTENSION 2020-2021.pdf" },
      { title: "NBA ACCREDITATION-2017-20", url: "/pdf/nba/NBA ACCREDITATION-2017-20.pdf" },
    ],
  },
  {
    id: "ariia",
    title: "ARIIA",
    documents: [
      { title: "ARIIA 2024", url: "/pdf/ariia/ARIIA-CERTIFICATE-24.pdf" },
    ],
  },
  {
    id: "qs",
    title: "QS WORLD RANKING",
    documents: [
      {
        title: "QS WORLD RANKING 2025",
        url: "/pdf/qsWorld/QS_WORLD_RANKING_2025.pdf",
        labelUrl: "https://www.igauge.in/rating/niet-pharmacy-institute-greater-noida",
      },
      {
        title: "QS WORLD RANKING 2022",
        url: "/pdf/qsWorld/QS-WORLD-RANKING-24.pdf",
        labelUrl: "https://www.igauge.in/rating/niet-pharmacy-institute-greater-noida",
      },
    ],
  },
];

export interface SocialWallItem {
  id: string;
  image: string;
  alt: string;
}

export const socialWallItems: SocialWallItem[] = [
  { id: "01", image: "https://res.cloudinary.com/boss8zib/image/upload/v1793955840/social-wall/01.webp", alt: "NIET Pharmacy Collaboration & MoU" },
  { id: "2", image: "https://res.cloudinary.com/boss8zib/image/upload/v1793955956/social-wall/2.webp", alt: "Global Trends and Emerging Challenges in Drug Design Seminar" },
  { id: "4", image: "https://res.cloudinary.com/boss8zib/image/upload/v1793955957/social-wall/4.webp", alt: "National Pharmacy Conference Delegation" },
  { id: "5", image: "https://res.cloudinary.com/boss8zib/image/upload/v1793955957/social-wall/5.webp", alt: "Hands-on Healthcare & Clinical Training Workshop" },
  { id: "6", image: "https://res.cloudinary.com/boss8zib/image/upload/v1793955959/social-wall/6.webp", alt: "NIET Pharmacy Campus Achievement" },
  { id: "7", image: "https://res.cloudinary.com/boss8zib/image/upload/v1793955960/social-wall/7.webp", alt: "Pharmacy Innovation & Research Day" },
  { id: "8", image: "https://res.cloudinary.com/boss8zib/image/upload/v1793955961/social-wall/8.webp", alt: "Student Research Presentation & Recognition" },
  { id: "9", image: "https://res.cloudinary.com/boss8zib/image/upload/v1793955962/social-wall/9.webp", alt: "NIET Industry Expert Lecture Series" },
  { id: "10", image: "https://res.cloudinary.com/boss8zib/image/upload/v1793955949/social-wall/10.webp", alt: "Pharmacy Laboratory Training Session" },
  { id: "11", image: "https://res.cloudinary.com/boss8zib/image/upload/v1793955950/social-wall/11.webp", alt: "Faculty Development & Accreditation Session" },
  { id: "13", image: "https://res.cloudinary.com/boss8zib/image/upload/v1793955950/social-wall/13.webp", alt: "World Pharmacists Day Celebrations" },
  { id: "14", image: "https://res.cloudinary.com/boss8zib/image/upload/v1793955951/social-wall/14.webp", alt: "NIET Alumni Interaction & Mentorship" },
  { id: "15", image: "https://res.cloudinary.com/boss8zib/image/upload/v1793955952/social-wall/15.webp", alt: "Health Screening & Awareness Camp" },
  { id: "16", image: "https://res.cloudinary.com/boss8zib/image/upload/v1793955952/social-wall/16.webp", alt: "National Pharmacy Week Events" },
  { id: "17", image: "https://res.cloudinary.com/boss8zib/image/upload/v1793955953/social-wall/17.webp", alt: "Research Poster Presentation Showcase" },
  { id: "18", image: "https://res.cloudinary.com/boss8zib/image/upload/v1793955954/social-wall/18.webp", alt: "Industrial Visit & Experiential Learning" },
  { id: "19", image: "https://res.cloudinary.com/boss8zib/image/upload/v1793955955/social-wall/19.webp", alt: "Community Outreach & Health Camp" },
];

export interface AdmissionProgram {
  name: string;
  code: string;
  intake: number;
  duration: string;
  eligibility: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface AdmissionDocumentLink {
  title: string;
  pdfUrl: string;
  category: string;
}

export interface MPharmSpecializationIntake {
  specialization: string;
  intake: number;
  duration: string;
}

export interface RecognitionLogo {
  src: string;
  alt: string;
  caption: string;
}

export interface GalleryCard {
  src: string;
  alt: string;
}

export const admissionPrograms: AdmissionProgram[] = [
  {
    name: "Diploma in Pharmacy (D.Pharm)",
    code: "College Code: 1067 (BTE, Lucknow)",
    intake: 60,
    duration: "2 Years",
    eligibility:
      "For admission to first year of D.Pharm, the candidate must have passed intermediate examination of U.P. Board or 10+2 level examination or its equivalent from any recognized Board/University : Candidate must have passed WITHOUT GRACE in 10+2 with the required subject combinations either in Physics, Chemistry and Mathematics or Physics, Chemistry and Biology.",
  },
  {
    name: "Bachelor of Pharmacy (B.Pharm)",
    code: "College Code: 908 (AKTU, Lucknow)",
    intake: 100,
    duration: "4 Years (8 Semesters)",
    eligibility:
      "For admission to first year of B.Pharm, the candidate must have passed intermediate examination of U.P. Board or 10+2 level examination or its equivalent from any recognized Board/University : Securing minimum 50% marks for General & OBC (45% for SC/ST) marks in total of the required subject combinations either in Physics, Chemistry and Maths or Physics, Chemistry and Biology. This combination is given in information brochure of UPSEE/CUET.",
  },
  {
    name: "Direct Admission to B.Pharm Second Year (Lateral Entry for Diploma Holders)",
    code: "College Code: 908 (AKTU, Lucknow)",
    intake: 10,
    duration: "3 Years (6 Semesters)",
    eligibility:
      "Candidates who have passed Diploma in Pharmacy with minimum 50% marks for General & OBC (55% in case of candidates belonging to SC/ST category) recognized by the U.P. Board of Technical Education/or its equivalent are eligible for direct admission to second year (lateral entry) of B.Pharm course.",
  },
  {
    name: "Master of Pharmacy (M.Pharm)",
    code: "College Code: 908 (AKTU, Lucknow)",
    intake: 45,
    duration: "2 Years (4 Semesters)",
    eligibility:
      "Candidates who have passed B.Pharm degree from recognized university with minimum 55% marks (50% for SC/ST) are eligible for admission to M.Pharm. GPAT qualified candidates are given preference.",
  },
];

export const mpharmSpecializationsIntake: MPharmSpecializationIntake[] = [
  { specialization: "Pharmaceutics", intake: 15, duration: "2 years" },
  { specialization: "Pharmacology", intake: 15, duration: "2 years" },
  { specialization: "Pharmaceutical Chemistry", intake: 15, duration: "2 years" },
];

export const afrcDisclaimer =
  "Tuition Fee is subject to revision by State Fee Regulatory Committee (AFRC), Government of Uttar Pradesh.";

export const admissionDocumentTables = {
  dpharmSyllabi: [
    { title: "D.Pharm New Syllabus (PCI ER 2020)", pdfUrl: "/pdf/DPHARM-NEW-SYLLABUS.pdf" },
    { title: "D.Pharm Old Syllabus", pdfUrl: "/pdf/DPHARM-OLD-SYYLABUS.pdf" },
    { title: "DPharm 1st Year : NEW SYLLABUS", pdfUrl: "https://www.pci.nic.in/pdf/14-55_ER_20%20_syllabus_23092021.pdf" },
    { title: "DPharm 2nd Year : NEW SYLLABUS", pdfUrl: "https://bteup.ac.in/Syllabus/ANNUAL/214.pdf" },
  ],
  bpharmSyllabi: [
    {
      title: "Bachelor of Pharmacy I, II, III & IV Year syllabus",
      pdfUrl: "/pdf/bachelor-of-pharmacy-I-II-III-IV-year-syllabus.pdf",
    },
  ],
  mpharmSyllabi: [
    { title: "M.Pharm (Pharmaceutics) Syllabus", pdfUrl: "/pdf/pharmaceutics-syllabus.pdf" },
    { title: "M.Pharm (Pharmacology) Syllabus", pdfUrl: "/pdf/pharmacology-syllabus.pdf" },
    {
      title: "M.Pharm (Pharmaceutical Chemistry) Syllabus",
      pdfUrl: "/pdf/pharmaceutical-chemistry-syllabus.pdf",
    },
    {
      title: "Pharmaceutical Chemistry (Proposed) Syllabus",
      pdfUrl: "/pdf/pharmaceutical-chemistry-syllabus.pdf",
    },
  ],
  feeStructures: [
    { title: "B.Pharm Fee Structure 2025", pdfUrl: "/pdf/fees-2025/B._Pharm_Fee_Structure_2025.pdf" },
    { title: "D.Pharm Fee Structure 2025", pdfUrl: "/pdf/fees-2025/D_Pharm_Fee_Structure_2025.pdf" },
    { title: "M.Pharm Fee Structure 2025", pdfUrl: "/pdf/fees-2025/M._Pharm_Fee_Structure_2025.pdf" },
    { title: "Historical Fee Structure 2022-23", pdfUrl: "/pdf/Fee-Structure-2022-23.pdf" },
  ],
  brochureAndChecklists: [
    { title: "Pharmacy Admission Brochure (01)", pdfUrl: "/pdf/brochure-01.pdf" },
    { title: "Pharmacy Information Brochure", pdfUrl: "/pdf/brochure-01.pdf" },
    { title: "Check list for Pharmacy", pdfUrl: "https://www.niet.co.in/uploads/images/69c65c575c11c1774607447.pdf" },
    { title: "List of Documents for Admission", pdfUrl: "/pdf/List-of-Documents.pdf" },
  ],
};

export const recognitionLogos: RecognitionLogo[] = [
  { src: "https://res.cloudinary.com/boss8zib/image/upload/v1793700923/NIRF.webp", alt: "NIRF", caption: "Rank 37th in NIRF 2024" },
  { src: "https://res.cloudinary.com/boss8zib/image/upload/v1793435264/NBA.webp", alt: "NBA", caption: "NBA Accredited" },
  { src: "https://res.cloudinary.com/boss8zib/image/upload/v1793435263/cpcsea.webp", alt: "CPCSEA", caption: "CPCSEA Approved" },
  { src: "https://res.cloudinary.com/boss8zib/image/upload/v1793435263/bte.webp", alt: "UPBTE", caption: "Affiliated to BTE UP (Code: 1067)" },
  { src: "https://res.cloudinary.com/boss8zib/image/upload/v1793435263/aktu.webp", alt: "AKTU", caption: "Affiliated to AKTU (Code: 908)" },
  { src: "https://res.cloudinary.com/boss8zib/image/upload/v1793435265/pci.webp", alt: "PCI", caption: "Approved by Pharmacy Council of India" },
];

export const rankingImages: GalleryCard[] = [
  { src: "/images/why-gall/qs-gauge.jpg", alt: "QS I-GAUGE Rating" },
  { src: "/images/why-gall/eng-rank.jpg", alt: "Engineering & Technical Institutions Ranking" },
  { src: "/images/why-gall/b-schools-rank.jpg", alt: "Top B-Schools & Pharmacy Institutions Ranking" },
  { src: "/images/why-gall/dataquest.jpg", alt: "Dataquest Top Technology Institute Ranking" },
  { src: "/images/why-gall/cc.jpg", alt: "Career Connect Ranking" },
  { src: "/images/QS-I-Gauge-Certificate.jpg", alt: "QS I-GAUGE Diamond Certificate" },
];

export const advancedCoursesInfo = {
  title: "ADVANCED COURSES",
  description:
    "Our Institute offers special classes on Spoken English to groom the students from their first year of study so that they become ready for pharmaceutical industry at the end of the curriculum. Apart from our regular curriculum, we offer special classes on Pharmacogenomics, Bioinformatics and Clinical Research, and Drug Regulatory Affairs to provide students better exposure to the advancements in pharma industries.",
};

export const awardsImages: GalleryCard[] = [
  { src: "/images/why-gall/Awards-1.jpg", alt: "Institutional Award 1" },
  { src: "/images/why-gall/Awards-2.jpg", alt: "Institutional Award 2" },
  { src: "/images/why-gall/Awards-3.jpg", alt: "Institutional Award 3" },
  { src: "/images/why-gall/Awards-4.jpg", alt: "Institutional Award 4" },
  { src: "/images/why-gall/Awards-5.jpg", alt: "Institutional Award 5" },
  { src: "/images/why-gall/Awards-6.jpg", alt: "Institutional Award 6" },
  { src: "/images/why-gall/Awards-7.jpg", alt: "Institutional Award 7" },
  { src: "/images/why-gall/Awards-8.jpg", alt: "Institutional Award 8" },
  { src: "/images/why-gall/Awards-9.jpg", alt: "Institutional Award 9" },
];

export const foreignLanguageImages: GalleryCard[] = [
  { src: "/images/why-gall/german.png", alt: "German Language Training Program" },
  { src: "/images/why-gall/japanese.png", alt: "Japanese Language Training Program" },
];

export const applicationSteps: string[] = [
  "Fill out the online application form on the NIET official admissions portal (applynow.niet.co.in).",
  "Upload the required academic documents, photographs, and identity proof.",
  "Counseling and personal interview / document verification by the admission committee.",
  "Allocation of seat as per PCI / AKTU / BTE guidelines.",
  "Fee submission via secure online payment gateways (Razorpay, Paytm, FeePal, or ERP login).",
];

export const requiredDocuments: string[] = [
  "10th Marksheet and Passing Certificate (High School)",
  "12th Marksheet and Passing Certificate (Intermediate / 10+2)",
  "Diploma in Pharmacy Marksheets & Certificate (for B.Pharm Lateral Entry candidates)",
  "Graduation Degree & Year-wise Marksheets (for M.Pharm candidates)",
  "Valid GPAT / CUET scorecard (if applicable)",
  "Transfer Certificate (TC) & Migration Certificate (Original)",
  "Character Certificate from the head of the institution last attended",
  "Category Certificate (OBC / SC / ST / EWS) if applicable",
  "Domicile Certificate (for UP quota candidates if schooling outside UP)",
  "Aadhaar Card copy of candidate and parents",
  "Recent colored passport size photographs (5 copies)",
  "Medical Fitness Certificate from a registered medical practitioner",
];

export const admissionFAQs: FAQItem[] = [
  {
    question: "What is the college code of NIET Pharmacy for AKTU counseling?",
    answer: "The AKTU college code for NIET (Pharmacy Institute) is 908. For D.Pharm under BTE UP, the institute code is 1067.",
  },
  {
    question: "Is the B.Pharm program accredited by the NBA?",
    answer: "Yes, the B.Pharm program of NIET Pharmacy Institute is accredited by the National Board of Accreditation (NBA) and approved by PCI and AICTE.",
  },
  {
    question: "What is NIET Pharmacy's national NIRF ranking?",
    answer: "NIET Pharmacy is ranked 37th in India by NIRF (National Institutional Ranking Framework) 2024, Ministry of Education, Govt. of India.",
  },
  {
    question: "Are hostel accommodations available on campus?",
    answer: "Yes, fully furnished on-campus hostels with Wi-Fi, 24/7 security, gym, nutritious meals, and power backup are available separately for boys and girls.",
  },
  {
    question: "How can I pay the admission and semester fees?",
    answer: "Fees can be paid online through the official ERP portal, Axis Bank Razorpay gateway, Paytm Education, or FeePal.",
  },
];

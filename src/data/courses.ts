// NIET Pharmacy Courses Data Module - 100% Verbatim Parity with courses.php

export interface CourseDetail {
  id: string;
  name: string;
  level: "Diploma" | "Undergraduate" | "Postgraduate";
  fieldOfStudy: string;
  summary: string;
  duration: string;
  intake: number;
  eligibility: string;
  overview: string;
  merits: string[];
  attendanceRule: string;
  highlights: string[];
  syllabusPdfs?: { title: string; url: string }[];
}

export interface StudentPlacementRecord {
  sNo: string;
  name: string;
  rollNo: string;
  company: string;
  branch: string;
}

export const bpharmHodProfiles = [
  { sNo: 1, branch: "Pharmaceutics", hod: "Dr. Rupa Mazumder" },
  { sNo: 2, branch: "Pharmacology", hod: "Dr. Saumya Das" },
  { sNo: 3, branch: "Pharmaceutical Chemistry", hod: "Dr. Salahuddin" },
  { sNo: 4, branch: "Pharmacognosy", hod: "Dr. Rupa Mazumder" },
];

export const bpharmPeos = [
  "PEO 1 : To acquire knowledge and develop Understanding",
  "PEO 2 : To develop skills: a) Technical skills b) Corporate skills",
  "PEO 3 : To develop a professional attitude",
];

export const bpharmPos = [
  { sNo: 1, outcome: "Pharmacy Knowledge" },
  { sNo: 2, outcome: "Planning Ability" },
  { sNo: 3, outcome: "Problem Analysis" },
  { sNo: 4, outcome: "Modern Tools Usage" },
  { sNo: 5, outcome: "Pharmaceutical Ethics" },
  { sNo: 6, outcome: "Communication" },
  { sNo: 7, outcome: "Pharmacists and Society" },
  { sNo: 8, outcome: "Environment and Sustainability" },
  { sNo: 9, outcome: "Lifelong Learning" },
];

export const bpharmCareerOptions = [
  "Production & Manufacturing",
  "Research & Development",
  "Analysis & Testing",
  "Hospital Pharmacy",
  "Regulatory Affairs",
  "Drug Inspection",
  "Marketing",
  "Academics",
  "Consultancy",
  "Community Pharmacy",
  "Opportunities Abroad",
  "Clinical Trials",
  "Documentation, Library Information Services & Pharm Journalism",
];

export const bpharmSummerTrainingCompanies = [
  "Ranbaxy Laboratories Limited",
  "Unichem Laboratories",
  "Panacea Biotec",
  "Uttar Pradesh Drugs & Pharmaceuticals Company Limited, Lucknow",
  "Akums Drugs & Pharmaceuticals Ltd",
  "Elder Pharmaceuticals Ltd.",
  "Jagsonpal Pharmaceuticals Ltd",
  "Radicura Pharmaceuticals Pvt. Ltd.",
  "Surya Pharmaceuticals Pvt. Ltd.",
  "Solan Drugs Pvt. Ltd.",
  "Advik Laboratories Limited",
  "Daffodils Pharmaceuticals Ltd.",
  "J-amada Remedies Ltd.",
  "Chemo Biological Ltd",
  "Everest Formulations Ltd.",
  "Purewin labs. Pvt. Ltd.",
  "HiGlance Labs. Pvt. Ltd",
  "T.C. Healthcare Pvt. Ltd.",
  "Tuton Pharmaceuticals",
  "Laboratories Griffon Ltd. Profile",
  "Oyster Pharma Pvt. Ltd.",
  "Institute of Nuclear Medicine & Allied Sciences",
  "Sofgel Capsulation Pvt. Ltd.",
  "Captab Biotec",
  "Medicaman Biotech Ltd",
  "Adley Formulations",
  "Sritech Pharma",
  "Shree Baidyanath Ayurved Bhawan Pvt. Ltd.",
  "Saibliss drugs &. Pharmaceuticals",
  "Polo Pharmaceuticals (P) Ltd.",
  "Tanacia Pharmaceuticals",
];

export const bpharmIndustrialVisitIndustries = [
  "Albert David Limited",
  "HiGlance Labs. Pvt. Ltd.",
  "K. V. Aromatics Private Limited",
  "Radicura Pharmaceuticals Pvt. Ltd.",
  "Unichem Laboratories Ltd.",
  "TEVA Pharmaceuticals, Greater Noida",
  "National Institute of Biological, Noida",
  "Sun Pharmaceuticals Industries Limited , Gurgaon",
  "Arbro Pharmaceuticals Limited, New Delhi",
];

export const bpharmSyllabusPdf = "/pdf/bachelor-of-pharmacy-I-II-III-IV-year-syllabus.pdf";

export const coursesData: CourseDetail[] = [
  {
    id: "dpharm",
    name: "Diploma in Pharmacy (D.Pharm)",
    level: "Diploma",
    fieldOfStudy: "Pharmacy Practice",
    summary: "A two-year diploma covering pharmacy practice, dispensing and supervised hospital or community training.",
    duration: "2 Years",
    intake: 60,
    eligibility:
      "For admission to first year of D.Pharm, the candidate must have passed intermediate examination of U.P. Board or 10+2 level examination or its equivalent from any recognized Board/University : Candidate must have passed WITHOUT GRACE in 10+2 with the required subject combinations either in Physics, Chemistry and Mathematics or Physics, Chemistry and Biology.",
    overview:
      "Diploma in Pharmacy (D.Pharm) is two years course intended to train students to produce dispensing pharmacists who are to play a vital role in our healthcare system especially in community pharmacy of hospitals and nursing homes. The program covers basic pharmaceutical education including Pharmaceutics, Biochemistry, Pharmacology and Toxicology , Pharmacognosy along with their application in the healthcare Industry. The program holds good value in the Community Pharmacy, Pharmaceutical Industry, Pharmacy Shops, and hospitals.\n\nDiploma in Pharmacy is duly approved by AICTE and PCI, and affiliated to Board of Technical Education (BTE), Lucknow, Uttar Pradesh.\n\nDiverse job opportunities are available in front of Diploma in Pharmacy certificate holders. Government and private sector job opportunities are available in front of them.\n\nThe course for D. Pharm shall extend over 2 years consisting of two years, along with inbuilt industrial/ community pharmacy/ hospital training.",
    merits: [
      "Experienced and vibrant full-time faculty",
      "On hand training for dispensing and manufacturing of pharmaceuticals.",
      "Regular interaction with community pharmacy and industrial pharmacy experts",
      "Opportunity to use and witness postgraduate and research infrastructure at the undergraduate level",
      "Guidance and counseling from faculty members",
      "Placement focus in Community Pharmacy, Pharmaceutical industries, Hospitals, Clinical Research Organizations, and Retail Pharmacy.",
    ],
    attendanceRule:
      "A student is expected to attend at least 75 % of total attendance for each subject, in the absence of which he/she will not be eligible to appear the exam for that subject as per PCI and BTE norms. A student is required to monitor his/her attendance and no separate notice will be displayed.",
    highlights: [
      "Approved by Pharmacy Council of India (PCI) & AICTE",
      "Affiliated with Board of Technical Education (BTE UP), Lucknow",
      "State-of-the-art pharmaceutics and dispensing laboratories",
      "Comprehensive hospital training and community pharmacy internships",
    ],
    syllabusPdfs: [
      { title: "DPharm 1st Year : NEW SYLLABUS", url: "https://www.pci.nic.in/pdf/14-55_ER_20%20_syllabus_23092021.pdf" },
      { title: "DPharm 2nd Year : NEW SYLLABUS", url: "https://bteup.ac.in/Syllabus/ANNUAL/214.pdf" },
      { title: "DPharm NEW SYLLABUS", url: "/pdf/DPHARM-NEW-SYLLABUS.pdf" },
      { title: "DPharm OLD SYLLABUS", url: "/pdf/DPHARM-OLD-SYYLABUS.pdf" },
    ],
  },
  {
    id: "bpharm",
    name: "Bachelor of Pharmacy (B.Pharm)",
    level: "Undergraduate",
    fieldOfStudy: "Pharmaceutical Sciences",
    summary: "A four-year pharmacy degree combining pharmaceutical sciences with practical study.",
    duration: "4 Years (8 Semesters)",
    intake: 100,
    eligibility:
      "For admission to first year of B.Pharm, the candidate must have passed intermediate examination of U.P. Board or 10+2 level examination or its equivalent from any recognized Board/University : Securing minimum 50% marks for General & OBC (45% for SC/ST) marks in total of the required subject combinations either in Physics, Chemistry and Maths or Physics, Chemistry and Biology. This combination is given in information brochure of UPSEE/CUET.\n\nDIRECT ADMISSION TO B.PHARM SECOND YEAR (FOR DIPLOMA HOLDERS - LATERAL ENTRY): Candidates who have passed Diploma in Pharmacy with minimum 50% marks for General & OBC (55% in case of candidates belonging to SC/ST category) recognized by the U.P. Board of Technical Education/or its equivalent are eligible for direct admission to second year (lateral entry) of B.Pharm course.",
    overview:
      "This is a 4-year program spread over 8 semesters, leading to a Bachelor's degree in Pharmacy. The program is tailor-made to train the students to play an important role in community pharmacy and assist the pharmaceutical industry at various levels. The course is predominantly based on practice and interaction with a strong focus on the healthcare system. This will enable students to practice pharmacy profession in a strong, skillful and determined manner.\n\nAccredited by the National Board of Accreditation (NBA), approved by AICTE and PCI, and affiliated to Dr. A.P.J. Abdul Kalam Technical University (AKTU), Lucknow.",
    merits: [
      "Experienced and vibrant full-time faculty",
      "Electives in tune with specializations at undergraduate level",
      "Regular interaction with community pharmacy and industrial pharmacy experts",
      "Opportunity to use and witness postgraduate and research infrastructure at the undergraduate level",
      "Guidance and counseling from faculty members",
      "Placement focus in Pharmaceutical industries, Hospitals, Patent cells, IPR sections, Clinical Research Organizations, Retail Pharmacy and other opportunities",
    ],
    attendanceRule:
      "A student is expected to attend at least 75 % of total attendance for each subject, in the absence of which he/she will not be eligible to appear the exam for that subject as per University norms. A student is required to monitor his/her attendance own attendance and no separate notice will be displayed.",
    highlights: [
      "NBA Accredited Program (2017 - 2027)",
      "NIRF 2024 Rank: 37th Nationally",
      "31 Industry Summer Training tie-ups & 9 Industrial Visit partners",
      "Modern Central Instrumentation Facility with HPLC, UV-Vis, and FTIR",
    ],
    syllabusPdfs: [
      {
        title: "Bachelor of Pharmacy I, II, III & IV Year Syllabus",
        url: "/pdf/bachelor-of-pharmacy-I-II-III-IV-year-syllabus.pdf",
      },
    ],
  },
  {
    id: "mpharm-ceutics",
    name: "M.Pharm (Pharmaceutics)",
    level: "Postgraduate",
    fieldOfStudy: "Pharmaceutics",
    summary: "Postgraduate study in pharmaceutics, including advanced coursework and a research project.",
    duration: "2 Years (4 Semesters)",
    intake: 15,
    eligibility:
      "Candidates who have passed B.Pharm degree from recognized university with minimum 55% marks (50% for SC/ST) are eligible for admission to M.Pharm. GPAT qualified candidates are given preference.",
    overview:
      "This is a 2 year program leading to a Master's degree in Pharmacy. In the initial two semesters students revise and broaden their knowledge in theory and practical in their specialized subjects from the field of Pharmacy. During the following semesters of study they work on their thesis and appearing in the state level examinations. The program is tailored towards the research in Pharmacy and assists the pharmaceutical industries at various levels by supplying trained manpower.",
    merits: [
      "Experienced and vibrant full-time faculty",
      "Regular Seminars and Conferences",
      "Regular interaction with industrial pharmacy experts",
      "Advanced research infrastructure with sophisticated updated Instruments",
      "Guidance and counseling from faculty members",
      "Placement focus in R&D, Formulation Development, NDDS, and Regulatory Affairs",
    ],
    attendanceRule:
      "A student is expected to attend at least 75 % of total attendance for each subject, in the absence of which he/she will not be eligible to appear the exam for that subject as per University norms.",
    highlights: [
      "Specialized Research in Novel Drug Delivery Systems (NDDS) & Nanotechnology",
      "Pilot Plant and cGMP simulated Machine Room facilities",
      "Hands-on training in Dissolution Apparatus, Lyophilizer, and Particle Size Analyzer",
    ],
    syllabusPdfs: [
      { title: "M.Pharm (Pharmaceutics) Syllabus", url: "/pdf/pharmaceutics-syllabus.pdf" },
    ],
  },
  {
    id: "mpharm-cology",
    name: "M.Pharm (Pharmacology)",
    level: "Postgraduate",
    fieldOfStudy: "Pharmacology",
    summary: "Postgraduate study in pharmacology, toxicology and preclinical research, with a dissertation.",
    duration: "2 Years (4 Semesters)",
    intake: 15,
    eligibility:
      "Candidates who have passed B.Pharm degree from recognized university with minimum 55% marks (50% for SC/ST) are eligible for admission to M.Pharm. GPAT qualified candidates are given preference.",
    overview:
      "This course offered by NIET is of two years' duration. The first year curriculum is designed with exposure to advances in pharmacology, wherein the candidate has potential to equip himself/herself with all preclinical pharmacological, toxicological and safety pharmacological studies. Furthermore, he/she gets adequate exposure of clinical research methods, newer molecular biology techniques.\n\nThe second year is mainly through dissertation on the topic of industrial research and development, new drug discovery etc. Thus the two year program will enable pharmacology student to cope up with present day need of preclinical and clinical research in new drug discovery and development.",
    merits: [
      "Tailor made course suitable for Pharmaceutical industries and clinical research",
      "Experienced and vibrant full-time faculty",
      "Regular interaction with clinical research and preclinical experts",
      "Guidance and counseling from faculty members",
      "CPCSEA approved Central Animal House facility",
    ],
    attendanceRule:
      "A student is expected to attend at least 75 % of total attendance for each subject, in the absence of which he/she will not be eligible to appear the exam for that subject as per University norms.",
    highlights: [
      "CPCSEA Approved Small Animal Facility for Preclinical Screening",
      "Advanced Molecular Biology and Neuropharmacology Lab setups",
      "Dissertation focus on in-vivo disease models and safety pharmacology",
    ],
    syllabusPdfs: [
      { title: "M.Pharm (Pharmacology) Syllabus", url: "/pdf/pharmacology-syllabus.pdf" },
    ],
  },
  {
    id: "mpharm-chem",
    name: "M.Pharm (Pharmaceutical Chemistry)",
    level: "Postgraduate",
    fieldOfStudy: "Pharmaceutical Chemistry",
    summary: "Postgraduate study in medicinal chemistry, drug design and pharmaceutical research.",
    duration: "2 Years (4 Semesters)",
    intake: 15,
    eligibility:
      "Candidates who have passed B.Pharm degree from recognized university with minimum 55% marks (50% for SC/ST) are eligible for admission to M.Pharm. GPAT qualified candidates are given preference.",
    overview:
      "NIET offers two years M. Pharm with Pharmaceutical Chemistry as specialization to pharmacy graduates who wish to take up pharmaceutical chemistry as their profession. In the first year of this program, students learn technical subjects covering the areas of medicinal chemistry, drug design, molecular modeling, synthetic chemistry, instrumentation and international regulation for registration of API in Europe and USA. In the second year student take up projects in the case of specialization spreading over two semesters.\n\nMajor research project selection is based on interest of industry and mainly on the application of technology to specific problems. It is obligatory on the part of the students and faculty to publish a paper from the project work undertaken.",
    merits: [
      "Tailor made course suitable for Pharmaceutical industry R&D and API bulk drug sector",
      "Experienced and vibrant full-time faculty",
      "Regular interaction with synthetic chemistry and analytical experts",
      "Guidance and counseling from faculty members",
      "Advanced computational drug design lab and multi-step organic synthesis facilities",
    ],
    attendanceRule:
      "A student is expected to attend at least 75 % of total attendance for each subject, in the absence of which he/she will not be eligible to appear the exam for that subject as per University norms.",
    highlights: [
      "Molecular Modeling & In-silico Computer-Aided Drug Design (CADD)",
      "High Resolution FT-IR, HPLC and Spectral Characterization Facilities",
      "Focus on green chemistry, active pharmaceutical ingredient (API) synthesis, and QSAR",
    ],
    syllabusPdfs: [
      {
        title: "M.Pharm (Pharmaceutical Chemistry) Syllabus",
        url: "/pdf/pharmaceutical-chemistry-syllabus.pdf",
      },
      {
        title: "Pharmaceutical Chemistry (Proposed) Syllabus",
        url: "/pdf/pharmaceutical-chemistry-syllabus.pdf",
      },
    ],
  },
];

export const bpharmPlacementsList: StudentPlacementRecord[] = [
  {
    "sNo": "1",
    "name": "MOHIT KUMAR GAUTAM",
    "rollNo": "1413350047",
    "company": "Wipro  Limited",
    "branch": "B.Pharm"
  },
  {
    "sNo": "2",
    "name": "MOIN KHAN",
    "rollNo": "1413350050",
    "company": "Wipro  Limited",
    "branch": "B.Pharm"
  },
  {
    "sNo": "3",
    "name": "NEHA",
    "rollNo": "1413350053",
    "company": "Wipro  Limited",
    "branch": "B.Pharm"
  },
  {
    "sNo": "4",
    "name": "SURUCHI SONI",
    "rollNo": "1413350091",
    "company": "Nestle  India Ltd.",
    "branch": "B.Pharm"
  },
  {
    "sNo": "5",
    "name": "DHISHA CHAUHAN",
    "rollNo": "1513350023",
    "company": "Nestle  India Ltd.",
    "branch": "B.Pharm"
  },
  {
    "sNo": "6",
    "name": "KALIL BHALLA",
    "rollNo": "1513350035",
    "company": "Nestle  India Ltd.",
    "branch": "B.Pharm"
  },
  {
    "sNo": "7",
    "name": "NISHA SINGH",
    "rollNo": "1513350056",
    "company": "Nestle  India Ltd.",
    "branch": "B.Pharm"
  },
  {
    "sNo": "8",
    "name": "ADITYA PRASAD",
    "rollNo": "1413350003",
    "company": "Genpact",
    "branch": "B.Pharm"
  },
  {
    "sNo": "9",
    "name": "ALOK KUMAR",
    "rollNo": "1413350006",
    "company": "Genpact",
    "branch": "B.Pharm"
  },
  {
    "sNo": "10",
    "name": "SUDHANSHU MISHRA",
    "rollNo": "1413350088",
    "company": "Genpact",
    "branch": "B.Pharm"
  },
  {
    "sNo": "11",
    "name": "VISHAL SINGH",
    "rollNo": "1413350098",
    "company": "Genpact",
    "branch": "B.Pharm"
  },
  {
    "sNo": "12",
    "name": "SYED EHRAR HUSSAIN",
    "rollNo": "1413350092",
    "company": "Genpact",
    "branch": "B.Pharm"
  },
  {
    "sNo": "13",
    "name": "SHUBHAM MISHRA",
    "rollNo": "1413350085",
    "company": "Genpact",
    "branch": "B.Pharm"
  },
  {
    "sNo": "14",
    "name": "ALCHENDRA",
    "rollNo": "1413350005",
    "company": "Genpact",
    "branch": "B.Pharm"
  },
  {
    "sNo": "15",
    "name": "GAURAV SAINI",
    "rollNo": "1413350023",
    "company": "Modi-Mundi Pharma Pvt. Ltd.",
    "branch": "B.Pharm"
  },
  {
    "sNo": "16",
    "name": "NIKHIL CHAUHAN",
    "rollNo": "1413350055",
    "company": "Rapross Pharmaceutical (P) Ltd.",
    "branch": "B.Pharm"
  },
  {
    "sNo": "17",
    "name": "NIKHIL AGGARWAL",
    "rollNo": "1413350056",
    "company": "Rapross Pharmaceutical (P) Ltd.",
    "branch": "B.Pharm"
  },
  {
    "sNo": "18",
    "name": "NIVEDITA PAWAR",
    "rollNo": "1413350057",
    "company": "Rapross Pharmaceutical (P) Ltd.",
    "branch": "B.Pharm"
  },
  {
    "sNo": "19",
    "name": "RAKHI CHAUHAN",
    "rollNo": "1413350071",
    "company": "Rapross Pharmaceutical (P) Ltd.",
    "branch": "B.Pharm"
  },
  {
    "sNo": "20",
    "name": "RAVENDRA SINGH TOMER",
    "rollNo": "1413350072",
    "company": "Rapross Pharmaceutical (P) Ltd.",
    "branch": "B.Pharm"
  },
  {
    "sNo": "21",
    "name": "ANKUR GARG",
    "rollNo": "1513350902",
    "company": "Rapross Pharmaceutical (P) Ltd.",
    "branch": "B.Pharm"
  },
  {
    "sNo": "22",
    "name": "LISHA RANI",
    "rollNo": "1413350040",
    "company": "Apollo Pharma",
    "branch": "B.Pharm"
  },
  {
    "sNo": "23",
    "name": "VIVEK KUMAR SHARMA",
    "rollNo": "1413350100",
    "company": "Apollo Pharma",
    "branch": "B.Pharm"
  },
  {
    "sNo": "24",
    "name": "AJAY KUMAR",
    "rollNo": "1513350901",
    "company": "Recomdigen Laboratiries",
    "branch": "B.Pharm"
  },
  {
    "sNo": "25",
    "name": "ARJUN BHATI",
    "rollNo": "1413350019",
    "company": "Pulsus healthtech LLP",
    "branch": "B.Pharm"
  },
  {
    "sNo": "26",
    "name": "KULDEEP KUMAR",
    "rollNo": "1413350039",
    "company": "Pulsus healthtech LLP",
    "branch": "B.Pharm"
  },
  {
    "sNo": "27",
    "name": "PRATEEK SRIVASTAVA",
    "rollNo": "1413350062",
    "company": "Pulsus healthtech LLP",
    "branch": "B.Pharm"
  },
  {
    "sNo": "28",
    "name": "SALMAN KHAN",
    "rollNo": "1413350076",
    "company": "Pulsus healthtech LLP",
    "branch": "B.Pharm"
  },
  {
    "sNo": "29",
    "name": "PRAKASH KUMAR JHA",
    "rollNo": "1513350907",
    "company": "Pulsus healthtech LLP",
    "branch": "B.Pharm"
  },
  {
    "sNo": "30",
    "name": "NEHA GAUTAM",
    "rollNo": "1413350054",
    "company": "Pulsus Healthtech LLP",
    "branch": "B.Pharm"
  },
  {
    "sNo": "31",
    "name": "HITESH KUMAR",
    "rollNo": "1413350027",
    "company": "Omenta Pharma (P) LTD",
    "branch": "B.Pharm"
  },
  {
    "sNo": "32",
    "name": "ISHFAQ MAJEED DAR",
    "rollNo": "1413350028",
    "company": "Omenta Pharma (P) LTD",
    "branch": "B.Pharm"
  },
  {
    "sNo": "33",
    "name": "PIYUSH GOYAL",
    "rollNo": "1413350060",
    "company": "Krhipra Health solution LLP",
    "branch": "B.Pharm"
  },
  {
    "sNo": "34",
    "name": "PRAVEEN",
    "rollNo": "1413350063",
    "company": "Krhipra Health solution LLP",
    "branch": "B.Pharm"
  },
  {
    "sNo": "35",
    "name": "KM KAJAL SINGHAL",
    "rollNo": "1413350036",
    "company": "Krhipra Health solution LLP",
    "branch": "B.Pharm"
  },
  {
    "sNo": "36",
    "name": "KAJAL SHARMA",
    "rollNo": "1413350033",
    "company": "OPTUM",
    "branch": "B.Pharm"
  },
  {
    "sNo": "37",
    "name": "MOHIT KUMAR",
    "rollNo": "1413350045",
    "company": "Aristo Pharmaceuticals Pvt.",
    "branch": "B.Pharm"
  },
  {
    "sNo": "38",
    "name": "DEEPIKA TANWAR",
    "rollNo": "1513350903",
    "company": "Aristo Pharmaceuticals Pvt.",
    "branch": "B.Pharm"
  },
  {
    "sNo": "39",
    "name": "SUSHANK SHARMA",
    "rollNo": "1513350911",
    "company": "Aristo Pharmaceuticals Pvt.",
    "branch": "B.Pharm"
  },
  {
    "sNo": "40",
    "name": "OM PRAKASH MISHRA",
    "rollNo": "1413350059",
    "company": "Samarath Life Sciences Pvt. Ltd.",
    "branch": "B.Pharm"
  },
  {
    "sNo": "41",
    "name": "KAPIL NAGAR",
    "rollNo": "1413350036",
    "company": "Samarath Life Sciences Pvt. Ltd.",
    "branch": "B.Pharm"
  },
  {
    "sNo": "42",
    "name": "SUMIRITI RANJAN",
    "rollNo": "1413350090",
    "company": "Pure and Cure  Health Care Pvt. Ltd.",
    "branch": "B.Pharm"
  },
  {
    "sNo": "43",
    "name": "SHIVAM SHARMA",
    "rollNo": "1413350084",
    "company": "Vishal Enterprises",
    "branch": "B.Pharm"
  },
  {
    "sNo": "44",
    "name": "TANYA TALWAR",
    "rollNo": "1413350093",
    "company": "Vishal Enterprises",
    "branch": "B.Pharm"
  },
  {
    "sNo": "45",
    "name": "SAGAR",
    "rollNo": "1513350910",
    "company": "Medlife",
    "branch": "B.Pharm"
  },
  {
    "sNo": "46",
    "name": "ANGEERA YADAV",
    "rollNo": "1413350012",
    "company": "Astra Zeneca",
    "branch": "B.Pharm"
  },
  {
    "sNo": "47",
    "name": "ANURAG SHARMA",
    "rollNo": "1413350017",
    "company": "Astra Zeneca",
    "branch": "B.Pharm"
  },
  {
    "sNo": "48",
    "name": "DHANANJAY KUMAR PANDEY",
    "rollNo": "1413350021",
    "company": "Astra Zeneca",
    "branch": "B.Pharm"
  },
  {
    "sNo": "49",
    "name": "JYOTI SINGH",
    "rollNo": "1413350032",
    "company": "Astra Zeneca",
    "branch": "B.Pharm"
  },
  {
    "sNo": "50",
    "name": "NEHA GAUTAM",
    "rollNo": "1413350054",
    "company": "Menarini India Pvt. Ltd.",
    "branch": "B.Pharm"
  },
  {
    "sNo": "51",
    "name": "ADITYA PRASAD",
    "rollNo": "1413350003",
    "company": "GSK Pharmaceutical Limited",
    "branch": "B.Pharm"
  },
  {
    "sNo": "52",
    "name": "KRITIKA NARWAR",
    "rollNo": "1413350037",
    "company": "Asian Institute of Medical Sciences",
    "branch": "B.Pharm"
  },
  {
    "sNo": "53",
    "name": "VINIT KUMAR",
    "rollNo": "1413350096",
    "company": "Allure Medical and Phrama solutions Inc.",
    "branch": "B.Pharm"
  },
  {
    "sNo": "54",
    "name": "SUMIT YADAV",
    "rollNo": "1413350089",
    "company": "Allure Medical and Phrama solutions Inc.",
    "branch": "B.Pharm"
  },
  {
    "sNo": "55",
    "name": "SYED EHRAR HUSSAIN",
    "rollNo": "1413350092",
    "company": "Allure Medical and Phrama solutions Inc.",
    "branch": "B.Pharm"
  },
  {
    "sNo": "56",
    "name": "RAHUL KUMAR",
    "rollNo": "1413350067",
    "company": "Hetero healthcare",
    "branch": "B.Pharm"
  },
  {
    "sNo": "57",
    "name": "ASHISH MISHRA",
    "rollNo": "1413350025",
    "company": "Sava Healthcare Ltd.",
    "branch": "B.Pharm"
  },
  {
    "sNo": "58",
    "name": "JAGMOHAN SINGH",
    "rollNo": "1413350029",
    "company": "Intas Pharmaceutical limited",
    "branch": "B.Pharm"
  },
  {
    "sNo": "59",
    "name": "JASMIN ARA",
    "rollNo": "1413350030",
    "company": "Intas Pharmaceutical limited",
    "branch": "B.Pharm"
  },
  {
    "sNo": "60",
    "name": "JAYA",
    "rollNo": "1413350031",
    "company": "Intas Pharmaceutical limited",
    "branch": "B.Pharm"
  },
  {
    "sNo": "61",
    "name": "PRIYANKA KUMARI",
    "rollNo": "1413350065",
    "company": "Intas Pharmaceutical limited",
    "branch": "B.Pharm"
  },
  {
    "sNo": "62",
    "name": "VIPUL KUMAR",
    "rollNo": "1413350097",
    "company": "Bacfo  Pharmaceutical (India) Ltd.",
    "branch": "B.Pharm"
  },
  {
    "sNo": "63",
    "name": "PRASHANT SHARMA",
    "rollNo": "1413350061",
    "company": "Bacfo  Pharmaceutical (India) Ltd.",
    "branch": "B.Pharm"
  },
  {
    "sNo": "64",
    "name": "PUNIT SAMANIYA",
    "rollNo": "1413350066",
    "company": "Bacfo  Pharmaceutical (India) Ltd.",
    "branch": "B.Pharm"
  },
  {
    "sNo": "65",
    "name": "KAPIL KUMAR",
    "rollNo": "1413350034",
    "company": "Bacfo  Pharmaceutical (India) Ltd.",
    "branch": "B.Pharm"
  },
  {
    "sNo": "66",
    "name": "ABHIMANYU SINGH PUNDHIR",
    "rollNo": "1413350001",
    "company": "HCL Healthcare",
    "branch": "B.Pharm"
  },
  {
    "sNo": "67",
    "name": "MUHSIN NASEEF",
    "rollNo": "1413350052",
    "company": "HCL Healthcare",
    "branch": "B.Pharm"
  },
  {
    "sNo": "68",
    "name": "SHABANA",
    "rollNo": "1413350080",
    "company": "HCL Healthcare",
    "branch": "B.Pharm"
  },
  {
    "sNo": "69",
    "name": "SHIVAM BHARDWAJ",
    "rollNo": "1413350083",
    "company": "HCL Healthcare",
    "branch": "B.Pharm"
  },
  {
    "sNo": "70",
    "name": "PRIYANKA KUMARI",
    "rollNo": "1513350908",
    "company": "HCL Healthcare",
    "branch": "B.Pharm"
  },
  {
    "sNo": "71",
    "name": "VIKAS TIWARI",
    "rollNo": "1513350912",
    "company": "HCL Healthcare",
    "branch": "B.Pharm"
  },
  {
    "sNo": "72",
    "name": "ADITYA PRASAD",
    "rollNo": "1413350003",
    "company": "HCL Healthcare",
    "branch": "B.Pharm"
  },
  {
    "sNo": "73",
    "name": "AMBRISH DHAR DWIVEDI",
    "rollNo": "1413350007",
    "company": "Omics International",
    "branch": "B.Pharm"
  },
  {
    "sNo": "74",
    "name": "ANUJ TOMAR",
    "rollNo": "1413350016",
    "company": "Omics International",
    "branch": "B.Pharm"
  },
  {
    "sNo": "75",
    "name": "SALMAN KHAN",
    "rollNo": "1413350076",
    "company": "Omics International",
    "branch": "B.Pharm"
  },
  {
    "sNo": "76",
    "name": "SANDEEP KUMAR BHATI",
    "rollNo": "1413350077",
    "company": "Omics International",
    "branch": "B.Pharm"
  },
  {
    "sNo": "77",
    "name": "ROHIT KUMAR",
    "rollNo": "1413350073",
    "company": "Omics International",
    "branch": "B.Pharm"
  },
  {
    "sNo": "78",
    "name": "PRATEEK SRIVASTAVA",
    "rollNo": "1413350062",
    "company": "Omics International",
    "branch": "B.Pharm"
  },
  {
    "sNo": "79",
    "name": "KULDEEP KUMAR",
    "rollNo": "1413350039",
    "company": "Omics International",
    "branch": "B.Pharm"
  },
  {
    "sNo": "80",
    "name": "HIMANSHU SINGH",
    "rollNo": "1513350030",
    "company": "Oaknet Healthcare",
    "branch": "B.Pharm"
  },
  {
    "sNo": "81",
    "name": "KULDEEP KUMAR",
    "rollNo": "1513350040",
    "company": "Oaknet Healthcare",
    "branch": "B.Pharm"
  },
  {
    "sNo": "82",
    "name": "KUNDAN KUMAR",
    "rollNo": "1513350041",
    "company": "Oaknet Healthcare",
    "branch": "B.Pharm"
  },
  {
    "sNo": "83",
    "name": "MAYANK KUMAR BHARDWAJ",
    "rollNo": "1513350045",
    "company": "Oaknet Healthcare",
    "branch": "B.Pharm"
  },
  {
    "sNo": "84",
    "name": "MD.EJAZ AHMAD",
    "rollNo": "1513350046",
    "company": "Oaknet Healthcare",
    "branch": "B.Pharm"
  },
  {
    "sNo": "85",
    "name": "MOHIT KUMAR",
    "rollNo": "1513350048",
    "company": "Oaknet Healthcare",
    "branch": "B.Pharm"
  },
  {
    "sNo": "86",
    "name": "MOHIT SINGH BHANDARI",
    "rollNo": "1513350049",
    "company": "Oaknet Healthcare",
    "branch": "B.Pharm"
  },
  {
    "sNo": "87",
    "name": "NOOR KHAN",
    "rollNo": "1513350059",
    "company": "Oaknet Healthcare",
    "branch": "B.Pharm"
  },
  {
    "sNo": "88",
    "name": "PRASHANT KUMAR",
    "rollNo": "1513350061",
    "company": "Oaknet Healthcare",
    "branch": "B.Pharm"
  },
  {
    "sNo": "89",
    "name": "PRATIK KUMAR",
    "rollNo": "1513350062",
    "company": "Oaknet Healthcare",
    "branch": "B.Pharm"
  },
  {
    "sNo": "90",
    "name": "PRIYANKA NEGI",
    "rollNo": "1513350065",
    "company": "Oaknet Healthcare",
    "branch": "B.Pharm"
  },
  {
    "sNo": "91",
    "name": "SAKSHI",
    "rollNo": "1513350076",
    "company": "Oaknet Healthcare",
    "branch": "B.Pharm"
  },
  {
    "sNo": "92",
    "name": "SHEETAL SINGH",
    "rollNo": "1513350086",
    "company": "Oaknet Healthcare",
    "branch": "B.Pharm"
  },
  {
    "sNo": "93",
    "name": "VANDANA GUPTA",
    "rollNo": "1513350100",
    "company": "Oaknet Healthcare",
    "branch": "B.Pharm"
  },
  {
    "sNo": "94",
    "name": "BHARTI TOMAR",
    "rollNo": "1513350015",
    "company": "Just Dial Ltd.",
    "branch": "B.Pharm"
  },
  {
    "sNo": "95",
    "name": "IRPHAN KHAN",
    "rollNo": "1513350031",
    "company": "Just Dial Ltd.",
    "branch": "B.Pharm"
  },
  {
    "sNo": "96",
    "name": "KULDEEP",
    "rollNo": "1513350040",
    "company": "Just Dial Ltd.",
    "branch": "B.Pharm"
  },
  {
    "sNo": "97",
    "name": "MAYANK BHARDWAJ",
    "rollNo": "1513350045",
    "company": "Just Dial Ltd.",
    "branch": "B.Pharm"
  },
  {
    "sNo": "98",
    "name": "NEERAJ KUMAR",
    "rollNo": "1513350051",
    "company": "Just Dial Ltd.",
    "branch": "B.Pharm"
  },
  {
    "sNo": "99",
    "name": "BHARTI",
    "rollNo": "1513350015",
    "company": "Fresenius Kabi India Pvt Ltd",
    "branch": "B.Pharm"
  },
  {
    "sNo": "100",
    "name": "MADHAV MISHRA",
    "rollNo": "1513350042",
    "company": "Fresenius Kabi India Pvt Ltd",
    "branch": "B.Pharm"
  },
  {
    "sNo": "101",
    "name": "KULDEEP",
    "rollNo": "1513350040",
    "company": "Fresenius Kabi India Pvt Ltd",
    "branch": "B.Pharm"
  },
  {
    "sNo": "102",
    "name": "SATYAM SHUKLA",
    "rollNo": "1513350080",
    "company": "IDS Infotech",
    "branch": "B.Pharm"
  },
  {
    "sNo": "103",
    "name": "Bhawana Tiwari",
    "rollNo": "1513350016",
    "company": "Lifecell",
    "branch": "B.Pharm"
  },
  {
    "sNo": "104",
    "name": "Garvit Arora",
    "rollNo": "1513350027",
    "company": "Lifecell",
    "branch": "B.Pharm"
  },
  {
    "sNo": "105",
    "name": "Gurnoor kaur",
    "rollNo": "1513350029",
    "company": "Lifecell",
    "branch": "B.Pharm"
  },
  {
    "sNo": "106",
    "name": "Raj Kiran",
    "rollNo": "1513350068",
    "company": "Lifecell",
    "branch": "B.Pharm"
  },
  {
    "sNo": "107",
    "name": "Rubhav agarwal",
    "rollNo": "1513350073",
    "company": "Lifecell",
    "branch": "B.Pharm"
  },
  {
    "sNo": "108",
    "name": "Saakshi Dwivedi",
    "rollNo": "1513350074",
    "company": "Lifecell",
    "branch": "B.Pharm"
  },
  {
    "sNo": "109",
    "name": "Anu Yadav",
    "rollNo": "1513350009",
    "company": "iServices India Pvt. Ltd.",
    "branch": "B.Pharm"
  },
  {
    "sNo": "110",
    "name": "Chandrabhushan kumar",
    "rollNo": "1513350018",
    "company": "iServices India Pvt. Ltd.",
    "branch": "B.Pharm"
  },
  {
    "sNo": "111",
    "name": "GAURAV SHARMA",
    "rollNo": "1513350028",
    "company": "iServices India Pvt. Ltd.",
    "branch": "B.Pharm"
  },
  {
    "sNo": "112",
    "name": "Kajal chaudhary",
    "rollNo": "1513350033",
    "company": "iServices India Pvt. Ltd.",
    "branch": "B.Pharm"
  },
  {
    "sNo": "113",
    "name": "Khushboo tewani",
    "rollNo": "1513350036",
    "company": "iServices India Pvt. Ltd.",
    "branch": "B.Pharm"
  },
  {
    "sNo": "114",
    "name": "Kundan Kumar",
    "rollNo": "1513350041",
    "company": "iServices India Pvt. Ltd.",
    "branch": "B.Pharm"
  },
  {
    "sNo": "115",
    "name": "Nishant pawar",
    "rollNo": "1513350057",
    "company": "iServices India Pvt. Ltd.",
    "branch": "B.Pharm"
  },
  {
    "sNo": "116",
    "name": "PRIYANKA NEGI",
    "rollNo": "1513350065",
    "company": "iServices India Pvt. Ltd.",
    "branch": "B.Pharm"
  },
  {
    "sNo": "117",
    "name": "Rohit Kumar",
    "rollNo": "1513350072",
    "company": "iServices India Pvt. Ltd.",
    "branch": "B.Pharm"
  },
  {
    "sNo": "118",
    "name": "Sachin sharma",
    "rollNo": "1513350075",
    "company": "iServices India Pvt. Ltd.",
    "branch": "B.Pharm"
  },
  {
    "sNo": "119",
    "name": "Bharti yadav",
    "rollNo": "1613350902",
    "company": "iServices India Pvt. Ltd.",
    "branch": "B.Pharm"
  }
];

export const mpharmPlacementsList: StudentPlacementRecord[] = [
  {
    "sNo": "1",
    "name": "PAWAN KUMAR",
    "rollNo": "1713398508",
    "company": "Wipro  Limited",
    "branch": "M.Pharm"
  },
  {
    "sNo": "2",
    "name": "SHEETAL SINGH",
    "rollNo": "1713398510",
    "company": "Wipro  Limited",
    "branch": "M.Pharm"
  },
  {
    "sNo": "3",
    "name": "SUMIT KUMAR RANA",
    "rollNo": "1713398511",
    "company": "Wipro  Limited",
    "branch": "M.Pharm"
  },
  {
    "sNo": "4",
    "name": "KAPIL KUMAR",
    "rollNo": "1713398503",
    "company": "Wipro  Limited",
    "branch": "M.Pharm"
  },
  {
    "sNo": "5",
    "name": "Mayuri Nigam",
    "rollNo": "1613356504",
    "company": "Wipro  Limited",
    "branch": "M.Pharm"
  },
  {
    "sNo": "6",
    "name": "KOMAL BHATI",
    "rollNo": "1713398505",
    "company": "Yatharth Hospital",
    "branch": "M.Pharm"
  },
  {
    "sNo": "7",
    "name": "KUMARI RENU RANI",
    "rollNo": "1713398506",
    "company": "Yatharth Hospital",
    "branch": "M.Pharm"
  },
  {
    "sNo": "8",
    "name": "Aamir Malik",
    "rollNo": "1613357501",
    "company": "Readmitted",
    "branch": "M.Pharm"
  },
  {
    "sNo": "9",
    "name": "Arnica F Lal",
    "rollNo": "1613357502",
    "company": "Jubilant",
    "branch": "M.Pharm"
  },
  {
    "sNo": "10",
    "name": "Daman Pandey",
    "rollNo": "1613357503",
    "company": "NSRT, Gujarat",
    "branch": "M.Pharm"
  },
  {
    "sNo": "11",
    "name": "Vivek Kumar",
    "rollNo": "1613357508",
    "company": "NSRT, Gujarat",
    "branch": "M.Pharm"
  },
  {
    "sNo": "12",
    "name": "Abhishek Kumar Ojha",
    "rollNo": "1613356501",
    "company": "IIMT College",
    "branch": "M.Pharm"
  },
  {
    "sNo": "13",
    "name": "Kamal Singh Bani",
    "rollNo": "1613356502",
    "company": "IIMT College",
    "branch": "M.Pharm"
  },
  {
    "sNo": "14",
    "name": "Krishan",
    "rollNo": "1613356503",
    "company": "Yatharth Hospital",
    "branch": "M.Pharm"
  },
  {
    "sNo": "15",
    "name": "Prateek Swarup Das",
    "rollNo": "1613356505",
    "company": "Unichem",
    "branch": "M.Pharm"
  },
  {
    "sNo": "16",
    "name": "Puja Saha",
    "rollNo": "1613356506",
    "company": "Unichem",
    "branch": "M.Pharm"
  },
  {
    "sNo": "17",
    "name": "ROHIT BARUA",
    "rollNo": "1613356507",
    "company": "Nestle India Ltd.",
    "branch": "M.Pharm"
  },
  {
    "sNo": "18",
    "name": "PRATIK SWARUP DAS",
    "rollNo": "1613356505",
    "company": "JSS Medical Research India Pvt. Ltd.",
    "branch": "M.Pharm"
  },
  {
    "sNo": "19",
    "name": "Rohit Barua",
    "rollNo": "1613356507",
    "company": "GNIOT, College",
    "branch": "M.Pharm"
  },
  {
    "sNo": "20",
    "name": "Rohit Kumar",
    "rollNo": "1613356508",
    "company": "Jubiliant Generic",
    "branch": "M.Pharm"
  },
  {
    "sNo": "21",
    "name": "Sumit Gupta",
    "rollNo": "1613356509",
    "company": "FDC Limited",
    "branch": "M.Pharm"
  },
  {
    "sNo": "22",
    "name": "Vivek Upadhyay",
    "rollNo": "1613356510",
    "company": "Rajiv Academy",
    "branch": "M.Pharm"
  },
  {
    "sNo": "23",
    "name": "Ashini Singh",
    "rollNo": "1613398502",
    "company": "Max Superspeciality Hospital",
    "branch": "M.Pharm"
  },
  {
    "sNo": "24",
    "name": "Anirudh Pratap Singh",
    "rollNo": "1613398501",
    "company": "Anand College of Pharmacy",
    "branch": "M.Pharm"
  },
  {
    "sNo": "25",
    "name": "Km. Nishu Gautam",
    "rollNo": "1613398504",
    "company": "Sharda University",
    "branch": "M.Pharm"
  },
  {
    "sNo": "26",
    "name": "Manish Kumar",
    "rollNo": "1613398505",
    "company": "Sanjay College of Pharmacy",
    "branch": "M.Pharm"
  },
  {
    "sNo": "27",
    "name": "Sushma Gupta",
    "rollNo": "1613398506",
    "company": "Skyline, College",
    "branch": "M.Pharm"
  }
];

export const courseFeeStructures = {
  dpharmFee: [
    { sNo: 1, feeHead: "TUITION FEE", amount: "55,000" },
    { sNo: 2, feeHead: "EXAM FEE", amount: "1,800" },
    { sNo: 3, feeHead: "SECURITY (Refundable)", amount: "5,000" },
    { sNo: 4, feeHead: "REGISTRATION FEE", amount: "1,000" },
  ],
  hostelPlot14: [
    { sNo: 1, type: "TWIN SEATER", rent: "35,000", mess: "40,000", ins: "1,000", total: "76,000", security: "5,000", totalWithSecurity: "81,000", withAc: "98,000" },
    { sNo: 2, type: "THREE SEATER", rent: "27,000", mess: "40,000", ins: "1,000", total: "68,000", security: "5,000", totalWithSecurity: "73,000", withAc: "86,000" },
  ],
  hostelPlot19: [
    { sNo: 1, type: "SINGLE SEATER (BOYS)", rent: "44,000", mess: "40,000", ins: "1,000", total: "85,000", security: "5,000", totalWithSecurity: "90,000" },
    { sNo: 2, type: "THREE SEATER", rent: "27,000", mess: "40,000", ins: "1,000", total: "68,000", security: "5,000", totalWithSecurity: "73,000" },
  ],
  bankDetails: {
    accountName: "NOIDA INSTITUTE OF ENGG. & TECH., Gr. Noida",
    accountNumber: "604302010004991",
    ifscCode: "UBIN0560430",
    bankName: "Union Bank of India",
    branch: "Sector-62, Noida",
  },
};

import React from "react";

export interface CommitteePerson {
  role?: string;
  name: string;
  designation?: string;
  photo?: string;
}

export interface AdvisoryMember {
  name: string;
  designation: string;
  photo?: string;
}

export interface TrackItem {
  title: string;
  subtopics: string[];
}

export interface FeeRow {
  category: string;
  earlyBird: string;
  regular: string;
  apc: string;
}

export const icsConferenceData = {
  code: "NICS-2023",
  title: "International Conference & Summit 2023",
  theme: "Technology in Pharma Healthcare - Past, Present, and Future",
  dates: "23rd & 24th June 2023",
  venue: "Noida Institute of Engineering and Technology (Pharmacy Institute), Greater Noida",
  proceedingsPdf: "/pdf/NICS-2023-on-Technology-in-Pharma-Healthcare.pdf",
  samplePaperDoc: "/pdf/ics/sample-paper.docx",
  registrationLink: "https://forms.gle/5JTnJADnh37fFmob6",
  submissionEmail: "submission@niet.co.in",

  aboutConference:
    "The International Conference and Summit on 'Technology in Pharma Healthcare - Past, Present, and Future' was organized in hybrid mode by NIET Pharmacy Institute, Greater Noida, on 23rd and 24th June 2023. It served as an ideal platform bringing together academicians, researchers, and industrialists from various parts of the world to witness the confluence of cutting-edge technologies that have brought a paradigm shift in healthcare. It provided a vibrant forum to share novel research contributions, deliberate practical implications, and augment the Government of India's vision of affordable and smart healthcare for everyone.",

  aboutInstitute:
    "Noida Institute of Engineering and Technology (Pharmacy Institute), Greater Noida, is one of the premier Pharmacy institutes of India's National Capital Region (NCR), conveniently located just 30 miles (one-hour drive) from the International Airport, New Delhi. It is the only Pharmacy institute under Dr. APJ Abdul Kalam Technical University, Lucknow, to be ranked amongst the top 100 Pharmacy colleges in India as per NIRF 2022 (Ranked 39th) and NIRF 2024 (Ranked 37th). The B.Pharm program is NBA accredited (2017-2027), holds Diamond Subject Rating by QS I-GAUGE, and is recognized in the 'EXCELLENT' band under ARIIA by the Ministry of Education, Govt. of India.",

  importantDates: [
    { event: "Full Paper Submission Deadline", date: "20th May 2023" },
    { event: "Extended Paper Submission Deadline", date: "29th May 2023" },
    { event: "Acceptance Notification", date: "From 5th June 2023" },
    { event: "Last Date for Registration", date: "10th June 2023" },
    { event: "Conference Dates", date: "23rd & 24th June 2023" },
  ],

  guidelines: [
    "Manuscript must be submitted in prescribed MS-Word (.doc/.docx) format.",
    "Length of the paper should not exceed 10 pages.",
    "Title page: Title (font size 16, bold, centrally aligned), Author(s) Name(s), Institutional Affiliation, Contact Number, and Email ID.",
    "Abstract specifications: Maximum 500 words; 3-4 keywords; font size 12; Times New Roman; 1.5 line spacing.",
    "All tables and diagrams should be properly numbered and placed sequentially.",
    "Oral and poster presentation slides: 10-12 slides including Title, Introduction, Literature Review, Aim & Objectives, Methodology, Results & Discussion (max 3 slides), and Conclusion.",
    "Plagiarism must strictly be less than 12%. Only selected high-quality papers will be published in Scopus-indexed and UGC-CARE journals.",
    "Each accepted paper requires at least one full registration with the affiliation of the first author.",
  ],

  tracks: [
    {
      title: "Novel Drug Delivery Systems (NDDS)",
      subtopics: [
        "Targeted drug delivery",
        "Nanotechnology based drug delivery systems",
        "Nanobiomedicines",
        "Formulations with natural bioactives",
      ],
    },
    {
      title: "Personalized Medicine & Health-Tech",
      subtopics: [
        "3D printing & 4D biomaterials",
        "Telepharmacy",
        "Bioelectronics devices",
        "Genomics & precision therapeutics",
      ],
    },
    {
      title: "Nutraceuticals & Functional Foods",
      subtopics: [
        "Dietary supplements & functional foods",
        "Medicinal foods",
        "Herbal products & genetically engineered foods",
      ],
    },
    {
      title: "Anticancer Research & Oncology",
      subtopics: [
        "Virtual screening & molecular docking",
        "CAR T-cell therapy",
        "Cancer immunotherapy",
        "RNAi therapy of cancer",
      ],
    },
    {
      title: "Computer-Aided Formulation Design (CADD)",
      subtopics: [
        "Experimental design & machine learning",
        "Dissipative particle dynamics studies",
        "Computational estimation of API and excipients",
        "Drug-drug and drug-excipient interactions",
      ],
    },
    {
      title: "Medicinal Compounds & Drug Design",
      subtopics: [
        "Synthesis, pharmacological effects and SAR studies",
        "Phytochemical extraction & bio-evaluation",
        "Ligand-based and structure-based drug design",
        "Semi-synthetic derivatization",
      ],
    },
    {
      title: "Challenges to Modern Healthcare",
      subtopics: [
        "Antimicrobial resistance (AMR)",
        "Drug safety and predictive toxicology",
        "Neurodegenerative diseases & lifestyle disorders",
        "Diabetes and metabolic syndromes",
      ],
    },
    {
      title: "Pharmacovigilance & Clinical Trials",
      subtopics: [
        "Adverse drug event monitoring & reporting",
        "Clinical trials design and regulatory compliance",
        "Materiovigilance and ecopharmacovigilance",
        "Lab-on-a-chip diagnostic devices",
      ],
    },
  ],

  feeStructure: [
    { category: "Student (UG / PG)", earlyBird: "INR 1,350", regular: "INR 1,500", apc: "INR 4,050" },
    { category: "Faculty / Academician", earlyBird: "INR 1,600", regular: "INR 1,800", apc: "INR 5,600" },
    { category: "Corporate / Industry Delegate", earlyBird: "INR 7,300", regular: "INR 8,100", apc: "—" },
    { category: "Foreign Delegate", earlyBird: "$225", regular: "$250", apc: "—" },
  ],

  bankDetails: {
    bankName: "Union Bank of India",
    branch: "Knowledge Park-II, Greater Noida",
    accountName: "NIET (Pharmacy Institute)",
    accountNumber: "604302010018620",
    ifscCode: "UBIN0560430",
    note: "Please attach payment screenshot in the registration Google Form and email to submission@niet.co.in",
  },

  advisoryBoard: [
    { name: "Dr. Montu M. Patel", photo: "/images/ics/Dr. Montu M Patel.png", designation: "President, Pharmacy Council of India (PCI), New Delhi, India" },
    { name: "Dr. Archana Mudgal", photo: "/images/ics/Dr. Archana Mudgal.png", designation: "Ex Registrar cum Secretary, PCI, New Delhi, India" },
    { name: "Dr. Rajendra Kakde", photo: "/images/ics/Dr. Rajendra Kakde.png", designation: "Advisor, Approval Bureau & Cell, AICTE, New Delhi, India" },
    { name: "Prof. S. H. Ansari", photo: "/images/ics/Prof. S. H. Ansari.png", designation: "Ex-Dean, Jamia Hamdard, New Delhi, India" },
    { name: "Dr. (Brig) Rakesh Gupta", photo: "/images/ics/Dr. Brig Rakesh Gupta.png", designation: "Director, Government Institute of Medical Sciences (GIMS), Greater Noida, India" },
    { name: "Prof. Shailendra Saraf", photo: "/images/ics/Prof. Shailendra Saraf.png", designation: "Director, NIPER, Ahmedabad, India" },
    { name: "Prof. R. K. Khar", photo: "/images/ics/Prof. R. K. Khar.png", designation: "Director General, B. S. Anangpuria Institute of Pharmacy, Faridabad, India" },
    { name: "Dr. Atul Kumar Nasa", photo: "/images/ics/Dr. Atul Kumar Nasa.png", designation: "Pro Vice Chancellor, SGT University; Ex-Deputy Drugs Controller, Govt. of NCT of Delhi, India" },
    { name: "Prof. Saranjit Singh", photo: "/images/ics/Prof. Saranjit Singh.png", designation: "Ex-Professor & Head, Pharmaceutical Analysis, NIPER Mohali, India" },
    { name: "Dr. Sharad Wakode", photo: "/images/ics/Dr. Sharad Wakode.png", designation: "Professor, DIPSAR, Delhi, India" },
    { name: "Dr. Vidhu Aeri", photo: "/images/ics/Dr. Vidhu Aeri.png", designation: "Professor & Dean, Jamia Hamdard, New Delhi, India" },
    { name: "Dr. Nilendu Sen", photo: "/images/ics/Dr. Nilendu Sen.png", designation: "Pharmaceutical Executive, USA; Ex-VP Topical & Transdermal R&D, Aurobindo Pharma USA, Inc." },
    { name: "Prof. Devender Pathak", photo: "/images/ics/Prof. Devender Pathak.png", designation: "Dean Pharmacy, Dr. APJ Abdul Kalam Technical University (AKTU), Lucknow, India" },
    { name: "Prof. R. N. Gupta", photo: "/images/ics/Prof. R. N. Gupta.png", designation: "Professor, NIPER Kolkata, India" },
    { name: "Dr. Vinod M. Kapse", photo: "/images/ics/Dr. Vinod M. Kapse.png", designation: "Director, NIET, Greater Noida, India" },
    { name: "Mr. Praveen Soneja", photo: "/images/ics/Mr. Praveen Soneja.png", designation: "Director General, NIET, Greater Noida, India" },
    { name: "Prof. (Dr.) Vibhu Sahani", photo: "/images/ics/Prof. Dr. Vibhu Sahani.png", designation: "Central Council Member, Pharmacy Council of India (PCI), India" },
    { name: "Dr. D. R. Somashekar", photo: "/images/ics/Dr. D. R. Somashekar.png", designation: "Dean Admin, NIET, Greater Noida, India" },
  ],

  organizingCommittees: [
    {
      committee: "Patrons & General Chairs",
      members: [
        { role: "Chief Patron", name: "Dr. Sarojini Agarwal", photo: "/images/ics/Dr. Sarojini Agarwal.png", designation: "Chairperson, NIET" },
        { role: "Chief Patron", name: "Dr. O. P. Agarwal", photo: "/images/ics/Dr. O. P. Agarwal.png", designation: "Managing Director, NIET" },
        { role: "Patron", name: "Dr. Neema Agarwal", photo: "/images/ics/Dr. Neema Agarwal.png", designation: "Additional Managing Director, NIET" },
        { role: "Patron", name: "Dr. Raman Batra", photo: "/images/ics/Dr. Raman Batra.png", designation: "Executive Vice President, NIET" },
        { role: "General Chair", name: "Dr. Avijit Mazumder", photo: "/images/ics/Dr. Avijit Mazumder.png", designation: "Director, NIET (Pharmacy Institute)" },
        { role: "Convenor", name: "Dr. Rupa Mazumder", photo: "/images/ics/Dr. Rupa Mazumder.png", designation: "Dean, NIET (Pharmacy Institute)" },
        { role: "Co-Convenor", name: "Dr. Salahuddin", designation: "Professor & HOD, NIET (Pharmacy Institute)" },
        { role: "Co-Convenor", name: "Dr. Rakhi Mishra", designation: "Professor & Dean Student Welfare, NIET (Pharmacy Institute)" },
      ],
    },
    {
      committee: "Organizing & Leadership Chairs",
      members: [
        { role: "Organizing Chair", name: "Dr. Sushma Verma", designation: "Professor, NIET (Pharmacy Institute)" },
        { role: "Organizing Chair", name: "Dr. Saumya Das", designation: "Professor & HOD Pharmacology, NIET (Pharmacy Institute)" },
        { role: "Industrial Chair", name: "Dr. Sushil Prashar", designation: "Dean Placement, NIET" },
        { role: "Industrial Chair", name: "Mr. Ajeet Kunwar Singh", designation: "Head - Corporate Management Centre, NIET" },
        { role: "Finance & Accounting", name: "Mr. Vikas Jain", designation: "Chartered Accountant, NIET" },
        { role: "Finance & Accounting", name: "Mr. Sanjeev Gupta", designation: "Finance Officer, NIET" },
      ],
    },
    {
      committee: "Editorial & Technical Committees",
      members: [
        { role: "Editorial Board", name: "Dr. Anjna Rani", designation: "Associate Professor, NIET (Pharmacy Institute)" },
        { role: "Editorial Board", name: "Mr. Himanshu Singh", designation: "Assistant Professor, NIET (Pharmacy Institute)" },
        { role: "Editorial Board", name: "Mrs. Ayushi Singh", designation: "Assistant Professor, NIET (Pharmacy Institute)" },
        { role: "Technical Review Committee", name: "Dr. Rajnish Kumar", designation: "Associate Professor & Chief Proctor, NIET (Pharmacy Institute)" },
        { role: "Technical Review Committee", name: "Dr. Swarupanjali Padhi", designation: "Associate Professor, NIET (Pharmacy Institute)" },
        { role: "Technical Review Committee", name: "Dr. Mamta Kumari", designation: "Associate Professor, NIET (Pharmacy Institute)" },
      ],
    },
    {
      committee: "Operations & Coordination Committees",
      members: [
        { role: "Registration Committee", name: "Mrs. Chandana Majee", designation: "Associate Professor, NIET (Pharmacy Institute)" },
        { role: "Registration Committee", name: "Mrs. Swati Yadav", designation: "Assistant Professor, NIET (Pharmacy Institute)" },
        { role: "Registration Committee", name: "Mrs. Neha Sharma", designation: "Assistant Professor, NIET (Pharmacy Institute)" },
        { role: "Registration Committee", name: "Ms. Sonia Chauhan", designation: "Assistant Professor, NIET (Pharmacy Institute)" },
        { role: "Registration Committee", name: "Ms. Richa Shakya", designation: "Assistant Professor, NIET (Pharmacy Institute)" },
        { role: "Media Committee", name: "Dr. Sanjay Kumar Yadav", designation: "Assistant Professor, NIET (Pharmacy Institute)" },
        { role: "Media Committee", name: "Ms. Deepika Pathak", designation: "Assistant Professor, NIET (Pharmacy Institute)" },
        { role: "Media Committee", name: "Mr. Ranjeet Kumar Yadav", designation: "Assistant Professor, NIET (Pharmacy Institute)" },
        { role: "Media Committee", name: "Ms. Aparna Gupta", designation: "Assistant Professor, NIET (Pharmacy Institute)" },
        { role: "Hospitality & Welcome", name: "Mrs. Bhavani Pentela", designation: "Assistant Professor, NIET (Pharmacy Institute)" },
        { role: "Hospitality & Welcome", name: "Mrs. Kavita Rana", designation: "Assistant Professor, NIET (Pharmacy Institute)" },
        { role: "Hospitality & Welcome", name: "Mrs. Soumya Mishra", designation: "Assistant Professor, NIET (Pharmacy Institute)" },
        { role: "Hospitality & Welcome", name: "Mrs. Nidhi Sharma", designation: "Assistant Professor, NIET (Pharmacy Institute)" },
        { role: "Hospitality & Welcome", name: "Ms. Shalini Sharma", designation: "Assistant Professor, NIET (Pharmacy Institute)" },
        { role: "Session & Event Coordination", name: "Dr. Monika", designation: "Associate Professor, NIET (Pharmacy Institute)" },
        { role: "Session & Event Coordination", name: "Mrs. Sharad Sharma", designation: "Assistant Professor, NIET (Pharmacy Institute)" },
        { role: "Session & Event Coordination", name: "Mrs. Shruti Varshney", designation: "Assistant Professor, NIET (Pharmacy Institute)" },
        { role: "Session & Event Coordination", name: "Mr. Abhijit Debnath", designation: "Assistant Professor, NIET (Pharmacy Institute)" },
        { role: "Session & Event Coordination", name: "Ms. Sakshi Sharma", designation: "Assistant Professor, NIET (Pharmacy Institute)" },
        { role: "Session & Event Coordination", name: "Ms. Chanchal Sharma", designation: "Assistant Professor, NIET (Pharmacy Institute)" },
      ],
    },
  ],
};

export interface ConferencePartner {
  name: string;
  logo: string;
}

export const conferencePartners: ConferencePartner[] = [
  { name: "Academic Partner 4", logo: "/images/ics/4.svg" },
  { name: "Academic Partner 5", logo: "/images/ics/5.svg" },
  { name: "Government Institute of Medical Sciences (GIMS)", logo: "https://res.cloudinary.com/boss8zib/image/upload/v1793435210/gims.svg" },
  { name: "Lovely Professional University (LPU)", logo: "https://res.cloudinary.com/boss8zib/image/upload/v1793435211/lpu.svg" },
  { name: "Skyline University Nigeria", logo: "https://res.cloudinary.com/boss8zib/image/upload/v1793435217/skyline.svg" },
  { name: "TIPA Association", logo: "https://res.cloudinary.com/boss8zib/image/upload/v1793435217/tipa.svg" },
];

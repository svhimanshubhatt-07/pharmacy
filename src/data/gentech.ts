export interface WorkshopModule {
  title: string;
  description: string;
}

export interface ProgrammeHighlight {
  title: string;
  description: string;
}

export const gentechWorkshopData = {
  title: "GenTech-II Hands-on Workshop",
  theme: "2 Days Collaborative Hands-on Training on SDS-PAGE & Western Blotting Technique",
  dates: "19th & 20th June 2026",
  timings: "10:00 a.m. – 4:30 p.m. (Both Days)",
  collaborator: "Radiant Biolearning",
  organizer: "NIET Pharmacy Institute, Greater Noida",
  venue: "Molecular Biology & Pharmacology Research Laboratories, NIET Pharmacy Institute",
  capacity: "10 Seats Only (Maximum focus and individual attention guaranteed)",
  hospitality: "Stay energized throughout the workshop with included Lunch and High Tea for all participants.",

  overview:
    "An intensive skill-development workshop offering hands-on laboratory experience in advanced protein electrophoresis, immunoblotting techniques, and chemiluminescence detection essential for biopharmaceutical research and molecular diagnostics.",

  eligibility: [
    "B.Sc / B.Pharm / B.Tech (Biotechnology / Life Sciences)",
    "M.Sc / M.Pharm / M.Tech (Biotechnology / Life Sciences)",
    "Ph.D. Research Scholars & Junior Faculty in Pharmacy & Allied Sciences",
  ],

  resourcePerson: {
    name: "Ms. Luna Maheshwari",
    designation: "Professor of Practice, NIET Pharmacy Institute",
  },

  highlights: [
    {
      title: "Expert-Led Training",
      description: "Engage in sessions led by professional biotechnologists with years of practical experience in the field.",
    },
    {
      title: "Hands-on Exposure",
      description: "Direct experience with SDS-PAGE & Gel Electrophoresis equipment and molecular protocols.",
    },
    {
      title: "Practical Troubleshooting",
      description: "Learn to solve common challenges in protein extraction and optimize your scientific results.",
    },
    {
      title: "Protein Detection",
      description: "Deep dive into antibody binding techniques and precise protein visualization strategies.",
    },
  ],

  modules: [
    {
      title: "Module 1: Protein Extraction & Quantification",
      description: "Sample preparation from biological tissues and cells; Bradford and BCA colorimetric assays.",
    },
    {
      title: "Module 2: SDS-PAGE Gel Electrophoresis",
      description: "Polyacrylamide resolving and stacking gel preparation, sample denaturing, and electrophoresis run.",
    },
    {
      title: "Module 3: Electro-transfer & Membrane Blotting",
      description: "Transfer of resolved protein bands onto PVDF/nitrocellulose membranes via semi-dry/wet transfer units.",
    },
    {
      title: "Module 4: Immunodetection & Chemiluminescence",
      description: "Membrane blocking, primary & secondary antibody incubation, substrate detection, and imaging analysis.",
    },
  ],

  registrationFee: {
    individual: "₹1,000 / student",
    groupOffer: "₹850 / student (Minimum group of 2 students)",
    note: "* Limited seats available on first come, first serve basis.",
  },

  bankDetails: {
    beneficiary: "NIET Pharmacy Institute",
    bankName: "Union Bank of India",
    accountNumber: "604302010018620",
    ifscCode: "UBIN0560430",
  },
};

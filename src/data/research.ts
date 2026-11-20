export interface ResearchTableCell {
  text: string;
  link?: string | null;
}

export interface ResearchSection {
  id: string;
  title: string;
  paragraphs: string[];
  tables: ResearchTableCell[][][];
}

export interface ResearchDoc {
  title: string;
  pdfUrl: string;
  category: string;
  description?: string;
}

export const researchOverview = {
  title: "Research and Development Cell",
  description:
    "NIET (Pharmacy Institute) is recognized by Dr. A.P.J. Abdul Kalam Technical University (AKTU) as an authorized Research Centre for conducting doctoral research leading to the award of Ph.D. in Pharmaceutical Sciences. The institute provides financial grants, sophisticated analytical instruments, and dedicated research cubicles to foster high-impact innovations.",
};

export const researchDocuments: ResearchDoc[] = [
  {
    title: "AKTU PhD Research Centre Approval Letter",
    pdfUrl: "/pdf/research/AKTU-APPROVAL.pdf",
    category: "Approvals",
    description: "Official recognition from AKTU Lucknow establishing NIET Pharmacy as an authorized PhD research center.",
  },
  {
    title: "Visvesvaraya Research Promotion Scheme by AKTU",
    pdfUrl: "/pdf/research/VISVESVARAYA-RESEARCH-PROMOTION-SCHEME-2016-17-by-AKTU-SDC -Team.pdf",
    category: "Grants",
  },
  {
    title: "PhD Research Scholars List 2025",
    pdfUrl: "/pdf/research/new/PhD Research Scholars 2025.pdf",
    category: "Doctoral",
    description: "Registry of enrolled doctoral candidates, research supervisors, and thesis topics.",
  },
  {
    title: "Institutional Research Areas & Thrust Domains",
    pdfUrl: "/pdf/research/Research-Area.pdf",
    category: "Thrust Areas",
  },
  {
    title: "Annual Publications List 2024",
    pdfUrl: "/pdf/research/new/2024-PUBLICATION-LIST.pdf",
    category: "Publications",
  },
  {
    title: "Annual Publications List 2023",
    pdfUrl: "/pdf/publications/2023-PUBLICATION-LIST.pdf",
    category: "Publications",
  },
  {
    title: "Annual Publications List 2022",
    pdfUrl: "/pdf/publications/2022-PUBLICATION-LIST.pdf",
    category: "Publications",
  },
  {
    title: "Annual Publications List 2021",
    pdfUrl: "/pdf/publications/2021-PUBLICATION-LIST.pdf",
    category: "Publications",
  },
  {
    title: "Patents Register & Intellectual Property Portfolio",
    pdfUrl: "/pdf/PATENTS.pdf",
    category: "Patents",
    description: "Compendium of granted and published patents by NIET Pharmacy faculty and students.",
  },
  {
    title: "Online MOOCs Video Lectures & E-Content",
    pdfUrl: "/pdf/research/new/MOOCs-LECTURES.pdf",
    category: "E-Learning",
  },
  {
    title: "Consultancy & Sponsored Research Projects",
    pdfUrl: "/pdf/research/new/consultancy-and-sponsored-research.pdf",
    category: "Consultancy",
  },
  {
    title: "Government Funded Research Projects Received",
    pdfUrl: "/pdf/research/new/govt-funded-project-received.pdf",
    category: "Grants",
  },
  {
    title: "SIF Testing Charges & Equipment Rates 2025",
    pdfUrl: "/pdf/sif/SIF Charges 2025.pdf",
    category: "SIF",
    description: "Schedule of testing charges for HPLC, FTIR, and UV-Vis spectrophotometer sample analyses.",
  },
  {
    title: "SIF Facilities & User Guidelines",
    pdfUrl: "/pdf/sif/SIF Facilities.pdf",
    category: "SIF",
  },
];

export const researchSections: ResearchSection[] = [
  {
    "id": "research",
    "title": "Research",
    "paragraphs": [],
    "tables": [
      [
        [
          {
            "text": "Title",
            "link": null
          },
          {
            "text": "Downloads",
            "link": null
          }
        ],
        [
          {
            "text": "VISVESVARAYA RESEARCH PROMOTION SCHEME 2016-17 by AKTU SDC Team",
            "link": null
          },
          {
            "text": "Click Here to Download",
            "link": "/pdf/research/VISVESVARAYA-RESEARCH-PROMOTION-SCHEME-2016-17-by-AKTU-SDC -Team.pdf"
          }
        ],
        [
          {
            "text": "AKTU APPROVAL",
            "link": null
          },
          {
            "text": "Click Here to Download",
            "link": "/pdf/research/AKTU-APPROVAL.pdf"
          }
        ],
        [
          {
            "text": "UNIVERSITY PHD CENTRE",
            "link": null
          },
          {
            "text": "Click Here to Download",
            "link": "/pdf/research/2 University PHD CENTRE.pdf"
          }
        ],
        [
          {
            "text": "APPROVED PHD SUPERVISORS OF University",
            "link": null
          },
          {
            "text": "Click Here to Download",
            "link": "/pdf/research/3 APPROVED PHD SUPERVISORS OF University.pdf"
          }
        ],
        [
          {
            "text": "AKTU PHD RESEARCH CENTRE",
            "link": null
          },
          {
            "text": "Click Here to Download",
            "link": "/pdf/research/APPROVAL-FOR-RESEARCH-CENTRE.pdf"
          }
        ],
        [
          {
            "text": "PhD Research Scholars",
            "link": null
          },
          {
            "text": "Click Here to Download",
            "link": "/pdf/research/new/PhD Research Scholars 2025.pdf"
          }
        ],
        [
          {
            "text": "Research Area",
            "link": null
          },
          {
            "text": "Click Here to Download",
            "link": "/pdf/research/Research-Area.pdf"
          }
        ]
      ]
    ]
  },
  {
    "id": "publication",
    "title": "Publications",
    "paragraphs": [],
    "tables": [
      [
        [
          {
            "text": "Years",
            "link": null
          },
          {
            "text": "Downloads",
            "link": null
          }
        ],
        [
          {
            "text": "2026",
            "link": null
          },
          {
            "text": "Click Here to Download",
            "link": "/pdf/publications/2026 Publication.pdf"
          }
        ],
        [
          {
            "text": "2025",
            "link": null
          },
          {
            "text": "Click Here to Download",
            "link": "/pdf/publications/2025 Publication-2.pdf"
          }
        ],
        [
          {
            "text": "2024",
            "link": null
          },
          {
            "text": "Click Here to Download",
            "link": "/pdf/publications/2024 PUBLICATION.pdf"
          }
        ],
        [
          {
            "text": "2023",
            "link": null
          },
          {
            "text": "Click Here to Download",
            "link": "/pdf/publications/2023-PUBLICATION-LIST.pdf"
          }
        ],
        [
          {
            "text": "2022",
            "link": null
          },
          {
            "text": "Click Here to Download",
            "link": "/pdf/publications/2022-PUBLICATION-LIST.pdf"
          }
        ],
        [
          {
            "text": "2021",
            "link": null
          },
          {
            "text": "Click Here to Download",
            "link": "/pdf/publications/2021-PUBLICATION-LIST.pdf"
          }
        ],
        [
          {
            "text": "2020",
            "link": null
          },
          {
            "text": "Publication",
            "link": "/pdf/publications/2020 PUBLICATION.pdf"
          },
          {
            "text": "Research",
            "link": "/pdf/publications/2020.pdf"
          }
        ],
        [
          {
            "text": "2019",
            "link": null
          },
          {
            "text": "Click Here to Download",
            "link": "/pdf/publications/2019.pdf"
          }
        ],
        [
          {
            "text": "2018",
            "link": null
          },
          {
            "text": "Click Here to Download",
            "link": "/pdf/publications/2018.pdf"
          }
        ],
        [
          {
            "text": "2017",
            "link": null
          },
          {
            "text": "Click Here to Download",
            "link": "/pdf/publications/2017.pdf"
          }
        ],
        [
          {
            "text": "2016",
            "link": null
          },
          {
            "text": "Click Here to Download",
            "link": "/pdf/publications/2016.pdf"
          }
        ],
        [
          {
            "text": "2015",
            "link": null
          },
          {
            "text": "Click Here to Download",
            "link": "/pdf/publications/2015.pdf"
          }
        ],
        [
          {
            "text": "2014",
            "link": null
          },
          {
            "text": "Click Here to Download",
            "link": "/pdf/publications/2014.pdf"
          }
        ],
        [
          {
            "text": "2013",
            "link": null
          },
          {
            "text": "Click Here to Download",
            "link": "/pdf/publications/2013.pdf"
          }
        ],
        [
          {
            "text": "2012",
            "link": null
          },
          {
            "text": "Click Here to Download",
            "link": "/pdf/publications/2012.pdf"
          }
        ],
        [
          {
            "text": "2011",
            "link": null
          },
          {
            "text": "Click Here to Download",
            "link": "/pdf/publications/2011.pdf"
          }
        ],
        [
          {
            "text": "2010",
            "link": null
          },
          {
            "text": "Click Here to Download",
            "link": "/pdf/publications/2010.pdf"
          }
        ]
      ]
    ]
  },
  {
    "id": "patents",
    "title": "Patents",
    "paragraphs": [],
    "tables": [
      [
        [
          {
            "text": "Title",
            "link": null
          },
          {
            "text": "Downloads",
            "link": null
          }
        ],
        [
          {
            "text": "PATENTS",
            "link": null
          },
          {
            "text": "Click Here to Download",
            "link": "/pdf/research/new/2025PATENTS.pdf"
          }
        ]
      ]
    ]
  },
  {
    "id": "moocs",
    "title": "Online MOOCs Lectures",
    "paragraphs": [],
    "tables": [
      [
        [
          {
            "text": "Title",
            "link": null
          },
          {
            "text": "Downloads",
            "link": null
          }
        ],
        [
          {
            "text": "Moocs Lectures",
            "link": null
          },
          {
            "text": "Click Here to Download",
            "link": "/pdf/research/new/MOOCs-LECTURES.pdf"
          }
        ]
      ]
    ]
  },
  {
    "id": "consultancy",
    "title": "Consultancy & Sponsored Research",
    "paragraphs": [],
    "tables": [
      [
        [
          {
            "text": "Title",
            "link": null
          },
          {
            "text": "Downloads",
            "link": null
          }
        ],
        [
          {
            "text": "CONSULTANCY AND SPONSORED RESEARCH",
            "link": null
          },
          {
            "text": "Click Here to Download",
            "link": "/pdf/research/CONSULTANCY-AND-SPONSORED-RESEARCH.pdf"
          },
          {
            "text": "Click Here to Download",
            "link": "/pdf/research/new/consultancy-and-sponsored-research.pdf"
          }
        ]
      ]
    ]
  },
  {
    "id": "govt",
    "title": "Govt. Funded Projects Received",
    "paragraphs": [],
    "tables": [
      [
        [
          {
            "text": "Title",
            "link": null
          },
          {
            "text": "Downloads",
            "link": null
          }
        ],
        [
          {
            "text": "GOVT FUNDED PROJECTS RECEIVED",
            "link": null
          },
          {
            "text": "Click Here to Download",
            "link": "/pdf/research/GOVT-FUNDED-PROJECTS-RECEIVED.pdf"
          },
          {
            "text": "Click Here to Download",
            "link": "/pdf/research/new/govt-funded-project-received.pdf"
          }
        ]
      ]
    ]
  },
  {
    "id": "govtseminar",
    "title": "Govt. Funded Seminars",
    "paragraphs": [
      "Overview of the Programme :",
      "In the Inaugural Session on Day 1, 9th June 2022, the program was inaugurated with lighting of the lamp, SaraswatiVandana, followed by Key Note Speeches by the Chief Guests of the session, Prof. (Dr.) Rajendra B. Kakde, Advisor I, AICTE, New Delhi, Dr. Atul Nasa, Deputy Drug Controller and Head of Office, Controlling & Licensing Authority, Drugs Control Department, New Delhi,and Welcome Addresses by the hon’ble Executive Vice President of NIET, Shri Raman Batra, and Dr. Avijit Mazumder, Director, NIET Pharmacy Institute. The Inaugural Session was concluded by the Vote of Thanks, followed by the National Anthem and then a short interval for the Morning Breakfast and Tea.",
      "The Technical Session - I was enlighted by the expert lecture by Dr. Bibhu Prasad Panda, Associate Professor, Department of Pharmacy, Jamia Hamdard, New Delhi, who delivered a very informative and brilliant speech on “Development of Drug-Resistant Cells: Its Causes and Solutions”.In his lecture Dr. Panda described the root causes of developing drug resistance, highlighting the development and spreading of drug resistance at the molecular and genetic levels, in bacterial, viral as well as human cells. He also emphasized on the effect of drug resistance on the dreadful spreading of the tumor cells and development of drug resistant Covid-19 mutants. He concluded his speech by explaining the continuing research on drug resistance, genetic mutation, and search for natural bioactives and novel synthetic compounds, active against the drug resistant strains, as the sole solution to overcome the acute problem of drug resistance.",
      "In the Technical Session - II, Dr. Vivekanandan Kalaiselvan, Senior Principal Scientific Officer, Indian Pharmacopoeia Commission, Ghaziabad, discussed on drug resistance and roles of the drug regulatory bodies associated with drug distribution,pharmacovigilance. He emphasized in his lecture, the adverse manifestations of the misuse of drugs, self-medication, over the counter medications, improper disposal mechanisms, and the role of the pharmacists to control the same.",
      "The Technical Session - II was followed bythe Oral Presentation Session, where 6 participantspresented their topics through power point presentations, and Dr. Sushma Verma, Professor, NIET Pharmacy Institute,Dr. Salahuddin, Associate Professor, NIET Pharmacy Institute, and Dr. Rashmi Mishra, HOD,Dept. of Biotechnology, NIET, were the Judges.",
      "The Day 1 of the 3 days’ long seminar ended with tea and evening snacks. All the events of Day 1 were anchored systematically by Dr. Sweta Bawari, Associate Professor, and Mr. Abhijit Debnath, Asst. Professor of the NIET Pharmacy Institute, Greater Noida.",
      "The Day 2 events started with Morning Tea and Breakfast at 09:30 am on 10th June 2022, followed by the expert lecture of Technical session - IIIby Dr. Avijit Mazumder, Director, NIET Pharmacy Institute, and Convener of the SERB sponsored 3 days’ seminar, who elaborated very clearly and simply in his lecture entitled, \"Antibiotic Resistance: Causes and Challenges for Digital India\", the probable causes and mechanisms of antibiotic resistance, significance of the rational use of antibiotics, effects of expired and unused drugs on the atmosphere, the concept of antibiograms, and modern approaches to control drug resistance.",
      "The Technical session - IV onthe Day 2 was glorified bythe presence of a legendary figure from the pharma software domain, Dr. Gajendra Pal Singh Raghava, Professor, Indraprastha Institute of Information Technology (IIIT), New Delhi, with his expert lecture entitled, “Computational Resources for Managing Drug Resistance”, where he enlightened the audience with his vast knowledge and experience on the emerging and novel concepts on protein / peptide based therapies, vaccines and immunotherapy, phage based therapy, the comfort and significance of using Open Source Software,and how to use various web services for designing therapeutic molecules in the healthcare system. Dr. Raghava’s speech had really driven our thought process in newer directions and helped us to think on the use of various computational approaches in overcoming the problems associated with drug resistance and drug delivery.",
      "The Lunch Break after the Technical session IV of Day 2 was followed by the Technical Session – V, where an eminent researcher and Professor, Dr. Reeta K., from the Department of Pharmacology, All India Institute of Medical Sciences (AIIMS), New Delhi, spoke on the topic entitled, “Antimicrobial Resistance: Challenges and Approaches”. In her expert lecture, Dr. Reeta highlighted the various aspects of antimicrobial stewardnessprogrammes which are under consideration by the Government to control the enigma of drug resistance. She also recommended the factors to be considered by the physicians while prescribing antibiotics to the patients.",
      "The Technical Session – V was followed by the Poster Presentation Session, where 8 out of the 19 short listed candidates presented their e-posters to explain their topics.",
      "The various events of Day 2 were anchored systematically by Mrs. Anjali Bipin Mishra, Asst. Professor, and Ms Pratishttha Bharadwaj, Asst. Professor of the NIET Pharmacy Institute, Greater Noida.",
      "The Day 3 of the 3 days’ seminar began with the Morning Breakfast and Tea Session ,followed by the Technical Session – VI with the expert lecture by Dr. Manju Sharma, Professor, Department of Pharmacy, JamiaHamdard, New Delhi, on the topic, “Pharmacovigilance: Current approach to Control Drug Resistance”. Dr. Sharma in her very informative speech explained the roles of pharmacovigilance to control the ever increasing trend of drug resistance and the various approaches to overcome the menace.",
      "The lecture of Dr. Manju Sharma was followed by the Technical Session – VII, with the 7th lecture of the seminar by Dr. Urmi Bajpai, Associate Professor, ANDC College, Delhi University, New Delhi, on “Antimicrobial Resistance: A Silent Pandemic” , where Dr. Bajpai explained very nicely and elaborately the various causes of antimicrobial resistance and focused on the research on bacteriophages to use them as antimicrobial agents to develop bacteriophages-based therapy in future.",
      "The Technical Session – VII of the seminar was followed by the remaining part of the e-poster presentations and thereafter the lunch break.",
      "All the events of the Day 3 were anchored systematically by Ms. Deepika Pathak, and Mr. Abhijit Debnath Asst. Professors of the NIET Pharmacy Institute, Greater Noida.",
      "Altogether, there was spellbound participation of all the participants, as well as the speakers throughout the 3 days’ long DST-SERB sponsored seminar. All the participants have enjoyed the lectures and learnt many new topics and technologies, which they may apply in their teaching-learning processes to make those interesting and attractive and hope these will result in an extreme benefit for their students and colleagues."
    ],
    "tables": []
  },
  {
    "id": "magazine",
    "title": "Institute Magazine",
    "paragraphs": [],
    "tables": [
      [
        [
          {
            "text": "Title",
            "link": null
          },
          {
            "text": "Downloads",
            "link": null
          }
        ],
        [
          {
            "text": "Pharmainnovation Vol-9 Issue 1",
            "link": null
          },
          {
            "text": "Click Here to Download",
            "link": "/pdf/pharma-innovation/Pharmainnovation Volume 9 Issue 1.pdf"
          }
        ],
        [
          {
            "text": "Pharmainnovation Vol-8 Issue 2",
            "link": null
          },
          {
            "text": "Click Here to Download",
            "link": "/pdf/pharma-innovation/Pharmainnovation Volume 8 Issue 2.pdf"
          }
        ],
        [
          {
            "text": "Pharmainnovation Vol-8 Issue 1",
            "link": null
          },
          {
            "text": "Click Here to Download",
            "link": "/pdf/pharma-innovation/Pharmainnovation-VOL-8-Issue-1.pdf"
          }
        ],
        [
          {
            "text": "Pharmainnovation Vol-7 Issue 2",
            "link": null
          },
          {
            "text": "Click Here to Download",
            "link": "/pdf/pharma-innovation/Pharmainnovation-vol-7-issue-2.pdf"
          }
        ],
        [
          {
            "text": "Pharmainnovation Vol-7 Issue 1",
            "link": null
          },
          {
            "text": "Click Here to Download",
            "link": "/pdf/pharma-innovation/Pharmainnovation-vol-7-issue-1.pdf"
          }
        ],
        [
          {
            "text": "Pharmainnovation Vol-6 Issue 2",
            "link": null
          },
          {
            "text": "Click Here to Download",
            "link": "/pdf/pharma-innovation/Pharmainnovation-vol-6-issue-2.pdf"
          }
        ],
        [
          {
            "text": "Pharmainnovation Vol-6 Issue 1",
            "link": null
          },
          {
            "text": "Click Here to Download",
            "link": "/pdf/pharma-innovation/Pharmainnovation-Vol-6-issue-1.pdf"
          }
        ]
      ]
    ]
  },
  {
    "id": "Newsletter",
    "title": "Institute Newsletter",
    "paragraphs": [],
    "tables": [
      [
        [
          {
            "text": "Title",
            "link": null
          },
          {
            "text": "Downloads",
            "link": null
          }
        ],
        [
          {
            "text": "Pharma Chronicles June 2025",
            "link": null
          },
          {
            "text": "Click Here to Download",
            "link": "/pdf/newsletter/Pharma-chronicles-June-2025.pdf"
          }
        ],
        [
          {
            "text": "Pharma Chronicles January 2025",
            "link": null
          },
          {
            "text": "Click Here to Download",
            "link": "/pdf/newsletter/Pharma-chronicles-jan-2025.pdf"
          }
        ],
        [
          {
            "text": "Pharma Chronicles June 2024",
            "link": null
          },
          {
            "text": "Click Here to Download",
            "link": "/pdf/newsletter/Pharma-Chronicle-June-2024.pdf"
          }
        ],
        [
          {
            "text": "Pharma Chronicles January 2024",
            "link": null
          },
          {
            "text": "Click Here to Download",
            "link": "/pdf/newsletter/Pharma-Chronicles-January-2024.pdf"
          }
        ],
        [
          {
            "text": "Pharma Chronicles June 2023",
            "link": null
          },
          {
            "text": "Click Here to Download",
            "link": "/pdf/newsletter/Pharma-Chronicles-June-2023.pdf"
          }
        ],
        [
          {
            "text": "Pharma Chronicles January 2023",
            "link": null
          },
          {
            "text": "Click Here to Download",
            "link": "/pdf/newsletter/Pharma-Chronicles-January-2023.pdf"
          }
        ],
        [
          {
            "text": "Pharma Chronicles June 2022",
            "link": null
          },
          {
            "text": "Click Here to Download",
            "link": "/pdf/newsletter/Pharma-Chronicles-June-2022.pdf"
          }
        ]
      ]
    ]
  },
  {
    "id": "SIF-facilities",
    "title": "SIF Facilities",
    "paragraphs": [],
    "tables": [
      [
        [
          {
            "text": "Title",
            "link": null
          },
          {
            "text": "Downloads",
            "link": null
          }
        ],
        [
          {
            "text": "SIF Testing Charges & Rates",
            "link": null
          },
          {
            "text": "Click Here to Download",
            "link": "/pdf/sif/SIF Charges 2025.pdf"
          }
        ],
        [
          {
            "text": "SIF Facilities & User Guidelines",
            "link": null
          },
          {
            "text": "Click Here to Download",
            "link": "/pdf/sif/SIF Facilities.pdf"
          }
        ]
      ]
    ]
  }
];

export interface SeminarGalleryData {
  featured: { src: string; caption: string }[];
  day1: string[];
  day2: string[];
  day3: string[];
}

export const seminarGalleryData: SeminarGalleryData = {
  featured: [
    { src: "/images/seminar/seminar-first/13.jpg", caption: "Inaugurated by Dr Atul Nasa, Dy Drug Controller" },
    { src: "/images/seminar/seminar-third/12.jpg", caption: "Segment of participants of Seminar" },
    { src: "/images/seminar/seminar-second/8.jpg", caption: "Welcome of Speakers" },
    { src: "/images/seminar/seminar-second/5.jpg", caption: "Felicitation of Dr Reeta of AIIMS , New Delhi" },
    { src: "/images/seminar/seminar-first/14.jpg", caption: "Valedictory Programme on 11th June 2022" },
    { src: "/images/seminar/seminar-third/17.jpg", caption: "Felicitation of Dr S.H. Ansari, Chief Guest" },
  ],
  day1: Array.from({ length: 17 }, (_, i) => `/images/seminar/seminar-first/${i + 1}.jpg`),
  day2: Array.from({ length: 11 }, (_, i) => `/images/seminar/seminar-second/${i + 1}.jpg`),
  day3: Array.from({ length: 34 }, (_, i) => `/images/seminar/seminar-third/${i + 1}.jpg`),
};

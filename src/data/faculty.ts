export interface FacultyPublicationRowCell {
  text: string;
  link?: string | null;
}

export interface FacultyMember {
  id: string;
  labelId?: string;
  name: string;
  designation: string;
  qualification: string;
  department: string;
  photo?: string;
  googleScholar?: string;
  specialization?: string;
  email?: string;
  academicExperience?: string;
  industryExperience?: string;
  experience?: string;
  guided?: string;
  researchInterest?: string;
  contactNo?: string;
  website?: string;
  fdpAttended?: string;
  publicationsCount?: string;
  publicationsList?: string[];
  awards?: string[];
  grants?: string[];
  affiliations?: string[];
  reviewer?: string[];
  moocs?: string[];
  gianCourses?: string[];
  otherCourses?: string[];
  seminarsAttended?: string[];
  publicationTable?: FacultyPublicationRowCell[][];
}

export const leadershipFaculty = {
  director: {
    name: "Dr. Avijit Mazumder",
    designation: "Professor & Director",
    qualification: "B.Pharm, M.Pharm, MBA, Ph.D.",
    experience: "Teaching career since Institute of Pharmacy & Technology Salipur, BIT Mesra, NMIMS Mumbai, and NIET",
    googleScholar: "https://scholar.google.co.in/citations?user=...&hl=en",
    photo: "/faculty/avijit.jpg",
    bio: "Dr. Avijit Mazumder is working as Professor and Director in Noida Institute of Engineering and Technology (Pharmacy Institute) since October 2009.Under his guidance, this institute has become the only institute under the affiliating Dr. APJ Abdul Kalam Technical University Lucknow to be ranked amongst top Pharmacy Institutes in NIRF seven times in a row .NIET Pharmacy Institute has also been ranked 37th as per NIRF 2024 as ranked by Ministry of HRD, Govt of India. The undergraduate course of the institute is NBA Accredited since 2017 to 2027 under his leadership. Dr Mazumder had completed his graduation and post graduation from Department of Pharmaceutical Technology, Jadavpur University and then he completed his MBA from University of Lucknow. He obtained his PhD (Pharmacy) Degree from Jadavpur University, Kolkata. He began his teaching career as Lecturer in Institute of Pharmacy and Technology, Salipur, Cuttack. Later he was associated with Birla Institute of Technology (BIT), Mesra, Ranchi since 1999 till his joining Narsee Monjee Institute of Management Studies (NMIMS) Mumbai as Professor and Head in Department of Clinical Pharmacy in November, 2007. He was the Head Division of Clinical Pharmacy, Chairperson of MSc (Applied Pharmaceutical Sciences) and M.Pharm (Part time Programme) of NMIMS University. He has filed thirty six patents and had received various RPS and MODROB Grants from AICTE, New Delhi, SERB and AKTU. Twelve students have been awarded PhD. (Pharmacy) under his direct supervision from government Universities. Dr Mazumder had successfully guided one hundred thirty four post graduate students. Currently ten students are already pursuing their PhD programme under his guidance in the field of Pharmacology, Natural products and Management. He had a total of more than three hundred fifty national and international publications to his credit. Incidentally he had presented a number of research papers in national and international conferences/ symposiums. He had contributed ten book chapters and is the author of three books of repute. Dr Mazumder is in the editorial board of seven international and one national journals. He is also associated with a number of universities like Jadavpur University, Utkal University, Rajeev Gandhi Technical University (Bhopal), BIT Ranchi, Dibrugarh University in various capacities.",
  },
  dean: {
    name: "Prof. (Dr.) Rupa Mazumder",
    designation: "Professor, Dean and HOD (Pharmaceutics)",
    qualification: "B.Pharm, M.Pharm, Ph.D.",
    experience: "Total teaching and research experience of 29 years",
    googleScholar: "https://scholar.google.co.in/citations?user=...&hl=en",
    photo: "/faculty/rupa.jpg",
    bio: "Prof. (Dr.) Rupa Mazumder has been working as a Professor and Dean at Noida Institute of Engineering and Technology (Pharmacy Institute), Greater Noida, since October 2009. She has a total teaching and research experience of 29 years. Prof. Mazumder had completed her graduation (B. Pharm), post-graduation (M. Pharm), and Ph.D. (Pharmacy) degree from Jadavpur University, Kolkata, West Bengal. She has served various reputed academic organizations in her long tenure of professional career, like the Institute of Pharmacy and Technology (IPT), Salipur, Cuttack, Birla Institute of Technology (BIT), Mesra, Ranchi, School of Pharmacy & Technology Management (SPTM), NMiMS University, Mumbai, and finally, the NIET Pharmacy Institute, Greater Noida, Uttar Pradesh.\n\nDr. Mazumder has received 8 grants from AICTE, New Delhi, and AKTU, Lucknow, with a total fund value of approx. 43.0 lacs. She has filed 21 patents, out of which 9 have been granted and 12 have been published. She has guided 24 Ph.D. scholars in the fields of Pharmaceutics, Anticancer Research, Microbiology, and Natural Products, in reputed Government Universities, like Uttarakhand Technical University (UTU), Dehradun, and Dr. APJ Abdul Kalam Technical University (AKTU), Lucknow. Out of them, 10 have already been awarded their Ph.D. degree, and 14 are pursuing. She has guided more than 200 postgraduate students, and several postgraduate students are still pursuing their research projects under her direct supervision.\n\nDr. Mazumder has a total of 248 national and international journal publications, 108 national and international conference presentations, 03 full book authorships, and 12 contributions in book chapters to her credit. Her major research work is on formulations related to novel drug delivery systems with the view of the inclusion of new drug molecules obtained from natural sources and drug molecules and their derivatives synthesized chemically.\n\nProf. Mazumder is the founding member of the Jharkhand State Pharmacy Tribunal and is presently a life member of several professional bodies like the Indian Chemical Society, Bioinformatics Institute of India, Indian Pharmaceutical Association (IPA), Association of Pharmaceutical Teachers of India (APTI), and Institute of Chemists.\n\nProf. Mazumder is associated with several reputed Universities as a UG/PG and Ph.D. thesis evaluator, like Jadavpur University, Kolkata, West Bengal, Dibrugarh University, Assam, Dr. A. P. J. Abdul Kalam Technical University (AKTU), Lucknow, Uttar Pradesh, Delhi Pharmaceutical Sciences & Research University (DPSRU), New Delhi, Jamia Hamdard, Hamdard Nagar, New Delhi, Maulana Abul Kalam Azad University of Technology, Kolkata, West Bengal, Teerthanker Mahaveer University, Moradabad, Uttar Pradesh, and others. She has received several awards for her academic and research achievements from various professional bodies in her lifetime.",
  },
};

export const facultyList: FacultyMember[] = [
  {
    "id": "f-30",
    "labelId": "30",
    "name": "DR AVIJIT MAZUMDER",
    "designation": "Professor & Director",
    "qualification": "M.Pharm, MBA ,PhD",
    "photo": "/faculty/avijit.jpg",
    "googleScholar": "https://shorturl.at/rO0XI",
    "specialization": "Pharmacology",
    "email": "avijitmazum@yahoo.com",
    "academicExperience": "28 Years",
    "industryExperience": "",
    "experience": "Academic: 28 Years",
    "guided": "",
    "researchInterest": "Pharmacology, Microbiology and Marketing Management",
    "contactNo": "",
    "website": "",
    "fdpAttended": "",
    "publicationsCount": "",
    "publicationsList": [],
    "awards": [
      "Awarded Best Paper In Indian Pharmaceutical Congress, 2009",
      "Biography cited in Who's Who in Medicine and Healthcare 2006-07 (3rd Edn)"
    ],
    "grants": [
      "Awarded AICTE grant of Rs 8 Lacs under MODROBS Scheme",
      "Awarded AICTE grant of Rs 9.84 Lacs under RPS Scheme"
    ],
    "affiliations": [
      "Expert Panel Member of AICTE & PCI",
      "Acting as \"Advisor of Research Projects\" submitted to TWAS (Academy of Science for Developing World) and Italian Government.",
      "Board of Studies Member of various academic institutions",
      "Life Member of Indian Hospital Pharmacy Association",
      "Life Member of Association of Pharmaceutical Teachers of India.",
      "Life member of Indian Pharmaceutical Association",
      "Life member of Bioinformatics Society of India.",
      "Life Member of Institute of Chemists",
      "Member of Indian Chemical Society."
    ],
    "reviewer": [
      "Member of evaluator board of scientific papers of various conferences and journals",
      "Evaluator of scientific papers of 60th and 61st Indian Pharmaceutical Congress",
      "Pharmaceutical Biology (International).",
      "Phytotherapy Research (International).",
      "Advances in Pharmacology & Toxicology (International)",
      "Ethiopian Journal of Pharmaceutical Sciences (International).",
      "South African J of Plant Sciences (International).",
      "J of Pharmacognosy and Phytotherapy (International).",
      "Journal of Pharmacognosy and Phytotherapy (International)",
      "Journal of Essential Oil Bearing Plants (JEOBP)",
      "International Journal for Biotechnology and Molecular Biology Research(International)",
      "Indian J of Experimental Biology : NISCAIR Journals (CSIR Journals: National)",
      "Journal of Indian Chemical Society (National)",
      "Journal of Medicinal Plant Research",
      "International Journal for Biotechnology and Molecular Biology Research",
      "Research Journal of Pharmaceutical, Biological and Chemical Sciences"
    ],
    "moocs": [],
    "gianCourses": [],
    "otherCourses": [],
    "seminarsAttended": [],
    "publicationTable": [
      [
        {
          "text": "Patents Published",
          "link": null
        },
        {
          "text": "Journal Publications",
          "link": null
        },
        {
          "text": "Conference Presentations",
          "link": null
        },
        {
          "text": "Books",
          "link": null
        },
        {
          "text": "Publications Pdf",
          "link": null
        }
      ],
      [
        {
          "text": "04",
          "link": null
        },
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        },
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        },
        {
          "text": "09",
          "link": null
        },
        {
          "text": "Pdf",
          "link": "http://www.niet.co.in/pharmacy/pdf/DR-AVIJIT--MAZUMDER-PUBLICATIONS.pdf"
        }
      ],
      [
        {
          "text": "117",
          "link": null
        },
        {
          "text": "39",
          "link": null
        },
        {
          "text": "25",
          "link": null
        },
        {
          "text": "171",
          "link": null
        }
      ]
    ],
    "department": "Pharmacology"
  },
  {
    "id": "f-2",
    "labelId": "2",
    "name": "Dr. Rupa Mazumder",
    "designation": "Professor, Dean and HOD (Pharmaceutics) qualification:",
    "qualification": "M. Pharm, PhD",
    "photo": "/faculty/rupa.jpg",
    "googleScholar": "https://shorturl.at/gnebr",
    "specialization": "Pharmaceutics",
    "email": "rupa_mazumder@rediffmail.com",
    "academicExperience": "28 Years",
    "industryExperience": "",
    "experience": "Academic: 28 Years",
    "guided": "",
    "researchInterest": "Novel Drug Delivery Systems, Herbal Drugs, Microbiology",
    "contactNo": "",
    "website": "",
    "fdpAttended": "",
    "publicationsCount": "",
    "publicationsList": [],
    "awards": [
      "Best paper award in Professional Pharmacy, GMP & TQM Poster session in 55th Indian Pharmaceutical Congress, Chennai, 19-21 December, 2003.",
      "National Scholarship Scheme 1987-88.",
      "Merit Certificate award (Position 1st) in Science Aptitude & Talent Search Test arranged by All India Science Teachers’ Association in 1986."
    ],
    "grants": [
      "AICTE Sponsored Project on RPS Scheme of 9.88 Lacs, 2007."
    ],
    "affiliations": [
      "Inspector of Pharmacy Council of India.",
      "Institute of Chemists.",
      "Indian Chemical Society",
      "Bioinformatics Institute of India.",
      "Indian Pharmaceutical Association(IPA)",
      "Association of Pharmaceutical Teachers of India (APTI)."
    ],
    "reviewer": [
      "Various referred, non-referred and open access online journals."
    ],
    "moocs": [],
    "gianCourses": [],
    "otherCourses": [],
    "seminarsAttended": [],
    "publicationTable": [
      [
        {
          "text": "Patents Published",
          "link": null
        },
        {
          "text": "Journal Publications",
          "link": null
        },
        {
          "text": "Conference Presentations",
          "link": null
        },
        {
          "text": "Books",
          "link": null
        },
        {
          "text": "Publications Pdf",
          "link": null
        }
      ],
      [
        {
          "text": "01",
          "link": null
        },
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        },
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        },
        {
          "text": "09",
          "link": null
        },
        {
          "text": "Pdf",
          "link": "http://www.niet.co.in/pharmacy/pdf/DR--RUPA-MAZUMDER-PUBLICATIONS.pdf"
        }
      ],
      [
        {
          "text": "83",
          "link": null
        },
        {
          "text": "31",
          "link": null
        },
        {
          "text": "13",
          "link": null
        },
        {
          "text": "94",
          "link": null
        }
      ]
    ],
    "department": "Pharmaceutics"
  },
  {
    "id": "f-11",
    "labelId": "11",
    "name": "Dr. Salahuddin",
    "designation": "Professor & HOD (PHARMACHEMISTRY)",
    "qualification": "M.Pharm ,PhD",
    "photo": "/faculty/Dr. Salahuddin-Pic.jpg",
    "googleScholar": "https://scholar.google.co.in/citations?user=OYZNRFAAAAAJ&hl=en",
    "specialization": "Pharmaceutical Chemistry",
    "email": "sallu_05@yahoo.co.in",
    "academicExperience": "14 years",
    "industryExperience": "",
    "experience": "Academic: 14 years",
    "guided": "",
    "researchInterest": "Pharmaceutical Chemistry",
    "contactNo": "",
    "website": "",
    "fdpAttended": "",
    "publicationsCount": "",
    "publicationsList": [],
    "awards": [],
    "grants": [],
    "affiliations": [],
    "reviewer": [
      ". : 04 (International)"
    ],
    "moocs": [],
    "gianCourses": [],
    "otherCourses": [],
    "seminarsAttended": [],
    "publicationTable": [
      [
        {
          "text": "Journal Publications",
          "link": null
        },
        {
          "text": "Conference Presentations",
          "link": null
        }
      ],
      [
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        },
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        }
      ],
      [
        {
          "text": "2",
          "link": null
        },
        {
          "text": "NIL",
          "link": null
        },
        {
          "text": "NIL",
          "link": null
        },
        {
          "text": "08",
          "link": null
        }
      ]
    ],
    "department": "Pharmaceutical Chemistry"
  },
  {
    "id": "f-18",
    "labelId": "18",
    "name": "Dr. Sushma Verma",
    "designation": "Professor",
    "qualification": "M.Pharm, PhD",
    "photo": "/faculty/sushma.jpg",
    "googleScholar": "https://scholar.google.co.in/citations?hl=en&view_op=list_works&gmla=ANZ5fUPC4TXMBUIbQu2odpBf72VBe_0XOe_1vAgZ0FPOdF0N1QrBx04r1rN3m76lzIZbr2T_6RcIn8ogivl0ZA&user=hFkIrV0AAAAJ",
    "specialization": "Pharmaceutics",
    "email": "sushmaverma76@yahoo.com",
    "academicExperience": "6.4 years",
    "industryExperience": "3 yrs",
    "experience": "Academic: 6.4 years, Industry: 3 yrs",
    "guided": "",
    "researchInterest": "Immediate drug release",
    "contactNo": "",
    "website": "",
    "fdpAttended": "",
    "publicationsCount": "",
    "publicationsList": [],
    "awards": [
      "Gate qualified"
    ],
    "grants": [],
    "affiliations": [
      "Indian Pharmacy Graduate Association"
    ],
    "reviewer": [
      "3 (International)"
    ],
    "moocs": [],
    "gianCourses": [],
    "otherCourses": [],
    "seminarsAttended": [],
    "publicationTable": [
      [
        {
          "text": "Journal Publications",
          "link": null
        },
        {
          "text": "Conference Presentations",
          "link": null
        }
      ],
      [
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        },
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        }
      ],
      [
        {
          "text": "1",
          "link": null
        },
        {
          "text": "NIL",
          "link": null
        },
        {
          "text": "NIL",
          "link": null
        },
        {
          "text": "3",
          "link": null
        }
      ]
    ],
    "department": "Pharmaceutics"
  },
  {
    "id": "f-14",
    "labelId": "14",
    "name": "DR. Saumya Das",
    "designation": "Professor & HOD (PHARMACOLOGY)",
    "qualification": "M.PHARM,PhD",
    "photo": "/faculty/saumya.jpg",
    "googleScholar": "https://scholar.google.com/citations?hl=en&user=mPKpwroAAAAJ",
    "specialization": "PHARMACOLOGY",
    "email": "awasthi.saumya22@gmail.com",
    "academicExperience": "14",
    "industryExperience": "",
    "experience": "Academic: 14",
    "guided": "",
    "researchInterest": "Anticancer, Ulcer and Neuropharmacological Studies",
    "contactNo": "",
    "website": "",
    "fdpAttended": "",
    "publicationsCount": "",
    "publicationsList": [],
    "awards": [],
    "grants": [],
    "affiliations": [
      "Indian Pharmacological Society, Indian Pharmacy Graduate Association."
    ],
    "reviewer": [
      "Natural product Radiance, Pharmacognosy Magazine., Ind J Exp Biol"
    ],
    "moocs": [],
    "gianCourses": [],
    "otherCourses": [],
    "seminarsAttended": [],
    "publicationTable": [
      [
        {
          "text": "Journal Publications",
          "link": null
        },
        {
          "text": "Conference Presentations",
          "link": null
        }
      ],
      [
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        },
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        }
      ],
      [
        {
          "text": "07",
          "link": null
        },
        {
          "text": "10",
          "link": null
        },
        {
          "text": "14",
          "link": null
        },
        {
          "text": "13",
          "link": null
        }
      ]
    ],
    "department": "PHARMACOLOGY"
  },
  {
    "id": "f-32",
    "labelId": "32",
    "name": "Dr Rakhi Mishra",
    "designation": "Professor & Dean (Student's Welfare)",
    "qualification": "M.Pharm, Ph.D",
    "photo": "/faculty/DR RAKHI PHOTO.jpg",
    "googleScholar": "https://scholar.google.com/citations?user=iuIX4hwAAAAJ&hl=en",
    "specialization": "Pharmaceutical Chemistry",
    "email": "rakhi.misra84@rediffmail.com",
    "academicExperience": "12 Years",
    "industryExperience": "",
    "experience": "Academic: 12 Years",
    "guided": "",
    "researchInterest": "Pharmaceutical Chemistry, Pharmaceutical Analysis, Organic Synthesis and Modern Analytical Techniques",
    "contactNo": "",
    "website": "",
    "fdpAttended": "",
    "publicationsCount": "",
    "publicationsList": [],
    "awards": [],
    "grants": [],
    "affiliations": [],
    "reviewer": [],
    "moocs": [],
    "gianCourses": [],
    "otherCourses": [],
    "seminarsAttended": [],
    "publicationTable": [
      [
        {
          "text": "Journal Publications",
          "link": null
        },
        {
          "text": "Conference Presentations",
          "link": null
        },
        {
          "text": "Books",
          "link": null
        }
      ],
      [
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        },
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        },
        {
          "text": "1",
          "link": null
        }
      ],
      [
        {
          "text": "8",
          "link": null
        },
        {
          "text": "3",
          "link": null
        },
        {
          "text": "3",
          "link": null
        },
        {
          "text": "1",
          "link": null
        }
      ]
    ],
    "department": "Pharmaceutical Chemistry"
  },
  {
    "id": "f-9",
    "labelId": "9",
    "name": "Dr. Rajnish kumar",
    "designation": "Associate Professor",
    "qualification": "M.Pharm, PhD",
    "photo": "/faculty/Dr. Rajnish Kumar.png",
    "googleScholar": "https://scholar.google.com/citations?hl=en&user=sxLj4_4AAAAJ",
    "specialization": "Pharmaceutical Chemistry",
    "email": "mpharm.rajnish@gmail.com",
    "academicExperience": "8 Years",
    "industryExperience": "",
    "experience": "Academic: 8 Years",
    "guided": "",
    "researchInterest": "",
    "contactNo": "",
    "website": "",
    "fdpAttended": "",
    "publicationsCount": "03",
    "publicationsList": [
      "Singh Sujata, Singh Rashmi Kumar Neeraj Kumar Rajnish.2011.Wound healing activity of ethanolic extract of Plantago ovata (Ispaghula) seeds. Journal of applied pharmaceutical sciences 1(7):108-111",
      "Kumar Neeraj, Kumar Rajnish and Maheshwari Kamal Kishore. 2013. Effect of Ethanolic and Aqueous Extract of Centella asiatica on Marble-Burying Behavier in Mice. International Journal of Phytopharmacology 4(3): 166-170",
      "Kumar Neeraj, Kumar Rajnish and Maheshwari Kamal Kishore. 2013. Onosma L.: A Review of Phytochemistry and Ethnopharmacology. Pharmacognosy Review 7(14) :140-151"
    ],
    "awards": [],
    "grants": [],
    "affiliations": [],
    "reviewer": [],
    "moocs": [],
    "gianCourses": [],
    "otherCourses": [],
    "seminarsAttended": [],
    "publicationTable": [],
    "department": "Pharmaceutical Chemistry"
  },
  {
    "id": "f-19",
    "labelId": "19",
    "name": "Dr. Swarupanjali Padhi",
    "designation": "Associate Professor",
    "qualification": "M.Pharm PhD",
    "photo": "/faculty/swarupanjali.jpg",
    "googleScholar": "https://scholar.google.com/citations?user=vUItbbkAAAAJ",
    "specialization": "Pharmaceutics",
    "email": "swppadhi@gmail.com",
    "academicExperience": "6",
    "industryExperience": "",
    "experience": "Academic: 6",
    "guided": "",
    "researchInterest": "Novel Drug Delivery Systems",
    "contactNo": "",
    "website": "",
    "fdpAttended": "",
    "publicationsCount": "NIL",
    "publicationsList": [],
    "awards": [
      "GATE qualified"
    ],
    "grants": [],
    "affiliations": [],
    "reviewer": [],
    "moocs": [],
    "gianCourses": [],
    "otherCourses": [],
    "seminarsAttended": [],
    "publicationTable": [],
    "department": "Pharmaceutics"
  },
  {
    "id": "f-7",
    "labelId": "7",
    "name": "Dr. monika",
    "designation": "Associate Professor",
    "qualification": "M. Pharm, PhD",
    "photo": "/faculty/monika.jpg",
    "googleScholar": "https://scholar.google.com/citations?user=z8dnTZcAAAAJ&hl=en",
    "specialization": "Industrial pharmacy",
    "email": "Sharma_1282@rediffmail.com",
    "academicExperience": "14 Years",
    "industryExperience": "",
    "experience": "Academic: 14 Years",
    "guided": "",
    "researchInterest": "Novel drug delivery systems",
    "contactNo": "",
    "website": "",
    "fdpAttended": "",
    "publicationsCount": "",
    "publicationsList": [],
    "awards": [
      "Gate qualified: 97.82 percentile",
      "Awarded with Fellowship by AICTE",
      "Secured first position in Post Graduation in 2006",
      "Awarded first position and 82% marks for M.Pharm project work by Vice president of Ranbaxy",
      "Awarded certificate of appreciation for coordinating national seminar on innovations in novel drug delivery systems"
    ],
    "grants": [],
    "affiliations": [],
    "reviewer": [],
    "moocs": [],
    "gianCourses": [],
    "otherCourses": [],
    "seminarsAttended": [],
    "publicationTable": [],
    "department": "Industrial pharmacy"
  },
  {
    "id": "f-43",
    "labelId": "43",
    "name": "Dr. Anjna Rani",
    "designation": "Associate Professor",
    "qualification": "M.Pharm, Ph.D",
    "photo": "/faculty/anjana-rani.jpg",
    "googleScholar": "https://scholar.google.com/citations?user=nrnA10wAAAAJ&hl=en",
    "specialization": "Pharmaceutics",
    "email": "anjna.sharma89@gmail.com",
    "academicExperience": "4 Years",
    "industryExperience": "",
    "experience": "Academic: 4 Years",
    "guided": "1",
    "researchInterest": "Novel Drug Delivery System",
    "contactNo": "",
    "website": "",
    "fdpAttended": "",
    "publicationsCount": "5",
    "publicationsList": [],
    "awards": [
      "GPAT Qualified"
    ],
    "grants": [],
    "affiliations": [],
    "reviewer": [],
    "moocs": [],
    "gianCourses": [],
    "otherCourses": [],
    "seminarsAttended": [],
    "publicationTable": [
      [
        {
          "text": "Journal Publications",
          "link": null
        },
        {
          "text": "Conference Presentations",
          "link": null
        },
        {
          "text": "Conference Attended",
          "link": null
        }
      ],
      [
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        },
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        },
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        }
      ],
      [
        {
          "text": "5",
          "link": null
        },
        {
          "text": "0",
          "link": null
        },
        {
          "text": "0",
          "link": null
        },
        {
          "text": "0",
          "link": null
        },
        {
          "text": "2",
          "link": null
        },
        {
          "text": "5",
          "link": null
        }
      ]
    ],
    "department": "Pharmaceutics"
  },
  {
    "id": "f-4",
    "labelId": "4",
    "name": "Dr. CHANDANA MAJEE",
    "designation": "Associate Professor",
    "qualification": "M. Pharm, PhD",
    "photo": "/faculty/chandana.jpg",
    "googleScholar": "https://scholar.google.com/citations?user=1Ptzu5AAAAAJ&hl=en",
    "specialization": "Pharm Chemistry",
    "email": "majee_chandana@yahoo.co.in",
    "academicExperience": "12 years",
    "industryExperience": "",
    "experience": "Academic: 12 years",
    "guided": "",
    "researchInterest": "Method development by UV-Visible Spectroscopy and HPLC.",
    "contactNo": "",
    "website": "",
    "fdpAttended": "",
    "publicationsCount": "",
    "publicationsList": [],
    "awards": [],
    "grants": [],
    "affiliations": [],
    "reviewer": [],
    "moocs": [],
    "gianCourses": [],
    "otherCourses": [],
    "seminarsAttended": [],
    "publicationTable": [
      [
        {
          "text": "Journal Publications",
          "link": null
        },
        {
          "text": "Conference Presentations",
          "link": null
        },
        {
          "text": "Book",
          "link": null
        }
      ],
      [
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        },
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        }
      ],
      [
        {
          "text": "02",
          "link": null
        },
        {
          "text": "NIL",
          "link": null
        },
        {
          "text": "Nil",
          "link": null
        },
        {
          "text": "02",
          "link": null
        },
        {
          "text": "01",
          "link": null
        }
      ]
    ],
    "department": "Pharm Chemistry"
  },
  {
    "id": "f-33",
    "labelId": "33",
    "name": "Dr. Sanjay Kumar Yadav",
    "designation": "ASSISTANT PROFESSOR",
    "qualification": "M.Pharm , PhD",
    "photo": "/faculty/sanjay.jpg",
    "googleScholar": "https://scholar.google.com/citations?user=7aHnl5cAAAAJ&hl=en",
    "specialization": "Pharmacology",
    "email": "sanjaykumar.yadav153@gmail.com",
    "academicExperience": "3 year",
    "industryExperience": "",
    "experience": "Academic: 3 year",
    "guided": "",
    "researchInterest": "Pharmacology, Clinical Research & Pharmacovigilance.",
    "contactNo": "",
    "website": "",
    "fdpAttended": "",
    "publicationsCount": "",
    "publicationsList": [],
    "awards": [
      "First in Essay Writing & Third In Pharma-quiz (PharmacyWeek, 2014)."
    ],
    "grants": [],
    "affiliations": [],
    "reviewer": [],
    "moocs": [],
    "gianCourses": [],
    "otherCourses": [],
    "seminarsAttended": [],
    "publicationTable": [
      [
        {
          "text": "Journal Publications",
          "link": null
        },
        {
          "text": "Conference Presentations",
          "link": null
        },
        {
          "text": "Book",
          "link": null
        }
      ],
      [
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        },
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        },
        {
          "text": "NIL",
          "link": null
        }
      ],
      [
        {
          "text": "NIL",
          "link": null
        },
        {
          "text": "NIL",
          "link": null
        },
        {
          "text": "02",
          "link": null
        },
        {
          "text": "04",
          "link": null
        },
        {
          "text": "NIL",
          "link": null
        }
      ]
    ],
    "department": "Pharmacology"
  },
  {
    "id": "f-68",
    "labelId": "68",
    "name": "Dr. PRIYANKA BANSAL",
    "designation": "ASSISTANT PROFESSOR",
    "qualification": "M.PHARM, Ph.D.",
    "photo": "/faculty/Priyanka-Bansal.jpg",
    "googleScholar": "https://scholar.google.com/citations?hl=en&user=RovxzWcAAAAJ&scilu=&scisig=AHomdjUAAAAAZ9EoIvxINlbCBp_RV5eNRs0j4Pc&gmla=AOv-ny90fZ-ZqTU2Ff7nUGjFS2j3iGtezFA4l3-VU5qYws71uqK2OAibhTljiSIaqy39tjBlnzcuPNtmX4PUz67o3QSY5RLXI8OrzP0&sciund=6628018474520428090&gmla=AOv-ny8XTxrzJvqtGsPHGZYpCbPZwYXUX40VcOgugxi0NAHtvW8LygNYSyeBYlXDDX8_o1V46n4nfrXtaoryXHDfWB0Xd8nL_6jncOPGuXs&sciund=955027034348844840",
    "specialization": "Pharmacology",
    "email": "bansalpriyanka309@gmail.com",
    "academicExperience": "3.8 Years",
    "industryExperience": "",
    "experience": "Academic: 3.8 Years",
    "guided": "03",
    "researchInterest": "Metabolic disorders including obesity, diabetes and cardiovascular diseases.",
    "contactNo": "",
    "website": "",
    "fdpAttended": "",
    "publicationsCount": "",
    "publicationsList": [],
    "awards": [
      "Awarded with ICMR Senior Research Fellowship in 2019.",
      "Qualified UGC- NET in 2018.",
      "Qualified GPAT in 2014 with AIR 570."
    ],
    "grants": [],
    "affiliations": [],
    "reviewer": [],
    "moocs": [],
    "gianCourses": [],
    "otherCourses": [],
    "seminarsAttended": [],
    "publicationTable": [
      [
        {
          "text": "Patents Published",
          "link": null
        },
        {
          "text": "Journal Publications",
          "link": null
        },
        {
          "text": "Conference Presentations",
          "link": null
        },
        {
          "text": "Book",
          "link": null
        }
      ],
      [
        {
          "text": "-",
          "link": null
        },
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        },
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        }
      ],
      [
        {
          "text": "01",
          "link": null
        },
        {
          "text": "03",
          "link": null
        },
        {
          "text": "04",
          "link": null
        },
        {
          "text": "03",
          "link": null
        },
        {
          "text": "-",
          "link": null
        },
        {
          "text": "02",
          "link": null
        }
      ]
    ],
    "department": "Pharmacology"
  },
  {
    "id": "f-31",
    "labelId": "31",
    "name": "SOUMYA TRIPATHI",
    "designation": "ASSISTANT PROFESSOR",
    "qualification": "M.PHARM, PHD (PURSUING)",
    "photo": "/faculty/soumya.jpg",
    "googleScholar": "https://scholar.google.com/citations?user=-NSZ8UoAAAAJ&hl=en",
    "specialization": "Pharmaceutics",
    "email": "soumya.mishra1504@gmail.com",
    "academicExperience": "1 Years",
    "industryExperience": "",
    "experience": "Academic: 1 Years",
    "guided": "",
    "researchInterest": "Nanosuspension",
    "contactNo": "",
    "website": "",
    "fdpAttended": "",
    "publicationsCount": "",
    "publicationsList": [],
    "awards": [],
    "grants": [],
    "affiliations": [],
    "reviewer": [],
    "moocs": [],
    "gianCourses": [],
    "otherCourses": [],
    "seminarsAttended": [],
    "publicationTable": [
      [
        {
          "text": "Journal Publications",
          "link": null
        },
        {
          "text": "Conference Presentations",
          "link": null
        }
      ],
      [
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        },
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        }
      ],
      [
        {
          "text": "1",
          "link": null
        },
        {
          "text": "1",
          "link": null
        },
        {
          "text": "NIL",
          "link": null
        },
        {
          "text": "NIL",
          "link": null
        }
      ]
    ],
    "department": "Pharmaceutics"
  },
  {
    "id": "f-60",
    "labelId": "60",
    "name": "ABHIJIT DEBNATH",
    "designation": "Assistant Professor",
    "qualification": "M.Pharm (PhD pursuing)",
    "photo": "/faculty/Abhijit-Debnath.jpg",
    "googleScholar": "https://scholar.google.com/citations?hl=en&user=mdluaqoAAAAJ&view_op=list_works&sortby=pubdate",
    "specialization": "Pharmaceutics",
    "email": "theabhijitdebnath@gmail.com",
    "academicExperience": "3 year",
    "industryExperience": "1.2 year",
    "experience": "Academic: 3 year, Industry: 1.2 year",
    "guided": "",
    "researchInterest": "Drug Discovery, Computer Aided Drug Design, NDDS, Bioinformatics, Insilco Vaccine Design, AI/ML in Drug Design.",
    "contactNo": "",
    "website": "www.theabhi.in",
    "fdpAttended": "2",
    "publicationsCount": "",
    "publicationsList": [],
    "awards": [
      "Best Poster Award for \"Nano Drug Delivery System of Bio-Flavonoids for the treatment of Cancer\" in a National Seminar on \"Essential Pharmacy Education and Research: Advanced Pharmaceutical Skills with innovative ideas\" organised by PDM College of Pharmacy, Haryana held on 7th April 2015.",
      "Winner of Quiz competition titled as \"India Global\" organised by All India Radio held on 26th Dec 2014."
    ],
    "grants": [],
    "affiliations": [],
    "reviewer": [],
    "moocs": [
      "Drug Discovery from University of California San Diego, (2020)",
      "Bio-Informatics: Algorithms and Applications from IIT Madras (2020)",
      "Computational Systems Biology from IIT Madras (2020)",
      "Medicinal Chemistry from IIT Madras (2019)",
      "Biomedical Nanotechnology from IIT Roorkee (2017)",
      "Functional Genomics from IIT Kanpur (2017)",
      "Health Research Fundamentals from National Institute of Epidemiology & ICMR (2016)",
      "Introduction to Research from IIT Madras (2016)",
      "Biochemistry from IIT Kharagpur (2016)",
      "Human Molecular Genetics from IIT Kanpur (2016)"
    ],
    "gianCourses": [
      "\"Bio-Assays & Bio-Efficacy Models, Tools, Targets & Technologies, Paradigm shift in new Drug Discovery & Biotechnology Research\" from Jawaharlal Nehru University (2016)",
      "\"Advance course on Membrane Biogenesis, Porosomes, Health and Disease: Molecular underpinnings of secretions and membrane fusions\" from IIT Kanpur (2016)"
    ],
    "otherCourses": [
      "DOEACC \"O\" Level from National Institute of Electronics & Information Technology, Agartala (2010-11)"
    ],
    "seminarsAttended": [],
    "publicationTable": [
      [
        {
          "text": "Journal Publications",
          "link": null
        },
        {
          "text": "Conference Publication",
          "link": null
        }
      ],
      [
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        },
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        }
      ],
      [
        {
          "text": "1",
          "link": null
        },
        {
          "text": "NIL",
          "link": null
        },
        {
          "text": "3",
          "link": null
        },
        {
          "text": "NIL",
          "link": null
        }
      ]
    ],
    "department": "Pharmaceutics"
  },
  {
    "id": "f-41",
    "labelId": "41",
    "name": "SONIA CHAUHAN",
    "designation": "ASSISTANT PROFESSOR",
    "qualification": "M.PHARM, Ph.D. (pursuing)",
    "photo": "/faculty/sonia.jpg",
    "googleScholar": "https://scholar.google.com/citations?hl=en&user=Nt6MQsIAAAAJ&scilu=&scisig=AHomdjUAAAAAZ9Fk5x6-dHPpBg6s8vbbL07v5m4&gmla=AOv-ny9gJ61n5EyscLtGusujZo7dFgJi91a9rOCHu9_2pi0b50W_srDhoNz5Awf_YDJLbUZBFhchfbiVRqhldhstKKKac2-vjLqrDAlfSoA&sciund=6164151083730525864",
    "specialization": "Pharmaceutics",
    "email": "soniya.chauhan012@gmail.com",
    "academicExperience": "4 Years",
    "industryExperience": "",
    "experience": "Academic: 4 Years",
    "guided": "",
    "researchInterest": "Formulation of Sustained Tablet",
    "contactNo": "",
    "website": "",
    "fdpAttended": "",
    "publicationsCount": "",
    "publicationsList": [],
    "awards": [],
    "grants": [],
    "affiliations": [],
    "reviewer": [],
    "moocs": [],
    "gianCourses": [],
    "otherCourses": [],
    "seminarsAttended": [],
    "publicationTable": [
      [
        {
          "text": "Journal Publications",
          "link": null
        },
        {
          "text": "Conference Presentations",
          "link": null
        }
      ],
      [
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        },
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        }
      ],
      [
        {
          "text": "00",
          "link": null
        },
        {
          "text": "00",
          "link": null
        },
        {
          "text": "00",
          "link": null
        },
        {
          "text": "00",
          "link": null
        }
      ]
    ],
    "department": "Pharmaceutics"
  },
  {
    "id": "f-27",
    "labelId": "27",
    "name": "Mrs. SWATI YADAV",
    "designation": "ASSISTANT PROFESSOR",
    "qualification": "M.PHARM PH.D (PURSUING)",
    "photo": "/faculty/swati.jpg",
    "googleScholar": "https://scholar.google.com/citations?view_op=list_works&hl=en&hl=en&user=OfS8k1QAAAAJ&scilu=&scisig=AHomdjUAAAAAZ9EstEp83mhYPRau1tCwl_GoHrY&gmla=AOv-ny-r0k3HPzA8Df8JHNKVJn0vOBP8EQKVJVWIhrE4y1NGOlu_pEXyDC1ALApRGN4u1E_xtg6MoVixH1L_XAl5C2i32MEATJbWXJc&sciund=9530467487458471528",
    "specialization": "Pharmaceutics",
    "email": "swati.yadav889@gmail.com",
    "academicExperience": "1 Years",
    "industryExperience": "",
    "experience": "Academic: 1 Years",
    "guided": "",
    "researchInterest": "Formulation of Floating Tablet",
    "contactNo": "",
    "website": "",
    "fdpAttended": "",
    "publicationsCount": "",
    "publicationsList": [],
    "awards": [],
    "grants": [],
    "affiliations": [],
    "reviewer": [],
    "moocs": [],
    "gianCourses": [],
    "otherCourses": [],
    "seminarsAttended": [],
    "publicationTable": [
      [
        {
          "text": "Journal Publications",
          "link": null
        },
        {
          "text": "Conference Publication",
          "link": null
        }
      ],
      [
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        },
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        }
      ],
      [
        {
          "text": "1",
          "link": null
        },
        {
          "text": "NIL",
          "link": null
        },
        {
          "text": "NIL",
          "link": null
        },
        {
          "text": "NIL",
          "link": null
        }
      ]
    ],
    "department": "Pharmaceutics"
  },
  {
    "id": "f-44",
    "labelId": "44",
    "name": "Neha Sharma",
    "designation": "ASSISTANT PROFESSOR",
    "qualification": "M. Pharm, PhD (pursuing)",
    "photo": "/faculty/neha-sharma.jpg",
    "googleScholar": "https://scholar.google.com/citations?hl=en&view_op=list_works&gmla=AOv-ny9FcUEjsNMCfKqCL3iPl9pdcoeNHOL_3cIASMaVbClGh9s0K_okb37JiyuhEExqRhp---XBIb3uLDjYcosV7blfjE0jhK5RRViPDaI&user=qP9Y9EUAAAAJ",
    "specialization": "Pharmaceutics",
    "email": "nehasharma18july1989@gmail.com",
    "academicExperience": "5 years",
    "industryExperience": "",
    "experience": "Academic: 5 years",
    "guided": "",
    "researchInterest": "Drug Delivery Systems, Immunotherapy.",
    "contactNo": "",
    "website": "",
    "fdpAttended": "",
    "publicationsCount": "",
    "publicationsList": [],
    "awards": [],
    "grants": [],
    "affiliations": [],
    "reviewer": [],
    "moocs": [],
    "gianCourses": [],
    "otherCourses": [],
    "seminarsAttended": [],
    "publicationTable": [
      [
        {
          "text": "Journal Publications",
          "link": null
        },
        {
          "text": "Conference Presentations",
          "link": null
        }
      ],
      [
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        },
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        }
      ],
      [
        {
          "text": "01",
          "link": null
        },
        {
          "text": "02",
          "link": null
        },
        {
          "text": "00",
          "link": null
        },
        {
          "text": "01",
          "link": null
        }
      ]
    ],
    "department": "Pharmaceutics"
  },
  {
    "id": "f-46",
    "labelId": "46",
    "name": "MS. DEEPIKA PATHAK",
    "designation": "ASSISTANT PROFESSOR",
    "qualification": "M.Pharm (Pharmacy Practice) & PhD pursuing",
    "photo": "/faculty/deepika-pathak.jpg",
    "googleScholar": "",
    "specialization": "Pharmacy Practice",
    "email": "deepikapathak0607@gmail.com",
    "academicExperience": "12 years",
    "industryExperience": "",
    "experience": "Academic: 12 years",
    "guided": "",
    "researchInterest": "Isolation and extraction of phytoconstituents and their pharmacological screening",
    "contactNo": "",
    "website": "",
    "fdpAttended": "",
    "publicationsCount": "NIL",
    "publicationsList": [],
    "awards": [
      "Merit certificate (Delhi Pharmacy Council), Harnandi Devi Award of NIET, GPAT, NET-Lectureship"
    ],
    "grants": [],
    "affiliations": [],
    "reviewer": [],
    "moocs": [],
    "gianCourses": [],
    "otherCourses": [],
    "seminarsAttended": [],
    "publicationTable": [],
    "department": "Pharmacy Practice"
  },
  {
    "id": "f-45",
    "labelId": "45",
    "name": "Nidhi Sharma",
    "designation": "ASSISTANT PROFESSOR",
    "qualification": "M.PHARMACY.( PH.D Pursuing)",
    "photo": "/faculty/nidhi-sharma.jpg",
    "googleScholar": "https://scholar.google.com/citations?hl=en&user=5UgSuOYAAAAJ",
    "specialization": "Pharmaceutics",
    "email": "nidhi1212sharma@gmail.com",
    "academicExperience": "2 years",
    "industryExperience": "",
    "experience": "Academic: 2 years",
    "guided": "",
    "researchInterest": "Isolation and extraction of phytoconstituents and their pharmacological screening",
    "contactNo": "",
    "website": "",
    "fdpAttended": "",
    "publicationsCount": "6",
    "publicationsList": [],
    "awards": [
      "Bronze medalist in M. Pharm ( in 5th convocation conduct by UTU)"
    ],
    "grants": [],
    "affiliations": [],
    "reviewer": [],
    "moocs": [],
    "gianCourses": [],
    "otherCourses": [],
    "seminarsAttended": [],
    "publicationTable": [
      [
        {
          "text": "Journal Publications",
          "link": null
        },
        {
          "text": "Conference Presentations",
          "link": null
        },
        {
          "text": "Conference Attended",
          "link": null
        }
      ],
      [
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        },
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        },
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        }
      ],
      [
        {
          "text": "04",
          "link": null
        },
        {
          "text": "02",
          "link": null
        },
        {
          "text": "01",
          "link": null
        },
        {
          "text": "0",
          "link": null
        },
        {
          "text": "2",
          "link": null
        },
        {
          "text": "5",
          "link": null
        }
      ]
    ],
    "department": "Pharmaceutics"
  },
  {
    "id": "f-48",
    "labelId": "48",
    "name": "BHAVANI PENTELA",
    "designation": "ASSISTANT PROFESSOR",
    "qualification": "M.PHARMACY, PhD (pursuing)",
    "photo": "/faculty/Bhavani-pentela.jpg",
    "googleScholar": "https://scholar.google.com/citations?hl=en&user=FLCZOQYAAAAJ&sortby=title&view_op=list_works&gmla=AOv-ny9S5jFnMP_ubRX_ioXLx6B2jvSbACtNshrtBc8oLbPFUranuwUsYSBuFZaTRK76daRP7OJJh1UIWpEqWCjOnDMyjdDEERqyvAiHfTOEXem9T_d0ghSVnVoFpmDCFq7Yb-vfJwolcm0mK9ysEw",
    "specialization": "Pharmacology",
    "email": "bhavani.pentela@gmail.com",
    "academicExperience": "7 Years",
    "industryExperience": "",
    "experience": "Academic: 7 Years",
    "guided": "",
    "researchInterest": "Research",
    "contactNo": "",
    "website": "",
    "fdpAttended": "",
    "publicationsCount": "7",
    "publicationsList": [],
    "awards": [],
    "grants": [],
    "affiliations": [],
    "reviewer": [],
    "moocs": [],
    "gianCourses": [],
    "otherCourses": [],
    "seminarsAttended": [],
    "publicationTable": [
      [
        {
          "text": "Journal Publications",
          "link": null
        },
        {
          "text": "Conference Presentations",
          "link": null
        },
        {
          "text": "Conference Attended",
          "link": null
        }
      ],
      [
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        },
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        },
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        }
      ],
      [
        {
          "text": "7",
          "link": null
        },
        {
          "text": "0",
          "link": null
        },
        {
          "text": "0",
          "link": null
        },
        {
          "text": "0",
          "link": null
        },
        {
          "text": "1",
          "link": null
        },
        {
          "text": "4",
          "link": null
        }
      ]
    ],
    "department": "Pharmacology"
  },
  {
    "id": "f-56",
    "labelId": "56",
    "name": "Ms. Kavita Rana",
    "designation": "Assistant Professor",
    "qualification": "M.Pharm, PHD (PURSUING)",
    "photo": "/faculty/KAVITA-RANA.jpg",
    "googleScholar": "https://scholar.google.com/citations?user=x_nA_ugAAAAJ&hl=en&oi=ao",
    "specialization": "Pharmaceutical Chemistry",
    "email": "kavitapharma1988@gmail.com",
    "academicExperience": "3 Years",
    "industryExperience": "",
    "experience": "Academic: 3 Years",
    "guided": "",
    "researchInterest": "Medicinal Chemistry, Pharmaceutical analysis, Pharmacognosy",
    "contactNo": "",
    "website": "",
    "fdpAttended": "",
    "publicationsCount": "",
    "publicationsList": [],
    "awards": [],
    "grants": [],
    "affiliations": [],
    "reviewer": [],
    "moocs": [],
    "gianCourses": [],
    "otherCourses": [],
    "seminarsAttended": [],
    "publicationTable": [
      [
        {
          "text": "Journal Publications",
          "link": null
        },
        {
          "text": "Conference Presentations",
          "link": null
        },
        {
          "text": "Books",
          "link": null
        }
      ],
      [
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        },
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        },
        {
          "text": "0",
          "link": null
        }
      ],
      [
        {
          "text": "4",
          "link": null
        },
        {
          "text": "0",
          "link": null
        },
        {
          "text": "1",
          "link": null
        },
        {
          "text": "10",
          "link": null
        }
      ]
    ],
    "department": "Pharmaceutical Chemistry"
  },
  {
    "id": "f-24",
    "labelId": "24",
    "name": "Mrs. Archana Sharma",
    "designation": "Assistant Professor",
    "qualification": "M.Pharm, Ph.D (Pursuing)",
    "photo": "/faculty/archana.jpg",
    "googleScholar": "",
    "specialization": "Pharmaceutics",
    "email": "hiarchanasharma@rediffmail.com",
    "academicExperience": "7 years",
    "industryExperience": "",
    "experience": "Academic: 7 years",
    "guided": "",
    "researchInterest": "Novel Drug Delivery System",
    "contactNo": "",
    "website": "",
    "fdpAttended": "",
    "publicationsCount": "",
    "publicationsList": [],
    "awards": [
      "Scholarship in B Pharmacy"
    ],
    "grants": [],
    "affiliations": [],
    "reviewer": [],
    "moocs": [],
    "gianCourses": [],
    "otherCourses": [],
    "seminarsAttended": [],
    "publicationTable": [
      [
        {
          "text": "Journal Publications",
          "link": null
        },
        {
          "text": "Conference Presentations",
          "link": null
        },
        {
          "text": "Books",
          "link": null
        }
      ],
      [
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        },
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        },
        {
          "text": "NIL",
          "link": null
        }
      ],
      [
        {
          "text": "NIL",
          "link": null
        },
        {
          "text": "NIL",
          "link": null
        },
        {
          "text": "NIL",
          "link": null
        },
        {
          "text": "NIL",
          "link": null
        },
        {
          "text": "NIL",
          "link": null
        }
      ]
    ],
    "department": "Pharmaceutics"
  },
  {
    "id": "f-54",
    "labelId": "54",
    "name": "Sandhya chauhan",
    "designation": "Assistant Professor",
    "qualification": "M.Pharm (PhD pursuing)",
    "photo": "/faculty/sandhya.jpg",
    "googleScholar": "",
    "specialization": "Quality Assurance",
    "email": "sandhya.chouhan@niet.co.in",
    "academicExperience": "4 year",
    "industryExperience": "10 month",
    "experience": "Academic: 4 year, Industry: 10 month",
    "guided": "",
    "researchInterest": "Formulation and Evaluation of Nanoparticles",
    "contactNo": "",
    "website": "",
    "fdpAttended": "",
    "publicationsCount": "NIL",
    "publicationsList": [],
    "awards": [],
    "grants": [],
    "affiliations": [],
    "reviewer": [],
    "moocs": [],
    "gianCourses": [],
    "otherCourses": [],
    "seminarsAttended": [],
    "publicationTable": [
      [
        {
          "text": "Journal Publications",
          "link": null
        },
        {
          "text": "Conference Publications",
          "link": null
        }
      ],
      [
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        },
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        }
      ],
      [
        {
          "text": "0",
          "link": null
        },
        {
          "text": "0",
          "link": null
        },
        {
          "text": "0",
          "link": null
        },
        {
          "text": "0",
          "link": null
        }
      ]
    ],
    "department": "Quality Assurance"
  },
  {
    "id": "f-67",
    "labelId": "67",
    "name": "Mr. ANMOL DOGRA",
    "designation": "ASSISTANT PROFESSOR",
    "qualification": "M.PHARM, (Ph.D. THESIS SUBMITTED). Google Scholar:",
    "photo": "/faculty/Anmol-Dogra.jpg",
    "googleScholar": "https://scholar.google.com/citations?user=1WriTMoAAAAJ&hl=id",
    "specialization": "Pharmaceutics",
    "email": "anmoldogra001@gmail. com",
    "academicExperience": "7.5 Years",
    "industryExperience": "",
    "experience": "Academic: 7.5 Years",
    "guided": "04",
    "researchInterest": "Neurodegenerative diseases, Topical Fungal diseases.",
    "contactNo": "",
    "website": "",
    "fdpAttended": "",
    "publicationsCount": "",
    "publicationsList": [],
    "awards": [
      "Qualified GPAT in 2014 with AIR 1818."
    ],
    "grants": [],
    "affiliations": [],
    "reviewer": [],
    "moocs": [],
    "gianCourses": [],
    "otherCourses": [],
    "seminarsAttended": [],
    "publicationTable": [
      [
        {
          "text": "Journal Publications",
          "link": null
        },
        {
          "text": "Conference Presentations",
          "link": null
        },
        {
          "text": "Faculty Development",
          "link": null
        },
        {
          "text": "Book(s)",
          "link": null
        }
      ],
      [
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        },
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        },
        {
          "text": "Program (FDPs)",
          "link": null
        }
      ],
      [
        {
          "text": "08",
          "link": null
        },
        {
          "text": "03",
          "link": null
        },
        {
          "text": "03",
          "link": null
        },
        {
          "text": "05",
          "link": null
        },
        {
          "text": "03",
          "link": null
        },
        {
          "text": "03",
          "link": null
        }
      ]
    ],
    "department": "Pharmaceutics"
  },
  {
    "id": "f-58",
    "labelId": "58",
    "name": "SHRUTI VARSHNEY",
    "designation": "Assistant Professor",
    "qualification": "M.Pharm (PhD pursuing)",
    "photo": "/faculty/Shruti-Varshney.jpg",
    "googleScholar": "https://scholar.google.com/citations?user=zNTIhtkAAAAJ&hl=en&oi=ao",
    "specialization": "Pharmaceutical Chemistry",
    "email": "varshney08shruti@gmail.com",
    "academicExperience": "3 year",
    "industryExperience": "",
    "experience": "Academic: 3 year",
    "guided": "No. of M.Pharm/PhD guided: 1 (M.Pharm)",
    "researchInterest": "Organic Synthesis, Natural Products",
    "contactNo": "",
    "website": "",
    "fdpAttended": "",
    "publicationsCount": "7",
    "publicationsList": [],
    "awards": [],
    "grants": [],
    "affiliations": [],
    "reviewer": [],
    "moocs": [],
    "gianCourses": [],
    "otherCourses": [],
    "seminarsAttended": [],
    "publicationTable": [
      [
        {
          "text": "Journal Publications",
          "link": null
        },
        {
          "text": "Conference Presentations",
          "link": null
        },
        {
          "text": "Conference Attended",
          "link": null
        }
      ],
      [
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        },
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        },
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        }
      ],
      [
        {
          "text": "7",
          "link": null
        },
        {
          "text": "0",
          "link": null
        },
        {
          "text": "0",
          "link": null
        },
        {
          "text": "2",
          "link": null
        },
        {
          "text": "1",
          "link": null
        },
        {
          "text": "4",
          "link": null
        }
      ]
    ],
    "department": "Pharmaceutical Chemistry"
  },
  {
    "id": "f-59",
    "labelId": "59",
    "name": "SHAKSHI SHARMA",
    "designation": "Assistant Professor",
    "qualification": "M.Pharm (PhD pursuing)",
    "photo": "/faculty/Sakshi-Sharma.jpg",
    "googleScholar": "",
    "specialization": "Pharmacology",
    "email": "sakshi.sharma1964@gmail.com",
    "academicExperience": "6 Years",
    "industryExperience": "",
    "experience": "Academic: 6 Years",
    "guided": "",
    "researchInterest": "Cardiovascular Pharmacology",
    "contactNo": "",
    "website": "",
    "fdpAttended": "",
    "publicationsCount": "",
    "publicationsList": [],
    "awards": [
      "Certification of merit: M.Pharm Topper"
    ],
    "grants": [],
    "affiliations": [],
    "reviewer": [],
    "moocs": [],
    "gianCourses": [],
    "otherCourses": [],
    "seminarsAttended": [],
    "publicationTable": [
      [
        {
          "text": "Journal Publications",
          "link": null
        },
        {
          "text": "Conference Presentations",
          "link": null
        },
        {
          "text": "Conference Attended",
          "link": null
        }
      ],
      [
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        },
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        },
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        }
      ],
      [
        {
          "text": "NIL",
          "link": null
        },
        {
          "text": "NIL",
          "link": null
        },
        {
          "text": "NIL",
          "link": null
        },
        {
          "text": "1",
          "link": null
        },
        {
          "text": "1",
          "link": null
        },
        {
          "text": "4",
          "link": null
        }
      ]
    ],
    "department": "Pharmacology"
  },
  {
    "id": "f-49",
    "labelId": "49",
    "name": "APARNA GUPTA",
    "designation": "ASSISTANT PROFESSOR",
    "qualification": "M.PHARM, Ph.D. (pursuing)",
    "photo": "/faculty/aparna.png",
    "googleScholar": "https://scholar.google.com/citations?hl=en&user=IZrCx44AAAAJ&view_op=list_works&gmla=AOv-ny8OTXacQedwcyTj2cvlCV7mW1T9sVOH0yn9Z6CpFAw3wAIu2-_-fnftrQwHtse4Fgkzzzfjr03yUMRT56XZ",
    "specialization": "Pharmaceutics",
    "email": "aparnagupta671@gmail.com",
    "academicExperience": "5 years",
    "industryExperience": "",
    "experience": "Academic: 5 years",
    "guided": "",
    "researchInterest": "Formulation by Design, Drug delivery system, Biopharmaceutics",
    "contactNo": "8630396802",
    "website": "",
    "fdpAttended": "",
    "publicationsCount": "",
    "publicationsList": [],
    "awards": [
      "Successfully completed NPTEL COURSE (ARPIT COURSE- 2020), organized by MHRD, for Online Refresher Course in Pharmacy for Higher Education, on the title “Advances in drug discovery and formulation development”.",
      "Qualified GPAT- 2016.",
      "Achieved Gold Medal in academic session of 2012-2016 in B.Pharm.",
      "Achieved Best Pharmacist Award in year 2015, 25th Sep, on the occasion of World’s Pharmacist Day, organized by Shri Ram Murti Smarak College of Engineering and Technology, Bareilly."
    ],
    "grants": [],
    "affiliations": [],
    "reviewer": [],
    "moocs": [],
    "gianCourses": [],
    "otherCourses": [],
    "seminarsAttended": [],
    "publicationTable": [
      [
        {
          "text": "Patents Published",
          "link": null
        },
        {
          "text": "Journal Publications",
          "link": null
        },
        {
          "text": "Conference Presentations",
          "link": null
        },
        {
          "text": "Books",
          "link": null
        }
      ],
      [
        {
          "text": "02",
          "link": null
        },
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        },
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        },
        {
          "text": "02",
          "link": null
        }
      ],
      [
        {
          "text": "03",
          "link": null
        },
        {
          "text": "02",
          "link": null
        },
        {
          "text": "02",
          "link": null
        },
        {
          "text": "02",
          "link": null
        }
      ]
    ],
    "department": "Pharmaceutics"
  },
  {
    "id": "f-65",
    "labelId": "65",
    "name": "MS. SAKSHI",
    "designation": "ASSISTANT PROFESSOR",
    "qualification": "M.PHARM",
    "photo": "/faculty/Ms. Sakshi.jpg",
    "googleScholar": "",
    "specialization": "Pharmacology",
    "email": "rajput.sakshi109@gmail.com",
    "academicExperience": "2.5 year",
    "industryExperience": "",
    "experience": "Academic: 2.5 year",
    "guided": "02",
    "researchInterest": "Pharmacology",
    "contactNo": "",
    "website": "",
    "fdpAttended": "",
    "publicationsCount": "",
    "publicationsList": [],
    "awards": [],
    "grants": [],
    "affiliations": [],
    "reviewer": [],
    "moocs": [],
    "gianCourses": [],
    "otherCourses": [],
    "seminarsAttended": [],
    "publicationTable": [
      [
        {
          "text": "Patents Published",
          "link": null
        },
        {
          "text": "Journal Publications",
          "link": null
        },
        {
          "text": "Conference Presentations",
          "link": null
        },
        {
          "text": "Publications Pdf",
          "link": null
        }
      ],
      [
        {
          "text": "01",
          "link": null
        },
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        },
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        },
        {
          "text": "",
          "link": null
        }
      ],
      [
        {
          "text": "04",
          "link": null
        },
        {
          "text": "01",
          "link": null
        },
        {
          "text": "08",
          "link": null
        },
        {
          "text": "07",
          "link": null
        }
      ]
    ],
    "department": "Pharmacology"
  },
  {
    "id": "f-52",
    "labelId": "52",
    "name": "HIMANSHU SINGH",
    "designation": "Assistant Professor",
    "qualification": "M.PHARM, Ph.D. (pursuing)",
    "photo": "/faculty/himanshu1.png",
    "googleScholar": "https://scholar.google.com/citations?user=0eUjjccAAAAJ&hl=en",
    "specialization": "Pharmaceutical Chemistry",
    "email": "himanshu.singh@niet.co.in",
    "academicExperience": "06 Months",
    "industryExperience": "08 Months",
    "experience": "Academic: 06 Months, Industry: 08 Months",
    "guided": "No. of M.Pharm/Ph.D guided in last 4 years: NIL",
    "researchInterest": "Synthetic chemistry",
    "contactNo": "",
    "website": "",
    "fdpAttended": "",
    "publicationsCount": "19",
    "publicationsList": [],
    "awards": [
      "Silver medallist in AKTU University for securing 2nd position in Master of Pharmacy (Pharmaceutical Chemistry).",
      "Academic award in Ram-Eesh Institute of Vocational and Technical Education, Greater Noida for securing 1st position in Bachelor of Pharmacy.",
      "Qualify GPAT 2019 and achieved 2767 all India rank.",
      "Qualify NIPER 2019.",
      "Also, qualify for the CUCET exam 2019."
    ],
    "grants": [],
    "affiliations": [],
    "reviewer": [],
    "moocs": [],
    "gianCourses": [],
    "otherCourses": [],
    "seminarsAttended": [],
    "publicationTable": [
      [
        {
          "text": "Journal Publications",
          "link": null
        },
        {
          "text": "Conference Presentations",
          "link": null
        }
      ],
      [
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        },
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        }
      ],
      [
        {
          "text": "15",
          "link": null
        },
        {
          "text": "04",
          "link": null
        },
        {
          "text": "05",
          "link": null
        },
        {
          "text": "04",
          "link": null
        }
      ]
    ],
    "department": "Pharmaceutical Chemistry"
  },
  {
    "id": "f-53",
    "labelId": "53",
    "name": "RANJEET KUMAR YADAV",
    "designation": "Assistant Professor",
    "qualification": "M.PHARM, PH.D (PURSUING)",
    "photo": "/faculty/ranjeet.png",
    "googleScholar": "https://scholar.google.com/citations?user=MzEB8ZEAAAAJ&hl=en",
    "specialization": "Pharmaceutical Chemistry",
    "email": "ranjeet.yadav_1999@yahoo.com",
    "academicExperience": "08 months",
    "industryExperience": "",
    "experience": "Academic: 08 months",
    "guided": "No. of M.Pharm/Ph.D guided in last 4 years: NIL",
    "researchInterest": "Pharmaceutical Chemistry, Medicinal Chemistry and Biochemistry",
    "contactNo": "9918972243",
    "website": "",
    "fdpAttended": "",
    "publicationsCount": "",
    "publicationsList": [],
    "awards": [
      "Awarded with Bhamashah Award by Maharana Mewar Foudation, Udaipur Rajasthan, for outstanding academic performance in B. Pharm at State level.",
      "Qualified GPAT 2020 and NIPER JEE 2020",
      "Achieved first position in Inter-College Pharma Quiz competition at Pacific College of Pharmacy, Udaipur in 2016 and 2017.",
      "Participated and Achieved 6th Rank in National Pharma Quiz-2019 organized by IIHMR, Jaipur."
    ],
    "grants": [],
    "affiliations": [],
    "reviewer": [],
    "moocs": [],
    "gianCourses": [],
    "otherCourses": [],
    "seminarsAttended": [],
    "publicationTable": [
      [
        {
          "text": "Patents Published",
          "link": null
        },
        {
          "text": "Journal Publications",
          "link": null
        },
        {
          "text": "Conference Presentations",
          "link": null
        }
      ],
      [
        {
          "text": "00",
          "link": null
        },
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        },
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        }
      ],
      [
        {
          "text": "08",
          "link": null
        },
        {
          "text": "02",
          "link": null
        },
        {
          "text": "02",
          "link": null
        },
        {
          "text": "01",
          "link": null
        }
      ]
    ],
    "department": "Pharmaceutical Chemistry"
  },
  {
    "id": "f-51",
    "labelId": "51",
    "name": "CHANCHAL SHARMA",
    "designation": "Assistant Professor",
    "qualification": "M.PHARM, Ph.D. (pursuing)",
    "photo": "/faculty/chanchal.png",
    "googleScholar": "",
    "specialization": "Pharmacology",
    "email": "chanchal.sharma@niet.co.in",
    "academicExperience": "Fresher",
    "industryExperience": "NA",
    "experience": "Academic: Fresher, Industry: NA",
    "guided": "No. of M.Pharm/Ph.D guided in last 4 years: NIL",
    "researchInterest": "Pharmacology",
    "contactNo": "",
    "website": "",
    "fdpAttended": "",
    "publicationsCount": "",
    "publicationsList": [],
    "awards": [],
    "grants": [],
    "affiliations": [],
    "reviewer": [],
    "moocs": [],
    "gianCourses": [],
    "otherCourses": [],
    "seminarsAttended": [],
    "publicationTable": [
      [
        {
          "text": "Journal Publications",
          "link": null
        },
        {
          "text": "Conference Presentations",
          "link": null
        }
      ],
      [
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        },
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        }
      ],
      [
        {
          "text": "0",
          "link": null
        },
        {
          "text": "1",
          "link": null
        },
        {
          "text": "0",
          "link": null
        },
        {
          "text": "0",
          "link": null
        }
      ]
    ],
    "department": "Pharmacology"
  },
  {
    "id": "f-50",
    "labelId": "50",
    "name": "AYUSHI SINGH",
    "designation": "Assistant Professor",
    "qualification": "M.Pharm, pursuing Ph.D",
    "photo": "/faculty/ayushi singh.png",
    "googleScholar": "https://scholar.google.com/citations?user=I-yx4dkAAAAJ&hl=en",
    "specialization": "Pharmaceutical Chemistry",
    "email": "ayushi.singh@niet.co.in",
    "academicExperience": "11 months",
    "industryExperience": "NIL",
    "experience": "Academic: 11 months, Industry: NIL",
    "guided": "No. of M.Pharm/Ph.D guided in last 4 years: NIL",
    "researchInterest": "Synthetic Chemistry, Organic Chemistry",
    "contactNo": "",
    "website": "",
    "fdpAttended": "",
    "publicationsCount": "",
    "publicationsList": [],
    "awards": [
      "Qualified GPAT twice (in year 2019 and 2020)"
    ],
    "grants": [],
    "affiliations": [],
    "reviewer": [],
    "moocs": [],
    "gianCourses": [],
    "otherCourses": [],
    "seminarsAttended": [],
    "publicationTable": [
      [
        {
          "text": "Journal Publications",
          "link": null
        },
        {
          "text": "Conference Presentations",
          "link": null
        }
      ],
      [
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        },
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        }
      ],
      [
        {
          "text": "6",
          "link": null
        },
        {
          "text": "0",
          "link": null
        },
        {
          "text": "3",
          "link": null
        },
        {
          "text": "1",
          "link": null
        }
      ]
    ],
    "department": "Pharmaceutical Chemistry"
  },
  {
    "id": "f-1002",
    "labelId": "1002",
    "name": "MS. DIVYA CHAUDHARY",
    "designation": "ASSISTANT PROFESSOR",
    "qualification": "M.Pharm",
    "photo": "/faculty/Ms. Divya Chaudhary.png",
    "googleScholar": "https://scholar.google.com/citations?hl=en&user=YCN9p4sAAAAJ&view_op=list_works&gmla=AOv-ny_oxfOQz5NQ8pkC-Tw5KxiuiSUPOBsnTklzg-NKaqxnSULUmKedMyMQIN4oz6BQN8PlXxn_ZjO-Ox6aol9KoryOe4AFVwzhLpro-UK_EZxHFVdfu43enAYiZr6GjiJ6yzhqG-1ZgtDkIkU",
    "specialization": "Pharmacology",
    "email": "divyachaudhary.pharma@niet.co.in",
    "academicExperience": "",
    "industryExperience": "",
    "experience": "",
    "guided": "Nil",
    "researchInterest": "Pharmacology and Toxicology",
    "contactNo": "",
    "website": "",
    "fdpAttended": "",
    "publicationsCount": "",
    "publicationsList": [],
    "awards": [],
    "grants": [],
    "affiliations": [],
    "reviewer": [],
    "moocs": [],
    "gianCourses": [],
    "otherCourses": [],
    "seminarsAttended": [],
    "publicationTable": [
      [
        {
          "text": "Patents Published",
          "link": null
        },
        {
          "text": "Journal Publications",
          "link": null
        },
        {
          "text": "Conference Presentations",
          "link": null
        },
        {
          "text": "Publications Pdf",
          "link": null
        }
      ],
      [
        {
          "text": "-",
          "link": null
        },
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        },
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        },
        {
          "text": "-",
          "link": null
        }
      ],
      [
        {
          "text": "-",
          "link": null
        },
        {
          "text": "1",
          "link": null
        },
        {
          "text": "0",
          "link": null
        },
        {
          "text": "0",
          "link": null
        }
      ]
    ],
    "department": "Pharmacology"
  },
  {
    "id": "f-69",
    "labelId": "69",
    "name": "MS. KAJAL",
    "designation": "ASSISTANT PROFESSOR",
    "qualification": "M.Pharm",
    "photo": "/faculty/Ms. Kajal-Pic.jpeg",
    "googleScholar": "https://scholar.google.com/citations?hl=en&view_op=list_works&gmla=AOv-ny8GvZj_Oi-hGzqTRROnpnDSVgvQzNJSPU2lAoSliPyVt9pFsJ1WsXLo9tJFMo8EUoj1JYDXBFaZmB39n096U5RKa7dbAO6Hyq0b_Rs&user=7jZbpU4AAAAJ&gmla=AOv-ny_LxcZAdS0sODDgGSY3UxOoHWw0u99nIAx18BUiuB1z4JLzb0TuGP6GJbSGIO9AeBwkld25f7s55MUwhTFeAwRw7_6KHkdyk8tavLE&sciund=1616266266061304044&gmla=AOv-ny8cKXzpJOCieKYEoO93aSkkm1EAJ6yRpU_C8Ra9wtQGJW31l5ZjiyCg17siWWRJi8gropw3Q0C-I2YgZGlk_uOvtDK9SIcoTuefSDM&sciund=16696051582204621623&gmla=AOv-ny-aF8Ra-3ibr4uphVerh6ZROJbty_7OoOar6eAMpjNbctcqFJ8ES45QVdFo8h1MqLXW8GvxuRADqMyzvc89q3RUUbapC3Jr5GEFHkQ&sciund=10833877346027223618",
    "specialization": "Pharmacology",
    "email": "kajalsherawat01@gmail.com",
    "academicExperience": "",
    "industryExperience": "",
    "experience": "",
    "guided": "Nil",
    "researchInterest": "Neuropharmacology",
    "contactNo": "",
    "website": "",
    "fdpAttended": "",
    "publicationsCount": "",
    "publicationsList": [],
    "awards": [],
    "grants": [],
    "affiliations": [],
    "reviewer": [],
    "moocs": [],
    "gianCourses": [],
    "otherCourses": [],
    "seminarsAttended": [],
    "publicationTable": [
      [
        {
          "text": "Patents Published",
          "link": null
        },
        {
          "text": "Journal Publications",
          "link": null
        },
        {
          "text": "Conference Presentations",
          "link": null
        },
        {
          "text": "Publications Pdf",
          "link": null
        }
      ],
      [
        {
          "text": "02",
          "link": null
        },
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        },
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        },
        {
          "text": "-",
          "link": null
        }
      ],
      [
        {
          "text": "3",
          "link": null
        },
        {
          "text": "0",
          "link": null
        },
        {
          "text": "0",
          "link": null
        },
        {
          "text": "0",
          "link": null
        }
      ]
    ],
    "department": "Pharmacology"
  },
  {
    "id": "f-71",
    "labelId": "71",
    "name": "MR. VIMAL DATT",
    "designation": "ASSISTANT PROFESSOR",
    "qualification": "M.Pharm",
    "photo": "/faculty/Mr. Vimal-Datt-Pic.jpeg",
    "googleScholar": "https://scholar.google.com/citations?hl=en&user=FWUwCOoAAAAJ",
    "specialization": "Pharmaceutical Chemistry",
    "email": "Vimal.datt@niet.co.in",
    "academicExperience": "1 years 10 months",
    "industryExperience": "",
    "experience": "Academic: 1 years 10 months",
    "guided": "NIL",
    "researchInterest": "Anticonvulsants and Anticancer.",
    "contactNo": "",
    "website": "",
    "fdpAttended": "",
    "publicationsCount": "",
    "publicationsList": [],
    "awards": [],
    "grants": [],
    "affiliations": [],
    "reviewer": [],
    "moocs": [],
    "gianCourses": [],
    "otherCourses": [],
    "seminarsAttended": [],
    "publicationTable": [
      [
        {
          "text": "Patents Published",
          "link": null
        },
        {
          "text": "Journal Publications",
          "link": null
        },
        {
          "text": "Conference Presentations",
          "link": null
        },
        {
          "text": "Publications Pdf",
          "link": null
        }
      ],
      [
        {
          "text": "03",
          "link": null
        },
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        },
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        },
        {
          "text": "-",
          "link": null
        }
      ],
      [
        {
          "text": "4",
          "link": null
        },
        {
          "text": "0",
          "link": null
        },
        {
          "text": "2",
          "link": null
        },
        {
          "text": "0",
          "link": null
        }
      ]
    ],
    "department": "Pharmaceutical Chemistry"
  },
  {
    "id": "f-1004",
    "labelId": "1004",
    "name": "MS. ARCHNA SINGH",
    "designation": "ASSISTANT PROFESSOR",
    "qualification": "M.Pharm",
    "photo": "/faculty/Ms. Archana Singh.png",
    "googleScholar": "https://scholar.google.com/citations?user=HImtGCgAAAAJ&hl=en",
    "specialization": "Pharmacology",
    "email": "archna.singh@niet.co.in",
    "academicExperience": "",
    "industryExperience": "",
    "experience": "",
    "guided": "Nil",
    "researchInterest": "Neuropharmacology",
    "contactNo": "",
    "website": "",
    "fdpAttended": "",
    "publicationsCount": "",
    "publicationsList": [],
    "awards": [],
    "grants": [],
    "affiliations": [],
    "reviewer": [],
    "moocs": [],
    "gianCourses": [],
    "otherCourses": [],
    "seminarsAttended": [],
    "publicationTable": [
      [
        {
          "text": "Journal Publications",
          "link": null
        },
        {
          "text": "Conference Presentation",
          "link": null
        }
      ],
      [
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        },
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        }
      ],
      [
        {
          "text": "6",
          "link": null
        },
        {
          "text": "0",
          "link": null
        },
        {
          "text": "3",
          "link": null
        },
        {
          "text": "0",
          "link": null
        }
      ]
    ],
    "department": "Pharmacology"
  },
  {
    "id": "f-70",
    "labelId": "70",
    "name": "Ms. SHRISHTI TRIPATHI",
    "designation": "ASSISTANT PROFESSOR",
    "qualification": "M.Pharm",
    "photo": "/faculty/Ms. Shrishti-Tripathi-Pic.jpg",
    "googleScholar": "https://scholar.google.com/citations?hl=en&user=WRAkqAcAAAAJ",
    "specialization": "Pharmaceutical Chemistry",
    "email": "shrishtitripathi.17@gmail.com",
    "academicExperience": "Nil",
    "industryExperience": "",
    "experience": "Academic: Nil",
    "guided": "Nil",
    "researchInterest": "Organic chemistry, Analytical techniques",
    "contactNo": "",
    "website": "",
    "fdpAttended": "",
    "publicationsCount": "",
    "publicationsList": [],
    "awards": [],
    "grants": [],
    "affiliations": [],
    "reviewer": [],
    "moocs": [],
    "gianCourses": [],
    "otherCourses": [],
    "seminarsAttended": [],
    "publicationTable": [
      [
        {
          "text": "Patents Published",
          "link": null
        },
        {
          "text": "Journal Publications",
          "link": null
        },
        {
          "text": "Conference Presentations",
          "link": null
        },
        {
          "text": "Publications Pdf",
          "link": null
        }
      ],
      [
        {
          "text": "0",
          "link": null
        },
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        },
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        },
        {
          "text": "-",
          "link": null
        }
      ],
      [
        {
          "text": "4",
          "link": null
        },
        {
          "text": "0",
          "link": null
        },
        {
          "text": "2",
          "link": null
        },
        {
          "text": "0",
          "link": null
        }
      ]
    ],
    "department": "Pharmaceutical Chemistry"
  },
  {
    "id": "f-1001",
    "labelId": "1001",
    "name": "MS. SANA PARVEZ",
    "designation": "ASSISTANT PROFESSOR",
    "qualification": "M.Pharm",
    "photo": "/faculty/Ms._Sana_Parvez.png",
    "googleScholar": "https://scholar.google.com/citations?user=t2PMerEAAAAJ&hl=en",
    "specialization": "Pharmaceutical Chemistry",
    "email": "sana.parvez@niet.co.in",
    "academicExperience": "",
    "industryExperience": "",
    "experience": "",
    "guided": "",
    "researchInterest": "Organic syntheses, Crystal Engineering",
    "contactNo": "",
    "website": "",
    "fdpAttended": "",
    "publicationsCount": "",
    "publicationsList": [],
    "awards": [],
    "grants": [],
    "affiliations": [],
    "reviewer": [],
    "moocs": [],
    "gianCourses": [],
    "otherCourses": [],
    "seminarsAttended": [],
    "publicationTable": [
      [
        {
          "text": "Patents Published",
          "link": null
        },
        {
          "text": "Journal Publications",
          "link": null
        },
        {
          "text": "Conference Presentations",
          "link": null
        },
        {
          "text": "Publications Pdf",
          "link": null
        }
      ],
      [
        {
          "text": "00",
          "link": null
        },
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        },
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        },
        {
          "text": "-",
          "link": null
        }
      ],
      [
        {
          "text": "0",
          "link": null
        },
        {
          "text": "0",
          "link": null
        },
        {
          "text": "0",
          "link": null
        },
        {
          "text": "0",
          "link": null
        }
      ]
    ],
    "department": "Pharmaceutical Chemistry"
  },
  {
    "id": "f-10003",
    "labelId": "10003",
    "name": "Dr. SHARAD SHARMA",
    "designation": "ASSISTANT PROFESSOR",
    "qualification": "M Pharm, Ph .D",
    "photo": "/faculty/sharad1.png",
    "googleScholar": "https://scholar.google.com/citations?user=auQmKuMAAAAJ&hl=en",
    "specialization": "Pharmacognosy",
    "email": "Sharad.sharma@niet.co.in",
    "academicExperience": "12 years 10 months",
    "industryExperience": "",
    "experience": "Academic: 12 years 10 months",
    "guided": "00",
    "researchInterest": "Herbal drugs and extraction",
    "contactNo": "",
    "website": "",
    "fdpAttended": "",
    "publicationsCount": "",
    "publicationsList": [],
    "awards": [],
    "grants": [],
    "affiliations": [],
    "reviewer": [],
    "moocs": [],
    "gianCourses": [],
    "otherCourses": [],
    "seminarsAttended": [],
    "publicationTable": [
      [
        {
          "text": "Patents Published",
          "link": null
        },
        {
          "text": "Journal Publications",
          "link": null
        },
        {
          "text": "Conference Presentations",
          "link": null
        },
        {
          "text": "Publications Pdf",
          "link": null
        }
      ],
      [
        {
          "text": "01",
          "link": null
        },
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        },
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        },
        {
          "text": "-",
          "link": null
        }
      ],
      [
        {
          "text": "8",
          "link": null
        },
        {
          "text": "4",
          "link": null
        },
        {
          "text": "12",
          "link": null
        },
        {
          "text": "4",
          "link": null
        }
      ]
    ],
    "department": "Pharmacognosy"
  },
  {
    "id": "f-10004",
    "labelId": "10004",
    "name": "Madhurima",
    "designation": "ASSISTANT PROFESSOR",
    "qualification": "M.PHARM",
    "photo": "/faculty/Madhurima1.jpg",
    "googleScholar": "https://scholar.google.com/citations?user=auQmKuMAAAAJ&hl=en",
    "specialization": "Pharmacognosy",
    "email": "madhurima.sahay10@gmail.com",
    "academicExperience": "7 Months",
    "industryExperience": "",
    "experience": "Academic: 7 Months",
    "guided": "",
    "researchInterest": "Cardiovascular Pharmacology",
    "contactNo": "",
    "website": "",
    "fdpAttended": "",
    "publicationsCount": "",
    "publicationsList": [],
    "awards": [],
    "grants": [],
    "affiliations": [],
    "reviewer": [],
    "moocs": [],
    "gianCourses": [],
    "otherCourses": [],
    "seminarsAttended": [],
    "publicationTable": [
      [
        {
          "text": "Patents Published",
          "link": null
        },
        {
          "text": "Journal Publications",
          "link": null
        },
        {
          "text": "Conference Presentations",
          "link": null
        },
        {
          "text": "Publications Pdf",
          "link": null
        }
      ],
      [
        {
          "text": "01",
          "link": null
        },
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        },
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        },
        {
          "text": "-",
          "link": null
        }
      ],
      [
        {
          "text": "0",
          "link": null
        },
        {
          "text": "1",
          "link": null
        },
        {
          "text": "2",
          "link": null
        },
        {
          "text": "1",
          "link": null
        }
      ]
    ],
    "department": "Pharmacognosy"
  },
  {
    "id": "f-20002",
    "labelId": "20002",
    "name": "Ms. Pakhi Chakraborty",
    "designation": "ASSISTANT PROFESSOR",
    "qualification": "M.PHARM",
    "photo": "/faculty/PakhiChakraborty.jpg",
    "googleScholar": "https://scholar.google.com/citations?user=atia4AoAAAAJ&hl=en",
    "specialization": "Pharmaceutics",
    "email": "pakhi.chakraborty@niet.co.in",
    "academicExperience": "2 years 2 months",
    "industryExperience": "",
    "experience": "Academic: 2 years 2 months",
    "guided": "",
    "researchInterest": "Nanoparticle, Drug discovery, Nanoemulgel",
    "contactNo": "",
    "website": "",
    "fdpAttended": "",
    "publicationsCount": "",
    "publicationsList": [],
    "awards": [],
    "grants": [],
    "affiliations": [],
    "reviewer": [],
    "moocs": [],
    "gianCourses": [],
    "otherCourses": [],
    "seminarsAttended": [],
    "publicationTable": [
      [
        {
          "text": "Patents Published",
          "link": null
        },
        {
          "text": "Journal Publications",
          "link": null
        },
        {
          "text": "Conference Presentations",
          "link": null
        },
        {
          "text": "Book/Chapter",
          "link": null
        }
      ],
      [
        {
          "text": "0",
          "link": null
        },
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        },
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        },
        {
          "text": "01",
          "link": null
        }
      ],
      [
        {
          "text": "0",
          "link": null
        },
        {
          "text": "1",
          "link": null
        },
        {
          "text": "4",
          "link": null
        },
        {
          "text": "1",
          "link": null
        }
      ]
    ],
    "department": "Pharmaceutics"
  },
  {
    "id": "f-20003",
    "labelId": "20003",
    "name": "Mr. ASHISH JOSHI",
    "designation": "ASSISTANT PROFESSOR",
    "qualification": "M.Pharma (Pharmaceutical Chemistry) Google Scholar:",
    "photo": "/faculty/AshishJoshi.png",
    "googleScholar": "https://scholar.google.com/citations?user=gegTjU8AAAAJ&hl=en",
    "specialization": "Pharmaceutical Chemistry",
    "email": "ashish.joshi@niet.co.in",
    "academicExperience": "5 years 2 months",
    "industryExperience": "",
    "experience": "Academic: 5 years 2 months",
    "guided": "",
    "researchInterest": "ANALYTICAL METHOD DEVELOPMENT & VALIDATION OF NOVEL 5α-REDUCTASE INHIBITORS BY RP-HPLC",
    "contactNo": "",
    "website": "",
    "fdpAttended": "",
    "publicationsCount": "",
    "publicationsList": [],
    "awards": [],
    "grants": [],
    "affiliations": [],
    "reviewer": [],
    "moocs": [],
    "gianCourses": [],
    "otherCourses": [],
    "seminarsAttended": [],
    "publicationTable": [
      [
        {
          "text": "Patents Published",
          "link": null
        },
        {
          "text": "Journal Publications",
          "link": null
        },
        {
          "text": "Conference Presentations",
          "link": null
        },
        {
          "text": "Book/Chapter",
          "link": null
        }
      ],
      [
        {
          "text": "0",
          "link": null
        },
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        },
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        },
        {
          "text": "01",
          "link": null
        }
      ],
      [
        {
          "text": "6",
          "link": null
        },
        {
          "text": "05",
          "link": null
        },
        {
          "text": "08",
          "link": null
        },
        {
          "text": "01",
          "link": null
        }
      ]
    ],
    "department": "Pharmaceutical Chemistry"
  },
  {
    "id": "f-20004",
    "labelId": "20004",
    "name": "MR. ANNU BHATI",
    "designation": "ASSISTANT PROFESSOR",
    "qualification": "M.PHARM",
    "photo": "/faculty/MR._ANNU_BHATI.webp",
    "googleScholar": "https://scholar.google.com/citations?user=sjyo_9oAAAAJ&hl=en&oi=ao",
    "specialization": "Pharmacology",
    "email": "annu.bhati@niet.co.in",
    "academicExperience": "00",
    "industryExperience": "",
    "experience": "Academic: 00",
    "guided": "00",
    "researchInterest": "Pharmacokinetics, Pharmacodynamics, and Toxicity studies",
    "contactNo": "",
    "website": "",
    "fdpAttended": "",
    "publicationsCount": "",
    "publicationsList": [],
    "awards": [],
    "grants": [],
    "affiliations": [],
    "reviewer": [],
    "moocs": [],
    "gianCourses": [],
    "otherCourses": [],
    "seminarsAttended": [],
    "publicationTable": [
      [
        {
          "text": "Patents Published",
          "link": null
        },
        {
          "text": "Journal Publications",
          "link": null
        },
        {
          "text": "Conference Presentations",
          "link": null
        },
        {
          "text": "Book/Chapter",
          "link": null
        }
      ],
      [
        {
          "text": "0",
          "link": null
        },
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        },
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        },
        {
          "text": "00",
          "link": null
        }
      ],
      [
        {
          "text": "03",
          "link": null
        },
        {
          "text": "-",
          "link": null
        },
        {
          "text": "03",
          "link": null
        },
        {
          "text": "-",
          "link": null
        }
      ]
    ],
    "department": "Pharmacology"
  },
  {
    "id": "f-20005",
    "labelId": "20005",
    "name": "Ms. Tanu Chaudhary",
    "designation": "ASSISTANT PROFESSOR",
    "qualification": "M.PHARM",
    "photo": "/faculty/tanuch.jpg",
    "googleScholar": "",
    "specialization": "Pharmaceutical Quality Assurance",
    "email": "tanu.chaudhary.@niet.co.in",
    "academicExperience": "3 years",
    "industryExperience": "",
    "experience": "Academic: 3 years",
    "guided": "0",
    "researchInterest": "Analytical Method Development and Validation, Nano Formulations and evaluation.",
    "contactNo": "",
    "website": "",
    "fdpAttended": "",
    "publicationsCount": "",
    "publicationsList": [],
    "awards": [],
    "grants": [],
    "affiliations": [],
    "reviewer": [],
    "moocs": [],
    "gianCourses": [],
    "otherCourses": [],
    "seminarsAttended": [],
    "publicationTable": [
      [
        {
          "text": "Patents Published",
          "link": null
        },
        {
          "text": "Journal Publications",
          "link": null
        },
        {
          "text": "Conference Presentations",
          "link": null
        },
        {
          "text": "Book/Chapter",
          "link": null
        }
      ],
      [
        {
          "text": "1",
          "link": null
        },
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        },
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        },
        {
          "text": "05/04",
          "link": null
        }
      ],
      [
        {
          "text": "2",
          "link": null
        },
        {
          "text": "3",
          "link": null
        },
        {
          "text": "-",
          "link": null
        },
        {
          "text": "-",
          "link": null
        }
      ]
    ],
    "department": "Pharmaceutical Quality Assurance"
  },
  {
    "id": "f-20006",
    "labelId": "20006",
    "name": "Ms. Apoorva Agarwal",
    "designation": "ASSISTANT PROFESSOR",
    "qualification": "M.PHARM",
    "photo": "/faculty/apoorva_agarwal.webp",
    "googleScholar": "",
    "specialization": "Pharmacology",
    "email": "apoorva.ganguly@gmail.com",
    "academicExperience": "7 years",
    "industryExperience": "",
    "experience": "Academic: 7 years",
    "guided": "NA",
    "researchInterest": "Neuropharmacology",
    "contactNo": "",
    "website": "",
    "fdpAttended": "",
    "publicationsCount": "",
    "publicationsList": [],
    "awards": [],
    "grants": [],
    "affiliations": [],
    "reviewer": [],
    "moocs": [],
    "gianCourses": [],
    "otherCourses": [],
    "seminarsAttended": [],
    "publicationTable": [
      [
        {
          "text": "Patents Published",
          "link": null
        },
        {
          "text": "Journal Publications",
          "link": null
        },
        {
          "text": "Conference Presentations",
          "link": null
        },
        {
          "text": "Book/Chapter",
          "link": null
        }
      ],
      [
        {
          "text": "0",
          "link": null
        },
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        },
        {
          "text": "International",
          "link": null
        },
        {
          "text": "National",
          "link": null
        },
        {
          "text": "00",
          "link": null
        }
      ],
      [
        {
          "text": "02",
          "link": null
        },
        {
          "text": "-",
          "link": null
        },
        {
          "text": "02",
          "link": null
        },
        {
          "text": "-",
          "link": null
        }
      ]
    ],
    "department": "Pharmacology"
  }
];



export interface FacultyDocument {
  title: string;
  pdfUrl: string;
}

export const approvedFacultyDocuments: FacultyDocument[] = [
  {
    title: "Approved Faculty List 2024-25",
    pdfUrl: "/pdf/faculty-list/Faculty-list-2024-25.pdf",
  },
  {
    title: "Approved Faculty List 2023-24",
    pdfUrl: "/pdf/faculty-list/Faculty-list-2023-24.pdf",
  },
  {
    title: "Approved Faculty List 2022-23",
    pdfUrl: "/pdf/faculty-list/Faculty-list-2022-23.pdf",
  },
  {
    title: "Approved Faculty List 2021-22",
    pdfUrl: "/pdf/faculty-list/Faculty-list-2021-22.pdf",
  },
];

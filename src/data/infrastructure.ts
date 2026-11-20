export interface InfrastructureTable {
  headers: string[];
  rows: string[][];
}

export interface InfrastructureItem {
  id: string;
  title: string;
  shortTitle?: string;
  subtitle?: string;
  description: string;
  paragraphs?: string[];
  features?: string[];
  images: string[];
  tables?: InfrastructureTable[];
  pdfLink?: { label: string; url: string };
}

export const infrastructureData: InfrastructureItem[] = [
  {
    id: "classrooms",
    title: "Classrooms",
    subtitle: "Smart ICT-Enabled Lecture Theatres & Interactive Learning Spaces",
    paragraphs: [
      "We, at NIET, believe that the whole process of teaching can be highly enhanced by using the latest technological tools which further helps the students gain a better understanding of tough concepts and gives a boost by providing the ways and means to visualize the concept being put forward by the professors, or let’s say, the education experts.",
      "Hence, the classrooms are well-equipped with projectors, computers, high-tech sound systems, OHPs and other kinds of audio-visual tools. The classrooms have ergonomically designed furniture, seamless Wi-Fi connectivity, climate controlling systems, aesthetic lighting and visually pleasing interiors, that make the environment of the classroom more conducive towards learning.",
      "Smart interactive digital podiums and step-tiered acoustic seating ensure clear line-of-sight and auditory clarity from every position in the hall, fostering active classroom discussions and collaborative learning."
    ],
    description: "Well-equipped smart lecture halls with audio-visual equipment, ergonomically designed furniture, high-speed Wi-Fi, and climate control to provide a comfortable and technology-driven learning experience.",
    images: [
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435154/Classrooms.jpg",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793699882/Event-banner.jpg",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793701139/cover.jpg",
      "/images/gallery/thumb-1.jpg",
      "/images/gallery/thumb-2.jpg",
      "/images/gallery/thumb-3.jpg",
      "/images/gallery/thumb-4.jpg",
      "/images/gallery/thumb-5.jpg"
    ],
    tables: []
  },
  {
    id: "library",
    title: "Central Library",
    subtitle: "14,000+ Sq. Ft. Digital Knowledge Repository & 24/7 Reading Space",
    paragraphs: [
      "The libraries at NIET occupy over 14,000 square feet area and provide students access to a vast repository of resources, including books and periodicals. The peaceful and sunlit areas provide ideal study spaces. Our libraries remain open until midnight on all days. During the examinations, they remain open for 24 hours.",
      "Completely automated library management systems make it possible to borrow books at any time of the day or night, as well as make reservations online. Multiple copies ensure that resources are easily available for reference in the library. Trained staff is always at hand to assist students.",
      "In addition to standard hard-bound volumes, students have high-speed digital terminals to access DELNET, IEEE, ScienceDirect, and national digital libraries containing thousands of indexed pharmaceutical research papers and monographs."
    ],
    description: "A 14,000+ sq. ft. central library with an extensive collection of books, national and international journals, automated lending systems, and round-the-clock examination study areas.",
    images: [
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435165/Library.jpg",
      "/images/gallery/thumb-6.jpg",
      "/images/gallery/thumb-7.jpg",
      "/images/gallery/thumb-8.jpg",
      "/images/gallery/thumb-9.jpg",
      "/images/gallery/thumb-10.jpg",
      "/images/research/phd-doctoral.jpg",
      "/images/research/research-publications.jpg"
    ],
    tables: []
  },
  {
    id: "toxicologycentre",
    title: "Toxicology Centre",
    subtitle: "Advanced Pre-Clinical Toxicity Testing & Bio-Safety Facility",
    paragraphs: [
      "At NIET (Pharmacy Institute), we understand the critical role of toxicological studies in pharmaceutical research. Our state-of-the-art Toxicology Centre is designed to facilitate practical learning and in-depth understanding of the effects of chemicals and drugs on biological systems.",
      "The centre is equipped with advanced instrumentation for analytical testing, exposure assessment, and toxicity evaluations, enabling students to engage in experimental learning and research-based activities. The facility strictly follows bio-safety norms and ethical practices, offering a secure and controlled environment for conducting high-impact studies.",
      "With experienced faculty and technical staff, the centre aims to instill scientific curiosity, enhance safety protocols, and support innovative drug discovery and risk assessment programs across undergraduate and doctoral research."
    ],
    description: "A specialized, cutting-edge facility dedicated to toxicological studies, analytical testing, and evaluating the biological safety of new chemical entities in a controlled, bio-safe environment.",
    images: [
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435309/toxicology1.jpg",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435310/toxicology2.jpg",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435163/Laboratory-1.jpg",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435164/Laboratory-2.jpg",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435164/Laboratory-3.jpg",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435162/instrument.jpg",
      "/images/research/research-development.jpg",
      "/images/research/patents.jpg"
    ],
    tables: []
  },
  {
    id: "animalhouse",
    title: "Animal House",
    subtitle: "CPCSEA-Approved Pre-Clinical Pharmacology & In Vivo Research Centre",
    paragraphs: [
      "In alignment with our commitment to quality education and ethical research, NIET (Pharmacy Institute) establishes a CPCSEA-approved Animal House facility that supports in vivo research essential for pharmaceutical sciences.",
      "The Animal House is maintained under the highest standards of hygiene, ventilation, and temperature control to ensure the well-being of the laboratory animals. It serves as a vital resource for pharmacological testing, toxicological assessments, and pre-clinical drug evaluations.",
      "The facility adheres strictly to all statutory guidelines for animal care, ensuring humane handling and ethical experimentation. Our students are trained to conduct studies responsibly, promoting an understanding of animal models in therapeutic development."
    ],
    description: "A statutory CPCSEA-registered facility providing ethical housing, controlled quarantine, and temperature-regulated environments for pre-clinical screening of therapeutic drug candidates.",
    images: [
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435150/animalhouse1.jpg",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435151/animalhouse2.jpg",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435151/animalhouse3.jpg",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435152/animalhouse4.jpg",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435152/animalhouse5.jpg",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435153/animalhouse6.jpg",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435149/Animal_House_1.jpg",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435149/Animal_House_2.jpg"
    ],
    tables: []
  },
  {
    id: "laboratory",
    title: "Laboratories",
    subtitle: "Comprehensive Departmental Practical & Formulation Facilities",
    paragraphs: [
      "NIET believes in acing practicality along with theoretical expertise. The laboratories we possess aren't just for conducting chemical experiments, but also for brainstorming new ideas as well as learning new scientific workflows every day.",
      "With refined infrastructure, best-in-market equipment to work on, the laboratories aim to fulfil every curiosity that a keen mind has towards learning. Apart from technical aspects, the labs also help students learn practical implementation of theoretical knowledge with assistance from expert professors and technical assistants.",
      "The institute features 16 specialized laboratories covering Pharmaceutics, Pharmacognosy, Pharmaceutical Chemistry, Pharmacology, Microbiology with dedicated Aseptic Suites, and Anatomy & Physiology."
    ],
    description: "16 dedicated pharmaceutical laboratories configured for synthetic chemistry, formulation development, pharmacognosy, microbiology, and pre-clinical screening.",
    images: [
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435163/Laboratory-1.jpg",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435164/Laboratory-2.jpg",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435164/Laboratory-3.jpg",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435162/instrument.jpg",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435163/Instrument_room_1.jpg",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435161/Instrument_room_2.jpg",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435309/toxicology1.jpg",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435310/toxicology2.jpg"
    ],
    tables: [
      {
        headers: ["S.No", "Laboratory Name", "Key Domain"],
        rows: [
          ["1", "Pharmaceutics Lab I", "Formulation & Dispensing"],
          ["2", "Pharmaceutics Lab II", "Industrial Pharmacy Unit Operations"],
          ["3", "Physical Pharmacy Lab", "Rheology & Colloid Science"],
          ["4", "Microbiology Lab", "Sterility Testing & Aseptic Room"],
          ["5", "Pharmacognosy Lab", "Crude Drugs & Extraction"],
          ["6", "Phytochemistry Lab", "Herbal Standardization"],
          ["7", "Pharm. Chem. Lab-I", "Organic & Medicinal Synthesis"],
          ["8", "Pharm. Chem. Lab-II", "Inorganic & Bio-organic Analysis"],
          ["9", "Pharmaceutical Analysis Lab", "Titrimetry, Spectrometry & Quality Control"],
          ["10", "Computer & Modeling Lab", "In Silico CADD & Bioinformatics"],
          ["11", "Anatomy & Physiology Lab", "Histology, Hematology & Bio-Models"],
          ["12", "Pharmacology Lab", "Organ Bath & In Vivo Pharmacodynamics"],
          ["13", "Pharmaceutics Research Lab I", "Novel Drug Delivery Systems (NDDS)"],
          ["14", "Pharmaceutics Research Lab II", "Polymer & Nano-carrier Formulations"],
          ["15", "Pharmacology Research Lab", "Pre-clinical Neuro & Metabolic Assays"],
          ["16", "Pharm. Chem. Research Lab", "Drug Synthesis & Lead Optimization"]
        ]
      }
    ]
  },
  {
    id: "hostel",
    title: "Hostel & Residences",
    subtitle: "Secure, Modern Residential Living with Round-the-Clock Amenities",
    paragraphs: [
      "While students can choose to be day scholars, we believe that campus living encourages independence and helps students develop the ability to adapt. The leafy, lush green NIET campus offers delightful spaces for study, sports and social interaction.",
      "The residential facilities are carefully designed according to modern standards. Three hostels on the campus offer well-ventilated, comfortable rooms with separate dedicated blocks for girls and boys. Rooms are available on single, double, and multi-sharing basis.",
      "Common recreational lounges develop camaraderie and foster long-term bonds. Stringent round-the-clock biometric security arrangements, continuous power backup, and a medical doctor on call ensure that all student welfare needs are promptly attended to."
    ],
    description: "Comfortable, air-cooled on-campus hostels for boys and girls featuring 24/7 security, Wi-Fi connectivity, mess facilities, and round-the-clock medical care.",
    images: [
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435158/hostel-facilities-1.webp",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435158/hostel-facilities-2.webp",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435159/hostel-facilities-3.webp",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435154/Canteen.jpg",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435155/gym--1.webp",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435155/gym-1.webp",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435168/Transp1.webp",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435154/Classrooms.jpg"
    ],
    tables: []
  },
  {
    id: "sports",
    title: "Sports & Leisure",
    subtitle: "Multi-Sport Complex, Cricket Ground, Indoor Courts & Athletics",
    paragraphs: [
      "At NIET, students develop leadership and team skills while pursuing their interests through diverse athletic organizations. From cricket to basketball, athletics to yoga, students can stay active and physically fit in any discipline they choose.",
      "Excellent coaching facilities allow students to hone their talents, and NIET sports teams regularly win accolades across inter-collegiate and university tournaments. Outdoor complexes include cricket grounds, football fields, volleyball courts, and standard athletic tracks.",
      "NIET also runs the community Marathon Club and hosts annual sports galas where hundreds of pharmacy scholars participate to foster holistic well-being and active team camaraderie."
    ],
    description: "Extensive indoor and outdoor sports infrastructure spanning basketball courts, cricket pitches, badminton halls, athletic tracks, and table tennis facilities.",
    images: [
      "https://www.niet.co.in/assets/frontend/images/sports-1.webp",
      "https://www.niet.co.in/assets/frontend/images/sports2.webp",
      "https://www.niet.co.in/assets/frontend/images/sports3.webp",
      "https://www.niet.co.in/assets/frontend/images/sport4.webp",
      "https://www.niet.co.in/assets/frontend/images/sports-5.webp",
      "https://www.niet.co.in/assets/frontend/images/sports-6.webp",
      "https://www.niet.co.in/assets/frontend/images/sports-7.webp",
      "https://www.niet.co.in/assets/frontend/images/gym--2.webp"
    ],
    tables: []
  },
  {
    id: "canteen",
    title: "Canteen & Dining",
    subtitle: "Hygienic Multi-Cuisine Food Courts & Student Mess Facilities",
    paragraphs: [
      "The NIET college canteen is not just a place to dine; it serves as a vibrant social arena for discussions, study groups, relaxation, and memorable moments with friends between academic sessions.",
      "The institute features well-furnished, spacious canteens that offer hygienic, freshly prepared breakfast, lunch, hot beverages, and nutritious snacks under strict quality control standards.",
      "The dining halls are maintained under high standards of cleanliness, with modern commercial kitchen equipment and seating arrangements designed to comfortably accommodate hundreds of scholars simultaneously."
    ],
    description: "Multi-outlet hygienic cafeteria and cooperative dining halls offering clean, nutritious, and balanced meal plans for day scholars, hostellers, and staff.",
    images: [
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435154/Canteen.jpg",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435158/hostel-facilities-1.webp",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435158/hostel-facilities-2.webp",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435159/hostel-facilities-3.webp",
      "https://www.niet.co.in/assets/frontend/images/sports-1.webp",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435155/gym--1.webp",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435154/Classrooms.jpg",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435165/Library.jpg"
    ],
    tables: []
  },
  {
    id: "gymnasium",
    title: "Modern Gymnasium",
    subtitle: "State-of-the-Art Fitness Arena & Advanced Exercise Equipment",
    paragraphs: [
      "To help students keep their bodies fit alongside rigorous intellectual endeavors, NIET Pharmacy houses a state-of-the-art gymnasium equipped with the latest cardio and weight-training equipment.",
      "Facility equipment includes motorized treadmills, elliptical cross trainers, exercise bikes, multi-station weight machines, dumbbells, bench presses, and dedicated stretching areas.",
      "Certified instructors guide students on physical fitness routines, posture, and wellness regimens, fostering an active, healthy lifestyle across campus."
    ],
    description: "Fully equipped campus gymnasium with cardio machines, free weights, Olympic lifting stations, and qualified fitness instructors.",
    images: [
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435155/gym--1.webp",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435155/gym--2.webp",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435155/gym-1.webp",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435156/gym-2.webp",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435156/gym-3.webp",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435157/gym-4.webp",
      "https://www.niet.co.in/assets/frontend/images/sports-5.webp",
      "https://www.niet.co.in/assets/frontend/images/sports-6.webp"
    ],
    tables: []
  },
  {
    id: "transportation",
    title: "Transportation",
    subtitle: "Extensive Safe Transit Network Across Delhi NCR & Greater Noida",
    paragraphs: [
      "NIET provides a comprehensive, punctual, and safe fleet of institute buses connecting all prominent residential hubs of New Delhi, Noida, Greater Noida, Ghaziabad, and Faridabad.",
      "Buses are operated by experienced drivers, equipped with GPS telemetry and speed governors, ensuring that day scholars commute smoothly, securely, and comfortably.",
      "Transit schedules are carefully synchronized with academic morning lectures and evening laboratory sessions, making daily travel effortless and reliable for students and faculty alike."
    ],
    description: "GPS-enabled fleet of institute buses operating across comprehensive routes covering Delhi, Noida, Ghaziabad, and NCR regions.",
    images: [
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435168/Transp1.webp",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435168/Transp2.webp",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435169/Transp3.webp",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435153/buss.webp",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435169/Transp4.webp",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793699882/Event-banner.jpg",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435158/hostel-facilities-1.webp",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435154/Classrooms.jpg"
    ],
    tables: []
  },
  {
    id: "garden",
    title: "Medical Plant Garden",
    subtitle: "Botanical Repository of Indigenous Medicinal & Aromatic Plants",
    paragraphs: [
      "Today, there is a great demand for herbal medicines in the market on account of fewer side effects in comparison to synthetic pharmaceuticals. The Department maintains an extensive Medicinal Plant Garden with a rich collection of rare and therapeutic plant species.",
      "More than 100 plants of medicinal and aromatic importance have been established and are scientifically nurtured in the Herbal Garden. For this purpose there are facilities in Pharmacy institute for developing various herbal drugs and formulations.",
      "Garden training is an integral part of the curriculum; students utilize diverse herbal species for their pharmacognostic evaluation, herbal drug technology projects, and natural product research."
    ],
    description: "Botanical repository featuring over 100 therapeutic, medicinal, and aromatic plant species maintained for pharmacognostic evaluation, herbal drug extraction, and natural products research.",
    images: [
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435167/Medicinal-Garden.jpg",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435163/Laboratory-1.jpg",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435164/Laboratory-2.jpg",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435164/Laboratory-3.jpg",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435162/instrument.jpg"
    ],
    tables: []
  },
  {
    id: "instrumentation",
    title: "Instrumentation Lab (SIF)",
    subtitle: "Central Instrumentation Facility with Advanced Analytical Systems",
    paragraphs: [
      "The Pharmacy Institute houses two specialized instrumentation suites alongside the Central Instrumentation Facility (SIF), equipped with high-value analytical instruments to cater to advanced research, testing, and characterization.",
      "Equipped with HPLC, UV-Vis Spectrophotometers, FT-IR Spectrometers, Karl Fischer Titrimeters, Fluorimeters, Moisture Analyzers, and Dissolution Test Apparatus, this facility supports rigorous empirical testing for Undergraduates, Postgraduates, and Doctoral Scholars.",
      "The instrumentation suites follow Good Laboratory Practices (GLP), providing calibrated testing environments for trace chemical assay, pharmacokinetic profiles, and structural drug elucidation."
    ],
    description: "High-precision analytical instrumentation hub housing HPLC, FTIR, UV-Vis, Karl Fischer titrimeter, and dissolution systems for advanced quality control and research assays.",
    images: [
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435162/instrument.jpg",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435163/Instrument_room_1.jpg",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435161/Instrument_room_2.jpg",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435161/Instrument_room_3.jpg",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435161/Instrument_room_4.jpg",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435161/instrument-room.jpg",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435309/toxicology1.jpg",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435163/Laboratory-1.jpg"
    ],
    tables: [
      {
        headers: ["S No.", "Name of Instrument", "Primary Application"],
        rows: [
          ["1", "Flame Photometer", "Alkali Metal Elemental Analysis"],
          ["2", "Fluorimeter", "Fluorescence & Luminescence Assays"],
          ["3", "Potentiometer", "Electrochemical Oxidation-Reduction"],
          ["4", "Auto Karl Fischer Titrimeter", "Precise Moisture Content Estimation"],
          ["5", "Moisture Balance", "Thermogravimetric Moisture Loss"],
          ["6", "Ultrasonic Sonicator", "Cell Disruption & Degassing"],
          ["7", "Digital pH Meter", "Aqueous Solution Hydrogen Ion Activity"],
          ["8", "High-Performance Liquid Chromatography (HPLC)", "Quantitative Separation & Purity Assay"],
          ["9", "Trinocular Research Microscope", "Microscopic Examination & Image Capture"],
          ["10", "Digital Balance (0.1 mg)", "Analytical Precision Weighing"],
          ["11", "UV-Vis Double Beam Spectrophotometer", "Quantitative Absorption Spectroscopy"],
          ["12", "Fourier-Transform Infrared Spectrometer (FT-IR)", "Molecular Functional Group Characterization"],
          ["13", "KBr Hydraulic Pellet Press", "Solid Sample Disk Preparation for IR"],
          ["14", "Polarograph", "Voltammetric Trace Analysis"],
          ["15", "Nephelo-Turbidimeter", "Colloidal Suspensions & Haze Measurement"],
          ["16", "Digital Dissolution Test Apparatus (USP)", "In Vitro Drug Release Profiling"],
          ["17", "Tablet Disintegration Apparatus", "Solid Dosage Breakdown Kinetics"],
          ["18", "Brookfield Viscometer & Rheometer", "Fluid & Semi-Solid Flow Rheology"]
        ]
      }
    ]
  },
  {
    id: "machine",
    title: "Machine Room",
    subtitle: "Industrial Scale Pharmaceutical Manufacturing & Pilot Plant",
    paragraphs: [
      "The Machine Room serves as a pilot-scale industrial simulation plant, providing students hands-on familiarity with full-scale pharmaceutical manufacturing operations.",
      "The facility houses commercial equipment including Rotary 16-Station Tablet Punching Machines, Tablet Coating Pans, Ampoule Washing & Sealing Apparatus, Capsule Filling Machines, Tray Dryers, and Ointment Tube Crimping Machines.",
      "Working in the Machine Room enables pharmacy scholars to master scale-up fundamentals, packaging mechanics, solid dosage compaction, and Good Manufacturing Practice (GMP) protocols demanded by pharmaceutical companies."
    ],
    description: "Industrial pilot plant equipped with 16-station rotary tablet presses, coating pans, ampoule fillers, capsule loaders, and tray dryers for practical formulation processing.",
    images: [
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435161/instrument-room.jpg",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435168/Machine_room_1.jpg",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435166/Machine_room_2.jpg",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435167/Machine_room_3.jpg",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435167/Machine_room_4.jpg",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435162/instrument.jpg",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435164/Laboratory-2.jpg",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435164/Laboratory-3.jpg"
    ],
    tables: [
      {
        headers: ["S.No", "Machine / Equipment", "Unit Operation"],
        rows: [
          ["1", "Ampoule Sealing Machine", "Aseptic Glass Ampoule Hermetic Closure"],
          ["2", "Ampoule Washing Machine", "High-Pressure Injectable Washing"],
          ["3", "Industrial Ball Mill", "Size Reduction & Micronization"],
          ["4", "Automatic Bottle Filling Machine", "Liquid Syrups & Elixir Dispensing"],
          ["5", "B.O.D. Incubator", "Biological Oxygen Demand Storage"],
          ["6", "Rotary Bottle Sealing & Capping Machine", "Pilfer-Proof Container Sealing"],
          ["7", "Double Cone Blender", "Homogeneous Powder Blending"],
          ["8", "Motorized Disintegrator", "Coarse Granule Pulverization"],
          ["9", "Roche Friabilator", "Tablet Mechanical Durability Testing"],
          ["10", "Digital Monsanto / Pfizer Hardness Tester", "Radial Crushing Strength Assay"],
          ["11", "Collapsible Ointment Tube Filling & Crimping", "Semi-Solid Creams Packaging"],
          ["12", "Electrically Operated Tray Dryer", "Granule Dehydration & Moisture Removal"],
          ["13", "Tablet Coating Pan with Hot Air Blower", "Sugar & Film Coating of Core Tablets"],
          ["14", "Rotary 16-Station Tablet Punching Machine", "High-Speed Pharmaceutical Compression"],
          ["15", "Semi-Automatic Capsule Filling Machine", "Gelatin Capsule Alignment & Powder Filling"],
          ["16", "Tablet & Capsule Counting Device", "Packaging Unit Counting Accuracy"],
          ["17", "Reynolds & Bernoulli Fluid Flow Apparatus", "Pharmaceutical Engineering Hydrodynamics"],
          ["18", "Rotary Sieve Shaker with Standard Mesh", "Particle Size Distribution Grading"]
        ]
      }
    ]
  }
];

import { AdminInfrastructureModule } from "../types";

export const initialInfrastructureModules: AdminInfrastructureModule[] = [
  {
    id: "classrooms",
    slug: "classrooms",
    name: "Classrooms",
    title: "Smart Classrooms & Lecture Theatres",
    subtitle: "Smart ICT-Enabled Lecture Theatres & Interactive Learning Spaces",
    description: "Well-equipped smart lecture halls with audio-visual equipment, step-tiered acoustic seating, high-speed Wi-Fi, and climate control to provide a comfortable technology-driven learning experience.",
    features: [
      "Digital smart podiums with touch interactive displays",
      "Tiered acoustic seating ensuring visual clarity",
      "High-speed campus-wide Wi-Fi connectivity",
      "Advanced ceiling projection and audio reinforcement"
    ],
    imageUrl: "https://res.cloudinary.com/boss8zib/image/upload/v1793435154/Classrooms.jpg",
    images: [
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435154/Classrooms.jpg",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793699882/Event-banner.jpg",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793701139/cover.jpg",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435165/Library.jpg"
    ],
    status: "Visible"
  },
  {
    id: "library",
    slug: "library",
    name: "Central Library",
    title: "Central Digital Library",
    subtitle: "14,000+ Sq. Ft. Digital Knowledge Repository & 24/7 Reading Space",
    description: "Over 14,000 sq. ft. central library with access to vast repositories of international journals, DELNET, ScienceDirect, automated RFID book lending, and round-the-clock reading halls during exams.",
    features: [
      "14,000+ sq. ft. fully air-conditioned reading arena",
      "Automated RFID borrowing & online catalog reservation",
      "High-speed terminals for DELNET, IEEE & ScienceDirect access",
      "Open 24/7 during semester examination schedules"
    ],
    imageUrl: "https://res.cloudinary.com/boss8zib/image/upload/v1793435165/Library.jpg",
    images: [
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435165/Library.jpg",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435154/Classrooms.jpg",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793699882/Event-banner.jpg",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793701139/cover.jpg"
    ],
    status: "Visible"
  },
  {
    id: "laboratories",
    slug: "laboratories",
    name: "Laboratories",
    title: "Pharmaceutical Laboratories",
    subtitle: "Specialized Subject Labs for Pharmaceutics, Chemistry & Pharmacology",
    description: "State-of-the-art laboratories designed as per PCI & AICTE norms, equipped with precision balances, digital apparatus, fume hoods, and dedicated safety emergency stations.",
    features: [
      "Dedicated labs for Pharmaceutics, Pharmacognosy & Analysis",
      "USFDA-compliant safety stations and laminar air flows",
      "Individual workstation kits for undergraduate scholars",
      "Automated waste disposal and green solvent handling"
    ],
    imageUrl: "https://res.cloudinary.com/boss8zib/image/upload/v1793435164/Laboratories.jpg",
    images: [
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435163/Laboratory-1.jpg",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435164/Laboratory-2.jpg",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435164/Laboratory-3.jpg",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435162/instrument.jpg"
    ],
    status: "Visible"
  },
  {
    id: "instrumentation-lab",
    slug: "instrumentation-lab",
    name: "Instrumentation Lab",
    title: "Central Instrumentation Lab (CIL)",
    subtitle: "Advanced Analytical Research Suite with HPLC, GC-MS & UV Spectrophotometer",
    description: "Climate-controlled research facility housing high-end chromatographic and spectroscopic instruments to support doctoral thesis research and industry-sponsored validation studies.",
    features: [
      "High Performance Liquid Chromatography (HPLC) units",
      "Gas Chromatography with Mass Spectrometry (GC-MS)",
      "Double-beam UV-Visible Spectrophotometers",
      "FTIR spectrophotometer with attenuated total reflectance"
    ],
    imageUrl: "https://res.cloudinary.com/boss8zib/image/upload/v1793434681/IMG_3441.jpg",
    images: [
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435162/instrument.jpg",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435163/Instrument_room_1.jpg",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435161/Instrument_room_2.jpg",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793434681/IMG_3441.jpg"
    ],
    status: "Visible"
  },
  {
    id: "machine-room",
    slug: "machine-room",
    name: "Machine Room",
    title: "Industrial Machine Room",
    subtitle: "Pilot-Scale Solid & Liquid Formulation Manufacturing Facility",
    description: "Simulates industrial pilot-plant manufacturing environments with rotary tablet punching machines, dissolution test apparatus, coating pans, and ampoule filling units.",
    features: [
      "Multi-station rotary tablet punching press",
      "Automated tablet coating and polishing pans",
      "USP-compliant dissolution & disintegration apparatus",
      "Ointment filling, crimping, and tube sealing machines"
    ],
    imageUrl: "https://res.cloudinary.com/boss8zib/image/upload/v1793434839/IMG_7213.jpg",
    images: [
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435161/instrument-room.jpg",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435168/Machine_room_1.jpg",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793434839/IMG_7213.jpg",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435164/Laboratories.jpg"
    ],
    status: "Visible"
  },
  {
    id: "animal-house",
    slug: "animal-house",
    name: "Animal House",
    title: "CCSEA Approved Animal House",
    subtitle: "Certified Experimental Biology Facility for Preclinical Pharmacological Trials",
    description: "Maintained in strict compliance with CCSEA guidelines featuring temperature and humidity controlled quarantine rooms, surgical suites, and experimental observation zones.",
    features: [
      "Certified under CCSEA registration guidelines",
      "12-hour light/dark cycle micro-environment chambers",
      "HEPA-filtered clean air ventilation supply",
      "Dedicated sterile surgical and recovery suites"
    ],
    imageUrl: "https://res.cloudinary.com/boss8zib/image/upload/v1793434682/IMG_3476.jpg",
    images: [
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435150/animalhouse1.jpg",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435151/animalhouse2.jpg",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793434682/IMG_3476.jpg",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435309/toxicology1.jpg"
    ],
    status: "Visible"
  },
  {
    id: "medical-plant-garden",
    slug: "medical-plant-garden",
    name: "Herbal Garden",
    title: "Medicinal Plant Garden (Herbal Garden)",
    subtitle: "Botanical Conservatory of 120+ Authentic Medicinal & Aromatic Plants",
    description: "Extensive botanical garden serving as a living herbarium for pharmacognostic field study, natural drug extraction, and taxonomic identification.",
    features: [
      "120+ certified medicinal, aromatic, and rare species",
      "Organized taxonomic beds with scientific nomenclature tags",
      "Integrated drip-irrigation and organic composting unit",
      "Shade-house for delicate and high-altitude medicinal herbs"
    ],
    imageUrl: "https://res.cloudinary.com/boss8zib/image/upload/v1793434840/IMG_7305.jpg",
    images: [
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435167/Medicinal-Garden.jpg",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435163/Laboratory-1.jpg",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793434840/IMG_7305.jpg",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435154/Classrooms.jpg"
    ],
    status: "Visible"
  },
  {
    id: "toxicology-centre",
    slug: "toxicology-centre",
    name: "Toxicology Centre",
    title: "Preclinical Toxicology Centre",
    subtitle: "Advanced In-Vivo & In-Vitro Safety Evaluation Facility",
    description: "Dedicated toxicology centre focused on acute, sub-acute, and chronic toxicity assays for novel chemical entities and botanical formulations.",
    features: [
      "Computer-assisted behavioral tracking software",
      "Biochemical and hematological auto-analyzers",
      "Dedicated histopathology tissue processing unit",
      "Strict ethical oversight by Institutional Animal Ethics Cell"
    ],
    imageUrl: "https://res.cloudinary.com/boss8zib/image/upload/v1793434685/IMG_4189.jpg",
    images: [
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435309/toxicology1.jpg",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435310/toxicology2.jpg",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793434685/IMG_4189.jpg",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435150/animalhouse1.jpg"
    ],
    status: "Visible"
  },
  {
    id: "hostel",
    slug: "hostel",
    name: "Hostel & Residences",
    title: "Hostel & On-Campus Residences",
    subtitle: "Secure Residential Accommodations with Modern Amenities & Dining",
    description: "Separate on-campus residential wings for boys and girls with furnished rooms, round-the-clock security, hygienic mess, high-speed Wi-Fi, and recreation lounges.",
    features: [
      "Separate wings for male and female scholars with biometric entry",
      "Nutritious hygienic dining serving varied regional meals",
      "24/7 CCTV surveillance and resident medical support",
      "Dedicated indoor sports lounge and high-speed Wi-Fi"
    ],
    imageUrl: "https://res.cloudinary.com/boss8zib/image/upload/v1793435165/Hostel.jpg",
    images: [
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435165/Hostel.jpg",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435158/hostel-facilities-1.webp",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435154/Canteen.jpg",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435164/Gymnasium.jpg"
    ],
    status: "Visible"
  },
  {
    id: "gymnasium",
    slug: "gymnasium",
    name: "Gymnasium",
    title: "Modern Fitness Centre & Gymnasium",
    subtitle: "Equipped Wellness Centre for Physical Fitness & Health",
    description: "Air-conditioned health centre equipped with commercial cardio machines, free weights, resistance equipment, and certified fitness instructors.",
    features: [
      "Treadmills, cross-trainers, and elliptical cardio machines",
      "Olympic free weights, barbells, and dumbell racks",
      "Certified male and female fitness trainers",
      "Aerobics and yoga studio with wooden flooring"
    ],
    imageUrl: "https://res.cloudinary.com/boss8zib/image/upload/v1793435164/Gymnasium.jpg",
    images: [
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435164/Gymnasium.jpg",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435155/gym--1.webp",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435155/gym--2.webp",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435165/Hostel.jpg"
    ],
    status: "Visible"
  },
  {
    id: "sports-and-leisure",
    slug: "sports-and-leisure",
    name: "Sports & Leisure",
    title: "Sports & Recreation Grounds",
    subtitle: "Expansive Outdoor Athletic Grounds & Indoor Sports Arenas",
    description: "Multi-acre sports complex featuring cricket pitch, football ground, basketball court with floodlights, badminton courts, and table tennis halls.",
    features: [
      "Full-sized cricket ground with turf practice nets",
      "Floodlit basketball and lawn tennis courts",
      "Indoor badminton courts with wooden athletic flooring",
      "Annual zonal sports festival arena"
    ],
    imageUrl: "https://res.cloudinary.com/boss8zib/image/upload/v1793778124/events/AKTU_Zonal_Session_2025_26/WhatsApp_Image_2026_04_04_at_10_22_02_AM_1.jpg",
    images: [
      "https://res.cloudinary.com/boss8zib/image/upload/v1793778124/events/AKTU_Zonal_Session_2025_26/WhatsApp_Image_2026_04_04_at_10_22_02_AM_1.jpg",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435164/Gymnasium.jpg",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435154/Classrooms.jpg",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793699882/Event-banner.jpg"
    ],
    status: "Visible"
  },
  {
    id: "canteen",
    slug: "canteen",
    name: "Canteen & Dining",
    title: "Campus Cafeteria & Food Court",
    subtitle: "Multi-Cuisine Hygienic Dining & Social Hangout Arena",
    description: "Modern food court providing clean, affordable, and diverse meal selections, quick refreshments, branded coffee corners, and spacious shaded seating.",
    features: [
      "FSSAI certified food prep and hygienic handling standards",
      "Diverse menu including North Indian, South Indian, and snacks",
      "Spacious indoor seating and open-air garden patio",
      "Cashless digital billing & quick service counters"
    ],
    imageUrl: "https://res.cloudinary.com/boss8zib/image/upload/v1793435154/Canteen.jpg",
    images: [
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435154/Canteen.jpg",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435158/hostel-facilities-1.webp",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435165/Hostel.jpg",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435164/Gymnasium.jpg"
    ],
    status: "Visible"
  },
  {
    id: "transportation",
    slug: "transportation",
    name: "Transportation",
    title: "Campus Transportation Fleet",
    subtitle: "Comprehensive Air-Conditioned Bus Fleet Covering Delhi NCR",
    description: "Safe and punctual transport services connecting Greater Noida campus with Delhi, Noida, Ghaziabad, Faridabad, and Gurugram.",
    features: [
      "GPS-enabled fleet of modern air-conditioned buses",
      "50+ designated pickup routes covering Delhi NCR",
      "Trained commercial drivers with dedicated speed limiters",
      "Real-time mobile tracking app for parents and commuters"
    ],
    imageUrl: "https://res.cloudinary.com/boss8zib/image/upload/v1793435168/Transp1.webp",
    images: [
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435168/Transp1.webp",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435168/Transp2.webp",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435154/Classrooms.jpg",
      "https://res.cloudinary.com/boss8zib/image/upload/v1793435165/Library.jpg"
    ],
    status: "Visible"
  }
];

export interface GalleryPhoto {
  id: number;
  title: string;
  image: string;
  category: "labs" | "campus" | "aktu" | "events";
  categoryLabel: string;
  description?: string;
}

// Cloudinary CDN soft URL builder
const cdn = (path: string) => `https://res.cloudinary.com/boss8zib/image/upload/${path}`;

// 23 authentic Laboratory & Research photos from Cloudinary (NIET images > images > gallery > lab photos)
export const labPhotoFiles: string[] = [
  "DSC02299.jpg",
  "DSC02304.jpg",
  "DSC02306.jpg",
  "DSC02312_1.jpg",
  "DSC02317.jpg",
  "DSC02337.jpg",
  "DSC02348.jpg",
  "DSC02356.jpg",
  "DSC02357.jpg",
  "DSC02359.jpg",
  "DSC02368.jpg",
  "DSC02369.jpg",
  "DSC02373.jpg",
  "DSC02383.jpg",
  "DSC02413.jpg",
  "DSC02424.jpg",
  "DSC02428.jpg",
  "DSC02434.jpg",
  "DSC02441_1.jpg",
  "DSC02443.jpg",
  "DSC02460.jpg",
  "DSC02465.jpg",
  "DSC02472.jpg",
];

export const labGalleryPhotos: GalleryPhoto[] = labPhotoFiles.map((file, i) => ({
  id: 200 + i + 1,
  title: `NIET Pharmacy Research Laboratory ${i + 1}`,
  image: cdn(file),
  category: "labs",
  categoryLabel: "Laboratories",
  description: "Pharmaceutical Research & Formulation Laboratory",
}));

// 26 authentic AKTU State Convention photos (Cloudinary soft URLs)
export const aktuGalleryPhotos: GalleryPhoto[] = Array.from({ length: 26 }, (_, i) => {
  const num = (i + 1).toString().padStart(2, "0");
  return {
    id: 100 + i + 1,
    title: `AKTU State Convention Photograph ${num}`,
    image: cdn(`AKTU_${num}.jpg`),
    category: "aktu",
    categoryLabel: "AKTU Convention",
    description: "AKTU State Convention & Academic Dignitaries Event",
  };
});

// Campus Facilities photos (Cloudinary soft URLs)
export const campusFacilitiesPhotos: GalleryPhoto[] = [
  { id: 301, title: "Smart Pharmaceutical Classrooms", image: cdn("Classrooms.jpg"), category: "campus", categoryLabel: "Campus Life", description: "Air-conditioned amphitheatre lecture rooms with interactive audio-visual projectors." },
  { id: 302, title: "Central Knowledge Repository & Library", image: cdn("Library.jpg"), category: "campus", categoryLabel: "Campus Life", description: "14,000+ sq. ft. central library with digital terminals and round-the-clock study zones." },
  { id: 303, title: "Medicinal Plant Botanical Garden", image: cdn("Medicinal-Garden.jpg"), category: "campus", categoryLabel: "Campus Life", description: "Curated botanical arboretum of authentic therapeutic and medicinal flora." },
  { id: 304, title: "Student Campus Residences & Hostels", image: cdn("Hostel.jpg"), category: "campus", categoryLabel: "Campus Life", description: "On-campus hostel accommodations with Wi-Fi, recreation lounges, and 24/7 security." },
  { id: 305, title: "Modern Campus Gymnasium", image: cdn("Gymnasium.jpg"), category: "campus", categoryLabel: "Campus Life", description: "Fully equipped cardio and strength training arena with certified trainers." },
  { id: 306, title: "Sports Complex & Athletic Grounds", image: cdn("Sports.jpg"), category: "campus", categoryLabel: "Campus Life", description: "Multi-sport athletic complex for cricket, basketball, volleyball, and athletics." },
  { id: 307, title: "Campus Food Court & Dining Cafeteria", image: cdn("Canteen.jpg"), category: "campus", categoryLabel: "Campus Life", description: "Hygienic multi-cuisine dining cafeteria with nutritious meal services." },
  { id: 308, title: "Transit Fleet & Student Transportation", image: cdn("Transp1.webp"), category: "campus", categoryLabel: "Campus Life", description: "GPS-enabled fleet of institute buses operating across Delhi NCR." },
  { id: 309, title: "NIET Pharmacy Campus Landmark", image: cdn("Niet.jpg"), category: "campus", categoryLabel: "Campus Life", description: "Institutional entrance and lush green academic campus grounds." },
];

// Academic Conferences & Events photos (Cloudinary soft URLs)
export const eventGalleryPhotos: GalleryPhoto[] = [
  { id: 401, title: "Academic Conference & Felicitation Ceremony", image: cdn("niet_event1.jpg"), category: "events", categoryLabel: "Conferences", description: "National pharmacy symposium with leading academic and industry dignitaries." },
  { id: 402, title: "Faculty & Expert Lecture Delegation", image: cdn("niet_event2.jpg"), category: "events", categoryLabel: "Conferences", description: "Continuing education program and faculty development forum." },
  { id: 403, title: "Student Academic Presentation Assembly", image: cdn("niet_event3.jpg"), category: "events", categoryLabel: "Conferences", description: "Scholarly paper presentations and technical innovation awards." },
  { id: 404, title: "Institutional Awards & Honors Session", image: cdn("niet_event4.jpg"), category: "events", categoryLabel: "Conferences", description: "Felicitation ceremony recognizing research impact and academic laurels." },
  { id: 405, title: "Annual Convocation & Degree Felicitation", image: cdn("Niet_1.jpg"), category: "events", categoryLabel: "Conferences", description: "Graduating cohorts receiving postgraduate degrees and university honors." },
  { id: 406, title: "Graduation Cohort & Dignitaries Group", image: cdn("Niet_2.jpg"), category: "events", categoryLabel: "Conferences", description: "Commencement day memories of NIET Pharmacy scholars." },
  { id: 407, title: "Institutional Milestone Felicitation", image: cdn("nietdec1.jpg"), category: "events", categoryLabel: "Conferences", description: "Celebrating NIRF top-ranking recognitions and quality excellence." },
];

// All photos combined via soft Cloudinary URLs
export const allGalleryPhotos: GalleryPhoto[] = [
  ...labGalleryPhotos,
  ...campusFacilitiesPhotos,
  ...eventGalleryPhotos,
  ...aktuGalleryPhotos,
];
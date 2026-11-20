export interface UniversityTopper {
  name: string;
  rollNo: string;
  rank: string;
  medal: string;
  session: string;
  batch: string;
  course: string;
  image?: string;
  medalImage?: string;
}

export interface TopperGalleryPhoto {
  image: string;
  caption: string;
}

export const bpharmToppers: UniversityTopper[] = [
  {
    name: "Kanchan Upreti",
    rollNo: "1813350039",
    rank: "1st",
    medal: "Gold",
    session: "2021-22",
    batch: "2018-22",
    course: "B.Pharm",
    image: "/images/toper/kanchana.jpg",
  },
  {
    name: "Anushka Tomar",
    rollNo: "1813350016",
    rank: "5th",
    medal: "-",
    session: "2021-22",
    batch: "2018-22",
    course: "B.Pharm",
  },
  {
    name: "Km Pinky Baghel",
    rollNo: "1813350055",
    rank: "7th",
    medal: "-",
    session: "2021-22",
    batch: "2018-22",
    course: "B.Pharm",
  },
  {
    name: "Saloni Mangal",
    rollNo: "9080500078",
    rank: "10th",
    medal: "-",
    session: "2022-23",
    batch: "2019-23",
    course: "B.Pharm",
  },
];

export const mpharmToppers: UniversityTopper[] = [
  {
    name: "Himanshu Singh",
    rollNo: "2009080576006",
    rank: "2nd",
    medal: "Silver",
    session: "2021-22",
    batch: "2020-22",
    course: "M.Pharm",
    image: "/images/toper/himansu.jpg",
  },
  {
    name: "Sanidhya Jain",
    rollNo: "2209080986014",
    rank: "1st",
    medal: "Gold",
    session: "2023-24",
    batch: "2022-24",
    course: "M.Pharm (Pharmaceutics)",
    image: "/images/toper/sanidhya-jain.jpg",
    medalImage: "/images/toper/sanidhya-gold.jpg",
  },
  {
    name: "Deepraj Rautela",
    rollNo: "2209080986008",
    rank: "2nd",
    medal: "Silver",
    session: "2023-24",
    batch: "2022-24",
    course: "M.Pharm",
    image: "/images/toper/deepraj-rautela.jpg",
    medalImage: "/images/toper/deepraj-silver.jpg",
  },
  {
    name: "Shalini Raghuvanshi",
    rollNo: "2309080986013",
    rank: "3rd",
    medal: "Bronze",
    session: "2024-25",
    batch: "2023-25",
    course: "M.Pharm",
    image: "/images/toper/Shalini_Raghuvanshi.jpg",
  },
];

export const studentListPdf = "/pdf/achievement/achievement-List-of-students.pdf";

export const topperGalleryPhotos: TopperGalleryPhoto[] = [
  { image: "/images/toper/kanchana.jpg", caption: "Kanchan Upreti (Gold Medal 2021-22)" },
  { image: "/images/toper/himansu.jpg", caption: "Himanshu Singh (Silver Medal 2021-22)" },
  { image: "/images/toper/sanidhya-jain.jpg", caption: "Sanidhya Jain (Gold Medal 2023-24)" },
  { image: "/images/toper/sanidhya-gold.jpg", caption: "Sanidhya Jain Certificate" },
  { image: "/images/toper/deepraj-rautela.jpg", caption: "Deepraj Rautela (Silver Medal 2023-24)" },
  { image: "/images/toper/deepraj-silver.jpg", caption: "Deepraj Rautela Certificate" },
  { image: "/images/toper/Shalini_Raghuvanshi.jpg", caption: "Shalini Raghuvanshi (Bronze Medal 2024-25)" },
];

// 24 authentic faculty achievement certificates from images/faculty-achievement/
export const facultyAchievementPhotos: string[] = Array.from({ length: 24 }, (_, i) => {
  const num = (i + 1).toString().padStart(2, "0");
  return `/images/faculty-achievement/fa_${num}.jpg`;
});

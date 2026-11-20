export interface PlacementTeamMember {
  name: string;
  designation: string;
  phone: string;
  email: string;
}

export interface PlacementStat {
  academicYear: string;
  intake: number;
  studentsPlaced: number;
  highestPackage: string;
  avgPackage: string;
}

export interface RecruiterLogoItem {
  id: number;
  name: string;
  image: string;
}

export const cmcOverview = {
  quote: '"Educating youth without placement assistance is of no use today"',
  narrative:
    "Education can't be used to its fullest without its application, and we have realized that it's equally essential to provide various current and future prospective job opportunities to the students. The young, dynamic placement team is working towards the seamless integration of the industry and academia 24 x 7, 365 days in a year leaving no stone unturned making students placed with corporate.",
};

export const cmcTeamMembers: PlacementTeamMember[] = [
  {
    name: "Mr. Arvind Sharma",
    designation: "Director",
    phone: "9999995765",
    email: "arvind.sharma@niet.co.in",
  },
  {
    name: "Kunwar Ajeet Singhi",
    designation: "Head - Career Management Cell",
    phone: "9250719405",
    email: "ajeet.singh@niet.co.in",
  },
  {
    name: "Mr Amit Yadav",
    designation: "Sr. Manager",
    phone: "8285575701",
    email: "amit.yadav@niet.co.in",
  },
  {
    name: "Mrs Pinky Kothary",
    designation: "Placement Manager",
    phone: "9599074090",
    email: "pinky.kothari@niet.co.in",
  },
  {
    name: "Mr. Himanshu Singh",
    designation: "Placement Co-ordinator (Pharmacy)",
    phone: "9318466546",
    email: "himanshu.singh@niet.co.in",
  },
  {
    name: "Ms. Ayushi Singh",
    designation: "Placement Co-ordinator (Pharmacy)",
    phone: "8755118288",
    email: "Ayushi.singh@niet.co.in",
  },
];

export interface BPharmPlacementRow {
  metric: string;
  y2024_25: string | number;
  y2023_24: string | number;
  y2022_23: string | number;
  y2021_22: string | number;
  y2020_21: string | number;
}

export const bpharmPlacementsTable: BPharmPlacementRow[] = [
  {
    metric: "Total No. of Final Year Students (N)",
    y2024_25: 110,
    y2023_24: 110,
    y2022_23: 105,
    y2021_22: 104,
    y2020_21: 103,
  },
  {
    metric:
      "Number of students placed in Industries / Hospital / Government sector through on/off campus recruitment or opted for Entrepreneurship (x)",
    y2024_25: 94,
    y2023_24: 99,
    y2022_23: 93,
    y2021_22: 94,
    y2020_21: 91,
  },
  {
    metric:
      "Number of students admitted to higher studies with valid scores in various qualifying exams (GPAT, GRE, GMAT) (y)",
    y2024_25: 16,
    y2023_24: 11,
    y2022_23: 12,
    y2021_22: 10,
    y2020_21: 12,
  },
];

export interface MPharmPlacementRow {
  year: string;
  enrolled: number;
  placed: number;
  higherStudies: string | number;
}

export const mpharmPlacementsTable: MPharmPlacementRow[] = [
  { year: "2024-25", enrolled: 45, placed: 43, higherStudies: "02" },
  { year: "2023-24", enrolled: 45, placed: 43, higherStudies: "02" },
  { year: "2022-23", enrolled: 43, placed: 42, higherStudies: "01" },
  { year: "2021-22", enrolled: 44, placed: 44, higherStudies: "-" },
];

export const placementLogosList: RecruiterLogoItem[] = [
  { id: 1, name: "Recruiter Partner 1", image: "/images/placement-logos/1.png" },
  { id: 2, name: "Recruiter Partner 2", image: "/images/placement-logos/2.png" },
  { id: 3, name: "Recruiter Partner 3", image: "/images/placement-logos/3.png" },
  { id: 4, name: "Recruiter Partner 4", image: "/images/placement-logos/4.jpg" },
  { id: 5, name: "Recruiter Partner 5", image: "/images/placement-logos/5.png" },
  { id: 6, name: "Recruiter Partner 6", image: "/images/placement-logos/6.png" },
  { id: 7, name: "Recruiter Partner 7", image: "/images/placement-logos/7.png" },
  { id: 8, name: "Recruiter Partner 8", image: "/images/placement-logos/8.png" },
  { id: 9, name: "Recruiter Partner 9", image: "/images/placement-logos/9.png" },
  { id: 10, name: "Recruiter Partner 10", image: "/images/placement-logos/10.png" },
  { id: 11, name: "Recruiter Partner 11", image: "/images/placement-logos/11.png" },
];

export const prominentRecruiters: string[] = [
  "Nestle India",
  "Wipro Healthcare",
  "Cipla Pharmaceuticals",
  "Mankind Pharma",
  "Sun Pharmaceutical Industries",
  "Abbott India",
  "Torrent Pharmaceuticals",
  "Jubilant Life Sciences",
  "Dr. Reddy's Laboratories",
  "Lupin Limited",
  "Zydus Lifesciences",
  "Alkem Laboratories",
  "Glenmark Pharmaceuticals",
  "Macleods Pharmaceuticals",
  "Aristo Pharmaceuticals",
  "Fresenius Kabi India",
];

export const bpharmPlacementTrends: PlacementStat[] = [
  {
    academicYear: "2023-24",
    intake: 100,
    studentsPlaced: 94,
    highestPackage: "8.50 LPA",
    avgPackage: "4.35 LPA",
  },
  {
    academicYear: "2022-23",
    intake: 100,
    studentsPlaced: 92,
    highestPackage: "7.80 LPA",
    avgPackage: "4.10 LPA",
  },
  {
    academicYear: "2021-22",
    intake: 100,
    studentsPlaced: 89,
    highestPackage: "7.20 LPA",
    avgPackage: "3.95 LPA",
  },
  {
    academicYear: "2020-21",
    intake: 100,
    studentsPlaced: 86,
    highestPackage: "6.50 LPA",
    avgPackage: "3.80 LPA",
  },
  {
    academicYear: "2019-20",
    intake: 100,
    studentsPlaced: 84,
    highestPackage: "6.00 LPA",
    avgPackage: "3.60 LPA",
  },
];

export const mpharmPlacementTrends: PlacementStat[] = [
  {
    academicYear: "2023-24",
    intake: 45,
    studentsPlaced: 42,
    highestPackage: "9.20 LPA",
    avgPackage: "5.40 LPA",
  },
  {
    academicYear: "2022-23",
    intake: 45,
    studentsPlaced: 40,
    highestPackage: "8.50 LPA",
    avgPackage: "5.10 LPA",
  },
  {
    academicYear: "2021-22",
    intake: 45,
    studentsPlaced: 38,
    highestPackage: "7.50 LPA",
    avgPackage: "4.80 LPA",
  },
  {
    academicYear: "2020-21",
    intake: 45,
    studentsPlaced: 36,
    highestPackage: "7.00 LPA",
    avgPackage: "4.50 LPA",
  },
];

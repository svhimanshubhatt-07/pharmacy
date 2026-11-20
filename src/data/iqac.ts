export interface IQACMember {
  sNo: number;
  name: string;
  detail: string;
  designation: string;
}

export interface IQACMOM {
  date: string;
  pdfUrl: string;
}

export const iqacCompositionPdf = "/pdf/iqac/IQAC-COMPOSITION.pdf";

export const iqacMembers: IQACMember[] = [
  { sNo: 1, name: "Dr. Avijit Mazumder", detail: "Director", designation: "Chairman, IQAC" },
  { sNo: 2, name: "Dr. Rupa Mazumder", detail: "Dean", designation: "Member (Administration Officer)" },
  { sNo: 3, name: "Dr. Rajnish Kumar", detail: "Associate Professor", designation: "Coordinator, IQAC" },
  { sNo: 4, name: "Dr. Priyanka Bansal", detail: "Associate Professor", designation: "Coordinator, IQAC" },
  { sNo: 5, name: "Dr. Salahuddin", detail: "HoD, Pharm. Chemistry", designation: "Member" },
  { sNo: 6, name: "Dr. Saumya Das", detail: "HoD, Pharmacology", designation: "Member" },
  { sNo: 7, name: "Dr. Sushma Verma", detail: "COE", designation: "Member" },
  { sNo: 8, name: "Dr. Rakhi Mishra", detail: "Professor", designation: "Member" },
  { sNo: 9, name: "Dr. Ritu Arora", detail: "Wipro", designation: "Member(Industry)" },
  { sNo: 10, name: "Ms. Swati Yadav", detail: "Assistant Professor", designation: "Member (Alumni)" },
  { sNo: 11, name: "Dr. Girish", detail: "Veterinary Doctor", designation: "Nominee from Local Society" },
  { sNo: 12, name: "Mr. Dilip Choubey", detail: "Registrar", designation: "Member" },
  { sNo: 13, name: "Dr. Vinod M. Kapse", detail: "Director, NIET", designation: "Member (Academician from Outside Institute)" },
  { sNo: 14, name: "Dr. Neema Agarwal", detail: "AMD", designation: "Member (Management)" },
];

export const iqacMinutesOfMeetings: IQACMOM[] = [
  { date: "28 Feb 2025", pdfUrl: "/pdf/iqac/Minutes of Meeting 28th February 2025.pdf" },
  { date: "18 June 2024", pdfUrl: "/pdf/iqac/Minutes of Meeting 18th June 2024.pdf" },
  { date: "23 Jan 2024", pdfUrl: "/pdf/iqac/Minutes of Meeting 23rd  January 2024.pdf" },
  { date: "26 June 2023", pdfUrl: "/pdf/iqac/MINUTES-OF-MEETING-26-JUNE-2023.pdf" },
  { date: "30 Jan 2023", pdfUrl: "/pdf/iqac/MINUTES-OF-MEETING-30-JANUARY-2023.pdf" },
  { date: "22 June 2022", pdfUrl: "/pdf/iqac/MINUTES-OF-MEETING-22-JUNE-2022.pdf" },
  { date: "10 Jan 2022", pdfUrl: "/pdf/IQAC-MOM-10-JAN-2022.pdf" },
  { date: "29 June 2021", pdfUrl: "/pdf/IQAC-MOM-29-JUNE-2021.pdf" },
  { date: "4 Jan 2021", pdfUrl: "/pdf/IQAC-MOM-ON-4-JANUARY-2021.pdf" },
  { date: "8 June 2020", pdfUrl: "/pdf/IQAC-MOM-ON-8-JUNE-2020.pdf" },
  { date: "27 Jan 2020", pdfUrl: "/pdf/IQAC-MOM-ON-27-JANUARY-2020.pdf" },
  { date: "5 Aug 2019", pdfUrl: "/pdf/IQAC-MOM-ON-5-AUGUST-2019.pdf" },
  { date: "2 Jan 2019", pdfUrl: "/pdf/IQAC-MOM-ON-2-JANUARY-2019.pdf" },
  { date: "20 Aug 2018", pdfUrl: "/pdf/IQAC-MOM-ON-20-AUGUST-2018.pdf" },
];

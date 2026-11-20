export interface StudentClub {
  sNo: number;
  name: string;
  president: string;
  vicePresident: string;
  coordinator: string;
  teamMembers: string;
  objectives: string[];
}

export const swdOverview = {
  description:
    "The Students' Welfare Department (SWD) looks after the rights of the students and supervises the welfare activities in the Campus which play a significant role in their career building. SWD also provides a platform to the students to voice their opinions and suggestions to take the institution to a great height.",
  objectives: [
    "To strive for excellence in education for the realization of a vibrant and inclusive society through knowledge creation and dissemination.",
    "To blend theoretical knowledge with practical skills",
    "To improve the communication skills, GK, IQ, EQ of the students",
    "To pursue academic excellence through quality teaching, research and publications",
    "To provide access to all sections of the society to pursue higher education",
    "To inculcate right values among students",
    "To promote leadership qualities among students",
    "To produce socially sensitive citizens",
    "To hasten the process of creating a knowledge society",
  ],
};

export const swdLeadership = {
  dean: {
    name: "Dr. Rakhi Mishra",
    designation: "Professor & Dean Student Welfare",
    photo: "/images/rakhi.jpg",
    bio: "Dr Rakhi Mishra obtained M.Pharm and Ph.D. in Pharmaceutical Chemistry. At present, she is working as Professor in Noida Institute of Engineering and Technology (Pharmacy Institute). She has around sixteen years of teaching experience forundergraduate and postgraduate students in Pharmacy institutions. His active participation and dedication towards the welfare is observed by working as a team and organizing various events and function on regular basis for the upliftment of the students",
    message:
      "The first priority for us is the welfare of student. As the office of Dean Students' welfare,it is the prior responsibility for all the aspects of students' welfare by motivating the students towards their bright future through engaging them in different academic as well as co-curricular activities to justify their talents. At most care is taken to enhance the students’ overall personality and to provide better career opportunities. The office also conducts the events under the smooth functioning of various societies and clubs under which students take active participation.",
  },
  associateDean: {
    name: "Mrs. Swati Yadav",
    designation: "Assistant Professor & Associate Dean Student Welfare",
    photo: "/images/swati.jpg",
    bio: "Mrs Swati Yadav is Associate Dean Students Welfare. She has obtained M.Pharm in Pharmaceutics and persuing Ph.D. and is working as Assistant Professor in Noida Institute of Engineering and Technology (Pharmacy Institute). She is very young and dynamic coordinator to organize cultural and technical events with all her patience and dedication.",
  },
};

export const studentClubs: StudentClub[] = [
  {
    sNo: 1,
    name: "Technical Club (Academic and Editorial Club)",
    president: "Mr. Ankit",
    vicePresident: "Mr. Aniket Singh",
    coordinator: "Dr. Priyanka Bansal",
    teamMembers: "Mr. Abhijit Debnath, Ms. Shruti Varshney Ms. Shrishti",
    objectives: [
      "To create awareness, educate, nurture, and inculcate a culture of innovation amongst the students.",
      "To enable them to generate new ideas and become more innovative.",
      "To organize an Interdisciplinary project exhibition.",
      "To organize seminars, conferences, workshops, and exhibitions relating to innovations.",
    ],
  },
  {
    sNo: 2,
    name: "Sports Club",
    president: "Anand Singh",
    vicePresident: "Ms. Anchal Kumari",
    coordinator: "Dr. Sanjay Yadav",
    teamMembers: "Ms. Kavita Rana, Mr. Himanshu Singh, Mr. Vimal Dutt",
    objectives: [
      "The Sports club is committed to provide a healthy sporting habit among the students.",
      "It helps to learn teamwork at work, coordination among diverse cultural & ethnic groups and mainly infuses discipline & instills the value system in one individual.",
    ],
  },
  {
    sNo: 3,
    name: "Green Wave Club",
    president: "Mr. Manav",
    vicePresident: "Ms. Himanshi Raghav",
    coordinator: "Ms. Sharad Sharma",
    teamMembers: "Ms. Nidhi Singh, Ms. Neha Sharma",
    objectives: [
      "To create awareness about the importance of trees and plants in our lives.",
      "To save the endangered environment and beautify our earth.",
      "To increase the level of oxygen in the environment.",
    ],
  },
  {
    sNo: 4,
    name: "Cultural Club",
    president: "Mr. Shivesh Mishra",
    vicePresident: "Mr. Pranav Kumar Singh",
    coordinator: "Ms. Sakshi Rajput",
    teamMembers: "Mrs. Bhavani Pentela,Ms. Kajal,Ms. Archana Singh",
    objectives: [
      "It is the place where students can showcase what they have got.",
      "It helps to discover their talent.",
      "Cultural events include competitions such as instrumental, singing, dance etc.",
      "This club organizes activities such as Fresher's Party, Farewell, Fest, and Alumni Meet annually.",
    ],
  },
];

export const alumniContent = {
  paragraphs: [
    "We welcome you at the NIET Alumni webpage. You are most welcome to stay connected with the NIET family and around 15,000 alumni, living and working in India and worldwide.",
    "NIET offers graduation and post graduation to thousands of students every year. Our alumni can be found contributing in almost all businesses, professions and disciplines. Many are doing extraordinarily well and have successfully established their names in their chosen careers. It is good to know that we have a vast network of students not just in India, but all over the world. Affiliation with an Institute of such strength and network is a privilege for our students.",
    "Producing outstanding students and successful alumni, who are caring and have deep respect for humanities, is a generic feature of a complete NIET education. The Institute realizes that the alumni sense of belongingness and willingness to play a stake in the development of their alma mater is a life-long relationship. There is no doubt that the Institute and our alumni community can do a lot more to open new windows of opportunities to their coming generation. This is obviously happening and has a good social repercussion definitely for the long run. With the quest for this culture to permeate through the NIET family, we hope to establish and strengthen the bonds of bonhomie between the alumni and NIET fraternity. Our website serves to provide a convenient networking point for the NIET family, highlighting the various projects, publications and alumni events organized by the Institute. It is our hope that through these activities, our alumni will continue to keep in touch with their friends, the students and the Institute. Looking forward, we would like to hear more from you, about your interesting stories as you write each chapter of your life after graduation. We would like to encourage the sharing of success formulae, positive perspectives of lifelong learning experience, as well as the nostalgic messages from our alumni. We would like to welcome dedicated individuals to join the executive committee as members or form interest groups to help developing and promoting the NIET Pharmacy Institute. With more talented alumni leaders, we can look forward to more interaction, teamwork and joint activities between the alumni association, student clubs and relevant industries.",
    "We wish you every success in your career and future endeavors and hope to catch up with you in one of our future alumni events.",
  ],
  pdfLink: "/pdf/3 PHARMACY ALUMNI LIST.pdf",
};

export const alumniDirectoryPdf = "/pdf/3 PHARMACY ALUMNI LIST.pdf";


export interface CommitteeMember {
  sNo: number;
  name: string;
  designation?: string;
  role?: string;
  contact?: string;
}

export interface SquadMember {
  sNo: number;
  name: string;
  contact: string;
}

export interface SquadFloor {
  floor: string;
  members: SquadMember[];
}

export const antiRaggingData = {
  title: "Antiragging Committee",
  committeeTitle: "Composition of Anti-Ragging Committee:",
  committeeMembers: [
    { sNo: 1, name: "Dr. Avijit Mazumder", role: "Member and Chairman of Anti Ragging Committee", contact: "9871773644" },
    { sNo: 2, name: "Dr. RupaMazumder", role: "Member", contact: "9871963644" },
    { sNo: 3, name: "Dr. Salahuddin", role: "Member", contact: "9891872142" },
    { sNo: 4, name: "Dr. Rajnish Kumar", role: "Proctor", contact: "8506970934" },
  ],
  squadTitle: "Composition of Squad Committee:",
  squadFloors: [
    {
      floor: "Ground Floor",
      members: [
        { sNo: 1, name: "Dr. Anjna Rani", contact: "8607165319" },
        { sNo: 2, name: "Dr. Saumya Das", contact: "9911940620" },
        { sNo: 3, name: "Dr. Neelam Singh", contact: "9479142509" },
        { sNo: 4, name: "Dr. Sanjay Kumar Yadav", contact: "9718423209" },
      ],
    },
    {
      floor: "First Floor",
      members: [
        { sNo: 5, name: "Dr. Salahuddin", contact: "9891872142" },
        { sNo: 6, name: "Dr. Monika", contact: "9711475854" },
        { sNo: 7, name: "Ms. Swati Yadav", contact: "7355546554" },
      ],
    },
    {
      floor: "Second Floor",
      members: [
        { sNo: 8, name: "Dr. Rakhi Mishra", contact: "7906833682" },
        { sNo: 9, name: "Dr. Swarupanjali Padhi", contact: "9311164684" },
        { sNo: 10, name: "Dr. Chandana Majee", contact: "7838591051" },
      ],
    },
    {
      floor: "Third Floor",
      members: [
        { sNo: 11, name: "Dr. Rajnish Kumar", contact: "8506970934" },
        { sNo: 12, name: "Mrs. Shruti Varshney", contact: "8802897655" },
        { sNo: 13, name: "Mr. Abhijit Debnath", contact: "7206933862" },
      ],
    },
    {
      floor: "Fourth Floor",
      members: [
        { sNo: 14, name: "Dr. Sushma Verma", contact: "9350953160" },
        { sNo: 15, name: "Mrs. Bhavani Pentela", contact: "9958477768" },
        { sNo: 16, name: "Mrs. Soumya Mishra", contact: "8658271681" },
      ],
    },
  ],
};

export const chiefProctorData = {
  title: "CHIEF PROCTOR",
  image: "/images/CHIEF PROCTOR.jpg",
  bio: "Dr. Rajnish Kumar is working at Pharmacy Institute of NIET as Assistant Professor and is the Chief Proctor of Pharmacy Institute. He had passed B.Pharm and MPharm from Uttar Pradesh Technical University, Lucknow and is having nearly five years experience in teaching. He is entrusted with the responsibility of maintaining discipline of Pharmacy students in our Institute.",
};

export const hostelManagementData = {
  title: "Hostel Management Committee",
  members: [
    { sNo: 1, name: "Dr Rakhi Mishra (Dean, Student welfare)", designation: "Chairperson" },
    { sNo: 2, name: "Dr. Rakesh Kumar (Chief Warden)", designation: "Convener" },
    { sNo: 3, name: "Mr.Vikarnt Malik (Warden)", designation: "Member" },
  ],
};

export const internalComplaintData = {
  title: "Internal Complaint Committee",
  objectives:
    "This committee was framed to envisaged to receive complaints as well as to inquire into and make recommendations to the employer on the action required pursuant to its inquiry of such complaints made. This initial in-house body plays the most important role in ensuring the smooth functioning of the provisions of the Prevention, Prohibition, and Redressal (POSH Law) and also towards the fulfillment of its objectives. An aggrieved woman or any staff can approach the ICC to file a complaint relating to sexual harassment or any problems what so ever. After receiving the complaint from the aggrieved woman or staff , the Committee inquires into the matter and accordingly makes recommendations. We are also having dedicated Women Grievance Redressal Committee to handle complaints made by Women staff and students.",
  functions: [
    "forceful implementation of the policies relating to the prevention of sexual harassment,",
    "strive to resolve complaints by the aggrieved complainant, and",
    "henceforth, recommend actions to be taken by the employer",
  ],
  compositionTitle: "Establishment of Internal Complaint Committee (ICC)",
  members: [
    { sNo: 1, name: "Dr Neema Agarwal", designation: "Additional Managing Director", role: "Chairperson", contact: "9873238154" },
    { sNo: 2, name: "Dr Avijit Mazumder", designation: "Director", role: "Convener", contact: "9871773644" },
    { sNo: 3, name: "DrRupaMazumder", designation: "Dean", role: "Member", contact: "9871963644" },
    { sNo: 4, name: "Dr Rakhi Mishra", designation: "Professor", role: "Member", contact: "9891872142" },
    { sNo: 5, name: "Dr Sushma Verma", designation: "Professor", role: "Member", contact: "9350953160" },
  ],
};

export const libraryCommitteeData = {
  title: "Library Committee",
  function:
    "The main function of this committee is to ensure that the library is operated smoothly and the students get proper library facilities as per their requirements. The books to be procured are shortlisted by the faculty members and students and the committee approves the list after which the list if forwarded to the management for final approval for purchase of books and journals",
  members: [
    { name: "Dr Avijit Mazumder", role: "Chairperson", contact: "9871773644" },
    { name: "Dr Rakhi Mishra", role: "Member", contact: "7906833682" },
    { name: "Mrs Soumya Mishra", role: "Member", contact: "8377846408" },
    { name: "Ms Sonia Chauhan", role: "Member", contact: "9718689506" },
    { name: "Mr Kishore Pingoriya", role: "Convener", contact: "9718001527" },
  ],
};

export const minorityCellData = {
  title: "Minority Cell",
  policy:
    "Minority cell of the NIET Pharmacy Institute was established with the purpose of empowering the minority communities in the college.The college has been very much keen to provide services to the educational and cultural needs of the minority community,irrespective of caste, creed and nationality. The Minority Cell basically helps minority students including Christian, Muslim and so on, for their academic development. This is a mechanism which aidsthe minority students for their social and academic development. It facilitates financial support to the minority communities from various Government agencies and semi-Governmentsources. This also helps them to enroll for career orientation programs which would empower and equip them with the necessary skills for various career options.",
  rulesAndRegulations: [
    "The members of the committee meetperiodically to assess the academic performance of the students belonging to minority community.",
    "The members will provide assistance through counseling, personality development, development of communication skill, remedial coaching, tutorial classes and preparatory classes for professional and employment purposes.",
    "The members will also coordinate and resolve the problems associated with the matter of conduct of remedial coaching and other measures with a view to see that the education system succeeds in bringing to a level quantitatively, as well as qualitatively, indistinguishable from the level of the rest of the society.",
  ],
  functions: [
    "To enhance equal opportunities for education of the minorities, without any discrepancy.",
    "To facilitate financial support to the students from the minority communities, from governmental agencies and other sources.",
    "To create awareness among the minority students regarding various scholarships program of the State Government.",
    "To take follow up measures for achieving the objectives and targets laid down for the by the State and Central Governments of India.",
    "To provide an academic environment where all such students feel safe and secure.",
    "To encourage the students for enrolling themselves to career orientation programs which would empower and equip them with the necessary skills required for choosing a career option as per their choice.",
    "To provide prompt counseling for any emotional emergencies arising on account of any event at the campus.",
    "To ensure protection and reservation, as provided in the constitution of India.",
  ],
  closing:
    "The Cell is actively engaged in coordinating and resolving the problems in the matter of conduct of remedial coaching and other measures with a view to see that the education system succeeds in bringing the minority community to a level quantitatively as well as qualitatively indistinguishable from the level of the rest of the society. To review the activities, the Organizing Committee of the Cell will meet periodically and share the variousongoing Government schemes with the minority students. Students can approach the Cell for career counseling, variousgovernment schemes like scholarship fellowships, educational trips and financial assistance.",
  members: [
    { name: "Dr. Avijit Mazumder", designation: "Director, NIET Pharmacy Institute", role: "Chairperson" },
    { name: "Dr Rupa Mazumder", designation: "Dean, Pharmacy", role: "Convener" },
    { name: "Dr Salahuddin", designation: "HOD (Pharmaceutical Chemistry)", role: "Member" },
    { name: "Ms. Gulsitan Jawed", designation: "Student", role: "Member" },
    { name: "Ms. Afia", designation: "Student", role: "Member" },
  ],
};

export const obcCellData = {
  title: "OBC Cell Composition",
  objectives: [
    "To solve any problems of students belonging to OBC categories that are enrolled in the college.",
    "To help the students to fill up forms for scholarships of Government of UP for financial assistance.",
    "To implement the policies for admission of OBC students in the Institute and to analyzethedatashowingthe trends and changes of fulfillment of the required quota.",
    "To educate, enlighten and empower the OBC category students of Diploma, UG and PGof in the Institute, on the different policies of the Central and State Governments forupliftmentand support for the ireducational and occupational career.",
    "To implement,monitor and evaluate continuously the reservation policies of the affiliating University and the Government and plan measures for ensuring effective implementation of the same.",
    "To collect reports, orders and information issued by the Government and the affiliating University on the various aspects of education, training and employment of the OBC students.",
  ],
  functions: [
    "To circulate the orders and other circulars issued by the University/ Government and tocollect regularly, on an annual basis, information regarding course-wise admission of OBC class ofcandidates.",
    "To take all necessary actions for implementation of different scholarship programs for the OBC students,as declared by the Central/State Government time totime.",
    "To provide prompt counselling for any emotional emergencies arising with the OBCstudents,on account of any event at the campus.",
    "To co-ordinate through the University with the Central/State Government to get scholarships/waiving oftuition fees/other financial benefits for OBC students.",
    "To maintain a database of the candidates belonging to OBC category in the Institute and to facilitate in the placement service.",
  ],
  compositionIntro:
    "OBC Committee of Noida Institute of Engineering and Technology(Pharmacy Institute),Greater Noida, has been constituted in 2019 with the following members:",
  members: [
    { sNo: 1, name: "Dr.Avijit Mazumder", designation: "Chairman" },
    { sNo: 2, name: "Mrs Swati Yadav", designation: "Convener" },
    { sNo: 3, name: "Dr. Sanjay Kumar Yadav", designation: "Member" },
    { sNo: 4, name: "Dr. Chandana Majee", designation: "Member" },
    { sNo: 5, name: "Mr Pawan Kumar", designation: "Member" },
    { sNo: 6, name: "Mr Abhishek Chaurasia", designation: "Student Member" },
  ],
};

export const researchAdvisoryData = {
  title: "Research Advisory Committee",
  objectives:
    "Where applicable, the advisory committee acts as a partner with the student and the supervisor in guiding and advising the student on research issues, and assisting supervisors in their monitoring functions. Members are selected based on their complementary fields of expertise, and the nature and planning of the research project. The members provide to the student expert guidance or advice in specific areas of the student’s research work; for the supervisor, advisory committee members provide critical and constructive feedback on the student’s research. The role(s) of advisory committees should be made clear to both the committee members and the student, including the level of commitment and their participation in research milestones, such as research project progress monitoring and thesis defences.",
  functionsIntro:
    "As with all stakeholders, effective and well-structured communications are necessary to create positive relationships between students and their guides. To this end, advisory committees should:",
  functions: [
    "Meet as required (faculty member/department dependent) to review the student’s progress and provide advice. Advisory committees should meet at the request of students or supervisors. Meetings should be arranged periodically as required to support the student’s progress meetings should occur at least once per semester or more frequently as necessary.",
    "Be reasonably accessible in terms of timely and appropriate communications with students when called upon for general guidance, consultation or discussion on academic progress or research projects.",
    "In the case of a thesis, provide students with discipline/field specific guidelines of writing conventions of the discipline and direct them to appropriately submit to AKTU",
  ],
  members: [
    { sNo: 1, name: "Dr Avijit Mazumder", designation: "Chairperson" },
    { sNo: 2, name: "Dr Rupa Mazumder", designation: "Convener" },
    { sNo: 3, name: "Dr Sushma Verma", designation: "Member" },
    { sNo: 4, name: "Dr Saumya Das", designation: "Member" },
    { sNo: 5, name: "Dr Salahuddin", designation: "Member" },
    { sNo: 6, name: "Dr Rakhi Mishra", designation: "Member" },
    { sNo: 7, name: "Dr Anjana Rani", designation: "Member" },
    { sNo: 8, name: "Dr Monika", designation: "Member" },
    { sNo: 9, name: "Dr Rajnish Kumar", designation: "Member" },
    { sNo: 11, name: "Dr Priyanka Bansal", designation: "Member" },
    { sNo: 12, name: "Dr Vinod M. Kapse", designation: "External Member" },
    { sNo: 12, name: "Dr R.N.Gupta", designation: "Subject Expert" },
  ],
};

export const scStData = {
  title: "SC-ST committee",
  description:
    "NIET (Pharmacy Institute) is committed to provide an environment that have equal opportunities for everyone regardless caste and religious belief. It also committed to provide full constitutional protection to marginalized section of the society. To ensure this commitment, NIET(Pharmacy Institute) constituted SC/ST Cell with clear rules and policies asperconstitution.",
  objectives: [
    "TocounselandguideSCandSTstudentsstudyingatNIET(PharmacyInstitute)onvariousissues andhelp themtomanageacademicrequirements.",
    "Toensureprovisionsforanenvironmentwhereallsuchstudentsfeelsafeandsecure.",
    "To provide immediate help and counseling for any emergencies arising on account of anyeventsatthecampus.",
    "To provide a mechanism to redress the grievancesofSCandSTstudents,ifany.",
    "ToensureprotectionandreservationasprovidedintheconstitutionofIndia",
  ],
  members: [
    { name: "Dr. Avijit Mazumder", role: "Chairperson", contact: "9871773644" },
    { name: "Dr. Rupa Mazumder", role: "Member", contact: "9871963644" },
    { name: "Dr. Salahuddin", role: "Member", contact: "9891872142" },
    { name: "Dr. Chandana Majee", role: "Member", contact: "7838591051" },
    { name: "Ms. Swati Yadav", role: "Member", contact: "7355546554" },
  ],
};

export const studentWelfareData = {
  title: "Student Welfare Committee",
  members: [
    { sNo: 1, name: "Dr. Rakhi Mishra (Dean, Student welfare)", designation: "Chairman", contact: "7906833682" },
    { sNo: 2, name: "Mrs Swati Yadav", designation: "Member", contact: "7355546554" },
    { sNo: 3, name: "Mrs Deepika Pathak", designation: "Member", contact: "7982601240" },
    { sNo: 4, name: "Mrs Soumya Mishra", designation: "Member", contact: "8377846408" },
  ],
};

export const studentGrievanceData = {
  title: "students Grievance Redressal Cell",
  description:
    "The cell has been constituted in Pharmacy Institute with an aim to provide easy and readily accessible machinery for prompt disposal of the day to day grievance of the students. Its purpose is to maintain a congenial academic and working environment. The grievances are received promptly through:",
  channels: [
    "Suggestion / Complaint Box (Ground Floor of Pharmacy)",
    "E-mail (directorpharmacy@niet.co.in)",
    "The doors of all officials are always open to the students.",
    "Academic grievance is received from classes through personal visits, meeting with class representatives, feedback mechanism, etc. for the prevention of dissatisfaction in the college campus.",
  ],
  objectives: [
    "To ensure a fair, impartial and consistent mechanism for redressal of various issues faced by the students",
    "To develop a responsive and accountable attitude among all students, there by maintaining a harmonious atmosphere in the college campus",
    "To uphold the dignity of the college by promoting cordial Student-Student relationship, Student-Teacher relationship, Teacher-Teacher relationship.",
    "To ensure that grievances are resolved promptly, neutrally, with sensitivity and in complete confidentiality.",
  ],
  members: [
    { sNo: 1, name: "Dr. Avijit Mazumder", designation: "Director", role: "Coordinator" },
    { sNo: 2, name: "Dr. Rupa Mazumder", designation: "Dean", role: "Member" },
    { sNo: 3, name: "Dr. Soumya Das", designation: "Professor", role: "Member" },
    { sNo: 4, name: "Dr. Rajnish Kumar", designation: "Assistant Professor", role: "Member" },
    { sNo: 5, name: "Mr. Salahuddin", designation: "Professor", role: "Member" },
    { sNo: 6, name: "Mr. Pawan Kumar", designation: "Lab Technician", role: "Member" },
    { sNo: 7, name: "Ms Saloni Mangal", designation: "Student Representative", role: "Member" },
  ],
};

export const womenGrievanceData = {
  title: "WOMEN GRIEVANCE REDRESSAL CELL",
  ruleTitle: "Rule Against Sexual Harassment",
  background: [
    "A. Sexual harassment is a human rights violation, an infringement on life and liberty and a serious form of gender-based discrimination. Such behaviour is an affront to dignity, gender, equality, and fundamental rights.",
    "B. Sexual harassment is contrary to anti-discrimination provisions in the Constitution of India:Article 15: Prohibition of discrimination on the grounds of religion, race, caste, sex, or place of birth and Article 19(1)(g): Right to freedom which upholds a woman’s right to practice any profession, or to carry on any occupation, trade or business.",
    "C. Sexual Harassment is an offence under The Sexual Harassment of Women at Workplace(Prevention, Prohibition, and Redressal) Act, 2013 No. 14 of 2013. Section 3(1):No woman shall be subjected to sexual harassment at any workplace.",
    "D. Educational Institutes are bound by the same Act (Section 2 (o) workplace includes - (ii) any private sector organization or a private venture, undertaking ,enterprise, institution, establishment, society, trust, non-governmental organisation, unit or service provider carrying on commercial distribution or service. Following this, NIET (Pharmacy Institute) is committed to uphold the constitutional mandate ensuring the above-mentioned human rights of all those who fall within its jurisdiction. It is with this object that these rules have been framed.",
  ],
  objectivesAndScope: [
    "A. These rules restate the commitment of NIET (Pharmacy Institute) to create and maintain a community suitable, i.e. free of all sexual harassment, for all its member so that they can work together in harmony.",
    "B. In framing the rules and procedures, the Spirit of Sexual Harassment of Women at Workplace Act 2013, and the Supreme Court judgement have been followed. These Rules and Procedures apply to all the students, academic staffs, faculty members, non-teaching staffs, officers of NIET(Pharmacy Institute), the members of the authorities and the committee of NIET (Pharmacy Institute)as well as to service providers and outsiders.",
    "C. In order to implement these Rules, a Women Grievances Redressal Cell (WGRC) shall be appointed whose composition is described below.",
  ],
  definitions: {
    intro:
      "A. Sexual Harassment in the given context is described in The Sexual Harassment of Women atthe Workplace Act 2013 in Paragraph 2(n) as: “sexual harassment” includes any one of the following unwelcome act or behaviour.",
    items: [
      "I. Physical contacts and advances;or",
      "II. A demand or request for sexual favours; or",
      "III. Making sexually coloured remarks; or",
      "IV. Showing pornography;or",
      "V. Any other unwelcome physical, verbal or non-verbal conduct of a sexual nature;",
    ],
    details: [
      "B. Within NIET (Pharmacy Institute), the definition of the above applies to both men and women and also includes harassment by a member of another member of the same sex.",
      "C. The key expression in the above definition is ‘unwelcome’ which indicates the unwanted and non-consensual nature of the behavior in question.",
      "D. The overwhelming dominant form of sexual harassment is committed by men against women. However, it could also be committed by women against men or occur between persons of thesamegender.",
    ],
  },
  genderSensitization:
    "This works in creating awareness about gender issues and working towards creating an equilibrium where both men and women can work together with a sense ofpersonalsecurityanddignity.",
  wgrcDescription: [
    "In order to maintain safety and security for the girl students and women employees, a cell hasbeen constituted for redressal of grievances. The WGRC stays alert and active to prevent anysexual abuse towards the students and female workers. If the students face any harassment on thecampus, they can complain to the women grievance cell. The cell members look into the issues, gather the evidence, and take necessary action against the guilty.",
    "Director / Deans / HODs also assist regularly in attending to these problems. The cell maintains the records of the grievances ,actions recommended and taken and the settlement of the grievances. The cell is headed by a senior lady faculty member ( Convenor) and six facultymembers, who form the core group. The Director and the Proctor are the ex-officio members ofthis Coregroup.",
    "Complaints can be made, in writing, to the Director/ Convenor or any of the other members or inthe complaint box placed at strategic locations in the hostel/ outside the WGRC Convener’sOffice. Boxes are opened once a month and checked. Any grievance found in it is scrutinized,and necessary actions are immediately taken by the cell. In case of emergency, the Director call committee members and the problem are attended to immediately .The cell has resolved all difficulties amicably ever since it was setup in 2012.",
  ],
  dutiesAndResponsibilities: [
    "To examine all grievance letters/ suggestions/ complaints received from the women staff/ students regarding the sexual harassment.",
    "To give feedback to the women staff/students concerned/ to find solution for their grievances.",
    "The committee will record such grievances received from the women staff / students, in a separate register maintained exclusively for this purpose. The reply given by the committee to the women staff / students for grievance should also be recorded in the register.",
    "The Committee should find suitable solutions to settle the problems faced by the women staff / students in regard to matters relating to sexual harassment within 10 days' after thorough investigation.",
  ],
  members: [
    { sNo: 1, name: "Dr. RupaMazumder", role: "Chairman", contact: "9871963644" },
    { sNo: 2, name: "Dr. Rakhi Mishra", role: "Member", contact: "7906833682" },
    { sNo: 3, name: "Dr. Avijit Mazumder", role: "Member", contact: "9871773644" },
    { sNo: 4, name: "Dr. Sushma Verma", role: "Member", contact: "9350953160" },
    { sNo: 5, name: "Dr. Rajnish Kumar", role: "Proctor", contact: "8506970934" },
    { sNo: 6, name: "Dr Gazala Naaz", role: "External Members", contact: "9871131809" },
  ],
};

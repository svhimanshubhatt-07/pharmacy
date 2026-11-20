export interface NISPTeamMember {
  name: string;
  role: string;
  affiliation: string;
  email: string;
  phone: string;
}

export const nispOverview = {
  title: "About NISP",
  description1:
    "The 'National Innovation and Start-up Policy 2019 for students and faculty in HEIs was launched by Former Minister of Education, Shri Ramesh Pokhriyal 'Nishank' on 11th September 2019 at AICTE, New Delhi.",
  description2:
    "This policy intends to guide HEIs for promoting students' driven innovations & start-ups and to engage the students and faculty in innovation and start up activities in campus. The policy aims at enabling HEIs to build, streamline and strengthen the innovation and entrepreneurial ecosystem in campus and will be instrumental in leveraging the potential of student's creative problem solving and entrepreneurial mind-set, and promoting a strong intra and interinstitutional partnerships with ecosystem enablers and different stakeholders at regional, national and international level. The policy is being implemented by MoE's Innovation Cell and in coordination AICTE, UGC, state/ UT governments and universities. Implementation of policy has been undertaken for quick adoption by HEIs. The present policy is a way forward to the earlier version of AICTE's Start-up Policy which was launched in the year 2016 to complement the Startup Action Plan under the Startup India and Stand-up India Program launched by Hon'ble Prime Minster of India.",
};

export const nispTeamMembers: NISPTeamMember[] = [
  {
    name: "Dr. Salahuddin",
    role: "NISP Faculty Coordinator",
    affiliation: "HOD. Pharm Chemistry",
    email: "hodchem@niet.co.in",
    phone: "9891872142",
  },
  {
    name: "Dr. Rupa Mazumder",
    role: "Coordinator ARIIA",
    affiliation: "Dean",
    email: "deanpharmacy@niet.co.in",
    phone: "9871963644",
  },
  {
    name: "Dr. Rajnish Kumar",
    role: "Convenor, IIC",
    affiliation: "Associate Professor",
    email: "rajnishkumar.pharmacy@niet.co.in",
    phone: "8506970934",
  },
  {
    name: "Mr. Sameer Garg",
    role: "TBI Coordinator",
    affiliation: "Head, NIET TBI",
    email: "sameer@niet.co.in",
    phone: "9891866866",
  },
  {
    name: "Dr. Avijit Mazumder",
    role: "Advsor",
    affiliation: "Director",
    email: "directorpharmacy@niet.co.in",
    phone: "9871773644",
  },
];

export const nispDocuments = [
  {
    title: "NIET Innovation and Startup Policy",
    pdfUrl: "/pdf/nisp/IPR-POLICY-Pharmacy.pdf",
  },
  {
    title: "UP Startup Policy",
    pdfUrl: "/pdf/nisp/UP-startup-policy.pdf",
  },
  {
    title: "NISP 2019 MOE",
    pdfUrl: "/pdf/nisp/NISP-2019-MOE.pdf",
  },
];


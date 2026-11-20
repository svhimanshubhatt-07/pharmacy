export interface AboutData {
  title: string;
  tagline: string;
  narrative1: string;
  narrative2: string;
  vmNarrative1: string;
  vmNarrative2: string;
  vision: {
    heading: string;
    description: string;
  };
  mission: {
    heading: string;
    description: string;
  };
  peos: {
    number: number;
    title: string;
  }[];
  qualityPolicy: {
    heading: string;
    description1: string;
    description2: string;
  };
}

export const aboutData: AboutData = {
  title: "About Us",
  tagline:
    "LEARN THROUGH ACADEMiCS & BEYOND. BUiLD\nSTRONG ViRTUES. THiNK INDEPENDENTLY. GET PLACED",
  narrative1:
    "Being ranked 37th nationally by NIRF 2024, MHRD, Govt. of India Pharmacy Institute of Noida Institute of Engineering & Technology, Greater Noida is one of the India's elite educational institutes of the country. A self-ﬁnanced Institute with a sprawling area of 16.9 acres of lush green campus, NIET Pharmacy Institute is developing as a Center of Excellence, imparting technical education and generating competent professionals with a high degree of credibility, integrity and ethical standards.",
  narrative2:
    "We are thought leaders with an unquenchable thirst for learning and a devotion to world class research and teaching. The Institute excels in all the parameters earmarked by the PCI, AICTE and Dr. A.P.J. Abdul Kalam Technical University, Lucknow.",
  vmNarrative1:
    "Being ranked amongst top 100 Pharmacy Institutes by National Institutional Ranking Framework, MHRD, Govt. of India Pharmacy Institute of Noida Institute of Engineering & Technology, Greater Noida is one of the India's elite educational institutes of the country. A self-ﬁnanced Institute with a sprawling area of 16.9 acres of lush green campus, NIET Pharmacy Institute is developing as a Center of Excellence, imparting technical education and generating competent professionals with a high degree of credibility, integrity and ethical standards.",
  vmNarrative2:
    "We are thought leaders with an unquenchable thirst for learning and a devotion to world class research and teaching. The Institute excels in all the parameters earmarked by the PCI, AICTE and Dr. A.P.J. Abdul Kalam Technical University, Lucknow.",
  vision: {
    heading: "Vision",
    description:
      "A world class institute of academic excellence in the ﬁeld of science and technology committed to the holistic development of its students and the faculty, widely respected for its engagement with ethical, responsible teachings and wider global concerns.",
  },
  mission: {
    heading: "Mission",
    description:
      "To impart quality education with a view to develop skilled human resource, capable of meeting the challenges of evolving technologies in hospitals and pharmaceutical industries. To contribute to the industrial growth and socio-economic development of India.",
  },
  peos: [
    { number: 1, title: "To acquire knowledge and develop understanding" },
    { number: 2, title: "To develop skills" },
    { number: 3, title: "To develop professional attitude" },
  ],
  qualityPolicy: {
    heading: "QUALITY POLICY",
    description1:
      "Our policy is to develop a class of highly skilled professionals who can cater to intellectually and technologically changing environments.",
    description2:
      "This is achieved through the participative efforts of the management, staff, students & parents.",
  },
};

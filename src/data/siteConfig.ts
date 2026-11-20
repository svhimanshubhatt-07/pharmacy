export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  nirfRank: string;
  establishedYear: number;
  campusArea: string;
  address: {
    institute: string;
    street: string;
    locality: string;
    city: string;
    state: string;
    pincode: string;
  };
  contact: {
    phone: string;
    email: string;
    directorEmail: string;
    admissionsUrl: string;
  };
  socialLinks: {
    facebook: string;
    instagram: string;
    linkedin: string;
  };
  feePaymentLinks: {
    title: string;
    url: string;
  }[];
  mapEmbedUrl: string;
  logo: string;
  footerLogo: string;
}

export const siteConfig: SiteConfig = {
  name: "Noida Institute of Engineering and Technology (Pharmacy Institute)",
  shortName: "NIET Pharmacy",
  logo: "https://res.cloudinary.com/boss8zib/image/upload/v1793776158/pharmacy-logo.png",
  footerLogo: "https://res.cloudinary.com/boss8zib/image/upload/v1793776218/pharmacy-footer-logo.svg",
  tagline: "A Centre of Excellence - Committed to developing highly skilled professionals",
  nirfRank: "37th NIRF Ranked Pharmacy Institute in India",
  establishedYear: 2005,
  campusArea: "16.9 acres of lush green campus",
  address: {
    institute: "Noida Institute of Engineering and Technology (Pharmacy Institute)",
    street: "19, Knowledge Park- II, Institutional Area",
    locality: "Knowledge Park II",
    city: "Greater Noida",
    state: "Uttar Pradesh",
    pincode: "201306",
  },
  contact: {
    phone: "+91-8010500700",
    email: "admission@niet.co.in",
    directorEmail: "directorpharmacy@niet.co.in",
    admissionsUrl: "https://applynow.niet.co.in/",
  },
  socialLinks: {
    facebook: "https://www.facebook.com/profile.php?id=100057204470453",
    instagram: "https://www.instagram.com/niet_pharmacy_/",
    linkedin: "https://www.linkedin.com/company/niet-pharmacy-institute-greater-noida/",
  },
  feePaymentLinks: [
    {
      title: "Fee Payment - ERP Login",
      url: "https://niet.instituteoncloud.com/Account/Login",
    },
    {
      title: "Fee Payment - Paytm",
      url: "https://paytm.com/education/Uttar%20Pradesh/Greater%20Noida/Noida%20Institute%20of%20Engineering%20and%20Technology%20(NIET)?utm_source=web&utm_medium=smarturl&utm_campaign=feeweb&utm_term=fees",
    },
    {
      title: "Fee Payment - FeePal",
      url: "https://feepal.org/index.php?/institute/noida-institute-of-engineering-and-technology",
    },
  ],
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14030.25955442678!2d77.491295!3d28.462529!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea6e088d25d9%3A0xb36b3648aa0c46b1!2sNoida%20Institute%20of%20Engineering%20and%20Technology%20(NIET%2C%20Greater%20Noida)!5e0!3m2!1sen!2sin!4v1714480572979!5m2!1sen!2sin",
};


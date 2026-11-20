import type { HomeSpotlightItem } from "@/components/HomeSections";

// Shared by the home and About pages so both show the same logos and gallery.
const cdn = (path: string) => `https://res.cloudinary.com/boss8zib/image/upload/${path}`;

export const SUBTITLE = "Building Knowledge. Inspiring Purpose.";

export const accreditationLogos = [
  { name: "NIRF", src: cdn("NIRF.webp") },
  { name: "QS I-GAUGE", src: cdn("v1793435272/I-GAUGE.svg") },
  { name: "NAAC", src: "/images/logos/logo-naac.png" },
  { name: "QS I-GAUGE Diamond", src: "/images/logos/logo-qs-diamond.png" },
  { name: "National Board of Accreditation", src: "/images/logos/logo-nba.png" },
  { name: "Institution's Innovation Council", src: "/images/logos/logo-iic.png" },
  { name: "ARIIA", src: cdn("v1793700070/ARIIA.svg") },
];

// 12 stories fill the 2 x 6 thumbnail grid. Items marked "Dummy" are placeholders.
export const spotlightItems: HomeSpotlightItem[] = [
  {
    tag: "Achievement",
    title: "2nd position, oral presentation",
    name: "Ms. Yagya Dadhich, M.Pharm · ICHAI, IIMT College of Pharmacy",
    image: cdn("social-wall/11.webp"),
    href: "/stakeholder-achievement",
  },
  {
    tag: "AKTU Merit List",
    title: "Promoted to University Rank 8",
    name: "Reshpal Kaur & Shagun Pathania · Revised AKTU Merit List 2026",
    image: cdn("social-wall/13.webp"),
    href: "/stakeholder-achievement",
  },
  {
    tag: "Ph.D. Awarded",
    title: "Doctorate at the 24th AKTU Convocation",
    name: "Dr. Abhijit Debnath · NIET Pharmacy Ph.D. Research Centre",
    image: cdn("social-wall/16.webp"),
    href: "/research",
  },
  {
    tag: "Convocation 2026",
    title: "Postgraduate honours",
    name: "NIET Pharmacy postgraduates at the 24th AKTU Convocation",
    image: cdn("social-wall/17.webp"),
    href: "/stakeholder-achievement",
  },
  {
    tag: "Research",
    title: "Representing innovation at Jamia Hamdard",
    name: "M.Pharm students · Global trends in drug design",
    image: cdn("social-wall/6.webp"),
    href: "/research",
  },
  {
    tag: "Milestone",
    title: "1st in UP, 4th in India",
    name: "QCI-PCI rating with A grade recognition",
    image: cdn("social-wall/19.webp"),
    href: "/approvals-and-affiliations",
  },
  {
    tag: "Happenings",
    title: "First aid & emergency care workshop",
    name: "Hands-on training in CPR, burn management and emergency preparedness",
    image: cdn("social-wall/4.webp"),
    href: "/event",
  },
  {
    tag: "Happenings",
    title: "MoU with Metro Hospital",
    name: "Clinical exposure, health camps and expert lectures for students",
    image: cdn("v1793955960/social-wall/7.webp"),
    href: "/event",
  },
  {
    tag: "Happenings",
    title: "Felicitated at PCI-sponsored FDP",
    name: "Dr. Avijit Mazumder, Director · Galgotias University",
    image: cdn("social-wall/18.webp"),
    href: "/event",
  },
  {
    tag: "Alumni Network",
    title: "15,000+ NIET alumni",
    name: "Working across India and worldwide",
    image: cdn("v1793955951/social-wall/14.webp"),
    href: "/life-at-niet",
  },
  {
    // Dummy story — replace with final copy.
    tag: "Graduate Honours",
    title: "Medal at the 24th AKTU Convocation",
    name: "Student Name · Programme",
    image: cdn("social-wall/15.webp"),
    href: "/stakeholder-achievement",
  },
  {
    // Dummy story — replace with final copy.
    tag: "Happenings",
    title: "Event title goes here",
    name: "Short event description goes here",
    image: cdn("social-wall/2.webp"),
    href: "/event",
  },
];

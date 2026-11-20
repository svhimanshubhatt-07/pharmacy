import Link from "next/link";
import type { Metadata } from "next";
import {
  HomeCampusCarousel,
  HomeProgrammeExplorer,
  HomeSpotlight,
  type HomeCampusCard,
  type HomeProgramme,
} from "@/components/HomeSections";
import { CourseFaq, type CourseFaqItem } from "@/components/CourseFaq";
import { HomeScrollReveal } from "@/components/HomeScrollReveal";
import { RankingMarquee } from "@/components/RankingMarquee";
import { RecognitionMarquee } from "@/components/RecognitionMarquee";
import { AboutMilestones } from "@/components/AboutSections";
import { pharmacyMilestones } from "@/data/homepage";
import { rankingImages, recognitionLogos } from "@/data/admissions";
import { spotlightItems } from "@/data/showcase";
import { cmcOverview } from "@/data/placements";
import { cloudinaryImageUrl } from "@/lib/cloudinary";

export const metadata: Metadata = {
  title: "NIET Pharmacy | Top 37th NIRF Ranked Pharmacy Institute in India",
  description:
    "Explore pharmacy education, research, achievements and campus life at NIET Pharmacy Institute, Greater Noida.",
};

const cdn = (path: string) => `https://res.cloudinary.com/boss8zib/image/upload/${path}`;

const APPLY_URL = "https://applynow.niet.co.in/";
const ADMISSION_PHONE = { display: "+91-801 050 0700", tel: "+918010500700" };

const rankingHighlights = [
  { value: "37th", label: "NIRF Pharmacy Ranking 2025" },
  { value: "PCI", label: "Approved Institute" },
  { value: "AKTU", label: "Affiliated Institute" },
  { value: "NBA", label: "Accredited B.Pharm" },
];

const homeFaqs: CourseFaqItem[] = [
  {
    question: "Which pharmacy programmes does NIET offer?",
    answer:
      "NIET Pharmacy offers the Diploma in Pharmacy (D.Pharm), Bachelor of Pharmacy (B.Pharm), and Master of Pharmacy (M.Pharm), with specializations in Pharmaceutics, Pharmacology, and Pharmaceutical Chemistry.",
  },
  {
    question: "How do I apply for admission?",
    answer:
      "Review programme eligibility and admission details on the Admissions page, then submit your application through the official online admissions portal.",
  },
  {
    question: "What approvals and accreditations does NIET Pharmacy have?",
    answer:
      "NIET Pharmacy is approved by PCI and affiliated with AKTU. The B.Pharm programme is accredited by NBA.",
  },
  {
    question: "Are hostel facilities available for students?",
    answer:
      "Yes. On-campus hostels are available separately for boys and girls, with Wi-Fi, 24/7 security, a gym, meals, and power backup.",
  },
  {
    question: "Where can I find the current fee structure?",
    answer:
      "Visit the Admissions page for the latest programme fee details and available payment options.",
  },
];



const programmes: HomeProgramme[] = [
  { title: "B Pharm", image: cdn("v1793435165/Library.jpg"), href: "/courses/bpharm" },
  { title: "B Pharm Lateral", image: cdn("v1793435154/Classrooms.jpg"), href: "/courses/bpharm" },
  { title: "D Pharm", image: cdn("v1793435165/Library.jpg"), href: "/courses/dpharm" },
  { title: "M. Pharm in Pharmaceutics", image: cdn("v1793435309/toxicology1.jpg"), href: "/courses/mpharm-ceutics" },
  { title: "M. Pharm in Pharmacology", image: cdn("v1793435151/animalhouse2.jpg"), href: "/courses/mpharm-cology" },
  { title: "M. Pharm in Pharmaceutical Chemistry", image: cdn("v1793435310/toxicology2.jpg"), href: "/courses/mpharm-chem" },
  { title: "PhD", image: cdn("social-wall/16.webp"), href: "/research" },
];

// Solid black / red tiles as per the home design; the "logo" tile shows the NIET Pharmacy mark.
type PillarTile =
  | { kind: "text"; eyebrow: string; title: string; href: string; tone: "black" | "red"; area: string }
  | { kind: "logo"; area: string };

const pillarTiles: PillarTile[] = [
  { kind: "text", eyebrow: "Academic Excellence", title: "A Strong Foundation in Pharmaceutical Sciences", href: "/courses", tone: "black", area: "a" },
  { kind: "text", eyebrow: "Practical Learning", title: "Learn Beyond the Classroom", href: "/infrastructure", tone: "red", area: "b" },
  { kind: "text", eyebrow: "Career Readiness", title: "Prepare for Your Professional Journey", href: "/placement-pharmacy", tone: "red", area: "c" },
  { kind: "text", eyebrow: "Research & Innovation", title: "Explore Ideas. Advance Knowledge.", href: "/research", tone: "black", area: "d" },
  { kind: "logo", area: "e" },
  { kind: "text", eyebrow: "Holistic Development", title: "Build Confidence, Skills & Values", href: "/life-at-niet", tone: "red", area: "f" },
  { kind: "text", eyebrow: "Beyond the Curriculum", title: "Clubs, Culture & Campus Life", href: "/life-at-niet", tone: "black", area: "g" },
];

const outcomeStats = [
  { value: "1500+", label: "Publications", text: "Across national and international peer-reviewed journals" },
  { value: "20+", label: "Active research areas", text: "Driving research work across multiple domains" },
];

// TODO: CET schedule entries are dummy placeholders until the 2026 PDFs are published.
type DocumentKind = "plain" | "new" | "link" | "pdf";

const documentLinks: { title: string; href: string; kind: DocumentKind }[] = [
  { title: "Entrance Test Schedule-2026", href: "/admissions#entrance-schedule", kind: "pdf" },
  { title: "Under Graduate CET Schedule-2026", href: "/admissions#ug-cet-schedule", kind: "pdf" },
  { title: "Post Graduate CET Schedule-2026", href: "/admissions#pg-cet-schedule", kind: "pdf" },
  { title: "Admission Process", href: "/admissions", kind: "link" },
  { title: "International Admissions", href: "/admissions#international", kind: "link" },
  { title: "Admission Brochures", href: "/pdf/brochure-01.pdf", kind: "pdf" },
  { title: "Admission Enquiry", href: "/contact-us", kind: "link" },
];


const campusCards: HomeCampusCard[] = [
  { title: "Academic Facilities", image: cdn("v1793435154/Classrooms.jpg"), href: "/infrastructure" },
  { title: "Library", image: cdn("v1793435165/Library.jpg"), href: "/infrastructure" },
  { title: "Hostel", image: cdn("v1793435158/hostel-facilities-1.webp"), href: "/infrastructure" },
  { title: "Sports & Fitness", image: cdn("v1793435155/gym-1.webp"), href: "/infrastructure" },
  { title: "Clubs & Events", image: cdn("v1793955950/social-wall/13.webp"), href: "/life-at-niet" },
  { title: "Gallery", image: "/images/gallery/featured-event.jpg", href: "/gallery" },
];

export default function HomePage() {
  return (
    <div className="homePage hp">
      {/* Scroll Reveal Observer */}
      <HomeScrollReveal />

      {/* 1. Hero */}
      <section className="hp-hero" aria-label="Welcome to NIET Pharmacy">
        <div className="hp-hero__media">
          <img
            src={cloudinaryImageUrl("hero_banner_1.png")}
            alt="NIET Pharmacy receiving the Institution of Happiness Award"
            className="hp-hero__img"
            fetchPriority="high"
          />
          <div className="hp-hero__overlay" />
        </div>
        <div className="hp-hero__content">
          <div className="hp-container">
            <p className="hp-hero__caption hp-reveal is-revealed">
              NIET Pharmacy brings students together to learn, research and serve in
              creative.
            </p>
            {/* <span className="hp-hero__dot" aria-hidden="true" /> */}
          </div>
        </div>
      </section>

      {/* 3. Rankings */}
      <section className="hp-section hp-rankings" aria-labelledby="hp-rankings-title">
        <div className="hp-container">
          <div className="hp-reveal">
            <h1 id="hp-rankings-title" className="hp-title">Key rankings &amp; approvals</h1>
            <p className="hp-subtitle">Recognised for Quality in Pharmacy Education.</p>
          </div>
          <dl className="hp-rankings__stats hp-reveal hp-reveal--scale hp-delay-1">
            {rankingHighlights.map((item) => (
              <div key={item.value}>
                <dt>{item.value}</dt>
                <dd>{item.label}</dd>
              </div>
            ))}
          </dl>
          <div className="hp-reveal hp-reveal--scale hp-delay-2">
            <RankingMarquee items={rankingImages} />
          </div>
        </div>
      </section>

      {/* 4. Programmes */}
      <section className="hp-programmes" aria-labelledby="hp-programmes-title">
        <div className="hp-container hp-reveal hp-reveal--scale">
          <HomeProgrammeExplorer
            programmes={programmes}
            title="Our Courses"
            subtitle="A Journey of Excellence, Innovation, and Growth."
          />
        </div>
      </section>

      {/* 6. Placements */}
      <section className="hp-placements" aria-labelledby="hp-placements-title">
        <div className="hp-container hp-placements__layout">
          <div className="hp-placements__card hp-reveal hp-reveal--left">
            <h2 id="hp-placements-title" className="hp-title">Placements &amp; alumni outcomes</h2>
            <p className="hp-subtitle">Preparing Students for the Next Step in Their Careers.</p>
            <p className="hp-placements__text">{cmcOverview.narrative}</p>
            <Link href="/placement-pharmacy" className="hp-placements__btn">Learn more</Link>
            <dl className="hp-placements__stats">
              {outcomeStats.map((stat) => (
                <div key={stat.label}>
                  <dt>{stat.value}</dt>
                  <dd>
                    <strong>{stat.label}</strong>
                    {stat.text}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="hp-placements__image hp-reveal hp-reveal--right hp-delay-1">
            <img src={cdn("v1793435165/Library.jpg")} alt="NIET Pharmacy student studying in the library" loading="lazy" />
          </div>
        </div>
        <div className="hp-placements__band" aria-hidden="true" />
      </section>

      {/* Our Journey / Milestones */}
      <section className="hp-section hp-milestones" aria-labelledby="hp-milestones-title">
        <div className="hp-container">
          <div className="hp-reveal">
            <h2 id="hp-milestones-title" className="hp-title">Our Journey / Milestones</h2>
            <p className="hp-subtitle">Progress and Achievements Since 2005.</p>
          </div>
          <div className="hp-reveal hp-reveal--scale hp-delay-1">
            <AboutMilestones milestones={pharmacyMilestones} />
          </div>
        </div>
      </section>

      {/* 7. Documents */}
      <section className="hp-documents" aria-labelledby="hp-documents-title">
        <div className="hp-container hp-documents__layout">
          <div className="hp-reveal hp-reveal--left">
            <h2 id="hp-documents-title">Documents</h2>
            <ul className="hp-documents__list">
              {documentLinks.map((doc) => (
                <li key={doc.title}>
                  {doc.kind === "pdf" ? (
                    <a href={doc.href} target="_blank" rel="noopener noreferrer">
                      {doc.title}
                      <span className="hp-documents__pdf" aria-label="PDF">
                        <svg viewBox="0 0 24 28" width="16" height="19" fill="none" aria-hidden="true">
                          <path d="M3 2.5C3 1.12 4.12 0 5.5 0H15.5L22 6.5V25.5C22 26.88 20.88 28 19.5 28H5.5C4.12 28 3 26.88 3 25.5V2.5Z" fill="#C4121A" />
                          <path d="M15.5 0V6.5H22L15.5 0Z" fill="#8E0D13" />
                          <rect x="4" y="16.5" width="16" height="8.5" rx="1.5" fill="white" />
                          <text x="12" y="23" textAnchor="middle" fill="#C4121A" fontSize="6.5" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.5">PDF</text>
                        </svg>
                      </span>
                    </a>
                  ) : (
                    <Link href={doc.href}>
                      {doc.title}
                      {doc.kind === "new" && <span className="hp-documents__new" aria-label="New" />}
                      {doc.kind === "link" && <span aria-hidden="true">›</span>}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="hp-documents__aside hp-reveal hp-reveal--right hp-delay-1">
            <div className="hp-documents__image">
              <img src={cdn("v1793435154/Classrooms.jpg")} alt="A lecture in progress in an NIET Pharmacy classroom" loading="lazy" />
            </div>
            <div className="hp-documents__actions">
              <a href={APPLY_URL} target="_blank" rel="noopener noreferrer" className="hp-btn hp-btn--red">
                Apply Online
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="home-honours" aria-labelledby="home-honours-title">
        <div className="hp-container">
          <h2 id="home-honours-title" className="hp-title">Government Recognitions</h2>
          <p className="hp-subtitle">Recognised for Quality in Pharmacy Education.</p>
          <RecognitionMarquee items={recognitionLogos} />
        </div>
      </section>

      {/* 8. Spotlight */}
      <section className="hp-spotlight hp-spotlight--doers" aria-labelledby="hp-spotlight-title">
        <div className="hp-container">
          <header className="hp-spotlight__head hp-reveal">
            <h2 id="hp-spotlight-title" className="hp-title">Gallery</h2>
            <p className="hp-subtitle">Moments of Learning. Memories of Growth.</p>
            <p className="hp-spotlight__intro !text-[16px]" style={{ fontSize: "16px" }}>
              Discover life at NIET Pharmacy through glimpses of academic events, expert sessions,
              workshops and campus celebrations—capturing the people and experiences that bring our
              community together.
            </p>
          </header>
          <div className="hp-reveal hp-reveal--scale hp-delay-1">
            <HomeSpotlight items={spotlightItems} showCaption={false} />
          </div>
        </div>
      </section>

      <CourseFaq items={homeFaqs} />

      {/* 9. Campus life */}
      <section className="hp-campus" aria-labelledby="hp-campus-title">
        <div className="hp-container">
          <div className="hp-campus__head hp-reveal">
            <div>
              <p className="hp-eyebrow hp-eyebrow--light">Life at NIET</p>
              <h2 id="hp-campus-title">Campus &amp; Student Life</h2>
            </div>
            <p>
              Beyond the classroom, students shape their journey through clubs, cultural and
              technical events, sports and a residential campus built for focused learning.
            </p>
          </div>
          <div className="hp-reveal hp-reveal--scale hp-delay-1">
            <HomeCampusCarousel cards={campusCards} />
          </div>
        </div>
      </section>
    </div>
  );
}

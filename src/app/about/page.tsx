import type { Metadata } from "next";
import Link from "next/link";
import { aboutData } from "@/data/about";
import { leadershipMessages } from "@/data/leadership";
import { pharmacyMilestones } from "@/data/homepage";
import { advisoryBoardMembers, governingBodyMembers } from "@/data/authorities";
import { facultyList } from "@/data/faculty";
import { spotlightItems } from "@/data/showcase";
import { recognitionLogos } from "@/data/admissions";
import { AboutLeadershipTabs, AboutMilestones, type AboutLeadershipGroup } from "@/components/AboutSections";
import { HomeSpotlight } from "@/components/HomeSections";
import { RecognitionMarquee } from "@/components/RecognitionMarquee";

export const metadata: Metadata = {
  title: "About Us | NIET Pharmacy Institute - Ranked 37th NIRF",
  description:
    "Learn about NIET Pharmacy, a Center of Excellence in pharmacy education ranked 37th nationally by NIRF. Discover our milestones, leadership, research and campus.",
};

const cdn = (path: string) => `https://res.cloudinary.com/boss8zib/image/upload/${path}`;
const APPLY_URL = "https://applynow.niet.co.in/";

const titleCase = (value: string) =>
  value
    .toLowerCase()
    .replace(/\b([a-z])/g, (letter) => letter.toUpperCase())
    .replace(/\bHod\b/g, "HOD")
    .replace(/\bDr\b(?!\.)/g, "Dr.");

const quickFacts = ["Affiliated to AKTU", "PCI Approved", "Established in 2005", "NBA Accredited B.Pharm"];


const { managingDirector, additionalManagingDirector, director, dean } = leadershipMessages;

const leaderMessages = [
  {
    desk: "From the desk of the Managing Director",
    quote: managingDirector.quote ?? "",
    excerpt: managingDirector.paragraphs[1],
    name: managingDirector.name,
    role: managingDirector.designation,
    image: "https://www.niet.co.in/assets/frontend/images/board1.webp",
    href: `/${managingDirector.slug}`,
  },
  {
    desk: "From the desk of the Additional Managing Director",
    quote: "\"Education is the most powerful weapon.\"",
    excerpt: additionalManagingDirector.paragraphs[0],
    name: additionalManagingDirector.name,
    role: additionalManagingDirector.designation,
    image: cdn("Dr._Neema_Agarwal.png"),
    href: `/${additionalManagingDirector.slug}`,
  },
  {
    desk: "From the desk of the Director",
    quote: "\"Multiskilled, professional, ethical.\"",
    excerpt: director.paragraphs[0].split(". ").slice(0, 2).join(". ") + ".",
    name: director.name,
    role: director.designation,
    image: cdn("Avijit-Mazumder.jpg"),
    href: `/${director.slug}`,
  },
  {
    desk: "From the desk of the Dean",
    quote: "\"Nurturing creative potential.\"",
    excerpt: dean.paragraphs[0].split(". ").slice(0, 2).join(". ") + ".",
    name: dean.name,
    role: dean.designation,
    image: cdn("Rupa-Mazumder.jpg"),
    href: `/${dean.slug}`,
  },
];

const leadershipGroups: AboutLeadershipGroup[] = [
  {
    label: "Management",
    viewAllHref: "/authorities",
    people: leaderMessages.map((leader) => ({ name: leader.name, role: leader.role, image: leader.image })),
  },
  {
    label: "Governing Body",
    viewAllHref: "/authorities",
    people: governingBodyMembers
      .filter((member) => !/to be nominated/i.test(member.name))
      .map((member) => ({ name: member.name, role: member.position })),
  },
  {
    label: "Advisory Board",
    viewAllHref: "/authorities",
    people: advisoryBoardMembers.map((member) => ({ name: member.name, role: member.position })),
  },
  {
    label: "Faculty",
    viewAllHref: "/intellectual-capital",
    people: facultyList
      .filter((member) => member.photo)
      .slice(0, 12)
      .map((member) => ({
        name: titleCase(member.name),
        role: member.designation.replace(/qualification:.*/i, "").trim(),
        image: member.photo,
      })),
  },
];

const researchTiles = [
  {
    title: "PhD & Doctoral Research",
    text: "Doctoral research and faculty supervision at the AKTU-recognised Research Centre.",
    image: cdn("social-wall/16.webp"),
    href: "/research",
    cta: "Learn more",
  },
  {
    title: "Research Publications",
    text: "Published work advancing pharmaceutical sciences.",
    image: cdn("social-wall/6.webp"),
    href: "/research",
    cta: "Learn more",
  },
  {
    title: "PhD Pursuing Scholars",
    text: "Scholars working across diverse research areas.",
    image: cdn("social-wall/17.webp"),
    href: "/research",
  },
  {
    title: "Research & Development",
    text: "Consultancy, sponsored projects and laboratory research.",
    image: cdn("v1793435309/toxicology1.jpg"),
    href: "/research",
  },
  {
    title: "Patents",
    text: "Ideas and inventions from pharmaceutical innovation.",
    image: cdn("v1793435310/toxicology2.jpg"),
    href: "/research",
  },
];

export default function AboutPage() {
  return (
    <div className="hp ab">
      {/* 1. Hero + stats */}
      <section className="ab-hero" aria-label="NIET Pharmacy award">
        <div className="ab-hero__banner">
          <img
            src={cdn("hero_banner_1.png")}
            alt="Institution of Happiness Awards 2026 - NIET Pharmacy Institute"
            fetchPriority="high"
          />
        </div>
        <div className="hp-container">
          <div className="ab-stats">
            <p className="ab-stats__rank">37th National Rank — Pharmacy · NIRF 2025</p>
            <ul className="ab-stats__facts">
              {quickFacts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
          </div>

          <div className="ab-logos-row">
            <RecognitionMarquee items={recognitionLogos} />
          </div>
        </div>
      </section>

      {/* 3. About + Mission */}
      <section className="ab-section ab-intro" aria-labelledby="ab-about-title">
        <div className="hp-container">
          <h1 id="ab-about-title" className="hp-title">About Us</h1>
          <p className="hp-subtitle">A Pharmacy Institute Built on Learning and Service.</p>
          <p>{aboutData.narrative1}</p>
          <p>{aboutData.narrative2}</p>

          <h2 id="ab-mission-title" className="hp-title ab-intro__next">Mission</h2>
          <p className="hp-subtitle">Our Purpose. Our Promise to Healthcare.</p>
          <p>{aboutData.mission.description}</p>
        </div>
      </section>

      {/* 4. Milestones */}
      <section className="ab-section ab-milestones" aria-labelledby="ab-milestones-title">
        <div className="hp-container">
          <h2 id="ab-milestones-title" className="hp-title">Our Journey / Milestones</h2>
          <p className="hp-subtitle">Progress and Achievements Since 2005.</p>
          <AboutMilestones milestones={pharmacyMilestones} />
        </div>
      </section>

      {/* 5. Leadership messages (zig-zag) */}
      <section className="ab-section ab-messages" aria-labelledby="ab-messages-title">
        <div className="hp-container">
          <h2 id="ab-messages-title" className="hp-title">Leadership Messages</h2>
          <p className="hp-subtitle">Perspectives from Our Institute Leaders.</p>
          <div className="ab-messages__grid">
            {leaderMessages.map((leader, index) => (
              <article key={leader.name} className={`ab-message${index % 2 === 1 ? " ab-message--reverse" : ""}`}>
                <div className="ab-message__photo">
                  <img src={leader.image} alt={leader.name} loading="lazy" />
                </div>
                <div className="ab-message__copy">
                  <p className="ab-message__desk">{leader.desk}</p>
                  <p className="ab-message__quote">{leader.quote}</p>
                  <p className="ab-message__excerpt">{leader.excerpt}</p>
                  <p className="ab-message__name">
                    <strong>{leader.name}</strong>
                    <span>{leader.role}</span>
                  </p>
                  <Link href={leader.href} className="ab-btn-outline">Read more</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Leadership tabs */}
      <section className="ab-section ab-team" aria-labelledby="ab-team-title">
        <div className="hp-container">
          <h2 id="ab-team-title" className="hp-title">Leadership</h2>
          <p className="hp-subtitle">Meet the People Guiding NIET Pharmacy.</p>
          <p className="ab-lead">
            NIET Pharmacy is guided by experienced leaders, governing members and advisors who bring
            together academic excellence, industry insight and a shared commitment to student success.
          </p>
          <AboutLeadershipTabs groups={leadershipGroups} />
        </div>
      </section>

      {/* 7. Academic excellence & research */}
      <section className="ab-section ab-research" aria-labelledby="ab-research-title">
        <div className="hp-container">
          <h2 id="ab-research-title" className="hp-title">Academic Excellence &amp; Research</h2>
          <p className="hp-subtitle">Advancing Knowledge. Inspiring Discovery.</p>
          <p className="ab-lead">
            Explore our research ecosystem—doctoral programmes, publications, patents and funded projects
            that drive innovation in pharmaceutical sciences.
          </p>
          <div className="hp-why__grid">
            {researchTiles.map((tile, index) => (
              <Link
                key={tile.title}
                href={tile.href}
                className={`hp-why__tile${index === 0 ? " hp-why__tile--tall" : ""}`}
              >
                <img src={tile.image} alt="" loading="lazy" />
                <div className="hp-why__copy">
                  <strong>{tile.title}</strong>
                  <span>{tile.text}</span>
                  {tile.cta && <em>{tile.cta} →</em>}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Gallery — same layout as the home page */}
      <section className="hp-spotlight hp-spotlight--doers" aria-labelledby="ab-gallery-title">
        <div className="hp-container">
          <header className="hp-spotlight__head">
            <h2 id="ab-gallery-title" className="hp-title">Gallery</h2>
            <p className="hp-subtitle">Moments of Learning. Memories of Growth.</p>
            <p className="hp-spotlight__intro">
              Discover life at NIET Pharmacy through glimpses of academic events, expert sessions,
              workshops and campus celebrations—capturing the people and experiences that bring our
              community together.
            </p>
          </header>
          <HomeSpotlight items={spotlightItems} showCaption={false} />
        </div>
      </section>

      {/* 9. CTA */}
      <section className="ab-cta" aria-label="Get in touch">
        <div className="hp-container ab-cta__grid">
          <Link href="/contact-us" className="ab-cta__btn ab-cta__btn--red">Contact Us</Link>
          <a href={APPLY_URL} target="_blank" rel="noopener noreferrer" className="ab-cta__btn ab-cta__btn--navy">
            Apply Now
          </a>
        </div>
      </section>
    </div>
  );
}

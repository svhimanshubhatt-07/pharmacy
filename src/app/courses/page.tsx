// NIET Pharmacy Courses Page — wireframe 2026 layout, content kept from courses.php parity data
import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import type { TabItem } from "@/components/TabbedContent";
import { CourseFinder } from "@/components/CourseFinder";
import { CourseFaq, CourseFaqItem } from "@/components/CourseFaq";
import {
  coursesData,
  bpharmHodProfiles,
  bpharmPeos,
  bpharmPos,
  bpharmCareerOptions,
  bpharmSummerTrainingCompanies,
  bpharmIndustrialVisitIndustries,
  bpharmSyllabusPdf,
  bpharmPlacementsList,
  mpharmPlacementsList,
  courseFeeStructures,
  type CourseDetail,
  type StudentPlacementRecord,
} from "@/data/courses";

export const metadata: Metadata = {
  title: "Pharmacy Courses | B.Pharm, D.Pharm & M.Pharm | NIET Pharmacy",
  description:
    "Comprehensive pharmacy programs at NIET Pharmacy (NIRF Rank 37). Offering B.Pharm, D.Pharm, and M.Pharm with clinical research, pharmacology, and pharmaceutical chemistry.",
};

const cdn = (path: string) => `https://res.cloudinary.com/boss8zib/image/upload/${path}`;
const APPLY_URL = "https://applynow.niet.co.in/";
const ADMISSION_PHONE = { display: "+91-801 050 0700", tel: "+918010500700" };

type DocumentKind = "plain" | "new" | "link" | "pdf";

// TODO: CET schedule entries are dummy placeholders until the 2026 PDFs are published.
const admissionLinks: { title: string; href: string; kind: DocumentKind }[] = [
  { title: "Entrance Test Schedule-2026", href: "/admissions#entrance-schedule", kind: "pdf" },
  { title: "Under Graduate CET Schedule-2026", href: "/admissions#ug-cet-schedule", kind: "pdf" },
  { title: "Post Graduate CET Schedule-2026", href: "/admissions#pg-cet-schedule", kind: "pdf" },
  { title: "Admission Process", href: "/admissions", kind: "link" },
  { title: "International Admissions", href: "/admissions#international", kind: "link" },
  { title: "Admission Brochures", href: "/pdf/brochure-01.pdf", kind: "pdf" },
  { title: "Admission Enquiry", href: "/contact-us", kind: "link" },
];

const courseMessages = [
  {
    slug: "student-research-presentation",
    name: "NIET Pharmacy Student",
    designation: "Student Research Presenter",
    excerpt:
      "Presenting our research at Jamia Hamdard gave me the confidence to share my work and learn from the wider pharmacy community.",
    image:
      "https://res.cloudinary.com/boss8zib/image/upload/v1793434936/WhatsApp_Image_2026-04-03_at_17.30.04.jpg",
    imageAlt: "NIET Pharmacy students at their research presentation at Jamia Hamdard",
  },
  {
    slug: "student-research-discussion",
    name: "NIET Pharmacy Student",
    designation: "Pharmacy Student",
    excerpt:
      "Discussing our research helped me connect what I learn in class with current questions in pharmaceutical sciences.",
    image:
      "https://res.cloudinary.com/boss8zib/image/upload/v1793434935/WhatsApp_Image_2026-04-03_at_17.30.04_2.jpg",
    imageAlt: "NIET Pharmacy students discussing a research poster at Jamia Hamdard",
  },
  {
    slug: "student-research-learning",
    name: "NIET Pharmacy Student",
    designation: "Pharmacy Student",
    excerpt:
      "Taking part in a scientific presentation encouraged me to explore new ideas and share what I learned with other researchers.",
    image:
      "https://res.cloudinary.com/boss8zib/image/upload/v1793434936/WhatsApp_Image_2026-04-03_at_17.30.04_3.jpg",
    imageAlt: "Students attending a pharmacy research presentation at Jamia Hamdard",
  },
];

/* ---------- Panel building blocks ---------- */

function PanelHeader({ course, facts }: { course: CourseDetail; facts: string[] }) {
  return (
    <header className="cp-panel__head">
      <p className="cp-panel__eyebrow">{course.level} programme</p>
      <h2>{course.name}</h2>
      <span className="cp-panel__bar" aria-hidden="true" />
      <ul className="cp-panel__facts">
        {facts.map((fact) => (
          <li key={fact}>{fact}</li>
        ))}
      </ul>
    </header>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="cp-block">
      <h3>{title}</h3>
      {children}
    </section>
  );
}

function BulletList({ items, columns = false }: { items: string[]; columns?: boolean }) {
  return (
    <ul className={`cp-list${columns ? " cp-list--columns" : ""}`}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function Note({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="cp-note">
      <strong>{title}</strong>
      <p>{children}</p>
    </div>
  );
}

function Download({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="cp-download">
      <svg viewBox="0 0 16 20" width="14" height="18" aria-hidden="true">
        <path d="M2 0h8l6 6v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z" fill="currentColor" opacity="0.18" />
        <path d="M8 7v7m0 0-3-3m3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {children}
    </a>
  );
}

function PlacementTable({ records }: { records: StudentPlacementRecord[] }) {
  return (
    <div className="cp-table-wrap cp-table-wrap--scroll">
      <table className="cp-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Roll No</th>
            <th>Company</th>
            <th>Branch</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record, index) => (
            <tr key={`${record.rollNo}-${index}`}>
              <td>{record.sNo || index + 1}</td>
              <td><strong>{record.name}</strong></td>
              <td>{record.rollNo}</td>
              <td>{record.company}</td>
              <td>{record.branch}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CoreSections({ course, meritsTitle = "Key merits" }: { course: CourseDetail; meritsTitle?: string }) {
  return (
    <>
      <Block title="Programme introduction">
        <p className="cp-prose">{course.overview}</p>
      </Block>
      <Note title="Eligibility criteria">{course.eligibility}</Note>
      {course.attendanceRule && <Note title="Attendance regulation">{course.attendanceRule}</Note>}
      <Block title={meritsTitle}>
        <BulletList items={course.merits} />
      </Block>
      {course.highlights.length > 0 && (
        <Block title="Specialisation highlights">
          <BulletList items={course.highlights} />
        </Block>
      )}
    </>
  );
}

function MPharmPanel({ course, extra }: { course: CourseDetail; extra?: React.ReactNode }) {
  return (
    <article className="cp-panel">
      <PanelHeader
        course={course}
        facts={[`Duration: ${course.duration}`, `Intake: ${course.intake} seats`, "PCI & AICTE approved"]}
      />
      <CoreSections course={course} />
      {course.syllabusPdfs && (
        <div className="cp-downloads">
          {course.syllabusPdfs.map((pdf) => (
            <Download key={pdf.url + pdf.title} href={pdf.url}>{pdf.title}</Download>
          ))}
        </div>
      )}
      {extra}
    </article>
  );
}

/* ---------- Page ---------- */

export default function CoursesPage() {
  const dpharm = coursesData.find((c) => c.id === "dpharm")!;
  const bpharm = coursesData.find((c) => c.id === "bpharm")!;
  const mpharmCeutics = coursesData.find((c) => c.id === "mpharm-ceutics")!;
  const mpharmCology = coursesData.find((c) => c.id === "mpharm-cology")!;
  const mpharmChem = coursesData.find((c) => c.id === "mpharm-chem")!;

  const courseCards = [
    {
      title: "B.Pharm",
      duration: bpharm.duration,
      level: "Undergraduate programme",
      description: "A pharmacy degree focused on healthcare practice and pharmaceutical sciences.",
      href: `/courses/${bpharm.id}`,
    },
    {
      title: "B.Pharm (Lateral Entry)",
      duration: bpharm.duration,
      level: "Undergraduate programme",
      description: "Direct entry to the second year for eligible Diploma in Pharmacy holders.",
      href: `/courses/${bpharm.id}`,
    },
    {
      title: "D.Pharm",
      duration: dpharm.duration,
      level: "Diploma programme",
      description: "Training for careers in community, hospital and dispensing pharmacy.",
      href: `/courses/${dpharm.id}`,
    },
    {
      title: "M.Pharm",
      duration: mpharmCeutics.duration,
      level: "Postgraduate programme",
      description: "Advanced study in Pharmaceutics, Pharmacology and Pharmaceutical Chemistry.",
      href: `/courses/${mpharmCeutics.id}`,
    },
    {
      title: "M.Pharm (Pharmaceutics)",
      duration: mpharmCeutics.duration,
      level: "Postgraduate programme",
      description: "Specialized study in pharmaceutical formulation and drug delivery.",
      href: `/courses/${mpharmCeutics.id}`,
    },
    {
      title: "M.Pharm (Pharmacology)",
      duration: mpharmCology.duration,
      level: "Postgraduate programme",
      description: "Specialized study in pharmacology, toxicology and clinical research.",
      href: `/courses/${mpharmCology.id}`,
    },
    {
      title: "M.Pharm (Pharmaceutical Chemistry)",
      duration: mpharmChem.duration,
      level: "Postgraduate programme",
      description: "Specialized study in medicinal chemistry, drug design and synthesis.",
      href: `/courses/${mpharmChem.id}`,
    },
    {
      title: "PH. D pursuing",
      duration: "Doctoral research",
      level: "Pharmaceutical sciences",
      description: "Research opportunities at NIET's AKTU-recognized research centre.",
      href: "/research",
    },
  ];

  const tabs: TabItem[] = [
    {
      id: "bpharm",
      label: "B.Pharm (NBA Accredited)",
      content: (
        <article className="cp-panel">
          <PanelHeader
            course={bpharm}
            facts={[
              `Duration: ${bpharm.duration}`,
              `Intake: ${bpharm.intake} seats`,
              "AKTU Code: 908",
              "NBA Accredited (2017–2027)",
            ]}
          />
          <CoreSections course={bpharm} meritsTitle="Key merits & educational advantages" />

          <Block title="Heads of department">
            <div className="cp-table-wrap">
              <table className="cp-table">
                <thead>
                  <tr><th>S.No</th><th>Department</th><th>HOD</th></tr>
                </thead>
                <tbody>
                  {bpharmHodProfiles.map((hod) => (
                    <tr key={hod.sNo}>
                      <td>{hod.sNo}</td>
                      <td><strong>{hod.branch}</strong></td>
                      <td>{hod.hod}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Block>

          <Block title="Programme educational objectives (PEOs)">
            <BulletList items={bpharmPeos} />
          </Block>

          <Block title="Programme outcomes (POs)">
            <ol className="cp-numbered">
              {bpharmPos.map((po) => (
                <li key={po.sNo}>{po.outcome}</li>
              ))}
            </ol>
          </Block>

          <Block title="Career opportunities">
            <BulletList items={bpharmCareerOptions} columns />
          </Block>

          <Block title={`Summer training partners (${bpharmSummerTrainingCompanies.length})`}>
            <p className="cp-prose">
              Students undergo practical training at leading pharmaceutical companies during their summer
              training programme, including:
            </p>
            <BulletList items={bpharmSummerTrainingCompanies} columns />
          </Block>

          <Block title="Industrial visit partners">
            <p className="cp-prose">
              One-day industrial visits to reputed pharmaceutical industries are arranged regularly for final-year
              B.Pharm students, as required by the university curriculum.
            </p>
            <BulletList items={bpharmIndustrialVisitIndustries} columns />
          </Block>

          <div className="cp-downloads">
            <Download href={bpharmSyllabusPdf}>B.Pharm I, II, III &amp; IV year syllabus</Download>
          </div>

          <Block title={`B.Pharm placements (${bpharmPlacementsList.length} students placed)`}>
            <PlacementTable records={bpharmPlacementsList} />
          </Block>
        </article>
      ),
    },
    {
      id: "dpharm",
      label: "D.Pharm (Diploma)",
      content: (
        <article className="cp-panel">
          <PanelHeader
            course={dpharm}
            facts={[`Duration: ${dpharm.duration}`, `Intake: ${dpharm.intake} seats`, "Institute Code: 1067 (BTE UP)"]}
          />
          <CoreSections course={dpharm} />
          {dpharm.syllabusPdfs && (
            <Block title="Syllabus downloads">
              <div className="cp-downloads">
                {dpharm.syllabusPdfs.map((pdf) => (
                  <Download key={pdf.url + pdf.title} href={pdf.url}>{pdf.title}</Download>
                ))}
              </div>
            </Block>
          )}
          <Block title="Fee structure">
            <div className="cp-table-wrap">
              <table className="cp-table">
                <thead>
                  <tr><th>S.No</th><th>Fee head</th><th className="cp-num">Amount (₹)</th></tr>
                </thead>
                <tbody>
                  {courseFeeStructures.dpharmFee.map((fee) => (
                    <tr key={fee.sNo}>
                      <td>{fee.sNo}</td>
                      <td><strong>{fee.feeHead}</strong></td>
                      <td className="cp-num">{fee.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Block>
        </article>
      ),
    },
    {
      id: "mpharm-ceutics",
      label: "M.Pharm - Pharmaceutics",
      content: <MPharmPanel course={mpharmCeutics} />,
    },
    {
      id: "mpharm-cology",
      label: "M.Pharm - Pharmacology",
      content: <MPharmPanel course={mpharmCology} />,
    },
    {
      id: "mpharm-chem",
      label: "M.Pharm - Pharm. Chemistry",
      content: (
        <MPharmPanel
          course={mpharmChem}
          extra={
            <Block title={`M.Pharm placements (${mpharmPlacementsList.length} students placed)`}>
              <PlacementTable records={mpharmPlacementsList} />
            </Block>
          }
        />
      ),
    },
    {
      id: "hostel-fees",
      label: "Hostel & Bus Facilities",
      content: (
        <article className="cp-panel">
          <header className="cp-panel__head">
            <p className="cp-panel__eyebrow">Campus facilities</p>
            <h2>Accommodation &amp; transport</h2>
            <span className="cp-panel__bar" aria-hidden="true" />
          </header>
          <p className="cp-prose">
            NIET provides secure, separate on-campus hostels for boys and girls with modern amenities,
            round-the-clock power backup, Wi-Fi and recreational facilities.
          </p>

          {[
            { title: "Hostel Fee Schedule - Plot No. 14", rows: courseFeeStructures.hostelPlot14, withAc: true },
            { title: "Hostel Fee Schedule - Plot No. 19", rows: courseFeeStructures.hostelPlot19, withAc: false },
          ].map((table) => (
            <section key={table.title} className="cp-fee">
              <h3 className="cp-fee__title">{table.title}</h3>
              <div className="cp-fee__wrap">
                <table className="cp-fee__table">
                  <thead>
                    <tr>
                      <th>S.No</th>
                      <th>Room Type</th>
                      <th>Rent (₹)</th>
                      <th>Mess Advance</th>
                      <th>Medical Ins.</th>
                      <th>Total</th>
                      <th>Security</th>
                      <th>Total with Security</th>
                      {table.withAc && <th>With AC</th>}
                    </tr>
                  </thead>
                  <tbody>
                    {table.rows.map((row) => (
                      <tr key={row.sNo}>
                        <td>{row.sNo}</td>
                        <td><strong>{row.type}</strong></td>
                        <td>{row.rent}</td>
                        <td>{row.mess}</td>
                        <td>{row.ins}</td>
                        <td>{row.total}</td>
                        <td>{row.security}</td>
                        <td><strong>{row.totalWithSecurity}</strong></td>
                        {table.withAc && (
                          <td>{"withAc" in row ? <span className="cp-pill">{String(row.withAc)}</span> : "—"}</td>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          ))}

          <Block title="Institute bank account (RTGS / NEFT / IMPS)">
            <dl className="cp-bank">
              <dt>Account name</dt><dd>{courseFeeStructures.bankDetails.accountName}</dd>
              <dt>Account number</dt><dd><code>{courseFeeStructures.bankDetails.accountNumber}</code></dd>
              <dt>IFSC code</dt><dd><code>{courseFeeStructures.bankDetails.ifscCode}</code></dd>
              <dt>Bank name</dt><dd>{courseFeeStructures.bankDetails.bankName}</dd>
              <dt>Branch</dt><dd>{courseFeeStructures.bankDetails.branch}</dd>
            </dl>
          </Block>
        </article>
      ),
    },
  ];

  const courseFaqs: CourseFaqItem[] = [
    {
      question: "Which pharmacy programmes are offered at NIET?",
      answer:
        "NIET Pharmacy offers the Diploma in Pharmacy (D.Pharm), Bachelor of Pharmacy (B.Pharm), and Master of Pharmacy (M.Pharm) with specializations in Pharmaceutics, Pharmacology, and Pharmaceutical Chemistry.",
    },
    {
      question: "What are the programme durations and approved intakes?",
      answer: `D.Pharm is a ${dpharm.duration} programme with an intake of ${dpharm.intake} seats. B.Pharm is a ${bpharm.duration} programme with an intake of ${bpharm.intake} seats. Each M.Pharm specialization is ${mpharmCeutics.duration} with an intake of ${mpharmCeutics.intake} seats.`,
    },
    {
      question: "What are the admission eligibility requirements?",
      answer: `D.Pharm: ${dpharm.eligibility} B.Pharm: ${bpharm.eligibility}`,
    },
    {
      question: "Which M.Pharm specializations can I choose?",
      answer:
        "Students can choose Pharmaceutics, Pharmacology, or Pharmaceutical Chemistry. Each specialization includes advanced pharmacy coursework and research.",
    },
    {
      question: "How do I apply for admission?",
      answer:
        "Visit the NIET admissions page to review the process and documents required, then submit your application through the official admissions portal.",
    },
  ];

  return (
    <div className="coursesPage hp">
      {/* 1. Hero + programme finder */}
      <header className="cp-hero">
        <div className="cp-hero__banner">
          <img
            src={cdn("v1793435154/Classrooms.jpg")}
            alt="Students learning in a modern pharmacy classroom"
            fetchPriority="high"
          />
        </div>
        <div className="hp-container cp-hero__finder">
          <CourseFinder
            courses={coursesData.map(({ id, name, level, duration, intake }) => ({
              id,
              name,
              level,
              duration,
              intake,
            }))}
          />
        </div>
      </header>

      {/* About US section directly following the red course finder box */}
      <section className="cp-about" aria-labelledby="courses-about-title">
        <div className="cp-section-container cp-about__container">
          <div>
            <h2 id="courses-about-title" className="font-heading text-3xl md:text-4xl font-bold text-[#1e293b] tracking-tight">
              About Us
            </h2>
            <p className="font-accent text-[#CF1427] text-lg md:text-xl font-semibold">
              — Building Knowledge. Inspiring Purpose.
            </p>
          </div>
          <p className="font-body text-[#334155] text-[15px] md:text-[16px] leading-[1.75]">
            At Noida Institute of Engineering and Technology (Pharmacy Institute), Greater Noida, pharmaceutical education extends beyond the classroom. We bring together academic learning, practical experience and a commitment to ethical practice to help students prepare for meaningful careers in pharmacy.
          </p>
          <p className="font-body text-[#334155] text-[15px] md:text-[16px] leading-[1.75]">
            Our approach encourages students to ask questions, strengthen their scientific understanding and develop the confidence to apply what they learn. With an emphasis on teaching, research and holistic development, we aim to nurture professionals who contribute responsibly to healthcare and society.
          </p>
        </div>
      </section>

      <section className="cp-showcase" aria-labelledby="cp-showcase-title">
        <div className="cp-section-container">
          <header className="cp-showcase__heading">
            <h2 id="cp-showcase-title" className="font-heading text-3xl md:text-4xl font-bold text-[#1e293b] tracking-tight">
              Our Courses
            </h2>
            <p className="font-accent text-[#CF1427] text-lg md:text-xl font-semibold">
                — A Journey of Excellence, Innovation, and Growth.
            </p>
          </header>
          <div className="cp-showcase__grid">
            {courseCards.map((course) => (
                <Link
                  key={course.title}
                  href={course.href}
                  className={`cp-course-card${course.title === "PH. D pursuing" ? " cp-course-card--phd" : ""}`}
                >
                  <h3>{course.title}</h3>
                  <ul className="cp-course-card__facts">
                    <li>
                      <span className="material-symbols-outlined" aria-hidden="true">schedule</span>
                      {course.duration}
                    </li>
                    <li>
                      <span className="material-symbols-outlined" aria-hidden="true">smartphone</span>
                      {course.level}
                    </li>
                  </ul>
                  <p>{course.description}</p>
                  <span className="cp-course-card__link">Read more</span>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <section className="cp-messages" aria-labelledby="cp-messages-title">
        <div className="cp-section-container">
          <header className="cp-messages__heading">
            <h2 id="cp-messages-title" className="font-heading text-3xl md:text-4xl font-bold text-[#1e293b] tracking-tight">
              Messages
            </h2>
            <p className="font-accent text-[#CF1427] text-lg md:text-xl font-semibold">
              — Voices of Leadership, Inspiring Generations.
            </p>
          </header>
          <div className="cp-messages__grid">
            {courseMessages.map((message) => (
              <article className="cp-message" key={message.slug}>
                <div className="cp-message__photo">
                  <img
                    src={message.image}
                    alt={message.imageAlt}
                    loading="lazy"
                  />
                </div>
                <div className="cp-message__copy">
                  <span className="cp-message__quote" aria-hidden="true">“</span>
                  <p>{message.excerpt}</p>
                  <div className="cp-message__author">
                    <strong>{message.name}</strong>
                    <span>{message.designation}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

     
      {/* 5. FAQ */}
      <CourseFaq items={courseFaqs} />
    </div>
  );
}

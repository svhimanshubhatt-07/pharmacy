import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { coursesData } from "@/data/courses";
import { socialWallItems } from "@/data/homepage";
import { CourseFaq, type CourseFaqItem } from "@/components/CourseFaq";
import { CourseCurriculumSection } from "@/components/CourseCurriculumSection";
import { RecognitionMarquee } from "@/components/RecognitionMarquee";
import { AboutMilestones } from "@/components/AboutSections";
import { recognitionLogos } from "@/data/admissions";

const APPLY_URL = "https://applynow.niet.co.in/";
const BROCHURE_URL = "/pdf/brochure-01.pdf";
const courseGalleryIds = new Set(["2", "5", "8", "10", "17"]);
const courseGalleryItems = socialWallItems.filter((item) => courseGalleryIds.has(item.id));
type CoursePageProps = {
  params: { courseId: string };
};

export function generateStaticParams() {
  return coursesData.map(({ id }) => ({ courseId: id }));
}

export function generateMetadata({ params }: CoursePageProps): Metadata {
  const course = coursesData.find(({ id }) => id === params.courseId);

  return {
    title: course ? `${course.name} | NIET Pharmacy` : "Course not found | NIET Pharmacy",
    description: course?.overview.split("\n\n")[0],
  };
}

export default function CourseDetailPage({ params }: CoursePageProps) {
  const course = coursesData.find(({ id }) => id === params.courseId);

  if (!course) notFound();

  const courseFaqs: CourseFaqItem[] = [
    {
      question: `What is the duration and intake for ${course.name}?`,
      answer: `${course.name} runs for ${course.duration}. The listed intake is ${course.intake} seats.`,
    },
    {
      question: `What qualification does ${course.name} provide?`,
      answer: `${course.name} is a ${course.level.toLowerCase()} programme in ${course.fieldOfStudy}.`,
    },
    {
      question: `What are the eligibility requirements for ${course.name}?`,
      answer: course.eligibility.split("\n\n")[0],
    },
    {
      question: `What does the ${course.fieldOfStudy} programme cover?`,
      answer: course.overview.split("\n\n")[0],
    },
    {
      question: `How can I apply for ${course.name}?`,
      answer: "Review the admission information and required documents on the NIET Pharmacy admissions page, then apply through the official admissions portal.",
    },
  ];

  const admissionProcessSteps = [
    {
      year: "01",
      title: "Register Online",
      desc: "Create your account using your email ID and mobile number.",
    },
    {
      year: "02",
      title: "Complete Application",
      desc: "Log in using the OTP sent to your registered mobile number and complete your application.",
    },
    {
      year: "03",
      title: "Merit List",
      desc: "Selection is based on your rank in the UP or relevant entrance exam and merit list.",
    },
    {
      year: "04",
      title: "Attend Counselling",
      desc: "Complete the counselling process and choose your preferred academic track.",
    },
    {
      year: "05",
      title: "Secure Admission",
      desc: "Complete the admission formalities after seat allotment to confirm your place.",
    },
  ];

  return (
    <main className="coursesPage hp">
      <div className="cp-course-detail">
        <div className="cp-section-container">
          <nav className="cp-course-detail__breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/courses">Courses</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{course.name}</span>
          </nav>

          <div className="cp-course-detail__layout">
            <article className="cp-course-detail__main">
              <header className="cp-course-detail__heading">
                <h1>{course.name}</h1>
                <p>{course.summary}</p>
              </header>

              <section className="cp-course-detail__section" aria-labelledby="course-introduction-title">
                <h2 id="course-introduction-title">Programme Introduction</h2>
                <p>{course.overview.split("\n\n")[0]}</p>
              </section>

              <section className="cp-course-detail__gallery" aria-labelledby="course-gallery-title">
                <h2 id="course-gallery-title">Learning, Research and Practice</h2>
                <div className="cp-course-detail__gallery-grid">
                  {courseGalleryItems.map((item) => (
                    <figure key={item.id}>
                      <img src={item.image} alt={item.alt} loading="lazy" />
                      <figcaption>{item.alt}</figcaption>
                    </figure>
                  ))}
                </div>
              </section>
            </article>

            <aside className="cp-course-detail__sidebar" aria-label="Course information">
              <div className="cp-course-detail__card">
                <p className="cp-course-detail__card-label">NIET Pharmacy</p>
                <h2>{course.name}</h2>
                <p className="cp-course-detail__card-summary">{course.summary}</p>
                <dl className="cp-course-detail__facts">
                  <div>
                    <dt><span className="material-symbols-outlined" aria-hidden="true">school</span>Qualification</dt>
                    <dd>{course.level}</dd>
                  </div>
                  <div>
                    <dt><span className="material-symbols-outlined" aria-hidden="true">calendar_month</span>Duration</dt>
                    <dd>{course.duration}</dd>
                  </div>
                  <div>
                    <dt><span className="material-symbols-outlined" aria-hidden="true">science</span>Field of study</dt>
                    <dd>{course.fieldOfStudy}</dd>
                  </div>
                  <div>
                    <dt><span className="material-symbols-outlined" aria-hidden="true">groups</span>Seats</dt>
                    <dd>{course.intake}</dd>
                  </div>
                </dl>
                <Link className="cp-course-detail__fee-link" href="/admissions#fee-structure">
                  View Fee Structure <span aria-hidden="true">→</span>
                </Link>
                <a className="cp-course-detail__apply" href={APPLY_URL} target="_blank" rel="noopener noreferrer">
                  Apply Now <span aria-hidden="true">→</span>
                </a>
                <a className="cp-course-detail__brochure" href={BROCHURE_URL} target="_blank" rel="noopener noreferrer">
                  <span className="material-symbols-outlined" aria-hidden="true">download</span>
                  Download Brochure
                </a>
                {/* <p className="cp-course-detail__help">
                  Need guidance? <Link href="/contact-us">Contact Admissions</Link>
                </p> */}
              </div>
            </aside>
          </div>
        </div>
        <div className="cp-section-container">
          <CourseCurriculumSection
            image={courseGalleryItems.find((item) => item.id === "5")?.image ?? "/images/gallery/featured-event.jpg"}
            imageAlt="Pharmacy students gaining hands-on healthcare and clinical training"
            course={course}
          />
        </div>

        <section className="ab cp-course-detail__admission-process" aria-labelledby="course-admission-title">
          <div className="hp-container">
            <h2 id="course-admission-title" className="hp-title">Admission Process</h2>
            <p className="hp-subtitle">Simple steps to secure your place.</p>
            <AboutMilestones milestones={admissionProcessSteps} />
          </div>
        </section>

        <section className="cp-course-detail__honours" aria-labelledby="course-honours-title">
          <h2 id="course-honours-title" className="hp-title">
            Government Recognitions
          </h2>
          <p className="hp-subtitle">Recognised for Quality in Pharmacy Education.</p>
          <RecognitionMarquee items={recognitionLogos} />
        </section>
        <CourseFaq
          items={courseFaqs}
        />
      </div>
    </main>
  );
}

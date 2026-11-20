import { Metadata } from "next";
import { advanceCoursesData } from "@/data/advanceCourses";

export const metadata: Metadata = {
  title: "Advance Certification Courses | NIET Pharmacy",
  description:
    "Short-term specialized advance certification courses in AI in healthcare, medical coding, nutraceuticals, clinical trial design, and patent filing at NIET Pharmacy.",
};

export default function AdvanceCoursesPage() {
  return (
    <main className="coursesPage hp advance-courses-page">
      <section className="cp-showcase" aria-labelledby="advance-courses-title">
        <div className="container advance-courses-container">
          <header className="cp-showcase__heading">
            <h1
              id="advance-courses-title"
              className="font-heading text-3xl md:text-4xl font-bold text-[#1e293b] tracking-tight"
            >
              Advance Courses
            </h1>
            <p className="font-accent text-[#CF1427] text-lg md:text-xl font-semibold">
              — Build Knowledge. Expand Your Practice.
            </p>
          </header>
          <div className="cp-showcase__grid">
            {advanceCoursesData.map((course) => (
              <article className="cp-course-card advance-course-card" key={course.sNo}>
                <h2>{course.title}</h2>
                <ul className="cp-course-card__facts">
                  <li>
                    <span className="material-symbols-outlined" aria-hidden="true">schedule</span>
                    {course.duration}
                  </li>
                  <li>
                    <span className="material-symbols-outlined" aria-hidden="true">calendar_month</span>
                    {course.dates}
                  </li>
                </ul>
                <a
                  className="cp-course-card__link"
                  href={course.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Course
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

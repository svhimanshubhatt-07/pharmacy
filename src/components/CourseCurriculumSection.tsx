"use client";

import { useEffect, useRef } from "react";

interface CourseCurriculumSectionProps {
  image: string;
  imageAlt: string;
  course: {
    level: string;
    duration: string;
    intake: number;
    summary: string;
    highlights: string[];
    syllabusPdfs?: { title: string; url: string }[];
  };
}

export function CourseCurriculumSection({
  image,
  imageAlt,
  course,
}: CourseCurriculumSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    section.classList.add("has-scroll-reveal");
    const revealItems = section.querySelectorAll<HTMLElement>(
      ".cp-course-detail__curriculum-image, .cp-course-detail__program-card, .cp-course-detail__program-card li"
    );

    if (!("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -8% 0px" }
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="cp-course-detail__curriculum"
      aria-labelledby="course-syllabus-title"
      ref={sectionRef}
    >
      <header className="cp-course-detail__curriculum-heading">
        <h2 id="course-syllabus-title">Syllabus</h2>
        {course.syllabusPdfs && course.syllabusPdfs.length > 0 && (
          <ul className="cp-course-detail__syllabus-list">
            {course.syllabusPdfs.map((syllabus) => (
              <li key={syllabus.title}>
                <a href={syllabus.url} target="_blank" rel="noopener noreferrer">
                  {syllabus.title}
                </a>
              </li>
            ))}
          </ul>
        )}
      </header>
      <div className="cp-course-detail__curriculum-grid">
        <figure className="cp-course-detail__curriculum-image">
          <img src={image} alt={imageAlt} loading="lazy" />
        </figure>
        {[
          {
            title: "Programme Snapshot",
            className: "snapshot",
            items: [
              `Qualification: ${course.level}`,
              `Duration: ${course.duration}`,
              `Intake: ${course.intake} seats`,
              course.summary,
            ],
          },
          {
            title: "Programme Highlights",
            className: "highlights",
            items: course.highlights,
          },
        ].map((card) => (
          <article
            className={`cp-course-detail__program-card cp-course-detail__program-card--${card.className}`}
            key={card.title}
          >
            <h3>{card.title}</h3>
            <ul>
              {card.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

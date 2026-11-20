import React from "react";

export interface CourseDocument {
  title: string;
  url: string;
  isPdf?: boolean;
}

interface CourseDocumentsProps {
  documents: CourseDocument[];
}

export function CourseDocuments({ documents }: CourseDocumentsProps) {
  return (
    <section className="course-documents" aria-labelledby="course-documents-title">
      <div className="course-documents__inner">
        <div className="course-documents__list">
          <h2 id="course-documents-title">Documents</h2>
          <ul>
            {documents.map((document) => (
              <li key={`${document.title}-${document.url}`}>
                <a href={document.url} target="_blank" rel="noopener noreferrer">
                  <span>{document.title}</span>
                  {document.isPdf && (
                    <span className="course-documents__pdf" aria-label="PDF document">
                      PDF
                    </span>
                  )}
                  <span className="course-documents__arrow" aria-hidden="true">›</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="course-documents__feature">
          <div
            className="course-documents__photo"
            role="img"
            aria-label="Pharmacy students and faculty at a campus event"
          />
          <a
            className="course-documents__apply"
            href="https://applynow.niet.co.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apply Online
          </a>
        </div>
      </div>
    </section>
  );
}

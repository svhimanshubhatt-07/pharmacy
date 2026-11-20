"use client";

import { useRouter } from "next/navigation";

interface CourseOption {
  id: string;
  name: string;
  level: string;
  duration: string;
  intake: number;
}

interface CourseFinderProps {
  courses: CourseOption[];
}

// Grouped as per the Figma: B Pharm, M Pharm and D Pharm columns.
const programmeColumns: { label: string; id: string }[][] = [
  [
    { label: "B Pharm", id: "bpharm" },
    { label: "B Pharm lateral", id: "bpharm" },
    { label: "D Pharm", id: "dpharm" },
    { label: "PHD", id: "phd" },
  ],
  [
    { label: "M Pharm", id: "mpharm-ceutics" },
    { label: "M. Pharm in Pharmaceutics", id: "mpharm-ceutics" },
    { label: "M. Pharm in Pharmacology", id: "mpharm-cology" },
    { label: "M. Pharm in Pharmaceutical Chemistry", id: "mpharm-chem" },
  ],
];

export function CourseFinder({ courses }: CourseFinderProps) {
  const router = useRouter();
  const courseIds = new Set(courses.map((course) => course.id));

  const handleProgrammeClick = (id: string) => {
    if (id === "phd") {
      router.push("/research");
      return;
    }

    const validId = courseIds.has(id) ? id : "bpharm";
    router.push(`/courses/${validId}`);
  };

  return (
    <div className="course-finder">
      <h2>Find your Courses</h2>
      <div className="course-finder__grid">
        {programmeColumns.map((column) => (
          <ul key={column[0].label} className="course-finder__column">
            {column.map((programme) => (
              <li key={programme.label}>
                <button
                  type="button"
                  className="course-finder__item"
                  onClick={() => handleProgrammeClick(programme.id)}
                >
                  {programme.label}
                </button>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

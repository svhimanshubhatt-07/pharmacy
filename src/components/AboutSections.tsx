"use client";

import Link from "next/link";
import { useRef, useState } from "react";

export interface AboutPerson {
  name: string;
  role: string;
  image?: string;
}

export interface AboutLeadershipGroup {
  label: string;
  people: AboutPerson[];
  viewAllHref?: string;
}

function initials(name: string) {
  return name
    .replace(/^(dr|prof|sh|mr|mrs|ms)\.?\s*(\(.*?\)\s*)?/i, "")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .split(/[\s.]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

export function AboutLeadershipTabs({
  groups,
  viewAllHref,
}: {
  groups: AboutLeadershipGroup[];
  /** Optional "View all" link; the 2026 design shows only the arrows. */
  viewAllHref?: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [failedImages, setFailedImages] = useState<Set<string>>(() => new Set());
  const trackRef = useRef<HTMLDivElement>(null);
  const active = groups[activeIndex];
  const targetHref =
    active?.viewAllHref ||
    viewAllHref ||
    (active?.label === "Faculty" ? "/intellectual-capital" : "/authorities");
  const displayedPeople = active?.people ? active.people.slice(0, 3) : [];

  const selectTab = (index: number) => {
    setActiveIndex(index);
    trackRef.current?.scrollTo({ left: 0 });
  };

  const scroll = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>(".ab-leader");
    const step = card ? card.offsetWidth + 16 : track.clientWidth;
    track.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <div className="ab-leadership">
      <div className="ab-leadership__tabs" role="tablist" aria-label="Leadership groups">
        {groups.map((group, index) => (
          <button
            key={group.label}
            type="button"
            role="tab"
            id={`ab-leadership-tab-${index}`}
            aria-selected={index === activeIndex}
            aria-controls="ab-leadership-panel"
            className={index === activeIndex ? "is-active" : ""}
            onClick={() => selectTab(index)}
          >
            {group.label}
          </button>
        ))}
      </div>

      <div
        id="ab-leadership-panel"
        role="tabpanel"
        aria-labelledby={`ab-leadership-tab-${activeIndex}`}
        className="ab-leadership__track"
        ref={trackRef}
      >
        {displayedPeople.map((person) => (
          <article key={`${active.label}-${person.name}`} className="ab-leader">
            <div className="ab-leader__photo">
              {person.image && !failedImages.has(person.image) ? (
                <img
                  src={person.image}
                  alt={person.name}
                  loading="lazy"
                  onError={() =>
                    setFailedImages((current) => new Set(current).add(person.image as string))
                  }
                />
              ) : (
                <span aria-hidden="true">{initials(person.name)}</span>
              )}
            </div>
            <div className="ab-leader__caption">
              <strong>{person.name}</strong>
              <span>{person.role}</span>
            </div>
          </article>
        ))}

        {/* 4th Card: View All Card */}
        <Link
          href={targetHref}
          className="ab-leader ab-leader--view-all group no-underline hover:no-underline"
          title={`View all ${active?.label || "members"}`}
        >
          <div className="ab-leader__photo ab-leader__view-all-photo">
            <div className="ab-leader__view-all-circle" aria-hidden="true">
              →
            </div>
            <strong className="ab-leader__view-all-title">
              View All
            </strong>
            <span className="ab-leader__view-all-count">
              {active?.label} ({active?.people.length})
            </span>
          </div>
          <div className="ab-leader__caption ab-leader__view-all-caption">
            <strong>Full Directory</strong>
            <span>Click to explore all →</span>
          </div>
        </Link>
      </div>

      <div className="ab-leadership__footer">
        {viewAllHref ? <Link href={viewAllHref} className="ab-btn-outline">View all</Link> : <span />}
        <div className="ab-leadership__arrows">
          <button type="button" aria-label="Previous people" onClick={() => scroll(-1)}>‹</button>
          <button type="button" aria-label="Next people" onClick={() => scroll(1)}>›</button>
        </div>
      </div>
    </div>
  );
}

export interface AboutMilestone {
  year: string;
  title: string;
  desc: string;
}

export function AboutMilestones({ milestones }: { milestones: AboutMilestone[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <ol className="ab-milestones__grid" aria-label="Milestones">
      {milestones.map((milestone, index) => {
        const isActive = index === activeIndex;
        return (
          <li
            key={milestone.year}
            className={`ab-milestone ab-milestone--${index % 2 === 0 ? "red" : "black"}${
              isActive ? " is-active" : ""
            }`}
            tabIndex={0}
            aria-current={isActive ? "step" : undefined}
            onMouseEnter={() => setActiveIndex(index)}
            onFocus={() => setActiveIndex(index)}
            onClick={() => setActiveIndex(index)}
          >
            <span className="ab-milestone__num">{milestone.year}</span>
            <strong>{milestone.title}</strong>
            <p>{milestone.desc}</p>
          </li>
        );
      })}
    </ol>
  );
}

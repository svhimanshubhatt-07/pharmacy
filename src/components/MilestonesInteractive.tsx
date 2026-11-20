"use client";

import React, { useState, useRef, useCallback } from "react";

export interface MilestoneItem {
  year: string;
  title: string;
  desc: string;
  theme: "red" | "black";
}

interface MilestonesInteractiveProps {
  milestones: MilestoneItem[];
}

export default function MilestonesInteractive({
  milestones,
}: MilestonesInteractiveProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastScrollTime = useRef<number>(0);
  const touchStartX = useRef<number>(0);

  // Update the active milestone on wheel input without blocking page scrolling.
  const handleWheel = useCallback(
    (e: React.WheelEvent<HTMLDivElement>) => {
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      const now = Date.now();

      // Throttle wheel ticks by 350ms for deliberate, satisfying transitions
      if (Math.abs(delta) > 15 && now - lastScrollTime.current > 350) {
        if (delta > 0 && activeIndex < milestones.length - 1) {
          lastScrollTime.current = now;
          setActiveIndex((prev) => Math.min(prev + 1, milestones.length - 1));
        } else if (delta < 0 && activeIndex > 0) {
          lastScrollTime.current = now;
          setActiveIndex((prev) => Math.max(prev - 1, 0));
        }
      }
    },
    [activeIndex, milestones.length]
  );

  // Touch swipe support for tablets and mobile
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0 && activeIndex < milestones.length - 1) {
        setActiveIndex((prev) => prev + 1);
      } else if (diff < 0 && activeIndex > 0) {
        setActiveIndex((prev) => prev - 1);
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className="about-milestones-row"
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      role="region"
      aria-label="Interactive Journey Milestones"
    >
      {milestones.map((m, idx) => {
        const isActive = activeIndex === idx;
        return (
          <div
            key={m.year}
            onClick={() => setActiveIndex(idx)}
            onMouseEnter={() => setActiveIndex(idx)}
            className={`about-milestone-box ${
              m.theme === "red"
                ? "about-milestone-box--red"
                : "about-milestone-box--black"
            } ${isActive ? "about-milestone-box--active" : "about-milestone-box--compact"}`}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setActiveIndex(idx);
              }
            }}
            aria-selected={isActive}
            aria-label={`Milestone ${m.year}: ${m.title}`}
          >
            <div className="about-milestone-year">{m.year}</div>
            <div className="about-milestone-title">{m.title}</div>
            <div className="about-milestone-divider" />
            <div className="about-milestone-desc">{m.desc}</div>
          </div>
        );
      })}
    </div>
  );
}

"use client";

import { useEffect } from "react";

/**
 * Initializes IntersectionObserver to trigger smooth animations as the user scrolls
 */
export function HomeScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    const revealElements = document.querySelectorAll(
      ".hp-reveal, .hp-reveal--scale, .hp-reveal--left, .hp-reveal--right"
    );
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}

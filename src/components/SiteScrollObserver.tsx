"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

/**
 * SiteScrollObserver
 * Universal site-wide scroll reveal & scroll interactivity engine.
 * - Animates cards, info sections, tables, and headers dynamically on scroll.
 * - Re-animates dynamically as the user scrolls up and down through content.
 * - Provides real-time top scroll progress indicator.
 * - Provides a floating smooth "Scroll to Top" button.
 */
export function SiteScrollObserver() {
  const pathname = usePathname();
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);

  // Track window scroll progress for back-to-top button
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollTop = window.scrollY || document.documentElement.scrollTop;
          setShowBackToTop(scrollTop > 350);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  // Two-way scroll reveal observer
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      document.querySelectorAll(".site-reveal, .hp-reveal").forEach((el) => {
        el.classList.add("is-revealed");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
          } else {
            // When an element scrolls fully out of view (above or below),
            // reset it so when the user scrolls back into it, it animates again!
            const rect = entry.boundingClientRect;
            if (rect.top > window.innerHeight || rect.bottom < 0) {
              entry.target.classList.remove("is-revealed");
            }
          }
        });
      },
      {
        root: null,
        // Responsive root margin so animations start naturally just before entering view
        rootMargin: "0px 0px -30px 0px",
        threshold: 0.05,
      }
    );

    const SELECTORS = [
      // Major sections and headings
      "section:not(.no-reveal):not(.site-header):not(.top-header)",
      ".section-pad",
      ".sa-header",
      ".appr-header-copy",
      ".pl-section-head",
      ".cp-about",
      ".cp-messages__heading",
      ".cp-showcase__heading",
      ".course-faq__heading",

      // Cards & Grid items
      ".cp-course-card",
      ".cp-message",
      ".cp-block",
      ".card",
      ".pl-card",
      ".pl-stat-card",
      ".pl-recruiter-card",
      ".pl-testimonial-card",
      ".ab-card",
      ".infra-card",
      ".facility-card",
      ".course-faq__item",
      ".hp-campus__card",
      ".hp-documents__list > li",
      ".hp-rankings__stats > *",
      ".hp-why__grid > *",
      ".hp-spotlight__card",

      // Tables & Filter Bars
      ".appr-table-wrap",
      ".sa-table-wrap",
      ".table-responsive",
      ".appr-filter-container",
      ".appr-pills-row",

      // Explicit reveal hooks
      ".site-reveal",
      ".hp-reveal",
      ".hp-reveal--scale",
      ".hp-reveal--left",
      ".hp-reveal--right",
    ];

    const applyRevealClasses = () => {
      const elements = document.querySelectorAll(SELECTORS.join(", "));

      elements.forEach((el) => {
        if (
          el.closest(".site-header") ||
          el.closest(".site-footer") ||
          el.classList.contains("no-reveal")
        ) {
          return;
        }

        if (!el.classList.contains("site-reveal") && !el.classList.contains("hp-reveal")) {
          // If it's a card or counter, give it the scale effect
          if (
            el.classList.contains("pl-stat-card") ||
            el.classList.contains("card") ||
            el.classList.contains("facility-card")
          ) {
            el.classList.add("site-reveal--scale");
          } else {
            el.classList.add("site-reveal");
          }
        }

        // Stagger children within grids
        const parent = el.parentElement;
        if (
          parent &&
          (parent.classList.contains("grid") ||
            parent.classList.contains("hp-why__grid") ||
            parent.classList.contains("hp-rankings__stats") ||
            parent.classList.contains("cp-messages__grid") ||
            parent.classList.contains("cp-showcase__grid") ||
            parent.classList.contains("course-faq__list") ||
            parent.classList.contains("pl-recruiter-grid") ||
            parent.classList.contains("pl-stats-grid"))
        ) {
          const index = Array.from(parent.children).indexOf(el);
          if (index > 0 && index < 8) {
            const delay = Math.min(index * 75, 450);
            (el as HTMLElement).style.transitionDelay = `${delay}ms`;
          }
        }

        observer.observe(el);
      });
    };

    applyRevealClasses();
    const timer = setTimeout(applyRevealClasses, 200);

    const mutationObserver = new MutationObserver((mutations) => {
      let shouldReapply = false;
      for (const m of mutations) {
        if (m.addedNodes.length > 0) {
          shouldReapply = true;
          break;
        }
      }
      if (shouldReapply) {
        applyRevealClasses();
      }
    });

    if (document.body) {
      mutationObserver.observe(document.body, { childList: true, subtree: true });
    }

    return () => {
      clearTimeout(timer);
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [pathname]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Floating Smooth Scroll-to-Top Button */}
      {showBackToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="site-back-to-top"
          aria-label="Scroll to top of page"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </button>
      )}
    </>
  );
}

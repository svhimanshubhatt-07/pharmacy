"use client";

import React, { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";

export function TopLoadingBar() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [opacity, setOpacity] = useState(1);

  const isLoadingRef = useRef(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const finishTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const safetyTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const prevPathnameRef = useRef<string>(pathname);

  const clearAllTimers = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    if (finishTimeoutRef.current) {
      clearTimeout(finishTimeoutRef.current);
      finishTimeoutRef.current = null;
    }
    if (safetyTimeoutRef.current) {
      clearTimeout(safetyTimeoutRef.current);
      safetyTimeoutRef.current = null;
    }
  };

  const startLoading = () => {
    clearAllTimers();
    isLoadingRef.current = true;
    setOpacity(1);
    setIsVisible(true);
    setProgress(28);

    // Smoothly trickle progress forward while page is loading
    timerRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 88) return prev;
        const diff = (90 - prev) * 0.14;
        return Math.min(prev + Math.max(diff, 1.2), 88);
      });
    }, 90);

    // Safety timeout: auto-finish after 5 seconds if navigation stalls
    safetyTimeoutRef.current = setTimeout(() => {
      finishLoading();
    }, 5000);
  };

  const finishLoading = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    if (safetyTimeoutRef.current) {
      clearTimeout(safetyTimeoutRef.current);
      safetyTimeoutRef.current = null;
    }

    setProgress(100);

    // Keep at 100% briefly so user clearly sees it complete, then smoothly fade out
    finishTimeoutRef.current = setTimeout(() => {
      setOpacity(0);
      finishTimeoutRef.current = setTimeout(() => {
        setIsVisible(false);
        setProgress(0);
        setOpacity(1);
        isLoadingRef.current = false;
      }, 250);
    }, 180);
  };

  // Run a guaranteed visible completion cycle if navigation occurred without click capture (e.g. router.push or fast prefetch)
  const triggerVisibleNavigationFlash = () => {
    clearAllTimers();
    isLoadingRef.current = true;
    setIsVisible(true);
    setOpacity(1);
    setProgress(35);

    finishTimeoutRef.current = setTimeout(() => {
      setProgress(78);
      finishTimeoutRef.current = setTimeout(() => {
        setProgress(100);
        finishTimeoutRef.current = setTimeout(() => {
          setOpacity(0);
          finishTimeoutRef.current = setTimeout(() => {
            setIsVisible(false);
            setProgress(0);
            setOpacity(1);
            isLoadingRef.current = false;
          }, 240);
        }, 160);
      }, 90);
    }, 60);
  };

  // 1. Detect navigation via pathname changes
  useEffect(() => {
    if (prevPathnameRef.current !== pathname) {
      prevPathnameRef.current = pathname;
      if (isLoadingRef.current) {
        finishLoading();
      } else {
        triggerVisibleNavigationFlash();
      }
    }
  }, [pathname]);

  // 2. Global event listeners for link clicks, table row clicks, and router transitions
  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      const el = e.target as HTMLElement | null;
      if (!el) return;

      // Check if clicking inside an anchor tag
      const anchor = el.closest("a");
      if (anchor) {
        const href = anchor.getAttribute("href");
        if (
          !href ||
          href.startsWith("#") ||
          href.startsWith("javascript:") ||
          href.startsWith("mailto:") ||
          href.startsWith("tel:") ||
          anchor.target === "_blank" ||
          anchor.hasAttribute("download") ||
          e.ctrlKey ||
          e.metaKey ||
          e.shiftKey ||
          e.altKey
        ) {
          return;
        }

        const currentUrl = window.location.pathname + window.location.search;
        if (href === currentUrl || href === window.location.pathname) return;

        startLoading();
        return;
      }

      // Check if clicking a navigational element: table row, action button, or nav item
      const navItem = el.closest(
        ".admin-nav-item, .admin-nav-sub-item, .admin-action-btn, .admin-table tbody tr, [data-href]"
      );
      if (navItem) {
        // If it's a sub-menu expand toggle button, don't trigger loading
        if (navItem.classList.contains("admin-nav-parent")) return;
        startLoading();
      }
    };

    // 3. Intercept history.pushState and history.replaceState
    const originalPushState = window.history.pushState;
    const originalReplaceState = window.history.replaceState;

    window.history.pushState = function (...args) {
      startLoading();
      return originalPushState.apply(this, args);
    };

    window.history.replaceState = function (...args) {
      startLoading();
      return originalReplaceState.apply(this, args);
    };

    // 4. Custom event support for manual dispatching
    const handleManualStart = () => startLoading();
    const handleManualFinish = () => finishLoading();

    document.addEventListener("click", handleDocumentClick, true);
    window.addEventListener("admin-navigation-start", handleManualStart);
    window.addEventListener("admin-navigation-finish", handleManualFinish);

    return () => {
      document.removeEventListener("click", handleDocumentClick, true);
      window.removeEventListener("admin-navigation-start", handleManualStart);
      window.removeEventListener("admin-navigation-finish", handleManualFinish);
      window.history.pushState = originalPushState;
      window.history.replaceState = originalReplaceState;
      clearAllTimers();
    };
  }, []);

  if (!isVisible && progress === 0) return null;

  return (
    <div
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={progress}
      aria-label="Page loading progress"
      className="admin-top-loading-bar fixed top-0 left-0 right-0 h-[3.5px] pointer-events-none"
      style={{
        width: `${progress}%`,
        opacity,
        position: "fixed",
        top: 0,
        left: 0,
        height: "3.5px",
        zIndex: 99999999,
        background: "linear-gradient(90deg, #b91c1c 0%, #dc2626 50%, #ef4444 100%)",
        boxShadow: "0 0 12px rgba(220, 38, 38, 0.9), 0 0 6px rgba(239, 68, 68, 0.7)",
        transition:
          progress === 100
            ? "width 0.15s ease-out, opacity 0.22s ease"
            : progress === 0
            ? "none"
            : "width 0.25s cubic-bezier(0.1, 0.8, 0.3, 1), opacity 0.2s ease"
      }}
    >
      {/* Glowing tip indicator on right edge */}
      <div
        className="absolute right-0 top-0 bottom-0 w-24 h-full pointer-events-none"
        style={{
          boxShadow: "0 0 16px #ef4444, 0 0 8px #dc2626",
          opacity: progress > 0 && progress < 100 ? 1 : 0,
          transition: "opacity 0.2s ease"
        }}
      />
    </div>
  );
}

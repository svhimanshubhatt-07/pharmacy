"use client";

import React, { useEffect, useRef, useState } from "react";

export interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
  href?: string;
}

interface TabbedContentProps {
  tabs: TabItem[];
  defaultTabId?: string;
  syncWithHash?: boolean;
  /** Optional heading shown above the sidebar buttons (used on the courses page). */
  sidebarTitle?: string;
}

export const TabbedContent: React.FC<TabbedContentProps> = ({
  tabs,
  defaultTabId,
  syncWithHash = false,
  sidebarTitle,
}) => {
  const [activeTab, setActiveTab] = useState<string>(
    defaultTabId || (tabs[0]?.id ?? "")
  );
  const tabsRef = useRef(tabs);
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  tabsRef.current = tabs;

  useEffect(() => {
    if (!syncWithHash) return;

    const updateTabFromHash = (hash: string, scroll = true) => {
      const tabId = hash.slice(1).toLowerCase();
      const tab = tabsRef.current.find((item) => item.id.toLowerCase() === tabId);
      if (!tab) return false;

      setActiveTab(tab.id);
      if (scroll) {
        window.requestAnimationFrame(() => {
          tabsContainerRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        });
      }
      return true;
    };

    const handleHashChange = () => updateTabFromHash(window.location.hash);
    const handleClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest("a[href]");
      if (!(anchor instanceof HTMLAnchorElement) || anchor.target === "_blank") return;

      const destination = new URL(anchor.href, window.location.href);
      if (
        destination.origin !== window.location.origin ||
        destination.pathname !== window.location.pathname ||
        !destination.hash
      ) {
        return;
      }

      if (!updateTabFromHash(destination.hash, false)) return;
      event.preventDefault();
      if (destination.href !== window.location.href) {
        window.history.pushState(null, "", destination.href);
      }
      updateTabFromHash(destination.hash);
    };

    updateTabFromHash(window.location.hash);
    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("popstate", handleHashChange);
    document.addEventListener("click", handleClick, true);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("popstate", handleHashChange);
      document.removeEventListener("click", handleClick, true);
    };
  }, [syncWithHash]);

  const currentTab = tabs.find((t) => t.id === activeTab) || tabs[0];

  return (
    <div className="tabs-container" ref={tabsContainerRef}>
      {/* Sidebar Tab Buttons */}
      <div className="tabs-sidebar" role="tablist" aria-label={sidebarTitle}>
        {sidebarTitle && (
          <div className="tabs-sidebar-head" role="presentation">
            <span className="tabs-sidebar-accent" aria-hidden="true" />
            <p className="tabs-sidebar-title">{sidebarTitle}</p>
          </div>
        )}
        {tabs.map((tab) => (
          tab.href ? (
            <a
              key={tab.id}
              href={tab.href}
              target="_blank"
              rel="noopener noreferrer"
              className="tab-nav-btn"
            >
              {tab.label}
            </a>
          ) : (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              className={`tab-nav-btn ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => {
                setActiveTab(tab.id);
                if (syncWithHash) {
                  window.history.replaceState(null, "", `#${tab.id}`);
                }
              }}
            >
              {tab.label}
            </button>
          )
        ))}
      </div>

      {/* Main Tab Content Panel */}
      <div className="tabs-content-area" role="tabpanel">
        {currentTab?.content}
      </div>
    </div>
  );
};

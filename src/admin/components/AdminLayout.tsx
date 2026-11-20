"use client";

import React, { useState, useEffect, useRef } from "react";
import "../styles/admin.css";
import { Sidebar } from "./Sidebar";
import { TopLoadingBar } from "./TopLoadingBar";
import {
  MenuIcon,
  SearchIcon,
  CloseIcon,
  UserIcon,
  LogOutIcon,
  ChevronDownIcon
} from "./Icons";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export function AdminLayout({ children }: AdminLayoutProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [topSearch, setTopSearch] = useState("");
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [logoutNotice, setLogoutNotice] = useState(false);

  const profileRef = useRef<HTMLDivElement>(null);

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
        setIsProfileOpen(false);
      }
    };
    if (isProfileOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isProfileOpen]);

  // Handle Logout (option only, not working as requested)
  const handleLogoutClick = () => {
    setIsProfileOpen(false);
    setLogoutNotice(true);
    setTimeout(() => {
      setLogoutNotice(false);
    }, 3000);
  };

  return (
    <div className="admin-root">
      <TopLoadingBar />
      <div className="admin-shell">
        {/* Sidebar */}
        <Sidebar
          isOpenMobile={isMobileOpen}
          onCloseMobile={() => setIsMobileOpen(false)}
        />

        {/* Main Content Area */}
        <div className="admin-main">
          {/* Top Bar: Search Bar on Left (No Heading), Profile Icon on Right */}
          <header className="admin-topbar">
            {/* Left: Mobile Toggle + Topbar Search Bar (No Heading as requested) */}
            <div className="flex items-center gap-3 flex-1">
              <button
                type="button"
                className="admin-mobile-toggle"
                onClick={() => setIsMobileOpen((prev) => !prev)}
                aria-label="Toggle sidebar menu"
              >
                <MenuIcon size={20} />
              </button>

              {/* Topbar Search Bar */}
              <div className="admin-topbar-search">
                <div className="admin-search-icon">
                  <SearchIcon size={16} />
                </div>
                <input
                  type="text"
                  className="admin-input admin-search-input"
                  placeholder="Search in admin panel..."
                  value={topSearch}
                  onChange={(e) => setTopSearch(e.target.value)}
                  aria-label="Global Admin Search"
                />
                {topSearch && (
                  <button
                    type="button"
                    className="admin-search-clear"
                    onClick={() => setTopSearch("")}
                    title="Clear search"
                    aria-label="Clear search"
                  >
                    <CloseIcon size={14} />
                  </button>
                )}
              </div>
            </div>

            {/* Right: Profile Icon & Dropdown */}
            <div ref={profileRef} className="relative">
              <button
                type="button"
                className="admin-profile-btn"
                onClick={() => setIsProfileOpen((prev) => !prev)}
                aria-expanded={isProfileOpen}
                aria-haspopup="true"
                aria-label="User Profile Menu"
              >
                <span className="admin-profile-avatar">
                  <UserIcon size={14} />
                </span>
                <span className="text-[13px] font-semibold">Admin</span>
                <ChevronDownIcon size={12} />
              </button>

              {/* Profile Dropdown Menu */}
              {isProfileOpen && (
                <div className="admin-profile-dropdown" role="menu">
                  {/* User Profile Header */}
                  <div className="admin-profile-dropdown-header">
                    <div className="font-bold text-[13px] text-[var(--admin-text)]">
                      NIET Administrator
                    </div>
                  </div>

                  {/* Profile Options */}
                  <button
                    type="button"
                    className="admin-profile-dropdown-item"
                    onClick={() => setIsProfileOpen(false)}
                    role="menuitem"
                  >
                    <UserIcon size={14} />
                    <span>My Profile</span>
                  </button>

                  {/* Logout Option (only option, not working as requested) */}
                  <button
                    type="button"
                    className="admin-profile-dropdown-item danger"
                    onClick={handleLogoutClick}
                    role="menuitem"
                  >
                    <LogOutIcon size={14} />
                    <span>Logout</span>
                  </button>
                </div>
              )}
            </div>
          </header>

          {/* Optional Logout Notice Toast / Banner */}
          {logoutNotice && (
            <div className="bg-[var(--admin-bg)] border-b border-b-[var(--admin-primary)] border-l-4 border-l-[var(--admin-primary)] py-2 px-6 text-xs text-[var(--admin-primary)] font-medium">
              Session Notice: Logout option is disabled in local dummy session mode.
            </div>
          )}

          {/* Main Scrollable Content */}
          <main className="admin-content-scroll" role="main">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}

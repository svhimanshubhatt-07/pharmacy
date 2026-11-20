import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

const aboutLinks = [
  { label: "Institute Overview", href: "/about" },
  { label: "Vision & Mission", href: "/vision-mission" },
  { label: "Approvals & Affiliations", href: "/approvals-and-affiliations" },
  { label: "Leadership Team", href: "/authorities" },
  { label: "Faculty", href: "/about#faculty" },
  { label: "Campus Life", href: "/life-at-niet" },
  { label: "Infrastructure", href: "/infrastructure" },
  { label: "Gallery", href: "/gallery" },
];

const admissionLinks = [
  { label: "Admission Overview", href: "/admissions" },
  { label: "Admission Process", href: "/admissions" },
  { label: "Eligibility & Documents", href: "/admissions" },
  { label: "Fee Structure", href: "/courses" },
  { label: "Admission Enquiry", href: "/contact-us" },
];

const programmeLinks = [
  { label: "D.Pharm", href: "/courses/dpharm" },
  { label: "B.Pharm", href: "/courses/bpharm" },
  { label: "M.Pharm", href: "/courses/mpharm-ceutics" },
  { label: "Advanced Courses", href: "/advance-courses" },
];

const quickLinks = [
  { label: "Training & Placements", href: "/placement-pharmacy" },
  { label: "Research & Development", href: "/research" },
  { label: "Stakeholder Achievement", href: "/stakeholder-achievement" },
  { label: "Events & Press Releases", href: "/press-releases" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Academic Calendar", href: "/admissions" },
  { label: "Audit Statements", href: "/audit-statements" },
  { label: "Committees", href: "/committee" },
  { label: "PCI-SIF", href: "/approvals-and-affiliations" },
  { label: "IQAC", href: "/iqac" },
];

const footerGroups = [
  { title: "About Us", links: aboutLinks.slice(0, 5), secondaryTitle: "Campus Life", secondaryLinks: aboutLinks.slice(5) },
  { title: "Admissions", links: admissionLinks, secondaryTitle: "Programmes", secondaryLinks: programmeLinks },
  { title: "Quick Links", links: quickLinks },
];

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer" aria-label="Institute Footer">
      <div className="container">
        <div className="main-footer__grid">
          <div className="main-footer__brand">
            <p className="main-footer__address">
              {siteConfig.name}
              <br />
              {siteConfig.address.street}, {siteConfig.address.locality}
              <br />
              {siteConfig.address.city} ({siteConfig.address.state}) - {siteConfig.address.pincode}
            </p>
            <a className="main-footer__map" href="https://maps.google.com/?q=NIET+Greater+Noida" target="_blank" rel="noopener noreferrer">
              Find us on the map
            </a>
            <div className="main-footer__socials" aria-label="Social media">
              <a
                href={siteConfig.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="main-footer__social-link"
              >
                <svg
                  className="main-footer__social-icon"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span>Facebook</span>
              </a>
              <a
                href={siteConfig.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="main-footer__social-link"
              >
                <svg
                  className="main-footer__social-icon"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span>LinkedIn</span>
              </a>
              <a
                href={siteConfig.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="main-footer__social-link"
              >
                <svg
                  className="main-footer__social-icon"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span>Instagram</span>
              </a>
            </div>
          </div>

          {footerGroups.map((group) => (
            <nav className="main-footer__group" key={group.title} aria-label={group.title}>
              <h2>{group.title}</h2>
              <ul>
                {group.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
              {group.secondaryTitle && group.secondaryLinks && (
                <>
                  <h2 className="main-footer__subheading">{group.secondaryTitle}</h2>
                  <ul>
                    {group.secondaryLinks.map((link) => (
                      <li key={link.href + link.label}>
                        <Link href={link.href}>{link.label}</Link>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </nav>
          ))}
        </div>

        <div className="main-footer__bottom">
          <nav aria-label="Legal and institute links">
            <Link href="/policy">Privacy Policy</Link>
            <Link href="/approvals-and-affiliations">Mandatory Disclosure</Link>
            <Link href="/nirf">NIRF</Link>
            <Link href="/policy">Usage Policy</Link>
            <Link href="/contact-us">Contact</Link>
          </nav>
          {/* <p>
            © {currentYear} {siteConfig.shortName}. All Rights Reserved. | Approved by PCI &amp; AICTE | Affiliated to AKTU &amp; BTE UP
          </p> */}
        </div>
      </div>
    </footer>
  );
};

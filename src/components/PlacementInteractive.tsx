"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  cmcOverview,
  cmcTeamMembers,
  prominentRecruiters,
  placementLogosList,
  bpharmPlacementTrends,
  mpharmPlacementTrends,
  bpharmPlacementsTable,
  mpharmPlacementsTable,
  type PlacementStat,
} from "@/data/placements";

export function PlacementInteractive() {
  const [activeTrend, setActiveTrend] = useState<"bpharm" | "mpharm">("bpharm");
  const [activeAudit, setActiveAudit] = useState<"bpharm" | "mpharm">("bpharm");
  const [previewImage, setPreviewImage] = useState<{ src: string; alt: string; title: string } | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPreviewImage(null);
    };
    if (previewImage) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [previewImage]);

  const currentTrends = activeTrend === "bpharm" ? bpharmPlacementTrends : mpharmPlacementTrends;
  const latestStat: PlacementStat = currentTrends[0];

  return (
    <div className="pl-root">
      {/* 1. Placement Quick Stats Bar */}
      <section className="pl-stats-bar hp-reveal hp-reveal--scale" aria-label="Placement Overview Metrics">
        <div className="hp-container">
          <div className="pl-stats-grid">
            <div className="pl-stat-card">
              <span className="pl-stat-badge">M.Pharm Peak</span>
              <div className="pl-stat-value">9.20 <span className="pl-stat-unit">LPA</span></div>
              <p className="pl-stat-label">Highest Package Offered</p>
            </div>
            <div className="pl-stat-card">
              <span className="pl-stat-badge">B.Pharm Peak</span>
              <div className="pl-stat-value">8.50 <span className="pl-stat-unit">LPA</span></div>
              <p className="pl-stat-label">Highest Package Offered</p>
            </div>
            <div className="pl-stat-card">
              <span className="pl-stat-badge">Career Support</span>
              <div className="pl-stat-value">100<span className="pl-stat-unit">%</span></div>
              <p className="pl-stat-label">Placement Assistance &amp; Guidance</p>
            </div>
            <div className="pl-stat-card">
              <span className="pl-stat-badge">National Standing</span>
              <div className="pl-stat-value">37<span className="pl-stat-unit">th</span></div>
              <p className="pl-stat-label">NIRF 2024 Rank (Pharmacy Category)</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Official CMC Overview & Leadership Desk */}
      <section className="pl-section pl-cmc" aria-labelledby="pl-cmc-heading">
        <div className="hp-container">
          <div className="pl-cmc__layout">
            <div className="pl-cmc__content hp-reveal hp-reveal--left">
              <span className="pl-eyebrow">Career Management Cell</span>
              <h2 id="pl-cmc-heading" className="hp-title">Training &amp; Corporate Relations</h2>
              <p className="hp-subtitle">Perspectives and Commitments from Our Placement Leadership.</p>

              <blockquote className="pl-quote">
                <p className="pl-quote__text">{cmcOverview.quote}</p>
              </blockquote>

              <p className="pl-narrative">{cmcOverview.narrative}</p>

              <div className="pl-cmc__actions">
                <a href="#pl-team" className="ab-btn-outline">
                  Contact Placement Cell
                </a>
                <a href="#pl-audit" className="pl-btn-secondary">
                  View 5-Year Audit
                </a>
              </div>
            </div>

            <div className="pl-cmc__aside hp-reveal hp-reveal--right hp-delay-1">
              <div className="pl-notice-card">
                <h3 className="pl-notice-title">Placement Cell Responsibilities</h3>
                <ul className="pl-notice-list">
                  <li>
                    <strong>Corporate Interface 24×7</strong>
                    <span>Continuous engagement with human resources and scientific recruitment heads across pharmaceutical multinationals.</span>
                  </li>
                  <li>
                    <strong>Pre-Placement Grooming</strong>
                    <span>Aptitude tests, technical evaluations, interview handling, and scientific presentation preparation.</span>
                  </li>
                  <li>
                    <strong>Higher Studies &amp; GPAT Guidance</strong>
                    <span>Structured training cell assisting students for GPAT, NIPER-JEE, and overseas admissions (GRE/TOEFL).</span>
                  </li>
                  <li>
                    <strong>Industrial Training &amp; Hospital Rounds</strong>
                    <span>Mandatory internships in cGMP compliant manufacturing laboratories, clinical research facilities, and hospitals.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Official Infographics & Trends */}
      <section className="pl-section pl-trends" aria-labelledby="pl-trends-heading">
        <div className="hp-container">
          <header className="pl-section-head hp-reveal">
            <h2 id="pl-trends-heading" className="hp-title">Placement Records &amp; Package Trends</h2>
            <p className="hp-subtitle">Annual Placement Records Across B.Pharm &amp; M.Pharm Programmes.</p>
          </header>

          <div className="pl-trends__grid">
            {/* Left: Official Infographic Poster */}
            <div className="pl-poster-card hp-reveal hp-reveal--left">
              <div className="pl-poster-card__header">
                <h3>Highest Package &amp; Placement Percentage</h3>
                <span>Published Official Infographic</span>
              </div>
              <div
                className="pl-poster-card__img-wrap"
                onClick={() =>
                  setPreviewImage({
                    src: "/images/Highest-Package-and-Placement-Percentage.jpeg",
                    alt: "Highest Package and Placement Percentage",
                    title: "Highest Package & Placement Percentage",
                  })
                }
                role="button"
                tabIndex={0}
                aria-label="Click to enlarge image"
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setPreviewImage({
                      src: "/images/Highest-Package-and-Placement-Percentage.jpeg",
                      alt: "Highest Package and Placement Percentage",
                      title: "Highest Package & Placement Percentage",
                    });
                  }
                }}
              >
                <img
                  src="/images/Highest-Package-and-Placement-Percentage.jpeg"
                  alt="Highest Package and Placement Percentage"
                  loading="lazy"
                />
                <div className="pl-poster-card__overlay">
                  <span className="pl-poster-card__zoom-btn">Click to View Full Size</span>
                </div>
              </div>
              <p className="pl-poster-card__caption">
                Certified annual placement metrics and package progression as reported to statutory bodies.
              </p>
            </div>

            {/* Right: Trend Data Table & Breakdown */}
            <div className="pl-trends-card hp-reveal hp-reveal--right hp-delay-1">
              {/* Program Selector Tabs */}
              <div className="pl-tabs" role="tablist" aria-label="Programme selection for placement records">
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTrend === "bpharm"}
                  className={`pl-tab-btn ${activeTrend === "bpharm" ? "is-active" : ""}`}
                  onClick={() => setActiveTrend("bpharm")}
                >
                  B.Pharm Trends
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTrend === "mpharm"}
                  className={`pl-tab-btn ${activeTrend === "mpharm" ? "is-active" : ""}`}
                  onClick={() => setActiveTrend("mpharm")}
                >
                  M.Pharm Trends
                </button>
              </div>

              {/* Latest Year Summary Highlight */}
              <div className="pl-trend-summary">
                <div>
                  <span className="pl-trend-summary__label">Highest Package ({latestStat.academicYear})</span>
                  <div className="pl-trend-summary__val">{latestStat.highestPackage}</div>
                  <span className="pl-trend-summary__sub">Recorded CTC</span>
                </div>
                <div className="pl-trend-summary__divider" />
                <div>
                  <span className="pl-trend-summary__label">Average Package</span>
                  <div className="pl-trend-summary__val">{latestStat.avgPackage}</div>
                  <span className="pl-trend-summary__sub">Batch Average CTC</span>
                </div>
                <div className="pl-trend-summary__divider" />
                <div>
                  <span className="pl-trend-summary__label">Placed Students</span>
                  <div className="pl-trend-summary__val">
                    {latestStat.studentsPlaced} <small>/ {latestStat.intake}</small>
                  </div>
                  <span className="pl-trend-summary__sub">
                    {Math.round((latestStat.studentsPlaced / latestStat.intake) * 100)}% Placement Rate
                  </span>
                </div>
              </div>

              {/* Trend Table */}
              <div className="table-responsive">
                <table className="pl-table">
                  <thead>
                    <tr>
                      <th className="pl-th-year">Academic Year</th>
                      <th className="pl-th-metric">Intake</th>
                      <th className="pl-th-metric">Students Placed</th>
                      <th className="pl-th-metric">Highest Package</th>
                      <th className="pl-th-metric">Average Package</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentTrends.map((t) => (
                      <tr key={t.academicYear}>
                        <td className="pl-td-year"><strong>{t.academicYear}</strong></td>
                        <td className="pl-td-val">{t.intake}</td>
                        <td className="pl-td-val"><strong>{t.studentsPlaced}</strong></td>
                        <td className="pl-td-val"><span className="pl-chip pl-chip--green">{t.highestPackage}</span></td>
                        <td className="pl-td-val">{t.avgPackage}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Proud Recruiters */}
      <section className="pl-section pl-recruiters" aria-labelledby="pl-recruiters-heading">
        <div className="hp-container">
          <header className="pl-section-head hp-reveal">
            <h2 id="pl-recruiters-heading" className="hp-title">Our Proud Recruiters</h2>
            <p className="hp-subtitle">Pharmaceutical &amp; Healthcare Companies Hiring NIET Graduates.</p>
          </header>

          {/* Featured Recruiters Banner Card */}
          <div className="pl-recruiter-poster hp-reveal hp-reveal--scale">
            <div
              className="pl-recruiter-poster__img-wrap"
              onClick={() =>
                setPreviewImage({
                  src: "/images/Our_Proud_Recruiters.jpeg",
                  alt: "Our Proud Recruiters - NIET Pharmacy",
                  title: "Our Proud Recruiters Overview",
                })
              }
              role="button"
              tabIndex={0}
              aria-label="Click to enlarge recruiters banner"
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setPreviewImage({
                    src: "/images/Our_Proud_Recruiters.jpeg",
                    alt: "Our Proud Recruiters - NIET Pharmacy",
                    title: "Our Proud Recruiters Overview",
                  });
                }
              }}
            >
              <img
                src="/images/Our_Proud_Recruiters.jpeg"
                alt="Our Proud Recruiters at NIET Pharmacy Institute"
                loading="lazy"
              />
              <div className="pl-poster-card__overlay">
                <span className="pl-poster-card__zoom-btn">Click to View Full Size</span>
              </div>
            </div>
          </div>

          {/* Animated Recruiters Logo Marquee Ticker */}
          <div className="pl-marquee-container hp-reveal">
            <h3 className="pl-marquee-title">Recruitment Partners &amp; Healthcare Brands</h3>
            <div className="pl-marquee">
              <div className="pl-marquee__track">
                {[0, 1, 2].map((loopIdx) => (
                  <ul key={loopIdx} className="pl-marquee__list" aria-hidden={loopIdx > 0 ? "true" : undefined}>
                    {placementLogosList.map((logo) => (
                      <li key={`${loopIdx}-${logo.id}`} className="pl-marquee__item">
                        <img src={logo.image} alt={logo.name} loading="lazy" />
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          </div>

          {/* Prominent Hiring Partners Grid */}
          <div className="pl-partners hp-reveal">
            <h3 className="pl-partners-title">Prominent Hiring Partners</h3>
            <div className="pl-partners-grid">
              {prominentRecruiters.map((recruiter, idx) => (
                <div key={idx} className="pl-partner-badge">
                  <span className="pl-partner-badge__dot" aria-hidden="true" />
                  <span className="pl-partner-badge__text">{recruiter}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Placement Highlights / Star Placements */}
      <section className="pl-section pl-highlights" aria-labelledby="pl-highlights-heading">
        <div className="hp-container">
          <header className="pl-section-head hp-reveal">
            <h2 id="pl-highlights-heading" className="hp-title">Placement Highlights</h2>
            <p className="hp-subtitle">Student Career Milestones &amp; Corporate Selections.</p>
          </header>

          <div className="pl-highlights-grid">
            <div className="pl-highlight-card hp-reveal hp-reveal--left">
              <div
                className="pl-highlight-card__img-wrap"
                onClick={() =>
                  setPreviewImage({
                    src: "/images/placement-highlight/01.jpeg",
                    alt: "Placement Highlight Announcement 1",
                    title: "NIET Pharmacy Placement Announcement 1",
                  })
                }
                role="button"
                tabIndex={0}
                aria-label="Click to enlarge placement announcement"
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setPreviewImage({
                      src: "/images/placement-highlight/01.jpeg",
                      alt: "Placement Highlight Announcement 1",
                      title: "NIET Pharmacy Placement Announcement 1",
                    });
                  }
                }}
              >
                <img
                  src="/images/placement-highlight/01.jpeg"
                  alt="NIET Pharmacy Placement Highlight 1"
                  loading="lazy"
                />
                <div className="pl-poster-card__overlay">
                  <span className="pl-poster-card__zoom-btn">Click to View Full Size</span>
                </div>
              </div>
              <div className="pl-highlight-card__caption">
                <span className="pl-highlight-card__tag">Campus Placement Drive</span>
                <h3>Corporate Selection Announcement</h3>
                <p>Outstanding student recruitment with competitive compensation in leading pharmaceutical corporate.</p>
              </div>
            </div>

            <div className="pl-highlight-card hp-reveal hp-reveal--right hp-delay-1">
              <div
                className="pl-highlight-card__img-wrap"
                onClick={() =>
                  setPreviewImage({
                    src: "/images/placement-highlight/02.jpeg",
                    alt: "Placement Highlight Announcement 2",
                    title: "NIET Pharmacy Placement Announcement 2",
                  })
                }
                role="button"
                tabIndex={0}
                aria-label="Click to enlarge placement announcement"
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setPreviewImage({
                      src: "/images/placement-highlight/02.jpeg",
                      alt: "Placement Highlight Announcement 2",
                      title: "NIET Pharmacy Placement Announcement 2",
                    });
                  }
                }}
              >
                <img
                  src="/images/placement-highlight/02.jpeg"
                  alt="NIET Pharmacy Placement Highlight 2"
                  loading="lazy"
                />
                <div className="pl-poster-card__overlay">
                  <span className="pl-poster-card__zoom-btn">Click to View Full Size</span>
                </div>
              </div>
              <div className="pl-highlight-card__caption">
                <span className="pl-highlight-card__tag">Campus Placement Drive</span>
                <h3>Healthcare Leadership Career Selection</h3>
                <p>Recognizing academic excellence and corporate readiness of NIET Pharmacy graduates.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Comprehensive 5-Year Placement & Higher Studies Audit */}
      <section id="pl-audit" className="pl-section pl-audit" aria-labelledby="pl-audit-heading">
        <div className="hp-container">
          <header className="pl-section-head hp-reveal">
            <h2 id="pl-audit-heading" className="hp-title">Placement, Entrepreneurship &amp; Higher Studies Audit</h2>
            <p className="hp-subtitle">Official 5-Year Academic Records for Statutory &amp; Accreditation Reviews.</p>
          </header>

          <div className="pl-audit-box hp-reveal hp-reveal--scale">
            {/* Audit Program Switcher */}
            <div className="pl-audit-nav" role="tablist" aria-label="Choose program for placement audit">
              <button
                type="button"
                role="tab"
                aria-selected={activeAudit === "bpharm"}
                className={`pl-audit-tab ${activeAudit === "bpharm" ? "is-active" : ""}`}
                onClick={() => setActiveAudit("bpharm")}
              >
                B.Pharm 5-Year Audit Details
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeAudit === "mpharm"}
                className={`pl-audit-tab ${activeAudit === "mpharm" ? "is-active" : ""}`}
                onClick={() => setActiveAudit("mpharm")}
              >
                M.Pharm 4-Year Audit Details
              </button>
            </div>

            {/* B.Pharm Table */}
            {activeAudit === "bpharm" && (
              <div className="table-responsive pl-table-wrapper" role="tabpanel">
                <table className="pl-table">
                  <thead>
                    <tr>
                      <th className="pl-th-metric">Placement, Entrepreneurship &amp; Higher Studies Details</th>
                      <th className="pl-th-year">2024-25</th>
                      <th className="pl-th-year">2023-24</th>
                      <th className="pl-th-year">2022-23</th>
                      <th className="pl-th-year">2021-22</th>
                      <th className="pl-th-year">2020-21</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bpharmPlacementsTable.map((row, idx) => (
                      <tr key={idx} className={idx === 0 ? "pl-tr-highlight" : ""}>
                        <td className="pl-td-metric">{row.metric}</td>
                        <td className="pl-td-val"><strong>{row.y2024_25}</strong></td>
                        <td className="pl-td-val"><strong>{row.y2023_24}</strong></td>
                        <td className="pl-td-val"><strong>{row.y2022_23}</strong></td>
                        <td className="pl-td-val"><strong>{row.y2021_22}</strong></td>
                        <td className="pl-td-val"><strong>{row.y2020_21}</strong></td>
                      </tr>
                    ))}
                    <tr className="pl-tr-total">
                      <td className="pl-td-metric">
                        <strong>Total Progression (Placed + Admitted to Higher Studies)</strong>
                      </td>
                      <td className="pl-td-val"><span className="pl-chip pl-chip--green">110 (100%)</span></td>
                      <td className="pl-td-val"><span className="pl-chip pl-chip--green">110 (100%)</span></td>
                      <td className="pl-td-val"><span className="pl-chip pl-chip--green">105 (100%)</span></td>
                      <td className="pl-td-val"><span className="pl-chip pl-chip--green">104 (100%)</span></td>
                      <td className="pl-td-val"><span className="pl-chip pl-chip--green">103 (100%)</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {/* M.Pharm Table */}
            {activeAudit === "mpharm" && (
              <div className="table-responsive pl-table-wrapper" role="tabpanel">
                <table className="pl-table">
                  <thead>
                    <tr>
                      <th className="pl-th-year">Academic Year</th>
                      <th className="pl-th-metric">No. of Students Enrolled</th>
                      <th className="pl-th-metric">No. of Students Placed</th>
                      <th className="pl-th-metric">Higher Studies (GPAT/NIPER)</th>
                      <th className="pl-th-metric">Success Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mpharmPlacementsTable.map((row, idx) => {
                      const totalSuccessful =
                        row.placed +
                        (typeof row.higherStudies === "number"
                          ? row.higherStudies
                          : parseInt(row.higherStudies) || 0);
                      const rate = Math.round((totalSuccessful / row.enrolled) * 100);
                      return (
                        <tr key={idx}>
                          <td className="pl-td-year"><strong>{row.year}</strong></td>
                          <td className="pl-td-val">{row.enrolled}</td>
                          <td className="pl-td-val">{row.placed}</td>
                          <td className="pl-td-val">{row.higherStudies}</td>
                          <td className="pl-td-val"><span className="pl-chip pl-chip--green">{rate}%</span></td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 7. Official CMC Team Directory & Recruiter Notice */}
      <section id="pl-team" className="pl-section pl-team" aria-labelledby="pl-team-heading">
        <div className="hp-container">
          <header className="pl-section-head hp-reveal">
            <h2 id="pl-team-heading" className="hp-title">Career Management Cell (CMC) Team</h2>
            <p className="hp-subtitle">Placement Officers &amp; Departmental Coordinators.</p>
          </header>

          <div className="table-responsive pl-team-table-wrap hp-reveal">
            <table className="pl-table">
              <thead>
                <tr>
                  <th className="w-[60px]">S.No</th>
                  <th>Name</th>
                  <th>Designation</th>
                  <th>Email</th>
                  <th>Contact No</th>
                </tr>
              </thead>
              <tbody>
                {cmcTeamMembers.map((m, idx) => (
                  <tr key={idx}>
                    <td>{idx + 1}.</td>
                    <td><strong>{m.name}</strong></td>
                    <td><span className="pl-role-badge">{m.designation}</span></td>
                    <td>
                      <a href={`mailto:${m.email}`} className="pl-email-link">
                        {m.email}
                      </a>
                    </td>
                    <td>
                      <a href={`tel:${m.phone}`} className="pl-phone-link">
                        +91 {m.phone}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Institutional Recruiter Notice */}
          <div className="pl-recruiter-notice hp-reveal hp-reveal--scale hp-delay-1">
            <div className="pl-recruiter-notice__copy">
              <h3>Corporate Invitations for Campus Placements</h3>
              <p>
                Organizations interested in conducting on-campus recruitment, pre-placement talks, or industry internships
                for B.Pharm and M.Pharm students are invited to connect with the Career Management Cell.
              </p>
            </div>
            <div className="pl-recruiter-notice__actions">
              <a href="mailto:ajeet.singh@niet.co.in" className="ab-btn-outline">
                Contact Head - CMC
              </a>
              <Link href="/admissions" className="pl-btn-secondary">
                Admissions 2026
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox / Zoom Modal */}
      {previewImage && (
        <div
          className="pl-lightbox"
          onClick={() => setPreviewImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label={previewImage.title}
        >
          <div className="pl-lightbox__content" onClick={(e) => e.stopPropagation()}>
            <div className="pl-lightbox__header">
              <h4>{previewImage.title}</h4>
              <button
                type="button"
                className="pl-lightbox__close"
                onClick={() => setPreviewImage(null)}
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>
            <div className="pl-lightbox__body">
              <img src={previewImage.src} alt={previewImage.alt} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

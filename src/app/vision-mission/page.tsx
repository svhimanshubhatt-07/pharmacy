import type { Metadata } from "next";
import { aboutData } from "@/data/about";

export const metadata: Metadata = {
  title: "Vision, Mission and Quality Policy | NIET Pharmacy",
  description:
    "Explore the Vision, Mission, PEOs, and Quality Policy of NIET Pharmacy Institute, committed to academic excellence and world-class research.",
};

export default function VisionMissionPage() {
  return (
    <div>
      <section
        className="legacy-page-banner legacy-page-banner--about"
      >
        <div className="legacy-page-banner__overlay" />
        <div className="legacy-page-banner__caption">
          <h1>About Us</h1>
        </div>
      </section>

      <section className="legacy-about-intro">
        <div className="container">
          <h2>{aboutData.tagline}</h2>
          <div className="legacy-about-intro__copy">
            <p>{aboutData.vmNarrative1}</p>
            <p>{aboutData.vmNarrative2}</p>
          </div>
        </div>
      </section>

      <section className="legacy-vision-section">
        <div className="container">
          <div className="legacy-vision-grid">
            <article className="legacy-vision-card">
              <h3>{aboutData.vision.heading}</h3>
              <p>{aboutData.vision.description}</p>
            </article>
            <article className="legacy-vision-card">
              <h4>{aboutData.mission.heading}</h4>
              <p>{aboutData.mission.description}</p>
            </article>
            <article className="legacy-vision-card">
              <h4>PEO</h4>
              {aboutData.peos.map((peo) => (
                <p key={peo.number}>
                  <strong>PEO {peo.number} :</strong> {peo.title}
                </p>
              ))}
            </article>
          </div>
        </div>
      </section>

      <section
        className="legacy-quality-policy bg-[url('/images/policybanner.jpg')]"
      >
        <div className="container">
          <div className="legacy-quality-policy__content">
            <h3>{aboutData.qualityPolicy.heading}</h3>
            <p>{aboutData.qualityPolicy.description1}</p>
            <p>{aboutData.qualityPolicy.description2}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

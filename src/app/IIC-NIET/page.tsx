import React from "react";
import { Metadata } from "next";
import { Banner } from "@/components/Banner";
import { TabbedContent, TabItem } from "@/components/TabbedContent";
import { iicData, iicActivitiesPhotos } from "@/data/iic";

export const metadata: Metadata = {
  title: "Institution's Innovation Council (IIC) | NIET Pharmacy",
  description:
    "Ministry of Education's Innovation Cell (MIC) - Institution's Innovation Council at NIET Pharmacy Institute, Greater Noida.",
};

export default function IICPage() {
  const tabs: TabItem[] = [
    {
      id: "overview",
      label: "About IIC & Mandate",
      content: (
        <div>
          <h2>Institution&apos;s Innovation Council (IIC)</h2>
          <div
            className="card p-[16px_20px] mb-[20px] bg-[#f0fdf4] [border:1px_solid_#bbf7d0]"
          >
            <strong className="[color:#166534] text-[15px]">★ {iicData.starRating}</strong>
            <div className="text-[13px] [color:#15803d] mt-[4px]">
              <strong>IIC ID:</strong> {iicData.iicId} | <strong>AISHE Code:</strong> {iicData.aisheCode}
            </div>
          </div>

          <p className="text-[15px] leading-[1.8] text-justify mb-[20px]">
            {iicData.mandate}
          </p>

          <h3>Institute Vision &amp; Mission</h3>
          <p className="text-[15px] leading-[1.8] text-justify mb-[16px]">
            <strong>Vision:</strong> {iicData.vision}
          </p>
          <ul className="pl-[20px] text-[14px] leading-[1.8] mb-[20px]">
            {iicData.mission.map((m, idx) => (
              <li key={idx}>{m}</li>
            ))}
          </ul>

          <h3>Journey of IIC Established at the Institute</h3>
          <p className="text-[15px] leading-[1.8] text-justify">{iicData.journey}</p>
        </div>
      ),
    },
    {
      id: "focus-functions",
      label: "Focus & Functions",
      content: (
        <div>
          <h2>Major Focus &amp; Statutory Functions</h2>

          <div className="mb-[24px]">
            <h3 className="text-[17px] text-primary mb-[12px]">Major Focus Areas</h3>
            <ul className="pl-[20px] text-[14px] leading-[1.8]">
              {iicData.majorFocus.map((item, idx) => (
                <li key={idx} className="mb-[6px]">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[17px] text-primary mb-[12px]">Key Functions of IIC</h3>
            <ul className="pl-[20px] text-[14px] leading-[1.8]">
              {iicData.functions.map((func, idx) => (
                <li key={idx} className="mb-[6px]">
                  {func}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "iic40",
      label: "IIC 4.0 Framework",
      content: (
        <div>
          <h2>{iicData.iic40.title}</h2>
          <p className="text-[15px] leading-[1.8] text-justify mb-[20px]">
            {iicData.iic40.about}
          </p>

          <h3>Key Features of IIC 4.0</h3>
          <ul className="pl-[20px] text-[14px] leading-[1.8]">
            {iicData.iic40.features.map((feat, idx) => (
              <li key={idx} className="mb-[8px]">
                {feat}
              </li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      id: "missionshakti",
      label: "Mission Shakti",
      content: (
        <div>
          <h2>{iicData.missionShakti.title}</h2>
          <p className="text-[15px] leading-[1.8] mb-[16px]">
            Empowerment initiative promoting women in STEM, pharmaceutical innovation, and engineering leadership.
          </p>

          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Event Program Title</th>
                  <th className="w-[200px] text-center">Video Broadcast</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-semibold">{iicData.missionShakti.eventTitle}</td>
                  <td className="text-center">
                    <a
                      href={iicData.missionShakti.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline text-[12.5px] p-[6px_14px]"
                    >
                      Watch Video
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-[28px]">
            <h3 className="text-[18px] text-primary mb-[12px]">
              Webinar Broadcast Stream
            </h3>
            <div
              className="card max-w-[760px] p-[12px] rounded-[10px] overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.08)] bg-black"
            >
              <video
                controls
                preload="metadata"
                className="w-full max-h-[440px] block rounded-[6px]"
              >
                <source src={iicData.missionShakti.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "activities",
      label: "Activities Gallery",
      content: (
        <div>
          <h2>IIC Innovation & Entrepreneurship Activities Gallery</h2>
          <p className="[color:var(--text-muted)] text-[14.5px] mb-[20px]">
            Photographic archive of IIC workshops, hackathons, expert talks, mentor sessions, and prototype exhibitions:
          </p>
          <div className="grid-3 gap-[16px]">
            {iicActivitiesPhotos.map((photo, pIdx) => (
              <div key={pIdx} className="card p-[8px] overflow-hidden">
                <a href={photo} target="_blank" rel="noopener noreferrer">
                  <img
                    src={photo}
                    alt={`IIC Activity ${pIdx + 1}`}
                    loading="lazy"
                    className="w-full h-[220px] object-cover rounded-[6px] block"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <div>
      <Banner
        title="Institution's Innovation Council (IIC)"
        backgroundImage="/IIC-NIET/images/iicbanner.jpg"
        mobileBackgroundImage="/IIC-NIET/images/mbiicbanner.jpg"
      />

      <section className="section-pad">
        <div className="container">
          <TabbedContent tabs={tabs} defaultTabId="overview" />
        </div>
      </section>
    </div>
  );
}

import React from "react";
import { Metadata } from "next";
import { Banner } from "@/components/Banner";
import { TabbedContent, TabItem } from "@/components/TabbedContent";
import { icsConferenceData, conferencePartners } from "@/data/ics";

export const metadata: Metadata = {
  title: "NICS-2023 | International Conference on Technology in Pharma Healthcare | NIET Pharmacy",
  description:
    "International Conference and Summit 2023 (NICS-2023) proceedings, scientific tracks, advisory board, and organizing committee at NIET Pharmacy.",
};

export default function ICSConferencePage() {
  const tabs: TabItem[] = [
    {
      id: "about",
      label: "About Conference",
      content: (
        <div>
          <h2>About the Conference and Summit</h2>
          <p className="text-[15px] leading-[1.8] text-justify mb-[20px]">
            {icsConferenceData.aboutConference}
          </p>

          <h3>About the Institute</h3>
          <p className="text-[15px] leading-[1.8] text-justify mb-[24px]">
            {icsConferenceData.aboutInstitute}
          </p>

          <div
            className="card p-[20px] bg-[#f8fafc] [border:1px_solid_#e2e8f0] text-center mb-[28px]"
          >
            <h4 className="text-primary mb-[8px]">Conference Proceedings &amp; Archive</h4>
            <p className="text-[14px] [color:var(--text-muted)] mb-[16px]">
              Download the official published conference proceedings volume containing peer-reviewed scientific papers:
            </p>
            <div className="flex gap-[12px] justify-center flex-wrap">
              <a
                href={icsConferenceData.proceedingsPdf}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Download Full Conference Proceedings (PDF) ↓
              </a>
              <a
                href={icsConferenceData.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Registration Form
              </a>
            </div>
          </div>

          <h3 className="mb-[16px]">Academic &amp; Institutional Partners</h3>
          <div className="grid-3 gap-[16px] mb-[28px]">
            {conferencePartners.map((p, idx) => (
              <div
                key={idx}
                className="card p-[16px] flex items-center justify-center bg-white"
              >
                <img
                  src={p.logo}
                  alt={p.name}
                  loading="lazy"
                  className="max-h-[60px] max-w-[160px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "tracks",
      label: "Call for Papers & Tracks",
      content: (
        <div>
          <h2>Call for Papers — Scientific Tracks</h2>
          <p className="text-[15px] leading-[1.8] mb-[20px]">
            Young Scientists, Researchers, and Academicians are invited to submit high-quality original research and
            review manuscripts across the following domain tracks:
          </p>

          <div className="grid-2">
            {icsConferenceData.tracks.map((track, idx) => (
              <div key={idx} className="card p-[18px]">
                <h4 className="text-primary text-[16px] mb-[10px]">
                  Track {idx + 1}: {track.title}
                </h4>
                <ul className="pl-[20px] text-[13.5px] leading-[1.7] [color:var(--text-dark)]">
                  {track.subtopics.map((sub, sIdx) => (
                    <li key={sIdx}>{sub}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "guidelines",
      label: "Submission Guidelines & Dates",
      content: (
        <div>
          <h2>Paper Submission Guidelines &amp; Important Dates</h2>

          <div className="mb-[24px]">
            <h3 className="text-[17px] text-primary mb-[12px]">
              Author Instructions &amp; Specifications
            </h3>
            <ul className="pl-[20px] text-[14px] leading-[1.8]">
              {icsConferenceData.guidelines.map((guide, idx) => (
                <li key={idx} className="mb-[6px]">
                  {guide}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-[24px]">
            <h3 className="text-[17px] text-primary mb-[12px]">Important Dates</h3>
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Milestone Event</th>
                    <th className="w-[220px] text-center">Scheduled Date</th>
                  </tr>
                </thead>
                <tbody>
                  {icsConferenceData.importantDates.map((item, idx) => (
                    <tr key={idx}>
                      <td className="font-semibold">{item.event}</td>
                      <td className="text-center text-primary font-bold">{item.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="text-[17px] text-primary mb-[12px]">Sample Template &amp; Submission</h3>
            <p className="text-[14px] leading-[1.7] mb-[12px]">
              Please download the official manuscript submission template:
            </p>
            <div className="flex gap-[12px] flex-wrap">
              <a
                href={icsConferenceData.samplePaperDoc}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline text-[13px] p-[6px_14px]"
              >
                Download Sample Paper (DOCX) ↓
              </a>
              <a
                href={`mailto:${icsConferenceData.submissionEmail}`}
                className="btn btn-outline text-[13px] p-[6px_14px]"
              >
                Email: {icsConferenceData.submissionEmail}
              </a>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "registration",
      label: "Registration & Fee",
      content: (
        <div>
          <h2>Conference Registration Fee &amp; Bank Details</h2>

          <div className="mb-[24px]">
            <div className="table-responsive">
              <table className="table table-bordered text-center">
                <thead>
                  <tr>
                    <th className="text-left">Delegate Category</th>
                    <th>Before 25.05.2023</th>
                    <th>After 25.05.2023</th>
                    <th>Article Processing Charge (APC)**</th>
                  </tr>
                </thead>
                <tbody>
                  {icsConferenceData.feeStructure.map((row, idx) => (
                    <tr key={idx}>
                      <td className="text-left font-semibold">{row.category}</td>
                      <td>{row.earlyBird}</td>
                      <td>{row.regular}</td>
                      <td>{row.apc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[12.5px] [color:var(--text-muted)] mt-[6px]">
              *Registration fee is to be paid at the time of abstract/full paper submission through Google Form.
              **APC is to be paid after peer-review acceptance of the paper for publication in Scopus/UGC Care journals.
            </p>
          </div>

          <div className="card p-[20px] bg-[#f8fafc] [border:1px_solid_#e2e8f0]">
            <h3 className="text-[17px] text-primary mb-[12px]">
              Official Bank Details for NEFT / RTGS Transfer
            </h3>
            <div className="text-[14px] leading-[1.8]">
              <div>
                <strong>Bank Name:</strong> {icsConferenceData.bankDetails.bankName}
              </div>
              <div>
                <strong>Branch:</strong> {icsConferenceData.bankDetails.branch}
              </div>
              <div>
                <strong>Account Name:</strong> {icsConferenceData.bankDetails.accountName}
              </div>
              <div>
                <strong>Account Number:</strong> {icsConferenceData.bankDetails.accountNumber}
              </div>
              <div>
                <strong>IFSC Code:</strong> {icsConferenceData.bankDetails.ifscCode}
              </div>
              <div className="mt-[10px] text-primary font-medium">
                {icsConferenceData.bankDetails.note}
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "advisory",
      label: "Advisory Board",
      content: (
        <div>
          <h2>International &amp; National Advisory Board</h2>
          <p className="[color:var(--text-muted)] text-[14px] mb-[20px]">
            Distinguished leaders, regulatory authorities, directors, and scientists guiding the conference:
          </p>
          <div className="grid-3 gap-[20px]">
            {icsConferenceData.advisoryBoard.map((adv, idx) => (
              <div
                key={idx}
                className="card p-[16px] text-center flex flex-col items-center"
              >
                {adv.photo && (
                  <img
                    src={adv.photo}
                    alt={adv.name}
                    loading="lazy"
                    className="w-[110px] h-[130px] object-cover rounded-[6px] mb-[12px] [border:1px_solid_var(--border)]"
                  />
                )}
                <h4 className="text-primary text-[15px] mb-[4px]">{adv.name}</h4>
                <div className="text-[12.5px] [color:var(--text-muted)]">{adv.designation}</div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "committees",
      label: "Organizing Committees",
      content: (
        <div>
          <h2>Organizing Committees &amp; Leadership</h2>
          {icsConferenceData.organizingCommittees.map((group, gIdx) => (
            <div key={gIdx} className="mb-[28px]">
              <h3 className="text-[17px] text-primary mb-[12px]">{group.committee}</h3>
              {group.members.some((m) => m.photo) ? (
                <div className="grid-3 gap-[16px]">
                  {group.members.map((m, mIdx) => (
                    <div
                      key={mIdx}
                      className="card p-[16px] text-center flex flex-col items-center"
                    >
                      {m.photo && (
                        <img
                          src={m.photo}
                          alt={m.name}
                          loading="lazy"
                          className="w-[100px] h-[120px] object-cover rounded-[6px] mb-[10px] [border:1px_solid_var(--border)]"
                        />
                      )}
                      <div className="text-[12px] font-bold text-secondary">{m.role}</div>
                      <h4 className="text-primary text-[15px] m-[4px_0]">{m.name}</h4>
                      <div className="text-[12.5px] [color:var(--text-muted)]">{m.designation}</div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th className="w-[220px]">Committee Role</th>
                        <th className="w-[240px]">Name</th>
                        <th>Designation / Institute</th>
                      </tr>
                    </thead>
                    <tbody>
                      {group.members.map((m, mIdx) => (
                        <tr key={mIdx}>
                          <td className="font-semibold text-secondary">{m.role}</td>
                          <td className="font-semibold text-primary">{m.name}</td>
                          <td className="text-[13.5px]">{m.designation}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          ))}
        </div>
      ),
    },
  ];

  return (
    <div>
      <Banner
        title="Noida institute of engineering & Technology (Pharmacy institute) Greater noida"
        backgroundImage="/images/ics/banner-web.png"
        mobileBackgroundImage="/images/ics/banner-mob.png"
      />

      <section className="section-pad">
        <div className="container">
          <TabbedContent tabs={tabs} defaultTabId="about" />
        </div>
      </section>
    </div>
  );
}

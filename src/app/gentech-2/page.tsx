import React from "react";
import { Metadata } from "next";
import { Banner } from "@/components/Banner";
import { gentechWorkshopData } from "@/data/gentech";

export const metadata: Metadata = {
  title: "GenTech-II Hands-on Workshop | SDS-PAGE & Western Blotting | NIET Pharmacy",
  description:
    "2 Days Collaborative Hands-on Training on SDS-PAGE & Western Blotting Technique organized by NIET Pharmacy Institute in collaboration with Radiant Biolearning.",
};

export default function GenTechWorkshopPage() {
  const d = gentechWorkshopData;

  return (
    <div>
      <Banner
        title={d.title}
        subtitle={d.theme}
        breadcrumb="Workshops / GenTech-II"
        backgroundImage="/images/biology-bg.jpg"
      />

      <section className="section-pad">
        <div className="container">
          {/* Header Info Card */}
          <div
            className="card max-w-[920px] m-[0_auto_36px_auto] p-[28px] text-center [border-top:4px_solid_var(--primary)]"
          >
            <div
              className="inline-block p-[4px_14px] rounded-[20px] bg-[#dbeafe] [color:#1e40af] text-[13px] font-semibold mb-[12px]"
            >
              Collaborative Hands-On Certification Workshop
            </div>
            <h2 className="text-primary text-[24px] mb-[8px]">{d.theme}</h2>
            <p className="[color:var(--text-muted)] text-[15px] mb-[16px]">
              In Collaboration with <strong>{d.collaborator}</strong> &bull; Organized by <strong>{d.organizer}</strong>
            </p>

            <div
              className="grid-4 mt-[20px] pt-[20px] [border-top:1px_solid_var(--border)] text-center"
            >
              <div>
                <div className="text-[12px] [color:var(--text-muted)]">DATES</div>
                <strong className="text-[14px] text-primary">{d.dates}</strong>
              </div>
              <div>
                <div className="text-[12px] [color:var(--text-muted)]">TIMINGS</div>
                <strong className="text-[14px]">{d.timings}</strong>
              </div>
              <div>
                <div className="text-[12px] [color:var(--text-muted)]">CAPACITY</div>
                <strong className="text-[14px] [color:#dc2626]">{d.capacity}</strong>
              </div>
              <div>
                <div className="text-[12px] [color:var(--text-muted)]">VENUE</div>
                <strong className="text-[13px]">NIET Pharmacy Institute</strong>
              </div>
            </div>
          </div>

          <div className="max-w-[920px] m-[0_auto]">
            {/* Overview */}
            <div className="mb-[32px]">
              <h3>Workshop Overview</h3>
              <p className="text-[15.5px] leading-[1.8] text-justify [color:var(--text-dark)]">
                {d.overview}
              </p>
              <div
                className="mt-[12px] p-[10px_16px] bg-[#fef3c7] [border-left:4px_solid_#f59e0b] rounded-[4px] text-[13.5px] [color:#92400e]"
              >
                <strong>Hospitality:</strong> {d.hospitality}
              </div>
            </div>

            {/* Programme Highlights */}
            <div className="mb-[36px]">
              <h3 className="mb-[16px]">Programme Highlights</h3>
              <div className="grid-2">
                {d.highlights.map((h, idx) => (
                  <div key={idx} className="card p-[18px]">
                    <h4 className="text-primary text-[16px] mb-[6px]">{h.title}</h4>
                    <p className="text-[13.5px] leading-[1.6] [color:var(--text-dark)] m-[0]">
                      {h.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Hands-on Laboratory Modules */}
            <div className="mb-[36px]">
              <h3 className="mb-[16px]">Hands-on Laboratory Training Modules</h3>
              <div className="flex flex-col gap-[12px]">
                {d.modules.map((m, idx) => (
                  <div
                    key={idx}
                    className="card p-[16px_20px] [border-left:4px_solid_var(--secondary)]"
                  >
                    <h4 className="text-secondary text-[15.5px] mb-[4px]">{m.title}</h4>
                    <p className="text-[14px] leading-[1.6] [color:var(--text-dark)] m-[0]">
                      {m.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Eligibility & Resource Person */}
            <div className="grid-2 mb-[36px]">
              <div className="card p-[20px]">
                <h4 className="text-primary mb-[12px]">Eligibility Criteria</h4>
                <ul className="pl-[20px] text-[14px] leading-[1.8]">
                  {d.eligibility.map((e, idx) => (
                    <li key={idx}>{e}</li>
                  ))}
                </ul>
              </div>

              <div className="card p-[20px]">
                <h4 className="text-primary mb-[12px]">Distinguished Resource Person</h4>
                <div className="text-[16px] font-bold [color:var(--text-dark)] mb-[4px]">
                  {d.resourcePerson.name}
                </div>
                <div className="text-[14px] text-secondary font-semibold">
                  {d.resourcePerson.designation}
                </div>
                <p className="text-[13px] [color:var(--text-muted)] mt-[8px] leading-[1.6]">
                  Leading practical sessions in SDS-PAGE gel preparation, electrophoretic fractionation, semi-dry membrane
                  blotting, and protein visualization.
                </p>
              </div>
            </div>

            {/* Registration Fee & Account Details */}
            <div className="grid-2 mb-[36px]">
              <div className="card p-[20px]">
                <h4 className="text-primary mb-[12px]">Registration Fee</h4>
                <div className="text-[14px] leading-[1.8]">
                  <div>
                    <strong>Individual Registration:</strong> {d.registrationFee.individual}
                  </div>
                  <div>
                    <strong>Group Offer:</strong> {d.registrationFee.groupOffer}
                  </div>
                  <div className="text-[12.5px] [color:#dc2626] mt-[8px] font-semibold">
                    {d.registrationFee.note}
                  </div>
                </div>
              </div>

              <div
                className="card p-[20px] bg-[#f8fafc] [border:1px_solid_#e2e8f0]"
              >
                <h4 className="text-primary mb-[12px]">Bank Coordinates (NEFT / RTGS)</h4>
                <div className="text-[13.5px] leading-[1.8]">
                  <div>
                    <strong>Beneficiary:</strong> {d.bankDetails.beneficiary}
                  </div>
                  <div>
                    <strong>Bank:</strong> {d.bankDetails.bankName}
                  </div>
                  <div>
                    <strong>Account No.:</strong> {d.bankDetails.accountNumber}
                  </div>
                  <div>
                    <strong>IFSC Code:</strong> {d.bankDetails.ifscCode}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact / Helpdesk */}
            <div
              className="card p-[20px] text-center bg-[#f0fdf4] [border:1px_solid_#bbf7d0]"
            >
              <h4 className="[color:#166534] mb-[8px]">Workshop Secretariat &amp; Coordination</h4>
              <p className="text-[14px] [color:#15803d] m-[0]">
                NIET Pharmacy Institute, Plot No. 19, Knowledge Park-II, Greater Noida, U.P. &bull; Email:{" "}
                <a href="mailto:pharmacy@niet.co.in" className="underline [color:#166534]">
                  pharmacy@niet.co.in
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

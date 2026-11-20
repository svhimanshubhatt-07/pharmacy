import React from "react";
import { Metadata } from "next";
import { Banner } from "@/components/Banner";
import { TabbedContent, TabItem } from "@/components/TabbedContent";
import {
  swdOverview,
  swdLeadership,
  studentClubs,
  alumniContent,
} from "@/data/studentLife";

export const metadata: Metadata = {
  title: "Life at NIET | Student Welfare, Clubs & Alumni | NIET Pharmacy",
  description:
    "Explore student life at NIET Pharmacy: Student Welfare Department, co-curricular societies, clubs, sports, and our 15,000+ alumni network.",
};

export default function LifeAtNietPage() {
  const tabs: TabItem[] = [
    {
      id: "swd",
      label: "Office of Student's Welfare",
      content: (
        <div>
          <h2>Office of Student&apos;s Welfare</h2>
          <div className="mb-[28px]">
            <h3 className="text-[18px] text-primary mb-[12px]">About S.W.D</h3>
            <p className="text-[15px] leading-[1.8] text-justify mb-[16px]">
              {swdOverview.description}
            </p>
            <h4 className="text-[16px] mb-[10px]">Objectives</h4>
            <ul className="pl-[24px] text-[15px] leading-[1.8] [color:var(--text-main)]">
              {swdOverview.objectives.map((obj, idx) => (
                <li key={idx} className="mb-[6px]">{obj}</li>
              ))}
            </ul>
          </div>

          <div className="[border-top:1px_solid_var(--border)] pt-[24px] mt-[24px]">
            <h3 className="text-[18px] text-primary mb-[20px]">Dean Student Welfare</h3>
            <div className="flex flex-wrap gap-[20px] mb-[20px] items-start">
              <img
                src={swdLeadership.dean.photo}
                alt={swdLeadership.dean.name}
                className="w-[130px] h-auto rounded-[8px] shadow-[0_2px_6px_rgba(0,0,0,0.1)]"
              />
              <div className="flex-1 min-w-[260px]">
                <h4 className="m-[0_0_6px_0] text-primary">{swdLeadership.dean.name}</h4>
                <div className="font-semibold text-secondary text-[14px] mb-[10px]">
                  {swdLeadership.dean.designation}
                </div>
                <p className="text-[14.5px] leading-[1.7] text-justify">
                  {swdLeadership.dean.bio}
                </p>
              </div>
            </div>

            <div className="card bg-[#fbfbfb] p-[18px_24px] mb-[24px]">
              <h4 className="text-primary mb-[8px]">Message from Dean Student&apos;s Welfare</h4>
              <p className="text-[14.5px] leading-[1.8] text-justify m-[0]">
                {swdLeadership.dean.message}
              </p>
            </div>

            <p className="text-[15px] italic mb-[20px]">
              The Associate Dean Students&apos; Welfare and various departmental coordinators strengthen the office.
            </p>

            <div className="flex flex-wrap gap-[20px] items-start">
              <img
                src={swdLeadership.associateDean.photo}
                alt={swdLeadership.associateDean.name}
                className="w-[130px] h-auto rounded-[8px] shadow-[0_2px_6px_rgba(0,0,0,0.1)]"
              />
              <div className="flex-1 min-w-[260px]">
                <h4 className="m-[0_0_6px_0] text-primary">{swdLeadership.associateDean.name}</h4>
                <div className="font-semibold text-secondary text-[14px] mb-[10px]">
                  {swdLeadership.associateDean.designation}
                </div>
                <p className="text-[14.5px] leading-[1.7] text-justify">
                  {swdLeadership.associateDean.bio}
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "clubs",
      label: "Societies & Clubs",
      content: (
        <div>
          <h2>Societies & Clubs</h2>
          <div className="table-responsive mb-[32px]">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th className="w-[60px]">S. No.</th>
                  <th>Name of Club</th>
                  <th>President (Student)</th>
                  <th>Vice President (Student)</th>
                  <th>Faculty Coordinator</th>
                  <th>Team Members</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1.</td>
                  <td><strong>Dean (SW)</strong></td>
                  <td colSpan={4}><strong>Dr. Rakhi Mishra</strong></td>
                </tr>
                <tr>
                  <td>2.</td>
                  <td><strong>Associate Dean (SW)</strong></td>
                  <td colSpan={4}><strong>Mrs. Swati Yadav</strong></td>
                </tr>
                {studentClubs.map((club) => (
                  <tr key={club.sNo}>
                    <td>{club.sNo + 2}.</td>
                    <td><strong>{club.name}</strong></td>
                    <td>{club.president}</td>
                    <td>{club.vicePresident}</td>
                    <td>{club.coordinator}</td>
                    <td>{club.teamMembers}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-[19px] text-primary mb-[16px]">
            Various clubs in pharma tech society
          </h3>

          <div className="flex flex-col gap-[20px]">
            {studentClubs.map((club, idx) => (
              <div key={idx} className="card">
                <h4 className="text-primary mb-[8px]">
                  {idx + 1}. {club.name}
                </h4>
                <div className="font-semibold italic mb-[8px] text-secondary">
                  Objective:
                </div>
                <ul className="pl-[20px] text-[14.5px] leading-[1.8] m-[0]">
                  {club.objectives.map((obj, oIdx) => (
                    <li key={oIdx}>{obj}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "alumni",
      label: "Alumni",
      content: (
        <div>
          <h2>Alumni</h2>
          <div className="text-[15px] leading-[1.8] text-justify flex flex-col gap-[16px]">
            {alumniContent.paragraphs.map((p, idx) => (
              <p key={idx} className="m-[0]">
                {p}
              </p>
            ))}
          </div>

          <div className="mt-[28px]">
            <a
              href={alumniContent.pdfLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Successfully Placed Alumni (Download PDF ↓)
            </a>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div>
      <Banner
        title="Life at Niet"
        backgroundImage="/images/research-banner.jpg"
        mobileBackgroundImage="/images/inframobbanner.jpg"
      />

      <section className="section-pad">
        <div className="container">
          <TabbedContent tabs={tabs} defaultTabId="swd" />
        </div>
      </section>
    </div>
  );
}

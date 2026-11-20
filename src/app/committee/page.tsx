import React from "react";
import { Metadata } from "next";
import { Banner } from "@/components/Banner";
import { TabbedContent, TabItem } from "@/components/TabbedContent";
import {
  antiRaggingData,
  chiefProctorData,
  hostelManagementData,
  internalComplaintData,
  libraryCommitteeData,
  minorityCellData,
  obcCellData,
  researchAdvisoryData,
  scStData,
  studentWelfareData,
  studentGrievanceData,
  womenGrievanceData,
} from "@/data/committees";

export const metadata: Metadata = {
  title: "Statutory Committees & Cells | NIET Pharmacy",
  description:
    "Anti-Ragging, Internal Complaint Committee, Chief Proctor, Student Welfare, and Statutory Cells at NIET Pharmacy Institute.",
};

export default function CommitteePage() {
  const tabs: TabItem[] = [
    {
      id: "Classrooms",
      label: "Antiragging Committee",
      content: (
        <div>
          <h2>Antiragging Committee</h2>
          <div className="mb-[28px]">
            <p className="font-semibold text-[16px] mb-[12px]">
              {antiRaggingData.committeeTitle}
            </p>
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th colSpan={4}>Anti Ragging Committee</th>
                  </tr>
                  <tr>
                    <th className="w-[50px]">S.No</th>
                    <th>Name</th>
                    <th>Role in Committee</th>
                    <th>Contact No.</th>
                  </tr>
                </thead>
                <tbody>
                  {antiRaggingData.committeeMembers.map((m) => (
                    <tr key={m.sNo}>
                      <td>{m.sNo}.</td>
                      <td><strong>{m.name}</strong></td>
                      <td>{m.role}</td>
                      <td>{m.contact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="font-semibold text-[16px] mt-[32px] mb-[12px]">
              {antiRaggingData.squadTitle}
            </p>
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th className="w-[60px]">S No.</th>
                    <th>Name</th>
                    <th>Contact No.</th>
                  </tr>
                </thead>
                <tbody>
                  {antiRaggingData.squadFloors.map((floorBlock, fIdx) => (
                    <React.Fragment key={fIdx}>
                      <tr className="bg-[#f3f4f6]">
                        <th colSpan={3} className="font-bold text-primary">
                          {floorBlock.floor}
                        </th>
                      </tr>
                      {floorBlock.members.map((m) => (
                        <tr key={m.sNo}>
                          <td>{m.sNo}.</td>
                          <td>{m.name}</td>
                          <td>{m.contact}</td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "Library",
      label: "CHIEF PROCTOR-pharmacy",
      content: (
        <div>
          <h2>CHIEF PROCTOR</h2>
          <div className="mt-[20px]">
            <img
              src={chiefProctorData.image}
              alt="Chief Proctor"
              className="max-w-[400px] w-full h-auto rounded-[8px] mb-[20px]"
            />
            <p className="text-[15px] leading-[1.8] text-justify">
              {chiefProctorData.bio}
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "Hostel",
      label: "Hostel Management Committee",
      content: (
        <div>
          <h2>Hostel Management Committee</h2>
          <div className="table-responsive mt-[20px]">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th className="w-[60px]">S No.</th>
                  <th>Name of Candidate</th>
                  <th>Designation</th>
                </tr>
              </thead>
              <tbody>
                {hostelManagementData.members.map((m) => (
                  <tr key={m.sNo}>
                    <td>{m.sNo}.</td>
                    <td><strong>{m.name}</strong></td>
                    <td>{m.designation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
    {
      id: "Sports",
      label: "Internal Complaint Committee",
      content: (
        <div>
          <h2>Internal Complaint Committee</h2>
          <div className="mt-[20px]">
            <h3 className="text-[17px] text-primary mb-[8px]">OBJECTIVES</h3>
            <p className="text-[15px] leading-[1.8] text-justify mb-[20px]">
              {internalComplaintData.objectives}
            </p>

            <h3 className="text-[17px] text-primary mb-[8px]">FUNCTIONS</h3>
            <p className="text-[15px] mb-[8px]">The Internal Complaints Committee’s major functions entail:</p>
            <ul className="pl-[24px] text-[15px] leading-[1.8] mb-[24px]">
              {internalComplaintData.functions.map((fn, idx) => (
                <li key={idx}>{fn}</li>
              ))}
            </ul>

            <h3 className="text-[17px] text-primary mb-[12px]">COMPOSITION</h3>
            <p className="text-[14.5px] mb-[10px]">{internalComplaintData.compositionTitle}</p>
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th className="w-[50px]">S.No.</th>
                    <th>Names of Member</th>
                    <th>Designation</th>
                    <th>Status</th>
                    <th>Contact No.</th>
                  </tr>
                </thead>
                <tbody>
                  {internalComplaintData.members.map((m) => (
                    <tr key={m.sNo}>
                      <td>{m.sNo}.</td>
                      <td><strong>{m.name}</strong></td>
                      <td>{m.designation}</td>
                      <td><span className="badge">{m.role}</span></td>
                      <td>{m.contact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "Library_Committee",
      label: "Library Committee",
      content: (
        <div>
          <h2>Library Committee</h2>
          <div className="mt-[20px]">
            <h3 className="text-[17px] text-primary mb-[8px]">FUNCTION</h3>
            <p className="text-[15px] leading-[1.8] text-justify mb-[24px]">
              {libraryCommitteeData.function}
            </p>

            <h3 className="text-[17px] text-primary mb-[12px]">COMPOSITION</h3>
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Name of Member</th>
                    <th>Status</th>
                    <th>Phone Number</th>
                  </tr>
                </thead>
                <tbody>
                  {libraryCommitteeData.members.map((m, idx) => (
                    <tr key={idx}>
                      <td><strong>{m.name}</strong></td>
                      <td>{m.role}</td>
                      <td>{m.contact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "Instrumentation",
      label: "Minority Cell",
      content: (
        <div>
          <h2>Minority Cell</h2>
          <div className="mt-[20px]">
            <h3 className="text-[17px] text-primary mb-[8px]">POLICY</h3>
            <p className="text-[15px] leading-[1.8] text-justify mb-[20px]">
              {minorityCellData.policy}
            </p>

            <h3 className="text-[17px] text-primary mb-[8px]">Rules and Regulations</h3>
            <ul className="pl-[24px] text-[15px] leading-[1.8] mb-[20px]">
              {minorityCellData.rulesAndRegulations.map((rule, idx) => (
                <li key={idx}>{rule}</li>
              ))}
            </ul>

            <h3 className="text-[17px] text-primary mb-[8px]">Functions</h3>
            <ul className="pl-[24px] text-[15px] leading-[1.8] mb-[20px]">
              {minorityCellData.functions.map((fn, idx) => (
                <li key={idx}>{fn}</li>
              ))}
            </ul>

            <p className="text-[15px] leading-[1.8] text-justify mb-[24px]">
              {minorityCellData.closing}
            </p>

            <h3 className="text-[17px] text-primary mb-[12px]">Composition of Minority Cell</h3>
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Designation</th>
                    <th>Position in the Committee</th>
                  </tr>
                </thead>
                <tbody>
                  {minorityCellData.members.map((m, idx) => (
                    <tr key={idx}>
                      <td><strong>{m.name}</strong></td>
                      <td>{m.designation}</td>
                      <td><span className="badge">{m.role}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "Machine",
      label: "OBC Cell Composition",
      content: (
        <div>
          <h2>OBC Cell Composition</h2>
          <div className="mt-[20px]">
            <h3 className="text-[17px] text-primary mb-[8px]">OBC Cell Objectives</h3>
            <ul className="pl-[24px] text-[15px] leading-[1.8] mb-[20px]">
              {obcCellData.objectives.map((obj, idx) => (
                <li key={idx}>{obj}</li>
              ))}
            </ul>

            <h3 className="text-[17px] text-primary mb-[8px]">Functions of the OBC Cell</h3>
            <ul className="pl-[24px] text-[15px] leading-[1.8] mb-[20px]">
              {obcCellData.functions.map((fn, idx) => (
                <li key={idx}>{fn}</li>
              ))}
            </ul>

            <h3 className="text-[17px] text-primary mb-[8px]">OBC Cell Composition:</h3>
            <p className="text-[14.5px] mb-[12px]">{obcCellData.compositionIntro}</p>
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th className="w-[60px]">S.No.</th>
                    <th>Name</th>
                    <th>Designation</th>
                  </tr>
                </thead>
                <tbody>
                  {obcCellData.members.map((m) => (
                    <tr key={m.sNo}>
                      <td>{m.sNo}.</td>
                      <td><strong>{m.name}</strong></td>
                      <td>{m.designation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "Laboratories",
      label: "Research Advisory Committee",
      content: (
        <div>
          <h2>Research Advisory Committee</h2>
          <div className="mt-[20px]">
            <h3 className="text-[17px] text-primary mb-[8px]">Objectives</h3>
            <p className="text-[15px] leading-[1.8] text-justify mb-[20px]">
              {researchAdvisoryData.objectives}
            </p>

            <h3 className="text-[17px] text-primary mb-[8px]">Functions</h3>
            <p className="text-[15px] mb-[8px]">{researchAdvisoryData.functionsIntro}</p>
            <ul className="pl-[24px] text-[15px] leading-[1.8] mb-[24px]">
              {researchAdvisoryData.functions.map((fn, idx) => (
                <li key={idx}>{fn}</li>
              ))}
            </ul>

            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Member</th>
                    <th>Designation/ Status</th>
                  </tr>
                </thead>
                <tbody>
                  {researchAdvisoryData.members.map((m, idx) => (
                    <tr key={idx}>
                      <td><strong>{m.name}</strong></td>
                      <td>{m.designation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "Garden",
      label: "SC-ST committee",
      content: (
        <div>
          <h2>SC-ST committee</h2>
          <div className="mt-[20px]">
            <p className="text-[15px] leading-[1.8] text-justify mb-[20px]">
              {scStData.description}
            </p>

            <h3 className="text-[17px] text-primary mb-[8px]">Objectives</h3>
            <p className="text-[15px] mb-[8px]">The main objectives of SC/ST cell are as following:</p>
            <ul className="pl-[24px] text-[15px] leading-[1.8] mb-[24px]">
              {scStData.objectives.map((obj, idx) => (
                <li key={idx}>{obj}</li>
              ))}
            </ul>

            <h3 className="text-[17px] text-primary mb-[8px]">Composition</h3>
            <p className="text-[14.5px] mb-[10px]">SC/ST Committee comprises of following members:</p>
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Phone</th>
                  </tr>
                </thead>
                <tbody>
                  {scStData.members.map((m, idx) => (
                    <tr key={idx}>
                      <td><strong>{m.name}</strong></td>
                      <td>{m.role}</td>
                      <td>{m.contact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "Transportation",
      label: "Student Welfare Committee",
      content: (
        <div>
          <h2>Student Welfare Committee</h2>
          <div className="table-responsive mt-[20px]">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th className="w-[60px]">S. No.</th>
                  <th>Name of Faculty Members</th>
                  <th>Designation</th>
                  <th>Contact No</th>
                </tr>
              </thead>
              <tbody>
                {studentWelfareData.members.map((m) => (
                  <tr key={m.sNo}>
                    <td>{m.sNo}</td>
                    <td><strong>{m.name}</strong></td>
                    <td>{m.designation}</td>
                    <td>{m.contact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
    {
      id: "Gymnasium",
      label: "Students Grievance Redressal Cell",
      content: (
        <div>
          <h2>students Grievance Redressal Cell</h2>
          <div className="mt-[20px]">
            <p className="text-[15px] leading-[1.8] text-justify mb-[12px]">
              {studentGrievanceData.description}
            </p>
            <ul className="pl-[24px] text-[15px] leading-[1.8] mb-[20px]">
              {studentGrievanceData.channels.map((ch, idx) => (
                <li key={idx}>{ch}</li>
              ))}
            </ul>

            <h3 className="text-[17px] text-primary mb-[8px]">OBJECTIVES</h3>
            <ul className="pl-[24px] text-[15px] leading-[1.8] mb-[24px]">
              {studentGrievanceData.objectives.map((obj, idx) => (
                <li key={idx}>{obj}</li>
              ))}
            </ul>

            <h3 className="text-[17px] text-primary mb-[12px]">
              CONSTITUTION OF PHARMACY INSTITUTE&apos;S GRIEVANCE REDRESSAL CELL
            </h3>
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th className="w-[60px]">S.No</th>
                    <th>Name</th>
                    <th>Designation</th>
                    <th>Role</th>
                  </tr>
                </thead>
                <tbody>
                  {studentGrievanceData.members.map((m) => (
                    <tr key={m.sNo}>
                      <td>{m.sNo}.</td>
                      <td><strong>{m.name}</strong></td>
                      <td>{m.designation}</td>
                      <td>{m.role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "Canteen",
      label: "Women Grievance Redressal Cell",
      content: (
        <div>
          <h2>WOMEN GRIEVANCE REDRESSAL CELL</h2>
          <div className="mt-[20px]">
            <h3 className="text-[18px] text-primary mb-[12px]">
              {womenGrievanceData.ruleTitle}
            </h3>

            <h4 className="text-[16px] text-secondary mb-[8px]">1. Background</h4>
            <div className="flex flex-col gap-[8px] text-[14.5px] leading-[1.7] text-justify mb-[16px]">
              {womenGrievanceData.background.map((bg, idx) => (
                <p key={idx} className="m-[0]">{bg}</p>
              ))}
            </div>

            <h4 className="text-[16px] text-secondary mb-[8px]">
              2. Objectives and Scope of the Rules against Sexual Harassment
            </h4>
            <div className="flex flex-col gap-[8px] text-[14.5px] leading-[1.7] text-justify mb-[16px]">
              {womenGrievanceData.objectivesAndScope.map((obj, idx) => (
                <p key={idx} className="m-[0]">{obj}</p>
              ))}
            </div>

            <h4 className="text-[16px] text-secondary mb-[8px]">
              3. Definitions of Sexual Harassment
            </h4>
            <p className="text-[14.5px] leading-[1.7] mb-[8px]">
              {womenGrievanceData.definitions.intro}
            </p>
            <ul className="pl-[24px] text-[14.5px] leading-[1.7] mb-[10px]">
              {womenGrievanceData.definitions.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <div className="flex flex-col gap-[8px] text-[14.5px] leading-[1.7] text-justify mb-[20px]">
              {womenGrievanceData.definitions.details.map((det, idx) => (
                <p key={idx} className="m-[0]">{det}</p>
              ))}
            </div>

            <h3 className="text-[17px] text-primary mb-[8px]">Gender Sensitization</h3>
            <p className="text-[15px] leading-[1.8] text-justify mb-[20px]">
              {womenGrievanceData.genderSensitization}
            </p>

            <h3 className="text-[17px] text-primary mb-[8px]">
              Women Grievance Redressal Cell(WGRC)
            </h3>
            <div className="flex flex-col gap-[10px] text-[14.5px] leading-[1.7] text-justify mb-[20px]">
              {womenGrievanceData.wgrcDescription.map((desc, idx) => (
                <p key={idx} className="m-[0]">{desc}</p>
              ))}
            </div>

            <h3 className="text-[17px] text-primary mb-[8px]">Duties and Responsibilities</h3>
            <ul className="pl-[24px] text-[14.5px] leading-[1.8] mb-[24px]">
              {womenGrievanceData.dutiesAndResponsibilities.map((duty, idx) => (
                <li key={idx}>{duty}</li>
              ))}
            </ul>

            <h3 className="text-[17px] text-primary mb-[12px]">
              Composition of Women Grievance Redressal Cell (WGRC)
            </h3>
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th className="w-[50px]">S.No.</th>
                    <th>Name</th>
                    <th>Role in Committee</th>
                    <th>Phone</th>
                  </tr>
                </thead>
                <tbody>
                  {womenGrievanceData.members.map((m) => (
                    <tr key={m.sNo}>
                      <td>{m.sNo}.</td>
                      <td><strong>{m.name}</strong></td>
                      <td>{m.role}</td>
                      <td>{m.contact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div>
      <Banner
        title="Committee"
        backgroundImage="/images/infrabanner.jpg"
        mobileBackgroundImage="/images/inframobbanner.jpg"
      />

      <section className="section-pad">
        <div className="container">
          <TabbedContent tabs={tabs} defaultTabId="Classrooms" />
        </div>
      </section>
    </div>
  );
}

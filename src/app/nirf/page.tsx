import React from "react";
import { Metadata } from "next";
import { Banner } from "@/components/Banner";
import { nirfReportsData } from "@/data/nirf";

export const metadata: Metadata = {
  title: "NIRF Ranking Reports | NIET Pharmacy | Top 37th Pharmacy Institute in India",
  description:
    "NIET Pharmacy is consistently ranked among the top pharmacy institutes in India by NIRF. Check our latest NIRF 2024 ranking (#37) and reports.",
};

export default function NIRFPage() {
  return (
    <div>
      <Banner
        title="NIRF"
      />

      <section className="section-pad">
        <div className="container">
          <div className="table-responsive">
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <th>Title</th>
                  <th>Download</th>
                </tr>
                {nirfReportsData.map((report) => (
                  <tr key={report.title}>
                    <td>{report.title}</td>
                    <td>
                      <a href={report.pdfUrl} target="_blank" rel="noopener noreferrer" className="appr-download-link">
                        Download PDF ↓
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

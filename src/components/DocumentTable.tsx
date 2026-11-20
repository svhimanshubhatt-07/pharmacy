import React from "react";

export interface DocumentRow {
  sNo?: number | string;
  title: string;
  pdfUrl: string;
  category?: string;
  year?: string;
  actionText?: string;
}

interface DocumentTableProps {
  documents: DocumentRow[];
  caption?: string;
}

export const DocumentTable: React.FC<DocumentTableProps> = ({
  documents,
  caption,
}) => {
  return (
    <div
      className="appr-table-wrap mb-6"
      role="region"
      aria-label={caption || "Documents Register"}
      tabIndex={0}
    >
      {caption && (
        <h3 className="text-xl font-bold text-gray-900 mb-4">{caption}</h3>
      )}
      <table
        className="appr-table appr-table-3col w-full table-fixed"
        style={{ tableLayout: "fixed", width: "100%" }}
      >
        <caption className="sr-only">
          {caption || "Documents and Statutory Records"}
        </caption>
        <colgroup>
          <col style={{ width: "80px" }} />
          <col />
          <col style={{ width: "260px" }} />
        </colgroup>
        <thead>
          <tr>
            <th
              scope="col"
              className="appr-th-sno text-center"
              style={{ width: "80px", textAlign: "center" }}
            >
              S.No
            </th>
            <th
              scope="col"
              className="appr-th-agency !text-left"
              style={{ textAlign: "left" }}
            >
              Title
            </th>
            <th
              scope="col"
              className="appr-th-download text-center"
              style={{ width: "260px", textAlign: "center" }}
            >
              Download
            </th>
          </tr>
        </thead>
        <tbody>
          {documents.map((doc, idx) => (
            <tr key={idx}>
              <td
                className="appr-td-center font-medium text-center"
                style={{ width: "80px", textAlign: "center" }}
              >
                {doc.sNo ?? idx + 1}
              </td>
              <td
                className="appr-td-agency font-semibold text-slate-900 !text-left"
                style={{ textAlign: "left" }}
              >
                {doc.title}
                {doc.category && (
                  <span className="badge ml-2 bg-red-50 text-[#cf1427] font-semibold text-xs px-2 py-0.5 rounded">
                    {doc.category}
                  </span>
                )}
              </td>
              <td
                className="appr-td-center text-center"
                style={{ width: "260px", textAlign: "center" }}
              >
                <div className="flex flex-col items-center justify-center gap-1.5 w-full">
                  <a
                    href={doc.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="appr-download-link w-[160px] min-w-[160px] max-w-[160px] text-center justify-center"
                  >
                    {doc.actionText
                      ? doc.actionText.includes("↓")
                        ? doc.actionText
                        : `${doc.actionText} ↓`
                      : "Download PDF ↓"}
                  </a>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DocumentTable;

export interface ApprovalSession {
  id: string;
  session: string;
  documents: {
    title: string;
    pdfUrl: string;
  }[];
}

export const approvalsData: ApprovalSession[] = [
  {
    id: "Approval2526",
    session: "APPROVAL 2025-26",
    documents: [
      { title: "CCSEA APPROVAL 2025-26", pdfUrl: "/pdf/app-and-aff/approval-2025-26/CCSEA APPROVAL 2025-26.pdf" },
      { title: "NBA APPROVAL 2024-27", pdfUrl: "/pdf/app-and-aff/approval-2025-26/NBA APPROVAL 2024-27.pdf" },
      { title: "PCI APPROVAL 2025-26", pdfUrl: "/pdf/app-and-aff/approval-2025-26/PCI_APPROVAL_2025-26.pdf" },
      { title: "UPBTE APPROVAL 2025-26", pdfUrl: "/pdf/UPBTE_APPROVAL_2025-26_1_.pdf" },
    ],
  },
  {
    id: "Approval2225",
    session: "APPROVAL 2024-25",
    documents: [
      { title: "NBA APPROVAL 2024-27", pdfUrl: "/pdf/app-and-aff/approval-2024-25/NBA_APPROVAL_2024-25.pdf" },
      { title: "CPCSEA APPROVAL 2024-25", pdfUrl: "/pdf/app-and-aff/approval-2024-25/CPCSEA APPROVAL 2024-25.pdf" },
      { title: "UPBTE APPROVAL 2024-25", pdfUrl: "/pdf/app-and-aff/approval-2024-25/UPBTE APPROVAL 2024-25.pdf" },
      { title: "AKTU APPROVAL 2024-25", pdfUrl: "/pdf/app-and-aff/approval-2024-25/AKTU_APPROVAL_2024-25.pdf" },
      { title: "NIRF APPROVAL 2024", pdfUrl: "/pdf/app-and-aff/approval-2024-25/NIRF-APPROVAL-2024.pdf" },
      { title: "PCI APPROVAL 2024-25", pdfUrl: "/pdf/app-and-aff/approval-2024-25/PCI-APPROVAL-2024-25.pdf" },
    ],
  },
  {
    id: "Approval2224",
    session: "APPROVAL 2023-24",
    documents: [
      { title: "AKTU APPROVAL 2023-2024", pdfUrl: "/pdf/app-and-aff/approval-2023-24/AKTU-APPROVAL-2023-24.pdf" },
      { title: "CPCSEA APPROVAL 2023-2024", pdfUrl: "/pdf/app-and-aff/approval-2023-24/CPCSEA-APPROVAL-2023-2024.pdf" },
      { title: "NBA APPROVAL 2021-2024", pdfUrl: "/pdf/app-and-aff/approval-2023-24/NBA-APPROVAL-2021-2024.pdf" },
      { title: "NIRF APPROVAL 2023", pdfUrl: "/pdf/app-and-aff/approval-2023-24/NIRF-APPROVAL-2023.pdf" },
      { title: "PCI APPROVAL 2023-24", pdfUrl: "/pdf/app-and-aff/approval-2023-24/PCI-APPROVAL-2023-24.pdf" },
      { title: "UPBTE APPROVAL 2023-24", pdfUrl: "/pdf/app-and-aff/approval-2023-24/UPBTE-APPROVAL-2023-24.pdf" },
    ],
  },
  {
    id: "Approval2223",
    session: "APPROVAL 2022-23",
    documents: [
      { title: "AICTE APPROVAL 2022-2023", pdfUrl: "/pdf/app-and-aff/approval-2022-23/AICTE-APPROVAL-2022-23.pdf" },
      { title: "AKTU APPROVAL 2022-2023", pdfUrl: "/pdf/app-and-aff/approval-2022-23/AKTU-APPROVAL-2022-23.pdf" },
      { title: "BTE APPROVAL 2022-2023", pdfUrl: "/pdf/app-and-aff/approval-2022-23/BTE-APPROVAL-2022-23.pdf" },
      { title: "CPCSEA APPROVAL 2022-2023", pdfUrl: "/pdf/app-and-aff/approval-2022-23/CPCSEA-APPROVAL-2022-23.pdf" },
      { title: "PCI APPROVAL 2022-2023", pdfUrl: "/pdf/app-and-aff/approval-2022-23/PCI-APPROVAL-2022-23.pdf" },
      { title: "NBA APPROVAL 2022-2023", pdfUrl: "/pdf/app-and-aff/approval-2022-23/NBA-APPROVAL-2022-2023.pdf" },
      { title: "NIRF-APPROVAL 2022", pdfUrl: "/pdf/app-and-aff/approval-2022-23/NIRF-APPROVAL-2022.pdf" },
    ],
  },
  {
    id: "Approval2122",
    session: "Approval 2021-22",
    documents: [
      { title: "NIRF APPROVAL 2021", pdfUrl: "/pdf/app-and-aff/approval-2021-22/NIRF APRROVAL 2021.jpg" },
      { title: "CPCSEA APPROVAL 2021-22", pdfUrl: "/pdf/app-and-aff/approval-2021-22/cpcsea-approval-2021-22.pdf" },
      { title: "AICTE APPROVAL 2021-22", pdfUrl: "/pdf/app-and-aff/approval-2021-22/aicte-eoa-report-21-22.pdf" },
      { title: "BTE APPROVAL 2021-22", pdfUrl: "/pdf/app-and-aff/approval-2021-22/bte-approval-2021-22.pdf" },
      { title: "NBA APPROVAL 2021", pdfUrl: "/pdf/app-and-aff/approval-2021-22/nba-approval-2021.pdf" },
      { title: "PCI APPROVAL 2021", pdfUrl: "/pdf/app-and-aff/approval-2021-22/pci-approval-2021.pdf" },
    ],
  },
  {
    id: "Approval2021",
    session: "Approval 2020-21",
    documents: [
      { title: "NIRF APPROVAL 2021", pdfUrl: "/pdf/app-and-aff/approval-2020-21/NIRF APRROVAL 2021.jpg" },
      { title: "AICTE APPROVAL 2020-21", pdfUrl: "/pdf/app-and-aff/approval-2020-21/aicte-eoa-report-2020-21.pdf" },
      { title: "AKTU APPROVAL 20-21", pdfUrl: "/pdf/app-and-aff/approval-2020-21/aktu-approval-20-21.pdf" },
      { title: "BTE APPROVAL 2021-22", pdfUrl: "/pdf/app-and-aff/approval-2020-21/bte-approval-2020-21.pdf" },
      { title: "CPCSEA APPROVAL 2020-21", pdfUrl: "/pdf/app-and-aff/approval-2020-21/cpcsea-approval-2020-21.pdf" },
      { title: "NBA EXTENSION 2020-2021", pdfUrl: "/pdf/app-and-aff/approval-2020-21/nba-extension-2020-2021.pdf" },
      { title: "PCI APPROVAL 2021", pdfUrl: "/pdf/app-and-aff/approval-2020-21/pci-approval-2020-21.pdf" },
      { title: "NIRF 2020", pdfUrl: "/pdf/app-and-aff/approval-2020-21/nirf-2020.pdf" },
    ],
  },
  {
    id: "Approval1920",
    session: "Approval 2019-20",
    documents: [
      { title: "AICTE APPROVAL 2019-20", pdfUrl: "/pdf/app-and-aff/approval-2019-20/aicte-approval-19-20.pdf" },
      { title: "AKTU APPROVAL 2019-20", pdfUrl: "/pdf/app-and-aff/approval-2019-20/aktu-approval-908-2019-20.pdf" },
      { title: "BTE APPROVAL 2019-20", pdfUrl: "/pdf/app-and-aff/approval-2019-20/bte-approval-2019-20.pdf" },
      { title: "CPCSEA APPROVAL 2019-20", pdfUrl: "/pdf/app-and-aff/approval-2019-20/cpcsea-approval-2019-20.pdf" },
      { title: "NBA ACCREDITATION 2017-20", pdfUrl: "/pdf/app-and-aff/approval-2019-20/nba-accreditation-2017-20.pdf" },
      { title: "PCI APPROVAL 2019-20", pdfUrl: "/pdf/app-and-aff/approval-2019-20/pci-approval-2019-20.pdf" },
      { title: "NIRF 2019", pdfUrl: "/pdf/app-and-aff/approval-2019-20/nirf-2019.pdf" },
    ],
  },
  {
    id: "Approval1819",
    session: "Approval 2018-19",
    documents: [
      { title: "AICTE APPROVAL 2018-19", pdfUrl: "/pdf/app-and-aff/approval-2018-19/aicte-approval-2018-19.pdf" },
      { title: "CPCSEA APPROVAL 2018-19", pdfUrl: "/pdf/app-and-aff/approval-2018-19/cpcsea-approval-2018-19.pdf" },
      { title: "PCI APPROVAL 2018-19", pdfUrl: "https://nietpharmacy.co.in/pdf/app-and-aff/approval-2018-19/pci-approval-2018-19.pdf" },
      { title: "NIRF 2018", pdfUrl: "/pdf/app-and-aff/approval-2018-19/nirf-2018.pdf" },
      { title: "NBA ACCREDITATION 2017-20", pdfUrl: "/pdf/app-and-aff/approval-2018-19/nba-accreditation-2017-20.pdf" },
    ],
  },
];

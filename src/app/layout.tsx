// import type { Metadata } from "next";
// import "./global.css";
// import { Header } from "@/components/Header";
// import { Footer } from "@/components/Footer";

// export const metadata: Metadata = {
//   title: {
//     default: "NIET Pharmacy | Top 37th NIRF Ranked Pharmacy Institute in India",
//     template: "%s | NIET Pharmacy",
//   },
//   description:
//     "NIET Pharmacy is India's premier pharmacy institute, ranked 37th in NIRF 2024. Explore our B.Pharm, D.Pharm, and M.Pharm programs with top-tier placements and state-of-the-art R&D.",
//   keywords: [
//     "NIET Pharmacy",
//     "Top Pharmacy Institute India",
//     "NIRF Rank 37 Pharmacy",
//     "B.Pharm Admissions Greater Noida",
//     "Best Pharmacy College Delhi NCR",
//   ],
//   icons: {
//     icon: [
//       { url: "https://res.cloudinary.com/boss8zib/image/upload/v1793435192/Favicon.png", type: "image/png" },
//     ],
//     shortcut: "https://res.cloudinary.com/boss8zib/image/upload/v1793435192/Favicon.png",
//     apple: "https://res.cloudinary.com/boss8zib/image/upload/v1793435192/Favicon.png",
//   },
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <head>
//         <link rel="icon" href="https://res.cloudinary.com/boss8zib/image/upload/v1793435192/Favicon.png" type="image/png" />
//         <link rel="shortcut icon" href="https://res.cloudinary.com/boss8zib/image/upload/v1793435192/Favicon.png" type="image/png" />
//         <link rel="apple-touch-icon" href="https://res.cloudinary.com/boss8zib/image/upload/v1793435192/Favicon.png" />
//       </head>
//       <body>
//         <Header />
//         <main>{children}</main>
//         <Footer />
//       </body>
//     </html>
//   );
// }

import type { Metadata, Viewport } from "next";
import "./global.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SiteScrollObserver } from "@/components/SiteScrollObserver";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "NIET Pharmacy | Top 37th NIRF Ranked Pharmacy Institute in India",
    template: "%s | NIET Pharmacy",
  },
  description:
    "NIET Pharmacy is India's premier pharmacy institute, ranked 37th in NIRF 2024. Explore our B.Pharm, D.Pharm, and M.Pharm programs with top-tier placements and state-of-the-art R&D.",
  keywords: [
    "NIET Pharmacy",
    "Top Pharmacy Institute India",
    "NIRF Rank 37 Pharmacy",
    "B.Pharm Admissions Greater Noida",
    "Best Pharmacy College Delhi NCR",
  ],
  icons: {
    icon: [
      { url: "https://res.cloudinary.com/boss8zib/image/upload/v1793435192/Favicon.png", type: "image/png" },
    ],
    shortcut: "https://res.cloudinary.com/boss8zib/image/upload/v1793435192/Favicon.png",
    apple: "https://res.cloudinary.com/boss8zib/image/upload/v1793435192/Favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <SiteScrollObserver />
      </body>
    </html>
  );
}
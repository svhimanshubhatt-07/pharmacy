import React from "react";
import Link from "next/link";
import type { LeadershipMessageData } from "@/data/leadership";

export interface LeadershipMessageProps {
  message: LeadershipMessageData;
}

export function LeadershipMessage({ message }: LeadershipMessageProps) {
  return (
    <main className="bg-white text-gray-900 py-8 sm:py-10 lg:py-14">
      {/* 
        Figma Exact Frame Specification:
        Frame: 1440px
        Margin (horizontal padding): 80px
        Inner Content Width: 1440 - (80 * 2) = 1280px
        Gutter: 24px
        Columns: 12 Columns
      */}
      <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-[80px]">
        {/* 1. Breadcrumb */}
        <nav
          className="flex items-center gap-2 text-[12px] font-medium text-gray-500 uppercase tracking-wider mb-6"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="hover:text-[#cf1427] transition-colors no-underline hover:no-underline">
            Home
          </Link>
          <span>/</span>
          <Link href="/about" className="hover:text-[#cf1427] transition-colors no-underline hover:no-underline">
            About
          </Link>
          <span>/</span>
          <span className="text-[#cf1427] font-bold" aria-current="page">
            MESSAGE
          </span>
        </nav>

        {/* 2. Page Header */}
        <header className="mb-10 lg:mb-14">
          <h1 className="text-2xl sm:text-3xl lg:text-[38px] font-extrabold text-gray-900 uppercase tracking-tight leading-[1.15] m-0">
            <span className="block font-bold text-gray-800 text-xl sm:text-2xl lg:text-3xl mb-1">
              FROM THE DESK OF THE
            </span>
            <span>{message.titleRole}</span>
          </h1>
          <p className="font-serif italic text-[#cf1427] text-lg lg:text-xl mt-3 m-0">
            {message.tagline}
          </p>
        </header>

        {/* 
          3. Hero Section (Figma Exact: W 1280px Hug x H 559px Hug)
          - Left Portrait Frame: W 590.11px x H 548.36px with Red Corner Line Accents
          - Right Quote Frame: W 650px x H 441px
          - Gap between them: 40px (590 + 40 + 650 = 1280px)
        */}
        <div className="w-full max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-[590px_650px] gap-8 xl:gap-[40px] items-start justify-between mb-16 lg:mb-20">
          {/* Left: Leader Portrait Frame (W 590px x H 548px) with Corner Accents & 100px BR Curve */}
          <div className="relative w-full max-w-[590px] aspect-[590/548] mx-auto lg:mx-0 shrink-0">
            {/* Top-Left Red Corner Line Bracket (Sharp 90deg corner, 3px solid #cf1427) */}
            <svg
              className="absolute -top-3.5 -left-3.5 w-44 sm:w-56 h-36 sm:h-48 pointer-events-none z-20"
              viewBox="0 0 224 192"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M 224 1.5 L 1.5 1.5 L 1.5 192"
                stroke="#cf1427"
                strokeWidth="3"
                strokeLinecap="square"
              />
            </svg>

            {/* Bottom-Right Red Corner Line Bracket (Sharp 90deg corner, 3px solid #cf1427 framing 100px curve) */}
            <svg
              className="absolute -bottom-3.5 -right-3.5 w-44 sm:w-56 h-36 sm:h-48 pointer-events-none z-20"
              viewBox="0 0 224 192"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M 0 190.5 L 222.5 190.5 L 222.5 0"
                stroke="#cf1427"
                strokeWidth="3"
                strokeLinecap="square"
              />
            </svg>

            {/* Photo Container with Figma Exact 100px Bottom-Right Radius */}
            <div
              className="relative z-10 w-full h-full overflow-hidden bg-gray-50 shadow-sm border border-gray-100 rounded-br-[70px] sm:rounded-br-[100px] [border-radius:0_0_100px_0]"
              style={{ borderRadius: "0 0 100px 0" }}
            >
              <img
                src={message.image}
                alt={message.name}
                className="w-full h-full object-cover object-top block rounded-br-[70px] sm:rounded-br-[100px] [border-radius:0_0_100px_0]"
                style={{ borderRadius: "0 0 100px 0" }}
              />
            </div>
          </div>

          {/* Right: Quote Block & Designation (W 650px x H 441px) - Sticky */}
          <div className="w-full max-w-[650px] flex flex-col justify-center lg:sticky lg:top-28 self-start">
            {/* Red Quote Mark Asset from Figma (Exact 90.47px x 65.41px) */}
            <img
              src="/images/quote-mark.png"
              alt=""
              aria-hidden="true"
              className="w-[76px] sm:w-[90.47px] h-auto max-h-[65.41px] object-contain mb-5 block select-none"
              width={90}
              height={65}
            />

            {/* Quote Text */}
            <blockquote className="m-0 p-0 border-none">
              <p className="font-serif text-2xl sm:text-3xl lg:text-[32px] text-gray-900 leading-[1.3] tracking-tight m-0 font-normal">
                {message.quote}
              </p>
              {message.quoteAttribution && (
                <footer
                  className="font-serif italic text-[17px] lg:text-[19px] text-[#cf1427] font-semibold mt-3.5"
                  style={{ color: "#cf1427" }}
                >
                  {message.quoteAttribution}
                </footer>
              )}
            </blockquote>

            {/* Red Accent Divider Line */}
            <div className="w-full h-[2.5px] bg-[#cf1427] mt-6 mb-4" />

            {/* Name & Title */}
            <div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 m-0 leading-snug">
                {message.name}
              </h3>
              <span className="block text-xs lg:text-[13px] font-semibold text-gray-500 uppercase tracking-widest mt-1">
                {message.designation}
              </span>
            </div>
          </div>
        </div>

        {/* 
          4. Bottom Section: The Message Content
          Direct message start across the 1280px frame
        */}
        <div className="w-full max-w-[1280px] mx-auto pt-10 lg:pt-14 border-t border-gray-100">
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-gray-900 leading-snug mb-7 m-0">
            {message.headline}
          </h2>
          <div
            className="space-y-6 text-[16px] leading-[1.8] text-gray-700 font-normal text-justify"
            style={{ fontSize: "16px", lineHeight: "1.8" }}
          >
            {message.paragraphs.map((p, idx) => (
              <p
                key={idx}
                className="m-0 text-[16px] leading-[1.8]"
                style={{ fontSize: "16px", lineHeight: "1.8" }}
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default LeadershipMessage;

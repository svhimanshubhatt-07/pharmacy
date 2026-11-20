"use client";

import React, { useState } from "react";
import Link from "next/link";

export interface CourseFaqItem {
  question: string;
  answer: string;
}

interface CourseFaqProps {
  items: CourseFaqItem[];
  title?: string;
  subtitle?: string;
  showActionBar?: boolean;
}

export function CourseFaq({
  items,
  title = "Frequently Asked Questions",
  showActionBar = true,
}: CourseFaqProps) {
  const [activeFaqIndex, setActiveFaqIndex] = useState<number>(0);

  return (
    <section aria-label="Frequently Asked Questions" className="w-full bg-white py-12 md:py-16">
      <div className="hp-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Column: Heading and Question Items List */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <h2 className="hp-title text-[26px] md:text-[30px] font-bold text-[#1e293b] font-heading leading-tight tracking-tight mb-5 md:mb-6 text-left">
                {title}
              </h2>

              <div className="flex flex-col space-y-3 sm:space-y-3.5">
                {items.map((faq, idx) => {
                  const isActive = activeFaqIndex === idx;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveFaqIndex(idx)}
                      style={{
                        border: isActive ? "none" : "1px solid #e2e8f0",
                        outline: "none",
                        boxShadow: isActive ? "0 2px 8px 0 rgba(196, 18, 26, 0.2)" : "none",
                      }}
                      className={`w-full px-5 sm:px-6 py-3.5 sm:py-4 rounded-none text-left flex items-center justify-between gap-4 transition-all duration-200 cursor-pointer ${
                        isActive
                          ? "bg-[#c4121a] text-white"
                          : "bg-white text-gray-800 hover:border-gray-400 hover:bg-gray-50/70"
                      }`}
                    >
                      <span
                        className={`font-semibold text-sm sm:text-base md:text-[15.5px] leading-snug tracking-tight font-sans ${
                          isActive ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {faq.question}
                      </span>

                      {isActive ? (
                        /* Right arrow when active */
                        <svg
                          className="w-4 h-4 text-white shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 12h16m0 0l-6-6m6 6l-6 6" />
                        </svg>
                      ) : (
                        /* Downward red arrow when inactive */
                        <svg
                          className="w-4 h-4 text-[#c4121a] shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m0 0l-6-6m6 6l6-6" />
                        </svg>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Dark Display Card — Top Aligned with Heading, Bottom Aligned with Last Question */}
          <div className="lg:col-span-6 flex flex-col">
            {(() => {
              const activeFaq = items[activeFaqIndex] || items[0];
              return (
                <div className="bg-[#121212] text-white rounded-none rounded-br-[28px] sm:rounded-br-[36px] p-7 sm:p-9 md:p-10 shadow-xl flex flex-col justify-start h-full border border-neutral-800">
                  <h3 className="text-white font-bold text-lg sm:text-xl md:text-2xl leading-snug mb-4 font-sans tracking-tight">
                    {activeFaq.question}
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-sans">
                    {activeFaq.answer}
                  </p>
                </div>
              );
            })()}
          </div>
        </div>

        {/* Bottom Action Bar */}
        {showActionBar && (
          <div className="mt-8 pt-6 border-t border-gray-300 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm sm:text-base text-gray-700 font-sans">
              Need more information? Explore our comprehensive FAQ section or call admissions.
            </p>
            <Link
              href="/admissions/faq"
              className="px-6 py-2.5 rounded-lg bg-[#c4121a] hover:bg-[#a50e15] !text-white text-xs sm:text-sm font-semibold transition-colors shadow-sm inline-flex items-center gap-2 no-underline hover:no-underline shrink-0"
            >
              <span className="!text-white no-underline">Browse All FAQs</span>
              <span className="!text-white no-underline">&rarr;</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { contactInfo } from "@/data/contact";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    agree: false,
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Contact Us | NIET Pharmacy Institute";
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, agree: e.target.checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full min-h-screen bg-[#FAF8F5] text-gray-900 font-sans selection:bg-[#cf1427] selection:text-white">
      <main className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20 box-border">
        {/* ========================================================= */}
        {/* SECTION 1: CONTACT US (Hero + Left Details + Right Form) */}
        {/* ========================================================= */}
        <div>
          <h1 className="text-4xl sm:text-6xl lg:text-[76px] font-black uppercase tracking-tight text-gray-950 leading-none mb-8 sm:mb-14 m-0">
            CONTACT US
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left Column: Description + Details + Socials */}
            <div className="lg:col-span-6 flex flex-col">
              <p className="text-[15px] sm:text-[17px] text-gray-700 leading-relaxed font-normal mb-8 sm:mb-10 max-w-xl">
                NIET Pharmacy Institute is conveniently located in the Knowledge Park-II institutional hub of Greater Noida. You can contact us via e-mail, phone, or simply walk in.
              </p>

              {/* Address with Arrow */}
              <div className="mb-7">
                <a
                  href="https://maps.google.com/?q=NIET+Pharmacy+Institute+C+Block+Greater+Noida"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[17px] sm:text-[19px] font-bold text-gray-900 hover:text-[#cf1427] transition-colors group no-underline leading-snug"
                >
                  <span>19, Knowledge Park-II, Institutional Area, Greater Noida, UP 201306</span>
                  <span className="transition-transform group-hover:translate-x-1 font-normal text-xl select-none">
                    →
                  </span>
                </a>
                <p className="text-[13.5px] text-gray-500 mt-1.5 font-medium tracking-normal">
                  Monday – Saturday | 9:00 am-5:30 pm
                </p>
              </div>

              {/* Phone with Arrow */}
              <div className="mb-6 flex flex-col gap-2">
                <a
                  href="tel:+918010500700"
                  className="inline-flex items-center gap-2 text-[17px] sm:text-[19px] font-bold text-gray-900 hover:text-[#cf1427] transition-colors group no-underline w-fit"
                >
                  <span>+91-801 050 0700</span>
                  <span className="transition-transform group-hover:translate-x-1 font-normal text-xl select-none">
                    →
                  </span>
                </a>
                <a
                  href="tel:+918448384611"
                  className="inline-flex items-center gap-2 text-[17px] sm:text-[19px] font-bold text-gray-900 hover:text-[#cf1427] transition-colors group no-underline w-fit"
                >
                  <span>+91-844 838 4611</span>
                  <span className="transition-transform group-hover:translate-x-1 font-normal text-xl select-none">
                    →
                  </span>
                </a>
              </div>

              {/* Email with Arrow */}
              <div className="mb-8 flex flex-col gap-2">
                <a
                  href="mailto:admission@niet.co.in"
                  className="inline-flex items-center gap-2 text-[17px] sm:text-[19px] font-bold text-gray-900 hover:text-[#cf1427] transition-colors group no-underline w-fit"
                >
                  <span>admission@niet.co.in</span>
                  <span className="transition-transform group-hover:translate-x-1 font-normal text-xl select-none">
                    →
                  </span>
                </a>
                <a
                  href="mailto:directorpharmacy@niet.co.in"
                  className="inline-flex items-center gap-2 text-[17px] sm:text-[19px] font-bold text-gray-900 hover:text-[#cf1427] transition-colors group no-underline w-fit"
                >
                  <span>directorpharmacy@niet.co.in</span>
                  <span className="transition-transform group-hover:translate-x-1 font-normal text-xl select-none">
                    →
                  </span>
                </a>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-2.5 mt-2">
                <a
                  href="https://www.facebook.com/profile.php?id=100057204470453"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-8 h-8 rounded bg-gray-900 text-white flex items-center justify-center hover:bg-[#cf1427] transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/niet_pharmacy_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded bg-gray-900 text-white flex items-center justify-center hover:bg-[#cf1427] transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/niet-pharmacy-institute-greater-noida/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-8 h-8 rounded bg-gray-900 text-white flex items-center justify-center hover:bg-[#cf1427] transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Column: Form Box Card */}
            <div className="lg:col-span-6">
              <div className="bg-white/80 border border-gray-200/90 rounded p-6 sm:p-10 shadow-[0_1px_4px_rgba(0,0,0,0.03)] backdrop-blur-sm">
                <h3 className="text-sm sm:text-base font-semibold text-gray-800 m-0 mb-6">
                  Chat with us or fill out this form:
                </h3>

                {submitted ? (
                  <div className="py-8 text-center animate-fadeIn">
                    <div className="w-12 h-12 rounded-full bg-[#cf1427]/10 text-[#cf1427] mx-auto flex items-center justify-center mb-3">
                      <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Thank you!</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Your query has been submitted. Our admissions counselor will contact you shortly.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: "", email: "", phone: "", message: "", agree: false });
                      }}
                      className="text-xs font-semibold text-[#cf1427] hover:underline cursor-pointer"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-transparent border-0 border-b border-gray-300 py-3 text-[15px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-gray-900 transition-colors"
                      />
                    </div>

                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-transparent border-0 border-b border-gray-300 py-3 text-[15px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-gray-900 transition-colors"
                      />
                    </div>

                    <div>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number (10 Digits)"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-transparent border-0 border-b border-gray-300 py-3 text-[15px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-gray-900 transition-colors"
                      />
                    </div>

                    <div>
                      <textarea
                        name="message"
                        placeholder="Describe your project"
                        rows={3}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-transparent border-0 border-b border-gray-300 py-3 text-[15px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-gray-900 transition-colors resize-none"
                      />
                    </div>

                    <div className="flex items-start gap-2.5 pt-2">
                      <input
                        type="checkbox"
                        id="agree"
                        required
                        checked={formData.agree}
                        onChange={handleCheckboxChange}
                        className="mt-1 h-3.5 w-3.5 rounded border-gray-300 text-[#cf1427] focus:ring-0 cursor-pointer"
                      />
                      <label htmlFor="agree" className="text-xs text-gray-500 leading-snug cursor-pointer select-none">
                        By submitting this form, you agree to our{" "}
                        <Link href="/policy" className="underline hover:text-gray-900">
                          [Privacy Policy]
                        </Link>
                        .
                      </label>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="bg-[#cf1427] hover:bg-[#a90f17] text-white font-semibold text-sm px-9 py-2.5 rounded transition-all shadow-sm cursor-pointer border-0"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* SECTION 2: HOW TO FIND US (Map with Button + 3 Photos Grid) */}
        {/* ========================================================= */}
        <div className="mt-20 sm:mt-28">
          <h2 className="text-3xl sm:text-5xl lg:text-[64px] font-black uppercase tracking-tight text-gray-950 leading-none mb-8 sm:mb-12 m-0">
            HOW TO FIND US
          </h2>

          {/* Full Width Map with 'Open in google maps' Floating Button */}
          <div className="relative w-full h-[360px] sm:h-[460px] border border-gray-200 bg-gray-100 overflow-hidden">
            <iframe
              title="NIET Pharmacy Institute C Block Location Map"
              src={contactInfo.mapEmbedUrl}
              width="100%"
              height="100%"
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
            />
            {/* Open in google maps button on bottom-left of map */}
            <div className="absolute bottom-4 left-4 z-10">
              <a
                href="https://maps.google.com/?q=NIET+Pharmacy+Institute+C+Block+Greater+Noida"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#cf1427] hover:bg-[#a90f17] text-white text-xs sm:text-sm font-semibold rounded shadow-md transition-colors no-underline"
              >
                <span>Open in google maps</span>
              </a>
            </div>
          </div>

          {/* 3 Photos Grid Below Map */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8">
            <div className="relative aspect-[16/10] sm:aspect-[4/3] overflow-hidden bg-gray-100 border border-gray-200 group">
              <img
                src="https://res.cloudinary.com/boss8zib/image/upload/hero_banner_1.png"
                alt="NIET Pharmacy Institute Campus Overview"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 block"
                loading="lazy"
              />
            </div>
            <div className="relative aspect-[16/10] sm:aspect-[4/3] overflow-hidden bg-gray-100 border border-gray-200 group">
              <img
                src="https://res.cloudinary.com/boss8zib/image/upload/Niet.jpg"
                alt="NIET Pharmacy Academic Block & Architecture"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 block"
                loading="lazy"
              />
            </div>
            <div className="relative aspect-[16/10] sm:aspect-[4/3] overflow-hidden bg-gray-100 border border-gray-200 group">
              <img
                src="https://res.cloudinary.com/boss8zib/image/upload/Classrooms.jpg"
                alt="NIET Pharmacy Department Entrance & Walkways"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 block"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
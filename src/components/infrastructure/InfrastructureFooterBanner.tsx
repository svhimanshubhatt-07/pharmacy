import React from "react";

export const InfrastructureFooterBanner: React.FC = () => {
  return (
    <section aria-label="Campus Excellence & Life" className="w-full mt-10 md:mt-16 p-0">
      <div className="w-full flex flex-col lg:flex-row items-start bg-[#c4121a] m-0 p-0 relative">
        {/* Left Column: Campus Life Photograph (Taller image that scrolls smoothly) */}
        <div className="w-full lg:w-[62%] xl:w-[65%] relative min-h-[380px] sm:min-h-[500px] lg:min-h-[780px] lg:h-[780px] bg-black">
          <img
            src="https://res.cloudinary.com/boss8zib/image/upload/v1793699882/Event-banner.jpg"
            alt="NIET Pharmacy Campus Life and Student Excellence"
            className="w-full h-full object-cover block"
            loading="lazy"
          />
        </div>

        {/* Right Column: Solid Red Content Block (Sticky at Top below header until image bottom aligns) */}
        <div className="w-full lg:w-[38%] xl:w-[35%] bg-[#c4121a] text-white p-7 sm:p-9 md:p-10 lg:p-12 lg:sticky lg:top-[135px] xl:top-[140px] z-10 self-start flex flex-col justify-start">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl xl:text-4xl font-extrabold font-heading text-white leading-tight mb-3.5 sm:mb-4">
            Excellence in the laboratories and on campus.
          </h2>

          {/* Description - Exactly 16px as requested */}
          <p
            className="!text-[16px] text-white/95 leading-[1.8] font-sans mb-6 sm:mb-8 text-justify"
            style={{ fontSize: "16px" }}
          >
            NIET Pharmacy Institute is ranked 37th in India (NIRF 2024), recognized for world-class infrastructure, cutting-edge drug research suites, and vibrant student life. From hands-on pilot plant manufacturing and CPCSEA in-vivo pharmacology to collegiate sports leagues, annual pharmacy fests, and high-impact placement drives—our students cultivate the technical mastery and leadership to pioneer healthcare solutions worldwide.
          </p>

          {/* Two White CTA Buttons with subtle rounded corners */}
          <div className="flex flex-col gap-3 w-full">
            <a
              href="/admissions"
              className="w-full bg-white text-[#c4121a] hover:bg-gray-100 font-bold text-center py-3.5 px-6 text-xs sm:text-sm uppercase tracking-wider rounded-[6px] transition-colors block no-underline shadow-md hover:no-underline"
            >
              Explore Academic Programmes
            </a>
            <a
              href="/admissions"
              className="w-full bg-white text-[#c4121a] hover:bg-gray-100 font-bold text-center py-3.5 px-6 text-xs sm:text-sm uppercase tracking-wider rounded-[6px] transition-colors block no-underline shadow-md hover:no-underline"
            >
              Apply for Admission 2026
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

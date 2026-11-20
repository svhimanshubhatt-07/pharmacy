"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { EventImage } from "@/components/HomePageInteractions";
import { eventAlbums, EventAlbum } from "@/data/events";

interface PageProps {
  searchParams: { event?: string };
}

function getEventDescription(album: EventAlbum): string {
  if (album.description) return album.description;
  if (album.title === "AI Workshop 2025") {
    return "The June 2026 convocation for the MBBS and M.S. Clinical Pharmacy graduating cohorts, photographed over 22 and Pharmacy graduating coho 23 June 2026.The June 2026 convocation for the MBBS and M.S. Clinical Pharmacy graduating cohorts, photographed over 22 and 23 June 2026.";
  }
  return `Highlights and photo gallery from ${album.title} organized at NIET Pharmacy Institute. Celebrating academic excellence, active student participation, and institutional milestones with distinguished faculty members and delegates.`;
}

export default function InnerEventsPage({ searchParams }: PageProps) {
  const rawEvent = searchParams?.event || "";
  const currentAlbum = eventAlbums.find(
    (a) => a.slug.toLowerCase() === rawEvent.toLowerCase()
  );

  // Initialize Fancybox (matching the exact thumbnail zoom effect on the press release page)
  useEffect(() => {
    // 1. Ensure Fancybox CSS is loaded
    if (!document.getElementById("fancybox-css")) {
      const link = document.createElement("link");
      link.id = "fancybox-css";
      link.rel = "stylesheet";
      link.href = "https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.css";
      document.head.appendChild(link);
    }

    // 2. Load jQuery and Fancybox JS sequentially
    const loadScript = (src: string, id: string): Promise<void> => {
      return new Promise((resolve) => {
        if (document.getElementById(id)) {
          resolve();
          return;
        }
        const s = document.createElement("script");
        s.id = id;
        s.src = src;
        s.onload = () => resolve();
        document.body.appendChild(s);
      });
    };

    let isMounted = true;
    loadScript("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js", "jquery-script")
      .then(() => loadScript("https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js", "fancybox-script"))
      .then(() => {
        if (!isMounted) return;
        const $ = (window as any).$;
        if ($ && $.fn && $.fn.fancybox) {
          $().fancybox({
            selector: '[data-fancybox="event-gallery"]',
            loop: true,
            animationEffect: "zoom",
            transitionEffect: "slide",
            buttons: [
              "zoom",
              "slideShow",
              "fullScreen",
              "download",
              "close"
            ]
          });
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="w-full max-w-full overflow-x-hidden bg-white animate-eventPageFadeIn">
      <main className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[80px] py-8 md:py-12 box-border">
        {currentAlbum ? (
          <div>
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-2 text-xs md:text-sm text-[#6b7280] mb-5">
              <Link href="/" className="text-[#6b7280] hover:text-[#111827] transition-colors no-underline">
                Home
              </Link>
              <span className="text-[#9ca3af]">/</span>
              <Link href="/event" className="text-[#6b7280] hover:text-[#111827] transition-colors no-underline">
                Events
              </Link>
              <span className="text-[#9ca3af]">/</span>
              <span className="text-gray-900 font-medium truncate max-w-[280px] sm:max-w-none">
                {currentAlbum.title}
              </span>
            </nav>

            {/* Main Heading */}
            <h1 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-gray-900 tracking-tight leading-tight m-0 mb-4">
              {currentAlbum.title}
            </h1>

            {/* Event Description matching requirement: desc 16px */}
            <p
              className="!text-[16px] text-gray-700 leading-relaxed font-sans max-w-4xl mb-8"
              style={{ fontSize: "16px", lineHeight: "1.6" }}
            >
              {getEventDescription(currentAlbum)}
            </p>

            {/* Photo Gallery Grid - 4 Columns Grid matching requirement: image grid 4 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 w-full box-border">
              {currentAlbum.images.map((img, idx) => (
                <div key={idx} className="transition-all duration-300">
                  <a
                    className="block group cursor-pointer no-underline hover:no-underline rounded-none overflow-hidden border border-gray-200 shadow-none hover:shadow-none transition-all bg-gray-100"
                    style={{ borderRadius: 0, boxShadow: "none" }}
                    href={img}
                    data-fancybox="event-gallery"
                    data-caption={`${currentAlbum.title} — Photo ${idx + 1} of ${currentAlbum.images.length}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="relative aspect-square w-full overflow-hidden bg-gray-100">
                      <EventImage
                        src={img}
                        alt={`${currentAlbum.title} photo ${idx + 1}`}
                        fallbackText="Event photo unavailable"
                        className="w-full h-full"
                        imageClassName="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="py-16 text-center">
            <p className="text-lg text-[#64748b] mb-4">No images found for this event.</p>
            <Link
              href="/event"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-[#c4121a] hover:bg-[#a50e15] text-white rounded-md text-sm font-semibold transition-all cursor-pointer no-underline hover:no-underline shadow-sm"
            >
              Browse All Event Albums
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}

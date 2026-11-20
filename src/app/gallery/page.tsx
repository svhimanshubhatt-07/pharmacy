"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { EventImage } from "@/components/HomePageInteractions";

// Cloudinary soft URL builder
const cdn = (path: string) => `https://res.cloudinary.com/boss8zib/image/upload/${path}`;

// Authentic Laboratory & Research soft URLs from Cloudinary (NIET images > images > gallery > lab photos)
const labImages: string[] = [
  cdn("DSC02299.jpg"),
  cdn("DSC02304.jpg"),
  cdn("DSC02306.jpg"),
  cdn("DSC02312_1.jpg"),
  cdn("DSC02317.jpg"),
  cdn("DSC02337.jpg"),
  cdn("DSC02348.jpg"),
  cdn("DSC02356.jpg"),
  cdn("DSC02357.jpg"),
  cdn("DSC02359.jpg"),
  cdn("DSC02368.jpg"),
  cdn("DSC02369.jpg"),
  cdn("DSC02373.jpg"),
  cdn("DSC02383.jpg"),
  cdn("DSC02413.jpg"),
  cdn("DSC02424.jpg"),
  cdn("DSC02428.jpg"),
  cdn("DSC02434.jpg"),
  cdn("DSC02441_1.jpg"),
  cdn("DSC02443.jpg"),
  cdn("DSC02460.jpg"),
  cdn("DSC02465.jpg"),
  cdn("DSC02472.jpg"),
];

export default function GalleryPage() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const IMAGES_PER_PAGE = 10;
  const totalPages = Math.ceil(labImages.length / IMAGES_PER_PAGE);
  const startIndex = (currentPage - 1) * IMAGES_PER_PAGE;
  const paginatedImages = labImages.slice(startIndex, startIndex + IMAGES_PER_PAGE);

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);
    window.scrollTo({ top: 120, behavior: "smooth" });
  };

  // Close lightbox modal
  const closeModal = useCallback(() => {
    setSelectedImageIndex(null);
  }, []);

  // Show previous image
  const showPrev = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSelectedImageIndex((prev) => (prev === null ? null : (prev - 1 + labImages.length) % labImages.length));
  }, []);

  // Show next image
  const showNext = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSelectedImageIndex((prev) => (prev === null ? null : (prev + 1) % labImages.length));
  }, []);

  // Handle keyboard navigation (Escape, Left, Right)
  useEffect(() => {
    if (selectedImageIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      } else if (e.key === "ArrowLeft") {
        showPrev();
      } else if (e.key === "ArrowRight") {
        showNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex, closeModal, showPrev, showNext]);

  // Safely initialize Fancybox matching the inner-events design
  useEffect(() => {
    if (!document.getElementById("fancybox-css")) {
      const link = document.createElement("link");
      link.id = "fancybox-css";
      link.rel = "stylesheet";
      link.href = "https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.css";
      document.head.appendChild(link);
    }

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
        s.onerror = () => resolve();
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
            selector: '[data-fancybox="gallery"]',
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
      })
      .catch(() => {});

    return () => {
      isMounted = false;
    };
  }, [currentPage]);

  return (
    <div className="w-full max-w-full overflow-x-hidden bg-white animate-eventPageFadeIn">
      <main className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[80px] py-8 md:py-12 box-border">
        <div>
          {/* Breadcrumb Navigation: Home / Gallery */}
          <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-2 text-xs md:text-sm text-[#6b7280] mb-5">
            <Link href="/" className="text-[#6b7280] hover:text-[#111827] transition-colors no-underline">
              Home
            </Link>
            <span className="text-[#9ca3af]">/</span>
            <span className="text-gray-900 font-medium">Gallery</span>
          </nav>

          {/* Main Heading */}
          <h1 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-gray-900 tracking-tight leading-tight m-0 mb-4">
            Gallery
          </h1>

          {/* Description matching 16px requirement */}
          <p
            className="!text-[16px] text-gray-700 leading-relaxed font-sans max-w-4xl mb-8"
            style={{ fontSize: "16px", lineHeight: "1.6" }}
          >
            Discover state-of-the-art pharmaceutical laboratories, analytical instrumentation suites, machine rooms, and pre-clinical research facilities at NIET Pharmacy Institute.
          </p>

          {/* Photo Gallery Grid - 4 Columns Grid matching exact inner-events design */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 w-full box-border">
            {paginatedImages.map((img, idx) => {
              const globalIndex = startIndex + idx;
              return (
                <div key={globalIndex} className="transition-all duration-300">
                  <a
                    className="block group cursor-pointer no-underline hover:no-underline rounded-none overflow-hidden border border-gray-200 shadow-none hover:shadow-none transition-all bg-gray-100"
                    style={{ borderRadius: 0, boxShadow: "none" }}
                    href={img}
                    data-fancybox="gallery"
                    data-caption={`NIET Pharmacy Laboratory — Photo ${globalIndex + 1} of ${labImages.length}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      const $ = (window as any).$;
                      if (!$ || !$.fn || !$.fn.fancybox) {
                        e.preventDefault();
                        setSelectedImageIndex(globalIndex);
                      }
                    }}
                  >
                    <div className="relative aspect-square w-full overflow-hidden bg-gray-100">
                      <EventImage
                        src={img}
                        alt={`NIET Pharmacy Laboratory photo ${globalIndex + 1}`}
                        fallbackText="Laboratory photo unavailable"
                        className="w-full h-full"
                        imageClassName="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </a>
                </div>
              );
            })}
          </div>

          {/* Pagination Controls - 10 images per page */}
          {totalPages > 1 && (
            <div className="mt-10 pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs sm:text-sm text-gray-500 font-sans">
                Showing <strong className="text-gray-900">{startIndex + 1}</strong> to{" "}
                <strong className="text-gray-900">
                  {Math.min(startIndex + IMAGES_PER_PAGE, labImages.length)}
                </strong>{" "}
                of <strong className="text-gray-900">{labImages.length}</strong> photos
              </div>

              <div className="flex items-center gap-1.5 select-none">
                {/* Previous button */}
                <button
                  type="button"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage <= 1}
                  className={`px-3 py-1.5 text-xs sm:text-sm font-semibold transition-colors border ${
                    currentPage <= 1
                      ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:text-black cursor-pointer"
                  }`}
                  aria-label="Previous page"
                >
                  Previous
                </button>

                {/* Page number buttons */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                  const isActive = page === currentPage;
                  return (
                    <button
                      key={page}
                      type="button"
                      onClick={() => handlePageChange(page)}
                      className={`min-w-[34px] px-2.5 py-1.5 text-xs sm:text-sm font-semibold transition-colors border cursor-pointer ${
                        isActive
                          ? "bg-[#c4121a] text-white border-[#c4121a] shadow-xs"
                          : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:text-black"
                      }`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {page}
                    </button>
                  );
                })}

                {/* Next button */}
                <button
                  type="button"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage >= totalPages}
                  className={`px-3 py-1.5 text-xs sm:text-sm font-semibold transition-colors border ${
                    currentPage >= totalPages
                      ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:text-black cursor-pointer"
                  }`}
                  aria-label="Next page"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Built-in Fullscreen Lightbox Modal (Fallback if external scripts don't execute) */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-[99999] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 select-none"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          {/* Close button */}
          <button
            type="button"
            className="absolute top-4 right-4 text-white hover:text-red-400 p-2 z-10 transition-colors cursor-pointer bg-black/40 hover:bg-black/70 rounded-full"
            onClick={closeModal}
            aria-label="Close image popup"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev button */}
          <button
            type="button"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-red-400 p-3 z-10 transition-colors cursor-pointer bg-black/40 hover:bg-black/70 rounded-full"
            onClick={showPrev}
            aria-label="Previous photo"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next button */}
          <button
            type="button"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-red-400 p-3 z-10 transition-colors cursor-pointer bg-black/40 hover:bg-black/70 rounded-full"
            onClick={showNext}
            aria-label="Next photo"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image and Caption Container */}
          <div
            className="relative max-w-5xl max-h-[85vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={labImages[selectedImageIndex]}
              alt={`NIET Pharmacy Laboratory Photo ${selectedImageIndex + 1}`}
              className="max-w-full max-h-[75vh] object-contain rounded shadow-2xl"
            />
            <div className="mt-4 text-center text-white">
              <p className="text-sm font-medium">
                NIET Pharmacy Laboratory — Photo {selectedImageIndex + 1} of {labImages.length}
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Press Esc to close, Arrow keys to navigate
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
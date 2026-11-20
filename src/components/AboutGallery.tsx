"use client";

import { useState } from "react";
import Image from "next/image";

export interface GalleryThumbItem {
  src: string;
  alt: string;
}

interface AboutGalleryProps {
  initialFeatured: {
    src: string;
    alt: string;
  };
  thumbnails: GalleryThumbItem[];
}

export default function AboutGallery({
  initialFeatured,
  thumbnails,
}: AboutGalleryProps) {
  const [currentFeatured, setCurrentFeatured] = useState(initialFeatured);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleSelect = (item: GalleryThumbItem, index: number) => {
    setCurrentFeatured({ src: item.src, alt: item.alt });
    setActiveIndex(index);
  };

  return (
    <div className="about-gallery-mosaic">
      {/* Left Column: Featured Large Image with bottom-right curved corner */}
      <div className="about-gallery-featured-col">
        <div className="about-gallery-featured-frame">
          <img
            src={currentFeatured.src}
            alt={currentFeatured.alt}
            className="about-gallery-featured-img"
          />
        </div>
        {/* The bottom space under the featured frame exposes the red band behind it */}
        <div className="about-gallery-featured-bottom-band" aria-hidden="true" />
      </div>

      {/* Right Column: 2-column scrollable grid */}
      <div
        className="about-gallery-thumbs-col"
        role="region"
        aria-label="Photo gallery thumbnails"
        tabIndex={0}
      >
        {thumbnails.map((item, idx) => {
          const isActive = activeIndex === idx;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => handleSelect(item, idx)}
              className={`about-gallery-thumb-btn ${isActive ? "active" : ""}`}
              aria-label={`View photo: ${item.alt}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="about-gallery-thumb-img"
                loading="lazy"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}

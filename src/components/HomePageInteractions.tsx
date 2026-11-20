"use client";

import { useEffect, useRef, useState } from "react";
import type {
  CertificateItem,
  HeroSlide,
  RegulatoryItem,
  SocialWallItem,
} from "@/data/homepage";
import { cloudinaryImageUrl } from "@/lib/cloudinary";
import type { MilestoneItem } from "@/components/MilestonesInteractive";

const homeHeroFallback = cloudinaryImageUrl("hero_banner_1.png");

interface EventImageProps {
  src: string;
  alt: string;
  fallbackText: string;
  className?: string;
  imageClassName?: string;
}

export function EventImage({
  src,
  alt,
  fallbackText,
  className,
  imageClassName,
}: EventImageProps) {
  const [unavailable, setUnavailable] = useState(false);

  return (
    <div
      className={`relative overflow-hidden bg-[#f1f5f9] ${className ?? ""}`}
    >
      {unavailable ? (
        <span
          role="img"
          aria-label={`${alt} unavailable`}
          className="absolute inset-0 grid place-items-center p-[16px] [color:var(--text-muted)] text-center text-[14px]"
        >
          {fallbackText}
        </span>
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setUnavailable(true)}
          className={imageClassName}
        />
      )}
    </div>
  );
}

export function HomeHeroCarousel({ slides }: { slides: HeroSlide[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || slides.length < 2) return;

    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % slides.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [paused, slides.length]);

  const move = (offset: number) => {
    setActiveIndex((index) => (index + offset + slides.length) % slides.length);
  };

  return (
    <section
      className="home-hero"
      aria-label="Hero Banner"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
    >
      {slides.map((slide, index) => (
        <article
          key={slide.image}
          className={`home-hero__slide${index === activeIndex ? " is-active" : ""}`}
          aria-hidden={index !== activeIndex}
        >
          <img
            className="home-hero__image"
            src={slide.image}
            alt={slide.alt}
            loading={index === 0 ? "eager" : "lazy"}
            decoding="async"
            onError={(event) => {
              const image = event.currentTarget;
              if (image.src !== homeHeroFallback) {
                image.src = homeHeroFallback;
              }
            }}
          />
          <div className="home-hero__overlay" />
          <div className="home-hero__content">
            <div className="home-hero__subheading">{slide.subheading}</div>
            <h1 className="home-hero__heading">{slide.heading}</h1>
          </div>
        </article>
      ))}
      <button
        className="home-hero__control home-hero__control--previous"
        type="button"
        aria-label="Previous"
        onClick={() => move(-1)}
      >
        ‹
      </button>
      <button
        className="home-hero__control home-hero__control--next"
        type="button"
        aria-label="Next"
        onClick={() => move(1)}
      >
        ›
      </button>
      <div className="home-hero__dots" aria-label="Hero slider dots">
        {slides.map((slide, index) => (
          <button
            key={slide.image}
            type="button"
            className={`home-hero__dot${index === activeIndex ? " is-active" : ""}`}
            aria-label={`Show slide ${index + 1}`}
            aria-current={index === activeIndex}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </section>
  );
}

export function HomeMilestones({
  milestones,
  image,
  imageAlt,
}: {
  milestones: MilestoneItem[];
  image: string;
  imageAlt: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeMilestone = milestones[activeIndex];

  return (
    <div className="home-milestones-layout">
      <div className="home-milestone-list" role="tablist" aria-label="Institute milestones">
        {milestones.map((milestone, index) => (
          <button
            key={milestone.year}
            id={`home-milestone-tab-${milestone.year}`}
            type="button"
            className={index === activeIndex ? "is-active" : ""}
            role="tab"
            aria-selected={index === activeIndex}
            aria-controls="home-milestone-panel"
            onClick={() => setActiveIndex(index)}
          >
            <span>{milestone.year}</span>
            <strong>{milestone.title}</strong>
          </button>
        ))}
      </div>
      {activeMilestone && (
        <div
          className="home-milestone-panel"
          id="home-milestone-panel"
          role="tabpanel"
          aria-labelledby={`home-milestone-tab-${activeMilestone.year}`}
        >
          <img src={image} alt={imageAlt} loading="lazy" />
          <div className="home-milestone-panel-copy">
            <span>{activeMilestone.year}</span>
            <h3>{activeMilestone.title}</h3>
            <p>{activeMilestone.desc}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export function HomeCertificateGallery({ items }: { items: CertificateItem[] }) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (track) track.scrollBy({ left: direction * track.clientWidth, behavior: "smooth" });
  };

  return (
    <div className="home-certificates">
      <div className="home-certificates__track" ref={trackRef}>
        {items.map((item) => (
          <div className="home-certificates__item" key={item.id}>
            {item.verified ? (
              <img src={item.image} alt={item.alt} loading="lazy" />
            ) : (
              <div
                className="home-media-unavailable"
                role="img"
                aria-label={`${item.alt} image unavailable`}
                data-original-url={item.image}
              >
                Image unavailable
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="home-certificates__controls">
        <button type="button" aria-label="Previous certificates" onClick={() => scroll(-1)}>
          ‹
        </button>
        <button type="button" aria-label="Next certificates" onClick={() => scroll(1)}>
          ›
        </button>
      </div>
    </div>
  );
}

export function HomeRecognitionAccordion({ sections }: { sections: RegulatoryItem[] }) {
  const [openSection, setOpenSection] = useState(sections[0]?.id ?? "");

  return (
    <div className="home-recognition">
      {sections.map((section) => {
        const isOpen = openSection === section.id;

        return (
          <section className="home-recognition__section" key={section.id}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpenSection(isOpen ? "" : section.id)}
              >
                {section.title}
              </button>
            </h3>
            {isOpen && (
              <div className="table-responsive">
                <table className="table">
                  <tbody>
                    {section.documents.map((document) => (
                      <tr key={document.url}>
                        <td>
                          {document.labelUrl ? (
                            <a href={document.labelUrl} target="_blank" rel="noopener noreferrer">
                              {document.title}
                            </a>
                          ) : (
                            document.title
                          )}
                        </td>
                        <td>Download</td>
                        <td>
                          <a href={document.url} download aria-label={`Download ${document.title}`}>
                            <img src="https://res.cloudinary.com/boss8zib/image/upload/v1793435190/Download.svg" alt="Pdf" />
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        );
      })}
    </div>
  );
}

export function HomeSocialWall({ items }: { items: SocialWallItem[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -340 : 340;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="home-social-wall">
      <button
        type="button"
        className="home-social-wall__btn home-social-wall__btn--prev"
        onClick={() => scroll("left")}
        aria-label="Previous social post"
      >
        ‹
      </button>

      <div className="home-social-wall__slider" ref={scrollRef}>
        {items.map((item) => (
          <div className="home-social-wall__card" key={item.id}>
            <img
              src={item.image}
              alt={item.alt}
              loading="lazy"
              className="home-social-wall__img"
            />
          </div>
        ))}
      </div>

      <button
        type="button"
        className="home-social-wall__btn home-social-wall__btn--next"
        onClick={() => scroll("right")}
        aria-label="Next social post"
      >
        ›
      </button>
    </div>
  );
}

"use client";

import Link from "next/link";
import { useRef, useState } from "react";

export interface HomeProgramme {
  title: string;
  image: string;
  href: string;
}

export function HomeProgrammeExplorer({
  programmes,
  title,
  subtitle,
}: {
  programmes: HomeProgramme[];
  title: string;
  subtitle: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = programmes[activeIndex];

  return (
    <div className="hp-programmes__layout">
      <div className="hp-programmes__menu">
        <h2 id="hp-programmes-title" className="hp-title">{title}</h2>
        <p className="hp-subtitle">{subtitle}</p>
        <ul role="tablist" aria-label="Programmes" className="hp-programmes__list">
          {programmes.map((programme, index) => (
            <li key={programme.title}>
              <button
                type="button"
                role="tab"
                id={`hp-programme-tab-${index}`}
                aria-selected={index === activeIndex}
                aria-controls="hp-programme-panel"
                className={index === activeIndex ? "is-active" : ""}
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
              >
                {programme.title}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {active && (
        <div
          className="hp-programmes__panel"
          id="hp-programme-panel"
          role="tabpanel"
          aria-labelledby={`hp-programme-tab-${activeIndex}`}
        >
          <div className="hp-programmes__image">
            <img key={active.image} src={active.image} alt={`${active.title} at NIET Pharmacy`} loading="lazy" />
          </div>
          <Link href={active.href} className="hp-programmes__more">
            Learn more<span className="hp-sr-only"> about {active.title}</span>
          </Link>
        </div>
      )}
    </div>
  );
}

export interface HomeSpotlightItem {
  tag: string;
  title: string;
  name: string;
  image: string;
  href: string;
}

export function HomeSpotlight({
  items,
  showCaption = true,
}: {
  items: HomeSpotlightItem[];
  /** false = photo-only gallery (home page); true = story card over the image (About). */
  showCaption?: boolean;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = items[activeIndex];

  return (
    <div className="hp-spotlight__layout">
      <div className="hp-spotlight__frame">
        <div className="hp-spotlight__feature">
          {active && (
            <>
              {showCaption && (
                <img key={`${active.image}-bg`} src={active.image} alt="" className="hp-spotlight__backdrop" />
              )}
              <img key={active.image} src={active.image} alt={`${active.tag}: ${active.title}`} />
              {showCaption && (
                <div key={`card-${activeIndex}`} className="hp-spotlight__card" aria-live="polite">
                  <span className="hp-spotlight__tag">{active.tag}</span>
                  <h3>{active.title}</h3>
                  <p>{active.name}</p>
                  <Link href={active.href} className="hp-spotlight__more">Read more</Link>
                </div>
              )}
            </>
          )}
        </div>
      </div>
      <ul className="hp-spotlight__thumbs" aria-label="Choose a spotlight story">
        {items.map((item, index) => (
          <li key={`${item.title}-${index}`}>
            <button
              type="button"
              className={index === activeIndex ? "is-active" : ""}
              aria-pressed={index === activeIndex}
              aria-label={`${item.tag}: ${item.title}`}
              onClick={() => setActiveIndex(index)}
            >
              <img src={item.image} alt="" loading="lazy" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export interface HomeCampusCard {
  title: string;
  image: string;
  href: string;
}

export function HomeCampusCarousel({ cards }: { cards: HomeCampusCard[] }) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>(".hp-campus__card");
    const step = card ? card.offsetWidth + 20 : track.clientWidth;
    track.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <>
      <div className="hp-campus__controls">
        <button type="button" aria-label="Previous campus highlight" onClick={() => scroll(-1)}>‹</button>
        <button type="button" aria-label="Next campus highlight" onClick={() => scroll(1)}>›</button>
      </div>
      <div className="hp-campus__track" ref={trackRef}>
        {cards.map((card) => (
          <Link key={card.title} href={card.href} className="hp-campus__card">
            <img src={card.image} alt={card.title} loading="lazy" />
            <div className="hp-campus__caption">
              <strong>{card.title}</strong>
              <span>Explore more →</span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

import type { GalleryCard } from "@/data/admissions";

export function RankingMarquee({ items }: { items: GalleryCard[] }) {
  return (
    <div className="ranking-marquee">
      <div className="ranking-marquee__track">
        <ul className="ranking-marquee__list" aria-label="Rankings and recognitions">
          {items.map((item) => (
            <li className="ranking-marquee__card" key={`${item.src}-${item.alt}`}>
              <img src={item.src} alt={item.alt} loading="lazy" />
              <p>{item.alt}</p>
            </li>
          ))}
        </ul>
        <ul className="ranking-marquee__list" aria-hidden="true">
          {items.map((item) => (
            <li className="ranking-marquee__card" key={`duplicate-${item.src}-${item.alt}`}>
              <img src={item.src} alt="" loading="lazy" />
              <p>{item.alt}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

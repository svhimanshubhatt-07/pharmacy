import type { RecognitionLogo } from "@/data/admissions";

export function RecognitionMarquee({ items }: { items: RecognitionLogo[] }) {
  return (
    <div className="recognition-marquee">
      <div className="recognition-marquee__track">
        <ul
          className="recognition-marquee__list"
          aria-label="Government accreditations and recognitions"
        >
          {items.map((item) => (
            <li className="recognition-marquee__card" key={`${item.src}-${item.caption}`}>
              <img src={item.src} alt={item.alt} loading="lazy" />
              <p>{item.caption}</p>
            </li>
          ))}
        </ul>
        <ul className="recognition-marquee__list" aria-hidden="true">
          {items.map((item) => (
            <li className="recognition-marquee__card" key={`duplicate-${item.src}-${item.caption}`}>
              <img src={item.src} alt="" loading="lazy" />
              <p>{item.caption}</p>
            </li>
          ))}
        </ul>
        <ul className="recognition-marquee__list" aria-hidden="true">
          {items.map((item) => (
            <li className="recognition-marquee__card" key={`duplicate-2-${item.src}-${item.caption}`}>
              <img src={item.src} alt="" loading="lazy" />
              <p>{item.caption}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

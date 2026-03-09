"use client";

import HopeCard from "./HopeCard";

const CARD_BG = "/images/wall-of-hopes/cardsbg.svg";
const CARD_BG_ALT = "/images/wall-of-hopes/cardsbg-right-center.svg";

export default function HopesMosaic({ wallOfHope }) {
  const heading = wallOfHope?.heading ?? "Wall Of Hope";
  const cards = wallOfHope?.wallOfHopeCard ?? [];

  return (
    <section className="hopes__mosaic">
      <h1 className="hopes__mosaic-title">{heading}</h1>
      <div className="hopes__mosaic-grid">
        {cards
          .filter((c) => c.profileUrl)
          .map((card, index) => (
            <HopeCard
              key={card.id ?? index}
              name={card.name}
              role={card.designation}
              country={card.country ?? ""}
              imageSrc={card.profileUrl}
              profileImageSrc={card.smallProfileUrl ?? card.profileUrl}
              quote={card.quote}
              positionClass={card.positionClass}
              bgClass={card.bgClass}
              cardBg={index % 3 === 2 ? CARD_BG_ALT : CARD_BG}
            />
          ))}
      </div>
    </section>
  );
}

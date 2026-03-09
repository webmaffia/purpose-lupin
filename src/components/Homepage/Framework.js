"use client";

import Image from "next/image";

const DEFAULT_BG = "/images/New folder/mountain.png";

export default function Framework({ framework }) {
  const heading = framework?.heading ?? "OUR GUIDING\nFRAMEWORK";
  const cards = framework?.frameworkCard ?? [];
  const backgroundUrl = framework?.backgroundUrl || DEFAULT_BG;

  return (
    <>
      <section className="section-framework">
        <div className="section-framework__bg">
          <Image
            src={backgroundUrl}
            alt=""
            fill
            className="section-framework__bg-img"
            sizes="100vw"
            unoptimized={backgroundUrl.startsWith("http")}
          />
        </div>
        <h2 className="section-framework__title">
          {heading.split("\n").map((line, i) => (
            <span key={i}>
              {i > 0 && <br />}
              {line}
            </span>
          ))}
        </h2>
        <div className="section-framework__circles">
          {cards.map((card, index) => (
            <div key={card.id ?? index} className="section-framework__circle">
              <span className="section-framework__circle-inner">
                <span className="section-framework__circle-label">{card.title}</span>
                <span className="section-framework__circle-subtitle">{card.subtitle}</span>
                <span className="section-framework__circle-desc">{card.description?.trim()}</span>
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

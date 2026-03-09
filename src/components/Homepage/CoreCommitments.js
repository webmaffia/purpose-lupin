"use client";
import Image from "next/image";

const FALLBACK_ICON = "/images/homepage-icons/core1.svg";
const CARD_BG_CLASSES = ["section-core__card-bg--hand", "section-core__card-bg--innovating", "section-core__card-bg--solutions"];

export default function CoreCommitments({ threeCore }) {
  const heading = threeCore?.heading ?? "3 CORE\nCOMMITMENTS";
  const cards = threeCore?.threeCoreCard ?? [];

  return (
    <>
      <section className="section-core">
        <Image
          src="/images/core/text bg.svg"
          alt=""
          className="section-core__text-bg"
          aria-hidden="true"
          width="400"
          height="400"
        />
        <h2 className="section-core__title">
          {heading.split("\n").map((line, i) => (
            <span key={i}>
              {i > 0 && <br />}
              {line}
            </span>
          ))}
        </h2>
        <div className="section-core__cards">
          {cards.map((card, index) => {
            const iconSrc = card.iconUrl || FALLBACK_ICON;
            const cardBgClass = `section-core__card-bg${!card.imageUrl ? ` ${CARD_BG_CLASSES[index % CARD_BG_CLASSES.length]}` : ""}`;
            return (
              <article key={card.id ?? index} className="section-core__card section-core__card--hover-image">
                <Image
                  src="/images/core/greencircle.svg"
                  alt=""
                  className="section-core__card-circle"
                  aria-hidden="true"
                  width="550"
                  height="550"
                />
                <div className={cardBgClass} aria-hidden="true">
                  {card.imageUrl && (
                    <Image
                      src={card.imageUrl}
                      alt=""
                      fill
                      className="section-core__card-bg-img"
                      sizes="(max-width: 600px) 100vw, 500px"
                      unoptimized={card.imageUrl.startsWith("http")}
                    />
                  )}
                </div>
                <div className="section-core__card-overlay" aria-hidden="true" />
                <div className="section-core__card-content">
                  <div className="headingWrapper">
                    <Image
                      src="/images/homepage-icons/pointer.svg"
                      alt=""
                      className="section-core__card-asterisk"
                      aria-hidden="true"
                      width="120"
                      height="120"
                    />
                    <p className="section-core__card-text">{card.title}</p>
                  </div>
                  <p className="section-core__card-desc">{card.description}</p>
                </div>
                <Image
                  src={iconSrc}
                  alt=""
                  className="section-core__card-icon"
                  width="120"
                  height="120"
                  unoptimized={iconSrc.startsWith("http")}
                />
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}

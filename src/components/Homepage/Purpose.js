"use client";
import Image from "next/image";
import Link from "next/link";

const FALLBACK_ACTION_ICONS = ["/images/homepage-icons/action1.svg", "/images/homepage-icons/action2.svg", "/images/homepage-icons/action3.svg"];

export default function Purpose({ action }) {
  const heading = action?.heading ?? "OUR PURPOSE IN ACTION";
  const cards = action?.actionCard ?? [];

  return (
    <>
      <section className="section-action">
        <h2 className="section-action__title">{heading}</h2>
        <div className="section-action__cards">
          {cards.map((card, index) => {
            const iconSrc = card.iconUrl || FALLBACK_ACTION_ICONS[index % FALLBACK_ACTION_ICONS.length];
            return (
              <article key={card.id ?? index} className="section-action__card">
                <Image
                  src={iconSrc}
                  alt=""
                  className="section-action__icon"
                  width="120"
                  height="120"
                  unoptimized={iconSrc.startsWith("http")}
                />
                <h3 className="section-action__card-title">{card.title}</h3>
                <p className="section-action__card-text">{card.description}</p>
                <Link href={card.ctaSlug ?? "#"} className="section-action__btn">
                  {card.ctaText}
                </Link>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}

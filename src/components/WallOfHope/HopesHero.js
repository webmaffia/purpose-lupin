"use client";

import Image from "next/image";

const DEFAULT_DESKTOP = "/images/hero/wall-of-hopes-hero1.png";
const DEFAULT_MOBILE = "/images/wall-of-hopes/banner/mobile.png";

export default function HopesHero({ banner }) {
  const desktopSrc = banner?.desktopImageUrl || DEFAULT_DESKTOP;
  const mobileSrc = banner?.mobileImageUrl || DEFAULT_MOBILE;

  return (
    <section className="hopes__hero">
      <picture>
        <source media="(max-width: 768px)" srcSet={mobileSrc} />
        <Image
          className="hopes__hero-image"
          src={desktopSrc}
          alt="Wall of Hope – Lupinytts collaborating"
          width={1920}
          height={600}
          priority
          unoptimized={desktopSrc.startsWith("http")}
        />
      </picture>
    </section>
  );
}

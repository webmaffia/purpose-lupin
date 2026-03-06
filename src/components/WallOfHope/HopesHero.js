"use client";

import Image from "next/image";

export default function HopesHero() {
  return (
    <section className="hopes__hero">
      <picture>
        <source
          media="(max-width: 768px)"
          srcSet="/images/wall-of-hopes/banner/mobile.png"
        />
        <Image
          className="hopes__hero-image"
          src="/images/hero/wall-of-hopes-hero1.png"
          alt="Wall of Hope – Lupinytts collaborating"
          width={1920}
          height={600}
          priority
        />
      </picture>
    </section>
  );
}

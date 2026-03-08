"use client";

import Image from "next/image";

export default function LeaderBanner() {
  return (
    <>
      <section className="leadership__hero">
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet="/images/leadership/banner/mobile1.png"
          />
          <Image
            className="leadership__hero-image"
            src="/images/hero/Mask group (2).png"
            alt="Hero section image"
            width={1920}
            height={686}
          />
        </picture>
      </section>
    </>
  );
}

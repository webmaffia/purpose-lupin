"use client";

import Image from "next/image";

const DEFAULT_DESKTOP = "/images/hero/Mask group (2).png";
const DEFAULT_MOBILE = "/images/leadership/banner/mobile1.png";

export default function LeaderBanner({ banner }) {
  const desktopSrc = banner?.desktopImageUrl || DEFAULT_DESKTOP;
  const mobileSrc = banner?.mobileImageUrl || DEFAULT_MOBILE;

  return (
    <section className="leadership__hero">
      <picture>
        <source media="(max-width: 768px)" srcSet={mobileSrc} />
        <Image
          className="leadership__hero-image"
          src={desktopSrc}
          alt="Leadership hero"
          width={1920}
          height={686}
          unoptimized={desktopSrc.startsWith("http")}
        />
      </picture>
    </section>
  );
}

"use client";

import HopesHero from "@/components/WallOfHope/HopesHero";
import HopesMosaic from "@/components/WallOfHope/HopesMosaic";

export default function WallOfHopeContent({ banner, wallOfHope }) {
  return (
    <main>
      <HopesHero banner={banner} />
      <HopesMosaic wallOfHope={wallOfHope} />
    </main>
  );
}

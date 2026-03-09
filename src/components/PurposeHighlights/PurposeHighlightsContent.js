"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const DEFAULT_POSTER = "/images/hero/November.png";
const DEFAULT_VIDEO = "/videos/Purpose November 2025 Highlights.mp4";

export default function PurposeHighlightsContent({ banner, years = [], yearMonths = {} }) {
  const firstYear = years[0];
  const firstMonthData = firstYear ? yearMonths[firstYear]?.[0] : null;

  const [year, setYear] = useState(firstYear ?? "2025");
  const [month, setMonth] = useState(firstMonthData?.month ?? "November");
  const [isPlaying, setIsPlaying] = useState(false);
  const desktopVideoRef = useRef(null);
  const mobileVideoRef = useRef(null);
  const heroSectionRef = useRef(null);

  const months = yearMonths[year] ?? [];
  const currentEntry = months.find((m) => m.month === month) ?? months[0];
  const videoSrc = currentEntry?.videoUrl || DEFAULT_VIDEO;
  const posterSrc = currentEntry?.posterUrl || DEFAULT_POSTER;

  const setVideoSource = (src) => {
    [desktopVideoRef.current, mobileVideoRef.current].forEach((el) => {
      if (!el) return;
      const source = el.querySelector("source");
      if (source) source.src = src;
      el.load();
    });
  };

  useEffect(() => {
    setVideoSource(videoSrc);
  }, [videoSrc]);

  const playVideo = () => {
    const isMobile = typeof window !== "undefined" && window.matchMedia("(max-width: 414px)").matches;
    const video = isMobile ? mobileVideoRef.current : desktopVideoRef.current;
    if (video && heroSectionRef.current) {
      heroSectionRef.current.classList.add("is-playing");
      video.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const pauseVideo = () => {
    [desktopVideoRef.current, mobileVideoRef.current].forEach((el) => {
      if (el) el.pause();
    });
    if (heroSectionRef.current) heroSectionRef.current.classList.remove("is-playing");
    setIsPlaying(false);
  };

  const handleMonthClick = (m) => {
    setMonth(m);
    pauseVideo();
  };

  const handleYearClick = (y) => {
    setYear(y);
    const firstOfYear = yearMonths[y]?.[0];
    setMonth(firstOfYear?.month ?? "November");
    pauseVideo();
  };

  const bannerDesktop = banner?.desktopImageUrl || "/images/hero/purpose-highlights_hero-banner.png";
  const bannerMobile = banner?.mobileImageUrl || "/images/hero/purpose-highlights_hero-banner.png";

  return (
    <main className="wrapper">
      <section className="monthly-highlights">
        <section className="purpose__hero">
          <picture>
            <source media="(max-width: 768px)" srcSet={bannerMobile} />
            <Image
              className="purpose__hero-image"
              src={bannerDesktop}
              alt="Purpose Highlights"
              width={1920}
              height={600}
              priority
              unoptimized={bannerDesktop.startsWith("http")}
            />
          </picture>
        </section>

        <h1 className="purpose__title">MONTHLY HIGHLIGHTS</h1>

        <div className="purpose__year-selector">
          {years.map((y) => (
            <button
              key={y}
              type="button"
              className={`year-btn${year === y ? " active" : ""}`}
              data-year={y}
              onClick={() => handleYearClick(y)}
            >
              {y}
            </button>
          ))}
        </div>

        <div className="purpose__months-wrapper">
          <div className="purpose__months">
            {months.map((m) => (
              <button
                key={m.month}
                type="button"
                className={`month${month === m.month ? " active" : ""}`}
                data-month={m.month}
                onClick={() => handleMonthClick(m.month)}
              >
                {m.month}
              </button>
            ))}
          </div>
        </div>

        <section className="hero purpose-hero" ref={heroSectionRef}>
          <div className="purpose-hero__media">
            <div className="hero__poster purpose-hero__poster-wrap" id="purpose-hero-poster">
              <Image
                src={posterSrc}
                alt=""
                className="purpose-hero__poster-img"
                fill
                sizes="100vw"
                unoptimized={posterSrc.startsWith("http")}
              />
            </div>
            <video
              ref={desktopVideoRef}
              className="hero__video hero__video--desktop"
              poster={posterSrc}
              playsInline
              muted
              loop
              onEnded={pauseVideo}
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
            <video
              ref={mobileVideoRef}
              className="hero__video hero__video--mobile"
              poster={posterSrc}
              playsInline
              muted
              loop
              onEnded={pauseVideo}
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
            <button
              type="button"
              className="hero__play-wrap"
              aria-label="Play video"
              onClick={playVideo}
            >
              <span className="hero__animation-wrap" aria-hidden="true">
                <Image
                  src="/images/homepage-icons/Buttonanimation.svg"
                  alt=""
                  className="hero__animation"
                  width={409}
                  height={409}
                />
              </span>
              <span className="hero__play-wrap-inner" aria-hidden="true">
                <Image
                  src="/images/homepage-icons/Playbutton.svg"
                  alt=""
                  className="hero__play"
                  width={186}
                  height={186}
                />
              </span>
            </button>
            <button
              type="button"
              className="hero__pause-wrap"
              aria-label="Pause video"
              hidden={!isPlaying}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                pauseVideo();
              }}
            >
              <span className="hero__pause-wrap-inner" aria-hidden="true">
                <Image
                  src="/images/homepage-icons/Pausebutton.svg"
                  alt=""
                  className="hero__pause"
                  width={186}
                  height={186}
                />
              </span>
            </button>
          </div>
        </section>
      </section>
    </main>
  );
}

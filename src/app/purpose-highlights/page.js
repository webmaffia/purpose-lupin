"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const VIDEO_DATA = {
  "2025": {
    November: "/videos/Purpose November 2025 Highlights.mp4",
    December: "/videos/Purpose December 2025 Highlights.mp4",
  },
};

const POSTER_DATA = {
  "2025": {
    November: "/images/hero/November.png",
    December: "/images/hero/December.png",
  },
};

const MONTHS_DATA = {
  "2025": ["November", "December"],
};

export default function PurposeHighlightsPage() {
  const [year, setYear] = useState("2025");
  const [month, setMonth] = useState("November");
  const [isPlaying, setIsPlaying] = useState(false);
  const desktopVideoRef = useRef(null);
  const mobileVideoRef = useRef(null);
  const heroSectionRef = useRef(null);

  const months = MONTHS_DATA[year] || MONTHS_DATA["2025"];
  const videoSrc = VIDEO_DATA[year]?.[month] || VIDEO_DATA["2025"].November;
  const posterSrc = POSTER_DATA[year]?.[month] || POSTER_DATA["2025"].November;

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
    setMonth(MONTHS_DATA[y]?.[0] || "November");
    pauseVideo();
  };

  return (
    <main className="wrapper">
      <section className="monthly-highlights">
        <section className="purpose__hero">
          <Image
            className="purpose__hero-image"
            src="/images/hero/purpose-highlights_hero-banner.png"
            alt="Purpose Highlights"
            width={1920}
            height={600}
            priority
          />
        </section>

        <h1 className="purpose__title">MONTHLY HIGHLIGHTS</h1>

        <div className="purpose__year-selector">
          <button
            type="button"
            className={`year-btn${year === "2025" ? " active" : ""}`}
            data-year="2025"
            onClick={() => handleYearClick("2025")}
          >
            2025
          </button>
        </div>

        <div className="purpose__months-wrapper">
          <div className="purpose__months">
            {months.map((m) => (
              <button
                key={m}
                type="button"
                className={`month${month === m ? " active" : ""}`}
                data-month={m}
                onClick={() => handleMonthClick(m)}
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        <section className="hero purpose-hero" ref={heroSectionRef}>
          <div className="purpose-hero__media">
            <div
              className="hero__poster"
              id="purpose-hero-poster"
              style={{ backgroundImage: `url('${posterSrc}')` }}
            />
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

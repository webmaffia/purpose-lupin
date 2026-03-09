"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const DEFAULT_POSTER = "/images/catylist/poster.png";
const DEFAULT_VIDEO = "/videos/3-Our-Purpose-Standalone-High-Resolution.mp4";

export default function ChroniclesHero({ hero }) {
  const posterUrl = hero?.posterUrl || DEFAULT_POSTER;
  const videoUrl = hero?.videoUrl || DEFAULT_VIDEO;

  const desktopVideoRef = useRef(null);
  const mobileVideoRef = useRef(null);
  const pauseButtonRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const getActiveVideo = () =>
    typeof window !== "undefined" && window.innerWidth > 414
      ? desktopVideoRef.current
      : mobileVideoRef.current;

  const handlePlay = () => {
    setIsPlaying(true);
    const videoToPlay = getActiveVideo();
    if (videoToPlay) {
      videoToPlay.play().catch(() => setIsPlaying(false));
    }
  };

  const handlePause = () => {
    const videoToPause = getActiveVideo();
    if (videoToPause) videoToPause.pause();
    pauseButtonRef.current?.blur();
    setIsPlaying(false);
  };

  return (
    <section className={`hero ${isPlaying ? "is-playing" : ""}`}>
      <div className="hero__poster hero__poster--catalyst">
        <Image
          src={posterUrl}
          alt=""
          fill
          className="hero__poster-img"
          sizes="100vw"
          priority
          unoptimized={posterUrl.startsWith("http")}
        />
      </div>
      <video
        ref={desktopVideoRef}
        className="hero__video hero__video--desktop"
        poster={posterUrl}
        playsInline
        muted
        loop
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
      <video
        ref={mobileVideoRef}
        className="hero__video hero__video--mobile"
        poster={posterUrl}
        playsInline
        muted
        loop
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
      <button
        type="button"
        className="hero__play-wrap"
        aria-label="Play video"
        onClick={handlePlay}
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
        ref={pauseButtonRef}
        type="button"
        className="hero__pause-wrap"
        aria-label="Pause video"
        onClick={handlePause}
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
    </section>
  );
}

"use client";
import Image from "next/image";
import { useRef, useState } from "react";

export default function HeroBanner() {
  const desktopVideoRef = useRef(null);
  const mobileVideoRef = useRef(null);
  const pauseButtonRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const getActiveVideo = () =>
    window.innerWidth > 414 ? desktopVideoRef.current : mobileVideoRef.current;

  const handlePlay = () => {
    setIsPlaying(true);
    const videoToPlay = getActiveVideo();
    if (videoToPlay) {
      videoToPlay.play().catch((err) => {
        console.warn("Video play failed:", err);
        setIsPlaying(false);
      });
    }
  };

  const handlePause = () => {
    const videoToPause = getActiveVideo();
    if (videoToPause) {
      videoToPause.pause();
    }
    pauseButtonRef.current?.blur();
    setIsPlaying(false);
  };

  return (
    <>
      <section className={`hero ${isPlaying ? "is-playing" : ""}`}>
        <div
          className="hero__poster"
          style={{ backgroundImage: "url('/images/hero/poster.png')" }}
        ></div>
        {/* Desktop video: shown above 414px  */}
        <video
          ref={desktopVideoRef}
          className="hero__video hero__video--desktop"
          poster="/images/hero/poster.png"
          playsInline
          loop
        >
          <source
            src="/videos/3-Our-Purpose-Standalone-High-Resolution.mp4"
            type="video/mp4"
          />
        </video>
        {/* Mobile video: shown at 414px and below  */}
        <video
          ref={mobileVideoRef}
          className="hero__video hero__video--mobile"
          poster="/images/hero/poster.png"
          playsInline
          muted
          loop
        >
          <source
            src="/videos/3-Our-Purpose-Standalone-High-Resolution.mp4"
            type="video/mp4"
          />
        </video>
        <button
          onClick={handlePlay}
          type="button"
          className="hero__play-wrap"
          aria-label="Play video"
        >
          <span className="hero__animation-wrap" aria-hidden="true">
            <Image
              src="/images/homepage-icons/Buttonanimation.svg"
              alt=""
              className="hero__animation"
              width="409"
              height="409"
            />
          </span>
          <span className="hero__play-wrap-inner" aria-hidden="true">
            <Image
              src="/images/homepage-icons/Playbutton.svg"
              alt=""
              className="hero__play"
              width="186"
              height="186"
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
              width="186"
              height="186"
            />
          </span>
        </button>
      </section>
    </>
  );
}

"use client";

import { useState, useRef } from "react";
import ChroniclesHero from "@/components/CatalystChronicles/ChroniclesHero";
import ChroniclesSection from "@/components/CatalystChronicles/ChroniclesSection";

const VIDEO_SRC = "/videos/3-Our-Purpose-Standalone-High-Resolution.mp4";

export default function CatalystChroniclesPage() {
  const [popupOpen, setPopupOpen] = useState(false);
  const videoRef = useRef(null);

  const openPopup = (videoSrc) => {
    setPopupOpen(true);
    const src = videoSrc || VIDEO_SRC;
    if (videoRef.current) {
      videoRef.current.src = src;
      videoRef.current.play().catch(() => {});
    }
  };

  const closePopup = () => {
    setPopupOpen(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <>
      <main className="wrapper">
        <ChroniclesHero />
        <ChroniclesSection onProfileClick={openPopup} />
      </main>

      <div
        id="chronicles-video-popup"
        className={`chronicles-video-popup${popupOpen ? " chronicles-video-popup--open" : ""}`}
        aria-hidden={!popupOpen}
      >
        <div
          className="chronicles-video-popup__overlay"
          onClick={closePopup}
          aria-hidden="true"
        />
        <div className="chronicles-video-popup__inner">
          <button
            type="button"
            className="chronicles-video-popup__close"
            aria-label="Close video"
            onClick={closePopup}
          >
            &times;
          </button>
          <video
            ref={videoRef}
            className="chronicles-video-popup__video"
            controls
            playsInline
            preload="metadata"
          />
        </div>
      </div>
    </>
  );
}

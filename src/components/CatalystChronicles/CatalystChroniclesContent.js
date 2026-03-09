"use client";

import { useState, useRef } from "react";
import ChroniclesHero from "@/components/CatalystChronicles/ChroniclesHero";
import ChroniclesSection from "@/components/CatalystChronicles/ChroniclesSection";

const DEFAULT_VIDEO_SRC = "/videos/3-Our-Purpose-Standalone-High-Resolution.mp4";

export default function CatalystChroniclesContent({ hero, catalyst }) {
  const [popupOpen, setPopupOpen] = useState(false);
  const videoRef = useRef(null);

  const videoSrc = hero?.videoUrl || DEFAULT_VIDEO_SRC;

  const openPopup = (src) => {
    setPopupOpen(true);
    const url = src || videoSrc;
    if (videoRef.current) {
      videoRef.current.src = url;
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
        <ChroniclesHero hero={hero} />
        <ChroniclesSection catalyst={catalyst} onProfileClick={openPopup} />
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

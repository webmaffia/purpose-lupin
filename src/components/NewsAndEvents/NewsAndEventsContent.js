"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function NewsAndEventsContent({ banner, photoBooth = {}, paintWall = {} }) {
  const photoBoothCountries = photoBooth?.countries ?? [];
  const paintWallCountries = paintWall?.countries ?? [];

  const [countryIndex, setCountryIndex] = useState(0);
  const [paintIndex, setPaintIndex] = useState(0);
  const [paintTransitioning, setPaintTransitioning] = useState(false);
  const [mobilePosition, setMobilePosition] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const carouselRef = useRef(null);
  const rotationRef = useRef(0);
  const rafRef = useRef(null);

  const photoboothUrls = photoBoothCountries[countryIndex]?.photos ?? [];
  const paintUrls = paintWallCountries[paintIndex]?.photos ?? [];
  const totalCards = Math.max(photoboothUrls.length, 1);

  const bannerSrc = banner?.desktopImageUrl || "/images/hero/photobooth-hero.png";

  const handlePaintLocation = (index) => {
    setPaintIndex(index);
    setPaintTransitioning(true);
    setTimeout(() => setPaintTransitioning(false), 300);
  };

  const handleTouchStart = (e) => setTouchStart(e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    const diff = e.changedTouches[0].clientX - touchStart;
    if (diff > 50) setMobilePosition((p) => (p > 0 ? p - 1 : totalCards - 1));
    else if (diff < -50) setMobilePosition((p) => (p < totalCards - 1 ? p + 1 : 0));
  };

  useEffect(() => {
    const id = setInterval(() => {
      setMobilePosition((p) => (p < totalCards - 1 ? p + 1 : 0));
    }, 3500);
    return () => clearInterval(id);
  }, [countryIndex, totalCards]);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel || photoboothUrls.length === 0) return;
    const total = photoboothUrls.length;
    const angle = 360 / total;
    let depth = 380;
    let tilt = -5;
    const updateDepth = () => {
      const w = typeof window !== "undefined" ? window.innerWidth : 1200;
      if (w > 1800) { depth = 660; tilt = -7; }
      else if (w > 1600) { depth = 520; tilt = -6; }
      else if (w > 1200) { depth = 380; tilt = -5; }
      else if (w > 900) { depth = 270; tilt = -4; }
      else if (w > 600) { depth = 200; tilt = -3; }
      else { depth = 130; tilt = -2; }
    };
    updateDepth();
    const faces = carousel.querySelectorAll(".carousel__face");
    faces.forEach((face, i) => {
      face.style.transform = `translate(-50%, -50%) rotateY(${i * angle}deg) translateZ(${depth}px)`;
    });

    const animate = () => {
      rotationRef.current += 0.12;
      const r = rotationRef.current;
      carousel.style.transform = `rotateX(${tilt}deg) rotateY(${r}deg)`;
      faces.forEach((face, i) => {
        let cardAngle = (i * angle + r) % 360;
        if (cardAngle < 0) cardAngle += 360;
        let distance = Math.abs(cardAngle);
        if (distance > 180) distance = 360 - distance;
        face.style.opacity = 1 - (distance / 180) * 0.8;
        const scale = 1 - (distance / 180) * 0.25;
        face.style.transform = `translate(-50%, -50%) rotateY(${i * angle}deg) translateZ(${depth}px) scale(${scale})`;
      });
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [countryIndex, photoboothUrls.length]);

  return (
    <main className="wrapper">
      <section className="purposebooth-hero">
        <Image
          className="purposebooth-hero-image"
          src={bannerSrc}
          alt="News and Events"
          width={1920}
          height={686}
          priority
          unoptimized={bannerSrc.startsWith("http")}
        />
      </section>

      <section className="purpose-photobooth">
        <div className="purpose-photobooth__header">
          <h2>{photoBooth?.heading || "PURPOSE PHOTOBOOTH"}</h2>
        </div>
        <div className="purpose-photobooth__content">
          <div className="purpose-photobooth__filters">
            {photoBoothCountries.map((c, i) => (
              <button
                key={c.id ?? i}
                type="button"
                className={`filter-btn${countryIndex === i ? " active" : ""}`}
                data-country={c.id ?? c.label}
                onClick={() => {
                  setCountryIndex(i);
                  setMobilePosition(0);
                }}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className="carousel__container desktop-carousel">
            <div className="carousel" ref={carouselRef}>
              {photoboothUrls.map((src, i) => (
                <div key={i} className="carousel__face">
                  <img src={src} alt="" />
                </div>
              ))}
            </div>
          </div>

          <div
            className="mobile-slider"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="mobile-carousel">
              {photoboothUrls.map((src, i) => {
                const offset = i - mobilePosition;
                return (
                  <div
                    key={i}
                    className="mobile-card"
                    data-offset={offset}
                    data-active={i === mobilePosition ? "true" : undefined}
                  >
                    <img src={src} alt="" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="paint-purpose">
        <div className="paint-purpose__container">
          <div className="svg">
            <img src="/images/photobooth/shapes/BG Icon.png" alt="" />
          </div>
          <div className="paint-purpose__content">
            <h2>
              {(paintWall?.heading ?? "PAINT OUR\nPURPOSE").split("\n").map((line, i) => (
                <span key={i}>
                  {i > 0 && <br />}
                  {line}
                </span>
              ))}
            </h2>
            <div className="paint-purpose__locations">
              {paintWallCountries.map((loc, i) => (
                <span
                  key={loc.id ?? i}
                  role="button"
                  tabIndex={0}
                  className={`tag${paintIndex === i ? " highlight" : ""}`}
                  data-location={loc.id ?? loc.label}
                  onClick={() => handlePaintLocation(i)}
                  onKeyDown={(e) => e.key === "Enter" && handlePaintLocation(i)}
                >
                  {loc.label}
                </span>
              ))}
            </div>
          </div>
          <div
            className={`paint-purpose__images${paintTransitioning ? " is-transitioning" : ""}`}
            id="paint-purpose-images"
          >
            {paintUrls.map((src, i) => (
              <img key={i} src={src} alt="" />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const PHOTOBOOTH_IMAGES = {
  uk: [1, 2, 3, 4, 5].map((i) => `/images/photobooth/news-and-events/purpose-photobooth/UK/${i}.png`),
  philippines: [1, 2, 3, 4, 5].map((i) => `/images/photobooth/news-and-events/purpose-photobooth/Philippines/${i}.png`),
  mexico: [1, 2, 3, 4, 5].map((i) => `/images/photobooth/news-and-events/purpose-photobooth/Mexico/${i}.png`),
  india: [1, 2, 3, 4, 5].map((i) => `/images/photobooth/news-and-events/purpose-photobooth/India/${i}.png`),
};

const PAINT_PURPOSE_IMAGES = {
  uk: ["/images/photobooth/news-and-events/Purpose/UK/1.png", "/images/photobooth/news-and-events/Purpose/UK/2.png", "/images/photobooth/news-and-events/Purpose/UK/3.png"],
  us: ["/images/photobooth/news-and-events/Purpose/somerset-new-jersey-US/1.png", "/images/photobooth/news-and-events/Purpose/somerset-new-jersey-US/2.png", "/images/photobooth/news-and-events/Purpose/somerset-new-jersey-US/3.png"],
  india: ["/images/photobooth/news-and-events/Purpose/global-hr-offsite-India/1.png", "/images/photobooth/news-and-events/Purpose/global-hr-offsite-India/2.png", "/images/photobooth/news-and-events/Purpose/global-hr-offsite-India/3.png"],
};

const COUNTRIES = [
  { id: "uk", label: "UK" },
  { id: "philippines", label: "Philippines" },
  { id: "mexico", label: "Mexico" },
  { id: "india", label: "India" },
];

const PAINT_LOCATIONS = [
  { id: "uk", label: "UK" },
  { id: "us", label: "Somerset, New Jersey, US" },
  { id: "india", label: "Global HR Offsite, India" },
];

export default function NewsAndEventsPage() {
  const [country, setCountry] = useState("india");
  const [paintLocation, setPaintLocation] = useState("india");
  const [paintTransitioning, setPaintTransitioning] = useState(false);
  const [mobilePosition, setMobilePosition] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const carouselRef = useRef(null);
  const rotationRef = useRef(0);
  const rafRef = useRef(null);
  const totalCards = 5;

  const photoboothUrls = PHOTOBOOTH_IMAGES[country] || PHOTOBOOTH_IMAGES.india;
  const paintUrls = PAINT_PURPOSE_IMAGES[paintLocation] || PAINT_PURPOSE_IMAGES.india;

  // Paint Our Purpose: swap images with brief transition
  const handlePaintLocation = (loc) => {
    setPaintLocation(loc);
    setPaintTransitioning(true);
    setTimeout(() => setPaintTransitioning(false), 300);
  };

  // Mobile slider swipe
  const handleTouchStart = (e) => setTouchStart(e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    const diff = e.changedTouches[0].clientX - touchStart;
    if (diff > 50) setMobilePosition((p) => (p > 0 ? p - 1 : totalCards - 1));
    else if (diff < -50) setMobilePosition((p) => (p < totalCards - 1 ? p + 1 : 0));
  };

  // Mobile carousel: auto loop
  useEffect(() => {
    const id = setInterval(() => {
      setMobilePosition((p) => (p < totalCards - 1 ? p + 1 : 0));
    }, 3500);
    return () => clearInterval(id);
  }, [country]);

  // Desktop 3D carousel: auto-rotate
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const total = 5;
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
  }, [country]);

  return (
    <main className="wrapper">
      <section className="purposebooth-hero">
        <Image
          className="purposebooth-hero-image"
          src="/images/hero/photobooth-hero.png"
          alt="News and Events"
          width={1920}
          height={686}
          priority
        />
      </section>

      <section className="purpose-photobooth">
        <div className="purpose-photobooth__header">
          <h2 className="hopes__mosaic-title">PURPOSE PHOTOBOOTH</h2>
        </div>
        <div className="purpose-photobooth__content">
          <div className="purpose-photobooth__filters">
            {COUNTRIES.map((c) => (
              <button
                key={c.id}
                type="button"
                className={`filter-btn${country === c.id ? " active" : ""}`}
                data-country={c.id}
                onClick={() => setCountry(c.id)}
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
            <h2>PAINT OUR<br /> PURPOSE</h2>
            <div className="paint-purpose__locations">
              {PAINT_LOCATIONS.map((loc) => (
                <span
                  key={loc.id}
                  role="button"
                  tabIndex={0}
                  className={`tag${paintLocation === loc.id ? " highlight" : ""}`}
                  data-location={loc.id}
                  onClick={() => handlePaintLocation(loc.id)}
                  onKeyDown={(e) => e.key === "Enter" && handlePaintLocation(loc.id)}
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

"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";

const MOTION_DUR = 25;
const PROFILES = [
  { image: "/images/catylist/infinite/new/New folder/Ana_Cardoso.png", dataBegin: 0, video: "/videos/cytalist/Ana Cardoso video.mp4" },
  { image: "/images/catylist/infinite/new/New folder/Asif_Mazumder.png", dataBegin: 2.78, video: "/videos/cytalist/Asif Mazumder video_01.mp4" },
  { image: "/images/catylist/infinite/new/New folder/Eduardo_Almada.png", dataBegin: 5.56, video: "/videos/cytalist/Eduardo Almada video1.mp4" },
  { image: "/images/catylist/infinite/new/New folder/Ilse _Cabrera.png", dataBegin: 8.33, video: "/videos/cytalist/Ilse Cabrera video.mp4" },
  { image: "/images/catylist/infinite/new/New folder/Jeanne_Marie Patterson.png", dataBegin: 11.11, video: "/videos/cytalist/Jeanne-Marie Patterson video.mp4" },
  { image: "/images/catylist/infinite/new/New folder/Maria_Cousins.png", dataBegin: 13.89, video: "/videos/cytalist/Maria Cousins video_1.mp4" },
  { image: "/images/catylist/infinite/new/New folder/Matthew_Duggan.png", dataBegin: 16.67, video: "/videos/cytalist/Matthew Duggan video.mp4" },
  { image: "/images/catylist/infinite/new/New folder/Mukul_Jerath.png", dataBegin: 19.44, video: "/videos/cytalist/Mukul Jerath video.mp4" },
  { image: "/images/catylist/infinite/8.png", dataBegin: 22.22, video: "/videos/cytalist/Yolanda Cervantes video.mp4" },
];

export default function ChroniclesSection({ onProfileClick }) {
  const svgRef = useRef(null);
  const pathRef = useRef(null);
  const [unionReady, setUnionReady] = useState(false);
  const motionPausedRef = useRef(false);
  const startTimeRef = useRef(null);
  const pausedTimeRef = useRef(null);
  const unpauseTimeoutRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    const pathEl = pathRef.current;
    if (!svg || !pathEl) return;

    let rafId;
    startTimeRef.current = Date.now() / 1000;

    function tick() {
      const wraps = svg.querySelectorAll(".section-chronicles-bg__profile-wrap");
      if (!wraps.length) return;

      const totalLen = pathEl.getTotalLength();
      let t;
      if (motionPausedRef.current) {
        if (pausedTimeRef.current == null)
          pausedTimeRef.current = Date.now() / 1000 - startTimeRef.current;
        t = pausedTimeRef.current;
      } else {
        pausedTimeRef.current = null;
        t = Date.now() / 1000 - startTimeRef.current;
      }

      for (let i = 0; i < wraps.length; i++) {
        const begin = parseFloat(wraps[i].getAttribute("data-begin")) || 0;
        let progress = (t / MOTION_DUR + begin / MOTION_DUR) % 1;
        if (progress < 0) progress += 1;
        const pt = pathEl.getPointAtLength(progress * totalLen);
        wraps[i].setAttribute(
          "transform",
          `translate(${pt.x},${pt.y})`
        );
        const scale = 1 - 0.65 * progress;
        const innerOpacity = 1 - 0.8 * progress;
        const inner = wraps[i].firstElementChild;
        if (inner) {
          inner.setAttribute("transform", `scale(${scale})`);
          inner.setAttribute("opacity", innerOpacity);
        }
      }
      rafId = requestAnimationFrame(tick);
    }
    tick();

    const readyTimer = requestAnimationFrame(() => {
      requestAnimationFrame(() => setUnionReady(true));
    });

    return () => {
      cancelAnimationFrame(rafId);
      cancelAnimationFrame(readyTimer);
    };
  }, []);

  const handleProfileMouseEnter = () => {
    if (unpauseTimeoutRef.current) {
      clearTimeout(unpauseTimeoutRef.current);
      unpauseTimeoutRef.current = null;
    }
    motionPausedRef.current = true;
  };
  const handleProfileMouseLeave = () => {
    unpauseTimeoutRef.current = setTimeout(() => {
      motionPausedRef.current = false;
      unpauseTimeoutRef.current = null;
    }, 80);
  };

  return (
    <section className="section-chronicles-bg">
      <div className="section-chronicles-bg__svg" aria-hidden="true" />
      <div className="section-chronicles-bg__inner">
        <p className="section-chronicles-bg__eyebrow">Watch more</p>
        <h2 className="section-chronicles-bg__title">CATALYST CHRONICLES</h2>
        <p className="section-chronicles-bg__text">
          A purpose-driven journey of over five decades—improving lives, building
          sustainability, and delivering long-term value to our stakeholders.
          When you find your WHY, you find a WAY to make it happen. Our founder,
          Dr. Desh Bandhu Gupta, discovered our &apos;why&apos; and established
          our mission—to ensure that no one is left without the quality care
          they deserve.
        </p>
        <Link href="#videos" className="section-chronicles-bg__cta">
          videos below!
        </Link>
      </div>
      <div className="section-chronicles-bg__images" id="videos">
        <Image
          className="section-chronicles-bg__infinite"
          src="/images/catylist/infinite.svg"
          alt=""
          width={1632}
          height={806}
        />
        <svg
          ref={svgRef}
          id="chronicles-union-svg"
          className={`section-chronicles-bg__union${unionReady ? " section-chronicles-bg__union--ready" : ""}`}
          viewBox="0 0 1574 793"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
        >
          <defs>
            <path
              id="chronicles-motion-path"
              ref={pathRef}
              d="M85.9834 271.516C154.983 161.516 320.295 26.7168 504.483 151.516C840.983 379.516 943.983 764.016 1275.48 678.516C1404.98 645.116 1503.48 463.516 1462.48 319.016"
            />
            <clipPath
              id="profile-circle"
              clipPathUnits="objectBoundingBox"
            >
              <circle cx="0.5" cy="0.5" r="0.5" />
            </clipPath>
            <filter
              id="chronicles_play_f0"
              x="25.607"
              y="14.7273"
              width="26.4343"
              height="30.423"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="2.93878" />
              <feGaussianBlur stdDeviation="1.46939" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_255_3623"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_255_3623"
                result="shape"
              />
            </filter>
            <filter
              id="chronicles_play_f1"
              x="-2.14577e-05"
              y="0"
              width="69.9776"
              height="69.9776"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="7.98879" />
              <feGaussianBlur stdDeviation="3.9944" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_255_3623"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_255_3623"
                result="shape"
              />
            </filter>
            <symbol id="chronicles-play-icon" viewBox="0 0 70 70">
              <g filter="url(#chronicles_play_f0)">
                <path
                  d="M28.5458 14.7273L49.1026 27L28.5458 39.2727V14.7273Z"
                  fill="#048B35"
                />
              </g>
              <g filter="url(#chronicles_play_f1)">
                <path
                  d="M35.2297 53.9988C23.2135 54.1145 12.1746 46.1359 8.91496 33.9913C5.05744 19.59 13.6018 4.78364 27.9968 0.926151C42.3982 -2.93134 57.2046 5.613 61.0622 20.0143C64.9197 34.4156 56.3817 49.2155 41.9803 53.073C39.7301 53.6773 37.4606 53.973 35.2297 53.9988ZM28.5626 39.2117L49.136 26.9963L28.5626 14.781V39.2117Z"
                  fill="white"
                />
              </g>
            </symbol>
          </defs>
          <path
            d="M211.438 30.4402C313.881 -14.2701 438.372 -15.8836 561.418 67.488C741.408 189.443 868.652 361.722 965.121 462.331C1017.01 516.448 1060.57 552.214 1104.01 571.687C1143.78 589.519 1188.74 596.069 1250.13 580.233C1279.07 572.771 1316.31 543.937 1343.15 493.063C1369.48 443.162 1376.72 388.599 1364.84 346.722L1462.48 319.016L1560.13 291.311C1589.25 393.934 1567.74 502.422 1522.69 587.795C1478.16 672.196 1401.4 750.862 1300.83 776.801C1196.48 803.714 1104.25 794.264 1020.96 756.924C941.335 721.225 875.955 662.647 818.596 602.827C696.565 475.56 604.058 341.59 447.549 235.545C386.407 194.117 336.147 197.503 292.638 216.493C243.11 238.109 198.728 282.788 171.967 325.452L0 217.581C42.2383 150.245 115.013 72.5237 211.438 30.4402Z"
            fill=""
          />
          {PROFILES.map((profile, i) => (
            <g
              key={i}
              className="section-chronicles-bg__profile-wrap"
              data-begin={profile.dataBegin}
              style={{ opacity: unionReady ? 1 : 0 }}
              role="button"
              tabIndex={0}
              onClick={(e) => {
                e.preventDefault();
                onProfileClick?.(profile.video);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onProfileClick?.(profile.video);
                }
              }}
              onMouseEnter={handleProfileMouseEnter}
              onMouseLeave={() => {
                setTimeout(() => {
                  motionPausedRef.current = false;
                }, 80);
              }}
            >
              <g>
                <circle
                  className="section-chronicles-bg__profile-border"
                  r="45"
                  fill="none"
                  stroke="#0CC950"
                  strokeWidth="2"
                />
                <image
                  href={profile.image}
                  x="-45"
                  y="-45"
                  width="90"
                  height="90"
                  preserveAspectRatio="xMidYMid slice"
                  clipPath="url(#profile-circle)"
                />
              </g>
              <g className="section-chronicles-bg__profile-play">
                <use
                  href="#chronicles-play-icon"
                  x="-35"
                  y="-35"
                  width="70"
                  height="70"
                />
              </g>
            </g>
          ))}
        </svg>
      </div>
    </section>
  );
}

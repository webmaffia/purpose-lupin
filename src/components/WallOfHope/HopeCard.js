"use client";

import Image from "next/image";

export default function HopeCard({
  name,
  role,
  country,
  imageSrc,
  quote,
  positionClass,
  bgClass,
  cardBg,
}) {
  return (
    <div
      className={`hopes__mosaic-item ${positionClass} ${bgClass}`}
    >
      <div className="hopes__mosaic-flip">
        <div className="hopes__mosaic-front">
          <Image
            className="hopes__mosaic-cardbg"
            src={cardBg}
            alt=""
            width={400}
            height={240}
          />
          <Image
            src={imageSrc}
            alt={name}
            width={400}
            height={500}
            loading="lazy"
          />
          <div className="hopes__mosaic-content">
            <h3>{name}</h3>
            <p>{role}</p>
            <span>{country}</span>
          </div>
        </div>
        <div className="hopes__mosaic-back">
          <div className="hopes__mosaic-back-inner">
            <p>{quote}</p>
          </div>
          <Image
            className="hopes__mosaic-petals"
            src="/images/wall-of-hopes/petals-flip.png"
            alt=""
            width={400}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}

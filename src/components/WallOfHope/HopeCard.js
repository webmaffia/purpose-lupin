"use client";

import Image from "next/image";

export default function HopeCard({
  name,
  role,
  country,
  imageSrc,
  profileImageSrc,
  quote,
  positionClass,
  bgClass,
  cardBg,
}) {
  const profileImg = profileImageSrc ?? imageSrc;
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
            <p className="hopes__mosaic-quote">{quote}</p>
            <div className="hopes__mosaic-profile">
              <Image
                className="hopes__mosaic-profile-img"
                src={profileImg}
                alt={name}
                width={160}
                height={160}
              />
              <span className="hopes__mosaic-profile-name">{name}</span>
            </div>
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

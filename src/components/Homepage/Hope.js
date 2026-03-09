"use client";
import Image from "next/image";

const DEFAULT_IMAGE = "/images/New folder/happy-man-listening-music-park 1.png";

export default function Hope({ hope }) {
  const title = hope?.title ?? "WE CATALYZE TREATMENTS THAT TRANSFORM\nHOPE INTO\nHEALING";
  const tagline = hope?.tagline ?? "We catalyze treatments that transform";
  const description = hope?.description ?? "";
  const imageUrl = hope?.imageUrl ?? DEFAULT_IMAGE;

  return (
    <>
      <section className="section-hope">
        <div className="section-hope__content">
          <Image
            src="/images/New folder/half-circle.svg"
            alt=""
            className="section-hope__half-circle"
            aria-hidden="true"
            width="400"
            height="400"
          />

          <h2 className="section-hope__title">
            {title.split("\n").map((line, i) => (
              <span key={i}>
                {i > 0 && <br />}
                {line}
              </span>
            ))}
          </h2>
          {description && (
            <p className="section-hope__text">
              {description.split("\n").map((line, i) => (
                <span key={i}>
                  {i > 0 && <br />}
                  {line}
                </span>
              ))}
            </p>
          )}
        </div>
        <div className="section-hope__media">
          <Image
            src={imageUrl}
            alt="Person enjoying music outdoors"
            className="section-hope__img"
            width="914"
            height="700"
            unoptimized={imageUrl.startsWith("http")}
          />
        </div>
      </section>
    </>
  );
}

"use client";
import Image from "next/image";

export default function Hope() {
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
            WE CATALYZE TREATMENTS THAT TRANSFORM
            <br /> HOPE INTO HEALING
          </h2>
          <p className="section-hope__text">
            A purpose-driven journey of over five decades, improving lives,
            building sustainability, and delivering long-term value to our
            stakeholders. When you find your WHY, you find a WAY to make it
            happen. Our founder, Dr. Desh Bandhu Gupta, discovered our{" "}
            <strong>why</strong> and established our mission to ensure that no
            one is left without the quality care they deserve.
          </p>
        </div>
        <div className="section-hope__media">
          <Image
            src="/images/New folder/happy-man-listening-music-park 1.png"
            alt="Person enjoying music outdoors"
            className="section-hope__img"
            width="914"
            height="700"
          />
        </div>
      </section>
    </>
  );
}

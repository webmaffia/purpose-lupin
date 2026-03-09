"use client";
import Image from "next/image";

export default function CoreCommitments() {
  return (
    <>
      <section className="section-core">
        <Image
          src="/images/core/text bg.svg"
          alt=""
          className="section-core__text-bg"
          aria-hidden="true"
          width="400"
          height="400"
        />
        <h2 className="section-core__title">
          3 CORE
          <br />
          COMMITMENTS
        </h2>
        <div className="section-core__cards">
          <article className="section-core__card section-core__card--hover-image">
            <Image
              src="/images/core/greencircle.svg"
              alt=""
              className="section-core__card-circle"
              aria-hidden="true"
              width="550"
              height="550"
            />
            <div
              className="section-core__card-bg section-core__card-bg--hand"
              aria-hidden="true"
            />
            <div
              className="section-core__card-overlay"
              aria-hidden="true"
            ></div>
            <div className="section-core__card-content">
              <div className="headingWrapper">
                <Image
                  src="/images/homepage-icons/pointer.svg"
                  alt=""
                  className="section-core__card-asterisk"
                  aria-hidden="true"
                  width="120"
                  height="120"
                />
                <p className="section-core__card-text">Relief from disease</p>
              </div>
              <p className="section-core__card-desc">
                Delivering meaningful treatments for today and tomorrow
              </p>
            </div>
            <Image
              src="/images/homepage-icons/core1.svg"
              alt=""
              className="section-core__card-icon"
              width="120"
              height="120"
            />
          </article>
          <article className="section-core__card section-core__card--hover-image">
            <Image
              src="/images/core/greencircle.svg"
              alt=""
              className="section-core__card-circle"
              aria-hidden="true"
              width="550"
              height="550"
            />
            <div
              className="section-core__card-bg section-core__card-bg--innovating"
              aria-hidden="true"
            />
            <div
              className="section-core__card-overlay"
              aria-hidden="true"
            ></div>
            <div className="section-core__card-content">
              <div className="headingWrapper">
                <Image
                  src="/images/homepage-icons/pointer.svg"
                  alt=""
                  className="section-core__card-asterisk"
                  aria-hidden="true"
                  width="120"
                  height="120"
                />
                <p className="section-core__card-text">Innovation to unlock</p>
              </div>
              <p className="section-core__card-desc">
                Unlocking new ideas and solutions for better outcomes
              </p>
            </div>
            <Image
              src="/images/homepage-icons/core2.svg"
              alt=""
              className="section-core__card-icon"
              width="120"
              height="120"
            />
          </article>
          <article className="section-core__card section-core__card--hover-image">
            <Image
              src="/images/core/greencircle.svg"
              alt=""
              className="section-core__card-circle"
              aria-hidden="true"
              width="550"
              height="550"
            />
            <div
              className="section-core__card-bg section-core__card-bg--solutions"
              aria-hidden="true"
            />
            <div
              className="section-core__card-overlay"
              aria-hidden="true"
            ></div>

            <div className="section-core__card-content">
              <div className="headingWrapper">
                <Image
                  src="/images/homepage-icons/pointer.svg"
                  alt=""
                  className="section-core__card-asterisk"
                  aria-hidden="true"
                  width="120"
                  height="120"
                />
                <p className="section-core__card-text">
                  Solution for undeserved communities
                </p>
              </div>
              <p className="section-core__card-desc">
                Reaching underserved communities with meaningful solutions
              </p>
            </div>
            <Image
              src="/images/homepage-icons/core3.svg"
              alt=""
              className="section-core__card-icon"
              width="120"
              height="120"
            />
          </article>
        </div>
      </section>
    </>
  );
}

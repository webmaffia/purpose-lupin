"use client"
import Image from "next/image";
import Link from "next/link";

export default function Purpose() {
  return (
    <>
      <section className="section-action">
        <h2 className="section-action__title">OUR PURPOSE IN ACTION</h2>
        <div className="section-action__cards">
          <article className="section-action__card">
            <Image
              src="/images/homepage-icons/action1.svg"
              alt=""
              className="section-action__icon"
              width="120"
              height="120"
            />
            <h3 className="section-action__card-title">Leader Speak</h3>
            <p className="section-action__card-text">
              Our leaders share how our purpose guides every decision and drives
              us to create meaningful impact.
            </p>
            <Link href="#" className="section-action__btn">
              Click here to explore!
            </Link>
          </article>
          <article className="section-action__card">
            <Image
              src="/images/homepage-icons/action2.svg"
              alt=""
              className="section-action__icon"
              width="120"
              height="120"
            />
            <h3 className="section-action__card-title">Catalyst Chronicles</h3>
            <p className="section-action__card-text">
              Hear from our Lupinytts on how they are inspired by our purpose in
              their roles, proving that even small actions can drive significant
              changes.
            </p>
            <Link href="/catalyst-chronicles" className="section-action__btn">
              Watch their stories
            </Link>
          </article>
          <article className="section-action__card">
            <Image
              src="/images/homepage-icons/action3.svg"
              alt=""
              className="section-action__icon"
              width="120"
              height="120"
            />
            <h3 className="section-action__card-title">Wall of Hope</h3>
            <p className="section-action__card-text">
              Explore our ever-growing mosaic of Lupinytts, each tile showcasing
              how our purpose empowers them to build a better tomorrow.
            </p>
            <Link href="/wall-of-hope" className="section-action__btn">
              Explore the wall
            </Link>
          </article>
        </div>
      </section>
    </>
  );
}

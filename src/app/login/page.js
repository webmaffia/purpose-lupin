import Image from "next/image";
import Link from "next/link";
import LoginForm from "@/components/LoginForm";

export const metadata = {
  title: "Sign in | Lupin Purpose Microsite",
  description: "Sign in with your Lupin work account",
};

export default function LoginPage() {
  return (
    <main className="login-page">
      <div className="login">
 
        <section className="login__hero">
          <div className="login__hero-bg login__hero-bg--banner" />
          <Link href="/" className="login__logo" aria-label="Lupin Home">
            <Image
              src="/images/logo.svg"
              alt="Lupin"
              width={85}
              height={102}
            />
          </Link>
          <div className="login__hero-tagline-wrap">
            <h1 className="login__tagline">
              POWERING
              <br />
              PROGRESS. TOGETHER.
            </h1>
            <p className="login__para">
              Create your account on the Lupin Microsite to access tools,
              updates, and resources that empower you to drive impact across
              Lupin.
            </p>
          </div>
        </section>

        {/* Right: Login form + petals */}
        <section className="login__panel">
          <div className="login__petals" role="presentation">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/login/shapes/petal-group.svg"
              alt=""
              className="login__petals-img"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/login/shapes/mobile-petal.svg"
              alt=""
              className="login__mobile-petals-img"
            />
          </div>
          <div className="login__form-wrap">
            <LoginForm />
          </div>
        </section>
      </div>
    </main>
  );
}

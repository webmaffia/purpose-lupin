"use client"
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__inner">
          <div className="footer__top">
            <nav className="footer__nav" aria-label="Footer navigation">
              <div className="footer__nav-col">
                <Link href="/news-and-events" className="footer__link">
                  <span className="footer__link-text">News &amp; Events</span>
                </Link>
                <Link href="/purpose-highlights" className="footer__link">
                  <span className="footer__link-text">Purpose Highlights</span>
                </Link>
                <Link href="/wall-of-hope" className="footer__link">
                  <span className="footer__link-text">Wall Of Hope</span>
                </Link>
              </div>
              <div className="footer__nav-col">
                <Link href="/leadership" className="footer__link">
                  <span className="footer__link-text">Leader Speak</span>
                </Link>
                <Link href="/catalyst-chronicles" className="footer__link">
                  <span className="footer__link-text">Catalyst Chronicles</span>
                </Link>
              </div>
            </nav>
            {/* <div className="footer__subscribe">
				<h3 className="footer__subscribe-title">SUBSCRIBE US</h3>
				<form className="footer__form" action="#" method="post">
					<input type="email" name="email" className="footer__input" placeholder="Email Id" required />
					<button type="submit" className="footer__submit" aria-label="Subscribe">
						<Image src="assets/images/social-icons/arrowbutton.svg" alt="" width="24" height="24" />
					</button>
				</form>
			</div>  */}
          </div>
          <div className="footer__divider" role="presentation"></div>
          <div className="footer__middle">
            {/* <div className="footer__social">
				<a href="#" className="footer__social-link" aria-label="X (Twitter)"><Image src="assets/images/social-icons/x.com.svg" alt="" width="24" height="24" /></a>
				<a href="#" className="footer__social-link" aria-label="Facebook"><Image src="assets/images/social-icons/facebook.svg" alt="" width="24" height="24" /></a>
				<a href="#" className="footer__social-link" aria-label="Instagram"><Image src="assets/images/social-icons/insta.svg" alt="" width="24" height="24" /></a>
				<a href="#" className="footer__social-link" aria-label="LinkedIn"><Image src="assets/images/social-icons/linkedin.svg" alt="" width="24" height="24" /></a>
				<a href="#" className="footer__social-link" aria-label="YouTube"><Image src="assets/images/social-icons/youtube.svg" alt="" width="24" height="24" /></a>
			</div>  */}
            <div className="footer__contact">
              <Link
                href="mailto:corporatecommunication@lupin.com"
                className="footer__contact-item"
              >
                <Image
                  src="/images/social-icons/mail.svg"
                  alt=""
                  className="footer__contact-icon"
                  width="20"
                  height="20"
                />
                <span>corporatecommunication@lupin.com</span>
              </Link>
              <Link href="tel:+912240189999" className="footer__contact-item">
                <Image
                  src="/images/social-icons/call.svg"
                  alt=""
                  className="footer__contact-icon"
                  width="20"
                  height="20"
                />
                <span>+91 22 4018 9999</span>
              </Link>
            </div>
          </div>
          <div className="footer__divider" role="presentation"></div>
          <div className="footer__bottom">
           
            <Link
              href="https://www.lupin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__website"
            >
              www.lupin.com
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}

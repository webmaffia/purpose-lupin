"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("site-header-menu-open");
    } else {
      document.body.classList.remove("site-header-menu-open");
    }
    return () => document.body.classList.remove("site-header-menu-open");
  }, [menuOpen]);

  useEffect(() => {
    closeMenu();
  }, [pathname]);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" className="site-header__logo" aria-label="Lupin Home">
          <Image
            src="/images/logo.svg"
            alt="Lupin"
            width={85}
            height={102}
          />
        </Link>

        <button
          type="button"
          className="site-header__hamburger"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="site-header__drawer"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className="site-header__hamburger-bar" />
          <span className="site-header__hamburger-bar" />
          <span className="site-header__hamburger-bar" />
        </button>

        <div
          id="site-header__drawer"
          className="site-header__drawer"
          aria-hidden={!menuOpen}
        >
          <button
            type="button"
            className="site-header__drawer-close"
            aria-label="Close menu"
            onClick={closeMenu}
          >
            ×
          </button>
          <nav className="site-header__nav-cards" aria-label="Main navigation">
            <Link href="/leadership" className="site-header__nav-card" onClick={closeMenu}>
              <Image
                src="/images/homepage-icons/nav1.svg"
                alt="Leaders Speak"
                width={170}
                height={149}
              />
            </Link>
            <Link href="/catalyst-chronicles" className="site-header__nav-card" onClick={closeMenu}>
              <Image
                src="/images/homepage-icons/nav2.svg"
                alt="Catalyst Chronicles"
                width={170}
                height={149}
              />
            </Link>
            <Link href="/wall-of-hope" className="site-header__nav-card" onClick={closeMenu}>
              <Image
                src="/images/homepage-icons/nav3.svg"
                alt="Wall of Hope"
                width={170}
                height={149}
              />
            </Link>
          </nav>
          <ul className="site-header__drawer-list" aria-label="Main navigation">
            <li>
              <Link href="/leadership" onClick={closeMenu}>Leaders Speak</Link>
            </li>
            <li>
              <Link href="/catalyst-chronicles" onClick={closeMenu}>Catalyst Chronicles</Link>
            </li>
            <li>
              <Link href="/wall-of-hope" onClick={closeMenu}>Wall of Hope</Link>
            </li>
            <li>
              <Link href="/#news-events" onClick={closeMenu}>News &amp; Events</Link>
            </li>
            <li>
              <Link href="/#purpose-highlights" onClick={closeMenu}>Purpose Highlights</Link>
            </li>
          </ul>
          <nav className="site-header__utility" aria-label="Utility navigation">
            <Link href="/" className={`site-header__utility-link${pathname === "/" ? " is-active" : ""}`} onClick={closeMenu}>
              <span className="site-header__utility-link-text">Home</span>
            </Link>
            <span className="site-header__utility-sep" aria-hidden="true" />
            <Link href="/#news-events" className="site-header__utility-link" onClick={closeMenu}>
              <span className="site-header__utility-link-text">News &amp; Events</span>
            </Link>
            <span className="site-header__utility-sep" aria-hidden="true" />
            <Link href="/#purpose-highlights" className="site-header__utility-link" onClick={closeMenu}>
              <span className="site-header__utility-link-text">Purpose Highlights</span>
            </Link>
          </nav>
        </div>

        <div
          className="site-header__overlay"
          aria-hidden={!menuOpen}
          onClick={closeMenu}
          onKeyDown={(e) => e.key === "Escape" && closeMenu()}
          role="button"
          tabIndex={-1}
        />
      </div>
    </header>
  );
}

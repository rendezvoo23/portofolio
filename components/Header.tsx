"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { getLocalizedPath, saveLocale } from "@/components/LanguageDetector";
import { siteCopy, type Locale } from "@/data/site";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogoTurned, setIsLogoTurned] = useState(false);
  const pathname = usePathname();
  const locale: Locale =
    pathname === "/en" || pathname.startsWith("/en/") ? "en" : "ru";
  const copy = siteCopy[locale].menu;
  const homeHref = locale === "en" ? "/en" : "/";
  const homeAnchor = locale === "en" ? "/en/" : "/";
  const menuItems = [
    { href: `${homeAnchor}#projects`, label: copy.projects },
    { href: `${homeAnchor}#about`, label: copy.about },
    { href: `${homeAnchor}#contact`, label: copy.contacts }
  ];

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`site-header ${isOpen ? "is-menu-open" : ""}`}>
      <Link
        aria-label={copy.homeLabel}
        className={`site-brand focus-ring ${isLogoTurned ? "is-turned" : ""}`}
        href={homeHref}
        onClick={(event) => {
          if (pathname === homeHref) event.preventDefault();
          setIsLogoTurned((value) => !value);
          closeMenu();
        }}
      >
        <img
          alt=""
          className="site-brand-logo"
          height="66"
          src="/simon-bedunkevich-logo.svg"
          width="56"
        />
      </Link>

      <button
        aria-hidden={!isOpen}
        aria-label={copy.closeLabel}
        className={`menu-dismiss ${isOpen ? "is-open" : ""}`}
        onClick={closeMenu}
        tabIndex={isOpen ? 0 : -1}
        type="button"
      />

      <div className={`menu-shell ${isOpen ? "is-open" : ""}`}>
        <button
          aria-controls="site-menu"
          aria-expanded={isOpen}
          aria-label={isOpen ? copy.closeLabel : copy.openLabel}
          className={`menu-button ${isOpen ? "is-open" : ""}`}
          onClick={() => setIsOpen((value) => !value)}
          type="button"
        >
          <span>{isOpen ? copy.close : copy.menu}</span>
          <span aria-hidden="true" className="menu-symbol">
            <span />
            <span />
          </span>
        </button>

        <aside
          aria-hidden={!isOpen}
          className="menu-drawer-content"
          id="site-menu"
          role="dialog"
        >
          <nav aria-label={copy.menu} className="menu-nav">
            {menuItems.map((item) => (
              <Link
                className="menu-link focus-ring"
                href={item.href}
                key={item.href}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="menu-footer">
            <div aria-label={copy.languageLabel} className="menu-languages" role="group">
              {(["ru", "en"] as Locale[]).map((language) => (
                <Link
                  aria-current={locale === language ? "page" : undefined}
                  className={`menu-language ${locale === language ? "is-active" : ""}`}
                  href={getLocalizedPath(pathname, language)}
                  key={language}
                  onClick={() => saveLocale(language)}
                >
                  {language.toUpperCase()}
                </Link>
              ))}
            </div>
            <div className="menu-footer-links">
              <a href="mailto:simon@bedunkevich.com">email</a>
              <a href="https://t.me/rndzvoo" rel="noreferrer" target="_blank">
                telegram
              </a>
            </div>
          </div>
        </aside>
      </div>
    </header>
  );
}

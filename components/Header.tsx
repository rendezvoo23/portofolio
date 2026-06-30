"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const menuItems = [
  { href: "/#projects", label: "проекты" },
  { href: "/#about", label: "обо мне" },
  { href: "/#contact", label: "контакты" }
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`site-header ${isOpen ? "is-menu-open" : ""}`}>
      <Link
        aria-label="На главную"
        className="site-brand focus-ring"
        href="/"
        onClick={closeMenu}
      >
        Семен Бедункевич
      </Link>

      <div
        aria-hidden={!isOpen}
        className={`menu-dismiss ${isOpen ? "is-open" : ""}`}
        onClick={closeMenu}
      />

      <div className={`menu-shell ${isOpen ? "is-open" : ""}`}>
        <button
          aria-controls="site-menu"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
          className={`menu-button ${isOpen ? "is-open" : ""}`}
          onClick={() => setIsOpen((value) => !value)}
          type="button"
        >
          <span>{isOpen ? "закрыть" : "меню"}</span>
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
          <nav aria-label="Меню" className="menu-nav">
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
            <a href="mailto:ssbedunkevich@edu.hse.ru">email</a>
            <a href="https://t.me/rndzvoo" rel="noreferrer" target="_blank">
              telegram ↗
            </a>
          </div>
        </aside>
      </div>
    </header>
  );
}

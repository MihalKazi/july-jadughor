"use client";

import Link from "next/link";
import { useState } from "react";
import { SECTIONS } from "@/lib/content";
import { useLanguage } from "@/lib/language-context";
import { InkTrail } from "./InkTrail";
import { ReadingProgress } from "./ReadingProgress";

export function Masthead({ active }: { active?: string }) {
  const { lang, toggle } = useLanguage();
  const [open, setOpen] = useState(false);
  const sections = SECTIONS.filter((s) => s.slug);

  return (
    <header className="site-header">
      <InkTrail />
      <ReadingProgress />
      <div className="site-bar">
        <Link href="/" className="hero-brand">
          <span className="hero-brand-mark" aria-hidden="true" />
          <span className="hero-brand-name" lang="bn">
            জুলাই গণঅভ্যুত্থান স্মৃতি জাদুঘর
          </span>
        </Link>

        <nav className="site-nav-desk" aria-label="Sections">
          <ol>
            {sections.map((s) => {
              const isActive = active === s.slug;
              return (
                <li key={s.slug}>
                  <Link
                    href={`/${s.slug}`}
                    className={isActive ? "is-active" : undefined}
                    aria-current={isActive ? "page" : undefined}
                    lang={lang}
                  >
                    <span className="site-nav-num">{s.number}</span>
                    {s.short[lang]}
                  </Link>
                </li>
              );
            })}
          </ol>
        </nav>

        <div className="site-bar-tools">
          <button type="button" onClick={toggle} className="hero-lang" aria-label="Toggle language">
            <span className={lang === "bn" ? "hero-lang-on" : undefined}>বাং</span>
            <span className="hero-lang-sep">/</span>
            <span className={lang === "en" ? "hero-lang-on" : undefined}>EN</span>
          </button>
          <button
            type="button"
            className="site-menu-btn"
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </div>

      {open && (
        <nav id="site-menu" className="site-menu" aria-label="Sections">
          <ol>
            {sections.map((s) => {
              const isActive = active === s.slug;
              return (
                <li key={s.slug}>
                  <Link
                    href={`/${s.slug}`}
                    className={isActive ? "is-active" : undefined}
                    aria-current={isActive ? "page" : undefined}
                    lang={lang}
                    onClick={() => setOpen(false)}
                  >
                    <span className="site-nav-num">{s.number}</span>
                    <span>{s.title[lang]}</span>
                  </Link>
                </li>
              );
            })}
          </ol>
        </nav>
      )}
    </header>
  );
}

"use client";

import Link from "next/link";
import { SECTIONS } from "@/lib/content";
import { useLanguage } from "@/lib/language-context";
import { MonumentMark } from "./MonumentMark";

export function Masthead({ active }: { active?: string }) {
  const { lang, toggle } = useLanguage();

  return (
    <header className="masthead">
      <div className="masthead-rule-top" aria-hidden="true" />
      <div className="masthead-inner">
        <Link href="/" className="masthead-title-block">
          <span className="masthead-title-bn">
            জুলাই গণঅভ্যুত্থান স্মৃতি জাদুঘর
          </span>
          <span className="masthead-title-en">
            July Uprising Memorial Museum — Digital Archive
          </span>
        </Link>

        <div className="masthead-right">
          <button
            type="button"
            onClick={toggle}
            className="lang-toggle"
            aria-label="Toggle language"
          >
            <span className={lang === "bn" ? "lang-toggle-active" : ""}>বাং</span>
            <span className="lang-toggle-sep">/</span>
            <span className={lang === "en" ? "lang-toggle-active" : ""}>EN</span>
          </button>
          <div className="masthead-stamp-wrap">
            <MonumentMark size={112} />
          </div>
        </div>
      </div>
      <div className="masthead-rule-bottom" aria-hidden="true" />

      <div className="masthead-dateline">
        <span>
          {lang === "bn" ? "সংরক্ষণাগার সংস্করণ · ০১/২০২৫" : "Archive edition · 01/2025"}
        </span>
        <span>
          {lang === "bn" ? "স্বাধীন সংকলন" : "Independent compilation"}
        </span>
      </div>

      <nav className="masthead-nav" aria-label="Sections">
        <ol>
          {SECTIONS.map((s) => {
            const href = s.slug ? `/${s.slug}` : "/";
            const isActive = active === s.slug;
            return (
              <li key={s.slug || "home"}>
                <Link
                  href={href}
                  className={isActive ? "nav-link nav-link-active" : "nav-link"}
                >
                  <span className="nav-number">{s.number}</span>
                  {s.title[lang]}
                </Link>
              </li>
            );
          })}
        </ol>
      </nav>
    </header>
  );
}

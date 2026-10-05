"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { SECTIONS } from "@/lib/content";
import { useLanguage } from "@/lib/language-context";

const SLIDES = ["/hero-image.jpg", "/hero-2.jpg", "/hero-3.jpg", "/hero-4.jpg", "/hero-5.jpg"];
const SLIDE_DURATION = 3500;

const MUSEUM = {
  bn: "জুলাই গণঅভ্যুত্থান স্মৃতি জাদুঘর",
  en: "July Uprising Memorial Museum",
};

const pad = (n: number) => String(n).padStart(2, "0");
const clamp = (v: number, lim: number) => Math.max(-lim, Math.min(lim, v));

export function PhotoHero() {
  const { lang, toggle } = useLanguage();
  const other = lang === "bn" ? "en" : "bn";
  const words = MUSEUM[lang].split(" ");
  const [active, setActive] = useState(0);
  const [cycle, setCycle] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const hover = useRef({ x: 0, y: 0 });
  const drag = useRef<{ x: number; y: number } | null>(null);
  const offset = useRef({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    timerRef.current = setInterval(() => {
      setActive((i) => (i + 1) % SLIDES.length);
      setCycle((c) => c + 1);
    }, SLIDE_DURATION);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const applyTilt = () => {
    const el = stageRef.current;
    if (!el) return;
    const { x, y } = hover.current;
    const rx = clamp(-y * 7 + offset.current.y * 0.06, 22);
    const ry = clamp(x * 9 + offset.current.x * 0.08, 26);
    el.style.setProperty("--rx", `${rx.toFixed(2)}deg`);
    el.style.setProperty("--ry", `${ry.toFixed(2)}deg`);
    el.style.setProperty("--mx", `${((x + 1) / 2) * 100}%`);
    el.style.setProperty("--my", `${((y + 1) / 2) * 100}%`);
    const section = sectionRef.current;
    if (section) {
      section.style.setProperty("--px", `${(-x * 14).toFixed(1)}px`);
      section.style.setProperty("--py", `${(-y * 10).toFixed(1)}px`);
    }
  };

  const onMove = (e: React.PointerEvent<HTMLElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    hover.current = {
      x: clamp(((e.clientX - rect.left) / rect.width) * 2 - 1, 1),
      y: clamp(((e.clientY - rect.top) / rect.height) * 2 - 1, 1),
    };
    if (drag.current) {
      offset.current = { x: e.clientX - drag.current.x, y: e.clientY - drag.current.y };
    }
    applyTilt();
  };

  const onDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    drag.current = { x: e.clientX, y: e.clientY };
    setDragging(true);
  };

  const onUp = () => {
    drag.current = null;
    offset.current = { x: 0, y: 0 };
    setDragging(false);
    applyTilt();
  };

  const onLeave = () => {
    hover.current = { x: 0, y: 0 };
    applyTilt();
  };

  return (
    <section ref={sectionRef} className="hero" onPointerMove={onMove} onPointerLeave={onLeave}>
      <div
        ref={stageRef}
        className={`hero-stage${dragging ? " is-dragging" : ""}`}
        onPointerDown={onDown}
        onPointerUp={onUp}
        onPointerCancel={onUp}
      >
        {SLIDES.map((src, i) => (
          <div key={src + i} className={`hero-slide${i === active ? " hero-slide-active" : ""}`}>
            <img src={src} alt="" className="hero-img" draggable={false} />
          </div>
        ))}
        <div className="hero-scrim" aria-hidden="true" />
      </div>

      <header className="hero-top">
        <Link href="/" className="hero-brand">
          <span className="hero-brand-mark" aria-hidden="true" />
          <span className="hero-brand-name" lang="bn">
            জুলাই গণঅভ্যুত্থান স্মৃতি জাদুঘর
          </span>
        </Link>
        <button type="button" onClick={toggle} className="hero-lang" aria-label="Toggle language">
          <span className={lang === "bn" ? "hero-lang-on" : undefined}>বাং</span>
          <span className="hero-lang-sep">/</span>
          <span className={lang === "en" ? "hero-lang-on" : undefined}>EN</span>
        </button>
      </header>

      <div className="hero-foot">
        <div className="hero-titleblock">
          <h1 className="hero-title" lang={lang} key={lang}>
            {words.map((word, i) => (
              <span key={i} className="hero-word" style={{ animationDelay: `${180 + i * 110}ms` }}>
                {word}
                {i < words.length - 1 ? " " : ""}
              </span>
            ))}
          </h1>
          <p className="hero-sub" lang={other}>
            {MUSEUM[other]}
          </p>
        </div>

        <div className="hero-meta">
          <span className="hero-counter">
            {pad(active + 1)} / {pad(SLIDES.length)}
          </span>
          <span className="hero-track" aria-hidden="true">
            <span key={cycle} className="hero-progress" style={{ animationDuration: `${SLIDE_DURATION}ms` }} />
          </span>
        </div>

        <nav className="hero-nav" aria-label="Sections">
          <ol>
            {SECTIONS.filter((s) => s.slug).map((s) => (
              <li key={s.slug}>
                <Link href={`/${s.slug}`}>
                  <span className="hero-nav-num">{s.number}</span>
                  <span className="hero-nav-label" lang={lang}>
                    {s.title[lang]}
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </nav>

        <p className="hero-disclaimer">
          <span lang="bn">এটি জুলাই জাদুঘরের অফিশিয়াল ওয়েবসাইট নয়।</span>
          <span lang="en">This is not the official website of the July Museum.</span>
        </p>
      </div>
    </section>
  );
}

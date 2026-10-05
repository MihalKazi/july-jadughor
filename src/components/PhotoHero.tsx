"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/language-context";

const SLIDES = ["/hero-image.jpg"];
const SLIDE_DURATION = 6000;
const FADE_DURATION = 1200;

export function PhotoHero() {
  const { lang } = useLanguage();
  const [active, setActive] = useState(0);
  const [cycle, setCycle] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

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

  return (
    <section className="photo-hero">
      {SLIDES.map((src, i) => (
        <div
          key={src + i}
          className={`photo-hero-slide${i === active ? " photo-hero-slide-active" : ""}`}
          style={{ transitionDuration: `${FADE_DURATION}ms` }}
        >
          <img
            key={i === active ? `${src}-${cycle}` : src}
            src={src}
            alt=""
            className="photo-hero-img"
            style={{ animationDuration: `${SLIDE_DURATION + FADE_DURATION}ms` }}
          />
        </div>
      ))}
      <div className="photo-hero-scrim" aria-hidden="true" />
      <div className="photo-hero-caption">
        <span className="photo-hero-kicker">
          {lang === "bn" ? "জুলাই ২০২৪" : "July 2024"}
        </span>
        <h1 className="photo-hero-title">
          {lang === "bn"
            ? "জুলাই গণঅভ্যুত্থান স্মৃতি জাদুঘর"
            : "July Uprising Memorial Museum"}
        </h1>
      </div>
    </section>
  );
}

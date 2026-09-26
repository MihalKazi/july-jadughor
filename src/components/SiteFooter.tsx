"use client";

import { useLanguage } from "@/lib/language-context";

export function SiteFooter() {
  const { lang } = useLanguage();
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <span>
          {lang === "bn"
            ? "স্বাধীন সংরক্ষণাগার — জাদুঘরের দাপ্তরিক ওয়েবসাইট নয়"
            : "Independent archive — not the museum's official website"}
        </span>
        <span className="tabular">
          {lang === "bn" ? "সর্বশেষ হালনাগাদ ২০২৫" : "Last updated 2025"}
        </span>
      </div>
    </footer>
  );
}

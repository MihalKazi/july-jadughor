"use client";

import { useLanguage } from "@/lib/language-context";
import type { Bi } from "@/lib/content";

export function PageHeader({
  notifNumber,
  title,
  dek,
  image,
}: {
  notifNumber: string;
  title: Bi;
  dek: Bi;
  image: string;
}) {
  const { lang } = useLanguage();
  return (
    <header className="page-header">
      <div className="page-banner">
        <img src={image} alt="" className="page-banner-img" />
        <div className="page-banner-scrim" aria-hidden="true" />
        <div className="page-banner-text">
          <span className="page-header-notif tabular">
            {lang === "bn" ? `বিজ্ঞপ্তি নং ${notifNumber}` : `Notification No. ${notifNumber}`}
          </span>
          <h1 className="page-header-title">{title[lang]}</h1>
          <p className="page-header-dek">{dek[lang]}</p>
        </div>
      </div>
    </header>
  );
}

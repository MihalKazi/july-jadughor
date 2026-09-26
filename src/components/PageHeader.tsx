"use client";

import { useLanguage } from "@/lib/language-context";
import type { Bi } from "@/lib/content";

export function PageHeader({
  notifNumber,
  title,
  dek,
}: {
  notifNumber: string;
  title: Bi;
  dek: Bi;
}) {
  const { lang } = useLanguage();
  return (
    <header className="page-header">
      <span className="page-header-notif tabular">
        {lang === "bn" ? `বিজ্ঞপ্তি নং ${notifNumber}` : `Notification No. ${notifNumber}`}
      </span>
      <h1 className="page-header-title">{title[lang]}</h1>
      <p className="page-header-dek">{dek[lang]}</p>
    </header>
  );
}

"use client";

import Link from "next/link";
import { SECTIONS } from "@/lib/content";
import { useLanguage } from "@/lib/language-context";

export function GazetteIndex() {
  const { lang } = useLanguage();
  const entries = SECTIONS.filter((s) => s.slug !== "");

  return (
    <ol className="gazette-index">
      {entries.map((s) => (
        <li key={s.slug} className="gazette-index-item">
          <Link href={`/${s.slug}`} className="gazette-index-link">
            <span className="gazette-index-number tabular">{s.number}</span>
            <span className="gazette-index-text">
              <span className="gazette-index-title">{s.title[lang]}</span>
              <span className="gazette-index-dek">{s.dek[lang]}</span>
            </span>
            <span className="gazette-index-arrow" aria-hidden="true">
              →
            </span>
          </Link>
        </li>
      ))}
    </ol>
  );
}

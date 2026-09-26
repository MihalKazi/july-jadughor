"use client";

import Image from "next/image";
import type { Clause, Citation } from "@/lib/content";
import { useLanguage } from "@/lib/language-context";
import { Stamp } from "./Stamp";

export function ClauseEntry({
  clause,
  citations,
  crossRefLabel,
  crossRefHref,
}: {
  clause: Clause;
  citations: Citation[];
  crossRefLabel?: string;
  crossRefHref?: string;
}) {
  const { lang } = useLanguage();
  const primaryCitation = clause.citationIds?.length
    ? citations.find((c) => c.id === clause.citationIds![0])
    : undefined;

  return (
    <article className="clause" id={clause.id}>
      <span className="clause-number tabular">{clause.number}</span>
      <div className="clause-body">
        {clause.videoId && primaryCitation && (
          <a
            href={primaryCitation.href}
            target="_blank"
            rel="noopener noreferrer"
            className="clause-video-thumb"
            aria-label={clause.title[lang]}
          >
            <Image
              src={`https://i.ytimg.com/vi/${clause.videoId}/hqdefault.jpg`}
              alt=""
              loading="lazy"
              width={480}
              height={270}
            />
            <span className="clause-video-play" aria-hidden="true">
              <svg viewBox="0 0 48 48" width="44" height="44">
                <circle cx="24" cy="24" r="22" fill="var(--ink)" opacity="0.82" />
                <path d="M19 15 L34 24 L19 33 Z" fill="var(--paper)" />
              </svg>
            </span>
          </a>
        )}
        <h3 className="clause-title">
          {primaryCitation ? (
            <a
              href={primaryCitation.href}
              target="_blank"
              rel="noopener noreferrer"
              className="clause-title-link"
            >
              {clause.title[lang]}
              <span className="clause-title-mark" aria-hidden="true">
                ↗
              </span>
            </a>
          ) : (
            clause.title[lang]
          )}
        </h3>
        {primaryCitation && (
          <span className="clause-byline">
            {lang === "bn" ? "সূত্র: " : "Source: "}
            {primaryCitation.source[lang]}
          </span>
        )}
        <p className="clause-text">{clause.body[lang]}</p>
        {(clause.stamp || (clause.crossRef && crossRefLabel) || clause.crossRefNote) && (
          <div className="clause-meta">
            {clause.stamp && <Stamp kind={clause.stamp} />}
            {clause.crossRef && crossRefLabel && crossRefHref && (
              <a href={crossRefHref} className="clause-crossref">
                {lang === "bn" ? "সম্পর্কিত ধারা →" : "related clause →"} {crossRefLabel}
              </a>
            )}
            {clause.crossRefNote && (
              <span className="clause-crossref-note">{clause.crossRefNote[lang]}</span>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

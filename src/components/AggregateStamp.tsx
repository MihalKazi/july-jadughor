"use client";

import { useId } from "react";
import { useLanguage } from "@/lib/language-context";
import type { Bi } from "@/lib/content";

/**
 * The one full stamp illustration per page — authored once, at page scale,
 * instead of repeated on every clause. Reads as a single considered verdict
 * on the record as a whole, not a template stamped down a list.
 */
export function AggregateStamp({ count, of, label }: { count: number; of: number; label: Bi }) {
  const filterId = useId();
  const { lang } = useLanguage();

  return (
    <div className="aggregate-stamp">
      <svg width="118" height="118" viewBox="0 0 118 118" aria-hidden="true">
        <defs>
          <filter id={filterId} x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" seed="11" result="n" />
            <feDisplacementMap in="SourceGraphic" in2="n" scale="2" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
        <g
          filter={`url(#${filterId})`}
          fill="none"
          stroke="var(--ink-stamp)"
          style={{ transform: "rotate(-6deg)", transformOrigin: "59px 59px" }}
        >
          <circle cx="59" cy="59" r="52" strokeWidth="2.5" />
          <circle cx="59" cy="59" r="45" strokeWidth="1" />
          <text
            x="59"
            y="66"
            textAnchor="middle"
            fontSize="30"
            fontFamily="var(--font-mono)"
            fontWeight="700"
            stroke="none"
            fill="var(--ink-stamp)"
          >
            {count}/{of}
          </text>
        </g>
      </svg>
      <p className="aggregate-stamp-label">{label[lang]}</p>
    </div>
  );
}

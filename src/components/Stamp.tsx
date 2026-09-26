"use client";

import type { StampKind } from "@/lib/content";
import { useLanguage } from "@/lib/language-context";

const LABEL: Record<StampKind, { bn: string; en: string }> = {
  verified: { bn: "যাচাইকৃত", en: "Verified" },
  disputed: { bn: "বিতর্কিত দাবি", en: "Disputed claim" },
  referred: { bn: "অপেক্ষমাণ", en: "Referred / pending" },
};

const GLYPH: Record<StampKind, string> = {
  verified: "✓",
  disputed: "✕",
  referred: "…",
};

/**
 * Compact per-clause mark. A full stamp graphic is authored once, at the
 * page's aggregate summary — repeating that illustration on every row is
 * what reads as a copy-pasted template rather than a considered record.
 */
export function Stamp({ kind }: { kind: StampKind }) {
  const { lang } = useLanguage();
  return (
    <span className={`mark mark-${kind}`}>
      <span className="mark-glyph" aria-hidden="true">
        {GLYPH[kind]}
      </span>
      {lang === "bn" ? LABEL[kind].bn : LABEL[kind].en}
    </span>
  );
}

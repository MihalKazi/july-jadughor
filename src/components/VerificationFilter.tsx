"use client";

import { useEffect, useState } from "react";
import type { Citation, Clause, StampKind } from "@/lib/content";
import { useLanguage } from "@/lib/language-context";
import { ClauseEntry } from "./ClauseEntry";
import { Stamp } from "./Stamp";

type Filter = StampKind | "all";

const FILTERS: Filter[] = ["all", "disputed", "verified", "referred"];

const LABELS: Record<Filter, { bn: string; en: string }> = {
  all: { bn: "সব", en: "All" },
  verified: { bn: "যাচাইকৃত", en: "Verified" },
  disputed: { bn: "বিতর্কিত দাবি", en: "Disputed" },
  referred: { bn: "অপেক্ষমাণ", en: "Pending" },
};

const EMPTY: { bn: string; en: string } = {
  bn: "এই শ্রেণিতে কোনো ধারা নেই।",
  en: "No clauses in this category.",
};

export function VerificationFilter({
  clauses,
  citations,
  resolveCrossRef,
}: {
  clauses: Clause[];
  citations: Citation[];
  resolveCrossRef: (id: string) => { label: string; href: string } | undefined;
}) {
  const { lang } = useLanguage();
  const [filter, setFilter] = useState<Filter>("all");
  const [ready, setReady] = useState(false);
  const [count, setCount] = useState(0);

  const disputed = clauses.filter((c) => c.stamp === "disputed").length;
  const share = clauses.length ? disputed / clauses.length : 0;
  const shown = filter === "all" ? clauses : clauses.filter((c) => c.stamp === filter);

  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get("f");
    if (q && (FILTERS as string[]).includes(q)) setFilter(q as Filter);

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    requestAnimationFrame(() => setReady(true));
    if (reduce) {
      setCount(disputed);
      return;
    }
    const start = performance.now();
    const dur = 1200;
    let frame = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - t, 3);
      setCount(Math.round(disputed * eased));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [disputed]);

  const choose = (f: Filter) => {
    setFilter(f);
    const url = new URL(window.location.href);
    if (f === "all") url.searchParams.delete("f");
    else url.searchParams.set("f", f);
    window.history.replaceState(null, "", url.toString());
  };

  return (
    <>
      <div className="vf-share">
        <div className="vf-share-track">
          <span
            className="vf-share-fill"
            style={{ transform: `scaleX(${ready ? share : 0})` }}
          />
        </div>
        <span className="vf-share-text tabular">
          {count}/{clauses.length}
        </span>
      </div>

      <ul className="vf-legend" aria-label={lang === "bn" ? "চিহ্নের অর্থ" : "Marks"}>
        <li>
          <Stamp kind="verified" />
        </li>
        <li>
          <Stamp kind="disputed" />
        </li>
        <li>
          <Stamp kind="referred" />
        </li>
      </ul>

      <div className="vf-filters" role="group" aria-label={lang === "bn" ? "শ্রেণি" : "Category"}>
        {FILTERS.map((o) => {
          const n = o === "all" ? clauses.length : clauses.filter((c) => c.stamp === o).length;
          return (
            <button
              key={o}
              type="button"
              className={`vf-filter${filter === o ? " is-on" : ""}`}
              aria-pressed={filter === o}
              onClick={() => choose(o)}
            >
              {LABELS[o][lang]}
              <span className="tabular">{n}</span>
            </button>
          );
        })}
      </div>

      {shown.length === 0 ? (
        <p className="vf-empty">{EMPTY[lang]}</p>
      ) : (
        <div className="clause-list" key={filter}>
          {shown.map((c, i) => {
            const ref = c.crossRef ? resolveCrossRef(c.crossRef) : undefined;
            return (
              <div key={c.id} className="vf-item" style={{ ["--i" as string]: i }}>
                <ClauseEntry
                  clause={c}
                  citations={citations}
                  crossRefLabel={ref?.label}
                  crossRefHref={ref?.href}
                />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

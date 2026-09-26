"use client";

import { Masthead } from "@/components/Masthead";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHeader } from "@/components/PageHeader";
import { ClauseEntry } from "@/components/ClauseEntry";
import { AggregateStamp } from "@/components/AggregateStamp";
import {
  SECTIONS,
  verificationClauses,
  verificationCitations,
  controversyClauses,
} from "@/lib/content";
import { useLanguage } from "@/lib/language-context";

export default function VerificationPage() {
  const meta = SECTIONS.find((s) => s.slug === "verification")!;
  const { lang } = useLanguage();
  const disputed = verificationClauses.filter((c) => c.stamp === "disputed").length;

  return (
    <>
      <Masthead active="verification" />
      <main className="page-main">
        <PageHeader notifNumber={meta.number} title={meta.title} dek={meta.dek} />
        <AggregateStamp
          count={disputed}
          of={verificationClauses.length}
          label={{
            bn: "টি প্রচারিত দাবি যাচাইয়ে ভুল বা বিভ্রান্তিকর প্রমাণিত হয়েছে",
            en: "of these circulated claims were found false or misleading on verification",
          }}
        />
        <div className="clause-list">
          {verificationClauses.map((c) => {
            const target = c.crossRef
              ? controversyClauses.find((v) => v.id === c.crossRef)
              : undefined;
            const label = target
              ? `${target.number} ${target.title[lang]}`
              : undefined;
            const href = target ? `/controversies#${target.id}` : undefined;
            return (
              <ClauseEntry
                key={c.id}
                clause={c}
                citations={verificationCitations}
                crossRefLabel={label}
                crossRefHref={href}
              />
            );
          })}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

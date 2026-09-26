"use client";

import { Masthead } from "@/components/Masthead";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHeader } from "@/components/PageHeader";
import { ClauseEntry } from "@/components/ClauseEntry";
import { AggregateStamp } from "@/components/AggregateStamp";
import {
  SECTIONS,
  controversyClauses,
  controversyCitations,
  verificationClauses,
} from "@/lib/content";
import { useLanguage } from "@/lib/language-context";

export default function ControversiesPage() {
  const meta = SECTIONS.find((s) => s.slug === "controversies")!;
  const { lang } = useLanguage();
  const withVerification = controversyClauses.filter((c) => c.crossRef || c.crossRefNote).length;

  return (
    <>
      <Masthead active="controversies" />
      <main className="page-main">
        <PageHeader notifNumber={meta.number} title={meta.title} dek={meta.dek} />
        <AggregateStamp
          count={withVerification}
          of={controversyClauses.length}
          label={{
            bn: "ধারার মধ্যে যতগুলোর জন্য ৩নং যাচাই প্রতিবেদনে সংশ্লিষ্ট সংশোধনী পাওয়া যাবে",
            en: "of these clauses have a related correction filed under clause ৩ (Verification Reports)",
          }}
        />
        <div className="clause-list">
          {controversyClauses.map((c) => {
            const target = c.crossRef
              ? verificationClauses.find((v) => v.id === c.crossRef)
              : undefined;
            const label = target
              ? `${target.number} ${target.title[lang]}`
              : undefined;
            const href = target ? `/verification#${target.id}` : undefined;
            return (
              <ClauseEntry
                key={c.id}
                clause={c}
                citations={controversyCitations}
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

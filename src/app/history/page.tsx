"use client";

import { Masthead } from "@/components/Masthead";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHeader } from "@/components/PageHeader";
import { ClauseEntry } from "@/components/ClauseEntry";
import { SECTIONS, historyClauses, historyCitations } from "@/lib/content";

export default function HistoryPage() {
  const meta = SECTIONS.find((s) => s.slug === "history")!;
  return (
    <>
      <Masthead active="history" />
      <main className="page-main">
        <PageHeader notifNumber={meta.number} title={meta.title} dek={meta.dek} image="/hero-image.jpg" />
        <div className="clause-list">
          {historyClauses.map((c) => (
            <ClauseEntry key={c.id} clause={c} citations={historyCitations} />
          ))}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

"use client";

import { Masthead } from "@/components/Masthead";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHeader } from "@/components/PageHeader";
import { ClauseEntry } from "@/components/ClauseEntry";
import { SECTIONS, cultureClauses, cultureCitations } from "@/lib/content";

export default function CulturePage() {
  const meta = SECTIONS.find((s) => s.slug === "culture")!;
  return (
    <>
      <Masthead active="culture" />
      <main className="page-main">
        <PageHeader notifNumber={meta.number} title={meta.title} dek={meta.dek} image="/hero-5.jpg" />
        <div className="clause-list">
          {cultureClauses.map((c) => (
            <ClauseEntry key={c.id} clause={c} citations={cultureCitations} />
          ))}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

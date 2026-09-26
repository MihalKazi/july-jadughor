"use client";

import { Masthead } from "@/components/Masthead";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHeader } from "@/components/PageHeader";
import { ClauseEntry } from "@/components/ClauseEntry";
import { SECTIONS, interviewClauses, interviewCitations } from "@/lib/content";

export default function InterviewsPage() {
  const meta = SECTIONS.find((s) => s.slug === "interviews")!;
  return (
    <>
      <Masthead active="interviews" />
      <main className="page-main">
        <PageHeader notifNumber={meta.number} title={meta.title} dek={meta.dek} />
        <div className="clause-list">
          {interviewClauses.map((c) => (
            <ClauseEntry key={c.id} clause={c} citations={interviewCitations} />
          ))}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

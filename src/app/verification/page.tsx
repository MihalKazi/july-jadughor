"use client";

import { Masthead } from "@/components/Masthead";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHeader } from "@/components/PageHeader";
import { VerificationFilter } from "@/components/VerificationFilter";
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

  const resolveCrossRef = (id: string) => {
    const target = controversyClauses.find((v) => v.id === id);
    if (!target) return undefined;
    return {
      label: `${target.number} ${target.title[lang]}`,
      href: `/controversies#${target.id}`,
    };
  };

  return (
    <>
      <Masthead active="verification" />
      <main className="page-main">
        <PageHeader notifNumber={meta.number} title={meta.title} dek={meta.dek} image="/hero-3.jpg" />
        <VerificationFilter
          clauses={verificationClauses}
          citations={verificationCitations}
          resolveCrossRef={resolveCrossRef}
        />
      </main>
      <SiteFooter />
    </>
  );
}

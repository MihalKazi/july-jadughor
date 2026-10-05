"use client";

import { Masthead } from "@/components/Masthead";
import { PhotoHero } from "@/components/PhotoHero";
import { SiteFooter } from "@/components/SiteFooter";
import { GazetteIndex } from "@/components/GazetteIndex";
import { NOTICE, verificationClauses } from "@/lib/content";
import { useLanguage } from "@/lib/language-context";

export default function Home() {
  const { lang } = useLanguage();
  const disputed = verificationClauses.filter((c) => c.stamp === "disputed").length;
  const total = verificationClauses.length;

  return (
    <>
      <PhotoHero />
      <Masthead active="" />
      <main className="page-main">
        <div className="front-page">
          <div className="lead-column">
            <span className="lead-kicker">
              {lang === "bn" ? "সংরক্ষণাগার সম্পর্কে" : "About this archive"}
            </span>
            <p className="lead-notice">{NOTICE[lang]}</p>

            <div className="pull-quote">
              <div className="pull-quote-figure tabular">
                {disputed}/{total}
              </div>
              <p className="pull-quote-caption">
                {lang === "bn"
                  ? "প্রচারিত দাবি যাচাই প্রতিবেদনে ভুল বা বিভ্রান্তিকর প্রমাণিত হয়েছে — বিস্তারিত ৩নং ধারায়।"
                  : "circulated claims were found false or misleading on verification — full record under clause ৩."}
              </p>
            </div>
          </div>

          <div>
            <span className="sidebar-kicker">
              {lang === "bn" ? "এই সংস্করণে" : "In this edition"}
            </span>
            <GazetteIndex />
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

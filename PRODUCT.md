# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js (user choice)

## Users

General public and researchers in Bangladesh (and Bengali diaspora) seeking documented history, verified facts, and cultural discourse around the জুলাই গণঅভ্যুত্থান স্মৃতি জাদুঘর (July Uprising Memorial Museum). Job: read museum history, check disputed claims against verification reports, browse interviews and cultural essays.

## Product Purpose

Digital archive/memorial site for the July Uprising Memorial Museum. Compiles publicly available news reports, social media posts, and visual media into one accessible bilingual (Bengali + English) record. Not an official museum site — a curated archive.

## Positioning

Distinct from raw news aggregation by structuring content into named accountability tracks: history (official narrative), controversies/complaints (allegations), and verification reports (fact-checks resolving specific claims) — giving readers a full evidence trail rather than one-sided coverage.

## Operating Context

Source reference: https://sites.google.com/view/aboutjulymuseum (Google Sites, Bengali-only, being replaced with own design). Original site sections: হোম (Home), যাদুঘরের ইতিহাস (Museum History), বিতর্ক-অভিযোগ (Controversies/Complaints), যাচাই প্রতিবেদন (Verification Reports), সাক্ষাৎকার (Interviews), সংস্কৃতি নিয়ে অন্যান্য (Other Cultural Topics).

## Capabilities and Constraints

- Content for MVP: scraped/summarized from source Google Site (see below), used as base and refined by user over time — not final/complete text, will need real source copy per page later.
- Must support bilingual Bengali + English (toggle or parallel routes — undecided, ask when building nav).
- Topic involves named real public figures (e.g. former culture advisor Mostafa Sarwar Faruqi) and specific fraud/corruption allegations plus fact-check rebuttals — content must stay attributable/sourced, no fabricated quotes or claims beyond what's provided.
- Museum History page: references a 4-part series "জুলাই জাদুঘর তৈরির পেছনের গল্প" (The Story Behind Creating the July Museum), authored per the site by Mostafa Sarwar Faruqi.
- Controversies/Complaints page: lists allegations (construction corruption, mismanagement, no competitive bidding per TIB, embezzlement claim "64 lakh taka" per Masud Kamal, credibility challenges).
- Verification Reports page: fact-checks correcting misinformation (false claims pre-opening, misattributed video, fake photo cards, edited statements, false Wikipedia edits, false resignation claims).
- Interviews page: structure only, no interview content found yet — needs real content from user.
- Other Cultural Topics: essays like "Cultural Roadmap" (Parts 1-2), "July's cultural awakening for Bangladesh 2.0".

## Evidence on Hand

Scraped structural/content summary from source Google Sites page (5 subpages), stored in this conversation's history. No original images/assets pulled yet. No logo/brand assets confirmed. Future work must not invent testimonials, additional allegations, or additional fact-checks beyond what user supplies.

## Product Principles

1. Evidence-first: every claim on Controversies/Complaints must be traceable to a source; Verification Reports exists specifically to counter/confirm those claims — the two sections must stay linked, not contradictory in isolation.
2. Bilingual by design, not bolted on — plan content structure for EN/BN from the start given Next.js choice.
3. Archive tone: neutral, documentary, not promotional — this is Read mode (comprehension), not Persuade.
4. Treat scraped content as placeholder/base only; flag clearly where real user-supplied copy is still needed (Interviews page has none yet).

## Accessibility & Inclusion

Bengali script (Bangla) requires proper font/line-height support; no specific standard confirmed yet.

// Bilingual archive copy. Content and every citation's URL are drafted from
// a direct link-by-link scrape of the prior Google Sites record
// (https://sites.google.com/view/aboutjulymuseum); still placeholder prose
// pending source-verified copy from the project owner, but every citation
// href below is a real, resolvable source link carried over from that site.

export type Lang = "bn" | "en";

export interface Bi {
  bn: string;
  en: string;
}

export interface SectionMeta {
  slug: string;
  number: string;
  title: Bi;
  dek: Bi;
}

export const SECTIONS: SectionMeta[] = [
  {
    slug: "",
    number: "০",
    title: { bn: "হোম", en: "Home" },
    dek: {
      bn: "সংরক্ষণাগার পরিচিতি",
      en: "Archive overview",
    },
  },
  {
    slug: "history",
    number: "১",
    title: { bn: "যাদুঘরের ইতিহাস", en: "Museum History" },
    dek: {
      bn: "যাদুঘর নির্মাণের সরকারি বিবরণ",
      en: "The documented account of the museum's founding",
    },
  },
  {
    slug: "controversies",
    number: "২",
    title: { bn: "বিতর্ক ও অভিযোগ", en: "Controversies & Complaints" },
    dek: {
      bn: "প্রকাশিত অভিযোগসমূহ",
      en: "Allegations published against the museum and its officials",
    },
  },
  {
    slug: "verification",
    number: "৩",
    title: { bn: "যাচাই প্রতিবেদন", en: "Verification Reports" },
    dek: {
      bn: "তথ্য-যাচাই ও সংশোধন",
      en: "Fact-checks resolving disputed claims",
    },
  },
  {
    slug: "interviews",
    number: "৪",
    title: { bn: "সাক্ষাৎকার", en: "Interviews" },
    dek: {
      bn: "প্রত্যক্ষদর্শী ও কর্মকর্তাদের বক্তব্য",
      en: "Statements from officials and witnesses",
    },
  },
  {
    slug: "culture",
    number: "৫",
    title: { bn: "সংস্কৃতি নিয়ে অন্যান্য", en: "Other Cultural Topics" },
    dek: {
      bn: "সাংস্কৃতিক প্রবন্ধ ও আলোচনা",
      en: "Cultural essays and discourse",
    },
  },
];

export const NOTICE = {
  bn: "এই ডিজিটাল সংরক্ষণাগারটি সম্পূর্ণরূপে প্রকাশ্যে প্রাপ্ত উন্মুক্ত-সূত্র সামগ্রী থেকে সংকলিত — সংবাদ প্রতিবেদন, সামাজিক যোগাযোগমাধ্যমের পোস্ট এবং ভিজ্যুয়াল মিডিয়াকে একটি সহজলভ্য নথিতে সংকলন করা হয়েছে। প্রতিটি ধারার পাশে মূল উৎসের লিঙ্ক যুক্ত রয়েছে। এটি জাদুঘরের দাপ্তরিক ওয়েবসাইট নয়।",
  en: "This digital archive is compiled entirely from publicly available open-source materials — news reports, social media posts, and visual media gathered into one accessible record, with the original source link attached to every clause. It is not the museum's official website.",
};

export interface Citation {
  id: number;
  source: Bi;
  href: string;
}

export type StampKind = "verified" | "disputed" | "referred";

export interface Clause {
  id: string;
  number: string;
  title: Bi;
  body: Bi;
  citationIds?: number[];
  crossRef?: string; // links a controversy clause to its verification clause, or vice versa
  crossRefNote?: Bi; // used when a clause relates to several targets rather than one
  stamp?: StampKind;
  videoId?: string; // YouTube video id, renders a thumbnail card when present
}

// ---- History ---------------------------------------------------------

export const historyCitations: Citation[] = [
  {
    id: 1,
    source: { bn: "যুগান্তর — প্রথম কিস্তি", en: "Jugantor — first installment" },
    href: "https://www.jugantor.com/tp-firstpage/1152824",
  },
  {
    id: 2,
    source: { bn: "যুগান্তর — দ্বিতীয় কিস্তি", en: "Jugantor — second installment" },
    href: "https://www.jugantor.com/index.php/tp-ub-editorial/1153271",
  },
  {
    id: 3,
    source: { bn: "যুগান্তর — তৃতীয় কিস্তি", en: "Jugantor — third installment" },
    href: "https://www.jugantor.com/tp-ub-editorial/1153770",
  },
  {
    id: 4,
    source: { bn: "যুগান্তর — চতুর্থ কিস্তি", en: "Jugantor — fourth installment" },
    href: "https://www.jugantor.com/tp-ub-editorial/1154262",
  },
];

export const historyClauses: Clause[] = [
  {
    id: "series-1",
    number: "১.১",
    title: { bn: "প্রথম কিস্তি", en: "First installment" },
    body: {
      bn: "তৎকালীন অন্তর্বর্তী সরকারের সাংস্কৃতিক উপদেষ্টা মোস্তফা সরয়ার ফারুকী রচিত “জুলাই জাদুঘর তৈরির পেছনের গল্প” ধারাবাহিকের প্রথম কিস্তি, যুগান্তরে প্রকাশিত। এই সংরক্ষণাগার মূল বক্তব্য উৎসসহ পুনরুপস্থাপন করে; যাচাই বা খণ্ডন এই সংরক্ষণাগারের দায়িত্ব নয় — পাঠক ৩নং ধারায় প্রাসঙ্গিক সংশোধনী পাবেন।",
      en: "First installment of “The Story Behind Creating the July Museum,” a series authored by then-interim-government culture advisor Mostafa Sarwar Faruqi, published in Jugantor. This archive reproduces the account with its source attached; verifying or contesting the account itself is not this archive's role — related corrections sit under clause ৩.",
    },
    citationIds: [1],
  },
  {
    id: "series-2",
    number: "১.২",
    title: { bn: "দ্বিতীয় কিস্তি", en: "Second installment" },
    body: {
      bn: "ধারাবাহিকের দ্বিতীয় কিস্তি, যুগান্তরে প্রকাশিত।",
      en: "Second installment of the series, published in Jugantor.",
    },
    citationIds: [2],
  },
  {
    id: "series-3",
    number: "১.৩",
    title: { bn: "তৃতীয় কিস্তি", en: "Third installment" },
    body: {
      bn: "ধারাবাহিকের তৃতীয় কিস্তি, যুগান্তরে প্রকাশিত।",
      en: "Third installment of the series, published in Jugantor.",
    },
    citationIds: [3],
  },
  {
    id: "series-4",
    number: "১.৪",
    title: { bn: "চতুর্থ কিস্তি", en: "Fourth installment" },
    body: {
      bn: "ধারাবাহিকের চতুর্থ ও সমাপ্তি কিস্তি, যুগান্তরে প্রকাশিত।",
      en: "Fourth and concluding installment of the series, published in Jugantor.",
    },
    citationIds: [4],
  },
];

// ---- Controversies -----------------------------------------------------

export const controversyCitations: Citation[] = [
  {
    id: 10,
    source: { bn: "যায়যায়দিন", en: "Jai Jai Din" },
    href: "https://old.jaijaidin.news/details/35055/julai-smrriti-jadughr-nirmaneoo-ken-durneeti-lutpater-uttsb",
  },
  {
    id: 11,
    source: { bn: "খোলা কাগজ", en: "Khola Kagoj" },
    href: "https://kholakagojbd.com/news/46321",
  },
  {
    id: 12,
    source: { bn: "সময়ের আলো", en: "Shomoyer Alo" },
    href: "https://www.shomoyeralo.com/news/320140",
  },
  {
    id: 13,
    source: { bn: "সমকাল", en: "Samakal" },
    href: "https://samakal.com/bangladesh/article/283322/",
  },
  {
    id: 14,
    source: { bn: "কালের কণ্ঠ — মাসুদ কামাল", en: "Kalerkantho — Masud Kamal" },
    href: "https://www.kalerkantho.com/online/social-media/2026/04/29/1678124",
  },
  {
    id: 15,
    source: { bn: "দৈনিক ইনকিলাব", en: "Daily Inqilab" },
    href: "https://dailyinqilab.com/entertainment/others/871315",
  },
];

export const controversyClauses: Clause[] = [
  {
    id: "loot-festival",
    number: "২.১",
    title: { bn: "জুলাই স্মৃতি জাদুঘর নির্মাণেও কেন দুর্নীতি-লুটপাটের উৎসব!", en: "Why a festival of corruption and looting, even in the July Memory Museum's construction!" },
    body: {
      bn: "যায়যায়দিন-এর একটি প্রতিবেদনে জুলাই স্মৃতি জাদুঘরের নির্মাণকাজে দুর্নীতি ও লুটপাটের অভিযোগ আনা হয়।",
      en: "A Jai Jai Din report alleges corruption and looting in the July Memory Museum's construction work.",
    },
    citationIds: [10],
    crossRef: "opening-coverage",
  },
  {
    id: "mismanagement",
    number: "২.২",
    title: { bn: "জুলাই স্মৃতি জাদুঘরে দুর্নীতি-অব্যবস্থাপনা", en: "Corruption and mismanagement in the July Memory Museum" },
    body: {
      bn: "খোলা কাগজ-এর প্রতিবেদনে জুলাই স্মৃতি জাদুঘরের প্রশাসনিক ব্যবস্থাপনায় দুর্নীতি ও অব্যবস্থাপনার অভিযোগ তোলা হয়।",
      en: "A Khola Kagoj report alleges corruption and mismanagement in the July Memory Museum's administration.",
    },
    citationIds: [11],
  },
  {
    id: "no-bid-construction",
    number: "২.৩",
    title: { bn: "দরপত্র ছাড়াই জুলাই স্মৃতি জাদুঘর নির্মাণে টিআইবির উদ্বেগ", en: "TIB's concern over the July Memory Museum's construction without a tender" },
    body: {
      bn: "সময়ের আলো-র প্রতিবেদন অনুযায়ী, ট্রান্সপারেন্সি ইন্টারন্যাশনাল বাংলাদেশ (টিআইবি) দরপত্র ছাড়াই জাদুঘরের নির্মাণকাজ সম্পন্ন হওয়া নিয়ে উদ্বেগ প্রকাশ করেছে।",
      en: "Per Shomoyer Alo, Transparency International Bangladesh (TIB) expressed concern that the museum's construction proceeded without a tender/bidding process.",
    },
    citationIds: [12],
    crossRef: "opening-coverage",
  },
  {
    id: "credibility",
    number: "২.৪",
    title: { bn: "“বিতর্কের খাতা খুললেন উপদেষ্টা ফারুকী”", en: "“Advisor Faruqi opened a record of controversies”" },
    body: {
      bn: "সমকাল-এর প্রতিবেদনে উপদেষ্টা মোস্তফা সরয়ার ফারুকীকে ঘিরে একাধিক বিতর্কের সূচনা নিয়ে আলোচনা করা হয়।",
      en: "A Samakal report discusses the start of multiple controversies surrounding advisor Mostafa Sarwar Faruqi.",
    },
    citationIds: [13],
    crossRefNote: {
      bn: "সম্পর্কিত একাধিক যাচাই প্রতিবেদন দেখুন ৩.৭–৩.১২",
      en: "See related verification clauses ৩.৭–৩.১২",
    },
  },
  {
    id: "embezzlement",
    number: "২.৫",
    title: { bn: "ভুয়া বিল দেখিয়ে ৬৪ লাখ টাকা নিয়েছেন ফারুকী : মাসুদ কামাল", en: "\"Faruqi took 64 lakh taka by showing fake bills\": Masud Kamal" },
    body: {
      bn: "কালের কণ্ঠ-এ প্রকাশিত সাংবাদিক মাসুদ কামালের অভিযোগ অনুযায়ী, ফারুকী ভুয়া বিল দেখিয়ে ৬৪ লক্ষ টাকা নিয়েছেন। এই নির্দিষ্ট অভিযোগের কোনো স্বাধীন যাচাই প্রতিবেদন এখনো এই সংরক্ষণাগারে যুক্ত হয়নি।",
      en: "Per journalist Masud Kamal's allegation published in Kalerkantho, Faruqi obtained 64 lakh taka by showing fake bills. No independent verification report of this specific claim is yet linked in this archive.",
    },
    citationIds: [14],
  },
  {
    id: "true-form",
    number: "২.৬",
    title: { bn: "মোস্তফা সরয়ার ফারুকীর স্বরূপ উন্মোচন !", en: "Unveiling Mostafa Sarwar Faruqi's true form!" },
    body: {
      bn: "দৈনিক ইনকিলাব-এর একটি প্রতিবেদন মোস্তফা সরয়ার ফারুকীর ব্যক্তিগত বিশ্বাসযোগ্যতা প্রশ্নবিদ্ধ করার চেষ্টা করে। এই ধরনের একাধিক প্রচারণা ৩নং ধারায় ভুয়া তথ্য হিসেবে চিহ্নিত ও খণ্ডিত হয়েছে।",
      en: "A Daily Inqilab report attempts to challenge Mostafa Sarwar Faruqi's personal credibility. Several pieces of this kind of coverage are identified and rebutted as misinformation under clause ৩.",
    },
    citationIds: [15],
    crossRefNote: {
      bn: "সম্পর্কিত একাধিক যাচাই প্রতিবেদন দেখুন ৩.৭–৩.১২",
      en: "See related verification clauses ৩.৭–৩.১২",
    },
  },
];

// ---- Verification --------------------------------------------------------

export const verificationCitations: Citation[] = [
  {
    id: 20,
    source: { bn: "দ্য ডিসেন্ট — মিডিয়া ওয়াচ", en: "The Dissent — Media Watch" },
    href: "https://thedissent.news/bn/media-watches/july-museum-targeted-before-opening-with-false-and-half-true-claims",
  },
  {
    id: 21,
    source: { bn: "দ্য ডিসেন্ট — মতামত", en: "The Dissent — Opinion" },
    href: "https://thedissent.news/bn/opinions/what-sarwar-farooki-said-in-response-to-a-tv-report-on-the-july-museum",
  },
  {
    id: 22,
    source: { bn: "দ্য ডিসেন্ট — মিডিয়া ওয়াচ", en: "The Dissent — Media Watch" },
    href: "https://thedissent.news/bn/media-watches/mamunul-haque-did-not-say-all-sculptures-at-the-july-memorial-museum-should-have-their-faces-removed",
  },
  {
    id: 23,
    source: { bn: "ডিসমিসল্যাব", en: "Dismislab" },
    href: "https://dismislab.com/factcheck/society/the-video-is-of-intercontinental-not-gonobhaban/",
  },
  {
    id: 24,
    source: { bn: "দ্য ডিসেন্ট — মিডিয়া ওয়াচ", en: "The Dissent — Media Watch" },
    href: "https://thedissent.news/bn/media-watches/fabricated-data-and-selective-facts-used-in-kaler-kantho-investigative-report",
  },
  {
    id: 25,
    source: { bn: "রিউমর স্ক্যানার", en: "Rumor Scanner" },
    href: "https://rumorscanner.com/fact-check/the-legal-notice-to-stop-the-mongol-shovajatra-on-pohela-boishakh-is-not-given-by-the-court/71334",
  },
  {
    id: 26,
    source: { bn: "ফ্যাক্ট-ওয়াচ", en: "Fact Watch" },
    href: "https://www.fact-watch.org/fake_photocards_about_ex_advisors/",
  },
  {
    id: 27,
    source: { bn: "ফ্যাক্ট-ওয়াচ", en: "Fact Watch" },
    href: "https://www.fact-watch.org/former-cultural-adviser-mostofa-sarwar-farooki/",
  },
  {
    id: 28,
    source: { bn: "ফ্যাক্ট-ওয়াচ", en: "Fact Watch" },
    href: "https://www.fact-watch.org/wiki_page_of_farooki/",
  },
  {
    id: 29,
    source: { bn: "রিউমর স্ক্যানার", en: "Rumor Scanner" },
    href: "https://rumorscanner.com/fact-check/fake-photocard-implicating-jamaat-e-islami-and-filmmaker-farooqui/126816",
  },
  {
    id: 30,
    source: { bn: "ফ্যাক্ট-ওয়াচ", en: "Fact Watch" },
    href: "https://www.fact-watch.org/no-evidence-that-these-quotes-were-made-by-adviser-farooki/",
  },
  {
    id: 31,
    source: { bn: "ফ্যাক্ট-ওয়াচ", en: "Fact Watch" },
    href: "https://www.fact-watch.org/mostofa-sarwar-farooki/",
  },
];

export const verificationClauses: Clause[] = [
  {
    id: "opening-coverage",
    number: "৩.১",
    stamp: "disputed",
    title: { bn: "উদ্বোধন-পূর্ব বিভ্রান্তিকর সংবাদ", en: "Misleading pre-opening coverage" },
    body: {
      bn: "জাদুঘর খোলার আগে কিছু গণমাধ্যম প্রতিবেদনে মিথ্যা ও অর্ধসত্য দাবি প্রচারিত হয়, দ্য ডিসেন্ট-এর মিডিয়া ওয়াচ অনুযায়ী।",
      en: "Before the museum opened, some media coverage circulated false and half-true claims, per The Dissent's media-watch desk.",
    },
    citationIds: [20],
    crossRef: "loot-festival",
  },
  {
    id: "faruqi-tv-response",
    number: "৩.২",
    stamp: "referred",
    title: { bn: "৭১ টিভি প্রতিবেদনের জবাবে ফারুকী", en: "Faruqi's response to a 71 TV report" },
    body: {
      bn: "জুলাই স্মৃতি জাদুঘর নিয়ে ৭১ টিভির একটি প্রতিবেদনের প্রেক্ষিতে পরিচালক মোস্তফা সরয়ার ফারুকী সরাসরি জবাব দিয়েছেন — এখানে তাঁর বক্তব্য একটি পক্ষের বিবৃতি হিসেবে নথিভুক্ত, স্বাধীন যাচাই নয়।",
      en: "In response to a 71 TV report on the July Memory Museum, director Mostafa Sarwar Faruqi issued a direct reply — recorded here as one party's statement, not an independent verification.",
    },
    citationIds: [21],
  },
  {
    id: "mamunul-sculptures",
    number: "৩.৩",
    stamp: "disputed",
    title: { bn: "ভাস্কর্য অপসারণ সংক্রান্ত ভুল দাবি", en: "False claim about removing sculpture faces" },
    body: {
      bn: "একটি প্রচারিত দাবি ছিল যে মামুনুল হক জুলাই স্মৃতি জাদুঘরের সব ভাস্কর্য থেকে মুখাবয়ব অপসারণের আহ্বান জানিয়েছিলেন। দ্য ডিসেন্ট-এর যাচাইয়ে দেখা যায় এই দাবিটি সঠিক নয়।",
      en: "A circulated claim stated that Mamunul Haque called for removing faces from all sculptures at the July Memorial Museum. The Dissent's verification found this claim false.",
    },
    citationIds: [22],
  },
  {
    id: "hotel-video",
    number: "৩.৪",
    stamp: "disputed",
    title: { bn: "ভুল শনাক্তকৃত ভিডিও: গণভবন নয়, ইন্টারকন্টিনেন্টাল হোটেল", en: "Misattributed video: Hotel Intercontinental, not Gonobhaban" },
    body: {
      bn: "একটি বিতর্কিত ভিডিওকে গণভবনের বলে প্রচার করা হয়েছিল; ডিসমিসল্যাবের যাচাইয়ে নিশ্চিত হয় যে দৃশ্যটি আসলে হোটেল ইন্টারকন্টিনেন্টালের।",
      en: "A controversial video was circulated as depicting Gonobhaban (the PM's residence); Dismislab's verification confirmed the footage actually showed Hotel Intercontinental.",
    },
    citationIds: [23],
  },
  {
    id: "kalerkantho-stats",
    number: "৩.৫",
    stamp: "disputed",
    title: { bn: "কালের কণ্ঠের প্রতিবেদনে বানোয়াট পরিসংখ্যান", en: "Fabricated statistics in a Kalerkantho report" },
    body: {
      bn: "দ্য ডিসেন্ট-এর যাচাই অনুযায়ী, কালের কণ্ঠের একটি “অনুসন্ধানী প্রতিবেদনে” বানোয়াট পরিসংখ্যান ও আংশিক তথ্য ব্যবহৃত হয়েছে।",
      en: "Per The Dissent's verification, a Kalerkantho “investigative report” used fabricated statistics and selectively partial facts.",
    },
    citationIds: [24],
  },
  {
    id: "legal-notice",
    number: "৩.৬",
    stamp: "disputed",
    title: { bn: "মঙ্গল শোভাযাত্রা সংক্রান্ত আইনি নোটিশ", en: "Legal notice about the Mongol Shobhajatra" },
    body: {
      bn: "পহেলা বৈশাখে মঙ্গল শোভাযাত্রা বন্ধে একটি “আইনি নোটিশ” প্রচারিত হয়; রিউমর স্ক্যানারের যাচাইয়ে নিশ্চিত হয় এটি আদালতের দেওয়া নয়।",
      en: "A “legal notice” claiming to stop the Mongol Shobhajatra procession on Pohela Boishakh circulated; Rumor Scanner's verification confirmed it was not issued by any court.",
    },
    citationIds: [25],
  },
  {
    id: "fake-photocards-1",
    number: "৩.৭",
    stamp: "disputed",
    title: { bn: "সাবেক উপদেষ্টাদের নিয়ে ভুয়া ফটোকার্ড", en: "Fake photo cards about former advisors" },
    body: {
      bn: "ফ্যাক্ট-ওয়াচের যাচাইয়ে দেখা যায়, প্রথম আলোর নাম ব্যবহার করে সাবেক উপদেষ্টাদের দুর্নীতি প্রসঙ্গে ভুয়া ফটোকার্ড তৈরি ও প্রচার করা হয়েছে।",
      en: "Fact Watch's verification found fake photo cards misusing Prothom Alo's name, alleging corruption by former advisors, fabricated and circulated online.",
    },
    citationIds: [26],
    crossRef: "true-form",
  },
  {
    id: "edited-statement",
    number: "৩.৮",
    stamp: "disputed",
    title: { bn: "ফারুকীর বক্তব্যের খণ্ডিত অংশ প্রচারে বিভ্রান্তি", en: "Confusion from a selectively edited excerpt of Faruqi's statement" },
    body: {
      bn: "ফ্যাক্ট-ওয়াচের যাচাইয়ে দেখা যায়, সাবেক সাংস্কৃতিক উপদেষ্টা ফারুকীর একটি বক্তব্যের খণ্ডিত অংশ প্রচার করে বিভ্রান্তি ছড়ানো হয়েছে।",
      en: "Fact Watch's verification found a selectively edited excerpt of former culture advisor Faruqi's statement circulated in a way that created confusion.",
    },
    citationIds: [27],
    crossRef: "true-form",
  },
  {
    id: "wiki-edit",
    number: "৩.৯",
    stamp: "disputed",
    title: { bn: "উইকিপিডিয়া পাতায় মিথ্যা সম্পাদনা", en: "False edits to Faruqi's Wikipedia page" },
    body: {
      bn: "ফ্যাক্ট-ওয়াচের যাচাইয়ে দেখা যায়, সংস্কৃতি উপদেষ্টা ফারুকীর উইকিপিডিয়া পাতা সম্পাদনা করে অপপ্রচার চালানো হয়েছে।",
      en: "Fact Watch's verification found Faruqi's Wikipedia page edited to spread propaganda against him.",
    },
    citationIds: [28],
    crossRef: "true-form",
  },
  {
    id: "jamaat-photocard",
    number: "৩.১০",
    stamp: "disputed",
    title: { bn: "জামায়াত-ফারুকী জড়িয়ে ভুয়া ফটোকার্ড", en: "Fake photo card implicating Jamaat-e-Islami and Faruqi" },
    body: {
      bn: "রিউমর স্ক্যানারের যাচাইয়ে দেখা যায়, জামায়াতে ইসলামী ও চলচ্চিত্র নির্মাতা ফারুকীকে জড়িয়ে একটি ভুয়া ফটোকার্ড প্রচারিত হয়েছে।",
      en: "Rumor Scanner's verification found a fake photo card circulated implicating Jamaat-e-Islami and filmmaker Faruqi together.",
    },
    citationIds: [29],
    crossRef: "true-form",
  },
  {
    id: "baul-quotes",
    number: "৩.১১",
    stamp: "disputed",
    title: { bn: "বাউল শিল্পীদের নিয়ে ভুলভাবে আরোপিত উক্তি", en: "Quotes about Baul artists misattributed to Faruqi" },
    body: {
      bn: "ফ্যাক্ট-ওয়াচের যাচাইয়ে দেখা যায়, বাউল শিল্পীদের নিয়ে আলোচিত দুটি উক্তি ফারুকীর নয় বলে কোনো প্রমাণ পাওয়া যায়নি এগুলো তাঁর হওয়ার।",
      en: "Fact Watch's verification found no evidence that two widely-discussed quotes about Baul folk artists originated from Faruqi.",
    },
    citationIds: [30],
    crossRef: "true-form",
  },
  {
    id: "resignation-claim",
    number: "৩.১২",
    stamp: "disputed",
    title: { bn: "ভিত্তিহীন পদত্যাগের দাবি", en: "Unsubstantiated resignation claim" },
    body: {
      bn: "ফ্যাক্ট-ওয়াচের যাচাইয়ে দেখা যায়, উপদেষ্টা মোস্তফা সরয়ার ফারুকীর পদত্যাগের দাবিটি ভুয়া।",
      en: "Fact Watch's verification found the claim of advisor Mostafa Sarwar Faruqi's resignation to be false.",
    },
    citationIds: [31],
    crossRef: "true-form",
  },
];

// ---- Interviews ----------------------------------------------------------

export const interviewCitations: Citation[] = [
  {
    id: 50,
    source: { bn: "চ্যানেল আই (ধারণকৃত সাক্ষাৎকার)", en: "Channel i (recorded interview)" },
    href: "https://youtu.be/T7XQqP0CxlU",
  },
  {
    id: 51,
    source: { bn: "চ্যানেল ২৪", en: "Channel 24" },
    href: "https://youtu.be/wxRvzPm3nHE",
  },
  {
    id: 52,
    source: { bn: "জুলাই জাদুঘর (ইউটিউব চ্যানেল)", en: "July Museum (YouTube channel)" },
    href: "https://youtu.be/q5AcX8-RqCE",
  },
];

export const interviewClauses: Clause[] = [
  {
    id: "channel-i-faruqi",
    number: "৪.১",
    title: {
      bn: "গণঅভ্যুত্থান, জুলাই জাদুঘর ও নতুন প্রজেক্ট নিয়ে চ্যানেল আইয়ের মুখোমুখি মোস্তফা সরয়ার ফারুকী",
      en: "Mostafa Sarwar Faruqi faces Channel i on the uprising, the July Museum, and a new project",
    },
    body: {
      bn: "পরিচালক মোস্তফা সরয়ার ফারুকীর ভিডিও সাক্ষাৎকার — গণঅভ্যুত্থান, জাদুঘর নির্মাণ ও ভবিষ্যৎ পরিকল্পনা নিয়ে আলোচনা।",
      en: "Video interview with director Mostafa Sarwar Faruqi — discussing the uprising, the museum's construction, and future plans.",
    },
    citationIds: [50],
    videoId: "T7XQqP0CxlU",
  },
  {
    id: "channel24-origin-story",
    number: "৪.২",
    title: {
      bn: "জুলাই জাদুঘর নির্মাণের শুরুর গল্প জানালেন মোস্তফা সরয়ার ফারুকী",
      en: "Mostafa Sarwar Faruqi tells the origin story of the July Museum's construction",
    },
    body: {
      bn: "চ্যানেল ২৪-এ প্রচারিত সাক্ষাৎকার, জাদুঘর নির্মাণের সূচনা নিয়ে।",
      en: "Interview aired on Channel 24, on how the museum's construction began.",
    },
    citationIds: [51],
    videoId: "wxRvzPm3nHE",
  },
  {
    id: "inauguration",
    number: "৪.৩",
    title: {
      bn: "জুলাই গণঅভ্যুত্থান স্মৃতি জাদুঘর-এর আনুষ্ঠানিক উদ্বোধন করলেন প্রধানমন্ত্রী তারেক রহমান",
      en: "Prime Minister Tarique Rahman formally inaugurates the July Uprising Memorial Museum",
    },
    body: {
      bn: "জাদুঘরের নিজস্ব ইউটিউব চ্যানেলে প্রকাশিত উদ্বোধনী অনুষ্ঠানের ভিডিও রেকর্ড।",
      en: "Video record of the inauguration ceremony, published on the museum's own YouTube channel.",
    },
    citationIds: [52],
    videoId: "q5AcX8-RqCE",
  },
];

// ---- Culture ---------------------------------------------------------

export const cultureCitations: Citation[] = [
  {
    id: 40,
    source: { bn: "ডেইলি ওয়াদা", en: "Daily Waadaa" },
    href: "https://www.dailywaadaa.com/reflections/2026/09/13/the-story-behind-the-making-of-the-july-museum",
  },
  {
    id: 41,
    source: { bn: "দৈনিক আমার দেশ", en: "Daily Amar Desh" },
    href: "https://www.dailyamardesh.com/op-ed/sub-editorial/amd5gli6skokl",
  },
  {
    id: 42,
    source: { bn: "যুগান্তর", en: "Jugantor" },
    href: "https://www.jugantor.com/tp-ub-editorial/1151866",
  },
  {
    id: 43,
    source: { bn: "যুগান্তর", en: "Jugantor" },
    href: "https://www.jugantor.com/tp-ub-editorial/1149496",
  },
  {
    id: 44,
    source: { bn: "যুগান্তর", en: "Jugantor" },
    href: "https://www.jugantor.com/tp-ub-editorial/1114787",
  },
  {
    id: 45,
    source: { bn: "যুগান্তর", en: "Jugantor" },
    href: "https://www.jugantor.com/tp-ub-editorial/1115636",
  },
];

export const cultureClauses: Clause[] = [
  {
    id: "awakening",
    number: "৫.১",
    title: { bn: "বাংলাদেশ ২.০-এর জন্য জুলাইয়ের সাংস্কৃতিক জাগরণ", en: "July's cultural awakening for a Bangladesh 2.0" },
    body: {
      bn: "ডেইলি ওয়াদা-য় প্রকাশিত একটি প্রবন্ধ, জুলাই-পরবর্তী বাংলাদেশের সাংস্কৃতিক পুনর্জাগরণ ও জাদুঘরের প্রতিষ্ঠার প্রেক্ষাপট নিয়ে।",
      en: "An essay published in Daily Waadaa on cultural reawakening in post-July Bangladesh and the context of the museum's founding.",
    },
    citationIds: [40],
  },
  {
    id: "chobbish-nobboi-unosottor",
    number: "৫.২",
    title: { bn: "চব্বিশ, নব্বই, উনসত্তর", en: "'24, '90, '69" },
    body: {
      bn: "দৈনিক আমার দেশ-এ প্রকাশিত একটি সম্পাদকীয়, তিনটি ঐতিহাসিক গণআন্দোলনের বর্ষ পাশাপাশি রেখে আলোচনা করে।",
      en: "An editorial published in Daily Amar Desh, placing three historic years of mass uprising side by side.",
    },
    citationIds: [41],
  },
  {
    id: "culturer-mala",
    number: "৫.৩",
    title: { bn: "কেমনে গাঁথে কালচারেরও মালা", en: "How the garland of culture is strung" },
    body: {
      bn: "যুগান্তরে প্রকাশিত একটি সম্পাদকীয় নিবন্ধ।",
      en: "An editorial column published in Jugantor.",
    },
    citationIds: [42],
  },
  {
    id: "abul-mansur",
    number: "৫.৪",
    title: { bn: "জুলাই-পরবর্তী বাস্তবতায় আবুল মনসুর আহমদের পুনর্পাঠ", en: "Rereading Abul Mansur Ahmed in the post-July reality" },
    body: {
      bn: "যুগান্তরে প্রকাশিত একটি সম্পাদকীয় নিবন্ধ।",
      en: "An editorial column published in Jugantor.",
    },
    citationIds: [43],
  },
  {
    id: "roadmap-1",
    number: "৫.৫",
    title: { bn: "কালচারাল রোডম্যাপ (১ম পর্ব)", en: "Cultural Roadmap (Part 1)" },
    body: {
      bn: "যুগান্তরে প্রকাশিত দ্বি-পর্বের আলোচনার প্রথম অংশ।",
      en: "First part of a two-part discussion published in Jugantor.",
    },
    citationIds: [44],
  },
  {
    id: "roadmap-2",
    number: "৫.৬",
    title: { bn: "কালচারাল রোডম্যাপ (২য় পর্ব)", en: "Cultural Roadmap (Part 2)" },
    body: {
      bn: "আলোচনার দ্বিতীয় ও সমাপ্তি অংশ, যুগান্তরে প্রকাশিত।",
      en: "Second and concluding part of the discussion, published in Jugantor.",
    },
    citationIds: [45],
  },
];

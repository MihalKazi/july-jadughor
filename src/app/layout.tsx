import type { Metadata } from "next";
import { Noto_Serif_Bengali, PT_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/language-context";

const notoSerifBengali = Noto_Serif_Bengali({
  variable: "--font-bn-serif",
  subsets: ["bengali"],
  weight: ["400", "500", "600", "700"],
});

const ptSerif = PT_Serif({
  variable: "--font-en-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "জুলাই গণঅভ্যুত্থান স্মৃতি জাদুঘর — Digital Archive",
  description:
    "A digital archive of the July Uprising Memorial Museum, compiled from publicly available news reports, social media, and visual media.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="bn"
      className={`${notoSerifBengali.variable} ${ptSerif.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}

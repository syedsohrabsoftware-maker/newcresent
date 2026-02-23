// app/news/page.tsx
import NewsClient from "./NewsClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "School News & Updates | NCPS Pinangwan Journal",
  description: "New Crescent Public School (NCPS) ki latest khabrein. Admissions 2026-27, sports winners, aur campus events ki puri jankari Hinglish mein.",
  keywords: [
    "NCPS School News", "Admissions 2026-27 Updates", 
    "Pinangwan school events", "Mewat school sports news",
    "Latest education articles Mewat", "NCPS Notice Board"
  ],
  alternates: { canonical: "https://newcrescentschool.in/news" },
  openGraph: {
    title: "NCPS Journal | Latest School Updates",
    description: "Stay updated with the latest happenings at New Crescent Public School.",
    images: [{ url: '/building1.jpg' }],
  }
};

export default function Page() {
  return (
    <>
      {/* NewsArticle Schema for Google News Visibility */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            "headline": "Admissions Open for Session 2026-27 at NCPS",
            "image": ["https://images.unsplash.com/photo-1546410531-bb4caa6b424d"],
            "datePublished": "2026-02-15T08:00:00+08:00",
            "author": { "@type": "Organization", "name": "New Crescent Public School" }
          })
        }}
      />
      <NewsClient />
    </>
  );
}
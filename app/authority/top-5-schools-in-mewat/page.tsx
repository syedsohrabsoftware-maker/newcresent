// app/authority/top-5-schools-in-mewat/page.tsx
import TopSchoolsMewat from "./TopSchoolsMewat";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top 5 Schools in Mewat 2026 | Best Ranking School Nuh",
  description: "मेवात के टॉप 5 स्कूलों की लिस्ट। Janiye kaunsa school hai Nuh, Punhana aur Pinangwan mein sabse achha. NCPS secures #1 rank with digital labs and safe transport.",
  keywords: [
    "Top 5 schools in Mewat", "Best schools in Nuh Pinangwan",
    "Mewat school ranking 2026", "Punhana best CBSE school",
    "Top English medium schools Mewat", "NCPS ranking in Mewat"
  ],
  alternates: {
    canonical: "https://newcrescentschool.in/authority/top-5-schools-in-mewat",
  },
};

export default function Page() {
  return (
    <>
      {/* Article Schema for Ranking Pages */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Top 5 Best Schools in Mewat (Nuh) Region 2026",
            "description": "A comprehensive ranking of the top educational institutions in the Mewat region.",
            "author": { "@type": "Organization", "name": "Mewat Education Index" },
            "publisher": { "@type": "Organization", "name": "New Crescent Public School" }
          })
        }}
      />
      <TopSchoolsMewat />
    </>
  );
}
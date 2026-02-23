// app/best-school-near-me/page.tsx
import CityDirectoryClient from "./CityDirectoryClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Schools in Mewat City-Wise | NCPS Directory 2026",
  description: "Discover the top-rated schools across Punhana, Nuh, Pinangwan, and Palwal. NCPS provides high-tech CBSE education in every city of Mewat. Check city-wise analytics.",
  keywords: [
    "Best school in Punhana", "Top schools in Nuh Mewat", 
    "School directory Pinangwan", "CBSE schools in Palwal",
    "Digital school list Haryana", "NCPS campus locations"
  ],
  alternates: {
    canonical: "https://newcrescentschool.in/best-school-near-me",
  }
};

export default function Page() {
  return (
    <>
      {/* Search Engine ke liye Directory Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Mewat School Directory by NCPS",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Best School in Punhana" },
              { "@type": "ListItem", "position": 2, "name": "Best School in Nuh" },
              { "@type": "ListItem", "position": 3, "name": "Best School in Pinangwan" }
            ]
          })
        }}
      />
      <CityDirectoryClient />
    </>
  );
}
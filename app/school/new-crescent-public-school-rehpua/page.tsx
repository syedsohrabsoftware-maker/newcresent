// app/school/new-crescent-public-school-rehpua/page.tsx
import BrandClient from "./BrandClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "New Crescent Public School (NCPS) Rehpua, Pinangwan",
  description: "New Crescent Public School (NCPS) Rehpua, Pinangwan (Mewat) ka official page. Mewat ka best English medium school with smart classes, safe transport aur excellence in education.",
  keywords: [
    "New Crescent Public School Rehpua", 
    "NCPS Pinangwan", 
    "Best school in Rehpua Pinangwan",
    "New Crescent School Mewat",
    "NCPS Rehpua admission 2026"
  ],
  alternates: {
    canonical: "https://newcrescentschool.in/school/new-crescent-public-school-rehpua",
  }
};

export default function Page() {
  return (
    <>
      {/* School Schema: Google ko batane ke liye ki ye ek real school hai */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "School",
            "name": "New Crescent Public School",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Sikrawa Road, Village Rehpua",
              "addressLocality": "Pinangwan",
              "addressRegion": "Haryana",
              "postalCode": "122508",
              "addressCountry": "IN"
            },
            "url": "https://newcrescentschool.in",
            "telephone": "+91-9813020259",
            "image": "https://newcrescentschool.in/building1.jpg"
          })
        }}
      />
      <BrandClient />
    </>
  );
}
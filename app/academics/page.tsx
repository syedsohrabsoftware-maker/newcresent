// app/academics/page.tsx
import AcademicsClient from "./AcademicsClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Academics & Wings | Nursery to Senior Secondary",
  description: "New Crescent Public School (NCPS) ka academic structure. Nursery se 12th tak quality education, modern STEM labs aur expert PCB/PCM/Commerce coaching in Punhana.",
  keywords: [
    "NCPS School Wings", "Primary education Punhana", "Middle school curriculum Mewat",
    "Senior secondary streams Pinangwan", "CBSE school lab facilities", "Coding for kids Mewat"
  ],
  alternates: {
    canonical: "https://newcrescentschool.in/academics",
  },
  openGraph: {
    title: "Shaping Minds: Academics at New Crescent Public School",
    description: "Nurturing foundations from Nursery to 12th with a 21st-century curriculum.",
    images: [{ url: '/building1.jpg' }],
  }
};

export default function Page() {
  return (
    <>
      {/* Educational Organization Schema for better ranking */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "New Crescent Public School Academics",
            "description": "Offering Primary, Middle, and Senior Wing education following CBSE standards.",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "School Wings",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Primary Wing (Nursery-5th)" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Middle Wing (6th-8th)" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Senior Wing (9th-12th)" } }
              ]
            }
          })
        }}
      />
      <AcademicsClient />
    </>
  );
}
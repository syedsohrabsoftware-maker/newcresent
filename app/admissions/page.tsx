// app/admissions/page.tsx
import AdmissionsClient from "./AdmissionsClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admissions Open 2026-27 | Join NCPS Mewat",
  description: "New Crescent Public School (NCPS) session 2026-27 ke liye admissions open hain. Digital registration, affordable fee structure aur modern CBSE education ke liye aaj hi apply karein.",
  keywords: [
    "School Admissions 2026-27 Punhana",
    "NCPS Admission Process Pinangwan",
    "Best school for Nursery admission Mewat",
    "CBSE school registration 2026 Nuh",
    "Early bird admission discount NCPS",
    "School prospectus 2026 download",
    "Digital school enrollment Haryana"
  ],
  alternates: {
    canonical: "https://newcrescentschool.in/admissions",
  },
  openGraph: {
    title: "Secure Your Child's Future: Admissions 2026-27",
    description: "Mewat's most advanced digital school is now accepting applications.",
    images: [{ url: '/building1.jpg' }],
  }
};

export default function Page() {
  return (
    <>
      {/* Schema Markup for School Admissions to get rich snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Event",
            "name": "NCPS School Admissions 2026-2027",
            "startDate": "2026-01-01",
            "endDate": "2026-03-31",
            "eventStatus": "https://schema.org/EventScheduled",
            "eventAttendanceMode": "https://schema.org/MixedEventAttendanceMode",
            "location": {
              "@type": "Place",
              "name": "New Crescent Public School",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Pinangwan",
                "addressRegion": "Haryana",
                "addressCountry": "IN"
              }
            },
            "description": "Admissions are now open for the academic session 2026-27 from Nursery to Class 12th."
          })
        }}
      />
      <AdmissionsClient />
    </>
  );
}
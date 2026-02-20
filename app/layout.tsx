import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppWidget from "./components/WhatsAppWidget";
import StudentInquiryPopup from "./components/StudentInquiryPopup";

export const metadata: Metadata = {
  title: "New Crescent Public School | Best School in Nuh, Punhana & Pinangwan",
  description: "NCPS is the leading digital school in Mewat. Best CBSE education in Punhana, Pinangwan, Ferozepur Jhirka, Nuh, Palwal, Hatheen & Sikrawa Road.",
  keywords: [
    "New Crescent Public School", 
    "NCPS Nuh Mewat", 
    "Best school in Punhana", 
    "Top school in Pinangwan",
    "Schools in Ferozepur Jhirka",
    "Best CBSE school in Nuh",
    "Private schools in Palwal",
    "Schools in Hatheen Haryana",
    "Digital School Rehepuwa",
    "NCPS Sikrawa Road",
    "Schools in Sikwara Mewat",
    "English Medium School Punhana",
    "Top rated schools in Mewat",
    "NCPS Admission 2026-27"
  ],
  alternates: {
    canonical: "https://newcrescentschool.in",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white antialiased">
        {/* --- SEO SCHEMA MARKUP START --- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "School",
              "name": "New Crescent Public School",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Pinangwan",
                "addressRegion": "Haryana",
                "postalCode": "122508",
                "addressCountry": "IN",
                "streetAddress": "Sikrawa Road, Village Rehpua"
              },
              "url": "https://newcrescentschool.in",
              "telephone": "+919813020259",
              "image": "https://newcrescentschool.in/logo.png",
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "27.9015", 
                "longitude": "77.1235"
              }
            })
          }}
        />
        {/* --- SEO SCHEMA MARKUP END --- */}

        <Header />

        <main className="min-h-screen pt-20">
          {children}
        </main>

        <Footer />
        <WhatsAppWidget />
        <StudentInquiryPopup />
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppWidget from "./components/WhatsAppWidget";

export const metadata: Metadata = {
  // --- YE HAI MASTER SETTING ---
  title: {
    default: "New Crescent Public School | Best School in Nuh, Punhana & Pinangwan",
    template: "%s | New Crescent Public School" // Har page ka title iske aage lag jayega
  },
  description: "NCPS is the leading digital school in Mewat. Best CBSE education in Punhana, Pinangwan, Ferozepur Jhirka, Nuh, Palwal, Hatheen & Sikrawa Road.",
  keywords: [
    "New Crescent Public School", "NCPS Nuh Mewat", "Best school in Punhana", 
    "Top school in Pinangwan", "Schools in Ferozepur Jhirka", "Best CBSE school in Nuh",
    "Digital School Rehepuwa", "NCPS Sikrawa Road", "NCPS Admission 2026-27"
  ],
  alternates: {
    canonical: "https://newcrescentschool.in",
  },
  // Biology Hub Favicon aur social images ke liye
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white antialiased">
        {/* --- GLOBAL SCHOOL SCHEMA --- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "School",
              "name": "New Crescent Public School",
              "alternateName": "NCPS",
              "url": "https://newcrescentschool.in",
              "logo": "https://newcrescentschool.in/logo.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Sikrawa Road, Village Rehpua",
                "addressLocality": "Pinangwan",
                "addressRegion": "Haryana",
                "postalCode": "122508",
                "addressCountry": "IN"
              },
              "telephone": "+919813020259",
              "sameAs": [
                "https://facebook.com/your-school-page",
                "https://instagram.com/your-school-page"
              ]
            })
          }}
        />

        <Header />

        <main className="min-h-screen">
          {children}
        </main>

        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
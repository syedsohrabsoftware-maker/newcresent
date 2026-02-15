import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppWidget from "./components/WhatsAppWidget";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "New Crescent Sr. Sec. School",
  description: "Modern Premium School Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white antialiased">
        <Header />

        {/* Content Wrapper */}
        <main className="min-h-screen pt-20">
          {children}
        </main>

        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
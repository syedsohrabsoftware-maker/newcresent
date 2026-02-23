// app/contact/page.tsx
import ContactClient from "./ContactClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | NCPS Helpline & Location",
  description: "New Crescent Public School (NCPS) se judiye. Pinangwan, Mewat mein hamara campus visit karein ya admission inquiry ke liye +91 98130 20259 par call karein.",
  keywords: [
    "Contact New Crescent Public School",
    "NCPS Punhana phone number",
    "School admission inquiry Mewat",
    "New Crescent School address",
    "NCPS Pinangwan contact details"
  ],
  alternates: {
    canonical: "https://newcrescentschool.in/contact",
  },
  openGraph: {
    title: "Contact NCPS | We are here to help",
    description: "Connect with Mewat's leading digital school for admissions and inquiries.",
    images: [{ url: '/building1.jpg' }], // Agar koi social share kare
  }
};

export default function Page() {
  return <ContactClient />;
}
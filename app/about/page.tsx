// app/about/page.tsx
import AboutClient from "./AboutClient"; // Nayi file banayenge
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Our Legacy | Excellence in Education Since 2001",
  description: "New Crescent Public School (NCPS) ki 25-saal ki legacy. Janiye hamare mission aur modern CBSE education ke bare mein jo Nuh aur Punhana mein best hai.",
  keywords: [
    "About New Crescent Public School",
    "Best CBSE school history Mewat",
    "School mission and vision NCPS",
    "Top educators in Punhana",
    "Smart school facilities Pinangwan"
  ],
  alternates: {
    canonical: "https://newcrescentschool.in/about",
  },
  openGraph: {
    title: "About Our Legacy | New Crescent Public School",
    description: "Building the future of Mewat through digital excellence and character development.",
    url: "https://newcrescentschool.in/about",
    siteName: "New Crescent Public School",
    images: [{ url: '/building1.jpg', width: 1200, height: 630 }],
    type: 'website',
  },
};

export default function Page() {
  return <AboutClient />;
}
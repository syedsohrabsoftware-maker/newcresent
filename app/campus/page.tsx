// app/campus/page.tsx
import CampusClient from "./CampusClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Campus & Facilities | Mewat ka Modern School NCPS",
  description: "New Crescent Public School (NCPS) ka world-class campus. Smart classes, modern science labs aur safe environment bacho ke bright future ke liye. Visit hamara digital campus Pinangwan mein.",
  keywords: [
    "NCPS School Campus Pinangwan", "Smart Classrooms in Mewat",
    "Best Science Labs in Nuh", "School facilities in Punhana",
    "Digital School Infrastructure HR", "Safe and secure school Mewat"
  ],
  alternates: { canonical: "https://newcrescentschool.in/campus" },
};

export default function Page() {
  return <CampusClient />;
}
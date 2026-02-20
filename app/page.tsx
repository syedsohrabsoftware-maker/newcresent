"use client";
import Hero from "./components/Hero";
import HindiExcellence from "./components/HindiExcellence";
import Features from "./components/Features";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import CTA from "./components/CTA";
import { Bus, Monitor, Microscope, BookOpen, Trophy, Shield } from "lucide-react";

export default function Home() {
  const facilities = [
    { name: "Digital Labs", icon: Monitor, color: "bg-blue-500", img: "[Photo 1]" },
    { name: "Safe Transport", icon: Bus, color: "bg-yellow-400", img: "[Photo 2]" },
    { name: "Science Lab", icon: Microscope, color: "bg-green-500", img: "[Photo 3]" },
    { name: "Smart Library", icon: BookOpen, color: "bg-purple-500", img: "[Photo 4]" },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Hero />
    
      <Features />
      <HindiExcellence />
      <Gallery />
      <Testimonials />
      <CTA />
      <Contact />
    </main>
  );
}
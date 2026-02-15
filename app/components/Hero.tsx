"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Play, ArrowRight, Bus, Trophy, ShieldCheck, Star, ChevronLeft, ChevronRight } from "lucide-react";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      img: "/building1.jpg", 
      title: "BIGGEST CAMPUS",
      highlight: "IN NUH DISTRICT",
      desc: "Pinangwan ka sabse shandar aur safe school campus."
    },
    {
      img: "/playground.jpg",
      title: "SPORTS &",
      highlight: "BIG GROUNDS",
      desc: "Bacchon ke khelne ke liye bade maidan aur sports facility."
    },
    {
      img: "/classroom.jpg",
      title: "SMART",
      highlight: "CLASSES",
      desc: "Computer aur Digital screen se modern aur aasan padhai."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative w-full h-[85vh] md:h-screen overflow-hidden bg-[#08011c]">
      
      {/* --- BACKGROUND SLIDER WITH PREMIUM OVERLAY --- */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 scale-110" : "opacity-0 scale-100"
            }`}
          >
            {/* Multi-Layer Overlay: Taaki text ekdum sharp chamke */}
            {/* Main Dark Gradient */}
<div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-10"></div>

{/* Color + Soft Blur Gradient */}
<div className="absolute inset-0 bg-gradient-to-r from-[#08011c]/60 via-[#08011c]/30 to-transparent backdrop-blur-[1px] z-10"></div>
            
            <Image 
              src={slide.img} 
              alt={slide.title} 
              fill 
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* --- CONTENT OVERLAY (Fixed Header Spacing) --- */}
      {/* pt-44 (Mobile) aur md:pt-48 (Desktop) lagaya hai taaki Header ke niche na dabe */}
      <div className="relative z-20 max-w-[1440px] mx-auto px-6 md:px-16 h-full flex items-center pt-44 md:pt-48">
        <div className="max-w-4xl space-y-7 md:space-y-9">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-3 py-2 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-2xl animate-in fade-in slide-in-from-top-4 duration-700">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ECFF1C] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ECFF1C]"></span>
            </span>
            <span className="text-[10px] md:text-[12px] font-black uppercase tracking-[3px]">Admission 2026 Open</span>
          </div>

          {/* Headline: Clean White & Neon Yellow */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-6xl md:text-[95px] font-black text-white leading-[0.85] tracking-tighter uppercase drop-shadow-2xl">
              {slides[currentSlide].title} <br />
              <span className="text-[#ECFF1C] italic tracking-[-1px] md:tracking-[-3px]">{slides[currentSlide].highlight}</span>
            </h1>
            <p className="text-base md:text-2xl text-slate-200 font-bold max-w-2xl leading-snug border-l-4 border-[#621CFF] pl-6 py-1 md:py-2">
              {slides[currentSlide].desc}
            </p>
          </div>

          {/* Action Buttons: Fintech Style */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-2">
            <button className="group relative bg-[#621CFF] text-white px-8 md:px-12 py-4 md:py-5 rounded-2xl font-black text-[11px] md:text-xs uppercase tracking-[4px] shadow-[0_0_30px_rgba(98,28,255,0.4)] hover:shadow-[0_0_50px_rgba(98,28,255,0.6)] hover:-translate-y-1 transition-all flex items-center justify-center gap-4 active:scale-95 overflow-hidden">
               <span className="relative z-10">Apply Now</span>
               <ArrowRight size={18} className="relative z-10 group-hover:translate-x-2 transition-transform" />
               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>
            
            <button className="bg-white/5 backdrop-blur-xl border-2 border-white/10 text-white px-8 md:px-12 py-4 md:py-5 rounded-2xl font-black text-[11px] md:text-xs uppercase tracking-[4px] hover:bg-white/10 transition-all flex items-center justify-center gap-4">
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#ECFF1C] flex items-center justify-center">
                <Play size={14} fill="#08011c" className="text-[#08011c] ml-0.5" />
              </div>
              Watch Tour
            </button>
          </div>

          {/* Simple Feature Icons Bar */}
          <div className="grid grid-cols-3 gap-3 md:gap-10 pt-8 border-t border-white/10 max-w-2xl">
             {[
               { icon: Bus, label: "Yellow Bus" },
               { icon: Trophy, label: "Big Ground" },
               { icon: ShieldCheck, label: "Full Safety" }
             ].map((item, i) => (
               <div key={i} className="flex flex-col md:flex-row items-center gap-2 md:gap-4 group cursor-default">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/5 flex items-center justify-center text-[#ECFF1C] border border-white/10 group-hover:border-[#ECFF1C] transition-all">
                     <item.icon size={20} className="md:size-6" />
                  </div>
                  <span className="text-[8px] md:text-[11px] font-black text-white uppercase tracking-widest text-center md:text-left">{item.label}</span>
               </div>
             ))}
          </div>
        </div>
      </div>

      {/* --- Slider Dots & Arrows (Fintech Layout) --- */}
      <div className="absolute bottom-10 right-10 flex flex-col items-center gap-6 z-30">
        <div className="flex flex-col gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-1.5 transition-all duration-500 rounded-full ${
                i === currentSlide ? "bg-[#ECFF1C] h-12" : "bg-white/20 h-4"
              }`}
            ></button>
          ))}
        </div>
        <div className="flex gap-2">
          <button onClick={prevSlide} className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#621CFF] transition-all">
            <ChevronLeft size={20} />
          </button>
          <button onClick={nextSlide} className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#621CFF] transition-all">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* --- FLOAT SUCCESS CARD (Desktop) --- */}
      <div className="absolute top-1/2 right-16 -translate-y-1/2 z-30 hidden xl:block">
         <div className="bg-white/5 backdrop-blur-2xl p-8 rounded-[40px] border border-white/10 shadow-2xl flex flex-col items-center gap-6 group hover:border-[#ECFF1C]/30 transition-all duration-500">
            <div className="w-20 h-20 rounded-[28px] bg-[#ECFF1C] flex items-center justify-center text-[#08011c] shadow-[0_0_30px_#ECFF1C] group-hover:scale-110 transition-transform">
               <Star size={40} fill="currentColor" />
            </div>
            <div className="text-center">
               <h4 className="text-5xl font-black text-white tracking-tighter italic">100%</h4>
               <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1 italic">Result Board</p>
            </div>
         </div>
      </div>

    </section>
  );
}
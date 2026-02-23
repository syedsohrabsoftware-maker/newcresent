"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Zap, ShieldCheck, Globe, CheckCircle2, 
  Cpu, Beaker, Library, Palmtree, 
  Music, Dumbbell, Monitor, Camera
} from "lucide-react";

const facilities = [
  { title: "Smart Classrooms", desc: "Interactive flat panels aur high-speed internet se equipped har class.", icon: Monitor, color: "text-blue-600", bg: "bg-blue-50" },
  { title: "Science Hub", desc: "Advanced labs jahan NCERT concepts practical experiment mein badalte hain.", icon: Beaker, color: "text-emerald-600", bg: "bg-emerald-50" },
  { title: "STEM & Coding", desc: "Bacho ke liye dedicated AI aur Robotics lab future-ready skills ke liye.", icon: Cpu, color: "text-[#621CFF]", bg: "bg-[#621CFF]/5" },
  { title: "Secure Campus", desc: "100% CCTV coverage aur strictly monitored entry-exit gates.", icon: Camera, color: "text-red-600", bg: "bg-red-50" },
];

export default function CampusClient() {
  return (
    <main className="pt-32 pb-20 bg-white min-h-screen selection:bg-[#621CFF]/20 overflow-x-hidden">
      
      {/* --- PREMIUM AMBIENCE --- */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#621CFF]/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-[-5%] w-[500px] h-[500px] bg-[#ECFF1C]/10 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        
        {/* --- HERO SECTION --- */}
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-1 space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-full shadow-2xl">
              <Zap size={14} className="text-[#ECFF1C]" />
              <span className="text-[10px] font-black uppercase tracking-[3px]">Next-Gen Infrastructure</span>
            </div>
            <h1 className="text-6xl md:text-[110px] font-black text-[#150447] tracking-tighter uppercase leading-[0.85]">
              WORLD-CLASS <br /> <span className="text-[#621CFF] italic">CAMPUS.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 font-bold max-w-xl border-l-8 border-[#ECFF1C] pl-6 uppercase italic">
              Mewat ka wo campus jo bacho ko modern technology aur safe environment provide karta hai.
            </p>
          </motion.div>

          {/* Feature Image with Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex-1 relative group"
          >
            <div className="relative w-full aspect-[4/3] rounded-[60px] overflow-hidden border-[12px] border-slate-50 shadow-2xl">
              <Image 
                src="/building1.jpg" 
                alt="NCPS Modern School Campus Building" 
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-10 -right-6 md:-right-10 bg-white p-8 rounded-[40px] shadow-2xl border border-slate-100 hidden md:block">
               <div className="flex items-center gap-4 text-[#150447]">
                  <div className="w-12 h-12 rounded-2xl bg-[#ECFF1C] flex items-center justify-center shadow-lg"><Globe size={24}/></div>
                  <div>
                    <p className="font-black text-sm uppercase leading-none italic">Digital Hub</p>
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">Nuh District, HR</p>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>

        {/* --- CORE FACILITIES GRID --- */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {facilities.map((fac, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="group relative bg-slate-50 rounded-[48px] p-10 hover:bg-white hover:shadow-2xl transition-all duration-700 border border-transparent hover:border-slate-100"
            >
              <div className={`w-16 h-16 rounded-[24px] ${fac.bg} shadow-sm flex items-center justify-center ${fac.color} mb-8 group-hover:rotate-12 transition-transform`}>
                <fac.icon size={30} />
              </div>
              <h3 className="text-2xl font-black text-[#150447] tracking-tighter uppercase mb-3 italic">{fac.title}</h3>
              <p className="text-slate-500 font-bold text-xs leading-relaxed uppercase tracking-tight">{fac.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* --- PREMIUM CAMPUS PILLARS --- */}
        <div className="bg-[#150447] rounded-[64px] p-8 md:p-24 text-white relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#621CFF] rounded-full blur-[150px] opacity-30 -translate-y-1/2 translate-x-1/2" />
           
           <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-10">
                 <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.85] uppercase italic">
                    BEYOND THE <br /> <span className="text-[#ECFF1C]">ORDINARY.</span>
                 </h2>
                 <p className="text-indigo-200 font-bold text-lg italic max-w-md">
                    Hum sirf education nahi dete, hum environment create karte hain jahan har bacha khul kar seekh sake.
                 </p>
                 
                 <div className="grid gap-6">
                    {[
                      { label: "Digital Library", text: "5000+ books aur E-learning access.", icon: Library },
                      { label: "Eco-Friendly", text: "Green campus with solar energy power.", icon: Palmtree },
                      { label: "Sports Complex", text: "Dedicated play zones aur expert coaches.", icon: Dumbbell }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-6 group">
                        <div className="w-14 h-14 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-[#ECFF1C] group-hover:bg-[#ECFF1C] group-hover:text-[#150447] transition-all">
                           <item.icon size={24} />
                        </div>
                        <div>
                          <p className="font-black text-xs uppercase tracking-widest text-[#ECFF1C]">{item.label}</p>
                          <p className="text-indigo-100 text-sm font-medium">{item.text}</p>
                        </div>
                      </div>
                    ))}
                 </div>
              </div>

              {/* Glass Card Checklist */}
              <div className="bg-white/10 backdrop-blur-3xl rounded-[56px] p-8 md:p-14 border border-white/10 space-y-10">
                 <h4 className="text-white font-black text-2xl uppercase tracking-tighter italic border-b border-white/10 pb-6">Campus Highlights</h4>
                 <div className="space-y-6">
                    {[
                      "Mewat's First Smart ID Access",
                      "GPS Tracked School Transport",
                      "Filtered Water & Health Hub",
                      "Digital Skill Development Cell"
                    ].map((text, idx) => (
                      <div key={idx} className="flex items-center gap-5 group">
                        <div className="w-10 h-10 rounded-2xl bg-[#ECFF1C] flex items-center justify-center text-[#150447] group-hover:scale-110 transition-transform shadow-lg">
                           <CheckCircle2 size={20} />
                        </div>
                        <p className="text-white font-black text-xs uppercase tracking-widest italic">{text}</p>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>

      </div>
    </main>
  );
}
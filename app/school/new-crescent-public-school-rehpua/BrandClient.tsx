"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  ShieldCheck, MapPin, Zap, Star, Award, 
  GraduationCap, Phone, ArrowRight, 
  Cpu, Sparkles, Microscope, Dna, Atom
} from "lucide-react";
import Link from "next/link";

export default function BrandClient() {
  const stats = [
    { label: "Elite Students", value: "2500+", icon: GraduationCap, color: "text-blue-500" },
    { label: "Bio-Tech Labs", value: "02", icon: Dna, color: "text-emerald-500" }, // Focus on Biology
    { label: "Medical Results", value: "99%", icon: Award, color: "text-[#ECFF1C]" },
    { label: "Trust Score", value: "4.9/5", icon: Star, color: "text-amber-500" },
  ];

  return (
    <main className="min-h-screen bg-white font-sans overflow-x-hidden pt-32 selection:bg-[#621CFF]/20">
      
      {/* ─── PREMIUM AMBIENCE ─── */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-[#621CFF]/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#ECFF1C]/10 blur-[100px] rounded-full" />
      </div>

      {/* ─── HERO: BIOLOGY & SCIENCE DOMINANCE ─── */}
      <section className="bg-[#08011c] pt-24 pb-32 px-6 relative rounded-b-[60px] md:rounded-b-[120px] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        
        <div className="max-w-[1440px] mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-[#ECFF1C]/10 border border-[#ECFF1C]/20 px-6 py-2.5 rounded-full mb-10 backdrop-blur-xl"
          >
            <Microscope size={14} className="text-[#ECFF1C]" />
            <span className="text-[#ECFF1C] text-[10px] font-black uppercase tracking-[5px]">Mewat's Premier Biology Hub</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-6xl md:text-[115px] font-black text-white tracking-tighter leading-[0.8] mb-12 uppercase"
          >
            NCPS. THE <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ECFF1C] via-white to-[#621CFF] italic">
              BIOLOGY HUB.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-slate-400 text-lg md:text-2xl max-w-3xl mx-auto italic font-medium leading-relaxed mb-16"
          >
            "Rehpua-Pinangwan ki Shaan" — NCPS is renowned for specialized Biology education, shaping the doctors and scientists of tomorrow.
          </motion.p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/admissions" className="bg-[#621CFF] text-white px-12 py-6 rounded-3xl font-black uppercase text-xs tracking-[4px] shadow-[0_20px_50px_rgba(98,28,255,0.4)] hover:bg-white hover:text-[#08011c] transition-all flex items-center gap-4">
              Apply for 2026 <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── METRICS: THE SCIENCE ADVANTAGE ─── */}
      <section className="max-w-[1440px] mx-auto -mt-20 px-6 relative z-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div 
              key={i} whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-[48px] border border-slate-100 shadow-2xl flex flex-col items-center text-center group"
            >
              <div className={`w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center ${stat.color} mb-6 group-hover:bg-[#08011c] group-hover:text-white transition-all`}>
                <stat.icon size={28} />
              </div>
              <h3 className="text-4xl font-black text-[#08011c] tracking-tighter mb-2">{stat.value}</h3>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[3px]">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── SPECIALIZATION: BIOLOGY EXCELLENCE ─── */}
      <section className="py-32 max-w-[1440px] mx-auto px-6 md:px-16">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <div className="space-y-6">
               <h2 className="text-5xl md:text-8xl font-black text-[#150447] tracking-tight uppercase leading-[0.85] italic">
                 BIOLOGY <br /> <span className="text-emerald-500">EXCELLENCE.</span>
               </h2>
               <div className="w-24 h-3 bg-[#ECFF1C] rounded-full" />
            </div>
            <p className="text-slate-500 font-bold text-xl leading-relaxed italic border-l-8 border-emerald-500 pl-8">
              NCPS is specialized in life-sciences. Hamari Biology labs aur expert faculty bacchon ko NEET aur advanced medical careers ke liye Nuh district mein sabse best environment deti hain.
            </p>
            

[Image of the human heart anatomy diagram]

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               {[
                 { t: "NEET Foundation", i: Microscope },
                 { t: "Live Specimens Lab", i: Atom },
                 { t: "3D Biology Kits", i: Dna },
                 { t: "Expert Mentorship", i: GraduationCap }
               ].map((item, idx) => (
                 <div key={idx} className="flex items-center gap-4 bg-slate-50 p-6 rounded-[32px] border border-slate-100">
                    <item.i className="text-emerald-600" size={24} />
                    <span className="text-xs font-black text-[#150447] uppercase tracking-widest">{item.t}</span>
                 </div>
               ))}
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-6 bg-gradient-to-tr from-emerald-500 to-[#ECFF1C] rounded-[80px] opacity-10 blur-3xl" />
            <div className="relative aspect-square rounded-[60px] overflow-hidden border-[16px] border-slate-50 shadow-2xl">
              {/* Replace with a Biology Lab specific image if available */}
              <Image 
                src="/building1.jpg" 
                alt="NCPS Biology Specialist Hub" 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-1000" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08011c] via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-10 left-10">
                 <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-2xl">
                    <Dna className="text-[#ECFF1C]" size={20} />
                    <span className="text-white font-black uppercase text-xs tracking-widest">Medical Excellence Hub</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BRAND FOOTPRINT ─── */}
      <section className="mx-6 md:mx-16 mb-24">
        <div className="bg-[#150447] rounded-[80px] p-12 md:p-24 text-white relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-500 rounded-full blur-[150px] opacity-20 -translate-y-1/2 translate-x-1/2" />
           
           <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-10">
                 <h3 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.8] italic">
                   THE CAMPUS <br /> <span className="text-emerald-400">HUB.</span>
                 </h3>
                 <div className="space-y-6">
                    <div className="flex items-center gap-6">
                       <div className="w-16 h-16 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-[#ECFF1C]">
                          <MapPin size={32} />
                       </div>
                       <div>
                          <p className="text-[10px] font-black uppercase tracking-[4px] text-indigo-300">Official Location</p>
                          <p className="text-xl font-black italic">Sikrawa Road, Village Rehpua, Pinangwan</p>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="bg-white/5 backdrop-blur-3xl p-10 md:p-14 rounded-[60px] border border-white/10 space-y-10">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#ECFF1C] flex items-center justify-center text-[#150447] shadow-xl">
                      <Phone size={24}/>
                    </div>
                    <div>
                       <p className="text-[9px] font-black uppercase tracking-widest text-indigo-300">NCPS Science Line</p>
                       <p className="text-2xl font-black tracking-tighter">+91 98130 20259</p>
                    </div>
                 </div>
                 <button className="w-full bg-[#621CFF] text-white py-6 rounded-3xl font-black uppercase text-xs tracking-[5px] hover:bg-emerald-500 transition-all">
                    Admission Inquiry 2026
                 </button>
              </div>
           </div>
        </div>
      </section>

    </main>
  );
}
"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  ShieldCheck, Zap, Star, Award, 
  GraduationCap, ArrowRight, 
  Microscope, Dna, Building2,
  CheckCircle2
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function PrivateSchoolClient() {
  const features = [
    { t: "Elite CBSE Curriculum", i: GraduationCap, d: "International standards for local leaders." },
    { t: "Digital Lab Access", i: Zap, d: "Fully tech-enabled learning environment." },
    { t: "Medical Stream Focus", i: Dna, d: "Specialized coaching for future doctors." },
    { t: "Safe Campus Network", i: ShieldCheck, d: "24/7 security and verified transport." },
  ];

  return (
    <main className="min-h-screen bg-white font-sans overflow-x-hidden pt-32 selection:bg-[#621CFF]/20">
      
      {/* ─── PREMIUM BACKGROUND AMBIENCE ─── */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-[#621CFF]/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#ECFF1C]/5 blur-[100px] rounded-full" />
      </div>

      {/* ─── HERO SECTION: PRIVATE EXCELLENCE ─── */}
      <section className="bg-[#08011c] pt-24 pb-32 px-6 relative rounded-b-[60px] md:rounded-b-[120px] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        
        <div className="max-w-[1440px] mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-[#621CFF]/10 border border-[#621CFF]/20 px-6 py-2.5 rounded-full mb-10 backdrop-blur-xl"
          >
            <Star size={14} className="text-[#ECFF1C]" />
            <span className="text-[#ECFF1C] text-[10px] font-black uppercase tracking-[5px]">Premium Private Education</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-6xl md:text-[110px] font-black text-white tracking-tighter leading-[0.85] mb-12 uppercase italic"
          >
            PRIVATE SCHOOL IN <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ECFF1C] via-white to-[#621CFF]">
              MEWAT NUH HARYANA.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-slate-400 text-lg md:text-2xl max-w-3xl mx-auto font-medium leading-relaxed mb-16"
          >
            Experience the pinnacle of private schooling at NCPS. Where digital innovation meets academic rigor to shape Mewat's brightest minds.
          </motion.p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/admissions" className="bg-[#621CFF] text-white px-12 py-6 rounded-3xl font-black uppercase text-xs tracking-[4px] shadow-[0_20px_50px_rgba(98,28,255,0.4)] hover:bg-white hover:text-[#08011c] transition-all flex items-center gap-4">
              Book a Campus Tour <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── WHY PRIVATE? SECTION ─── */}
      <section className="py-32 max-w-[1440px] mx-auto px-6 md:px-16">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          
          {/* Visual Side */}
          <div className="relative group">
            <div className="absolute -inset-6 bg-gradient-to-tr from-[#621CFF] to-[#ECFF1C] rounded-[80px] opacity-10 blur-3xl" />
            <div className="relative aspect-[4/5] rounded-[60px] overflow-hidden border-[16px] border-slate-50 shadow-2xl bg-[#08011c]">
              <Image 
                src="/campus-main.jpg" // Apna image path check karein
                alt="NCPS Private School Excellence" 
                fill 
                className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08011c] via-transparent to-transparent" />
              <div className="absolute bottom-12 left-12 right-12">
                 <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl">
                    <Building2 className="text-[#ECFF1C] mb-4" size={40} />
                    <h4 className="text-2xl font-black text-white italic uppercase tracking-tighter">Elite Infrastructure</h4>
                    <p className="text-slate-300 text-sm mt-2 font-bold uppercase tracking-widest">Digital Campus · 2026 Edition</p>
                 </div>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="space-y-12">
            <div className="space-y-6">
               <h2 className="text-5xl md:text-8xl font-black text-[#08011c] tracking-tight uppercase leading-[0.85] italic">
                 THE PRIVATE <br /> <span className="text-[#621CFF]">ADVANTAGE.</span>
               </h2>
               <div className="w-24 h-3 bg-[#ECFF1C] rounded-full" />
            </div>
            
            <p className="text-slate-500 font-bold text-xl leading-relaxed italic border-l-8 border-[#621CFF] pl-8">
              Mewat Nuh mein private education ka matlab hai—personalized attention aur advanced facilities. Hum sirf padhate nahi, hum career banate hain.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               {features.map((item, idx) => (
                 <motion.div 
                   key={idx} 
                   whileHover={{ scale: 1.02 }}
                   className="flex flex-col gap-4 bg-slate-50 p-8 rounded-[40px] border border-slate-100 hover:bg-white hover:shadow-xl transition-all"
                 >
                    <div className="w-12 h-12 bg-[#08011c] rounded-2xl flex items-center justify-center text-[#ECFF1C]">
                      <item.i size={24} />
                    </div>
                    <div>
                      <span className="text-xs font-black text-[#08011c] uppercase tracking-widest block mb-1">{item.t}</span>
                      <p className="text-[10px] text-slate-400 font-bold uppercase">{item.d}</p>
                    </div>
                 </motion.div>
               ))}
            </div>
          </div>

        </div>
      </section>

      {/* ─── TRUST BADGE ─── */}
      <section className="bg-[#08011c] mx-6 md:mx-16 mb-24 rounded-[80px] p-12 md:p-24 relative overflow-hidden">
         <div className="relative z-10 flex flex-col items-center text-center space-y-8">
            <Award className="text-[#ECFF1C]" size={64} />
            <h3 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter">
               Top Ranked Private School <br /> in Mewat 2026
            </h3>
            <Link href="/apply" className="bg-[#ECFF1C] text-[#08011c] px-16 py-6 rounded-[30px] font-black uppercase tracking-[4px] hover:scale-105 transition-transform">
               Enroll Your Child Now
            </Link>
         </div>
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-[#621CFF]/20 to-transparent" />
      </section>

    </main>
  );
}
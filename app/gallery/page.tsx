"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Trophy, 
  ChevronRight, 
  ArrowUpRight,
  Sparkles,
  Search
} from "lucide-react";

// Merit Students Data based on your school branding
const meritStudents = [
  { id: 1, name: "Sahil Khan", rank: "Rank 1", marks: "98.8%", class: "10th", image: "/student1.jpg" },
  { id: 2, name: "Anjali Sharma", rank: "Rank 2", marks: "97.5%", class: "10th", image: "/student2.jpg" },
  { id: 3, name: "Mohd. Rehan", rank: "Rank 3", marks: "96.2%", class: "12th", image: "/student3.jpg" },
  { id: 4, name: "Isha Gupta", rank: "Rank 4", marks: "95.8%", class: "10th", image: "/student4.jpg" },
];

export default function GalleryPage() {
  return (
    <div className="bg-white min-h-screen font-sans selection:bg-[#6322FF] selection:text-white pb-20">
      
      {/* --- PREMIUM HERO SECTION (Image Matching) --- */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-[#0A0118]">
        {/* Subtle Grid Pattern from your header style */}
        <div className="absolute inset-0 opacity-10" style={{ 
          backgroundImage: `radial-gradient(circle at 2px 2px, #6322FF 1px, transparent 0)`,
          backgroundSize: '30px 30px' 
        }}></div>
        
        <div className="max-w-[1440px] mx-auto px-8 md:px-16 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-[#6322FF]/10 text-[#6322FF] font-black uppercase tracking-[4px] text-[10px] rounded-full mb-8 border border-[#6322FF]/20">
              <Sparkles size={14} className="animate-pulse" /> Hall of Fame 2026
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-8 leading-[0.85]">
              OUR TOP <br /> <span className="text-[#6322FF]">PERFORMERS.</span>
            </h1>
            <p className="text-slate-400 text-xl max-w-2xl mx-auto font-medium leading-relaxed">
              Excellence in Nuh—celebrating the brilliant minds of New Crescent Public School who secured top positions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- TOP 3 PODIUM (Modern Purple Style) --- */}
      <section className="py-24 max-w-[1440px] mx-auto px-8 md:px-16">
        <div className="flex flex-wrap justify-center items-end gap-6 md:gap-16 mb-40">
          {meritStudents.slice(0, 3).map((student, idx) => (
            <motion.div 
              key={student.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={`relative group ${idx === 0 ? 'order-2 z-20 mb-12' : idx === 1 ? 'order-1' : 'order-3'}`}
            >
              <div className="flex flex-col items-center">
                <div className={`relative ${idx === 0 ? 'w-64 h-64 md:w-80 md:h-80' : 'w-52 h-52 md:w-64 md:h-64'} rounded-[50px] p-1.5 bg-gradient-to-tr from-[#6322FF] to-[#A880FF] shadow-[0_20px_50px_rgba(99,34,255,0.3)]`}>
                  <div className="w-full h-full rounded-[45px] bg-white overflow-hidden relative border-4 border-white">
                     <Image src={student.image} alt={student.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  {/* Rank Indicator */}
                  <div className="absolute -top-6 -right-6 w-16 h-16 bg-white border-4 border-[#6322FF] rounded-2xl flex items-center justify-center shadow-xl rotate-12 group-hover:rotate-0 transition-transform">
                     <span className="text-2xl font-black text-[#6322FF]">#{student.id}</span>
                  </div>
                </div>
                <div className="text-center mt-12 space-y-2">
                  <h3 className="text-3xl font-black text-[#0A0118] tracking-tight">{student.name}</h3>
                  <div className="flex items-center justify-center gap-3">
                    <span className="bg-[#6322FF] text-white px-4 py-1 rounded-full text-sm font-bold">{student.marks}</span>
                    <span className="text-slate-400 font-bold uppercase text-xs tracking-widest">Class {student.class}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- ACHIEVERS CIRCLE SLIDER --- */}
        <div className="mt-20">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="space-y-2">
              <h2 className="text-4xl font-black text-[#0A0118] uppercase tracking-tighter italic leading-none">The Merit <span className="text-[#6322FF]">Circle</span></h2>
              <p className="text-slate-500 font-bold tracking-wide">Next Generation Leaders (Rank 4-10)</p>
            </div>
            <div className="flex gap-3">
              <button className="w-14 h-14 rounded-2xl border-2 border-slate-100 flex items-center justify-center hover:bg-[#6322FF] hover:border-[#6322FF] hover:text-white transition-all shadow-sm">
                <ChevronRight size={24} className="rotate-180" />
              </button>
              <button className="w-14 h-14 rounded-2xl border-2 border-slate-100 flex items-center justify-center hover:bg-[#6322FF] hover:border-[#6322FF] hover:text-white transition-all shadow-sm">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Scrolling Container */}
          <div className="flex gap-8 overflow-x-auto pb-12 no-scrollbar snap-x px-4">
            {meritStudents.map((student) => (
              <motion.div 
                key={student.id}
                whileHover={{ y: -15 }}
                className="min-w-[350px] bg-white rounded-[45px] p-10 border border-slate-100 snap-start group hover:shadow-[0_30px_60px_rgba(99,34,255,0.12)] transition-all"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="w-24 h-24 rounded-3xl bg-slate-50 overflow-hidden border-2 border-slate-100 p-1 relative">
                    <div className="w-full h-full rounded-2xl overflow-hidden relative">
                      <Image src={student.image} alt={student.name} fill className="object-cover" />
                    </div>
                  </div>
                  <Trophy className="text-[#6322FF] opacity-20" size={40} />
                </div>
                
                <div className="space-y-4">
                  <h5 className="text-2xl font-black text-[#0A0118] group-hover:text-[#6322FF] transition-colors leading-tight">{student.name}</h5>
                  <div className="flex gap-3">
                    <span className="px-4 py-1.5 bg-slate-50 rounded-xl text-xs font-black text-slate-500 uppercase tracking-widest border border-slate-100">Rank {student.id}</span>
                    <span className="px-4 py-1.5 bg-[#6322FF]/5 rounded-xl text-xs font-black text-[#6322FF] uppercase tracking-widest border border-[#6322FF]/10">{student.marks}</span>
                  </div>
                </div>

                <button className="w-full mt-10 py-5 bg-[#0A0118] text-white rounded-2xl font-black text-[11px] uppercase tracking-[3px] flex items-center justify-center gap-3 group-hover:bg-[#6322FF] transition-all shadow-lg">
                  Student Record <ArrowUpRight size={16} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CAMPUS SPOTLIGHT (White Style) --- */}
      <section className="py-32 bg-slate-50/50 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-8 md:px-16">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-5xl font-black text-[#0A0118] tracking-tighter italic">CAMPUS <span className="text-[#6322FF]">GALLERY</span></h2>
            <div className="w-24 h-2 bg-[#6322FF] mx-auto rounded-full"></div>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {[1, 2, 3, 4, 5, 6].map((img) => (
              <motion.div 
                key={img}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="relative rounded-[40px] overflow-hidden group border-8 border-white shadow-xl hover:shadow-2xl transition-all"
              >
                <Image 
                  src={`/gallery-${img}.jpg`} 
                  alt="Campus" 
                  width={600} 
                  height={800} 
                  className="object-cover group-hover:scale-110 transition-transform duration-1000" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#6322FF]/90 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 p-10 flex items-end">
                   <div>
                     <p className="text-white/60 text-xs font-black uppercase tracking-[4px] mb-2">Facility</p>
                     <p className="text-white font-black text-2xl tracking-tight">Advanced Science Laboratory</p>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
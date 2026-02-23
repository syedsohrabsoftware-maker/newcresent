"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Trophy, ChevronRight, ArrowUpRight, Sparkles } from "lucide-react";

const meritStudents = [
  { id: 1, name: "Sahil Khan", rank: "Rank 1", marks: "98.8%", class: "10th", image: "/student1.jpg" },
  { id: 2, name: "Anjali Sharma", rank: "Rank 2", marks: "97.5%", class: "10th", image: "/student2.jpg" },
  { id: 3, name: "Mohd. Rehan", rank: "Rank 3", marks: "96.2%", class: "12th", image: "/student3.jpg" },
  { id: 4, name: "Isha Gupta", rank: "Rank 4", marks: "95.8%", class: "10th", image: "/student4.jpg" },
];

export default function GalleryClient() {
  return (
    <div className="bg-white min-h-screen font-sans selection:bg-[#6322FF] selection:text-white pb-20">
      
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-[#0A0118]">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #6322FF 1px, transparent 0)`, backgroundSize: '30px 30px' }}></div>
        <div className="max-w-[1440px] mx-auto px-8 md:px-16 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-[#6322FF]/10 text-[#6322FF] font-black uppercase tracking-[4px] text-[10px] rounded-full mb-8 border border-[#6322FF]/20">
              <Sparkles size={14} className="animate-pulse" /> Hall of Fame 2026
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-8 leading-[0.85]">
              OUR TOP <br /> <span className="text-[#6322FF]">PERFORMERS.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* TOP 3 PODIUM */}
      <section className="py-24 max-w-[1440px] mx-auto px-8 md:px-16">
        <div className="flex flex-wrap justify-center items-end gap-6 md:gap-16 mb-40">
          {meritStudents.slice(0, 3).map((student, idx) => (
            <motion.div key={student.id} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className={`relative group ${idx === 0 ? 'order-2 z-20 mb-12' : idx === 1 ? 'order-1' : 'order-3'}`}>
              <div className="flex flex-col items-center">
                <div className={`relative ${idx === 0 ? 'w-64 h-64 md:w-80 md:h-80' : 'w-52 h-52 md:w-64 md:h-64'} rounded-[50px] p-1.5 bg-gradient-to-tr from-[#6322FF] to-[#A880FF] shadow-2xl transition-transform hover:scale-105 duration-500`}>
                  <div className="w-full h-full rounded-[45px] bg-white overflow-hidden relative border-4 border-white">
                    <Image src={student.image} alt={`${student.name} - NCPS Topper`} fill className="object-cover" />
                  </div>
                  <div className="absolute -top-6 -right-6 w-16 h-16 bg-white border-4 border-[#6322FF] rounded-2xl flex items-center justify-center shadow-xl rotate-12 group-hover:rotate-0 transition-all">
                    <span className="text-2xl font-black text-[#6322FF]">#{student.id}</span>
                  </div>
                </div>
                <div className="text-center mt-12 space-y-2">
                  <h3 className="text-3xl font-black text-[#0A0118] tracking-tight">{student.name}</h3>
                  <div className="flex items-center justify-center gap-3">
                    <span className="bg-[#6322FF] text-white px-4 py-1 rounded-full text-sm font-bold">{student.marks}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* MASONRY CAMPUS GALLERY */}
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-5xl font-black text-[#0A0118] tracking-tighter italic">CAMPUS <span className="text-[#6322FF]">GALLERY.</span></h2>
          <div className="w-24 h-2 bg-[#6322FF] mx-auto rounded-full"></div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {[1, 2, 3, 4, 5, 6].map((img) => (
            <motion.div key={img} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="relative rounded-[40px] overflow-hidden group border-8 border-white shadow-xl">
              <Image src={`/gallery-${img}.jpg`} alt={`NCPS Campus Facility ${img}`} width={600} height={800} className="object-cover group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#6322FF]/90 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 p-10 flex items-end">
                <p className="text-white font-black text-2xl tracking-tight uppercase italic">Digital Learning Hub</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
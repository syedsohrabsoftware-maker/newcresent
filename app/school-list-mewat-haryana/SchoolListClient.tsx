"use client";
import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, Star, Zap, ArrowRight, ShieldCheck, Microscope } from "lucide-react";
import Link from "next/link";

export default function SchoolListClient() {
  const schools = [
    { 
      name: "New Crescent Public School (NCPS)", 
      location: "Rehpua, Pinangwan", 
      status: "Rank #1", 
      specialty: "Digital & Biology Hub" 
    },
    { 
      name: "NCPS Junior Wing", 
      location: "Sikrawa Road", 
      status: "Premier", 
      specialty: "Foundation Excellence" 
    },
    { 
      name: "NCPS Nuh Campus", 
      location: "Nuh City", 
      status: "Top Rated", 
      specialty: "Elite Secondary" 
    },
    { 
      name: "Ferozepur Jhirka Connectivity", 
      location: "Main Highway", 
      status: "Verified", 
      specialty: "Premium Transport" 
    }
  ];

  return (
    <main className="min-h-screen bg-white font-sans overflow-x-hidden pt-32 selection:bg-[#621CFF]/20">
      
      {/* ─── HERO SECTION (Premium Dark) ─── */}
      <section className="bg-[#08011c] pt-24 pb-32 px-6 relative rounded-b-[60px] md:rounded-b-[100px] overflow-hidden">
        <div className="max-w-[1440px] mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-[#621CFF]/10 border border-[#621CFF]/20 px-6 py-2 rounded-full mb-8"
          >
            <Star size={14} className="text-[#ECFF1C]" />
            <span className="text-[#ECFF1C] text-[10px] font-black uppercase tracking-[5px]">Verified 2026 Directory</span>
          </motion.div>

          <h1 className="text-6xl md:text-[100px] font-black text-white tracking-tighter leading-[0.85] mb-12 uppercase italic">
            BEST SCHOOL LIST <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ECFF1C] to-[#621CFF]">
              IN MEWAT HARYANA.
            </span>
          </h1>
          
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-medium italic mb-10">
            Official ranking aur directory Mewat district ke top-rated schools ke liye. NCPS leads the way in digital education.
          </p>
        </div>
      </section>

      {/* ─── DIRECTORY LIST ─── */}
      <section className="max-w-[1100px] mx-auto -mt-16 px-6 relative z-20 pb-24">
        <div className="bg-white rounded-[50px] shadow-2xl border border-slate-100 overflow-hidden">
          
          <div className="divide-y divide-slate-50">
            {schools.map((school, i) => (
              <motion.div 
                key={i} 
                whileHover={{ x: 10 }}
                className="p-10 flex flex-col md:flex-row justify-between items-center group transition-all hover:bg-slate-50"
              >
                <div className="flex items-center gap-8">
                  <div className="w-16 h-16 bg-[#08011c] rounded-3xl flex items-center justify-center text-[#ECFF1C] shadow-xl group-hover:bg-[#621CFF] transition-colors">
                    <GraduationCap size={30} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-[#08011c] uppercase italic tracking-tight">{school.name}</h3>
                    <div className="flex items-center gap-4 mt-2">
                      <span className="flex items-center gap-1 text-[10px] font-black text-[#621CFF] uppercase tracking-widest">
                        <MapPin size={12} /> {school.location}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{school.specialty}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 md:mt-0 flex items-center gap-6">
                  <span className="bg-[#ECFF1C]/20 text-[#08011c] px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border border-[#ECFF1C]">
                    {school.status}
                  </span>
                  <Link href="/admissions" className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-[#08011c] hover:text-white transition-all">
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── WHY NCPS TOPS THE LIST ─── */}
      <section className="bg-slate-50 py-24 rounded-[80px] mx-6 mb-24">
        <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-5xl font-black text-[#08011c] tracking-tight uppercase italic leading-none">
              How we rank <br /><span className="text-[#621CFF]">Mewat Schools.</span>
            </h2>
            <p className="text-slate-500 font-bold italic text-lg leading-relaxed border-l-8 border-[#ECFF1C] pl-8">
              Hum infrastructure, faculty quality, aur medical/science results ke base par Mewat ki school list taiyar karte hain. NCPS consistently ranks #1 due to its high-tech Biology labs.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
             {[
               { t: "Science Focus", i: Microscope },
               { t: "Verified Safety", i: ShieldCheck },
               { t: "Elite Faculty", i: Star },
               { t: "Smart Tech", i: Zap }
             ].map((item, idx) => (
               <div key={idx} className="bg-white p-8 rounded-[40px] shadow-sm border border-slate-100">
                  <item.i className="text-[#621CFF] mb-4" size={24} />
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#08011c] block">{item.t}</span>
               </div>
             ))}
          </div>
        </div>
      </section>

    </main>
  );
}
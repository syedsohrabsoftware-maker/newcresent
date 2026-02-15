"use client";
import React from "react";
import { 
  BookOpen, Code, FlaskConical, Globe2, 
  Lightbulb, Music, Palette, PenTool, 
  ShieldCheck, Zap, ArrowRight, GraduationCap 
} from "lucide-react";

export default function AcademicsPage() {
  const wings = [
    {
      title: "Primary Wing",
      range: "Nursery to 5th",
      desc: "Bachon ki buniyad ko mazboot banane ke liye modern teaching methods.",
      features: ["Play-way Learning", "Basic English", "Math Skills"],
      color: "bg-blue-500"
    },
    {
      title: "Middle Wing",
      range: "6th to 8th",
      desc: "Subjects ki gehri samajh aur computer education par focus.",
      features: ["Advanced Science", "Coding Basics", "Social Skills"],
      color: "bg-[#621CFF]"
    },
    {
      title: "Senior Wing",
      range: "9th to 12th",
      desc: "Board exams aur career competitions ki expert coaching.",
      features: ["PCB/PCM Streams", "Commerce", "Arts & Humanities"],
      color: "bg-[#150447]"
    }
  ];

  return (
    <main className="pt-40 pb-20 bg-white min-h-screen selection:bg-[#621CFF]/20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        
        {/* --- HERO SECTION --- */}
        <div className="max-w-4xl mb-24 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#621CFF]/5 rounded-full border border-[#621CFF]/10 text-[#621CFF]">
            <GraduationCap size={14} />
            <span className="text-[10px] font-black uppercase tracking-[3px]">Excellence in Learning</span>
          </div>
          <h1 className="text-6xl md:text-[110px] font-black text-[#150447] tracking-tighter uppercase leading-[0.85]">
            SHAPING <br /> <span className="text-[#621CFF]">MINDS.</span>
          </h1>
          <p className="text-xl text-slate-500 font-bold max-w-xl border-l-4 border-[#ECFF1C] pl-6">
            Humara curriculum bacchon ko sirf exams ke liye nahi, balki asli duniya ke challenges ke liye tayaar karta hai.
          </p>
        </div>

        {/* --- WINGS GRID --- */}
        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {wings.map((wing, i) => (
            <div key={i} className="group relative bg-slate-50 rounded-[48px] p-10 hover:bg-white hover:shadow-2xl transition-all duration-700 border border-transparent hover:border-slate-100">
              <div className={`w-14 h-14 ${wing.color} rounded-2xl mb-8 flex items-center justify-center text-white shadow-xl group-hover:rotate-12 transition-transform`}>
                <BookOpen size={28} />
              </div>
              <h3 className="text-3xl font-black text-[#150447] tracking-tighter uppercase mb-1">{wing.title}</h3>
              <p className="text-[10px] font-black text-[#621CFF] uppercase tracking-[3px] mb-6">{wing.range}</p>
              <p className="text-slate-500 font-bold text-sm leading-relaxed mb-8">{wing.desc}</p>
              <ul className="space-y-3">
                {wing.features.map((feat, j) => (
                  <li key={j} className="flex items-center gap-3 text-[#150447] font-black text-[10px] uppercase tracking-widest">
                    <ShieldCheck size={14} className="text-[#25D366]" /> {feat}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* --- MODERN LABS SECTION --- */}
        <div className="bg-[#150447] rounded-[60px] p-10 md:p-20 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#621CFF]/20 blur-[120px] rounded-full" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none italic">
                Beyond <br /> <span className="text-[#ECFF1C]">Textbooks.</span>
              </h2>
              <p className="text-slate-400 font-bold text-lg">
                Practical knowledge ke liye humare paas state-of-the-art labs hain jahan bacche experiment aur innovation karte hain.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Code, label: "IT Lab" },
                  { icon: FlaskConical, label: "Science Lab" },
                  { icon: Palette, label: "Art Studio" },
                  { icon: Globe2, label: "Language Lab" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                    <item.icon size={20} className="text-[#ECFF1C]" />
                    <span className="text-xs font-black uppercase tracking-widest">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative aspect-square rounded-[40px] overflow-hidden border-8 border-white/10">
               {/* Replace with your lab image */}
               <div className="w-full h-full bg-slate-800 flex items-center justify-center text-slate-500 font-black uppercase italic text-center p-10">
                  Modern Lab <br/> Visual Here
               </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
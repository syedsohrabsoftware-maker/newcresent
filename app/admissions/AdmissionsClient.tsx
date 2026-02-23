"use client";
import React from "react";
import { 
  FileText, CreditCard, UserCheck, ArrowRight, 
  Sparkles, ShieldCheck, Zap, Download, Clock, Landmark
} from "lucide-react";

const steps = [
  { title: "Digital Registration", desc: "Online form bhariye aur basic details share karein - 100% Paperless.", icon: FileText, color: "text-blue-500" },
  { title: "Smart Verification", desc: "School team aapke documents instantly verify karegi.", icon: ShieldCheck, color: "text-[#621CFF]" },
  { title: "Counseling Hub", desc: "Expert counselors ke saath career aur interest mapping session.", icon: UserCheck, color: "text-amber-500" },
  { title: "Final Enrollment", desc: "Digital payment options ke saath apni seat confirm karein.", icon: CreditCard, color: "text-emerald-500" },
];

export default function AdmissionsClient() {
  return (
    <main className="pt-40 pb-20 bg-white min-h-screen selection:bg-[#621CFF]/20 overflow-x-hidden">
      
      {/* --- FINTECH AMBIENCE --- */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#621CFF]/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#ECFF1C]/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        
        {/* --- HERO SECTION --- */}
        <div className="max-w-4xl mb-24 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#150447] text-white rounded-full shadow-2xl animate-bounce">
            <Sparkles size={14} className="text-[#ECFF1C]" />
            <span className="text-[10px] font-black uppercase tracking-[3px]">Session 2026-27 Now Open</span>
          </div>
          <h1 className="text-6xl md:text-[120px] font-black text-[#150447] tracking-tighter uppercase leading-[0.85]">
            JOIN THE <br /> <span className="text-[#621CFF]">ELITE.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 font-bold max-w-xl border-l-8 border-[#ECFF1C] pl-6 py-2">
            Mewat ke sabse advanced English Medium school ka hissa baniye. 2026-27 batch ke liye seats limited hain.
          </p>
        </div>

        {/* --- PROCESS GRID --- */}
        <div className="grid md:grid-cols-4 gap-6 mb-32">
          {steps.map((step, i) => (
            <div key={i} className="group relative bg-slate-50 rounded-[48px] p-10 hover:bg-white hover:shadow-2xl transition-all duration-700 border border-transparent hover:border-slate-100">
              <div className="absolute top-6 right-8 text-5xl font-black text-slate-100 group-hover:text-[#621CFF]/10 transition-colors">0{i+1}</div>
              <div className={`w-16 h-16 rounded-[24px] bg-white shadow-xl flex items-center justify-center ${step.color} mb-8 group-hover:scale-110 transition-transform`}>
                <step.icon size={32} />
              </div>
              <h3 className="text-2xl font-black text-[#150447] tracking-tighter uppercase mb-2">{step.title}</h3>
              <p className="text-slate-500 font-bold text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* --- ADMISSION HUB SECTION --- */}
        <div className="relative bg-[#150447] rounded-[64px] p-10 md:p-24 overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#621CFF] rounded-full blur-[150px] opacity-30 -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.85] uppercase italic">
                Secure Your <br /> <span className="text-[#ECFF1C]">Child's Future.</span>
              </h2>
              
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="flex items-center gap-4 text-white">
                   <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#ECFF1C]"><Zap size={20}/></div>
                   <span className="font-black text-xs uppercase tracking-widest italic">Digital Campus Mewat</span>
                </div>
                <div className="flex items-center gap-4 text-white">
                   <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#ECFF1C]"><Landmark size={20}/></div>
                   <span className="font-black text-xs uppercase tracking-widest italic">CBSE 2026 Standards</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                 <button className="group bg-[#621CFF] text-white px-10 py-6 rounded-3xl font-black text-xs uppercase tracking-[4px] shadow-2xl hover:bg-white hover:text-[#150447] transition-all flex items-center justify-center gap-4">
                    Apply Online 2026 <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                 </button>
                 <button className="flex items-center justify-center gap-4 px-10 py-6 rounded-3xl border-2 border-white/20 text-white font-black text-xs uppercase tracking-[4px] hover:bg-white/5 transition-all">
                    <Download size={18} /> 2026 Prospectus
                 </button>
              </div>
            </div>

            {/* --- SEAT STATUS TRACKER --- */}
            <div className="bg-white/10 backdrop-blur-3xl rounded-[48px] p-10 border border-white/10 space-y-8">
               <div className="flex justify-between items-center text-white">
                  <h4 className="font-black text-xl uppercase tracking-tighter italic">Live Seat Tracker</h4>
                  <div className="px-4 py-1.5 rounded-full bg-[#ECFF1C] text-[#150447] text-[10px] font-black uppercase tracking-widest animate-pulse">Filling Fast</div>
               </div>

               <div className="space-y-6">
                  {[
                    { l: "Nursery to 5th (Junior)", p: "85%", c: "bg-emerald-400" },
                    { l: "6th to 8th (Middle)", p: "60%", c: "bg-blue-400" },
                    { l: "9th to 12th (Senior)", p: "45%", c: "bg-orange-400" }
                  ].map((item, idx) => (
                    <div key={idx} className="space-y-2">
                       <div className="flex justify-between text-white text-[10px] font-black uppercase tracking-widest">
                         <span>{item.l}</span>
                         <span>{item.p} Full</span>
                       </div>
                       <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                          <div className={`h-full ${item.c} rounded-full transition-all duration-1000`} style={{width: item.p}}></div>
                       </div>
                    </div>
                  ))}
               </div>

               <div className="pt-6 border-t border-white/10 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#ECFF1C] flex items-center justify-center text-[#150447]">
                     <Clock size={24} />
                  </div>
                  <div>
                     <p className="text-white font-black text-sm uppercase">Early Admission Benefit</p>
                     <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-1 italic">Register by March 2026 for waiver</p>
                  </div>
               </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
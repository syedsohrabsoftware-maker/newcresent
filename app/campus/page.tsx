"use client";
import React from "react";
import Image from "next/image";
import { 
  FileText, ClipboardCheck, CreditCard, 
  UserCheck, ArrowRight, Sparkles, ShieldCheck, 
  Zap, Download, Clock, Landmark, Globe, CheckCircle2
} from "lucide-react";

export default function AdmissionsPage() {
  const admissionSteps = [
    { title: "Online Registration", desc: "Start by filling out our secure digital application form.", icon: FileText, color: "text-blue-500", bg: "bg-blue-50" },
    { title: "Document Review", desc: "Our team verifies the submitted student credentials.", icon: ShieldCheck, color: "text-[#621CFF]", bg: "bg-[#621CFF]/5" },
    { title: "Interaction", desc: "A brief meeting to understand the student's potential.", icon: UserCheck, color: "text-[#ECFF1C]", bg: "bg-slate-900" },
    { title: "Smart Enrollment", desc: "Confirm seat via digital fee payment portal.", icon: CreditCard, color: "text-emerald-500", bg: "bg-emerald-50" },
  ];

  return (
    <main className="pt-32 pb-20 bg-white min-h-screen selection:bg-[#621CFF]/20 overflow-x-hidden">
      
      {/* --- PREMIUM FINTECH ATMOSPHERE --- */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#621CFF]/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 left-[-5%] w-[500px] h-[500px] bg-[#ECFF1C]/10 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        
        {/* --- HERO SECTION --- */}
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-32">
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#150447] text-white rounded-full shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <Sparkles size={14} className="text-[#ECFF1C]" />
              <span className="text-[10px] font-black uppercase tracking-[3px]">Global Admissions 2026-27</span>
            </div>
            <h1 className="text-6xl md:text-[110px] font-black text-[#150447] tracking-tighter uppercase leading-[0.85] animate-in fade-in slide-in-from-left-10 duration-1000">
              FUTURE <br /> <span className="text-[#621CFF] italic underline decoration-[#ECFF1C] decoration-8">STARTS</span> HERE.
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 font-bold max-w-xl mx-auto lg:mx-0 border-l-8 border-[#ECFF1C] pl-6">
              Experience Pinangwan's first paperless admission journey. Secure, fast, and transparent.
            </p>
          </div>

          {/* Premium Image with Floating Badge */}
          <div className="flex-1 relative group">
            <div className="relative w-full aspect-square rounded-[60px] overflow-hidden border-[12px] border-slate-50 shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
              <img 
  src="https://images.unsplash.com/photo-1523050853061-80e8a4ff147e?q=80&w=1000&auto=format&fit=crop" 
  alt="Modern Education" 
  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
/>
            </div>
            <div className="absolute -bottom-10 -right-6 md:-right-10 bg-white p-8 rounded-[40px] shadow-2xl border border-slate-100 hidden md:block animate-bounce-slow">
               <div className="flex items-center gap-4 text-[#150447]">
                  <div className="w-12 h-12 rounded-2xl bg-[#ECFF1C] flex items-center justify-center"><Globe size={24}/></div>
                  <div>
                    <p className="font-black text-sm uppercase leading-none">Smart Campus</p>
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1 italic">Nuh District, HR</p>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* --- THE FLOW: 4-STEP PROCESS --- */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {admissionSteps.map((step, i) => (
            <div key={i} className="group relative bg-slate-50 rounded-[48px] p-10 hover:bg-white hover:shadow-2xl transition-all duration-700 border border-transparent hover:border-slate-100">
              <div className="absolute top-6 right-8 text-5xl font-black text-slate-100 group-hover:text-[#621CFF]/10 transition-colors">0{i+1}</div>
              <div className={`w-16 h-16 rounded-[24px] ${step.bg} shadow-sm flex items-center justify-center ${step.color} mb-8 group-hover:rotate-[360deg] transition-transform duration-1000`}>
                <step.icon size={30} />
              </div>
              <h3 className="text-2xl font-black text-[#150447] tracking-tighter uppercase mb-3">{step.title}</h3>
              <p className="text-slate-500 font-bold text-xs leading-relaxed uppercase tracking-tight">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* --- INTERACTIVE ENROLLMENT HUB --- */}
        <div className="bg-[#150447] rounded-[64px] p-8 md:p-20 text-white relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(21,4,71,0.5)]">
           <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#621CFF] rounded-full blur-[150px] opacity-30 -translate-y-1/2 translate-x-1/2" />
           
           <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-10">
                 <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.85] uppercase italic">
                    ADMISSION <br /> <span className="text-[#ECFF1C]">STATUS 2026.</span>
                 </h2>
                 
                 <div className="grid gap-6">
                    {[
                      { label: "Primary Wing (LKG - 5th)", status: "Filling Fast", progress: "80%" },
                      { label: "Middle Wing (6th - 8th)", status: "Limited", progress: "65%" },
                      { label: "Senior Wing (9th - 12th)", status: "Available", progress: "40%" }
                    ].map((row, idx) => (
                      <div key={idx} className="bg-white/5 p-6 rounded-[32px] border border-white/10 group hover:bg-white/10 transition-all">
                         <div className="flex justify-between items-center mb-4">
                            <span className="font-black text-xs uppercase tracking-widest">{row.label}</span>
                            <span className={`text-[10px] font-black px-3 py-1 rounded-full ${idx === 0 ? 'bg-[#ECFF1C] text-[#150447]' : 'bg-white/10'}`}>{row.status}</span>
                         </div>
                         <div className="h-1.5 w-full bg-white/10 rounded-full">
                            <div className="h-full bg-[#ECFF1C] rounded-full transition-all duration-1000" style={{width: row.progress}}></div>
                         </div>
                      </div>
                    ))}
                 </div>

                 <div className="flex flex-col sm:flex-row gap-6">
                    <button className="group bg-[#621CFF] text-white px-10 py-6 rounded-3xl font-black text-[10px] uppercase tracking-[4px] shadow-2xl hover:bg-white hover:text-[#150447] transition-all flex items-center justify-center gap-4">
                       Online Application <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                    </button>
                    <button className="flex items-center justify-center gap-4 px-10 py-6 rounded-3xl border-2 border-white/20 text-white font-black text-[10px] uppercase tracking-[4px] hover:bg-white/5 transition-all">
                       <Download size={18} /> Prospectus
                    </button>
                 </div>
              </div>

              {/* WHY ENROLL NOW - GLASS CARD */}
              <div className="bg-white/10 backdrop-blur-3xl rounded-[56px] p-8 md:p-14 border border-white/10 space-y-10">
                 <h4 className="text-white font-black text-2xl uppercase tracking-tighter italic border-b border-white/10 pb-6">Why Enroll Now?</h4>
                 
                 <div className="space-y-6">
                    {[
                      "Priority Scholarship Opportunities",
                      "Guaranteed Bus Route Seat",
                      "Pre-Session Bridge Course Access",
                      "Direct Interaction with Principal"
                    ].map((text, idx) => (
                      <div key={idx} className="flex items-center gap-5 group">
                        <div className="w-10 h-10 rounded-2xl bg-[#ECFF1C] flex items-center justify-center text-[#150447] group-hover:rotate-12 transition-transform shadow-lg">
                           <CheckCircle2 size={20} />
                        </div>
                        <p className="text-white font-black text-xs uppercase tracking-widest">{text}</p>
                      </div>
                    ))}
                 </div>

                 <div className="pt-8 flex items-center gap-5">
                    <div className="w-16 h-16 rounded-3xl bg-[#621CFF] flex items-center justify-center text-white shadow-2xl">
                       <Clock size={32} />
                    </div>
                    <div>
                       <p className="text-[#ECFF1C] font-black text-lg uppercase leading-none">March 31, 2026</p>
                       <p className="text-slate-400 text-[9px] font-bold uppercase tracking-[3px] mt-2 italic">Early Bird Deadline</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>

      </div>
    </main>
  );
}
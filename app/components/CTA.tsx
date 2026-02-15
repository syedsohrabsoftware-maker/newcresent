"use client";
import { ArrowRight, Phone, Sparkles, GraduationCap, CheckCircle, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-24 px-6 md:px-16 bg-white relative overflow-hidden">
      
      {/* Subtle Fintech Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#621CFF]/5 blur-[120px] rounded-full -z-0"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#ECFF1C]/10 blur-[100px] rounded-full -z-0"></div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="bg-slate-50 rounded-[48px] md:rounded-[64px] p-8 md:p-20 border border-slate-100 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] relative overflow-hidden">
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* --- LEFT CONTENT: Modern SaaS Style --- */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 py-2 px-4 rounded-full bg-white border border-slate-200 shadow-sm">
                <Sparkles size={16} className="text-[#621CFF]" />
                <span className="text-[10px] font-black text-[#150447] uppercase tracking-[3px]">Admissions Open 2026-27</span>
              </div>

              <h2 className="text-5xl md:text-[90px] font-black text-[#150447] leading-[0.85] tracking-tighter uppercase">
                TAKE THE <br /> <span className="text-[#621CFF]">NEXT STEP.</span>
              </h2>

              <p className="text-slate-500 text-lg md:text-xl font-bold max-w-md leading-relaxed">
                Apne bacchon ka bhavishya aaj hi secure karein. NCPS ke sath modern padhai ki shuruat karein.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 pt-4">
                <Link href="/apply" className="group bg-[#621CFF] text-white px-10 py-6 rounded-2xl font-black text-xs uppercase tracking-[4px] shadow-2xl hover:bg-[#150447] transition-all flex items-center justify-center gap-4 active:scale-95">
                  Apply Now <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform" />
                </Link>
                
                <a href="tel:+919813020259" className="flex items-center justify-center gap-4 bg-white px-10 py-6 rounded-2xl border border-slate-200 text-[#150447] font-black text-xs uppercase tracking-[4px] hover:border-[#621CFF] transition-all shadow-sm">
                  <Phone size={18} className="text-[#621CFF]" /> Call Support
                </a>
              </div>
            </div>

            {/* --- RIGHT CONTENT: Glassy Feature List --- */}
            <div className="relative">
              <div className="bg-white/60 backdrop-blur-xl rounded-[40px] p-8 md:p-12 border border-white shadow-xl space-y-8 relative z-10">
                <h4 className="text-[#150447] font-black text-xl uppercase tracking-tighter italic border-b border-slate-100 pb-4">Why Choose Us?</h4>
                
                <div className="space-y-6">
                  {[
                    "CBSE Curriculum Support",
                    "Advanced Computer Lab",
                    "Safe & Secure Campus",
                    "Excellent Sports Facility"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 group">
                      <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-[#621CFF] group-hover:bg-[#621CFF] group-hover:text-white transition-all">
                        <CheckCircle size={18} />
                      </div>
                      <span className="text-[#150447] font-bold text-sm md:text-base uppercase tracking-tight">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-8 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#ECFF1C] flex items-center justify-center text-[#150447] shadow-lg">
                    <GraduationCap size={28} />
                  </div>
                  <div>
                    <p className="text-[#150447] font-black text-sm uppercase">Scholarship 2026</p>
                    <p className="text-slate-400 text-[9px] font-bold uppercase tracking-widest mt-1">Limited Seats Available</p>
                  </div>
                </div>
              </div>

              {/* Decorative Circle behind glass */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#ECFF1C] rounded-full blur-3xl opacity-40"></div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
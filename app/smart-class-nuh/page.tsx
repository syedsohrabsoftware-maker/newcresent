import { Zap, Monitor, Cpu, Globe, Phone, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function SmartClassPage() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#621CFF] selection:text-white">
      {/* --- HERO SECTION --- */}
      <section className="bg-[#08011c] pt-40 pb-24 px-6 relative overflow-hidden rounded-b-[60px]">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute -top-24 -left-20 w-96 h-96 bg-[#621CFF] rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#ECFF1C] rounded-full blur-[100px] opacity-30" />
        </div>
        
        <div className="max-w-[1200px] mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8">
            <Zap size={14} className="text-[#ECFF1C]" />
            <span className="text-[#ECFF1C] text-[10px] font-black uppercase tracking-[3px]">Digital Education Revolution</span>
          </div>

          <h1 className="text-4xl md:text-7xl font-black text-white leading-[1.1] tracking-tighter mb-8 uppercase">
            नूंह का पहला पूरी तरह <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ECFF1C] to-[#621CFF]">
              डिजिटल स्मार्ट स्कूल
            </span>
          </h1>

          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
            New Crescent Public School (NCPS) is bringing 21st-century technology to Mewat. <strong>"किताबों से आगे, डिजिटल दुनिया के साथ"</strong>.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a href="tel:+919813020259" className="w-full sm:w-auto bg-white text-[#08011c] px-10 py-5 rounded-[22px] font-black uppercase text-xs tracking-[2px] shadow-2xl hover:bg-[#ECFF1C] transition-all flex items-center justify-center gap-3">
              <Phone size={18} /> Admission Helpline
            </a>
            <Link href="/apply" className="w-full sm:w-auto bg-[#621CFF] text-white px-10 py-5 rounded-[22px] font-black uppercase text-xs tracking-[2px] shadow-[0_20px_40px_rgba(98,28,255,0.3)] flex items-center justify-center gap-3">
              Apply Online <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* --- FINTECH CONTENT SECTION --- */}
      <section className="py-24 px-6 max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="bg-slate-50 p-8 md:p-12 rounded-[40px] border border-slate-100">
              <h2 className="text-3xl font-black text-[#08011c] tracking-tight uppercase leading-tight mb-6">
                Smart Classes: पढ़ाई अब होगी और भी आसान
              </h2>
              <div className="prose prose-slate text-slate-600 space-y-5 text-lg font-medium">
                <p>
                  NCPS नूंह में हम शिक्षा को रटने के बजाय समझने पर जोर देते हैं। हमारे स्मार्ट क्लासरूम्स में छात्र 3D एनिमेशन और इंटरैक्टिव बोर्ड्स के जरिए मुश्किल टॉपिक्स को भी चुटकियों में समझ लेते हैं।
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                  {[
                    "Interactive Smart Boards",
                    "High-Speed Computer Labs",
                    "Digital Library Access",
                    "Visual Learning Modules"
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                      <CheckCircle className="text-[#621CFF]" size={18} />
                      <span className="font-bold text-slate-700 text-sm tracking-tight">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#621CFF] to-[#ECFF1C] rounded-[50px] opacity-10 blur-2xl group-hover:opacity-20 transition-all" />
            <div className="relative bg-[#08011c] p-10 rounded-[48px] shadow-3xl text-center space-y-8 overflow-hidden">
               <Monitor size={60} className="text-[#ECFF1C] mx-auto mb-4" />
               <h3 className="text-white text-3xl font-black uppercase italic tracking-tighter italic">Experience Tomorrow</h3>
               <p className="text-slate-500 text-xs font-bold uppercase tracking-[4px]">NCPS Digital Campus Nuh</p>
               <button className="w-full bg-[#621CFF] text-white py-5 rounded-3xl font-black uppercase text-xs tracking-[4px] shadow-xl hover:brightness-110 active:scale-95 transition-all">
                  Book a Demo Class
               </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
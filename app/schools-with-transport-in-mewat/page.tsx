import { Bus, ShieldCheck, MapPin, Phone, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function TransportAuthorityPage() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#621CFF] selection:text-white">
      {/* --- FINTECH HERO SECTION --- */}
      <section className="bg-[#08011c] pt-40 pb-20 px-6 relative overflow-hidden rounded-b-[60px]">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute -top-24 -left-20 w-96 h-96 bg-[#621CFF] rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#ECFF1C] rounded-full blur-[100px] opacity-30" />
        </div>
        
        <div className="max-w-[1200px] mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8">
            <Bus size={14} className="text-[#ECFF1C]" />
            <span className="text-[#ECFF1C] text-[10px] font-black uppercase tracking-[3px]">Safe Commute Verified</span>
          </div>

          <h1 className="text-4xl md:text-7xl font-black text-white leading-[1.1] tracking-tighter mb-8 uppercase">
            मेवात का सबसे सुरक्षित <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ECFF1C] to-[#621CFF]">
              स्कूल ट्रांसपोर्ट नेटवर्क
            </span>
          </h1>

          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
            New Crescent Public School (NCPS) provides GPS-tracked safe transport for students in Punhana, Nuh, and Pinangwan. <strong>"सुरक्षा और शिक्षा, दोनों में नंबर 1"</strong>.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a href="tel:+919813020259" className="w-full sm:w-auto bg-white text-[#08011c] px-10 py-5 rounded-[22px] font-black uppercase text-xs tracking-[2px] shadow-2xl hover:bg-[#ECFF1C] transition-all flex items-center justify-center gap-3 active:scale-95">
              <Phone size={18} /> Call Transport Desk
            </a>
            <Link href="/apply" className="w-full sm:w-auto bg-[#621CFF] text-white px-10 py-5 rounded-[22px] font-black uppercase text-xs tracking-[2px] shadow-[0_20px_40px_rgba(98,28,255,0.3)] hover:brightness-110 transition-all flex items-center justify-center gap-3">
              Join Us Now <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* --- SEO CONTENT SECTION --- */}
      <section className="py-24 px-6 max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-8">
            <div className="bg-slate-50 p-8 md:p-12 rounded-[40px] border border-slate-100">
              <h2 className="text-3xl font-black text-[#08011c] tracking-tight uppercase leading-tight mb-6">
                Why Parents in Nuh Trust Our Transport?
              </h2>
              <div className="prose prose-slate text-slate-600 space-y-5 text-lg font-medium leading-relaxed">
                <p>
                  मेवात में स्कूलों की कमी नहीं है, लेकिन सुरक्षा और सुविधा के मामले में NCPS अग्रणी है। हम अपने हर छात्र की सुरक्षा सुनिश्चित करने के लिए आधुनिक तकनीक का उपयोग करते हैं।
                </p>
                <ul className="space-y-4 pt-4">
                  {[
                    "GPS Live Tracking for Parents",
                    "CCTV Cameras in every bus",
                    "Experienced Drivers & Conductors",
                    "Coverage for remote areas like Sikrawa"
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-slate-800 font-bold text-base">
                      <CheckCircle className="text-[#621CFF]" size={20} /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Fintech Floating Contact Card */}
          <div className="sticky top-32 bg-[#08011c] rounded-[48px] p-10 shadow-3xl overflow-hidden group">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#621CFF] blur-[80px] opacity-30 group-hover:opacity-50 transition-opacity" />
            <div className="relative z-10 space-y-8">
              <div className="space-y-2 text-center sm:text-left">
                <h3 className="text-white text-2xl font-black uppercase italic tracking-tighter">Transport Helpline</h3>
                <p className="text-slate-500 text-[10px] font-black uppercase tracking-[3px]">Verified Route Network</p>
              </div>
              <div className="space-y-4">
                <div className="bg-white/5 border border-white/10 p-6 rounded-3xl flex items-center gap-5">
                  <div className="w-12 h-12 bg-[#621CFF] rounded-2xl flex items-center justify-center text-white">
                    <ShieldCheck size={22} />
                  </div>
                  <div>
                    <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Safety Status</p>
                    <p className="text-white font-bold text-sm leading-snug tracking-tighter uppercase">100% Tracked & Secure</p>
                  </div>
                </div>
              </div>
              <button className="w-full bg-[#ECFF1C] text-[#08011c] py-6 rounded-3xl font-black uppercase text-xs tracking-[4px] hover:shadow-xl active:scale-95 transition-all">
                Check Bus Routes
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
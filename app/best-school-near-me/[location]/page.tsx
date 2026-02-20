import { MapPin, Phone, CheckCircle, Search, Sparkles, Zap, ArrowRight, MousePointer2, ShieldCheck, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function LocalSEOPage({ params }: { params: Promise<{ location: string }> }) {
  const resolvedParams = await params;
  const location = resolvedParams.location;
  const locationName = location.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  const areas = ["Punhana", "Pinangwan", "Nuh", "Firojpur Jhirka", "Palwal", "Hatheen", "Sikrawa", "Hodal"];

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans selection:bg-[#621CFF] selection:text-white pb-20 md:pb-0">
      
      {/* ─── FLOATING SMART SEARCH (Fintech Style) ─── */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[92%] max-w-[600px] transition-all duration-500">
        
      </div>

      {/* ─── HERO SECTION ─── */}
      <section className="bg-[#08011c] pt-40 pb-24 px-6 relative overflow-hidden rounded-b-[50px] md:rounded-b-[80px]">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#621CFF] rounded-full blur-[150px] opacity-20 animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#ECFF1C] rounded-full blur-[120px] opacity-10" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        </div>
        
        <div className="max-w-[1200px] mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8 backdrop-blur-md">
            <Sparkles size={14} className="text-[#ECFF1C]" />
            <span className="text-[#ECFF1C] text-[10px] font-black uppercase tracking-[3px]">Verified Top School 2026</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.95] tracking-tighter mb-8">
            BEST SCHOOL <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ECFF1C] via-white to-[#621CFF]">
              IN {locationName.toUpperCase()}
            </span>
          </h1>

          <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
             <span className="text-[#ECFF1C] font-bold italic">"मेवात का गौरव"</span> — Empowering students in <span className="text-white border-b-2 border-[#621CFF]">{locationName}</span> with high-tech labs and safe transport.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a href="tel:+919813020259" className="w-full sm:w-auto bg-white text-[#08011c] px-10 py-5 rounded-[22px] font-black uppercase text-xs tracking-[2px] shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-3">
              <Phone size={18} /> Call Helpline
            </a>
            <Link href="/apply" className="w-full sm:w-auto bg-[#621CFF] text-white px-10 py-5 rounded-[22px] font-black uppercase text-xs tracking-[2px] shadow-[0_20px_40px_rgba(98,28,255,0.3)] hover:brightness-110 transition-all flex items-center justify-center gap-3">
              Online Admission <Zap size={18} fill="white" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CONTENT GRID (Fintech Layout) ─── */}
      <section className="py-24 px-6 max-w-[1300px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Info */}
          <div className="lg:col-span-7 space-y-12">
            <div className="bg-white p-10 md:p-14 rounded-[48px] border border-slate-100 shadow-sm relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-indigo-50 rounded-full blur-3xl opacity-50" />
              <div className="relative z-10">
                <h2 className="text-4xl font-black text-[#08011c] tracking-tight uppercase leading-[1.1] mb-8">
                  {locationName} के माता-पिता का सबसे भरोसेमंद स्कूल
                </h2>
                <div className="prose prose-slate text-slate-600 space-y-6 text-lg font-medium">
                  <p>
                    New Crescent Public School (NCPS) serves the community of <strong>{locationName}</strong> with a singular mission: providing world-class English medium education at an affordable price. 
                  </p>
                  <p className="bg-[#F1F5F9] p-6 rounded-3xl border-l-8 border-[#621CFF]">
                    "हमारा लक्ष्य है कि <strong>{locationName}</strong> का हर बच्चा डिजिटल युग के लिए तैयार हो।" Our modern science labs, smart classrooms, and safe bus transport make us the <em>best school near me</em> in the region.
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="flex items-center gap-2 text-[#08011c] font-black uppercase text-[10px] tracking-widest"><ShieldCheck size={16} className="text-emerald-500"/> Verified CBSE Hub</div>
                    <div className="flex items-center gap-2 text-[#08011c] font-black uppercase text-[10px] tracking-widest"><Star size={16} className="text-yellow-500"/> 4.9/5 Student Rating</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { h: "SaaS-Level Labs", d: "High-speed digital labs for tech-first learning", i: Zap },
                { h: "Safe Fleet", d: `GPS-tracked safe buses for ${locationName} routes`, i: MapPin },
                { h: "Smart Pedagogy", d: "Interactive smart-boards and 3D learning kits", i: Sparkles },
                { h: "Holistic Sports", d: "Professional coaching and massive playground", i: Star }
              ].map((f) => (
                <div key={f.h} className="p-8 bg-white border border-slate-100 rounded-[32px] hover:shadow-xl hover:-translate-y-2 transition-all group">
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-[#621CFF] mb-6 group-hover:bg-[#621CFF] group-hover:text-white transition-all">
                    <f.i size={24} />
                  </div>
                  <h4 className="font-black text-[#150447] text-lg uppercase tracking-tight mb-2">{f.h}</h4>
                  <p className="text-slate-400 text-sm font-bold leading-relaxed">{f.d}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sticky Sidebar CTA */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="bg-[#08011c] rounded-[50px] p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#ECFF1C] blur-[80px] opacity-20" />
              
              <div className="relative z-10 space-y-8 text-center sm:text-left">
                <div className="space-y-2">
                  <h3 className="text-white text-3xl font-black uppercase italic tracking-tighter leading-none">Admission Desk</h3>
                  <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[4px]">2026-27 Enrollment Open</p>
                </div>

                <div className="space-y-4">
                   <div className="bg-white/5 border border-white/10 p-6 rounded-[30px] flex items-center gap-5">
                      <div className="w-12 h-12 bg-[#621CFF] rounded-2xl flex items-center justify-center text-white">
                        <Phone size={22} />
                      </div>
                      <div className="text-left">
                        <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Connect Directly</p>
                        <p className="text-[#ECFF1C] font-black text-xl tracking-tighter">+91 98130 20259</p>
                      </div>
                   </div>
                   <div className="bg-white/5 border border-white/10 p-6 rounded-[30px] flex items-center gap-5">
                      <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#08011c]">
                        <MousePointer2 size={22} />
                      </div>
                      <div className="text-left">
                        <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Digital Process</p>
                        <p className="text-white font-bold text-sm">Online Application Enabled</p>
                      </div>
                   </div>
                </div>

                <button className="w-full bg-[#ECFF1C] text-[#08011c] py-6 rounded-3xl font-black uppercase text-[12px] tracking-[4px] hover:shadow-[0_0_30px_rgba(236,255,28,0.3)] transition-all">
                  Book a Campus Tour
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ─── DYNAMIC SEO FOOTER ─── */}
      <footer className="bg-white py-24 px-6 border-t border-slate-100">
        <div className="max-w-[1200px] mx-auto text-center">
          <p className="text-[11px] font-black text-[#621CFF] uppercase tracking-[8px] mb-12">Explore Nearby Locations</p>
          <div className="flex flex-wrap justify-center gap-x-14 gap-y-8">
            {areas.map((city) => (
              <Link 
                key={city} 
                href={`/best-school-near-me/${city.toLowerCase().replace(/ /g, '-')}`}
                className="group relative"
              >
                <span className="text-xs font-black text-slate-400 group-hover:text-[#08011c] uppercase tracking-[3px] transition-all">
                  {city}
                </span>
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-[#621CFF] group-hover:w-full transition-all duration-500" />
              </Link>
            ))}
          </div>
          <div className="mt-20 flex flex-col items-center gap-6">
             <div className="w-16 h-16 relative bg-slate-50 rounded-2xl p-2 border border-slate-100">
               <Image src="/logo1.png" alt="NCPS" fill className="object-contain p-2" />
             </div>
             <p className="text-[9px] font-bold text-slate-300 uppercase tracking-[6px] text-center">
               New Crescent Public School | Nuh District Hub
             </p>
          </div>
        </div>
      </footer>

      {/* ─── STICKY MOBILE CTA (Fintech Style) ─── */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[92%] md:hidden transition-all duration-500 scale-100 opacity-100">
        <div className="bg-[#08011c]/90 backdrop-blur-2xl border border-white/10 rounded-[28px] p-3 shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex items-center justify-between">
          <div className="flex items-center gap-3 pl-2">
            <div className="w-10 h-10 rounded-xl bg-[#621CFF] flex items-center justify-center text-white shadow-lg">
              <Phone size={18} />
            </div>
            <div>
              <p className="text-white font-black text-xs">Admission Inquiry</p>
              <p className="text-[#ECFF1C] text-[10px] font-bold tracking-widest">+91 98130 20259</p>
            </div>
          </div>
          <Link href="/apply" className="bg-[#ECFF1C] text-[#08011c] px-6 py-3.5 rounded-2xl font-black uppercase text-[10px] tracking-wider active:scale-95 transition-all">
            Apply
          </Link>
        </div>
      </div>

    </div>
  );
}
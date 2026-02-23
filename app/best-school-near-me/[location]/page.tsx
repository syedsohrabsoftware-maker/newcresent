import { MapPin, Phone, CheckCircle, Search, Sparkles, Zap, ArrowRight, MousePointer2, ShieldCheck, Star, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

// --- DYNAMIC METADATA ENGINE ---
export async function generateMetadata({ params }: { params: Promise<{ location: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const location = resolvedParams.location;
  const locationName = location.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  return {
    title: `Best School in ${locationName} | Top Rated CBSE School 2026`,
    description: `${locationName} ke parents ka sabse bharosemand school. New Crescent Public School (NCPS) provide karta hai smart classes, safe transport aur world-class education in ${locationName}.`,
    keywords: [
      `Best school in ${locationName}`,
      `${locationName} top rated school`,
      `CBSE school near ${locationName}`,
      `${locationName} school admission 2026`,
      `Smart class school in ${locationName}`
    ],
    alternates: {
      canonical: `https://newcrescentschool.in/best-school-near-me/${location}`,
    }
  };
}

export default async function LocalSEOPage({ params }: { params: Promise<{ location: string }> }) {
  const resolvedParams = await params;
  const location = resolvedParams.location;
  const locationName = location.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  const areas = ["Punhana", "Pinangwan", "Nuh", "Firojpur Jhirka", "Palwal", "Hatheen", "Sikrawa", "Hodal"];

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans selection:bg-[#621CFF] selection:text-white pb-20 md:pb-0 overflow-x-hidden">
      
      {/* --- LOCAL BUSINESS SCHEMA (SEO GOLD) --- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "School",
            "name": `New Crescent Public School - Best School in ${locationName}`,
            "description": `Top rated CBSE English medium school serving parents in ${locationName}.`,
            "image": "https://newcrescentschool.in/building1.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Pinangwan",
              "addressRegion": "Haryana",
              "addressCountry": "IN"
            },
            "telephone": "+91-9813020259"
          })
        }}
      />

      {/* ─── HERO SECTION ─── */}
      <section className="bg-[#08011c] pt-40 pb-24 px-6 relative overflow-hidden rounded-b-[50px] md:rounded-b-[80px]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#621CFF] rounded-full blur-[150px] opacity-20 animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#ECFF1C] rounded-full blur-[120px] opacity-10" />
        </div>
        
        <div className="max-w-[1200px] mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8 backdrop-blur-md">
            <Sparkles size={14} className="text-[#ECFF1C]" />
            <span className="text-[#ECFF1C] text-[10px] font-black uppercase tracking-[3px]">Verified Top School 2026</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.95] tracking-tighter mb-8 uppercase">
            BEST SCHOOL <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ECFF1C] via-white to-[#621CFF]">
               IN {locationName}
            </span>
          </h1>

          <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
             <span className="text-[#ECFF1C] font-bold italic">"{locationName} ka Gaurav"</span> — Empowering students with high-tech labs and safe transport.
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

      {/* ─── CONTENT GRID ─── */}
      <section className="py-24 px-6 max-w-[1300px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Info */}
          <div className="lg:col-span-7 space-y-12">
            <div className="bg-white p-10 md:p-14 rounded-[48px] border border-slate-100 shadow-sm relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-4xl font-black text-[#08011c] tracking-tight uppercase leading-[1.1] mb-8">
                  {locationName} के माता-पिता का सबसे भरोसेमंद स्कूल
                </h2>
                <div className="prose prose-slate text-slate-600 space-y-6 text-lg font-medium">
                  <p>
                    New Crescent Public School (NCPS) serves the community of <strong>{locationName}</strong> with a singular mission: providing world-class English medium education at an affordable price. 
                  </p>
                  <p className="bg-[#F1F5F9] p-6 rounded-3xl border-l-8 border-[#621CFF] italic">
                    "हमारा लक्ष्य है कि <strong>{locationName}</strong> का हर बच्चा डिजिटल युग के लिए तैयार हो।" 
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="flex items-center gap-2 text-[#08011c] font-black uppercase text-[10px] tracking-widest"><ShieldCheck size={16} className="text-emerald-500"/> Verified CBSE Hub</div>
                    <div className="flex items-center gap-2 text-[#08011c] font-black uppercase text-[10px] tracking-widest"><Star size={16} className="text-yellow-500"/> 4.9/5 Rating</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { h: "Smart Classes", d: `Interactive learning for ${locationName} students`, i: Zap },
                { h: "Safe Transport", d: `GPS tracked buses covering all ${locationName} routes`, i: MapPin },
                { h: "Expert Faculty", d: "Highly qualified teachers with digital expertise", i: Sparkles },
                { h: "Sports Excellence", d: "Massive playground and professional coaching", i: Star }
              ].map((f) => (
                <div key={f.h} className="p-8 bg-white border border-slate-100 rounded-[32px] hover:shadow-xl transition-all group">
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
              <div className="relative z-10 space-y-8">
                <div className="space-y-2">
                  <h3 className="text-white text-3xl font-black uppercase italic tracking-tighter">Admission Desk</h3>
                  <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[4px]">2026-27 Enrollment Open</p>
                </div>

                <div className="space-y-4">
                   <div className="bg-white/5 border border-white/10 p-6 rounded-[30px] flex items-center gap-5">
                      <div className="w-12 h-12 bg-[#621CFF] rounded-2xl flex items-center justify-center text-white">
                        <Phone size={22} />
                      </div>
                      <div className="text-left">
                        <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Help-line</p>
                        <p className="text-[#ECFF1C] font-black text-xl tracking-tighter">+91 98130 20259</p>
                      </div>
                   </div>
                </div>

                <button className="w-full bg-[#ECFF1C] text-[#08011c] py-6 rounded-3xl font-black uppercase text-[12px] tracking-[4px] hover:scale-95 transition-all">
                  Book a Campus Tour
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- DYNAMIC SEO FOOTER --- */}
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
        </div>
      </footer>
    </div>
  );
}
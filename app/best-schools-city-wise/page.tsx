import { MapPin, Star, Phone, ArrowUpRight, ShieldCheck, Zap, Building2, Users, GraduationCap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function CityWiseDirectory() {
  const cityData = [
    { name: "Punhana", rating: "4.9", type: "Main Campus", students: "1200+", desc: "शिक्षा का मुख्य केंद्र - Best infrastructure in Mewat." },
    { name: "Nuh", rating: "4.8", type: "District HQ", students: "800+", desc: "Top choice for district residents and govt. officials." },
    { name: "Pinangwan", rating: "4.8", type: "Elite Hub", students: "500+", desc: "Best English medium connectivity in Pinangwan area." },
    { name: "Firojpur Jhirka", rating: "4.7", type: "Rising Star", students: "400+", desc: "Providing global education to Jhirka valley." },
    { name: "Palwal", rating: "4.9", type: "NCR Hub", students: "Connectivity", desc: "Connecting NCR standards with Mewat values." },
    { name: "Hodal", rating: "4.6", type: "Connectivity Path", students: "Daily Route", desc: "Safe and secure transport available daily." },
    { name: "Alwar", rating: "4.7", type: "Inter-State", students: "Border Elite", desc: "Bridging the gap between Rajasthan and Haryana." },
    { name: "Sikrawa", rating: "4.8", type: "Local Best", students: "Premium Choice", desc: "The most trusted school for Sikrawa residents." },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans selection:bg-[#621CFF] selection:text-white pb-20">
      
      {/* ─── FINTECH HEADER ─── */}
      <section className="bg-[#08011c] pt-32 pb-24 px-6 relative overflow-hidden rounded-b-[40px] md:rounded-b-[80px]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#621CFF] rounded-full blur-[150px] opacity-30" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#ECFF1C] rounded-full blur-[150px] opacity-10" />
        </div>

        <div className="max-w-[1200px] mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-6">
            <Zap size={14} className="text-[#ECFF1C]" />
            <span className="text-[#ECFF1C] text-[10px] font-black uppercase tracking-[4px]">Mewat Education Directory 2026</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none mb-8">
            BEST SCHOOL <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-400 to-[#621CFF]">
              CITY WISE LIST
            </span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium">
            Discover the #1 rated education facilities across every city in the Nuh-Mewat region. 
            <span className="text-white"> "हर शहर, एक ही भरोसा - NCPS."</span>
          </p>
        </div>
      </section>

      {/* ─── DYNAMIC CITY GRID ─── */}
      <section className="max-w-[1300px] mx-auto -mt-12 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-20">
        {cityData.map((city) => (
          <div key={city.name} className="bg-white rounded-[35px] p-8 border border-slate-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all group overflow-hidden relative">
            {/* City Rating Badge */}
            <div className="absolute top-6 right-6 bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full flex items-center gap-1.5 text-[10px] font-black border border-emerald-100">
              <Star size={10} fill="currentColor" /> {city.rating}
            </div>

            <div className="mb-6">
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-[#621CFF] mb-6 group-hover:bg-[#621CFF] group-hover:text-white transition-all">
                <Building2 size={24} />
              </div>
              <h3 className="text-2xl font-black text-[#08011c] uppercase tracking-tight">{city.name}</h3>
              <p className="text-[#621CFF] text-[9px] font-black uppercase tracking-widest mt-1">{city.type}</p>
            </div>

            <p className="text-slate-500 text-sm font-medium leading-relaxed mb-6">
              {city.desc}
            </p>

            <div className="grid grid-cols-2 gap-4 border-t border-slate-50 pt-6 mb-8">
              <div className="flex flex-col">
                <span className="text-slate-400 text-[9px] font-black uppercase tracking-widest">Enrollment</span>
                <span className="text-[#08011c] font-bold text-sm">{city.students}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-slate-400 text-[9px] font-black uppercase tracking-widest">Transport</span>
                <span className="text-emerald-500 font-bold text-sm">Verified</span>
              </div>
            </div>

            <Link href={`/best-school-near-me/${city.name.toLowerCase().replace(/ /g, '-')}`} className="w-full bg-slate-50 text-[#08011c] py-4 rounded-2xl font-black uppercase text-[10px] tracking-[2px] flex items-center justify-center gap-2 group-hover:bg-[#08011c] group-hover:text-white transition-all">
              View Analytics <ArrowUpRight size={14} />
            </Link>
          </div>
        ))}
      </section>

      {/* ─── ELITE CTA BANNER ─── */}
      <section className="max-w-[1200px] mx-auto py-24 px-6">
        <div className="bg-[#08011c] rounded-[50px] p-10 md:p-20 relative overflow-hidden text-center md:text-left">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#621CFF] blur-[120px] opacity-40 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#ECFF1C] blur-[100px] opacity-10" />
          
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none uppercase italic">
                Ready to Join <br /> the Best?
              </h2>
              <p className="text-slate-400 text-lg font-medium">
                New Crescent Public School provides a unified admission process for all cities. "आज ही अपने बच्चे का भविष्य सुरक्षित करें।"
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link href="/apply" className="bg-[#621CFF] text-white px-8 py-4 rounded-2xl font-black uppercase text-[10px] tracking-[2px] shadow-xl flex items-center gap-3 active:scale-95 transition-all">
                  Apply Online <Zap size={16} fill="white" />
                </Link>
                <a href="tel:+919813020259" className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-2xl font-black uppercase text-[10px] tracking-[2px] border border-white/20 flex items-center gap-3">
                  <Phone size={16} /> Hotline
                </a>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { l: "High-Tech Labs", i: ShieldCheck },
                { l: "Global Mentors", i: GraduationCap },
                { l: "Mewat Ranking", i: Star },
                { l: "Safe Commute", i: MapPin }
              ].map((item) => (
                <div key={item.l} className="p-6 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md flex flex-col items-center gap-3">
                  <item.i className="text-[#ECFF1C]" size={24} />
                  <span className="text-white text-[10px] font-black uppercase tracking-widest text-center">{item.l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER SEO TAGS ─── */}
      <footer className="text-center pb-20 opacity-50">
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[10px]">NCPS • Directory • 2026</p>
      </footer>

    </div>
  );
}
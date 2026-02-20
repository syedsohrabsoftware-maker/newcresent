import { Star, Trophy, ShieldCheck, MapPin, Phone, ArrowUpRight, Zap, CheckCircle2, Medal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function TopSchoolsMewat() {
  const schoolStats = [
    { label: "Success Rate", value: "99%", icon: Zap },
    { label: "Expert Faculty", value: "50+", icon: Star },
    { label: "Modern Labs", value: "04", icon: ShieldCheck },
  ];

  const locations = ["Nuh City", "Punhana", "Pinangwan", "Firojpur Jhirka", "Hodal Road"];

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans selection:bg-[#621CFF] selection:text-white pb-10">
      
      {/* ─── PREMIUM HERO SECTION ─── */}
      <section className="bg-[#08011c] pt-32 pb-20 px-6 relative overflow-hidden rounded-b-[40px] md:rounded-b-[80px]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#621CFF] rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#ECFF1C] rounded-full blur-[150px] opacity-20" />
        </div>

        <div className="max-w-[1200px] mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-6 backdrop-blur-md">
            <Trophy size={14} className="text-[#ECFF1C]" />
            <span className="text-[#ECFF1C] text-[10px] font-black uppercase tracking-[3px]">Education Excellence Award 2026</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.95] tracking-tighter mb-8">
            TOP 5 SCHOOLS IN <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ECFF1C] via-white to-[#621CFF]">
              MEWAT (NUH) REGION
            </span>
          </h1>

          <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto mb-12 font-medium">
            मेवात के टॉप स्कूलों की सूची: Providing a verified comparison of the best educational institutions across Nuh, Punhana, and Firojpur Jhirka.
          </p>

          <div className="flex flex-wrap justify-center gap-4 md:gap-10">
            {schoolStats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <div className="text-white text-3xl font-black">{stat.value}</div>
                <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── THE #1 RANKED SCHOOL (NCPS) ─── */}
      <section className="max-w-[1200px] mx-auto -mt-16 px-6 relative z-20">
        <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-[0_50px_100px_rgba(0,0,0,0.08)] border border-slate-100 group">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/3 relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#621CFF] to-[#ECFF1C] rounded-[40px] opacity-10 blur-2xl group-hover:opacity-20 transition-opacity" />
              <div className="relative w-full aspect-square bg-slate-50 rounded-[32px] overflow-hidden border border-slate-100 flex items-center justify-center p-10">
                <Image src="/logo1.png" alt="NCPS Logo" fill className="object-contain p-12" />
                <div className="absolute top-4 left-4 bg-[#621CFF] text-white px-4 py-2 rounded-xl font-black text-xs">RANK #1</div>
              </div>
            </div>

            <div className="lg:w-2/3 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="text-3xl md:text-5xl font-black text-[#08011c] tracking-tighter uppercase">New Crescent Public School</h2>
                <div className="flex text-yellow-400 gap-0.5"><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/></div>
              </div>

              <p className="text-slate-600 text-lg font-medium leading-relaxed">
                NCPS is widely regarded as Mewat's most advanced English medium school. विद द स्टेट-ऑफ-द-आर्ट डिजिटल क्लासरूम्स और सुरक्षित बस सुविधा, यह स्कूल नूंह और पुन्हाना के अभिभावकों की पहली पसंद है।
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {["Smart Classes", "Robotics Lab", "Safe Transport", "Sports Academy", "Expert Faculty", "Hostel Facility"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-[11px] font-black text-slate-500 uppercase tracking-tight">
                    <CheckCircle2 size={14} className="text-emerald-500" /> {item}
                  </div>
                ))}
              </div>

              <div className="pt-6 flex flex-wrap gap-4">
                <Link href="/apply" className="bg-[#621CFF] text-white px-8 py-4 rounded-2xl font-black uppercase text-[10px] tracking-[2px] shadow-xl shadow-indigo-200 flex items-center gap-3">
                  Check Admission <ArrowUpRight size={16} />
                </Link>
                <a href="tel:+919813020259" className="bg-slate-50 text-[#08011c] px-8 py-4 rounded-2xl font-black uppercase text-[10px] tracking-[2px] border border-slate-200 flex items-center gap-3">
                  <Phone size={16} /> Call Hotline
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── COMPARISON TABLE (Fintech SaaS Style) ─── */}
      <section className="max-w-[1200px] mx-auto py-24 px-6">
        <div className="text-center mb-16 space-y-4">
          <h3 className="text-3xl md:text-5xl font-black text-[#08011c] tracking-tighter uppercase">Quick Comparison</h3>
          <p className="text-slate-500 font-bold uppercase tracking-[4px] text-xs">Mewat School Rankings 2026</p>
        </div>

        <div className="overflow-x-auto rounded-[32px] border border-slate-100 bg-white shadow-xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100">
                <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Rank</th>
                <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">School Name</th>
                <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Key Feature</th>
                <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Trust Score</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 font-bold text-slate-700">
              <tr className="bg-indigo-50/30">
                <td className="p-6"><Medal className="text-[#621CFF]" size={20} /></td>
                <td className="p-6 text-[#621CFF] font-black text-lg">New Crescent Public School</td>
                <td className="p-6 text-xs uppercase tracking-tight">Fintech-Ready Tech Labs & Ethics</td>
                <td className="p-6 text-center"><span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-[10px]">9.8/10</span></td>
              </tr>
              {[
                { r: "#2", n: "DPS Nuh (Nearby Area)", f: "Academic Records", s: "9.2/10" },
                { r: "#3", n: "Mewat Model School", f: "Government Standard", s: "8.5/10" },
                { r: "#4", n: "Modern Public School", f: "Local Reach", s: "8.1/10" },
                { r: "#5", n: "Aravalli Public School", f: "Infrastructure", s: "7.9/10" },
              ].map((row) => (
                <tr key={row.r} className="hover:bg-slate-50 transition-colors">
                  <td className="p-6 text-slate-400">{row.r}</td>
                  <td className="p-6 text-sm">{row.n}</td>
                  <td className="p-6 text-xs text-slate-400 uppercase">{row.f}</td>
                  <td className="p-6 text-center text-xs">{row.s}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ─── DYNAMIC AREA GRID (SEO) ─── */}
      <section className="bg-[#08011c] py-24 px-6 rounded-t-[50px] md:rounded-t-[80px]">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col items-center gap-8 text-center">
            <h4 className="text-white text-3xl font-black uppercase italic tracking-tighter leading-none">Best School Near You</h4>
            <div className="flex flex-wrap justify-center gap-6">
              {locations.map((city) => (
                <div key={city} className="bg-white/5 border border-white/10 px-8 py-5 rounded-2xl flex items-center gap-4 hover:bg-white/10 transition-all cursor-pointer">
                  <MapPin size={18} className="text-[#ECFF1C]" />
                  <span className="text-white font-black text-xs uppercase tracking-[2px]">{city}</span>
                </div>
              ))}
            </div>
            <p className="mt-10 text-[9px] font-bold text-slate-500 uppercase tracking-[5px]">
              © 2026 Mewat Education Index | Authored by NCPS Digital Team
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
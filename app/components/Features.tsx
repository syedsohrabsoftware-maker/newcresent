"use client";
import { Monitor, Bus, Microscope, ShieldCheck, Trophy, Users, Zap, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Features() {
  const facilities = [
    { name: "Safe Transport", icon: Bus, img: "/bus1.jpg", desc: "Har gaon se bus suvidha" },
    { name: "Digital Lab", icon: Monitor, img: "/lab.jpg", desc: "Modern computer shiksha" },
    { name: "Science Lab", icon: Microscope, img: "/science.jpg", desc: "Scientific khoj aur prayog" },
    { name: "Big Playground", icon: Trophy, img: "/ground.jpg", desc: "Khel-kood mein sabse aage" },
  ];

  return (
    <div className="bg-white">
      
      {/* --- STATS BAR --- */}
      <section className="relative z-30 -mt-3 md:-mt-1 px-4">
  <div className="max-w-5xl mx-auto bg-[#150447] rounded-2xl md:rounded-[32px] p-4 md:p-6 shadow-xl border-[3px] border-white grid grid-cols-2 lg:grid-cols-4 gap-4 items-center">
    {[
      { n: "22+", l: "Years Trust" },
      { n: "100%", l: "Results" },
      { n: "50+", l: "Smart Class" },
      { n: "5k+", l: "Alumni" }
    ].map((s, i) => (
      <div key={i} className="flex flex-col items-center text-center">
        {/* Font size chota kiya (text-2xl) aur tracking tight rakhi */}
        <h3 className="text-2xl md:text-3xl font-bold text-[#ECFF1C] tracking-tighter leading-none">
          {s.n}
        </h3>
        {/* Label ko ekdum crisp aur chota rakha */}
        <p className="text-[8px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
          {s.l}
        </p>
      </div>
    ))}
  </div>
</section>

      {/* --- VISUAL FACILITIES --- */}
      <section className="py-24 px-6 md:px-16">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div className="space-y-4">
              <h4 className="text-[#621CFF] text-xs font-black uppercase tracking-[5px]">Our Environment</h4>
              <h2 className="text-5xl md:text-7xl font-black text-[#150447] tracking-tighter uppercase leading-[0.9]">
                Everything Your <br /> <span className="text-slate-300">Child Needs.</span>
              </h2>
            </div>
            <Link href="/campus" className="group flex items-center gap-3 bg-slate-50 px-8 py-4 rounded-2xl border border-slate-100 font-black text-xs uppercase tracking-widest hover:bg-[#150447] hover:text-white transition-all">
              View All Facilities <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((f, i) => (
              <div key={i} className="group relative h-[450px] rounded-[48px] overflow-hidden bg-slate-100 border-4 border-white shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
                
                {/* Visual Image - AB YAHAN IMAGE ACTUAL MEIN RENDER HOGI */}
                <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#150447] via-[#150447]/20 to-transparent z-10 opacity-80 group-hover:opacity-90 transition-opacity"></div>
                  
                  {/* Next.js Image Component */}
                  <Image 
                    src={f.img} 
                    alt={f.name} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20 space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#ECFF1C] flex items-center justify-center text-[#150447] shadow-lg group-hover:scale-110 transition-transform">
                    <f.icon size={24} />
                  </div>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tighter">{f.name}</h3>
                  <p className="text-slate-200 text-xs font-bold uppercase tracking-wider">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
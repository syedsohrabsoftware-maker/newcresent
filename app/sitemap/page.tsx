"use client";
import React from "react";
import Link from "next/link";
import { 
  Network, Home, GraduationCap, MapPin, 
  MessageSquare, FileText, Camera, Users, 
  ShieldCheck, Globe, ArrowUpRight, Zap 
} from "lucide-react";

export default function SitemapPage() {
  const sitemapData = [
    {
      category: "Main Pages",
      links: [
        { name: "Home Dashboard", href: "/", icon: Home, desc: "Main landing area of NCPS portal." },
        { name: "About School", href: "/about", icon: Users, desc: "Know our mission, vision and legacy." },
        { name: "Contact Hub", href: "/contact", icon: MapPin, desc: "Connect with our support team." },
      ]
    },
    {
      category: "Academic Portal",
      links: [
        { name: "Curriculum", href: "/academics", icon: GraduationCap, desc: "Study plans from Nursery to 12th." },
        { name: "Infrastructure", href: "/campus", icon: Zap, desc: "Explore our labs and smart classes." },
        { name: "Gallery", href: "/gallery", icon: Camera, desc: "Visual tour of school events." },
      ]
    },
    {
      category: "Admission Desk",
      links: [
        { name: "Admissions Info", href: "/admissions", icon: Globe, desc: "Process, Fees and Eligibility." },
        { name: "Online Registration", href: "/apply", icon: FileText, desc: "Fill your application digitally." },
        { name: "Inquiry Chatbot", href: "#", icon: MessageSquare, desc: "Interact with our AI Assistant." },
      ]
    },
    {
      category: "Legal & Support",
      links: [
        { name: "Privacy Policy", href: "/privacy", icon: ShieldCheck, desc: "How we protect your data." },
        { name: "Terms of Use", href: "/terms", icon: ShieldCheck, desc: "Guidelines for website usage." },
      ]
    }
  ];

  return (
    <main className="pt-40 pb-20 bg-white min-h-screen selection:bg-[#621CFF]/20 overflow-x-hidden">
      
      {/* --- PREMIUM MESH BACKGROUND --- */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-[#621CFF]/5 to-transparent" />
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-[#ECFF1C]/10 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* --- HEADER --- */}
        <div className="max-w-3xl mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-full shadow-xl">
            <Network size={14} className="text-[#ECFF1C]" />
            <span className="text-[10px] font-black uppercase tracking-[3px]">Architecture & Structure</span>
          </div>
          <h1 className="text-6xl md:text-[100px] font-black text-[#150447] tracking-tighter uppercase leading-[0.85]">
            SITE <br /> <span className="text-[#621CFF]">MAP.</span>
          </h1>
          <p className="text-slate-500 font-bold text-lg md:text-xl max-w-xl border-l-4 border-[#ECFF1C] pl-6 py-1">
            Browse through our digital infrastructure. NCPS website ki har galli ka rasta yahan hai.
          </p>
        </div>

        {/* --- SITEMAP GRID --- */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {sitemapData.map((section, idx) => (
            <div key={idx} className="space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-1000" style={{ animationDelay: `${idx * 150}ms` }}>
              <div className="flex items-center gap-4">
                 <div className="h-[2px] w-12 bg-[#621CFF]" />
                 <h2 className="text-[11px] font-black uppercase tracking-[5px] text-slate-400">{section.category}</h2>
              </div>

              <div className="grid gap-4">
                {section.links.map((link, i) => (
                  <Link 
                    key={i} 
                    href={link.href}
                    className="group bg-slate-50 hover:bg-white p-6 rounded-[28px] border border-slate-100 hover:border-[#621CFF]/20 hover:shadow-2xl transition-all duration-500 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-6">
                       <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#150447] group-hover:bg-[#621CFF] group-hover:text-white transition-all">
                          <link.icon size={20} />
                       </div>
                       <div>
                          <h4 className="text-sm font-black text-[#150447] uppercase tracking-tight">{link.name}</h4>
                          <p className="text-[10px] font-bold text-slate-400 mt-0.5">{link.desc}</p>
                       </div>
                    </div>
                    <ArrowUpRight size={18} className="text-slate-300 group-hover:text-[#621CFF] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* --- FOOTER BANNER --- */}
        <div className="mt-24 p-12 bg-[#150447] rounded-[48px] text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group">
           <div className="absolute right-0 top-0 w-64 h-64 bg-[#621CFF] blur-[100px] opacity-20 group-hover:scale-150 transition-transform duration-1000" />
           <div className="relative z-10 text-center md:text-left">
              <h3 className="text-2xl font-black uppercase tracking-tighter italic">Found what you were looking for?</h3>
              <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">Directly head to our Admissions Portal</p>
           </div>
           <Link href="/admissions" className="relative z-10 bg-[#621CFF] text-white px-10 py-5 rounded-2xl font-black text-[10px] uppercase tracking-[3px] hover:bg-[#ECFF1C] hover:text-[#150447] transition-all active:scale-95">
              Portal Dashboard
           </Link>
        </div>

      </div>
    </main>
  );
}
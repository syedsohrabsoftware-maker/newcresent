"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  Menu, X, ChevronDown, Phone, Mail, MapPin,
  ArrowRight, Facebook, Instagram, Youtube,
  ShieldCheck, LayoutGrid, Zap, Home, GraduationCap,
  School, Landmark, MessageSquare,
} from "lucide-react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setMobileExpanded(null);
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleMouseEnter = (name: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setMegaOpen(name);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setMegaOpen(null), 200);
  };

  const navItems = [
    { name: "Home", href: "/", icon: Home, hasMega: false },
    {
      name: "Academics",
      href: "/academics",
      icon: GraduationCap,
      hasMega: true,
      sub: [
        { title: "Primary Wing", desc: "Foundation of excellence", icon: Zap, href: "/academics" },
        { title: "Secondary Wing", desc: "Advanced learning paths", icon: ShieldCheck, href: "/academics" },
        { title: "Modern Labs", desc: "Scientific exploration", icon: LayoutGrid, href: "/academics" },
        { title: "Expert Faculty", desc: "Guiding future leaders", icon: GraduationCap, href: "/academics" },
      ],
    },
    {
      name: "Admissions",
      href: "/admissions",
      icon: Landmark,
      hasMega: true,
      sub: [
        { title: "Fee Structure", desc: "Transparent pricing", icon: LayoutGrid, href: "/admissions" },
        { title: "Online Admission", desc: "Quick & easy process", icon: Zap, href: "/apply" },
        { title: "Prospectus 2026", desc: "Download school guide", icon: ShieldCheck, href: "/admissions" },
      ],
    },
    {
      name: "Campus",
      href: "/campus",
      icon: School,
      hasMega: true,
      sub: [
        { title: "Sports Arena", desc: "Physical development", icon: Zap, href: "/campus" },
        { title: "Digital Library", desc: "World of knowledge", icon: LayoutGrid, href: "/campus" },
        { title: "Student Hostel", desc: "Home away from home", icon: ShieldCheck, href: "/campus" },
      ],
    },
    { name: "Contact", href: "/contact", icon: MessageSquare, hasMega: false },
  ];

  return (
    <header
      className={`w-full fixed top-0 z-[100] transition-all duration-700 font-sans ${
        isScrolled
          ? "bg-white/90 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.03)] py-0"
          : "bg-white py-1"
      }`}
    >
      {/* ── TOP BAR ── */}
      <div className="w-full bg-[#08011c] border-b border-white/5 relative overflow-hidden py-2 md:py-3 px-4 md:px-12">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute -top-24 -left-20 w-96 h-96 bg-[#621CFF] rounded-full blur-[120px] animate-pulse" />
          <div className="absolute -bottom-24 -right-20 w-80 h-80 bg-[#ECFF1C] rounded-full blur-[100px] opacity-30" />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)`,
              backgroundSize: "24px 24px",
            }}
          />
        </div>
        <div className="max-w-[1440px] mx-auto flex justify-between items-center relative z-10">
          <div className="flex items-center gap-3 md:gap-8">
            <div className="group flex items-center gap-2.5 cursor-pointer">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#ECFF1C]/40 transition-all duration-500">
                <MapPin size={15} className="text-[#ECFF1C]" />
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="text-[7px] font-black text-white uppercase tracking-[2.5px] leading-none mb-0.5">Campus</span>
                <span className="text-[11px] font-semibold text-slate-200">Nuh, HR</span>
              </div>
            </div>
            <div className="hidden md:block h-8 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent" />
            <div className="group hidden md:flex items-center gap-2.5 cursor-pointer">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#621CFF]/40 transition-all duration-500">
                <Mail size={15} className="text-[#f0ff1c]" />
              </div>
              <div className="flex flex-col">
                <span className="text-[7px] font-black text-slate-500 uppercase tracking-[2.5px] leading-none mb-0.5">Support</span>
                <span className="text-[11px] font-semibold text-slate-300 italic">info@newcrescent.edu</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 md:gap-8">
            <div className="flex items-center gap-1.5 md:gap-2 bg-white/5 p-1 rounded-xl border border-white/10">
              {[
                { Icon: Facebook, color: "text-blue-400", bg: "hover:bg-blue-500/20" },
                { Icon: Instagram, color: "text-pink-400", bg: "hover:bg-pink-500/20" },
                { Icon: Youtube, color: "text-red-500", bg: "hover:bg-red-500/20" },
              ].map(({ Icon, color, bg }, idx) => (
                <button key={idx} className={`w-7 h-7 md:w-8 md:h-8 rounded-lg flex items-center justify-center text-slate-400 transition-all duration-300 hover:-translate-y-1 ${color} ${bg}`}>
                  <Icon size={14} />
                </button>
              ))}
            </div>
            <div className="relative group cursor-pointer">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#621CFF] to-[#ECFF1C] rounded-xl opacity-0 group-hover:opacity-20 blur-md transition-all duration-500" />
              <div className="flex items-center gap-3 bg-white/[0.04] border border-white/10 px-3 md:px-5 py-1.5 md:py-2 rounded-xl group-hover:border-[#ECFF1C]/30 transition-all duration-500">
                <div className="relative">
                  <Phone size={13} className="text-[#ECFF1C]" />
                  <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-[#ECFF1C] rounded-full animate-ping" />
                </div>
                <span className="text-[11px] md:text-[13px] font-bold text-white tracking-[1.5px] whitespace-nowrap">+91 98130 20259</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── MAIN NAVBAR ── */}
      <div className="max-w-[1440px] mx-auto px-7 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4 group">
          <div className="relative w-14 h-14 bg-white rounded-xl overflow-hidden border border-slate-100 group-hover:border-[#621CFF]/30 transition-all duration-500 shadow-sm">
            <Image src="/logo1.png" alt="Logo" fill className="object-contain p-1" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-[#0F172A] tracking-tighter leading-none group-hover:text-[#621CFF] transition-colors">NEW CRESCENT</h1>
            <span className="text-[7px] font-bold text-slate-400 uppercase tracking-[4px] mt-1">Excellence in Nuh</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div key={item.name} className="relative py-6" onMouseEnter={() => handleMouseEnter(item.name)} onMouseLeave={handleMouseLeave}>
              <Link
                href={item.href}
                className={`flex items-center gap-2.5 px-6 py-2.5 rounded-full text-[16px] font-semibold transition-all duration-300 border ${
                  megaOpen === item.name
                    ? "border-slate-200 bg-slate-100 text-[#621CFF]"
                    : "border-transparent text-slate-600 hover:border-slate-200 hover:bg-slate-50 hover:text-slate-950"
                }`}
              >
                <item.icon size={18} className={`transition-colors duration-300 ${megaOpen === item.name ? "text-[#621CFF]" : "text-slate-400"}`} />
                {item.name}
                {item.hasMega && (
                  <ChevronDown size={14} className={`opacity-40 transition-transform duration-500 ${megaOpen === item.name ? "rotate-180 opacity-100 text-[#621CFF]" : ""}`} />
                )}
              </Link>
              {item.hasMega && megaOpen === item.name && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[550px] bg-white rounded-[28px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] p-8 grid grid-cols-2 gap-8 border border-slate-100 animate-in fade-in zoom-in-95 duration-300">
                  <div className="space-y-6">
                    <div className="flex items-center gap-2 text-slate-400">
                      <LayoutGrid size={13} />
                      <h4 className="text-[10px] font-black uppercase tracking-[3px]">Explore</h4>
                    </div>
                    <ul className="space-y-3">
                      {item.sub?.map((subItem) => (
                        <li key={subItem.title} className="group/item flex items-center gap-4 p-2 rounded-xl hover:bg-slate-50 transition-all cursor-pointer">
                          <div className="w-10 h-10 rounded-lg bg-[#621CFF]/5 flex items-center justify-center text-[#621CFF] group-hover/item:bg-[#621CFF] group-hover/item:text-white transition-all">
                            <subItem.icon size={18} />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[14px] font-bold text-slate-700 leading-tight">{subItem.title}</span>
                            <span className="text-[10px] text-slate-400 uppercase tracking-tighter">{subItem.desc}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-[#621CFF] rounded-2xl p-6 text-white flex flex-col justify-between relative overflow-hidden group/card shadow-xl">
                    <Zap className="absolute -right-4 -top-4 w-28 h-28 text-white/10 group-hover/card:scale-110 transition-transform duration-700" />
                    <div>
                      <p className="text-[9px] font-bold text-indigo-200 uppercase tracking-widest">NCPS Admission 2026</p>
                      <h5 className="text-xl font-bold mt-1 leading-tight italic uppercase tracking-tighter">Leading <br /> The Future</h5>
                    </div>
                    <button className="mt-4 bg-[#ECFF1C] text-[#621CFF] w-full py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:brightness-110 transition-all shadow-lg">Register Today</button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Link href="/apply" className="relative group overflow-hidden bg-[#621CFF] text-white px-8 py-3.5 rounded-2xl font-semibold text-[16px] shadow-[0_10px_20px_rgba(98,28,255,0.2)] hover:shadow-[0_15px_30px_rgba(98,28,255,0.3)] hover:-translate-y-1 transition-all duration-500 flex items-center gap-3 active:scale-95">
            <span className="relative z-10">Apply Now</span>
            <div className="relative z-10 w-5 h-5 bg-[#ECFF1C] rounded-lg flex items-center justify-center group-hover:rotate-[360deg] transition-transform duration-700">
              <ArrowRight size={12} className="text-[#150447]" />
            </div>
          </Link>
        </div>

        {/* Mobile Burger */}
        <button
          className="lg:hidden w-11 h-11 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-900 active:scale-90 transition-transform"
          onClick={() => setMobileOpen(true)}
        >
          <Menu size={20} />
        </button>
      </div>

      {/* ══════════════════════════════════════════
          MOBILE MENU — PIXEL-PERFECT SAAS DRAWER
          FIX: Alignment, Spacing, & Full-Height Scroll
          ══════════════════════════════════════════ */}

      {/* Backdrop with Blur */}
      <div
        onClick={() => setMobileOpen(false)}
        className={`lg:hidden fixed inset-0 bg-[#08011c]/60 backdrop-blur-md z-[99997] transition-opacity duration-500 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer Panel */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-[100dvh] w-full sm:w-[400px] z-[99999] flex flex-col bg-white transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ boxShadow: "-15px 0 50px rgba(0,0,0,0.15)" }}
      >
        {/* --- Drawer Header (Premium Dark) --- */}
        <div className="shrink-0 bg-[#08011c] px-6 py-6 flex items-center justify-between border-b border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#621CFF] blur-[60px] opacity-20 pointer-events-none" />
          
          <div className="flex items-center gap-4 relative z-10">
            <div className="relative w-12 h-12 rounded-2xl overflow-hidden bg-white shadow-xl flex items-center justify-center">
              <Image src="/logo1.png" alt="Logo" fill className="object-contain p-2" />
            </div>
            <div className="flex flex-col">
              <p className="text-white text-[16px] font-black tracking-tighter uppercase leading-none">New Crescent</p>
              <p className="text-[8px] font-bold text-[#ECFF1C] uppercase tracking-[3px] mt-1.5 opacity-90">Portal V2.0</p>
            </div>
          </div>

          <button
            onClick={() => setMobileOpen(false)}
            className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white active:bg-[#621CFF] active:scale-90 transition-all duration-200 relative z-10"
          >
            <X size={22} strokeWidth={2.5} />
          </button>
        </div>

        {/* --- Scrollable Content --- */}
        <div className="flex-1 overflow-y-auto bg-[#fcfdfe] custom-scrollbar">
          
          {/* Action Cards (Call/Email) */}
          <div className="px-5 pt-6 pb-2 grid grid-cols-2 gap-3">
            <a href="tel:+919813020259" className="flex items-center gap-3 bg-white border border-slate-100 p-4 rounded-3xl shadow-sm active:scale-[0.97] transition-all">
              <div className="w-10 h-10 bg-indigo-50 text-[#621CFF] rounded-xl flex items-center justify-center shrink-0">
                <Phone size={18} />
              </div>
              <span className="text-[11px] font-black uppercase text-[#150447] tracking-tight">Call</span>
            </a>
            <a href="mailto:info@newcrescent.edu" className="flex items-center gap-3 bg-white border border-slate-100 p-4 rounded-3xl shadow-sm active:scale-[0.97] transition-all">
              <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center shrink-0">
                <Mail size={18} />
              </div>
              <span className="text-[11px] font-black uppercase text-[#150447] tracking-tight">Email</span>
            </a>
          </div>

          {/* Navigation Label */}
          <div className="px-8 pt-6 pb-3">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[5px]">Main Navigation</p>
          </div>

          {/* Nav Links List */}
          <div className="px-5 pb-8 flex flex-col gap-2.5">
            {navItems.map((item) => (
              <div key={item.name} className="flex flex-col">
                {item.hasMega ? (
                  <>
                    <button
                      onClick={() => setMobileExpanded(mobileExpanded === item.name ? null : item.name)}
                      className={`w-full flex items-center justify-between p-4 rounded-[28px] border transition-all duration-300 ${
                        mobileExpanded === item.name 
                        ? "bg-white border-[#621CFF]/20 shadow-md" 
                        : "bg-white/50 border-slate-100 hover:bg-white"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                          mobileExpanded === item.name ? "bg-[#621CFF] text-white shadow-lg" : "bg-slate-50 text-slate-400"
                        }`}>
                          <item.icon size={20} />
                        </div>
                        <span className={`text-[17px] font-black uppercase tracking-tighter ${mobileExpanded === item.name ? "text-[#621CFF]" : "text-[#150447]"}`}>
                          {item.name}
                        </span>
                      </div>
                      <ChevronDown size={18} className={`transition-transform duration-500 ${mobileExpanded === item.name ? "rotate-180 text-[#621CFF]" : "text-slate-300"}`} />
                    </button>

                    {/* Accordion Content */}
                    <div
                      className="overflow-hidden transition-all duration-500 ease-in-out"
                      style={{ 
                        maxHeight: mobileExpanded === item.name ? `${(item.sub?.length ?? 0) * 85 + 20}px` : "0px",
                        opacity: mobileExpanded === item.name ? 1 : 0
                      }}
                    >
                      <div className="flex flex-col gap-2 pt-2 pb-4 px-2">
                        {item.sub?.map((sub) => (
                          <Link 
                            key={sub.title} 
                            href={sub.href} 
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center gap-4 p-4 rounded-[24px] bg-white border border-slate-50 active:bg-slate-100 transition-colors group"
                          >
                            <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-[#621CFF] group-active:bg-[#621CFF] group-active:text-white transition-all shrink-0">
                              <sub.icon size={16} />
                            </div>
                            <div className="flex flex-col min-w-0">
                               <span className="text-[14px] font-bold text-slate-800 leading-none">{sub.title}</span>
                               <span className="text-[10px] text-slate-400 truncate mt-1.5">{sub.desc}</span>
                            </div>
                            <ArrowRight size={12} className="ml-auto text-slate-200" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link 
                    href={item.href} 
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between p-4 rounded-[28px] bg-white border border-slate-100 active:bg-slate-50 transition-all group shadow-sm"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-11 h-11 rounded-2xl bg-slate-50 text-slate-400 flex items-center justify-center group-active:bg-[#621CFF] group-active:text-white transition-all">
                        <item.icon size={20} />
                      </div>
                      <span className="text-[17px] font-black uppercase tracking-tighter text-[#150447] group-active:text-[#621CFF]">
                        {item.name}
                      </span>
                    </div>
                    <ArrowRight size={18} className="text-slate-200 group-active:translate-x-1 transition-all" />
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Admission CTA Card */}
          <div className="px-5 pb-12">
            <div className="bg-[#150447] p-8 rounded-[40px] relative overflow-hidden shadow-2xl">
               <div className="absolute top-0 right-0 w-32 h-32 bg-[#621CFF] blur-[60px] opacity-40 animate-pulse" />
               <div className="relative z-10 text-center space-y-6">
                  <div className="space-y-1">
                    <p className="text-[#ECFF1C] text-[10px] font-black uppercase tracking-[5px]">Admission 2026</p>
                    <h4 className="text-white font-black text-2xl uppercase tracking-tighter italic leading-tight">Start Your <br/> Journey Today</h4>
                  </div>
                  <Link href="/apply" onClick={() => setMobileOpen(false)} className="block w-full bg-[#ECFF1C] text-[#150447] py-4.5 rounded-2xl font-black uppercase text-[11px] tracking-[2px] shadow-lg active:scale-95 transition-transform">
                    Apply Now
                  </Link>
               </div>
            </div>
            
            {/* Social Icons Strip */}
            <div className="mt-10 flex justify-center gap-10">
               {[Facebook, Instagram, Youtube].map((Icon, i) => (
                 <Icon key={i} size={24} className="text-slate-300 hover:text-[#621CFF] transition-colors cursor-pointer" />
               ))}
            </div>
            <p className="text-center text-[7.5px] font-black text-slate-300 uppercase tracking-[4px] mt-8">Architecture by New Crescent Digital</p>
          </div>
        </div>
      </div>
    </header>
  );
}
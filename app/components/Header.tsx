"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  Menu, X, ChevronDown, Phone, Mail, MapPin,
  ArrowRight, Facebook, Instagram, Youtube,
  ShieldCheck, LayoutGrid, Zap, Home, GraduationCap, 
  School, Landmark, MessageSquare, Info
} from "lucide-react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        { title: "Primary Wing", desc: "Foundation of excellence", icon: Zap },
        { title: "Secondary Wing", desc: "Advanced learning paths", icon: ShieldCheck },
        { title: "Modern Labs", desc: "Scientific exploration", icon: LayoutGrid },
        { title: "Expert Faculty", desc: "Guiding future leaders", icon: GraduationCap }
      ] 
    },
    { 
      name: "Admissions", 
      href: "/admissions", 
      icon: Landmark, 
      hasMega: true, 
      sub: [
        { title: "Fee Structure", desc: "Transparent pricing", icon: LayoutGrid },
        { title: "Online Admission", desc: "Quick & easy process", icon: Zap },
        { title: "Prospectus 2026", desc: "Download school guide", icon: ShieldCheck }
      ] 
    },
    { 
      name: "Campus", 
      href: "/campus", 
      icon: School, 
      hasMega: true, 
      sub: [
        { title: "Sports Arena", desc: "Physical development", icon: Zap },
        { title: "Digital Library", desc: "World of knowledge", icon: LayoutGrid },
        { title: "Student Hostel", desc: "Home away from home", icon: ShieldCheck }
      ] 
    },
    { name: "Contact", href: "/contact", icon: MessageSquare, hasMega: false },
  ];

  return (
    <header className={`w-full fixed top-0 z-[100] transition-all duration-700 font-sans ${isScrolled ? 'bg-white/90 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.03)] py-0' : 'bg-white py-1'}`}>
      
      {/* Top Bar - Abstract SaaS Edition */}
<div className="w-full bg-[#08011c] border-b border-white/5 relative overflow-hidden py-2 md:py-3 px-4 md:px-12 group/topbar">
  
  {/* Abstract Animated Background Elements */}
  <div className="absolute inset-0 opacity-20 pointer-events-none">
    {/* Moving Gradient Glows */}
    <div className="absolute -top-24 -left-20 w-96 h-96 bg-[#621CFF] rounded-full blur-[120px] animate-pulse"></div>
    <div className="absolute -bottom-24 -right-20 w-80 h-80 bg-[#ECFF1C] rounded-full blur-[100px] opacity-30"></div>
    
    {/* Abstract Grid Pattern */}
    <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)`, backgroundSize: '24px 24px' }}></div>
    
    {/* Abstract SVG Waves */}
    <svg className="absolute bottom-0 left-0 w-full h-full opacity-10" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
      <path fill="#621CFF" d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,149.3C672,149,768,203,864,218.7C960,235,1056,213,1152,186.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
    </svg>
  </div>

  <div className="max-w-[1440px] mx-auto flex justify-between items-center relative z-10">
    
    {/* Left Side: Dynamic Info Widgets */}
    <div className="flex items-center gap-3 md:gap-8">
      {/* Location Widget */}
      <div className="group flex items-center gap-2.5 cursor-pointer">
        <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#ECFF1C]/40 group-hover:bg-[#ECFF1C]/5 transition-all duration-500 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#621CFF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <MapPin size={15} className="text-[#ECFF1C] group-hover:scale-110 transition-transform relative z-10" />
        </div>
        <div className="hidden sm:flex flex-col">
          <span className="text-[7px] font-black text-[#ffffff] uppercase tracking-[2.5px] leading-none mb-0.5">Campus</span>
          <span className="text-[11px] font-semibold text-slate-200 group-hover:text-white transition-colors tracking-tight">Nuh, HR</span>
        </div>
      </div>

      <div className="hidden md:block h-8 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>

      {/* Email Widget */}
      <div className="group flex items-center gap-2.5 cursor-pointer">
        <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#621CFF]/40 group-hover:bg-[#621CFF]/5 transition-all duration-500 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#ECFF1C]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <Mail size={15} className="text-[#f0ff1c] group-hover:rotate-12 transition-transform relative z-10" />
        </div>
        <div className="hidden md:flex flex-col">
          <span className="text-[7px] font-black text-slate-500 uppercase tracking-[2.5px] leading-none mb-0.5">Support</span>
          <span className="text-[11px] font-semibold text-slate-300 group-hover:text-white transition-colors tracking-tight italic">info@newcrescent.edu</span>
        </div>
      </div>
    </div>

    {/* Right Side: Social & Hotline */}
    <div className="flex items-center gap-3 md:gap-8">
      {/* Social Island - Floating Style */}
      <div className="flex items-center gap-1.5 md:gap-2 bg-white/5 p-1 rounded-xl border border-white/10 backdrop-blur-sm shadow-2xl">
        {[
          { Icon: Facebook, color: 'text-blue-400', bg: 'hover:bg-blue-500/20' },
          { Icon: Instagram, color: 'text-pink-400', bg: 'hover:bg-pink-500/20' },
          { Icon: Youtube, color: 'text-red-500', bg: 'hover:bg-red-500/20' }
        ].map(({ Icon, color, bg }, idx) => (
          <button key={idx} className={`w-7 h-7 md:w-8 md:h-8 rounded-lg flex items-center justify-center text-slate-400 transition-all duration-300 hover:-translate-y-1 ${color} ${bg}`}>
            <Icon size={14} />
          </button>
        ))}
      </div>

      {/* Hotline Widget - Fintech Glass */}
      <div className="relative group cursor-pointer">
        <div className="absolute -inset-1 bg-gradient-to-r from-[#621CFF] to-[#ECFF1C] rounded-xl opacity-0 group-hover:opacity-20 blur-md transition-all duration-500"></div>
        <div className="flex items-center gap-3 bg-white/[0.04] border border-white/10 px-3 md:px-5 py-1.5 md:py-2 rounded-xl group-hover:border-[#ECFF1C]/30 group-hover:bg-white/[0.08] transition-all duration-500">
          <div className="relative">
            <Phone size={13} className="text-[#ECFF1C] group-hover:rotate-[15deg] transition-transform" />
            <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-[#ECFF1C] rounded-full animate-ping"></span>
          </div>
          <span className="text-[11px] md:text-[13px] font-bold text-white tracking-[1.5px] whitespace-nowrap">+91 98130 20259</span>
        </div>
      </div>
    </div>
  </div>
</div>

      {/* Main Navbar */}
      <div className="max-w-[1440px] mx-auto px-7 h-20 flex items-center justify-between">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-4 group">
          <div className="relative w-15 h-14 bg-white rounded-xl overflow-hidden border border-slate-100 group-hover:border-[#621CFF]/30 transition-all duration-500 shadow-sm">
            <Image src="/logo1.png" alt="Logo" fill className="object-contain p-1" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-[#0F172A] tracking-tighter leading-none group-hover:text-[#621CFF] transition-colors">NEW CRESCENT</h1>
            <span className="text-[7px] font-bold text-slate-400 uppercase tracking-[4px] mt-1">Excellence in Nuh</span>
          </div>
        </Link>

        {/* Desktop Nav - 16px & 500 Weight (Subtle Gray Capsule) */}
        <nav className="hidden lg:flex items-center gap-1">
  {navItems.map((item) => (
    <div
      key={item.name}
      className="relative py-6"
      onMouseEnter={() => handleMouseEnter(item.name)}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href={item.href}
        className={`flex items-center gap-2.5 px-6 py-2.5 rounded-full text-[16px] font-semibold transition-all duration-300 border ${
          megaOpen === item.name 
          ? 'border-slate-200 bg-slate-100 text-[#621CFF]' 
          : 'border-transparent text-slate-600 hover:border-slate-200 hover:bg-slate-50 hover:text-slate-950'
        }`}
      >
        <item.icon size={18} className={`transition-colors duration-300 ${megaOpen === item.name ? 'text-[#621CFF]' : 'text-slate-400 group-hover:text-slate-600'}`} />
        {item.name}
        {item.hasMega && (
          <ChevronDown 
            size={14} 
            className={`opacity-40 transition-transform duration-500 ${megaOpen === item.name ? 'rotate-180 opacity-100 text-[#621CFF]' : ''}`} 
          />
        )}
      </Link>

      {/* Mega Dropdown */}
      {item.hasMega && megaOpen === item.name && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 w-[550px] bg-white rounded-[28px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] p-8 grid grid-cols-2 gap-8 border border-slate-100 animate-in fade-in zoom-in-95 duration-300">
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-slate-400">
              <LayoutGrid size={13} />
              <h4 className="text-[10px] font-black uppercase tracking-[3px]">Explore</h4>
            </div>
            <ul className="space-y-3">
              {item.sub?.map(subItem => (
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
              <h5 className="text-xl font-bold mt-1 leading-tight italic uppercase tracking-tighter">Leading <br/> The Future</h5>
            </div>
            <button className="mt-4 bg-[#ECFF1C] text-[#621CFF] w-full py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:brightness-110 transition-all shadow-lg">Register Today</button>
          </div>
        </div>
      )}
    </div>
  ))}
</nav>

        {/* Action Section */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
  href="/apply"
  className="relative group overflow-hidden bg-[#621CFF] text-white px-8 py-3.5 rounded-2xl font-semibold text-[16px] shadow-[0_10px_20px_rgba(98,28,255,0.2)] hover:shadow-[0_15px_30px_rgba(98,28,255,0.3)] hover:-translate-y-1 transition-all duration-500 flex items-center gap-3 active:scale-95"
>
  {/* Abstract Background Shimmer Effect */}
  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] transition-transform duration-1000"></span>

  {/* Button Content */}
  <span className="relative z-10">Apply Now</span>
  
  <div className="relative z-10 w-5 h-5 bg-[#ECFF1C] rounded-lg flex items-center justify-center group-hover:rotate-[360deg] transition-transform duration-700">
    <ArrowRight size={12} className="text-[#150447] group-hover:translate-x-0.5 transition-transform" />
  </div>

  {/* Glow Effect on Hover */}
  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-[#621CFF] via-transparent to-[#ECFF1C]/20 pointer-events-none"></div>
</Link>
        </div>

        {/* Mobile Burger */}
        <button
          className="lg:hidden w-11 h-11 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-900"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* --- ULTRA-SOLID PREMIUM OVERLAY --- */}
<div 
  className={`lg:hidden fixed inset-0 w-full h-screen bg-white z-[99999] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] transform ${
    mobileOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
  }`}
>
  {/* --- TOP BAR: FINTECH BLACK --- */}
  <div className="absolute top-0 left-0 w-full bg-[#08011c] py-4 px-6 flex justify-between items-center z-[100000] border-b border-white/5">
    <div className="flex items-center gap-2.5">
      <div className="w-2 h-2 bg-[#25D366] rounded-full animate-pulse shadow-[0_0_10px_#25D366]"></div>
      <span className="text-[10px] font-black text-white uppercase tracking-[3px]">NCPS Portal Live</span>
    </div>
    <button 
      onClick={() => setMobileOpen(false)}
      className="w-11 h-11 rounded-2xl bg-white/5 flex items-center justify-center text-[#ECFF1C] border border-white/10 active:scale-90 active:bg-[#621CFF] active:text-white transition-all duration-300"
    >
      <X size={22} strokeWidth={2.5} />
    </button>
  </div>

  <div className="relative pt-28 px-6 h-full flex flex-col bg-white overflow-y-auto overflow-x-hidden custom-scrollbar">
    
    {/* --- BRANDING: CLEAN & MINIMAL (NO CAPSULE) --- */}
    <div className="flex items-center gap-5 mb-12 px-2 animate-in fade-in slide-in-from-left-5 duration-700">
      <div className="relative w-16 h-16 bg-white rounded-3xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-slate-50 flex-shrink-0">
        <Image src="/logo1.png" alt="Logo" fill className="object-contain p-2" />
      </div>
      <div className="space-y-1">
         <h3 className="font-black text-[#150447] text-2xl tracking-tighter uppercase leading-none">New Crescent</h3>
         <p className="text-[9px] font-bold text-slate-400 uppercase tracking-[4px] italic">Excellence in Nuh District</p>
      </div>
    </div>

    {/* --- NAVIGATION: CAPSULE STYLE WITH LIGHT BORDER --- */}
    <div className="flex flex-col gap-3">
      <p className="text-[9px] font-black text-[#621CFF] uppercase tracking-[5px] mb-2 ml-4 opacity-50">Navigation Menu</p>
      
      {navItems.map((item, idx) => (
        <Link 
          key={item.name}
          href={item.href}
          className="group relative flex items-center justify-between p-1.5 rounded-full transition-all duration-500 active:scale-[0.98]"
          onClick={() => setMobileOpen(false)}
        >
          {/* Capsule Background & Light Border on Hover/Active */}
          <div className="absolute inset-0 rounded-full border border-slate-100 bg-slate-50/50 transition-all duration-500 group-hover:bg-white group-hover:border-[#621CFF]/30 group-hover:shadow-[0_10px_30px_rgba(98,28,255,0.08)] group-active:border-[#621CFF] group-active:ring-2 group-active:ring-[#621CFF]/20"></div>

          <div className="relative z-10 flex items-center gap-5 p-3">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-400 shadow-sm border border-slate-50 group-hover:text-[#621CFF] group-hover:rotate-[10deg] transition-all duration-500">
              <item.icon size={22} strokeWidth={2} />
            </div>
            <span className="text-xl font-black text-[#150447] tracking-tighter uppercase group-hover:translate-x-1 transition-transform duration-500">{item.name}</span>
          </div>

          <div className="relative z-10 mr-4 w-10 h-10 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-4 transition-all duration-500 shadow-sm">
            <ArrowRight size={18} className="text-[#621CFF]" />
          </div>
        </Link>
      ))}
    </div>

    {/* --- ACTION CARD: PREMIUM DARK --- */}
    <div className="mt-12 mb-10 pb-6">
        <div className="bg-[#150447] p-8 rounded-[48px] relative overflow-hidden shadow-[0_40px_80px_-15px_rgba(21,4,71,0.5)] group">
            {/* Abstract Glows */}
            <div className="absolute -top-20 -right-20 w-48 h-48 bg-[#621CFF] blur-[80px] opacity-30 group-hover:scale-125 transition-transform duration-1000"></div>
            <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-[#ECFF1C] blur-[80px] opacity-10"></div>
            
            <div className="relative z-10 space-y-6 text-center">
                <div className="space-y-1">
                  <p className="text-[#ECFF1C] text-[10px] font-black uppercase tracking-[5px] animate-pulse">Session 2026-27</p>
                  <h4 className="text-white font-black text-2xl uppercase tracking-tighter italic">Elite Admissions Open</h4>
                </div>

                <Link 
                  href="/apply" 
                  className="w-full bg-white text-[#150447] py-5 rounded-full font-black text-center block shadow-2xl active:scale-95 uppercase tracking-[4px] text-[12px] hover:bg-[#ECFF1C] transition-all duration-300"
                  onClick={() => setMobileOpen(false)}
                >
                  Apply Digitally Now
                </Link>
                
                <p className="text-white/30 text-[8px] font-bold uppercase tracking-[2px]">Limited Seats Available in Nuh Campus</p>
            </div>
        </div>
        
        {/* Social Bridge */}
        <div className="flex justify-center gap-12 mt-10">
           {[Facebook, Instagram, Youtube].map((Icon, i) => (
             <Icon key={i} size={22} className="text-slate-300 hover:text-[#621CFF] cursor-pointer transition-colors" />
           ))}
        </div>
        <p className="text-center text-[7px] font-black text-slate-300 uppercase tracking-[5px] mt-8 italic">Architecture by Crescent Digital</p>
    </div>
  </div>
</div>
    </header>
  );
}
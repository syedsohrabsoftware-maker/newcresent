"use client";
import Link from "next/link";
import Image from "next/image";
import { 
  Facebook, Instagram, Youtube, Twitter, 
  MapPin, Mail, Phone, ArrowRight, Send, 
  ShieldCheck, Zap, Globe, GraduationCap,
  ExternalLink, Clock, Sparkles
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#0A0118] pt-24 pb-12 overflow-hidden font-sans border-t border-white/5">
      
      {/* --- ADVANCED ABSTRACT BACKGROUND --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Deep Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-gradient-to-b from-[#621CFF]/20 to-transparent blur-[120px]"></div>
        <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-[#ECFF1C]/10 rounded-full blur-[150px]"></div>
        
        {/* Animated Grid Lines */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ 
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, 
          backgroundSize: '60px 60px' 
        }}></div>

        {/* Abstract SVG Pattern */}
        <svg className="absolute top-20 right-0 w-[400px] opacity-5 rotate-12" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#621CFF" d="M44.7,-76.4C58.1,-69.2,69.2,-58.1,76.4,-44.7C83.7,-31.4,87,-15.7,85.6,-0.8C84.2,14.1,78.2,28.2,69.5,40.1C60.8,51.9,49.5,61.6,36.6,68.9C23.7,76.2,9.2,81.1,-4.6,89C-18.4,96.9,-36.8,107.8,-51.1,102.3C-65.5,96.8,-75.7,74.9,-82.4,55.9C-89,36.9,-92,20.8,-90.6,5.1C-89.2,-10.5,-83.4,-25.8,-74.6,-39.3C-65.7,-52.8,-53.8,-64.5,-40.1,-71.5C-26.4,-78.6,-13.2,-81,1.1,-82.9C15.4,-84.8,30.8,-86.2,44.7,-76.4Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-8 md:px-16 relative z-10">
        
        {/* --- NEWSLETTER FLOATING CARD --- */}
        <div className="mb-20 bg-gradient-to-r from-[#150447] to-[#0A0118] rounded-[40px] p-8 md:p-12 border border-white/10 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
            <Sparkles size={100} className="text-[#ECFF1C]" />
          </div>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-black text-white tracking-tighter mb-4 uppercase italic">
                Get the <span className="text-[#ECFF1C]">Crescent</span> Update
              </h3>
              <p className="text-slate-400 font-medium">Be the first to know about admissions, events, and school achievements.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-grow">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#621CFF] focus:ring-1 focus:ring-[#621CFF] transition-all"
                />
              </div>
              <button className="bg-[#621CFF] hover:bg-[#ECFF1C] hover:text-[#150447] text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 transition-all transform active:scale-95 shadow-xl shadow-[#621CFF]/20">
                Subscribe <Send size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* --- MAIN LINKS GRID --- */}
        <div className="grid lg:grid-cols-12 gap-16 pb-16">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-5 space-y-8">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="relative w-16 h-16 bg-white rounded-[24px] overflow-hidden p-2 shadow-2xl transition-transform group-hover:scale-105">
                <Image src="/logo1.png" alt="Logo" fill className="object-contain" />
              </div>
              <div className="flex flex-col">
                <h2 className="text-3xl font-black text-white tracking-tighter leading-none">NEW CRESCENT</h2>
                <span className="text-[9px] font-bold text-[#ECFF1C] uppercase tracking-[5px] mt-2">Public School</span>
              </div>
            </Link>
            <p className="text-slate-400 text-lg leading-relaxed font-medium">
              We provide a world-class education that inspires students to become innovative leaders of tomorrow. Built on excellence, technology, and core values.
            </p>
            <div className="flex flex-wrap gap-4">
               <div className="flex items-center gap-3 px-5 py-3 bg-white/5 rounded-2xl border border-white/10 hover:border-[#621CFF]/50 transition-colors">
                  <ShieldCheck size={20} className="text-[#ECFF1C]" />
                  <span className="text-xs font-black text-white uppercase tracking-widest">Global Standards</span>
               </div>
               <div className="flex items-center gap-3 px-5 py-3 bg-white/5 rounded-2xl border border-white/10 hover:border-[#621CFF]/50 transition-colors">
                  <Zap size={20} className="text-[#621CFF]" />
                  <span className="text-xs font-black text-white uppercase tracking-widest">Future Ready</span>
               </div>
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-white text-sm font-black uppercase tracking-[4px] border-l-4 border-[#621CFF] pl-4">Discover</h4>
            <ul className="space-y-4">
              {['About Us', 'Academic Path', 'Admission Info', 'Campus Life', 'Our Gallery'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-slate-500 hover:text-[#ECFF1C] text-[15px] font-bold transition-all flex items-center gap-2 group">
                    <div className="w-1 h-1 bg-slate-700 group-hover:w-3 group-hover:bg-[#ECFF1C] transition-all"></div>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-white text-sm font-black uppercase tracking-[4px] border-l-4 border-[#ECFF1C] pl-4">Resources</h4>
            <ul className="space-y-4">
              {['Online Fee', 'Student Login', 'Staff Portal', 'Latest News', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-slate-500 hover:text-[#621CFF] text-[15px] font-bold transition-all flex items-center gap-2 group">
                    <div className="w-1 h-1 bg-slate-700 group-hover:w-3 group-hover:bg-[#621CFF] transition-all"></div>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Map Card */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-white text-sm font-black uppercase tracking-[4px]">Find Us</h4>
            <div className="bg-white/5 rounded-3xl p-5 border border-white/10 hover:border-[#621CFF]/30 transition-all">
               <div className="flex gap-4 mb-4">
                  <MapPin className="text-[#ECFF1C] shrink-0" size={20} />
                  <p className="text-slate-300 text-sm font-bold">Sikrawa Road, Pinangwan, District Nuh, Haryana - 122508</p>
               </div>
               <Link href="https://maps.google.com" className="w-full flex items-center justify-center gap-2 py-3 bg-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest text-white hover:bg-white/20 transition-all">
                  Open in Google Maps <ExternalLink size={12} />
               </Link>
            </div>
          </div>

        </div>

        {/* --- CONTACT BAR & SOCIALS --- */}
        <div className="grid md:grid-cols-12 gap-8 py-10 border-y border-white/5 items-center">
          <div className="md:col-span-4 flex items-center gap-6">
            <div className="w-14 h-14 rounded-full bg-[#621CFF]/10 flex items-center justify-center border border-[#621CFF]/20">
              <Phone className="text-[#ECFF1C]" size={24} />
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Support Hotline</p>
              <h5 className="text-xl font-black text-white tracking-widest">+91 98130 20259</h5>
            </div>
          </div>

          <div className="md:col-span-4 flex items-center gap-6">
            <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
              <Clock className="text-[#621CFF]" size={24} />
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Office Hours</p>
              <h5 className="text-lg font-bold text-white uppercase tracking-tight">Mon-Sat: 8 AM - 2 PM</h5>
            </div>
          </div>

          <div className="md:col-span-4 flex justify-end gap-3">
             {[
               { Icon: Facebook, color: 'hover:bg-blue-600' },
               { Icon: Instagram, color: 'hover:bg-pink-600' },
               { Icon: Youtube, color: 'hover:bg-red-600' },
               { Icon: Twitter, color: 'hover:bg-blue-400' }
             ].map(({Icon, color}, idx) => (
               <Link key={idx} href="#" className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-white border border-white/10 transition-all hover:scale-110 hover:shadow-xl ${color}`}>
                 <Icon size={24} />
               </Link>
             ))}
          </div>
        </div>

        {/* --- BOTTOM LEGAL BAR --- */}
        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div className="flex flex-col gap-1">
            <p className="text-[11px] font-bold text-slate-600 uppercase tracking-[4px]">
              © 2026 <span className="text-white">New Crescent Public School</span>. Believe, Achieve, Succeed.
            </p>
            <p className="text-[9px] font-medium text-slate-700 uppercase tracking-[2px]">An Initiative for excellence in Pinangwan.</p>
          </div>
          <div className="flex gap-10">
            <Link href="#" className="text-[10px] font-black text-slate-500 uppercase tracking-widest hover:text-[#ECFF1C] transition-colors italic">Privacy Policy</Link>
            <Link href="#" className="text-[10px] font-black text-slate-500 uppercase tracking-widest hover:text-[#ECFF1C] transition-colors italic">Terms of Use</Link>
            <Link href="#" className="text-[10px] font-black text-slate-500 uppercase tracking-widest hover:text-[#ECFF1C] transition-colors italic">Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
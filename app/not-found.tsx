"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, GraduationCap, Search, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function NotFound() {
  const pathname = usePathname();
  const [suggestion, setSuggestion] = useState<{ name: string; link: string } | null>(null);

  useEffect(() => {
    // 1. URL se keyword nikalna (e.g., /admisssions -> admissions)
    const path = pathname.split("/").pop() || "";
    
    // 2. Aapke folder structure ke hisaab se pages ki list
    const pages = [
      { name: "Admissions", link: "/admissions", keywords: ["adm", "fees", "apply", "form"] },
      { name: "Gallery", link: "/gallery", keywords: ["photo", "video", "event", "pic"] },
      { name: "Contact Us", link: "/contact", keywords: ["call", "phone", "map", "address", "location"] },
      { name: "Campus Life", link: "/campus", keywords: ["ground", "hostel", "lab", "building"] },
      { name: "News & Events", link: "/news", keywords: ["update", "holiday", "result"] }
    ];

    // 3. Simple matching logic
    const found = pages.find(p => 
      p.keywords.some(k => path.toLowerCase().includes(k)) || 
      path.toLowerCase().includes(p.name.toLowerCase())
    );

    if (found) setSuggestion(found);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 py-24 sm:py-32 lg:px-8 relative overflow-hidden">
      <div className="text-center relative z-10">
        <p className="text-[120px] font-black text-[#621CFF] leading-none opacity-10 select-none">404</p>
        
        <h1 className="mt-[-40px] text-4xl font-black tracking-tight text-[#150447] sm:text-6xl uppercase italic">
          Path Not Found
        </h1>

        {/* --- SMART SUGGESTION BOX --- */}
        {suggestion ? (
          <div className="mt-8 p-6 bg-[#621CFF]/5 border-2 border-dashed border-[#621CFF]/20 rounded-[32px] max-w-md mx-auto animate-bounce">
            <div className="flex items-center justify-center gap-3 text-[#621CFF] mb-2">
              <Search size={20} strokeWidth={3} />
              <span className="font-black uppercase text-[10px] tracking-widest">Kya aap ye dhoond rahe hain?</span>
            </div>
            <Link href={suggestion.link} className="flex items-center justify-between bg-white p-4 rounded-2xl shadow-xl group">
              <span className="font-black text-[#150447] text-xl">{suggestion.name}</span>
              <div className="w-10 h-10 bg-[#ECFF1C] rounded-xl flex items-center justify-center group-hover:translate-x-2 transition-transform">
                <ArrowRight size={20} className="text-[#150447]" />
              </div>
            </Link>
          </div>
        ) : (
          <p className="mt-6 text-lg leading-7 text-slate-500 font-bold max-w-lg mx-auto">
            Ye page hamari directory mein nahi hai. Lekin chinta mat kijiye, rasta dhoondna aasan hai.
          </p>
        )}

        {/* --- NAVIGATION BUTTONS --- */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link href="/" className="group flex items-center gap-3 bg-[#150447] text-white px-8 py-4 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-[#621CFF] transition-all shadow-2xl active:scale-95">
            <Home size={18} /> Back to Home
          </Link>
          <Link href="/admissions" className="group flex items-center gap-3 bg-[#ECFF1C] text-[#150447] px-8 py-4 rounded-2xl font-black uppercase text-xs tracking-widest hover:shadow-xl transition-all active:scale-95">
            <GraduationCap size={18} /> Apply Now
          </Link>
        </div>
      </div>

      {/* Decorative Mesh */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#621CFF]/5 blur-[120px] rounded-full" />
      </div>
    </div>
  );
}
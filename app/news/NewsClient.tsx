"use client";
import React from "react";
import { Newspaper, Calendar, ArrowRight, Sparkles, TrendingUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function NewsClient() {
  const blogs = [
    {
      id: 1,
      title: "Admissions Open for Session 2026-27",
      date: "Feb 15, 2026",
      category: "Admissions",
      desc: "NCPS Pinangwan ne naye session ke liye dakhla (registration) shuru kar diya hai. Seat confirm karne ke liye online apply karein.",
      image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Annual Sports Meet Winners 2025",
      date: "Jan 20, 2026",
      category: "Sports",
      desc: "Humare bacchon ne district level par Cricket aur Athletics mein gold medals jeete hain. Proud moment for Mewat!",
      image: "https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "New Digital Lab Inauguration",
      date: "Jan 05, 2026",
      category: "Campus",
      desc: "Latest AI-ready computer lab ab students ke liye open hai. Coding aur digital literacy classes shuru ho chuki hain.",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <main className="pt-40 pb-20 bg-white min-h-screen selection:bg-[#621CFF]/20 overflow-x-hidden">
      
      {/* --- FINTECH GRADIENTS --- */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#621CFF]/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#ECFF1C]/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        
        {/* --- HEADER --- */}
        <div className="max-w-4xl mb-24 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#150447] text-white rounded-full shadow-2xl">
            <TrendingUp size={14} className="text-[#ECFF1C]" />
            <span className="text-[10px] font-black uppercase tracking-[3px]">NCPS Insights & Updates</span>
          </div>
          <h1 className="text-6xl md:text-[120px] font-black text-[#150447] tracking-tighter uppercase leading-[0.85]">
            NEWS & <br /> <span className="text-[#621CFF]">ARTICLES.</span>
          </h1>
          <p className="text-xl text-slate-500 font-bold max-w-xl border-l-8 border-[#ECFF1C] pl-6 py-2 uppercase italic">
            School ki har badi khabar, achievements aur education updates—ab sab kuch digital platform par.
          </p>
        </div>

        {/* --- NEWS GRID --- */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {blogs.map((post, i) => (
            <div key={i} className="group bg-white rounded-[40px] border border-slate-100 overflow-hidden hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] transition-all duration-700">
               <div className="relative h-64 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                  />
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black text-[#621CFF] uppercase tracking-widest shadow-xl">
                    {post.category}
                  </div>
               </div>

               <div className="p-10 space-y-6">
                  <div className="flex items-center gap-3 text-slate-400 font-bold text-[10px] uppercase tracking-widest">
                    <Calendar size={14} /> {post.date}
                  </div>
                  <h3 className="text-2xl font-black text-[#150447] tracking-tighter uppercase leading-tight group-hover:text-[#621CFF] transition-colors italic">
                    {post.title}
                  </h3>
                  <p className="text-slate-500 font-bold text-sm leading-relaxed">
                    {post.desc}
                  </p>
                  <Link href={`/news/${post.id}`} className="inline-flex items-center gap-3 text-[#150447] font-black text-[11px] uppercase tracking-[3px] group/btn">
                    Read Article <ArrowRight size={16} className="group-hover/btn:translate-x-2 transition-transform" />
                  </Link>
               </div>
            </div>
          ))}
        </div>

        {/* --- NEWSLETTER SECTION --- */}
        <div className="bg-[#150447] rounded-[60px] p-10 md:p-20 text-center relative overflow-hidden group shadow-2xl">
           <div className="relative z-10 space-y-10">
              <Sparkles className="mx-auto text-[#ECFF1C] animate-pulse" size={48} />
              <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase italic leading-none">
                Subscribe to Our <br /> <span className="text-[#ECFF1C]">Weekly Journal.</span>
              </h2>
              <div className="max-w-2xl mx-auto flex flex-col md:flex-row gap-4">
                 <input type="email" placeholder="Your Email Address" className="flex-1 bg-white/10 border-2 border-white/10 rounded-full px-10 py-6 text-white font-bold outline-none focus:border-[#621CFF] transition-all uppercase text-xs" />
                 <button className="bg-[#621CFF] text-white px-12 py-6 rounded-full font-black uppercase tracking-[4px] hover:bg-[#ECFF1C] hover:text-[#150447] transition-all active:scale-95 shadow-xl">
                    Subscribe
                 </button>
              </div>
              <p className="text-indigo-200 text-[10px] font-black uppercase tracking-[4px]">2,500+ Parents already reading regular updates.</p>
           </div>
        </div>
      </div>
    </main>
  );
}
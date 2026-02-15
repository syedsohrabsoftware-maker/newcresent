"use client";
import { useState, useEffect } from "react";
import { Star, Quote, Heart, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const reviews = [
    {
      name: "Mohd. Sahil",
      role: "Parent (Class 8th)",
      msg: "Pinangwan mein aisa school pehle kabhi nahi dekha. Mere bacchon ki English aur confidence ab pehle se bahut behtar hai.",
      stars: 5,
      img: "/p1.jpg"
    },
    {
      name: "Rahul Sharma",
      role: "Parent (Class 5th)",
      msg: "School ki bus facility aur safety ekdum top-level hai. Teachers har bacche par barabar dhyan dete hain. Best school!",
      stars: 5,
      img: "/p2.jpg"
    },
    {
      name: "Abdul Karim",
      role: "Parent (Class 10th)",
      msg: "NCPS ka environment aur discipline kaafi shandaar hai. Board results hamesha acche aate hain, hum pure bharose ke sath yahan bhejte hain.",
      stars: 5,
      img: "/p3.jpg"
    }
  ];

  // Auto Slide Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  return (
    <section className="py-24 px-6 md:px-16 bg-white relative overflow-hidden">
      
      {/* Subtle SaaS Background Decor */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#621CFF]/5 blur-[120px] -z-0"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#ECFF1C]/10 blur-[100px] -z-0 opacity-50"></div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#150447]/5 rounded-full border border-[#150447]/10 shadow-sm">
            <Heart size={14} className="text-[#621CFF]" />
            <span className="text-[10px] font-black text-[#150447] uppercase tracking-[3px]">Parent's Voices</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-[#150447] tracking-tighter uppercase leading-[0.9]">
            TRUSTED BY <br /> <span className="text-[#621CFF]">OUR PARENTS.</span>
          </h2>
        </div>

        {/* --- MOBILE & DESKTOP AUTO-SLIDER --- */}
        <div className="relative max-w-4xl mx-auto h-[450px] md:h-[400px] flex items-center">
          {reviews.map((r, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
                i === current ? "opacity-100 scale-100 translate-x-0" : "opacity-0 scale-95 translate-x-12 pointer-events-none"
              }`}
            >
              <div className="bg-white p-8 md:p-14 rounded-[48px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] border border-slate-100 flex flex-col md:flex-row gap-8 items-center md:items-start relative overflow-hidden">
                
                {/* Large Subtle Quote Icon */}
                <Quote className="absolute -top-4 -right-4 text-slate-50 opacity-50" size={150} />

                {/* Parent Image (Fintech Style Circle) */}
                <div className="relative shrink-0">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-[32px] bg-slate-100 border-4 border-white shadow-xl overflow-hidden rotate-3 group-hover:rotate-0 transition-transform">
                     {/* <Image src={r.img} fill className="object-cover" /> */}
                     <div className="w-full h-full flex items-center justify-center bg-[#621CFF] text-white text-3xl font-black">
                        {r.name[0]}
                     </div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-[#ECFF1C] p-2 rounded-xl shadow-lg border-2 border-white">
                    <CheckCircle size={16} className="text-[#150447]" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col space-y-4 text-center md:text-left">
                  <div className="flex justify-center md:justify-start gap-1">
                    {[...Array(r.stars)].map((_, idx) => (
                      <Star key={idx} size={18} fill="#ECFF1C" className="text-[#ECFF1C]" />
                    ))}
                  </div>
                  <p className="text-xl md:text-2xl font-bold text-[#150447] leading-relaxed tracking-tight italic">
                    "{r.msg}"
                  </p>
                  <div>
                    <h4 className="text-lg font-black text-[#150447] uppercase">{r.name}</h4>
                    <p className="text-[10px] font-bold text-[#621CFF] uppercase tracking-[3px]">{r.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- NAVIGATION CONTROLS --- */}
        <div className="flex justify-center gap-6 mt-12">
           <button 
             onClick={() => setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length)}
             className="w-14 h-14 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-[#150447] hover:bg-[#621CFF] hover:text-white transition-all shadow-sm active:scale-95"
           >
             <ChevronLeft size={24} />
           </button>
           
           {/* Progress Dots */}
           <div className="flex items-center gap-2">
             {reviews.map((_, i) => (
               <div 
                 key={i} 
                 className={`transition-all duration-500 rounded-full ${i === current ? 'w-8 h-2 bg-[#621CFF]' : 'w-2 h-2 bg-slate-200'}`}
               ></div>
             ))}
           </div>

           <button 
             onClick={() => setCurrent((prev) => (prev + 1) % reviews.length)}
             className="w-14 h-14 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-[#150447] hover:bg-[#621CFF] hover:text-white transition-all shadow-sm active:scale-95"
           >
             <ChevronRight size={24} />
           </button>
        </div>

        {/* Trust Badge Bar (Simple & Clean) */}
        <div className="mt-20 pt-10 border-t border-slate-100 flex flex-wrap justify-center gap-8 md:gap-16">
           {['ISO CERTIFIED', 'CBSE PATTERN', 'SMART CAMPUS', 'BEST DISCIPLINE'].map((badge) => (
             <div key={badge} className="flex items-center gap-2 opacity-30 hover:opacity-100 transition-opacity cursor-default">
               <div className="w-1.5 h-1.5 rounded-full bg-[#150447]"></div>
               <span className="text-[10px] font-black text-[#150447] uppercase tracking-[3px]">{badge}</span>
             </div>
           ))}
        </div>

      </div>
    </section>
  );
}
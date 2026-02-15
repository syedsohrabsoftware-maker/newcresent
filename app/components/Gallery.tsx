"use client";
import Image from "next/image";
import { LayoutGrid, Camera, ArrowUpRight, Plus } from "lucide-react";

export default function Gallery() {
  const images = [
    { src: "/g1.jpg", size: "col-span-2 row-span-2", label: "Annual Function" },
    { src: "/g2.jpg", size: "col-span-1 row-span-1", label: "Science Fair" },
    { src: "/g3.jpg", size: "col-span-1 row-span-2", label: "Sports Day" },
    { src: "/g4.jpg", size: "col-span-1 row-span-1", label: "Smart Class" },
    { src: "/g5.jpg", size: "col-span-2 row-span-1", label: "School Campus" },
  ];

  return (
    <section className="py-24 px-6 md:px-16 bg-white">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#ECFF1C] rounded-full border border-[#150447]/10">
              <Camera size={14} className="text-[#150447]" />
              <span className="text-[10px] font-black text-[#150447] uppercase tracking-[2px]">Our Memories</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-[#150447] tracking-tighter uppercase leading-[0.9]">
              SCHOOL <br /> <span className="text-[#621CFF]">GALLERY.</span>
            </h2>
          </div>
          <p className="max-w-xs text-slate-500 font-bold text-sm uppercase tracking-wider text-right hidden md:block">
            Ek nazar humare bacchon ki kamyabi aur masti par.
          </p>
        </div>

        {/* --- MODERN MASONRY GRID --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[250px] gap-4 md:gap-6">
          {images.map((img, i) => (
            <div 
              key={i} 
              className={`relative group overflow-hidden rounded-[32px] md:rounded-[48px] bg-slate-100 border-4 border-white shadow-lg transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 ${img.size}`}
            >
              {/* Image Rendering */}
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[#150447]/20 group-hover:bg-[#150447]/40 transition-all duration-500 z-10"></div>
                {/* Image Component */}
                <Image 
                  src={img.src} 
                  alt={img.label} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-1000"
                />
              </div>

              {/* Hover Content */}
              <div className="absolute inset-0 z-20 p-6 md:p-10 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="bg-white/10 backdrop-blur-xl p-4 md:p-6 rounded-[24px] md:rounded-[32px] border border-white/20 flex items-center justify-between">
                  <div>
                    <p className="text-[8px] md:text-[10px] font-black text-[#ECFF1C] uppercase tracking-[3px] mb-1">Crescent Life</p>
                    <h4 className="text-white font-black text-sm md:text-xl tracking-tighter uppercase">{img.label}</h4>
                  </div>
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#ECFF1C] rounded-full flex items-center justify-center text-[#150447] rotate-[-45deg] group-hover:rotate-0 transition-transform duration-500">
                    <Plus size={24} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 flex justify-center">
           <button className="group flex items-center gap-4 bg-[#150447] text-white px-12 py-6 rounded-3xl font-black text-xs uppercase tracking-[4px] shadow-2xl hover:bg-[#621CFF] transition-all">
              View All Photos <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
           </button>
        </div>

      </div>
    </section>
  );
}
"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Target, 
  Eye, 
  Award, 
  Users, 
  Zap, 
  ShieldCheck, 
  Star,
  GraduationCap,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const stats = [
  { label: "Years of Excellence", value: "25+", icon: Award, color: "text-blue-600" },
  { label: "Expert Educators", value: "50+", icon: Users, color: "text-purple-600" },
  { label: "Successful Students", value: "5000+", icon: GraduationCap, color: "text-emerald-600" },
  { label: "Modern Labs", value: "10+", icon: Zap, color: "text-orange-600" },
];

export default function AboutPage() {
  return (
    <div className="bg-white text-slate-900 min-h-screen font-sans selection:bg-blue-100">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-slate-50/50">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 skew-x-12 translate-x-20 -z-10"></div>
        
        <div className="max-w-[1440px] mx-auto px-8 md:px-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <span className="inline-block px-4 py-2 bg-blue-50 text-blue-700 font-bold uppercase tracking-[3px] text-[10px] rounded-full">
                Est. 2001 • Pinangwan's Pride
              </span>
              <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-[0.85] text-slate-900">
                Building <span className="text-blue-600">Legacy</span> Through <span className="italic font-serif text-slate-400">Knowledge.</span>
              </h1>
              <p className="text-slate-500 text-xl leading-relaxed max-w-xl font-medium">
                New Crescent Public School provides a transformative environment where academic rigor meets character development.
              </p>
              <div className="flex gap-4">
                <button className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-blue-600 transition-colors shadow-lg">
                  Explore Programs <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[60px] bg-slate-200 overflow-hidden shadow-2xl relative border-8 border-white">
                 <Image 
                   src="/building1.jpg" // Replace with your image
                   alt="School Building"
                   fill
                   className="object-cover"
                 />
              </div>
              {/* Decorative Card */}
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl border border-slate-100 hidden md:block">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                       <CheckCircle2 size={24} />
                    </div>
                    <div>
                       <p className="text-xs font-bold text-slate-400 uppercase">Affiliation</p>
                       <p className="text-lg font-black text-slate-900">CBSE Accredited</p>
                    </div>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- STATS BAR --- */}
      <section className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-8 md:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="group cursor-default">
                <stat.icon className={`${stat.color} mb-4 group-hover:scale-110 transition-transform`} size={32} />
                <h3 className="text-5xl font-black text-slate-900 tracking-tighter">{stat.value}</h3>
                <p className="text-slate-400 uppercase tracking-widest text-[11px] font-bold mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- VISION & MISSION (MODERN WHITE CARDS) --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-[1440px] mx-auto px-8 md:px-16 grid lg:grid-cols-2 gap-12">
          
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-12 rounded-[40px] bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all"
          >
            <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-200">
              <Target className="text-white" size={28} />
            </div>
            <h2 className="text-4xl font-black mb-6 text-slate-900">Our Mission</h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              To empower every student with the tools of technology, the strength of character, and the curiosity of a lifelong learner. We aim to bridge the gap between traditional values and modern innovation.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="p-12 rounded-[40px] bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all"
          >
            <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-slate-200">
              <Eye className="text-white" size={28} />
            </div>
            <h2 className="text-4xl font-black mb-6 text-slate-900">Our Vision</h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              To be the benchmark of educational excellence in Haryana, nurturing global citizens who are prepared to tackle the challenges of the 21st century with confidence and integrity.
            </p>
          </motion.div>

        </div>
      </section>

      {/* --- CORE VALUES --- */}
      <section className="py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-8 md:px-16 flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-5xl font-black text-slate-900 tracking-tight mb-6 uppercase">Why Families Trust <span className="text-blue-600">New Crescent</span></h2>
            <p className="text-slate-500 text-lg font-medium">We don't just teach syllabus; we build personalities that lead industries and communities.</p>
          </div>
          <button className="text-blue-600 font-bold flex items-center gap-2 group border-b-2 border-blue-600 pb-1">
            Learn more about our values <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        
        <div className="max-w-[1440px] mx-auto px-8 md:px-16 grid md:grid-cols-3 gap-10">
          {[
            { title: "Smart Learning", desc: "Interactive digital classrooms and high-tech labs for hands-on experience.", icon: Zap, bg: "bg-orange-50", text: "text-orange-600" },
            { title: "Safe Campus", desc: "100% CCTV coverage and strictly vetted staff for a secure environment.", icon: ShieldCheck, bg: "bg-blue-50", text: "text-blue-600" },
            { title: "Excellence", desc: "Academic board results that consistently rank among the top in the district.", icon: Star, bg: "bg-emerald-50", text: "text-emerald-600" },
          ].map((val, i) => (
            <div key={i} className="group">
              <div className={`w-16 h-16 ${val.bg} ${val.text} rounded-3xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform`}>
                <val.icon size={30} />
              </div>
              <h4 className="text-2xl font-black mb-4 text-slate-900">{val.title}</h4>
              <p className="text-slate-500 leading-relaxed font-medium">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- PREMIUM CTA --- */}
      <section className="pb-32 px-8">
        <div className="max-w-[1200px] mx-auto rounded-[60px] bg-slate-900 p-16 text-center relative overflow-hidden shadow-2xl">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ 
            backgroundImage: `radial-gradient(#fff 1px, transparent 1px)`,
            backgroundSize: '30px 30px' 
          }}></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">INVEST IN YOUR CHILD'S FUTURE</h2>
            <p className="text-slate-400 mb-12 text-lg max-w-2xl mx-auto font-medium">
              Join a community of achievers. Admissions are currently open for the academic year 2026-27.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-blue-500 transition-all shadow-xl shadow-blue-900/20">
                Apply for Admission
              </button>
              <button className="bg-white/10 text-white border border-white/20 px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-white/20 transition-all backdrop-blur-md">
                Contact Office
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
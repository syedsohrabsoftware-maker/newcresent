"use client";
import React, { useState } from "react";
import { Send, User, Phone, GraduationCap, MapPin, ShieldCheck, Sparkles, ArrowLeft, MessageCircle, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function ApplyPage() {
  const [loading, setLoading] = useState(false);
  const whatsappNumber = "919813020259";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // 1. WhatsApp Message Format
    const message = `*New Admission Inquiry - NCPS*%0A
--------------------------%0A
*Student:* ${data.Student_Name}%0A
*Class:* ${data.Class_Applying}%0A
*Parent:* ${data.Parent_Name}%0A
*Phone:* ${data.Phone}%0A
*Address:* ${data.Address}%0A
--------------------------%0A
Sent via Website Portal`;

    // 2. Submit to Web3Forms (Email)
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        // 3. Open WhatsApp after successful email trigger
        window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
        alert("Registration Data Sent Successfully!");
      }
    } catch (error) {
      console.error("Error submitting form", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="pt-32 pb-20 bg-white min-h-screen selection:bg-[#621CFF]/20 overflow-x-hidden">
      
      {/* --- FINTECH AMBIENCE DECOR --- */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#621CFF]/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#ECFF1C]/10 blur-[100px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
      </div>

      <div className="max-w-[1100px] mx-auto px-6 relative">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col items-center text-center mb-16 space-y-6">
          <Link href="/admissions" className="group flex items-center gap-2 text-slate-400 font-black text-[10px] uppercase tracking-[4px] hover:text-[#621CFF] transition-all">
            <div className="p-2 rounded-full bg-slate-50 group-hover:bg-[#621CFF]/10 transition-colors">
              <ArrowLeft size={14} /> 
            </div>
            Back to Portal
          </Link>
          
          <h1 className="text-6xl md:text-[100px] font-black text-[#150447] tracking-tighter uppercase leading-[0.8] animate-in fade-in slide-in-from-top-10 duration-1000">
            SECURE <br /> <span className="text-[#621CFF] italic">ADMISSION.</span>
          </h1>
          
          <p className="text-slate-500 font-bold text-sm md:text-lg max-w-xl mx-auto uppercase tracking-tighter leading-relaxed">
            Paperless Registration Session 2026-27. <br/>
            <span className="text-[#150447]">Email + WhatsApp Sync Enabled</span>
          </p>
        </div>

        {/* --- THE FORM CONTAINER --- */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Trust Badges */}
          <div className="lg:col-span-4 space-y-4 hidden lg:block">
            {[
              { title: "Instant Review", desc: "Get priority response within 2 hours.", icon: Sparkles },
              { title: "Direct Sync", desc: "Data sent directly to Principal desk.", icon: MessageCircle },
              { title: "Safe & Secure", desc: "End-to-end encrypted registration.", icon: ShieldCheck }
            ].map((item, idx) => (
              <div key={idx} className="p-8 bg-slate-50 rounded-[32px] border border-slate-100 group hover:bg-white hover:shadow-xl transition-all duration-500">
                <item.icon className="text-[#621CFF] mb-4 group-hover:scale-110 transition-transform" size={28} />
                <h4 className="font-black text-xs uppercase tracking-widest text-[#150447] mb-1">{item.title}</h4>
                <p className="text-[11px] font-bold text-slate-400 uppercase leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Right Side: The Form */}
          <div className="lg:col-span-8 bg-white rounded-[48px] p-8 md:p-14 border border-slate-100 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.08)] relative overflow-hidden group">
            
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#ECFF1C]/20 blur-3xl rounded-full" />
            
            <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
              {/* Web3Forms Access Key */}
              <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Student Info */}
                <div className="md:col-span-2 flex items-center gap-3 border-b border-slate-100 pb-4">
                  <GraduationCap className="text-[#621CFF]" size={20} />
                  <span className="font-black text-[10px] uppercase tracking-[4px] text-[#150447]">Student Profile</span>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[3px] text-slate-400 ml-4">Full Name</label>
                  <div className="relative group/input">
                    <User className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within/input:text-[#621CFF] transition-colors" size={18} />
                    <input required name="Student_Name" type="text" placeholder="Student Name" className="w-full bg-slate-50 border-2 border-transparent focus:border-[#621CFF] focus:bg-white rounded-[24px] px-14 py-5 outline-none transition-all font-bold text-[#150447]" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[3px] text-slate-400 ml-4">Applying Class</label>
                  <select name="Class_Applying" className="w-full bg-slate-50 border-2 border-transparent focus:border-[#621CFF] focus:bg-white rounded-[24px] px-8 py-5 outline-none transition-all font-bold text-[#150447] appearance-none">
                    <option>Nursery - UKG</option>
                    <option>Class 1st - 5th</option>
                    <option>Class 6th - 8th</option>
                    <option>Class 9th - 12th</option>
                  </select>
                </div>

                {/* Parent Info */}
                <div className="md:col-span-2 flex items-center gap-3 border-b border-slate-100 pb-4 mt-4">
                  <User className="text-[#621CFF]" size={20} />
                  <span className="font-black text-[10px] uppercase tracking-[4px] text-[#150447]">Guardian Details</span>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[3px] text-slate-400 ml-4">Parent Name</label>
                  <input required name="Parent_Name" type="text" placeholder="Father/Mother Name" className="w-full bg-slate-50 border-2 border-transparent focus:border-[#621CFF] focus:bg-white rounded-[24px] px-8 py-5 outline-none transition-all font-bold text-[#150447]" />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[3px] text-slate-400 ml-4">Mobile Number</label>
                  <div className="relative group/input">
                    <Phone className="absolute left-6 top-1/2 -translate-y-1/2 text-[#25D366]" size={18} />
                    <input required name="Phone" type="tel" placeholder="+91" className="w-full bg-slate-50 border-2 border-transparent focus:border-[#621CFF] focus:bg-white rounded-[24px] px-14 py-5 outline-none transition-all font-bold text-[#150447]" />
                  </div>
                </div>

                <div className="md:col-span-2 space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[3px] text-slate-400 ml-4">Home Address</label>
                  <div className="relative group/input">
                    <MapPin className="absolute left-6 top-6 text-red-400" size={18} />
                    <textarea required name="Address" rows={3} placeholder="Full Address / Village Name" className="w-full bg-slate-50 border-2 border-transparent focus:border-[#621CFF] focus:bg-white rounded-[24px] px-14 py-5 outline-none transition-all font-bold text-[#150447] resize-none"></textarea>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button 
                  disabled={loading}
                  type="submit"
                  className="w-full group relative bg-[#150447] text-white py-6 rounded-[30px] font-black uppercase tracking-[5px] shadow-2xl hover:bg-[#621CFF] transition-all flex items-center justify-center gap-4 overflow-hidden disabled:opacity-70"
                >
                  <span className="relative z-10">{loading ? "Processing..." : "Register Now"}</span>
                  <Send size={20} className="relative z-10 group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                </button>
                
                <p className="text-center mt-6 text-[9px] font-bold text-slate-400 uppercase tracking-widest flex items-center justify-center gap-2">
                  <CheckCircle2 size={12} className="text-[#25D366]" /> 
                  Data will be sent to Email & WhatsApp
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </main>
  );
}
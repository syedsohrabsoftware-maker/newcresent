"use client";
import React from "react";
import { 
  Phone, Mail, MapPin, Send, MessageSquare, 
  Facebook, Instagram, Youtube, ArrowUpRight,
  ArrowRight, BellRing, ShieldCheck, Globe, 
  Zap, Headset, Sparkles
} from "lucide-react";

export default function ContactPage() {
  return (
    <main className="pt-36 pb-20 bg-white min-h-screen selection:bg-[#621CFF]/20 overflow-x-hidden">
      
      {/* --- PREMIUM DECORATIVE MESH --- */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-10%] w-[700px] h-[700px] bg-[#621CFF]/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#ECFF1C]/10 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        
        {/* --- HEADER SECTION --- */}
        <div className="relative mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-full shadow-2xl mb-8">
            <Sparkles size={14} className="text-[#ECFF1C]" />
            <span className="text-[10px] font-black uppercase tracking-[3px]">Next-Gen Support System</span>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-10 items-end">
            <h1 className="text-6xl md:text-[110px] font-black text-[#150447] tracking-tighter uppercase leading-[0.8]">
              LET'S <br /> <span className="text-[#621CFF] italic">CONNECT.</span>
            </h1>
            <p className="text-slate-500 font-bold text-lg md:text-2xl max-w-md border-l-4 border-[#ECFF1C] pl-6 py-2 leading-tight">
              Pinangwan ke sabse modern school se judiye. Hum har sawal ka jawab dene ke liye tayaar hain.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
          
          {/* --- LEFT: INFO CARDS --- */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Live Hotline Card */}
            <div className="group relative bg-[#150447] p-10 rounded-[48px] text-white overflow-hidden transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(21,4,71,0.4)]">
               <div className="absolute inset-0 bg-gradient-to-br from-[#621CFF]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
               <div className="relative z-10 flex justify-between items-start">
                  <div className="w-16 h-16 rounded-[24px] bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-[#ECFF1C]">
                    <Headset size={32} />
                  </div>
                  <div className="px-4 py-1.5 rounded-full bg-[#ECFF1C] text-[#150447] text-[9px] font-black uppercase tracking-widest">Online Now</div>
               </div>
               <div className="relative z-10 mt-12 space-y-2">
                  <h3 className="text-3xl font-black uppercase tracking-tighter italic">Live Hotline</h3>
                  <a href="tel:+919813020259" className="text-3xl md:text-4xl font-black text-white block hover:text-[#ECFF1C] transition-colors tracking-tighter">
                     +91 98130 20259
                  </a>
               </div>
            </div>

            {/* Sub Info Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
               <div className="bg-slate-50 p-8 rounded-[40px] border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-500 group text-center md:text-left">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#621CFF] mb-6 group-hover:rotate-12 transition-transform mx-auto md:mx-0">
                     <Mail size={22} />
                  </div>
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Official Email</h4>
                  <p className="text-sm font-black text-[#150447] break-all">info@newcrescent.edu</p>
               </div>
               <div className="bg-slate-50 p-8 rounded-[40px] border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-500 group text-center md:text-left">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 transition-transform mx-auto md:mx-0">
                     <MapPin size={22} />
                  </div>
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Campus Location</h4>
                  <p className="text-sm font-black text-[#150447]">Sikrawa Road,Vilage Rehpua Pinangwan-122508</p>
               </div>
            </div>

            {/* Social Hub */}
            <div className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm flex items-center justify-between">
               <span className="text-[10px] font-black text-[#150447] uppercase tracking-[3px]">Social Hub</span>
               <div className="flex gap-4">
                  {[Facebook, Instagram, Youtube].map((Icon, i) => (
                    <button key={i} className="text-slate-400 hover:text-[#621CFF] hover:-translate-y-1 transition-all">
                      <Icon size={20} />
                    </button>
                  ))}
               </div>
            </div>
          </div>

          {/* --- RIGHT: FORM SECTION --- */}
          <div className="lg:col-span-7">
             <div className="bg-white rounded-[60px] p-8 md:p-14 border border-slate-100 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.06)] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#ECFF1C]/10 rounded-full blur-3xl" />
                
                <div className="relative z-10 mb-10">
                   <h3 className="text-3xl font-black text-[#150447] uppercase tracking-tighter italic flex items-center gap-3">
                      Digital Inquiry <Zap size={24} className="text-[#621CFF] fill-[#621CFF]" />
                   </h3>
                   <p className="text-slate-400 font-bold text-xs uppercase tracking-widest mt-2">Expect a response within 2 hours</p>
                </div>

                <form className="grid md:grid-cols-2 gap-8 relative z-10">
                   <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[3px] text-slate-400 ml-4">Student Name</label>
                      <input type="text" placeholder="Full Name" className="w-full bg-slate-50 border-2 border-transparent focus:border-[#621CFF] focus:bg-white rounded-3xl px-8 py-5 outline-none transition-all font-bold text-[#150447]" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[3px] text-slate-400 ml-4">Phone Number</label>
                      <input type="tel" placeholder="+91" className="w-full bg-slate-50 border-2 border-transparent focus:border-[#621CFF] focus:bg-white rounded-3xl px-8 py-5 outline-none transition-all font-bold text-[#150447]" />
                   </div>
                   <div className="md:col-span-2 space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[3px] text-slate-400 ml-4">Your Inquiry</label>
                      <textarea rows={4} placeholder="Type your message here..." className="w-full bg-slate-50 border-2 border-transparent focus:border-[#621CFF] focus:bg-white rounded-3xl px-8 py-5 outline-none transition-all font-bold text-[#150447] resize-none" />
                   </div>
                   <div className="md:col-span-2">
                      <button className="w-full group relative bg-[#621CFF] text-white py-6 rounded-3xl font-black uppercase tracking-[5px] shadow-2xl hover:bg-[#150447] transition-all flex items-center justify-center gap-4 overflow-hidden active:scale-95">
                         <span className="relative z-10">Send My Message</span>
                         <ArrowRight size={20} className="relative z-10 group-hover:translate-x-2 transition-transform" />
                         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                      </button>
                   </div>
                </form>
             </div>
          </div>
        </div>

        {/* --- MAP SECTION --- */}
        <div className="mt-24 relative group">
           <div className="absolute top-10 left-10 z-20 hidden md:block group-hover:-translate-y-2 transition-transform duration-500">
              <div className="bg-white/80 backdrop-blur-2xl p-8 rounded-[40px] border border-white shadow-2xl flex items-center gap-6">
                 <div className="w-16 h-16 bg-[#150447] rounded-3xl flex items-center justify-center text-[#ECFF1C] shadow-lg">
                    <Globe size={32} />
                 </div>
                 <div>
                    <h4 className="text-xl font-black text-[#150447] uppercase leading-none italic">NCPS Campus</h4>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-2">Sikrawa Road,Vilage Rehpua Pinangwan-122508</p>
                 </div>
              </div>
           </div>
           
           <div className="rounded-[60px] overflow-hidden h-[600px] border-[12px] border-slate-50 shadow-2xl relative">
              <iframe 
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d671.3267542786591!2d77.11102277175719!3d27.922645457045068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3972d728344107cd%3A0x93f9553fb1e8cb1c!2sNEW%20CRESCENT%20PUBLIC%20SCHOOL%20REHPUWA%20(NCPS)!5e1!3m2!1sen!2sin!4v1771616334052!5m2!1sen!2sin" 
  width="100%" 
  height="100%" 
  style={{ border: 0, minHeight: "350px" }} 
  allowFullScreen={true} 
  loading="lazy" 
  referrerPolicy="no-referrer-when-downgrade"
  title="NCPS Satellite Map"
/>
           </div>
        </div>

        {/* --- NEWSLETTER SECTION --- */}
        <div className="mt-24 bg-[#621CFF] rounded-[60px] p-8 md:p-20 text-white relative overflow-hidden group">
           <div className="absolute top-[-20%] right-[-10%] w-96 h-96 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />
           <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="max-w-xl text-center lg:text-left space-y-6">
                 <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                    <BellRing size={32} className="text-[#ECFF1C]" />
                 </div>
                 <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.85]">
                    JOIN THE <br /> <span className="text-[#ECFF1C]">COMMUNITY.</span>
                  </h2>
                 <p className="text-indigo-100 font-bold text-lg md:text-xl italic">Naye admissions aur events ki updates sabse pehle paayein.</p>
              </div>
              
              <div className="w-full max-w-md">
                 <div className="relative">
                   <input type="email" placeholder="Your Email" className="w-full bg-white/10 border-2 border-white/20 rounded-full px-10 py-7 focus:bg-white focus:text-[#150447] focus:outline-none transition-all font-bold placeholder:text-indigo-200 shadow-2xl" />
                   <button className="absolute right-3 top-3 bottom-3 bg-[#ECFF1C] text-[#150447] px-8 rounded-full font-black uppercase text-[10px] tracking-widest hover:bg-white transition-all shadow-xl">Subscribe</button>
                 </div>
                 <p className="mt-4 text-[10px] font-black uppercase tracking-widest text-indigo-200 text-center lg:text-left">2,500+ Parents Subscribed</p>
              </div>
           </div>
        </div>

      </div>
    </main>
  );
}
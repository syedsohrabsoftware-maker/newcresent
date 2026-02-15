"use client";
import { Send, Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-24 px-6 md:px-16 bg-slate-50">
      <div className="max-w-[1440px] mx-auto">
        <div className="bg-white rounded-[48px] overflow-hidden shadow-2xl border border-slate-100 flex flex-col lg:flex-row">
          
          {/* --- LEFT SIDE: INFO (Dark Theme) --- */}
          <div className="lg:w-1/3 bg-[#150447] p-10 md:p-16 text-white space-y-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#621CFF] rounded-full blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="space-y-4 relative z-10">
              <h2 className="text-4xl font-black tracking-tighter uppercase italic">Contact <span className="text-[#ECFF1C]">Us</span></h2>
              <p className="text-slate-400 font-bold text-xs uppercase tracking-widest">Get in touch for admissions 2026</p>
            </div>

            <div className="space-y-8 relative z-10">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#ECFF1C]">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Call Anytime</p>
                  <p className="text-lg font-bold">+91 98130 20259</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#621CFF]">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Office Hours</p>
                  <p className="text-lg font-bold">8:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* --- RIGHT SIDE: MODERN FORM --- */}
          <div className="lg:w-2/3 p-10 md:p-16 bg-white">
            <h3 className="text-2xl font-black text-[#150447] uppercase tracking-tighter mb-8 italic">Admission Inquiry Form</h3>
            
            <form className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Student Name</label>
                <input type="text" placeholder="Enter name" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#621CFF] transition-all font-bold text-slate-700" />
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Mobile Number</label>
                <input type="tel" placeholder="Enter phone number" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#621CFF] transition-all font-bold text-slate-700" />
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Select Class</label>
                <select className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#621CFF] transition-all font-bold text-slate-700 appearance-none">
                  <option>Nursery to 5th</option>
                  <option>6th to 8th</option>
                  <option>9th to 12th</option>
                </select>
              </div>

              <div className="md:col-span-2 pt-4">
                <button className="w-full bg-[#150447] text-white py-5 rounded-2xl font-black uppercase tracking-[4px] shadow-xl hover:bg-[#621CFF] transition-all flex items-center justify-center gap-4 group">
                  Send Message <Send size={18} className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
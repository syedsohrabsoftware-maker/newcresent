"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { X, User, Phone, GraduationCap, ArrowRight, ExternalLink } from "lucide-react";

export default function StudentInquiryPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsOpen(true); // Turant aayega
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    // 2 minute baad wapas
    setTimeout(() => {
      setIsOpen(true);
    }, 120000); 
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const phone = formData.get("phone");
    const className = formData.get("class");

    const whatsappNumber = "919813020259"; 
    const message = `Hello, mujhe admission/inquiry karni hai.%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Class:* ${className}`;
    
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
    setIsOpen(false);
  };

  if (!mounted || !isOpen) return null;

  const popupContent = (
    // Backdrop
    <div 
      className="fixed inset-0 flex items-center justify-center p-4 sm:p-6 transition-all duration-700 font-sans"
      style={{
        zIndex: 2147483647,
        backgroundColor: 'rgba(5, 2, 15, 0.85)',
        backdropFilter: 'blur(16px)',
      }}
    >
      
      {/* 🚨 YAHAN FIX KIYA HAI: Size ko Inline Style me dalkar lock kar diya hai 🚨 */}
      <div 
        className="relative group animate-in fade-in zoom-in-[0.98] duration-500 overflow-hidden"
        style={{
          width: '100%',
          maxWidth: '400px', // Form itna hi bada rahega, screen par failega nahi
          backgroundColor: '#0a051c', 
          borderRadius: '32px',
          padding: '32px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 0 0 1px rgba(98, 28, 255, 0.2), 0 30px 60px -15px rgba(0, 0, 0, 0.9), inset 0 1px 1px rgba(255, 255, 255, 0.1)',
          margin: '0 auto' // Center align karne ke liye
        }}
      >
        
        {/* Background Patterns */}
        <div className="absolute -top-10 -right-10 w-64 h-64 pointer-events-none z-0" style={{ opacity: 0.15 }}>
          <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" stroke="#ffffff" strokeWidth="1.5">
            <circle cx="100" cy="100" r="40" />
            <circle cx="100" cy="100" r="60" strokeDasharray="4 6" />
            <circle cx="100" cy="100" r="80" />
            <circle cx="100" cy="100" r="100" strokeDasharray="2 8" />
          </svg>
        </div>
        <div className="absolute -top-20 -right-20 w-56 h-56 bg-[#621CFF] blur-[80px] opacity-40 pointer-events-none z-0"></div>
        <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-[#ECFF1C] blur-[80px] opacity-10 pointer-events-none z-0"></div>

        {/* 🚨 YAHAN FIX KIYA HAI: Close Icon Position Right Side 🚨 */}
        <button
          onClick={handleClose}
          className="flex items-center justify-center rounded-full hover:bg-white/10 hover:text-white transition-all duration-300 active:scale-90 cursor-pointer shadow-sm"
          style={{
            position: 'absolute',
            top: '24px',
            right: '24px', // 100% Right side me aayega
            zIndex: 100,
            width: '32px',
            height: '32px',
            backgroundColor: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            color: 'rgba(255,255,255,0.6)'
          }}
          aria-label="Close"
        >
          <X size={16} strokeWidth={2.5} />
        </button>

        {/* Header Section */}
        <div className="relative z-10 mb-8 mt-1 pr-6">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full border border-[#ECFF1C]/30 bg-[#ECFF1C]/10 shadow-[0_0_20px_rgba(236,255,28,0.15)]">
            <div className="w-1.5 h-1.5 bg-[#ECFF1C] rounded-full animate-pulse"></div>
            <p className="text-[#ECFF1C] text-[9px] font-black uppercase tracking-[3px]">Session 2026-27</p>
          </div>
          
          <h2 className="text-white font-black text-3xl uppercase tracking-tighter italic leading-tight">
            Elite Admissions <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#621CFF] to-[#a87ffb]">Live Now</span>
          </h2>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="relative z-10 space-y-4">
          
          {/* NAME */}
          <div className="space-y-1.5">
            <label className="text-[9px] font-bold text-white/50 uppercase tracking-[2px] ml-1">Student Name</label>
            <div className="relative group/input">
              <div className="absolute top-1/2 -translate-y-1/2 left-4 text-white/40 group-focus-within/input:text-[#621CFF] transition-colors duration-300">
                <User size={16} strokeWidth={2} />
              </div>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter full name"
                className="w-full text-sm font-semibold focus:outline-none transition-all duration-300 focus:bg-white/[0.08]"
                style={{ 
                  backgroundColor: 'rgba(255,255,255,0.04)', 
                  border: '1px solid rgba(255,255,255,0.1)', 
                  color: 'white', 
                  borderRadius: '14px', 
                  padding: '14px 14px 14px 44px' 
                }}
              />
            </div>
          </div>

          {/* PHONE */}
          <div className="space-y-1.5">
            <label className="text-[9px] font-bold text-white/50 uppercase tracking-[2px] ml-1">WhatsApp Number</label>
            <div className="relative group/input">
              <div className="absolute top-1/2 -translate-y-1/2 left-4 text-white/40 group-focus-within/input:text-[#621CFF] transition-colors duration-300">
                <Phone size={16} strokeWidth={2} />
              </div>
              <input
                type="tel"
                name="phone"
                required
                placeholder="+91 00000 00000"
                className="w-full text-sm font-semibold focus:outline-none transition-all duration-300 focus:bg-white/[0.08]"
                style={{ 
                  backgroundColor: 'rgba(255,255,255,0.04)', 
                  border: '1px solid rgba(255,255,255,0.1)', 
                  color: 'white', 
                  borderRadius: '14px', 
                  padding: '14px 14px 14px 44px' 
                }}
              />
            </div>
          </div>

          {/* CLASS */}
          <div className="space-y-1.5">
            <label className="text-[9px] font-bold text-white/50 uppercase tracking-[2px] ml-1">Admission For Class</label>
            <div className="relative group/input">
              <div className="absolute top-1/2 -translate-y-1/2 left-4 text-white/40 group-focus-within/input:text-[#621CFF] transition-colors duration-300">
                <GraduationCap size={16} strokeWidth={2} />
              </div>
              <input
                type="text"
                name="class"
                required
                placeholder="e.g. 11th Science"
                className="w-full text-sm font-semibold focus:outline-none transition-all duration-300 focus:bg-white/[0.08]"
                style={{ 
                  backgroundColor: 'rgba(255,255,255,0.04)', 
                  border: '1px solid rgba(255,255,255,0.1)', 
                  color: 'white', 
                  borderRadius: '14px', 
                  padding: '14px 14px 14px 44px' 
                }}
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-6 font-black text-center flex items-center justify-center gap-2 active:scale-[0.97] uppercase tracking-[3px] text-[12px] transition-all duration-300 hover:brightness-110 group/btn cursor-pointer"
            style={{ 
              backgroundColor: '#ECFF1C', 
              color: '#08011c', 
              padding: '16px', 
              borderRadius: '14px', 
              boxShadow: '0 10px 25px -5px rgba(236,255,28,0.4)' 
            }}
          >
            Apply Digitally Now
            <div className="flex items-center justify-center transition-transform duration-300 group-hover/btn:translate-x-1 w-5 h-5 bg-[#08011c] rounded-full text-[#ECFF1C]">
              <ArrowRight size={12} strokeWidth={3} />
            </div>
          </button>
        </form>

        {/* Footer Link */}
        <div className="relative z-10 mt-6 pt-5 text-center" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <Link 
            href="https://schoolvuew.com/studentinryform" 
            target="_blank"
            className="text-[9px] font-bold uppercase tracking-[2px] transition-all flex items-center justify-center gap-1.5 hover:opacity-100 hover:text-[#ECFF1C] text-white/50"
          >
            Open Detailed Portal Link
            <ExternalLink size={12} strokeWidth={2.5} />
          </Link>
        </div>

      </div>
    </div>
  );

  return createPortal(popupContent, document.body);
}
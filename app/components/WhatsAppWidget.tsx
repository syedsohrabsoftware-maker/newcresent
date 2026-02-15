"use client";
import { X, Send, Sparkles, ArrowRight, CheckCheck, Loader2 } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const [chatHistory, setChatHistory] = useState([
    { role: 'bot', content: "Assalam-o-Alaikum! NCPS AI Assistant yahan hai. 👋", time: "Just Now" },
  ]);

  const whatsappNumber = "919813020259";

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory, isTyping]);

  const botBrain = [
    { id: "fees", label: "Fee Structure 💰", reply: "Monthly fees ₹1,200 - ₹2,500 tak hai. Detailed break-up office mein available hai." },
    { id: "timing", label: "School Timings 🕒", reply: "Summer: 7:30 AM - 1:30 PM | Winter: 8:30 AM - 2:30 PM." },
    { id: "admission", label: "New Admission 📝", reply: "Session 2026-27 ke admissions shuru hain. Seat book karne ke liye office sampark karein." },
    { id: "transport", label: "Bus Routes 🚌", reply: "Humari buses Pinangwan aur aas-paas ke 15+ gaon ko cover karti hain." },
    { id: "direct", label: "Direct WhatsApp 📱", reply: "Transferring you to help-desk...", isDirect: true }
  ];

  const handleAction = (item: any) => {
    setChatHistory(prev => [...prev, { role: 'user', content: item.label, time: "Seen" }]);
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setChatHistory(prev => [...prev, { role: 'bot', content: item.reply, time: "Just Now" }]);
      if (item.isDirect) {
        setTimeout(() => window.open(`https://wa.me/${whatsappNumber}?text=Hi, admission ki jankari chahiye.`, "_blank"), 1000);
      }
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[999] flex flex-col items-end gap-3 font-sans">
      
      {/* --- PREMIUM COMPACT CHAT WINDOW --- */}
      {isOpen && (
        <div className="w-[310px] md:w-[350px] bg-white/95 backdrop-blur-xl rounded-[32px] shadow-[0_25px_70px_-15px_rgba(0,0,0,0.3)] border border-white/20 overflow-hidden animate-in fade-in zoom-in duration-300 origin-bottom-right flex flex-col h-[420px]">
          
          {/* Header - Animated Gradient */}
          <div className="bg-gradient-to-r from-[#075E54] via-[#128C7E] to-[#075E54] bg-[length:200%_auto] animate-gradient p-4 text-white shrink-0">
            <div className="flex justify-between items-center">
               <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-white/20 rounded-xl flex items-center justify-center border border-white/30">
                    <Sparkles size={16} className="text-[#ECFF1C] animate-pulse" fill="#ECFF1C" />
                  </div>
                  <div>
                    <h4 className="font-black text-[10px] uppercase tracking-widest leading-none">NCPS Bot</h4>
                    <span className="text-[7px] font-black text-[#ECFF1C] uppercase tracking-tighter flex items-center gap-1">
                        <span className="w-1 h-1 bg-[#ECFF1C] rounded-full animate-ping"></span>
                        AI Live Support
                    </span>
                  </div>
               </div>
               <button onClick={() => setIsOpen(false)} className="bg-black/20 p-1.5 rounded-xl hover:bg-black/40 transition-colors">
                <X size={14} />
               </button>
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 p-4 bg-[#f0f2f5] overflow-y-auto space-y-3 relative custom-scrollbar">
             {chatHistory.map((chat, i) => (
               <div key={i} className={`flex ${chat.role === 'user' ? 'justify-end' : 'justify-start'} animate-in slide-in-from-bottom-2`}>
                  <div className={`max-w-[85%] p-3 rounded-[20px] shadow-sm text-[11px] font-bold leading-snug ${chat.role === 'user' ? 'bg-[#dcf8c6] text-slate-800 rounded-tr-none' : 'bg-white text-slate-700 rounded-tl-none'}`}>
                    {chat.content}
                    <div className="flex justify-end items-center gap-1 mt-1 opacity-40 italic text-[7px]">
                       {chat.time} {chat.role === 'user' && <CheckCheck size={10} className="text-blue-500" />}
                    </div>
                  </div>
               </div>
             ))}

             {isTyping && (
               <div className="flex justify-start">
                  <div className="bg-white px-3 py-2 rounded-xl rounded-tl-none shadow-sm flex items-center gap-2">
                     <div className="flex gap-1">
                        <span className="w-1 h-1 bg-slate-400 rounded-full animate-bounce"></span>
                        <span className="w-1 h-1 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                        <span className="w-1 h-1 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                     </div>
                  </div>
               </div>
             )}
             
             {/* Inquiry List */}
             {!isTyping && (
                <div className="space-y-1.5 pt-2">
                    <p className="text-[7px] font-black text-slate-400 uppercase tracking-widest text-center">Select an Inquiry</p>
                    {botBrain.map((item) => (
                        <button 
                            key={item.id}
                            onClick={() => handleAction(item)}
                            className="w-full text-left bg-white/70 backdrop-blur-sm hover:bg-[#075E54] hover:text-white border border-slate-200/50 p-2.5 rounded-[15px] text-[10px] font-black text-slate-600 transition-all flex justify-between items-center group active:scale-95 shadow-sm"
                        >
                            {item.label}
                            <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                        </button>
                    ))}
                </div>
             )}
             <div ref={chatEndRef} />
          </div>

          <div className="p-2 bg-white/80 border-t border-slate-50 text-center">
             <p className="text-[6px] font-black text-slate-300 uppercase tracking-[2px]">Crescent Digital Hub © 2026</p>
          </div>
        </div>
      )}

      {/* --- LUP-JHUP PULSING WHATSAPP BUTTON --- */}
      <div className="relative group">
        
        {/* Triple Pulse Rings (The "Lup-Jhup" Effect) */}
        {!isOpen && (
            <>
                <div className="absolute inset-0 rounded-2xl bg-[#25D366] animate-ping opacity-25 scale-125"></div>
                <div className="absolute inset-0 rounded-2xl bg-[#25D366] animate-ping opacity-15 scale-150 [animation-delay:0.5s]"></div>
            </>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center text-white shadow-2xl transition-all duration-500 active:scale-90 relative overflow-hidden ${isOpen ? 'bg-[#150447] rotate-180 rounded-full shadow-inner' : 'bg-gradient-to-tr from-[#128C7E] via-[#25D366] to-[#128C7E] bg-[length:200%_auto] animate-gradient hover:-translate-y-2'}`}
        >
          {isOpen ? <X size={24} /> : (
            <div className="relative z-10 drop-shadow-lg">
               <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </div>
          )}
          
          {/* Internal Shimmer */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]"></div>
        </button>
      </div>

      <style jsx global>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        .animate-gradient {
          animation: gradient 3s linear infinite;
        }
      `}</style>

    </div>
  );
}
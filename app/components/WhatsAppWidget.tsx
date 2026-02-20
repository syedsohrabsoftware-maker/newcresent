"use client";
import { X, CheckCheck, Sparkles, ChevronRight, CreditCard, Zap, TrendingUp, Landmark, Shield, PhoneCall, Phone, BookOpen, Clock, Users, Award, MapPin } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [showOptions, setShowOptions] = useState(true);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const [chatHistory, setChatHistory] = useState([
    { role: "bot", content: "Assalam-o-Alaikum! 👋 NCPS Support yahan hai. Admissions 2026-27 open hain. Kya help karoon?", time: "Now" },
  ]);

  const whatsappNumber = "919813020259";
  const callNumber = "+919813020259";

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory, isTyping]);

  const categories = [
    { id: "direct",    label: "Live Chat",   icon: <Zap size={11} />,   accent: "#25D366", reply: "Connecting to Help Desk... 🟢", isDirect: true },
    { id: "admission", label: "Admission",   icon: <TrendingUp size={11} />, accent: "#10B981", reply: "Admissions OPEN for Nursery to 12th! 🎓 Visit campus or call us." },
    { id: "fees",      label: "Fees",        icon: <CreditCard size={11} />, accent: "#7C3AED", reply: "Affordable fees starting from ₹500. Installments available. 📊" },
    { id: "transport", label: "Bus Route",   icon: <Landmark size={11} />, accent: "#0EA5E9", reply: "Buses cover Punhana, Pinangwan & 15+ villages. GPS tracked. 🚌" },
    { id: "timing",    label: "Timing",      icon: <Clock size={11} />,    accent: "#F59E0B", reply: "Summer: 7:30 AM - 1:30 PM. Winter: 8:30 AM - 2:30 PM. 🌤" },
    { id: "curriculum",label: "Board",       icon: <BookOpen size={11} />, accent: "#621CFF", reply: "Modern CBSE Pattern with Digital 3D Smart Classes. 📚" },
    { id: "staff",     label: "Teachers",    icon: <Users size={11} />,    accent: "#F43F5E", reply: "100% Expert & Trained Faculty from top institutes. 👩‍🏫" },
    { id: "safety",    label: "Security",    icon: <Shield size={11} />,   accent: "#64748B", reply: "24/7 CCTV, Biometric & Secure Campus in Nuh. 🔒" },
    { id: "location",  label: "Location",    icon: <MapPin size={11} />,   accent: "#34495E", reply: "Located in Punhana, Nuh (Mewat), Haryana. 📍" },
    { id: "achieve",   label: "Success",     icon: <Award size={11} />,    accent: "#D4AF37", reply: "Top-rated School in Mewat with 100% result records. 🏆" },
  ];

  const handleAction = (item: any) => {
    setShowOptions(false);
    setChatHistory(p => [...p, { role: "user", content: item.label, time: "Sent" }]);
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setChatHistory(p => [...p, { role: "bot", content: item.reply, time: "Now" }]);
      setTimeout(() => setShowOptions(true), 150);
      if (item.isDirect) setTimeout(() => window.open(`https://wa.me/${whatsappNumber}`, "_blank"), 800);
    }, 1000);
  };

  return (
    <>
      <style>{`
        @keyframes wa-up { from{opacity:0;transform:translateY(10px) scale(.98)} to{opacity:1;transform:translateY(0) scale(1)} }
        @keyframes glow { 0%,100%{box-shadow:0 0 0 0 rgba(37,211,102,.4)} 70%{box-shadow:0 0 0 10px rgba(37,211,102,0)} }
        .wa-scroll::-webkit-scrollbar{width:2px}
        .wa-btn:active{transform:scale(0.92)}
      `}</style>

      <div style={{ position:"fixed", bottom:"20px", right:"20px", zIndex:99999, display:"flex", flexDirection:"column", alignItems:"flex-end", gap:"12px" }}>
        
        {/* CHAT BOX */}
        {isOpen && (
          <div style={{ width:"300px", height:"420px", display:"flex", flexDirection:"column", borderRadius:"24px", background:"#0d0d12", border:"1px solid rgba(255,255,255,.1)", boxShadow:"0 25px 60px rgba(0,0,0,.7)", animation:"wa-up .2s ease-out", overflow:"hidden" }}>
            
            {/* Header */}
            <div style={{ background:"#15151e", padding:"12px 16px", display:"flex", alignItems:"center", justifyContent:"space-between", borderBottom:"1px solid rgba(255,255,255,.05)" }}>
              <div style={{ display:"flex", alignItems:"center", gap:"10px" }}>
                <div style={{ width:"34px", height:"34px", borderRadius:"10px", background:"#621CFF", display:"flex", alignItems:"center", justifyContent:"center" }}><Sparkles size={18} color="#ECFF1C" /></div>
                <div>
                  <p style={{ color:"#fff", fontWeight:700, fontSize:"13px", margin:0 }}>NCPS Smart Assistant</p>
                  <p style={{ color:"#25D366", fontSize:"10px", margin:0, fontWeight:600 }}>● Online Now</p>
                </div>
              </div>
              <X size={18} color="#444" cursor="pointer" onClick={() => setIsOpen(false)} />
            </div>

            {/* Chat Content */}
            <div className="wa-scroll" style={{ flex:1, overflowY:"auto", padding:"12px", display:"flex", flexDirection:"column", gap:"8px" }}>
              {chatHistory.map((chat, i) => (
                <div key={i} style={{ display:"flex", justifyContent:chat.role==="user"?"flex-end":"flex-start" }}>
                  <div style={{ maxWidth:"85%", padding:"10px 14px", borderRadius:chat.role==="user"?"18px 4px 18px 18px":"4px 18px 18px 18px", background:chat.role==="user"?"#621CFF":"rgba(255,255,255,.06)", border:"1px solid rgba(255,255,255,.03)" }}>
                    <p style={{ color:"#fff", fontSize:"12px", margin:0, lineHeight:1.4 }}>{chat.content}</p>
                    <div style={{ textAlign:"right", marginTop:"3px", opacity:0.4 }}><span style={{ fontSize:"8px", color:"#fff" }}>{chat.time}</span></div>
                  </div>
                </div>
              ))}

              {isTyping && <div style={{ background:"rgba(255,255,255,.05)", padding:"10px", borderRadius:"12px", alignSelf:"flex-start", fontSize:"10px", color:"#25D366", fontWeight:700 }}>AI is typing...</div>}

              {showOptions && !isTyping && (
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"6px", marginTop:"10px" }}>
                  {categories.map(item => (
                    <button key={item.id} onClick={() => handleAction(item)} className="wa-btn" style={{ background:"rgba(255,255,255,.03)", border:"1px solid rgba(255,255,255,.06)", borderRadius:"12px", padding:"10px 8px", cursor:"pointer", display:"flex", alignItems:"center", gap:"8px", transition:"0.2s" }}>
                      <span style={{ color:item.accent }}>{item.icon}</span>
                      <span style={{ color:"#ccc", fontSize:"11px", fontWeight:600 }}>{item.label}</span>
                    </button>
                  ))}
                </div>
              )}
              <div ref={chatEndRef} />
            </div>
            
            {/* Persistent Call Button */}
            <a href={`tel:${callNumber}`} style={{ margin:"12px", padding:"12px", background:"#ECFF1C", color:"#000", borderRadius:"14px", textAlign:"center", fontSize:"11px", fontWeight:900, textDecoration:"none", display:"flex", alignItems:"center", justifyContent:"center", gap:"8px" }}>
              <Phone size={14} fill="black" /> CALL OFFICE NOW
            </a>
          </div>
        )}

        {/* FAB BUTTONS STACK */}
        <div style={{ display:"flex", flexDirection:"column", gap:"10px" }}>
          
          {/* CALL BUTTON */}
          <a href={`tel:${callNumber}`} className="wa-btn" style={{ 
            width:"56px", 
            height:"56px", 
            borderRadius:"18px", 
            background:"#621CFF", 
            display:"flex", 
            alignItems:"center", 
            justifyContent:"center", 
            color:"#ECFF1C", 
            boxShadow:"0 10px 20px rgba(98,28,255,0.3)",
            textDecoration: "none"
          }}>
            <PhoneCall size={26} />
          </a>

          {/* WHATSAPP BUTTON */}
          <button onClick={() => setIsOpen(!isOpen)} className="wa-btn" style={{ 
            width:"56px", 
            height:"56px", 
            borderRadius:"18px", 
            border:"none", 
            cursor:"pointer", 
            background:isOpen ? "#222" : "#25D366", 
            display:"flex", 
            alignItems:"center", 
            justifyContent:"center", 
            animation:isOpen ? "none" : "glow 2s infinite",
            boxShadow: isOpen ? "none" : "0 10px 25px rgba(37,211,102,.4)"
          }}>
            {isOpen ? <X size={28} color="#fff" /> : 
              <svg width="32" height="32" viewBox="0 0 24 24" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            }
          </button>
        </div>

      </div>
    </>
  );
}
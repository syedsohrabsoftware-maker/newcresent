"use client";
import { X, CheckCheck, Sparkles, ChevronRight, MessageSquare, CreditCard, Zap, TrendingUp, Landmark, BarChart3, Shield } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [showOptions, setShowOptions] = useState(true);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const [chatHistory, setChatHistory] = useState([
    { role: "bot", content: "Assalam-o-Alaikum! 👋 NCPS Assistant yahan hai. Kya madad kar sakta hoon?", time: "Now" },
  ]);

  const whatsappNumber = "919813020259";

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory, isTyping]);

  const categories = [
    { id: "fees",      label: "Fee Structure",   icon: <CreditCard size={13} />,    accent: "#7C3AED", reply: "Monthly fees ₹1,200 – ₹2,500 based on grade. Includes tuition, labs & library. Installment plans available. 📊" },
    { id: "timing",    label: "School Timings",  icon: <Zap size={13} />,           accent: "#F59E0B", reply: "🌤 Summer: 7:30 AM – 1:30 PM\n❄️ Winter: 8:30 AM – 2:30 PM\nGates open 15 min early." },
    { id: "admission", label: "New Admission",   icon: <TrendingUp size={13} />,    accent: "#10B981", reply: "Session 2026-27 admissions open! 🎓 Classes Nursery–10th. Bring birth certificate, marksheet & photo." },
    { id: "transport", label: "Bus Routes",      icon: <Landmark size={13} />,      accent: "#0EA5E9", reply: "🚌 15+ villages covered including Pinangwan & Khanpur. GPS-tracked. ₹400/month." },
    { id: "results",   label: "Exam Results",    icon: <BarChart3 size={13} />,     accent: "#F43F5E", reply: "📈 Results on portal within 48hrs. Report cards issued quarterly. Merit scholarships each term." },
    { id: "safety",    label: "Campus Safety",   icon: <Shield size={13} />,        accent: "#64748B", reply: "🔒 24/7 CCTV, biometric entry & trained security. Student ID mandatory. Emergency contact system active." },
    { id: "direct",    label: "Live WhatsApp",   icon: <MessageSquare size={13} />, accent: "#25D366", reply: "Connecting you to help desk... 🟢", isDirect: true },
  ];

  const handleAction = (item: any) => {
    setShowOptions(false);
    setChatHistory(p => [...p, { role: "user", content: item.label, time: "Sent" }]);
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setChatHistory(p => [...p, { role: "bot", content: item.reply, time: "Now" }]);
      setTimeout(() => setShowOptions(true), 200);
      if (item.isDirect) setTimeout(() => window.open(`https://wa.me/${whatsappNumber}?text=Hi, I need assistance.`, "_blank"), 1200);
    }, 1200);
  };

  return (
    <>
      <style>{`
        @keyframes wa-up { from{opacity:0;transform:translateY(14px) scale(.96)} to{opacity:1;transform:translateY(0) scale(1)} }
        @keyframes wa-msg { from{opacity:0;transform:translateY(5px)} to{opacity:1;transform:translateY(0)} }
        @keyframes wa-dot { 0%,60%,100%{transform:translateY(0)} 30%{transform:translateY(-4px)} }
        @keyframes wa-glow { 0%,100%{box-shadow:0 0 0 0 rgba(37,211,102,.45)} 70%{box-shadow:0 0 0 9px rgba(37,211,102,0)} }
        .wa-scroll::-webkit-scrollbar{width:3px}
        .wa-scroll::-webkit-scrollbar-thumb{background:rgba(255,255,255,.1);border-radius:10px}
        .wa-card{transition:all .15s ease!important}
        .wa-card:hover{background:rgba(255,255,255,.08)!important;transform:translateY(-1px)}
        .wa-fab{transition:all .28s cubic-bezier(.34,1.56,.64,1)!important}
        .wa-fab:hover{transform:scale(1.07) translateY(-2px)!important}
        .wa-fab:active{transform:scale(.94)!important}
      `}</style>

      {/* ROOT — fixed bottom-right, flex column, grows UPWARD */}
      <div style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 99999,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: "10px",
        fontFamily: "'Segoe UI',system-ui,sans-serif",
      }}>

        {/* ── CHAT BOX (appears above FAB) ── */}
        {isOpen && (
          <div style={{
            width: "290px",
            height: "390px",
            display: "flex",
            flexDirection: "column",
            borderRadius: "18px",
            overflow: "hidden",
            background: "#111117",
            border: "1px solid rgba(255,255,255,.08)",
            boxShadow: "0 16px 50px rgba(0,0,0,.6), 0 0 0 1px rgba(255,255,255,.03)",
            animation: "wa-up .3s cubic-bezier(.34,1.56,.64,1)",
          }}>

            {/* Header */}
            <div style={{ background:"#0d0d12", borderBottom:"1px solid rgba(255,255,255,.06)", padding:"9px 11px", display:"flex", alignItems:"center", justifyContent:"space-between", flexShrink:0 }}>
              <div style={{ display:"flex", alignItems:"center", gap:"8px" }}>
                <div style={{ width:"32px", height:"32px", borderRadius:"9px", background:"linear-gradient(135deg,#25D366,#128C7E)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, boxShadow:"0 2px 8px rgba(37,211,102,.3)" }}>
                  <Sparkles size={14} color="white" />
                </div>
                <div>
                  <div style={{ display:"flex", alignItems:"center", gap:"5px" }}>
                    <span style={{ color:"#fff", fontWeight:700, fontSize:"12px" }}>NCPS Assistant</span>
                    <span style={{ background:"linear-gradient(90deg,#25D366,#128C7E)", borderRadius:"20px", padding:"1px 5px", fontSize:"7px", color:"#fff", fontWeight:800, letterSpacing:".5px", textTransform:"uppercase" }}>AI</span>
                  </div>
                  <div style={{ display:"flex", alignItems:"center", gap:"4px", marginTop:"1px" }}>
                    <div style={{ width:"5px", height:"5px", borderRadius:"50%", background:"#25D366" }} />
                    <span style={{ color:"#4ade80", fontSize:"9px", fontWeight:600 }}>Online · Replies instantly</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} style={{ width:"24px", height:"24px", borderRadius:"7px", background:"rgba(255,255,255,.06)", border:"1px solid rgba(255,255,255,.08)", cursor:"pointer", color:"rgba(255,255,255,.5)", display:"flex", alignItems:"center", justifyContent:"center" }}>
                <X size={12} />
              </button>
            </div>

            {/* Messages area */}
            <div className="wa-scroll" style={{ flex:1, overflowY:"auto", padding:"10px", display:"flex", flexDirection:"column", gap:"6px" }}>
              {chatHistory.map((chat, i) => (
                <div key={i} style={{ display:"flex", justifyContent:chat.role==="user"?"flex-end":"flex-start", animation:"wa-msg .22s ease" }}>
                  <div style={{
                    maxWidth:"82%", padding:"7px 10px",
                    borderRadius: chat.role==="user" ? "13px 3px 13px 13px" : "3px 13px 13px 13px",
                    background: chat.role==="user" ? "linear-gradient(135deg,#25D366,#128C7E)" : "rgba(255,255,255,.06)",
                    border: chat.role==="user" ? "none" : "1px solid rgba(255,255,255,.07)",
                  }}>
                    <p style={{ color:chat.role==="user"?"#fff":"rgba(255,255,255,.82)", fontSize:"11px", fontWeight:500, lineHeight:1.5, margin:0, whiteSpace:"pre-line" }}>{chat.content}</p>
                    <div style={{ display:"flex", justifyContent:"flex-end", alignItems:"center", gap:"2px", marginTop:"2px", opacity:.4 }}>
                      <span style={{ fontSize:"8px", color:"#fff" }}>{chat.time}</span>
                      {chat.role==="user" && <CheckCheck size={8} color="#7dd3fc" />}
                    </div>
                  </div>
                </div>
              ))}

              {/* Typing */}
              {isTyping && (
                <div style={{ display:"flex" }}>
                  <div style={{ padding:"8px 11px", borderRadius:"3px 13px 13px 13px", background:"rgba(255,255,255,.06)", border:"1px solid rgba(255,255,255,.07)", display:"flex", gap:"3px", alignItems:"center" }}>
                    {[0,.18,.36].map((d,i) => <div key={i} style={{ width:"5px", height:"5px", borderRadius:"50%", background:"#25D366", animation:`wa-dot 1s ${d}s infinite` }} />)}
                  </div>
                </div>
              )}

              {/* Options */}
              {showOptions && !isTyping && (
                <div style={{ marginTop:"3px" }}>
                  <p style={{ fontSize:"8px", fontWeight:700, color:"rgba(255,255,255,.22)", textTransform:"uppercase", letterSpacing:"1.5px", textAlign:"center", margin:"0 0 5px" }}>Select an Inquiry</p>
                  <div style={{ display:"flex", flexDirection:"column", gap:"3px" }}>
                    {categories.map(item => (
                      <button key={item.id} onClick={() => handleAction(item)} className="wa-card" style={{
                        width:"100%", background:"rgba(255,255,255,.04)", border:"1px solid rgba(255,255,255,.07)",
                        borderRadius:"10px", padding:"7px 9px", cursor:"pointer",
                        display:"flex", alignItems:"center", gap:"8px", textAlign:"left",
                      }}>
                        <div style={{ width:"26px", height:"26px", borderRadius:"7px", background:`${item.accent}1a`, border:`1px solid ${item.accent}30`, display:"flex", alignItems:"center", justifyContent:"center", color:item.accent, flexShrink:0 }}>
                          {item.icon}
                        </div>
                        <span style={{ color:"rgba(255,255,255,.8)", fontSize:"11px", fontWeight:600, flex:1 }}>{item.label}</span>
                        <ChevronRight size={10} color="rgba(255,255,255,.22)" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Footer */}
            <div style={{ padding:"5px", borderTop:"1px solid rgba(255,255,255,.05)", background:"#0d0d12", textAlign:"center", flexShrink:0 }}>
              <span style={{ fontSize:"8px", fontWeight:600, color:"rgba(255,255,255,.15)", letterSpacing:"1px", textTransform:"uppercase" }}>Crescent Digital Hub © 2026</span>
            </div>
          </div>
        )}

        {/* ── FAB BUTTON ── */}
        <button
          onClick={() => setIsOpen(o => !o)}
          className="wa-fab"
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "15px",
            border: "none",
            cursor: "pointer",
            flexShrink: 0,
            background: isOpen ? "#1c1c26" : "linear-gradient(135deg,#25D366 0%,#128C7E 100%)",
            boxShadow: isOpen ? "0 4px 16px rgba(0,0,0,.4)" : "0 4px 18px rgba(37,211,102,.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            animation: isOpen ? "none" : "wa-glow 2s infinite",
          }}
        >
          {isOpen
            ? <X size={20} />
            : <svg width="23" height="23" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          }
        </button>

      </div>
    </>
  );
}

import { ShieldCheck, Zap, Bus, CreditCard, Star, ArrowRight, CheckCircle, Phone } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

// --- DYNAMIC METADATA ENGINE ---
// Ye function Google ko har slug ke liye alag title aur desc dikhayega
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  
  const titles: any = {
    "schools-with-transport-in-mewat": "Safe School Transport in Mewat | NCPS GPS-Enabled Buses",
    "best-science-stream-school-in-pinanagwan-punhana-mewat": "Best Digital & Smart Class School in Nuh | NCPS Modern Learning",
    "affordable-fee-structure-mewat": "Affordable Fee Structure | Quality CBSE Education in Mewat",
  };

  const descriptions: any = {
    "schools-with-transport-in-mewat": "New Crescent Public School (NCPS) provides safe, GPS-tracked bus facilities in Punhana, Nuh & Mewat.",
    "smart-class-education-nuh": "Mewat's first fully digital school with interactive smart boards and 3D labs at NCPS.",
    "affordable-fee-structure-mewat": "Get high-tech CBSE education at affordable rates. NCPS Mewat offers premium facilities in your budget.",
  };

  return {
    title: titles[slug] || "Excellence in Education | NCPS",
    description: descriptions[slug] || "Join New Crescent Public School for a bright future.",
    alternates: {
      canonical: `https://newcrescentschool.in/authority/${slug}`,
    }
  };
}

export default async function AuthorityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // Page Content Data based on Slug
  const contentMap: any = {
    "schools-with-transport-in-mewat": {
      title: "Safe & GPS Tracked Transport in Mewat",
      hindiTitle: "मेवात का सबसे सुरक्षित स्कूल ट्रांसपोर्ट",
      desc: "NCPS provides high-tech bus facilities covering Punhana, Nuh, and nearby villages with 100% safety records.",
      hindiDesc: "NCPS सिर्फ शिक्षा नहीं, सुरक्षा की भी गारंटी देता है। हमारी बसें पुनहाना, नूंह और आस-पास के हर गांव को कवर करती हैं।",
      icon: Bus,
      features: ["GPS Live Tracking", "Female Attendants", "CCTV Cameras", "Expert Drivers"]
    },
    "smart-class-education-nuh": {
      title: "Smart Class & Digital Learning in Nuh",
      hindiTitle: "नूंह का पहला पूरी तरह डिजिटल स्कूल",
      desc: "Experience the future of education with interactive smart boards, 3D labs, and digital libraries.",
      hindiDesc: "पुराने तरीकों को छोड़िए! NCPS लाया है डिजिटल बोर्ड और स्मार्ट लैब्स, जो पढ़ाई को बनाते हैं आसान और दिलचस्प।",
      icon: Zap,
      features: ["3D Interactive Learning", "Digital Coding Labs", "Smart Boards", "Online Study Portal"]
    },
    "affordable-fee-structure-mewat": {
      title: "High-Tech Education at Affordable Fees",
      hindiTitle: "शानदार शिक्षा, अब आपके बजट में",
      desc: "Premium CBSE education shouldn't be expensive. NCPS offers the best facilities at competitive rates in Mewat.",
      hindiDesc: "मेवात के हर बच्चे का हक है अच्छी शिक्षा। NCPS में हम वर्ल्ड-क्लास सुविधाएं देते हैं वो भी आपके बजट के अंदर।",
      icon: CreditCard,
      features: ["Transparent Pricing", "No Hidden Charges", "Scholarship Plans", "Digital Payment Mode"]
    }
  };

  const data = contentMap[slug] || contentMap["schools-with-transport-in-mewat"];

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#621CFF] selection:text-white">
      {/* --- HERO SECTION --- */}
      <section className="bg-[#08011c] pt-40 pb-20 px-6 relative overflow-hidden rounded-b-[60px]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#621CFF] rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#ECFF1C] rounded-full blur-[120px]" />
        </div>

        <div className="max-w-[1200px] mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8">
            <data.icon size={14} className="text-[#ECFF1C]" />
            <span className="text-[#ECFF1C] text-[10px] font-black uppercase tracking-[3px]">{data.title}</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-white leading-tight tracking-tighter mb-8">
            {data.hindiTitle.toUpperCase()} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ECFF1C] via-white to-[#621CFF]">
                BY NCPS NUH
            </span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            {data.hindiDesc}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/apply" className="bg-[#621CFF] text-white px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-[2px] shadow-2xl shadow-indigo-500/20 hover:scale-105 transition-all flex items-center gap-3">
              Apply For Admission <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* --- CONTENT SECTION --- */}
      <section className="py-24 px-6 max-w-[1100px] mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl font-black text-[#08011c] uppercase tracking-tight">NCPS Excellence Factors</h2>
            <div className="space-y-4">
              {data.features.map((feature: string) => (
                <div key={feature} className="flex items-center gap-4 p-5 bg-slate-50 rounded-3xl border border-slate-100 group hover:border-[#621CFF]/30 transition-all">
                  <CheckCircle className="text-[#621CFF]" size={24} />
                  <span className="font-black text-[#150447] uppercase text-sm tracking-tight">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#08011c] p-10 rounded-[48px] shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#621CFF] blur-[80px] opacity-30 group-hover:opacity-50 transition-opacity" />
            <div className="relative z-10 space-y-8">
              <div className="space-y-2">
                <h3 className="text-white text-2xl font-black uppercase italic tracking-tighter">Need More Info?</h3>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-[3px]">Expert Help Available</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-3xl flex items-center gap-5">
                <div className="w-12 h-12 bg-[#ECFF1C] rounded-2xl flex items-center justify-center text-[#08011c] shrink-0">
                  <Phone size={22} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Admission Hotline</p>
                  <p className="text-white font-black text-lg">+91 98130 20259</p>
                </div>
              </div>
              <button className="w-full bg-white text-[#08011c] py-5 rounded-2xl font-black uppercase text-[11px] tracking-[4px] hover:bg-[#ECFF1C] transition-all">
                Request Callback
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
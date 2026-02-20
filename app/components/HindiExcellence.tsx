"use client";
import React, { useState } from "react";
import { 
  ShieldCheck, Zap, Globe, GraduationCap, Award, Star, Heart, X, 
  CheckCircle2, ArrowUpRight, Sparkles, Code, Trophy, BookOpen, Users 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function HindiExcellence() {
  const [selectedFeature, setSelectedFeature] = useState<any>(null);

  const points = [
    { 
      t: "डिजिटल क्लासरूम", 
      d: "3D एनिमेशन और स्मार्ट बोर्ड्स के साथ आधुनिक पढ़ाई।", 
      i: Zap,
      longDesc: "किताबों के बोझ को कम करके हमने पढ़ाई को विजुअल बनाया है। NCPS में हर बच्चा कॉन्सेप्ट्स को रटता नहीं, बल्कि महसूस करता है।",
      advFeatures: ["AI-पावर्ड लर्निंग", "स्मार्ट इंटरैक्टिव बोर्ड्स", "3D साइंस सिमुलेशन", "डिजिटल स्टडी मटेरियल"]
    },
    { 
      t: "कोडिंग और रोबोटिक्स", 
      d: "नूंह के बच्चे अब ऐप्स और गेम्स बनाना सीखेंगे।", 
      i: Code,
      longDesc: "हम भविष्य के इंजीनियर और टेक-एक्सपर्ट्स तैयार कर रहे हैं। हमारे पास मेवात की सबसे एडवांस रोबोटिक्स लैब है।",
      advFeatures: ["Python & Java कोडिंग", "रोबोटिक्स वर्कशॉप", "STEM लैब एक्सेस", "App डेवलपमेंट ट्रेनिंग"]
    },
    { 
      t: "सुरक्षित बस नेटवर्क", 
      d: "हर बस में GPS और CCTV निगरानी, सुरक्षा की गारंटी।", 
      i: ShieldCheck,
      longDesc: "पेरेंट्स को हर पल की लोकेशन अपडेट मिलती है। नूंह और पुन्हाna के हर कोने में हमारी बसें जाती हैं।",
      advFeatures: ["लाइव GPS ट्रैकिंग", "CCTV निगरानी", "ट्रेंड महिला अटेंडेंट", "मैग्नेटिक अटेंडेंस सिस्टम"]
    },
    { 
      t: "खेल एवं फिटनेस", 
      d: "मैदान में भी हम मेवात के चैंपियंस तैयार करते हैं।", 
      i: Trophy,
      longDesc: "हमारा स्पोर्ट्स इंफ्रास्ट्रक्चर इंटरनेशनल स्टैंडर्ड्स का है। क्रिकेट, फुटबॉल और एथलेटिक्स की प्रोफेशनल कोचिंग।",
      advFeatures: ["प्रोफेशनल क्रिकेट पिच", "फुटबॉल टर्फ", "इंडोर गेम्स जोन", "एनुअल स्पोर्ट्स मीट"]
    },
    { 
      t: "ग्लोबल इंग्लिश एकेडमी", 
      d: "शुद्ध इंग्लिश बोलना अब बच्चों के लिए आसान होगा।", 
      i: Globe,
      longDesc: "इंग्लिश स्पीकिंग एनवायरनमेंट जो बच्चों का कॉन्फिडेंस बढ़ाता है और उन्हें ग्लोबल मौकों के लिए तैयार करता है।",
      advFeatures: ["स्पोकन इंग्लिश क्लासेस", "डिबेट और पब्लिक स्पीकिंग", "पर्सनालिटी ग्रूमिंग", "विदेशी भाषा परिचय"]
    },
    { 
      t: "संस्कार और तहजीब", 
      d: "मॉडर्न एजुकेशन के साथ नैतिक मूल्यों का संगम।", 
      i: Heart,
      longDesc: "NCPS में हम शिक्षा के साथ-साथ बच्चों को एक नेक और जिम्मेदार इंसान बनाने पर जोर देते हैं।",
      advFeatures: ["नैतिक शिक्षा (Ethics)", "तहजीब और शिष्टाचार", "कम्युनिटी सर्विस", "सांस्कृतिक कार्यक्रम"]
    },
    { 
      t: "हाई-टेक साइंस लैब्स", 
      d: "प्रयोगों के माध्यम से विज्ञान की गहराई को समझें।", 
      i: BookOpen,
      longDesc: "हमारी लैब्स पूरी तरह इक्विप्ड हैं जहाँ बच्चे थ्योरी को प्रैक्टिकल में बदलते हैं।",
      advFeatures: ["एडवांस केमिस्ट्री लैब", "बायोलॉजी स्पेसिमेंस", "फिजिक्स रिसर्च विंग", "प्रैक्टिकल एग्जाम ट्रेनिंग"]
    },
    { 
      t: "एक्सपर्ट मेंटरशिप", 
      d: "अनुभवी टीचर्स की टीम जो करियर को दिशा देती है।", 
      i: Users,
      longDesc: "हमारे पास बेहतरीन संस्थानों से पढ़े हुए टीचर्स हैं जो बच्चों को करियर काउंसलिंग भी देते हैं।",
      advFeatures: ["1-on-1 मेंटरिंग", "करियर काउंसलिंग", "डाउट क्लियरिंग सेशन", "ओलंपियाड तैयारी"]
    }
  ];

  return (
    <section className="py-16 md:py-32 bg-white px-4 md:px-6 relative overflow-hidden">
      {/* Background Subtle Accents */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#621CFF]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#ECFF1C]/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Responsive Header */}
        <div className="mb-12 md:mb-24 text-left">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 bg-[#621CFF]/5 border border-[#621CFF]/10 px-4 py-2 rounded-full mb-6"
          >
            <Sparkles size={14} className="text-[#621CFF]" />
            <span className="text-[#621CFF] text-[10px] font-black uppercase tracking-[3px]">Next-Gen Education Mewat</span>
          </motion.div>
          <h2 className="text-4xl md:text-8xl font-black text-[#08011c] tracking-tighter leading-[1] md:leading-[0.85] uppercase italic">
            शिक्षा का <span className="text-[#621CFF]">नया साम्राज्य</span> <br />
            <span className="text-slate-300">नूंह के भविष्य के लिए</span>
          </h2>
        </div>

        {/* 8-Card Grid (Responsive) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {points.map((item, idx) => (
            <motion.div 
              key={item.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => setSelectedFeature(item)}
              whileHover={{ y: -10 }}
              className="group cursor-pointer relative p-8 md:p-10 bg-white border border-slate-100 rounded-[40px] md:rounded-[50px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#621CFF] to-indigo-500 opacity-0 group-hover:opacity-[0.03] transition-opacity" />
              
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-[#621CFF] mb-8 group-hover:bg-[#621CFF] group-hover:text-[#ECFF1C] transition-all duration-300 shadow-sm">
                <item.i size={32} />
              </div>
              
              <h4 className="text-xl md:text-2xl font-black text-[#08011c] mb-4 uppercase tracking-tighter italic leading-none">{item.t}</h4>
              <p className="text-slate-500 text-sm font-bold leading-relaxed mb-6">{item.d}</p>
              
              <div className="flex items-center gap-2 text-[#621CFF] text-[10px] font-black uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                Read More <ArrowUpRight size={16} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- ELITE MOBILE-RESPONSIVE MODAL --- */}
      <AnimatePresence>
        {selectedFeature && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedFeature(null)}
              className="absolute inset-0 bg-[#08011c]/90 backdrop-blur-xl"
            />
            
            <motion.div 
              layoutId={selectedFeature.t}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="relative w-full max-w-[750px] bg-white rounded-[40px] md:rounded-[60px] overflow-hidden shadow-2xl"
            >
              <div className="h-2 md:h-3 w-full bg-[#ECFF1C]" />
              
              <div className="p-8 md:p-16 max-h-[90vh] overflow-y-auto">
                <button 
                  onClick={() => setSelectedFeature(null)}
                  className="absolute top-6 right-6 p-3 bg-slate-100 rounded-full hover:bg-[#621CFF] hover:text-white transition-all"
                >
                  <X size={20} />
                </button>

                <div className="flex flex-col md:flex-row md:items-center gap-6 mb-10">
                   <div className="w-20 h-20 bg-[#621CFF] rounded-[30px] flex items-center justify-center text-[#ECFF1C] shadow-xl shadow-[#621CFF]/20">
                    <selectedFeature.i size={40} />
                  </div>
                  <div>
                    <h3 className="text-3xl md:text-5xl font-black text-[#08011c] uppercase italic tracking-tighter leading-none">{selectedFeature.t}</h3>
                    <p className="text-[#621CFF] text-[10px] font-black uppercase tracking-[4px] mt-3">NCPS Authority Excellence</p>
                  </div>
                </div>

                <p className="text-slate-600 text-lg md:text-2xl font-medium leading-relaxed mb-10 italic">
                  "{selectedFeature.longDesc}"
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                  {selectedFeature.advFeatures.map((feat: string) => (
                    <div key={feat} className="flex items-center gap-4 p-5 bg-slate-50 rounded-3xl border border-slate-100 hover:border-[#621CFF]/30 transition-all">
                      <CheckCircle2 size={24} className="text-[#621CFF]" />
                      <span className="font-black text-[#08011c] text-[11px] uppercase tracking-widest">{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="tel:+919813020259" className="flex-1 bg-[#621CFF] text-white py-6 rounded-[24px] font-black uppercase text-xs tracking-[4px] hover:bg-[#08011c] transition-all flex items-center justify-center gap-3 active:scale-95 shadow-lg shadow-[#621CFF]/20">
                    Get Details <Zap size={18} fill="currentColor" />
                  </a>
                  <button onClick={() => setSelectedFeature(null)} className="flex-1 bg-white border border-slate-200 text-[#08011c] py-6 rounded-[24px] font-black uppercase text-xs tracking-[4px] hover:bg-slate-50 transition-all">
                    Close Preview
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
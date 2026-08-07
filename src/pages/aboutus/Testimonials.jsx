import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Quote, Star, ArrowRight, Building, PlayCircle } from 'lucide-react';
import SectionHeading from '../../components/SectionHeading';

const RAW_TESTIMONIALS = [
  {
    id: 1,
    defaultQuote: "UANDWE didn't just deliver a chip; they delivered a competitive advantage. Their RTL and physical design teams executed flawlessly, ensuring our 5nm automotive ASIC taped out exactly on schedule with zero re-spins. Truly exceptional engineering.",
    defaultAuthor: "Mark Stevenson",
    defaultRole: "VP of Hardware Engineering",
    defaultCompany: "AutoDrive Technologies",
    rating: 5,
    defaultHighlight: "Zero Re-spins on 5nm",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    defaultQuote: "When we needed to overhaul our entire embedded Linux architecture for a fleet of 100,000 IoT devices, UANDWE was the only partner capable of handling the complexity. Their firmware is rock-solid and the OTA update mechanism is bulletproof.",
    defaultAuthor: "Dr. Elena Rostova",
    defaultRole: "Chief Technology Officer",
    defaultCompany: "ConnectSphere IoT",
    rating: 5,
    defaultHighlight: "100k+ Devices Deployed",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    defaultQuote: "The software team at UANDWE fundamentally transformed our backend infrastructure. By migrating our legacy monolith to a highly scalable cloud-native microservices architecture, they reduced our cloud costs by 40% while improving uptime.",
    defaultAuthor: "David Chen",
    defaultRole: "Director of Software",
    defaultCompany: "FinTech Solutions Global",
    rating: 5,
    defaultHighlight: "40% Cloud Cost Reduction",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    defaultQuote: "Their hardware prototyping speed is unmatched. Within weeks, we had functional, high-speed HDI PCBs ready for validation. Their rigorous signal integrity analysis saved us months of debugging in the lab.",
    defaultAuthor: "Sarah O'Connor",
    defaultRole: "Hardware Architect",
    defaultCompany: "NextGen Networks",
    rating: 5,
    defaultHighlight: "Accelerated Time-to-Market",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80"
  },
  {
    id: 5,
    defaultQuote: "UANDWE is more than a vendor; they are a seamless extension of our internal team. The communication, transparency, and deep technical expertise they bring to every single sprint is simply phenomenal.",
    defaultAuthor: "Michael Chang",
    defaultRole: "Head of Product",
    defaultCompany: "HealthSync Medical",
    rating: 5,
    defaultHighlight: "Seamless Team Integration",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80"
  },
  {
    id: 6,
    defaultQuote: "The verification environment they built for our RISC-V core was incredibly robust. Their use of advanced UVM methodologies caught several critical corner-case bugs that our internal team had missed.",
    defaultAuthor: "Priya Patel",
    defaultRole: "Lead Verification Engineer",
    defaultCompany: "Silicon Innovators Inc.",
    rating: 5,
    defaultHighlight: "100% Verification Coverage",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&auto=format&fit=crop&q=80"
  }
];

export default function Testimonials() {
  const [activeVideo, setActiveVideo] = useState(null);
  const { t } = useTranslation();

  const translatedItems = t("aboutus.testimonials.items", { returnObjects: true, defaultValue: [] });

  return (
    <div className="bg-[#0b0b12] min-h-screen text-white pt-[120px] pb-24 overflow-hidden">
      
      {/* BACKGROUND ELEMENTS */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-5%] right-[-10%] w-[700px] h-[700px] bg-[#ff6b1a]/5 blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-emerald-600/5 blur-[150px] rounded-full mix-blend-screen" />
      </div>

      <div className="max-w-[1400px] mx-auto px-[5%] relative z-10">
        
        {/* HERO SECTION */}
        <div className="text-center max-w-4xl mx-auto mb-24">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm font-medium mb-8"
          >
            <Star size={16} className="text-[#ff6b1a]" fill="#ff6b1a" />
            {t("aboutus.testimonials.hero.badge", "Client Success Stories")}
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-8"
          >
            {t("aboutus.testimonials.hero.titlePart1", "Trusted by Global")} <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b1a] to-orange-400">{t("aboutus.testimonials.hero.titlePart2", "Industry Leaders")}</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/60 leading-relaxed"
          >
            {t("aboutus.testimonials.hero.description", "Don't just take our word for it. Hear from the visionaries, CTOs, and engineering leaders who have partnered with UANDWE to turn their complex challenges into flawless realities.")}
          </motion.p>
        </div>

        {/* FEATURED VIDEO TESTIMONIAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="relative rounded-[3rem] overflow-hidden mb-32 border border-white/10 group cursor-pointer"
        >
          <div className="h-[400px] md:h-[600px] w-full relative">
            <img 
              src="https://images.unsplash.com/photo-1552581234-26160f608093?w=1600&auto=format&fit=crop&q=80" 
              alt="Client Meeting"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-500" />
            
            {/* Play Button */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-[#ff6b1a]/20 backdrop-blur-md border border-[#ff6b1a]/50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#ff6b1a] transition-all duration-500 shadow-[0_0_50px_rgba(255,107,26,0.3)]">
                <PlayCircle size={48} className="text-white ml-2" />
              </div>
              <h3 className="text-2xl font-bold text-white text-center px-4">
                {t("aboutus.testimonials.video.title", "Watch: The AutoDrive Success Story")}
              </h3>
              <p className="text-white/70 mt-2">
                {t("aboutus.testimonials.video.subtitle", "How we engineered a 5nm ASIC in record time")}
              </p>
            </div>
          </div>
        </motion.div>

        {/* TESTIMONIALS GRID (MASONRY-STYLE) */}
        <div className="mb-32">
          <SectionHeading 
            titlePart1={t("aboutus.testimonials.wordsTitlePart1", "Words from")} 
            titlePart2={t("aboutus.testimonials.wordsTitlePart2", "Our Partners")} 
            className="mb-16 text-center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {RAW_TESTIMONIALS.map((testimonial, idx) => {
              const itemObj = Array.isArray(translatedItems) && translatedItems[idx] ? translatedItems[idx] : {};
              const quote = itemObj.quote || testimonial.defaultQuote;
              const role = itemObj.role || testimonial.defaultRole;
              const company = itemObj.company || testimonial.defaultCompany;
              const highlight = itemObj.highlight || testimonial.defaultHighlight;
              const author = testimonial.defaultAuthor;

              return (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-[#12121a] border border-white/5 hover:border-white/20 p-8 md:p-10 rounded-[2rem] flex flex-col h-full group hover:bg-white/[0.02] transition-all duration-500"
                >
                  <div className="flex items-center justify-between mb-8">
                    <Quote size={40} className="text-[#ff6b1a]/20 group-hover:text-[#ff6b1a]/40 transition-colors" />
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={16} className="text-[#ff6b1a]" fill="#ff6b1a" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-white/80 text-lg leading-relaxed mb-8 flex-grow">
                    "{quote}"
                  </p>
                  
                  <div className="bg-white/5 rounded-2xl p-4 mb-6 border border-white/10">
                    <div className="text-[#ff6b1a] text-xs font-bold uppercase tracking-wider mb-1 flex items-center gap-2">
                      <Building size={14} /> {t("aboutus.testimonials.keyImpact", "Key Impact")}
                    </div>
                    <div className="text-white font-medium text-sm">{highlight}</div>
                  </div>
                  
                  <div className="flex items-center gap-4 mt-auto border-t border-white/10 pt-6">
                    <img 
                      src={testimonial.image} 
                      alt={author}
                      className="w-14 h-14 rounded-full object-cover border-2 border-white/10 group-hover:border-[#ff6b1a] transition-colors"
                    />
                    <div>
                      <h4 className="text-white font-bold">{author}</h4>
                      <p className="text-white/50 text-sm">{role}</p>
                      <p className="text-white/40 text-xs mt-1">{company}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA SECTION */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#12121a] to-[#0a0a0f] border border-white/10 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=1200&auto=format&fit=crop&q=80')] opacity-5 mix-blend-screen bg-cover bg-center" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t("aboutus.testimonials.cta.heading", "Ready to become our next success story?")}
            </h2>
            <p className="text-white/60 text-lg mb-10">
              {t("aboutus.testimonials.cta.subheading", "Join the ranks of industry leaders who trust UANDWE to engineer their most critical technologies. Let's build the future together.")}
            </p>
            <button className="px-8 py-4 bg-[#ff6b1a] text-white rounded-full font-bold text-lg hover:bg-orange-500 transition-all duration-300 shadow-[0_0_30px_rgba(255,107,26,0.3)] hover:shadow-[0_0_50px_rgba(255,107,26,0.5)] flex items-center gap-3 mx-auto">
              {t("aboutus.testimonials.cta.button", "Start Your Project")} <ArrowRight size={20} />
            </button>
          </div>
        </motion.div>

      </div>
    </div>
  );
}

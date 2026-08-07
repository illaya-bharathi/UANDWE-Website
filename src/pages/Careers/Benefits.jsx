import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Shield, Heart, Zap, Globe, Coffee, BookOpen, Smile, TrendingUp, Sun, Briefcase } from 'lucide-react';

const RAW_BENEFITS_DATA = [
  {
    icon: <Shield size={28} />,
    defaultTitle: "Comprehensive Coverage",
    defaultDesc: "Premium medical, dental, and vision insurance for you and your dependents, ensuring peace of mind."
  },
  {
    icon: <TrendingUp size={28} />,
    defaultTitle: "Competitive Compensation",
    defaultDesc: "We offer top-tier salaries, performance bonuses, and equity packages so you share in our success."
  },
  {
    icon: <Globe size={28} />,
    defaultTitle: "Flexible Work",
    defaultDesc: "Work from where you thrive. We embrace hybrid and remote work models for optimal work-life balance."
  },
  {
    icon: <Heart size={28} />,
    defaultTitle: "Mental Wellness",
    defaultDesc: "Access to premium mental health resources, counseling services, and regular wellness days off."
  },
  {
    icon: <BookOpen size={28} />,
    defaultTitle: "Continuous Learning",
    defaultDesc: "Generous stipends for conferences, courses, and certifications to keep your skills sharp."
  },
  {
    icon: <Coffee size={28} />,
    defaultTitle: "Office Perks",
    defaultDesc: "Fully stocked kitchens, catered lunches, and state-of-the-art equipment for your home or office setup."
  },
  {
    icon: <Sun size={28} />,
    defaultTitle: "Unlimited PTO",
    defaultDesc: "Take the time you need to recharge. We believe in resting as hard as we work."
  },
  {
    icon: <Smile size={28} />,
    defaultTitle: "Family First",
    defaultDesc: "Generous parental leave for all new parents, plus childcare stipends and family planning support."
  }
];

export default function Benefits() {
  const { t } = useTranslation();
  const translatedItems = t("careers.benefits.items", { returnObjects: true, defaultValue: [] });

  return (
    <div className="bg-[#0b0b12] min-h-screen text-white pt-[120px] pb-24 overflow-hidden">
      
      {/* BACKGROUND ELEMENTS */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[10%] right-[-5%] w-[500px] h-[500px] bg-[#ff6b1a]/10 blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[20%] left-[-10%] w-[600px] h-[600px] bg-indigo-600/10 blur-[150px] rounded-full mix-blend-screen" />
      </div>

      <div className="max-w-[1400px] mx-auto px-[5%] relative z-10">
        
        {/* HERO SECTION */}
        <div className="text-center max-w-4xl mx-auto mb-24">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm font-medium mb-8"
          >
            <Heart size={16} className="text-[#ff6b1a]" />
            {t("careers.benefits.badge", "Life at UANDWE")}
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-8"
          >
            {t("careers.benefits.heroTitlePart1", "Invested in")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b1a] to-orange-400">{t("careers.benefits.heroTitlePart2", "You")}</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl mx-auto"
          >
            {t("careers.benefits.heroDescription", "We believe that our people are our greatest asset. That's why we offer a comprehensive benefits package designed to support your physical, mental, and financial well-being.")}
          </motion.p>
        </div>

        {/* BENEFITS GRID */}
        <div className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {RAW_BENEFITS_DATA.map((benefit, idx) => {
              const itemObj = Array.isArray(translatedItems) && translatedItems[idx] ? translatedItems[idx] : {};
              const title = itemObj.title || benefit.defaultTitle;
              const desc = itemObj.desc || benefit.defaultDesc;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group bg-[#12121a] border border-white/5 hover:border-[#ff6b1a]/30 p-8 rounded-[2rem] transition-all duration-500 hover:shadow-[0_10px_30px_rgba(255,107,26,0.1)] relative overflow-hidden"
                >
                  {/* Hover Glow */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#ff6b1a]/5 rounded-full blur-[30px] group-hover:bg-[#ff6b1a]/20 transition-colors duration-500" />
                  
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#ff6b1a] mb-6 group-hover:scale-110 group-hover:bg-[#ff6b1a]/10 transition-all duration-300 relative z-10">
                    {benefit.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 relative z-10">{title}</h3>
                  <p className="text-white/60 leading-relaxed text-sm relative z-10">{desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CORE VALUES OR PHILOSOPHY */}
        <div className="bg-white/[0.02] border border-white/10 rounded-[3rem] p-10 md:p-20 relative overflow-hidden mb-32">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ff6b1a]/5 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                {t("careers.benefits.moreThanPerks.headingPart1", "More than just")} <span className="text-[#ff6b1a]">{t("careers.benefits.moreThanPerks.headingPart2", "perks")}</span>.
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                {t("careers.benefits.moreThanPerks.desc", "Our benefits philosophy goes beyond standard offerings. We aim to create an environment where you can do your best work without worrying about the essentials. From comprehensive health plans to supporting your continuous growth, we've got you covered.")}
              </p>
              <ul className="space-y-4">
                {[
                  t("careers.benefits.moreThanPerks.bullet1", "100% company-paid premiums for employees"),
                  t("careers.benefits.moreThanPerks.bullet2", "Quarterly wellness stipends"),
                  t("careers.benefits.moreThanPerks.bullet3", "Annual learning & development budget")
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 text-white/80"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#ff6b1a]" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div className="w-full lg:w-1/2">
               <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
                 <img 
                   src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80" 
                   alt="Team collaborating" 
                   className="w-full h-full object-cover"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b12] to-transparent opacity-60" />
               </div>
            </div>
          </div>
        </div>

        {/* CTA SECTION */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#ff6b1a] via-[#e55a10] to-[#b84307] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=1200&auto=format&fit=crop&q=80')] opacity-10 mix-blend-screen bg-cover bg-center" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t("careers.benefits.cta.heading", "Ready to join the team?")}
            </h2>
            <p className="text-white/90 text-lg mb-10">
              {t("careers.benefits.cta.subheading", "Explore our open roles and find your next big opportunity with UANDWE.")}
            </p>
            <a href="/careers/jobs" className="inline-flex px-10 py-5 bg-white text-black rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-2xl items-center gap-3 mx-auto">
              {t("careers.benefits.cta.button", "View Open Roles")} <Briefcase size={20} />
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  );
}

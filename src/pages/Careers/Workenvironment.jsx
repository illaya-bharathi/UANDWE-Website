import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Users, Monitor, Zap, Globe, MessageSquare, Coffee, Compass, Briefcase } from 'lucide-react';

const RAW_ENVIRONMENT_FEATURES = [
  {
    icon: <Users size={28} />,
    defaultTitle: "Collaborative Culture",
    defaultDesc: "We believe the best ideas come from teamwork. Our open culture encourages sharing knowledge across all levels."
  },
  {
    icon: <Zap size={28} />,
    defaultTitle: "Fast-Paced Innovation",
    defaultDesc: "Move fast, break barriers. We empower our engineers to take calculated risks and iterate rapidly."
  },
  {
    icon: <Globe size={28} />,
    defaultTitle: "Global Connectivity",
    defaultDesc: "Work with brilliant minds across the globe. Our remote-friendly approach keeps us connected seamlessly."
  },
  {
    icon: <Compass size={28} />,
    defaultTitle: "Autonomy & Trust",
    defaultDesc: "We don't micromanage. You own your projects, schedule, and success from day one."
  },
  {
    icon: <MessageSquare size={28} />,
    defaultTitle: "Radical Candor",
    defaultDesc: "Transparent communication is key. We give and receive feedback directly to help each other grow."
  },
  {
    icon: <Monitor size={28} />,
    defaultTitle: "State-of-the-art Tools",
    defaultDesc: "We provide the best hardware and software stacks so nothing slows down your engineering flow."
  }
];

export default function Workenvironment() {
  const { t } = useTranslation();
  const translatedFeatures = t("careers.workEnvironment.features", { returnObjects: true, defaultValue: [] });

  return (
    <div className="bg-[#0b0b12] min-h-screen text-white pt-[120px] pb-24 overflow-hidden">
      
      {/* BACKGROUND ELEMENTS */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] left-[-5%] w-[600px] h-[600px] bg-[#ff6b1a]/5 blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] bg-indigo-600/10 blur-[150px] rounded-full mix-blend-screen" />
      </div>

      <div className="max-w-[1400px] mx-auto px-[5%] relative z-10">
        
        {/* HERO SECTION */}
        <div className="text-center max-w-4xl mx-auto mb-24">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm font-medium mb-8"
          >
            <Compass size={16} className="text-[#ff6b1a]" />
            {t("careers.workEnvironment.badge", "Our Culture")}
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-8"
          >
            {t("careers.workEnvironment.heroTitlePart1", "Where Great Minds")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b1a] to-orange-400">{t("careers.workEnvironment.heroTitlePart2", "Thrive")}</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl mx-auto"
          >
            {t("careers.workEnvironment.heroDescription", "At UANDWE, we are building an environment where engineers can do the best work of their lives. No bureaucracy, just pure innovation and impact.")}
          </motion.p>
        </div>

        {/* IMAGE GRID SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-32 h-auto md:h-[500px]">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-8 rounded-3xl overflow-hidden relative group"
          >
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&auto=format&fit=crop&q=80" 
              alt="Team working together" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b12] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-8 left-8">
              <h3 className="text-2xl font-bold text-white mb-2">
                {t("careers.workEnvironment.grid.workspacesTitle", "Modern Workspaces")}
              </h3>
              <p className="text-white/70">
                {t("careers.workEnvironment.grid.workspacesDesc", "Designed for collaboration and deep focus.")}
              </p>
            </div>
          </motion.div>
          
          <div className="md:col-span-4 flex flex-col gap-6">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="h-1/2 rounded-3xl overflow-hidden relative group"
            >
              <img 
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600&auto=format&fit=crop&q=80" 
                alt="Diverse team" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#0b0b12]/40 group-hover:bg-transparent transition-colors duration-500" />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="h-1/2 rounded-3xl overflow-hidden relative group bg-[#ff6b1a] flex flex-col justify-center p-8"
            >
              <Users size={32} className="text-white mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">
                {t("careers.workEnvironment.grid.diversityTitle", "Diversity & Inclusion")}
              </h3>
              <p className="text-white/90">
                {t("careers.workEnvironment.grid.diversityDesc", "We celebrate different perspectives and backgrounds.")}
              </p>
            </motion.div>
          </div>
        </div>

        {/* FEATURES GRID */}
        <div className="mb-32">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-bold mb-6">
               {t("careers.workEnvironment.philosophyTitle", "Our Core Philosophy")}
             </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {RAW_ENVIRONMENT_FEATURES.map((feature, idx) => {
              const featObj = Array.isArray(translatedFeatures) && translatedFeatures[idx] ? translatedFeatures[idx] : {};
              const title = featObj.title || feature.defaultTitle;
              const desc = featObj.desc || feature.defaultDesc;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white/[0.02] border border-white/5 hover:border-[#ff6b1a]/30 p-8 rounded-[2rem] transition-all duration-500 hover:bg-white/[0.04]"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#ff6b1a]/10 flex items-center justify-center text-[#ff6b1a] mb-6">
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
                  <p className="text-white/60 leading-relaxed text-sm">{desc}</p>
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
          className="bg-[#12121a] border border-white/10 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden"
        >
          <div className="absolute top-[-50%] right-[-10%] w-[400px] h-[400px] bg-[#ff6b1a]/20 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t("careers.workEnvironment.cta.heading", "Ready to shape the future?")}
            </h2>
            <p className="text-white/70 text-lg mb-10">
              {t("careers.workEnvironment.cta.subheading", "Join a team of driven engineers pushing the boundaries of what's possible in hardware, embedded systems, and software.")}
            </p>
            <a href="/careers/jobs" className="inline-flex px-10 py-5 bg-[#ff6b1a] text-white rounded-full font-bold text-lg hover:bg-[#e55a10] hover:scale-105 transition-all duration-300 shadow-[0_10px_30px_rgba(255,107,26,0.3)] items-center gap-3 mx-auto">
              {t("careers.workEnvironment.cta.button", "Explore Opportunities")} <Briefcase size={20} />
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  );
}

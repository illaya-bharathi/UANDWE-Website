import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { MapPin, Briefcase, Clock, ArrowRight, Search, Zap, Code, Shield, Cpu, ChevronRight } from 'lucide-react';
import SectionHeading from '../../components/SectionHeading';

const RAW_JOBS = [
  {
    id: 1,
    defaultTitle: "Principal SoC Architect",
    defaultLocation: "San Jose, CA (Hybrid)",
    defaultType: "Full-Time",
    category: "Hardware",
    defaultDesc: "Lead the architectural definition of next-generation AI accelerators. Requires 15+ years of experience in silicon architecture and deep knowledge of memory subsystems."
  },
  {
    id: 2,
    defaultTitle: "Senior Firmware Engineer",
    defaultLocation: "Bangalore, India",
    defaultType: "Full-Time",
    category: "Embedded",
    defaultDesc: "Develop mission-critical RTOS firmware for automotive safety systems. ISO 26262 experience strongly preferred."
  },
  {
    id: 3,
    defaultTitle: "Cloud Infrastructure Architect",
    defaultLocation: "Remote (US)",
    defaultType: "Full-Time",
    category: "Software",
    defaultDesc: "Design scalable, secure cloud-native architectures for enterprise clients using Kubernetes, AWS, and modern microservices patterns."
  },
  {
    id: 4,
    defaultTitle: "RTL Design Engineer",
    defaultLocation: "Austin, TX",
    defaultType: "Full-Time",
    category: "Hardware",
    defaultDesc: "Perform micro-architecture and RTL coding (Verilog/SystemVerilog) for high-speed digital cores."
  },
  {
    id: 5,
    defaultTitle: "AI / ML Research Scientist",
    defaultLocation: "Remote (Global)",
    defaultType: "Full-Time",
    category: "AI & Data",
    defaultDesc: "Push the boundaries of edge AI by developing quantized neural networks optimized for low-power NPU hardware."
  },
  {
    id: 6,
    defaultTitle: "Linux BSP Developer",
    defaultLocation: "Bangalore, India",
    defaultType: "Full-Time",
    category: "Embedded",
    defaultDesc: "Port Linux to custom hardware platforms, develop kernel drivers, and optimize boot times for IoT devices."
  }
];

const CATEGORIES = ["All", "Hardware", "Embedded", "Software", "AI & Data"];

const RAW_BENEFITS = [
  {
    icon: <Zap size={24} />,
    defaultTitle: "Work on the Bleeding Edge",
    defaultDesc: "From 3nm silicon to edge AI, you'll be working on technologies that won't hit the consumer market for years."
  },
  {
    icon: <Code size={24} />,
    defaultTitle: "Engineering-First Culture",
    defaultDesc: "We are led by engineers, for engineers. We prioritize technical excellence over bureaucracy."
  },
  {
    icon: <Shield size={24} />,
    defaultTitle: "Comprehensive Health",
    defaultDesc: "Premium medical, dental, and vision coverage for you and your dependents, plus mental wellness stipends."
  },
  {
    icon: <Cpu size={24} />,
    defaultTitle: "Continuous Learning",
    defaultDesc: "Generous stipends for courses, conferences, and certifications. Never stop growing your technical toolkit."
  }
];

export default function Jobs() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const { t } = useTranslation();

  const translatedJobs = t("careers.jobs.jobList", { returnObjects: true, defaultValue: [] });
  const translatedWhyItems = t("careers.jobs.whyJoin.items", { returnObjects: true, defaultValue: [] });

  const jobsList = RAW_JOBS.map((job, idx) => {
    const jobObj = Array.isArray(translatedJobs) && translatedJobs[idx] ? translatedJobs[idx] : {};
    return {
      ...job,
      title: jobObj.title || job.defaultTitle,
      location: jobObj.location || job.defaultLocation,
      type: jobObj.type || job.defaultType,
      desc: jobObj.desc || job.defaultDesc
    };
  });

  const filteredJobs = jobsList.filter(job => {
    const matchesCategory = activeCategory === "All" || job.category === activeCategory;
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          job.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#0b0b12] min-h-screen text-white pt-[120px] pb-24 overflow-hidden">
      
      {/* BACKGROUND ELEMENTS */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-5%] right-[-5%] w-[600px] h-[600px] bg-[#ff6b1a]/10 blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[700px] h-[700px] bg-indigo-600/5 blur-[150px] rounded-full mix-blend-screen" />
      </div>

      <div className="max-w-[1400px] mx-auto px-[5%] relative z-10">
        
        {/* HERO SECTION */}
        <div className="text-center max-w-4xl mx-auto mb-24">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm font-medium mb-8"
          >
            <Briefcase size={16} className="text-[#ff6b1a]" />
            {t("careers.jobs.badge", "Careers at UANDWE")}
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-8"
          >
            {t("careers.jobs.heroTitlePart1", "Build the")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b1a] to-orange-400">{t("careers.jobs.heroTitlePart2", "Future")}</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl mx-auto"
          >
            {t("careers.jobs.heroDescription", "We are always looking for brilliant minds to join our global engineering teams. Discover exciting opportunities to solve complex problems and shape the technologies of tomorrow.")}
          </motion.p>
        </div>

        {/* SEARCH & FILTERS */}
        <div className="bg-[#12121a] border border-white/10 rounded-3xl p-6 md:p-8 mb-16 shadow-2xl">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            
            <div className="relative w-full lg:w-1/2">
              <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
              <input 
                type="text"
                placeholder={t("careers.jobs.searchPlaceholder", "Search job titles or keywords...")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-12 pr-6 text-white placeholder:text-white/40 focus:outline-none focus:border-[#ff6b1a]/50 focus:bg-white/10 transition-all text-lg"
              />
            </div>

            <div className="flex flex-wrap gap-2 w-full lg:w-auto justify-center lg:justify-end">
              {CATEGORIES.map((category) => {
                const label = t(`careers.jobs.categories.${category}`, category);

                return (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${
                      activeCategory === category 
                        ? 'bg-[#ff6b1a] border-[#ff6b1a] text-white shadow-[0_0_20px_rgba(255,107,26,0.3)]' 
                        : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
            
          </div>
        </div>

        {/* JOBS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
          <AnimatePresence>
            {filteredJobs.map((job) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={job.id}
                className="group bg-[#12121a] border border-white/5 hover:border-[#ff6b1a]/50 p-8 rounded-3xl flex flex-col h-full transition-all duration-500 hover:shadow-[0_20px_40px_rgba(255,107,26,0.1)] relative overflow-hidden"
              >
                {/* Hover Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff6b1a]/5 rounded-full blur-[40px] group-hover:bg-[#ff6b1a]/10 transition-colors duration-500" />
                
                <div className="flex items-start justify-between mb-6 relative z-10">
                  <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs font-semibold uppercase tracking-wider text-white/70">
                    {t(`careers.jobs.categories.${job.category}`, job.category)}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#ff6b1a] transition-colors relative z-10">
                  {job.title}
                </h3>
                
                <p className="text-white/60 text-sm leading-relaxed mb-8 flex-grow relative z-10 line-clamp-3">
                  {job.desc}
                </p>

                <div className="flex flex-col gap-3 mb-8 relative z-10">
                  <div className="flex items-center gap-3 text-white/50 text-sm font-medium">
                    <MapPin size={16} className="text-[#ff6b1a]" /> {job.location}
                  </div>
                  <div className="flex items-center gap-3 text-white/50 text-sm font-medium">
                    <Clock size={16} className="text-[#ff6b1a]" /> {job.type}
                  </div>
                </div>

                <button className="w-full py-3 bg-white/5 border border-white/10 rounded-full text-white font-semibold flex items-center justify-center gap-2 group-hover:bg-[#ff6b1a] group-hover:border-[#ff6b1a] transition-all duration-300 relative z-10">
                  {t("careers.jobs.applyNow", "Apply Now")} <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredJobs.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-20 text-center border border-dashed border-white/10 rounded-3xl bg-white/[0.02] mb-32 -mt-16"
          >
            <Search size={48} className="text-white/20 mb-6" />
            <h3 className="text-2xl font-bold text-white mb-2">
              {t("careers.jobs.empty.title", "No open positions found")}
            </h3>
            <p className="text-white/50 max-w-md">
              {t("careers.jobs.empty.desc", "We don't currently have any openings matching your search criteria. Try adjusting your filters.")}
            </p>
            <button 
              onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}
              className="mt-8 px-6 py-2.5 bg-[#ff6b1a] text-white font-semibold rounded-full hover:bg-[#e55a10] transition-colors"
            >
              {t("careers.jobs.empty.clear", "Clear Filters")}
            </button>
          </motion.div>
        )}

        {/* WHY JOIN US */}
        <div className="mb-32">
          <SectionHeading 
            titlePart1={t("careers.jobs.whyJoin.titlePart1", "Why Build With")} 
            titlePart2={t("careers.jobs.whyJoin.titlePart2", "UANDWE")} 
            className="mb-16 text-center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {RAW_BENEFITS.map((benefit, idx) => {
              const bObj = Array.isArray(translatedWhyItems) && translatedWhyItems[idx] ? translatedWhyItems[idx] : {};
              const title = bObj.title || benefit.defaultTitle;
              const desc = bObj.desc || benefit.defaultDesc;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-[#12121a] p-8 md:p-10 rounded-[2rem] border border-white/5 hover:border-white/20 transition-colors flex gap-6"
                >
                  <div className="w-14 h-14 rounded-full bg-[#ff6b1a]/10 flex items-center justify-center text-[#ff6b1a] flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
                    <p className="text-white/60 leading-relaxed text-sm">{desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Target, Eye, Shield, Users, Zap, Globe, Award, ChevronRight } from 'lucide-react';
import SectionHeading from '../../components/SectionHeading';
import Paragraph from '../../components/Paragraph';

const RAW_METRICS = [
  { 
    value: "12", 
    labelKey: "happyClients",
    defaultLabel: "HAPPY CLIENTS WORLDWIDE",
    badgeKey: "clientTrust",
    defaultBadge: "CLIENT TRUST",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=80"
  },
  { 
    value: "10+", 
    labelKey: "successfulProjects",
    defaultLabel: "SUCCESSFUL PROJECTS",
    badgeKey: "experience",
    defaultBadge: "EXPERIENCE",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80"
  },
  { 
    value: "2", 
    labelKey: "globalPartners",
    defaultLabel: "GLOBAL PARTNERS",
    badgeKey: "ecosystem",
    defaultBadge: "ECOSYSTEM",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80"
  },
  { 
    value: "44", 
    labelKey: "teamMembers",
    defaultLabel: "UANDWEIANS IN TEAM",
    badgeKey: "workforce",
    defaultBadge: "WORKFORCE",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80"
  }
];

const RAW_VALUES = [
  {
    icon: <Zap size={24} />,
    defaultTitle: "Relentless Innovation",
    defaultDesc: "We constantly push the boundaries of what's possible in semiconductor, embedded, and software engineering."
  },
  {
    icon: <Shield size={24} />,
    defaultTitle: "Uncompromising Quality",
    defaultDesc: "From first-pass silicon success to robust enterprise architectures, we deliver excellence without exception."
  },
  {
    icon: <Users size={24} />,
    defaultTitle: "Collaborative Partnership",
    defaultDesc: "We don't just act as vendors; we seamlessly integrate with your teams to achieve shared, ambitious goals."
  },
  {
    icon: <Globe size={24} />,
    defaultTitle: "Global Perspective",
    defaultDesc: "Our diverse, worldwide talent pool allows us to tackle complex problems with diverse, creative viewpoints."
  }
];

export default function Companyoverview() {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  const coreValueItems = t("aboutus.companyOverview.coreValues.items", { returnObjects: true, defaultValue: [] });

  return (
    <div className="bg-[#0b0b12] min-h-screen text-white pt-[120px] pb-24 overflow-hidden">

      {/* BACKGROUND ELEMENTS */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#ff6b1a]/10 blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-blue-600/5 blur-[150px] rounded-full mix-blend-screen" />
      </div>

      <div className="max-w-[1400px] mx-auto px-[5%] relative z-10">

        {/* HERO SECTION */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-32 items-center"
        >
          <div className="w-full lg:w-1/2 flex flex-col items-start">
            <SectionHeading 
              titlePart1={t("aboutus.companyOverview.hero.titlePart1", "Engineering the")}
              titlePart2={t("aboutus.companyOverview.hero.titlePart2", "Future Today")}
              breakLine={true}
              className="!mb-8"
              titleClassName="text-4xl md:text-5xl lg:text-6xl font-bold"
            />

            <motion.div variants={itemVariants} className="mb-10 max-w-xl">
              <Paragraph 
                text={t("aboutus.companyOverview.hero.description", "We are a premier technology engineering firm specializing in cutting-edge semiconductor design, deeply integrated embedded systems, and scalable enterprise software solutions.")}
                animated={false}
                className="!text-[11px] sm:!text-xs md:!text-[13px] lg:!text-sm xl:!text-[15px] 2xl:!text-base min-[1920px]:!text-[17px] min-[2560px]:!text-lg !text-white/60 !leading-relaxed"
              />
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4">
              <button className="px-6 py-3 text-sm md:text-base md:px-8 md:py-4 bg-[#ff6b1a] text-white rounded-full font-semibold hover:bg-orange-500 transition-colors flex items-center gap-2 group">
                {t("aboutus.companyOverview.hero.partnerButton", "Partner With Us")}
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="w-full lg:w-1/2 relative h-[500px]">
            <div className="absolute inset-0 rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(255,107,26,0.1)]">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&auto=format&fit=crop&q=80"
                alt="UANDWE Team Collaboration"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0b0b12]/80 via-transparent to-transparent" />
            </div>
          </motion.div>
        </motion.div>

        {/* METRICS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {RAW_METRICS.map((metric, idx) => {
              const badge = t(`aboutus.companyOverview.metrics.${metric.badgeKey}`, metric.defaultBadge);
              const label = t(`aboutus.companyOverview.metrics.${metric.labelKey}`, metric.defaultLabel);

              return (
                <div 
                  key={idx} 
                  className="relative overflow-hidden rounded-xl border border-white/5 h-[320px] flex flex-col justify-end p-8 group hover:border-[#ff6b1a]/30 transition-colors duration-500"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={metric.image} 
                      alt={badge}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b12] via-[#0b0b12]/90 to-[#0b0b12]/40" />
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="bg-[#1a1532] text-indigo-300 text-[10px] sm:text-xs font-bold px-3 py-1 rounded mb-4 uppercase tracking-wider shadow-lg border border-indigo-500/20">
                      {badge}
                    </div>
                    <div className="text-5xl md:text-6xl font-bold text-white mb-2 tracking-tight">
                      {metric.value}
                    </div>
                    <div className="text-[10px] sm:text-xs text-white/60 uppercase tracking-widest font-medium">
                      {label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* CORE VALUES */}
        <div className="mb-32">
          <SectionHeading
            titlePart1={t("aboutus.companyOverview.coreValues.titlePart1", "Our Core")}
            titlePart2={t("aboutus.companyOverview.coreValues.titlePart2", "Values")}
            className="mb-16 text-center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {RAW_VALUES.map((value, idx) => {
              const valObj = Array.isArray(coreValueItems) && coreValueItems[idx] ? coreValueItems[idx] : {};
              const title = valObj.title || value.defaultTitle;
              const desc = valObj.desc || value.defaultDesc;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-[#12121a] border border-white/5 hover:border-white/20 hover:bg-white/[0.02] transition-all duration-300 p-8 rounded-3xl flex gap-6"
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#ff6b1a]/10 border border-[#ff6b1a]/20 flex items-center justify-center text-[#ff6b1a]">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
                    <p className="text-white/60 leading-relaxed text-sm md:text-base">
                      {desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* OUR STORY CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[3rem] overflow-hidden"
        >
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop&q=80"
              alt="Global Network"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
          </div>
          <div className="relative z-10 p-12 md:p-24 text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              {t("aboutus.companyOverview.cta.heading", "Ready to engineer your next big breakthrough?")}
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
              {t("aboutus.companyOverview.cta.subheading", "Whether you need to tape out a complex 5nm ASIC, build a mission-critical RTOS, or develop a highly scalable cloud application, our engineers are ready.")}
            </p>
            <button className="px-10 py-5 bg-white text-black rounded-full font-bold text-lg hover:bg-[#ff6b1a] hover:text-white transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)]">
              {t("aboutus.companyOverview.cta.button", "Contact Our Team")}
            </button>
          </div>
        </motion.div>

      </div>
    </div>
  );
}

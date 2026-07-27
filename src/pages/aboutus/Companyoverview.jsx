import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Shield, Users, Zap, Globe, Award, ChevronRight } from 'lucide-react';
import SectionHeading from '../../components/SectionHeading';

const METRICS = [
  { value: "12", label: "Happy Clients" },
  { value: "10+", label: "Projects" },
  { value: "2", label: "Partners" },
  { value: "44", label: "UANDWEians" }
];

const VALUES = [
  {
    icon: <Zap size={24} />,
    title: "Relentless Innovation",
    desc: "We constantly push the boundaries of what's possible in semiconductor, embedded, and software engineering."
  },
  {
    icon: <Shield size={24} />,
    title: "Uncompromising Quality",
    desc: "From first-pass silicon success to robust enterprise architectures, we deliver excellence without exception."
  },
  {
    icon: <Users size={24} />,
    title: "Collaborative Partnership",
    desc: "We don't just act as vendors; we seamlessly integrate with your teams to achieve shared, ambitious goals."
  },
  {
    icon: <Globe size={24} />,
    title: "Global Perspective",
    desc: "Our diverse, worldwide talent pool allows us to tackle complex problems with diverse, creative viewpoints."
  }
];

export default function Companyoverview() {
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
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-[#ff6b1a] animate-pulse" />
              About UANDWE
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-8">
              Engineering the <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b1a] to-orange-400">Future Today</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-white/60 leading-relaxed mb-10 max-w-xl">
              We are a premier technology engineering firm specializing in cutting-edge semiconductor design, deeply integrated embedded systems, and scalable enterprise software solutions. 
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex gap-4">
              <button className="px-8 py-4 bg-[#ff6b1a] text-white rounded-full font-semibold hover:bg-orange-500 transition-colors flex items-center gap-2 group">
                Partner With Us
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
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="border border-white/10 bg-white/[0.02] rounded-[3rem] p-12 md:p-20 mb-32 backdrop-blur-sm"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 divide-x-0 md:divide-x divide-white/10">
            {METRICS.map((metric, idx) => (
              <div key={idx} className="flex flex-col items-center text-center px-4">
                <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-white/50 mb-4">
                  {metric.value}
                </div>
                <div className="text-[#ff6b1a] font-semibold text-sm uppercase tracking-widest">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CORE VALUES */}
        <div className="mb-32">
          <SectionHeading 
            titlePart1="Our Core" 
            titlePart2="Values" 
            className="mb-16 text-center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {VALUES.map((value, idx) => (
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
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-white/60 leading-relaxed text-sm md:text-base">
                    {value.desc}
                  </p>
                </div>
              </motion.div>
            ))}
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
              Ready to engineer your next big breakthrough?
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
              Whether you need to tape out a complex 5nm ASIC, build a mission-critical RTOS, or develop a highly scalable cloud application, our engineers are ready.
            </p>
            <button className="px-10 py-5 bg-white text-black rounded-full font-bold text-lg hover:bg-[#ff6b1a] hover:text-white transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)]">
              Contact Our Team
            </button>
          </div>
        </motion.div>

      </div>
    </div>
  );
}

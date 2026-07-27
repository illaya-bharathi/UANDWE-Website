import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, MessageCircle, Mail, ArrowRight, Award, Compass, Users } from 'lucide-react';
import SectionHeading from '../../components/SectionHeading';

const LEADERSHIP_TEAM = [
  {
    id: 1,
    name: "Dr. Alexander Reed",
    role: "Chief Executive Officer",
    bio: "With over 20 years in semiconductor and cloud computing, Dr. Reed drives UANDWE's strategic vision, fostering a culture of relentless innovation and global expansion.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&fit=crop&q=80",
    socials: { linkedin: "#", twitter: "#", email: "#" }
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Chief Technology Officer",
    bio: "A pioneer in advanced VLSI architectures and embedded systems, Sarah leads our global R&D initiatives, ensuring UANDWE remains at the bleeding edge of engineering.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80",
    socials: { linkedin: "#", twitter: "#", email: "#" }
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "VP of Engineering",
    bio: "Michael oversees all global hardware and software execution. He specializes in scaling high-performance engineering teams to deliver mission-critical projects.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&auto=format&fit=crop&q=80",
    socials: { linkedin: "#", twitter: "#", email: "#" }
  },
  {
    id: 4,
    name: "Elena Rodriguez",
    role: "Chief Operations Officer",
    bio: "Elena optimizes our global delivery networks, ensuring seamless collaboration between our clients and distributed engineering teams across 15 timezones.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop&q=80",
    socials: { linkedin: "#", twitter: "#", email: "#" }
  },
  {
    id: 5,
    name: "David Kim",
    role: "Head of Artificial Intelligence",
    bio: "David leads our AI & Data Science division, integrating intelligent automation and predictive modeling into enterprise-scale architectures.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80",
    socials: { linkedin: "#", twitter: "#", email: "#" }
  },
  {
    id: 6,
    name: "Priya Patel",
    role: "Head of VLSI & Silicon",
    bio: "A verification guru, Priya manages the end-to-end ASIC design lifecycle, specializing in ultra-low power FinFET architectures.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&auto=format&fit=crop&q=80",
    socials: { linkedin: "#", twitter: "#", email: "#" }
  }
];

export default function Leadership() {
  const [activeLeader, setActiveLeader] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <div className="bg-[#0b0b12] min-h-screen text-white pt-[120px] pb-24 overflow-hidden">
      
      {/* BACKGROUND ELEMENTS */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] bg-[#ff6b1a]/5 blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[800px] h-[800px] bg-blue-600/5 blur-[150px] rounded-full mix-blend-screen" />
      </div>

      <div className="max-w-[1400px] mx-auto px-[5%] relative z-10">
        
        {/* HERO SECTION */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center max-w-4xl mx-auto mb-32"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-[#ff6b1a]" />
            Executive Leadership
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-8">
            Guided by <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b1a] to-orange-400">Visionaries</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-white/60 leading-relaxed">
            Our leadership team brings together decades of experience across semiconductor design, enterprise software, and global operations to steer UANDWE toward engineering perfection.
          </motion.p>
        </motion.div>

        {/* TEAM GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {LEADERSHIP_TEAM.map((leader, idx) => (
            <motion.div
              key={leader.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onMouseEnter={() => setActiveLeader(leader.id)}
              onMouseLeave={() => setActiveLeader(null)}
              className="group relative bg-[#12121a] rounded-3xl overflow-hidden border border-white/10 hover:border-[#ff6b1a]/50 transition-colors duration-500 flex flex-col h-[500px]"
            >
              {/* Image Section */}
              <div className="h-[300px] w-full overflow-hidden relative">
                <img 
                  src={leader.image} 
                  alt={leader.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110 group-hover:brightness-110 grayscale-[30%] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12121a] via-[#12121a]/50 to-transparent" />
                
                {/* Social Links (Reveal on hover) */}
                <div className="absolute top-6 right-6 flex flex-col gap-2 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                  <a href={leader.socials.linkedin} className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-[#ff6b1a] hover:border-[#ff6b1a] transition-colors">
                    <Globe size={18} className="text-white" />
                  </a>
                  <a href={leader.socials.twitter} className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-[#ff6b1a] hover:border-[#ff6b1a] transition-colors">
                    <MessageCircle size={18} className="text-white" />
                  </a>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 flex flex-col flex-grow bg-[#12121a] relative z-10 -mt-10">
                <h3 className="text-2xl font-bold text-white mb-2">{leader.name}</h3>
                <div className="text-[#ff6b1a] font-semibold text-sm tracking-wider uppercase mb-4">
                  {leader.role}
                </div>
                
                <p className="text-white/60 text-sm leading-relaxed line-clamp-3">
                  {leader.bio}
                </p>
                
                {/* Expand Indicator */}
                <div className="mt-auto pt-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-xs font-semibold uppercase tracking-widest">Connect</span>
                  <a href={leader.socials.email} className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                    <Mail size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* PHILOSOPHY SECTION */}
        <div className="bg-white/[0.02] border border-white/5 rounded-[3rem] p-10 md:p-20 relative overflow-hidden mb-32">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff6b1a]/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px]" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
            <div>
              <SectionHeading 
                titlePart1="Our Leadership" 
                titlePart2="Philosophy" 
                className="mb-8"
              />
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                We believe that great engineering happens when brilliant minds are given the autonomy to innovate and the resources to succeed. Our leaders don't just manage; they roll up their sleeves, mentor the next generation, and foster an environment where technical excellence is the default standard.
              </p>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-[#ff6b1a]/10 flex items-center justify-center">
                  <Compass className="text-[#ff6b1a]" />
                </div>
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <Users className="text-blue-400" />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-[#12121a] p-8 rounded-3xl border border-white/10">
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b1a] to-orange-400 mb-4">60+</div>
                <div className="text-white font-bold mb-2">Years Combined Experience</div>
                <p className="text-white/50 text-sm leading-relaxed">Our board brings unmatched historical knowledge of the semiconductor and software industries.</p>
              </div>
              <div className="bg-[#12121a] p-8 rounded-3xl border border-white/10 mt-0 sm:mt-12">
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 mb-4">100%</div>
                <div className="text-white font-bold mb-2">Engineering Backgrounds</div>
                <p className="text-white/50 text-sm leading-relaxed">Every executive has hands-on experience designing the technologies we build today.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

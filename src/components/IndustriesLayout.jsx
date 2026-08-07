import React, { useRef, useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence, LayoutGroup } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowUpRight, AlertCircle, Target, Zap, ShieldCheck, Cpu, HeartPulse, Car, Radio, ArrowRight, Lightbulb, PenTool, CheckSquare, Rocket, ChevronDown, ChevronLeft, ChevronRight, Mail, X, Crosshair, Star } from 'lucide-react';
import ServiceLayout from './ServiceLayout';
import SectionHeading from './SectionHeading';
import Paragraph, { AnimatedText } from './Paragraph';
import SmallParagraph from './SmallParagraph';

/* ── ServiceRow Component (Replaces ServiceCard) ──────────────── */
const ServiceRow = React.memo(({ service, index }) => {
    const { t } = useTranslation();
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-white/[0.015] border border-white/[0.05] rounded-3xl p-6 md:p-8 hover:bg-white/[0.03] hover:border-white/[0.1] transition-all duration-500 overflow-hidden isolate"
        >
            {/* Subtle Gradient Glow on Hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-r from-[#ff6b1a]/5 via-transparent to-transparent pointer-events-none" />

            {/* Accent left border */}
            <div className="absolute top-0 left-0 bottom-0 w-[3px] bg-[#ff6b1a] scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500 ease-out" />

            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center relative z-10">
                <div className="flex-grow min-w-0">
                    <div className="flex items-center gap-4 mb-3">
                        <h4 className="text-base sm:text-lg md:text-xl font-medium text-white group-hover:text-white transition-colors duration-300 truncate">
                            {t(`header_menu.${service.name}`, service.name)}
                        </h4>
                    </div>
                    <div className="cursor-text relative z-20">
                        <SmallParagraph 
                            text={t(`header_menu.desc.${service.name}`, service.description)} 
                            animated={false}
                            className="!text-white/60 group-hover:!text-white/80 transition-colors duration-300 select-text !max-w-3xl" 
                        />
                    </div>
                </div>

                <div className="flex-shrink-0">
                    <Link to={service.path} className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-[#ff6b1a] border border-white/10 hover:border-[#ff6b1a] transition-all duration-300 group/btn">
                        <span className="text-sm font-medium text-white/70 group-hover/btn:text-white transition-colors duration-300">
                            Explore Service
                        </span>
                        <ArrowUpRight className="w-4 h-4 text-white/50 group-hover/btn:text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all duration-300" />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
});
ServiceRow.displayName = 'ServiceRow';

/* ── Circuit-board SVG background pattern ─────────────────────── */
const CIRCUIT_PATTERN = `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='0.4'%3E%3Cpath d='M40 0v80'/%3E%3Cpath d='M0 40h80'/%3E%3Cpath d='M20 0v20h20'/%3E%3Cpath d='M60 80v-20h-20'/%3E%3Ccircle cx='40' cy='40' r='3'/%3E%3Ccircle cx='20' cy='20' r='2'/%3E%3Ccircle cx='60' cy='60' r='2'/%3E%3C/g%3E%3C/svg%3E")`;

/* ══════════════════════════════════════════════════════════════
   WhyChooseUs Component (Interactive Split-Screen Accordion)
   ══════════════════════════════════════════════════════════════ */
const WhyChooseUs = ({ categories }) => {
    const { t } = useTranslation();
    const [activeIndex, setActiveIndex] = useState(0);
    const sectionRef = React.useRef(null);
    const activeCategory = categories[activeIndex];

    const handleCategoryChange = (idx) => {
        setActiveIndex(idx);
        if (sectionRef.current) {
            // Scroll to the top of the section with a comfortable offset
            const y = sectionRef.current.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <section ref={sectionRef} className="relative bg-[#0b0b12] py-12 lg:py-16 px-[4%] md:px-[5%]">
            <div
                className="absolute inset-0 opacity-[0.012] pointer-events-none"
                style={{ backgroundImage: CIRCUIT_PATTERN, backgroundSize: '80px 80px' }}
            />
            <div className="absolute top-0 right-0 w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] bg-[#ff6b1a]/[0.02] blur-[150px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3" />

            <div className="relative z-10 w-full mx-auto max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                    
                    {/* Left Sticky Column */}
                    <div className="w-full lg:w-1/3 flex flex-col lg:sticky lg:top-32 h-fit">
                        <SectionHeading
                            titlePart1={t("industries_layout.core", "Core")}
                            titlePart2={t("industries_layout.capabilities", "Capabilities")}
                            className="!mb-6"
                        />
                        
                        <div className="flex flex-col gap-3 mt-4">
                            {categories.map((cat, idx) => (
                                <button
                                    key={cat.name}
                                    onClick={() => handleCategoryChange(idx)}
                                    className={`relative flex items-center justify-between p-4 md:p-5 rounded-2xl transition-all duration-300 text-left overflow-hidden group ${
                                        activeIndex === idx ? 'bg-white/[0.03] border border-white/[0.08]' : 'bg-transparent border border-transparent hover:bg-white/[0.02]'
                                    }`}
                                >
                                    {activeIndex === idx && (
                                        <motion.div 
                                            layoutId="activeCategoryBg"
                                            className="absolute inset-0 bg-gradient-to-r from-[#ff6b1a]/10 to-transparent pointer-events-none"
                                        />
                                    )}
                                    
                                    <div className="relative z-10 flex flex-col gap-1">
                                        <span className={`text-base md:text-lg font-medium transition-colors duration-300 ${
                                            activeIndex === idx ? 'text-white' : 'text-white/40 group-hover:text-white/70'
                                        }`} style={{ whiteSpace: 'nowrap' }}>
                                            {t(`header_menu.${cat.name}`, cat.name)}
                                        </span>
                                        <span className={`text-xs uppercase tracking-wider font-semibold transition-colors duration-300 ${
                                            activeIndex === idx ? 'text-[#ff6b1a]' : 'text-transparent'
                                        }`}>
                                            Services
                                        </span>
                                    </div>

                                    <div className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                                        activeIndex === idx ? 'bg-[#ff6b1a] shadow-[0_0_15px_rgba(255,107,26,0.3)]' : 'bg-white/5 group-hover:bg-white/10'
                                    }`}>
                                        <ArrowUpRight className={`w-4 h-4 transition-all duration-300 ${
                                            activeIndex === idx ? 'text-white rotate-45 scale-110' : 'text-white/30'
                                        }`} />
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Scrollable Content Column */}
                    <div className="w-full lg:w-2/3 min-w-0">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="flex flex-col gap-5"
                            >
                                {activeCategory.links.map((service, i) => (
                                    <ServiceRow key={service.name} service={service} index={i} />
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    );
};

/* ══════════════════════════════════════════════════════════════
   IndustryChallenge Component
   ══════════════════════════════════════════════════════════════ */
const defaultChallenge = {
    title: "Navigating Complexity in a Fast-Paced Market",
    description: "Today's engineering landscape is more demanding than ever. Companies face immense pressure to deliver flawless products while balancing tight deadlines, scaling architecture, and meeting stringent international safety regulations.",
    points: [
        {
            title: "Regulatory & Safety Compliance",
            description: "Meeting rigorous international standards and functional safety requirements without delaying critical launch cycles."
        },
        {
            title: "Complex Systems Integration",
            description: "Seamlessly combining hardware, firmware, and software into a unified architecture that operates flawlessly under stress."
        },
        {
            title: "Accelerated Time-to-Market",
            description: "Remaining competitive requires drastically faster development iterations without compromising on precision or product quality."
        }
    ]
};

const IndustryChallenge = ({ challenge = defaultChallenge, pageKey }) => {
    const { t } = useTranslation();
    if (!challenge) return null;

    const tVal = (key, fallback) => pageKey ? t(`industries_pages.${pageKey}.challenge.${key}`, fallback) : fallback;

    return (
        <section className="relative bg-[#0b0b12] py-12 lg:py-16 px-[4%] md:px-[5%] overflow-hidden">
            <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-red-500/[0.03] blur-[140px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3" />

            <div className="relative z-10 w-full mx-auto">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
                    <div className="lg:w-5/12">
                        <SectionHeading
                            titlePart1={t("industries_layout.the", "The")}
                            titlePart2={t("industries_layout.challenge", "Challenge")}
                            className="mb-8"
                        />
                        <Paragraph 
                            text={tVal('title', challenge.title)} 
                            className="!text-lg lg:!text-xl !font-bold !text-white !mb-6 !max-w-none tracking-tight"
                        />
                        <div className="mb-8">
                            <SmallParagraph text={tVal('description', challenge.description)} className="!text-white/60" />
                        </div>

                        <div className="flex flex-col gap-3 mt-4">
                            {(challenge.risks || [
                                "Longer Time-to-Market",
                                "Higher Development Costs",
                                "Increased Risk of Silicon Re-spins",
                                "Lower Product Competitiveness"
                            ]).map((item, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + (i * 0.1), duration: 0.5 }}
                                    className="flex items-center gap-3 text-white/80 group"
                                >
                                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#ff6b1a]/70 group-hover:bg-[#ff6b1a] group-hover:scale-125 transition-all duration-300" />
                                    <span className="text-[11px] md:text-xs font-medium group-hover:text-white transition-colors duration-300 tracking-wide">{tVal(`risks.${i}`, item)}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-7/12 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                        {challenge.points.map((point, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: 0.2 + (idx * 0.15), duration: 0.6, ease: "easeOut" }}
                                className="flex items-start gap-4 md:gap-6 p-6 md:p-8 rounded-3xl bg-white/[0.015] border border-red-500/[0.05] hover:border-[#ff6b1a]/40 hover:bg-white/[0.03] transition-colors duration-500 group"
                            >
                                <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-1 border border-red-500/20 group-hover:bg-[#ff6b1a]/20 group-hover:border-[#ff6b1a]/30 transition-colors duration-500">
                                    <Crosshair className="w-5 h-5 text-red-400 group-hover:text-[#ff6b1a] transition-colors duration-300" />
                                </div>
                                <div>
                                    <h4 className="text-base sm:text-lg md:text-xl font-medium text-white mb-3 group-hover:text-[#ff6b1a] transition-colors duration-300 tracking-tight">
                                        {tVal(`points.${idx}.title`, point.title)}
                                    </h4>
                                    <SmallParagraph text={tVal(`points.${idx}.description`, point.description)} className="!text-white/50" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

/* ══════════════════════════════════════════════════════════════
   IndustryApproach Component
   ══════════════════════════════════════════════════════════════ */
const iconMap = {
    Target: <Target className="w-8 h-8 text-[#ff6b1a]" />,
    Zap: <Zap className="w-8 h-8 text-[#ff6b1a]" />,
    ShieldCheck: <ShieldCheck className="w-8 h-8 text-[#ff6b1a]" />,
    Cpu: <Cpu className="w-8 h-8 text-[#ff6b1a]" />,
    HeartPulse: <HeartPulse className="w-8 h-8 text-[#ff6b1a]" />,
    Car: <Car className="w-8 h-8 text-[#ff6b1a]" />,
    Radio: <Radio className="w-8 h-8 text-[#ff6b1a]" />
};

const defaultApproach = [
    {
        icon: "Target",
        title: "Precision Engineering",
        description: "We deliver exact, mission-critical solutions tailored to the unique regulatory and technical demands of the industry."
    },
    {
        icon: "Zap",
        title: "Accelerated Innovation",
        description: "Leveraging our deep tech expertise to drastically reduce time-to-market without compromising on quality or performance."
    },
    {
        icon: "ShieldCheck",
        title: "Uncompromising Reliability",
        description: "Built for scale and endurance, ensuring our hardware and software systems operate flawlessly in the most demanding environments."
    }
];

const IndustryApproach = ({ approach = defaultApproach, pageKey }) => {
    const { t } = useTranslation();
    if (!approach || approach.length === 0) return null;

    const tVal = (idx, key, fallback) => pageKey ? t(`industries_pages.${pageKey}.approach.${idx}.${key}`, fallback) : fallback;

    return (
        <section className="relative bg-[#0b0b12] py-12 lg:py-16 px-[4%] md:px-[5%]">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,107,26,0.03)_0%,transparent_70%)] pointer-events-none" />

            <div className="relative z-10 w-full mx-auto">
                <div className="flex flex-col gap-4 mb-12 md:mb-20">
                    <SectionHeading
                        titlePart1={t("industries_layout.our", "Our")}
                        titlePart2={t("industries_layout.approach", "Approach")}
                        className="!mb-0 shrink-0"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
                    {approach.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: idx * 0.15, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                            className="p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/[0.06] hover:border-[#ff6b1a]/40 hover:bg-white/[0.04] transition-all duration-500 group relative overflow-hidden flex flex-col h-full"
                        >
                            <div className="absolute -top-6 -right-6 p-8 opacity-0 group-hover:opacity-[0.03] transition-all duration-700 transform group-hover:scale-150 rotate-12 pointer-events-none">
                                {iconMap[item.icon] || <Target className="w-48 h-48 text-white" />}
                            </div>

                            <div className="w-16 h-16 rounded-2xl bg-[#ff6b1a]/10 flex items-center justify-center mb-8 border border-[#ff6b1a]/20 group-hover:bg-[#ff6b1a]/20 transition-colors duration-500 shadow-[0_0_20px_rgba(255,107,26,0.1)]">
                                {iconMap[item.icon] || <Target className="w-8 h-8 text-[#ff6b1a]" />}
                            </div>

                            <h3 className="text-base sm:text-lg md:text-xl font-medium text-white mb-4 group-hover:text-[#ff6b1a] transition-colors duration-300 tracking-tight">
                                {tVal(idx, 'title', item.title)}
                            </h3>

                            <SmallParagraph 
                                text={tVal(idx, 'description', item.description)} 
                                className="!text-white/60 flex-grow" 
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};


/* ══════════════════════════════════════════════════════════════
   IndustryTestimonial Component (Glassmorphism Grid)
   ══════════════════════════════════════════════════════════════ */
const defaultTestimonials = [
    {
        quote: "UANDWE delivered exceptional engineering talent that seamlessly integrated with our core team. Their dedication to quality and deep domain expertise accelerated our product roadmap by six months.",
        author: "Michael Chang",
        title: "VP of Engineering, Global Tech Corp"
    },
    {
        quote: "The level of professionalism and technical depth is outstanding. They don't just write code; they architect robust solutions that scale gracefully under pressure.",
        author: "Elena Rostova",
        title: "CTO, InnovateX"
    }
];

const IndustryTestimonial = ({ testimonials = defaultTestimonials, pageKey }) => {
    const { t } = useTranslation();
    if (!testimonials || testimonials.length === 0) return null;

    const tVal = (idx, key, fallback) => pageKey ? t(`industries_pages.${pageKey}.testimonials.${idx}.${key}`, fallback) : fallback;

    return (
        <section className="relative bg-[#0b0b12] py-12 lg:py-16 px-[4%] md:px-[5%] overflow-hidden">
            {/* Ambient Background Blur */}
            <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[#ff6b1a]/[0.02] blur-[150px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3" />
            
            <div className="relative z-10 w-full mx-auto max-w-7xl">
                <SectionHeading titlePart1={t("industries_layout.client", "Client")} titlePart2={t("industries_layout.success_stories", "Success Stories")} className="mb-12 md:mb-20" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {testimonials.map((testimonial, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: idx * 0.15, duration: 0.6 }}
                            className="group relative flex flex-col justify-between p-8 md:p-10 rounded-3xl bg-white/[0.015] border border-white/[0.05] hover:border-[#ff6b1a]/30 hover:bg-white/[0.03] transition-all duration-500 overflow-hidden isolate"
                        >
                            {/* Hover Glow */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-br from-[#ff6b1a]/5 via-transparent to-transparent" />
                            
                            {/* Top Accent Line */}
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#ff6b1a]/0 to-transparent group-hover:via-[#ff6b1a] transition-all duration-700" />

                            <div className="relative z-10 flex flex-col flex-grow">
                                <div className="flex gap-1 mb-6 relative z-10">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 text-[#ff6b1a] drop-shadow-[0_0_8px_rgba(255,107,26,0.5)]" fill="#ff6b1a" />
                                    ))}
                                </div>

                                <h3 className="relative z-10 text-[9px] sm:text-[10px] md:text-[11px] lg:text-xs xl:text-[13px] 2xl:text-sm min-[1920px]:text-[15px] min-[2560px]:text-base font-medium leading-relaxed text-white/80 group-hover:text-white transition-colors duration-300 mb-10">
                                    "{tVal(idx, 'quote', testimonial.quote)}"
                                </h3>
                            </div>

                            <div className="relative z-10 flex items-center gap-4 pt-6 border-t border-white/[0.05] group-hover:border-[#ff6b1a]/20 transition-colors duration-500 mt-auto">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#ff6b1a]/50 group-hover:bg-[#ff6b1a]/10 transition-all duration-500 flex-shrink-0">
                                    <span className="text-white group-hover:text-[#ff6b1a] font-medium text-lg transition-colors duration-500">
                                        {testimonial.author.charAt(0)}
                                    </span>
                                </div>
                                <div className="flex-grow min-w-0">
                                    <h5 className="text-base font-medium text-white mb-0.5 tracking-tight group-hover:text-[#ff6b1a] transition-colors duration-500 truncate">
                                        {tVal(idx, 'author', testimonial.author)}
                                    </h5>
                                    <p className="text-xs font-medium text-white/40 uppercase tracking-wider truncate">
                                        {tVal(idx, 'title', testimonial.title)}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

/* ══════════════════════════════════════════════════════════════
   IndustryExperts Component
   ══════════════════════════════════════════════════════════════ */
const defaultExperts = [
    {
        name: "Dr. Alan Turing",
        role: "Chief Systems Architect",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
        bio: "20+ years of deep tech experience leading architecture for next-generation platforms."
    },
    {
        name: "Sarah Connor",
        role: "Head of Engineering",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
        bio: "Specialist in agile deployment and scaling robust teams for mission-critical applications."
    }
];

const IndustryExperts = ({ experts = defaultExperts, pageKey }) => {
    const { t } = useTranslation();
    if (!experts || experts.length === 0) return null;
    
    const tVal = (idx, key, fallback) => pageKey ? t(`industries_pages.${pageKey}.experts.${idx}.${key}`, fallback) : fallback;
    
    return (
        <section className="pt-8 pb-16 px-[4%] md:px-[5%] w-full mx-auto relative z-10 bg-[#0b0b12]">
            <div className="flex flex-col gap-8 mb-12 items-start text-left w-full">
                <div className="w-full">
                    <SectionHeading 
                        titlePart1={t("industries_layout.our", "Our")}
                        titlePart2={t("industries_layout.experts", "Experts")}
                        className="mb-0"
                    />
                </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {experts.map((expert, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="group relative flex flex-col items-center bg-white/[0.02] border border-white/[0.05] rounded-3xl p-6 hover:border-[#ff6b1a]/30 transition-all duration-300 hover:bg-white/[0.04]"
                    >
                        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-6 border-4 border-white/5 group-hover:border-[#ff6b1a]/50 transition-colors shadow-2xl">
                            <img src={expert.image} alt={expert.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110" />
                        </div>
                        <h3 className="text-xl font-normal text-white mb-2 text-center">{tVal(i, 'name', expert.name)}</h3>
                        <p className="text-[#ff6b1a] text-sm mb-4 tracking-wide uppercase text-center">{tVal(i, 'role', expert.role)}</p>
                        <p className="text-white/60 text-sm text-center leading-relaxed">{tVal(i, 'bio', expert.bio || expert.description)}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};



const IndustryCTA = () => {
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', description: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Clear data on send as requested
        setFormData({ name: '', email: '', description: '' });
        // Close modal after sending
        setIsModalOpen(false);
    };

    return (
        <section id="cta-section" className="relative bg-[#0a0a0f] py-12 lg:py-16 px-[4%] md:px-[5%] overflow-hidden">
            {/* Tech Grid Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#ff6b1a_1px,_transparent_1px)] bg-[size:32px_32px] opacity-[0.08]" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-transparent to-[#0a0a0f]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f] via-transparent to-[#0a0a0f]" />
            
            <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-center justify-center p-8 md:p-16 rounded-[2rem] bg-white/[0.015] border border-white/5 backdrop-blur-sm"
                >
                    <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-normal text-white mb-6 tracking-tight leading-[1.2]">
                        {t("industries_layout.cta.ready_to", "Ready to")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b1a] to-orange-400 font-medium">{t("industries_layout.cta.accelerate", "Accelerate")}</span> {t("industries_layout.cta.your_innovation", "Your Innovation?")}
                    </h2>
    
                    <Paragraph className="!text-white/70 !mb-10 max-w-2xl mx-auto text-center">
                        {t("industries_layout.cta.description", "Partner with our world-class engineering teams to turn your most complex technical challenges into market-leading solutions.")}
                    </Paragraph>
                    
                    <button 
                        onClick={() => setIsModalOpen(true)}
                        className="px-8 py-3.5 bg-[#ff6b1a] text-white rounded-full font-medium text-base hover:bg-[#ff8c42] transition-colors shadow-[0_0_20px_rgba(255,107,26,0.2)] hover:shadow-[0_0_30px_rgba(255,107,26,0.4)] flex items-center justify-center gap-2 group/btn"
                    >
                        <span>{t("industries_layout.cta.get_in_touch", "Get in Touch")}</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                </motion.div>
            </div>

            {/* Popup Modal Form */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                        {/* Backdrop */}
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsModalOpen(false)}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
                        />
                        
                        {/* Modal Container */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative w-full max-w-lg bg-[#12121a] border border-white/10 rounded-2xl p-8 shadow-2xl text-left"
                        >
                            {/* Close Button */}
                            <button 
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>
                            
                            <h3 className="text-2xl font-bold text-white mb-6">{t("industries_layout.cta.get_in_touch", "Get in Touch")}</h3>
                            
                            <form onSubmit={handleSubmit} className="space-y-4 text-left">
                                <div>
                                    <label className="block text-sm font-medium text-white/70 mb-1">{t("industries_layout.cta.form.name", "Name")}</label>
                                    <input 
                                        type="text" 
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#ff6b1a] transition-colors"
                                        placeholder={t("industries_layout.cta.form.name_placeholder", "John Doe")}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-white/70 mb-1">{t("industries_layout.cta.form.email", "Email")}</label>
                                    <input 
                                        type="email" 
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#ff6b1a] transition-colors"
                                        placeholder={t("industries_layout.cta.form.email_placeholder", "john@company.com")}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-white/70 mb-1">{t("industries_layout.cta.form.description", "Description")}</label>
                                    <textarea 
                                        required
                                        rows="4"
                                        value={formData.description}
                                        onChange={(e) => setFormData({...formData, description: e.target.value})}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#ff6b1a] transition-colors resize-none"
                                        placeholder={t("industries_layout.cta.form.description_placeholder", "Tell us about your project...")}
                                    />
                                </div>
                                <button 
                                    type="submit"
                                    className="w-full mt-6 py-4 bg-[#ff6b1a] hover:bg-[#ff8c42] text-white rounded-full font-medium transition-colors flex items-center justify-center gap-2"
                                >
                                    {t("industries_layout.cta.submit_request", "Submit Request")}
                                </button>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

/* ══════════════════════════════════════════════════════════════
   IndustriesLayout Component
   ══════════════════════════════════════════════════════════════ */
const IndustriesLayout = ({ hero, categories, approach, challenge, experts, testimonials, pageKey }) => {
    return (
        <>
            <ServiceLayout hero={hero} hideCTA={true} experts={null} />
            <IndustryChallenge challenge={challenge} pageKey={pageKey} />
            <IndustryApproach approach={approach} pageKey={pageKey} />
            <WhyChooseUs categories={categories} />
            <IndustryTestimonial testimonials={testimonials} pageKey={pageKey} />
            <IndustryExperts experts={experts} pageKey={pageKey} />
            <IndustryCTA />
        </>
    );
};

export default IndustriesLayout;

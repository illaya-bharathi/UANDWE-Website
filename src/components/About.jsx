import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Eye, Target, BookOpen, ArrowRight } from "lucide-react";
import chipImg from "../assets/images/chip.png";
import semiconductorr from "../assets/images/semiconductorr.png"
import medical from "../assets/images/medicalimage.png"
import aiimage from "../assets/images/aiimage.png"
import StickyScrollWrapper from "./ui/StickyScrollWrapper";
import SectionHeading from "./SectionHeading";
import Paragraph from "./Paragraph";
import SmallParagraph from "./SmallParagraph";



const backgroundImages = [
  { id: 'hardware', url: chipImg },
  { id: 'semiconductor', url: semiconductorr },
  { id: 'medical', url: medical },

  { id: 'ai', url: aiimage },
];


const cards = [
  {
    icon: <Eye size={20} />,
    title: "Vision",
    desc: "To become the primary nervous system for the next industrial revolution.",
    footer: "PERSPECTIVE",
    footerIcon: <ArrowRight size={14} />,
    highlight: false,
  },
  {
    icon: <Target size={20} />,
    title: "Mission",
    desc: "We engineer high-fidelity hardware solutions that dissolve the barrier between silicon and reality.",
    footer: "PURPOSE",
    footerIcon: <ArrowRight size={14} />,
    highlight: false,
  },
  {
    icon: <BookOpen size={20} />,
    title: "Origin",
    desc: "From a small research lab in Zurich to a global leader in kinetic hardware architecture.",
    footer: "HISTORY",
    footerIcon: <ArrowRight size={14} />,
    highlight: false,
  },
];

export default function About() {
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.3 }); // Trigger when 30% visible

  useEffect(() => {
    if (!isInView) return; // Pause slider if not in viewport

    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [isInView]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const content = (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full min-h-screen lg:h-screen lg:min-h-[100dvh] overflow-hidden bg-[#0b0b12] text-white
                 px-[4%] py-24 lg:py-0
                 flex flex-col justify-center"
    >
      {/* ANIMATED BACKGROUND SLIDER */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={currentImageIndex}
            src={backgroundImages[currentImageIndex].url}
            alt="background"
            initial={{
              opacity: 0,
              scale: 1.05,
              rotate: 0
            }}
            animate={{
              opacity: 0.4,
              scale: 1,
              rotate: currentImageIndex === 0 ? 15 : 0
            }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1.5, ease: "easeInOut" },
              scale: { duration: 1.5, ease: "easeInOut" },
              rotate: currentImageIndex === 0 ? { duration: 3, ease: "linear" } : { duration: 0 }
            }}
            className="absolute inset-0 w-full h-full object-cover origin-center"
          />
        </AnimatePresence>

        {/* Radial fade overlay - Improved gradient stops */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#0b0b12_85%)] sm:bg-[radial-gradient(circle_at_center,transparent_35%,#0b0b12_90%)]" />
        <div className="absolute inset-0 bg-[#0b0b12]/40" /> {/* Added darkness layer for text contrast */}
      </div>

      {/* CONTENT */}
      <div className="relative z-10 w-full">
        {/* Heading */}
        <SectionHeading
          titlePart1={
            <>
              {t("about.heading.line1")} <br className="hidden sm:block" />
              {t("about.heading.line2")} <br className="hidden sm:block" />
              {t("about.heading.line3")}
            </>
          }
          titlePart2={t("about.heading.highlight")}
          className="mb-12 sm:mb-16 md:mb-20"
        />

        {/* Cards Grid - Responsive gap and columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {cards.map((card, i) => {
            const cardKey = i === 0 ? "vision" : i === 1 ? "mission" : "origin";
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
                whileHover={{ y: { xs: -4, sm: -6, md: -8 } }}
                className={`
                relative rounded-xl sm:rounded-2xl overflow-hidden
                p-4 sm:p-5 md:p-6 lg:p-7 
                min-h-[220px] sm:min-h-[240px] md:min-h-[260px] 
                flex flex-col
                transition-all duration-500 group cursor-pointer
                ${card.highlight
                    ? "border border-orange-500/30 bg-[linear-gradient(145deg,rgba(255,107,26,0.07),rgba(255,255,255,0.02))]"
                    : "border border-white/8 bg-[linear-gradient(145deg,rgba(255,255,255,0.055),rgba(255,255,255,0.015))]"
                  }
                shadow-[inset_0_1px_1px_rgba(255,255,255,0.07),0_12px_32px_rgba(0,0,0,0.5)]
                hover:border-orange-500/40
                hover:shadow-[0_0_30px_rgba(255,107,26,0.08)] sm:hover:shadow-[0_0_40px_rgba(255,107,26,0.1)] lg:hover:shadow-[0_0_50px_rgba(255,107,26,0.12)]
              `}
              >
                {/* Icon circle - Responsive sizing */}
                <div
                  className={`
                  w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 
                  rounded-full flex items-center justify-center 
                  mb-4 sm:mb-5 md:mb-6
                  transition-all duration-300
                  group-hover:scale-105
                  ${card.highlight
                      ? "bg-orange-500/20 text-orange-400 border border-orange-500/30"
                      : "bg-white/8 text-gray-300 border border-white/10"
                    }
                `}
                >
                  {card.icon}
                </div>

                {/* Title - Responsive text */}
                <h3 className="text-sm sm:text-base md:text-lg mb-2 tracking-tight font-normal">
                  {t(`about.cards.${cardKey}.title`)}
                </h3>

                <Paragraph
                  text={t(`about.cards.${cardKey}.desc`)}
                  className="text-gray-400 max-w-none relative z-10"
                  delay={i * 0.15 + 0.2}
                />

                {/* Footer Link */}
                <div className="mt-auto pt-8 flex items-center text-white/40 text-[10px] sm:text-xs font-semibold tracking-wider uppercase group-hover:text-orange-400 transition-colors duration-300 relative z-10">
                  <span>{t("common.read_more", card.footer || "Read More")}</span>
                  <div className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
                    {card.footerIcon}
                  </div>
                </div>

                {/* Faint Watermark Icon */}
                <div className="absolute -bottom-6 -right-6 text-white/[0.02] group-hover:text-orange-500/[0.05] transition-colors duration-500 pointer-events-none transform scale-[4]">
                  {card.icon}
                </div>

                <div className="absolute bottom-0 left-0 w-full h-[2px] rounded-b-xl sm:rounded-b-2xl bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );

  return isMobile ? content : <StickyScrollWrapper>{content}</StickyScrollWrapper>;
}
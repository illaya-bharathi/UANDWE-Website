import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import automation from "../assets/images/automation.png";
import telecom from "../assets/images/telecom.png";
import medical from "../assets/images/medical.png";
import semiconductor from "../assets/images/semiconductor.png";
import Paragraph from "./Paragraph";

export default function Industries() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);

    if (sectionRef.current && cardsRef.current.length > 0) {
      gsap.fromTo(cardsRef.current,
        {
          x: 180,
          opacity: 0,
          scale: 0.95
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.18,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            once: true
          }
        }
      );
    }

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const INDUSTRIES = [
    {
      num: "01",
      key: "semiconductor",
      img: semiconductor,
      path: "/industries/semiconductor"
    },
    {
      num: "02",
      key: "telecom",
      img: telecom,
      path: "/industries/communication-engineering"
    },
    {
      num: "03",
      key: "automotive",
      img: automation,
      path: "/industries/automotive"
    },
    {
      num: "04",
      key: "medical",
      img: medical,
      path: "/industries/healthcare"
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="industries"
      className="relative z-10 bg-[#0b0b12] text-white px-4 sm:px-6 md:px-[5%] pt-16 pb-8 sm:pt-24 sm:pb-8 overflow-hidden"
    >
      <SectionHeading
        titlePart1={t("industries.heading_part1")}
        titlePart2={t("industries.heading_part2")}
        className="w-full mx-auto !mb-12"
      />

      {/* Accordion Container */}
      <div className="w-full mx-auto h-[600px] md:h-[500px] lg:h-[600px] flex flex-col md:flex-row gap-3 sm:gap-4">
        {INDUSTRIES.map((industry, index) => {
          const isActive = activeTab === index;
          
          return (
            <motion.div
              ref={(el) => (cardsRef.current[index] = el)}
              key={industry.key}
              onMouseEnter={() => !isMobile && setActiveTab(index)}
              onClick={() => {
                if (isActive) {
                  navigate(industry.path);
                } else {
                  setActiveTab(index);
                }
              }}
              className="group relative rounded-2xl md:rounded-[2rem] overflow-hidden cursor-pointer flex-shrink-0 opacity-0"
              initial={false}
              animate={{
                flex: isActive ? (isMobile ? 3 : 3) : 1, // Expand active, shrink inactive
              }}
              transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-105"
                style={{ backgroundImage: `url(${industry.img})` }}
              />
              
              {/* Gradients */}
              <div className={`absolute inset-0 bg-gradient-to-t from-[#0b0b12] via-[#0b0b12]/60 to-transparent transition-opacity duration-500 ${isActive ? 'opacity-90' : 'opacity-70'}`} />
              <div className={`absolute inset-0 bg-black/40 md:bg-black/20 transition-opacity duration-500 ${isActive ? 'opacity-0' : 'opacity-100'}`} />
              
              <div className={`absolute inset-0 bg-orange-500/10 mix-blend-overlay transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`} />

              {/* Content Container */}
              <div className={`absolute inset-0 p-5 md:p-8 flex flex-col ${isMobile ? 'justify-end' : (isActive ? 'justify-end' : 'justify-end md:justify-center md:items-center')}`}>
                

                <h3 className={`text-lg md:text-2xl lg:text-3xl tracking-tight leading-tight transition-all duration-300 font-normal whitespace-nowrap ${
                  isActive 
                    ? 'text-white mb-2 md:mb-4 origin-left' 
                    : 'text-white/70 origin-center md:-rotate-90 md:translate-y-16'
                }`}>
                  {t(`industries.items.${industry.key}.title`)}
                </h3>

                <AnimatePresence mode="wait">
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, y: 10 }}
                      animate={{ opacity: 1, height: "auto", y: 0 }}
                      exit={{ opacity: 0, height: 0, y: 10 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      className="overflow-hidden"
                    >
                      <Paragraph
                        text={t(`industries.items.${industry.key}.desc`)}
                        className="text-gray-300 max-w-md mb-4 md:mb-6 line-clamp-2 md:line-clamp-none text-xs sm:text-sm md:text-base"
                        animated={false}
                      />

                      <div className="inline-flex items-center text-orange-400 text-xs md:text-sm font-semibold tracking-wider uppercase">
                        <span>Explore Sector</span>
                        <ArrowRight className="ml-2 w-3 h-3 md:w-4 md:h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import automation from "../assets/images/automation.png";
import telecom from "../assets/images/telecom.png";
import medical from "../assets/images/medical.png";
import semiconductor from "../assets/images/semiconductor.png";

const slideVariants = {
  enter: (dir) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
};

export default function Industries() {
  const { t } = useTranslation();
  const navigate = useNavigate();

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

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isInView, setIsInView] = useState(false);
  const intervalRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const sectionRef = useRef(null);

  const goTo = useCallback((index) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  }, [current]);

  const next = useCallback(() => {
    if (current < INDUSTRIES.length - 1) {
      setDirection(1);
      setCurrent((c) => c + 1);
    } else {
      setDirection(1);
      setCurrent(0);
    }
  }, [current]);

  const prev = useCallback(() => {
    if (current > 0) {
      setDirection(-1);
      setCurrent((c) => c - 1);
    } else {
      setDirection(-1);
      setCurrent(INDUSTRIES.length - 1);
    }
  }, [current]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isAutoPlaying && isInView) {
      intervalRef.current = setInterval(() => {
        next();
      }, 3000);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, isInView, next]);

  useEffect(() => {
    if (isInView) {
      setIsAutoPlaying(true);
    } else {
      setIsAutoPlaying(false);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }
  }, [isInView]);

  const pauseAutoPlay = useCallback(() => {
    setIsAutoPlaying(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setTimeout(() => {
      if (isInView) {
        setIsAutoPlaying(true);
      }
    }, 10000);
  }, [isInView]);

  const handleNext = () => {
    pauseAutoPlay();
    next();
  };

  const handlePrev = () => {
    pauseAutoPlay();
    prev();
  };

  const handleGoTo = (index) => {
    pauseAutoPlay();
    goTo(index);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    pauseAutoPlay();
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  const industry = INDUSTRIES[current];

  return (
    <section
      ref={sectionRef}
      id="industries"
      className="group relative z-10 w-full bg-[#0a0a0f] text-white overflow-hidden cursor-pointer"
      style={{ height: "100vh", minHeight: "600px" }}
      onClick={(e) => {
        if (!e.target.closest('button')) {
          navigate(industry.path);
        }
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => { if (isInView) setIsAutoPlaying(true); }}
    >
      <div className="absolute inset-0">
        <AnimatePresence custom={direction} initial={false}>
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.7, ease: [0.77, 0, 0.175, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${industry.img})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/55" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute inset-0 z-20 w-full h-full px-4 sm:px-6 md:px-[5%] pointer-events-none">
        <div className="relative w-full h-full">
          {/* TOP HEADING */}
          <SectionHeading
            titlePart1={t("industries.heading_part1")}
            titlePart2={t("industries.heading_part2")}
            breakLine={true}
            className="absolute top-0 left-0 pt-20 md:pt-24 pointer-events-auto"
          />

          {/* ARROWS */}
          <button
            onClick={handlePrev}
            className="opacity-0 group-hover:opacity-100 absolute top-1/2 -translate-y-1/2 left-0 w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/25 bg-black/20 backdrop-blur-sm text-white hover:border-orange-500/60 hover:bg-black/40 hover:text-orange-400 flex items-center justify-center transition-all duration-300 pointer-events-auto z-30"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="opacity-0 group-hover:opacity-100 absolute top-1/2 -translate-y-1/2 right-0 w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/25 bg-black/20 backdrop-blur-sm text-white hover:border-orange-500/60 hover:bg-black/40 hover:text-orange-400 flex items-center justify-center transition-all duration-300 pointer-events-auto z-30"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>

          {/* BOTTOM CONTENT */}
          <div className="absolute bottom-0 left-0 pb-20 w-full md:w-[55%] pointer-events-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              >
                <h3 className="text-[clamp(2rem,4.5vw,3.5rem)] font-extrabold tracking-tight leading-tight mb-4 group-hover:text-orange-400 transition-colors duration-300">
                  {t(`industries.items.${industry.key}.title`)}
                </h3>

                <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl">
                  {t(`industries.items.${industry.key}.desc`)}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-20 flex gap-2.5 items-center">
        {INDUSTRIES.map((_, i) => (
          <button
            key={i}
            onClick={() => handleGoTo(i)}
            className={`rounded-full transition-all duration-400
              ${i === current
                ? "w-6 h-[6px] bg-orange-500"
                : "w-[6px] h-[6px] bg-white/25 hover:bg-white/50"}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
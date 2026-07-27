import React, { useRef, useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence, LayoutGroup } from 'framer-motion';
import CategoryNavigation from './CategoryNavigation';
import ServiceCard from './ServiceCard';

/* ── Directional slide variants ───────────────────────────────── */
const contentVariants = {
  enter: (dir) => ({
    x: dir > 0 ? 220 : -220,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (dir) => ({
    x: dir > 0 ? -220 : 220,
    opacity: 0,
  }),
};

/* ── Circuit-board SVG background pattern ─────────────────────── */
const CIRCUIT_PATTERN = `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='0.4'%3E%3Cpath d='M40 0v80'/%3E%3Cpath d='M0 40h80'/%3E%3Cpath d='M20 0v20h20'/%3E%3Cpath d='M60 80v-20h-20'/%3E%3Ccircle cx='40' cy='40' r='3'/%3E%3Ccircle cx='20' cy='20' r='2'/%3E%3Ccircle cx='60' cy='60' r='2'/%3E%3C/g%3E%3C/svg%3E")`;

/* ══════════════════════════════════════════════════════════════
   WhyChooseUs — Premium Sticky Scroll Section
   ══════════════════════════════════════════════════════════════ */
const WhyChooseUs = ({ categories }) => {
  const containerRef = useRef(null);
  const activeIndexRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const totalCategories = categories.length;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  /* ── Map scroll progress → active category index ──────────── */
  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    let newIndex;
    if (v < 0.30) newIndex = 0;
    else if (v < 0.63) newIndex = 1;
    else newIndex = 2;

    // Clamp to valid range
    newIndex = Math.min(newIndex, totalCategories - 1);
    newIndex = Math.max(newIndex, 0);

    if (newIndex !== activeIndexRef.current) {
      setDirection(newIndex > activeIndexRef.current ? 1 : -1);
      setActiveIndex(newIndex);
      activeIndexRef.current = newIndex;
    }
  });

  const activeCategory = categories[activeIndex];

  return (
    <section
      ref={containerRef}
      className="relative bg-[#0b0b12]"
      style={{ height: `${totalCategories * 100}vh` }}
    >
      {/* ── Sticky viewport container ─────────────────────────── */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">

        {/* Subtle animated circuit-board background */}
        <div
          className="absolute inset-0 opacity-[0.012] pointer-events-none"
          style={{ backgroundImage: CIRCUIT_PATTERN, backgroundSize: '80px 80px' }}
        />

        {/* Ambient orange glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[50vw] max-w-[700px] max-h-[500px] bg-[#ff6b1a]/[0.035] blur-[160px] rounded-full pointer-events-none" />

        {/* ── Content layer ──────────────────────────────────── */}
        <div className="relative z-10 w-full max-w-[1536px] mx-auto px-6 sm:px-8 md:px-[5%] lg:px-[6%] h-[100dvh] py-[4vh] sm:py-[6vh] flex flex-col justify-between overflow-hidden">

          {/* Section Title — stays fixed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 md:mb-8 flex-none"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-none">
              Why Choose{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b1a] to-orange-400">
                Us
              </span>
            </h2>
          </motion.div>

          {/* Category Navigation — tabs update with scroll */}
          <LayoutGroup>
            <div className="flex-none mb-[2vh]">
              <CategoryNavigation
                categories={categories}
                activeIndex={activeIndex}
              />
            </div>
          </LayoutGroup>

          {/* ── Animated Content Area ──────────────────────── */}
          <div className="relative flex-grow flex flex-col min-h-0">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={contentVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: 0.45,
                  ease: [0.32, 0.72, 0, 1],
                }}
                className="absolute inset-0 flex flex-col"
              >
                {/* Service Cards Grid - Responsive height distribution */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-5 h-full">
                  {activeCategory.links.map((service, i) => (
                    <ServiceCard
                      key={`${activeIndex}-${service.name}`}
                      service={service}
                      index={i}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── Scroll Progress Indicator ─────────────────── */}
          <div className="flex-none flex items-center justify-center gap-3 mt-[3vh]">
            {categories.map((cat, idx) => (
              <div
                key={cat.name}
                className={`rounded-full transition-all duration-500 ease-out ${
                  idx === activeIndex
                    ? 'w-8 h-1.5 bg-gradient-to-r from-[#ff6b1a] to-orange-400'
                    : 'w-1.5 h-1.5 bg-white/15'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

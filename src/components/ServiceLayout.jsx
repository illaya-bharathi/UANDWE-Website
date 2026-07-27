import React, { useRef, useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValueEvent } from 'framer-motion';
import { ArrowLeft, ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

// Slide variants for the feature-group horizontal swap
const groupSlideVariants = {
  enter: (dir) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 }),
};

const CinematicPortalSequence = ({ 
    portalImage, 
    gridImage, 
    collageImages, 
    features, 
    featureGroups, // Array of { label, features: [...6 items] }
    aboutText,
    hideTitle
}) => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 250,
        damping: 30,
        restDelta: 0.001
    });

    // Parallax Collage scales (0% - 15%)
    const scale4 = useTransform(smoothProgress, [0, 0.15], [1, 4]);
    const scale5 = useTransform(smoothProgress, [0, 0.15], [1, 5]);
    const scale6 = useTransform(smoothProgress, [0, 0.15], [1, 6]);
    const scale8 = useTransform(smoothProgress, [0, 0.15], [1, 8]);
    const scale9 = useTransform(smoothProgress, [0, 0.15], [1, 9]);
    const parallaxOpacity = useTransform(smoothProgress, [0.10, 0.15], [1, 0]);

    // Stage 1 (0%–15%) & Stage 2 (15%-25%) — Shrink to left and hold
    // Main image starts centered at 25vw/25vh
    const cardWidth = useTransform(smoothProgress, [0, 0.15, 0.25, 0.40], ["25vw", "40vw", "40vw", "92vw"]);
    const cardHeight = useTransform(smoothProgress, [0, 0.15, 0.25, 0.40], ["25vh", "70vh", "70vh", "60vh"]);

    const cardLeft = useTransform(smoothProgress, [0, 0.15, 0.25, 0.40], ["37.5vw", "4vw", "4vw", "4vw"]);
    const cardTop = useTransform(smoothProgress, [0, 0.15, 0.25, 0.40], ["37.5vh", "15vh", "15vh", "28vh"]);
    const cardRadius = useTransform(smoothProgress, [0, 0.15], ["0px", "24px"]);

    // Stage 3 (25%–40%) — Shared 3D Transition
    const cardRotateY = useTransform(smoothProgress, [0.25, 0.40], [0, 180]);
    const cardZ = useTransform(smoothProgress, [0.25, 0.325, 0.40], ["0px", "100px", "0px"]);

    // Stage 4 (40%–50%) — Landing
    const cardScale = useTransform(smoothProgress, [0, 0.25, 0.40, 0.50], [1, 1, 1.15, 1]);
    const cardY = useTransform(smoothProgress, [0, 0.25, 0.40, 0.50], ["0px", "0px", "-40px", "0px"]);
    const cardShadow = useTransform(smoothProgress, [0, 0.25, 0.40, 0.50], [
        "0px 0px 0px rgba(0,0,0,0)",
        "0px 20px 50px rgba(0,0,0,0.5)",
        "0px 60px 120px rgba(0,0,0,0.8)",
        "0px 20px 50px rgba(0,0,0,0.5)"
    ]);

    // Stage 5 (50%) — Instant Grid Morph (Eliminates alpha-blend blinking)
    const cardOpacity = useTransform(smoothProgress, [0.499, 0.50], [1, 0]);
    const gridOpacity = useTransform(smoothProgress, [0.499, 0.50], [0, 1]);

    // Stage 6 (55%–75%) — Split Animation
    const splitProgress = useTransform(smoothProgress, [0.55, 0.75], [0, 1]); // 0=joined, 1=split

    // Smoothly fade the borders during the split so there's no sudden flash of lines
    const sliceBorderOpacity = useTransform(splitProgress, [0, 0.05], [0, 1]);
    const outerBorderOpacity = useTransform(splitProgress, [0, 0.05], [1, 0]);

    // Stage 7 (75%–100%) — Card Flip
    const featureFlip = useTransform(smoothProgress, [0.75, 1.0], [0, 180]);

    // About Text Fading (Hidden during parallax collage, fades in at end, fades out before flip)
    const aboutOpacity = useTransform(smoothProgress, [0, 0.10, 0.15, 0.25, 0.30], [0, 0, 1, 1, 0]);

    const bgPositions = ["0% 0%", "50% 0%", "100% 0%", "0% 100%", "50% 100%", "100% 100%"];

    // ── Feature Group Sliding (VLSI → Embedded → Hardware) ──
    const hasGroups = featureGroups && featureGroups.length > 1;
    const [activeGroupIdx, setActiveGroupIdx] = useState(0);
    const [slideDir, setSlideDir] = useState(1);
    const [flipDone, setFlipDone] = useState(false);

    // Detect when the card flip animation finishes (scrollYProgress > 0.95)
    useMotionValueEvent(smoothProgress, 'change', (v) => {
        setFlipDone(v > 0.95);
    });

    const goToGroup = useCallback((idx) => {
        setSlideDir(idx > activeGroupIdx ? 1 : -1);
        setActiveGroupIdx(idx);
    }, [activeGroupIdx]);

    const nextGroup = useCallback(() => {
        if (!hasGroups) return;
        setSlideDir(1);
        setActiveGroupIdx((prev) => (prev < featureGroups.length - 1 ? prev + 1 : 0));
    }, [hasGroups, featureGroups]);

    const prevGroup = useCallback(() => {
        if (!hasGroups) return;
        setSlideDir(-1);
        setActiveGroupIdx((prev) => (prev > 0 ? prev - 1 : featureGroups.length - 1));
    }, [hasGroups, featureGroups]);

    // Resolve which features to show right now
    const activeFeatures = hasGroups ? featureGroups[activeGroupIdx].features : features;

    // Map the incoming scaleIndex to actual scale transform variables
    const scales = {
        4: scale4,
        5: scale5,
        6: scale6,
        8: scale8,
        9: scale9
    };

    return (
        <section ref={containerRef} className="h-[300vh] relative bg-[#0b0b12]">
            <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden perspective-[2000px]">
                
                <style>{`
                  .preserve-3d { transform-style: preserve-3d; }
                  .backface-hidden { backface-visibility: hidden; }
                `}</style>

                <div className="relative w-full h-full max-w-[100vw] flex justify-center">

                    {/* ABOUT TEXT */}
                    <motion.div 
                        style={{ opacity: aboutOpacity }}
                        className="absolute top-0 right-[4vw] w-[48vw] h-full flex flex-col justify-center z-0"
                    >
                        {aboutText}
                    </motion.div>

                    {/* TITLE + GROUP TABS */}
                    <motion.div 
                        style={{ opacity: gridOpacity }}
                        className="absolute top-[2vh] sm:top-[4vh] left-[4vw] right-[4vw] z-40 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
                    >
                        {!hideTitle && (
                            <h2 className="text-[clamp(2rem,5vw,4.5rem)] font-black text-white tracking-tight leading-tight whitespace-nowrap text-left">
                                Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b1a] to-orange-400">Us</span>
                            </h2>
                        )}

                        {/* GROUP TAB PILLS – only visible after flip completes */}
                        {hasGroups && flipDone && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                                className="flex items-center gap-1.5 bg-white/5 border border-white/10 backdrop-blur-md p-1 rounded-full overflow-x-auto"
                            >
                                {featureGroups.map((group, idx) => (
                                    <button
                                        key={group.label}
                                        onClick={() => goToGroup(idx)}
                                        className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 whitespace-nowrap ${
                                            idx === activeGroupIdx
                                                ? 'bg-[#ff6b1a] text-white shadow-[0_0_20px_rgba(255,107,26,0.45)] scale-105'
                                                : 'text-white/60 hover:text-white hover:bg-white/10'
                                        }`}
                                    >
                                        {group.label}
                                    </button>
                                ))}
                            </motion.div>
                        )}
                    </motion.div>

                    {/* GROUP SLIDE ARROWS – only visible after flip */}
                    {hasGroups && flipDone && (
                        <>
                            <motion.button
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                onClick={prevGroup}
                                className="absolute left-[1vw] top-1/2 -translate-y-1/2 z-40 w-11 h-11 rounded-full border border-white/20 bg-black/60 backdrop-blur-md text-white hover:border-[#ff6b1a] hover:bg-[#ff6b1a] transition-all duration-300 flex items-center justify-center shadow-2xl"
                                aria-label="Previous group"
                            >
                                <ChevronLeft size={22} />
                            </motion.button>
                            <motion.button
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                onClick={nextGroup}
                                className="absolute right-[1vw] top-1/2 -translate-y-1/2 z-40 w-11 h-11 rounded-full border border-white/20 bg-black/60 backdrop-blur-md text-white hover:border-[#ff6b1a] hover:bg-[#ff6b1a] transition-all duration-300 flex items-center justify-center shadow-2xl"
                                aria-label="Next group"
                            >
                                <ChevronRight size={22} />
                            </motion.button>
                        </>
                    )}

                    {/* PARALLAX COLLAGE */}
                    {collageImages && collageImages.map((img, i) => (
                        <motion.div 
                            key={i}
                            style={{ scale: scales[img.scaleIndex] || scale4, opacity: parallaxOpacity }}
                            className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
                        >
                            <div className={`relative ${img.cls}`}>
                                <img src={img.src} alt="Parallax collage" className="h-full w-full object-cover rounded-xl" />
                            </div>
                        </motion.div>
                    ))}

                    {/* TRANSITION CARD */}
                    <motion.div 
                        className="absolute z-20 preserve-3d"
                        style={{
                            width: cardWidth,
                            height: cardHeight,
                            top: cardTop,
                            left: cardLeft,
                            borderRadius: cardRadius,
                            rotateY: cardRotateY,
                            z: cardZ,
                            y: cardY,
                            scale: cardScale,
                            opacity: cardOpacity,
                            boxShadow: cardShadow,
                            transformOrigin: "center center"
                        }}
                    >
                        {/* Front: Portal Image */}
                        <div className="absolute inset-0 backface-hidden rounded-[inherit] overflow-hidden bg-[#0b0b12]">
                            <div className="absolute inset-0 border border-white/10 rounded-[inherit] z-20 pointer-events-none" />
                            <img 
                                src={portalImage} 
                                alt="Portal" 
                                className="w-full h-full object-cover object-center"
                            />
                        </div>

                        {/* Back: Unified Grid Image */}
                        <motion.div 
                            className="absolute inset-0 backface-hidden rounded-[inherit] overflow-hidden bg-[#0b0b12]"
                            style={{ rotateY: 180 }}
                        >
                            <div className="absolute inset-0 border border-white/10 rounded-[inherit] z-20 pointer-events-none" />
                            <div 
                                className="w-full h-full"
                                style={{ backgroundImage: `url('${gridImage}')`, backgroundSize: "100% 100%", backgroundPosition: "center" }}
                            />
                        </motion.div>
                    </motion.div>

                    {/* ACTUAL GRID (Crossfades in perfectly replacing the transition card) */}
                    <motion.div 
                        style={{ opacity: gridOpacity, top: cardTop, left: cardLeft, width: "92vw", height: "60vh" }}
                        className="absolute z-30 overflow-hidden"
                    >
                        {/* When flipDone + hasGroups → use AnimatePresence horizontal slide between groups */}
                        {hasGroups && flipDone ? (
                            <AnimatePresence custom={slideDir} mode="wait">
                                <motion.div
                                    key={activeGroupIdx}
                                    custom={slideDir}
                                    variants={groupSlideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                                    className="grid grid-cols-3 grid-rows-2 gap-4 md:gap-6 w-full h-full relative"
                                >
                                    {activeFeatures && activeFeatures.map((feature, i) => (
                                        <div key={feature.id + '-' + activeGroupIdx} className="relative w-full h-full rounded-[24px] bg-[#0b0b12] border border-white/10 p-2 sm:p-6 md:p-8 flex flex-col justify-end shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden hover:border-[#ff6b1a]/50 transition-colors duration-300 group">
                                            <div className="absolute inset-0 bg-gradient-to-tr from-[#ff6b1a]/0 via-[#ff6b1a]/0 to-[#ff6b1a]/10 opacity-50 rounded-[inherit]" />
                                            <div className="relative z-10">
                                                <h3 className="text-[clamp(0.7rem,3vw,1rem)] sm:text-xl md:text-2xl font-bold text-white mb-2 md:mb-4 tracking-tight leading-tight group-hover:text-[#ff6b1a] transition-colors">{feature.title}</h3>
                                                <p className="text-white/60 text-xs sm:text-sm md:text-base hidden sm:block">{feature.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </motion.div>
                            </AnimatePresence>
                        ) : (
                            /* Default scroll-driven split & flip grid (original behavior) */
                            <div className="grid grid-cols-3 grid-rows-2 gap-0 [--split-x:16px] md:[--split-x:32px] [--split-y:16px] md:[--split-y:32px] w-full h-full relative">
                                {/* Seamless outer border that perfectly matches the transition card */}
                                <motion.div style={{ opacity: outerBorderOpacity }} className="absolute inset-0 border border-white/10 rounded-[24px] pointer-events-none z-40" />

                                {activeFeatures && activeFeatures.map((feature, i) => {
                                    const col = i % 3;
                                    const row = Math.floor(i / 3);
                                    const xMultiplier = col === 0 ? -1 : col === 2 ? 1 : 0;
                                    const yMultiplier = row === 0 ? -0.5 : 0.5;

                                    const xPos = useTransform(splitProgress, v => `calc(${v} * var(--split-x) * ${xMultiplier})`);
                                    const yPos = useTransform(splitProgress, v => `calc(${v} * var(--split-y) * ${yMultiplier})`);
                                    const borderRadius = useTransform(splitProgress, [0, 1], ["0px", "24px"]);

                                    return (
                                        <motion.div key={feature.id} style={{ x: xPos, y: yPos }} className="relative w-full h-full perspective-1000">
                                            <motion.div style={{ rotateY: featureFlip }} className="w-full h-full relative preserve-3d">
                                                
                                                {/* Front: Image Slice */}
                                                <motion.div style={{ borderRadius }} className="absolute inset-0 backface-hidden overflow-hidden bg-[#0b0b12]">
                                                    <div className="w-full h-full" style={{ backgroundImage: `url('${gridImage}')`, backgroundSize: "300% 200%", backgroundPosition: bgPositions[i] }} />
                                                    <motion.div style={{ opacity: sliceBorderOpacity }} className="absolute inset-0 border border-white/10 rounded-[inherit] z-20 pointer-events-none" />
                                                </motion.div>

                                                {/* Back: Feature Card */}
                                                <motion.div style={{ rotateY: 180, borderRadius }} className="absolute inset-0 backface-hidden bg-[#0b0b12] border border-white/10 p-2 sm:p-6 md:p-8 flex flex-col justify-end shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
                                                    <div className="absolute inset-0 bg-gradient-to-tr from-[#ff6b1a]/0 via-[#ff6b1a]/0 to-[#ff6b1a]/10 opacity-50" />
                                                    <div className="relative z-10">
                                                        <h3 className="text-[clamp(0.7rem,3vw,1rem)] sm:text-xl md:text-2xl font-bold text-white mb-2 md:mb-4 tracking-tight leading-tight">{feature.title}</h3>
                                                        <p className="text-white/60 text-xs sm:text-sm md:text-base hidden sm:block">{feature.desc}</p>
                                                    </div>
                                                </motion.div>
                                            </motion.div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const CardSlider = ({ title, subtitle, cards }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const next = () => {
      if (currentIndex < cards.length - 1) {
        setCurrentIndex((prev) => prev + 1);
      }
    };
  
    const prev = () => {
      if (currentIndex > 0) {
        setCurrentIndex((prev) => prev - 1);
      }
    };
  
    const getVisibleCards = () => {
      const visible = [];
      for (let i = 0; i < 3; i++) {
        const card = cards[currentIndex + i];
        if (card) {
          visible.push(card);
        }
      }
      return visible;
    };
  
    return (
      <section className="bg-[#0b0b12] py-24 pl-[4%] font-sans relative z-30 overflow-hidden">
        <div className="w-full">
          {/* Header Row */}
          <div className="relative flex flex-col md:flex-row items-center justify-center mb-12 max-w-7xl mx-auto pr-[4%]">
            <div className="flex flex-col items-center text-center">
               <h2 className="text-[2.5rem] md:text-5xl font-semibold text-white mb-4 tracking-tight">
                 {title}
               </h2>
               <p className="text-base md:text-lg text-white/70">
                 {subtitle}
               </p>
            </div>
            
            {/* Controls */}
            <div className="absolute right-[4%] top-1/2 -translate-y-1/2 hidden md:flex items-center gap-3">
              <button 
                onClick={prev}
                disabled={currentIndex === 0}
                className={`w-10 h-10 rounded-md flex items-center justify-center transition-colors ${
                  currentIndex === 0 
                    ? "bg-gray-600/50 text-gray-400 cursor-not-allowed" 
                    : "bg-[#a4abb6] text-white hover:bg-gray-500"
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-[15px] font-medium text-gray-400 px-1">
                {currentIndex + 1} / {cards.length}
              </span>
              <button 
                onClick={next}
                disabled={currentIndex === cards.length - 1}
                className={`w-10 h-10 rounded-md flex items-center justify-center transition-colors ${
                  currentIndex === cards.length - 1 
                    ? "bg-gray-600/50 text-gray-400 cursor-not-allowed" 
                    : "bg-[#11142d] text-white hover:bg-black"
                }`}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
  
          {/* Mobile Controls */}
          <div className="md:hidden flex items-center justify-center gap-4 mb-8 pr-[4%]">
              <button 
                onClick={prev}
                disabled={currentIndex === 0}
                className={`w-10 h-10 rounded-md flex items-center justify-center transition-colors ${
                  currentIndex === 0 
                    ? "bg-gray-600/50 text-gray-400 cursor-not-allowed" 
                    : "bg-[#a4abb6] text-white hover:bg-gray-500"
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-[15px] font-medium text-gray-400">
                {currentIndex + 1} / {cards.length}
              </span>
              <button 
                onClick={next}
                disabled={currentIndex === cards.length - 1}
                className={`w-10 h-10 rounded-md flex items-center justify-center transition-colors ${
                  currentIndex === cards.length - 1 
                    ? "bg-gray-600/50 text-gray-400 cursor-not-allowed" 
                    : "bg-[#11142d] text-white hover:bg-black"
                }`}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
          </div>
  
          {/* Flex Slider (2.5 cards visible) */}
          <div className="flex gap-6 overflow-visible pl-4 md:pl-0 pb-24 pt-4">
            <AnimatePresence mode="popLayout">
              {getVisibleCards().map((card, i) => (
                <motion.div
                  key={card.id + "-" + i + "-" + currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="relative shrink-0 w-[85vw] md:w-[45vw] lg:w-[35vw] group cursor-pointer"
                >
                  {/* Full Image Background */}
                  <div className="relative h-[320px] w-full rounded-[24px] overflow-hidden">
                    <img 
                      src={card.image} 
                      alt={card.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                  </div>
                  
                  {/* Floating White Content Box - Exactly half inside, half outside */}
                  <div className="absolute bottom-0 translate-y-1/2 left-6 right-6 bg-white rounded-[16px] shadow-2xl p-6 min-h-[160px] flex flex-col z-10">
                    <div className="self-start px-3 py-1.5 bg-[#191543] text-white text-xs font-semibold rounded-md mb-4 shadow-sm">
                      {card.tag}
                    </div>
                    <h3 className="text-[1.35rem] font-semibold text-[#11142d] leading-snug mb-8 line-clamp-2">
                      {card.title}
                    </h3>
                    
                    <div className="mt-auto self-end">
                      <button className="flex items-center gap-2 bg-[#2d2f36] text-white px-4 py-2.5 rounded-md text-sm font-medium hover:bg-black transition-colors shadow-md">
                        Read More <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
    );
};

const EditorialFeatureShowcase = ({ features, backgroundText = "CREATING\nIMPACT" }) => {
    // Take the first 6 features to create two groups of 3
    const displayFeatures = features.slice(0, 6);
    const bgLines = backgroundText.split('\n');

    return (
        <section className="relative w-full bg-[#0b0b12] pb-32">
            {/* Sticky Background Typography */}
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden pointer-events-none z-0">
                <h2
                    className="whitespace-nowrap text-center"
                    style={{
                        fontSize: "clamp(120px, 13vw, 260px)",
                        fontWeight: 900,
                        lineHeight: 0.9,
                        letterSpacing: "-3px",
                        color: "rgba(255,255,255,0.08)"
                    }}
                >
                    {bgLines.map((line, index) => (
                        <React.Fragment key={index}>
                            {line}
                            {index < bgLines.length - 1 && <br />}
                        </React.Fragment>
                    ))}
                </h2>
            </div>

            {/* Cards Layer (Scrolls normally over the sticky background) */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-[4%] -mt-[100vh] pt-[50vh]">
                <div className="flex flex-col gap-24 md:gap-48 pb-[20vh]">
                    {displayFeatures.map((feature, i) => {
                        // Alternate left and right (Group 1: L, R, L. Group 2: R, L, R)
                        const isRight = i % 2 !== 0;

                        return (
                            <motion.div
                                key={feature.id}
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-10%" }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className={`w-full md:w-[80%] lg:w-[70%] flex flex-col md:flex-row gap-8 lg:gap-12 bg-[#0b0b12]/60 backdrop-blur-xl p-6 sm:p-8 md:p-12 rounded-[2rem] border border-white/5 shadow-2xl ${isRight ? 'ml-auto mr-0' : 'mr-auto ml-0'}`}
                            >
                                {/* Image */}
                                <div className={`w-full md:w-1/2 aspect-[4/5] md:aspect-[3/4] rounded-2xl overflow-hidden ${isRight ? 'md:order-2' : ''}`}>
                                    <img src={feature.image} alt={feature.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                                </div>

                                {/* Content */}
                                <div className="w-full md:w-1/2 flex flex-col justify-center py-4">
                                    <div className="text-[#ff6b1a] font-mono text-lg font-bold tracking-widest mb-4">
                                        {feature.id}
                                    </div>
                                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
                                        {feature.title}
                                    </h3>
                                    <p className="text-lg text-white/60 mb-8 leading-relaxed">
                                        {feature.description}
                                    </p>
                                    <ul className="space-y-4">
                                        {feature.points.map((pt, idx) => (
                                            <li key={idx} className="flex items-start text-white/80 font-medium text-base sm:text-lg">
                                                <div className="w-2 h-2 rounded-full bg-[#ff6b1a] mt-2.5 mr-4 shadow-[0_0_8px_#ff6b1a] shrink-0" />
                                                <span>{pt}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

const ServiceLayout = ({
    hero,
    portal,
    slider,
    showcase
}) => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#0b0b12] text-white pt-[100px]">
            {/* BACK BUTTON */}
            <div className="w-full px-4 md:px-[4%] flex justify-start mb-4 relative z-50">
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center justify-center p-2.5 md:p-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors text-white/80 hover:text-white"
                >
                    <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
                </button>
            </div>

            {/* HERO SECTION */}
            <section className="relative px-4 md:px-[4%] min-h-[calc(100vh-150px)] flex flex-col items-center justify-center text-center pb-12 lg:pb-24">
                {/* Background glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] bg-[#ff6b1a]/20 blur-[120px] rounded-full pointer-events-none" />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 max-w-5xl mx-auto"
                >
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight leading-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b1a] to-orange-400">
                            {hero.title}
                        </span>
                    </h1>

                    <p className="text-base sm:text-lg md:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto mb-10">
                        {hero.description}
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="px-8 py-4 bg-[#ff6b1a] text-white rounded-full font-semibold hover:bg-[#ff8c42] transition-colors w-full sm:w-auto shadow-lg shadow-[#ff6b1a]/20">
                            {hero.primaryButtonText || "Explore Services"}
                        </button>
                        <button className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-semibold hover:bg-white/10 transition-colors w-full sm:w-auto">
                            {hero.secondaryButtonText || "Discuss Your Project"}
                        </button>
                    </div>
                </motion.div>
            </section>

            {/* CONDITIONAL RENDER SECTIONS */}
            {portal && <CinematicPortalSequence {...portal} />}
            {/* {slider && <CardSlider {...slider} />} */}
            {/* {showcase && <EditorialFeatureShowcase features={showcase.features} backgroundText={showcase.backgroundText} />} */}
        </div>
    );
};

export default ServiceLayout;

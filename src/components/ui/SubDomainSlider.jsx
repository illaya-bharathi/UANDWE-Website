import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Cpu, Layers, CircuitBoard, ArrowUpRight, ArrowRight } from "lucide-react";

const slideVariants = {
  enter: (dir) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
};

const DOMAINS = [
  {
    id: "vlsi",
    num: "01",
    tag: "VLSI SERVICES",
    title: "VLSI Design & Silicon Architecture",
    subtitle: "Silicon microarchitecture, SystemVerilog RTL synthesis, UVM testbenches & DFT implementation.",
    icon: <Cpu className="w-6 h-6 text-orange-400" />,
    cards: [
      {
        id: "01",
        title: "Silicon Architecture & Spec",
        description: "Transforming high-level specs into microarchitectural definitions, instruction sets, and power floorplans.",
        points: ["Microarchitecture Design", "Instruction Set Spec", "Power & Performance Modeling"],
        path: "/services/vlsi/rtl"
      },
      {
        id: "02",
        title: "RTL Design & Synthesis",
        description: "Verilog/SystemVerilog logic synthesis delivering low-power, high-frequency digital SoC blocks.",
        points: ["SystemVerilog RTL", "Logic Synthesis & Optimization", "Static Timing Analysis"],
        path: "/services/vlsi/rtl"
      },
      {
        id: "03",
        title: "Design Verification (UVM)",
        description: "Rigorous constrained-random verification testbenches utilizing UVM to achieve 100% coverage.",
        points: ["UVM Testbench Architecture", "Assertion-Based Verification", "Formal Verification"],
        path: "/services/vlsi/verification"
      },
      {
        id: "04",
        title: "Physical Design & DFT",
        description: "Advanced physical implementation from netlist to GDSII including DRC/LVS, CTS, and ATPG insertion.",
        points: ["Floorplanning & Place & Route", "Clock Tree Synthesis (CTS)", "DFT & Scan Insertion"],
        path: "/services/vlsi/dft"
      }
    ]
  },
  {
    id: "embedded",
    num: "02",
    tag: "EMBEDDED SOFTWARE",
    title: "Embedded Systems & Driver Infrastructure",
    subtitle: "Low-level C/C++ firmware, RTOS real-time kernels, Linux BSPs & protocol stacks.",
    icon: <Layers className="w-6 h-6 text-blue-400" />,
    cards: [
      {
        id: "01",
        title: "Firmware Development",
        description: "Bare-metal & RTOS embedded C/C++ firmware for microcontrollers and automotive ECUs.",
        points: ["Bare-metal & RTOS Firmware", "Microcontroller Drivers", "HAL Layer Development"],
        path: "/services/embedded/firmware"
      },
      {
        id: "02",
        title: "Device Drivers & Linux BSP",
        description: "Kernel-level driver development and Yocto custom BSPs for Linux, QNX, and RTOS platforms.",
        points: ["Linux Kernel Drivers", "Custom Yocto/Buildroot BSPs", "Board Bring-Up"],
        path: "/services/embedded/drivers"
      },
      {
        id: "03",
        title: "RTOS Kernel Engineering",
        description: "Deterministic real-time task scheduling, memory management, and IPC optimization.",
        points: ["FreeRTOS & Zephyr Integration", "Real-Time Task Scheduling", "Low-Power Optimization"],
        path: "/services/embedded/rtos"
      },
      {
        id: "04",
        title: "Protocol Integration",
        description: "Industrial, automotive, and high-speed communication stacks including CAN, PCIe, and USB.",
        points: ["CAN / LIN / Automotive Ethernet", "PCIe & USB Drivers", "Custom Protocol Stacks"],
        path: "/services/embedded/protocol"
      }
    ]
  },
  {
    id: "hardware",
    num: "03",
    tag: "HARDWARE ENGINEERING",
    title: "Hardware Design & Prototyping",
    subtitle: "High-speed multi-layer PCB layout, FPGA synthesis, custom ASIC & thermal validation.",
    icon: <CircuitBoard className="w-6 h-6 text-emerald-400" />,
    cards: [
      {
        id: "01",
        title: "PCB Design & Layout",
        description: "High-speed multi-layer PCB layout, signal integrity (SI/PI), and EMC compliance testing.",
        points: ["Multi-Layer High-Speed Layout", "Signal & Power Integrity", "EMC / EMI Compliance"],
        path: "/services/hardware/pcb"
      },
      {
        id: "02",
        title: "FPGA Design & Prototyping",
        description: "Xilinx/Intel FPGA prototyping, IP core integration, high-speed SerDes, and DSP synthesis.",
        points: ["Xilinx / Intel FPGA IP Cores", "High-Speed SerDes Interfaces", "Hardware Prototyping"],
        path: "/services/hardware/fpga"
      },
      {
        id: "03",
        title: "ASIC Engineering",
        description: "Custom ASIC spec-to-tapeout engineering, analog mixed-signal layout, and foundry coordination.",
        points: ["Custom ASIC Specification", "Analog & Mixed-Signal Layout", "Foundry Tapeout Support"],
        path: "/services/hardware/asic"
      },
      {
        id: "04",
        title: "Circuit & Hardware Validation",
        description: "Thermal, environmental, and automated lab bring-up testing for mission-critical hardware.",
        points: ["Schematic Capture & Power Blocks", "Thermal & Stress Profiling", "Automated HIL Testing"],
        path: "/services/hardware/validation"
      }
    ]
  }
];

export default function SubDomainSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev < DOMAINS.length - 1 ? prev + 1 : 0));
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev > 0 ? prev - 1 : DOMAINS.length - 1));
  }, []);

  const goTo = useCallback((idx) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  }, [current]);

  const activeDomain = DOMAINS[current];

  return (
    <section className="relative w-full bg-[#0b0b12] text-white py-20 px-[4%] overflow-hidden">
      
      {/* BACKGROUND ACCENT GLOW */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[40vw] max-w-[800px] max-h-[500px] bg-[#ff6b1a]/10 blur-[150px] rounded-full pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* HEADER & DOMAIN PILLS */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 border-b border-white/10 pb-8">
          <div>
            <span className="text-[#ff6b1a] font-mono text-sm font-bold tracking-widest uppercase mb-2 block">
              ENGINEERING PILLARS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Semiconductor Capabilities
            </h2>
          </div>

          {/* TAB PILLS SWITCHER */}
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-md p-1.5 rounded-full overflow-x-auto">
            {DOMAINS.map((domain, idx) => (
              <button
                key={domain.id}
                onClick={() => goTo(idx)}
                className={`flex items-center gap-2.5 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 whitespace-nowrap ${
                  idx === current
                    ? "bg-[#ff6b1a] text-white shadow-[0_0_25px_rgba(255,107,26,0.5)] scale-105"
                    : "text-white/60 hover:text-white hover:bg-white/10"
                }`}
              >
                <span>{domain.num}</span>
                <span>{domain.id.toUpperCase()}</span>
              </button>
            ))}
          </div>
        </div>

        {/* SLIDING CAROUSEL CONTAINER */}
        <div className="relative min-h-[500px] flex items-center">
          
          {/* NAVIGATION ARROWS */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full border border-white/20 bg-black/60 backdrop-blur-md text-white hover:border-[#ff6b1a] hover:bg-[#ff6b1a] transition-all duration-300 flex items-center justify-center -ml-3 sm:-ml-6 shadow-2xl"
            aria-label="Previous domain"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full border border-white/20 bg-black/60 backdrop-blur-md text-white hover:border-[#ff6b1a] hover:bg-[#ff6b1a] transition-all duration-300 flex items-center justify-center -mr-3 sm:-mr-6 shadow-2xl"
            aria-label="Next domain"
          >
            <ChevronRight size={24} />
          </button>

          {/* SLIDE ANIMATION AREA */}
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
              className="w-full px-6 sm:px-12"
            >
              {/* ACTIVE DOMAIN TITLE */}
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 shadow-inner">
                  {activeDomain.icon}
                </div>
                <div>
                  <span className="text-[#ff6b1a] text-xs font-mono font-bold tracking-widest uppercase">
                    {activeDomain.tag}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {activeDomain.title}
                  </h3>
                </div>
              </div>

              {/* 4 CARDS GRID ALIGNED PERFECTLY */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {activeDomain.cards.map((card) => (
                  <Link
                    key={card.id}
                    to={card.path}
                    className="group relative rounded-2xl p-6 bg-[#161722]/80 border border-white/10 hover:border-[#ff6b1a]/60 transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(255,107,26,0.15)] flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[#ff6b1a] font-mono text-sm font-bold">
                          {card.id}
                        </span>
                        <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-[#ff6b1a] transition-colors" />
                      </div>

                      <h4 className="text-xl font-extrabold text-white mb-3 leading-snug group-hover:text-[#ff6b1a] transition-colors">
                        {card.title}
                      </h4>

                      <p className="text-white/60 text-sm leading-relaxed mb-6">
                        {card.description}
                      </p>

                      <ul className="space-y-2.5 mb-6">
                        {card.points.map((pt, idx) => (
                          <li key={idx} className="flex items-center text-xs text-white/80">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b1a] mr-2 shrink-0" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center text-xs font-bold text-[#ff6b1a] group-hover:underline underline-offset-4 pt-4 border-t border-white/5">
                      Explore Service <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* BOTTOM NAVIGATION FOOTER */}
        <div className="flex justify-between items-center mt-12 pt-6 border-t border-white/10">
          <div className="text-xs text-white/40 font-mono">
            DOMAIN {current + 1} OF {DOMAINS.length}
          </div>

          <div className="flex gap-2.5 items-center">
            {DOMAINS.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-8 h-[6px] bg-[#ff6b1a]"
                    : "w-[6px] h-[6px] bg-white/20 hover:bg-white/50"
                }`}
                aria-label={`Go to domain ${i + 1}`}
              />
            ))}
          </div>

          <span className="text-xs font-semibold text-white/40">
            Swipe or use arrows to navigate
          </span>
        </div>

      </div>
    </section>
  );
}

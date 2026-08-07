import React from 'react';
import ServiceLayout from '../../../../components/ServiceLayout';
import { Cpu, Activity, Search, ShieldCheck, Zap, Network, Radio } from 'lucide-react';
import heroImage from "../../../../assets/imagesss/communication/Acsis.png";

const SEQUENCE_FEATURES = [
    { id: 1, title: "Algorithm Modeling", desc: "Modeling complex modulation and FEC algorithms (e.g. LDPC, Polar codes) in MATLAB/Simulink." },
    { id: 2, title: "RTL Design", desc: "Writing highly optimized Verilog/SystemVerilog for digital signal processing blocks." },
    { id: 3, title: "Logic Synthesis", desc: "Mapping RTL to target foundry standard cells while optimizing for strict PPA (Power, Performance, Area)." },
    { id: 4, title: "Physical Design", desc: "Floorplanning, clock tree synthesis, and routing the silicon layout for extreme frequencies." },
    { id: 5, title: "Sign-Off & Tape-Out", desc: "Performing static timing analysis (STA), DRC/LVS, and IR-drop analysis before foundry submission." },
    { id: 6, title: "Silicon Bring-Up", desc: "Testing the first fabricated silicon batches on high-speed automated test equipment (ATE)." }
];

const COLLAGE_IMAGES = [
    { src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800", scaleIndex: 4, cls: "!-top-[30vh] !left-[5vw] !h-[30vh] !w-[35vw]" },
    { src: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800", scaleIndex: 5, cls: "!-top-[10vh] !-left-[25vw] !h-[45vh] !w-[20vw]" },
    { src: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800", scaleIndex: 6, cls: "!left-[27.5vw] !h-[25vh] !w-[25vw]" },
    { src: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800", scaleIndex: 5, cls: "!top-[27.5vh] !left-[5vw] !h-[25vh] !w-[20vw]" },
    { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800", scaleIndex: 6, cls: "!top-[27.5vh] !-left-[22.5vw] !h-[25vh] !w-[30vw]" },
    { src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=800", scaleIndex: 8, cls: "!top-[22.5vh] !left-[25vw] !h-[15vh] !w-[15vw]" },
];

const SHOWCASE_FEATURES = [
    {
        id: "01",
        title: "5G/6G Modem ASICs",
        description: "Designing the core silicon that processes massive MIMO streams, OFDM modulation, and beamforming weights.",
        points: ["Sub-5nm Nodes", "Ultra-Low Latency", "High-Parallelism Architectures"],
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
        color: "from-blue-500/20 to-purple-500/20"
    },
    {
        id: "02",
        title: "Forward Error Correction (FEC)",
        description: "Hard-coding mathematical error correction algorithms directly into silicon to save power and eliminate CPU overhead.",
        points: ["LDPC decoders", "Turbo codes", "Reed-Solomon implementations"],
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=80",
        color: "from-emerald-500/20 to-teal-500/20"
    },
    {
        id: "03",
        title: "Mixed-Signal Integration",
        description: "Combining high-speed digital baseband logic with high-resolution ADCs and DACs on the same die.",
        points: ["Direct RF Sampling", "Digital Pre-Distortion", "Noise Isolation"],
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=80",
        color: "from-orange-500/20 to-red-500/20"
    },
    {
        id: "04",
        title: "Network Processors (NPUs)",
        description: "Architecting custom packet-processing silicon for terabit-scale routers and deep packet inspection.",
        points: ["TCAM integration", "Hardware encryption engines", "Custom instruction sets"],
        image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80",
        color: "from-pink-500/20 to-rose-500/20"
    }
];

const LATEST_INSIGHTS = [
  {
    id: 1,
    tag: "Tape-Out",
    title: "Navigating Routing Congestion in 3nm Baseband ASICs",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    tag: "DSP",
    title: "Hardware Trade-offs: LDPC vs. Polar Codes for 5G URLLC",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    tag: "Mixed-Signal",
    title: "Isolating Digital Switching Noise from Integrated ADCs",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=80"
  }
];

const BASEBAND_SUB_SERVICES = [
    { title: "RTL Architecture", description: "Designing the micro-architecture of datapaths and state machines using Verilog/VHDL for telecommunication standards.", icon: <Cpu className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80" },
    { title: "Algorithm to Silicon", description: "Translating floating-point MATLAB simulations into fixed-point, cycle-accurate RTL implementations.", icon: <Activity className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=80" },
    { title: "Physical Design (PnR)", description: "Floorplanning massive multi-core baseband chips, optimizing clock trees, and routing for GHz+ frequencies.", icon: <Network className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=80" },
    { title: "Design Verification (DV)", description: "Writing exhaustive UVM testbenches and SystemVerilog assertions to guarantee the chip works perfectly on the first pass.", icon: <ShieldCheck className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80" },
    { title: "Power Optimization", description: "Implementing UPF/CPF power intent, clock gating, and multi-voltage domains to maximize battery life in mobile devices.", icon: <Zap className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80" },
    { title: "Silicon Emulation", description: "Mapping the entire ASIC design to Palladium or Zebu emulator arrays to boot OS and test drivers before fabrication.", icon: <Search className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=80" }
];

const BASEBAND_ADVANTAGES = [
    { title: "Telecom Domain Expertise", description: "We don't just know Verilog; we deeply understand wireless standards like 3GPP LTE/5G, DOCSIS, and Wi-Fi 7.", icon: <Radio className="w-6 h-6" /> },
    { title: "First-Pass Silicon Success", description: "Through obsessive UVM verification and meticulous physical sign-off, we ensure your expensive mask set works the first time.", icon: <ShieldCheck className="w-6 h-6" /> },
    { title: "Advanced Node Experience", description: "Our backend teams routinely tape out designs on TSMC 5nm, 4nm, and 3nm FinFET processes.", icon: <Cpu className="w-6 h-6" /> },
    { title: "IP Portfolio", description: "We leverage a library of pre-verified FEC, modulation, and cryptographic IP blocks to accelerate your time to market.", icon: <Zap className="w-6 h-6" /> }
];

const BASEBAND_FAQ = [
    {
        question: "Why build a custom Baseband ASIC instead of using an FPGA or merchant silicon?",
        answer: "FPGAs consume too much power and space for mobile or dense infrastructure. Merchant silicon often lacks the proprietary algorithms you need to differentiate. A custom ASIC gives you ultimate PPA (Power, Performance, Area) and IP protection."
    },
    {
        question: "How do you handle the transition from algorithm to RTL?",
        answer: "Our systems engineers work in MATLAB/C++ to define the floating-point algorithm. They then convert it to fixed-point. Finally, our RTL engineers write cycle-accurate Verilog that perfectly matches the fixed-point C++ model."
    },
    {
        question: "What is UVM and why is it necessary?",
        answer: "Universal Verification Methodology (UVM) is an industry-standard framework for testing complex silicon. It uses constrained-random stimulus to bombard the RTL with edge cases, ensuring no hidden bugs make it to the physical chip."
    },
    {
        question: "Can you help with post-silicon validation?",
        answer: "Yes, we write the low-level test vectors and firmware required to bring up the first bare-die samples on Advantest or Teradyne ATE machines."
    }
];

const BASEBAND_ABOUT_METRICS = {
    titlePart1: "About",
    titlePart2: "Baseband ASICs",
    description: "U&WE designs the silicon brains behind modern communication. We compress massive racks of DSP equipment into millimeters of custom silicon, powering the world's most advanced 5G networks and satellite constellations.",
    metrics: [
        { tag: "TECHNOLOGY", value: "3nm", label: "Advanced FinFET Nodes", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" },
        { tag: "GATES", value: "2B+", label: "Massive Gate Counts", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop" },
        { tag: "POWER", value: "-40%", label: "Power Reduction vs FPGA", image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800&auto=format&fit=crop" },
        { tag: "TAPE-OUTS", value: "50+", label: "Successful Silicon Spins", image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800&auto=format&fit=crop" }
    ]
};

const Baseband = () => {
    return (
        <ServiceLayout 
            pageKey="baseband"
            hero={{
                title: "Baseband ASICs",
                description: "Architecting custom, ultra-low power silicon to process complex modulation, error correction, and massive MIMO streams.",
                primaryButtonText: "Discuss Project",
                secondaryButtonText: "View Capabilities",
                image: heroImage
            }}
            aboutMetrics={BASEBAND_ABOUT_METRICS}
            subServices={BASEBAND_SUB_SERVICES}
            subServicesTitle={{ part1: "Core", part2: "Capabilities" }}
            advantages={BASEBAND_ADVANTAGES}
            advantagesTitle={{ part1: "Why Partner", part2: "With Us" }}
            faqs={BASEBAND_FAQ}
            portal={{
                portalImage: heroImage,
                gridImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2564&auto=format&fit=crop",
                collageImages: COLLAGE_IMAGES,
                features: SEQUENCE_FEATURES,
                aboutText: (
                    <p className="text-[clamp(1.1rem,2vw,2.2rem)] font-medium leading-[1.6] tracking-tight text-left text-white">
                        Encoding data in pure silicon.
                        <br className="hidden lg:block mt-2" />
                        We design the custom ASICs that make modern telecom possible.
                    </p>
                )
            }}
            slider={{
                title: "Latest in ASIC Design",
                subtitle: "Insights from our silicon architects",
                cards: LATEST_INSIGHTS
            }}
            showcase={{
                features: SHOWCASE_FEATURES,
                backgroundText: "BASEBAND\nASIC"
            }}
        />
    );
};

export default Baseband;

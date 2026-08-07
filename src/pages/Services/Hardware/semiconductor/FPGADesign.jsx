import React from 'react';
import ServiceLayout from '../../../../components/ServiceLayout';
import { Cpu, Zap, Activity, ShieldCheck, Microchip, Layers, FastForward, Code, PlayCircle } from 'lucide-react';
import heroImage from "../../../../assets/imagesss/semiconductor/fpgadesign.png";

const SEQUENCE_FEATURES = [
    { id: 1, title: "RTL Development", desc: "Writing highly optimized VHDL and SystemVerilog targeted specifically for FPGA architectures." },
    { id: 2, title: "Hardware Acceleration", desc: "Offloading intensive CPU algorithms (AI/Vision) into massively parallel FPGA fabric." },
    { id: 3, title: "High-Speed Transceivers", desc: "Configuring Multi-Gigabit Transceivers (MGTs) for 100G Ethernet, PCIe Gen4, and JESD204B." },
    { id: 4, title: "Timing Closure", desc: "Applying advanced synthesis and implementation constraints to meet aggressive clock targets." },
    { id: 5, title: "IP Core Integration", desc: "Seamlessly wrapping and verifying third-party or vendor-specific IP blocks (AXI, DMA, DDR controllers)." },
    { id: 6, title: "Verification & Testbenches", desc: "Building comprehensive UVM and constrained-random test environments to ensure zero-defect bitstreams." }
];

const COLLAGE_IMAGES = [
    { src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800", scaleIndex: 4, cls: "!-top-[30vh] !left-[5vw] !h-[30vh] !w-[35vw]" },
    { src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=800", scaleIndex: 5, cls: "!-top-[10vh] !-left-[25vw] !h-[45vh] !w-[20vw]" },
    { src: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800", scaleIndex: 6, cls: "!left-[27.5vw] !h-[25vh] !w-[25vw]" },
    { src: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800", scaleIndex: 5, cls: "!top-[27.5vh] !left-[5vw] !h-[25vh] !w-[20vw]" },
    { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800", scaleIndex: 6, cls: "!top-[27.5vh] !-left-[22.5vw] !h-[25vh] !w-[30vw]" },
    { src: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800", scaleIndex: 8, cls: "!top-[22.5vh] !left-[25vw] !h-[15vh] !w-[15vw]" },
];

const SHOWCASE_FEATURES = [
    {
        id: "01",
        title: "High-Frequency Trading",
        description: "Executing tick-to-trade networking algorithms in nanoseconds bypassing traditional OS stacks.",
        points: ["Tick-to-Trade parsing", "Sub-microsecond latency", "Custom MAC/PHY"],
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
        color: "from-blue-500/20 to-purple-500/20"
    },
    {
        id: "02",
        title: "Radar & SDR",
        description: "Implementing complex DSP pipelines (FFTs, FIR filters) for electronic warfare and telecom.",
        points: ["JESD204B integration", "Digital Down Conversion", "Beamforming RTL"],
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=80",
        color: "from-emerald-500/20 to-teal-500/20"
    },
    {
        id: "03",
        title: "Video & Vision",
        description: "Streaming, scaling, and processing 4K/8K video arrays in real-time for medical and defense.",
        points: ["MIPI CSI-2/DSI", "H.264/H.265 encoding", "Pixel pipeline RTL"],
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=80",
        color: "from-orange-500/20 to-red-500/20"
    },
    {
        id: "04",
        title: "ASIC Prototyping",
        description: "Validating multi-million gate ASIC architectures on massive FPGA clusters before silicon tape-out.",
        points: ["Partitioning logic", "Emulation platforms", "Pre-silicon OS boot"],
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=80",
        color: "from-pink-500/20 to-rose-500/20"
    }
];

const LATEST_INSIGHTS = [
  {
    id: 1,
    tag: "Networking",
    title: "Offloading TCP/IP Stacks to FPGA Fabric for 100G Links",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    tag: "Timing",
    title: "Strategies for Resolving Setup Violations in 800MHz Domains",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    tag: "Verification",
    title: "Transitioning from VHDL testbenches to UVM Methodology",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80"
  }
];

const FPGA_SUB_SERVICES = [
    { title: "RTL Design", description: "Writing pristine, highly-synthesizable VHDL or SystemVerilog that maps efficiently to target LUT/DSP structures.", icon: <Code className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80" },
    { title: "Hardware Acceleration", description: "Taking C/C++ algorithms and converting them into pipelined RTL to accelerate execution by orders of magnitude.", icon: <FastForward className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=80" },
    { title: "SoC & Soft Cores", description: "Integrating soft processors (MicroBlaze, Nios II, RISC-V) alongside custom logic to manage control-plane operations.", icon: <Layers className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=80" },
    { title: "DSP Implementation", description: "Designing complex digital signal processing chains, maximizing the use of hardened DSP slices for radar, audio, and comms.", icon: <Activity className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=80" },
    { title: "IP Development", description: "Creating reusable, parametrizable IP blocks (like custom memory controllers or AXI interconnects) packaged for standard tools.", icon: <PlayCircle className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80" },
    { title: "Timing Closure", description: "Diving deep into synthesis constraints and floorplanning to resolve stubborn setup/hold violations on densely packed chips.", icon: <ShieldCheck className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=80" }
];

const FPGA_ADVANTAGES = [
    { title: "Vendor Agnostic", description: "We hold deep expertise across the entire spectrum: AMD/Xilinx (Vivado), Intel/Altera (Quartus), Microchip (Libero), and Lattice (Diamond).", icon: <Layers className="w-6 h-6" /> },
    { title: "UVM Verification", description: "We don't rely on simulation waveforms alone. We build robust, automated Universal Verification Methodology (UVM) environments.", icon: <ShieldCheck className="w-6 h-6" /> },
    { title: "System-Level Perspective", description: "We understand how the FPGA fits into the larger PCB and software ecosystem, ensuring smooth hardware-software integration.", icon: <Activity className="w-6 h-6" /> },
    { title: "High-Speed Expertise", description: "We are masters of Multi-Gigabit Transceivers (MGTs), successfully deploying PCIe Gen4/5, 100G Ethernet, and SDI links.", icon: <Zap className="w-6 h-6" /> }
];

const FPGA_FAQ = [
    {
        question: "Can you help us migrate a design from an obsolete FPGA?",
        answer: "Yes, we frequently port legacy VHDL/Verilog designs from end-of-life silicon (like old Spartan or Cyclone families) to modern, cost-effective architectures, updating the IP cores along the way."
    },
    {
        question: "Do you write bare-metal or Linux software for SoC FPGAs?",
        answer: "Absolutely. We provide end-to-end solutions. We write the FPGA RTL, generate the hardware handoff files, and develop the custom Linux drivers or bare-metal C code required to talk to the programmable logic."
    },
    {
        question: "What is your approach to Clock Domain Crossings (CDC)?",
        answer: "CDC is a primary source of hardware failure. We enforce strict synchronization protocols (FIFOs, double-flop synchronizers) and run automated CDC analysis tools to guarantee metastability is eliminated."
    }
];

const FPGA_ABOUT_METRICS = {
    titlePart1: "About",
    titlePart2: "FPGA Design",
    description: "U&WE unlocks the massive parallel processing power of Field Programmable Gate Arrays. From high-frequency trading algorithms to advanced radar signal processing, we build hardware architectures that outperform traditional CPUs.",
    metrics: [
        { tag: "SPEED", value: "800MHz+", label: "FMAX Achieved in Fabric", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" },
        { tag: "THROUGHPUT", value: "400G", label: "Network Processing Speed", image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800&auto=format&fit=crop" },
        { tag: "ACCELERATION", value: "100x", label: "Performance over CPU", image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800&auto=format&fit=crop" },
        { tag: "VENDOR", value: "Multi", label: "AMD, Intel, Microchip", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" }
    ]
};

const FPGADesign = () => {
    return (
        <ServiceLayout 
            pageKey="fpgaDesign"
            hero={{
                title: "FPGA Design",
                description: "Unlocking massive parallel processing capabilities through highly optimized, timing-closed FPGA architectures.",
                primaryButtonText: "Discuss Project",
                secondaryButtonText: "View Capabilities",
                image: heroImage
            }}
            aboutMetrics={FPGA_ABOUT_METRICS}
            subServices={FPGA_SUB_SERVICES}
            subServicesTitle={{ part1: "Core", part2: "Capabilities" }}
            advantages={FPGA_ADVANTAGES}
            advantagesTitle={{ part1: "Why Partner", part2: "With Us" }}
            faqs={FPGA_FAQ}
            portal={{
                portalImage: heroImage,
                gridImage: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2564&auto=format&fit=crop",
                collageImages: COLLAGE_IMAGES,
                features: SEQUENCE_FEATURES,
                aboutText: (
                    <p className="text-[clamp(1.1rem,2vw,2.2rem)] font-medium leading-[1.6] tracking-tight text-left text-white">
                        From algorithmic offloading to ASIC prototyping, we program the metal.
                        <br className="hidden lg:block mt-2" />
                        Our FPGA designs power the world's fastest, most responsive hardware systems.
                    </p>
                )
            }}
            slider={{
                title: "Latest in Programmable Logic",
                subtitle: "Insights from our hardware architects",
                cards: LATEST_INSIGHTS
            }}
            showcase={{
                features: SHOWCASE_FEATURES,
                backgroundText: "LOGIC\nDESIGN"
            }}
        />
    );
};

export default FPGADesign;

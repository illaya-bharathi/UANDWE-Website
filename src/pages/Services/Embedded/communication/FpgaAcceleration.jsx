import React from 'react';
import ServiceLayout from '../../../../components/ServiceLayout';
import { Cpu, Zap, Activity, Waves, Network, ShieldCheck } from 'lucide-react';
import heroImage from "../../../../assets/imagesss/communication/FPGA.png";

const SEQUENCE_FEATURES = [
    { id: 1, title: "Algorithm Profiling", desc: "Profiling software code to identify mathematical bottlenecks suitable for hardware acceleration." },
    { id: 2, title: "HLS / RTL Design", desc: "Using High-Level Synthesis (C/C++) or writing direct Verilog/VHDL for the processing pipeline." },
    { id: 3, title: "IP Integration", desc: "Stitching custom logic together with vendor IP blocks (e.g. PCIe, Ethernet MACs, DDR4 controllers)." },
    { id: 4, title: "Timing Closure", desc: "Iterating through Vivado/Quartus synthesis to meet strict fMax (maximum frequency) requirements." },
    { id: 5, title: "PCIe Driver Dev", desc: "Writing the Linux kernel drivers to shuttle data between the host CPU and the FPGA via DMA." },
    { id: 6, title: "Hardware Emulation", desc: "Testing the bitstream on physical dev kits using integrated logic analyzers (ILA/SignalTap)." }
];

const COLLAGE_IMAGES = [
    { src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800", scaleIndex: 4, cls: "!-top-[30vh] !left-[5vw] !h-[30vh] !w-[35vw]" },
    { src: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800", scaleIndex: 5, cls: "!-top-[10vh] !-left-[25vw] !h-[45vh] !w-[20vw]" },
    { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800", scaleIndex: 6, cls: "!left-[27.5vw] !h-[25vh] !w-[25vw]" },
    { src: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800", scaleIndex: 5, cls: "!top-[27.5vh] !left-[5vw] !h-[25vh] !w-[20vw]" },
    { src: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800", scaleIndex: 6, cls: "!top-[27.5vh] !-left-[22.5vw] !h-[25vh] !w-[30vw]" },
    { src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=800", scaleIndex: 8, cls: "!top-[22.5vh] !left-[25vw] !h-[15vh] !w-[15vw]" },
];

const SHOWCASE_FEATURES = [
    {
        id: "01",
        title: "SmartNIC Development",
        description: "Offloading TCP/IP stacks and virtualization tasks from the server CPU directly onto FPGA-based Network Interface Cards.",
        points: ["OVS Offload", "NVMe-over-Fabrics", "Custom Match-Action tables"],
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
        color: "from-blue-500/20 to-purple-500/20"
    },
    {
        id: "02",
        title: "RFSoC / SDRs",
        description: "Programming Xilinx Zynq UltraScale+ RFSoCs to digitize gigahertz of RF bandwidth instantly.",
        points: ["Direct RF Sampling", "Digital Down Conversion (DDC)", "JESD204 interfaces"],
        image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80",
        color: "from-emerald-500/20 to-teal-500/20"
    },
    {
        id: "03",
        title: "High-Frequency Trading",
        description: "Achieving ultra-low latency (nanosecond) market data parsing and order execution.",
        points: ["FIX protocol parsing", "Kernel bypass", "10G/40G MAC IP"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
        color: "from-orange-500/20 to-red-500/20"
    },
    {
        id: "04",
        title: "AI / ML Inferencing",
        description: "Mapping trained neural networks (TensorFlow/PyTorch) into FPGA fabric for low-power, real-time edge AI.",
        points: ["Quantization (INT8)", "Systolic Arrays", "DPU Integration"],
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=80",
        color: "from-pink-500/20 to-rose-500/20"
    }
];

const LATEST_INSIGHTS = [
  {
    id: 1,
    tag: "RFSoC",
    title: "The Shift from Discrete Data Converters to Integrated RFSoC",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    tag: "SmartNICs",
    title: "How FPGAs are Saving CPU Cycles in the Modern Datacenter",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    tag: "HFT",
    title: "Chasing Nanoseconds: The Architecture of FPGA Trading Desks",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80"
  }
];

const FPGA_SUB_SERVICES = [
    { title: "Verilog / SystemVerilog Design", description: "Writing pure RTL for the lowest possible latency and maximum control over the silicon fabric.", icon: <Cpu className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80" },
    { title: "High-Level Synthesis (HLS)", description: "Accelerating development by compiling C/C++ algorithms directly into hardware description languages.", icon: <Zap className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80" },
    { title: "SoC Co-Design", description: "Partitioning tasks between the hard ARM processor and the soft FPGA fabric on chips like Zynq or Cyclone V.", icon: <Network className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80" },
    { title: "PCIe DMA Drivers", description: "Writing custom Linux kernel modules that use Scatter-Gather DMA to move gigabytes of data into host RAM.", icon: <Activity className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=80" },
    { title: "Timing Closure", description: "Refactoring code, adding pipeline registers, and fighting the tools to ensure your design runs at the target clock speed.", icon: <ShieldCheck className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=80" },
    { title: "DSP Slice Instantiation", description: "Manually mapping mathematical operations to the dedicated DSP48/DSP18 blocks to save LUTs and power.", icon: <Waves className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=80" }
];

const FPGA_ADVANTAGES = [
    { title: "Vendor Agnostic", description: "We hold deep expertise across the entire spectrum: AMD/Xilinx, Intel/Altera, Microchip/PolarFire, and Lattice.", icon: <Cpu className="w-6 h-6" /> },
    { title: "Hardware-Software Synergy", description: "An FPGA is useless without software to talk to it. We design the RTL, the bare-metal drivers, and the Linux user-space APIs.", icon: <Network className="w-6 h-6" /> },
    { title: "Legacy Migration", description: "We specialize in porting obsolete, discontinued ASICs into modern FPGAs, breathing new life into old telecom equipment.", icon: <Zap className="w-6 h-6" /> },
    { title: "UVM Verification", description: "We don't test on physical hardware until our SystemVerilog testbenches have proven the design mathematically sound.", icon: <ShieldCheck className="w-6 h-6" /> }
];

const FPGA_FAQ = [
    {
        question: "When should I use an FPGA instead of a GPU or CPU?",
        answer: "CPUs are great for sequential logic. GPUs are great for massive parallel math (if you can afford the latency). FPGAs are required when you need massive parallel math AND ultra-low, deterministic latency (measured in nanoseconds)."
    },
    {
        question: "What is High-Level Synthesis (HLS)?",
        answer: "Traditionally, programming an FPGA meant writing Verilog (which is very slow). HLS allows you to write C or C++ code, which the toolchain then translates into hardware logic. It's fantastic for rapidly deploying algorithms."
    },
    {
        question: "Can an FPGA be updated in the field?",
        answer: "Yes. Unlike an ASIC, an FPGA's hardware can be completely rewired via a simple firmware update over the air. This makes them ideal for telecom standards (like 5G) that evolve rapidly."
    },
    {
        question: "Why is my design failing 'Timing'?",
        answer: "If logic paths are too long, the electrical signal can't travel from one flip-flop to the next before the clock ticks. We fix this by 'pipelining'—inserting intermediate registers to break up the long paths."
    }
];

const FPGA_ABOUT_METRICS = {
    titlePart1: "About",
    titlePart2: "FPGA Acceleration",
    description: "U&WE turns software bottlenecks into hardware speed. We program Field Programmable Gate Arrays to perform complex mathematical tasks up to 100x faster than traditional processors, enabling real-time radar, trading, and telecommunications.",
    metrics: [
        { tag: "LATENCY", value: "< 50ns", label: "Ultra-Low Latency", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" },
        { tag: "THROUGHPUT", value: "400Gbps", label: "Line-Rate Processing", image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800&auto=format&fit=crop" },
        { tag: "ARCHITECTURES", value: "SoC", label: "Hard ARM + Soft Logic", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" },
        { tag: "LANGUAGES", value: "RTL / C++", label: "Verilog to HLS", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop" }
    ]
};

const FpgaAcceleration = () => {
    return (
        <ServiceLayout 
            pageKey="fpgaAcceleration"
            hero={{
                title: "FPGA Acceleration",
                description: "Designing ultra-low latency, high-throughput hardware logic for telecom, SmartNICs, and RF signal processing.",
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
                gridImage: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=2564&auto=format&fit=crop",
                collageImages: COLLAGE_IMAGES,
                features: SEQUENCE_FEATURES,
                aboutText: (
                    <p className="text-[clamp(1.1rem,2vw,2.2rem)] font-medium leading-[1.6] tracking-tight text-left text-white">
                        Rewiring hardware on the fly.
                        <br className="hidden lg:block mt-2" />
                        We bend silicon to solve your hardest problems.
                    </p>
                )
            }}
            slider={{
                title: "Latest in FPGA Design",
                subtitle: "Insights from our hardware logic teams",
                cards: LATEST_INSIGHTS
            }}
            showcase={{
                features: SHOWCASE_FEATURES,
                backgroundText: "HARDWARE\nLOGIC"
            }}
        />
    );
};

export default FpgaAcceleration;

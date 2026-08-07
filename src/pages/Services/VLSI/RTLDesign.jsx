import React from 'react';
import ServiceLayout from '../../../components/ServiceLayout';
import { ShieldCheck, Cpu, Code, Target, FastForward, CheckCircle2, Award, Globe, Zap, Layers, Activity } from 'lucide-react';
import heroImage from "../../../assets/imagesss/semiconductor/rtldesign.png";

const SEQUENCE_FEATURES = [
    { id: 1, title: "Microarchitecture Design", desc: "Defining optimal pipelines, state machines, and data paths to meet stringent PPA targets." },
    { id: 2, title: "Verilog / SystemVerilog", desc: "Writing clean, synthesizable, and highly scalable RTL code for complex IP blocks." },
    { id: 3, title: "IP Integration", desc: "Seamlessly integrating third-party IPs like PCIe, DDR, USB, and MIPI." },
    { id: 4, title: "Low Power Design", desc: "Implementing UPF/CPF techniques like clock gating, power gating, and DVFS." },
    { id: 5, title: "Linting & CDC", desc: "Rigorous SpyGlass checks for linting, Clock Domain Crossing, and Reset Domain Crossing." },
    { id: 6, title: "Performance Optimization", desc: "Tuning data flow to eliminate bottlenecks and maximize throughput." }
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
        title: "Advanced Nodes",
        description: "Expertise in designing for cutting-edge TSMC, Samsung, and Intel process nodes.",
        points: ["FinFET architectures", "GAA technology", "Sub-5nm challenges"],
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
        color: "from-blue-500/20 to-purple-500/20"
    },
    {
        id: "02",
        title: "PPA Optimization",
        description: "Striking the perfect balance between Power, Performance, and Area.",
        points: ["Low power techniques", "High-frequency tuning", "Area miniaturization"],
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=80",
        color: "from-emerald-500/20 to-teal-500/20"
    },
    {
        id: "03",
        title: "First-Pass Success",
        description: "Rigorous methodologies designed to prevent costly re-spins.",
        points: ["Zero-defect tolerance", "Comprehensive verification", "Thorough sign-off"],
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=80",
        color: "from-orange-500/20 to-red-500/20"
    },
    {
        id: "04",
        title: "Industry Standards",
        description: "Ensuring designs meet strict automotive, medical, and aerospace protocols.",
        points: ["ISO 26262 compliance", "DO-254", "Silicon reliability"],
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=80",
        color: "from-pink-500/20 to-rose-500/20"
    }
];

const LATEST_INSIGHTS = [
  {
    id: 1,
    tag: "Silicon",
    title: "Overcoming Routing Congestion in 3nm FinFET Designs",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    tag: "Verification",
    title: "Scaling UVM Testbenches for Complex Multi-Core SoCs",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    tag: "Power",
    title: "Advanced Clock Gating Strategies for Mobile Architectures",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80"
  }
];

const RTL_SUB_SERVICES = [
    { title: "Microarchitecture Design", description: "Translating complex specifications into optimal pipelines, state machines, and robust data paths.", icon: <Cpu className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80" },
    { title: "IP & SoC Integration", description: "Seamlessly integrating advanced third-party IPs like PCIe, DDR, USB, and MIPI at the system level.", icon: <Layers className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=80" },
    { title: "Low Power Intent (UPF/CPF)", description: "Implementing sophisticated power strategies including clock gating, power gating, and DVFS.", icon: <Zap className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=80" },
    { title: "Linting, CDC & RDC", description: "Executing rigorous structural checks using SpyGlass to guarantee design cleanliness and safety.", icon: <ShieldCheck className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=80" },
    { title: "Synthesis & Timing Constraints", description: "Developing comprehensive SDC constraints and analyzing initial synthesis logic for early timing closure.", icon: <FastForward className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80" },
    { title: "Performance Optimization", description: "Tuning data flow architectures to eliminate bottlenecks, minimize latency, and maximize throughput.", icon: <Activity className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=80" }
];

const RTL_ADVANTAGES = [
    { title: "PPA Optimized Designs", description: "Our RTL coding practices are deeply focused on striking the perfect balance between Power, Performance, and Area right from the architectural phase.", icon: <Target className="w-6 h-6" /> },
    { title: "Scalable Methodologies", description: "We write clean, parameterized, and highly reusable SystemVerilog code, ensuring your IPs can be easily adapted for future generations of silicon.", icon: <Code className="w-6 h-6" /> },
    { title: "Accelerated Prototyping", description: "Our clean RTL guarantees faster bring-up on FPGA and hardware emulation platforms, significantly reducing your software development lifecycle.", icon: <Zap className="w-6 h-6" /> },
    { title: "Foundry Ready", description: "Deep understanding of advanced TSMC, Samsung, and Intel nodes ensures our RTL is structurally sound for physical implementation.", icon: <Award className="w-6 h-6" /> }
];

const RTL_FAQ = [
    {
        question: "How do you handle multi-clock domain designs?",
        answer: "We employ rigorous synchronization techniques (FIFOs, double-flop synchronizers, handshaking) backed by comprehensive SpyGlass CDC and RDC structural analysis to ensure meta-stability is completely mitigated."
    },
    {
        question: "Do you assist with defining microarchitecture from high-level specs?",
        answer: "Yes, our senior architects specialize in analyzing high-level algorithms (C/C++/MATLAB) and translating them into cycle-accurate microarchitecture specifications and data path designs."
    },
    {
        question: "What is your approach to low power design?",
        answer: "We implement power-aware RTL coding from day one. We integrate UPF/CPF intent alongside the RTL, employing fine-grained clock gating, operand isolation, and multi-voltage domain planning."
    },
    {
        question: "Can your team integrate complex third-party IPs?",
        answer: "Absolutely. We have extensive experience integrating industry-standard IPs (ARM cores, PCIe PHYs, DDR controllers) and handling the complex wrapper logic, protocol bridges (AXI/AHB), and interrupt handling required."
    }
];

const RTL_ABOUT_METRICS = {
    titlePart1: "About",
    titlePart2: "RTL Design",
    description: "U&WE transforms high-level architectural specifications into flawless, synthesis-ready Register Transfer Level code. Our engineering focus ensures your designs achieve the ultimate balance of Power, Performance, and Area.",
    metrics: [
        { tag: "IP BLOCKS", value: "150+", label: "Architectures Defined", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" },
        { tag: "STRUCTURAL", value: "100%", label: "Lint & CDC Clean", image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800&auto=format&fit=crop" },
        { tag: "EFFICIENCY", value: "Top 1%", label: "PPA Optimization", image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800&auto=format&fit=crop" },
        { tag: "INTEGRATION", value: "Zero", label: "Protocol Mismatches", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" }
    ]
};

const RTLDesign = () => {
    return (
        <ServiceLayout 
            pageKey="rtlDesign"
            hero={{
                title: "RTL Design",
                description: "Transforming architectural specifications into optimized Register Transfer Level code for high-performance SoCs and ASICs.",
                primaryButtonText: "Discuss Project",
                secondaryButtonText: "View Capabilities",
                image: heroImage
            }}
            aboutMetrics={RTL_ABOUT_METRICS}
            subServices={RTL_SUB_SERVICES}
            subServicesTitle={{ part1: "Core", part2: "Capabilities" }}
            advantages={RTL_ADVANTAGES}
            advantagesTitle={{ part1: "Why Partner", part2: "With Us" }}
            faqs={RTL_FAQ}
            portal={{
                portalImage: heroImage,
                gridImage: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2564&auto=format&fit=crop",
                collageImages: COLLAGE_IMAGES,
                features: SEQUENCE_FEATURES,
                aboutText: (
                    <p className="text-[clamp(1.1rem,2vw,2.2rem)] font-medium leading-[1.6] tracking-tight text-left text-white">
                        From architecture to GDSII, we deliver flawless silicon IP and SoC designs.
                        <br className="hidden lg:block mt-2" />
                        Our engineering mastery ensures maximum performance on the most advanced nodes.
                    </p>
                )
            }}
            slider={{
                title: "Latest in VLSI Design",
                subtitle: "Insights from our silicon architects",
                cards: LATEST_INSIGHTS
            }}
            showcase={{
                features: SHOWCASE_FEATURES,
                backgroundText: "SILICON\nDESIGN"
            }}
        />
    );
};

export default RTLDesign;

import React from 'react';
import ServiceLayout from '../../../../components/ServiceLayout';
import { Cpu, Zap, Activity, ShieldCheck, Microchip, Layers, Server, Code, HardDrive } from 'lucide-react';
import heroImage from "../../../../assets/imagesss/semiconductor/asicdesign.png";

const SEQUENCE_FEATURES = [
    { id: 1, title: "Architecture & Spec", desc: "Defining power, performance, and area (PPA) targets, memory hierarchies, and bus structures." },
    { id: 2, title: "RTL Design", desc: "Developing synthesizable, power-aware Verilog/SystemVerilog targeting specific foundry process nodes." },
    { id: 3, title: "Design Verification (DV)", desc: "Executing massive UVM test plans and formal verification to guarantee zero tape-out respins." },
    { id: 4, title: "Logic Synthesis", desc: "Translating RTL into a technology-mapped gate-level netlist optimized for timing and area." },
    { id: 5, title: "Physical Design", desc: "Performing floorplanning, placement, Clock Tree Synthesis (CTS), and final routing (P&R)." },
    { id: 6, title: "Sign-Off & Tape-Out", desc: "Running Static Timing Analysis (STA), DRC/LVS physical checks, and generating the final GDSII." }
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
        title: "AI & ML Accelerators",
        description: "Designing massive systolic arrays and custom tensor cores for generative AI training and edge inference.",
        points: ["NPU architectures", "HBM3 memory integration", "Die-to-Die (UCIe)"],
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
        color: "from-blue-500/20 to-purple-500/20"
    },
    {
        id: "02",
        title: "Networking Silicon",
        description: "Architecting 800G/1.6T Ethernet switches, NPUs, and smartNICs for hyperscale data centers.",
        points: ["112G/224G SerDes", "Packet processing pipelines", "TCAM integration"],
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=80",
        color: "from-emerald-500/20 to-teal-500/20"
    },
    {
        id: "03",
        title: "Ultra-Low Power IoT",
        description: "Developing mixed-signal SoCs operating on micro-watts for wearables and implantable medical devices.",
        points: ["Sub-threshold design", "Power gating & UPF", "Integrated RF/BLE"],
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=80",
        color: "from-orange-500/20 to-red-500/20"
    },
    {
        id: "04",
        title: "Automotive SoCs",
        description: "Designing ASICs for ADAS and autonomous driving, strictly adhering to ISO 26262 functional safety standards.",
        points: ["ASIL-D compliance", "Lockstep architectures", "Vision processing cores"],
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=80",
        color: "from-pink-500/20 to-rose-500/20"
    }
];

const LATEST_INSIGHTS = [
  {
    id: 1,
    tag: "Physical Design",
    title: "Navigating Routing Congestion in 3nm FinFET Designs",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    tag: "Verification",
    title: "Formal Verification Strategies for RISC-V Custom Instructions",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    tag: "Power",
    title: "Implementing UPF (Unified Power Format) for Advanced Sleep Modes",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80"
  }
];

const ASIC_SUB_SERVICES = [
    { title: "RTL Architecture", description: "Designing optimal microarchitectures, memory subsystems, and bus fabrics (AXI, AHB) to meet aggressive PPA targets.", icon: <Code className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80" },
    { title: "UVM Verification", description: "Deploying massive server farms to run constrained-random testbenches, ensuring corner cases are hit before tape-out.", icon: <ShieldCheck className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=80" },
    { title: "Physical Design", description: "Transforming netlists into physical layouts. Floorplanning, P&R, and resolving complex DRC/LVS errors at advanced nodes.", icon: <Layers className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=80" },
    { title: "Design for Test (DFT)", description: "Inserting scan chains, memory BIST, and JTAG boundaries to guarantee the silicon can be thoroughly tested on the manufacturing floor.", icon: <Activity className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=80" },
    { title: "Analog/Mixed-Signal", description: "Designing custom ADCs, DACs, PLLs, and PMICs, seamlessly integrating them with the massive digital logic core.", icon: <Zap className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80" },
    { title: "Foundry Tape-Out", description: "Managing the complex handoff process with TSMC, Samsung, or GlobalFoundries to turn the GDSII file into physical wafers.", icon: <HardDrive className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=80" }
];

const ASIC_ADVANTAGES = [
    { title: "Zero-Respin Philosophy", description: "Silicon respins cost millions. We utilize exhaustive verification, formal methods, and FPGA emulation to get it right the first time.", icon: <ShieldCheck className="w-6 h-6" /> },
    { title: "Advanced Node Experience", description: "We have taped out designs down to 3nm FinFET, navigating the severe double-patterning and electromigration constraints of modern physics.", icon: <Layers className="w-6 h-6" /> },
    { title: "EDA Tool Mastery", description: "Our teams are highly proficient in the standard Cadence, Synopsys, and Siemens (Mentor) EDA toolchains required for ASIC sign-off.", icon: <Activity className="w-6 h-6" /> },
    { title: "Turnkey Supply Chain", description: "Beyond design, we manage packaging (SiP, Flip-Chip), test house logistics (OSAT), and yield ramp to deliver working chips to your door.", icon: <Cpu className="w-6 h-6" /> }
];

const ASIC_FAQ = [
    {
        question: "Do you design custom analog IP blocks?",
        answer: "Yes, our mixed-signal teams design custom PLLs, ADCs, and SerDes PHYs when off-the-shelf IP doesn't meet your strict power or area requirements."
    },
    {
        question: "Can you rescue an ASIC project that is failing timing?",
        answer: "Absolutely. We are often brought in to resolve difficult timing closure issues on advanced nodes, employing aggressive logic restructuring, custom floorplanning, and useful skew techniques."
    },
    {
        question: "How do you handle IP licensing?",
        answer: "We assist in evaluating, negotiating, and integrating third-party IP (such as PCIe PHYs, DDR controllers, or ARM cores). We ensure the IP deliverables match your target process node and integration requirements."
    }
];

const ASIC_ABOUT_METRICS = {
    titlePart1: "About",
    titlePart2: "ASIC Design",
    description: "U&WE provides comprehensive Application-Specific Integrated Circuit (ASIC) design services. We turn ambitious architectural concepts into tangible, mass-produced silicon that dominates the market.",
    metrics: [
        { tag: "TAPE-OUTS", value: "200+", label: "Successful Silicon taped out", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" },
        { tag: "GEOMETRY", value: "3nm", label: "Advanced Node Expertise", image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800&auto=format&fit=crop" },
        { tag: "GATES", value: "Billions", label: "Logic Gates Synthesized", image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800&auto=format&fit=crop" },
        { tag: "SUCCESS", value: "99%", label: "First-Pass Silicon Success", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" }
    ]
};

const ASICDesign = () => {
    return (
        <ServiceLayout 
            pageKey="asicDesign"
            hero={{
                title: "Custom ASIC Design",
                description: "End-to-end silicon engineering—from architecture to GDSII—delivering uncompromised power, performance, and area.",
                primaryButtonText: "Discuss Project",
                secondaryButtonText: "View Capabilities",
                image: heroImage
            }}
            aboutMetrics={ASIC_ABOUT_METRICS}
            subServices={ASIC_SUB_SERVICES}
            subServicesTitle={{ part1: "Core", part2: "Capabilities" }}
            advantages={ASIC_ADVANTAGES}
            advantagesTitle={{ part1: "Why Partner", part2: "With Us" }}
            faqs={ASIC_FAQ}
            portal={{
                portalImage: heroImage,
                gridImage: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2564&auto=format&fit=crop",
                collageImages: COLLAGE_IMAGES,
                features: SEQUENCE_FEATURES,
                aboutText: (
                    <p className="text-[clamp(1.1rem,2vw,2.2rem)] font-medium leading-[1.6] tracking-tight text-left text-white">
                        From whiteboard architecture to packaged silicon, we own the process.
                        <br className="hidden lg:block mt-2" />
                        Our ASICs power next-generation AI, networking, and consumer tech.
                    </p>
                )
            }}
            slider={{
                title: "Latest in Silicon Engineering",
                subtitle: "Insights from our IC architects",
                cards: LATEST_INSIGHTS
            }}
            showcase={{
                features: SHOWCASE_FEATURES,
                backgroundText: "ASIC\nDESIGN"
            }}
        />
    );
};

export default ASICDesign;

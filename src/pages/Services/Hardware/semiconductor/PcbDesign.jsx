import React from 'react';
import ServiceLayout from '../../../../components/ServiceLayout';
import { Layers, Zap, ShieldCheck, Cpu, Maximize, Activity, Network, PenTool, CheckCircle2 } from 'lucide-react';
import heroImage from "../../../../assets/imagesss/semiconductor/pcbdesign.png";

const SEQUENCE_FEATURES = [
    { id: 1, title: "High-Speed Digital Layout", desc: "Routing PCIe, DDR, and 100G Ethernet with precise length matching and impedance control." },
    { id: 2, title: "HDI Technology", desc: "Utilizing blind, buried, and micro-vias for ultra-dense, miniaturized PCB architectures." },
    { id: 3, title: "Signal & Power Integrity", desc: "Performing pre- and post-layout SI/PI simulations to guarantee flawless high-frequency operation." },
    { id: 4, title: "RF & Mixed-Signal", desc: "Isolating noisy digital domains from sensitive analog/RF traces using strict stackup strategies." },
    { id: 5, title: "EMI / EMC Compliance", desc: "Designing ground planes and shielding to ensure first-pass FCC/CE regulatory certification." },
    { id: 6, title: "DFM & DFA Optimization", desc: "Collaborating with fabrication houses to ensure high-yield manufacturing and assembly." }
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
        title: "High-Density Interconnect",
        description: "Pushing the limits of miniaturization with advanced HDI board architectures.",
        points: ["Any-layer vias", "Sequential lamination", "0.3mm BGA pitch"],
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
        color: "from-blue-500/20 to-purple-500/20"
    },
    {
        id: "02",
        title: "Thermal Management",
        description: "Dissipating extreme heat loads without compromising board footprint or longevity.",
        points: ["Thermal vias & coins", "Metal-core PCBs", "Heatsink integration"],
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=80",
        color: "from-emerald-500/20 to-teal-500/20"
    },
    {
        id: "03",
        title: "Rigid-Flex Designs",
        description: "Engineering complex 3D board structures for wearables and aerospace applications.",
        points: ["Dynamic flex zones", "Hatched ground planes", "Bend radius optimization"],
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=80",
        color: "from-orange-500/20 to-red-500/20"
    },
    {
        id: "04",
        title: "EMC/EMI Hardening",
        description: "Guaranteeing compliance with stringent FCC, CE, and CISPR regulatory standards.",
        points: ["Faraday cages", "Differential routing", "Crosstalk mitigation"],
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=80",
        color: "from-pink-500/20 to-rose-500/20"
    }
];

const LATEST_INSIGHTS = [
  {
    id: 1,
    tag: "High-Speed",
    title: "Overcoming Signal Attenuation in Gen5 PCIe PCB Routing",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    tag: "HDI",
    title: "Best Practices for Micro-Via Reliability in 12-Layer Boards",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    tag: "Simulation",
    title: "Using PDN Analyzer for Robust Power Delivery Networks",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80"
  }
];

const PCB_SUB_SERVICES = [
    { title: "High-Speed Routing", description: "Executing strict length matching, phase tuning, and impedance control for DDR4/5, PCIe, and gigabit ethernet.", icon: <Zap className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80" },
    { title: "HDI & Miniaturization", description: "Deploying high-density interconnect (HDI) structures with micro-vias to fit complex circuits into wearable/IoT form factors.", icon: <Maximize className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=80" },
    { title: "SI / PI Simulation", description: "Utilizing HyperLynx and Sigrity to simulate eye diagrams, crosstalk, and Power Delivery Networks (PDN) before fabrication.", icon: <Activity className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=80" },
    { title: "RF & Mixed-Signal Layout", description: "Isolating noisy digital domains from sensitive analog sensors and RF antennas to preserve signal-to-noise ratios.", icon: <Network className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=80" },
    { title: "Stackup Design", description: "Architecting optimal layer stackups (up to 32+ layers) balancing impedance requirements, thermal constraints, and cost.", icon: <Layers className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80" },
    { title: "DFM & DFA", description: "Applying strict Design for Manufacturing and Assembly rules to ensure high fabrication yields and flawless automated pick-and-place.", icon: <CheckCircle2 className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=80" }
];

const PCB_ADVANTAGES = [
    { title: "First-Pass Certification", description: "Our layouts are designed for EMC/EMI compliance from day one, drastically reducing the risk of failing FCC/CE lab testing.", icon: <ShieldCheck className="w-6 h-6" /> },
    { title: "Tool Agnostic Expertise", description: "We operate seamlessly across Altium Designer, Cadence Allegro, and Mentor Xpedition based on your internal CAD preferences.", icon: <PenTool className="w-6 h-6" /> },
    { title: "Pre-Layout Simulation", description: "We don't rely on rules of thumb. We simulate critical nets and power planes before routing a single trace to guarantee performance.", icon: <Activity className="w-6 h-6" /> },
    { title: "Manufacturing Partnerships", description: "We possess deep knowledge of fabricator capabilities globally, ensuring our designs can be built reliably and cost-effectively at scale.", icon: <Cpu className="w-6 h-6" /> }
];

const PCB_FAQ = [
    {
        question: "Can you handle high-layer count, complex server boards?",
        answer: "Yes. We frequently design 24+ layer backplanes and compute modules utilizing Megtron 6 or Rogers materials, accommodating massive BGA processors and thousands of high-speed nets."
    },
    {
        question: "Do you provide mechanical 3D integration models?",
        answer: "Absolutely. We export accurate STEP/IDF files directly from the ECAD layout, allowing your mechanical engineering team to verify enclosure fit, thermal clearances, and connector alignments in SolidWorks or Fusion360."
    },
    {
        question: "How do you ensure the board doesn't overheat?",
        answer: "We perform thermal co-simulation. By analyzing the power dissipation of key ICs against the copper weight and thermal via placement, we ensure the board stays within safe operating temperatures."
    },
    {
        question: "What deliverables do you provide at the end of the project?",
        answer: "We provide a complete manufacturing package: Gerber/ODB++ files, drill files, Pick and Place data, comprehensive Bill of Materials (BOM), fabrication drawings, and the native CAD source files."
    }
];

const PCB_ABOUT_METRICS = {
    titlePart1: "About",
    titlePart2: "PCB Design",
    description: "U&WE engineers highly complex, multi-layer Printed Circuit Boards that push the boundaries of density and speed. We bridge the gap between electrical schematics and physical manufacturing with absolute precision.",
    metrics: [
        { tag: "COMPLEXITY", value: "32+", label: "Maximum Layer Counts", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" },
        { tag: "SPEED", value: "112Gbps", label: "PAM4 Routing Capabilities", image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800&auto=format&fit=crop" },
        { tag: "CERTIFICATION", value: "100%", label: "First-Pass EMC Compliance", image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800&auto=format&fit=crop" },
        { tag: "YIELD", value: "99.9%", label: "DFM Manufacturing Success", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" }
    ]
};

const PcbDesign = () => {
    return (
        <ServiceLayout 
            pageKey="pcbDesign"
            hero={{
                title: "PCB Layout & Design",
                description: "Architecting high-density, high-speed printed circuit boards optimized for extreme performance and flawless manufacturing.",
                primaryButtonText: "Discuss Project",
                secondaryButtonText: "View Capabilities",
                image: heroImage
            }}
            aboutMetrics={PCB_ABOUT_METRICS}
            subServices={PCB_SUB_SERVICES}
            subServicesTitle={{ part1: "Core", part2: "Capabilities" }}
            advantages={PCB_ADVANTAGES}
            advantagesTitle={{ part1: "Why Partner", part2: "With Us" }}
            faqs={PCB_FAQ}
            portal={{
                portalImage: heroImage,
                gridImage: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2564&auto=format&fit=crop",
                collageImages: COLLAGE_IMAGES,
                features: SEQUENCE_FEATURES,
                aboutText: (
                    <p className="text-[clamp(1.1rem,2vw,2.2rem)] font-medium leading-[1.6] tracking-tight text-left text-white">
                        From rigid-flex wearables to massive server backplanes, we route the future.
                        <br className="hidden lg:block mt-2" />
                        Our layouts ensure signal integrity, thermal stability, and EMC compliance.
                    </p>
                )
            }}
            slider={{
                title: "Latest in Hardware Layout",
                subtitle: "Insights from our PCB architects",
                cards: LATEST_INSIGHTS
            }}
            showcase={{
                features: SHOWCASE_FEATURES,
                backgroundText: "PCB\nLAYOUT"
            }}
        />
    );
};

export default PcbDesign;

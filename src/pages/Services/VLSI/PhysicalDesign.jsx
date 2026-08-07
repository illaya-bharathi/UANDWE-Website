import React from 'react';
import ServiceLayout from '../../../components/ServiceLayout';
import { Layers, Network, Zap, ShieldCheck, Database, Maximize, Cpu, Code, Target, Award, Globe, Search } from 'lucide-react';
import heroImage from "../../../assets/imagesss/semiconductor/physicaldesign.png";

const SEQUENCE_FEATURES = [
    { id: 1, title: "Floorplanning & Placement", desc: "Strategic macro placement and I/O pad ring design to minimize wirelength and congestion." },
    { id: 2, title: "Clock Tree Synthesis (CTS)", desc: "Designing robust clock networks to ensure zero skew and meet stringent hold times." },
    { id: 3, title: "Routing & Optimization", desc: "Advanced routing algorithms handling millions of nets across advanced FinFET nodes." },
    { id: 4, title: "Static Timing Analysis (STA)", desc: "Multi-mode, multi-corner (MMMC) timing closure at signs-off conditions." },
    { id: 5, title: "IR Drop / EM Analysis", desc: "Power grid robustness validation using Apache RedHawk or Voltus." },
    { id: 6, title: "Physical Verification", desc: "Ensuring flawless tape-out with clean DRC, LVS, and Antenna checks (Calibre)." }
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

const PD_SUB_SERVICES = [
    { title: "Floorplanning & Power Planning", description: "Strategic partitioning and robust power grid design to handle extreme current demands without voltage drop.", icon: <Layers className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80" },
    { title: "Clock Tree Synthesis (CTS)", description: "Building highly balanced, low-skew clock networks tailored for high-speed multi-corner operation.", icon: <Zap className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=80" },
    { title: "Routing & Congestion Relief", description: "Navigating routing blockages on advanced sub-5nm nodes using ML-driven place-and-route techniques.", icon: <Network className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=80" },
    { title: "Static Timing Analysis (STA)", description: "Achieving sign-off timing closure across hundreds of Process, Voltage, and Temperature (PVT) corners.", icon: <Database className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=80" },
    { title: "Physical Verification (DRC/LVS)", description: "Ensuring DRC/LVS/ERC cleanliness for flawless manufacturing using industry standard tools like Calibre.", icon: <ShieldCheck className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80" },
    { title: "ECO Implementation", description: "Rapid functional or timing ECO turnarounds late in the design cycle with minimal mask disruption.", icon: <Maximize className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=80" }
];

const PD_ADVANTAGES = [
    { title: "Advanced Node Mastery", description: "Proven track record of successful tape-outs on bleeding-edge TSMC, Samsung, and Intel nodes down to 3nm.", icon: <Cpu className="w-6 h-6" /> },
    { title: "First-Pass Silicon Success", description: "Our rigorous STA and EM/IR methodology ensures silicon functions flawlessly on the first power-up.", icon: <Award className="w-6 h-6" /> },
    { title: "Tool Agnostic Expertise", description: "Deep fluency across Synopsys ICC2, Cadence Innovus, and Mentor Calibre suites for flexible engagement.", icon: <Code className="w-6 h-6" /> },
    { title: "Rapid Turnaround Times", description: "Leveraging distributed computing and highly automated TCL scripts to slash place-and-route iterations.", icon: <Zap className="w-6 h-6" /> }
];

const PD_FAQ = [
    {
        question: "Do you support 5nm and 3nm FinFET/GAA processes?",
        answer: "Yes, our team has deep expertise navigating the unique design rules, double-patterning constraints, and complex routing challenges associated with TSMC and Samsung sub-5nm technologies."
    },
    {
        question: "How do you ensure timing closure across so many corners?",
        answer: "We use Multi-Mode Multi-Corner (MMMC) STA setups from day one, coupled with aggressive optimization during CTS and routing, to ensure hold and setup margins are met globally."
    },
    {
        question: "Can you handle late-stage ECOs?",
        answer: "Absolutely. We are highly skilled at implementing complex metal-only or base-layer Engineering Change Orders (ECOs) using automated scripts to fix functional bugs without disrupting the entire layout."
    },
    {
        question: "What is your approach to power integrity?",
        answer: "We conduct exhaustive dynamic and static IR-drop and Electromigration (EM) analysis using tools like Apache RedHawk to guarantee the power grid will sustain peak operational loads."
    }
];

const PD_ABOUT_METRICS = {
    titlePart1: "About",
    titlePart2: "Physical Design",
    description: "U&WE translates complex netlists into manufacturing-ready GDSII files. Our physical design experts squeeze every drop of performance from the silicon while adhering to the strictest foundry rules.",
    metrics: [
        { tag: "TAPE-OUTS", value: "100+", label: "Successful First-Pass Silicon", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" },
        { tag: "ADVANCED NODES", value: "3nm", label: "Bleeding-Edge FinFET/GAA", image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800&auto=format&fit=crop" },
        { tag: "EFFICIENCY", value: "99%", label: "Routing Congestion Resolved", image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800&auto=format&fit=crop" },
        { tag: "SIGN-OFF", value: "Zero", label: "DRC/LVS Violations", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" }
    ]
};

const PhysicalDesign = () => {
    return (
        <ServiceLayout 
            pageKey="physicalDesign"
            hero={{
                title: "Physical Design",
                description: "Navigating sub-nanometer complexities to transform netlists into perfectly optimized GDSII layouts.",
                primaryButtonText: "Discuss Project",
                secondaryButtonText: "View Capabilities",
                image: heroImage
            }}
            aboutMetrics={PD_ABOUT_METRICS}
            subServices={PD_SUB_SERVICES}
            subServicesTitle={{ part1: "Core", part2: "Capabilities" }}
            advantages={PD_ADVANTAGES}
            advantagesTitle={{ part1: "Why Partner", part2: "With Us" }}
            faqs={PD_FAQ}
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

export default PhysicalDesign;

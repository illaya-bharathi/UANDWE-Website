import React from 'react';
import ServiceLayout from '../../../components/ServiceLayout';
import { ShieldCheck, Activity, Search, Minimize, Microchip, Cpu, Code, Target, FastForward, CheckCircle2, Award, Globe, Zap, Settings } from 'lucide-react';
import heroImage from "../../../assets/imagesss/semiconductor/dft.png";

const SEQUENCE_FEATURES = [
    { id: 1, title: "Scan Insertion", desc: "Implementing full-scan or partial-scan methodologies to ensure internal state observability." },
    { id: 2, title: "MBIST Generation", desc: "Automated Memory Built-In Self-Test insertion for highly reliable embedded memories." },
    { id: 3, title: "Boundary Scan (JTAG)", desc: "IEEE 1149.1 compliant JTAG insertion for board-level interconnect testing." },
    { id: 4, title: "ATPG Pattern Generation", desc: "Generating high-coverage Automatic Test Pattern Generation vectors for ATE machines." },
    { id: 5, title: "Fault Simulation", desc: "Rigorous grading of stuck-at, transition, and path delay faults to guarantee coverage." },
    { id: 6, title: "Silicon Debug", desc: "Post-silicon yield analysis and debug to rapidly identify and isolate manufacturing defects." }
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

const DFT_SUB_SERVICES = [
    { title: "Scan Architecture", description: "Inserting robust scan chains with compression techniques to drastically reduce ATE test time.", icon: <Settings className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80" },
    { title: "MBIST & Repair", description: "Generating memory wrappers, BIST controllers, and implementing row/column repair for yield improvement.", icon: <Cpu className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=80" },
    { title: "Boundary Scan (JTAG)", description: "Inserting 1149.1/1149.6 compliant boundary scan logic to facilitate complex board-level interconnect testing.", icon: <Globe className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=80" },
    { title: "ATPG Generation", description: "Developing highly compressed ATPG patterns for stuck-at, transition, and path delay fault models.", icon: <Activity className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=80" },
    { title: "Fault Simulation", description: "Rigorous grading of test vectors to mathematically guarantee target fault coverage is met before tape-out.", icon: <Search className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80" },
    { title: "Yield Analysis", description: "Post-silicon scan dump analysis to rapidly identify systematic manufacturing defects and improve wafer yield.", icon: <CheckCircle2 className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=80" }
];

const DFT_ADVANTAGES = [
    { title: "Maximized Yield", description: "Our advanced DFT architectures ensure manufacturing defects are caught early, directly improving your bottom-line yield.", icon: <Award className="w-6 h-6" /> },
    { title: "Reduced Test Costs", description: "We implement aggressive scan compression techniques to slash the time your silicon spends on expensive ATE machines.", icon: <Minimize className="w-6 h-6" /> },
    { title: "Zero Timing Impact", description: "Our DFT experts work closely with Physical Design teams to ensure scan insertion has absolutely no impact on critical timing paths.", icon: <Zap className="w-6 h-6" /> },
    { title: "Silicon Debug Ready", description: "We build observability into the core of your SoC, turning months of tedious post-silicon lab debug into days.", icon: <ShieldCheck className="w-6 h-6" /> }
];

const DFT_FAQ = [
    {
        question: "How do you achieve high test coverage without bloating the area?",
        answer: "We utilize advanced scan compression algorithms (like Mentor TestKompress or Synopsys DFTMAX) which drastically reduce the number of scan channels needed, saving valuable pad and routing area."
    },
    {
        question: "Does your DFT architecture impact functional timing?",
        answer: "We are hyper-aware of timing closure. We employ physical-aware scan stitching and collaborate directly with the STA team to ensure scan paths do not violate setup or hold times on critical functional paths."
    },
    {
        question: "Can you generate patterns for specific ATE testers?",
        answer: "Yes, we generate industry-standard WGL or STIL formats and can tailor the ATPG constraints to match the specific memory and frequency limitations of your target Automated Test Equipment (ATE)."
    },
    {
        question: "Do you support Automotive safety standards?",
        answer: "Absolutely. We implement Logic BIST (LBIST) and continuous in-field monitoring logic critical for achieving ISO 26262 ASIL-D compliance in automotive SoCs."
    }
];

const DFT_ABOUT_METRICS = {
    titlePart1: "About",
    titlePart2: "DFT",
    description: "U&WE Design for Testability (DFT) services guarantee your silicon can be manufactured flawlessly at scale. We architect observability into complex SoCs to reduce test costs and maximize wafer yield.",
    metrics: [
        { tag: "COVERAGE", value: "99.9%", label: "Stuck-At Fault Coverage", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" },
        { tag: "TEST TIME", value: "10x", label: "Scan Compression Ratios", image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800&auto=format&fit=crop" },
        { tag: "RELIABILITY", value: "ASIL-D", label: "Automotive Safety Compliant", image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800&auto=format&fit=crop" },
        { tag: "YIELD", value: "100%", label: "Post-Silicon Debug Success", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" }
    ]
};

const DFT = () => {
    return (
        <ServiceLayout 
            pageKey="dft"
            hero={{
                title: "Design for Testability",
                description: "Architecting high-coverage testability to ensure zero-defect manufacturing and rapid post-silicon debug.",
                primaryButtonText: "Discuss Project",
                secondaryButtonText: "View Capabilities",
                image: heroImage
            }}
            aboutMetrics={DFT_ABOUT_METRICS}
            subServices={DFT_SUB_SERVICES}
            subServicesTitle={{ part1: "Core", part2: "Capabilities" }}
            advantages={DFT_ADVANTAGES}
            advantagesTitle={{ part1: "Why Partner", part2: "With Us" }}
            faqs={DFT_FAQ}
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

export default DFT;

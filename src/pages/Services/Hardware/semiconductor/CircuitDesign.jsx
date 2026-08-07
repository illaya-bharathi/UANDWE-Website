import React from 'react';
import ServiceLayout from '../../../../components/ServiceLayout';
import { Cpu, Zap, Activity, ShieldCheck, PenTool, Layers, CheckCircle2, Search, Target } from 'lucide-react';
import heroImage from "../../../../assets/imagesss/semiconductor/circuitdesign.png";

const SEQUENCE_FEATURES = [
    { id: 1, title: "Architecture & Spec", desc: "Defining the core hardware architecture, block diagrams, and critical power budgets." },
    { id: 2, title: "Component Selection", desc: "Sourcing high-availability, cost-effective ICs to build a resilient Bill of Materials (BOM)." },
    { id: 3, title: "Schematic Capture", desc: "Drawing meticulous, hierarchical schematics utilizing industry-standard EDA tools." },
    { id: 4, title: "Power Supply Design", desc: "Architecting low-noise LDOs and high-efficiency SMPS (Switch-Mode Power Supplies)." },
    { id: 5, title: "SPICE Simulation", desc: "Simulating critical analog nodes, filters, and transient responses before layout." },
    { id: 6, title: "Design for Test (DFT)", desc: "Integrating JTAG, test points, and boundary scan features for manufacturing diagnostics." }
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
        title: "Mixed-Signal Precision",
        description: "Seamlessly combining high-speed digital processors with ultra-sensitive analog sensor front-ends.",
        points: ["Low-noise amplification", "ADC/DAC interfacing", "Ground loop mitigation"],
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
        color: "from-blue-500/20 to-purple-500/20"
    },
    {
        id: "02",
        title: "Robust Power Trees",
        description: "Designing power architectures capable of supplying hundreds of amps with millivolt-level ripple.",
        points: ["Multi-phase buck converters", "Load-transient simulation", "Thermal dissipation"],
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=80",
        color: "from-emerald-500/20 to-teal-500/20"
    },
    {
        id: "03",
        title: "High-Speed Interfaces",
        description: "Architecting schematic constraints for multi-gigabit data links.",
        points: ["DDR4/DDR5 memory", "PCIe Gen4/Gen5", "USB 3.2 & Thunderbolt"],
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=80",
        color: "from-orange-500/20 to-red-500/20"
    },
    {
        id: "04",
        title: "Supply Chain Resilience",
        description: "Designing with supply chain volatility in mind to ensure your product can actually be manufactured.",
        points: ["Multi-source components", "Lifecycle analysis", "Drop-in replacements"],
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=80",
        color: "from-pink-500/20 to-rose-500/20"
    }
];

const LATEST_INSIGHTS = [
  {
    id: 1,
    tag: "Power",
    title: "Designing Multi-Phase Buck Converters for AI Accelerators",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    tag: "Analog",
    title: "Techniques for Sub-Microvolt Noise Floors in Medical Wearables",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    tag: "Sourcing",
    title: "Architecting Schematics to Survive Chip Shortages",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80"
  }
];

const CIRCUIT_SUB_SERVICES = [
    { title: "Architecture & Block Diagrams", description: "Defining the fundamental hardware topology, IC selection, and data flow before a single line is drawn.", icon: <Layers className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80" },
    { title: "Hierarchical Schematic Capture", description: "Creating deeply structured, readable schematics using Altium, OrCAD, or Mentor Xpedition.", icon: <PenTool className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=80" },
    { title: "Power Supply Design", description: "Architecting highly efficient DC-DC switching regulators and ultra-low noise linear dropouts (LDOs).", icon: <Zap className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=80" },
    { title: "Analog & Sensor Front-Ends", description: "Designing precise signal conditioning circuits (Op-Amps, filters) for complex physical sensors.", icon: <Activity className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=80" },
    { title: "BOM Risk Management", description: "Vetting every component against SiliconExpert or Octopart to guarantee 5-10 year production lifecycles.", icon: <ShieldCheck className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80" },
    { title: "SPICE Simulation", description: "Mathematically verifying circuit behavior across extreme temperature ranges and component tolerances.", icon: <Target className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=80" }
];

const CIRCUIT_ADVANTAGES = [
    { title: "First-Time Right Paradigm", description: "We run exhaustive Design Rule Checks (DRC) and peer-reviews to eliminate schematic errors before they propagate to layout.", icon: <CheckCircle2 className="w-6 h-6" /> },
    { title: "Deep Domain Expertise", description: "Our electrical engineers have designed everything from implantable medical pacemakers to 100kW industrial motor drives.", icon: <Cpu className="w-6 h-6" /> },
    { title: "Seamless ECAD-MCAD Flow", description: "We define physical constraints directly in the schematic, ensuring perfect harmony between the electronics and the mechanical enclosure.", icon: <Layers className="w-6 h-6" /> },
    { title: "Design for Testability (DFT)", description: "We strategically place test points and boundary scan chains to drastically reduce the time it takes to debug the first prototype.", icon: <Search className="w-6 h-6" /> }
];

const CIRCUIT_FAQ = [
    {
        question: "How do you handle component obsolescence?",
        answer: "During schematic capture, we actively verify the lifecycle status of every component. For critical ICs, we design 'pin-compatible' fallback options directly into the schematic to ensure production isn't halted by a single shortage."
    },
    {
        question: "Do you provide simulation reports?",
        answer: "Yes, for critical analog front-ends and switching power supplies, we provide comprehensive SPICE simulation reports detailing transient response, Bode plots (stability), and worst-case tolerance analysis."
    },
    {
        question: "Which EDA tools do you use?",
        answer: "Our primary tools are Altium Designer, Cadence OrCAD/Concept HDL, and Siemens EDA (Mentor Xpedition). We adapt to whatever toolchain your internal engineering team requires."
    },
    {
        question: "Can you review a schematic we've already designed?",
        answer: "Absolutely. We offer a rigorous Schematic Review service where our senior architects check your design for power sequencing issues, missing pull-ups, SI/PI red flags, and DFM compliance."
    }
];

const CIRCUIT_ABOUT_METRICS = {
    titlePart1: "About",
    titlePart2: "Circuit Design",
    description: "U&WE transforms product concepts into robust, mathematically verified electrical architectures. We design the vital schematics that serve as the flawless blueprint for your physical hardware.",
    metrics: [
        { tag: "SCHEMATICS", value: "500+", label: "Complex Designs Completed", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" },
        { tag: "EFFICIENCY", value: "95%+", label: "Power Supply Conversion", image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800&auto=format&fit=crop" },
        { tag: "RELIABILITY", value: "10 Yrs", label: "Average BOM Lifecycle", image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800&auto=format&fit=crop" },
        { tag: "SUCCESS", value: "99%", label: "First-Pass Schematic Yield", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" }
    ]
};

const CircuitDesign = () => {
    return (
        <ServiceLayout 
            pageKey="circuitDesign"
            hero={{
                title: "Circuit Design",
                description: "Architecting mathematically verified, highly resilient electrical schematics for complex analog, digital, and mixed-signal systems.",
                primaryButtonText: "Discuss Project",
                secondaryButtonText: "View Capabilities",
                image: heroImage
            }}
            aboutMetrics={CIRCUIT_ABOUT_METRICS}
            subServices={CIRCUIT_SUB_SERVICES}
            subServicesTitle={{ part1: "Core", part2: "Capabilities" }}
            advantages={CIRCUIT_ADVANTAGES}
            advantagesTitle={{ part1: "Why Partner", part2: "With Us" }}
            faqs={CIRCUIT_FAQ}
            portal={{
                portalImage: heroImage,
                gridImage: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2564&auto=format&fit=crop",
                collageImages: COLLAGE_IMAGES,
                features: SEQUENCE_FEATURES,
                aboutText: (
                    <p className="text-[clamp(1.1rem,2vw,2.2rem)] font-medium leading-[1.6] tracking-tight text-left text-white">
                        From ultra-low noise sensors to massive data center power trees.
                        <br className="hidden lg:block mt-2" />
                        Our schematics are the blueprints for flawless, mass-producible hardware.
                    </p>
                )
            }}
            slider={{
                title: "Latest in Electrical Engineering",
                subtitle: "Insights from our hardware architects",
                cards: LATEST_INSIGHTS
            }}
            showcase={{
                features: SHOWCASE_FEATURES,
                backgroundText: "CIRCUIT\nDESIGN"
            }}
        />
    );
};

export default CircuitDesign;

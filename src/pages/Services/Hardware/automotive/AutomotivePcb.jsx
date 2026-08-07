import React from 'react';
import ServiceLayout from '../../../../components/ServiceLayout';
import { Layers, Thermometer, ShieldCheck, Settings, Cpu, Map } from 'lucide-react';
import heroImage from "../../../../assets/imagesss/automotive/AutomotivePCB&ThermalDesign.png";

const SEQUENCE_FEATURES = [
    { id: 1, title: "Stackup Design", desc: "Defining heavy-copper inner layers and high-Tg substrates capable of surviving +125°C ambient environments." },
    { id: 2, title: "Component Placement", desc: "Placing massive IGBTs and tiny 0201 passives strategically to minimize thermal shadowing and EMI coupling." },
    { id: 3, title: "High-Current Routing", desc: "Calculating trace widths and copper pours to carry 100A+ continuous currents without delamination." },
    { id: 4, title: "Impedance Control", desc: "Routing length-matched, impedance-controlled differential pairs for PCIe, USB 3.0, and automotive Ethernet." },
    { id: 5, title: "Vibration Analysis", desc: "Simulating PCB resonances to prevent heavy components (like electrolytic capacitors) from snapping off during shock testing." },
    { id: 6, title: "DFM / DFA", desc: "Optimizing the panelization, fiducials, and solder mask for high-yield, automated Tier-1 manufacturing." }
];

const COLLAGE_IMAGES = [
    { src: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=800", scaleIndex: 4, cls: "!-top-[30vh] !left-[5vw] !h-[30vh] !w-[35vw]" },
    { src: "https://images.unsplash.com/photo-1580584126903-c17d41830450?q=80&w=800", scaleIndex: 5, cls: "!-top-[10vh] !-left-[25vw] !h-[45vh] !w-[20vw]" },
    { src: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=800", scaleIndex: 6, cls: "!left-[27.5vw] !h-[25vh] !w-[25vw]" },
    { src: "https://images.unsplash.com/photo-1620802051772-9ea373307bdf?q=80&w=800", scaleIndex: 5, cls: "!top-[27.5vh] !left-[5vw] !h-[25vh] !w-[20vw]" },
    { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800", scaleIndex: 6, cls: "!top-[27.5vh] !-left-[22.5vw] !h-[25vh] !w-[30vw]" },
    { src: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800", scaleIndex: 8, cls: "!top-[22.5vh] !left-[25vw] !h-[15vh] !w-[15vw]" },
];

const SHOWCASE_FEATURES = [
    {
        id: "01",
        title: "Heavy Copper Boards",
        description: "Designing PCBs with 3oz to 10oz copper weights for traction inverters, DCDC converters, and power steering modules.",
        points: ["Current carrying capacity", "Thermal dissipation", "Busbar integration"],
        image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&auto=format&fit=crop&q=80",
        color: "from-blue-500/20 to-purple-500/20"
    },
    {
        id: "02",
        title: "High-Density Interconnect (HDI)",
        description: "Routing massive 1000+ pin BGA processors (like the Nvidia Orin) using micro-vias, blind vias, and buried vias.",
        points: ["Any-layer HDI", "Via-in-pad", "LPDDR5 routing"],
        image: "https://images.unsplash.com/photo-1580584126903-c17d41830450?w=800&auto=format&fit=crop&q=80",
        color: "from-emerald-500/20 to-teal-500/20"
    },
    {
        id: "03",
        title: "Rigid-Flex Designs",
        description: "Eliminating heavy wiring harnesses by designing rigid-flex PCBs that fold into tight automotive enclosures (e.g. camera modules).",
        points: ["Dynamic bending", "Hatch copper planes", "Reduced weight"],
        image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=800&auto=format&fit=crop&q=80",
        color: "from-orange-500/20 to-red-500/20"
    },
    {
        id: "04",
        title: "Thermal Management",
        description: "Moving heat away from critical components using thermal vias, metal core PCBs (MCPCB), and copper coin inserts.",
        points: ["Thermal vias", "Junction temps", "Heat sink mating"],
        image: "https://images.unsplash.com/photo-1620802051772-9ea373307bdf?w=800&auto=format&fit=crop&q=80",
        color: "from-pink-500/20 to-rose-500/20"
    }
];

const LATEST_INSIGHTS = [
  {
    id: 1,
    tag: "Materials",
    title: "Selecting the Right High-Tg Laminates for Under-Hood ECUs",
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    tag: "High-Speed",
    title: "Routing LPDDR5 Memory on Automotive Substrates",
    image: "https://images.unsplash.com/photo-1580584126903-c17d41830450?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    tag: "Thermal",
    title: "Thermal Vias vs. Copper Coins: Cooling 100W SoCs",
    image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=800&auto=format&fit=crop&q=80"
  }
];

const PCB_SUB_SERVICES = [
    { title: "HDI Layout Design", description: "Utilizing Altium Designer and Siemens Xpedition to route highly complex, space-constrained ADAS and Cockpit domain controllers.", icon: <Layers className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&auto=format&fit=crop&q=80" },
    { title: "Thermal Simulation", description: "Running ANSYS Icepak simulations to identify hot spots and iteratively optimize component placement before manufacturing.", icon: <Thermometer className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1580584126903-c17d41830450?w=800&auto=format&fit=crop&q=80" },
    { title: "High-Voltage Spacing", description: "Enforcing strict creepage and clearance rules (IEC 60664) across the PCB to prevent arcing in 800V EV architectures.", icon: <ShieldCheck className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=800&auto=format&fit=crop&q=80" },
    { title: "Signal Integrity (SI)", description: "Analyzing eye diagrams and S-parameters using HyperLynx to guarantee error-free multi-gigabit data transmission.", icon: <Settings className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1620802051772-9ea373307bdf?w=800&auto=format&fit=crop&q=80" },
    { title: "Vibration / Modal Analysis", description: "Simulating mechanical stress and resonant frequencies to ensure the PCB won't fracture during engine/road vibration.", icon: <Map className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80" },
    { title: "DFM / DFA Reviews", description: "Validating the design against specific Tier-1 factory capabilities to guarantee high-yield, low-cost mass production.", icon: <Cpu className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80" }
];

const PCB_ADVANTAGES = [
    { title: "Automotive Specialists", description: "We don't design consumer electronics. We understand the specific rules required for boards that must survive 15 years in a car.", icon: <ShieldCheck className="w-6 h-6" /> },
    { title: "Tool Mastery", description: "Our layout engineers are experts in Altium, Cadence Allegro, and Siemens Xpedition, fitting seamlessly into your toolchain.", icon: <Settings className="w-6 h-6" /> },
    { title: "Concurrent Engineering", description: "Our layout engineers work side-by-side with our mechanical and thermal teams, drastically reducing design iterations.", icon: <Layers className="w-6 h-6" /> },
    { title: "Yield Optimization", description: "A board that is impossible to manufacture is useless. We design for automated optical inspection (AOI) and high-volume throughput.", icon: <Cpu className="w-6 h-6" /> }
];

const PCB_FAQ = [
    {
        question: "What is HDI (High Density Interconnect)?",
        answer: "As chips like the Snapdragon get smaller but have more pins, you can't use standard through-hole vias. HDI uses microscopic lasers to drill 'micro-vias' that only go down one layer, saving massive amounts of space."
    },
    {
        question: "What are creepage and clearance?",
        answer: "In EV inverters (800V), high voltage can arc across the board or through the air. Clearance is the shortest distance through the air between two conductors. Creepage is the shortest distance along the surface of the PCB. We must rigorously enforce these gaps."
    },
    {
        question: "Why do automotive boards need different materials?",
        answer: "A standard FR4 board from a laptop will literally turn black and delaminate if put under the hood of a car. We specify high-Tg (glass transition temperature) laminates that can withstand continuous 125°C+ heat."
    },
    {
        question: "What is heavy copper?",
        answer: "A standard PCB uses 1oz copper (about 1.4 thousandths of an inch thick). EV power electronics require massive currents that would melt standard traces. We design boards using up to 10oz copper to carry hundreds of amps."
    }
];

const PCB_ABOUT_METRICS = {
    titlePart1: "About",
    titlePart2: "Automotive PCB Design",
    description: "U&WE designs the physical foundation of vehicle electronics. We route the complex, high-speed, and high-voltage printed circuit boards that must survive decades of vibration, thermal shock, and EMI.",
    metrics: [
        { tag: "DENSITY", value: "HDI", label: "Any-Layer Routing", image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=800&auto=format&fit=crop" },
        { tag: "THERMAL", value: "+125°C", label: "High-Tg Materials", image: "https://images.unsplash.com/photo-1580584126903-c17d41830450?q=80&w=800&auto=format&fit=crop" },
        { tag: "POWER", value: "10oz", label: "Heavy Copper", image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=800&auto=format&fit=crop" },
        { tag: "YIELD", value: "DFM/DFA", label: "Mass Production", image: "https://images.unsplash.com/photo-1620802051772-9ea373307bdf?q=80&w=800&auto=format&fit=crop" }
    ]
};

const AutomotivePcb = () => {
    return (
        <ServiceLayout 
            pageKey="automotivePcb"
            hero={{
                title: "Automotive PCB & Thermal Design",
                description: "Engineering high-reliability Heavy Copper, Rigid-Flex, and HDI printed circuit boards optimized for extreme automotive environments.",
                primaryButtonText: "Discuss Project",
                secondaryButtonText: "View Capabilities"
            }}
            aboutMetrics={PCB_ABOUT_METRICS}
            subServices={PCB_SUB_SERVICES}
            subServicesTitle={{ part1: "Core", part2: "Capabilities" }}
            advantages={PCB_ADVANTAGES}
            advantagesTitle={{ part1: "Why Partner", part2: "With Us" }}
            faqs={PCB_FAQ}
            portal={{
                portalImage: heroImage,
                gridImage: "https://images.unsplash.com/photo-1580584126903-c17d41830450?q=80&w=2564&auto=format&fit=crop",
                collageImages: COLLAGE_IMAGES,
                features: SEQUENCE_FEATURES,
                aboutText: (
                    <p className="text-[clamp(1.1rem,2vw,2.2rem)] font-medium leading-[1.6] tracking-tight text-left text-white">
                        Routing the future of mobility.
                        <br className="hidden lg:block mt-2" />
                        We design PCBs that refuse to fail.
                    </p>
                )
            }}
            slider={{
                title: "Latest in PCB Layout",
                subtitle: "Insights from our layout engineers",
                cards: LATEST_INSIGHTS
            }}
            showcase={{
                features: SHOWCASE_FEATURES,
                backgroundText: "PCB DESIGN"
            }}
        />
    );
};

export default AutomotivePcb;

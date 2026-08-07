import React from 'react';
import ServiceLayout from '../../../../components/ServiceLayout';
import { Battery, BatteryCharging, Zap, Activity, ShieldCheck, Thermometer, Cpu, Layers } from 'lucide-react';
import heroImage from "../../../../assets/imagesss/automotive/EVBatteryManagement(BMS).png";

const SEQUENCE_FEATURES = [
    { id: 1, title: "Cell Characterization", desc: "Profiling Li-ion and Solid-State cells to build highly accurate Equivalent Circuit Models (ECM)." },
    { id: 2, title: "Algorithm Design", desc: "Developing Kalman Filters in MATLAB/Simulink for robust State of Charge (SoC) estimation." },
    { id: 3, title: "Code Generation", desc: "Using Embedded Coder to auto-generate production-ready C code from validated Simulink models." },
    { id: 4, title: "Balancing Logic", desc: "Implementing active and passive cell balancing strategies to maximize pack capacity and lifespan." },
    { id: 5, title: "Fault Detection", desc: "Writing diagnostic routines to detect over-voltage, under-voltage, and thermal runaway conditions." },
    { id: 6, title: "HIL Validation", desc: "Validating the BMS firmware using Hardware-in-the-Loop battery emulators before pack integration." }
];

const COLLAGE_IMAGES = [
    { src: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=800", scaleIndex: 4, cls: "!-top-[30vh] !left-[5vw] !h-[30vh] !w-[35vw]" },
    { src: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=800", scaleIndex: 5, cls: "!-top-[10vh] !-left-[25vw] !h-[45vh] !w-[20vw]" },
    { src: "https://images.unsplash.com/photo-1620802051772-9ea373307bdf?q=80&w=800", scaleIndex: 6, cls: "!left-[27.5vw] !h-[25vh] !w-[25vw]" },
    { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800", scaleIndex: 5, cls: "!top-[27.5vh] !left-[5vw] !h-[25vh] !w-[20vw]" },
    { src: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800", scaleIndex: 6, cls: "!top-[27.5vh] !-left-[22.5vw] !h-[25vh] !w-[30vw]" },
    { src: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800", scaleIndex: 8, cls: "!top-[22.5vh] !left-[25vw] !h-[15vh] !w-[15vw]" },
];

const SHOWCASE_FEATURES = [
    {
        id: "01",
        title: "State of Charge (SoC)",
        description: "Accurately predicting remaining battery capacity using Extended Kalman Filters (EKF), even as cells age.",
        points: ["Coulomb Counting", "Open Circuit Voltage (OCV)", "EKF Algorithms"],
        image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&auto=format&fit=crop&q=80",
        color: "from-blue-500/20 to-purple-500/20"
    },
    {
        id: "02",
        title: "State of Health (SoH)",
        description: "Estimating cell degradation, internal resistance growth, and capacity fade over the vehicle's lifetime.",
        points: ["Impedance tracking", "Cycle life estimation", "Cloud analytics"],
        image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&auto=format&fit=crop&q=80",
        color: "from-emerald-500/20 to-teal-500/20"
    },
    {
        id: "03",
        title: "Thermal Management",
        description: "Controlling cooling/heating loops to maintain optimal cell temperatures during fast charging and extreme weather.",
        points: ["Derating logic", "HVAC integration", "Thermal runaway prevention"],
        image: "https://images.unsplash.com/photo-1620802051772-9ea373307bdf?w=800&auto=format&fit=crop&q=80",
        color: "from-orange-500/20 to-red-500/20"
    },
    {
        id: "04",
        title: "Contactor & Isolation",
        description: "Managing high-voltage contactors, pre-charge sequences, and continuously monitoring isolation resistance.",
        points: ["Pre-charge control", "Isolation fault detection", "HV Interlock (HVIL)"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
        color: "from-pink-500/20 to-rose-500/20"
    }
];

const LATEST_INSIGHTS = [
  {
    id: 1,
    tag: "Algorithms",
    title: "Why Coulomb Counting is Not Enough for Modern EV Batteries",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    tag: "Charging",
    title: "Firmware Strategies for 800V Ultra-Fast Charging",
    image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    tag: "Safety",
    title: "ASIL D Compliance in Battery Management Systems",
    image: "https://images.unsplash.com/photo-1620802051772-9ea373307bdf?w=800&auto=format&fit=crop&q=80"
  }
];

const BMS_SUB_SERVICES = [
    { title: "Core Algorithms (SoC/SoH/SoP)", description: "Developing mathematical models that predict State of Charge, Health, and Power under dynamic load profiles.", icon: <Battery className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&auto=format&fit=crop&q=80" },
    { title: "Cell Balancing", description: "Writing firmware for active and passive balancing circuits to equalize voltages across hundreds of series-connected cells.", icon: <Layers className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&auto=format&fit=crop&q=80" },
    { title: "Fast Charging (CCS/CHAdeMO)", description: "Implementing communication protocols and thermal derating logic required for 350kW+ DC fast charging.", icon: <BatteryCharging className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1620802051772-9ea373307bdf?w=800&auto=format&fit=crop&q=80" },
    { title: "Thermal Control", description: "Integrating with the vehicle's thermal management system to cool cells during charging and heat them in winter.", icon: <Thermometer className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80" },
    { title: "High Voltage Management", description: "Writing ASIL D compliant logic to control contactors safely, manage pre-charge, and detect ground faults.", icon: <Zap className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=80" },
    { title: "MBD & Auto-Code", description: "Utilizing Model-Based Design (MBD) in Simulink to rapidly iterate algorithms and auto-generate MISRA C code.", icon: <Cpu className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80" }
];

const BMS_ADVANTAGES = [
    { title: "Algorithm Precision", description: "Our Kalman Filter implementations extract maximum range from the pack without hitting safety limits, extending vehicle life.", icon: <Activity className="w-6 h-6" /> },
    { title: "Chemistry Agnostic", description: "We adapt our models to the specific electrochemistry of your pack, whether it's LFP, NMC, NCA, or solid-state.", icon: <Battery className="w-6 h-6" /> },
    { title: "Hardware Syngery", description: "We understand the Analog Front End (AFE) chips (e.g., from TI, NXP, Linear Tech) and write the low-level SPI drivers to talk to them.", icon: <Cpu className="w-6 h-6" /> },
    { title: "ISO 26262 Compliant", description: "A BMS failure can cause a fire. Our development processes are strictly aligned with ASIL D safety standards.", icon: <ShieldCheck className="w-6 h-6" /> }
];

const BMS_FAQ = [
    {
        question: "Why is State of Charge (SoC) difficult to measure?",
        answer: "You cannot measure SoC directly; you can only measure voltage, current, and temperature. Lithium-ion batteries (especially LFP) have very flat voltage curves, meaning voltage doesn't change much even as the battery drains. We use complex mathematical models to infer the true SoC."
    },
    {
        question: "What is Cell Balancing?",
        answer: "In a pack with hundreds of cells, some degrade faster than others. If one cell hits 0% early, the whole pack must stop discharging. Balancing drains the 'strongest' cells slightly so all cells hit 0% and 100% at the exact same time, maximizing range."
    },
    {
        question: "Do you write the code in C or Simulink?",
        answer: "We typically use Model-Based Design. We develop the algorithms in MATLAB/Simulink so we can simulate them against battery models, then we auto-generate the C code for the microcontroller."
    },
    {
        question: "What is State of Power (SoP)?",
        answer: "SoP predicts how much instant power (current) the battery can deliver or accept over the next 10 seconds without dropping below a safe voltage or exceeding thermal limits. It is critical for acceleration and regenerative braking."
    }
];

const BMS_ABOUT_METRICS = {
    titlePart1: "About",
    titlePart2: "Battery Management (BMS)",
    description: "U&WE engineers the intelligence behind the EV revolution. We develop the mathematical algorithms and safety-critical firmware that extract maximum range, power, and lifespan from advanced battery packs.",
    metrics: [
        { tag: "ACCURACY", value: "< 2%", label: "SoC Estimation Error", image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=800&auto=format&fit=crop" },
        { tag: "CHEMISTRY", value: "LFP / NMC", label: "Model Agnostic", image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=800&auto=format&fit=crop" },
        { tag: "SAFETY", value: "ASIL D", label: "Fault Tolerant", image: "https://images.unsplash.com/photo-1620802051772-9ea373307bdf?q=80&w=800&auto=format&fit=crop" },
        { tag: "METHOD", value: "MBD", label: "Model-Based Design", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" }
    ]
};

const BatteryManagement = () => {
    return (
        <ServiceLayout 
            pageKey="batteryManagement"
            hero={{
                title: "EV Battery Management Systems",
                description: "Developing advanced BMS algorithms (SoC, SoH, SoP), cell balancing logic, and ASIL D compliant high-voltage control firmware.",
                primaryButtonText: "Discuss Project",
                secondaryButtonText: "View Capabilities",
                image: heroImage
            }}
            aboutMetrics={BMS_ABOUT_METRICS}
            subServices={BMS_SUB_SERVICES}
            subServicesTitle={{ part1: "Core", part2: "Capabilities" }}
            advantages={BMS_ADVANTAGES}
            advantagesTitle={{ part1: "Why Partner", part2: "With Us" }}
            faqs={BMS_FAQ}
            portal={{
                portalImage: heroImage,
                gridImage: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2564&auto=format&fit=crop",
                collageImages: COLLAGE_IMAGES,
                features: SEQUENCE_FEATURES,
                aboutText: (
                    <p className="text-[clamp(1.1rem,2vw,2.2rem)] font-medium leading-[1.6] tracking-tight text-left text-white">
                        Maximizing EV performance.
                        <br className="hidden lg:block mt-2" />
                        We push battery chemistry to its absolute safe limit.
                    </p>
                )
            }}
            slider={{
                title: "Latest in BMS",
                subtitle: "Insights from our powertrain engineers",
                cards: LATEST_INSIGHTS
            }}
            showcase={{
                features: SHOWCASE_FEATURES,
                backgroundText: "BATTERY"
            }}
        />
    );
};

export default BatteryManagement;

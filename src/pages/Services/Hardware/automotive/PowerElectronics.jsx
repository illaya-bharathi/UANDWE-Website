import React from 'react';
import ServiceLayout from '../../../../components/ServiceLayout';
import { Zap, BatteryCharging, Activity, ShieldCheck, Thermometer, Layers, Settings, Workflow } from 'lucide-react';
import heroImage from "../../../../assets/imagesss/automotive/evpowerelectronics.png";

const SEQUENCE_FEATURES = [
    { id: 1, title: "Topology Selection", desc: "Selecting optimal inverter/converter topologies (e.g., LLC Resonant, Phase-Shifted Full Bridge)." },
    { id: 2, title: "SiC / GaN Design", desc: "Designing gate drive circuits to safely switch Silicon Carbide (SiC) or Gallium Nitride (GaN) MOSFETs at high frequencies." },
    { id: 3, title: "Magnetics Design", desc: "Custom designing planar transformers and high-current inductors for maximum power density." },
    { id: 4, title: "Thermal Simulation", desc: "Simulating heat flux in ANSYS Icepak to design liquid-cooled cold plates for the IGBT/SiC modules." },
    { id: 5, title: "Control Loop Tuning", desc: "Deriving the transfer functions and tuning digital PI/PR controllers for stable voltage/current regulation." },
    { id: 6, title: "Dyno Validation", desc: "Testing the finished inverter on a dynamometer under full load, verifying efficiency and EMI compliance." }
];

const COLLAGE_IMAGES = [
    { src: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=800", scaleIndex: 4, cls: "!-top-[30vh] !left-[5vw] !h-[30vh] !w-[35vw]" },
    { src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800", scaleIndex: 5, cls: "!-top-[10vh] !-left-[25vw] !h-[45vh] !w-[20vw]" },
    { src: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=800", scaleIndex: 6, cls: "!left-[27.5vw] !h-[25vh] !w-[25vw]" },
    { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800", scaleIndex: 5, cls: "!top-[27.5vh] !left-[5vw] !h-[25vh] !w-[20vw]" },
    { src: "https://images.unsplash.com/photo-1620802051772-9ea373307bdf?q=80&w=800", scaleIndex: 6, cls: "!top-[27.5vh] !-left-[22.5vw] !h-[25vh] !w-[30vw]" },
    { src: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800", scaleIndex: 8, cls: "!top-[22.5vh] !left-[25vw] !h-[15vh] !w-[15vw]" },
];

const SHOWCASE_FEATURES = [
    {
        id: "01",
        title: "Traction Inverters",
        description: "Designing the 400V/800V inverters that convert DC battery power into the 3-phase AC power that drives the electric motor.",
        points: ["SiC MOSFETs", "Field Oriented Control (FOC)", "High power density"],
        image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&auto=format&fit=crop&q=80",
        color: "from-blue-500/20 to-purple-500/20"
    },
    {
        id: "02",
        title: "On-Board Chargers (OBC)",
        description: "Engineering bi-directional AC-DC converters to allow home charging (Grid-to-Vehicle) and vehicle-to-grid (V2G) power flow.",
        points: ["Power Factor Correction (PFC)", "Bi-directional", "11kW / 22kW"],
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&auto=format&fit=crop&q=80",
        color: "from-emerald-500/20 to-teal-500/20"
    },
    {
        id: "03",
        title: "DC-DC Converters",
        description: "Stepping down the 400V/800V main traction battery to the 12V/48V required to run the infotainment and traditional ECUs.",
        points: ["Galvanic isolation", "Phase-shifted full bridge", "Redundancy"],
        image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&auto=format&fit=crop&q=80",
        color: "from-orange-500/20 to-red-500/20"
    },
    {
        id: "04",
        title: "Battery Disconnect Units (BDU)",
        description: "Designing the high-voltage distribution hubs that safely connect and disconnect the battery from the vehicle loads.",
        points: ["Pre-charge circuits", "HV contactors", "Current sensing"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
        color: "from-pink-500/20 to-rose-500/20"
    }
];

const LATEST_INSIGHTS = [
  {
    id: 1,
    tag: "Silicon Carbide",
    title: "Overcoming EMI Challenges in High-Frequency SiC Inverters",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    tag: "800V Architecture",
    title: "Designing DC-DC Converters for the 800V EV Transition",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    tag: "V2G",
    title: "Bi-Directional OBCs: Unlocking Vehicle-to-Grid Capabilities",
    image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&auto=format&fit=crop&q=80"
  }
];

const POWER_SUB_SERVICES = [
    { title: "Wide Bandgap Design", description: "Maximizing efficiency (98%+) by transitioning from legacy IGBTs to advanced Silicon Carbide (SiC) and GaN switching topologies.", icon: <Zap className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&auto=format&fit=crop&q=80" },
    { title: "Custom Magnetics", description: "Designing optimized planar transformers and inductors to reduce size and weight while managing fringing fields and core losses.", icon: <Layers className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&auto=format&fit=crop&q=80" },
    { title: "Gate Driver Engineering", description: "Developing isolated gate drive circuits with extremely tight timing, desaturation protection, and active Miller clamping.", icon: <Settings className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&auto=format&fit=crop&q=80" },
    { title: "Digital Power Control", description: "Implementing Field Oriented Control (FOC) and Space Vector Modulation (SVM) on C2000 or Aurix microcontrollers.", icon: <Workflow className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80" },
    { title: "Thermal & Packaging", description: "Packaging high-voltage components safely. Designing liquid cold-plates and calculating exact junction temperatures under load.", icon: <Thermometer className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1620802051772-9ea373307bdf?w=800&auto=format&fit=crop&q=80" },
    { title: "High-Voltage Safety", description: "Engineering HV interlock loops (HVIL), active discharge circuits, and ensuring strict creepage/clearance isolation distances.", icon: <ShieldCheck className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80" }
];

const POWER_ADVANTAGES = [
    { title: "SiC Pioneers", description: "We have been designing with Silicon Carbide since the earliest generations, mastering the art of controlling high dV/dt switching.", icon: <Zap className="w-6 h-6" /> },
    { title: "Cross-Discipline", description: "Power electronics isn't just electrical. We seamlessly integrate our mechanical thermal engineers with our firmware control experts.", icon: <Workflow className="w-6 h-6" /> },
    { title: "EMI/EMC Focus", description: "High frequency switching causes massive EMI. We design the filters and PCB layouts to pass strict automotive CISPR 25 Class 5 limits.", icon: <Activity className="w-6 h-6" /> },
    { title: "Automotive Grade", description: "We strictly specify AEC-Q qualified components, ensuring survival in high-vibration, high-temperature automotive environments.", icon: <ShieldCheck className="w-6 h-6" /> }
];

const POWER_FAQ = [
    {
        question: "Why switch to Silicon Carbide (SiC)?",
        answer: "Traditional IGBTs switch relatively slowly, creating heat (switching losses). SiC MOSFETs switch extremely fast, radically reducing heat. This means you can use a smaller cooling system, increasing the vehicle's range."
    },
    {
        question: "What is an On-Board Charger (OBC)?",
        answer: "The battery stores DC power, but the grid provides AC power. The OBC is the heavy piece of hardware inside the car that converts AC from your house into DC to charge the battery. (Note: DC Fast Chargers bypass the OBC entirely)."
    },
    {
        question: "Why is 800V becoming the standard?",
        answer: "Power = Voltage × Current. To charge a car faster, you need more power. If you increase current, cables get massive and heavy. If you increase voltage to 800V, you can push twice the power through the same thin, lightweight cable."
    },
    {
        question: "What makes Gate Drivers so critical in SiC designs?",
        answer: "Because SiC switches so incredibly fast, a slight timing error or parasitic inductance can cause the switch to turn on when it shouldn't, causing a catastrophic short circuit. Gate drivers must be perfectly isolated and extremely precise."
    }
];

const POWER_ABOUT_METRICS = {
    titlePart1: "About",
    titlePart2: "EV Power Electronics",
    description: "U&WE designs the high-voltage heartbeat of the electric vehicle. We engineer the highly efficient, SiC-based inverters and converters that translate battery energy into pure forward momentum.",
    metrics: [
        { tag: "EFFICIENCY", value: "> 98%", label: "Peak Efficiency", image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=800&auto=format&fit=crop" },
        { tag: "TECHNOLOGY", value: "SiC / GaN", label: "Wide Bandgap", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop" },
        { tag: "VOLTAGE", value: "800V+", label: "High Voltage Arch", image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=800&auto=format&fit=crop" },
        { tag: "DENSITY", value: "30+ kW/L", label: "Power Density", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" }
    ]
};

const PowerElectronics = () => {
    return (
        <ServiceLayout 
            pageKey="powerElectronics"
            hero={{
                title: "EV Power Electronics",
                description: "Designing high-efficiency Silicon Carbide (SiC) traction inverters, bi-directional OBCs, and 800V DC-DC converters.",
                primaryButtonText: "Discuss Project",
                secondaryButtonText: "View Capabilities",
                image: heroImage
            }}
            aboutMetrics={POWER_ABOUT_METRICS}
            subServices={POWER_SUB_SERVICES}
            subServicesTitle={{ part1: "Core", part2: "Capabilities" }}
            advantages={POWER_ADVANTAGES}
            advantagesTitle={{ part1: "Why Partner", part2: "With Us" }}
            faqs={POWER_FAQ}
            portal={{
                portalImage: heroImage,
                gridImage: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2564&auto=format&fit=crop",
                collageImages: COLLAGE_IMAGES,
                features: SEQUENCE_FEATURES,
                aboutText: (
                    <p className="text-[clamp(1.1rem,2vw,2.2rem)] font-medium leading-[1.6] tracking-tight text-left text-white">
                        Converting electrons to momentum.
                        <br className="hidden lg:block mt-2" />
                        We engineer the power behind the electric revolution.
                    </p>
                )
            }}
            slider={{
                title: "Latest in Power Design",
                subtitle: "Insights from our power engineers",
                cards: LATEST_INSIGHTS
            }}
            showcase={{
                features: SHOWCASE_FEATURES,
                backgroundText: "POWER"
            }}
        />
    );
};

export default PowerElectronics;

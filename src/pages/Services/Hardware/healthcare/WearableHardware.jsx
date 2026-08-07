import React from 'react';
import ServiceLayout from '../../../../components/ServiceLayout';
import { Watch, Layers, BatteryCharging, Zap, Activity, ShieldCheck, Thermometer, Cpu } from 'lucide-react';
import heroImage from "../../../../assets/imagesss/healthcare/WearableSensorHardware.png";

const SEQUENCE_FEATURES = [
    { id: 1, title: "Component Selection", desc: "Selecting extreme ultra-low power PMICs, MCUs, and analog front ends (AFE) to stretch battery life." },
    { id: 2, title: "Schematic Capture", desc: "Designing high-SNR circuits capable of reading microvolt-level signals from human skin." },
    { id: 3, title: "Rigid-Flex Layout", desc: "Routing high-density interconnects (HDI) on flexible substrates that bend around the human wrist or chest." },
    { id: 4, title: "Antenna Tuning", desc: "Simulating and tuning BLE/Wi-Fi antennas to radiate efficiently when placed directly against lossy human tissue." },
    { id: 5, title: "Prototyping", desc: "Building small-batch prototypes and assembling them into 3D-printed or silicone overmolded enclosures." },
    { id: 6, title: "Biocompatibility", desc: "Selecting conformal coatings and potting compounds that meet ISO 10993 cytotoxicity and sensitization standards." }
];

const COLLAGE_IMAGES = [
    { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800", scaleIndex: 4, cls: "!-top-[30vh] !left-[5vw] !h-[30vh] !w-[35vw]" },
    { src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800", scaleIndex: 5, cls: "!-top-[10vh] !-left-[25vw] !h-[45vh] !w-[20vw]" },
    { src: "https://images.unsplash.com/photo-1532187863486-abf9db0902c3?q=80&w=800", scaleIndex: 6, cls: "!left-[27.5vw] !h-[25vh] !w-[25vw]" },
    { src: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=800", scaleIndex: 5, cls: "!top-[27.5vh] !left-[5vw] !h-[25vh] !w-[20vw]" },
    { src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800", scaleIndex: 6, cls: "!top-[27.5vh] !-left-[22.5vw] !h-[25vh] !w-[30vw]" },
    { src: "https://images.unsplash.com/photo-1551076805-e1869043e560?q=80&w=800", scaleIndex: 8, cls: "!top-[22.5vh] !left-[25vw] !h-[15vh] !w-[15vw]" },
];

const SHOWCASE_FEATURES = [
    {
        id: "01",
        title: "Continuous Glucose Monitors (CGM)",
        description: "Designing the ultra-miniature potentiostat circuits required to read nanoampere currents from interstitial fluid sensors.",
        points: ["Electrochemical AFEs", "Coin cell powered", "14-day lifespan"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
        color: "from-blue-500/20 to-purple-500/20"
    },
    {
        id: "02",
        title: "ECG Patches (Holter)",
        description: "Engineering flexible, waterproof PCB patches that stick to the chest to record clinical-grade ECG for 7+ days.",
        points: ["Rigid-Flex PCB", "High CMRR", "Dry electrode interfaces"],
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=80",
        color: "from-emerald-500/20 to-teal-500/20"
    },
    {
        id: "03",
        title: "Smart Rings & Watches",
        description: "Packaging complex optical (PPG), thermal, and motion sensors into incredibly dense, aesthetically pleasing form factors.",
        points: ["01005 components", "Any-layer HDI", "Wireless charging"],
        image: "https://images.unsplash.com/photo-1532187863486-abf9db0902c3?w=800&auto=format&fit=crop&q=80",
        color: "from-orange-500/20 to-red-500/20"
    },
    {
        id: "04",
        title: "Neurostimulation Wearables",
        description: "Designing the high-voltage boost converters required to safely deliver therapeutic electrical pulses through the skin (TENS/NMES).",
        points: ["High-voltage pulse", "Skin impedance monitoring", "Fail-safe switches"],
        image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&auto=format&fit=crop&q=80",
        color: "from-pink-500/20 to-rose-500/20"
    }
];

const LATEST_INSIGHTS = [
  {
    id: 1,
    tag: "Design",
    title: "Routing HDI Rigid-Flex PCBs for Smart Ring Form Factors",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    tag: "Power",
    title: "Energy Harvesting vs. Coin Cells: Powering 30-Day Wearables",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    tag: "Sensors",
    title: "Designing Analog Front-Ends for Dry ECG Electrodes",
    image: "https://images.unsplash.com/photo-1532187863486-abf9db0902c3?w=800&auto=format&fit=crop&q=80"
  }
];

const WEARABLE_SUB_SERVICES = [
    { title: "Rigid-Flex Layout", description: "Utilizing Altium to design complex boards that bend without breaking copper traces, saving critical Z-height space.", icon: <Layers className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80" },
    { title: "Analog Sensor Design", description: "Designing the low-noise amplifiers and ADCs required to digitize microvolt signals from the heart or brain.", icon: <Activity className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=80" },
    { title: "Power Management", description: "Selecting nano-quiescent PMICs and optimizing buck/boost converters to squeeze every drop of energy from tiny batteries.", icon: <BatteryCharging className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1532187863486-abf9db0902c3?w=800&auto=format&fit=crop&q=80" },
    { title: "Wireless Charging", description: "Integrating Qi-standard or custom inductive charging coils to completely seal the device against water ingress (IP68).", icon: <Zap className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&auto=format&fit=crop&q=80" },
    { title: "Biocompatible Packaging", description: "Collaborating with mechanical engineers to select plastics and adhesives that won't cause skin irritation over long-term wear.", icon: <ShieldCheck className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&auto=format&fit=crop&q=80" },
    { title: "Thermal Management", description: "Simulating heat dissipation. IEC 60601-1 restricts skin contact temperatures to 43°C; we ensure processors don't violate this limit.", icon: <Thermometer className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1551076805-e1869043e560?w=800&auto=format&fit=crop&q=80" }
];

const WEARABLE_ADVANTAGES = [
    { title: "High Density Masters", description: "We route boards using 01005 passives and 0.35mm pitch BGAs. If it can physically be built by a factory, we can design it.", icon: <Cpu className="w-6 h-6" /> },
    { title: "Analog Expertise", description: "Reading a digital I2C sensor is easy. Reading a 50-microvolt ECG signal through hairy skin while a patient is jogging is hard. We do the hard stuff.", icon: <Activity className="w-6 h-6" /> },
    { title: "Body-Area RF", description: "The human body is basically a bag of saltwater that absorbs Bluetooth signals. We tune our antennas to radiate away from the body.", icon: <Watch className="w-6 h-6" /> },
    { title: "DFM / Yield", description: "Wearables are often high-volume disposables. We design the PCB panels and test fixtures to optimize for million-unit manufacturing runs.", icon: <Layers className="w-6 h-6" /> }
];

const WEARABLE_FAQ = [
    {
        question: "What is a Rigid-Flex PCB?",
        answer: "Instead of connecting two stiff circuit boards with a bulky wire connector, a rigid-flex board has a flexible ribbon of polyimide integrated directly into the board layers, allowing it to fold up origami-style inside a tiny enclosure."
    },
    {
        question: "Why is analog design so important for wearables?",
        answer: "The body doesn't output 1s and 0s. It outputs tiny chemical or electrical changes. If your analog circuit adds noise, your software algorithm will fail, no matter how good your AI is. The hardware must capture a pristine signal."
    },
    {
        question: "What does '01005' mean?",
        answer: "It refers to the physical size of a component (like a resistor). A 01005 resistor is roughly the size of a grain of pepper. Using these allows us to shrink the PCB to fit inside a ring or patch."
    },
    {
        question: "How do you test a wearable before making expensive molds?",
        answer: "We use high-resolution SLA 3D printers and CNC machining to create form-factor-accurate prototypes. This allows us to test the ergonomics and antenna performance before cutting $50,000 steel injection molds."
    }
];

const WEARABLE_ABOUT_METRICS = {
    titlePart1: "About",
    titlePart2: "Wearable Sensor Hardware",
    description: "U&WE shrinks clinical technology. We engineer the ultra-dense, flex-rigid PCBs and micro-power analog circuits required to put hospital-grade diagnostics directly on the patient's skin.",
    metrics: [
        { tag: "FORM FACTOR", value: "Rigid-Flex", label: "High-Density Interconnect", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" },
        { tag: "POWER", value: "< 10µA", label: "Sleep Currents", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop" },
        { tag: "ANALOG", value: "High SNR", label: "Bio-potential Sensing", image: "https://images.unsplash.com/photo-1532187863486-abf9db0902c3?q=80&w=800&auto=format&fit=crop" },
        { tag: "MANUFACTURING", value: "DFM/DFT", label: "High-Volume Yield", image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=800&auto=format&fit=crop" }
    ]
};

const WearableHardware = () => {
    return (
        <ServiceLayout 
            hero={{
                title: "Wearable Sensor Hardware",
                description: "Engineering ultra-low-power, high-density rigid-flex PCBs for continuous glucose monitors, ECG patches, and smart rings.",
                primaryButtonText: "Discuss Project",
                secondaryButtonText: "View Capabilities",
                image: heroImage
            }}
            aboutMetrics={WEARABLE_ABOUT_METRICS}
            subServices={WEARABLE_SUB_SERVICES}
            subServicesTitle={{ part1: "Core", part2: "Capabilities" }}
            advantages={WEARABLE_ADVANTAGES}
            advantagesTitle={{ part1: "Why Partner", part2: "With Us" }}
            faqs={WEARABLE_FAQ}
            portal={{
                portalImage: heroImage,
                gridImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2564&auto=format&fit=crop",
                collageImages: COLLAGE_IMAGES,
                features: SEQUENCE_FEATURES,
                aboutText: (
                    <p className="text-[clamp(1.1rem,2vw,2.2rem)] font-medium leading-[1.6] tracking-tight text-left text-white">
                        Shrinking the hospital.
                        <br className="hidden lg:block mt-2" />
                        We pack clinical accuracy into comfortable wearables.
                    </p>
                )
            }}
            slider={{
                title: "Latest in Wearable Hardware",
                subtitle: "Insights from our hardware engineers",
                cards: LATEST_INSIGHTS
            }}
            showcase={{
                features: SHOWCASE_FEATURES,
                backgroundText: "WEARABLES"
            }}
        />
    );
};

export default WearableHardware;

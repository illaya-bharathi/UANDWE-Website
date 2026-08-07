import React from 'react';
import ServiceLayout from '../../../../components/ServiceLayout';
import { Zap, ShieldCheck, Activity, Plug, BatteryCharging, AlertTriangle, Layers, Settings } from 'lucide-react';
import heroImage from "../../../../assets/imagesss/healthcare/MedicalPowerSupplies&BMS.png";

const SEQUENCE_FEATURES = [
    { id: 1, title: "Isolation Architecture", desc: "Defining the Means of Patient Protection (MOPP) boundary to ensure lethal mains voltage cannot reach the patient." },
    { id: 2, title: "Transformer Design", desc: "Custom-designing high-frequency planar transformers with triple-insulated wire to guarantee creepage/clearance." },
    { id: 3, title: "Topology Selection", desc: "Selecting Flyback, LLC Resonant, or Forward topologies based on the specific power, noise, and space requirements." },
    { id: 4, title: "Battery Management", desc: "Designing dual-redundant BMS circuits with hot-swap capabilities for life-sustaining ventilators." },
    { id: 5, title: "Thermal Simulation", desc: "Simulating heat flow in sealed enclosures to ensure no touch-temperatures exceed 43°C (IEC 60601-1)." },
    { id: 6, title: "Leakage Testing", desc: "Testing earth and patient leakage currents to ensure they remain below 10 microamps for CF-rated devices." }
];

const COLLAGE_IMAGES = [
    { src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800", scaleIndex: 4, cls: "!-top-[30vh] !left-[5vw] !h-[30vh] !w-[35vw]" },
    { src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800", scaleIndex: 5, cls: "!-top-[10vh] !-left-[25vw] !h-[45vh] !w-[20vw]" },
    { src: "https://images.unsplash.com/photo-1620802051772-9ea373307bdf?q=80&w=800", scaleIndex: 6, cls: "!left-[27.5vw] !h-[25vh] !w-[25vw]" },
    { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800", scaleIndex: 5, cls: "!top-[27.5vh] !left-[5vw] !h-[25vh] !w-[20vw]" },
    { src: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800", scaleIndex: 6, cls: "!top-[27.5vh] !-left-[22.5vw] !h-[25vh] !w-[30vw]" },
    { src: "https://images.unsplash.com/photo-1510511459019-5d55ad50de99?q=80&w=800", scaleIndex: 8, cls: "!top-[22.5vh] !left-[25vw] !h-[15vh] !w-[15vw]" },
];

const SHOWCASE_FEATURES = [
    {
        id: "01",
        title: "AC-DC (Mains) Isolation",
        description: "Designing the highly regulated, low-leakage power supplies that connect directly to hospital wall outlets.",
        points: ["IEC 60601-1 Ed. 3.2", "2x MOPP Isolation", "PFC Integration"],
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
        color: "from-blue-500/20 to-purple-500/20"
    },
    {
        id: "02",
        title: "Defibrillator Power (High Voltage)",
        description: "Engineering the rapid-charge circuits capable of dumping 2000+ volts into a capacitor in under 5 seconds.",
        points: ["Flyback converters", "HV capacitor charging", "Fail-safe discharge"],
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&auto=format&fit=crop&q=80",
        color: "from-emerald-500/20 to-teal-500/20"
    },
    {
        id: "03",
        title: "Battery Management (BMS)",
        description: "Designing redundant, medical-grade lithium-ion battery packs for life-sustaining transport ventilators.",
        points: ["Cell balancing", "Fuel gauging", "Redundant protection"],
        image: "https://images.unsplash.com/photo-1620802051772-9ea373307bdf?w=800&auto=format&fit=crop&q=80",
        color: "from-orange-500/20 to-red-500/20"
    },
    {
        id: "04",
        title: "Ultra-Low Noise DC-DC",
        description: "Building the perfectly clean power rails required by sensitive ECG/EEG analog front-ends and ultrasound receivers.",
        points: ["LDO regulators", "Switching noise mitigation", "High PSRR"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
        color: "from-pink-500/20 to-rose-500/20"
    }
];

const LATEST_INSIGHTS = [
  {
    id: 1,
    tag: "Safety",
    title: "Understanding 2x MOPP vs. MOOP in Medical Power Supplies",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    tag: "High Voltage",
    title: "Designing Rapid-Charge Circuits for Automated External Defibrillators",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    tag: "Batteries",
    title: "Redundancy in BMS Design for Life-Sustaining Devices",
    image: "https://images.unsplash.com/photo-1620802051772-9ea373307bdf?w=800&auto=format&fit=crop&q=80"
  }
];

const POWER_SUB_SERVICES = [
    { title: "Creepage & Clearance", description: "Enforcing strict 8mm+ trace spacing on PCBs to ensure 4kV isolation between primary (mains) and secondary (patient) circuits.", icon: <ShieldCheck className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80" },
    { title: "Leakage Current Control", description: "Designing Y-capacitor networks and transformer shielding to keep patient leakage currents below 10µA for CF (Cardiac Floating) devices.", icon: <Activity className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&auto=format&fit=crop&q=80" },
    { title: "Custom Magnetics", description: "We don't rely on off-the-shelf transformers. We design custom planar magnetics for extreme efficiency and exact isolation specs.", icon: <Layers className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1620802051772-9ea373307bdf?w=800&auto=format&fit=crop&q=80" },
    { title: "Defibrillator Protection", description: "Engineering the input protection circuits (gas discharge tubes, resistors) that prevent an ECG machine from blowing up when a patient is shocked.", icon: <Zap className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80" },
    { title: "Lithium BMS Design", description: "Implementing redundant Texas Instruments or NXP battery management ICs to prevent thermal runaway in medical carts.", icon: <BatteryCharging className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80" },
    { title: "Risk Management", description: "Analyzing every single resistor and capacitor via FMEA to prove that if it fails open or short, the patient is still safe.", icon: <AlertTriangle className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1510511459019-5d55ad50de99?w=800&auto=format&fit=crop&q=80" }
];

const POWER_ADVANTAGES = [
    { title: "IEC 60601-1 Experts", description: "We intimately understand the 'General Requirements for Basic Safety and Essential Performance' standard.", icon: <ShieldCheck className="w-6 h-6" /> },
    { title: "Beyond Off-the-Shelf", description: "Buying a pre-certified medical brick is easy, but it won't fit inside a handheld device. We design custom, ultra-dense power solutions.", icon: <Settings className="w-6 h-6" /> },
    { title: "Analog Precision", description: "A noisy power supply ruins a good sensor. We design the ultra-clean LDO stages that feed sensitive analog front-ends.", icon: <Activity className="w-6 h-6" /> },
    { title: "Thermal Modeling", description: "Medical devices often lack cooling fans due to infection control (spreading dust). We engineer power supplies to cool passively.", icon: <Plug className="w-6 h-6" /> }
];

const POWER_FAQ = [
    {
        question: "What is MOPP vs. MOOP?",
        answer: "MOPP stands for Means of Patient Protection. MOOP is Means of Operator Protection. If a device touches a patient (like an ultrasound wand), its power supply requires 2x MOPP—meaning it has double the insulation and physical spacing of a normal power supply to prevent electric shock."
    },
    {
        question: "What is a CF, BF, or B rating?",
        answer: "These are 'Applied Part' ratings. CF (Cardiac Floating) means the device directly touches the heart (e.g., a pacemaker lead). It requires the strictest limits on leakage current (less than 10 microamps). BF is for body contact (ECG), and B is for non-conductive contact (hospital bed)."
    },
    {
        question: "Why do we need custom magnetics?",
        answer: "The transformer is the physical barrier between the 120V wall outlet and the patient. Off-the-shelf transformers are often too bulky or don't meet the strict 8mm+ creepage distances required by IEC 60601-1. We design custom transformers to fit the exact mechanical envelope while guaranteeing safety."
    },
    {
        question: "What is Defibrillator Protection?",
        answer: "If a patient is hooked up to an ECG monitor and goes into cardiac arrest, a doctor will shock them with 4,000 volts. If the ECG isn't designed correctly, that 4kV pulse will travel up the wires, blow up the ECG machine, and potentially shock the doctor. We design the hardware to block this pulse."
    }
];

const POWER_ABOUT_METRICS = {
    titlePart1: "About",
    titlePart2: "Medical Power Supplies",
    description: "U&WE engineers the safe transfer of energy. We design the highly isolated, ultra-clean power electronics that protect patients from lethal voltages while delivering perfectly stable power to sensitive diagnostics.",
    metrics: [
        { tag: "ISOLATION", value: "2x MOPP", label: "Patient Protection", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" },
        { tag: "LEAKAGE", value: "< 10µA", label: "CF Rated Designs", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop" },
        { tag: "VOLTAGE", value: "4kV+", label: "Dielectric Withstand", image: "https://images.unsplash.com/photo-1620802051772-9ea373307bdf?q=80&w=800&auto=format&fit=crop" },
        { tag: "STANDARD", value: "60601-1", label: "Medical Safety", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" }
    ]
};

const MedicalPowerSupplies = () => {
    return (
        <ServiceLayout 
            hero={{
                title: "Medical Power Supplies & BMS",
                description: "Engineering IEC 60601-1 compliant AC-DC power supplies, redundant Battery Management Systems, and CF-rated isolation barriers.",
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
                        Powering life. Protecting the patient.
                        <br className="hidden lg:block mt-2" />
                        We engineer safety into every joule.
                    </p>
                )
            }}
            slider={{
                title: "Latest in Power Design",
                subtitle: "Insights from our electrical engineers",
                cards: LATEST_INSIGHTS
            }}
            showcase={{
                features: SHOWCASE_FEATURES,
                backgroundText: "POWER"
            }}
        />
    );
};

export default MedicalPowerSupplies;

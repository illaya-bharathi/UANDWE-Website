import React from 'react';
import ServiceLayout from '../../../../components/ServiceLayout';
import { Target, Activity, ShieldCheck, Thermometer, Radio, Search, CheckCircle2, Waves } from 'lucide-react';
import heroImage from "../../../../assets/imagesss/communication/Telecom Validation.png";

const SEQUENCE_FEATURES = [
    { id: 1, title: "Test Plan Generation", desc: "Developing comprehensive test matrices covering NEBS, FCC Part 15/22/24, and CE/RED requirements." },
    { id: 2, title: "Pre-Compliance Scans", desc: "Conducting early radiated and conducted emission sweeps in our 3-meter semi-anechoic chambers." },
    { id: 3, title: "Thermal Extremes", desc: "Testing hardware operation in environmental chambers cycling from -40°C to +85°C." },
    { id: 4, title: "HALT Testing", desc: "Highly Accelerated Life Testing using multi-axis vibration and rapid thermal transitions to find breaking points." },
    { id: 5, title: "Surge & ESD", desc: "Injecting up to 15kV electrostatic discharges and lightning surges into external ports to ensure survival." },
    { id: 6, title: "Carrier Certification", desc: "Managing the final PTCRB / GCF certification process directly with global cellular carriers." }
];

const COLLAGE_IMAGES = [
    { src: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800", scaleIndex: 4, cls: "!-top-[30vh] !left-[5vw] !h-[30vh] !w-[35vw]" },
    { src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800", scaleIndex: 5, cls: "!-top-[10vh] !-left-[25vw] !h-[45vh] !w-[20vw]" },
    { src: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800", scaleIndex: 6, cls: "!left-[27.5vw] !h-[25vh] !w-[25vw]" },
    { src: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800", scaleIndex: 5, cls: "!top-[27.5vh] !left-[5vw] !h-[25vh] !w-[20vw]" },
    { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800", scaleIndex: 6, cls: "!top-[27.5vh] !-left-[22.5vw] !h-[25vh] !w-[30vw]" },
    { src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=800", scaleIndex: 8, cls: "!top-[22.5vh] !left-[25vw] !h-[15vh] !w-[15vw]" },
];

const SHOWCASE_FEATURES = [
    {
        id: "01",
        title: "NEBS Compliance",
        description: "Subjecting central office telecom equipment to the grueling GR-63-CORE and GR-1089-CORE requirements.",
        points: ["Earthquake vibration", "Airborne contaminants", "Acoustic noise limits"],
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=80",
        color: "from-blue-500/20 to-purple-500/20"
    },
    {
        id: "02",
        title: "PTCRB / GCF",
        description: "Navigating the complex carrier certification processes required for cellular IoT and 5G devices.",
        points: ["Over-The-Air (OTA) TRP/TIS", "SIM interface testing", "Protocol conformance"],
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
        color: "from-emerald-500/20 to-teal-500/20"
    },
    {
        id: "03",
        title: "EMI / EMC Diagnostics",
        description: "Not just testing for failures, but actively debugging the root cause of radiated emissions in our labs.",
        points: ["Near-field probing", "Shielding effectiveness", "Ferrite choke tuning"],
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=80",
        color: "from-orange-500/20 to-red-500/20"
    },
    {
        id: "04",
        title: "Environmental Stress",
        description: "Proving ruggedness for outdoor telecom infrastructure exposed to harsh climates.",
        points: ["Salt fog resistance", "IP67 water ingress", "Solar radiation"],
        image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80",
        color: "from-pink-500/20 to-rose-500/20"
    }
];

const LATEST_INSIGHTS = [
  {
    id: 1,
    tag: "Compliance",
    title: "Surviving NEBS Level 3: A Guide to Telecom Ruggedness",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    tag: "EMI",
    title: "Debugging Radiated Emissions in 5G Small Cells",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    tag: "ESD",
    title: "Effective TVS Diode Placement for Lightning Protection",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=80"
  }
];

const VALIDATION_SUB_SERVICES = [
    { title: "EMC Pre-Compliance Lab", description: "Conducting early radiated emissions and susceptibility tests in our in-house GTEM cells to avoid expensive lab failures.", icon: <Waves className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=80" },
    { title: "Climatic Chamber Testing", description: "Running temperature/humidity profiles to ensure oscillators and RF components stay within tolerance at extremes.", icon: <Thermometer className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80" },
    { title: "ESD & Surge Resilience", description: "Blasting telecom ports with IEC 61000-4-2/4-5 transients to ensure TVS protection circuits operate fast enough.", icon: <ShieldCheck className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=80" },
    { title: "Vibration & Shock", description: "Simulating transport conditions and seismic events (NEBS earthquake testing) using electrodynamic shakers.", icon: <Activity className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80" },
    { title: "Automated Regression", description: "Building LabVIEW/Python racks that cycle power and run traffic continuously for 30 days without dropping a packet.", icon: <Radio className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80" },
    { title: "Failure Analysis", description: "Using X-ray, cross-sectioning, and acoustic microscopy to find the root cause of any component that dies during test.", icon: <Search className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=80" }
];

const VALIDATION_ADVANTAGES = [
    { title: "Shift-Left Testing", description: "We don't wait for the final prototype to test EMC. We do board-level pre-compliance scans on the very first revision.", icon: <Activity className="w-6 h-6" /> },
    { title: "Official Lab Partnerships", description: "We act as your liaison to certified test houses (TUV, UL, Intertek), managing the paperwork and interpreting the results.", icon: <ShieldCheck className="w-6 h-6" /> },
    { title: "Design for Test (DFT)", description: "We mandate test points, JTAG headers, and loopback modes in the schematic to make validation physically possible.", icon: <Target className="w-6 h-6" /> },
    { title: "Debug, Don't Just Report", description: "If a board fails an emissions scan, we don't just hand you a failing PDF. We pull out copper tape and ferrites to fix it on the spot.", icon: <CheckCircle2 className="w-6 h-6" /> }
];

const VALIDATION_FAQ = [
    {
        question: "What is the difference between FCC Part 15 and PTCRB?",
        answer: "FCC Part 15 ensures your device doesn't emit unintended noise that interferes with others. PTCRB is a cellular carrier requirement ensuring your device plays nice with their specific cellular network."
    },
    {
        question: "Why did my device fail radiated emissions?",
        answer: "The most common causes are poor grounding, cables acting as antennas, or high-speed clocks lacking spread-spectrum modulation. We use near-field probes to pinpoint the exact source."
    },
    {
        question: "How long does carrier certification take?",
        answer: "Typically 4 to 8 weeks, assuming the hardware passes on the first attempt. Our pre-compliance testing is designed to ensure you pass on that critical first attempt."
    },
    {
        question: "What does NEBS Level 3 entail?",
        answer: "NEBS Level 3 is required for equipment placed in a telecom central office. It includes intense testing for fire resistance, earthquake survival, spatial requirements, and extreme acoustics."
    }
];

const VALIDATION_ABOUT_METRICS = {
    titlePart1: "About",
    titlePart2: "Telecom Validation",
    description: "U&WE tortures telecom hardware so the real world doesn't have to. Our validation engineers subject prototypes to extreme thermal, electrical, and physical stress to guarantee decades of uninterrupted uptime.",
    metrics: [
        { tag: "CLIMATE", value: "-40 to +85°C", label: "Thermal Range", image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop" },
        { tag: "SURGE", value: "15kV", label: "ESD Immunity", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" },
        { tag: "COMPLIANCE", value: "100%", label: "First-Pass FCC Success", image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800&auto=format&fit=crop" },
        { tag: "RELIABILITY", value: "99.999%", label: "Five Nines Uptime", image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800&auto=format&fit=crop" }
    ]
};

const TelecomValidation = () => {
    return (
        <ServiceLayout 
            pageKey="telecomValidation"
            hero={{
                title: "Telecom Validation & Testing",
                description: "Rigorous pre-compliance and environmental stress testing to ensure global regulatory approval and carrier certification.",
                primaryButtonText: "Discuss Project",
                secondaryButtonText: "View Capabilities",
                image: heroImage
            }}
            aboutMetrics={VALIDATION_ABOUT_METRICS}
            subServices={VALIDATION_SUB_SERVICES}
            subServicesTitle={{ part1: "Core", part2: "Capabilities" }}
            advantages={VALIDATION_ADVANTAGES}
            advantagesTitle={{ part1: "Why Partner", part2: "With Us" }}
            faqs={VALIDATION_FAQ}
            portal={{
                portalImage: heroImage,
                gridImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2564&auto=format&fit=crop",
                collageImages: COLLAGE_IMAGES,
                features: SEQUENCE_FEATURES,
                aboutText: (
                    <p className="text-[clamp(1.1rem,2vw,2.2rem)] font-medium leading-[1.6] tracking-tight text-left text-white">
                        Proving reliability in the extremes.
                        <br className="hidden lg:block mt-2" />
                        We validate hardware for the harshest global environments.
                    </p>
                )
            }}
            slider={{
                title: "Latest in Validation",
                subtitle: "Insights from our test engineering labs",
                cards: LATEST_INSIGHTS
            }}
            showcase={{
                features: SHOWCASE_FEATURES,
                backgroundText: "COMPLIANCE\nTESTING"
            }}
        />
    );
};

export default TelecomValidation;

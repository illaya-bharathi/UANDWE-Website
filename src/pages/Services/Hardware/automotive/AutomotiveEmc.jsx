import React from 'react';
import ServiceLayout from '../../../../components/ServiceLayout';
import { Radio, Activity, ShieldCheck, Zap, Settings, Wifi, Search, AlertTriangle } from 'lucide-react';
import heroImage from "../../../../assets/imagesss/automotive/EMIEMC&AutomotiveCompliance.png";

const SEQUENCE_FEATURES = [
    { id: 1, title: "Pre-Compliance Review", desc: "Analyzing schematics and PCB layouts early to identify potential EMI/EMC failures before the first board is spun." },
    { id: 2, title: "Component Selection", desc: "Selecting appropriate Pi-filters, ferrite beads, and TVS diodes to suppress conducted emissions and transients." },
    { id: 3, title: "Layout Optimization", desc: "Optimizing grounding strategies, return paths, and decoupling capacitor placement to minimize loop areas." },
    { id: 4, title: "Chamber Testing", desc: "Bringing prototypes to certified anechoic chambers to run preliminary CISPR 25 radiated emissions tests." },
    { id: 5, title: "Transient Testing", desc: "Subjecting the ECU to ISO 16750 load dumps, ESD strikes, and bulk current injection (BCI) immunity tests." },
    { id: 6, title: "Failure Mitigation", desc: "Rapidly diagnosing failures in the chamber and implementing copper tape / component fixes to pass final homologation." }
];

const COLLAGE_IMAGES = [
    { src: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800", scaleIndex: 4, cls: "!-top-[30vh] !left-[5vw] !h-[30vh] !w-[35vw]" },
    { src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800", scaleIndex: 5, cls: "!-top-[10vh] !-left-[25vw] !h-[45vh] !w-[20vw]" },
    { src: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800", scaleIndex: 6, cls: "!left-[27.5vw] !h-[25vh] !w-[25vw]" },
    { src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800", scaleIndex: 5, cls: "!top-[27.5vh] !left-[5vw] !h-[25vh] !w-[20vw]" },
    { src: "https://images.unsplash.com/photo-1503376713197-285a4a4ebf32?q=80&w=800", scaleIndex: 6, cls: "!top-[27.5vh] !-left-[22.5vw] !h-[25vh] !w-[30vw]" },
    { src: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800", scaleIndex: 8, cls: "!top-[22.5vh] !left-[25vw] !h-[15vh] !w-[15vw]" },
];

const SHOWCASE_FEATURES = [
    {
        id: "01",
        title: "CISPR 25 (Emissions)",
        description: "Ensuring your ECU does not emit electromagnetic noise that jams the vehicle's AM/FM radio, GPS, or cellular modems.",
        points: ["Radiated emissions", "Conducted emissions", "Class 3 / 4 / 5"],
        image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&auto=format&fit=crop&q=80",
        color: "from-blue-500/20 to-purple-500/20"
    },
    {
        id: "02",
        title: "ISO 11452 (Immunity)",
        description: "Guaranteeing the ECU continues to function safely even when bombarded by powerful radar or radio towers near the highway.",
        points: ["Bulk Current Injection (BCI)", "Radiated immunity", "Stripline testing"],
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
        color: "from-emerald-500/20 to-teal-500/20"
    },
    {
        id: "03",
        title: "ISO 7637 / 16750 (Transients)",
        description: "Protecting sensitive microcontrollers from massive voltage spikes on the 12V/24V battery line caused by starter motors or loose cables.",
        points: ["Load dump (Pulse 5a/5b)", "Cold crank", "Micro-interruptions"],
        image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80",
        color: "from-orange-500/20 to-red-500/20"
    },
    {
        id: "04",
        title: "ISO 10605 (ESD)",
        description: "Ensuring the ECU survives a 25kV static shock from a driver walking across a carpet and touching a button on a dry winter day.",
        points: ["Air discharge", "Contact discharge", "Unpowered handling"],
        image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&auto=format&fit=crop&q=80",
        color: "from-pink-500/20 to-rose-500/20"
    }
];

const LATEST_INSIGHTS = [
  {
    id: 1,
    tag: "EMI Mitigation",
    title: "How to Stop a SiC Inverter from Jamming the Car's Radio",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    tag: "Design for EMC",
    title: "Grounding Strategies: Why Return Path is Everything",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    tag: "Testing",
    title: "Surviving the Load Dump: Designing for ISO 16750-2",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80"
  }
];

const EMC_SUB_SERVICES = [
    { title: "Schematic EMC Review", description: "Analyzing the BOM early to ensure proper LC filters on power inputs and common-mode chokes on high-speed data lines.", icon: <Search className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&auto=format&fit=crop&q=80" },
    { title: "Layout Analysis", description: "Reviewing the PCB routing to eliminate 'slot antennas' in ground planes and minimize high di/dt loop areas.", icon: <Activity className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80" },
    { title: "Transient Protection", description: "Designing robust TVS and MOV clamping circuits to absorb massive energy spikes from the vehicle alternator.", icon: <ShieldCheck className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80" },
    { title: "Shielding & Enclosures", description: "Designing Faraday cages and conductive gaskets into the mechanical enclosure to block radiated emissions.", icon: <Settings className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&auto=format&fit=crop&q=80" },
    { title: "Lab Pre-Compliance", description: "Running near-field probe scans on the benchtop to locate specific noisy components before paying for chamber time.", icon: <Wifi className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1503376713197-285a4a4ebf32?w=800&auto=format&fit=crop&q=80" },
    { title: "Failure Debugging", description: "If an ECU fails homologation, we fly to the test chamber to implement surgical fixes (ferrites, copper tape) to pass the test.", icon: <AlertTriangle className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=80" }
];

const EMC_ADVANTAGES = [
    { title: "Design for EMC", description: "EMC is not magic, it's physics. We don't try to fix bad designs with heavy shielding; we design quiet boards from day one.", icon: <Settings className="w-6 h-6" /> },
    { title: "Chamber Experience", description: "Test chambers are incredibly expensive ($1,500+/day). We use our pre-compliance experience to ensure you pass on the first or second try.", icon: <Activity className="w-6 h-6" /> },
    { title: "OEM Specifics", description: "Beyond international ISO standards, every OEM (Ford, VW, Toyota) has their own proprietary, stricter EMC requirements. We know them.", icon: <ShieldCheck className="w-6 h-6" /> },
    { title: "Root Cause Analysis", description: "When a board fails, we don't just blindly add capacitors. We find the exact parasitic resonance causing the spike.", icon: <Search className="w-6 h-6" /> }
];

const EMC_FAQ = [
    {
        question: "What is the difference between Emissions and Immunity?",
        answer: "Emissions testing ensures your device doesn't broadcast noise that ruins other electronics (like the radio). Immunity testing blasts your device with noise to ensure it doesn't crash."
    },
    {
        question: "Why do automotive EMC standards seem so much harder than consumer electronics?",
        answer: "If your laptop crashes due to static shock, it's annoying. If an airbag controller crashes on the highway due to interference from a cell tower, it's deadly. The immunity requirements are orders of magnitude higher."
    },
    {
        question: "Can we just wrap the PCB in a metal box?",
        answer: "Shielding is heavy, expensive, and often ineffective if wires act as antennas passing through the shield. It's always cheaper and lighter to eliminate the noise at the source (the PCB layout) than to block it later."
    },
    {
        question: "What is a Load Dump?",
        answer: "If the car battery is disconnected while the alternator is spinning (e.g., a loose cable over a bump), the alternator dumps massive energy into the 12V bus, causing a spike up to 100V. ECUs must survive this without damage."
    }
];

const EMC_ABOUT_METRICS = {
    titlePart1: "About",
    titlePart2: "Automotive EMC",
    description: "U&WE tames the electromagnetic chaos of the modern vehicle. We engineer hardware that operates flawlessly amidst massive electrical transients while remaining 'whisper quiet' to surrounding systems.",
    metrics: [
        { tag: "EMISSIONS", value: "CISPR 25", label: "Class 5 Quiet", image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800&auto=format&fit=crop" },
        { tag: "IMMUNITY", value: "ISO 11452", label: "Bulletproof Design", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" },
        { tag: "POWER", value: "ISO 16750", label: "Transient Survival", image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800&auto=format&fit=crop" },
        { tag: "STATIC", value: "ISO 10605", label: "ESD Protection", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800&auto=format&fit=crop" }
    ]
};

const AutomotiveEmc = () => {
    return (
        <ServiceLayout 
            pageKey="automotiveEmc"
            hero={{
                title: "EMI/EMC & Automotive Compliance",
                description: "Engineering 'Design for EMC' PCBs and mitigating radiated/conducted emissions to pass rigorous CISPR 25 and ISO 16750 standards.",
                primaryButtonText: "Discuss Project",
                secondaryButtonText: "View Capabilities"
            }}
            aboutMetrics={EMC_ABOUT_METRICS}
            subServices={EMC_SUB_SERVICES}
            subServicesTitle={{ part1: "Core", part2: "Capabilities" }}
            advantages={EMC_ADVANTAGES}
            advantagesTitle={{ part1: "Why Partner", part2: "With Us" }}
            faqs={EMC_FAQ}
            portal={{
                portalImage: heroImage,
                gridImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2564&auto=format&fit=crop",
                collageImages: COLLAGE_IMAGES,
                features: SEQUENCE_FEATURES,
                aboutText: (
                    <p className="text-[clamp(1.1rem,2vw,2.2rem)] font-medium leading-[1.6] tracking-tight text-left text-white">
                        Mastering the invisible spectrum.
                        <br className="hidden lg:block mt-2" />
                        We ensure your electronics survive the real world.
                    </p>
                )
            }}
            slider={{
                title: "Latest in EMC",
                subtitle: "Insights from our compliance engineers",
                cards: LATEST_INSIGHTS
            }}
            showcase={{
                features: SHOWCASE_FEATURES,
                backgroundText: "COMPLIANCE"
            }}
        />
    );
};

export default AutomotiveEmc;

import React from 'react';
import ServiceLayout from '../../../../components/ServiceLayout';
import { Radio, Activity, ShieldCheck, Cpu, Waves, Target, Search, Zap, Layers } from 'lucide-react';
import heroImage from "../../../../assets/imagesss/communication/RF & Microwave Design.png";

const SEQUENCE_FEATURES = [
    { id: 1, title: "Architecture & Link Budget", desc: "Calculating required gain, noise figure (NF), and IP3 to ensure reliable data links over required distances." },
    { id: 2, title: "Component Selection", desc: "Sourcing specialized RF ICs, mixers, filters (SAW/BAW), and oscillators (TCXO/OCXO)." },
    { id: 3, title: "Impedance Matching", desc: "Designing Smith Chart-verified matching networks to minimize return loss and maximize power transfer." },
    { id: 4, title: "ADS Simulation", desc: "Performing Harmonic Balance and S-parameter simulations in Keysight ADS before layout." },
    { id: 5, title: "RF PCB Layout", desc: "Routing precisely controlled impedance traces (microstrip/stripline) with rigorous via fencing." },
    { id: 6, title: "VNA Validation", desc: "Bench testing the physical board using Vector Network Analyzers and Spectrum Analyzers." }
];

const COLLAGE_IMAGES = [
    { src: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800", scaleIndex: 4, cls: "!-top-[30vh] !left-[5vw] !h-[30vh] !w-[35vw]" },
    { src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800", scaleIndex: 5, cls: "!-top-[10vh] !-left-[25vw] !h-[45vh] !w-[20vw]" },
    { src: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800", scaleIndex: 6, cls: "!left-[27.5vw] !h-[25vh] !w-[25vw]" },
    { src: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800", scaleIndex: 5, cls: "!top-[27.5vh] !left-[5vw] !h-[25vh] !w-[20vw]" },
    { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800", scaleIndex: 6, cls: "!top-[27.5vh] !-left-[22.5vw] !h-[25vh] !w-[30vw]" },
    { src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=800", scaleIndex: 8, cls: "!top-[22.5vh] !left-[25vw] !h-[15vh] !w-[15vw]" },
];

const SHOWCASE_FEATURES = [
    {
        id: "01",
        title: "mmWave Mastery",
        description: "Designing extreme high-frequency hardware for 5G/6G and radar applications up to 77GHz.",
        points: ["Sub-strate integrated waveguides", "Low-loss dielectric selection", "Phase noise reduction"],
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=80",
        color: "from-blue-500/20 to-purple-500/20"
    },
    {
        id: "02",
        title: "Power Amplifiers (PA)",
        description: "Architecting highly efficient, linear power amplifiers using advanced GaN and GaAs technologies.",
        points: ["Doherty amplifier design", "Thermal dissipation strategies", "Digital Pre-Distortion (DPD)"],
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=80",
        color: "from-emerald-500/20 to-teal-500/20"
    },
    {
        id: "03",
        title: "Ultra-Low Noise (LNA)",
        description: "Capturing faint signals from the noise floor for satellite links and deep-space communications.",
        points: ["Sub-1dB Noise Figures", "High-Q matching networks", "EMI shielding"],
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
        color: "from-orange-500/20 to-red-500/20"
    },
    {
        id: "04",
        title: "Software-Defined Radio",
        description: "Building agile RF front-ends that interface directly with high-speed ADCs and FPGAs.",
        points: ["Wideband tuning", "Direct RF sampling", "JESD204B/C integration"],
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=80",
        color: "from-pink-500/20 to-rose-500/20"
    }
];

const LATEST_INSIGHTS = [
  {
    id: 1,
    tag: "mmWave",
    title: "Navigating PCB Substrate Losses at 60GHz",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    tag: "GaN",
    title: "Thermal Management in High-Power Doherty Amplifiers",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    tag: "Simulation",
    title: "Bridging the Gap Between ADS Simulation and VNA Reality",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80"
  }
];

const RF_SUB_SERVICES = [
    { title: "Transceiver Architecture", description: "Designing heterodyne, superheterodyne, and direct-conversion (Zero-IF) architectures for modern telecommunications.", icon: <Radio className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=80" },
    { title: "Keysight ADS Simulation", description: "Using industry-standard EDA tools to perform non-linear harmonic balance, envelope, and S-parameter simulations.", icon: <Activity className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=80" },
    { title: "Impedance Matching", description: "Utilizing Smith Charts to design discrete LC or distributed matching networks that maximize power transfer.", icon: <Target className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80" },
    { title: "RF PCB Layout", description: "Executing meticulous layouts with grounded coplanar waveguides, blind/buried vias, and strict return path control.", icon: <Layers className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=80" },
    { title: "Filter Design", description: "Synthesizing custom bandpass, lowpass, and highpass filters (LC, SAW, BAW, Cavity) to reject out-of-band interference.", icon: <ShieldCheck className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80" },
    { title: "Lab Bench Tuning", description: "Using copper tape, exacto knives, and high-end VNAs to physically tune and validate the first prototype boards.", icon: <Search className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=80" }
];

const RF_ADVANTAGES = [
    { title: "Mathematical Rigor", description: "We don't guess values. Every inductor and capacitor in the RF path is backed by extensive electromagnetic simulation.", icon: <Activity className="w-6 h-6" /> },
    { title: "Advanced Materials", description: "Deep experience working with exotic RF laminates (Rogers, Taconic) to minimize dielectric loss at high frequencies.", icon: <Cpu className="w-6 h-6" /> },
    { title: "In-House VNA Labs", description: "Our labs are equipped with 40GHz+ Vector Network Analyzers, allowing immediate verification of simulated S-parameters.", icon: <Radio className="w-6 h-6" /> },
    { title: "GaN/GaAs Expertise", description: "We specialize in designing with cutting-edge III-V semiconductor technologies for maximum power and efficiency.", icon: <Zap className="w-6 h-6" /> }
];

const RF_FAQ = [
    {
        question: "How do you handle RF interference (EMI) on densely packed boards?",
        answer: "We use a combination of 3D EM simulation, strategic via fencing, separate analog/digital ground planes, and custom-designed Faraday cages (shielding cans) to isolate sensitive RF blocks."
    },
    {
        question: "Do you design for mmWave frequencies?",
        answer: "Yes, we routinely design hardware operating in the 24GHz to 77GHz bands, specifically for automotive radar and high-throughput 5G infrastructure."
    },
    {
        question: "What EDA software do you use for RF design?",
        answer: "Our primary simulation platform is Keysight ADS for circuit-level simulation, combined with Ansys HFSS or CST Microwave Studio for 3D electromagnetic modeling of the PCB."
    },
    {
        question: "Can you tune an existing RF board that is failing compliance?",
        answer: "Absolutely. We can take your failing board into our lab, measure the actual S-parameters on our VNAs, identify the impedance mismatch, and calculate a revised matching network."
    }
];

const RF_ABOUT_METRICS = {
    titlePart1: "About",
    titlePart2: "RF & Microwave Design",
    description: "U&WE engineers precision RF front-ends that push the boundaries of physics. From ultra-low noise receivers to high-power GaN transmitters, we turn theoretical electromagnetic math into mass-producible hardware.",
    metrics: [
        { tag: "FREQUENCY", value: "77GHz", label: "Maximum Design Frequency", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop" },
        { tag: "NOISE FIGURE", value: "< 1dB", label: "LNA Precision", image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800&auto=format&fit=crop" },
        { tag: "POWER", value: "500W+", label: "Solid State Amplifiers", image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800&auto=format&fit=crop" },
        { tag: "MATCHING", value: "50Ω", label: "Perfect Impedance Control", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" }
    ]
};

const RfMicrowave = () => {
    return (
        <ServiceLayout 
            pageKey="rfMicrowave"
            hero={{
                title: "RF & Microwave Design",
                description: "Architecting high-frequency, precision analog front-ends for next-generation telecommunications, radar, and satellite systems.",
                primaryButtonText: "Discuss Project",
                secondaryButtonText: "View Capabilities",
                image: heroImage
            }}
            aboutMetrics={RF_ABOUT_METRICS}
            subServices={RF_SUB_SERVICES}
            subServicesTitle={{ part1: "Core", part2: "Capabilities" }}
            advantages={RF_ADVANTAGES}
            advantagesTitle={{ part1: "Why Partner", part2: "With Us" }}
            faqs={RF_FAQ}
            portal={{
                portalImage: heroImage,
                gridImage: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2564&auto=format&fit=crop",
                collageImages: COLLAGE_IMAGES,
                features: SEQUENCE_FEATURES,
                aboutText: (
                    <p className="text-[clamp(1.1rem,2vw,2.2rem)] font-medium leading-[1.6] tracking-tight text-left text-white">
                        Mastering the invisible spectrum.
                        <br className="hidden lg:block mt-2" />
                        We design RF hardware that transmits further, clearer, and faster.
                    </p>
                )
            }}
            slider={{
                title: "Latest in RF Engineering",
                subtitle: "Insights from our high-frequency architects",
                cards: LATEST_INSIGHTS
            }}
            showcase={{
                features: SHOWCASE_FEATURES,
                backgroundText: "RADIO\nFREQ"
            }}
        />
    );
};

export default RfMicrowave;

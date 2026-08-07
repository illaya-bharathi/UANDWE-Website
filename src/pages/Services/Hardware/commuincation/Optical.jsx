import React from 'react';
import ServiceLayout from '../../../../components/ServiceLayout';
import { Target, Activity, ShieldCheck, Cpu, Waves, Zap, Layers, Network } from 'lucide-react';
import heroImage from "../../../../assets/imagesss/communication/Optical.png";

const SEQUENCE_FEATURES = [
    { id: 1, title: "Link Budget Analysis", desc: "Calculating optical power, dispersion penalties, and OSNR to guarantee error-free transmission." },
    { id: 2, title: "Photonic IC Selection", desc: "Sourcing state-of-the-art Silicon Photonics, InP lasers, and Avalanche Photodiodes (APDs)." },
    { id: 3, title: "High-Speed Layout", desc: "Routing PAM4 electrical lanes (56G/112G) from the MAC/PHY to the optical transceiver cage." },
    { id: 4, title: "Thermal Modeling", desc: "Ensuring high-power coherent DSPs and tunable lasers remain within strict temperature limits." },
    { id: 5, title: "Firmware Integration", desc: "Writing I2C/MDIO drivers to manage transceiver states, DOM (Digital Optical Monitoring), and alarms." },
    { id: 6, title: "Eye Diagram Testing", desc: "Validating the optical output using sampling oscilloscopes and Bit Error Rate Testers (BERT)." }
];

const COLLAGE_IMAGES = [
    { src: "https://images.unsplash.com/photo-1544377193-33dce4d95d0c?q=80&w=800", scaleIndex: 4, cls: "!-top-[30vh] !left-[5vw] !h-[30vh] !w-[35vw]" },
    { src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800", scaleIndex: 5, cls: "!-top-[10vh] !-left-[25vw] !h-[45vh] !w-[20vw]" },
    { src: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800", scaleIndex: 6, cls: "!left-[27.5vw] !h-[25vh] !w-[25vw]" },
    { src: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800", scaleIndex: 5, cls: "!top-[27.5vh] !left-[5vw] !h-[25vh] !w-[20vw]" },
    { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800", scaleIndex: 6, cls: "!top-[27.5vh] !-left-[22.5vw] !h-[25vh] !w-[30vw]" },
    { src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=800", scaleIndex: 8, cls: "!top-[22.5vh] !left-[25vw] !h-[15vh] !w-[15vw]" },
];

const SHOWCASE_FEATURES = [
    {
        id: "01",
        title: "Coherent Optical Modules",
        description: "Designing line cards that support 400G/800G coherent transmission for long-haul networks.",
        points: ["DP-QPSK / 16-QAM", "Chromatic Dispersion Compensation", "Tunable Lasers"],
        image: "https://images.unsplash.com/photo-1544377193-33dce4d95d0c?w=800&auto=format&fit=crop&q=80",
        color: "from-blue-500/20 to-purple-500/20"
    },
    {
        id: "02",
        title: "Silicon Photonics",
        description: "Integrating lasers, modulators, and detectors directly onto a single silicon chip.",
        points: ["Mach-Zehnder Modulators", "Micro-ring Resonators", "Co-Packaged Optics (CPO)"],
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=80",
        color: "from-emerald-500/20 to-teal-500/20"
    },
    {
        id: "03",
        title: "DWDM Systems",
        description: "Architecting Dense Wavelength Division Multiplexing hardware to maximize fiber capacity.",
        points: ["Arrayed Waveguide Gratings", "Erbium-Doped Fiber Amplifiers (EDFA)", "ROADM Integration"],
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
        color: "from-orange-500/20 to-red-500/20"
    },
    {
        id: "04",
        title: "Data Center Interconnects",
        description: "Building ultra-low power, short-reach transceivers (QSFP-DD, OSFP) for spine-leaf switches.",
        points: ["PAM4 Signaling", "VCSEL Arrays", "Thermal Throttle Management"],
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=80",
        color: "from-pink-500/20 to-rose-500/20"
    }
];

const LATEST_INSIGHTS = [
  {
    id: 1,
    tag: "800G Optics",
    title: "Overcoming Signal Integrity Challenges in 112G PAM4 Traces",
    image: "https://images.unsplash.com/photo-1544377193-33dce4d95d0c?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    tag: "Silicon Photonics",
    title: "The Shift Toward Co-Packaged Optics (CPO) in Hyperscale DCs",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    tag: "DWDM",
    title: "Extending EDFA Ranges for Submarine Cable Networks",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80"
  }
];

const OPTICAL_SUB_SERVICES = [
    { title: "Transceiver PCB Design", description: "Designing the high-density printed circuit boards inside hot-pluggable optical modules (QSFP, OSFP).", icon: <Layers className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1544377193-33dce4d95d0c?w=800&auto=format&fit=crop&q=80" },
    { title: "Coherent DSP Integration", description: "Interfacing massive Digital Signal Processors that recover phase and polarization data from the optical stream.", icon: <Cpu className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=80" },
    { title: "Optical Transport Networks", description: "Building carrier-grade OTN line cards that aggregate multiple 10G/100G client signals into a single coherent wave.", icon: <Network className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80" },
    { title: "Laser Driver & TIA Design", description: "Designing the high-speed analog circuits that rapidly modulate the laser and amplify the photodiode current.", icon: <Zap className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=80" },
    { title: "Thermal Architecture", description: "Engineering heat pipes, TIMs (Thermal Interface Materials), and airflow routing to cool 30W+ transceivers.", icon: <ShieldCheck className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80" },
    { title: "Optical Validation", description: "Validating Transmitter Dispersion Eye Closure (TDECQ) and Optical Return Loss (ORL) in the lab.", icon: <Activity className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=80" }
];

const OPTICAL_ADVANTAGES = [
    { title: "Signal Integrity Focus", description: "Optical design is actually 90% electrical signal integrity. We ensure the electrical PAM4 eyes are wide open before they hit the laser.", icon: <Activity className="w-6 h-6" /> },
    { title: "Multi-Disciplinary Teams", description: "Optical modules require perfect harmony between PCB design, firmware (DOM), and mechanical thermal engineering.", icon: <Layers className="w-6 h-6" /> },
    { title: "Lab-to-Fab", description: "We have direct relationships with Silicon Photonics foundries, allowing us to help you transition from discrete optics to PICs.", icon: <Cpu className="w-6 h-6" /> },
    { title: "MSA Standard Compliance", description: "We rigidly adhere to Multi-Source Agreement (MSA) standards ensuring your hardware is plug-and-play compatible worldwide.", icon: <ShieldCheck className="w-6 h-6" /> }
];

const OPTICAL_FAQ = [
    {
        question: "What is the difference between Direct Detect and Coherent optics?",
        answer: "Direct detect simply flashes a laser on and off (Amplitude modulation) for short distances. Coherent optics modulate the phase, amplitude, and polarization of the light, requiring a powerful DSP, allowing data to travel thousands of kilometers."
    },
    {
        question: "How do you handle the thermal load of modern QSFP-DD modules?",
        answer: "800G modules can draw over 20 Watts in a tiny footprint. We use advanced CFD (Computational Fluid Dynamics) to design riding heat sinks, specialized thermal gap pads, and optimized PCB copper weighting."
    },
    {
        question: "What is Silicon Photonics?",
        answer: "It is the process of building optical components (lasers, modulators) using standard silicon semiconductor manufacturing. It drastically reduces the cost and size of optical transceivers."
    },
    {
        question: "Can you help test our optical modules?",
        answer: "Yes, we have optical spectrum analyzers, 112G BERTs, and sampling oscilloscopes to measure TDECQ, extinction ratio, and eye mask margins."
    }
];

const OPTICAL_ABOUT_METRICS = {
    titlePart1: "About",
    titlePart2: "Optical Networking",
    description: "U&WE designs the physical infrastructure that powers the global internet. From data center interconnects to trans-oceanic submarine cables, we engineer hardware that moves terabits per second at the speed of light.",
    metrics: [
        { tag: "BANDWIDTH", value: "800G+", label: "Per Wavelength Capacity", image: "https://images.unsplash.com/photo-1544377193-33dce4d95d0c?q=80&w=800&auto=format&fit=crop" },
        { tag: "MODULATION", value: "PAM4", label: "Advanced Signaling", image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800&auto=format&fit=crop" },
        { tag: "INTEGRATION", value: "PIC", label: "Photonic IC Design", image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800&auto=format&fit=crop" },
        { tag: "RELIABILITY", value: "Carrier", label: "Grade Infrastructure", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" }
    ]
};

const Optical = () => {
    return (
        <ServiceLayout 
            pageKey="optical"
            hero={{
                title: "Optical Networking",
                description: "Engineering high-speed photonic hardware, DWDM transceivers, and coherent transport systems for the next generation of data.",
                primaryButtonText: "Discuss Project",
                secondaryButtonText: "View Capabilities",
                image: heroImage
            }}
            aboutMetrics={OPTICAL_ABOUT_METRICS}
            subServices={OPTICAL_SUB_SERVICES}
            subServicesTitle={{ part1: "Core", part2: "Capabilities" }}
            advantages={OPTICAL_ADVANTAGES}
            advantagesTitle={{ part1: "Why Partner", part2: "With Us" }}
            faqs={OPTICAL_FAQ}
            portal={{
                portalImage: heroImage,
                gridImage: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2564&auto=format&fit=crop",
                collageImages: COLLAGE_IMAGES,
                features: SEQUENCE_FEATURES,
                aboutText: (
                    <p className="text-[clamp(1.1rem,2vw,2.2rem)] font-medium leading-[1.6] tracking-tight text-left text-white">
                        Moving data at the speed of light.
                        <br className="hidden lg:block mt-2" />
                        We engineer the optical hardware that connects the world.
                    </p>
                )
            }}
            slider={{
                title: "Latest in Photonics",
                subtitle: "Insights from our optical engineering team",
                cards: LATEST_INSIGHTS
            }}
            showcase={{
                features: SHOWCASE_FEATURES,
                backgroundText: "OPTICAL\nNETWORKS"
            }}
        />
    );
};

export default Optical;

import React from 'react';
import ServiceLayout from '../../../../components/ServiceLayout';
import { Wifi, Target, Activity, ShieldCheck, Cpu, Search, Layers, Radio } from 'lucide-react';
import heroImage from "../../../../assets/imagesss/communication/Antenna Engineering.png";

const SEQUENCE_FEATURES = [
    { id: 1, title: "Requirement Analysis", desc: "Defining bandwidth, center frequency, polarization, and required gain/directivity." },
    { id: 2, title: "Initial Topology", desc: "Selecting the fundamental antenna type (Patch, Dipole, Horn, or Phased Array) based on mechanical constraints." },
    { id: 3, title: "EM Simulation", desc: "Running full 3D electromagnetic simulations in Ansys HFSS or CST Microwave Studio." },
    { id: 4, title: "Feed Network Design", desc: "Architecting the corporate feed networks, phase shifters, and power dividers." },
    { id: 5, title: "Radome Optimization", desc: "Modeling the electrical impact of the physical enclosure to prevent detuning." },
    { id: 6, title: "Anechoic Testing", desc: "Measuring physical radiation patterns, VSWR, and efficiency in an anechoic chamber." }
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
        title: "Active Phased Arrays",
        description: "Designing complex AESA (Active Electronically Scanned Array) antennas for instant beam steering.",
        points: ["Digital beamforming", "Phase shifter integration", "Grating lobe mitigation"],
        image: "https://images.unsplash.com/photo-1544377193-33dce4d95d0c?w=800&auto=format&fit=crop&q=80",
        color: "from-blue-500/20 to-purple-500/20"
    },
    {
        id: "02",
        title: "Massive MIMO",
        description: "Architecting high-density antenna arrays for 5G base stations and high-capacity wireless links.",
        points: ["Spatial multiplexing", "Mutual coupling analysis", "Thermal management"],
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=80",
        color: "from-emerald-500/20 to-teal-500/20"
    },
    {
        id: "03",
        title: "Compact IoT Antennas",
        description: "Designing ultra-small, multi-band antennas that fit inside constrained wearable enclosures.",
        points: ["PIFA / IFA designs", "Dielectric loading", "Human body de-tuning"],
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
        color: "from-orange-500/20 to-red-500/20"
    },
    {
        id: "04",
        title: "Radome Engineering",
        description: "Ensuring the physical plastic/composite housing does not degrade the antenna's performance.",
        points: ["Material characterization", "Transmissivity analysis", "Environmental sealing"],
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=80",
        color: "from-pink-500/20 to-rose-500/20"
    }
];

const LATEST_INSIGHTS = [
  {
    id: 1,
    tag: "Phased Arrays",
    title: "Minimizing Grating Lobes in Sparse Antenna Arrays",
    image: "https://images.unsplash.com/photo-1544377193-33dce4d95d0c?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    tag: "Simulation",
    title: "Accelerating HFSS Solves with GPU Computing",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    tag: "Wearables",
    title: "Mitigating Human Body Effect on BLE Antennas",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80"
  }
];

const ANTENNA_SUB_SERVICES = [
    { title: "Custom PCB Antennas", description: "Designing space-efficient printed inverted-F (PIFA) and patch antennas directly onto your main circuit board.", icon: <Layers className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1544377193-33dce4d95d0c?w=800&auto=format&fit=crop&q=80" },
    { title: "3D Electromagnetic Simulation", description: "Utilizing Ansys HFSS and CST to accurately predict radiation patterns, S11, and efficiency before fabrication.", icon: <Activity className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=80" },
    { title: "Beamforming Networks", description: "Architecting the complex analog or digital phase shifting networks required for steerable arrays.", icon: <Wifi className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80" },
    { title: "Multi-Band Integration", description: "Co-locating Wi-Fi, Cellular, GPS, and Bluetooth antennas within the same device without destructive interference.", icon: <Target className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=80" },
    { title: "Impedance Matching", description: "Calculating and placing Pi/T-network components to perfectly match the antenna to the 50-ohm RF trace.", icon: <ShieldCheck className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80" },
    { title: "Anechoic Chamber Testing", description: "Verifying the physical prototype's 3D radiation pattern and Total Radiated Power (TRP) in a controlled environment.", icon: <Search className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=80" }
];

const ANTENNA_ADVANTAGES = [
    { title: "System-Level View", description: "We don't design antennas in a vacuum. We simulate the entire product—including batteries, screens, and screws—to see how they detune the signal.", icon: <Layers className="w-6 h-6" /> },
    { title: "Unmatched HFSS Expertise", description: "Our engineers are experts at mesh operations and boundary conditions, ensuring highly accurate simulations without endless compute times.", icon: <Activity className="w-6 h-6" /> },
    { title: "In-House Prototyping", description: "We use specialized LPKF milling machines to physically print and test new antenna iterations on the same day.", icon: <Cpu className="w-6 h-6" /> },
    { title: "Pre-Compliance Confidence", description: "Our antennas are designed to pass strict carrier certifications (PTCRB) and FCC Specific Absorption Rate (SAR) limits.", icon: <ShieldCheck className="w-6 h-6" /> }
];

const ANTENNA_FAQ = [
    {
        question: "Why did my off-the-shelf antenna stop working when I put it in the enclosure?",
        answer: "This is called dielectric detuning. The plastic enclosure acts like a lens, shifting the resonant frequency of the antenna. We fix this by simulating the enclosure and pre-shifting the antenna's tuning to compensate."
    },
    {
        question: "What is a Phased Array antenna?",
        answer: "Instead of physically moving a satellite dish, a phased array uses dozens of small antennas. By minutely delaying the signal to each one, the combined beam can be steered electronically in microseconds."
    },
    {
        question: "Can you design a single antenna for multiple cellular bands?",
        answer: "Yes. We design complex fractal, IFA, and monopole structures with active tuning circuits that can cover everything from 700MHz LTE to Sub-6GHz 5G."
    },
    {
        question: "Do you provide radiation pattern plots?",
        answer: "Absolutely. You will receive comprehensive 3D plots showing directivity, gain, efficiency, and cross-polarization isolation from both simulation and physical chamber testing."
    }
];

const ANTENNA_ABOUT_METRICS = {
    titlePart1: "About",
    titlePart2: "Antenna Engineering",
    description: "U&WE designs the critical interface between hardware and the airwaves. From microscopic IoT chip antennas to massive 5G phased arrays, we ensure your signal cuts through the noise.",
    metrics: [
        { tag: "EFFICIENCY", value: "> 85%", label: "Average Radiation Efficiency", image: "https://images.unsplash.com/photo-1544377193-33dce4d95d0c?q=80&w=800&auto=format&fit=crop" },
        { tag: "ARRAYS", value: "256+", label: "Elements per Phased Array", image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800&auto=format&fit=crop" },
        { tag: "VSWR", value: "< 1.5:1", label: "Impedance Match Quality", image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800&auto=format&fit=crop" },
        { tag: "SIMULATION", value: "3D EM", label: "Full-Wave Solvers", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" }
    ]
};

const Antenna = () => {
    return (
        <ServiceLayout 
            pageKey="antenna"
            hero={{
                title: "Antenna Engineering",
                description: "Architecting custom, high-efficiency radiating structures—from compact wearables to advanced Massive MIMO base stations.",
                primaryButtonText: "Discuss Project",
                secondaryButtonText: "View Capabilities",
                image: heroImage
            }}
            aboutMetrics={ANTENNA_ABOUT_METRICS}
            subServices={ANTENNA_SUB_SERVICES}
            subServicesTitle={{ part1: "Core", part2: "Capabilities" }}
            advantages={ANTENNA_ADVANTAGES}
            advantagesTitle={{ part1: "Why Partner", part2: "With Us" }}
            faqs={ANTENNA_FAQ}
            portal={{
                portalImage: heroImage,
                gridImage: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2564&auto=format&fit=crop",
                collageImages: COLLAGE_IMAGES,
                features: SEQUENCE_FEATURES,
                aboutText: (
                    <p className="text-[clamp(1.1rem,2vw,2.2rem)] font-medium leading-[1.6] tracking-tight text-left text-white">
                        Harnessing the physics of electromagnetics.
                        <br className="hidden lg:block mt-2" />
                        We ensure your hardware connects, no matter the environment.
                    </p>
                )
            }}
            slider={{
                title: "Latest in Antenna Design",
                subtitle: "Insights from our EM simulation experts",
                cards: LATEST_INSIGHTS
            }}
            showcase={{
                features: SHOWCASE_FEATURES,
                backgroundText: "ANTENNA\nDESIGN"
            }}
        />
    );
};

export default Antenna;

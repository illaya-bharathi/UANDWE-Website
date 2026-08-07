import React from 'react';
import ServiceLayout from '../../../../components/ServiceLayout';
import { Activity, ShieldCheck, Cpu, Waves, Search, Layers, Zap } from 'lucide-react';
import heroImage from "../../../../assets/imagesss/communication/Signal Integrity Analysis.png";

const SEQUENCE_FEATURES = [
    { id: 1, title: "Stackup Design", desc: "Collaborating with fabrication houses to select low-loss dielectric materials (e.g. Megtron 6, Rogers)." },
    { id: 2, title: "Pre-Layout Simulation", desc: "Extracting S-parameters and analyzing theoretical eye diagrams before a single trace is routed." },
    { id: 3, title: "Constraint Management", desc: "Defining strict routing rules for length matching, impedance, and anti-pad sizes." },
    { id: 4, title: "Post-Layout Extraction", desc: "Running 3D EM solvers (Ansys HFSS) on the finalized layout to capture exact parasitic effects." },
    { id: 5, title: "Crosstalk & Jitter Analysis", desc: "Quantifying NEXT/FEXT crosstalk and deterministic jitter to ensure adequate eye mask margin." },
    { id: 6, title: "TDR & VNA Validation", desc: "Measuring the physical board in the lab using Time Domain Reflectometry to verify impedance." }
];

const COLLAGE_IMAGES = [
    { src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800", scaleIndex: 4, cls: "!-top-[30vh] !left-[5vw] !h-[30vh] !w-[35vw]" },
    { src: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800", scaleIndex: 5, cls: "!-top-[10vh] !-left-[25vw] !h-[45vh] !w-[20vw]" },
    { src: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800", scaleIndex: 6, cls: "!left-[27.5vw] !h-[25vh] !w-[25vw]" },
    { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800", scaleIndex: 5, cls: "!top-[27.5vh] !left-[5vw] !h-[25vh] !w-[20vw]" },
    { src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=800", scaleIndex: 6, cls: "!top-[27.5vh] !-left-[22.5vw] !h-[25vh] !w-[30vw]" },
    { src: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800", scaleIndex: 8, cls: "!top-[22.5vh] !left-[25vw] !h-[15vh] !w-[15vw]" },
];

const SHOWCASE_FEATURES = [
    {
        id: "01",
        title: "112G PAM4 Routing",
        description: "Solving the extreme insertion loss challenges of 112Gbps PAM4 signaling across complex telecom backplanes.",
        points: ["Fly-over cables", "Back-drilling vias", "Skin effect mitigation"],
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
        color: "from-blue-500/20 to-purple-500/20"
    },
    {
        id: "02",
        title: "Power Integrity (PI)",
        description: "Designing robust Power Delivery Networks (PDN) to feed massive ASICs without voltage droop or ripple.",
        points: ["Target impedance curves", "Decap optimization", "IR Drop analysis"],
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=80",
        color: "from-emerald-500/20 to-teal-500/20"
    },
    {
        id: "03",
        title: "DDR5 / HBM Memory",
        description: "Guaranteeing setup/hold times and minimizing skew for ultra-high-speed memory interfaces.",
        points: ["Data/Strobe matching", "Simultaneous Switching Noise", "Write leveling"],
        image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80",
        color: "from-orange-500/20 to-red-500/20"
    },
    {
        id: "04",
        title: "Connector Optimization",
        description: "Simulating the physical connectors and designing custom anti-pads to minimize capacitive discontinuities.",
        points: ["SFP/QSFP footprints", "Mezzanine connectors", "3D step model extraction"],
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=80",
        color: "from-pink-500/20 to-rose-500/20"
    }
];

const LATEST_INSIGHTS = [
  {
    id: 1,
    tag: "PAM4",
    title: "Why Traditional FR4 Fails at 56G and Beyond",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    tag: "Power Integrity",
    title: "Co-Simulating SI and PI: Why You Can't Ignore the PDN",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    tag: "Vias",
    title: "The Math Behind Back-Drilling: Removing Stub Resonances",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80"
  }
];

const SI_SUB_SERVICES = [
    { title: "Eye Diagram Simulation", description: "Generating IBIS-AMI models to predict the exact shape and margin of the data eye at the receiver.", icon: <Activity className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80" },
    { title: "PDN Optimization", description: "Using Sigrity or HyperLynx to analyze the AC impedance of the power distribution network.", icon: <Zap className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=80" },
    { title: "3D Via Extraction", description: "Modeling the exact Z-axis transitions of high-speed signals to optimize anti-pads and return via placement.", icon: <Layers className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80" },
    { title: "Material Characterization", description: "Working with PCB vendors to extract accurate Dk/Df (Dielectric Constant / Dissipation Factor) over temperature and humidity.", icon: <Search className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80" },
    { title: "Crosstalk Mitigation", description: "Identifying aggressor-victim trace pairs and increasing spacing or adding guard traces to prevent data corruption.", icon: <ShieldCheck className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=80" },
    { title: "Lab TDR & TDT", description: "Bringing the physical board into our lab to measure Time Domain Reflectometry and verify the simulated 100-ohm differential impedance.", icon: <Cpu className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=80" }
];

const SI_ADVANTAGES = [
    { title: "Predictive Success", description: "We find the jitter and crosstalk issues in software before you spend $20,000 on a ruined prototype run.", icon: <Activity className="w-6 h-6" /> },
    { title: "Industry Standard Tools", description: "We utilize the most trusted solvers in the industry, including Ansys HFSS, Cadence Sigrity, and Mentor HyperLynx.", icon: <ShieldCheck className="w-6 h-6" /> },
    { title: "Tight Layout Integration", description: "Our SI engineers sit right next to our PCB layout team, allowing for real-time adjustments and constraint tuning.", icon: <Layers className="w-6 h-6" /> },
    { title: "High-Bandwidth Validation", description: "Our labs are equipped with 50GHz+ oscilloscopes and TDRs to prove that our simulations match physical reality.", icon: <Zap className="w-6 h-6" /> }
];

const SI_FAQ = [
    {
        question: "At what data rate does Signal Integrity become necessary?",
        answer: "As a rule of thumb, any digital signal exceeding 1 Gbps, or any memory interface faster than DDR3, absolutely requires formal SI simulation. At 10 Gbps and above, even a poorly designed via can completely close the data eye."
    },
    {
        question: "What is an IBIS-AMI model?",
        answer: "IBIS Algorithmic Modeling Interface (AMI) models simulate the complex equalization (TX FFE, RX CTLE/DFE) happening inside the silicon. They are essential for simulating multi-gigabit links like PCIe Gen 5 or 112G Ethernet."
    },
    {
        question: "Can you fix an existing board that is failing bit error rate (BER) tests?",
        answer: "Yes. We can take your layout files, run an extraction, pinpoint the impedance mismatch or crosstalk aggressor, and provide specific layout modifications to fix it."
    },
    {
        question: "Why do we need Power Integrity (PI) if we have enough capacitors?",
        answer: "Adding too many capacitors randomly can actually create anti-resonances (impedance spikes) at certain frequencies. PI simulation tells you the exact value, quantity, and placement of capacitors needed to hit a flat target impedance."
    }
];

const SI_ABOUT_METRICS = {
    titlePart1: "About",
    titlePart2: "Signal Integrity Analysis",
    description: "U&WE treats every high-speed trace as an analog transmission line. We use advanced mathematics and 3D electromagnetic solvers to ensure your multi-gigabit telecom signals arrive intact, jitter-free, and perfectly timed.",
    metrics: [
        { tag: "DATA RATE", value: "112G+", label: "PAM4 Serial Links", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" },
        { tag: "IMPEDANCE", value: "±5%", label: "Tolerance Control", image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800&auto=format&fit=crop" },
        { tag: "POWER", value: "1000A", label: "Core ASIC Delivery", image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800&auto=format&fit=crop" },
        { tag: "TOOLS", value: "HFSS", label: "3D Full-Wave Solvers", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" }
    ]
};

const SignalIntegrity = () => {
    return (
        <ServiceLayout 
            pageKey="signalIntegrity"
            hero={{
                title: "Signal & Power Integrity",
                description: "Advanced simulation and modeling to guarantee flawless data transmission on massive telecom backplanes and dense PCBs.",
                primaryButtonText: "Discuss Project",
                secondaryButtonText: "View Capabilities",
                image: heroImage
            }}
            aboutMetrics={SI_ABOUT_METRICS}
            subServices={SI_SUB_SERVICES}
            subServicesTitle={{ part1: "Core", part2: "Capabilities" }}
            advantages={SI_ADVANTAGES}
            advantagesTitle={{ part1: "Why Partner", part2: "With Us" }}
            faqs={SI_FAQ}
            portal={{
                portalImage: heroImage,
                gridImage: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2564&auto=format&fit=crop",
                collageImages: COLLAGE_IMAGES,
                features: SEQUENCE_FEATURES,
                aboutText: (
                    <p className="text-[clamp(1.1rem,2vw,2.2rem)] font-medium leading-[1.6] tracking-tight text-left text-white">
                        Eliminating jitter before fabrication.
                        <br className="hidden lg:block mt-2" />
                        We mathematically guarantee your high-speed links will work.
                    </p>
                )
            }}
            slider={{
                title: "Latest in Integrity Analysis",
                subtitle: "Insights from our SI/PI experts",
                cards: LATEST_INSIGHTS
            }}
            showcase={{
                features: SHOWCASE_FEATURES,
                backgroundText: "SIGNAL\nINTEGRITY"
            }}
        />
    );
};

export default SignalIntegrity;

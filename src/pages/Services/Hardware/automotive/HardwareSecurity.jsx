import React from 'react';
import ServiceLayout from '../../../../components/ServiceLayout';
import { ShieldCheck, Key, Lock, Activity, Server, FileText, Settings, Shield, Cpu } from 'lucide-react';
import heroImage from "../../../../assets/imagesss/automotive/HardwareSecurityModules(HSM).png";

const SEQUENCE_FEATURES = [
    { id: 1, title: "TARA Analysis", desc: "Performing Threat Analysis and Risk Assessment according to ISO/SAE 21434 to identify attack vectors." },
    { id: 2, title: "Architecture Design", desc: "Designing secure enclaves (TrustZone) and hardware-isolated cryptographic accelerators." },
    { id: 3, title: "Key Management", desc: "Developing secure manufacturing processes to inject root cryptographic keys into the SoC eFuses." },
    { id: 4, title: "Firmware Development", desc: "Writing the HSM firmware to handle Secure Boot, Secure Flash, and SecOC (Secure Onboard Communication)." },
    { id: 5, title: "Penetration Testing", desc: "Subjecting the hardware to glitching, differential power analysis (DPA), and fault injection attacks." },
    { id: 6, title: "UNECE R155 / R156", desc: "Providing the documentation required for vehicle type approval under the new European cybersecurity regulations." }
];

const COLLAGE_IMAGES = [
    { src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800", scaleIndex: 4, cls: "!-top-[30vh] !left-[5vw] !h-[30vh] !w-[35vw]" },
    { src: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800", scaleIndex: 5, cls: "!-top-[10vh] !-left-[25vw] !h-[45vh] !w-[20vw]" },
    { src: "https://images.unsplash.com/photo-1614064075525-452f36bc4ed8?q=80&w=800", scaleIndex: 6, cls: "!left-[27.5vw] !h-[25vh] !w-[25vw]" },
    { src: "https://images.unsplash.com/photo-1510511459019-5d55ad50de99?q=80&w=800", scaleIndex: 5, cls: "!top-[27.5vh] !left-[5vw] !h-[25vh] !w-[20vw]" },
    { src: "https://images.unsplash.com/photo-1618060855239-009c95eb3f04?q=80&w=800", scaleIndex: 6, cls: "!top-[27.5vh] !-left-[22.5vw] !h-[25vh] !w-[30vw]" },
    { src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800", scaleIndex: 8, cls: "!top-[22.5vh] !left-[25vw] !h-[15vh] !w-[15vw]" },
];

const SHOWCASE_FEATURES = [
    {
        id: "01",
        title: "Hardware Security Modules",
        description: "Integrating HSMs (EVITA Full/Medium/Light) directly onto the automotive MCU to isolate cryptographic operations.",
        points: ["EVITA standard", "Isolated CPU/RAM", "True Random Number Generator (TRNG)"],
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=80",
        color: "from-blue-500/20 to-purple-500/20"
    },
    {
        id: "02",
        title: "Secure Boot",
        description: "Implementing a chain of trust that verifies the digital signature of every piece of code before it is allowed to execute.",
        points: ["Root of Trust (RoT)", "eFuse blowing", "RSA / ECC verification"],
        image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80",
        color: "from-emerald-500/20 to-teal-500/20"
    },
    {
        id: "03",
        title: "Side-Channel Resistance",
        description: "Designing PCBs and power supplies that do not leak cryptographic keys through electromagnetic emissions or power fluctuations.",
        points: ["DPA Resistance", "Voltage glitching defense", "Clock jittering"],
        image: "https://images.unsplash.com/photo-1614064075525-452f36bc4ed8?w=800&auto=format&fit=crop&q=80",
        color: "from-orange-500/20 to-red-500/20"
    },
    {
        id: "04",
        title: "SecOC (Secure Onboard Communication)",
        description: "Configuring the AUTOSAR Crypto Stack to attach MACs (Message Authentication Codes) to critical CAN/Ethernet messages.",
        points: ["AES-128 CMAC", "Freshness values", "Replay attack prevention"],
        image: "https://images.unsplash.com/photo-1510511459019-5d55ad50de99?w=800&auto=format&fit=crop&q=80",
        color: "from-pink-500/20 to-rose-500/20"
    }
];

const LATEST_INSIGHTS = [
  {
    id: 1,
    tag: "Regulation",
    title: "Preparing for UNECE R155: What Tier-1s Need to Know",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    tag: "Hardware",
    title: "Defending Against Fault Injection (Glitching) Attacks on ECUs",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    tag: "AUTOSAR",
    title: "Optimizing SecOC for High-Load CAN FD Networks",
    image: "https://images.unsplash.com/photo-1614064075525-452f36bc4ed8?w=800&auto=format&fit=crop&q=80"
  }
];

const SECURITY_SUB_SERVICES = [
    { title: "HSM Firmware Development", description: "Writing the low-level code that runs inside the isolated Hardware Security Module, handling all AES/RSA/ECC operations.", icon: <Cpu className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=80" },
    { title: "TrustZone Integration", description: "Configuring ARM TrustZone to partition the main application processor into 'Secure' and 'Non-Secure' worlds.", icon: <Shield className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80" },
    { title: "Key Injection (Manufacturing)", description: "Designing the secure processes and JTAG scripts to inject symmetric and asymmetric keys during factory EOL testing.", icon: <Key className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1614064075525-452f36bc4ed8?w=800&auto=format&fit=crop&q=80" },
    { title: "Secure OTA Infrastructure", description: "Building the cryptographic pipelines required to sign firmware payloads and securely decrypt them on the vehicle.", icon: <Lock className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1510511459019-5d55ad50de99?w=800&auto=format&fit=crop&q=80" },
    { title: "Hardware Pen Testing", description: "Subjecting PCB designs to physical attacks (decapping, JTAG probing, clock glitching) to ensure the Root of Trust holds.", icon: <Activity className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1618060855239-009c95eb3f04?w=800&auto=format&fit=crop&q=80" },
    { title: "ISO/SAE 21434 Compliance", description: "Guiding organizations through the cybersecurity lifecycle, from TARA (Threat Analysis) to final homologation.", icon: <FileText className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80" }
];

const SECURITY_ADVANTAGES = [
    { title: "Hardware + Software", description: "Security cannot be added 'on top'. We design the PCB to protect against physical attacks, and the firmware to protect against logical ones.", icon: <Settings className="w-6 h-6" /> },
    { title: "Standards Compliant", description: "We sit on the working groups. Our processes are deeply aligned with ISO/SAE 21434 and the new UNECE regulations.", icon: <ShieldCheck className="w-6 h-6" /> },
    { title: "Automotive Cryptography", description: "Standard IT cryptography is too slow for cars. We know how to optimize AES-128 CMAC to meet 1ms CAN bus deadlines.", icon: <Activity className="w-6 h-6" /> },
    { title: "Foundry Level Knowledge", description: "We understand how eFuses, PUFs (Physical Unclonable Functions), and TRNGs work at the silicon level.", icon: <Cpu className="w-6 h-6" /> }
];

const SECURITY_FAQ = [
    {
        question: "What is a Hardware Security Module (HSM)?",
        answer: "It's essentially a tiny, highly secure computer inside the main automotive computer. It has its own processor and memory. Even if a hacker compromises the main processor, they cannot access the keys stored inside the HSM."
    },
    {
        question: "What is UNECE R155?",
        answer: "It is a new, binding regulation. Starting in 2024, if a vehicle manufacturer cannot prove they have a certified Cyber Security Management System (CSMS), they cannot legally sell cars in Europe, Japan, or Korea."
    },
    {
        question: "How do you protect against physical attacks?",
        answer: "If someone physically steals an ECU, they might try to 'glitch' the power supply to bypass a password check, or read the electromagnetic emissions (Side-Channel Analysis) to steal a key. We design the PCB layout and power filters to block these attacks."
    },
    {
        question: "What is SecOC?",
        answer: "Secure Onboard Communication. In the past, any ECU could send a 'BRAKE!' command on the CAN bus. SecOC attaches a cryptographic signature to the message, proving it came from the actual brake pedal and isn't a hacker's replay."
    }
];

const SECURITY_ABOUT_METRICS = {
    titlePart1: "About",
    titlePart2: "Automotive Security",
    description: "U&WE locks down the software-defined vehicle. We integrate Hardware Security Modules, establish unshakeable Roots of Trust, and ensure your architectures comply with stringent global cybersecurity regulations.",
    metrics: [
        { tag: "STANDARD", value: "ISO 21434", label: "Cybersecurity Eng.", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop" },
        { tag: "REGULATION", value: "UNECE R155", label: "Type Approval", image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800&auto=format&fit=crop" },
        { tag: "HARDWARE", value: "EVITA", label: "HSM Architectures", image: "https://images.unsplash.com/photo-1614064075525-452f36bc4ed8?q=80&w=800&auto=format&fit=crop" },
        { tag: "FEATURES", value: "SecOC / OTA", label: "Secure Communications", image: "https://images.unsplash.com/photo-1510511459019-5d55ad50de99?q=80&w=800&auto=format&fit=crop" }
    ]
};

const HardwareSecurity = () => {
    return (
        <ServiceLayout 
            pageKey="hardwareSecurity"
            hero={{
                title: "Hardware Security Modules (HSM)",
                description: "Engineering secure enclaves, implementing Secure Boot, and ensuring ISO/SAE 21434 compliance against physical and logical attacks.",
                primaryButtonText: "Discuss Project",
                secondaryButtonText: "View Capabilities"
            }}
            aboutMetrics={SECURITY_ABOUT_METRICS}
            subServices={SECURITY_SUB_SERVICES}
            subServicesTitle={{ part1: "Core", part2: "Capabilities" }}
            advantages={SECURITY_ADVANTAGES}
            advantagesTitle={{ part1: "Why Partner", part2: "With Us" }}
            faqs={SECURITY_FAQ}
            portal={{
                portalImage: heroImage,
                gridImage: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=2564&auto=format&fit=crop",
                collageImages: COLLAGE_IMAGES,
                features: SEQUENCE_FEATURES,
                aboutText: (
                    <p className="text-[clamp(1.1rem,2vw,2.2rem)] font-medium leading-[1.6] tracking-tight text-left text-white">
                        Fortifying the connected car.
                        <br className="hidden lg:block mt-2" />
                        We engineer security directly into the silicon and PCB.
                    </p>
                )
            }}
            slider={{
                title: "Latest in Security",
                subtitle: "Insights from our security researchers",
                cards: LATEST_INSIGHTS
            }}
            showcase={{
                features: SHOWCASE_FEATURES,
                backgroundText: "CYBERSEC"
            }}
        />
    );
};

export default HardwareSecurity;

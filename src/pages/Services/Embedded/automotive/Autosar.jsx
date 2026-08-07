import React from 'react';
import ServiceLayout from '../../../../components/ServiceLayout';
import { Cpu, Settings, Activity, ShieldCheck, Share2, Target, Workflow, Server, Zap, Database } from 'lucide-react';
import heroImage from "../../../../assets/imagesss/automotive/autosar(classic&adaptive).png";

const SEQUENCE_FEATURES = [
    { id: 1, title: "Architecture Design", desc: "Defining Software Components (SWCs), Runnables, and the Virtual Function Bus (VFB) based on OEM requirements." },
    { id: 2, title: "BSW Configuration", desc: "Configuring the Basic Software modules (OS, ComM, NvM, Dem) using tools like Vector DaVinci or EB tresos." },
    { id: 3, title: "RTE Generation", desc: "Generating the Runtime Environment (RTE) to seamlessly bridge the Application layer with the BSW." },
    { id: 4, title: "MCAL Development", desc: "Writing custom Microcontroller Abstraction Layer drivers for proprietary silicon or specialized peripherals." },
    { id: 5, title: "Integration Testing", desc: "Executing software-in-the-loop (SIL) and hardware-in-the-loop (HIL) testing for full stack validation." },
    { id: 6, title: "OEM Delivery", desc: "Packaging the final arxml files, object code, and safety manuals for final OEM vehicle integration." }
];

const COLLAGE_IMAGES = [
    { src: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800", scaleIndex: 4, cls: "!-top-[30vh] !left-[5vw] !h-[30vh] !w-[35vw]" },
    { src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800", scaleIndex: 5, cls: "!-top-[10vh] !-left-[25vw] !h-[45vh] !w-[20vw]" },
    { src: "https://images.unsplash.com/photo-1503376713197-285a4a4ebf32?q=80&w=800", scaleIndex: 6, cls: "!left-[27.5vw] !h-[25vh] !w-[25vw]" },
    { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800", scaleIndex: 5, cls: "!top-[27.5vh] !left-[5vw] !h-[25vh] !w-[20vw]" },
    { src: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800", scaleIndex: 6, cls: "!top-[27.5vh] !-left-[22.5vw] !h-[25vh] !w-[30vw]" },
    { src: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800", scaleIndex: 8, cls: "!top-[22.5vh] !left-[25vw] !h-[15vh] !w-[15vw]" },
];

const SHOWCASE_FEATURES = [
    {
        id: "01",
        title: "AUTOSAR Classic Platform",
        description: "Hard real-time, statically configured operating systems for traditional ECUs like Engine Control or Braking Systems.",
        points: ["OSEK/VDX OS", "Diagnostic Stack (Dem, Dcm)", "Network Management (NM)"],
        image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&auto=format&fit=crop&q=80",
        color: "from-blue-500/20 to-purple-500/20"
    },
    {
        id: "02",
        title: "AUTOSAR Adaptive Platform",
        description: "POSIX-based, dynamically linked systems for high-performance computing required in autonomous driving.",
        points: ["Service-Oriented Architecture (SOA)", "SOME/IP", "Over-The-Air (OTA) Updates"],
        image: "https://images.unsplash.com/photo-1503376713197-285a4a4ebf32?w=800&auto=format&fit=crop&q=80",
        color: "from-emerald-500/20 to-teal-500/20"
    },
    {
        id: "03",
        title: "MCAL Development",
        description: "Developing the lowest layer of the stack that interacts directly with the microcontroller hardware registers.",
        points: ["Complex Device Drivers (CDD)", "CAN / LIN / FlexRay drivers", "Multicore synchronization"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
        color: "from-orange-500/20 to-red-500/20"
    },
    {
        id: "04",
        title: "Migration & Legacy Porting",
        description: "Transitioning legacy bare-metal or proprietary RTOS codebases into standard AUTOSAR-compliant architectures.",
        points: ["Arxml generation", "RTE wrapping", "Non-AUTOSAR integration"],
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=80",
        color: "from-pink-500/20 to-rose-500/20"
    }
];

const LATEST_INSIGHTS = [
  {
    id: 1,
    tag: "Adaptive",
    title: "The Shift from Classic to Adaptive AUTOSAR in Zonal Architectures",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    tag: "Security",
    title: "Implementing SecOC (Secure Onboard Communication) in the Vehicle Network",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    tag: "Migration",
    title: "Strategies for Porting Legacy C Code to AUTOSAR Software Components",
    image: "https://images.unsplash.com/photo-1503376713197-285a4a4ebf32?w=800&auto=format&fit=crop&q=80"
  }
];

const AUTOSAR_SUB_SERVICES = [
    { title: "Application Layer Design", description: "Authoring portable Software Components (SWCs) and defining their interfaces via standardized arxml files.", icon: <Workflow className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&auto=format&fit=crop&q=80" },
    { title: "BSW Integration", description: "Configuring memory (NvM), diagnostics (Dem/Dcm), and communication (Com) stacks for specific OEM demands.", icon: <Settings className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&auto=format&fit=crop&q=80" },
    { title: "Complex Device Drivers", description: "Writing CDDs to handle custom sensors, proprietary ASICs, or timing-critical interrupts that bypass the standard stack.", icon: <Cpu className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1503376713197-285a4a4ebf32?w=800&auto=format&fit=crop&q=80" },
    { title: "Network Management", description: "Implementing CAN FD, Ethernet (SOME/IP), and LIN communication stacks with strict OSEK NM rules.", icon: <Share2 className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80" },
    { title: "Multicore OS Setup", description: "Distributing OS tasks across heterogeneous multicore SoCs while maintaining spinlocks and memory protection (MPU).", icon: <Server className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=80" },
    { title: "Cybersecurity (SecOC)", description: "Securing in-vehicle networks by configuring the Crypto Stack (CSM/CryIf) and Secure Onboard Communication.", icon: <ShieldCheck className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80" }
];

const AUTOSAR_ADVANTAGES = [
    { title: "Tool Agnostic", description: "We hold deep expertise across the entire ecosystem, including Vector DaVinci, Elektrobit tresos, and ETAS ISOLAR.", icon: <Settings className="w-6 h-6" /> },
    { title: "Hardware Syngery", description: "Because we design hardware too, we excel at the MCAL layer, intimately understanding the Infineon AURIX or NXP S32 registers.", icon: <Cpu className="w-6 h-6" /> },
    { title: "OEM Compliance", description: "We understand that every OEM (VW, Ford, GM) implements AUTOSAR slightly differently. We tailor the stack to pass their specific gate reviews.", icon: <Target className="w-6 h-6" /> },
    { title: "Functional Safety", description: "Our AUTOSAR development strictly adheres to ISO 26262 ASIL D standards, including exhaustive MISRA C/C++ compliance.", icon: <ShieldCheck className="w-6 h-6" /> }
];

const AUTOSAR_FAQ = [
    {
        question: "What is the main benefit of AUTOSAR?",
        answer: "Hardware abstraction. In the past, software was tightly coupled to the microcontroller. AUTOSAR standardizes the interfaces, allowing OEMs to reuse application software (like an ABS algorithm) across entirely different hardware platforms."
    },
    {
        question: "What is the difference between Classic and Adaptive AUTOSAR?",
        answer: "Classic is for deeply embedded, hard-real-time ECUs (like engine control) written in C. Adaptive is for high-performance computing (like ADAS) running POSIX OSs (like Linux/QNX) and is primarily written in C++ with dynamic service updates."
    },
    {
        question: "What is the RTE?",
        answer: "The Runtime Environment. It acts as the 'glue' between the application software and the Basic Software (BSW). The RTE is auto-generated based on the XML configuration of the system."
    },
    {
        question: "Can you help migrate our legacy codebase to AUTOSAR?",
        answer: "Yes. We wrap legacy C code in AUTOSAR 'Complex Device Drivers' or standard SWCs, gradually transitioning the architecture while maintaining immediate functional parity."
    }
];

const AUTOSAR_ABOUT_METRICS = {
    titlePart1: "About",
    titlePart2: "AUTOSAR Development",
    description: "U&WE engineers the software foundation of the modern vehicle. We architect, configure, and integrate AUTOSAR stacks that allow Tier-1s and OEMs to build scalable, safe, and easily upgradable automotive systems.",
    metrics: [
        { tag: "PLATFORMS", value: "Classic & Adaptive", label: "Full Spectrum", image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800&auto=format&fit=crop" },
        { tag: "NETWORKS", value: "CAN/Eth", label: "SOME/IP & DoIP", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800&auto=format&fit=crop" },
        { tag: "SAFETY", value: "ASIL D", label: "ISO 26262 Compliant", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" },
        { tag: "SILICON", value: "AURIX/S32", label: "Deep MCAL Expertise", image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800&auto=format&fit=crop" }
    ]
};

const Autosar = () => {
    return (
        <ServiceLayout 
            pageKey="autosar"
            hero={{
                title: "AUTOSAR Development",
                description: "End-to-end AUTOSAR Classic and Adaptive solutions, from MCAL driver development to complete BSW configuration and OEM integration.",
                primaryButtonText: "Discuss Project",
                secondaryButtonText: "View Capabilities",
                image: heroImage
            }}
            aboutMetrics={AUTOSAR_ABOUT_METRICS}
            subServices={AUTOSAR_SUB_SERVICES}
            subServicesTitle={{ part1: "Core", part2: "Capabilities" }}
            advantages={AUTOSAR_ADVANTAGES}
            advantagesTitle={{ part1: "Why Partner", part2: "With Us" }}
            faqs={AUTOSAR_FAQ}
            portal={{
                portalImage: heroImage,
                gridImage: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2564&auto=format&fit=crop",
                collageImages: COLLAGE_IMAGES,
                features: SEQUENCE_FEATURES,
                aboutText: (
                    <p className="text-[clamp(1.1rem,2vw,2.2rem)] font-medium leading-[1.6] tracking-tight text-left text-white">
                        Standardizing vehicle software.
                        <br className="hidden lg:block mt-2" />
                        We build the architectures that drive the future of mobility.
                    </p>
                )
            }}
            slider={{
                title: "Latest in AUTOSAR",
                subtitle: "Insights from our automotive architects",
                cards: LATEST_INSIGHTS
            }}
            showcase={{
                features: SHOWCASE_FEATURES,
                backgroundText: "AUTOSAR"
            }}
        />
    );
};

export default Autosar;

import React from 'react';
import ServiceLayout from '../../../../components/ServiceLayout';
import { Cpu, Settings, Activity, ShieldCheck, Zap, Layers, Network, Server } from 'lucide-react';
import heroImage from "../../../../assets/imagesss/automotive/AutomotiveECUs&DomainControllers.png";

const SEQUENCE_FEATURES = [
    { id: 1, title: "Zonal Architecture Planning", desc: "Partitioning vehicle functions into physical zones to minimize wiring harness weight and cost." },
    { id: 2, title: "SoC Selection", desc: "Benchmarking and selecting high-performance compute platforms (NVIDIA Orin, Qualcomm Snapdragon Ride, NXP S32)." },
    { id: 3, title: "High-Speed Interconnects", desc: "Designing PCIe Gen4 and Automotive Ethernet (1000BASE-T1) networks to link domain controllers." },
    { id: 4, title: "Power Supply Design", desc: "Engineering multi-phase buck/boost converters capable of handling load dumps and cold cranks." },
    { id: 5, title: "Thermal Management", desc: "Conducting FloTHERM simulations to design passive heat sinks and active liquid cooling plates for 100W+ SoCs." },
    { id: 6, title: "Prototyping & Bring-Up", desc: "Manufacturing A-sample prototypes and performing intensive board bring-up in our hardware labs." }
];

const COLLAGE_IMAGES = [
    { src: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800", scaleIndex: 4, cls: "!-top-[30vh] !left-[5vw] !h-[30vh] !w-[35vw]" },
    { src: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800", scaleIndex: 5, cls: "!-top-[10vh] !-left-[25vw] !h-[45vh] !w-[20vw]" },
    { src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800", scaleIndex: 6, cls: "!left-[27.5vw] !h-[25vh] !w-[25vw]" },
    { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800", scaleIndex: 5, cls: "!top-[27.5vh] !left-[5vw] !h-[25vh] !w-[20vw]" },
    { src: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800", scaleIndex: 6, cls: "!top-[27.5vh] !-left-[22.5vw] !h-[25vh] !w-[30vw]" },
    { src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800", scaleIndex: 8, cls: "!top-[22.5vh] !left-[25vw] !h-[15vh] !w-[15vw]" },
];

const SHOWCASE_FEATURES = [
    {
        id: "01",
        title: "Domain Controllers",
        description: "Consolidating dozens of distributed ECUs into single, powerful domain controllers for Body, Chassis, and Powertrain.",
        points: ["NXP S32G / S32Z", "Infineon AURIX TC3xx", "Hardware consolidation"],
        image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&auto=format&fit=crop&q=80",
        color: "from-blue-500/20 to-purple-500/20"
    },
    {
        id: "02",
        title: "ADAS Compute Platforms",
        description: "Designing the massive compute hardware required to process terabytes of sensor data for Level 3/4 autonomy.",
        points: ["NVIDIA Drive Orin", "Qualcomm Snapdragon Ride", "Liquid cooling"],
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=80",
        color: "from-emerald-500/20 to-teal-500/20"
    },
    {
        id: "03",
        title: "Zonal Gateways",
        description: "Engineering the localized hubs that connect legacy CAN/LIN sensors to the high-speed Ethernet backbone.",
        points: ["1000BASE-T1 Ethernet", "CAN FD Routing", "TSN (Time-Sensitive Networking)"],
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
        color: "from-orange-500/20 to-red-500/20"
    },
    {
        id: "04",
        title: "Smart Smart Actuators",
        description: "Integrating intelligent motor control and sensing directly onto the physical actuator mechanisms.",
        points: ["Mechatronics", "BLDC Motor Control", "ASIL D compliant"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
        color: "from-pink-500/20 to-rose-500/20"
    }
];

const LATEST_INSIGHTS = [
  {
    id: 1,
    tag: "Architecture",
    title: "The Transition from Domain to Zonal Vehicle Architectures",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    tag: "Thermal",
    title: "Liquid vs. Passive Cooling for 200W+ ADAS Domain Controllers",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    tag: "Ethernet",
    title: "Implementing Time-Sensitive Networking (TSN) on Automotive Ethernet",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80"
  }
];

const ECU_SUB_SERVICES = [
    { title: "High-Speed Digital Design", description: "Routing multi-gigabit interfaces like LPDDR5, UFS, PCIe Gen4, and MIPI CSI-2 on high-layer-count HDI boards.", icon: <Layers className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&auto=format&fit=crop&q=80" },
    { title: "Automotive Ethernet", description: "Designing 100BASE-T1 and 1000BASE-T1 networks with rigorous Signal Integrity analysis to prevent bit errors.", icon: <Network className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=80" },
    { title: "Power Distribution", description: "Engineering robust PMIC architectures to provide clean, sequenced power to massive heterogeneous SoCs.", icon: <Zap className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80" },
    { title: "Functional Safety H/W", description: "Implementing lockstep dual-core processors, watchdog timers, and redundant power supplies to meet ASIL D.", icon: <ShieldCheck className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80" },
    { title: "Mechanical & Thermal", description: "Designing die-cast aluminum enclosures that meet IP6K9K ingress protection while dissipating massive heat loads.", icon: <Settings className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80" },
    { title: "A/B Sample Prototyping", description: "Rapidly turning CAD files into physical, testable ECUs in our state-of-the-art hardware labs.", icon: <Cpu className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&auto=format&fit=crop&q=80" }
];

const ECU_ADVANTAGES = [
    { title: "Silicon Partnerships", description: "We are early-access hardware partners with NVIDIA, Qualcomm, and NXP, giving us access to undocumented reference designs.", icon: <Server className="w-6 h-6" /> },
    { title: "Signal Integrity Mastery", description: "As cars become rolling servers, we apply data-center grade Signal and Power Integrity (SI/PI) analysis to automotive boards.", icon: <Activity className="w-6 h-6" /> },
    { title: "Design for Manufacturing", description: "We design boards that don't just work in the lab, but can be reliably manufactured in the millions by Tier-1 suppliers.", icon: <Layers className="w-6 h-6" /> },
    { title: "Automotive Grade", description: "We strictly specify AEC-Q100/200 qualified components, ensuring survival in -40°C to +125°C environments.", icon: <ShieldCheck className="w-6 h-6" /> }
];

const ECU_FAQ = [
    {
        question: "What is Zonal Architecture?",
        answer: "Historically, cars had 100+ separate ECUs connected by miles of heavy wire. Zonal architecture replaces this with a few powerful 'Zone Controllers' (front, rear, cabin) connected via high-speed Ethernet to a central supercomputer. This drastically reduces weight and cost."
    },
    {
        question: "Why do ADAS controllers need liquid cooling?",
        answer: "Processors like the NVIDIA Orin can consume over 100 watts when running complex neural networks. Passive air cooling is insufficient in a hot car engine bay or trunk, requiring active liquid cooling loops integrated into the ECU enclosure."
    },
    {
        question: "What is an A-Sample?",
        answer: "It's the first physical prototype of an ECU. It proves the basic functionality on the bench but isn't packaged for the vehicle. B-Samples are form-factor accurate, and C-Samples are built using the final production tooling."
    },
    {
        question: "How do you handle automotive power fluctuations?",
        answer: "Cars have dirty power. When the starter motor cranks, voltage drops to 4V (Cold Crank). If the battery disconnects while the alternator is running, voltage spikes to 40V+ (Load Dump). We design custom power supplies that ride through these events flawlessly."
    }
];

const ECU_ABOUT_METRICS = {
    titlePart1: "About",
    titlePart2: "Automotive ECUs",
    description: "U&WE engineers the physical brain of the vehicle. We design the high-performance, functionally safe domain controllers and zonal gateways that power the software-defined vehicle era.",
    metrics: [
        { tag: "COMPUTE", value: "1000+ TOPS", label: "ADAS Supercomputers", image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800&auto=format&fit=crop" },
        { tag: "NETWORK", value: "Gigabit", label: "Automotive Ethernet", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop" },
        { tag: "ENVIRONMENT", value: "AEC-Q", label: "-40°C to +125°C", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" },
        { tag: "PACKAGING", value: "IP6K9K", label: "Harsh Environment", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" }
    ]
};

const AutomotiveEcu = () => {
    return (
        <ServiceLayout 
            pageKey="automotiveEcu"
            hero={{
                title: "Automotive ECUs & Domain Controllers",
                description: "Hardware engineering for central compute platforms, zonal gateways, and ASIL D compliant domain controllers.",
                primaryButtonText: "Discuss Project",
                secondaryButtonText: "View Capabilities",
                image: heroImage
            }}
            aboutMetrics={ECU_ABOUT_METRICS}
            subServices={ECU_SUB_SERVICES}
            subServicesTitle={{ part1: "Core", part2: "Capabilities" }}
            advantages={ECU_ADVANTAGES}
            advantagesTitle={{ part1: "Why Partner", part2: "With Us" }}
            faqs={ECU_FAQ}
            portal={{
                portalImage: heroImage,
                gridImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2564&auto=format&fit=crop",
                collageImages: COLLAGE_IMAGES,
                features: SEQUENCE_FEATURES,
                aboutText: (
                    <p className="text-[clamp(1.1rem,2vw,2.2rem)] font-medium leading-[1.6] tracking-tight text-left text-white">
                        The hardware behind the software-defined vehicle.
                        <br className="hidden lg:block mt-2" />
                        We engineer ECUs that survive the harshest environments.
                    </p>
                )
            }}
            slider={{
                title: "Latest in ECU Hardware",
                subtitle: "Insights from our hardware architects",
                cards: LATEST_INSIGHTS
            }}
            showcase={{
                features: SHOWCASE_FEATURES,
                backgroundText: "HARDWARE"
            }}
        />
    );
};

export default AutomotiveEcu;

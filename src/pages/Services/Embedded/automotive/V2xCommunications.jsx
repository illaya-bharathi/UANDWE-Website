import React from 'react';
import ServiceLayout from '../../../../components/ServiceLayout';
import { Wifi, Radio, ShieldCheck, Activity, Globe, MapPin, Zap, Network } from 'lucide-react';
import heroImage from "../../../../assets/imagesss/automotive/v2xcommunications.png";

const SEQUENCE_FEATURES = [
    { id: 1, title: "Hardware Integration", desc: "Interfacing the V2X software stack with DSRC (802.11p) or C-V2X (3GPP PC5) radio chipsets." },
    { id: 2, title: "Stack Configuration", desc: "Configuring the IEEE 1609.x (WAVE) or ETSI ITS-G5 networking protocols for the specific region." },
    { id: 3, title: "Security Credential Management", desc: "Implementing the SCMS/PKI infrastructure to sign and verify thousands of messages per second." },
    { id: 4, title: "Message Encoding", desc: "Encoding and decoding ASN.1 formatted messages like BSM (Basic Safety Message) or CAM/DENM." },
    { id: 5, title: "Application Logic", desc: "Writing the high-level algorithms for Forward Collision Warning (FCW) or Intersection Movement Assist (IMA)." },
    { id: 6, title: "Field Testing", desc: "Taking the On-Board Unit (OBU) into live traffic to validate packet delivery ratios against Roadside Units (RSUs)." }
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
        title: "C-V2X (Cellular V2X)",
        description: "Implementing 3GPP Release 14/15 PC5 side-link communications for direct vehicle-to-vehicle communication without a cellular network.",
        points: ["PC5 Sidelink", "LTE-V2X / 5G-V2X", "High bandwidth"],
        image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&auto=format&fit=crop&q=80",
        color: "from-blue-500/20 to-purple-500/20"
    },
    {
        id: "02",
        title: "DSRC / ETSI ITS-G5",
        description: "Developing on the mature IEEE 802.11p Wi-Fi based standard, heavily deployed in European and Asian smart city infrastructure.",
        points: ["IEEE 1609 WAVE", "Low latency", "RSU integration"],
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
        color: "from-emerald-500/20 to-teal-500/20"
    },
    {
        id: "03",
        title: "Security Credential Management System",
        description: "Managing the complex cryptographic certificates required to ensure that incoming safety messages are actually from legitimate vehicles.",
        points: ["ECDSA Signatures", "Pseudonym certificates", "Hardware Security Modules"],
        image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80",
        color: "from-orange-500/20 to-red-500/20"
    },
    {
        id: "04",
        title: "Day 1 & Day 2 Applications",
        description: "Writing the application logic for safety warnings (Day 1) and cooperative driving/platooning (Day 2).",
        points: ["Emergency Electronic Brake Light (EEBL)", "Intersection Movement Assist (IMA)", "Platooning"],
        image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&auto=format&fit=crop&q=80",
        color: "from-pink-500/20 to-rose-500/20"
    }
];

const LATEST_INSIGHTS = [
  {
    id: 1,
    tag: "C-V2X",
    title: "The Transition from DSRC to C-V2X in the US Market",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    tag: "Security",
    title: "How to Verify 2,000 SCMS Certificates Per Second on Edge Hardware",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    tag: "5G",
    title: "5G NR-V2X: Enabling Cooperative Autonomous Driving",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80"
  }
];

const V2X_SUB_SERVICES = [
    { title: "Radio Stack Integration", description: "Integrating Qualcomm (e.g., 9150 C-V2X) or Autotalks chipsets with the host processor running the V2X stack.", icon: <Radio className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&auto=format&fit=crop&q=80" },
    { title: "Protocol Stack Customization", description: "Adapting off-the-shelf stacks (like Marben or Commsignia) to fit within your specific OS and hardware constraints.", icon: <Network className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80" },
    { title: "ASN.1 Encoding/Decoding", description: "Writing highly optimized parsers for ASN.1 UPER (Unaligned Packed Encoding Rules) to process CAM/DENM/BSM messages.", icon: <Zap className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80" },
    { title: "High-Precision Positioning", description: "Fusing GNSS/GPS data with RTK (Real-Time Kinematic) corrections and IMU dead-reckoning to achieve sub-lane level accuracy.", icon: <MapPin className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&auto=format&fit=crop&q=80" },
    { title: "SCMS & PKI Implementation", description: "Developing the secure enclave software to request, store, and utilize pseudonym certificates for message signing.", icon: <ShieldCheck className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1503376713197-285a4a4ebf32?w=800&auto=format&fit=crop&q=80" },
    { title: "V2X Application Development", description: "Developing the actual safety use-cases (V2V, V2I, V2P) that interpret the received messages and issue warnings to the driver.", icon: <Globe className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=80" }
];

const V2X_ADVANTAGES = [
    { title: "Global Standard Expertise", description: "We intimately understand the differences between US (WAVE/IEEE), EU (ETSI ITS-G5), and Chinese (CSAE) standards.", icon: <Globe className="w-6 h-6" /> },
    { title: "Silicon Partnerships", description: "Deep integration experience with the leading V2X baseband modems from Qualcomm, Autotalks, and NXP.", icon: <Activity className="w-6 h-6" /> },
    { title: "Cryptographic Optimization", description: "A vehicle receives thousands of V2X messages a second. We optimize the ECDSA verification routines to prevent the CPU from bottlenecking.", icon: <ShieldCheck className="w-6 h-6" /> },
    { title: "End-to-End Delivery", description: "From the antenna RF design to the application layer algorithms, we can build the entire On-Board Unit (OBU).", icon: <Wifi className="w-6 h-6" /> }
];

const V2X_FAQ = [
    {
        question: "What is the difference between DSRC and C-V2X?",
        answer: "DSRC is based on Wi-Fi technology (802.11p) and has been in development for 20 years. C-V2X uses cellular technology (LTE/5G) but can operate 'direct' (PC5) without a cell tower. C-V2X generally offers better range and is becoming the dominant standard globally."
    },
    {
        question: "Why do we need V2X if we have radar and cameras?",
        answer: "Sensors require 'line of sight'. V2X allows a vehicle to 'see' around corners. If a car three vehicles ahead slams on its brakes, V2X broadcasts that instantly, long before your radar can detect the slow down."
    },
    {
        question: "How is V2X kept secure?",
        answer: "Using a Security Credential Management System (SCMS). Vehicles are issued thousands of 'pseudonym' certificates. They sign outgoing messages with these and change them frequently to prevent tracking, ensuring messages are authentic but anonymous."
    },
    {
        question: "What are Day 1 and Day 2 applications?",
        answer: "Day 1 applications are basic safety warnings (e.g., 'Warning: hard braking ahead'). Day 2 applications involve cooperative driving (e.g., platooning, or negotiating who goes first at a 4-way stop) and require much stricter latency and reliability."
    }
];

const V2X_ABOUT_METRICS = {
    titlePart1: "About",
    titlePart2: "V2X Communications",
    description: "U&WE connects vehicles to their environment. We engineer the complex radio stacks, cryptography, and application software required for vehicles to talk to each other (V2V) and smart city infrastructure (V2I) in real-time.",
    metrics: [
        { tag: "STANDARDS", value: "C-V2X/DSRC", label: "Global Compatibility", image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800&auto=format&fit=crop" },
        { tag: "LATENCY", value: "< 20ms", label: "Ultra-Low Latency", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" },
        { tag: "SECURITY", value: "SCMS", label: "PKI Infrastructure", image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800&auto=format&fit=crop" },
        { tag: "POSITIONING", value: "< 10cm", label: "RTK GNSS Fusion", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800&auto=format&fit=crop" }
    ]
};

const V2xCommunications = () => {
    return (
        <ServiceLayout 
            pageKey="v2xCommunications"
            hero={{
                title: "V2X Communications",
                description: "Integrating C-V2X and DSRC software stacks for cooperative driving, including SCMS security and Day 1 safety applications.",
                primaryButtonText: "Discuss Project",
                secondaryButtonText: "View Capabilities",
                image: heroImage
            }}
            aboutMetrics={V2X_ABOUT_METRICS}
            subServices={V2X_SUB_SERVICES}
            subServicesTitle={{ part1: "Core", part2: "Capabilities" }}
            advantages={V2X_ADVANTAGES}
            advantagesTitle={{ part1: "Why Partner", part2: "With Us" }}
            faqs={V2X_FAQ}
            portal={{
                portalImage: heroImage,
                gridImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2564&auto=format&fit=crop",
                collageImages: COLLAGE_IMAGES,
                features: SEQUENCE_FEATURES,
                aboutText: (
                    <p className="text-[clamp(1.1rem,2vw,2.2rem)] font-medium leading-[1.6] tracking-tight text-left text-white">
                        Seeing around corners.
                        <br className="hidden lg:block mt-2" />
                        We engineer the connected tissue of autonomous driving.
                    </p>
                )
            }}
            slider={{
                title: "Latest in V2X",
                subtitle: "Insights from our connectivity engineers",
                cards: LATEST_INSIGHTS
            }}
            showcase={{
                features: SHOWCASE_FEATURES,
                backgroundText: "CONNECTED"
            }}
        />
    );
};

export default V2xCommunications;

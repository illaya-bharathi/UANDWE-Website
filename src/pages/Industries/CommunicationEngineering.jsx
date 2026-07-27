import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';
import telecomImg from '../../assets/images/telecom.png';

const SEQUENCE_FEATURES = [
    { id: 1, title: "5G & 6G Wireless", desc: "Next-gen cellular protocol development, ORAN, and RAN software." },
    { id: 2, title: "Optical Networking", desc: "High-speed optical transport, DWDM, and photonics signal processing." },
    { id: 3, title: "Protocol Stacks", desc: "Custom L2/L3 protocol stack implementation, optimization, and testing." },
    { id: 4, title: "Network Virtualization", desc: "NFV, SDN, and cloud-native network functions (CNF) architecture." },
    { id: 5, title: "Satellite & RF Systems", desc: "NTN, satellite modem firmware, and phased array beamforming algorithms." },
    { id: 6, title: "Carrier Compliance", desc: "Rigorous interoperability and carrier acceptance testing protocols." }
];

const COLLAGE_IMAGES = [
    { src: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800", scaleIndex: 4, cls: "!-top-[30vh] !left-[5vw] !h-[30vh] !w-[35vw]" },
    { src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800", scaleIndex: 5, cls: "!-top-[10vh] !-left-[25vw] !h-[45vh] !w-[20vw]" },
    { src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800", scaleIndex: 6, cls: "!left-[27.5vw] !h-[25vh] !w-[25vw]" },
    { src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800", scaleIndex: 5, cls: "!top-[27.5vh] !left-[5vw] !h-[25vh] !w-[20vw]" },
    { src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800", scaleIndex: 6, cls: "!top-[27.5vh] !-left-[22.5vw] !h-[25vh] !w-[30vw]" },
    { src: "https://images.unsplash.com/photo-1520869578617-557561d7b114?q=80&w=800", scaleIndex: 8, cls: "!top-[22.5vh] !left-[25vw] !h-[15vh] !w-[15vw]" },
];

const SHOWCASE_FEATURES = [
    {
        id: "01",
        title: "5G / ORAN Infrastructure",
        description: "Designing open radio access networks (O-RAN), DU/CU software stacks, and massive MIMO beamforming algorithms for global telecommunication carriers.",
        points: ["O-RAN Alliance Architecture", "CU / DU Protocol Stacks", "Massive MIMO Algorithms"],
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format&fit=crop&q=80",
        color: "from-blue-500/20 to-indigo-500/20"
    },
    {
        id: "02",
        title: "Optical & Satellite Communications",
        description: "Developing firmware and DSP pipelines for ultra-high-speed coherent optical links and Non-Terrestrial Network (NTN) satellite communication modems.",
        points: ["Coherent Optical DSP", "LEO / GEO Modem Firmware", "Phased Array Beamsteering"],
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80",
        color: "from-cyan-500/20 to-teal-500/20"
    },
    {
        id: "03",
        title: "Network Function Virtualization (NFV)",
        description: "Transforming legacy hardware appliances into virtualized and cloud-native network functions (CNFs) deployed on Kubernetes infrastructure.",
        points: ["Kubernetes for Telco Cloud", "DPDK Data Plane Acceleration", "SDN Controller Integration"],
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80",
        color: "from-purple-500/20 to-violet-500/20"
    },
    {
        id: "04",
        title: "Embedded Telecom Protocol Stacks",
        description: "Custom C/C++ implementation of industrial, military, and cellular protocols optimized for low latency and memory efficiency.",
        points: ["3GPP NR / LTE Protocols", "SIP / IMS VoIP Stacks", "Custom Wireless Protocols"],
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop&q=80",
        color: "from-orange-500/20 to-amber-500/20"
    },
    {
        id: "05",
        title: "IoT & Short-Range Connectivity",
        description: "Engineering low-power wireless mesh networks utilizing Bluetooth Low Energy (BLE), Zigbee, Thread, Matter, and Ultra-Wideband (UWB).",
        points: ["BLE Mesh & Matter Protocols", "Ultra-Wideband (UWB) Ranging", "Sub-GHz Long Range (LoRa)"],
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80",
        color: "from-emerald-500/20 to-green-500/20"
    },
    {
        id: "06",
        title: "Telecom Test Automation",
        description: "Automated RF testing, protocol conformance verification, and network traffic generation environments for rapid carrier certification.",
        points: ["Automated RF Testbenches", "Protocol Conformance Suite", "Traffic Load Generation"],
        image: "https://images.unsplash.com/photo-1520869578617-557561d7b114?w=800&auto=format&fit=crop&q=80",
        color: "from-rose-500/20 to-pink-500/20"
    }
];

const WHATS_HAPPENING_CARDS = [
  {
    id: 1,
    tag: "6G Research",
    title: "Sub-THz Spectrum: Building the Wireless Backbone for 6G Networks",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    tag: "Open RAN",
    title: "Overcoming Interoperability Barriers in Multi-Vendor O-RAN Deployments",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    tag: "Satellite Tech",
    title: "Direct-to-Cell LEO Satellite Connectivity: Architectural Blueprint",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    tag: "AI Networks",
    title: "Zero-Touch Network Management with AI-Driven Telecom Analytics",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop&q=80"
  }
];

const CommunicationEngineering = () => {
    return (
        <ServiceLayout 
            hero={{
                title: "Communication Engineering",
                description: "Connecting the world with high-throughput 5G/6G systems, optical communications, and resilient network protocol software.",
                primaryButtonText: "Explore Telecom Solutions",
                secondaryButtonText: "Talk to Telecom Engineers"
            }}
            portal={{
                portalImage: telecomImg,
                gridImage: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2564&auto=format&fit=crop",
                collageImages: COLLAGE_IMAGES,
                features: SEQUENCE_FEATURES,
                aboutText: (
                    <p className="text-[clamp(1.1rem,2vw,2.2rem)] font-medium leading-[1.6] tracking-tight text-left text-white">
                        We design end-to-end communication systems that bridge physical RF waves to virtualized cloud networks.
                        <br className="hidden lg:block mt-2" />
                        Our engineering solutions deliver ultra-reliable, low-latency connectivity for telecom operators, satellite systems, and connected enterprises.
                    </p>
                )
            }}
            slider={{
                title: "Telecom Insights",
                subtitle: "Innovations shaping the future of global connectivity and networks",
                cards: WHATS_HAPPENING_CARDS
            }}
            showcase={{
                features: SHOWCASE_FEATURES,
                backgroundText: "CONNECTING\nNETWORKS"
            }}
        />
    );
};

export default CommunicationEngineering;

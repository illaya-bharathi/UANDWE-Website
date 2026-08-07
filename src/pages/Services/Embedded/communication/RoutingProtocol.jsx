import React from 'react';
import ServiceLayout from '../../../../components/ServiceLayout';
import { Network, Activity, Search, ShieldCheck, Cpu, Share2 } from 'lucide-react';
import heroImage from "../../../../assets/imagesss/communication/routingprotocol.png";

const SEQUENCE_FEATURES = [
    { id: 1, title: "Topology Assessment", desc: "Analyzing the network scale to choose between Link-State (OSPF) or Distance-Vector (BGP) routing." },
    { id: 2, title: "Stack Porting", desc: "Porting robust, open-source routing suites like FRRouting (FRR) or Quagga to the embedded target." },
    { id: 3, title: "Kernel Optimization", desc: "Tuning Linux kernel parameters (sysctl) to maximize forwarding tables and neighbor caches." },
    { id: 4, title: "Control Plane Dev", desc: "Writing the daemon processes that manage route advertisement, convergence, and peer discovery." },
    { id: 5, title: "Data Plane Offload", desc: "Hooking the software routing tables into hardware ASICs (e.g. Broadcom SDK) for line-rate switching." },
    { id: 6, title: "Network Sim Testing", desc: "Testing convergence times under link failure using GNS3 or physical Spirent test equipment." }
];

const COLLAGE_IMAGES = [
    { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800", scaleIndex: 4, cls: "!-top-[30vh] !left-[5vw] !h-[30vh] !w-[35vw]" },
    { src: "https://images.unsplash.com/photo-1544377193-33dce4d95d0c?q=80&w=800", scaleIndex: 5, cls: "!-top-[10vh] !-left-[25vw] !h-[45vh] !w-[20vw]" },
    { src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800", scaleIndex: 6, cls: "!left-[27.5vw] !h-[25vh] !w-[25vw]" },
    { src: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800", scaleIndex: 5, cls: "!top-[27.5vh] !left-[5vw] !h-[25vh] !w-[20vw]" },
    { src: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800", scaleIndex: 6, cls: "!top-[27.5vh] !-left-[22.5vw] !h-[25vh] !w-[30vw]" },
    { src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=800", scaleIndex: 8, cls: "!top-[22.5vh] !left-[25vw] !h-[15vh] !w-[15vw]" },
];

const SHOWCASE_FEATURES = [
    {
        id: "01",
        title: "BGP / OSPF / IS-IS",
        description: "Implementing complex Layer 3 interior and exterior gateway protocols for large-scale IP networks.",
        points: ["Fast convergence tuning", "Route filtering / Route maps", "MP-BGP for VPNs"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
        color: "from-blue-500/20 to-purple-500/20"
    },
    {
        id: "02",
        title: "Layer 2 Switching",
        description: "Developing robust Spanning Tree Protocol (RSTP/MSTP) and VLAN (802.1Q) management firmware.",
        points: ["MAC address learning", "IGMP Snooping", "Link Aggregation (LACP)"],
        image: "https://images.unsplash.com/photo-1544377193-33dce4d95d0c?w=800&auto=format&fit=crop&q=80",
        color: "from-emerald-500/20 to-teal-500/20"
    },
    {
        id: "03",
        title: "SDN / OpenFlow",
        description: "Separating the control plane from the data plane to allow centralized network management.",
        points: ["Open vSwitch integration", "Southbound API dev", "White-box networking"],
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
        color: "from-orange-500/20 to-red-500/20"
    },
    {
        id: "04",
        title: "Multicast Protocols",
        description: "Ensuring efficient delivery of high-bandwidth video and audio streams using PIM-SM/DM and IGMP.",
        points: ["Rendezvous point config", "Multicast routing tables", "Bandwidth throttling"],
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=80",
        color: "from-pink-500/20 to-rose-500/20"
    }
];

const LATEST_INSIGHTS = [
  {
    id: 1,
    tag: "Routing",
    title: "Optimizing BGP Convergence Times in Edge Routers",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    tag: "Layer 2",
    title: "Why RSTP is Essential for Industrial Ethernet Redundancy",
    image: "https://images.unsplash.com/photo-1544377193-33dce4d95d0c?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    tag: "Hardware",
    title: "The Challenge of Porting FRRouting to Custom ASIC Switches",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80"
  }
];

const ROUTING_SUB_SERVICES = [
    { title: "Protocol Stack Integration", description: "Cross-compiling and optimizing open-source routing suites (FRRouting, strongSwan) for embedded Linux targets.", icon: <Network className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80" },
    { title: "Hardware Offload (SwitchDev)", description: "Hooking software routing tables directly into silicon merchant ASICs (Broadcom, Marvell) for wire-speed forwarding.", icon: <Cpu className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1544377193-33dce4d95d0c?w=800&auto=format&fit=crop&q=80" },
    { title: "VPN & IPsec", description: "Implementing hardware-accelerated cryptographic tunnels (WireGuard, IPsec) for secure SD-WAN edge devices.", icon: <ShieldCheck className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80" },
    { title: "QoS Implementation", description: "Configuring Traffic Control (tc) and strict priority queuing to ensure VoIP and video traffic never drops.", icon: <Activity className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80" },
    { title: "Mesh Networking", description: "Deploying self-healing Layer 2 and Layer 3 mesh protocols (802.11s, BATMAN-adv) for resilient wireless networks.", icon: <Share2 className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=80" },
    { title: "Spirent / Ixia Validation", description: "Using industry-standard traffic generators to bombard the device with millions of routes and packets to prove stability.", icon: <Search className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=80" }
];

const ROUTING_ADVANTAGES = [
    { title: "Linux Networking Experts", description: "We possess deep knowledge of the Linux network stack, from Netlink sockets down to NAPI drivers.", icon: <Cpu className="w-6 h-6" /> },
    { title: "Silicon Vendor Independence", description: "We abstract the routing software using modern APIs (like SAI - Switch Abstraction Interface) so you aren't locked into one ASIC vendor.", icon: <Share2 className="w-6 h-6" /> },
    { title: "Cybersecurity First", description: "Routing protocols are prime targets for attack. We implement strict route filtering, MD5 authentication, and Control Plane Policing (CoPP).", icon: <ShieldCheck className="w-6 h-6" /> },
    { title: "Line-Rate Verification", description: "Software works on paper. We put physical hardware in the lab and blast it with 100Gbps traffic to prove the silicon offload actually works.", icon: <Activity className="w-6 h-6" /> }
];

const ROUTING_FAQ = [
    {
        question: "Why use FRRouting instead of writing our own OSPF?",
        answer: "Writing a routing protocol from scratch takes years and is extremely error-prone. FRRouting is an enterprise-grade, battle-tested open-source suite. Our job is to port it, secure it, and tie it to your specific hardware."
    },
    {
        question: "What is Hardware Offload?",
        answer: "If the CPU has to look at every packet to route it, the router will cap out at maybe 1Gbps. Hardware offload programs the routing rules directly into a silicon chip, allowing it to switch packets at 100Gbps+ without waking the CPU."
    },
    {
        question: "Do you support IPv6?",
        answer: "Yes, entirely. We ensure dual-stack (IPv4/IPv6) operation, including complex translation mechanisms (NAT64) and IPv6 neighbor discovery."
    },
    {
        question: "Can you help with SD-WAN implementation?",
        answer: "Absolutely. We build the edge routing firmware that dynamically steers traffic over multiple WAN links based on latency and packet loss metrics, heavily utilizing IPsec/WireGuard."
    }
];

const ROUTING_ABOUT_METRICS = {
    titlePart1: "About",
    titlePart2: "Routing Protocol Integration",
    description: "U&WE builds the brains of the network. We integrate complex Layer 2 and Layer 3 protocols into custom hardware, transforming generic silicon into enterprise-grade routers and switches.",
    metrics: [
        { tag: "PROTOCOLS", value: "L2 / L3", label: "OSI Stack Mastery", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" },
        { tag: "PERFORMANCE", value: "Wire-Speed", label: "Hardware Offload", image: "https://images.unsplash.com/photo-1544377193-33dce4d95d0c?q=80&w=800&auto=format&fit=crop" },
        { tag: "SECURITY", value: "IPsec", label: "Encrypted Tunnels", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" },
        { tag: "SOFTWARE", value: "FRR", label: "Open-Source Stacks", image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800&auto=format&fit=crop" }
    ]
};

const RoutingProtocol = () => {
    return (
        <ServiceLayout 
            pageKey="routingProtocol"
            hero={{
                title: "Routing Protocol Integration",
                description: "Porting and optimizing complex Layer 2 and Layer 3 networking stacks for embedded routers, switches, and SD-WAN edge devices.",
                primaryButtonText: "Discuss Project",
                secondaryButtonText: "View Capabilities",
                image: heroImage
            }}
            aboutMetrics={ROUTING_ABOUT_METRICS}
            subServices={ROUTING_SUB_SERVICES}
            subServicesTitle={{ part1: "Core", part2: "Capabilities" }}
            advantages={ROUTING_ADVANTAGES}
            advantagesTitle={{ part1: "Why Partner", part2: "With Us" }}
            faqs={ROUTING_FAQ}
            portal={{
                portalImage: heroImage,
                gridImage: "https://images.unsplash.com/photo-1544377193-33dce4d95d0c?q=80&w=2564&auto=format&fit=crop",
                collageImages: COLLAGE_IMAGES,
                features: SEQUENCE_FEATURES,
                aboutText: (
                    <p className="text-[clamp(1.1rem,2vw,2.2rem)] font-medium leading-[1.6] tracking-tight text-left text-white">
                        Directing the flow of the internet.
                        <br className="hidden lg:block mt-2" />
                        We make custom hardware route packets flawlessly.
                    </p>
                )
            }}
            slider={{
                title: "Latest in Networking",
                subtitle: "Insights from our protocol engineers",
                cards: LATEST_INSIGHTS
            }}
            showcase={{
                features: SHOWCASE_FEATURES,
                backgroundText: "NETWORK\nROUTING"
            }}
        />
    );
};

export default RoutingProtocol;

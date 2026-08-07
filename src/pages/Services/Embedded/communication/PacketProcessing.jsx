import React from 'react';
import ServiceLayout from '../../../../components/ServiceLayout';
import { Activity, ShieldCheck, Network, Cpu, Database, Share2 } from 'lucide-react';
import heroImage from "../../../../assets/imagesss/communication/5. Real-Time Packet Processing.png";

const SEQUENCE_FEATURES = [
    { id: 1, title: "Data Plane Analysis", desc: "Mapping the exact packet lifecycle from the physical MAC ingress to the application egress." },
    { id: 2, title: "eBPF/XDP Injection", desc: "Writing kernel-bypass hooks to inspect and drop malicious packets before they hit the network stack." },
    { id: 3, title: "DPDK Integration", desc: "Configuring the Data Plane Development Kit to poll NICs directly, avoiding costly interrupts." },
    { id: 4, title: "Memory Optimization", desc: "Ensuring packet buffers stay within the CPU's L3 cache using NUMA-aware memory allocation." },
    { id: 5, title: "Stateful Tracking", desc: "Building massive hash tables to track million-flow TCP sessions in real-time." },
    { id: 6, title: "Load Testing", desc: "Blasting the system with 100Gbps of PCAP traffic using TRex to measure zero-drop performance." }
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
        title: "Deep Packet Inspection (DPI)",
        description: "Scanning the payload of every packet at line rate to classify traffic and detect malware.",
        points: ["Regular expression matching", "Hyperscan integration", "Layer 7 classification"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
        color: "from-blue-500/20 to-purple-500/20"
    },
    {
        id: "02",
        title: "Kernel Bypass (DPDK)",
        description: "Bypassing the slow Linux kernel completely to achieve millions of packets per second.",
        points: ["Zero-copy memory", "Poll Mode Drivers (PMD)", "Lockless queues"],
        image: "https://images.unsplash.com/photo-1544377193-33dce4d95d0c?w=800&auto=format&fit=crop&q=80",
        color: "from-emerald-500/20 to-teal-500/20"
    },
    {
        id: "03",
        title: "eBPF / XDP Firewalls",
        description: "Running sandboxed inspection code inside the kernel to drop DDoS attacks before they consume CPU.",
        points: ["eXpress Data Path", "JIT compilation", "TC (Traffic Control) hooks"],
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
        color: "from-orange-500/20 to-red-500/20"
    },
    {
        id: "04",
        title: "VNF / NFV Architectures",
        description: "Virtualizing traditional hardware appliances (routers/firewalls) into scalable software containers.",
        points: ["SR-IOV acceleration", "VPP (Vector Packet Processing)", "Cloud-native edge"],
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=80",
        color: "from-pink-500/20 to-rose-500/20"
    }
];

const LATEST_INSIGHTS = [
  {
    id: 1,
    tag: "eBPF",
    title: "Why XDP is Replacing iptables for High-Scale DDoS Mitigation",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    tag: "DPDK",
    title: "Mastering NUMA Awareness in DPDK Applications",
    image: "https://images.unsplash.com/photo-1544377193-33dce4d95d0c?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    tag: "Performance",
    title: "Cache Misses: The Hidden Killer of Packet Processing Speed",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80"
  }
];

const PACKET_SUB_SERVICES = [
    { title: "DPDK Architecture", description: "Writing high-speed user-space applications that bypass the kernel to process 10M+ packets per second.", icon: <Cpu className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80" },
    { title: "Vector Packet Processing (VPP)", description: "Utilizing FD.io VPP to process packets in batches, maximizing CPU instruction cache hits.", icon: <Activity className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1544377193-33dce4d95d0c?w=800&auto=format&fit=crop&q=80" },
    { title: "Traffic Policing & Shaping", description: "Implementing token bucket algorithms and Hierarchical Token Bucket (HTB) queues to enforce SLA bandwidths.", icon: <Network className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80" },
    { title: "Stateful Firewalls", description: "Tracking millions of concurrent TCP/UDP sessions using lockless ring buffers and read-copy-update (RCU) mechanisms.", icon: <ShieldCheck className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80" },
    { title: "eBPF Telemetry", description: "Injecting eBPF programs to gather deep network metrics (latency, drops, retransmits) with zero performance overhead.", icon: <Database className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=80" },
    { title: "Load Balancing", description: "Writing Layer 4 / Layer 7 load balancers that distribute incoming traffic evenly across backend server clusters.", icon: <Share2 className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=80" }
];

const PACKET_ADVANTAGES = [
    { title: "Cache Optimization", description: "In packet processing, memory access is the bottleneck. We structure your structs and mbufs to fit perfectly into L1/L2 cache lines.", icon: <Cpu className="w-6 h-6" /> },
    { title: "Lockless Concurrency", description: "Mutexes kill performance. We use lock-free data structures (ring buffers, atomic operations) to scale across 128+ cores linearly.", icon: <Activity className="w-6 h-6" /> },
    { title: "Bare-Metal Understanding", description: "We understand how the physical NIC talks to the PCIe bus, allowing us to tune RSS queues and interrupt affinities perfectly.", icon: <Network className="w-6 h-6" /> },
    { title: "Test-Driven Scale", description: "We don't guess at performance. We use TRex to bombard our code with realistic traffic profiles to prove it handles line-rate.", icon: <ShieldCheck className="w-6 h-6" /> }
];

const PACKET_FAQ = [
    {
        question: "Why is the standard Linux networking stack too slow for high-speed routers?",
        answer: "Linux was designed as a general-purpose OS. When a packet arrives, it triggers a hardware interrupt, copies memory, changes context from kernel to user-space, and navigates dozens of locks. This overhead limits processing to roughly 1-2 Gbps per core."
    },
    {
        question: "What is DPDK?",
        answer: "Data Plane Development Kit. It allows an application to take direct control of the network card. Instead of waiting for an interrupt, it constantly 'polls' the card for new packets, avoiding kernel overhead entirely."
    },
    {
        question: "What is eBPF / XDP?",
        answer: "eBPF allows you to run safe, compiled code directly inside the Linux kernel. XDP attaches that code to the lowest possible level of the network stack. This is the industry standard way to drop massive DDoS attacks before they waste CPU resources."
    },
    {
        question: "Do you use multi-threading?",
        answer: "Yes, but we use a specific architecture. We pin 'worker threads' to specific CPU cores and assign them specific network card queues via RSS (Receive Side Scaling). This ensures packets are processed without thread context switching."
    }
];

const PACKET_ABOUT_METRICS = {
    titlePart1: "About",
    titlePart2: "Real-Time Packet Processing",
    description: "U&WE accelerates the flow of data. We write the hyper-optimized software that inspects, routes, and secures millions of packets per second, powering telecom cores and high-frequency trading platforms.",
    metrics: [
        { tag: "PERFORMANCE", value: "100Gbps+", label: "Line-Rate Software", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" },
        { tag: "FRAMEWORK", value: "DPDK / VPP", label: "Kernel Bypass", image: "https://images.unsplash.com/photo-1544377193-33dce4d95d0c?q=80&w=800&auto=format&fit=crop" },
        { tag: "SECURITY", value: "XDP", label: "eBPF Inspection", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" },
        { tag: "SCALE", value: "Linear", label: "Multi-Core Scaling", image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800&auto=format&fit=crop" }
    ]
};

const PacketProcessing = () => {
    return (
        <ServiceLayout 
            pageKey="packetProcessing"
            hero={{
                title: "Real-Time Packet Processing",
                description: "Engineering high-throughput, kernel-bypass software (DPDK, eBPF) for deep packet inspection and software-defined networking.",
                primaryButtonText: "Discuss Project",
                secondaryButtonText: "View Capabilities",
                image: heroImage
            }}
            aboutMetrics={PACKET_ABOUT_METRICS}
            subServices={PACKET_SUB_SERVICES}
            subServicesTitle={{ part1: "Core", part2: "Capabilities" }}
            advantages={PACKET_ADVANTAGES}
            advantagesTitle={{ part1: "Why Partner", part2: "With Us" }}
            faqs={PACKET_FAQ}
            portal={{
                portalImage: heroImage,
                gridImage: "https://images.unsplash.com/photo-1544377193-33dce4d95d0c?q=80&w=2564&auto=format&fit=crop",
                collageImages: COLLAGE_IMAGES,
                features: SEQUENCE_FEATURES,
                aboutText: (
                    <p className="text-[clamp(1.1rem,2vw,2.2rem)] font-medium leading-[1.6] tracking-tight text-left text-white">
                        Processing data without the kernel.
                        <br className="hidden lg:block mt-2" />
                        We engineer software that runs at wire speed.
                    </p>
                )
            }}
            slider={{
                title: "Latest in Data Plane",
                subtitle: "Insights from our network architects",
                cards: LATEST_INSIGHTS
            }}
            showcase={{
                features: SHOWCASE_FEATURES,
                backgroundText: "PACKET\nPROCESSING"
            }}
        />
    );
};

export default PacketProcessing;

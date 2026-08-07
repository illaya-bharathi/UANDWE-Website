import React from 'react';
import ServiceLayout from '../../../../components/ServiceLayout';
import { Cpu, HardDrive, Usb, Zap, ShieldCheck, Server, ArrowRightLeft, Activity, Network } from 'lucide-react';
import heroImage from "../../../../assets/imagesss/semiconductor/devicedriver.png";

const SEQUENCE_FEATURES = [
    { id: 1, title: "Linux Kernel Modules", desc: "Developing highly efficient, secure, and robust kernel-space drivers for custom hardware interfaces." },
    { id: 2, title: "PCIe & High-Speed I/O", desc: "Creating DMA-capable drivers for PCIe, NVMe, and high-throughput networking controllers." },
    { id: 3, title: "USB & Protocol Stacks", desc: "Implementing USB 3.x/4.x device and host controllers, along with complex protocol stacks." },
    { id: 4, title: "Audio & Video Codecs", desc: "Integrating ALSA/V4L2 drivers for real-time, low-latency multimedia processing." },
    { id: 5, title: "Performance Tuning", desc: "Profiling interrupt handlers and optimizing memory mapping to eliminate system bottlenecks." },
    { id: 6, title: "Upstreaming & Maintenance", desc: "Ensuring code compliance with mainline Linux standards for seamless upstream integration." }
];

const COLLAGE_IMAGES = [
    { src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800", scaleIndex: 4, cls: "!-top-[30vh] !left-[5vw] !h-[30vh] !w-[35vw]" },
    { src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=800", scaleIndex: 5, cls: "!-top-[10vh] !-left-[25vw] !h-[45vh] !w-[20vw]" },
    { src: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800", scaleIndex: 6, cls: "!left-[27.5vw] !h-[25vh] !w-[25vw]" },
    { src: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800", scaleIndex: 5, cls: "!top-[27.5vh] !left-[5vw] !h-[25vh] !w-[20vw]" },
    { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800", scaleIndex: 6, cls: "!top-[27.5vh] !-left-[22.5vw] !h-[25vh] !w-[30vw]" },
    { src: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800", scaleIndex: 8, cls: "!top-[22.5vh] !left-[25vw] !h-[15vh] !w-[15vw]" },
];

const SHOWCASE_FEATURES = [
    {
        id: "01",
        title: "OS Agnostic Expertise",
        description: "Seamless driver development across Linux, Windows (WDF), QNX, and VxWorks.",
        points: ["Kernel-mode drivers", "User-space drivers", "Cross-platform APIs"],
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
        color: "from-blue-500/20 to-purple-500/20"
    },
    {
        id: "02",
        title: "High-Throughput IO",
        description: "Designing drivers capable of saturating 100Gbps network links and Gen5 PCIe buses.",
        points: ["Zero-copy architectures", "Direct Memory Access (DMA)", "Interrupt coalescing"],
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=80",
        color: "from-emerald-500/20 to-teal-500/20"
    },
    {
        id: "03",
        title: "Security Hardened",
        description: "Ensuring kernel boundaries are protected from malicious user-space inputs.",
        points: ["Memory safety checks", "Fuzz testing", "Secure boot chain integration"],
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=80",
        color: "from-orange-500/20 to-red-500/20"
    },
    {
        id: "04",
        title: "Legacy Migration",
        description: "Modernizing outdated monolithic drivers into clean, modular frameworks.",
        points: ["32-bit to 64-bit ports", "API modernization", "Compliance testing"],
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=80",
        color: "from-pink-500/20 to-rose-500/20"
    }
];

const LATEST_INSIGHTS = [
  {
    id: 1,
    tag: "Linux Kernel",
    title: "Optimizing NVMe Driver Latency in High-Density Storage Arrays",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    tag: "Security",
    title: "Mitigating User-Space Exploits in Custom PCIe Drivers",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    tag: "Architecture",
    title: "Transitioning Legacy Character Drivers to the Modern Device Tree",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80"
  }
];

const DRIVER_SUB_SERVICES = [
    { title: "Kernel Module Development", description: "Writing robust Loadable Kernel Modules (LKMs) that interface directly with physical hardware registers.", icon: <Cpu className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80" },
    { title: "PCIe & DMA Architectures", description: "Implementing scatter-gather DMA and MSI-X interrupts for ultra-fast, CPU-efficient data transfers.", icon: <ArrowRightLeft className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=80" },
    { title: "USB & Network Stacks", description: "Developing compliant USB class drivers and NDIS/eBPF network drivers for edge connectivity.", icon: <Network className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=80" },
    { title: "Multimedia Frameworks", description: "Integrating custom camera sensors (V4L2) and audio DSPs (ALSA) into standardized OS multimedia layers.", icon: <Activity className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=80" },
    { title: "Storage & File Systems", description: "Building block drivers and custom file system interfaces for specialized NAND and NVMe controllers.", icon: <HardDrive className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80" },
    { title: "Power Management Integration", description: "Hooking into OS-level suspend/resume frameworks to ensure peripheral power states are managed flawlessly.", icon: <Zap className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=80" }
];

const DRIVER_ADVANTAGES = [
    { title: "Zero Kernel Panics", description: "Our strict adherence to memory safety and concurrency rules ensures our drivers never compromise system stability.", icon: <ShieldCheck className="w-6 h-6" /> },
    { title: "Maximum Throughput", description: "We utilize advanced ring buffers, interrupt coalescing, and lockless data structures to achieve theoretical maximum hardware speeds.", icon: <Activity className="w-6 h-6" /> },
    { title: "Cross-Platform Portability", description: "By abstracting hardware specifics into clean Hardware Abstraction Layers (HALs), our drivers are easily ported across different OS kernels.", icon: <ArrowRightLeft className="w-6 h-6" /> },
    { title: "Mainline Compliant", description: "We write code that strictly follows Linux Kernel coding style, facilitating smooth upstream acceptance and long-term community support.", icon: <Server className="w-6 h-6" /> }
];

const DRIVER_FAQ = [
    {
        question: "Do you develop drivers for custom, proprietary silicon?",
        answer: "Yes, we specialize in writing drivers for custom ASICs and FPGAs. We work directly from your register maps and hardware specifications to build the necessary software interfaces from scratch."
    },
    {
        question: "Can you help upstream our driver to the Linux kernel?",
        answer: "Absolutely. We are highly familiar with the Linux Kernel Mailing List (LKML) submission process. We format, clean, and advocate for your patches to get them merged into the mainline tree."
    },
    {
        question: "Do you handle Windows driver development (WDF)?",
        answer: "Yes, we write both Kernel-Mode Driver Framework (KMDF) and User-Mode Driver Framework (UMDF) drivers for Windows, ensuring they pass WHQL certification."
    },
    {
        question: "How do you test kernel drivers without crashing the host machine?",
        answer: "We utilize robust virtualization (QEMU/KVM) and hardware-in-the-loop (HIL) automated test benches to safely fuzz and stress-test kernel modules before deploying them to production hardware."
    }
];

const DRIVER_ABOUT_METRICS = {
    titlePart1: "About",
    titlePart2: "Device Drivers",
    description: "U&WE bridges the gap between complex silicon and the operating system. We engineer robust, high-performance device drivers that unleash the full capability of your hardware without compromising system stability.",
    metrics: [
        { tag: "CUSTOM DRIVERS", value: "200+", label: "Developed & Deployed", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" },
        { tag: "STABILITY", value: "99.9%", label: "Uptime on Edge Devices", image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800&auto=format&fit=crop" },
        { tag: "THROUGHPUT", value: "100Gbps", label: "Network Stacks Saturated", image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800&auto=format&fit=crop" },
        { tag: "UPSTREAMED", value: "50+", label: "Mainline Linux Patches", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" }
    ]
};

const DeviceDrivers = () => {
    return (
        <ServiceLayout 
            pageKey="deviceDrivers"
            hero={{
                title: "Device Drivers",
                description: "Engineering secure, high-throughput software interfaces that bridge the gap between custom silicon and the operating system.",
                primaryButtonText: "Discuss Project",
                secondaryButtonText: "View Capabilities",
                image: heroImage
            }}
            aboutMetrics={DRIVER_ABOUT_METRICS}
            subServices={DRIVER_SUB_SERVICES}
            subServicesTitle={{ part1: "Core", part2: "Capabilities" }}
            advantages={DRIVER_ADVANTAGES}
            advantagesTitle={{ part1: "Why Partner", part2: "With Us" }}
            faqs={DRIVER_FAQ}
            portal={{
                portalImage: heroImage,
                gridImage: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2564&auto=format&fit=crop",
                collageImages: COLLAGE_IMAGES,
                features: SEQUENCE_FEATURES,
                aboutText: (
                    <p className="text-[clamp(1.1rem,2vw,2.2rem)] font-medium leading-[1.6] tracking-tight text-left text-white">
                        From bare-metal registers to user-space APIs, we deliver seamless hardware integration.
                        <br className="hidden lg:block mt-2" />
                        Our drivers power the most demanding industrial, automotive, and consumer edge devices.
                    </p>
                )
            }}
            slider={{
                title: "Latest in Embedded Software",
                subtitle: "Insights from our kernel engineers",
                cards: LATEST_INSIGHTS
            }}
            showcase={{
                features: SHOWCASE_FEATURES,
                backgroundText: "KERNEL\nLEVEL"
            }}
        />
    );
};

export default DeviceDrivers;

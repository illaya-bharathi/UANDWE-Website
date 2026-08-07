import React from 'react';
import ServiceLayout from '../../../../components/ServiceLayout';
import { Terminal, Box, Settings, Cpu, ShieldCheck, Activity, Layers, Database, Lock } from 'lucide-react';
import heroImage from "../../../../assets/imagesss/semiconductor/embeddedlinux.png";

const SEQUENCE_FEATURES = [
    { id: 1, title: "Yocto / Buildroot", desc: "Crafting highly customized, minimal footprint Linux distributions tailored specifically to your hardware." },
    { id: 2, title: "Kernel Tuning", desc: "Configuring the Linux kernel to strip out bloat, reduce boot time, and optimize hardware usage." },
    { id: 3, title: "Rootfs Optimization", desc: "Designing read-only, squashfs-based root file systems to prevent corruption during sudden power loss." },
    { id: 4, title: "Systemd Services", desc: "Architecting robust init systems for dependency-based, parallelized application startup." },
    { id: 5, title: "IPC & Middleware", desc: "Implementing D-Bus, MQTT, and ZeroMQ for highly efficient inter-process communication." },
    { id: 6, title: "Edge Containers", desc: "Deploying Docker, Podman, or K3s on embedded Linux for scalable, isolated edge applications." }
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
        title: "Yocto Project Mastery",
        description: "Building reproducible, layer-based OS images using OpenEmbedded and bitbake.",
        points: ["Custom meta-layers", "Recipe development", "Long-Term Support (LTS)"],
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
        color: "from-blue-500/20 to-purple-500/20"
    },
    {
        id: "02",
        title: "Rapid Boot",
        description: "Achieving sub-second boot times for critical systems like automotive clusters and medical displays.",
        points: ["U-Boot optimization", "Kernel stripping", "systemd-analyze tuning"],
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=80",
        color: "from-emerald-500/20 to-teal-500/20"
    },
    {
        id: "03",
        title: "Hardened Security",
        description: "Securing the OS layer against physical tampering and network-based exploits.",
        points: ["SELinux / AppArmor", "dm-verity", "Encrypted file systems"],
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=80",
        color: "from-orange-500/20 to-red-500/20"
    },
    {
        id: "04",
        title: "Robust Updates",
        description: "Implementing bulletproof OTA update mechanisms that guarantee system recoverability.",
        points: ["Mender.io integration", "RAUC", "OSTree atomic updates"],
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=80",
        color: "from-pink-500/20 to-rose-500/20"
    }
];

const LATEST_INSIGHTS = [
    {
        id: 1,
        tag: "Yocto",
        title: "Structuring Yocto Meta-Layers for Cross-Platform Scalability",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80"
    },
    {
        id: 2,
        tag: "Performance",
        title: "Achieving Sub-Second Boot Times on i.MX8 Processors",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80"
    },
    {
        id: 3,
        tag: "Security",
        title: "Implementing dm-verity for Verified Boot in Edge Devices",
        image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80"
    }
];

const LINUX_SUB_SERVICES = [
    { title: "Custom OS Generation", description: "Utilizing Yocto or Buildroot to compile a minimal, hardware-specific Linux distribution from source.", icon: <Box className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80" },
    { title: "Kernel Configuration", description: "Stripping unnecessary modules and enabling PREEMPT_RT for soft real-time capabilities in the kernel.", icon: <Settings className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=80" },
    { title: "File System Design", description: "Architecting resilient, power-fail safe partitions using ext4, squashfs, ubifs, and overlayfs.", icon: <Database className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=80" },
    { title: "Containerized Workloads", description: "Setting up Docker or Podman environments to cleanly separate user applications from the core OS.", icon: <Layers className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=80" },
    { title: "OS-Level Security (MAC)", description: "Locking down user-space execution via Mandatory Access Control frameworks like SELinux or AppArmor.", icon: <Lock className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80" },
    { title: "Automated Build Pipelines", description: "Integrating the OS build process into CI/CD pipelines for continuous, reproducible firmware generation.", icon: <Terminal className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=80" }
];

const LINUX_ADVANTAGES = [
    { title: "Zero-Bloat Guarantee", description: "We remove every megabyte of unnecessary libraries and utilities, severely reducing the attack surface and boot times.", icon: <Activity className="w-6 h-6" /> },
    { title: "Long-Term Maintainability", description: "Our Yocto layers are cleanly separated and rigorously documented, making it trivial for your internal team to maintain and update the OS for years.", icon: <Layers className="w-6 h-6" /> },
    { title: "Power-Fail Resilience", description: "We architect the partition layout and file systems to ensure that if a user yanks the power cord, the system will always boot up cleanly.", icon: <ShieldCheck className="w-6 h-6" /> },
    { title: "Hardware-Optimized", description: "By compiling the entire OS specifically for your processor's exact architecture (e.g., hard-float, specific instruction sets), we maximize CPU efficiency.", icon: <Cpu className="w-6 h-6" /> }
];

const LINUX_FAQ = [
    {
        question: "Why should we use Yocto instead of a standard Debian/Ubuntu image?",
        answer: "Standard desktop/server distributions are bloated, contain hundreds of unnecessary background services, and are highly vulnerable to power-loss corruption. Yocto allows us to build a tailored, immutable, and highly secure OS designed specifically for embedded constraints."
    },
    {
        question: "Can you implement a dual-partition OTA update system?",
        answer: "Yes, we frequently integrate tools like Mender, RAUC, or SWUpdate. This allows the device to download an update into an inactive partition, verify it, and swap boot flags, guaranteeing an always-bootable state."
    },
    {
        question: "Do you support real-time requirements on Embedded Linux?",
        answer: "Yes, we can apply the PREEMPT_RT patchset to the Linux kernel to achieve soft real-time determinism. For hard real-time, we configure Asymmetric Multiprocessing (AMP) where Linux runs alongside an RTOS on a separate core."
    },
    {
        question: "How do you handle OS-level security?",
        answer: "We implement a multi-layered approach: U-Boot secure boot, kernel dm-verity for rootfs integrity, encrypted data partitions, and strict SELinux/AppArmor profiles to sandbox applications."
    }
];

const LINUX_ABOUT_METRICS = {
    titlePart1: "About",
    titlePart2: "Embedded Linux",
    description: "U&WE engineers highly customized, ultra-reliable Linux distributions for edge devices. We strip away the bloat of standard desktop OSs to deliver hardened, power-fail-safe environments ready for mass production.",
    metrics: [
        { tag: "BOOT TIME", value: "< 1s", label: "Achieved on Custom Kernels", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" },
        { tag: "FOOTPRINT", value: "20MB", label: "Minimal Viable Rootfs", image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800&auto=format&fit=crop" },
        { tag: "SECURITY", value: "100%", label: "Verified Boot Coverage", image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800&auto=format&fit=crop" },
        { tag: "RELIABILITY", value: "Zero", label: "Power-Loss Corruptions", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" }
    ]
};

const EmbeddedLinux = () => {
    return (
        <ServiceLayout
            pageKey="embeddedLinux"
            hero={{
                title: "Embedded Linux",
                description: "Architecting minimal, secure, and rock-solid Linux distributions tailored specifically for your custom hardware.",
                primaryButtonText: "Discuss Project",
                secondaryButtonText: "View Capabilities",
                image: heroImage
            }}
            aboutMetrics={LINUX_ABOUT_METRICS}
            subServices={LINUX_SUB_SERVICES}
            subServicesTitle={{ part1: "Core", part2: "Capabilities" }}
            advantages={LINUX_ADVANTAGES}
            advantagesTitle={{ part1: "Why Partner", part2: "With Us" }}
            faqs={LINUX_FAQ}
            portal={{
                portalImage: heroImage,
                gridImage: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2564&auto=format&fit=crop",
                collageImages: COLLAGE_IMAGES,
                features: SEQUENCE_FEATURES,
                aboutText: (
                    <p className="text-[clamp(1.1rem,2vw,2.2rem)] font-medium leading-[1.6] tracking-tight text-left text-white">
                        From Yocto recipes to SELinux profiles, we build the OS from the ground up.
                        <br className="hidden lg:block mt-2" />
                        Our Embedded Linux solutions power the most demanding industrial IoT gateways.
                    </p>
                )
            }}
            slider={{
                title: "Latest in Embedded OS",
                subtitle: "Insights from our Linux architects",
                cards: LATEST_INSIGHTS
            }}
            showcase={{
                features: SHOWCASE_FEATURES,
                backgroundText: "LINUX\nOS"
            }}
        />
    );
};

export default EmbeddedLinux;

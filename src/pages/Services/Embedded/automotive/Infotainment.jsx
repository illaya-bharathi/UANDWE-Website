import React from 'react';
import ServiceLayout from '../../../../components/ServiceLayout';
import { Smartphone, Monitor, Layers, Cpu, ShieldCheck, Activity, Globe, Wifi, Settings } from 'lucide-react';
import heroImage from "../../../../assets/imagesss/automotive/In-vehicleinfotainment (IVI).png";

const SEQUENCE_FEATURES = [
    { id: 1, title: "Hypervisor Setup", desc: "Configuring Type-1 hypervisors (e.g. QNX Hypervisor) to safely run Android and an RTOS on the same SoC." },
    { id: 2, title: "Android Automotive (AAOS)", desc: "Porting and customizing Android Automotive OS to the specific hardware platform." },
    { id: 3, title: "Vehicle HAL Integration", desc: "Developing the Hardware Abstraction Layer (VHAL) to link Android to the vehicle's CAN/LIN buses." },
    { id: 4, title: "Graphics & UI", desc: "Optimizing Wayland/SurfaceFlinger to ensure 60fps+ rendering for the digital cockpit displays." },
    { id: 5, title: "Audio Routing", desc: "Managing complex audio pipelines (media, nav, chimes) using AudioFlinger and hardware DSPs." },
    { id: 6, title: "CTS/VTS Certification", desc: "Running Google's Compatibility Test Suite to ensure the system qualifies for Google Automotive Services (GAS)." }
];

const COLLAGE_IMAGES = [
    { src: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800", scaleIndex: 4, cls: "!-top-[30vh] !left-[5vw] !h-[30vh] !w-[35vw]" },
    { src: "https://images.unsplash.com/photo-1617469165786-8007eda3caa7?q=80&w=800", scaleIndex: 5, cls: "!-top-[10vh] !-left-[25vw] !h-[45vh] !w-[20vw]" },
    { src: "https://images.unsplash.com/photo-1555208638-e69c656919db?q=80&w=800", scaleIndex: 6, cls: "!left-[27.5vw] !h-[25vh] !w-[25vw]" },
    { src: "https://images.unsplash.com/photo-1563214878-1a52e00508ea?q=80&w=800", scaleIndex: 5, cls: "!top-[27.5vh] !left-[5vw] !h-[25vh] !w-[20vw]" },
    { src: "https://images.unsplash.com/photo-1620802051772-9ea373307bdf?q=80&w=800", scaleIndex: 6, cls: "!top-[27.5vh] !-left-[22.5vw] !h-[25vh] !w-[30vw]" },
    { src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800", scaleIndex: 8, cls: "!top-[22.5vh] !left-[25vw] !h-[15vh] !w-[15vw]" },
];

const SHOWCASE_FEATURES = [
    {
        id: "01",
        title: "Android Automotive (AAOS)",
        description: "Building the next-generation infotainment experience using Google's native automotive operating system.",
        points: ["System UI customization", "Car Service / VHAL", "Google Automotive Services (GAS)"],
        image: "https://images.unsplash.com/photo-1617469165786-8007eda3caa7?w=800&auto=format&fit=crop&q=80",
        color: "from-blue-500/20 to-purple-500/20"
    },
    {
        id: "02",
        title: "Hypervisors",
        description: "Safely consolidating multiple operating systems (Linux, Android, RTOS) onto a single powerful SoC.",
        points: ["QNX Hypervisor", "VirtIO drivers", "Resource partitioning"],
        image: "https://images.unsplash.com/photo-1555208638-e69c656919db?w=800&auto=format&fit=crop&q=80",
        color: "from-emerald-500/20 to-teal-500/20"
    },
    {
        id: "03",
        title: "Digital Instrument Clusters",
        description: "Developing ASIL-certified graphics for digital speedometers that never crash and boot in under 2 seconds.",
        points: ["Kanzi / Qt 3D", "OpenGL ES", "Fast-boot optimization"],
        image: "https://images.unsplash.com/photo-1563214878-1a52e00508ea?w=800&auto=format&fit=crop&q=80",
        color: "from-orange-500/20 to-red-500/20"
    },
    {
        id: "04",
        title: "Over-The-Air (OTA) Updates",
        description: "Implementing dual-bank A/B update mechanisms to seamlessly upgrade vehicle software from the cloud.",
        points: ["Delta payloads", "Rollback protection", "UDS over IP (DoIP)"],
        image: "https://images.unsplash.com/photo-1620802051772-9ea373307bdf?w=800&auto=format&fit=crop&q=80",
        color: "from-pink-500/20 to-rose-500/20"
    }
];

const LATEST_INSIGHTS = [
  {
    id: 1,
    tag: "AAOS",
    title: "Mastering the Vehicle HAL in Android Automotive 13",
    image: "https://images.unsplash.com/photo-1617469165786-8007eda3caa7?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    tag: "Hypervisors",
    title: "Why Zonal Architecture Demands Virtualization",
    image: "https://images.unsplash.com/photo-1555208638-e69c656919db?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    tag: "Performance",
    title: "Booting a Digital Cockpit in Under 2 Seconds",
    image: "https://images.unsplash.com/photo-1563214878-1a52e00508ea?w=800&auto=format&fit=crop&q=80"
  }
];

const IVI_SUB_SERVICES = [
    { title: "AAOS Integration", description: "Customizing the Android Automotive framework, developing system apps, and passing strict CTS/VTS testing.", icon: <Smartphone className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1617469165786-8007eda3caa7?w=800&auto=format&fit=crop&q=80" },
    { title: "Cockpit Virtualization", description: "Configuring Type-1 Hypervisors to run QNX (for the instrument cluster) and Android (for infotainment) simultaneously.", icon: <Layers className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1555208638-e69c656919db?w=800&auto=format&fit=crop&q=80" },
    { title: "Vehicle HAL (VHAL)", description: "Writing the critical C++ code that bridges the rich Android UI with the vehicle's underlying CAN/Ethernet network.", icon: <Cpu className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1563214878-1a52e00508ea?w=800&auto=format&fit=crop&q=80" },
    { title: "Graphics & Qt/Kanzi", description: "Optimizing 3D pipelines (OpenGL/Vulkan) to ensure smooth, 60fps rendering across multiple 4K displays.", icon: <Monitor className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1620802051772-9ea373307bdf?w=800&auto=format&fit=crop&q=80" },
    { title: "OTA Infrastructure", description: "Developing secure, robust Over-The-Air update clients using A/B partitioning and secure boot mechanisms.", icon: <Wifi className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&auto=format&fit=crop&q=80" },
    { title: "CarPlay & Android Auto", description: "Integrating and certifying Apple CarPlay and Google Android Auto projection technologies.", icon: <Globe className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&auto=format&fit=crop&q=80" }
];

const IVI_ADVANTAGES = [
    { title: "Full-Stack Expertise", description: "We don't just write UI apps. We engineer the entire stack: from the BSP and Hypervisor up to the Android framework.", icon: <Layers className="w-6 h-6" /> },
    { title: "Silicon Partnerships", description: "Deep experience with the leading cockpit SoCs, including Qualcomm Snapdragon Automotive and NXP i.MX8.", icon: <Cpu className="w-6 h-6" /> },
    { title: "Fast-Boot Optimization", description: "Consumers hate lag. We aggressively profile and strip the bootloader and kernel to achieve sub-2-second cold boots.", icon: <Activity className="w-6 h-6" /> },
    { title: "ASIL Compliance", description: "We understand how to separate the safety-critical cluster (ASIL B) from the uncertified Android environment.", icon: <ShieldCheck className="w-6 h-6" /> }
];

const IVI_FAQ = [
    {
        question: "What is the difference between Android Auto and Android Automotive (AAOS)?",
        answer: "Android Auto is an app that projects your phone's screen onto the car. Android Automotive (AAOS) is a full operating system that runs directly on the car's hardware, controlling everything from the radio to the AC."
    },
    {
        question: "Why use a Hypervisor in a car?",
        answer: "Modern cars use powerful SoCs that can run multiple screens. A hypervisor allows a safety-critical OS (like QNX for the speedometer) to run on the same chip as a rich, connected OS (like Android) without them crashing each other."
    },
    {
        question: "How do you achieve fast boot times?",
        answer: "By replacing heavy bootloaders with custom, stripped-down versions (like coreboot), compiling the kernel with only strictly necessary modules, and delaying the startup of non-critical Android services until after the UI is drawn."
    },
    {
        question: "What is the VHAL?",
        answer: "The Vehicle Hardware Abstraction Layer. It's the standard API Google created. When an Android app asks 'what is the car's speed?', the VHAL is the C++ code that translates that request and fetches the data from the vehicle's CAN bus."
    }
];

const IVI_ABOUT_METRICS = {
    titlePart1: "About",
    titlePart2: "In-Vehicle Infotainment",
    description: "U&WE engineers the digital cockpit. We integrate Android Automotive, Hypervisors, and 3D graphics to create seamless, smartphone-like experiences that are deeply connected to the vehicle's core networks.",
    metrics: [
        { tag: "PLATFORM", value: "AAOS", label: "Android Automotive", image: "https://images.unsplash.com/photo-1617469165786-8007eda3caa7?q=80&w=800&auto=format&fit=crop" },
        { tag: "ARCHITECTURE", value: "Type-1", label: "Hypervisors (QNX)", image: "https://images.unsplash.com/photo-1555208638-e69c656919db?q=80&w=800&auto=format&fit=crop" },
        { tag: "PERFORMANCE", value: "60 FPS", label: "Fluid 3D Graphics", image: "https://images.unsplash.com/photo-1563214878-1a52e00508ea?q=80&w=800&auto=format&fit=crop" },
        { tag: "BOOT TIME", value: "< 2s", label: "Fast Cold Boot", image: "https://images.unsplash.com/photo-1620802051772-9ea373307bdf?q=80&w=800&auto=format&fit=crop" }
    ]
};

const Infotainment = () => {
    return (
        <ServiceLayout 
            pageKey="infotainment"
            hero={{
                title: "In-Vehicle Infotainment (IVI)",
                description: "Developing hypervisor-based digital cockpits, integrating Android Automotive (AAOS), and optimizing 3D cluster graphics.",
                primaryButtonText: "Discuss Project",
                secondaryButtonText: "View Capabilities",
                image: heroImage
            }}
            aboutMetrics={IVI_ABOUT_METRICS}
            subServices={IVI_SUB_SERVICES}
            subServicesTitle={{ part1: "Core", part2: "Capabilities" }}
            advantages={IVI_ADVANTAGES}
            advantagesTitle={{ part1: "Why Partner", part2: "With Us" }}
            faqs={IVI_FAQ}
            portal={{
                portalImage: heroImage,
                gridImage: "https://images.unsplash.com/photo-1555208638-e69c656919db?q=80&w=2564&auto=format&fit=crop",
                collageImages: COLLAGE_IMAGES,
                features: SEQUENCE_FEATURES,
                aboutText: (
                    <p className="text-[clamp(1.1rem,2vw,2.2rem)] font-medium leading-[1.6] tracking-tight text-left text-white">
                        The ultimate digital cockpit.
                        <br className="hidden lg:block mt-2" />
                        We bring the smartphone experience safely into the vehicle.
                    </p>
                )
            }}
            slider={{
                title: "Latest in IVI",
                subtitle: "Insights from our cockpit engineers",
                cards: LATEST_INSIGHTS
            }}
            showcase={{
                features: SHOWCASE_FEATURES,
                backgroundText: "COCKPIT"
            }}
        />
    );
};

export default Infotainment;

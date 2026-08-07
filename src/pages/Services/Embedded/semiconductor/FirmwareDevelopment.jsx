import React from 'react';
import ServiceLayout from '../../../../components/ServiceLayout';
import { Cpu, Zap, ShieldCheck, HardDrive, RefreshCw, Layers, Microchip, Lock, Activity, Code } from 'lucide-react';
import heroImage from "../../../../assets/imagesss/semiconductor/firmwaredevelopment.png";

const SEQUENCE_FEATURES = [
    { id: 1, title: "Bare-Metal Programming", desc: "Developing highly deterministic, low-overhead firmware without the need for an operating system." },
    { id: 2, title: "Bootloader Customization", desc: "Porting and optimizing U-Boot or custom bootloaders for rapid, secure hardware initialization." },
    { id: 3, title: "Secure OTA Updates", desc: "Implementing fail-safe, A/B partition Over-The-Air update mechanisms for field deployments." },
    { id: 4, title: "Power Management", desc: "Architecting deep-sleep states and dynamic power scaling to maximize battery life on edge nodes." },
    { id: 5, title: "Sensor Integration", desc: "Interfacing with I2C/SPI/UART sensors and writing complex fusion algorithms (e.g., IMUs)." },
    { id: 6, title: "Memory Optimization", desc: "Aggressive optimization of code footprint and RAM usage for severely constrained MCUs." }
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
        title: "MCU Architecture Mastery",
        description: "Deep expertise across ARM Cortex-M/R, RISC-V, and proprietary 8/16/32-bit architectures.",
        points: ["STM32 & NXP i.MX", "RISC-V custom extensions", "Infineon AURIX"],
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
        color: "from-blue-500/20 to-purple-500/20"
    },
    {
        id: "02",
        title: "Battery Optimized",
        description: "Squeezing years of battery life out of IoT edge devices through meticulous power tuning.",
        points: ["Microamp deep-sleep", "Wake-on-interrupt", "Peripheral power gating"],
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=80",
        color: "from-emerald-500/20 to-teal-500/20"
    },
    {
        id: "03",
        title: "Hardware Trusted",
        description: "Implementing cryptographic boot sequences to prevent physical tampering and IP theft.",
        points: ["Secure Boot", "Hardware TrustZone", "Encrypted storage"],
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=80",
        color: "from-orange-500/20 to-red-500/20"
    },
    {
        id: "04",
        title: "Fail-Safe Updates",
        description: "Guaranteeing devices never brick in the field during remote firmware updates.",
        points: ["A/B partitioning", "Cryptographic signing", "Rollback mechanisms"],
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=80",
        color: "from-pink-500/20 to-rose-500/20"
    }
];

const LATEST_INSIGHTS = [
    {
        id: 1,
        tag: "Security",
        title: "Implementing Secure Boot on ARM Cortex-M Architectures",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80"
    },
    {
        id: 2,
        tag: "Power",
        title: "Techniques for Sub-Microamp Deep Sleep in IoT Sensors",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80"
    },
    {
        id: 3,
        tag: "Architecture",
        title: "Choosing Between Bare-Metal and RTOS for Edge AI Devices",
        image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80"
    }
];

const FIRMWARE_SUB_SERVICES = [
    { title: "Bare-Metal C/C++ Development", description: "Writing highly deterministic, MISRA-compliant code that executes directly on the processor without OS overhead.", icon: <Code className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80" },
    { title: "Bootloader Engineering", description: "Customizing U-Boot or writing primary/secondary bootloaders from scratch for rapid hardware initialization.", icon: <Layers className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=80" },
    { title: "Secure OTA Infrastructure", description: "Architecting end-to-end Over-The-Air update pipelines with cryptographic signatures and automatic rollback.", icon: <RefreshCw className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=80" },
    { title: "Peripheral & Sensor Interfacing", description: "Developing robust HALs for interfacing with complex IMUs, LiDARs, and analog sensors via I2C/SPI/CAN.", icon: <Cpu className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=80" },
    { title: "Power State Management", description: "Tuning clock trees and processor states to drastically reduce active and quiescent current consumption.", icon: <Zap className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80" },
    { title: "Hardware-Level Security", description: "Implementing hardware root-of-trust, TrustZone isolation, and encrypted local data storage.", icon: <Lock className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=80" }
];

const FIRMWARE_ADVANTAGES = [
    { title: "Maximum Hardware Utilization", description: "We bypass generic layers, writing code that exploits every specific feature of your chosen microcontroller.", icon: <Activity className="w-6 h-6" /> },
    { title: "Security First Approach", description: "Security is never an afterthought. We build secure boot chains and encrypted communication protocols from day one.", icon: <ShieldCheck className="w-6 h-6" /> },
    { title: "MISRA-C Compliant", description: "Our code adheres to strict automotive and aerospace safety standards, ensuring high reliability and maintainability.", icon: <Code className="w-6 h-6" /> },
    { title: "Rapid Board Bring-up", description: "We excel at taking unproven, early-stage custom PCBA boards and writing the initial test firmware to prove the hardware.", icon: <Zap className="w-6 h-6" /> }
];

const FIRMWARE_FAQ = [
    {
        question: "Can you help select the right MCU for our product?",
        answer: "Yes, we frequently consult on hardware architecture. We analyze your requirements for power, I/O, memory, and cost to recommend the optimal MCU family (e.g., STM32, NXP, Nordic)."
    },
    {
        question: "How do you ensure OTA updates don't brick devices?",
        answer: "We implement dual-bank (A/B) flash partitioning. The new firmware is downloaded to the inactive bank, cryptographically verified, and then booted. If the boot fails, the hardware automatically falls back to the previous known-good state."
    },
    {
        question: "Do you write firmware for extremely memory-constrained devices?",
        answer: "Absolutely. We are highly experienced in optimizing code size, eliminating standard library overhead, and managing dynamic memory tightly to fit firmware into MCUs with as little as 16KB of RAM."
    },
    {
        question: "What is your approach to debugging hardware issues?",
        answer: "We use high-end oscilloscopes, logic analyzers, and JTAG/SWD debuggers to trace the exact intersection of software execution and physical electrical signals."
    }
];

const FIRMWARE_ABOUT_METRICS = {
    titlePart1: "About",
    titlePart2: "Firmware Development",
    description: "U&WE develops the fundamental software that breathes life into custom electronics. Our firmware is highly optimized, secure by design, and built to run flawlessly for years in the field.",
    metrics: [
        { tag: "DEVICES", value: "5M+", label: "Running Our Firmware Globally", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" },
        { tag: "EFFICIENCY", value: "<1µA", label: "Deep Sleep Current Achieved", image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800&auto=format&fit=crop" },
        { tag: "SECURITY", value: "100%", label: "Secure Boot Implementation", image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800&auto=format&fit=crop" },
        { tag: "RELIABILITY", value: "Zero", label: "Field OTA Brick Instances", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" }
    ]
};

const FirmwareDevelopment = () => {
    return (
        <ServiceLayout
            pageKey="firmwareDevelopment"
            hero={{
                title: "Firmware Development",
                description: "Engineering highly optimized, secure, and reliable bare-metal code that breathes life into custom electronics.",
                primaryButtonText: "Discuss Project",
                secondaryButtonText: "View Capabilities",
                image: heroImage
            }}
            aboutMetrics={FIRMWARE_ABOUT_METRICS}
            subServices={FIRMWARE_SUB_SERVICES}
            subServicesTitle={{ part1: "Core", part2: "Capabilities" }}
            advantages={FIRMWARE_ADVANTAGES}
            advantagesTitle={{ part1: "Why Partner", part2: "With Us" }}
            faqs={FIRMWARE_FAQ}
            portal={{
                portalImage: heroImage,
                gridImage: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2564&auto=format&fit=crop",
                collageImages: COLLAGE_IMAGES,
                features: SEQUENCE_FEATURES,
                aboutText: (
                    <p className="text-[clamp(1.1rem,2vw,2.2rem)] font-medium leading-[1.6] tracking-tight text-left text-white">
                        From bootloaders to sensor fusion, we write code that maximizes hardware capabilities.
                        <br className="hidden lg:block mt-2" />
                        Our firmware powers critical systems where failure is not an option.
                    </p>
                )
            }}
            slider={{
                title: "Latest in Embedded Software",
                subtitle: "Insights from our firmware engineers",
                cards: LATEST_INSIGHTS
            }}
            showcase={{
                features: SHOWCASE_FEATURES,
                backgroundText: "BARE\nMETAL"
            }}
        />
    );
};

export default FirmwareDevelopment;

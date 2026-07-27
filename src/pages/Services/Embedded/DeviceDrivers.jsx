import React from 'react';
import ServiceLayout from '../../../components/ServiceLayout';

const SEQUENCE_FEATURES = [
    { id: 1, title: "Custom Driver Development", desc: "Develop reliable and high-performance device drivers tailored to your hardware platforms and operating systems." },
    { id: 2, title: "Kernel-Level Expertise", desc: "Build optimized kernel modules and drivers that ensure seamless communication between hardware and software." },
    { id: 3, title: "Hardware Integration", desc: "Enable efficient integration of peripherals, sensors, communication modules, and embedded devices." },
    { id: 4, title: "Performance Optimization", desc: "Optimize driver performance for low latency, high throughput, and efficient resource utilization." },
    { id: 5, title: "Secure & Reliable Drivers", desc: "Implement secure coding practices, robust error handling, and stable driver architectures for mission-critical systems." },
    { id: 6, title: "Cross-Platform Compatibility", desc: "Develop portable drivers supporting Linux, Windows, Android, RTOS, ARM, x86, and RISC-V platforms." }
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
        title: "High-Performance Architecture",
        description: "Engineered for maximum efficiency with minimal overhead in constrained environments.",
        points: ["Zero-copy mechanisms", "Cache-aligned buffers", "Low latency response"],
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
        color: "from-blue-500/20 to-purple-500/20"
    },
    {
        id: "02",
        title: "Hardware Security",
        description: "Built-in security primitives for robust execution.",
        points: ["Secure Boot", "Hardware Crypto", "Memory isolation"],
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=80",
        color: "from-emerald-500/20 to-teal-500/20"
    },
    {
        id: "03",
        title: "Reliability & Safety",
        description: "Designed to meet stringent functional safety standards.",
        points: ["MISRA C/C++ compliance", "Failsafe mechanisms", "Watchdog integration"],
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=80",
        color: "from-orange-500/20 to-red-500/20"
    },
    {
        id: "04",
        title: "Testing & Validation",
        description: "Rigorous hardware-in-the-loop (HIL) testing.",
        points: ["Automated test rigs", "Fault injection", "Unit testing"],
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=80",
        color: "from-pink-500/20 to-rose-500/20"
    }
];

const LATEST_INSIGHTS = [
  {
    id: 1,
    tag: "Hardware",
    title: "The Future of Edge Computing and Embedded Silicon",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    tag: "Firmware",
    title: "Best Practices for Secure OTA Updates",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    tag: "RTOS",
    title: "Zephyr vs FreeRTOS: A Technical Comparison",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80"
  }
];

const DeviceDrivers = () => {
    return (
        <ServiceLayout 
            hero={{
                title: "Custom Device Drivers",
                description: "High-performance, secure, and reliable device drivers for Linux, Windows, and RTOS environments to ensure seamless hardware-software communication.",
                primaryButtonText: "Discuss Project",
                secondaryButtonText: "View Capabilities"
            }}
            portal={{
                portalImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2564&auto=format&fit=crop",
                gridImage: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2564&auto=format&fit=crop",
                collageImages: COLLAGE_IMAGES,
                features: SEQUENCE_FEATURES,
                aboutText: (
                    <p className="text-[clamp(1.1rem,2vw,2.2rem)] font-medium leading-[1.6] tracking-tight text-left text-white">
                        We build robust embedded foundations that bring your hardware to life.
                        <br className="hidden lg:block mt-2" />
                        From drivers to operating systems, our engineering ensures reliability, efficiency, and scale.
                    </p>
                )
            }}
            slider={{
                title: "Latest in Embedded Engineering",
                subtitle: "Insights from our hardware and software engineers",
                cards: LATEST_INSIGHTS
            }}
            showcase={{
                features: SHOWCASE_FEATURES,
                backgroundText: "EMBEDDED\nSYSTEMS"
            }}
        />
    );
};

export default DeviceDrivers;

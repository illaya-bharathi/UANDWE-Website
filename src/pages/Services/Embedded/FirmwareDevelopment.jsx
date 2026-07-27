import React from 'react';
import ServiceLayout from '../../../components/ServiceLayout';

const SEQUENCE_FEATURES = [
    { id: 1, title: "Bare-Metal Programming", desc: "Develop highly optimized firmware in C/C++ for maximum performance, deterministic execution, and minimal resource usage." },
    { id: 2, title: "Bootloader Development", desc: "Design secure and reliable bootloaders with support for firmware validation, recovery mechanisms, and OTA updates." },
    { id: 3, title: "Embedded System Optimization", desc: "Optimize memory, CPU utilization, and execution speed to maximize the performance of resource-constrained devices." },
    { id: 4, title: "Hardware & Peripheral Integration", desc: "Seamlessly interface with sensors, communication protocols, and peripherals including SPI, I²C, UART, CAN, ADC, PWM, and USB." },
    { id: 5, title: "Low-Power Firmware Design", desc: "Implement intelligent power management and sleep strategies to extend battery life in embedded and IoT devices." },
    { id: 6, title: "Functional Safety & Reliability", desc: "Develop robust firmware following industry standards such as MISRA C, ISO 26262, IEC 61508, and IEC 62304 for safety-critical applications." }
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

const FirmwareDevelopment = () => {
    return (
        <ServiceLayout 
            hero={{
                title: "Firmware Development",
                description: "From bare-metal microcontrollers to complex multi-core SoCs, we engineer firmware that maximizes hardware capabilities.",
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

export default FirmwareDevelopment;

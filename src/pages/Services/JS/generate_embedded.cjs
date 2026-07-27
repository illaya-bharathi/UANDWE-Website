const fs = require('fs');
const path = require('path');

const templates = [
  {
    name: 'DeviceDrivers',
    title: 'Custom Device Drivers',
    desc: 'High-performance, secure, and reliable device drivers for Linux, Windows, and RTOS environments to ensure seamless hardware-software communication.',
    feat1: 'Kernel-Level Programming',
    feat1Desc: 'Develop robust drivers directly in the kernel space for maximum performance.',
    feat2: 'Hardware Abstraction',
    feat2Desc: 'Create clean HALs to insulate applications from underlying hardware changes.',
    feat3: 'Interrupt Handling',
    feat3Desc: 'Optimized ISRs for ultra-low latency hardware events.',
    feat4: 'Direct Memory Access',
    feat4Desc: 'High-speed DMA configurations for zero-copy data transfers.',
    feat5: 'Cross-Platform Support',
    feat5Desc: 'Drivers portable across different architectures (ARM, x86, RISC-V).',
    feat6: 'Power Management',
    feat6Desc: 'Advanced power states (ACPI) integration for energy efficiency.',
  },
  {
    name: 'FirmwareDevelopment',
    title: 'Firmware Development',
    desc: 'From bare-metal microcontrollers to complex multi-core SoCs, we engineer firmware that maximizes hardware capabilities.',
    feat1: 'Bare-Metal Programming',
    feat1Desc: 'Highly optimized C/C++ without the overhead of an OS.',
    feat2: 'Bootloader Design',
    feat2Desc: 'Secure, failsafe OTA bootloaders for seamless field updates.',
    feat3: 'MCU Optimization',
    feat3Desc: 'Squeezing maximum performance out of constrained memory and CPU.',
    feat4: 'Peripheral Interfacing',
    feat4Desc: 'Expertise in ADC, DAC, PWM, and custom IP blocks.',
    feat5: 'Low Power Modes',
    feat5Desc: 'Deep sleep and wake-up logic for battery-operated IoT devices.',
    feat6: 'Functional Safety',
    feat6Desc: 'MISRA-C compliant code designed for ISO 26262 / IEC 61508.',
  },
  {
    name: 'RTOSDevelopment',
    title: 'RTOS Development',
    desc: 'Deterministic, real-time operating systems tailored for mission-critical applications where every microsecond counts.',
    feat1: 'FreeRTOS & Zephyr',
    feat1Desc: 'Deep expertise in popular RTOS ecosystems and their subsystems.',
    feat2: 'Deterministic Scheduling',
    feat2Desc: 'Hard real-time task scheduling and priority inheritance.',
    feat3: 'Inter-Process Communication',
    feat3Desc: 'Thread-safe queues, semaphores, and mutexes.',
    feat4: 'Memory Management',
    feat4Desc: 'Static allocation and memory pool optimization to prevent fragmentation.',
    feat5: 'Trace & Debug',
    feat5Desc: 'Advanced RTOS-aware debugging and trace analysis tools.',
    feat6: 'Multicore RTOS',
    feat6Desc: 'SMP and AMP architectures on heterogeneous SoCs.',
  },
  {
    name: 'EmbeddedLinux',
    title: 'Embedded Linux Solutions',
    desc: 'Custom, highly optimized Linux distributions for embedded systems using Yocto and Buildroot.',
    feat1: 'Yocto Project',
    feat1Desc: 'Custom recipes, layers, and fully reproducible image builds.',
    feat2: 'Kernel Patching',
    feat2Desc: 'Modifying the Linux kernel for custom hardware and real-time (PREEMPT_RT).',
    feat3: 'RootFS Optimization',
    feat3Desc: 'Stripping down the filesystem to minimize boot time and footprint.',
    feat4: 'Secure Boot',
    feat4Desc: 'Implementing hardware root-of-trust and encrypted filesystems.',
    feat5: 'Device Tree Overlays',
    feat5Desc: 'Dynamic hardware configuration via DTS/DTB modifications.',
    feat6: 'Systemd & Init',
    feat6Desc: 'Optimized boot sequences and custom service management.',
  },
  {
    name: 'BSPDevelopment',
    title: 'Board Support Packages (BSP)',
    desc: 'Complete hardware bring-up and custom BSPs to get your proprietary custom boards running smoothly from day one.',
    feat1: 'Initial Bring-up',
    feat1Desc: 'From first-power-on to getting the boot prompt on custom silicon.',
    feat2: 'U-Boot Customization',
    feat2Desc: 'Tailoring the universal bootloader for specific memory maps.',
    feat3: 'Hardware Validation',
    feat3Desc: 'Writing test scripts to validate DDR, flash, and interfaces.',
    feat4: 'OS Porting',
    feat4Desc: 'Porting Linux, Android, or QNX to new architectures.',
    feat5: 'Long-Term Support',
    feat5Desc: 'Maintaining and updating the BSP across hardware revisions.',
    feat6: 'Vendor Integration',
    feat6Desc: 'Integrating proprietary vendor blobs and HALs seamlessly.',
  },
  {
    name: 'ProtocolIntegration',
    title: 'Protocol Integration',
    desc: 'Connecting devices to the world with robust implementation of industrial, automotive, and IoT communication protocols.',
    feat1: 'Automotive Protocols',
    feat1Desc: 'CAN, LIN, FlexRay, and Automotive Ethernet stacks.',
    feat2: 'Industrial Fieldbus',
    feat2Desc: 'Modbus, EtherCAT, PROFINET, and RS-485 implementation.',
    feat3: 'IoT Connectivity',
    feat3Desc: 'MQTT, CoAP, LwM2M over Wi-Fi, Cellular, or LoRa.',
    feat4: 'Low-Level Interfaces',
    feat4Desc: 'I2C, SPI, UART, and I2S custom controller logic.',
    feat5: 'Wireless Stacks',
    feat5Desc: 'Bluetooth Low Energy (BLE), Zigbee, and Thread integration.',
    feat6: 'Secure Communications',
    feat6Desc: 'TLS/DTLS integration for encrypted data transmission.',
  }
];

const templateCode = (data) => `import React from 'react';
import ServiceLayout from '../../../components/ServiceLayout';

const SEQUENCE_FEATURES = [
    { id: 1, title: "${data.feat1}", desc: "${data.feat1Desc}" },
    { id: 2, title: "${data.feat2}", desc: "${data.feat2Desc}" },
    { id: 3, title: "${data.feat3}", desc: "${data.feat3Desc}" },
    { id: 4, title: "${data.feat4}", desc: "${data.feat4Desc}" },
    { id: 5, title: "${data.feat5}", desc: "${data.feat5Desc}" },
    { id: 6, title: "${data.feat6}", desc: "${data.feat6Desc}" }
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

const ${data.name} = () => {
    return (
        <ServiceLayout 
            hero={{
                title: "${data.title}",
                description: "${data.desc}",
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
                backgroundText: "EMBEDDED\\nSYSTEMS"
            }}
        />
    );
};

export default ${data.name};
`;

const destDir = path.join(__dirname, 'src', 'pages', 'Services', 'Embedded');
templates.forEach(t => {
    fs.writeFileSync(path.join(destDir, t.name + '.jsx'), templateCode(t));
});

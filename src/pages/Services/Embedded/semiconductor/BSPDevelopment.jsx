import React from 'react';
import ServiceLayout from '../../../../components/ServiceLayout';
import { Microchip, Cpu, Layers, HardDrive, Settings, Wrench, Search, Zap, Code } from 'lucide-react';
import heroImage from "../../../../assets/imagesss/semiconductor/bspdevelopment.png";

const SEQUENCE_FEATURES = [
    { id: 1, title: "Hardware Bring-Up", desc: "First-power-on initialization, DDR calibration, and critical voltage rail validation." },
    { id: 2, title: "Bootloader Porting", desc: "Customizing U-Boot or proprietary bootloaders for secure, rapid SoC initialization." },
    { id: 3, title: "Device Tree (DTS)", desc: "Authoring precise Device Tree Sources to map physical board routing to the OS kernel." },
    { id: 4, title: "HAL Development", desc: "Creating clean Hardware Abstraction Layers to decouple application code from specific silicon." },
    { id: 5, title: "Peripheral Validation", desc: "Writing bare-metal test suites to validate complex peripherals (PCIe, MIPI-CSI, Ethernet PHYs)." },
    { id: 6, title: "Schematic Review", desc: "Pre-silicon collaboration with hardware teams to ensure pin-muxing and I/O viability." }
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
        title: "Silicon Agnostic",
        description: "Extensive experience bringing up boards across all major silicon vendors.",
        points: ["NXP i.MX / Layerscape", "Texas Instruments Sitara", "Xilinx Zynq SoCs"],
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
        color: "from-blue-500/20 to-purple-500/20"
    },
    {
        id: "02",
        title: "DDR Calibration",
        description: "Tuning memory controllers for stable operation at extreme clock frequencies.",
        points: ["LPDDR4/5 tuning", "Eye diagram analysis", "Thermal stress testing"],
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=80",
        color: "from-emerald-500/20 to-teal-500/20"
    },
    {
        id: "03",
        title: "Co-Design Approach",
        description: "We don't wait for the board. We review schematics early to prevent software blockers.",
        points: ["Pin-mux optimization", "Power tree review", "Clock domain mapping"],
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=80",
        color: "from-orange-500/20 to-red-500/20"
    },
    {
        id: "04",
        title: "Production Ready",
        description: "Delivering stable, documented BSPs that are ready for factory mass production.",
        points: ["Manufacturing test firmware", "Automated flashing scripts", "Yield analysis tools"],
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=80",
        color: "from-pink-500/20 to-rose-500/20"
    }
];

const LATEST_INSIGHTS = [
  {
    id: 1,
    tag: "Hardware",
    title: "Navigating LPDDR4 Calibration Complexities on NXP i.MX8",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    tag: "Linux",
    title: "Mastering the Linux Device Tree for Custom Carrier Boards",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    tag: "Process",
    title: "Why Software Teams Must Review Hardware Schematics",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80"
  }
];

const BSP_SUB_SERVICES = [
    { title: "First-Power-On Bring-Up", description: "Methodically verifying voltage rails, clock trees, and JTAG connectivity before a single line of OS code is executed.", icon: <Zap className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80" },
    { title: "Bootloader Customization", description: "Porting U-Boot, coreboot, or vendor-specific first-stage bootloaders to initialize your exact hardware configuration.", icon: <Settings className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=80" },
    { title: "Device Tree Authoring", description: "Writing complex Linux Device Tree (DTS/DTSI) files to perfectly describe your board's I/O, interrupts, and pin-muxing.", icon: <Code className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=80" },
    { title: "Memory Calibration", description: "Utilizing vendor tools and oscilloscopes to precisely tune DDR PHY timings for optimal signal integrity.", icon: <HardDrive className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=80" },
    { title: "Hardware Abstraction (HAL)", description: "Building clean API layers that allow application software to interface with hardware without knowing the underlying chip specifics.", icon: <Layers className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80" },
    { title: "Factory Test Firmware", description: "Developing standalone bare-metal diagnostics used by the factory line to verify PCBA assembly and peripheral functionality.", icon: <Wrench className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=80" }
];

const BSP_ADVANTAGES = [
    { title: "Cross-Disciplinary Expertise", description: "Our BSP engineers read schematics as fluently as they read C code. We don't blame the hardware; we debug it together with your team.", icon: <Search className="w-6 h-6" /> },
    { title: "Accelerated Timelines", description: "We start work before the boards arrive. By developing against evaluation kits and emulators, we are ready the moment first-silicon lands on our desk.", icon: <Zap className="w-6 h-6" /> },
    { title: "Rock-Solid Foundations", description: "The BSP is the foundation of your product. We ensure it is robust, memory-leak free, and capable of handling edge-case electrical noise.", icon: <Layers className="w-6 h-6" /> },
    { title: "Vendor Tool Fluency", description: "Deep familiarity with NXP MCUXpresso, TI Code Composer, and Xilinx Vivado allows us to rapidly navigate complex vendor ecosystems.", icon: <Cpu className="w-6 h-6" /> }
];

const BSP_FAQ = [
    {
        question: "What do you need from us to start BSP development?",
        answer: "Ideally, we need the preliminary schematics (PDF or EDA format), the pin-mux configuration file, the target OS requirements, and the datasheet for any highly specialized proprietary ICs on the board."
    },
    {
        question: "How do you handle bugs that might be hardware issues?",
        answer: "We use JTAG debuggers, logic analyzers, and oscilloscopes to isolate the issue. If we suspect a hardware bug (e.g., a missing pull-up resistor or timing violation), we provide your hardware team with precise electrical captures proving the issue."
    },
    {
        question: "Can you create a custom Yocto layer for our board?",
        answer: "Yes, a core part of our BSP delivery is providing a clean, self-contained Yocto `meta-<your-company>` layer that seamlessly builds the bootloader, kernel, and rootfs for your specific board."
    },
    {
        question: "Do you write manufacturing test code?",
        answer: "Absolutely. We write minimal, fast-booting firmware designed specifically for the factory floor to ping I2C devices, test RAM, and verify networking PHYs before the board is shipped."
    }
];

const BSP_ABOUT_METRICS = {
    titlePart1: "About",
    titlePart2: "BSP Development",
    description: "U&WE provides the critical software foundation that bridges your custom hardware with the operating system. We turn unproven, cold printed circuit boards into reliable, breathing computing platforms.",
    metrics: [
        { tag: "BRING-UPS", value: "300+", label: "Custom Boards Initialized", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" },
        { tag: "SPEED", value: "<48 Hrs", label: "Average Time to First BootPrompt", image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800&auto=format&fit=crop" },
        { tag: "COVERAGE", value: "100%", label: "Peripheral Diagnostics", image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800&auto=format&fit=crop" },
        { tag: "SILICON", value: "15+", label: "Vendor Architectures Mastered", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" }
    ]
};

const BSPDevelopment = () => {
    return (
        <ServiceLayout 
            pageKey="bspDevelopment"
            hero={{
                title: "Board Support Packages",
                description: "Breathing life into custom silicon with robust bootloaders, precise device trees, and rock-solid hardware abstraction layers.",
                primaryButtonText: "Discuss Project",
                secondaryButtonText: "View Capabilities",
                image: heroImage
            }}
            aboutMetrics={BSP_ABOUT_METRICS}
            subServices={BSP_SUB_SERVICES}
            subServicesTitle={{ part1: "Core", part2: "Capabilities" }}
            advantages={BSP_ADVANTAGES}
            advantagesTitle={{ part1: "Why Partner", part2: "With Us" }}
            faqs={BSP_FAQ}
            portal={{
                portalImage: heroImage,
                gridImage: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2564&auto=format&fit=crop",
                collageImages: COLLAGE_IMAGES,
                features: SEQUENCE_FEATURES,
                aboutText: (
                    <p className="text-[clamp(1.1rem,2vw,2.2rem)] font-medium leading-[1.6] tracking-tight text-left text-white">
                        From the first power-on to a fully stable OS, we lay the software foundation.
                        <br className="hidden lg:block mt-2" />
                        Our BSPs are the bedrock of reliable embedded systems globally.
                    </p>
                )
            }}
            slider={{
                title: "Latest in Board Bring-Up",
                subtitle: "Insights from our hardware-software engineers",
                cards: LATEST_INSIGHTS
            }}
            showcase={{
                features: SHOWCASE_FEATURES,
                backgroundText: "BOARD\nSUPPORT"
            }}
        />
    );
};

export default BSPDevelopment;

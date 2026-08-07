import React from 'react';
import ServiceLayout from '../../../../components/ServiceLayout';
import { Clock, Layers, Activity, Cpu, Code, Zap, ShieldCheck, Share2, Target } from 'lucide-react';
import heroImage from "../../../../assets/imagesss/semiconductor/rtosdevelopment.png";

const SEQUENCE_FEATURES = [
    { id: 1, title: "RTOS Integration", desc: "Porting and configuring FreeRTOS, Zephyr, or ThreadX onto custom MCU architectures." },
    { id: 2, title: "Task Scheduling", desc: "Architecting preemptive, priority-based multitasking to guarantee hard real-time deadlines." },
    { id: 3, title: "Inter-Process Communication", desc: "Implementing robust message queues, semaphores, and mutexes to ensure thread safety." },
    { id: 4, title: "Memory Management", desc: "Tuning static and dynamic memory allocation pools to prevent fragmentation over long uptimes." },
    { id: 5, title: "Multicore Architectures", desc: "Developing AMP/SMP systems bridging RTOS cores with rich OS cores (e.g., Linux on Cortex-A)." },
    { id: 6, title: "Timing Analysis", desc: "Profiling interrupt latency and context-switch times to eliminate jitter in critical control loops." }
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
        title: "Hard Real-Time",
        description: "Guaranteeing microsecond-level execution determinism for mission-critical systems.",
        points: ["Motor control loops", "Automotive ECUs", "Medical device actuation"],
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
        color: "from-blue-500/20 to-purple-500/20"
    },
    {
        id: "02",
        title: "Platform Agnostic",
        description: "Deep expertise across the industry's leading Real-Time Operating Systems.",
        points: ["FreeRTOS & Zephyr", "QNX & VxWorks", "Azure RTOS (ThreadX)"],
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=80",
        color: "from-emerald-500/20 to-teal-500/20"
    },
    {
        id: "03",
        title: "Heterogeneous Computing",
        description: "Bridging the gap between real-time processing and high-level application logic.",
        points: ["Asymmetric Multiprocessing (AMP)", "OpenAMP/RPMsg", "SoC integration"],
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=80",
        color: "from-orange-500/20 to-red-500/20"
    },
    {
        id: "04",
        title: "Safety Certified",
        description: "Architecting software to meet rigorous functional safety standards.",
        points: ["IEC 61508", "ISO 26262 ASIL", "DO-178C"],
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=80",
        color: "from-pink-500/20 to-rose-500/20"
    }
];

const LATEST_INSIGHTS = [
    {
        id: 1,
        tag: "Architecture",
        title: "Handling Priority Inversion in Complex Multithreaded Systems",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80"
    },
    {
        id: 2,
        tag: "Performance",
        title: "Minimizing Interrupt Latency on ARM Cortex-M7 Processors",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80"
    },
    {
        id: 3,
        tag: "Integration",
        title: "Implementing OpenAMP for Linux-to-FreeRTOS Communication",
        image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80"
    }
];

const RTOS_SUB_SERVICES = [
    { title: "RTOS Porting & Board Support", description: "Configuring the RTOS kernel tick, memory maps, and interrupt vectors for custom silicon boards.", icon: <Cpu className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80" },
    { title: "Task Architecture & Scheduling", description: "Designing priority schemes and preemptive task behaviors to ensure critical control loops never miss a deadline.", icon: <Clock className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=80" },
    { title: "Inter-Process Communication (IPC)", description: "Implementing robust message queues, semaphores, and mutexes to ensure safe data sharing across threads.", icon: <Share2 className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=80" },
    { title: "Memory Pool Management", description: "Tuning static allocation and specialized heap managers to eliminate memory fragmentation over long uptimes.", icon: <Layers className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=80" },
    { title: "Multicore AMP/SMP", description: "Developing Asymmetric Multiprocessing architectures using RPMsg to bridge RTOS cores with Linux application cores.", icon: <Activity className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80" },
    { title: "Latency Profiling", description: "Using advanced tracing tools like Percepio Tracealyzer to identify and resolve jitter and priority inversions.", icon: <Target className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=80" }
];

const RTOS_ADVANTAGES = [
    { title: "Absolute Determinism", description: "We architect systems where critical tasks execute within strict, guaranteed timeframes, down to the microsecond.", icon: <Clock className="w-6 h-6" /> },
    { title: "Thread Safety Mastery", description: "Our strict coding standards eliminate race conditions, deadlocks, and priority inversions before they ever reach the hardware.", icon: <ShieldCheck className="w-6 h-6" /> },
    { title: "Scalable Abstraction", description: "We build clean OS Abstraction Layers (OSAL), allowing your application code to port easily between different RTOS vendors.", icon: <Layers className="w-6 h-6" /> },
    { title: "Deep Profiling Capabilities", description: "We don't just write code; we visually profile the kernel's execution flow to prove temporal behavior and CPU load efficiency.", icon: <Activity className="w-6 h-6" /> }
];

const RTOS_FAQ = [
    {
        question: "How do you decide between Bare-Metal and an RTOS?",
        answer: "We recommend an RTOS when an application requires complex concurrency (e.g., handling networking stacks while running motor control loops), multiple priority levels, or standard middleware integration. If it's a simple, single-loop control system, we stick to bare-metal."
    },
    {
        question: "Can you help resolve priority inversion issues in our current code?",
        answer: "Yes, we frequently audit existing codebases to fix temporal bugs. We implement priority inheritance protocols and restructure resource-sharing mutexes to eliminate unbounded priority inversion."
    },
    {
        question: "Do you work with Asymmetric Multiprocessing (AMP) SoCs?",
        answer: "Absolutely. We heavily utilize frameworks like OpenAMP to establish reliable IPC between an RTOS running on a Cortex-M/R core and Embedded Linux running on a Cortex-A core within the same SoC."
    },
    {
        question: "Which RTOS platforms are you most experienced with?",
        answer: "Our team has extensive production experience with FreeRTOS, Zephyr, Azure RTOS (ThreadX), QNX, and VxWorks, across a wide variety of MCU architectures."
    }
];

const RTOS_ABOUT_METRICS = {
    titlePart1: "About",
    titlePart2: "RTOS Development",
    description: "U&WE architects sophisticated Real-Time Operating Systems for mission-critical edge devices. We ensure your software executes with absolute determinism, flawless concurrency, and optimal hardware utilization.",
    metrics: [
        { tag: "LATENCY", value: "<10µs", label: "Interrupt Response Time", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" },
        { tag: "UPTIME", value: "99.99%", label: "System Reliability Achieved", image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800&auto=format&fit=crop" },
        { tag: "CONCURRENCY", value: "Zero", label: "Race Conditions / Deadlocks", image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800&auto=format&fit=crop" },
        { tag: "INTEGRATION", value: "100%", label: "AMP/SMP Core Synchronization", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" }
    ]
};

const RTOSDevelopment = () => {
    return (
        <ServiceLayout
            pageKey="rtosDevelopment"
            hero={{
                title: "RTOS Development",
                description: "Architecting deterministic, preemptive multitasking systems that guarantee hard real-time deadlines are met.",
                primaryButtonText: "Discuss Project",
                secondaryButtonText: "View Capabilities",
                image: heroImage
            }}
            aboutMetrics={RTOS_ABOUT_METRICS}
            subServices={RTOS_SUB_SERVICES}
            subServicesTitle={{ part1: "Core", part2: "Capabilities" }}
            advantages={RTOS_ADVANTAGES}
            advantagesTitle={{ part1: "Why Partner", part2: "With Us" }}
            faqs={RTOS_FAQ}
            portal={{
                portalImage: heroImage,
                gridImage: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2564&auto=format&fit=crop",
                collageImages: COLLAGE_IMAGES,
                features: SEQUENCE_FEATURES,
                aboutText: (
                    <p className="text-[clamp(1.1rem,2vw,2.2rem)] font-medium leading-[1.6] tracking-tight text-left text-white">
                        From context switching to AMP architectures, we write thread-safe, deterministic code.
                        <br className="hidden lg:block mt-2" />
                        Our RTOS implementations drive the world's most critical real-time systems.
                    </p>
                )
            }}
            slider={{
                title: "Latest in Embedded Software",
                subtitle: "Insights from our software architects",
                cards: LATEST_INSIGHTS
            }}
            showcase={{
                features: SHOWCASE_FEATURES,
                backgroundText: "REAL\nTIME"
            }}
        />
    );
};

export default RTOSDevelopment;

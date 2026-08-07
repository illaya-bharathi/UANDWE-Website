import React from 'react';
import ServiceLayout from '../../../../components/ServiceLayout';
import { Cpu, Activity, Waves, Settings, Zap, Headphones, Share2 } from 'lucide-react';
import heroImage from "../../../../assets/imagesss/communication/DSPfirmware.png";

const SEQUENCE_FEATURES = [
    { id: 1, title: "Algorithm Modeling", desc: "Developing floating-point math models for filters (FIR/IIR) and FFTs in MATLAB." },
    { id: 2, title: "Fixed-Point Conversion", desc: "Converting models to highly efficient fixed-point arithmetic to save CPU cycles." },
    { id: 3, title: "Architecture Selection", desc: "Choosing between dedicated DSP cores (e.g. TI C6000), ARM Cortex-M4/M7, or FPGA fabrics." },
    { id: 4, title: "Assembly Optimization", desc: "Hand-tuning critical loop functions (MAC operations) using processor-specific SIMD instructions." },
    { id: 5, title: "Real-Time Integration", desc: "Integrating the DSP algorithm into the RTOS thread architecture with deterministic timing." },
    { id: 6, title: "Audio/RF Validation", desc: "Measuring the output using Audio Precision analyzers or Vector Signal Analyzers for RF." }
];

const COLLAGE_IMAGES = [
    { src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800", scaleIndex: 4, cls: "!-top-[30vh] !left-[5vw] !h-[30vh] !w-[35vw]" },
    { src: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800", scaleIndex: 5, cls: "!-top-[10vh] !-left-[25vw] !h-[45vh] !w-[20vw]" },
    { src: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800", scaleIndex: 6, cls: "!left-[27.5vw] !h-[25vh] !w-[25vw]" },
    { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800", scaleIndex: 5, cls: "!top-[27.5vh] !left-[5vw] !h-[25vh] !w-[20vw]" },
    { src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=800", scaleIndex: 6, cls: "!top-[27.5vh] !-left-[22.5vw] !h-[25vh] !w-[30vw]" },
    { src: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800", scaleIndex: 8, cls: "!top-[22.5vh] !left-[25vw] !h-[15vh] !w-[15vw]" },
];

const SHOWCASE_FEATURES = [
    {
        id: "01",
        title: "Adaptive Filtering",
        description: "Implementing LMS/RLS algorithms for active noise cancellation and acoustic echo cancellation.",
        points: ["Voice Activity Detection", "Beamforming audio arrays", "Non-linear processing"],
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
        color: "from-blue-500/20 to-purple-500/20"
    },
    {
        id: "02",
        title: "Digital Pre-Distortion (DPD)",
        description: "Linearizing RF power amplifiers by applying inverse distortion in the digital domain.",
        points: ["Volterra series models", "Memory effect compensation", "Crest Factor Reduction"],
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=80",
        color: "from-emerald-500/20 to-teal-500/20"
    },
    {
        id: "03",
        title: "Sensor Fusion",
        description: "Combining high-speed data from IMUs, LiDAR, and cameras using extended Kalman filters.",
        points: ["Dead reckoning", "Vibration rejection", "Quaternion math"],
        image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80",
        color: "from-orange-500/20 to-red-500/20"
    },
    {
        id: "04",
        title: "Modem Implementations",
        description: "Writing the heavy math required to demodulate QAM/PSK signals in Software Defined Radios.",
        points: ["Carrier recovery loops", "Timing synchronization", "Viterbi decoders"],
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=80",
        color: "from-pink-500/20 to-rose-500/20"
    }
];

const LATEST_INSIGHTS = [
  {
    id: 1,
    tag: "Audio DSP",
    title: "Optimizing Echo Cancellation for Smart Speakers in Noisy Rooms",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    tag: "Optimization",
    title: "When to Drop C and Write Pure Assembly for SIMD Engines",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    tag: "DPD",
    title: "The Math Behind Digital Pre-Distortion in 5G Amplifiers",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80"
  }
];

const DSP_SUB_SERVICES = [
    { title: "Audio & Speech Processing", description: "Enhancing voice intelligibility with multi-microphone beamforming and deep learning noise suppression.", icon: <Headphones className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80" },
    { title: "SDR Baseband DSP", description: "Implementing custom PHY layers for Software Defined Radios using GNU Radio or bare-metal C++.", icon: <Share2 className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=80" },
    { title: "SIMD Optimization", description: "Writing hyper-optimized code utilizing ARM NEON or TI DSP intrinsic instructions for massive parallel processing.", icon: <Cpu className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80" },
    { title: "Filter Synthesis", description: "Designing tight-tolerance FIR and IIR digital filters that avoid group delay and phase distortion.", icon: <Waves className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80" },
    { title: "Control Systems", description: "Programming high-speed PID loops and Motor Control algorithms (FOC) for precision robotics.", icon: <Settings className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=80" },
    { title: "Hardware Acceleration", description: "Offloading the heaviest mathematical lifting from the CPU to dedicated FPGA IP blocks or GPUs.", icon: <Zap className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=80" }
];

const DSP_ADVANTAGES = [
    { title: "Math First", description: "Our DSP engineers are mathematicians first. We rigorously model algorithms in Python/MATLAB before writing a single line of C code.", icon: <Activity className="w-6 h-6" /> },
    { title: "Fixed-Point Masters", description: "Floating point math is easy but slow. We excel at fixed-point Q-format arithmetic to squeeze maximum performance from cheap MCUs.", icon: <Settings className="w-6 h-6" /> },
    { title: "Cycle-Counting Obsession", description: "In real-time processing, every clock cycle matters. We profile and optimize L1/L2 cache hits to ensure deterministic execution.", icon: <Cpu className="w-6 h-6" /> },
    { title: "Hardware Synergy", description: "Because we design the hardware too, our firmware perfectly aligns with the physical capabilities of the ADCs and DACs.", icon: <Share2 className="w-6 h-6" /> }
];

const DSP_FAQ = [
    {
        question: "Why can't I just use a standard ARM Cortex-A processor instead of a dedicated DSP?",
        answer: "General purpose processors are built for branching logic and OS management. DSPs have specialized hardware multipliers (MAC units) and VLIW architectures that can execute complex math equations in a single clock cycle, drastically reducing power consumption."
    },
    {
        question: "What is Acoustic Echo Cancellation (AEC)?",
        answer: "When a speaker plays audio, the nearby microphone picks it up, causing an echo on the other end of the call. AEC mathematically subtracts the speaker's output from the microphone's input in real-time."
    },
    {
        question: "Do you write bare-metal code or use an RTOS?",
        answer: "For the absolute lowest latency processing (e.g. microseconds), we run bare-metal or use dedicated interrupt service routines. For complex systems, we integrate the DSP algorithms as high-priority threads within an RTOS."
    },
    {
        question: "Can you optimize an algorithm we've already written?",
        answer: "Yes. Clients often hand us functioning but slow C++ code. We refactor it to use hardware-specific SIMD intrinsics (like ARM NEON) to achieve 4x to 8x speed improvements."
    }
];

const DSP_ABOUT_METRICS = {
    titlePart1: "About",
    titlePart2: "DSP Firmware",
    description: "U&WE transforms messy real-world analog signals into clean, actionable digital data. We write the hyper-optimized mathematical algorithms that sit at the core of radar, audio, and telecommunications.",
    metrics: [
        { tag: "LATENCY", value: "< 1ms", label: "Real-Time Processing", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" },
        { tag: "INSTRUCTIONS", value: "SIMD", label: "Parallel Math Operations", image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800&auto=format&fit=crop" },
        { tag: "ALGORITHMS", value: "FFT", label: "Fast Fourier Transforms", image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800&auto=format&fit=crop" },
        { tag: "MATH", value: "Q31", label: "Fixed-Point Precision", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" }
    ]
};

const DspFirmware = () => {
    return (
        <ServiceLayout 
            pageKey="dspFirmware"
            hero={{
                title: "DSP Firmware Engineering",
                description: "Writing hyper-optimized, real-time mathematical algorithms for audio, radar, and software-defined radio applications.",
                primaryButtonText: "Discuss Project",
                secondaryButtonText: "View Capabilities",
                image: heroImage
            }}
            aboutMetrics={DSP_ABOUT_METRICS}
            subServices={DSP_SUB_SERVICES}
            subServicesTitle={{ part1: "Core", part2: "Capabilities" }}
            advantages={DSP_ADVANTAGES}
            advantagesTitle={{ part1: "Why Partner", part2: "With Us" }}
            faqs={DSP_FAQ}
            portal={{
                portalImage: heroImage,
                gridImage: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2564&auto=format&fit=crop",
                collageImages: COLLAGE_IMAGES,
                features: SEQUENCE_FEATURES,
                aboutText: (
                    <p className="text-[clamp(1.1rem,2vw,2.2rem)] font-medium leading-[1.6] tracking-tight text-left text-white">
                        Mastering the mathematics of signal processing.
                        <br className="hidden lg:block mt-2" />
                        We extract intelligence from the noise.
                    </p>
                )
            }}
            slider={{
                title: "Latest in DSP",
                subtitle: "Insights from our algorithm architects",
                cards: LATEST_INSIGHTS
            }}
            showcase={{
                features: SHOWCASE_FEATURES,
                backgroundText: "DIGITAL\nSIGNALS"
            }}
        />
    );
};

export default DspFirmware;

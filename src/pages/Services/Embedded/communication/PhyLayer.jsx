import React from 'react';
import ServiceLayout from '../../../../components/ServiceLayout';
import { Layers, Activity, Network, Code, Zap, Target, Waves } from 'lucide-react';
import heroImage from "../../../../assets/imagesss/communication/Phy.png";

const SEQUENCE_FEATURES = [
    { id: 1, title: "Standard Review", desc: "Deep diving into 3GPP, IEEE 802.11, or DOCSIS specs to ensure strict conformance." },
    { id: 2, title: "Modulation Design", desc: "Implementing QAM, PSK, or OFDM constellation mapping and de-mapping." },
    { id: 3, title: "FEC Integration", desc: "Adding robust Forward Error Correction (LDPC, Reed-Solomon) to protect against bit errors." },
    { id: 4, title: "Timing Synchronization", desc: "Writing phase-locked loop (PLL) control code to acquire and track the carrier frequency." },
    { id: 5, title: "MAC Layer Interfacing", desc: "Developing the direct memory access (DMA) buffers to hand off payloads to the Layer 2 MAC." },
    { id: 6, title: "Compliance Validation", desc: "Testing EVM (Error Vector Magnitude) against vector signal generators in the lab." }
];

const COLLAGE_IMAGES = [
    { src: "https://images.unsplash.com/photo-1544377193-33dce4d95d0c?q=80&w=800", scaleIndex: 4, cls: "!-top-[30vh] !left-[5vw] !h-[30vh] !w-[35vw]" },
    { src: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800", scaleIndex: 5, cls: "!-top-[10vh] !-left-[25vw] !h-[45vh] !w-[20vw]" },
    { src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800", scaleIndex: 6, cls: "!left-[27.5vw] !h-[25vh] !w-[25vw]" },
    { src: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800", scaleIndex: 5, cls: "!top-[27.5vh] !left-[5vw] !h-[25vh] !w-[20vw]" },
    { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800", scaleIndex: 6, cls: "!top-[27.5vh] !-left-[22.5vw] !h-[25vh] !w-[30vw]" },
    { src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=800", scaleIndex: 8, cls: "!top-[22.5vh] !left-[25vw] !h-[15vh] !w-[15vw]" },
];

const SHOWCASE_FEATURES = [
    {
        id: "01",
        title: "OFDM Architectures",
        description: "Implementing complex Orthogonal Frequency-Division Multiplexing for modern Wi-Fi and 5G.",
        points: ["Subcarrier allocation", "Cyclic prefix insertion", "PAPR reduction"],
        image: "https://images.unsplash.com/photo-1544377193-33dce4d95d0c?w=800&auto=format&fit=crop&q=80",
        color: "from-blue-500/20 to-purple-500/20"
    },
    {
        id: "02",
        title: "Custom Modulations",
        description: "Designing proprietary waveforms for secure defense communications or highly constrained IoT links.",
        points: ["Frequency hopping", "Direct sequence spread spectrum", "Low Probability of Intercept"],
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=80",
        color: "from-emerald-500/20 to-teal-500/20"
    },
    {
        id: "03",
        title: "Channel Estimation",
        description: "Writing the DSP routines that analyze pilot tones to correct for multipath fading in real-time.",
        points: ["Zero-forcing equalizers", "MMSE equalization", "Doppler shift compensation"],
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
        color: "from-orange-500/20 to-red-500/20"
    },
    {
        id: "04",
        title: "Hardware Abstraction",
        description: "Creating the crucial software layer that configures the RF transceivers and ADCs/DACs via SPI.",
        points: ["Gain control loops", "VCO calibration", "Filter switching"],
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=80",
        color: "from-pink-500/20 to-rose-500/20"
    }
];

const LATEST_INSIGHTS = [
  {
    id: 1,
    tag: "5G NR",
    title: "Handling the Complexity of 5G Numerologies in Firmware",
    image: "https://images.unsplash.com/photo-1544377193-33dce4d95d0c?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    tag: "Optimization",
    title: "Minimizing DMA Overhead Between Layer 1 and Layer 2",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    tag: "FEC",
    title: "Turbo Codes vs LDPC: The Tradeoffs at the PHY Layer",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80"
  }
];

const PHY_SUB_SERVICES = [
    { title: "SDR Waveform Development", description: "Writing C/C++ blocks in GNU Radio or explicitly for Xilinx RFSoC to define entirely custom air interfaces.", icon: <Waves className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1544377193-33dce4d95d0c?w=800&auto=format&fit=crop&q=80" },
    { title: "Carrier & Symbol Timing", description: "Implementing Costas loops and Gardner timing recovery algorithms to lock onto incoming signals.", icon: <Target className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=80" },
    { title: "MIMO Processing", description: "Handling the complex matrix math required to separate multiple spatial streams in massive MIMO arrays.", icon: <Network className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80" },
    { title: "Automatic Gain Control", description: "Writing fast-acting AGC loops that prevent ADC clipping while maximizing the dynamic range of faint signals.", icon: <Activity className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=80" },
    { title: "Layer 1 to Layer 2 MAC", description: "Designing the high-throughput FIFO buffers and interrupt structures that pass clean packets up the OSI stack.", icon: <Layers className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80" },
    { title: "EVM Optimization", description: "Measuring Error Vector Magnitude and applying digital pre-distortion to clean up the constellation.", icon: <Zap className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=80" }
];

const PHY_ADVANTAGES = [
    { title: "Deep Standards Knowledge", description: "We have years of experience navigating hundreds of pages of 3GPP and IEEE specifications to ensure absolute compliance.", icon: <Code className="w-6 h-6" /> },
    { title: "RF Hardware Synergy", description: "Because we design the RF hardware, our PHY engineers understand exactly how to compensate for analog imperfections in software.", icon: <Zap className="w-6 h-6" /> },
    { title: "FPGA & DSP Mastery", description: "We don't force algorithms into the wrong architecture. We know exactly when to use a DSP core and when to offload to an FPGA.", icon: <Activity className="w-6 h-6" /> },
    { title: "Custom Lab Equipment", description: "Our labs possess the $100k+ Vector Signal Analyzers required to actually prove the PHY layer is modulating correctly.", icon: <Target className="w-6 h-6" /> }
];

const PHY_FAQ = [
    {
        question: "What exactly does the PHY Layer do?",
        answer: "The Physical (PHY) Layer is responsible for translating raw digital bits (1s and 0s) into physical analog waveforms that can be transmitted over copper wire, optical fiber, or the air."
    },
    {
        question: "Why write a custom PHY instead of buying an off-the-shelf modem chip?",
        answer: "Off-the-shelf chips are great for standard Wi-Fi or LTE. But if you need extreme range, high security, non-standard frequencies, or defense-level jamming resistance, you must define a custom waveform."
    },
    {
        question: "What is OFDM?",
        answer: "Orthogonal Frequency-Division Multiplexing. Instead of sending data really fast on one frequency, it splits the data across hundreds of slower, parallel sub-frequencies. This makes it highly resistant to multipath interference."
    },
    {
        question: "How do you test the PHY layer?",
        answer: "We use loopback testing first (connecting TX to RX in software), then we move to cabled RF testing with attenuators, and finally over-the-air testing in an anechoic chamber."
    }
];

const PHY_ABOUT_METRICS = {
    titlePart1: "About",
    titlePart2: "PHY Layer Development",
    description: "U&WE bridges the gap between digital data and analog reality. We write the highly complex, math-heavy firmware that commands modulators and demodulators at the very bottom of the OSI stack.",
    metrics: [
        { tag: "MODULATION", value: "4096-QAM", label: "Ultra-High Density", image: "https://images.unsplash.com/photo-1544377193-33dce4d95d0c?q=80&w=800&auto=format&fit=crop" },
        { tag: "ARCHITECTURE", value: "SDR", label: "Software Defined Radios", image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800&auto=format&fit=crop" },
        { tag: "ERROR CORRECTION", value: "LDPC", label: "Advanced FEC", image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800&auto=format&fit=crop" },
        { tag: "STANDARDS", value: "3GPP", label: "Telecom Conformance", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" }
    ]
};

const PhyLayer = () => {
    return (
        <ServiceLayout 
            pageKey="phyLayer"
            hero={{
                title: "PHY Layer Development",
                description: "Engineering the foundational modulation, timing, and error correction algorithms that translate digital bits into analog waveforms.",
                primaryButtonText: "Discuss Project",
                secondaryButtonText: "View Capabilities",
                image: heroImage
            }}
            aboutMetrics={PHY_ABOUT_METRICS}
            subServices={PHY_SUB_SERVICES}
            subServicesTitle={{ part1: "Core", part2: "Capabilities" }}
            advantages={PHY_ADVANTAGES}
            advantagesTitle={{ part1: "Why Partner", part2: "With Us" }}
            faqs={PHY_FAQ}
            portal={{
                portalImage: heroImage,
                gridImage: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2564&auto=format&fit=crop",
                collageImages: COLLAGE_IMAGES,
                features: SEQUENCE_FEATURES,
                aboutText: (
                    <p className="text-[clamp(1.1rem,2vw,2.2rem)] font-medium leading-[1.6] tracking-tight text-left text-white">
                        The foundation of transmission.
                        <br className="hidden lg:block mt-2" />
                        We write the code that shapes the airwaves.
                    </p>
                )
            }}
            slider={{
                title: "Latest in Layer 1",
                subtitle: "Insights from our baseband engineers",
                cards: LATEST_INSIGHTS
            }}
            showcase={{
                features: SHOWCASE_FEATURES,
                backgroundText: "PHYSICAL\nLAYER"
            }}
        />
    );
};

export default PhyLayer;

import React from 'react';
import ServiceLayout from '../../../../components/ServiceLayout';
import { Radio, Globe, Satellite, Signal, Activity, ShieldCheck, Waves } from 'lucide-react';
import heroImage from "../../../../assets/imagesss/communication/Satelliet comm.png";

const SEQUENCE_FEATURES = [
    { id: 1, title: "Link Budget & Math", desc: "Calculating Doppler shifts, atmospheric attenuation, and required Eb/N0 margins for orbit." },
    { id: 2, title: "Modem Architecture", desc: "Selecting the correct DVB-S2X or CCSDS modulation schemes for the specific satellite constellation." },
    { id: 3, title: "Tracking Algorithms", desc: "Writing firmware to control physical motors or electronically steered arrays to track LEO/MEO satellites." },
    { id: 4, title: "Space-Grade RTOS", desc: "Porting VxWorks or RTEMS to radiation-hardened processors (e.g. LEON3/4, RAD750)." },
    { id: 5, title: "Hardware-in-the-Loop", desc: "Testing the firmware against a satellite channel emulator that simulates orbit dynamics." },
    { id: 6, title: "Flight Software Cert", desc: "Validating the software against strict DO-178C or ESA ECSS standards for spaceflight." }
];

const COLLAGE_IMAGES = [
    { src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800", scaleIndex: 4, cls: "!-top-[30vh] !left-[5vw] !h-[30vh] !w-[35vw]" },
    { src: "https://images.unsplash.com/photo-1541888062867-b50e417106c5?q=80&w=800", scaleIndex: 5, cls: "!-top-[10vh] !-left-[25vw] !h-[45vh] !w-[20vw]" },
    { src: "https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=800", scaleIndex: 6, cls: "!left-[27.5vw] !h-[25vh] !w-[25vw]" },
    { src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800", scaleIndex: 5, cls: "!top-[27.5vh] !left-[5vw] !h-[25vh] !w-[20vw]" },
    { src: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800", scaleIndex: 6, cls: "!top-[27.5vh] !-left-[22.5vw] !h-[25vh] !w-[30vw]" },
    { src: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800", scaleIndex: 8, cls: "!top-[22.5vh] !left-[25vw] !h-[15vh] !w-[15vw]" },
];

const SHOWCASE_FEATURES = [
    {
        id: "01",
        title: "LEO Constellation Tracking",
        description: "Writing the complex kinematic algorithms to acquire and track low-earth orbit satellites moving at 7 km/s.",
        points: ["Doppler compensation", "Make-before-break handoffs", "Ephemeris calculations"],
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80",
        color: "from-blue-500/20 to-purple-500/20"
    },
    {
        id: "02",
        title: "DVB-S2X Modems",
        description: "Implementing the highly efficient digital video broadcasting standard used for modern satellite broadband.",
        points: ["Adaptive Coding and Modulation (ACM)", "BCH/LDPC encoding", "Carrier synchronization"],
        image: "https://images.unsplash.com/photo-1541888062867-b50e417106c5?w=800&auto=format&fit=crop&q=80",
        color: "from-emerald-500/20 to-teal-500/20"
    },
    {
        id: "03",
        title: "Space-Rated OS Porting",
        description: "Ensuring your flight software survives radiation-induced bit flips by utilizing hardened RTOS distributions.",
        points: ["VxWorks / RTEMS", "Memory scrubbing", "Triple Modular Redundancy (TMR)"],
        image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?w=800&auto=format&fit=crop&q=80",
        color: "from-orange-500/20 to-red-500/20"
    },
    {
        id: "04",
        title: "Ground Station Control",
        description: "Developing the backend infrastructure that manages telemetry, tracking, and command (TT&C) for satellite fleets.",
        points: ["CCSDS protocols", "Antenna Control Units (ACU)", "Secure IPsec tunnels"],
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
        color: "from-pink-500/20 to-rose-500/20"
    }
];

const LATEST_INSIGHTS = [
  {
    id: 1,
    tag: "LEO Tracking",
    title: "Overcoming Doppler Shift in Mega-Constellations",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    tag: "Radiation",
    title: "Software Strategies for Mitigating Single Event Upsets (SEUs)",
    image: "https://images.unsplash.com/photo-1541888062867-b50e417106c5?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    tag: "Standards",
    title: "A Primer on CCSDS Protocols for CubeSat Telemetry",
    image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?w=800&auto=format&fit=crop&q=80"
  }
];

const SATCOM_SUB_SERVICES = [
    { title: "Waveform Implementation", description: "Writing the DSP code for satellite-specific waveforms including DVB-S2X, Iridium, and proprietary defense links.", icon: <Waves className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80" },
    { title: "Antenna Pointing Firmware", description: "Programming PID control loops that command azimuth/elevation motors to track satellites with sub-degree accuracy.", icon: <Satellite className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1541888062867-b50e417106c5?w=800&auto=format&fit=crop&q=80" },
    { title: "Doppler Compensation", description: "Developing dynamic frequency correction algorithms that account for the massive velocity of LEO satellites.", icon: <Activity className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?w=800&auto=format&fit=crop&q=80" },
    { title: "TT&C Processing", description: "Parsing Consultative Committee for Space Data Systems (CCSDS) packets for spacecraft command and telemetry.", icon: <Signal className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80" },
    { title: "Radiation Mitigation Software", description: "Implementing EDAC (Error Detection and Correction) and memory scrubbing routines to survive cosmic rays.", icon: <ShieldCheck className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=80" },
    { title: "Channel Emulation", description: "Testing the modem firmware by simulating atmospheric rain fade, phase noise, and orbital delay in the lab.", icon: <Globe className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80" }
];

const SATCOM_ADVANTAGES = [
    { title: "Space Legacy", description: "We understand the unique constraints of spaceflight: extreme temperatures, hard vacuums, and zero opportunity for physical repair.", icon: <Satellite className="w-6 h-6" /> },
    { title: "Math to Silicon", description: "Satcom is pure mathematics. We model the orbital mechanics and RF link budgets before we write a single line of C code.", icon: <Activity className="w-6 h-6" /> },
    { title: "Security Clearances", description: "We maintain the necessary infrastructure and personnel to work on classified defense and government satcom projects.", icon: <ShieldCheck className="w-6 h-6" /> },
    { title: "Rigorous Certification", description: "Our software development life cycle (SDLC) is designed to produce artifacts that sail through DO-178C or NASA/ESA audits.", icon: <Globe className="w-6 h-6" /> }
];

const SATCOM_FAQ = [
    {
        question: "What is the difference between GEO and LEO satellite tracking?",
        answer: "GEO (Geostationary) satellites remain fixed in the sky relative to the dish. LEO (Low Earth Orbit) satellites move across the sky in minutes, requiring complex firmware to calculate ephemeris data and drive motors to track them."
    },
    {
        question: "How does software survive space radiation?",
        answer: "Cosmic rays cause 'Single Event Upsets'—literally flipping a 0 to a 1 in memory. We mitigate this using Triple Modular Redundancy (running the process three times and voting) and continuous memory scrubbing to detect flipped bits."
    },
    {
        question: "What is Adaptive Coding and Modulation (ACM)?",
        answer: "As a satellite passes through a rainstorm, the signal degrades. ACM is a firmware feature that detects this fade in real-time and dynamically drops to a slower, more robust modulation scheme to prevent the link from dropping."
    },
    {
        question: "Can you help with terrestrial ground station software?",
        answer: "Yes, we write both the flight software that goes into orbit, and the ground-based modem software that decodes the telemetry back on Earth."
    }
];

const SATCOM_ABOUT_METRICS = {
    titlePart1: "About",
    titlePart2: "Satellite Comms Firmware",
    description: "U&WE connects the unconnected. We engineer the highly specialized, math-intensive firmware required to track orbits, compensate for the doppler effect, and maintain unbroken data links from space to Earth.",
    metrics: [
        { tag: "STANDARDS", value: "DVB-S2X", label: "High-Efficiency Modems", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop" },
        { tag: "TRACKING", value: "LEO/MEO", label: "Dynamic Constellations", image: "https://images.unsplash.com/photo-1541888062867-b50e417106c5?q=80&w=800&auto=format&fit=crop" },
        { tag: "PROTOCOLS", value: "CCSDS", label: "Space Data Systems", image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=800&auto=format&fit=crop" },
        { tag: "CERTIFICATION", value: "DO-178C", label: "Flight-Ready Software", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" }
    ]
};

const SatcomFirmware = () => {
    return (
        <ServiceLayout 
            pageKey="satcomFirmware"
            hero={{
                title: "Satellite Comms Firmware",
                description: "Engineering space-grade firmware for ground station modems, orbital tracking systems, and radiation-hardened flight software.",
                primaryButtonText: "Discuss Project",
                secondaryButtonText: "View Capabilities",
                image: heroImage
            }}
            aboutMetrics={SATCOM_ABOUT_METRICS}
            subServices={SATCOM_SUB_SERVICES}
            subServicesTitle={{ part1: "Core", part2: "Capabilities" }}
            advantages={SATCOM_ADVANTAGES}
            advantagesTitle={{ part1: "Why Partner", part2: "With Us" }}
            faqs={SATCOM_FAQ}
            portal={{
                portalImage: heroImage,
                gridImage: "https://images.unsplash.com/photo-1541888062867-b50e417106c5?q=80&w=2564&auto=format&fit=crop",
                collageImages: COLLAGE_IMAGES,
                features: SEQUENCE_FEATURES,
                aboutText: (
                    <p className="text-[clamp(1.1rem,2vw,2.2rem)] font-medium leading-[1.6] tracking-tight text-left text-white">
                        Communicating across the void.
                        <br className="hidden lg:block mt-2" />
                        We engineer software that survives the extremes of space.
                    </p>
                )
            }}
            slider={{
                title: "Latest in Satcom",
                subtitle: "Insights from our aerospace engineers",
                cards: LATEST_INSIGHTS
            }}
            showcase={{
                features: SHOWCASE_FEATURES,
                backgroundText: "SATELLITE\nCOMMS"
            }}
        />
    );
};

export default SatcomFirmware;

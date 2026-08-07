import React from 'react';
import ServiceLayout from '../../../../components/ServiceLayout';
import { Radio, Scan, Zap, Activity, Waves, Settings, Crosshair, Cpu } from 'lucide-react';
import heroImage from "../../../../assets/imagesss/automotive/Radar&LiDAR.png";

const SEQUENCE_FEATURES = [
    { id: 1, title: "RF System Architecture", desc: "Defining the link budget, chirp parameters (FMCW), and FOV requirements for the sensor." },
    { id: 2, title: "MMIC Integration", desc: "Routing 77-79 GHz signals from the MMIC (e.g., TI AWR2944, NXP TEF82xx) to the antenna array." },
    { id: 3, title: "Antenna Design", desc: "Simulating patch antenna arrays in HFSS for specific azimuth/elevation beamforming patterns." },
    { id: 4, title: "Material Selection", desc: "Selecting specialized high-frequency substrates (like Rogers RO3003) to minimize dielectric loss." },
    { id: 5, title: "Laser & APD Layout", desc: "Designing precision timing circuits for LiDAR VCSEL firing and Avalanche Photodiode (APD) capture." },
    { id: 6, title: "Chamber Testing", desc: "Validating EIRP, phase noise, and radiation patterns in an anechoic RF chamber." }
];

const COLLAGE_IMAGES = [
    { src: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800", scaleIndex: 4, cls: "!-top-[30vh] !left-[5vw] !h-[30vh] !w-[35vw]" },
    { src: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=800", scaleIndex: 5, cls: "!-top-[10vh] !-left-[25vw] !h-[45vh] !w-[20vw]" },
    { src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800", scaleIndex: 6, cls: "!left-[27.5vw] !h-[25vh] !w-[25vw]" },
    { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800", scaleIndex: 5, cls: "!top-[27.5vh] !left-[5vw] !h-[25vh] !w-[20vw]" },
    { src: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800", scaleIndex: 6, cls: "!top-[27.5vh] !-left-[22.5vw] !h-[25vh] !w-[30vw]" },
    { src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800", scaleIndex: 8, cls: "!top-[22.5vh] !left-[25vw] !h-[15vh] !w-[15vw]" },
];

const SHOWCASE_FEATURES = [
    {
        id: "01",
        title: "77/79 GHz Imaging Radar",
        description: "Designing the high-frequency RF boards required for cascading multiple MMICs into massive MIMO virtual arrays.",
        points: ["Rogers substrates", "Cascaded MMIC", "FMCW Modulation"],
        image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&auto=format&fit=crop&q=80",
        color: "from-blue-500/20 to-purple-500/20"
    },
    {
        id: "02",
        title: "LiDAR Front-Ends",
        description: "Engineering the nanosecond-precision analog circuitry required to pulse lasers and read single-photon returns.",
        points: ["VCSEL / Edge Emitting", "SPAD / SiPM arrays", "Time-to-Digital Converters"],
        image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&auto=format&fit=crop&q=80",
        color: "from-emerald-500/20 to-teal-500/20"
    },
    {
        id: "03",
        title: "Antenna-in-Package (AiP)",
        description: "Moving the antenna directly into the chip package to eliminate board-level RF routing losses.",
        points: ["Reduced footprint", "Lower insertion loss", "Simplified PCB"],
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
        color: "from-orange-500/20 to-red-500/20"
    },
    {
        id: "04",
        title: "In-Cabin Radar (60 GHz)",
        description: "Designing ultra-short range radar for child presence detection (CPD) and driver vital sign monitoring.",
        points: ["60 GHz ISM Band", "Vital sign extraction", "Low power"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
        color: "from-pink-500/20 to-rose-500/20"
    }
];

const LATEST_INSIGHTS = [
  {
    id: 1,
    tag: "Radar",
    title: "4D Imaging Radar: Cascading MMICs for High Resolution",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    tag: "LiDAR",
    title: "Solid-State LiDAR: Transitioning from Mechanical Scanners to SPADs",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    tag: "Manufacturing",
    title: "PCB Stackups for 77GHz: Balancing Performance and Cost",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80"
  }
];

const SENSOR_SUB_SERVICES = [
    { title: "RF PCB Layout", description: "Routing 77 GHz signals requires extreme precision. We manage via fencing, impedance matching, and trace geometries down to the micron.", icon: <Waves className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&auto=format&fit=crop&q=80" },
    { title: "Antenna Simulation", description: "Using ANSYS HFSS to design custom microstrip patch arrays that perfectly shape the radar beam for long, mid, or short-range modes.", icon: <Radio className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&auto=format&fit=crop&q=80" },
    { title: "Precision Analog Design", description: "LiDAR requires pulsing massive currents into a laser for 1 nanosecond. We design the low-inductance circuits that make this possible.", icon: <Activity className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80" },
    { title: "Radome Interaction", description: "A bumper or emblem acts as a lens. We simulate the dielectric properties of automotive fascias to ensure they don't distort the radar beam.", icon: <Scan className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80" },
    { title: "Time-of-Flight (ToF)", description: "Designing the ultra-fast Time-to-Digital Converter (TDC) circuits required to measure the speed of light accurately.", icon: <Crosshair className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80" },
    { title: "Sensor Compute Processing", description: "Integrating high-performance DSPs or FPGAs locally on the sensor board to process the massive raw FFT data.", icon: <Cpu className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&auto=format&fit=crop&q=80" }
];

const SENSOR_ADVANTAGES = [
    { title: "HFSS Masters", description: "Our RF engineers rely on advanced 3D electromagnetic solvers, reducing the number of expensive board respins required to hit performance targets.", icon: <Waves className="w-6 h-6" /> },
    { title: "Material Science", description: "Standard FR4 burns up 77 GHz signals. We understand the complex supply chain of Rogers, Isola, and Panasonic high-frequency laminates.", icon: <Settings className="w-6 h-6" /> },
    { title: "Chamber Access", description: "We validate our designs in state-of-the-art anechoic chambers to measure exact EIRP, beam width, and side-lobe suppression.", icon: <Radio className="w-6 h-6" /> },
    { title: "Automotive Form Factors", description: "We compress these complex RF and analog circuits into the tiny, thermally constrained packages required for corner radars.", icon: <Scan className="w-6 h-6" /> }
];

const SENSOR_FAQ = [
    {
        question: "Why is 77 GHz radar difficult to design?",
        answer: "At 77 GHz, the wavelength is roughly 4mm. Even microscopic variations in PCB etching, copper surface roughness, or the thickness of solder mask will completely alter the signal's path and ruin the antenna's performance."
    },
    {
        question: "What is a Cascaded Radar?",
        answer: "To get higher resolution (to tell if an object is a bridge or a stopped car), you need more antennas. A single MMIC chip only has a few. Cascading involves linking 2 or 4 chips together, requiring incredibly precise clock synchronization between the chips."
    },
    {
        question: "What is the difference between SPAD and APD in LiDAR?",
        answer: "Avalanche Photodiodes (APDs) multiply the incoming light signal. Single-Photon Avalanche Diodes (SPADs) are so sensitive they can trigger off a single photon. SPAD arrays are replacing APDs because they can be easily integrated into standard CMOS silicon."
    },
    {
        question: "What is a Radome?",
        answer: "It's the plastic cover over the radar (often the car's logo). Because plastic slows down RF waves, it acts like a lens. If the radome's thickness or paint isn't perfectly engineered, it will blind the radar."
    }
];

const SENSOR_ABOUT_METRICS = {
    titlePart1: "About",
    titlePart2: "Automotive Sensor Hardware",
    description: "U&WE designs the physical eyes of the autonomous vehicle. We engineer the complex millimeter-wave RF boards and nanosecond-precision analog circuits required for high-resolution Radar and LiDAR.",
    metrics: [
        { tag: "RADAR", value: "77/79 GHz", label: "Millimeter Wave", image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800&auto=format&fit=crop" },
        { tag: "LIDAR", value: "905/1550nm", label: "Solid-State & ToF", image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=800&auto=format&fit=crop" },
        { tag: "SIMULATION", value: "HFSS", label: "3D EM Modeling", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" },
        { tag: "IN-CABIN", value: "60 GHz", label: "Vital Signs / CPD", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" }
    ]
};

const RadarLidarHardware = () => {
    return (
        <ServiceLayout 
            pageKey="radarLidarHardware"
            hero={{
                title: "Radar & LiDAR Hardware Design",
                description: "Engineering high-frequency 77GHz RF boards, custom patch antenna arrays, and nanosecond-precision LiDAR front-ends.",
                primaryButtonText: "Discuss Project",
                secondaryButtonText: "View Capabilities",
                image: heroImage
            }}
            aboutMetrics={SENSOR_ABOUT_METRICS}
            subServices={SENSOR_SUB_SERVICES}
            subServicesTitle={{ part1: "Core", part2: "Capabilities" }}
            advantages={SENSOR_ADVANTAGES}
            advantagesTitle={{ part1: "Why Partner", part2: "With Us" }}
            faqs={SENSOR_FAQ}
            portal={{
                portalImage: heroImage,
                gridImage: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2564&auto=format&fit=crop",
                collageImages: COLLAGE_IMAGES,
                features: SEQUENCE_FEATURES,
                aboutText: (
                    <p className="text-[clamp(1.1rem,2vw,2.2rem)] font-medium leading-[1.6] tracking-tight text-left text-white">
                        Mastering the millimeter wave.
                        <br className="hidden lg:block mt-2" />
                        We engineer the hardware that makes autonomy possible.
                    </p>
                )
            }}
            slider={{
                title: "Latest in Sensor Hardware",
                subtitle: "Insights from our RF engineers",
                cards: LATEST_INSIGHTS
            }}
            showcase={{
                features: SHOWCASE_FEATURES,
                backgroundText: "SENSORS"
            }}
        />
    );
};

export default RadarLidarHardware;

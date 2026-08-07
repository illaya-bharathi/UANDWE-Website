import React from 'react';
import ServiceLayout from '../../../../components/ServiceLayout';
import { Target, Activity, ShieldCheck, Thermometer, Radio, Settings, Search, CheckCircle2, Layers } from 'lucide-react';
import heroImage from "../../../../assets/imagesss/semiconductor/hardwarevalidation.png";

const SEQUENCE_FEATURES = [
    { id: 1, title: "EVT Phase", desc: "Engineering Validation Testing to prove the core architecture and electrical functionality." },
    { id: 2, title: "DVT Phase", desc: "Design Validation Testing across extreme thermal, mechanical, and environmental corners." },
    { id: 3, title: "PVT Phase", desc: "Production Validation Testing to optimize yield, test times, and assembly procedures." },
    { id: 4, title: "Signal Integrity Analysis", desc: "Measuring eye diagrams, jitter, and TDR on high-speed traces using high-bandwidth oscilloscopes." },
    { id: 5, title: "EMI/EMC Pre-Compliance", desc: "Conducting radiated/conducted emissions scans in our anechoic chambers to guarantee FCC/CE success." },
    { id: 6, title: "Automated Test Equipment", desc: "Designing custom bed-of-nails fixtures and LabVIEW software for factory line end-of-line (EOL) testing." }
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
        title: "Environmental Stress",
        description: "Guaranteeing survival in the harshest conditions known to electronics.",
        points: ["Thermal cycling (-40°C to +85°C)", "Humidity & Salt Fog", "HALT / HASS testing"],
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
        color: "from-blue-500/20 to-purple-500/20"
    },
    {
        id: "02",
        title: "Mechanical Resilience",
        description: "Ensuring your product withstands everyday abuse, drops, and transit vibrations.",
        points: ["Drop testing", "Random vibration profiles", "Ingress Protection (IP67/IP68)"],
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=80",
        color: "from-emerald-500/20 to-teal-500/20"
    },
    {
        id: "03",
        title: "High-Speed SI/PI",
        description: "Proving that physical traces match pre-layout simulations using ultra-high bandwidth gear.",
        points: ["DDR margins", "PCIe compliance eyes", "Power Rail Ripple Analysis"],
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=80",
        color: "from-orange-500/20 to-red-500/20"
    },
    {
        id: "04",
        title: "Factory Automation",
        description: "Designing the hardware and software required to test every unit coming off the assembly line.",
        points: ["Bed-of-Nails fixtures", "Pogo-pin programming", "Automated Python/LabVIEW scripts"],
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=80",
        color: "from-pink-500/20 to-rose-500/20"
    }
];

const LATEST_INSIGHTS = [
  {
    id: 1,
    tag: "Compliance",
    title: "Navigating the Shift from CISPR 22 to CISPR 32 for ITE Devices",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    tag: "Reliability",
    title: "Using HALT to Discover Mechanical Weaknesses in Wearables",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    tag: "Automation",
    title: "Building Python-Based ATE Systems for Low-Volume PCBA Lines",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80"
  }
];

const VALIDATION_SUB_SERVICES = [
    { title: "Lifecycle Management (EVT/DVT/PVT)", description: "Driving the hardware through structured, stage-gate validation phases to systematically eliminate risk.", icon: <Layers className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80" },
    { title: "Environmental & Reliability Testing", description: "Subjecting boards to extreme temperatures, shock, vibration, and humidity to calculate accurate MTBF rates.", icon: <Thermometer className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=80" },
    { title: "Signal & Power Integrity Probing", description: "Utilizing 30GHz+ oscilloscopes to capture eye diagrams, measure jitter, and confirm power delivery stability.", icon: <Activity className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=80" },
    { title: "EMI / EMC Pre-Compliance", description: "Sweeping for radiated and conducted emissions internally before paying thousands of dollars for formal lab certification.", icon: <Radio className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=80" },
    { title: "Automated Test Equipment (ATE)", description: "Designing mechanical fixtures and writing the test sequences that evaluate mass-produced boards in under 30 seconds.", icon: <Settings className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80" },
    { title: "Root Cause Debugging", description: "When a board fails, we don't just report it. We use x-rays, cross-sectioning, and logic analyzers to find the exact root cause.", icon: <Search className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=80" }
];

const VALIDATION_ADVANTAGES = [
    { title: "Zero Surprises", description: "By the time your product reaches a formal certification lab or the factory floor, we have already found and fixed the weak points.", icon: <ShieldCheck className="w-6 h-6" /> },
    { title: "Data-Driven Decisions", description: "We provide comprehensive, mathematically backed validation reports, complete with oscilloscope captures and thermal imaging.", icon: <Activity className="w-6 h-6" /> },
    { title: "Manufacturing Yield Optimization", description: "Our custom ATE fixtures don't just pass/fail units; they log statistical data to help Contract Manufacturers continuously improve yield.", icon: <Target className="w-6 h-6" /> },
    { title: "Regulatory Fluency", description: "We deeply understand the differences between FCC Part 15, CE RED, and automotive CISPR 25, tailoring our test plans accordingly.", icon: <CheckCircle2 className="w-6 h-6" /> }
];

const VALIDATION_FAQ = [
    {
        question: "Why do we need EVT, DVT, and PVT phases?",
        answer: "This methodology controls risk. EVT ensures the core electronics work. DVT ensures the integrated product survives the real world. PVT ensures the factory can build it reliably at scale. Skipping a phase almost always results in expensive recalls."
    },
    {
        question: "Do you provide official CE/FCC certification?",
        answer: "We perform Pre-Compliance. We run the exact same tests in our labs to ensure the device will pass. We then manage the relationship and logistics with an accredited NRTL (Nationally Recognized Testing Laboratory) to secure the official stamps."
    },
    {
        question: "What is HALT testing?",
        answer: "Highly Accelerated Life Testing. We subject the device to extreme, simultaneous temperature changes and six-axis vibration until it physically breaks. This allows us to find the design's ultimate limits and improve its real-world lifespan."
    },
    {
        question: "How do you test boards on the assembly line?",
        answer: "We design 'Bed-of-Nails' fixtures. The operator places the board on a custom jig, pulls down a lever to engage pogo-pins, and a Python script automatically flashes the firmware, pings the sensors, and outputs a Pass/Fail in seconds."
    }
];

const VALIDATION_ABOUT_METRICS = {
    titlePart1: "About",
    titlePart2: "Hardware Validation",
    description: "U&WE subjects hardware to the ultimate trial by fire. We ruthlessly test, measure, and validate electronics to ensure they survive the harshest environments and pass strict global regulations on the first attempt.",
    metrics: [
        { tag: "CERTIFICATION", value: "100%", label: "First-Pass FCC/CE Success", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" },
        { tag: "RELIABILITY", value: "-40 to 85°C", label: "Industrial Thermal Profiling", image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800&auto=format&fit=crop" },
        { tag: "PRECISION", value: "30GHz", label: "Signal Integrity Measurement", image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800&auto=format&fit=crop" },
        { tag: "MANUFACTURING", value: "< 30s", label: "Average ATE Takt Time", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" }
    ]
};

const HardwareValidation = () => {
    return (
        <ServiceLayout 
            pageKey="hardwareValidation"
            hero={{
                title: "Hardware Validation",
                description: "Rigorous electrical, environmental, and regulatory testing to guarantee your product's reliability and path to mass production.",
                primaryButtonText: "Discuss Project",
                secondaryButtonText: "View Capabilities",
                image: heroImage
            }}
            aboutMetrics={VALIDATION_ABOUT_METRICS}
            subServices={VALIDATION_SUB_SERVICES}
            subServicesTitle={{ part1: "Core", part2: "Capabilities" }}
            advantages={VALIDATION_ADVANTAGES}
            advantagesTitle={{ part1: "Why Partner", part2: "With Us" }}
            faqs={VALIDATION_FAQ}
            portal={{
                portalImage: heroImage,
                gridImage: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2564&auto=format&fit=crop",
                collageImages: COLLAGE_IMAGES,
                features: SEQUENCE_FEATURES,
                aboutText: (
                    <p className="text-[clamp(1.1rem,2vw,2.2rem)] font-medium leading-[1.6] tracking-tight text-left text-white">
                        From EVT bring-up to automated PVT factory testing, we manage risk.
                        <br className="hidden lg:block mt-2" />
                        Our validation ensures your product never fails in the customer's hands.
                    </p>
                )
            }}
            slider={{
                title: "Latest in Hardware Testing",
                subtitle: "Insights from our validation engineers",
                cards: LATEST_INSIGHTS
            }}
            showcase={{
                features: SHOWCASE_FEATURES,
                backgroundText: "TESTING\n& QA"
            }}
        />
    );
};

export default HardwareValidation;

import React from 'react';
import ServiceLayout from '../../../../components/ServiceLayout';
import { HeartPulse, BatteryCharging, Radio, Activity, Cpu, Layers, ShieldCheck, Zap } from 'lucide-react';
import heroImage from "../../../../assets/imagesss/healthcare/ImplantableElectronics(AIMD).png";

const SEQUENCE_FEATURES = [
    { id: 1, title: "Architecture", desc: "Designing dual-microcontroller architectures for absolute redundancy (Checker/Worker model)." },
    { id: 2, title: "ASIC Integration", desc: "Collaborating with foundries to design custom mixed-signal ASICs to achieve extreme miniaturization." },
    { id: 3, title: "RF Telemetry", desc: "Designing Medical Implant Communication Service (MICS) band radios for through-body communication." },
    { id: 4, title: "Power Management", desc: "Engineering ultra-low quiescent current PMICs to ensure a primary cell battery lasts 10+ years." },
    { id: 5, title: "Hermetic Sealing", desc: "Designing titanium enclosures and feedthroughs that maintain a total vacuum inside the body." },
    { id: 6, title: "Verification", desc: "Exhaustive fault-injection testing. The device must safely handle any hardware failure without harming the patient." }
];

const COLLAGE_IMAGES = [
    { src: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=800", scaleIndex: 4, cls: "!-top-[30vh] !left-[5vw] !h-[30vh] !w-[35vw]" },
    { src: "https://images.unsplash.com/photo-1532187863486-abf9db0902c3?q=80&w=800", scaleIndex: 5, cls: "!-top-[10vh] !-left-[25vw] !h-[45vh] !w-[20vw]" },
    { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800", scaleIndex: 6, cls: "!left-[27.5vw] !h-[25vh] !w-[25vw]" },
    { src: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=800", scaleIndex: 5, cls: "!top-[27.5vh] !left-[5vw] !h-[25vh] !w-[20vw]" },
    { src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800", scaleIndex: 6, cls: "!top-[27.5vh] !-left-[22.5vw] !h-[25vh] !w-[30vw]" },
    { src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800", scaleIndex: 8, cls: "!top-[22.5vh] !left-[25vw] !h-[15vh] !w-[15vw]" },
];

const SHOWCASE_FEATURES = [
    {
        id: "01",
        title: "Pacemakers & ICDs",
        description: "Designing the fail-safe stimulation circuits that deliver microjoule pacing pulses or 40-joule defibrillation shocks.",
        points: ["High-voltage capacitors", "Sense amplifiers", "10-year battery life"],
        image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&auto=format&fit=crop&q=80",
        color: "from-blue-500/20 to-purple-500/20"
    },
    {
        id: "02",
        title: "Neuromodulation (DBS/SCS)",
        description: "Engineering multi-channel current sources to deliver precise electrical therapy to the brain or spinal cord.",
        points: ["Constant current drivers", "Charge balancing", "Electrode impedance"],
        image: "https://images.unsplash.com/photo-1532187863486-abf9db0902c3?w=800&auto=format&fit=crop&q=80",
        color: "from-emerald-500/20 to-teal-500/20"
    },
    {
        id: "03",
        title: "Cochlear Implants",
        description: "Designing the RF inductive links that transmit both power and high-fidelity audio data through the skin.",
        points: ["Inductive telemetry", "Audio DSP", "Hermetic feedthroughs"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
        color: "from-orange-500/20 to-red-500/20"
    },
    {
        id: "04",
        title: "Implantable Sensors",
        description: "Shrinking pressure sensors and continuous glucose monitors into form factors small enough to be injected via catheter.",
        points: ["Custom ASICs", "MEMS integration", "RFID power harvesting"],
        image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&auto=format&fit=crop&q=80",
        color: "from-pink-500/20 to-rose-500/20"
    }
];

const LATEST_INSIGHTS = [
  {
    id: 1,
    tag: "Power",
    title: "Designing for 10-Year Battery Life in Active Implantable Devices",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    tag: "Telemetry",
    title: "MICS vs. BLE: Choosing the Right Radio for Through-Body Comm",
    image: "https://images.unsplash.com/photo-1532187863486-abf9db0902c3?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    tag: "Safety",
    title: "Single Fault Tolerance: Designing Hardware that Fails Safely",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80"
  }
];

const IMPLANTABLE_SUB_SERVICES = [
    { title: "Ultra-Low Power Design", description: "Every nanoamp matters. We design circuits that idle in the picoamp range, waking up only for microseconds to capture data.", icon: <BatteryCharging className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&auto=format&fit=crop&q=80" },
    { title: "High-Density PCB Layout", description: "Routing 6-layer rigid-flex boards the size of a dime using via-in-pad and bare-die wire bonding techniques.", icon: <Layers className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1532187863486-abf9db0902c3?w=800&auto=format&fit=crop&q=80" },
    { title: "Inductive Telemetry", description: "Designing near-field magnetic coupling coils to wirelessly charge the implant battery and transmit data through flesh.", icon: <Zap className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80" },
    { title: "Medical Radio (MICS)", description: "Tuning 400 MHz antennas designed specifically to propagate RF signals through the high water-content of the human body.", icon: <Radio className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&auto=format&fit=crop&q=80" },
    { title: "Charge Balancing", description: "In neurostimulation, leaving a net DC charge on the brain causes tissue damage. We design AC-coupled hardware blocks to ensure perfect charge neutrality.", icon: <Activity className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&auto=format&fit=crop&q=80" },
    { title: "Single Fault Safety", description: "Hardware must be 'Single Fault Tolerant'. If a transistor shorts, a backup hardware safety switch must immediately disconnect the battery.", icon: <ShieldCheck className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=80" }
];

const IMPLANTABLE_ADVANTAGES = [
    { title: "Class III Experts", description: "We understand the immense responsibility of designing life-sustaining devices. Our engineers are trained in rigorous ISO 14971 risk management.", icon: <ShieldCheck className="w-6 h-6" /> },
    { title: "Custom ASIC Support", description: "When off-the-shelf chips are too big, we help you specify and integrate custom Application Specific Integrated Circuits.", icon: <Cpu className="w-6 h-6" /> },
    { title: "MRI Compatibility", description: "We design hardware that won't heat up, vibrate, or malfunction when subjected to the extreme magnetic fields of a 3 Tesla MRI.", icon: <Activity className="w-6 h-6" /> },
    { title: "Hermetic Packaging", description: "Electronics die quickly in saltwater. We work with mechanical partners to design titanium cans and ceramic feedthroughs that never leak.", icon: <Layers className="w-6 h-6" /> }
];

const IMPLANTABLE_FAQ = [
    {
        question: "What is Single Fault Tolerance?",
        answer: "A regulatory requirement for Class III devices. It means that if any single component on the board fails (like a resistor shorting out), the device must either continue to work perfectly, or fail safely without harming the patient."
    },
    {
        question: "Why use the MICS band instead of Bluetooth?",
        answer: "The Medical Implant Communication Service (MICS) operates around 400 MHz, which penetrates human tissue much better than the 2.4 GHz used by Bluetooth. However, Bluetooth is increasingly being used for implants that don't sit too deep."
    },
    {
        question: "How do you achieve a 10-year battery life?",
        answer: "By designing circuits where the 'off' state draws only pico-amps of current. We use specialized, extremely low-leakage capacitors and program the processor to sleep 99.9% of the time, waking only for a few microseconds to measure a heartbeat."
    },
    {
        question: "What is a 'feedthrough'?",
        answer: "The electronics are sealed in a welded titanium can. But you still need wires to exit the can to connect to the heart or brain. A feedthrough is a complex ceramic-to-metal seal that allows a wire to pass through the titanium wall while maintaining a perfect vacuum inside."
    }
];

const IMPLANTABLE_ABOUT_METRICS = {
    titlePart1: "About",
    titlePart2: "Implantable Electronics",
    description: "U&WE engineers the ultimate edge devices. We design the extreme high-reliability, ultra-low-power electronics that reside inside the human body, where failure is simply not an option.",
    metrics: [
        { tag: "POWER", value: "10+ Yrs", label: "Primary Cell Life", image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=800&auto=format&fit=crop" },
        { tag: "SIZE", value: "Sub-mm", label: "Extreme Miniaturization", image: "https://images.unsplash.com/photo-1532187863486-abf9db0902c3?q=80&w=800&auto=format&fit=crop" },
        { tag: "SAFETY", value: "Class III", label: "Single Fault Tolerant", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" },
        { tag: "COMMS", value: "MICS/BLE", label: "Through-Body RF", image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=800&auto=format&fit=crop" }
    ]
};

const ImplantableElectronics = () => {
    return (
        <ServiceLayout 
            hero={{
                title: "Implantable Electronics (AIMD)",
                description: "Engineering ultra-low-power, single-fault-tolerant hardware for pacemakers, neurostimulators, and smart implants.",
                primaryButtonText: "Discuss Project",
                secondaryButtonText: "View Capabilities",
                image: heroImage
            }}
            aboutMetrics={IMPLANTABLE_ABOUT_METRICS}
            subServices={IMPLANTABLE_SUB_SERVICES}
            subServicesTitle={{ part1: "Core", part2: "Capabilities" }}
            advantages={IMPLANTABLE_ADVANTAGES}
            advantagesTitle={{ part1: "Why Partner", part2: "With Us" }}
            faqs={IMPLANTABLE_FAQ}
            portal={{
                portalImage: heroImage,
                gridImage: "https://images.unsplash.com/photo-1532187863486-abf9db0902c3?q=80&w=2564&auto=format&fit=crop",
                collageImages: COLLAGE_IMAGES,
                features: SEQUENCE_FEATURES,
                aboutText: (
                    <p className="text-[clamp(1.1rem,2vw,2.2rem)] font-medium leading-[1.6] tracking-tight text-left text-white">
                        Engineering for the ultimate frontier.
                        <br className="hidden lg:block mt-2" />
                        We build technology that lives within.
                    </p>
                )
            }}
            slider={{
                title: "Latest in AIMD Design",
                subtitle: "Insights from our hardware architects",
                cards: LATEST_INSIGHTS
            }}
            showcase={{
                features: SHOWCASE_FEATURES,
                backgroundText: "IMPLANTS"
            }}
        />
    );
};

export default ImplantableElectronics;

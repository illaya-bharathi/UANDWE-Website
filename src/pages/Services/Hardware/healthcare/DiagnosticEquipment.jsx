import React from 'react';
import ServiceLayout from '../../../../components/ServiceLayout';
import { Microscope, Thermometer, Settings, Activity, ShieldCheck, Zap, Droplet, Cog, Layers } from 'lucide-react';
import heroImage from "../../../../assets/imagesss/healthcare/Diagnostic&LabEquipment.png";

const SEQUENCE_FEATURES = [
    { id: 1, title: "System Architecture", desc: "Partitioning the hardware into motor control, thermal management, optical sensing, and main processing boards." },
    { id: 2, title: "Motor Control Design", desc: "Designing precision stepper and BLDC motor drivers using Trinamic or TI chips for exact fluidic positioning." },
    { id: 3, title: "Thermal Modeling", desc: "Using ANSYS to design peltier-driven thermal cycling blocks capable of heating/cooling at 5°C per second." },
    { id: 4, title: "Optical Detection", desc: "Engineering ultra-sensitive fluorometers and spectrophotometers using avalanche photodiodes (APDs)." },
    { id: 5, title: "Cable Routing", desc: "Designing complex cable harnesses that can survive millions of cycles on moving robotic arms without fraying." },
    { id: 6, title: "Reliability Testing", desc: "Running Accelerated Life Testing (ALT) to prove the instrument will survive a 10-year lifespan in a high-volume lab." }
];

const COLLAGE_IMAGES = [
    { src: "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=800", scaleIndex: 4, cls: "!-top-[30vh] !left-[5vw] !h-[30vh] !w-[35vw]" },
    { src: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=800", scaleIndex: 5, cls: "!-top-[10vh] !-left-[25vw] !h-[45vh] !w-[20vw]" },
    { src: "https://images.unsplash.com/photo-1532187863486-abf9db0902c3?q=80&w=800", scaleIndex: 6, cls: "!left-[27.5vw] !h-[25vh] !w-[25vw]" },
    { src: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=800", scaleIndex: 5, cls: "!top-[27.5vh] !left-[5vw] !h-[25vh] !w-[20vw]" },
    { src: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800", scaleIndex: 6, cls: "!top-[27.5vh] !-left-[22.5vw] !h-[25vh] !w-[30vw]" },
    { src: "https://images.unsplash.com/photo-1551076805-e1869043e560?q=80&w=800", scaleIndex: 8, cls: "!top-[22.5vh] !left-[25vw] !h-[15vh] !w-[15vw]" },
];

const SHOWCASE_FEATURES = [
    {
        id: "01",
        title: "PCR & Thermal Cyclers",
        description: "Engineering the highly aggressive thermal control systems required to rapidly multiply DNA for genetic testing.",
        points: ["Peltier (TEC) Drivers", "PID control loops", "Uniform block heating"],
        image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&auto=format&fit=crop&q=80",
        color: "from-blue-500/20 to-purple-500/20"
    },
    {
        id: "02",
        title: "Blood Analyzers",
        description: "Designing the precision fluidics control, pumps, and optical sensors needed to count cells and measure hematocrit.",
        points: ["Microfluidic control", "Laser scatter optics", "Spectrophotometry"],
        image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&auto=format&fit=crop&q=80",
        color: "from-emerald-500/20 to-teal-500/20"
    },
    {
        id: "03",
        title: "Liquid Handling Robots",
        description: "Building the multi-axis motor control boards that drive automated pipetting robots in high-throughput labs.",
        points: ["FOC BLDC control", "Closed-loop encoders", "Vibration damping"],
        image: "https://images.unsplash.com/photo-1532187863486-abf9db0902c3?w=800&auto=format&fit=crop&q=80",
        color: "from-orange-500/20 to-red-500/20"
    },
    {
        id: "04",
        title: "Next-Gen Sequencing (NGS)",
        description: "Integrating ultra-high-resolution CMOS imagers and massive FPGA data pipelines to sequence genomes at scale.",
        points: ["TDI imaging", "Massive data flow", "Nanoscale alignment"],
        image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&auto=format&fit=crop&q=80",
        color: "from-pink-500/20 to-rose-500/20"
    }
];

const LATEST_INSIGHTS = [
  {
    id: 1,
    tag: "Thermal",
    title: "Tuning PID Loops for Aggressive Peltier Thermal Cycling",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    tag: "Motion Control",
    title: "Eliminating Resonance in Multi-Axis Liquid Handling Robots",
    image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    tag: "Optics",
    title: "Designing Low-Noise AFEs for Avalanche Photodiode Sensors",
    image: "https://images.unsplash.com/photo-1532187863486-abf9db0902c3?w=800&auto=format&fit=crop&q=80"
  }
];

const DIAGNOSTIC_SUB_SERVICES = [
    { title: "Precision Motor Control", description: "Designing hardware to drive stepper motors with 256-microstep resolution, ensuring fluidic pumps deliver exact microliter volumes.", icon: <Cog className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&auto=format&fit=crop&q=80" },
    { title: "Thermal Engineering", description: "Designing H-Bridge circuits to drive Thermo-Electric Coolers (TECs/Peltiers), managing massive heat flux and thermal expansion stress.", icon: <Thermometer className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&auto=format&fit=crop&q=80" },
    { title: "Optical & Fluorescence", description: "Engineering the analog front-ends (AFEs) that convert single-photon fluorescence events into clean digital data.", icon: <Microscope className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1532187863486-abf9db0902c3?w=800&auto=format&fit=crop&q=80" },
    { title: "Distributed Architectures", description: "Using CAN bus or EtherCAT to connect multiple independent motor, sensor, and thermal nodes to a central Linux host processor.", icon: <Settings className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&auto=format&fit=crop&q=80" },
    { title: "Microfluidic Interfacing", description: "Collaborating with mechanical teams to integrate piezoelectric buzzers and valves that manipulate fluids on lab-on-a-chip cartridges.", icon: <Droplet className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&auto=format&fit=crop&q=80" },
    { title: "EMC for Motors", description: "Mitigating the massive electromagnetic noise generated by PWM motor drivers to ensure the machine passes CISPR 11 emissions testing.", icon: <ShieldCheck className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1551076805-e1869043e560?w=800&auto=format&fit=crop&q=80" }
];

const DIAGNOSTIC_ADVANTAGES = [
    { title: "Mechatronics Experts", description: "Diagnostic equipment is where electronics meets mechanics. We excel at integrating motors, sensors, and fluids.", icon: <Cog className="w-6 h-6" /> },
    { title: "System Partitioning", description: "We know how to split a massive system into smaller, testable sub-boards, making manufacturing and field servicing much easier.", icon: <Layers className="w-6 h-6" /> },
    { title: "Design for Reliability", description: "A lab analyzer running 24/7 will vibrate itself apart if poorly designed. We engineer for million-cycle lifespans.", icon: <Activity className="w-6 h-6" /> },
    { title: "Thermal Mastery", description: "Peltiers fail if over-stressed mechanically or electrically. We design the control algorithms and mounts to prevent thermal fatigue.", icon: <Thermometer className="w-6 h-6" /> }
];

const DIAGNOSTIC_FAQ = [
    {
        question: "What is a Peltier / TEC?",
        answer: "A Thermo-Electric Cooler. It is a solid-state device that acts as a heat pump when electricity is applied. Depending on the direction of current, one side gets very hot, and the other gets very cold. They are used in PCR machines to rapidly cycle DNA samples."
    },
    {
        question: "Why use CAN bus inside a machine?",
        answer: "A large blood analyzer might have 20 different motors and 15 sensors. Running wires for all of them back to one central board is a nightmare. Using a CAN bus allows us to string them all together on just two wires, greatly simplifying the cable harness."
    },
    {
        question: "What is an Avalanche Photodiode (APD)?",
        answer: "When checking for specific proteins (like in a COVID test), the sample often gives off a very faint fluorescent light. An APD is a sensor so sensitive it can amplify and detect a single photon of light."
    },
    {
        question: "How do you control stepper motor vibration?",
        answer: "Stepper motors inherently step in 'chunks', which causes resonance and noise. We design hardware that uses 'micro-stepping'—smoothly varying the current to divide one physical step into 256 microscopic steps, making the motor perfectly silent."
    }
];

const DIAGNOSTIC_ABOUT_METRICS = {
    titlePart1: "About",
    titlePart2: "Diagnostic & Lab Equipment",
    description: "U&WE engineers the mechanics of discovery. We design the complex mechatronics, precision thermal controls, and ultra-sensitive optics that drive In-Vitro Diagnostics (IVD) and high-throughput lab automation.",
    metrics: [
        { tag: "MOTION", value: "Sub-µm", label: "Precision Robotics", image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=800&auto=format&fit=crop" },
        { tag: "THERMAL", value: "5°C/sec", label: "Aggressive Cycling", image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=800&auto=format&fit=crop" },
        { tag: "OPTICS", value: "Single-Photon", label: "APD/PMT Sensing", image: "https://images.unsplash.com/photo-1532187863486-abf9db0902c3?q=80&w=800&auto=format&fit=crop" },
        { tag: "SYSTEMS", value: "CAN/EtherCAT", label: "Distributed Control", image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=800&auto=format&fit=crop" }
    ]
};

const DiagnosticEquipment = () => {
    return (
        <ServiceLayout 
            hero={{
                title: "Diagnostic & Lab Equipment Hardware",
                description: "Engineering precision mechatronics, multi-axis motor control, and Peltier thermal cycling systems for IVD and life science automation.",
                primaryButtonText: "Discuss Project",
                secondaryButtonText: "View Capabilities",
                image: heroImage
            }}
            aboutMetrics={DIAGNOSTIC_ABOUT_METRICS}
            subServices={DIAGNOSTIC_SUB_SERVICES}
            subServicesTitle={{ part1: "Core", part2: "Capabilities" }}
            advantages={DIAGNOSTIC_ADVANTAGES}
            advantagesTitle={{ part1: "Why Partner", part2: "With Us" }}
            faqs={DIAGNOSTIC_FAQ}
            portal={{
                portalImage: heroImage,
                gridImage: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=2564&auto=format&fit=crop",
                collageImages: COLLAGE_IMAGES,
                features: SEQUENCE_FEATURES,
                aboutText: (
                    <p className="text-[clamp(1.1rem,2vw,2.2rem)] font-medium leading-[1.6] tracking-tight text-left text-white">
                        Automating the laboratory.
                        <br className="hidden lg:block mt-2" />
                        We engineer machines that deliver exact answers.
                    </p>
                )
            }}
            slider={{
                title: "Latest in Lab Automation",
                subtitle: "Insights from our mechatronics engineers",
                cards: LATEST_INSIGHTS
            }}
            showcase={{
                features: SHOWCASE_FEATURES,
                backgroundText: "DIAGNOSTICS"
            }}
        />
    );
};

export default DiagnosticEquipment;

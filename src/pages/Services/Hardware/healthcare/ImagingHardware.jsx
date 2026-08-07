import React from 'react';
import ServiceLayout from '../../../../components/ServiceLayout';
import { Aperture, Cpu, Layers, Activity, Radio, Settings, Zap, Database } from 'lucide-react';
import heroImage from "../../../../assets/imagesss/healthcare/MedicalImaging&DAQHardware.png";

const SEQUENCE_FEATURES = [
    { id: 1, title: "Sensor Selection", desc: "Selecting high-channel-count ADCs, piezoelectric arrays, or CMOS photon detectors." },
    { id: 2, title: "High-Speed Layout", desc: "Routing hundreds of gigabit differential pairs with strict length matching and impedance control." },
    { id: 3, title: "FPGA Integration", desc: "Integrating massive Xilinx/Intel FPGAs to deserialize data and perform initial data reduction." },
    { id: 4, title: "Power Integrity", desc: "Simulating the Power Delivery Network (PDN) to ensure stable voltages during massive processing spikes." },
    { id: 5, title: "Thermal Extraction", desc: "Designing copper-coin inserts, thermal vias, and liquid cold plates to cool 100W+ processors." },
    { id: 6, title: "Signal Integrity", desc: "Validating S-parameters and eye diagrams using 50GHz oscilloscopes to ensure zero bit errors." }
];

const COLLAGE_IMAGES = [
    { src: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=800", scaleIndex: 4, cls: "!-top-[30vh] !left-[5vw] !h-[30vh] !w-[35vw]" },
    { src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800", scaleIndex: 5, cls: "!-top-[10vh] !-left-[25vw] !h-[45vh] !w-[20vw]" },
    { src: "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=800", scaleIndex: 6, cls: "!left-[27.5vw] !h-[25vh] !w-[25vw]" },
    { src: "https://images.unsplash.com/photo-1576091160501-bbe57469278b?q=80&w=800", scaleIndex: 5, cls: "!top-[27.5vh] !left-[5vw] !h-[25vh] !w-[20vw]" },
    { src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800", scaleIndex: 6, cls: "!top-[27.5vh] !-left-[22.5vw] !h-[25vh] !w-[30vw]" },
    { src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800", scaleIndex: 8, cls: "!top-[22.5vh] !left-[25vw] !h-[15vh] !w-[15vw]" },
];

const SHOWCASE_FEATURES = [
    {
        id: "01",
        title: "Ultrasound Front-Ends",
        description: "Designing the high-voltage transmitters (pulsers) and ultra-low-noise receivers (LNAs) for 128+ channel ultrasound probes.",
        points: ["Transmit/Receive (T/R) switches", "Time Gain Compensation (TGC)", "High-Voltage Analog"],
        image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=800&auto=format&fit=crop&q=80",
        color: "from-blue-500/20 to-purple-500/20"
    },
    {
        id: "02",
        title: "Data Acquisition (DAQ)",
        description: "Routing JESD204B/C interfaces to funnel massive amounts of raw sensor data into FPGAs for MRI and CT scanners.",
        points: ["Gigabit transceivers", "JESD204B/C", "PCIe Gen 4/5"],
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
        color: "from-emerald-500/20 to-teal-500/20"
    },
    {
        id: "03",
        title: "Endoscopic Cameras",
        description: "Engineering microscopic camera sensors (CMOS) and lighting systems at the tip of a flexible endoscope.",
        points: ["Chip-on-Tip (CoT)", "Micro-coaxial cables", "LED illumination"],
        image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&auto=format&fit=crop&q=80",
        color: "from-orange-500/20 to-red-500/20"
    },
    {
        id: "04",
        title: "X-Ray & Fluoroscopy",
        description: "Designing the readout electronics for flat-panel digital X-ray detectors, balancing high sensitivity with radiation hardness.",
        points: ["TFT arrays", "Charge integrators", "Scintillator interfacing"],
        image: "https://images.unsplash.com/photo-1576091160501-bbe57469278b?w=800&auto=format&fit=crop&q=80",
        color: "from-pink-500/20 to-rose-500/20"
    }
];

const LATEST_INSIGHTS = [
  {
    id: 1,
    tag: "High-Speed Design",
    title: "Routing JESD204C: Strategies for 32 Gbps Data Acquisition",
    image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    tag: "Analog",
    title: "Minimizing Crosstalk in 128-Channel Ultrasound Receivers",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    tag: "Thermal",
    title: "Cooling High-Performance FPGAs in Enclosed Medical Carts",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&auto=format&fit=crop&q=80"
  }
];

const IMAGING_HW_SUB_SERVICES = [
    { title: "High-Speed PCB Layout", description: "Expertise in routing impedance-controlled traces on advanced Rogers/Megtron laminates to prevent signal reflection at gigahertz frequencies.", icon: <Layers className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=800&auto=format&fit=crop&q=80" },
    { title: "Signal & Power Integrity", description: "Using HyperLynx to simulate the layout, ensuring that massive current transients from the FPGA don't cause voltage droop and bit errors.", icon: <Zap className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80" },
    { title: "Precision Mixed-Signal", description: "Isolating the noisy digital processing domain from the incredibly sensitive analog sensor domain using split planes and Faraday cages.", icon: <Radio className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&auto=format&fit=crop&q=80" },
    { title: "FPGA Hardware Design", description: "Designing the power sequencing, clock trees (jitter cleaners), and DDR4 memory interfaces required by massive Stratix or Versal FPGAs.", icon: <Cpu className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1576091160501-bbe57469278b?w=800&auto=format&fit=crop&q=80" },
    { title: "High-Voltage Analog", description: "Ultrasound requires pulsing crystals with ±100V, then immediately listening for microvolt echoes. We design these extreme T/R switches.", icon: <Activity className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&auto=format&fit=crop&q=80" },
    { title: "Optical Interfaces", description: "Using fiber optics (SFP+) to securely transmit massive image datasets across the hospital without electromagnetic interference.", icon: <Database className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80" }
];

const IMAGING_HW_ADVANTAGES = [
    { title: "RF/Microwave Experience", description: "At 10+ Gigabits per second, digital signals act like radio waves. We apply RF principles to digital board design to ensure data integrity.", icon: <Radio className="w-6 h-6" /> },
    { title: "Thermal Engineering", description: "An FPGA processing 4K video generates immense heat. Our mechanical engineers design custom heat pipes and cooling solutions.", icon: <Settings className="w-6 h-6" /> },
    { title: "Manufacturing Partners", description: "Boards with 20+ layers and blind/buried vias require specialized fabrication. We work with the best high-end fabs in the world.", icon: <Layers className="w-6 h-6" /> },
    { title: "Test Equipment", description: "We validate our designs using state-of-the-art Vector Network Analyzers (VNAs) and 50GHz oscilloscopes.", icon: <Activity className="w-6 h-6" /> }
];

const IMAGING_HW_FAQ = [
    {
        question: "What is JESD204?",
        answer: "It is a high-speed serial interface standard. Older ADCs used parallel wires, taking up massive space. JESD204 allows an ADC to send data to an FPGA over a few serial lanes at speeds exceeding 15 Gbps, requiring extreme layout precision."
    },
    {
        question: "Why use Megtron or Rogers PCB materials instead of FR4?",
        answer: "Standard FR4 epoxy absorbs high-frequency signals, turning them into heat (dielectric loss). For high-speed imaging boards, we must use specialized, expensive materials that allow the gigahertz signals to travel without degrading."
    },
    {
        question: "What is a 'Chip-on-Tip' camera?",
        answer: "In older endoscopes, the camera was in the handle, and fiber optics carried the light. Chip-on-Tip puts a microscopic CMOS sensor directly at the tip of the tube, drastically improving image quality."
    },
    {
        question: "How do you isolate noise in an ultrasound system?",
        answer: "An ultrasound receiver is listening for echoes measured in microvolts. If the digital processor's clock signal leaks into the analog side, it will drown out the echo. We use strict physical separation, isolated ground planes, and extensive shielding."
    }
];

const IMAGING_HW_ABOUT_METRICS = {
    titlePart1: "About",
    titlePart2: "Medical Imaging Hardware",
    description: "U&WE designs the high-speed nervous system of diagnostic imaging. We engineer the complex data acquisition boards, high-voltage pulsers, and FPGA processing engines that capture the invisible.",
    metrics: [
        { tag: "SPEED", value: "32+ Gbps", label: "Serial Transceivers", image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=800&auto=format&fit=crop" },
        { tag: "ANALOG", value: "128+ Ch", label: "High-Channel Density", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop" },
        { tag: "COMPUTE", value: "FPGAs", label: "Massive Parallelism", image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=800&auto=format&fit=crop" },
        { tag: "LAYOUT", value: "20+ Layers", label: "Advanced Stackups", image: "https://images.unsplash.com/photo-1576091160501-bbe57469278b?q=80&w=800&auto=format&fit=crop" }
    ]
};

const ImagingHardware = () => {
    return (
        <ServiceLayout 
            hero={{
                title: "Medical Imaging & DAQ Hardware",
                description: "Engineering high-speed Data Acquisition (DAQ) boards, FPGA processing engines, and high-voltage ultrasound front-ends.",
                primaryButtonText: "Discuss Project",
                secondaryButtonText: "View Capabilities",
                image: heroImage
            }}
            aboutMetrics={IMAGING_HW_ABOUT_METRICS}
            subServices={IMAGING_HW_SUB_SERVICES}
            subServicesTitle={{ part1: "Core", part2: "Capabilities" }}
            advantages={IMAGING_HW_ADVANTAGES}
            advantagesTitle={{ part1: "Why Partner", part2: "With Us" }}
            faqs={IMAGING_HW_FAQ}
            portal={{
                portalImage: heroImage,
                gridImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2564&auto=format&fit=crop",
                collageImages: COLLAGE_IMAGES,
                features: SEQUENCE_FEATURES,
                aboutText: (
                    <p className="text-[clamp(1.1rem,2vw,2.2rem)] font-medium leading-[1.6] tracking-tight text-left text-white">
                        Capturing the data of life.
                        <br className="hidden lg:block mt-2" />
                        We engineer boards that process gigabits of physiology.
                    </p>
                )
            }}
            slider={{
                title: "Latest in Imaging Hardware",
                subtitle: "Insights from our electrical engineers",
                cards: LATEST_INSIGHTS
            }}
            showcase={{
                features: SHOWCASE_FEATURES,
                backgroundText: "DATA ACQ"
            }}
        />
    );
};

export default ImagingHardware;

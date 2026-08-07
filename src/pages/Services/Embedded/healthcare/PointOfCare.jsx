import React from 'react';
import ServiceLayout from '../../../../components/ServiceLayout';
import { Monitor, Layers, Cpu, Database, Activity, ShieldCheck, Eye, Terminal } from 'lucide-react';
import heroImage from "../../../../assets/imagesss/healthcare/Point-of-CareDiagnosticSystems.png";

const SEQUENCE_FEATURES = [
    { id: 1, title: "BSP Customization", desc: "Customizing Yocto Linux or Android Open Source Project (AOSP) to boot securely on custom NXP or Qualcomm hardware." },
    { id: 2, title: "Hardware Isolation", desc: "Using hypervisors (e.g., QNX) to isolate the safety-critical measurement engine from the Linux UI." },
    { id: 3, title: "GUI Development", desc: "Building fluid, high-resolution touch interfaces using Qt/QML or embedded React Native." },
    { id: 4, title: "Workflow Logic", desc: "Implementing strict state machines to guide nurses through complex diagnostic workflows error-free." },
    { id: 5, title: "EHR Integration", desc: "Writing middleware to translate diagnostic results into HL7/FHIR formats for the hospital's Electronic Health Record system." },
    { id: 6, title: "Usability Testing", desc: "Conducting IEC 62366 human factors testing to prove the UI prevents use-errors in high-stress clinical environments." }
];

const COLLAGE_IMAGES = [
    { src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800", scaleIndex: 4, cls: "!-top-[30vh] !left-[5vw] !h-[30vh] !w-[35vw]" },
    { src: "https://images.unsplash.com/photo-1551076805-e1869043e560?q=80&w=800", scaleIndex: 5, cls: "!-top-[10vh] !-left-[25vw] !h-[45vh] !w-[20vw]" },
    { src: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800", scaleIndex: 6, cls: "!left-[27.5vw] !h-[25vh] !w-[25vw]" },
    { src: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800", scaleIndex: 5, cls: "!top-[27.5vh] !left-[5vw] !h-[25vh] !w-[20vw]" },
    { src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800", scaleIndex: 6, cls: "!top-[27.5vh] !-left-[22.5vw] !h-[25vh] !w-[30vw]" },
    { src: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceef7?q=80&w=800", scaleIndex: 8, cls: "!top-[22.5vh] !left-[25vw] !h-[15vh] !w-[15vw]" },
];

const SHOWCASE_FEATURES = [
    {
        id: "01",
        title: "In-Vitro Diagnostics (IVD)",
        description: "Controlling the complex fluidics, thermal cyclers, and optics required for DNA sequencing and blood gas analyzers.",
        points: ["Motor control algorithms", "Thermal PID loops", "Optical calibration"],
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
        color: "from-blue-500/20 to-purple-500/20"
    },
    {
        id: "02",
        title: "Patient Monitors",
        description: "Building the real-time, multi-parameter (ECG, SpO2, NIBP) visualization engines that sit beside hospital beds.",
        points: ["Waveform rendering", "Alarm management", "Multi-core SoCs"],
        image: "https://images.unsplash.com/photo-1551076805-e1869043e560?w=800&auto=format&fit=crop&q=80",
        color: "from-emerald-500/20 to-teal-500/20"
    },
    {
        id: "03",
        title: "Surgical Consoles",
        description: "Developing the highly reliable touch interfaces used by surgeons to control robotic instruments and energy devices.",
        points: ["IEC 62304 Class C", "Hypervisor isolation", "Zero-latency video"],
        image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&auto=format&fit=crop&q=80",
        color: "from-orange-500/20 to-red-500/20"
    },
    {
        id: "04",
        title: "Portable Ultrasound",
        description: "Optimizing Linux BSPs to boot in under 5 seconds, allowing EMTs to use diagnostic devices instantly in the field.",
        points: ["Fast boot optimization", "Power management", "GPU acceleration"],
        image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&auto=format&fit=crop&q=80",
        color: "from-pink-500/20 to-rose-500/20"
    }
];

const LATEST_INSIGHTS = [
  {
    id: 1,
    tag: "Architecture",
    title: "Using Hypervisors to Separate UI (Linux) from Safety Control (RTOS)",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    tag: "GUI",
    title: "Qt vs. Web Technologies for Class II Medical Interfaces",
    image: "https://images.unsplash.com/photo-1551076805-e1869043e560?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    tag: "Interoperability",
    title: "Integrating Point-of-Care Devices with Epic via HL7/FHIR",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&auto=format&fit=crop&q=80"
  }
];

const POC_SUB_SERVICES = [
    { title: "Embedded Linux & AOSP", description: "Configuring the Board Support Package (BSP), writing custom kernel drivers, and hardening the OS against cyber threats.", icon: <Terminal className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80" },
    { title: "Qt/QML GUI Development", description: "Designing beautiful, intuitive touch interfaces that render consistently at 60fps using hardware OpenGL acceleration.", icon: <Monitor className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1551076805-e1869043e560?w=800&auto=format&fit=crop&q=80" },
    { title: "Multi-Core Partitioning", description: "On SoCs like the NXP i.MX8, we run Linux on the Cortex-A cores for the UI, and an RTOS on the Cortex-M cores for real-time motor control.", icon: <Cpu className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&auto=format&fit=crop&q=80" },
    { title: "HL7 / FHIR Integration", description: "Writing the application layer to securely transmit patient results to the hospital's LIS (Laboratory Information System).", icon: <Database className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&auto=format&fit=crop&q=80" },
    { title: "Human Factors (IEC 62366)", description: "Collaborating with UX researchers to ensure the software design mitigates the risk of catastrophic user errors.", icon: <Eye className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&auto=format&fit=crop&q=80" },
    { title: "Alarm Management (IEC 60601-1-8)", description: "Implementing strict state machines to manage alarm priorities, visual indicators, and auditory signals.", icon: <Activity className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceef7?w=800&auto=format&fit=crop&q=80" }
];

const POC_ADVANTAGES = [
    { title: "The 'Smart' Device Experts", description: "Transitioning from a simple microcontroller to an Embedded Linux SoC is a massive leap. We have done this for dozens of medical clients.", icon: <Cpu className="w-6 h-6" /> },
    { title: "UI meets Safety", description: "A pretty UI is useless if it crashes during surgery. We know how to isolate the critical control loops from the complex graphics engine.", icon: <ShieldCheck className="w-6 h-6" /> },
    { title: "Hospital IT Ready", description: "A point-of-care device must talk to the hospital. We understand HL7, FHIR, and the strict security requirements of hospital IT administrators.", icon: <Database className="w-6 h-6" /> },
    { title: "Fast Boot Experts", description: "Standard Linux takes 30 seconds to boot. We strip the kernel and optimize the bootloader to get your device ready in under 5 seconds.", icon: <Activity className="w-6 h-6" /> }
];

const POC_FAQ = [
    {
        question: "Why use Embedded Linux for a medical device?",
        answer: "As devices require rich touchscreens, Wi-Fi, and complex networking (HL7), a simple RTOS is no longer enough. Linux provides all these features for free, but requires expertise to make it secure and reliable enough for FDA approval."
    },
    {
        question: "What is a Hypervisor?",
        answer: "If you have a robotic surgery console, you can't let a crash in the touchscreen UI stop the robot arm. A hypervisor is a piece of software that splits the processor in half: one half runs Linux (UI), the other half runs a safe RTOS (Robot). If Linux crashes, the RTOS keeps running."
    },
    {
        question: "What is IEC 62366?",
        answer: "It is the standard for Usability Engineering. The FDA requires proof that a stressed, tired nurse at 3 AM will not misread a dosage on your screen or press the wrong button due to poor UI design."
    },
    {
        question: "Why use Qt instead of Android?",
        answer: "While Android is great for phones, it is massive and changes constantly. Qt allows us to build highly customized, fluid UIs on top of a very stripped-down, stable Linux kernel, which is much easier to certify for a medical device."
    }
];

const POC_ABOUT_METRICS = {
    titlePart1: "About",
    titlePart2: "Point-of-Care Systems",
    description: "U&WE builds the intelligent terminals of modern medicine. We develop the Embedded Linux OS, fluid Qt UIs, and critical control logic for high-end IVD analyzers, patient monitors, and surgical consoles.",
    metrics: [
        { tag: "OS", value: "Linux / AOSP", label: "Embedded Operating Systems", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop" },
        { tag: "UI", value: "Qt/QML", label: "High-Performance Graphics", image: "https://images.unsplash.com/photo-1551076805-e1869043e560?q=80&w=800&auto=format&fit=crop" },
        { tag: "SAFETY", value: "Hypervisor", label: "Multi-Core Isolation", image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop" },
        { tag: "DATA", value: "HL7/FHIR", label: "EHR Interoperability", image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop" }
    ]
};

const PointOfCare = () => {
    return (
        <ServiceLayout 
            pageKey="pointOfCare"
            hero={{
                title: "Point-of-Care Diagnostic Systems",
                description: "Engineering secure Embedded Linux BSPs, Qt touch interfaces, and HL7 connectivity for complex IVD and monitoring equipment.",
                primaryButtonText: "Discuss Project",
                secondaryButtonText: "View Capabilities",
                image: heroImage
            }}
            aboutMetrics={POC_ABOUT_METRICS}
            subServices={POC_SUB_SERVICES}
            subServicesTitle={{ part1: "Core", part2: "Capabilities" }}
            advantages={POC_ADVANTAGES}
            advantagesTitle={{ part1: "Why Partner", part2: "With Us" }}
            faqs={POC_FAQ}
            portal={{
                portalImage: heroImage,
                gridImage: "https://images.unsplash.com/photo-1551076805-e1869043e560?q=80&w=2564&auto=format&fit=crop",
                collageImages: COLLAGE_IMAGES,
                features: SEQUENCE_FEATURES,
                aboutText: (
                    <p className="text-[clamp(1.1rem,2vw,2.2rem)] font-medium leading-[1.6] tracking-tight text-left text-white">
                        Bringing intelligence to the bedside.
                        <br className="hidden lg:block mt-2" />
                        We engineer the interfaces of modern care.
                    </p>
                )
            }}
            slider={{
                title: "Latest in PoC Systems",
                subtitle: "Insights from our systems architects",
                cards: LATEST_INSIGHTS
            }}
            showcase={{
                features: SHOWCASE_FEATURES,
                backgroundText: "DIAGNOSTICS"
            }}
        />
    );
};

export default PointOfCare;

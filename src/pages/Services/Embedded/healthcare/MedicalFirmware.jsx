import React from 'react';
import ServiceLayout from '../../../../components/ServiceLayout';
import { ShieldCheck, Activity, Search, FileText, CheckCircle2, Award, Cpu, Stethoscope, Settings } from 'lucide-react';
import heroImage from "../../../../assets/imagesss/healthcare/MedicalDeviceFirmware(IEC 62304).png";

const SEQUENCE_FEATURES = [
    { id: 1, title: "Requirements Eng.", desc: "Capturing highly traceable Software Requirements Specifications (SRS) linked directly to risk management (ISO 14971)." },
    { id: 2, title: "Architecture Design", desc: "Defining Software Item architectures, enforcing segregation between critical and non-critical components." },
    { id: 3, title: "MISRA C/C++ Coding", desc: "Writing deterministic embedded firmware strictly adhering to MISRA guidelines with static analysis." },
    { id: 4, title: "Unit & Integration Test", desc: "Achieving 100% Statement and Branch coverage (or MC/DC for Class C) using tools like VectorCAST." },
    { id: 5, title: "System Verification", desc: "Executing hardware-in-the-loop (HIL) tests to verify firmware behavior against the original SRS." },
    { id: 6, title: "DHF Documentation", desc: "Auto-generating the trace matrices and test reports required for the Design History File (DHF)." }
];

const COLLAGE_IMAGES = [
    { src: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800", scaleIndex: 4, cls: "!-top-[30vh] !left-[5vw] !h-[30vh] !w-[35vw]" },
    { src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800", scaleIndex: 5, cls: "!-top-[10vh] !-left-[25vw] !h-[45vh] !w-[20vw]" },
    { src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800", scaleIndex: 6, cls: "!left-[27.5vw] !h-[25vh] !w-[25vw]" },
    { src: "https://images.unsplash.com/photo-1532187863486-abf9db0902c3?q=80&w=800", scaleIndex: 5, cls: "!top-[27.5vh] !left-[5vw] !h-[25vh] !w-[20vw]" },
    { src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800", scaleIndex: 6, cls: "!top-[27.5vh] !-left-[22.5vw] !h-[25vh] !w-[30vw]" },
    { src: "https://images.unsplash.com/photo-1551076805-e1869043e560?q=80&w=800", scaleIndex: 8, cls: "!top-[22.5vh] !left-[25vw] !h-[15vh] !w-[15vw]" },
];

const SHOWCASE_FEATURES = [
    {
        id: "01",
        title: "IEC 62304 Compliance",
        description: "Executing the full Software Development Life Cycle (SDLC) required for medical device software certification.",
        points: ["Class A, B, and C", "Traceability Matrix", "Risk Management (ISO 14971)"],
        image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&auto=format&fit=crop&q=80",
        color: "from-blue-500/20 to-purple-500/20"
    },
    {
        id: "02",
        title: "Class II / III Firmware",
        description: "Writing highly deterministic, fail-safe C/C++ firmware for life-sustaining and critical therapeutic devices.",
        points: ["Infusion pumps", "Ventilators", "Neuromodulators"],
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=80",
        color: "from-emerald-500/20 to-teal-500/20"
    },
    {
        id: "03",
        title: "SOUP Integration",
        description: "Safely integrating Software of Unknown Provenance (SOUP) like open-source RTOSs or third-party libraries.",
        points: ["SOUP evaluation", "Wrapper development", "Anomaly tracking"],
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80",
        color: "from-orange-500/20 to-red-500/20"
    },
    {
        id: "04",
        title: "Rigorous Verification",
        description: "Proving the absence of unintended behavior through exhaustive unit, integration, and static analysis testing.",
        points: ["100% Code Coverage", "MC/DC testing", "Hardware-in-the-Loop"],
        image: "https://images.unsplash.com/photo-1532187863486-abf9db0902c3?w=800&auto=format&fit=crop&q=80",
        color: "from-pink-500/20 to-rose-500/20"
    }
];

const LATEST_INSIGHTS = [
  {
    id: 1,
    tag: "Regulation",
    title: "Navigating FDA 510(k) Software Submissions in 2024",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    tag: "Safety",
    title: "Handling SOUP: Integrating Open Source into Class III Devices",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    tag: "Testing",
    title: "Achieving 100% MC/DC Coverage on Complex DSP Algorithms",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80"
  }
];

const FIRMWARE_SUB_SERVICES = [
    { title: "Bare-Metal & RTOS", description: "Developing hard-real-time control loops using SafeRTOS, Micrium, or bare-metal state machines for highly predictable execution.", icon: <Cpu className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&auto=format&fit=crop&q=80" },
    { title: "Defensive Coding", description: "Enforcing MISRA C:2012 / CERT C standards to eliminate undefined behavior, buffer overflows, and memory leaks.", icon: <ShieldCheck className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=80" },
    { title: "Algorithm Implementation", description: "Translating MATLAB/Simulink models of physiological algorithms into highly optimized, fixed-point C code.", icon: <Activity className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80" },
    { title: "Test Automation", description: "Building Python-based test frameworks to automatically stimulate the hardware and assert expected outputs overnight.", icon: <Settings className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1532187863486-abf9db0902c3?w=800&auto=format&fit=crop&q=80" },
    { title: "Hardware Interfacing", description: "Writing low-level drivers to accurately read ADCs for ECGs, pulse oximeters, and high-precision flow sensors.", icon: <Stethoscope className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&auto=format&fit=crop&q=80" },
    { title: "Regulatory Documentation", description: "We don't just write code; we write the Software Architecture Document (SAD), SRS, and trace matrices required for FDA approval.", icon: <FileText className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1551076805-e1869043e560?w=800&auto=format&fit=crop&q=80" }
];

const FIRMWARE_ADVANTAGES = [
    { title: "ISO 13485 Certified", description: "We operate under a mature, audited Quality Management System designed specifically for medical device development.", icon: <Award className="w-6 h-6" /> },
    { title: "Process Excellence", description: "We use tools like Polarion or Jama to ensure a 1-to-1 linkage between every line of code, its requirement, and its test.", icon: <CheckCircle2 className="w-6 h-6" /> },
    { title: "Therapeutic Experience", description: "Our team has written firmware for pacemakers, ventilators, and infusion pumps—devices where failure is not an option.", icon: <Activity className="w-6 h-6" /> },
    { title: "Auditor Ready", description: "We produce clean, organized Design History Files (DHF) that drastically reduce questions during FDA or Notified Body reviews.", icon: <FileText className="w-6 h-6" /> }
];

const FIRMWARE_FAQ = [
    {
        question: "What is IEC 62304?",
        answer: "It is the international standard for medical device software lifecycle processes. It dictates how software must be planned, designed, implemented, tested, and maintained to ensure patient safety."
    },
    {
        question: "What are Software Safety Classes (A, B, C)?",
        answer: "IEC 62304 classifies software by risk. Class A means no injury is possible. Class B means non-serious injury is possible. Class C means death or serious injury is possible. Class C requires the most exhaustive testing and documentation."
    },
    {
        question: "What is SOUP?",
        answer: "Software of Unknown Provenance. It refers to off-the-shelf software (like Linux, FreeRTOS, or a math library) that you didn't write. IEC 62304 has strict rules on how to evaluate and safely use SOUP in a medical device."
    },
    {
        question: "Do you provide the documentation for our FDA submission?",
        answer: "Yes. The code is only half the deliverable. We provide the complete set of software artifacts (SRS, Architecture, Unit Tests, Traceability Matrix) ready to be dropped into your 510(k) or PMA submission."
    }
];

const FIRMWARE_ABOUT_METRICS = {
    titlePart1: "About",
    titlePart2: "Medical Firmware",
    description: "U&WE develops life-critical software. We engineer deeply embedded, highly deterministic firmware that drives complex therapeutic and diagnostic devices, adhering strictly to global medical standards.",
    metrics: [
        { tag: "STANDARD", value: "IEC 62304", label: "Software Lifecycle", image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop" },
        { tag: "SAFETY", value: "Class C", label: "Life Sustaining", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop" },
        { tag: "QUALITY", value: "ISO 13485", label: "Certified QMS", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop" },
        { tag: "CODING", value: "MISRA", label: "Defensive C/C++", image: "https://images.unsplash.com/photo-1532187863486-abf9db0902c3?q=80&w=800&auto=format&fit=crop" }
    ]
};

const MedicalFirmware = () => {
    return (
        <ServiceLayout 
            pageKey="medicalFirmware"
            hero={{
                title: "Medical Device Firmware (IEC 62304)",
                description: "Developing highly reliable, deterministic embedded firmware for Class II and III medical devices with full regulatory documentation.",
                primaryButtonText: "Discuss Project",
                secondaryButtonText: "View Capabilities",
                image: heroImage
            }}
            aboutMetrics={FIRMWARE_ABOUT_METRICS}
            subServices={FIRMWARE_SUB_SERVICES}
            subServicesTitle={{ part1: "Core", part2: "Capabilities" }}
            advantages={FIRMWARE_ADVANTAGES}
            advantagesTitle={{ part1: "Why Partner", part2: "With Us" }}
            faqs={FIRMWARE_FAQ}
            portal={{
                portalImage: heroImage,
                gridImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2564&auto=format&fit=crop",
                collageImages: COLLAGE_IMAGES,
                features: SEQUENCE_FEATURES,
                aboutText: (
                    <p className="text-[clamp(1.1rem,2vw,2.2rem)] font-medium leading-[1.6] tracking-tight text-left text-white">
                        Code that saves lives.
                        <br className="hidden lg:block mt-2" />
                        We build firmware where failure is not an option.
                    </p>
                )
            }}
            slider={{
                title: "Latest in Medical Firmware",
                subtitle: "Insights from our compliance engineers",
                cards: LATEST_INSIGHTS
            }}
            showcase={{
                features: SHOWCASE_FEATURES,
                backgroundText: "IEC 62304"
            }}
        />
    );
};

export default MedicalFirmware;

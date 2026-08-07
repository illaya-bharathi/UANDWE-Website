import React from 'react';
import ServiceLayout from '../../../../components/ServiceLayout';
import { ShieldCheck, Activity, Search, AlertTriangle, CheckCircle2, FileText, Settings, Award } from 'lucide-react';
import heroImage from "../../../../assets/imagesss/automotive/functionalsafety(ISO26262).png";

const SEQUENCE_FEATURES = [
    { id: 1, title: "HARA Analysis", desc: "Conducting Hazard Analysis and Risk Assessment to determine the ASIL (A/B/C/D) requirement." },
    { id: 2, title: "Safety Concept", desc: "Defining the Functional Safety Concept (FSC) and Technical Safety Concept (TSC) architectures." },
    { id: 3, title: "FMEA / FMEDA", desc: "Performing Failure Mode, Effects, and Diagnostic Analysis to calculate hardware architectural metrics (SPFM, LFM)." },
    { id: 4, title: "Software Arch", desc: "Designing software with freedom from interference (FFI) using memory protection and execution monitoring." },
    { id: 5, title: "MISRA / CERT", desc: "Enforcing strict coding guidelines using static analysis tools like Polyspace or Coverity." },
    { id: 6, title: "Safety Case", desc: "Compiling the final comprehensive Safety Case required for independent assessor certification." }
];

const COLLAGE_IMAGES = [
    { src: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=80&w=800", scaleIndex: 4, cls: "!-top-[30vh] !left-[5vw] !h-[30vh] !w-[35vw]" },
    { src: "https://images.unsplash.com/photo-1563770660941-20978e870e26?q=80&w=800", scaleIndex: 5, cls: "!-top-[10vh] !-left-[25vw] !h-[45vh] !w-[20vw]" },
    { src: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800", scaleIndex: 6, cls: "!left-[27.5vw] !h-[25vh] !w-[25vw]" },
    { src: "https://images.unsplash.com/photo-1620802051772-9ea373307bdf?q=80&w=800", scaleIndex: 5, cls: "!top-[27.5vh] !left-[5vw] !h-[25vh] !w-[20vw]" },
    { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800", scaleIndex: 6, cls: "!top-[27.5vh] !-left-[22.5vw] !h-[25vh] !w-[30vw]" },
    { src: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800", scaleIndex: 8, cls: "!top-[22.5vh] !left-[25vw] !h-[15vh] !w-[15vw]" },
];

const SHOWCASE_FEATURES = [
    {
        id: "01",
        title: "ISO 26262 Lifecycle",
        description: "Managing the entire safety lifecycle from concept phase to final decommissioning.",
        points: ["V-Model execution", "Safety Management (Part 2)", "Software Development (Part 6)"],
        image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=800&auto=format&fit=crop&q=80",
        color: "from-blue-500/20 to-purple-500/20"
    },
    {
        id: "02",
        title: "ASIL D Software",
        description: "Writing deterministic, fault-tolerant C/C++ code for the most critical automotive systems (steering/braking).",
        points: ["E2E Protection", "Program Flow Monitoring", "Memory Partitioning (MPU)"],
        image: "https://images.unsplash.com/photo-1563770660941-20978e870e26?w=800&auto=format&fit=crop&q=80",
        color: "from-emerald-500/20 to-teal-500/20"
    },
    {
        id: "03",
        title: "SOTIF (ISO 21448)",
        description: "Addressing the 'Safety of the Intended Functionality' for autonomous systems where AI decisions cause hazards without component failure.",
        points: ["Scenario-based testing", "Sensor limitations", "Edge case validation"],
        image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&auto=format&fit=crop&q=80",
        color: "from-orange-500/20 to-red-500/20"
    },
    {
        id: "04",
        title: "Automotive Cybersecurity",
        description: "Integrating ISO/SAE 21434 because a system cannot be functionally safe if it is not secure.",
        points: ["TARA (Threat Analysis)", "Secure Boot", "Hardware Security Modules (HSM)"],
        image: "https://images.unsplash.com/photo-1620802051772-9ea373307bdf?w=800&auto=format&fit=crop&q=80",
        color: "from-pink-500/20 to-rose-500/20"
    }
];

const LATEST_INSIGHTS = [
  {
    id: 1,
    tag: "ISO 26262",
    title: "Navigating the Complexities of ASIL Decomposition",
    image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    tag: "SOTIF",
    title: "Why Traditional Functional Safety Fails for Autonomous Driving",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    tag: "Cybersecurity",
    title: "The Intersection of ISO 26262 and ISO 21434",
    image: "https://images.unsplash.com/photo-1620802051772-9ea373307bdf?w=800&auto=format&fit=crop&q=80"
  }
];

const SAFETY_SUB_SERVICES = [
    { title: "Safety Management", description: "Providing dedicated Functional Safety Managers (FSM) to oversee process adherence and audit preparation.", icon: <ShieldCheck className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=800&auto=format&fit=crop&q=80" },
    { title: "Hardware FMEDA", description: "Calculating FIT (Failure in Time) rates and diagnostic coverage to prove hardware meets ASIL metrics.", icon: <Activity className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1563770660941-20978e870e26?w=800&auto=format&fit=crop&q=80" },
    { title: "Software Safety Arch", description: "Designing fail-operational and fail-safe architectures using ASIL decomposition and redundancy.", icon: <Settings className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&auto=format&fit=crop&q=80" },
    { title: "Static/Dynamic Analysis", description: "Executing 100% MC/DC (Modified Condition/Decision Coverage) testing to prove the absence of unintended behavior.", icon: <Search className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1620802051772-9ea373307bdf?w=800&auto=format&fit=crop&q=80" },
    { title: "SOTIF Consulting", description: "Applying ISO 21448 methodologies to AI-driven ADAS systems that face unknown/unsafe scenarios.", icon: <AlertTriangle className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80" },
    { title: "Safety Case Compilation", description: "Generating the massive documentation trail required to prove to independent auditors that a vehicle is safe.", icon: <FileText className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=80" }
];

const SAFETY_ADVANTAGES = [
    { title: "Certified Experts", description: "Our team includes TÜV Rheinland certified Functional Safety Engineers and Managers.", icon: <Award className="w-6 h-6" /> },
    { title: "Pragmatic Safety", description: "We don't just generate paperwork. We integrate safety mechanisms directly into the code and hardware architecture efficiently.", icon: <Activity className="w-6 h-6" /> },
    { title: "Holistic View", description: "Because we design hardware, write software, and integrate AUTOSAR, we understand how a fault propagates through the entire system.", icon: <Search className="w-6 h-6" /> },
    { title: "Tool Qualification", description: "We assist in qualifying your compilers and test tools to TCL3 standards, satisfying ISO 26262 Part 8.", icon: <CheckCircle2 className="w-6 h-6" /> }
];

const SAFETY_FAQ = [
    {
        question: "What does ASIL mean?",
        answer: "Automotive Safety Integrity Level. It ranges from A (lowest risk) to D (highest risk, e.g., steering or brakes). ASIL D requires the most rigorous, mathematical development processes."
    },
    {
        question: "Is Functional Safety just testing?",
        answer: "No. Functional safety starts at the concept phase. It dictates how the architecture is designed, what microcontrollers are chosen, how code is written, and how the organization manages processes."
    },
    {
        question: "What is ASIL Decomposition?",
        answer: "If a system requires ASIL D, you can sometimes achieve this by combining two independent, redundant ASIL B (or ASIL C + ASIL A) systems. This often saves development costs on complex hardware."
    },
    {
        question: "What is the difference between ISO 26262 and SOTIF (ISO 21448)?",
        answer: "ISO 26262 covers failures (a wire breaks, RAM flips a bit, software has a bug). SOTIF covers situations where the system works perfectly as designed, but the design itself is unsafe (e.g., an AI confuses a white truck for the sky)."
    }
];

const SAFETY_ABOUT_METRICS = {
    titlePart1: "About",
    titlePart2: "Functional Safety",
    description: "U&WE engineers systems that never fail dangerously. We guide automotive OEMs and Tier-1s through the rigorous ISO 26262 lifecycle, ensuring their hardware and software architectures are fundamentally safe.",
    metrics: [
        { tag: "STANDARD", value: "ISO 26262", label: "Functional Safety", image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=80&w=800&auto=format&fit=crop" },
        { tag: "LEVEL", value: "ASIL D", label: "Highest Integrity", image: "https://images.unsplash.com/photo-1563770660941-20978e870e26?q=80&w=800&auto=format&fit=crop" },
        { tag: "AUTONOMY", value: "SOTIF", label: "ISO 21448", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop" },
        { tag: "SECURITY", value: "ISO 21434", label: "Cybersecurity", image: "https://images.unsplash.com/photo-1620802051772-9ea373307bdf?q=80&w=800&auto=format&fit=crop" }
    ]
};

const FunctionalSafety = () => {
    return (
        <ServiceLayout 
            pageKey="functionalSafety"
            hero={{
                title: "Functional Safety (ISO 26262)",
                description: "End-to-end safety lifecycle management, ASIL D software development, and SOTIF compliance for critical automotive systems.",
                primaryButtonText: "Discuss Project",
                secondaryButtonText: "View Capabilities",
                image: heroImage
            }}
            aboutMetrics={SAFETY_ABOUT_METRICS}
            subServices={SAFETY_SUB_SERVICES}
            subServicesTitle={{ part1: "Core", part2: "Capabilities" }}
            advantages={SAFETY_ADVANTAGES}
            advantagesTitle={{ part1: "Why Partner", part2: "With Us" }}
            faqs={SAFETY_FAQ}
            portal={{
                portalImage: heroImage,
                gridImage: "https://images.unsplash.com/photo-1563770660941-20978e870e26?q=80&w=2564&auto=format&fit=crop",
                collageImages: COLLAGE_IMAGES,
                features: SEQUENCE_FEATURES,
                aboutText: (
                    <p className="text-[clamp(1.1rem,2vw,2.2rem)] font-medium leading-[1.6] tracking-tight text-left text-white">
                        Engineering trust into software.
                        <br className="hidden lg:block mt-2" />
                        We ensure your systems fail safely, every time.
                    </p>
                )
            }}
            slider={{
                title: "Latest in Safety",
                subtitle: "Insights from our functional safety managers",
                cards: LATEST_INSIGHTS
            }}
            showcase={{
                features: SHOWCASE_FEATURES,
                backgroundText: "ISO 26262"
            }}
        />
    );
};

export default FunctionalSafety;

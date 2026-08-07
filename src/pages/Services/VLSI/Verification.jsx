import React from 'react';
import ServiceLayout from '../../../components/ServiceLayout';
import { ShieldCheck, Cpu, Code, Target, FastForward, CheckCircle2, Award, Globe, Zap } from 'lucide-react';
import heroImage from "../../../assets/imagesss/semiconductor/verification.png";

const SEQUENCE_FEATURES = [
    { id: 1, title: "UVM Methodology", desc: "Building scalable, reusable Universal Verification Methodology testbenches." },
    { id: 2, title: "Constrained Random Testing", desc: "Generating edge-case stimuli to hit corner cases impossible to find manually." },
    { id: 3, title: "Assertion-Based Verification", desc: "Using SVA to mathematically prove the correctness of complex protocols." },
    { id: 4, title: "Code & Functional Coverage", desc: "Tracking exactly what has been tested to guarantee 100% specification adherence." },
    { id: 5, title: "Gate-Level Simulation (GLS)", desc: "Validating the synthesized netlist with annotated delays to catch timing violations." },
    { id: 6, title: "Hardware Emulation", desc: "Mapping designs to Palladium or Zebu platforms for software bring-up acceleration." }
];

const DUMMY_SUB_SERVICES = [
    { title: "UVM Methodology", description: "Building scalable, reusable Universal Verification Methodology testbenches.", icon: <Cpu className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80" },
    { title: "Constrained Random", description: "Generating edge-case stimuli to hit corner cases impossible to find manually.", icon: <Target className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=80" },
    { title: "Assertion-Based Verification", description: "Using SVA to mathematically prove the correctness of complex protocols.", icon: <ShieldCheck className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=80" },
    { title: "Code & Functional Coverage", description: "Tracking exactly what has been tested to guarantee 100% specification adherence.", icon: <CheckCircle2 className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=80" },
    { title: "Gate-Level Simulation (GLS)", description: "Validating the synthesized netlist with annotated delays to catch timing violations.", icon: <FastForward className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80" },
    { title: "Hardware Emulation", description: "Mapping designs to Palladium or Zebu platforms for software bring-up acceleration.", icon: <Code className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=80" }
];

const DUMMY_ADVANTAGES = [
    { title: "Zero-Defect Sign-off", description: "Our rigorous verification methodologies ensure absolute compliance with your specifications, drastically reducing the risk of expensive silicon respins.", icon: <ShieldCheck className="w-6 h-6" /> },
    { title: "Global Talent Pool", description: "Access a worldwide network of elite verification engineers, ready to scale and integrate seamlessly with your internal teams across any time zone.", icon: <Globe className="w-6 h-6" /> },
    { title: "Accelerated Time-to-Market", description: "By leveraging AI-powered debug tools and highly reusable UVM testbenches, we cut down verification cycles and get your chip to market faster.", icon: <Zap className="w-6 h-6" /> },
    { title: "Industry Standard Compliance", description: "Deep expertise in automotive (ISO 26262), aerospace, and mobile standards, ensuring your chips meet the strictest regulatory requirements.", icon: <Award className="w-6 h-6" /> }
];

const DUMMY_FAQ = [
    {
        question: "Do you integrate with our internal engineering teams?",
        answer: "Absolutely. Our engineers are trained to integrate seamlessly with your internal workflows, utilizing your preferred version control systems, bug trackers, and communication channels. We act as an extension of your own team."
    },
    {
        question: "What is your approach to IP security?",
        answer: "We take IP security very seriously. We operate out of ISO 27001 certified Global Delivery Centers with strict access controls, secure VPNs, and isolated networks. All team members undergo rigorous NDA and security compliance training."
    },
    {
        question: "Can you handle verification for advanced sub-5nm nodes?",
        answer: "Yes. We have extensive experience performing sign-off for complex SoCs on advanced TSMC, Samsung, and Intel nodes, handling the specific challenges of low-power and high-frequency designs."
    },
    {
        question: "Do you provide your own EDA tools and licenses?",
        answer: "We offer flexible engagement models. We can either utilize your existing EDA tool licenses through secure remote access, or we can provide our own licenses for Cadence, Synopsys, and Siemens tools depending on the project requirements."
    }
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
        title: "Advanced Nodes",
        description: "Expertise in designing for cutting-edge TSMC, Samsung, and Intel process nodes.",
        points: ["FinFET architectures", "GAA technology", "Sub-5nm challenges"],
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
        color: "from-blue-500/20 to-purple-500/20"
    },
    {
        id: "02",
        title: "PPA Optimization",
        description: "Striking the perfect balance between Power, Performance, and Area.",
        points: ["Low power techniques", "High-frequency tuning", "Area miniaturization"],
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=80",
        color: "from-emerald-500/20 to-teal-500/20"
    },
    {
        id: "03",
        title: "First-Pass Success",
        description: "Rigorous methodologies designed to prevent costly re-spins.",
        points: ["Zero-defect tolerance", "Comprehensive verification", "Thorough sign-off"],
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=80",
        color: "from-orange-500/20 to-red-500/20"
    },
    {
        id: "04",
        title: "Industry Standards",
        description: "Ensuring designs meet strict automotive, medical, and aerospace protocols.",
        points: ["ISO 26262 compliance", "DO-254", "Silicon reliability"],
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=80",
        color: "from-pink-500/20 to-rose-500/20"
    }
];

const LATEST_INSIGHTS = [
  {
    id: 1,
    tag: "Silicon",
    title: "Overcoming Routing Congestion in 3nm FinFET Designs",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    tag: "Verification",
    title: "Scaling UVM Testbenches for Complex Multi-Core SoCs",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    tag: "Power",
    title: "Advanced Clock Gating Strategies for Mobile Architectures",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80"
  }
];

const DUMMY_ABOUT_METRICS = {
    titlePart1: "About",
    titlePart2: "Verification",
    description: "U&WE Verification helps semiconductor companies build a resilient and robust verification posture. We offer end-to-end services in methodology, implementation, and sign-off, leveraging a coverage-centric approach and AI-powered debug solutions.",
    metrics: [
        { tag: "UVM TESTBENCHES", value: "250+", label: "Reusable Environments Built", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop" },
        { tag: "FIRST-PASS", value: "99%", label: "Silicon Success Rate", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop" },
        { tag: "PARTNERS", value: "30+", label: "Strategic EDA Partnerships", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" },
        { tag: "COVERAGE", value: "100%", label: "Functional Sign-off", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" }
    ]
};

const Verification = () => {
    return (
        <ServiceLayout 
            pageKey="verification"
            hero={{
                title: "Verification",
                description: "Ensuring first-pass silicon success through rigorous, coverage-driven verification methodologies.",
                primaryButtonText: "Discuss Project",
                secondaryButtonText: "View Capabilities",
                image: heroImage
            }}
            aboutMetrics={DUMMY_ABOUT_METRICS}
            subServices={DUMMY_SUB_SERVICES}
            subServicesTitle={{ part1: "Our", part2: "Expertise" }}
            advantages={DUMMY_ADVANTAGES}
            advantagesTitle={{ part1: "Why Partner", part2: "With Us" }}
            faqs={DUMMY_FAQ}
            portal={{
                portalImage: heroImage,
                gridImage: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2564&auto=format&fit=crop",
                collageImages: COLLAGE_IMAGES,
                features: SEQUENCE_FEATURES,
                aboutText: (
                    <p className="text-[clamp(1.1rem,2vw,2.2rem)] font-medium leading-[1.6] tracking-tight text-left text-white">
                        From architecture to GDSII, we deliver flawless silicon IP and SoC designs.
                        <br className="hidden lg:block mt-2" />
                        Our engineering mastery ensures maximum performance on the most advanced nodes.
                    </p>
                )
            }}
            slider={{
                title: "Latest in VLSI Design",
                subtitle: "Insights from our silicon architects",
                cards: LATEST_INSIGHTS
            }}
            showcase={{
                features: SHOWCASE_FEATURES,
                backgroundText: "SILICON\nDESIGN"
            }}
        />
    );
};

export default Verification;

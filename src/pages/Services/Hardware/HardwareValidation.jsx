import React from 'react';
import ServiceLayout from '../../../components/ServiceLayout';

const SEQUENCE_FEATURES = [
    { id: 1, title: "Functional Validation", desc: "Verify complete hardware functionality to ensure every subsystem performs as intended under real-world conditions." },
    { id: 2, title: "System Verification", desc: "Perform comprehensive testing to validate hardware, firmware, and software integration." },
    { id: 3, title: "Performance Evaluation", desc: "Measure speed, power consumption, thermal behavior, and overall system efficiency." },
    { id: 4, title: "Reliability Testing", desc: "Assess product stability through environmental, stress, and endurance testing for long-term reliability." },
    { id: 5, title: "Compliance & Certification", desc: "Prepare hardware for industry standards and regulatory certifications including EMI/EMC and safety requirements." },
    { id: 6, title: "Production Validation", desc: "Ensure manufacturing readiness with production testing, quality checks, and validation processes." }
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
        title: "Precision Engineering",
        description: "Meticulous attention to detail at the component and trace level.",
        points: ["Signal Integrity Optimization", "Thermal Management", "Miniaturization"],
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
        color: "from-blue-500/20 to-purple-500/20"
    },
    {
        id: "02",
        title: "Manufacturability (DFM)",
        description: "Designs strictly optimized for high-yield mass production.",
        points: ["BOM Optimization", "Assembly Guidelines", "Testing Access"],
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=80",
        color: "from-emerald-500/20 to-teal-500/20"
    },
    {
        id: "03",
        title: "Regulatory Compliance",
        description: "Built from the ground up to pass rigorous global certifications.",
        points: ["FCC / CE / UL", "EMI/EMC mitigation", "RoHS Compliance"],
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=80",
        color: "from-orange-500/20 to-red-500/20"
    },
    {
        id: "04",
        title: "Advanced Simulation",
        description: "Validating performance in the digital realm before spinning boards.",
        points: ["SPICE Analysis", "Thermal Modeling", "3D CAD Integration"],
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=80",
        color: "from-pink-500/20 to-rose-500/20"
    }
];

const LATEST_INSIGHTS = [
  {
    id: 1,
    tag: "Design",
    title: "Navigating Component Shortages with Smart BOM Architecture",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    tag: "FPGA",
    title: "Edge AI: Accelerating Neural Networks on Silicon",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    tag: "Validation",
    title: "The Importance of Pre-Compliance EMC Testing",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80"
  }
];

const HardwareValidation = () => {
    return (
        <ServiceLayout 
            hero={{
                title: "Hardware Validation",
                description: "Rigorous testing protocols to guarantee hardware reliability, compliance, and performance under all conditions.",
                primaryButtonText: "Discuss Project",
                secondaryButtonText: "View Capabilities"
            }}
            portal={{
                portalImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2564&auto=format&fit=crop",
                gridImage: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2564&auto=format&fit=crop",
                collageImages: COLLAGE_IMAGES,
                features: SEQUENCE_FEATURES,
                aboutText: (
                    <p className="text-[clamp(1.1rem,2vw,2.2rem)] font-medium leading-[1.6] tracking-tight text-left text-white">
                        From schematic capture to mass production, we engineer hardware that powers the future.
                        <br className="hidden lg:block mt-2" />
                        Our rigorous design principles guarantee reliability, scalability, and performance.
                    </p>
                )
            }}
            slider={{
                title: "Latest in Hardware Engineering",
                subtitle: "Insights from our hardware architects",
                cards: LATEST_INSIGHTS
            }}
            showcase={{
                features: SHOWCASE_FEATURES,
                backgroundText: "HARDWARE\nDESIGN"
            }}
        />
    );
};

export default HardwareValidation;

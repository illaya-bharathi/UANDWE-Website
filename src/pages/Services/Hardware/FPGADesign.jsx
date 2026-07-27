import React from 'react';
import ServiceLayout from '../../../components/ServiceLayout';

const SEQUENCE_FEATURES = [
    { id: 1, title: "Adaptive Computing", desc: "Develop reconfigurable FPGA solutions that adapt to evolving application requirements and workloads." },
    { id: 2, title: "Parallel Processing", desc: "Leverage FPGA parallelism to accelerate data-intensive and compute-heavy applications." },
    { id: 3, title: "Real-Time Processing", desc: "Enable ultra-low latency processing for mission-critical embedded and communication systems." },
    { id: 4, title: "Scalable FPGA Architectures", desc: "Design modular FPGA architectures that simplify future upgrades and feature expansion." },
    { id: 5, title: "System Integration", desc: "Seamlessly integrate FPGA solutions with processors, embedded software, and external hardware." },
    { id: 6, title: "Production-Ready Solutions", desc: "Deliver reliable, validated FPGA implementations optimized for deployment and manufacturing." }
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

const FPGADesign = () => {
    return (
        <ServiceLayout 
            hero={{
                title: "FPGA Design",
                description: "High-performance FPGA development for hardware acceleration, digital signal processing, and low-latency networking.",
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

export default FPGADesign;

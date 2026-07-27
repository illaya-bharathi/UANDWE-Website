import React from 'react';
import ServiceLayout from '../../../components/ServiceLayout';

const SEQUENCE_FEATURES = [
    { id: 1, title: "Microarchitecture Design", desc: "Defining optimal pipelines, state machines, and data paths to meet stringent PPA targets." },
    { id: 2, title: "Verilog / SystemVerilog", desc: "Writing clean, synthesizable, and highly scalable RTL code for complex IP blocks." },
    { id: 3, title: "IP Integration", desc: "Seamlessly integrating third-party IPs like PCIe, DDR, USB, and MIPI." },
    { id: 4, title: "Low Power Design", desc: "Implementing UPF/CPF techniques like clock gating, power gating, and DVFS." },
    { id: 5, title: "Linting & CDC", desc: "Rigorous SpyGlass checks for linting, Clock Domain Crossing, and Reset Domain Crossing." },
    { id: 6, title: "Performance Optimization", desc: "Tuning data flow to eliminate bottlenecks and maximize throughput." }
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

const RTLDesign = () => {
    return (
        <ServiceLayout 
            hero={{
                title: "RTL Design",
                description: "Transforming architectural specifications into optimized Register Transfer Level code for high-performance SoCs and ASICs.",
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

export default RTLDesign;

const fs = require('fs');
const path = require('path');

const templates = [
  {
    name: 'PCBDesign',
    title: 'PCB Design & Layout',
    desc: 'High-speed, multi-layer, and dense Printed Circuit Board designs tailored for robust manufacturing and optimal signal integrity.',
    feat1: 'High-Speed Design',
    feat1Desc: 'Impedance matching, length tuning, and differential pairs for PCIe, DDR, and USB 3.0.',
    feat2: 'Multi-Layer Boards',
    feat2Desc: 'Complex stack-ups up to 32 layers, blind/buried vias, and HDI technology.',
    feat3: 'Signal & Power Integrity',
    feat3Desc: 'Pre and post-layout simulation to eliminate EMI/EMC issues.',
    feat4: 'Thermal Management',
    feat4Desc: 'Strategic component placement and thermal vias for high-power dissipation.',
    feat5: 'DFM & DFA',
    feat5Desc: 'Design for Manufacturing and Assembly guidelines to ensure high yield.',
    feat6: 'Library Management',
    feat6Desc: 'IPC-compliant footprint creation and 3D step model integration.',
  },
  {
    name: 'FPGADesign',
    title: 'FPGA Design',
    desc: 'High-performance FPGA development for hardware acceleration, digital signal processing, and low-latency networking.',
    feat1: 'RTL Coding',
    feat1Desc: 'Expertise in VHDL, Verilog, and SystemVerilog for Xilinx, Intel, and Microsemi.',
    feat2: 'Hardware Acceleration',
    feat2Desc: 'Offloading compute-intensive software algorithms into parallel hardware.',
    feat3: 'DSP Implementation',
    feat3Desc: 'Complex mathematical operations, filters, and FFTs directly on fabric.',
    feat4: 'Timing Closure',
    feat4Desc: 'Advanced constraints, pipelining, and routing optimization to meet frequency targets.',
    feat5: 'IP Core Integration',
    feat5Desc: 'Seamless integration of third-party IP blocks (PCIe, Ethernet MAC, DDR controllers).',
    feat6: 'SoC FPGA',
    feat6Desc: 'Hardware-Software co-design for Zynq, UltraScale+, and Cyclone V.',
  },
  {
    name: 'ASICDesign',
    title: 'ASIC Design',
    desc: 'End-to-end Application-Specific Integrated Circuit (ASIC) development, from architectural definition to GDSII.',
    feat1: 'Architecture Design',
    feat1Desc: 'Defining power, performance, and area (PPA) tradeoffs and microarchitecture.',
    feat2: 'Logic Synthesis',
    feat2Desc: 'Transforming RTL into optimized gate-level netlists targeting specific process nodes.',
    feat3: 'Physical Design',
    feat3Desc: 'Floorplanning, placement, clock tree synthesis (CTS), and routing.',
    feat4: 'Verification (UVM)',
    feat4Desc: 'Universal Verification Methodology, constrained random testing, and coverage analysis.',
    feat5: 'Static Timing Analysis',
    feat5Desc: 'Rigorous STA to ensure setup and hold times are met across all PVT corners.',
    feat6: 'Tape-out Readiness',
    feat6Desc: 'DRC, LVS, and ERC checks to ensure a flawless transfer to the foundry.',
  },
  {
    name: 'CircuitDesign',
    title: 'Circuit Design',
    desc: 'Precision analog, digital, and mixed-signal circuit design tailored to your exact system requirements.',
    feat1: 'Analog Design',
    feat1Desc: 'Op-amps, ADCs, DACs, and precision instrumentation circuits.',
    feat2: 'Power Electronics',
    feat2Desc: 'DC-DC converters, SMPS, and battery management systems (BMS).',
    feat3: 'RF/Wireless',
    feat3Desc: 'Antenna matching, RF front-ends, and wireless module integration.',
    feat4: 'Digital Logic',
    feat4Desc: 'Microprocessor integration, memory interfaces, and level translation.',
    feat5: 'Component Selection',
    feat5Desc: 'Optimizing for cost, lead time, lifecycle status, and performance.',
    feat6: 'Circuit Simulation',
    feat6Desc: 'SPICE modeling and worst-case circuit analysis (WCCA).',
  },
  {
    name: 'HardwarePrototyping',
    title: 'Hardware Prototyping',
    desc: 'Rapid transition from concept to tangible prototypes, ensuring design viability before mass production.',
    feat1: 'Proof of Concept (PoC)',
    feat1Desc: 'Using dev-boards (Raspberry Pi, Arduino, Eval Kits) to validate core ideas quickly.',
    feat2: 'Rapid PCBA',
    feat2Desc: 'Quick-turn board fabrication and assembly for first-article inspection.',
    feat3: '3D Printed Enclosures',
    feat3Desc: 'Mechanical CAD and SLA/FDM printing for immediate fit-testing.',
    feat4: 'Bring-up & Debug',
    feat4Desc: 'Oscilloscopes, logic analyzers, and JTAG debugging of the first spun boards.',
    feat5: 'Iterative Refinement',
    feat5Desc: 'Identifying hardware bugs and spinning Rev B boards efficiently.',
    feat6: 'Pre-Compliance Testing',
    feat6Desc: 'Early EMI/EMC probing to de-risk formal certification.',
  },
  {
    name: 'HardwareValidation',
    title: 'Hardware Validation',
    desc: 'Rigorous testing protocols to guarantee hardware reliability, compliance, and performance under all conditions.',
    feat1: 'Environmental Testing',
    feat1Desc: 'Thermal cycling, humidity, shock, and vibration testing.',
    feat2: 'EMI/EMC Compliance',
    feat2Desc: 'Testing for FCC, CE, CISPR, and EN standards readiness.',
    feat3: 'Signal Integrity Analysis',
    feat3Desc: 'Eye-diagram measurements and TDR for high-speed busses.',
    feat4: 'Power Profiling',
    feat4Desc: 'Load transient testing, ripple measurement, and battery life characterization.',
    feat5: 'Automated Test Equipment',
    feat5Desc: 'Designing custom Bed of Nails and LabVIEW setups for production line testing.',
    feat6: 'Reliability (MTBF)',
    feat6Desc: 'Highly Accelerated Life Testing (HALT) to predict failure points.',
  }
];

const templateCode = (data) => `import React from 'react';
import ServiceLayout from '../../../components/ServiceLayout';

const SEQUENCE_FEATURES = [
    { id: 1, title: "${data.feat1}", desc: "${data.feat1Desc}" },
    { id: 2, title: "${data.feat2}", desc: "${data.feat2Desc}" },
    { id: 3, title: "${data.feat3}", desc: "${data.feat3Desc}" },
    { id: 4, title: "${data.feat4}", desc: "${data.feat4Desc}" },
    { id: 5, title: "${data.feat5}", desc: "${data.feat5Desc}" },
    { id: 6, title: "${data.feat6}", desc: "${data.feat6Desc}" }
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

const ${data.name} = () => {
    return (
        <ServiceLayout 
            hero={{
                title: "${data.title}",
                description: "${data.desc}",
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
                backgroundText: "HARDWARE\\nDESIGN"
            }}
        />
    );
};

export default ${data.name};
`;

const destDir = path.join(__dirname, 'src', 'pages', 'Services', 'Hardware');
if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}
templates.forEach(t => {
    fs.writeFileSync(path.join(destDir, t.name + '.jsx'), templateCode(t));
});

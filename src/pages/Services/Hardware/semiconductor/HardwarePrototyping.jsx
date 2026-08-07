import React from 'react';
import ServiceLayout from '../../../../components/ServiceLayout';
import { Settings, PenTool, Wrench, Search, Zap, Cpu, Layers, Activity, Truck, CheckCircle2 } from 'lucide-react';
import heroImage from "../../../../assets/imagesss/semiconductor/hardwareprototyping.png";

const SEQUENCE_FEATURES = [
    { id: 1, title: "Rapid PCBA Fabrication", desc: "Sourcing components and turning around quick-spin Printed Circuit Board Assemblies in days, not weeks." },
    { id: 2, title: "3D Enclosure Printing", desc: "Utilizing SLA/SLS 3D printing for immediate mechanical fit-checks and ergonomic testing." },
    { id: 3, title: "Bench Bring-Up", desc: "Systematic power-on testing, voltage rail verification, and initial firmware flashing." },
    { id: 4, title: "Cable & Harness Assembly", desc: "Building custom wire harnesses and interconnects for complex multi-board systems." },
    { id: 5, title: "Electromechanical Integration", desc: "Merging the PCBA with screens, batteries, antennas, and the physical housing." },
    { id: 6, title: "Proof of Concept (PoC)", desc: 'Delivering a functional, "looks-like, works-like" prototype to secure stakeholder buy-in.' }
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
        title: "Speed to Market",
        description: "Condensing months of traditional hardware development into aggressive, multi-week agile sprints.",
        points: ["Domestic quick-turn PCBA", "In-house 3D printing", "Parallel firmware dev"],
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
        color: "from-blue-500/20 to-purple-500/20"
    },
    {
        id: "02",
        title: "ECAD-MCAD Harmony",
        description: "Eliminating the gap between electrical and mechanical teams to ensure perfect physical fits.",
        points: ["STEP file integration", "Interference checking", "Thermal clearance"],
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=80",
        color: "from-emerald-500/20 to-teal-500/20"
    },
    {
        id: "03",
        title: "De-Risking Production",
        description: "Using prototypes to discover and solve manufacturing anomalies before spinning expensive hard tooling.",
        points: ["Design for Assembly (DFA)", "Cable routing paths", "Yield optimization"],
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=80",
        color: "from-orange-500/20 to-red-500/20"
    },
    {
        id: "04",
        title: "Investor Ready",
        description: "Delivering stunning, fully functional alpha prototypes that look like finished mass-market products.",
        points: ["CMF (Color, Material, Finish)", "Interactive UX/UI", "Field-testable durability"],
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=80",
        color: "from-pink-500/20 to-rose-500/20"
    }
];

const LATEST_INSIGHTS = [
  {
    id: 1,
    tag: "Prototyping",
    title: "How to Build a Works-Like Prototype in Under 4 Weeks",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    tag: "Integration",
    title: "Avoiding ECAD/MCAD Collisions in Wearable Device Design",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    tag: "Manufacturing",
    title: "Transitioning from 3D Printed Alphas to Injection Molded Betas",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80"
  }
];

const PROTOTYPE_SUB_SERVICES = [
    { title: "Rapid PCBA Sourcing", description: "Navigating supply chain shortages and utilizing quick-turn SMT lines to get assembled boards in your hands instantly.", icon: <Cpu className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80" },
    { title: "Electromechanical Assembly", description: "Integrating PCBs, batteries, LCD displays, and complex wire harnesses into a single cohesive unit.", icon: <Layers className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=80" },
    { title: "Lab Bench Bring-Up", description: "Methodical first-power-on sequences using thermal cameras and oscilloscopes to ensure the board is electrically safe.", icon: <Zap className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=80" },
    { title: "Mechanical 3D Printing", description: "Producing high-fidelity SLA/SLS plastic enclosures overnight for immediate physical fit-checks.", icon: <PenTool className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=80" },
    { title: "Hardware Debugging", description: "Identifying and patching physical layout errors using microsoldering, jumper wires (bodge wires), and trace cutting.", icon: <Search className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80" },
    { title: "Pilot Run Management", description: "Transitioning from a batch of 5 bench prototypes to a pilot run of 50-100 units for field beta testing.", icon: <Truck className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=80" }
];

const PROTOTYPE_ADVANTAGES = [
    { title: "In-House Capabilities", description: "By keeping 3D printing, basic assembly, and bring-up labs in-house, we eliminate the delays of shipping parts back and forth.", icon: <Wrench className="w-6 h-6" /> },
    { title: "Agile Hardware Approach", description: "We treat hardware like software. We spin iterative, low-cost prototypes early to 'fail fast' and validate core assumptions.", icon: <Activity className="w-6 h-6" /> },
    { title: "Supply Chain Agility", description: "We maintain vast networks of global brokers and quick-turn fabs, ensuring a single out-of-stock resistor won't delay your entire build.", icon: <Truck className="w-6 h-6" /> },
    { title: "Production Line Ready", description: "Every prototype we build is documented with mass production in mind, paving a clear, risk-free path to high-volume manufacturing.", icon: <CheckCircle2 className="w-6 h-6" /> }
];

const PROTOTYPE_FAQ = [
    {
        question: "How fast can you deliver a functional prototype?",
        answer: "Depending on component availability and PCB layer count, we can often execute a 'quick-turn' cycle—going from finalized schematic to a powered-on board in as little as 2 to 3 weeks."
    },
    {
        question: "Do you handle the mechanical enclosure design?",
        answer: "Yes. Our mechanical engineers work concurrently with our electrical team. We design the enclosure, print it in-house, and ensure the PCBA fits perfectly before any metal tooling is cut."
    },
    {
        question: "What happens if the first prototype has a hardware bug?",
        answer: "That's exactly what prototypes are for. Our lab technicians are experts at microsoldering. We will cut traces, add jumper wires, and modify components on the fly to get the board working and validate the fix for the next revision."
    },
    {
        question: "Can you build 50 units for our beta testers?",
        answer: "Absolutely. We manage NPI (New Product Introduction) pilot runs, sourcing components, managing the CM (Contract Manufacturer), and functionally testing all 50 units before delivering them to you."
    }
];

const PROTOTYPE_ABOUT_METRICS = {
    titlePart1: "About",
    titlePart2: "Hardware Prototyping",
    description: "U&WE turns digital designs into tangible reality. We rapidly assemble, bring up, and integrate the first physical iterations of your product, proving viability to stakeholders and clearing the path to mass production.",
    metrics: [
        { tag: "SPEED", value: "< 3 Weeks", label: "Average Rapid PCBA Turnaround", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" },
        { tag: "INTEGRATION", value: "100%", label: "ECAD-MCAD Fit Success", image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800&auto=format&fit=crop" },
        { tag: "BUGS FOUND", value: "Early", label: "Pre-Production Issue Resolution", image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800&auto=format&fit=crop" },
        { tag: "TRANSITION", value: "Seamless", label: "Prototype to NPI Handoff", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" }
    ]
};

const HardwarePrototyping = () => {
    return (
        <ServiceLayout 
            pageKey="hardwarePrototyping"
            hero={{
                title: "Hardware Prototyping",
                description: "Rapidly transforming schematics into functional, field-testable physical devices to accelerate your time-to-market.",
                primaryButtonText: "Discuss Project",
                secondaryButtonText: "View Capabilities",
                image: heroImage
            }}
            aboutMetrics={PROTOTYPE_ABOUT_METRICS}
            subServices={PROTOTYPE_SUB_SERVICES}
            subServicesTitle={{ part1: "Core", part2: "Capabilities" }}
            advantages={PROTOTYPE_ADVANTAGES}
            advantagesTitle={{ part1: "Why Partner", part2: "With Us" }}
            faqs={PROTOTYPE_FAQ}
            portal={{
                portalImage: heroImage,
                gridImage: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2564&auto=format&fit=crop",
                collageImages: COLLAGE_IMAGES,
                features: SEQUENCE_FEATURES,
                aboutText: (
                    <p className="text-[clamp(1.1rem,2vw,2.2rem)] font-medium leading-[1.6] tracking-tight text-left text-white">
                        From bare boards to fully assembled, investor-ready proof of concepts.
                        <br className="hidden lg:block mt-2" />
                        We bridge the gap between software logic and physical reality.
                    </p>
                )
            }}
            slider={{
                title: "Latest in Hardware NPI",
                subtitle: "Insights from our integration lab",
                cards: LATEST_INSIGHTS
            }}
            showcase={{
                features: SHOWCASE_FEATURES,
                backgroundText: "RAPID\nPROTO"
            }}
        />
    );
};

export default HardwarePrototyping;

import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';
import automationImg from '../../assets/images/automation.png';

const SEQUENCE_FEATURES = [
    { id: 1, title: "AUTOSAR Classic & Adaptive", desc: "Standardized automotive software architecture for ECUs." },
    { id: 2, title: "EV Powertrain Software", desc: "BMS firmware, motor control algorithms, and inverter software." },
    { id: 3, title: "ADAS & Autonomous Systems", desc: "Sensor fusion (LiDAR, Radar, Camera) and perception software." },
    { id: 4, title: "In-Vehicle Infotainment (IVI)", desc: "Android Automotive OS, Automotive Linux, and digital cockpits." },
    { id: 5, title: "Functional Safety (ISO 26262)", desc: "ASIL-A through ASIL-D safety lifecycle implementation & audit." },
    { id: 6, title: "Connected Vehicle (V2X)", desc: "Cellular-V2X and DSRC vehicle-to-everything communication." }
];

const COLLAGE_IMAGES = [
    { src: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800", scaleIndex: 4, cls: "!-top-[30vh] !left-[5vw] !h-[30vh] !w-[35vw]" },
    { src: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=800", scaleIndex: 5, cls: "!-top-[10vh] !-left-[25vw] !h-[45vh] !w-[20vw]" },
    { src: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=800", scaleIndex: 6, cls: "!left-[27.5vw] !h-[25vh] !w-[25vw]" },
    { src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800", scaleIndex: 5, cls: "!top-[27.5vh] !left-[5vw] !h-[25vh] !w-[20vw]" },
    { src: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=800", scaleIndex: 6, cls: "!top-[27.5vh] !-left-[22.5vw] !h-[25vh] !w-[30vw]" },
    { src: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?q=80&w=800", scaleIndex: 8, cls: "!top-[22.5vh] !left-[25vw] !h-[15vh] !w-[15vw]" },
];

const SHOWCASE_FEATURES = [
    {
        id: "01",
        title: "Software-Defined Vehicle (SDV)",
        description: "Centralized domain controller architecture decoupling hardware from software to support over-the-air (OTA) updates and continuous feature additions.",
        points: ["Centralized Domain Controllers", "OTA Firmware Updates (FOTA)", "Hardware Decoupling"],
        image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&auto=format&fit=crop&q=80",
        color: "from-amber-500/20 to-orange-500/20"
    },
    {
        id: "02",
        title: "AUTOSAR Classic & Adaptive",
        description: "Implementation of AUTOSAR BSW, RTE, and complex device drivers (CDD) ensuring seamless ECU integration across OEM supply chains.",
        points: ["BSW Layer Configuration", "Adaptive AUTOSAR C++", "CAN / LIN / Automotive Ethernet"],
        image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&auto=format&fit=crop&q=80",
        color: "from-blue-500/20 to-cyan-500/20"
    },
    {
        id: "03",
        title: "Electric Vehicle (EV) Powertrain",
        description: "High-precision Battery Management System (BMS) algorithms, traction motor field-oriented control (FOC), and onboard charger (OBC) software.",
        points: ["State of Charge (SoC) / Health (SoH)", "Field-Oriented Motor Control", "ISO 15118 Smart Charging"],
        image: "https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&auto=format&fit=crop&q=80",
        color: "from-emerald-500/20 to-teal-500/20"
    },
    {
        id: "04",
        title: "ADAS & Autonomous Driving",
        description: "Real-time sensor fusion combining Camera, Radar, and LiDAR data streams with deep learning models for path planning and automatic braking.",
        points: ["Multi-Sensor Fusion Engine", "Computer Vision Perception", "Path Planning & Control"],
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&auto=format&fit=crop&q=80",
        color: "from-purple-500/20 to-indigo-500/20"
    },
    {
        id: "05",
        title: "Digital Cockpit & IVI",
        description: "Interactive instrument clusters and head-unit infotainment systems based on Android Automotive OS, Qt/QML, and Automotive Grade Linux.",
        points: ["Android Automotive OS (AAOS)", "Qt / QML Digital Dashboards", "Multi-Display Synchronization"],
        image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=800&auto=format&fit=crop&q=80",
        color: "from-rose-500/20 to-red-500/20"
    },
    {
        id: "06",
        title: "Functional Safety (ISO 26262)",
        description: "Rigorous safety engineering adhering to ASIL-D standards, hazard analysis (HARA), safety concepts, and automated HIL testing.",
        points: ["ASIL-A to ASIL-D Compliance", "Hazard & Risk Analysis (HARA)", "Hardware-in-the-Loop (HIL) Testing"],
        image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?w=800&auto=format&fit=crop&q=80",
        color: "from-slate-500/20 to-zinc-500/20"
    }
];

const WHATS_HAPPENING_CARDS = [
  {
    id: 1,
    tag: "SDV Architecture",
    title: "Transitioning to Zonal Architectures in Software-Defined Vehicles",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    tag: "EV Innovation",
    title: "Solid-State Battery Management Algorithms: Next-Gen BMS Solutions",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    tag: "Autonomous Systems",
    title: "AI Safety in ADAS: Meeting ISO 26262 & SOTIF Standards",
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    tag: "V2X Connectivity",
    title: "C-V2X Implementation: Real-Time Hazard Warnings on 5G Networks",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&auto=format&fit=crop&q=80"
  }
];

const Automotive = () => {
    return (
        <ServiceLayout 
            hero={{
                title: "Automotive & Mobility",
                description: "Engineering software-defined vehicles with AUTOSAR, advanced EV powertrains, ADAS perception, and ISO 26262 functional safety.",
                primaryButtonText: "Explore Automotive Tech",
                secondaryButtonText: "Connect with Auto Experts"
            }}
            portal={{
                portalImage: automationImg,
                gridImage: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2564&auto=format&fit=crop",
                collageImages: COLLAGE_IMAGES,
                features: SEQUENCE_FEATURES,
                aboutText: (
                    <p className="text-[clamp(1.1rem,2vw,2.2rem)] font-medium leading-[1.6] tracking-tight text-left text-white">
                        We accelerate the transition towards intelligent, electrification, and autonomous mobility.
                        <br className="hidden lg:block mt-2" />
                        Our automotive software engineers deliver compliant, high-reliability embedded systems for global OEMs and Tier-1 suppliers.
                    </p>
                )
            }}
            slider={{
                title: "Automotive Trends",
                subtitle: "Insights into the software revolution transforming global mobility",
                cards: WHATS_HAPPENING_CARDS
            }}
            showcase={{
                features: SHOWCASE_FEATURES,
                backgroundText: "DRIVING\nMOBILITY"
            }}
        />
    );
};

export default Automotive;

import React from 'react';
import { useTranslation } from 'react-i18next';
import IndustriesLayout from '../../components/IndustriesLayout';
import communicationData from '../../data/communicationData';
import communicationImg from '../../assets/imagesss/communicationengineering.png';

const communicationChallenge = {
    title: "Overcoming Signal Attenuation and Network Congestion",
    description: "Modern communication engineering demands flawless transmission over degraded channels. The industry faces unprecedented challenges in scaling spectral efficiency, mitigating multi-path fading, and designing hardware capable of massive MIMO deployments.",
    points: [
        {
            title: "Signal Integrity at High Frequencies",
            description: "Designing RF front-ends that maintain extreme linearity and minimize insertion loss at millimeter-wave frequencies."
        },
        {
            title: "Spectrum Congestion",
            description: "Developing cognitive radio and advanced DSP algorithms to dynamically allocate and utilize crowded RF spectrums."
        },
        {
            title: "Hardware Size, Weight, and Power (SWaP)",
            description: "Miniaturizing baseband ASICs and RF transceivers for aerospace, satellite, and mobile infrastructure without compromising thermal performance."
        }
    ],
    risks: [
        "Severe Signal Degradation",
        "Failed Spectrum Compliance",
        "Excessive Heat Dissipation",
        "Higher Manufacturing Costs"
    ]
};

const communicationApproach = [
    {
        icon: "Radio",
        title: "RF & Microwave Engineering",
        description: "Executing complex microwave designs from antenna synthesis to custom low-noise amplifier (LNA) characterization."
    },
    {
        icon: "Cpu",
        title: "Digital Signal Processing",
        description: "Implementing real-time DSP pipelines on FPGA and ASIC targets for advanced modulation and error correction."
    },
    {
        icon: "Zap",
        title: "Optical & Satellite Links",
        description: "Engineering high-gain satellite tracking systems and ultra-low latency DWDM optical fiber transceivers."
    }
];

const communicationExperts = [
  {
    name: "Dr. Elena Rostova",
    role: "Chief RF Architect",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
    bio: "25+ years designing phased-array radar and millimeter-wave communication front-ends."
  },
  {
    name: "Marcus Thorne",
    role: "Lead DSP Engineer",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=400&auto=format&fit=crop",
    bio: "Specialist in FPGA-based baseband processing, OFDM modulation, and digital pre-distortion techniques."
  }
];

const communicationTestimonials = [
  {
    quote: "UANDWE's RF team completely redesigned our satellite transceiver's low-noise amplifier, reducing our noise figure by 1.2dB while shrinking the PCB footprint.",
    author: "James Halpert",
    title: "VP of Engineering, AeroSat Communications"
  },
  {
    quote: "Their expertise in Software Defined Radio (SDR) allowed us to deploy a frequency-agile tactical communication system months ahead of our defense contract deadlines.",
    author: "Sarah Jenkins",
    title: "Director of Defense Contracting, SecureComm"
  },
  {
    quote: "From DSP algorithm simulation in MATLAB to final RTL deployment on our ASICs, UANDWE's engineers proved they are elite communication experts.",
    author: "Dr. Henrik Larsen",
    title: "Chief Architect, Nord Telecom"
  }
];

const CommunicationEngineering = () => {
    const { t } = useTranslation();
    return (
        <IndustriesLayout 
            pageKey="communication"
            hero={{
                title: t("industries_pages.communication.hero.title", "Communication Engineering"),
                description: t("industries_pages.communication.hero.description", "Pioneering the future of data transmission with specialized RF hardware, signal processing software, and next-generation optical networks."),
                primaryButtonText: t("industries_pages.communication.hero.primaryButtonText", "Get Started"),
                image: communicationImg
            }}
            challenge={communicationChallenge}
            approach={communicationApproach}
            categories={communicationData.categories}
            testimonials={communicationTestimonials}
            experts={communicationExperts}
        />
    );
};

export default CommunicationEngineering;

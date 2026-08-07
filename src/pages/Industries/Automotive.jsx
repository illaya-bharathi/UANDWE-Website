import React from 'react';
import { useTranslation } from 'react-i18next';
import IndustriesLayout from '../../components/IndustriesLayout';
import automotiveData from '../../data/automotiveData';
import automotiveImg from '../../assets/imagesss/automotive.png'

const automotiveChallenge = {
    title: "The Shift to Software-Defined Vehicles",
    description: "The automotive industry is transforming rapidly. OEMs and Tier-1s struggle to integrate complex ADAS, EV powertrains, and infotainment systems while strictly adhering to rigorous ISO 26262 functional safety standards and transitioning to zonal architectures.",
    points: [
        {
            title: "ISO 26262 Compliance",
            description: "Achieving demanding ASIL-D safety certifications without derailing vehicle development timelines or bloating the software stack."
        },
        {
            title: "Zonal Architecture Migration",
            description: "Moving from legacy, decentralized ECUs to high-performance centralized domain controllers over Automotive Ethernet."
        },
        {
            title: "ADAS & Perception Integration",
            description: "Processing massive amounts of real-time sensor, radar, and LiDAR point-cloud data with deterministic, zero-latency execution."
        }
    ],
    risks: [
        "ISO 26262 Certification Failures",
        "Delayed Vehicle Launch Cycles",
        "Critical Safety Recalls",
        "ECU Software Vulnerabilities"
    ]
};

const automotiveApproach = [
    {
        icon: "ShieldCheck",
        title: "Functional Safety First",
        description: "Rigorous adherence to ISO 26262 and ASIL-D standards embedded in every line of safety-critical firmware and hardware we design."
    },
    {
        icon: "Car",
        title: "AUTOSAR Mastery",
        description: "Seamless integration, configuration, and optimization of both Classic and Adaptive AUTOSAR software stacks."
    },
    {
        icon: "Zap",
        title: "Future-Proof EV Mobility",
        description: "Building scalable, high-performance power electronics and Battery Management Systems (BMS) for next-generation EVs."
    }
];

const automotiveExperts = [
  {
    name: "Marcus Weber",
    role: "Chief Automotive Architect",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop",
    bio: "AUTOSAR consortium contributor and expert in ASIL-D functional safety architecture and hypervisor configurations."
  },
  {
    name: "Priya Sharma",
    role: "Head of EV Powertrain",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
    bio: "Leads development of next-gen Battery Management Systems (BMS), traction inverters, and wide-bandgap (SiC/GaN) designs."
  }
];

const automotiveTestimonials = [
  {
    quote: "We partnered with UANDWE to build our ASIL-D compliant BMS. Their deep understanding of AUTOSAR MCAL and ISO 26262 fundamentally de-risked our entire EV program.",
    author: "Klaus Richter",
    title: "Head of E/E Architecture, AutoTech GmbH"
  },
  {
    quote: "Their team seamlessly integrated Adaptive AUTOSAR into our next-gen ADAS domain controller, handling complex LiDAR pipelines and significantly accelerating our time to market.",
    author: "Yoshi Tatsu",
    title: "Director of Autonomous Systems, DriveNext"
  },
  {
    quote: "From AEC-Q100 hardware validation to writing deterministic RTOS firmware, UANDWE's automotive engineering team is simply world-class.",
    author: "Elise Dubois",
    title: "VP of Software, EV Mobility Solutions"
  }
];

const Automotive = () => {
    const { t } = useTranslation();
    return (
        <IndustriesLayout 
            pageKey="automotive"
            hero={{
                title: t("industries_pages.automotive.hero.title", "Automotive"),
                description: t("industries_pages.automotive.hero.description", "Engineering software-defined vehicles with AUTOSAR, advanced EV powertrains, ADAS perception, and ISO 26262 functional safety."),
                primaryButtonText: t("industries_pages.automotive.hero.primaryButtonText", "Get Started"),
                image: automotiveImg
            }}
            challenge={automotiveChallenge}
            approach={automotiveApproach}
            categories={automotiveData.categories}
            testimonials={automotiveTestimonials}
            experts={automotiveExperts}
        />
    );
};

export default Automotive;

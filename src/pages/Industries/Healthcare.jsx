import React from 'react';
import { useTranslation } from 'react-i18next';
import IndustriesLayout from '../../components/IndustriesLayout';
import healthcareData from '../../data/healthcareData';
import healthcareImg from '../../assets/imagesss/Healthcare.png';

const healthcareChallenge = {
    title: "Balancing Innovation with Life-Critical Reliability",
    description: "Developing MedTech devices requires cutting-edge software and hardware, but the immense regulatory overhead of FDA approvals, HIPAA compliance, and IEC 62304 standards often stifles innovation and delays critical product launches.",
    points: [
        {
            title: "Strict Regulatory Compliance",
            description: "Navigating complex IEC 62304, ISO 13485, and FDA 510(k) submissions without losing development momentum."
        },
        {
            title: "Zero-Margin for Error",
            description: "Engineering mission-critical Class II and Class III life-support systems where software failure is simply not an option."
        },
        {
            title: "Data Security in IoMT",
            description: "Protecting highly sensitive patient telemetry against sophisticated cyber threats in connected hospital networks."
        }
    ],
    risks: [
        "FDA 510(k) Rejections",
        "Costly Hardware Iterations",
        "Cybersecurity Vulnerabilities",
        "Patient Safety Incidents"
    ]
};

const healthcareApproach = [
    {
        icon: "ShieldCheck",
        title: "Compliance by Design",
        description: "Integrating ISO 13485 quality management and IEC 62304 software life-cycle standards directly into our engineering pipeline from day one."
    },
    {
        icon: "HeartPulse",
        title: "Fail-Safe Engineering",
        description: "Developing ultra-reliable, deterministic bare-metal firmware and robust hardware for life-saving medical devices."
    },
    {
        icon: "Target",
        title: "Secure IoMT Integration",
        description: "Implementing end-to-end encryption, zero-trust architectures, and HIPAA-compliant data routing for connected healthcare ecosystems."
    }
];

const healthcareExperts = [
  {
    name: "Dr. Sarah Chen",
    role: "Director of Medical Software",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400&auto=format&fit=crop",
    bio: "Pioneer in IEC 62304 compliant architecture and deterministic RTOS integration for Class III life-support systems."
  },
  {
    name: "James Wilson",
    role: "Lead Biomedical Architect",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    bio: "IoMT security specialist with deep expertise in FDA premarket cybersecurity guidance and medical imaging FPGA design."
  }
];

const healthcareTestimonials = [
  {
    quote: "Navigating IEC 62304 compliance is daunting, but UANDWE's medical software team delivered flawless firmware that sailed through our FDA 510(k) submission without a single software-related deficiency.",
    author: "Dr. Emily Stanton",
    title: "Chief Medical Officer, BioMed Robotics"
  },
  {
    quote: "Their deep understanding of IoMT security and HIPAA protocols helped us build a zero-trust cloud architecture for our continuous glucose monitors, fully protecting patient data.",
    author: "Marcus Vance",
    title: "VP of Engineering, HealthSync"
  },
  {
    quote: "From ultra-compact rigid-flex PCBs for our wearables to their stringent IEC 60601 validation processes, UANDWE's MedTech engineering is world-class.",
    author: "Sarah Jenkins",
    title: "Director of Product, MedDev Innovations"
  }
];

const Healthcare = () => {
    const { t } = useTranslation();
    return (
        <IndustriesLayout 
            pageKey="healthcare"
            hero={{
                title: t("industries_pages.healthcare.hero.title", "Healthcare"),
                description: t("industries_pages.healthcare.hero.description", "Engineering life-saving medical software, IEC 62304 compliant devices, biomedical AI diagnostics, and secure IoMT systems."),
                primaryButtonText: t("industries_pages.healthcare.hero.primaryButtonText", "Get Started"),
                image: healthcareImg
            }}
            challenge={healthcareChallenge}
            approach={healthcareApproach}
            categories={healthcareData.categories}
            testimonials={healthcareTestimonials}
            experts={healthcareExperts}
        />
    );
};

export default Healthcare;

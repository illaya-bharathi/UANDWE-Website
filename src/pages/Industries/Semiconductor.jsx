import React from 'react';
import { useTranslation } from 'react-i18next';
import IndustriesLayout from '../../components/IndustriesLayout';
import semiconductorData from '../../data/semiconductorData';
import semiconductorImg from '../../assets/imagesss/semiconductor.jpg'

const semiconductorChallenge = {
    title: "Navigating the Complexities of Modern Silicon",
    description: "As node sizes shrink and performance demands explode, semiconductor companies face immense pressure to deliver flawless SoC designs while managing thermal constraints, verification bottlenecks, and aggressive tapeout schedules.",
    points: [
        {
            title: "Tapeout Delays",
            description: "Verification and physical design closures often push critical deadlines and increase costs."
        },
        {
            title: "Thermal & Power Constraints",
            description: "Balancing extreme processing performance with strict low-power budgets."
        },
        {
            title: "Scaling Complexity",
            description: "Navigating the extreme physics and DRC rules of sub-5nm and 3nm FinFET/GAA technology nodes."
        }
    ],
    risks: [
        "Multi-Million Dollar Re-spins",
        "Missed Market Windows",
        "Sub-optimal Power/Performance",
        "Yield Degradation at Advanced Nodes"
    ]
};

const semiconductorApproach = [
    {
        icon: "Target",
        title: "First-Pass Silicon Success",
        description: "Rigorous UVM verification and formal methods to ensure zero respins and flawless tapeouts."
    },
    {
        icon: "Cpu",
        title: "PPA Optimization",
        description: "Advanced physical design techniques to maximize Power, Performance, and Area."
    },
    {
        icon: "Zap",
        title: "Agile Tapeout",
        description: "Streamlined RTL-to-GDSII flows that drastically accelerate your time-to-market."
    }
];

const semiconductorExperts = [
  {
    name: "Dr. Rajesh Kumar",
    role: "Chief Silicon Architect",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
    bio: "Former Principal Engineer with 40+ successful tapeouts at 5nm and 3nm nodes."
  },
  {
    name: "Elena Rodriguez",
    role: "Head of Physical Design",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400&auto=format&fit=crop",
    bio: "PPA optimization expert specializing in high-performance AI accelerator chips."
  }
];


const semiconductorTestimonials = [
  {
    quote: "UANDWE's physical design team achieved timing closure on our 5nm AI accelerator two weeks ahead of schedule. Their expertise in advanced node tapeouts is unmatched.",
    author: "David Lin",
    title: "VP of Silicon Engineering, NextGen AI"
  },
  {
    quote: "The verification IP they provided was incredibly robust. It saved us countless hours during our SoC simulation phase and ensured first-pass silicon success.",
    author: "Anita Desai",
    title: "Director of ASIC Verification, CoreTech"
  },
  {
    quote: "From architecture to GDSII, UANDWE is our go-to partner. They operate with the agility of a startup but the rigor of a Tier-1 design house.",
    author: "Robert Vance",
    title: "CEO, SiliconEdge"
  }
];

const Semiconductor = () => {
    const { t } = useTranslation();
    return (
        <IndustriesLayout
            pageKey="semiconductor"
            hero={{
                title: t("industries_pages.semiconductor.hero.title", "Semiconductor"),
                description: t("industries_pages.semiconductor.hero.description", "Powering the future of silicon with end-to-end SoC design, advanced ASIC verification, and physical implementation services."),
                primaryButtonText: t("industries_pages.semiconductor.hero.primaryButtonText", "Get Started"),
                image: semiconductorImg
            }}
            challenge={semiconductorChallenge}
            approach={semiconductorApproach}
            categories={semiconductorData.categories}
            testimonials={semiconductorTestimonials}
            experts={semiconductorExperts}
        />
    );
};

export default Semiconductor;

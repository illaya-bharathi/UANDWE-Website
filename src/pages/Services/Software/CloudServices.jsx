import React from 'react';
import ServiceLayout from '../../../components/ServiceLayout';
import { Cloud, Server, Shield, Activity, HardDrive, Database, Globe, Zap, Network } from 'lucide-react';
import heroImage from "../../../assets/images/softwareservice.jpg"; // Re-using an existing image for now, user can change later

const DUMMY_ABOUT_METRICS = {
    titlePart1: "About",
    titlePart2: "Cloud Services",
    description: "Empower your business with scalable, secure, and highly available cloud infrastructure. We provide end-to-end cloud solutions from seamless migration and architecture design to ongoing DevOps and managed services.",
    metrics: [
        { tag: "MIGRATIONS", value: "200+", label: "Successful Cloud Migrations", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80" },
        { tag: "UPTIME", value: "99.99%", label: "Guaranteed SLA", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80" },
        { tag: "COST SAVINGS", value: "35%", label: "Average Infrastructure Reduction", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80" },
        { tag: "SECURITY", value: "24/7", label: "Proactive Threat Monitoring", image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80" }
    ]
};

const DUMMY_SUB_SERVICES = [
    { title: "Cloud Architecture Design", description: "Design resilient, scalable, and cost-effective cloud architectures tailored to your business needs.", icon: <Server className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80" },
    { title: "Cloud Migration", description: "Seamlessly transition your legacy applications and databases to modern cloud platforms (AWS, Azure, GCP) with zero downtime.", icon: <Cloud className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80" },
    { title: "DevOps & CI/CD", description: "Automate your software delivery pipeline to ensure faster, more reliable, and continuous deployments.", icon: <Activity className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=80" },
    { title: "Cloud Security & Compliance", description: "Implement zero-trust security models, robust IAM policies, and ensure compliance with global data standards.", icon: <Shield className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=80" },
    { title: "Serverless Computing", description: "Build and run applications without managing infrastructure, optimizing resource usage and operational costs.", icon: <Zap className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80" },
    { title: "Cloud Data Lakes", description: "Centralize your enterprise data in secure, highly available cloud storage for advanced analytics and AI.", icon: <Database className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=80" }
];

const DUMMY_ADVANTAGES = [
    { title: "Multi-Cloud Expertise", description: "Our certified architects have deep expertise across AWS, Microsoft Azure, and Google Cloud Platform, allowing us to build the perfect multi-cloud strategy.", icon: <Globe className="w-6 h-6" /> },
    { title: "Performance Optimization", description: "We continuously monitor and tune your cloud environment to ensure maximum performance while eliminating unnecessary cloud spend.", icon: <Zap className="w-6 h-6" /> },
    { title: "Disaster Recovery", description: "Implement robust automated backup and disaster recovery plans to guarantee business continuity even in the face of critical failures.", icon: <HardDrive className="w-6 h-6" /> },
    { title: "End-to-End Managed Services", description: "Focus on your core business while our dedicated NOC and SOC teams manage, monitor, and secure your cloud infrastructure 24/7.", icon: <Network className="w-6 h-6" /> }
];

const DUMMY_FAQ = [
    {
        question: "Which cloud provider is best for my business?",
        answer: "The best cloud provider depends on your specific technical requirements, existing infrastructure, and budget. We conduct a thorough assessment to recommend the optimal platform—whether it's AWS, Azure, GCP, or a hybrid approach."
    },
    {
        question: "How do you ensure zero downtime during migration?",
        answer: "We utilize advanced replication tools, blue-green deployment strategies, and rigorous staging environment testing to ensure that your cutover happens seamlessly without disrupting your users."
    },
    {
        question: "Can you help reduce our existing cloud bill?",
        answer: "Absolutely. Our FinOps experts perform comprehensive cloud cost audits to identify idle resources, right-size instances, and implement reserved instance strategies, typically reducing costs by up to 35%."
    },
    {
        question: "Is the cloud secure for highly sensitive data?",
        answer: "Yes. When properly architected, the cloud offers enterprise-grade security that often surpasses on-premise solutions. We implement end-to-end encryption, strict access controls, and continuous threat monitoring."
    }
];

const CloudServices = () => {
    return (
        <ServiceLayout 
            pageKey="cloudServices"
            hero={{
                title: "Cloud Services",
                description: "Accelerate your digital transformation with secure, scalable, and high-performance cloud solutions designed for the modern enterprise.",
                primaryButtonText: "Explore Cloud Solutions",
                secondaryButtonText: "Talk to a Cloud Architect",
                image: heroImage
            }}
            aboutMetrics={DUMMY_ABOUT_METRICS}
            subServices={DUMMY_SUB_SERVICES}
            subServicesTitle={{ part1: "Core", part2: "Capabilities" }}
            advantages={DUMMY_ADVANTAGES}
            advantagesTitle={{ part1: "Why Partner", part2: "With Us" }}
            faqs={DUMMY_FAQ}
        />
    );
};

export default CloudServices;

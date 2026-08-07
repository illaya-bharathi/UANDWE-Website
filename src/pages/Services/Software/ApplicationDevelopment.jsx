import React from 'react';
import ServiceLayout from '../../../components/ServiceLayout';
import { Smartphone, Cloud, Code, Database, Layout, Settings, ShieldCheck, Globe, Zap, Award } from 'lucide-react';
import heroImage from "../../../assets/imagesss/application.png";

const DUMMY_ABOUT_METRICS = {
    titlePart1: "About",
    titlePart2: "Development",
    description: "We build robust, high-performance applications tailored to your specific business requirements and strategic goals. From concept to deployment, our expert team utilizes the latest technologies to bring your innovative ideas to life.",
    metrics: [
        { tag: "PROJECTS", value: "300+", label: "Applications Delivered", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80" },
        { tag: "UPTIME", value: "99.9%", label: "System Reliability", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=80" },
        { tag: "AGILE", value: "100%", label: "Sprint Delivery Rate", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=80" },
        { tag: "RETENTION", value: "95%", label: "Client Satisfaction", image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&auto=format&fit=crop&q=80" }
    ]
};

const DUMMY_SUB_SERVICES = [
    { title: "Strategic Planning", description: "Transform business ideas into scalable digital solutions." },
    { title: "Expert Engineering", description: "Experienced developers delivering high-quality applications." },
    { title: "Modern Architecture", description: "Cloud-native and scalable application design." },
    { title: "Quality Assurance", description: "Comprehensive testing for reliability and performance." },
    { title: "Continuous Improvement", description: "Regular updates to keep applications modern and competitive." },
    { title: "Trusted Partnership", description: "Long-term collaboration focused on your business success." }
];

const DUMMY_ADVANTAGES = [
    { title: "Agile Excellence", description: "We employ rigorous agile methodologies to ensure rapid, predictable delivery while maintaining the flexibility to adapt to changing requirements.", icon: <Zap className="w-6 h-6" /> },
    { title: "Security by Design", description: "Security isn't an afterthought. We implement comprehensive DevSecOps practices, integrating security testing into every stage of the CI/CD pipeline.", icon: <ShieldCheck className="w-6 h-6" /> },
    { title: "Global Talent Delivery", description: "Our distributed teams operate across multiple time zones, providing continuous development cycles and seamless integration with your internal teams.", icon: <Globe className="w-6 h-6" /> },
    { title: "Quality Assurance", description: "Our dedicated QA teams employ automated test frameworks and rigorous manual testing to guarantee bug-free, high-performance software.", icon: <Award className="w-6 h-6" /> }
];

const DUMMY_FAQ = [
    {
        question: "What tech stacks do you specialize in?",
        answer: "We are proficient in modern stacks including React, Angular, Vue for frontend; Node.js, Python, Java, and Go for backend. We also have deep expertise in AWS, Azure, and GCP cloud environments."
    },
    {
        question: "Do you integrate with our internal engineering teams?",
        answer: "Absolutely. Our engineers are trained to integrate seamlessly with your internal workflows, utilizing your preferred version control systems, bug trackers, and communication channels. We act as an extension of your own team."
    },
    {
        question: "How do you ensure application scalability?",
        answer: "We design cloud-native architectures using microservices, containerization (Docker/Kubernetes), and serverless technologies. This ensures your application can seamlessly scale to handle traffic spikes."
    },
    {
        question: "Do you provide post-launch support and maintenance?",
        answer: "Yes. We offer comprehensive SLAs covering 24/7 monitoring, security patching, performance optimization, and continuous feature development post-launch."
    }
];

const ApplicationDevelopment = () => {
    return (
        <ServiceLayout 
            pageKey="applicationDevelopment"
            hero={{
                title: "Application Development",
                description: "Deliver exceptional digital experiences with our custom, scalable, and secure application development services.",
                primaryButtonText: "Start Your Project",
                secondaryButtonText: "View Our Portfolio",
                image: heroImage
            }}
            aboutMetrics={DUMMY_ABOUT_METRICS}
            subServices={DUMMY_SUB_SERVICES}
            subServicesVariant="simple"
            subServicesTitle={{ part1: "Our", part2: "Approach" }}
            advantages={DUMMY_ADVANTAGES}
            advantagesTitle={{ part1: "Why Partner", part2: "With Us" }}
            faqs={DUMMY_FAQ}
        />
    );
};

export default ApplicationDevelopment;
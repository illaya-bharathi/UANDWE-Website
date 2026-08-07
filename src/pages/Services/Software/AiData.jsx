import React from 'react';
import ServiceLayout from '../../../components/ServiceLayout';
import { Brain, Database, Bot, ChartBar, ShieldCheck, Cpu, Globe, Zap, Award } from 'lucide-react';
import heroImage from "../../../assets/images/ai&data.png";

const DUMMY_ABOUT_METRICS = {
    titlePart1: "About",
    titlePart2: "AI & Data",
    description: "We harness the power of artificial intelligence to transform your raw data into actionable insights. From predictive analytics to custom LLMs, our solutions drive smarter decisions and automate complex workflows at scale.",
    metrics: [
        { tag: "AI MODELS", value: "150+", label: "Deployed in Production", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=80" },
        { tag: "ACCURACY", value: "99%", label: "Average Model Precision", image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=80" },
        { tag: "DATA PROCESSED", value: "50+ PB", label: "Monthly Data Ingested", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80" },
        { tag: "AUTOMATION", value: "40%", label: "Workflow Efficiency Gain", image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80" }
    ]
};

const DUMMY_SUB_SERVICES = [
    { title: "Big Data Processing", description: "Process massive datasets in real-time with distributed computing technologies.", icon: <Database className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80" },
    { title: "Custom LLM Training", description: "Train and fine-tune large language models on your proprietary enterprise data.", icon: <Brain className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=80" },
    { title: "Data Visualization", description: "Transform complex data into intuitive, interactive dashboards for stakeholders.", icon: <ChartBar className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=80" },
    { title: "Cognitive Automation", description: "Automate complex, unstructured business processes using AI agents.", icon: <Bot className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=80" },
    { title: "AI Security & Ethics", description: "Ensure your AI solutions are unbiased, secure, and compliant with regulations.", icon: <ShieldCheck className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80" },
    { title: "MLOps", description: "Streamline the lifecycle of machine learning models from development to production.", icon: <Cpu className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=80" }
];

const DUMMY_ADVANTAGES = [
    { title: "Enterprise-Grade Security", description: "Your data stays yours. We implement zero-trust architectures and isolated training environments to ensure complete IP protection.", icon: <ShieldCheck className="w-6 h-6" /> },
    { title: "Domain Expertise", description: "Our AI engineers possess deep domain knowledge across healthcare, finance, and manufacturing to deliver contextualized AI solutions.", icon: <Globe className="w-6 h-6" /> },
    { title: "Rapid Deployment", description: "Utilize our pre-trained foundational models and robust MLOps pipelines to cut time-to-market and accelerate ROI.", icon: <Zap className="w-6 h-6" /> },
    { title: "Ethical AI Principles", description: "We adhere strictly to responsible AI guidelines, prioritizing fairness, accountability, and transparency in every model we build.", icon: <Award className="w-6 h-6" /> }
];

const DUMMY_FAQ = [
    {
        question: "How do you handle sensitive enterprise data?",
        answer: "We deploy our models in your secure cloud environment (VPC) or on-premise. Your proprietary data is never used to train public foundational models, ensuring complete privacy."
    },
    {
        question: "Do you build custom LLMs from scratch?",
        answer: "Depending on your needs, we can either fine-tune existing open-source models (like LLaMA or Mixtral) on your specific data, or train smaller, specialized models from scratch for domain-specific tasks."
    },
    {
        question: "How do you measure the ROI of an AI initiative?",
        answer: "We establish clear KPIs during the strategy phase, focusing on metrics such as hours saved through automation, accuracy improvements in forecasting, or direct revenue uplift from personalization engines."
    },
    {
        question: "What is your approach to AI bias and fairness?",
        answer: "We employ comprehensive dataset auditing and adversarial testing to identify and mitigate biases. Our models undergo strict ethical review before production deployment."
    }
];

const AiData = () => {
    return (
        <ServiceLayout 
            pageKey="aiData"
            hero={{
                title: "Data & AI",
                description: "Unlock the true potential of your business with scalable artificial intelligence, machine learning, and advanced data analytics.",
                primaryButtonText: "Explore AI Solutions",
                secondaryButtonText: "Talk to a Data Expert",
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

export default AiData;

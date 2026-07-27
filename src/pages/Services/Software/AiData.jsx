import React from 'react';
import ServiceLayout from '../../../components/ServiceLayout';

const SEQUENCE_FEATURES = [
    { id: 1, title: "AI Validation", desc: "Ensure AI models deliver accurate, reliable, and consistent results through rigorous testing, performance evaluation, and continuous validation." },
    { id: 2, title: "Smart Automation", desc: "Automate repetitive tasks and streamline complex business workflows using intelligent AI-powered automation solutions." },
    { id: 3, title: "AI Agents", desc: "Build autonomous AI agents capable of understanding, reasoning, and executing tasks to enhance productivity and business efficiency." },
    { id: 4, title: "Machine Learning & Deep Learning", desc: "Develop intelligent models that learn from data, identify patterns, and deliver predictive insights for smarter decision-making." },
    { id: 5, title: "Generative AI", desc: "Leverage advanced generative AI models to create content, power conversational assistants, summarize information, and accelerate innovation." },
    { id: 6, title: "Data Engineering", desc: "Design scalable data pipelines, modern data platforms, and efficient processing frameworks to power AI and analytics solutions." }
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
        title: "Big Data Processing",
        description: "Process massive datasets in real-time with distributed computing technologies.",
        points: ["Real-time data streaming", "Hadoop & Spark integration", "Data Lake architecture"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
        color: "from-blue-500/20 to-purple-500/20"
    },
    {
        id: "02",
        title: "Custom LLM Training",
        description: "Train and fine-tune large language models on your proprietary enterprise data.",
        points: ["Model fine-tuning", "RAG architectures", "Secure deployment"],
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=80",
        color: "from-emerald-500/20 to-teal-500/20"
    },
    {
        id: "03",
        title: "Data Visualization",
        description: "Transform complex data into intuitive, interactive dashboards for stakeholders.",
        points: ["Interactive dashboards", "Real-time KPI tracking", "Custom reporting tools"],
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=80",
        color: "from-orange-500/20 to-red-500/20"
    },
    {
        id: "04",
        title: "Cognitive Automation",
        description: "Automate complex, unstructured business processes using AI agents.",
        points: ["RPA integration", "Intelligent document processing", "Automated decisioning"],
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=80",
        color: "from-pink-500/20 to-rose-500/20"
    },
    {
        id: "05",
        title: "AI Security & Ethics",
        description: "Ensure your AI solutions are unbiased, secure, and compliant with regulations.",
        points: ["Bias detection", "Data privacy compliance", "Secure AI sandboxes"],
        image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80",
        color: "from-indigo-500/20 to-cyan-500/20"
    },
    {
        id: "06",
        title: "MLOps",
        description: "Streamline the lifecycle of machine learning models from development to production.",
        points: ["Continuous model training", "Automated deployment", "Performance monitoring"],
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=80",
        color: "from-violet-500/20 to-fuchsia-500/20"
    }
];

const LATEST_INSIGHTS = [
  {
    id: 1,
    tag: "Generative AI",
    title: "How GenAI is Reshaping Enterprise Workflows in 2024",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    tag: "Data Strategy",
    title: "Building a Modern Data Mesh Architecture",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    tag: "Machine Learning",
    title: "Overcoming Data Sparsity with Synthetic Data",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    tag: "Case Study",
    title: "Reducing Churn by 40% with Predictive Modeling",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=80"
  }
];

const AiData = () => {
    return (
        <ServiceLayout 
            hero={{
                title: "Data & AI",
                description: "Unlock the true potential of your business with scalable artificial intelligence, machine learning, and advanced data analytics.",
                primaryButtonText: "Explore AI Solutions",
                secondaryButtonText: "Talk to a Data Expert"
            }}
            portal={{
                portalImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2564&auto=format&fit=crop",
                gridImage: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2564&auto=format&fit=crop",
                collageImages: COLLAGE_IMAGES,
                features: SEQUENCE_FEATURES,
                aboutText: (
                    <p className="text-[clamp(1.1rem,2vw,2.2rem)] font-medium leading-[1.6] tracking-tight text-left text-white">
                        We harness the power of artificial intelligence to transform your raw data into actionable insights.
                        <br className="hidden lg:block mt-2" />
                        From predictive analytics to custom LLMs, our solutions drive smarter decisions and automate complex workflows at scale.
                    </p>
                )
            }}
            slider={{
                title: "Latest in AI & Data",
                subtitle: "Discover breakthroughs in artificial intelligence and big data infrastructure",
                cards: LATEST_INSIGHTS
            }}
            showcase={{
                features: SHOWCASE_FEATURES,
                backgroundText: "INTELLIGENT\nFUTURES"
            }}
        />
    );
};

export default AiData;

import React from 'react';
import ServiceLayout from '../../../components/ServiceLayout';
import portalImage from '../../../assets/images/portal.jpg';

const SEQUENCE_FEATURES = [
    { id: 1, title: "Strategic Planning", desc: "Transform business ideas into scalable digital solutions." },
    { id: 2, title: "Expert Engineering", desc: "Experienced developers delivering high-quality applications." },
    { id: 3, title: "Modern Architecture", desc: "Cloud-native and scalable application design." },
    { id: 4, title: "Quality Assurance", desc: "Comprehensive testing for reliability and performance." },
    { id: 5, title: "Continuous Improvement", desc: "Regular updates to keep applications modern and competitive." },
    { id: 6, title: "Trusted Partnership", desc: "Long-term collaboration focused on your business success." }
];

const COLLAGE_IMAGES = [
    { src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800", scaleIndex: 4, cls: "!-top-[30vh] !left-[5vw] !h-[30vh] !w-[35vw]" },
    { src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800", scaleIndex: 5, cls: "!-top-[10vh] !-left-[25vw] !h-[45vh] !w-[20vw]" },
    { src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800", scaleIndex: 6, cls: "!left-[27.5vw] !h-[25vh] !w-[25vw]" },
    { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800", scaleIndex: 5, cls: "!top-[27.5vh] !left-[5vw] !h-[25vh] !w-[20vw]" },
    { src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800", scaleIndex: 6, cls: "!top-[27.5vh] !-left-[22.5vw] !h-[25vh] !w-[30vw]" },
    { src: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=800", scaleIndex: 8, cls: "!top-[22.5vh] !left-[25vw] !h-[15vh] !w-[15vw]" },
];

const SHOWCASE_FEATURES = [
    {
        id: "01",
        title: "Full-Stack Development",
        description: "End-to-end development solutions encompassing both front-end user experiences and back-end logic, delivering fully functional and robust applications.",
        points: ["Frontend Frameworks (React, Angular)", "Backend Systems (Node.js, Python)", "Database Architecture"],
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
        color: "from-blue-500/20 to-purple-500/20"
    },
    {
        id: "02",
        title: "Agile Methodologies",
        description: "Iterative development processes that ensure flexibility, transparency, and rapid delivery of high-quality software solutions.",
        points: ["Sprint Planning", "Continuous Integration", "Rapid Prototyping"],
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80",
        color: "from-emerald-500/20 to-teal-500/20"
    },
    {
        id: "03",
        title: "Enterprise Solutions",
        description: "Scalable and secure software designed to meet the complex needs of large organizations and streamline enterprise-wide processes.",
        points: ["System Architecture", "High Availability", "Security Compliance"],
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=80",
        color: "from-orange-500/20 to-red-500/20"
    },
    {
        id: "04",
        title: "Microservices Architecture",
        description: "Breaking down monolithic applications into smaller, independent services to improve scalability, maintainability, and deployment speed.",
        points: ["Docker & Kubernetes", "Service Mesh", "API Gateways"],
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80",
        color: "from-pink-500/20 to-rose-500/20"
    },
    {
        id: "05",
        title: "Quality Assurance & Testing",
        description: "Rigorous testing protocols including automated and manual testing to guarantee software reliability and bug-free performance.",
        points: ["Automated Testing", "Performance Testing", "User Acceptance Testing"],
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80",
        color: "from-indigo-500/20 to-cyan-500/20"
    },
    {
        id: "06",
        title: "Maintenance & Support",
        description: "Ongoing support and maintenance services to ensure your applications remain up-to-date, secure, and optimized over time.",
        points: ["24/7 Monitoring", "Security Updates", "Performance Tuning"],
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=80",
        color: "from-violet-500/20 to-fuchsia-500/20"
    }
];

const WHATS_HAPPENING_CARDS = [
  {
    id: 1,
    tag: "Tech Trends",
    title: "The Impact of WebAssembly on Modern Web Development",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    tag: "Architecture",
    title: "Serverless Computing: Pros, Cons, and Use Cases",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    tag: "Development",
    title: "Enhancing Developer Productivity with AI Coding Assistants",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    tag: "Innovation",
    title: "Building Real-time Applications with WebSockets",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80"
  }
];

const ApplicationDevelopment = () => {
    return (
        <ServiceLayout 
            hero={{
                title: "Application Development",
                description: "Deliver exceptional digital experiences with our custom, scalable, and secure application development services.",
                primaryButtonText: "Start Your Project",
                secondaryButtonText: "View Our Portfolio"
            }}
            portal={{
                portalImage: portalImage,
                gridImage: "https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=2564&auto=format&fit=crop",
                collageImages: COLLAGE_IMAGES,
                features: SEQUENCE_FEATURES,
                aboutText: (
                    <p className="text-[clamp(1.1rem,2vw,2.2rem)] font-medium leading-[1.6] tracking-tight text-left text-white">
                        We build robust, high-performance applications tailored to your specific business requirements and strategic goals.
                        <br className="hidden lg:block mt-2" />
                        From concept to deployment, our expert team utilizes the latest technologies to bring your innovative ideas to life.
                    </p>
                )
            }}
            slider={{
                title: "What's Happening",
                subtitle: "Insights and trends from the forefront of software development",
                cards: WHATS_HAPPENING_CARDS
            }}
            showcase={{
                features: SHOWCASE_FEATURES,
                backgroundText: "INNOVATING\nSOFTWARE"
            }}
        />
    );
};

export default ApplicationDevelopment;
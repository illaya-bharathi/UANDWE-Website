import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';
import medicalImg from '../../assets/images/medical.png';

const SEQUENCE_FEATURES = [
    { id: 1, title: "Medical Software (IEC 62304)", desc: "Software lifecycle processes for compliant medical device software." },
    { id: 2, title: "Biomedical Signal Processing", desc: "ECG, EEG, EMG filtering and real-time biometric analysis algorithms." },
    { id: 3, title: "Connected Health (IoMT)", desc: "Secure Internet of Medical Things platforms and cloud integration." },
    { id: 4, title: "AI Medical Imaging", desc: "Deep learning models for MRI, CT, X-ray segmentation and diagnostic assistance." },
    { id: 5, title: "Regulatory Compliance", desc: "FDA 510(k), EU MDR, HIPAA, and ISO 13485 quality management systems." },
    { id: 6, title: "Wearable Health Devices", desc: "Ultra-low-power biosensor firmware and wearable diagnostic tools." }
];

const COLLAGE_IMAGES = [
    { src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800", scaleIndex: 4, cls: "!-top-[30vh] !left-[5vw] !h-[30vh] !w-[35vw]" },
    { src: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800", scaleIndex: 5, cls: "!-top-[10vh] !-left-[25vw] !h-[45vh] !w-[20vw]" },
    { src: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=800", scaleIndex: 6, cls: "!left-[27.5vw] !h-[25vh] !w-[25vw]" },
    { src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800", scaleIndex: 5, cls: "!top-[27.5vh] !left-[5vw] !h-[25vh] !w-[20vw]" },
    { src: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=800", scaleIndex: 6, cls: "!top-[27.5vh] !-left-[22.5vw] !h-[25vh] !w-[30vw]" },
    { src: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=800", scaleIndex: 8, cls: "!top-[22.5vh] !left-[25vw] !h-[15vh] !w-[15vw]" },
];

const SHOWCASE_FEATURES = [
    {
        id: "01",
        title: "Medical Device Software (IEC 62304)",
        description: "Full lifecycle SaMD (Software as a Medical Device) engineering meeting Class A, B, and C safety risk classification requirements.",
        points: ["IEC 62304 Lifecycle Compliance", "Risk Management (ISO 14971)", "Verification & Validation (V&V)"],
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80",
        color: "from-teal-500/20 to-emerald-500/20"
    },
    {
        id: "02",
        title: "Internet of Medical Things (IoMT)",
        description: "Encrypted, HIPAA-compliant patient monitoring solutions streaming real-time vitals to cloud dashboards and EHR databases.",
        points: ["HIPAA & GDPR Data Encryption", "Real-Time Telemetry Streaming", "EHR/EMR Integration (HL7/FHIR)"],
        image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&auto=format&fit=crop&q=80",
        color: "from-blue-500/20 to-cyan-500/20"
    },
    {
        id: "03",
        title: "AI Medical Image Diagnostics",
        description: "Computer vision pipelines automating tumor detection, organ segmentation, and anomaly classification in DICOM image series.",
        points: ["DICOM & PACS Integration", "Deep Learning Segmentation", "FDA Pre-Market AI Submissions"],
        image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=800&auto=format&fit=crop&q=80",
        color: "from-indigo-500/20 to-purple-500/20"
    },
    {
        id: "04",
        title: "Biomedical DSP Algorithms",
        description: "Embedded signal processing algorithms extracting physiological metrics from noisy sensor data (ECG, PPG, SpO2, EEG).",
        points: ["Noise Cancellation & Artifact Removal", "Pulse Oximetry & Heart Rate Variability", "Continuous Glucose Monitoring (CGM)"],
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=80",
        color: "from-cyan-500/20 to-sky-500/20"
    },
    {
        id: "05",
        title: "Wearable Health Firmware",
        description: "Ultra-low-power firmware for continuous health wearables, smart patches, and diagnostic sensors operating on micro-batteries.",
        points: ["Sub-microamp Sleep Modes", "BLE Medical Device Profile", "Over-the-Air Firmware Recovery"],
        image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=800&auto=format&fit=crop&q=80",
        color: "from-rose-500/20 to-pink-500/20"
    },
    {
        id: "06",
        title: "Quality Management (ISO 13485)",
        description: "Complete design history file (DHF) compilation, traceability matrix generation, and audit preparation for global market access.",
        points: ["ISO 13485 QMS Alignment", "Full Requirements Traceability", "FDA 510(k) & EU MDR Filings"],
        image: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&auto=format&fit=crop&q=80",
        color: "from-emerald-500/20 to-green-500/20"
    }
];

const WHATS_HAPPENING_CARDS = [
  {
    id: 1,
    tag: "Digital Health",
    title: "The Role of Generative AI in Clinical Workflow Optimization",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    tag: "IoMT Security",
    title: "Securing Medical Devices Against Cyber Threats: FDA Guidelines",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    tag: "Biomedical AI",
    title: "Federated Learning for Privacy-Preserving Medical Research",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    tag: "Regulatory Tech",
    title: "EU MDR Compliance Strategies for Embedded Medical Software",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=80"
  }
];

const Healthcare = () => {
    return (
        <ServiceLayout 
            hero={{
                title: "Healthcare & MedTech",
                description: "Engineering life-saving medical software, IEC 62304 compliant devices, biomedical AI diagnostics, and secure IoMT systems.",
                primaryButtonText: "Explore MedTech Solutions",
                secondaryButtonText: "Talk to Healthcare Engineers"
            }}
            portal={{
                portalImage: medicalImg,
                gridImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2564&auto=format&fit=crop",
                collageImages: COLLAGE_IMAGES,
                features: SEQUENCE_FEATURES,
                aboutText: (
                    <p className="text-[clamp(1.1rem,2vw,2.2rem)] font-medium leading-[1.6] tracking-tight text-left text-white">
                        We transform healthcare through rigorous biomedical engineering and compliant medical software systems.
                        <br className="hidden lg:block mt-2" />
                        Our solutions adhere strictly to global FDA and EU MDR standards, improving patient outcomes and accelerating diagnostic speed.
                    </p>
                )
            }}
            slider={{
                title: "Healthcare Insights",
                subtitle: "Pioneering innovations at the intersection of medicine and technology",
                cards: WHATS_HAPPENING_CARDS
            }}
            showcase={{
                features: SHOWCASE_FEATURES,
                backgroundText: "TRANSFORMING\nHEALTHCARE"
            }}
        />
    );
};

export default Healthcare;

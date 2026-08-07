import React from 'react';
import ServiceLayout from '../../../../components/ServiceLayout';
import { Activity, Heart, Target, Zap, Settings, Eye, Database } from 'lucide-react';
import heroImage from "../../../../assets/imagesss/healthcare/WearableHealthAlgorithms.png";

const SEQUENCE_FEATURES = [
    { id: 1, title: "Data Collection", desc: "Gathering massive datasets of raw PPG and ECG signals across diverse patient demographics and skin tones." },
    { id: 2, title: "Signal Cleaning", desc: "Implementing digital filters (FIR/IIR) and adaptive noise cancellation to remove motion artifacts." },
    { id: 3, title: "Feature Extraction", desc: "Identifying key morphological features in the waveform, such as the dichrotic notch in a PPG signal." },
    { id: 4, title: "Algorithm Training", desc: "Training Machine Learning (ML) models to correlate extracted features with clinical ground-truth data." },
    { id: 5, title: "Edge Optimization", desc: "Compressing and quantizing the model so it can run locally on an ultra-low-power Cortex-M4 microcontroller." },
    { id: 6, title: "Clinical Validation", desc: "Conducting IRB-approved clinical trials to prove the algorithm's accuracy meets FDA/CE requirements." }
];

const COLLAGE_IMAGES = [
    { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800", scaleIndex: 4, cls: "!-top-[30vh] !left-[5vw] !h-[30vh] !w-[35vw]" },
    { src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800", scaleIndex: 5, cls: "!-top-[10vh] !-left-[25vw] !h-[45vh] !w-[20vw]" },
    { src: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=800", scaleIndex: 6, cls: "!left-[27.5vw] !h-[25vh] !w-[25vw]" },
    { src: "https://images.unsplash.com/photo-1532187863486-abf9db0902c3?q=80&w=800", scaleIndex: 5, cls: "!top-[27.5vh] !left-[5vw] !h-[25vh] !w-[20vw]" },
    { src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800", scaleIndex: 6, cls: "!top-[27.5vh] !-left-[22.5vw] !h-[25vh] !w-[30vw]" },
    { src: "https://images.unsplash.com/photo-1551076805-e1869043e560?q=80&w=800", scaleIndex: 8, cls: "!top-[22.5vh] !left-[25vw] !h-[15vh] !w-[15vw]" },
];

const SHOWCASE_FEATURES = [
    {
        id: "01",
        title: "PPG / Optical Sensors",
        description: "Processing Photoplethysmography (PPG) signals to extract continuous Heart Rate (HR) and blood oxygen saturation (SpO2).",
        points: ["Motion artifact rejection", "Multi-wavelength", "Skin tone calibration"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
        color: "from-blue-500/20 to-purple-500/20"
    },
    {
        id: "02",
        title: "ECG Analysis",
        description: "Analyzing Electrocardiogram (ECG) data on the edge to detect arrhythmias like Atrial Fibrillation (AFib).",
        points: ["QRS complex detection", "AFib alerting", "Clinical grade"],
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=80",
        color: "from-emerald-500/20 to-teal-500/20"
    },
    {
        id: "03",
        title: "Continuous Glucose (CGM)",
        description: "Developing the predictive algorithms that convert interstitial fluid sensor data into highly accurate blood glucose readings.",
        points: ["Kalman filtering", "Lag compensation", "Trend prediction"],
        image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&auto=format&fit=crop&q=80",
        color: "from-orange-500/20 to-red-500/20"
    },
    {
        id: "04",
        title: "Core Body Temperature",
        description: "Fusing multiple thermistors and heat flux sensors to estimate deep core body temperature non-invasively.",
        points: ["Sensor fusion", "Heat flux modeling", "Circadian rhythms"],
        image: "https://images.unsplash.com/photo-1532187863486-abf9db0902c3?w=800&auto=format&fit=crop&q=80",
        color: "from-pink-500/20 to-rose-500/20"
    }
];

const LATEST_INSIGHTS = [
  {
    id: 1,
    tag: "PPG",
    title: "Overcoming the Skin Tone Bias in Optical Heart Rate Sensors",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    tag: "Edge AI",
    title: "Running Neural Networks on a 1mA Cortex-M4 Microcontroller",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    tag: "Motion",
    title: "Adaptive Noise Cancellation: Removing Jogging Artifacts from ECGs",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&auto=format&fit=crop&q=80"
  }
];

const ALGORITHM_SUB_SERVICES = [
    { title: "Motion Artifact Rejection", description: "Using 6-axis IMU (accelerometer/gyroscope) data to mathematically subtract physical movement noise from sensitive optical signals.", icon: <Activity className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80" },
    { title: "Biomarker Extraction", description: "Writing DSP code to calculate Heart Rate Variability (HRV), Respiration Rate, and Blood Pressure from raw waveforms.", icon: <Heart className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=80" },
    { title: "Edge Machine Learning", description: "Training TinyML models (TensorFlow Lite for Microcontrollers) to classify complex states like Sleep Stages directly on the device.", icon: <Zap className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&auto=format&fit=crop&q=80" },
    { title: "Power Optimization", description: "Structuring algorithms to heavily utilize DMA and hardware DSP instructions (CMSIS-DSP) to let the main CPU sleep.", icon: <Settings className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1532187863486-abf9db0902c3?w=800&auto=format&fit=crop&q=80" },
    { title: "Data Pipeline Architecture", description: "Designing secure, HIPAA-compliant BLE-to-Cloud pipelines for sending raw high-frequency data for off-device processing.", icon: <Database className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&auto=format&fit=crop&q=80" },
    { title: "Algorithm Verification", description: "Building massive automated test suites that run thousands of hours of recorded patient data through the algorithm to prove accuracy.", icon: <Eye className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1551076805-e1869043e560?w=800&auto=format&fit=crop&q=80" }
];

const ALGORITHM_ADVANTAGES = [
    { title: "Math Meets Hardware", description: "We understand that an algorithm is useless if it drains the battery in 2 hours. We optimize math specifically for the target silicon.", icon: <Target className="w-6 h-6" /> },
    { title: "Clinical Rigor", description: "We don't build fitness trackers. We build algorithms designed to pass FDA 510(k) clearance as Software as a Medical Device (SaMD).", icon: <Activity className="w-6 h-6" /> },
    { title: "Data Driven", description: "We have access to massive, diverse datasets of physiological signals, allowing us to train algorithms that work on all patients, not just a subset.", icon: <Database className="w-6 h-6" /> },
    { title: "End-to-End", description: "Because we also design the analog front-end (AFE) hardware, we can fix noise issues at the source rather than trying to filter it out later in software.", icon: <Zap className="w-6 h-6" /> }
];

const ALGORITHM_FAQ = [
    {
        question: "Why is motion artifact so hard to remove from PPG?",
        answer: "When a person jogs, the blood sloshing in their wrist creates a signal at the exact same frequency as their heartbeat. Without advanced IMU cancellation, the sensor will lock onto the cadence of the footsteps, not the heart."
    },
    {
        question: "What is TinyML?",
        answer: "Machine learning traditionally runs on massive cloud servers. TinyML is the process of compressing neural networks so small they can run on a $2 microcontroller using only kilobytes of RAM."
    },
    {
        question: "Why not send all the raw data to the cloud?",
        answer: "Power. Turning on the Bluetooth radio to transmit raw 500Hz ECG data takes massive amounts of battery. It is much more battery-efficient to analyze the data locally and only transmit the final result (e.g., 'Heart Rate: 72')."
    },
    {
        question: "How do you handle skin tone bias in optical sensors?",
        answer: "Melanin absorbs green light, which is traditionally used for PPG. We develop multi-wavelength algorithms (using green, red, and infrared LEDs) and train our models on highly diverse datasets to ensure equal accuracy for all patients."
    }
];

const ALGORITHM_ABOUT_METRICS = {
    titlePart1: "About",
    titlePart2: "Wearable Algorithms",
    description: "U&WE extracts clinical truth from noisy data. We develop the advanced signal processing and TinyML algorithms that turn raw wearable sensor data into actionable, FDA-cleared physiological insights.",
    metrics: [
        { tag: "SIGNALS", value: "PPG / ECG", label: "Physiological Data", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" },
        { tag: "AI / ML", value: "TinyML", label: "Edge Intelligence", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop" },
        { tag: "HARDWARE", value: "Cortex-M", label: "Ultra-Low Power", image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=800&auto=format&fit=crop" },
        { tag: "ACCURACY", value: "Clinical", label: "FDA 510(k) Ready", image: "https://images.unsplash.com/photo-1532187863486-abf9db0902c3?q=80&w=800&auto=format&fit=crop" }
    ]
};

const WearableAlgorithms = () => {
    return (
        <ServiceLayout 
            pageKey="wearableAlgorithms"
            hero={{
                title: "Wearable Health Algorithms",
                description: "Developing clinical-grade signal processing and edge AI (TinyML) algorithms for continuous PPG, ECG, and SpO2 monitoring.",
                primaryButtonText: "Discuss Project",
                secondaryButtonText: "View Capabilities",
                image: heroImage
            }}
            aboutMetrics={ALGORITHM_ABOUT_METRICS}
            subServices={ALGORITHM_SUB_SERVICES}
            subServicesTitle={{ part1: "Core", part2: "Capabilities" }}
            advantages={ALGORITHM_ADVANTAGES}
            advantagesTitle={{ part1: "Why Partner", part2: "With Us" }}
            faqs={ALGORITHM_FAQ}
            portal={{
                portalImage: heroImage,
                gridImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2564&auto=format&fit=crop",
                collageImages: COLLAGE_IMAGES,
                features: SEQUENCE_FEATURES,
                aboutText: (
                    <p className="text-[clamp(1.1rem,2vw,2.2rem)] font-medium leading-[1.6] tracking-tight text-left text-white">
                        Finding the signal in the noise.
                        <br className="hidden lg:block mt-2" />
                        We turn raw physiology into clinical intelligence.
                    </p>
                )
            }}
            slider={{
                title: "Latest in Algorithms",
                subtitle: "Insights from our data scientists",
                cards: LATEST_INSIGHTS
            }}
            showcase={{
                features: SHOWCASE_FEATURES,
                backgroundText: "ALGORITHMS"
            }}
        />
    );
};

export default WearableAlgorithms;

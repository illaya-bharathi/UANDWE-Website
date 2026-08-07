import React from 'react';
import ServiceLayout from '../../../../components/ServiceLayout';
import { Camera, Radio, Target, Activity, Cpu, ShieldCheck, Waves, Maximize, Eye, Database, Zap } from 'lucide-react';
import heroImage from "../../../../assets/imagesss/automotive/adas&sensor.png";

const SEQUENCE_FEATURES = [
    { id: 1, title: "Sensor Calibration", desc: "Developing algorithms to align and calibrate intrinsic and extrinsic parameters of multi-modal sensors." },
    { id: 2, title: "Data Ingestion", desc: "Writing low-level drivers to ingest RAW CSI-2 camera data, LiDAR point clouds, and CAN radar objects." },
    { id: 3, title: "Perception Pipeline", desc: "Implementing Deep Neural Networks (DNNs) on edge AI accelerators for object detection and lane finding." },
    { id: 4, title: "Sensor Fusion", desc: "Fusing radar tracking data with camera bounding boxes using Extended Kalman Filters (EKF)." },
    { id: 5, title: "Path Planning", desc: "Calculating drivable free-space and generating smooth, collision-free trajectories." },
    { id: 6, title: "Actuation Control", desc: "Translating trajectories into precise steering (EPS) and braking (ESC) commands via the vehicle bus." }
];

const COLLAGE_IMAGES = [
    { src: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800", scaleIndex: 4, cls: "!-top-[30vh] !left-[5vw] !h-[30vh] !w-[35vw]" },
    { src: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=800", scaleIndex: 5, cls: "!-top-[10vh] !-left-[25vw] !h-[45vh] !w-[20vw]" },
    { src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800", scaleIndex: 6, cls: "!left-[27.5vw] !h-[25vh] !w-[25vw]" },
    { src: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800", scaleIndex: 5, cls: "!top-[27.5vh] !left-[5vw] !h-[25vh] !w-[20vw]" },
    { src: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800", scaleIndex: 6, cls: "!top-[27.5vh] !-left-[22.5vw] !h-[25vh] !w-[30vw]" },
    { src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800", scaleIndex: 8, cls: "!top-[22.5vh] !left-[25vw] !h-[15vh] !w-[15vw]" },
];

const SHOWCASE_FEATURES = [
    {
        id: "01",
        title: "Vision Systems (Cameras)",
        description: "Processing 4K HDR video streams in real-time for lane departure warning and traffic sign recognition.",
        points: ["ISP Tuning", "YOLO / CNN implementation", "Optical Flow"],
        image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&auto=format&fit=crop&q=80",
        color: "from-blue-500/20 to-purple-500/20"
    },
    {
        id: "02",
        title: "LiDAR Point Clouds",
        description: "Parsing millions of laser reflections per second to create high-resolution 3D environmental maps.",
        points: ["Voxelization", "ICP Registration", "Ground Plane Removal"],
        image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&auto=format&fit=crop&q=80",
        color: "from-emerald-500/20 to-teal-500/20"
    },
    {
        id: "03",
        title: "Radar Processing",
        description: "Utilizing 77GHz FMCW radar for all-weather velocity tracking and adaptive cruise control.",
        points: ["Fast Fourier Transforms (FFT)", "Clutter filtering", "Doppler analysis"],
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
        color: "from-orange-500/20 to-red-500/20"
    },
    {
        id: "04",
        title: "Sensor Fusion (EKF/UKF)",
        description: "Combining the strengths of all sensors to create a deterministic, reliable model of the surrounding world.",
        points: ["Kalman Filtering", "Association algorithms", "Occupancy Grids"],
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=80",
        color: "from-pink-500/20 to-rose-500/20"
    }
];

const LATEST_INSIGHTS = [
  {
    id: 1,
    tag: "Fusion",
    title: "Late vs. Early Sensor Fusion: Architectural Trade-offs in ADAS",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    tag: "AI at the Edge",
    title: "Optimizing Neural Networks for Automotive SoCs",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    tag: "Calibration",
    title: "The Math Behind Dynamic Extrinsic Sensor Calibration",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80"
  }
];

const ADAS_SUB_SERVICES = [
    { title: "Computer Vision", description: "Deploying highly optimized CNNs on NVIDIA Orin or Qualcomm Snapdragon Ride platforms for real-time object detection.", icon: <Eye className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&auto=format&fit=crop&q=80" },
    { title: "LiDAR Processing", description: "Writing C++ algorithms using PCL (Point Cloud Library) to extract drivable space and cluster dynamic obstacles.", icon: <Maximize className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&auto=format&fit=crop&q=80" },
    { title: "Radar Tracking", description: "Implementing track management, association logic, and filtering to maintain accurate trajectories of moving targets.", icon: <Radio className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80" },
    { title: "Sensor Abstraction", description: "Developing middleware that normalizes incoming data streams from different Tier-1 sensor suppliers into a unified format.", icon: <Cpu className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=80" },
    { title: "Data Logging & Replay", description: "Building high-bandwidth ingestion systems capable of recording terabytes of RAW sensor data for HIL replay testing.", icon: <Database className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80" },
    { title: "Safety Diagnostics", description: "Writing algorithms that constantly monitor sensor health (blockage detection, misalignment) to degrade ADAS features safely.", icon: <ShieldCheck className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&auto=format&fit=crop&q=80" }
];

const ADAS_ADVANTAGES = [
    { title: "Algorithmic Depth", description: "We don't just use black-box APIs. We understand the underlying mathematics of Kalman Filters, quaternions, and SLAM.", icon: <Activity className="w-6 h-6" /> },
    { title: "Hardware Acceleration", description: "We utilize CUDA, TensorRT, and OpenCL to ensure perception algorithms hit strict 33ms (30fps) timing budgets.", icon: <Zap className="w-6 h-6" /> },
    { title: "ROS2 & DDS Experience", description: "Extensive experience using ROS2 and Data Distribution Service (DDS) for inter-process communication in autonomous stacks.", icon: <Target className="w-6 h-6" /> },
    { title: "Automotive Grade", description: "Our C++ code strictly follows MISRA and AUTOSAR guidelines, ensuring it is ready for deployment in production vehicles.", icon: <ShieldCheck className="w-6 h-6" /> }
];

const ADAS_FAQ = [
    {
        question: "Why do we need Sensor Fusion?",
        answer: "No single sensor is perfect. Cameras fail in the dark or fog. Radar has poor lateral resolution. LiDAR is expensive and struggles in heavy rain. Fusion combines their strengths to create a highly reliable, redundant model of the environment."
    },
    {
        question: "What is the difference between Early and Late Fusion?",
        answer: "Late fusion analyzes data from each sensor independently (e.g. camera finds a car, radar finds a car) and merges the results. Early fusion merges the raw data directly (e.g. mapping LiDAR points onto a camera image matrix) before running a single neural network."
    },
    {
        question: "What frameworks do you use?",
        answer: "We develop in modern C++ (C++14/17) using frameworks like ROS2 for prototyping, and migrate to AUTOSAR Adaptive or custom middleware for production. For AI, we use PyTorch/TensorFlow trained models quantized via TensorRT."
    },
    {
        question: "How do you handle real-time constraints?",
        answer: "Through rigorous profiling and hardware acceleration. We move heavy matrix operations out of the CPU and onto dedicated DSPs or GPUs, and heavily utilize Zero-Copy memory architectures to prevent latency."
    }
];

const ADAS_ABOUT_METRICS = {
    titlePart1: "About",
    titlePart2: "ADAS & Sensor Fusion",
    description: "U&WE provides the perception layer for modern vehicles. We engineer the complex mathematics and highly optimized software required to ingest, analyze, and fuse raw sensor data into actionable driving intelligence.",
    metrics: [
        { tag: "LATENCY", value: "< 33ms", label: "Real-Time Processing", image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800&auto=format&fit=crop" },
        { tag: "SENSORS", value: "Multi-Modal", label: "Camera/Radar/LiDAR", image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=800&auto=format&fit=crop" },
        { tag: "PLATFORMS", value: "NVIDIA/QCOM", label: "Edge AI Accelerated", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" },
        { tag: "SAFETY", value: "ASIL D", label: "Deterministic Fusion", image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800&auto=format&fit=crop" }
    ]
};

const AdasSensorFusion = () => {
    return (
        <ServiceLayout 
            pageKey="adasSensorFusion"
            hero={{
                title: "ADAS & Sensor Fusion",
                description: "Engineering perception algorithms and high-performance sensor fusion pipelines for Level 2+ and autonomous vehicles.",
                primaryButtonText: "Discuss Project",
                secondaryButtonText: "View Capabilities",
                image: heroImage
            }}
            aboutMetrics={ADAS_ABOUT_METRICS}
            subServices={ADAS_SUB_SERVICES}
            subServicesTitle={{ part1: "Core", part2: "Capabilities" }}
            advantages={ADAS_ADVANTAGES}
            advantagesTitle={{ part1: "Why Partner", part2: "With Us" }}
            faqs={ADAS_FAQ}
            portal={{
                portalImage: heroImage,
                gridImage: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2564&auto=format&fit=crop",
                collageImages: COLLAGE_IMAGES,
                features: SEQUENCE_FEATURES,
                aboutText: (
                    <p className="text-[clamp(1.1rem,2vw,2.2rem)] font-medium leading-[1.6] tracking-tight text-left text-white">
                        Teaching machines to see.
                        <br className="hidden lg:block mt-2" />
                        We turn sensor noise into safe, actionable data.
                    </p>
                )
            }}
            slider={{
                title: "Latest in ADAS",
                subtitle: "Insights from our perception engineers",
                cards: LATEST_INSIGHTS
            }}
            showcase={{
                features: SHOWCASE_FEATURES,
                backgroundText: "AUTONOMY"
            }}
        />
    );
};

export default AdasSensorFusion;

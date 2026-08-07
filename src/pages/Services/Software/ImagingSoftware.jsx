import React from 'react';
import ServiceLayout from '../../../components/ServiceLayout';
import { Aperture, Cpu, Database, Eye, Layers, Scan, Activity, MonitorPlay } from 'lucide-react';
import heroImage from "../../../assets/imagesss/healthcare/MedicalImagingSoftware.png";

const SEQUENCE_FEATURES = [
    { id: 1, title: "Algorithm Design", desc: "Developing mathematical models for beamforming (ultrasound) or k-space reconstruction (MRI)." },
    { id: 2, title: "Hardware Acceleration", desc: "Porting complex math from C++ to CUDA (Nvidia GPUs) or OpenCL (FPGAs) for real-time processing." },
    { id: 3, title: "DICOM Integration", desc: "Implementing the DICOM standard to ensure images can be securely stored and queried by hospital PACS." },
    { id: 4, title: "3D Rendering", desc: "Using VTK (Visualization Toolkit) and OpenGL to render 3D volumetric reconstructions from 2D slices." },
    { id: 5, title: "AI/ML Integration", desc: "Deploying PyTorch/TensorFlow models to auto-detect anomalies (e.g., nodules, fractures) on the edge." },
    { id: 6, title: "FDA Clearance", desc: "Validating the software (SaMD) through rigorous clinical evaluation to prove diagnostic equivalency." }
];

const COLLAGE_IMAGES = [
    { src: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=800", scaleIndex: 4, cls: "!-top-[30vh] !left-[5vw] !h-[30vh] !w-[35vw]" },
    { src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800", scaleIndex: 5, cls: "!-top-[10vh] !-left-[25vw] !h-[45vh] !w-[20vw]" },
    { src: "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=800", scaleIndex: 6, cls: "!left-[27.5vw] !h-[25vh] !w-[25vw]" },
    { src: "https://images.unsplash.com/photo-1576091160501-bbe57469278b?q=80&w=800", scaleIndex: 5, cls: "!top-[27.5vh] !left-[5vw] !h-[25vh] !w-[20vw]" },
    { src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800", scaleIndex: 6, cls: "!top-[27.5vh] !-left-[22.5vw] !h-[25vh] !w-[30vw]" },
    { src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800", scaleIndex: 8, cls: "!top-[22.5vh] !left-[25vw] !h-[15vh] !w-[15vw]" },
];

const SHOWCASE_FEATURES = [
    {
        id: "01",
        title: "Ultrasound (POCUS)",
        description: "Writing the highly optimized beamforming and Doppler processing code required for handheld, battery-powered ultrasound probes.",
        points: ["Synthetic aperture", "Color Doppler", "GPU Acceleration"],
        image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=800&auto=format&fit=crop&q=80",
        color: "from-blue-500/20 to-purple-500/20"
    },
    {
        id: "02",
        title: "MRI / CT Reconstruction",
        description: "Processing massive amounts of raw sensor data into clear diagnostic images using advanced Fourier transforms and iterative reconstruction.",
        points: ["K-space processing", "Artifact reduction", "High-throughput data"],
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
        color: "from-emerald-500/20 to-teal-500/20"
    },
    {
        id: "03",
        title: "Endoscopy & Surgery",
        description: "Developing the zero-latency video processing pipelines required for minimally invasive surgical cameras (laparoscopes).",
        points: ["4K 60fps streaming", "Image enhancement", "Fluorescence imaging"],
        image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&auto=format&fit=crop&q=80",
        color: "from-orange-500/20 to-red-500/20"
    },
    {
        id: "04",
        title: "Dental Imaging (CBCT)",
        description: "Reconstructing 3D volumetric models of the jaw and teeth from Cone Beam Computed Tomography (CBCT) scans.",
        points: ["Voxel rendering", "Panoramic extraction", "Implant planning"],
        image: "https://images.unsplash.com/photo-1576091160501-bbe57469278b?w=800&auto=format&fit=crop&q=80",
        color: "from-pink-500/20 to-rose-500/20"
    }
];

const LATEST_INSIGHTS = [
  {
    id: 1,
    tag: "Ultrasound",
    title: "Moving Beamforming from FPGAs to Mobile GPUs (CUDA/Metal)",
    image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    tag: "AI in Imaging",
    title: "Deploying PyTorch Models on the Edge for Real-Time Anomaly Detection",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    tag: "Interoperability",
    title: "Modernizing DICOM: Integrating Medical Imaging with Cloud PACS",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&auto=format&fit=crop&q=80"
  }
];

const IMAGING_SUB_SERVICES = [
    { title: "Digital Signal Processing", description: "Implementing advanced DSP algorithms (filtering, decimation, FFTs) to clean raw sensor data before reconstruction.", icon: <Activity className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=800&auto=format&fit=crop&q=80" },
    { title: "GPU / CUDA Acceleration", description: "Medical imaging is math-heavy. We offload complex calculations to Nvidia Jetson or mobile GPUs using CUDA, OpenCL, or Metal.", icon: <Cpu className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80" },
    { title: "3D Volumetric Rendering", description: "Utilizing VTK (Visualization Toolkit) and OpenGL to allow doctors to slice, rotate, and measure 3D models in real-time.", icon: <Layers className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&auto=format&fit=crop&q=80" },
    { title: "DICOM & PACS Integration", description: "Writing the networking stacks that package images into DICOM formats and securely transmit them to hospital servers.", icon: <Database className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1576091160501-bbe57469278b?w=800&auto=format&fit=crop&q=80" },
    { title: "Zero-Latency Video", description: "For surgical cameras, a 100ms delay is dangerous. We optimize the V4L2 kernel drivers and hardware codecs for instant glass-to-glass latency.", icon: <MonitorPlay className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&auto=format&fit=crop&q=80" },
    { title: "Edge AI / Computer Vision", description: "Integrating trained neural networks directly into the imaging pipeline to highlight areas of interest (like tumors) during the scan.", icon: <Eye className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80" }
];

const IMAGING_ADVANTAGES = [
    { title: "Math & Physics Focus", description: "Imaging software isn't just coding; it requires a deep understanding of wave physics, acoustics, and applied mathematics.", icon: <Aperture className="w-6 h-6" /> },
    { title: "Performance Masters", description: "When processing 10 gigabits of data per second, memory allocation matters. We write highly optimized, cache-friendly C++ code.", icon: <Cpu className="w-6 h-6" /> },
    { title: "SaMD Compliance", description: "Software as a Medical Device (SaMD) has unique FDA requirements. We navigate the clinical evaluation required to prove diagnostic efficacy.", icon: <Scan className="w-6 h-6" /> },
    { title: "Full Stack", description: "We can design the FPGA that captures the data, the GPU code that processes it, and the Qt interface the doctor uses to view it.", icon: <Layers className="w-6 h-6" /> }
];

const IMAGING_FAQ = [
    {
        question: "What is Beamforming in Ultrasound?",
        answer: "An ultrasound probe has hundreds of tiny piezoelectric crystals. Beamforming is the complex mathematical process of firing them at slightly different times (nanoseconds apart) to steer and focus the sound wave electronically, then interpreting the echoes to form an image."
    },
    {
        question: "Why use GPUs for medical imaging instead of main processors?",
        answer: "Image reconstruction requires performing the exact same mathematical operation (like an FFT) millions of times simultaneously. A standard CPU has 8 cores; a GPU has thousands. GPUs can process images in real-time that would take a CPU minutes."
    },
    {
        question: "What is DICOM?",
        answer: "Digital Imaging and Communications in Medicine. It is the universal standard format for storing and transmitting medical images. It ensures an MRI taken on a Siemens machine can be viewed by a doctor on a GE workstation."
    },
    {
        question: "How does FDA regulate AI in imaging?",
        answer: "Very strictly. If your AI tells a doctor 'This is a tumor', it is a Class III medical device. We help clients design 'locked' algorithms (they don't change after deployment) and run the clinical trials to prove they are as accurate as a radiologist."
    }
];

const IMAGING_ABOUT_METRICS = {
    titlePart1: "About",
    titlePart2: "Medical Imaging Software",
    description: "U&WE turns raw physics into clinical clarity. We engineer the high-throughput algorithms, GPU pipelines, and 3D rendering engines that power the next generation of ultrasound, MRI, and endoscopic devices.",
    metrics: [
        { tag: "PERFORMANCE", value: "Real-Time", label: "GPU / CUDA Acceleration", image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=800&auto=format&fit=crop" },
        { tag: "MODALITIES", value: "US/CT/MRI", label: "Reconstruction Algorithms", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop" },
        { tag: "VISUALS", value: "3D/4D", label: "Volumetric Rendering", image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=800&auto=format&fit=crop" },
        { tag: "STANDARDS", value: "DICOM", label: "PACS Interoperability", image: "https://images.unsplash.com/photo-1576091160501-bbe57469278b?q=80&w=800&auto=format&fit=crop" }
    ]
};

const ImagingSoftware = () => {
    return (
        <ServiceLayout 
            pageKey="imagingSoftware"
            hero={{
                title: "Medical Imaging Software",
                description: "Developing real-time DSP, GPU-accelerated reconstruction algorithms, and 3D visualization for Ultrasound, MRI, and Endoscopy.",
                primaryButtonText: "Discuss Project",
                secondaryButtonText: "View Capabilities",
                image: heroImage
            }}
            aboutMetrics={IMAGING_ABOUT_METRICS}
            subServices={IMAGING_SUB_SERVICES}
            subServicesTitle={{ part1: "Core", part2: "Capabilities" }}
            advantages={IMAGING_ADVANTAGES}
            advantagesTitle={{ part1: "Why Partner", part2: "With Us" }}
            faqs={IMAGING_FAQ}
            portal={{
                portalImage: heroImage,
                gridImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2564&auto=format&fit=crop",
                collageImages: COLLAGE_IMAGES,
                features: SEQUENCE_FEATURES,
                aboutText: (
                    <p className="text-[clamp(1.1rem,2vw,2.2rem)] font-medium leading-[1.6] tracking-tight text-left text-white">
                        Making the invisible, visible.
                        <br className="hidden lg:block mt-2" />
                        We engineer the software behind the scan.
                    </p>
                )
            }}
            slider={{
                title: "Latest in Imaging",
                subtitle: "Insights from our imaging architects",
                cards: LATEST_INSIGHTS
            }}
            showcase={{
                features: SHOWCASE_FEATURES,
                backgroundText: "IMAGING"
            }}
        />
    );
};

export default ImagingSoftware;

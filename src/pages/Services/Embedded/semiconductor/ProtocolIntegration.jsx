import React from 'react';
import ServiceLayout from '../../../../components/ServiceLayout';
import { Network, Wifi, Activity, Share2, Cpu, Globe, ShieldCheck, Database, Zap, Layers } from 'lucide-react';
import heroImage from "../../../../assets/imagesss/semiconductor/protocolintegration.png";

const SEQUENCE_FEATURES = [
    { id: 1, title: "Industrial IoT (IIoT)", desc: "Integrating MQTT, CoAP, and OPC UA for highly scalable, low-bandwidth telemetry." },
    { id: 2, title: "Automotive Protocols", desc: "Implementing CAN FD, LIN, and Automotive Ethernet (SOME/IP) for in-vehicle networking." },
    { id: 3, title: "Wireless Stacks", desc: "Porting and optimizing Bluetooth Low Energy (BLE), Zigbee, Thread, and LoRaWAN." },
    { id: 4, title: "Wired Interfaces", desc: "Writing bare-metal bit-banging or DMA-driven drivers for I2C, SPI, UART, and I2S." },
    { id: 5, title: "Network Security", desc: "Securing data in transit with TLS/mTLS 1.3, DTLS, and hardware-accelerated cryptography." },
    { id: 6, title: "Protocol Bridging", desc: "Developing custom gateways to seamlessly translate legacy serial protocols to modern IP networks." }
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
        title: "Industrial & Factory",
        description: "Connecting legacy machinery to the modern cloud with robust industrial protocols.",
        points: ["OPC UA / Modbus", "EtherCAT / PROFINET", "Time-Sensitive Networking"],
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
        color: "from-blue-500/20 to-purple-500/20"
    },
    {
        id: "02",
        title: "Automotive Networking",
        description: "Implementing deterministic, high-reliability in-vehicle communication backbones.",
        points: ["CAN / CAN-FD", "LIN / FlexRay", "SOME/IP / DoIP"],
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=80",
        color: "from-emerald-500/20 to-teal-500/20"
    },
    {
        id: "03",
        title: "Wireless IoT Edge",
        description: "Deploying low-power, mesh-capable wireless standards for smart buildings and cities.",
        points: ["BLE Mesh / Thread", "LoRaWAN / NB-IoT", "Wi-Fi 6 (802.11ax)"],
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=80",
        color: "from-orange-500/20 to-red-500/20"
    },
    {
        id: "04",
        title: "Secure Telemetry",
        description: "Ensuring data integrity and privacy from the edge sensor all the way to the cloud broker.",
        points: ["TLS/DTLS 1.3", "X.509 Certificates", "Hardware Cryptography"],
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=80",
        color: "from-pink-500/20 to-rose-500/20"
    }
];

const LATEST_INSIGHTS = [
  {
    id: 1,
    tag: "Automotive",
    title: "Transitioning from CAN FD to Automotive Ethernet for ADAS",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    tag: "Wireless",
    title: "Optimizing LoRaWAN Payloads for 10-Year Battery Life",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    tag: "Security",
    title: "Implementing mTLS with Hardware Secure Elements on Edge Devices",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80"
  }
];

const PROTOCOL_SUB_SERVICES = [
    { title: "Wired Protocol Drivers", description: "Writing highly efficient, interrupt-driven software to manage complex SPI, I2C, and UART bus transactions without CPU blocking.", icon: <Share2 className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80" },
    { title: "Wireless Stack Porting", description: "Integrating Nordic, Silicon Labs, or Espressif BLE/Wi-Fi protocol stacks into your custom RTOS or bare-metal environment.", icon: <Wifi className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=80" },
    { title: "IoT Cloud Telemetry", description: "Implementing lightweight MQTT and CoAP clients to stream sensor data securely to AWS IoT, Azure, or custom brokers.", icon: <Globe className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=80" },
    { title: "Automotive CAN/LIN", description: "Developing robust in-vehicle communication layers compliant with UDS (Unified Diagnostic Services) and OBD-II standards.", icon: <Activity className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=80" },
    { title: "Industrial Gateways", description: "Building protocol translation software that bridges legacy Modbus RTU machines with modern OPC UA or Ethernet/IP networks.", icon: <Database className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80" },
    { title: "Encrypted Transport", description: "Integrating mbedTLS or wolfSSL to provide military-grade encryption (TLS/DTLS) for all outbound network traffic.", icon: <ShieldCheck className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=80" }
];

const PROTOCOL_ADVANTAGES = [
    { title: "Deep OSI Model Expertise", description: "From Layer 1 physical voltage levels to Layer 7 application payloads, we deeply understand the entire communication stack.", icon: <Layers className="w-6 h-6" /> },
    { title: "Bandwidth Optimization", description: "We meticulously pack data payloads, utilizing technologies like Protocol Buffers (protobuf) or CBOR to save expensive cellular bandwidth.", icon: <Network className="w-6 h-6" /> },
    { title: "Hardware Debugging", description: "When a protocol fails, we don't just guess. We hook up logic analyzers and Wireshark to inspect the physical bits on the wire.", icon: <Activity className="w-6 h-6" /> },
    { title: "Interoperability Guaranteed", description: "We rigorously test our implementations against industry-standard compliance tools and third-party devices to ensure seamless interoperability.", icon: <ShieldCheck className="w-6 h-6" /> }
];

const PROTOCOL_FAQ = [
    {
        question: "Can you help us migrate from Wi-Fi to Cellular IoT (NB-IoT/LTE-M)?",
        answer: "Yes. We can rewrite your network abstraction layers to handle the unique latency, connection persistence, and power constraints introduced by cellular modems, usually migrating to lightweight protocols like CoAP or MQTT-SN."
    },
    {
        question: "How do you handle dropped connections in remote areas?",
        answer: "We implement robust store-and-forward architectures. If the network drops, data is compressed and cached to local non-volatile memory (NAND/NOR flash) and safely transmitted once the connection is restored."
    },
    {
        question: "Do you have experience with Bluetooth Mesh or Zigbee?",
        answer: "Absolutely. We have deployed large-scale lighting and building automation networks using BLE Mesh and Zigbee, handling complex provisioning and node-to-node routing scenarios."
    },
    {
        question: "What is your approach to securing MQTT traffic?",
        answer: "We use Mutual TLS (mTLS) where both the device and the broker verify each other using X.509 certificates. We prefer to store the device's private key inside a hardware Secure Element (SE) so it cannot be extracted."
    }
];

const PROTOCOL_ABOUT_METRICS = {
    titlePart1: "About",
    titlePart2: "Protocol Integration",
    description: "U&WE connects isolated hardware to the world. Whether it's a sensor communicating over I2C on a PCB, or a vehicle streaming telemetry to the cloud, we implement the protocols that make communication fast, reliable, and secure.",
    metrics: [
        { tag: "PROTOCOLS", value: "50+", label: "Industry Standards Integrated", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" },
        { tag: "SECURITY", value: "100%", label: "mTLS Encrypted Connections", image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800&auto=format&fit=crop" },
        { tag: "LATENCY", value: "<1ms", label: "Industrial Ethernet Response", image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800&auto=format&fit=crop" },
        { tag: "IOT EDGE", value: "Millions", label: "Messages Brokered Daily", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" }
    ]
};

const ProtocolIntegration = () => {
    return (
        <ServiceLayout 
            pageKey="protocolIntegration"
            hero={{
                title: "Protocol Integration",
                description: "Engineering robust, secure communication stacks from low-level silicon buses to high-level cloud telemetry.",
                primaryButtonText: "Discuss Project",
                secondaryButtonText: "View Capabilities",
                image: heroImage
            }}
            aboutMetrics={PROTOCOL_ABOUT_METRICS}
            subServices={PROTOCOL_SUB_SERVICES}
            subServicesTitle={{ part1: "Core", part2: "Capabilities" }}
            advantages={PROTOCOL_ADVANTAGES}
            advantagesTitle={{ part1: "Why Partner", part2: "With Us" }}
            faqs={PROTOCOL_FAQ}
            portal={{
                portalImage: heroImage,
                gridImage: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2564&auto=format&fit=crop",
                collageImages: COLLAGE_IMAGES,
                features: SEQUENCE_FEATURES,
                aboutText: (
                    <p className="text-[clamp(1.1rem,2vw,2.2rem)] font-medium leading-[1.6] tracking-tight text-left text-white">
                        From bit-banged I2C to encrypted MQTT streams, we make hardware talk.
                        <br className="hidden lg:block mt-2" />
                        Our protocol stacks ensure data arrives securely, efficiently, and on time.
                    </p>
                )
            }}
            slider={{
                title: "Latest in Connectivity",
                subtitle: "Insights from our networking engineers",
                cards: LATEST_INSIGHTS
            }}
            showcase={{
                features: SHOWCASE_FEATURES,
                backgroundText: "NETWORK\nSTACK"
            }}
        />
    );
};

export default ProtocolIntegration;

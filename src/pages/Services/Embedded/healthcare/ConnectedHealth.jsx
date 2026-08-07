import React from 'react';
import ServiceLayout from '../../../../components/ServiceLayout';
import { Wifi, Bluetooth, Radio, ShieldCheck, Activity, Smartphone, Server, Network } from 'lucide-react';
import heroImage from "../../../../assets/imagesss/healthcare/ConnectedHealt&IoMT.png";

const SEQUENCE_FEATURES = [
    { id: 1, title: "Protocol Selection", desc: "Selecting the optimal wireless protocol (BLE, Wi-Fi, LTE-M) based on power, range, and bandwidth needs." },
    { id: 2, title: "Stack Integration", desc: "Integrating the wireless protocol stack (e.g., Zephyr BLE host) with the medical application layer." },
    { id: 3, title: "Security Implementation", desc: "Implementing mutual authentication, ECDH key exchange, and AES-128/256 encryption for data in transit." },
    { id: 4, title: "Mobile Bridging", desc: "Developing iOS/Android SDKs that allow smartphones to act as secure gateways to the cloud." },
    { id: 5, title: "OTA Updates", desc: "Engineering fail-safe Over-The-Air update mechanisms to patch firmware vulnerabilities in the field." },
    { id: 6, title: "FCC / CE Testing", desc: "Executing RF emissions testing to ensure the radio doesn't interfere with other critical hospital equipment." }
];

const COLLAGE_IMAGES = [
    { src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800", scaleIndex: 4, cls: "!-top-[30vh] !left-[5vw] !h-[30vh] !w-[35vw]" },
    { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800", scaleIndex: 5, cls: "!-top-[10vh] !-left-[25vw] !h-[45vh] !w-[20vw]" },
    { src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800", scaleIndex: 6, cls: "!left-[27.5vw] !h-[25vh] !w-[25vw]" },
    { src: "https://images.unsplash.com/photo-1532187863486-abf9db0902c3?q=80&w=800", scaleIndex: 5, cls: "!top-[27.5vh] !left-[5vw] !h-[25vh] !w-[20vw]" },
    { src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800", scaleIndex: 6, cls: "!top-[27.5vh] !-left-[22.5vw] !h-[25vh] !w-[30vw]" },
    { src: "https://images.unsplash.com/photo-1551076805-e1869043e560?q=80&w=800", scaleIndex: 8, cls: "!top-[22.5vh] !left-[25vw] !h-[15vh] !w-[15vw]" },
];

const SHOWCASE_FEATURES = [
    {
        id: "01",
        title: "Bluetooth Low Energy (BLE)",
        description: "Optimizing BLE 5.x profiles for ultra-low power transmission of continuous physiological data to a smartphone.",
        points: ["Custom GATT Profiles", "LE Secure Connections", "Connection intervals"],
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=80",
        color: "from-blue-500/20 to-purple-500/20"
    },
    {
        id: "02",
        title: "Medical Wi-Fi",
        description: "Integrating 802.11b/g/n stacks with WPA2/3 Enterprise security for direct integration into hospital IT networks.",
        points: ["EAP-TLS authentication", "Seamless roaming", "High bandwidth"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
        color: "from-emerald-500/20 to-teal-500/20"
    },
    {
        id: "03",
        title: "Cellular IoMT (LTE-M/NB-IoT)",
        description: "Designing devices that connect directly to the cloud without needing a smartphone bridge, ideal for elderly care.",
        points: ["Cat-M1 / NB-IoT", "MQTT / CoAP", "eSIM provisioning"],
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80",
        color: "from-orange-500/20 to-red-500/20"
    },
    {
        id: "04",
        title: "Over-The-Air (OTA) Updates",
        description: "Ensuring medical devices can be securely patched in the field without risking a 'bricked' device.",
        points: ["Dual-bank flash", "Signed payloads", "Rollback protection"],
        image: "https://images.unsplash.com/photo-1532187863486-abf9db0902c3?w=800&auto=format&fit=crop&q=80",
        color: "from-pink-500/20 to-rose-500/20"
    }
];

const LATEST_INSIGHTS = [
  {
    id: 1,
    tag: "Connectivity",
    title: "BLE vs. Wi-Fi vs. LTE-M for Wearable Medical Devices",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    tag: "Security",
    title: "Securing BLE: Why 'Just Works' Pairing is Not Enough for IoMT",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    tag: "Architecture",
    title: "Designing Fail-Safe OTA Update Systems for Class II Devices",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80"
  }
];

const CONNECTED_SUB_SERVICES = [
    { title: "Wireless Stack Integration", description: "Deep experience with Nordic Semi (nRF Connect), Silicon Labs (Gecko), and STMicro (STM32WB) RF stacks.", icon: <Wifi className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=80" },
    { title: "HIPAA Compliant Crypto", description: "Implementing hardware-accelerated AES and Elliptic Curve Cryptography to ensure patient data is never intercepted.", icon: <ShieldCheck className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80" },
    { title: "Mobile Gateway SDKs", description: "Writing the native iOS (CoreBluetooth) and Android (RxBluetooth) libraries that interface perfectly with the hardware.", icon: <Smartphone className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80" },
    { title: "Power Optimization", description: "Tuning the radio sleep cycles to stretch a tiny coin cell battery for 6+ months of continuous connection.", icon: <Activity className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1532187863486-abf9db0902c3?w=800&auto=format&fit=crop&q=80" },
    { title: "Cloud Bridging", description: "Implementing MQTT and CoAP protocols for reliable, low-bandwidth data telemetry to AWS IoT or Azure IoT Hub.", icon: <Server className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&auto=format&fit=crop&q=80" },
    { title: "Coexistence Testing", description: "Ensuring the device's radio operates reliably even in the highly congested 2.4GHz environment of a modern hospital.", icon: <Network className="w-6 h-6 text-white" />, image: "https://images.unsplash.com/photo-1551076805-e1869043e560?w=800&auto=format&fit=crop&q=80" }
];

const CONNECTED_ADVANTAGES = [
    { title: "Full System View", description: "Because we design the hardware, the firmware, and the mobile SDKs, we never point fingers when a connection drops.", icon: <Network className="w-6 h-6" /> },
    { title: "Security First", description: "Medical data is highly sensitive. We implement end-to-end encryption from the sensor silicon all the way to the cloud database.", icon: <ShieldCheck className="w-6 h-6" /> },
    { title: "Antenna Tuning", description: "A bad antenna ruins a good software stack. Our RF engineers ensure the physical antenna radiates efficiently despite being near human tissue.", icon: <Radio className="w-6 h-6" /> },
    { title: "Regulatory Knowledge", description: "We understand how adding a radio impacts your FDA 510(k) submission, specifically regarding the FDA's 'Radio Frequency Wireless Technology' guidance.", icon: <Activity className="w-6 h-6" /> }
];

const CONNECTED_FAQ = [
    {
        question: "Why is connecting a medical device different than connecting a smartwatch?",
        answer: "If a smartwatch drops a Bluetooth connection, a text message is delayed. If a continuous glucose monitor drops a connection, a patient might miss a critical hypoglycemia alert. Medical connectivity requires strict state machines and guaranteed reconnection logic."
    },
    {
        question: "Can we use standard Wi-Fi in a hospital?",
        answer: "Yes, but hospital IT networks use WPA2/WPA3 Enterprise (EAP-TLS), which requires the device to hold a cryptographic certificate to join the network. Consumer devices (like smart plugs) usually don't support this."
    },
    {
        question: "What is an OTA update, and why is it risky?",
        answer: "Over-The-Air updates allow you to change the firmware remotely. It's risky because if the battery dies halfway through writing to flash memory, the device is 'bricked'. We use dual-bank memory architectures to prevent this."
    },
    {
        question: "What is Coexistence testing?",
        answer: "Hospitals have hundreds of Wi-Fi routers, BLE beacons, and microwave ovens all screaming on the 2.4GHz band. FDA requires proof that your device's radio won't be jammed by this noise, nor will it jam other critical devices."
    }
];

const CONNECTED_ABOUT_METRICS = {
    titlePart1: "About",
    titlePart2: "Connected Health (IoMT)",
    description: "U&WE bridges the gap between the patient and the cloud. We engineer the highly secure, ultra-reliable wireless firmware that allows medical devices to transmit critical data seamlessly.",
    metrics: [
        { tag: "PROTOCOLS", value: "BLE / Wi-Fi", label: "Wireless Expertise", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop" },
        { tag: "SECURITY", value: "E2E", label: "End-to-End Crypto", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" },
        { tag: "UPDATES", value: "OTA", label: "Secure Patching", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop" },
        { tag: "COMPLIANCE", value: "HIPAA", label: "Data Privacy", image: "https://images.unsplash.com/photo-1532187863486-abf9db0902c3?q=80&w=800&auto=format&fit=crop" }
    ]
};

const ConnectedHealth = () => {
    return (
        <ServiceLayout 
            pageKey="connectedHealth"
            hero={{
                title: "Connected Health & IoMT",
                description: "Engineering secure BLE, Wi-Fi, and Cellular connectivity for Internet of Medical Things (IoMT) devices, including mobile SDKs and OTA updates.",
                primaryButtonText: "Discuss Project",
                secondaryButtonText: "View Capabilities",
                image: heroImage
            }}
            aboutMetrics={CONNECTED_ABOUT_METRICS}
            subServices={CONNECTED_SUB_SERVICES}
            subServicesTitle={{ part1: "Core", part2: "Capabilities" }}
            advantages={CONNECTED_ADVANTAGES}
            advantagesTitle={{ part1: "Why Partner", part2: "With Us" }}
            faqs={CONNECTED_FAQ}
            portal={{
                portalImage: heroImage,
                gridImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2564&auto=format&fit=crop",
                collageImages: COLLAGE_IMAGES,
                features: SEQUENCE_FEATURES,
                aboutText: (
                    <p className="text-[clamp(1.1rem,2vw,2.2rem)] font-medium leading-[1.6] tracking-tight text-left text-white">
                        Freeing the patient from the wire.
                        <br className="hidden lg:block mt-2" />
                        We build the secure links of modern healthcare.
                    </p>
                )
            }}
            slider={{
                title: "Latest in Connectivity",
                subtitle: "Insights from our RF software engineers",
                cards: LATEST_INSIGHTS
            }}
            showcase={{
                features: SHOWCASE_FEATURES,
                backgroundText: "CONNECTED"
            }}
        />
    );
};

export default ConnectedHealth;

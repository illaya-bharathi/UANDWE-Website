/**
 * communicationData.js
 *
 * Communication Engineering industry data mapped to the exact service categories
 * defined in the main Navbar (Software Services, Hardware, Embedded Design).
 */

const communicationData = {
  description: "Pioneering the future of data transmission with specialized RF hardware, signal processing software, and next-generation optical networks.",
  categories: [
    {
      name: "Software Services",
      links: [
        {
          name: "Application Development",
          path: "/services/application-development",
          description: "End-to-end custom application development delivering scalable, high-performance web and mobile solutions tailored to your unique requirements."
        },
        {
          name: "Cloud Services",
          path: "/services/cloud-services",
          description: "Accelerate your digital transformation with secure, scalable, and high-performance cloud solutions designed for the modern enterprise."
        },
        {
          name: "AI & Data Services",
          path: "/services/ai-data",
          description: "Harnessing the power of artificial intelligence and machine learning to drive predictive analytics and intelligent data processing."
        }
      ]
    },
    {
      name: "Hardware",
      links: [
        {
          name: "RF & Microwave Design",
          path: "/services/hardware/rf-microwave",
          description: "Precision engineering of high-frequency RF front-ends, power amplifiers, and low-noise amplifiers for microwave and millimeter-wave bands."
        },
        {
          name: "Antenna Engineering",
          path: "/services/hardware/antenna",
          description: "Custom phased-array antenna design, massive MIMO array modeling, and beamforming hardware for satellite and terrestrial networks."
        },
        {
          name: "Optical Networking",
          path: "/services/hardware/optical",
          description: "Hardware design for ultra-high-speed DWDM optical transceivers, silicon photonics integration, and low-dispersion fiber routing."
        },
        {
          name: "Baseband ASICs",
          path: "/services/hardware/baseband",
          description: "Silicon-level design of custom baseband processors optimized for complex modulation schemes (QAM, OFDM) and forward error correction (FEC)."
        },
        {
          name: "Signal Integrity Analysis",
          path: "/services/hardware/signal-integrity",
          description: "Advanced simulation and modeling to ensure flawless signal integrity on multi-gigabit backplanes and dense telecom PCB layouts."
        },
        {
          name: "Telecom Validation",
          path: "/services/hardware/telecom-validation",
          description: "Rigorous hardware testing in anechoic chambers against FCC, CE, and ITU standards for electromagnetic compatibility and emission control."
        }
      ]
    },
    {
      name: "Embedded Design",
      links: [
        {
          name: "DSP Firmware",
          path: "/services/embedded/dsp",
          description: "Low-level Digital Signal Processing firmware for real-time echo cancellation, equalization, and noise floor reduction in communication links."
        },
        {
          name: "PHY Layer Development",
          path: "/services/embedded/phy-layer",
          description: "Programming the physical layer for advanced modulation, interleaving, and coding schemes essential for high-throughput data transmission."
        },
        {
          name: "Routing Protocol Integration",
          path: "/services/embedded/routing",
          description: "Integrating deep L2/L3 networking protocols including BGP, OSPF, and MPLS directly into ruggedized communication equipment."
        },
        {
          name: "FPGA Acceleration",
          path: "/services/embedded/fpga",
          description: "Writing highly parallelized VHDL/Verilog code for hardware-accelerated packet inspection, cryptography, and digital pre-distortion (DPD)."
        },
        {
          name: "Real-Time Packet Processing",
          path: "/services/embedded/packet-processing",
          description: "Tuning real-time operating systems (RTOS) and implementing DPDK/VPP for ultra-low latency, deterministic data routing."
        },
        {
          name: "Satellite Comms Firmware",
          path: "/services/embedded/satcom",
          description: "Developing highly reliable, radiation-tolerant firmware for LEO/GEO satellite transponders and ground station modems."
        }
      ]
    }
  ]
};

export default communicationData;

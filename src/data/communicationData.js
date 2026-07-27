/**
 * communicationData.js
 *
 * Communication / Telecom industry data mapped to the exact service categories
 * defined in the main Navbar (Software Services, Hardware, Embedded Design).
 */

const communicationData = {
  description: "Empowering next-generation connectivity with advanced telecom hardware, embedded software, and network services.",
  categories: [
    {
      name: "Software Services",
      links: [
        {
          name: "Application Development",
          path: "/services/application-development",
          description: "Custom OSS/BSS platforms, network management portals, and billing applications tailored for global telecommunication providers."
        },
        {
          name: "Cloud Service",
          path: "/services/cloud",
          description: "Cloud-native network function (CNF) orchestration, edge computing deployments, and scalable telecom core infrastructure."
        },
        {
          name: "AI & Data",
          path: "/services/ai-data",
          description: "Network traffic prediction, automated anomaly detection, and AI-driven predictive maintenance for massive cellular networks."
        }
      ]
    },
    {
      name: "Hardware",
      links: [
        {
          name: "PCB Design",
          path: "/services/hardware/pcb",
          description: "High-speed, multi-layer RF PCB design for 5G base stations, massive MIMO antennas, and optical networking equipment."
        },
        {
          name: "FPGA Design",
          path: "/services/hardware/fpga",
          description: "FPGA IP cores for baseband processing, digital pre-distortion (DPD), and high-throughput ethernet packet switching."
        },
        {
          name: "ASIC Design",
          path: "/services/hardware/asic",
          description: "Custom network processor ASICs optimized for ultra-low latency data routing, deep packet inspection, and cryptography."
        },
        {
          name: "Circuit Design",
          path: "/services/hardware/circuit",
          description: "Complex mixed-signal circuit design encompassing RF front-ends, high-speed DAC/ADC interfaces, and phase-locked loops."
        },
        {
          name: "Hardware Prototyping",
          path: "/services/hardware/prototyping",
          description: "Rapid prototyping and thermal modeling for high-density networking switches and outdoor ruggedized telecom enclosures."
        },
        {
          name: "Hardware Validation",
          path: "/services/hardware/validation",
          description: "Compliance testing against NEBS (Network Equipment Building System), FCC, and CE standards for telecom infrastructure."
        }
      ]
    },
    {
      name: "Embedded Design",
      links: [
        {
          name: "Device Drivers",
          path: "/services/embedded/drivers",
          description: "High-performance network interface controller (NIC) drivers and DPDK integrations for maximum packet throughput."
        },
        {
          name: "Firmware Development",
          path: "/services/embedded/firmware",
          description: "Secure, reliable firmware for optical transceivers, edge routers, and remote radio head (RRH) control units."
        },
        {
          name: "RTOS Development",
          path: "/services/embedded/rtos",
          description: "Real-time operating system tuning for time-sensitive networking (TSN) and deterministic packet processing pipelines."
        },
        {
          name: "Embedded Linux",
          path: "/services/embedded/linux",
          description: "Custom Linux distributions optimized for enterprise routers, Wi-Fi 6/7 access points, and software-defined networking (SDN) gateways."
        },
        {
          name: "BSP Development",
          path: "/services/embedded/bsp",
          description: "Comprehensive Board Support Packages for multi-core networking SoCs, integrating hardware cryptography engines."
        },
        {
          name: "Protocol Integration",
          path: "/services/embedded/protocol",
          description: "Integration of deep network protocols including IPv4/v6, BGP, OSPF, IPSec, MACsec, and ORAN split-architecture standards."
        }
      ]
    }
  ]
};

export default communicationData;

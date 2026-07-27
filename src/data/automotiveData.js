/**
 * automotiveData.js
 *
 * Automotive industry data mapped to the exact service categories
 * defined in the main Navbar (Software Services, Hardware, Embedded Design).
 */

const automotiveData = {
  description: "Accelerating the future of mobility with robust embedded systems, hardware, and automotive software.",
  categories: [
    {
      name: "Software Services",
      links: [
        {
          name: "Application Development",
          path: "/services/application-development",
          description: "Development of comprehensive fleet management portals, connected car companion apps, and V2X mobility applications."
        },
        {
          name: "Cloud Service",
          path: "/services/cloud",
          description: "Scalable automotive cloud infrastructure for over-the-air (OTA) update management, telematics ingestion, and remote diagnostics."
        },
        {
          name: "AI & Data",
          path: "/services/ai-data",
          description: "Advanced machine learning pipelines for predictive vehicle maintenance, autonomous driving models, and driver monitoring systems."
        }
      ]
    },
    {
      name: "Hardware",
      links: [
        {
          name: "PCB Design",
          path: "/services/hardware/pcb",
          description: "Automotive-grade HDI PCB design built for high-vibration, high-temperature environments in EV powertrains and ADAS modules."
        },
        {
          name: "FPGA Design",
          path: "/services/hardware/fpga",
          description: "High-performance FPGA acceleration for LiDAR point-cloud processing, radar signal processing, and real-time vision systems."
        },
        {
          name: "ASIC Design",
          path: "/services/hardware/asic",
          description: "Custom automotive ASICs designed for ISO 26262 compliance, targeting smart sensors, BMS controllers, and motor drivers."
        },
        {
          name: "Circuit Design",
          path: "/services/hardware/circuit",
          description: "Robust power electronics and analog circuit design for battery management systems (BMS) and high-voltage EV inverters."
        },
        {
          name: "Hardware Prototyping",
          path: "/services/hardware/prototyping",
          description: "Rapid A-sample and B-sample prototyping for automotive electronic control units (ECUs) and infotainment head units."
        },
        {
          name: "Hardware Validation",
          path: "/services/hardware/validation",
          description: "Stringent validation against AEC-Q100/Q200 standards, including EMI/EMC testing, thermal cycling, and shock resistance."
        }
      ]
    },
    {
      name: "Embedded Design",
      links: [
        {
          name: "Device Drivers",
          path: "/services/embedded/drivers",
          description: "AUTOSAR MCAL (Microcontroller Abstraction Layer) and complex device driver (CDD) development for automotive MCUs."
        },
        {
          name: "Firmware Development",
          path: "/services/embedded/firmware",
          description: "ISO 26262 ASIL-compliant firmware development for critical powertrain, chassis, and body control modules (BCM)."
        },
        {
          name: "RTOS Development",
          path: "/services/embedded/rtos",
          description: "Integration of safe and secure automotive RTOS (like OSEK/VDX or QNX) for deterministic multi-core ECU execution."
        },
        {
          name: "Embedded Linux",
          path: "/services/embedded/linux",
          description: "Automotive Grade Linux (AGL) optimization for next-generation digital cockpits and in-vehicle infotainment (IVI) systems."
        },
        {
          name: "BSP Development",
          path: "/services/embedded/bsp",
          description: "Board Support Packages for advanced automotive SoCs, enabling hypervisor configurations for mixed-criticality workloads."
        },
        {
          name: "Protocol Integration",
          path: "/services/embedded/protocol",
          description: "Implementation of in-vehicle networking protocols including CAN FD, LIN, FlexRay, SOME/IP, and Automotive Ethernet."
        }
      ]
    }
  ]
};

export default automotiveData;

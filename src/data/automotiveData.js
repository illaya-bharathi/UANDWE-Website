/**
 * automotiveData.js
 *
 * Automotive Engineering industry data mapped to the exact service categories
 * defined in the main Navbar (Software Services, Hardware, Embedded Design).
 */

const automotiveData = {
  description: "Accelerating the future of mobility with functional safety-certified hardware, AUTOSAR compliant software, and advanced EV technology.",
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
          name: "Automotive HDI PCB Design",
          path: "/services/hardware/automotive-pcb",
          description: "Automotive-grade HDI PCB design built for high-vibration, high-temperature environments in EV powertrains and ADAS modules."
        },
        {
          name: "LiDAR & Radar FPGA",
          path: "/services/hardware/fpga-adas",
          description: "High-performance FPGA acceleration for LiDAR point-cloud processing, radar signal filtering, and real-time vision systems."
        },
        {
          name: "ASIL-D Compliant ASICs",
          path: "/services/hardware/asil-asic",
          description: "Custom automotive ASICs designed for ISO 26262 compliance, targeting smart sensors, BMS controllers, and motor drivers."
        },
        {
          name: "EV Power Electronics",
          path: "/services/hardware/ev-power",
          description: "Robust power electronics and analog circuit design for Battery Management Systems (BMS) and high-voltage EV traction inverters."
        },
        {
          name: "ECU Prototyping",
          path: "/services/hardware/ecu-prototyping",
          description: "Rapid A-sample and B-sample hardware prototyping for advanced Electronic Control Units (ECUs) and zonal domain controllers."
        },
        {
          name: "AEC-Q100 Validation",
          path: "/services/hardware/aec-validation",
          description: "Stringent validation against AEC-Q100/Q200 standards, including EMI/EMC testing, thermal cycling, and harsh shock resistance."
        }
      ]
    },
    {
      name: "Embedded Design",
      links: [
        {
          name: "AUTOSAR MCAL Drivers",
          path: "/services/embedded/autosar-mcal",
          description: "Microcontroller Abstraction Layer (MCAL) and complex device driver (CDD) development for multi-core automotive MCUs."
        },
        {
          name: "ISO 26262 Firmware",
          path: "/services/embedded/iso26262",
          description: "ASIL-compliant firmware development for safety-critical powertrain, chassis control, and body control modules (BCM)."
        },
        {
          name: "Automotive RTOS",
          path: "/services/embedded/automotive-rtos",
          description: "Integration of safe and secure automotive RTOS (like OSEK/VDX or QNX) for deterministic multi-core ECU execution."
        },
        {
          name: "Digital Cockpit Linux",
          path: "/services/embedded/agl",
          description: "Automotive Grade Linux (AGL) and Android Automotive optimization for next-generation In-Vehicle Infotainment (IVI) systems."
        },
        {
          name: "Hypervisor BSPs",
          path: "/services/embedded/hypervisor-bsp",
          description: "Board Support Packages for advanced automotive SoCs, enabling secure hypervisor configurations for mixed-criticality workloads."
        },
        {
          name: "In-Vehicle Networking",
          path: "/services/embedded/in-vehicle-network",
          description: "Implementation of critical in-vehicle networking protocols including CAN FD, LIN, FlexRay, SOME/IP, and Automotive Ethernet."
        }
      ]
    }
  ]
};

export default automotiveData;

/**
 * healthcareData.js
 *
 * Healthcare industry data mapped to the exact service categories
 * defined in the main Navbar (Software Services, Hardware, Embedded Design).
 */

const healthcareData = {
  description: "Transforming the medical landscape with compliant software, hardware, and embedded solutions.",
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
          name: "Medical Wearables PCB",
          path: "/services/hardware/medical-pcb",
          description: "High-precision, ultra-compact rigid-flex PCB designs for wearable biosensors, diagnostic imaging equipment, and surgical robotics."
        },
        {
          name: "Medical Imaging FPGA",
          path: "/services/hardware/imaging-fpga",
          description: "Low-latency FPGA logic implementation for real-time ultrasound processing, MRI image reconstruction, and genomic sequencing accelerators."
        },
        {
          name: "Implantable ASICs",
          path: "/services/hardware/implantable-asic",
          description: "Custom ASIC engineering tailored for ultra-low-power pacemakers, implantable neural stimulators, and advanced hearing aids."
        },
        {
          name: "Analog Front-End (AFE)",
          path: "/services/hardware/afe-circuit",
          description: "Analog front-end circuit design for highly precise physiological signal acquisition like ECG, EEG, and continuous glucose monitoring."
        },
        {
          name: "MedTech Prototyping",
          path: "/services/hardware/medtech-prototyping",
          description: "Rapid development of medical hardware prototypes to validate physical ergonomics, sensor accuracy, and regulatory safety."
        },
        {
          name: "IEC 60601 Validation",
          path: "/services/hardware/iec60601-validation",
          description: "Rigorous electrical and environmental testing to ensure compliance with IEC 60601 safety standards for medical electrical equipment."
        }
      ]
    },
    {
      name: "Embedded Design",
      links: [
        {
          name: "Medical Sensor Drivers",
          path: "/services/embedded/medical-drivers",
          description: "Reliable custom drivers for interfacing with complex medical sensors, motor controllers, and high-resolution imaging cameras."
        },
        {
          name: "IEC 62304 Firmware",
          path: "/services/embedded/iec62304",
          description: "IEC 62304 compliant bare-metal firmware engineered for fail-safe operation in Class II and Class III life-critical medical devices."
        },
        {
          name: "Surgical Robotics RTOS",
          path: "/services/embedded/surgical-rtos",
          description: "Deterministic real-time operating system integration for robotic surgery arms, precision infusion pumps, and critical patient ventilators."
        },
        {
          name: "Clinical Display Linux",
          path: "/services/embedded/clinical-linux",
          description: "Hardened, secure Embedded Linux distributions powering patient monitoring dashboards and advanced diagnostic bedside consoles."
        },
        {
          name: "Med-Grade BSPs",
          path: "/services/embedded/med-bsp",
          description: "Custom Board Support Packages bringing up complex SoCs and medical-grade processors for next-generation clinical instruments."
        },
        {
          name: "Healthcare Protocols",
          path: "/services/embedded/health-protocols",
          description: "Implementation of secure medical interoperability protocols like HL7, FHIR, Bluetooth Medical Device Profile, and encrypted IoT streaming."
        }
      ]
    }
  ]
};

export default healthcareData;

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
          description: "Full-lifecycle development of HIPAA-compliant healthcare portals, patient management systems, and electronic health record (EHR) applications."
        },
        {
          name: "Cloud Service",
          path: "/services/cloud",
          description: "Secure, scalable cloud infrastructure for massive telemedicine deployments, medical imaging storage, and IoMT data ingestion."
        },
        {
          name: "AI & Data",
          path: "/services/ai-data",
          description: "Advanced machine learning models for early disease detection, predictive patient analytics, and DICOM image segmentation."
        }
      ]
    },
    {
      name: "Hardware",
      links: [
        {
          name: "PCB Design",
          path: "/services/hardware/pcb",
          description: "High-precision, ultra-compact rigid-flex PCB designs for wearable biosensors, diagnostic imaging equipment, and surgical robotics."
        },
        {
          name: "FPGA Design",
          path: "/services/hardware/fpga",
          description: "Low-latency FPGA logic implementation for real-time ultrasound processing, MRI image reconstruction, and genomic sequencing accelerators."
        },
        {
          name: "ASIC Design",
          path: "/services/hardware/asic",
          description: "Custom ASIC engineering tailored for ultra-low-power pacemakers, implantable neural stimulators, and advanced hearing aids."
        },
        {
          name: "Circuit Design",
          path: "/services/hardware/circuit",
          description: "Analog front-end (AFE) circuit design for precise physiological signal acquisition like ECG, EEG, and continuous glucose monitoring."
        },
        {
          name: "Hardware Prototyping",
          path: "/services/hardware/prototyping",
          description: "Rapid development of medical hardware prototypes to validate physical ergonomics, sensor accuracy, and regulatory safety."
        },
        {
          name: "Hardware Validation",
          path: "/services/hardware/validation",
          description: "Rigorous electrical and environmental testing to ensure compliance with IEC 60601 safety standards for medical electrical equipment."
        }
      ]
    },
    {
      name: "Embedded Design",
      links: [
        {
          name: "Device Drivers",
          path: "/services/embedded/drivers",
          description: "Reliable custom drivers for interfacing with complex medical sensors, motor controllers, and high-resolution imaging cameras."
        },
        {
          name: "Firmware Development",
          path: "/services/embedded/firmware",
          description: "IEC 62304 compliant bare-metal firmware engineered for fail-safe operation in Class II and Class III life-critical medical devices."
        },
        {
          name: "RTOS Development",
          path: "/services/embedded/rtos",
          description: "Deterministic real-time operating system integration for robotic surgery arms, infusion pumps, and critical patient ventilators."
        },
        {
          name: "Embedded Linux",
          path: "/services/embedded/linux",
          description: "Hardened, secure Embedded Linux distributions powering patient monitoring dashboards and advanced diagnostic bedside consoles."
        },
        {
          name: "BSP Development",
          path: "/services/embedded/bsp",
          description: "Custom Board Support Packages bringing up complex SoCs and medical-grade processors for next-generation clinical instruments."
        },
        {
          name: "Protocol Integration",
          path: "/services/embedded/protocol",
          description: "Implementation of secure medical interoperability protocols like HL7, FHIR, Bluetooth Medical Device Profile, and encrypted IoT streaming."
        }
      ]
    }
  ]
};

export default healthcareData;

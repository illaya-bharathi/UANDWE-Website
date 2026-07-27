/**
 * semiconductorData.js
 *
 * Single source of truth for Semiconductor industry data.
 * Consumed by Header.jsx (mega menu) and WhyChooseUs (Semiconductor page).
 *
 * DO NOT duplicate this data elsewhere.
 * If a service is added or removed here, it automatically updates in both
 * the Header mega menu and the Semiconductor page.
 */

const semiconductorData = {
  description: "Accelerating silicon innovation with VLSI, hardware, and embedded engineering.",
  categories: [
    {
      name: "VLSI Design",
      links: [
        {
          name: "RTL Design",
          path: "/services/vlsi/rtl",
          description: "Verilog & SystemVerilog RTL coding, logic synthesis, and optimization for low-power, high-frequency SoC blocks."
        },
        {
          name: "Physical Design",
          path: "/services/vlsi/pd",
          description: "Netlist-to-GDSII physical implementation including floorplanning, place & route, CTS, and timing closure."
        },
        {
          name: "Verification",
          path: "/services/vlsi/verification",
          description: "UVM-based constrained-random verification, assertion-based verification, and formal methods for coverage closure."
        },
        {
          name: "DFT",
          path: "/services/vlsi/dft",
          description: "Design-for-Testability insertion including scan chains, ATPG, BIST, MBIST, and boundary scan for production testing."
        }
      ]
    },
    {
      name: "Embedded SW",
      links: [
        {
          name: "Device Drivers",
          path: "/services/embedded/drivers",
          description: "Kernel-level device driver development for Linux, QNX, and RTOS platforms with HAL abstraction layers."
        },
        {
          name: "Firmware Development",
          path: "/services/embedded/firmware",
          description: "Bare-metal & RTOS embedded C/C++ firmware for microcontrollers, DSPs, and automotive ECU platforms."
        },
        {
          name: "RTOS Development",
          path: "/services/embedded/rtos",
          description: "Deterministic real-time task scheduling, inter-process communication, and memory management optimization."
        },
        {
          name: "Embedded Linux",
          path: "/services/embedded/linux",
          description: "Custom embedded Linux distributions with Yocto & Buildroot for production-grade IoT and edge devices."
        },
        {
          name: "BSP Development",
          path: "/services/embedded/bsp",
          description: "Board Support Package creation including bootloader integration, HAL, and peripheral driver development."
        },
        {
          name: "Protocol Integration",
          path: "/services/embedded/protocol",
          description: "Industrial and automotive communication stacks — CAN, LIN, PCIe, USB, SPI, I2C, and Automotive Ethernet."
        }
      ]
    },
    {
      name: "Hardware Design",
      links: [
        {
          name: "PCB Design",
          path: "/services/hardware/pcb",
          description: "High-speed multi-layer PCB layout, signal & power integrity analysis, and EMC/EMI compliance testing."
        },
        {
          name: "FPGA Design",
          path: "/services/hardware/fpga",
          description: "Xilinx & Intel FPGA prototyping, IP core integration, high-speed SerDes, and DSP block synthesis."
        },
        {
          name: "ASIC Design",
          path: "/services/hardware/asic",
          description: "Custom ASIC specification-to-tapeout engineering with analog mixed-signal layout and foundry coordination."
        },
        {
          name: "Circuit Design",
          path: "/services/hardware/circuit",
          description: "Schematic capture, power supply architecture, analog front-end, and high-speed interface circuit design."
        },
        {
          name: "Hardware Prototyping",
          path: "/services/hardware/prototyping",
          description: "Rapid prototyping from schematic to assembled boards with DFM/DFA optimization and BOM management."
        },
        {
          name: "Hardware Validation",
          path: "/services/hardware/validation",
          description: "Thermal profiling, environmental stress testing, and automated HIL testing for mission-critical hardware."
        }
      ]
    }
  ]
};

export default semiconductorData;

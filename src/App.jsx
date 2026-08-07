import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PageTransition from "./components/ui/PageTransition";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ui/ScrollToTop";

// HOME PAGE
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

// ABOUT
import Companyoverview from "./pages/aboutus/Companyoverview";
import Leadership from "./pages/aboutus/Leadership";
import Testimonials from "./pages/aboutus/Testimonials";

// CAREERS

import Benefits from "./pages/Careers/Benefits";
import Workenvironment from "./pages/Careers/Workenvironment";

// APPLICATION SERVICES
import ApplicationDevelopment from "./pages/Services/Software/ApplicationDevelopment";
import CloudServices from "./pages/Services/Software/CloudServices";
import AiData from "./pages/Services/Software/AiData";
import ImagingSoftware from "./pages/Services/Software/ImagingSoftware";

// EMBEDDED SERVICES
import BSPDevelopment from "./pages/Services/Embedded/semiconductor/BSPDevelopment";
import DeviceDrivers from "./pages/Services/Embedded/semiconductor/DeviceDrivers";
import EmbeddedLinux from "./pages/Services/Embedded/semiconductor/EmbeddedLinux";
import FirmwareDevelopment from "./pages/Services/Embedded/semiconductor/FirmwareDevelopment";
import ProtocolIntegration from "./pages/Services/Embedded/semiconductor/ProtocolIntegration";
import RTOSDevelopment from "./pages/Services/Embedded/semiconductor/RTOSDevelopment";
import DspFirmware from "./pages/Services/Embedded/communication/DspFirmware";
import PhyLayer from "./pages/Services/Embedded/communication/PhyLayer";
import RoutingProtocol from "./pages/Services/Embedded/communication/RoutingProtocol";
import FpgaAcceleration from "./pages/Services/Embedded/communication/FpgaAcceleration";
import PacketProcessing from "./pages/Services/Embedded/communication/PacketProcessing";
import SatcomFirmware from "./pages/Services/Embedded/communication/SatcomFirmware";
import Autosar from "./pages/Services/Embedded/automotive/Autosar";
import AdasSensorFusion from "./pages/Services/Embedded/automotive/AdasSensorFusion";
import Infotainment from "./pages/Services/Embedded/automotive/Infotainment";
import FunctionalSafety from "./pages/Services/Embedded/automotive/FunctionalSafety";
import BatteryManagement from "./pages/Services/Embedded/automotive/BatteryManagement";
import V2xCommunications from "./pages/Services/Embedded/automotive/V2xCommunications";
import MedicalFirmware from "./pages/Services/Embedded/healthcare/MedicalFirmware";
import WearableAlgorithms from "./pages/Services/Embedded/healthcare/WearableAlgorithms";
import ConnectedHealth from "./pages/Services/Embedded/healthcare/ConnectedHealth";
import PointOfCare from "./pages/Services/Embedded/healthcare/PointOfCare";
// HARDWARE SERVICES
import ASICDesign from "./pages/Services/Hardware/semiconductor/ASICDesign";
import CircuitDesign from "./pages/Services/Hardware/semiconductor/CircuitDesign";
import FPGADesign from "./pages/Services/Hardware/semiconductor/FPGADesign";
import HardwarePrototyping from "./pages/Services/Hardware/semiconductor/HardwarePrototyping";
import HardwareValidation from "./pages/Services/Hardware/semiconductor/HardwareValidation";
import PCBDesign from "./pages/Services/Hardware/semiconductor/PcbDesign";
import RfMicrowave from "./pages/Services/Hardware/commuincation/RfMicrowave";
import Antenna from "./pages/Services/Hardware/commuincation/Antenna";
import Optical from "./pages/Services/Hardware/commuincation/Optical";
import Baseband from "./pages/Services/Hardware/commuincation/Baseband";
import SignalIntegrity from "./pages/Services/Hardware/commuincation/SignalIntegrity";
import TelecomValidation from "./pages/Services/Hardware/commuincation/TelecomValidation";
import AutomotiveEcu from "./pages/Services/Hardware/automotive/AutomotiveEcu";
import PowerElectronics from "./pages/Services/Hardware/automotive/PowerElectronics";
import RadarLidarHardware from "./pages/Services/Hardware/automotive/RadarLidarHardware";
import HardwareSecurity from "./pages/Services/Hardware/automotive/HardwareSecurity";
import AutomotivePcb from "./pages/Services/Hardware/automotive/AutomotivePcb";
import AutomotiveEmc from "./pages/Services/Hardware/automotive/AutomotiveEmc";
import WearableHardware from "./pages/Services/Hardware/healthcare/WearableHardware";
import ImagingHardware from "./pages/Services/Hardware/healthcare/ImagingHardware";
import DiagnosticEquipment from "./pages/Services/Hardware/healthcare/DiagnosticEquipment";
import ImplantableElectronics from "./pages/Services/Hardware/healthcare/ImplantableElectronics";
import MedicalPowerSupplies from "./pages/Services/Hardware/healthcare/MedicalPowerSupplies";
import MedicalEmc from "./pages/Services/Hardware/healthcare/MedicalEmc";

// VLSI SERVICES
import RTLDesign from "./pages/Services/VLSI/RTLDesign";
import PhysicalDesign from "./pages/Services/VLSI/PhysicalDesign";
import Verification from "./pages/Services/VLSI/Verification";
import DFT from "./pages/Services/VLSI/DFT";

// INDUSTRIES / SECTORS
import Semiconductor from "./pages/Industries/Semiconductor";
import CommunicationEngineering from "./pages/Industries/CommunicationEngineering";
import Automotive from "./pages/Industries/Automotive";
import Healthcare from "./pages/Industries/Healthcare";

// RESOURCES
import Blog from "./pages/Insights/Blog";
import BlogDetail from "./pages/Insights/BlogDetail";
import CaseStudies from "./pages/Insights/CaseStudies";
import CaseStudyDetail from "./pages/Insights/CaseStudyDetail";
import Whitepapers from "./pages/Insights/Whitepapers";
import WhitepaperDetail from "./pages/Insights/WhitepaperDetail";
import EmployeeInsights from "./pages/Insights/EmployeeInsights";
import EmployeeInsightDetail from "./pages/Insights/EmployeeInsightDetail";
import NewsDetail from "./pages/Insights/NewsDetail";
import Jobs from "./pages/Careers/Jobs";

// CAREERS

export default function App() {
  const location = useLocation();

  return (
    <div
      style={{
        background: "#0a0a0f",
        color: "#fff",
        minHeight: "100vh",
      }}
    >
      {/* HEADER */}
      <Header />
      <ScrollToTop />

      {/* ROUTES */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* HOME */}
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />

          {/* ABOUT */}
          <Route path="/aboutus/companyoverview" element={<PageTransition><Companyoverview /></PageTransition>} />
          <Route path="/aboutus/leadership" element={<PageTransition><Leadership /></PageTransition>} />
          <Route path="/aboutus/testimonials" element={<PageTransition><Testimonials /></PageTransition>} />
          {/* <Route path="/aboutus/innovation" element={<PageTransition><InnovationPage /></PageTransition>} />
          <Route path="/aboutus/partnerships" element={<PageTransition><Partnerships /></PageTransition>} /> */}



          {/* APPLICATION */}
          <Route path="/services/application-development" element={<PageTransition><ApplicationDevelopment /></PageTransition>} />
          <Route path="/services/cloud-services" element={<PageTransition><CloudServices /></PageTransition>} />
         
          {/* AI & DATA */}
          <Route path="/services/ai-data" element={<PageTransition><AiData /></PageTransition>} />
          <Route path="/services/imaging-software" element={<PageTransition><ImagingSoftware /></PageTransition>} />
          {/* VLSI */}
          <Route path="/services/vlsi/rtl" element={<PageTransition><RTLDesign /></PageTransition>} />
          <Route path="/services/vlsi/pd" element={<PageTransition><PhysicalDesign /></PageTransition>} />
          <Route path="/services/vlsi/verification" element={<PageTransition><Verification /></PageTransition>} />
          <Route path="/services/vlsi/dft" element={<PageTransition><DFT /></PageTransition>} />

          {/* HARDWARE */}
          <Route path="/services/hardware/pcb" element={<PageTransition><PCBDesign /></PageTransition>} />
          <Route path="/services/hardware/fpga" element={<PageTransition><FPGADesign /></PageTransition>} />
          <Route path="/services/hardware/asic" element={<PageTransition><ASICDesign /></PageTransition>} />
          <Route path="/services/hardware/circuit" element={<PageTransition><CircuitDesign /></PageTransition>} />
          <Route path="/services/hardware/prototyping" element={<PageTransition><HardwarePrototyping /></PageTransition>} />
          <Route path="/services/hardware/validation" element={<PageTransition><HardwareValidation /></PageTransition>} />
          <Route path="/services/hardware/rf-microwave" element={<PageTransition><RfMicrowave /></PageTransition>} />
          <Route path="/services/hardware/antenna" element={<PageTransition><Antenna /></PageTransition>} />
          <Route path="/services/hardware/optical" element={<PageTransition><Optical /></PageTransition>} />
          <Route path="/services/hardware/baseband" element={<PageTransition><Baseband /></PageTransition>} />
          <Route path="/services/hardware/signal-integrity" element={<PageTransition><SignalIntegrity /></PageTransition>} />
          <Route path="/services/hardware/telecom-validation" element={<PageTransition><TelecomValidation /></PageTransition>} />
          <Route path="/services/hardware/ecu" element={<PageTransition><AutomotiveEcu /></PageTransition>} />
          <Route path="/services/hardware/power-electronics" element={<PageTransition><PowerElectronics /></PageTransition>} />
          <Route path="/services/hardware/radar-lidar" element={<PageTransition><RadarLidarHardware /></PageTransition>} />
          <Route path="/services/hardware/automotive-security" element={<PageTransition><HardwareSecurity /></PageTransition>} />
          <Route path="/services/hardware/automotive-pcb" element={<PageTransition><AutomotivePcb /></PageTransition>} />
          <Route path="/services/hardware/automotive-emc" element={<PageTransition><AutomotiveEmc /></PageTransition>} />
          
          <Route path="/services/embedded/medical-firmware" element={<PageTransition><MedicalFirmware /></PageTransition>} />
          <Route path="/services/embedded/wearable-algorithms" element={<PageTransition><WearableAlgorithms /></PageTransition>} />
          <Route path="/services/embedded/connected-health" element={<PageTransition><ConnectedHealth /></PageTransition>} />
          <Route path="/services/embedded/point-of-care" element={<PageTransition><PointOfCare /></PageTransition>} />

          <Route path="/services/hardware/wearable-hardware" element={<PageTransition><WearableHardware /></PageTransition>} />
          <Route path="/services/hardware/imaging-hardware" element={<PageTransition><ImagingHardware /></PageTransition>} />
          <Route path="/services/hardware/diagnostic-equipment" element={<PageTransition><DiagnosticEquipment /></PageTransition>} />
          <Route path="/services/hardware/implantable-electronics" element={<PageTransition><ImplantableElectronics /></PageTransition>} />
          <Route path="/services/hardware/medical-power-supplies" element={<PageTransition><MedicalPowerSupplies /></PageTransition>} />
          <Route path="/services/hardware/medical-emc" element={<PageTransition><MedicalEmc /></PageTransition>} />
        
          {/* EMBEDDED */}
          <Route path="/services/embedded/drivers" element={<PageTransition><DeviceDrivers /></PageTransition>} />
          <Route path="/services/embedded/firmware" element={<PageTransition><FirmwareDevelopment /></PageTransition>} />
          <Route path="/services/embedded/rtos" element={<PageTransition><RTOSDevelopment /></PageTransition>} />
          <Route path="/services/embedded/linux" element={<PageTransition><EmbeddedLinux /></PageTransition>} />
          <Route path="/services/embedded/bsp" element={<PageTransition><BSPDevelopment /></PageTransition>} />
          <Route path="/services/embedded/protocol" element={<PageTransition><ProtocolIntegration /></PageTransition>} />
          <Route path="/services/embedded/dsp" element={<PageTransition><DspFirmware /></PageTransition>} />
          <Route path="/services/embedded/phy-layer" element={<PageTransition><PhyLayer /></PageTransition>} />
          <Route path="/services/embedded/routing" element={<PageTransition><RoutingProtocol /></PageTransition>} />
          <Route path="/services/embedded/fpga" element={<PageTransition><FpgaAcceleration /></PageTransition>} />
          <Route path="/services/embedded/packet-processing" element={<PageTransition><PacketProcessing /></PageTransition>} />
          <Route path="/services/embedded/satcom" element={<PageTransition><SatcomFirmware /></PageTransition>} />
          <Route path="/services/embedded/autosar" element={<PageTransition><Autosar /></PageTransition>} />
          <Route path="/services/embedded/adas" element={<PageTransition><AdasSensorFusion /></PageTransition>} />
          <Route path="/services/embedded/infotainment" element={<PageTransition><Infotainment /></PageTransition>} />
          <Route path="/services/embedded/functional-safety" element={<PageTransition><FunctionalSafety /></PageTransition>} />
          <Route path="/services/embedded/bms" element={<PageTransition><BatteryManagement /></PageTransition>} />
          <Route path="/services/embedded/v2x" element={<PageTransition><V2xCommunications /></PageTransition>} />
         
          {/* INDUSTRIES */}
          <Route path="/industries/semiconductor" element={<PageTransition><Semiconductor /></PageTransition>} />
          <Route path="/industries/communication-engineering" element={<PageTransition><CommunicationEngineering /></PageTransition>} />
          <Route path="/industries/telecom" element={<PageTransition><CommunicationEngineering /></PageTransition>} />
          <Route path="/industries/automotive" element={<PageTransition><Automotive /></PageTransition>} />
          <Route path="/industries/healthcare" element={<PageTransition><Healthcare /></PageTransition>} />
          <Route path="/industries/medical" element={<PageTransition><Healthcare /></PageTransition>} />

          {/* RESOURCES */}
          <Route path="/resources/blogs" element={<PageTransition><Blog /></PageTransition>} />
          <Route path="/resources/blogs/:id" element={<PageTransition><BlogDetail /></PageTransition>} />
          
          <Route path="/resources/casestudies" element={<PageTransition><CaseStudies /></PageTransition>} />
          <Route path="/resources/casestudies/:id" element={<PageTransition><CaseStudyDetail /></PageTransition>} />
          
          <Route path="/resources/whitepapers" element={<PageTransition><Whitepapers /></PageTransition>} />
          <Route path="/insights/whitepapers/:id" element={<PageTransition><WhitepaperDetail /></PageTransition>} />
          
          <Route path="/resources/employee-insights" element={<PageTransition><EmployeeInsights /></PageTransition>} />
          <Route path="/resources/employee-insights/:id" element={<PageTransition><EmployeeInsightDetail /></PageTransition>} />
          
          <Route path="/insights/news/:id" element={<PageTransition><NewsDetail /></PageTransition>} />

          {/* CAREERS */}
          <Route path="/careers/jobs" element={<PageTransition><Jobs /></PageTransition>} />
          <Route path="/careers/benefits" element={<PageTransition><Benefits /></PageTransition>} />
          <Route path="/careers/work-environment" element={<PageTransition><Workenvironment /></PageTransition>} />
          {/* <Route path="/careers/career-areas" element={<PageTransition><Jobs /></PageTransition>} />
          <Route path="/careers/search-jobs" element={<PageTransition><Jobs /></PageTransition>} /> */}

          {/* 404 NOT FOUND */}
          <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
        </Routes>
      </AnimatePresence>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

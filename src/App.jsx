import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PageTransition from "./components/ui/PageTransition";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ui/ScrollToTop";

// HOME PAGE
import Home from "./pages/Home";

// ABOUT
import Companyoverview from "./pages/aboutus/Companyoverview";
import Leadership from "./pages/aboutus/Leadership";
import Testimonials from "./pages/aboutus/Testimonials";

// CAREERS
import Jobs from "./pages/Careers/Jobs";
import Benefits from "./pages/Careers/Benefits";
import Workenvironment from "./pages/Careers/Workenvironment";

// APPLICATION SERVICES
import ApplicationDevelopment from "./pages/Services/Software/ApplicationDevelopment";
import AiData from "./pages/Services/Software/AiData";

// EMBEDDED SERVICES
import BSPDevelopment from "./pages/Services/Embedded/BSPDevelopment";
import DeviceDrivers from "./pages/Services/Embedded/DeviceDrivers";
import EmbeddedLinux from "./pages/Services/Embedded/EmbeddedLinux";
import FirmwareDevelopment from "./pages/Services/Embedded/FirmwareDevelopment";
import ProtocolIntegration from "./pages/Services/Embedded/ProtocolIntegration";
import RTOSDevelopment from "./pages/Services/Embedded/RTOSDevelopment";

// HARDWARE SERVICES
import ASICDesign from "./pages/Services/Hardware/ASICDesign";
import CircuitDesign from "./pages/Services/Hardware/CircuitDesign";
import FPGADesign from "./pages/Services/Hardware/FPGADesign";
import HardwarePrototyping from "./pages/Services/Hardware/HardwarePrototyping";
import HardwareValidation from "./pages/Services/Hardware/HardwareValidation";
import PCBDesign from "./pages/Services/Hardware/PcbDesign";

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
import CaseStudies from "./pages/Insights/CaseStudies";
import Whitepapers from "./pages/Insights/Whitepapers";
import EmployeeInsights from "./pages/Insights/EmployeeInsights";

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
         
          {/* AI & DATA */}
          <Route path="/services/ai-data" element={<PageTransition><AiData /></PageTransition>} />
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
        
          {/* EMBEDDED */}
          <Route path="/services/embedded/drivers" element={<PageTransition><DeviceDrivers /></PageTransition>} />
          <Route path="/services/embedded/firmware" element={<PageTransition><FirmwareDevelopment /></PageTransition>} />
          <Route path="/services/embedded/rtos" element={<PageTransition><RTOSDevelopment /></PageTransition>} />
          <Route path="/services/embedded/linux" element={<PageTransition><EmbeddedLinux /></PageTransition>} />
          <Route path="/services/embedded/bsp" element={<PageTransition><BSPDevelopment /></PageTransition>} />
          <Route path="/services/embedded/protocol" element={<PageTransition><ProtocolIntegration /></PageTransition>} />
         
          {/* INDUSTRIES */}
          <Route path="/industries/semiconductor" element={<PageTransition><Semiconductor /></PageTransition>} />
          <Route path="/industries/communication-engineering" element={<PageTransition><CommunicationEngineering /></PageTransition>} />
          <Route path="/industries/telecom" element={<PageTransition><CommunicationEngineering /></PageTransition>} />
          <Route path="/industries/automotive" element={<PageTransition><Automotive /></PageTransition>} />
          <Route path="/industries/healthcare" element={<PageTransition><Healthcare /></PageTransition>} />
          <Route path="/industries/medical" element={<PageTransition><Healthcare /></PageTransition>} />

          {/* RESOURCES */}
          <Route path="/resources/blogs" element={<PageTransition><Blog /></PageTransition>} />
          <Route path="/resources/casestudies" element={<PageTransition><CaseStudies /></PageTransition>} />
          <Route path="/resources/whitepapers" element={<PageTransition><Whitepapers /></PageTransition>} />
          <Route path="/resources/employee-insights" element={<PageTransition><EmployeeInsights /></PageTransition>} />

          {/* CAREERS */}
          <Route path="/careers/jobs" element={<PageTransition><Jobs /></PageTransition>} />
          <Route path="/careers/benefits" element={<PageTransition><Benefits /></PageTransition>} />
          <Route path="/careers/work-environment" element={<PageTransition><Workenvironment /></PageTransition>} />
          {/* <Route path="/careers/career-areas" element={<PageTransition><Jobs /></PageTransition>} />
          <Route path="/careers/search-jobs" element={<PageTransition><Jobs /></PageTransition>} /> */}
        </Routes>
      </AnimatePresence>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Menu, X, ChevronDown, ChevronRight, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo.png";
import semiconductorData from "../data/semiconductorData";

export default function Header() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeIndustry, setActiveIndustry] = useState("Semiconductor");

  const industriesData = {
    "Semiconductor": semiconductorData,
    "Communication Engineering": {
      description: "Building scalable communication systems through modern application, hardware, and embedded solutions.",
      categories: [
        {
          name: "Software Services",
          links: [
            { name: "Application Development", path: "/services/application-development" },
            { name: "AI & Data", path: "/services/ai-data" }
          ]
        },
        {
          name: "Embedded SW",
          links: [
            { name: "Device Drivers", path: "/services/embedded/drivers" },
            { name: "Firmware Development", path: "/services/embedded/firmware" },
            { name: "RTOS Development", path: "/services/embedded/rtos" },
            { name: "Embedded Linux", path: "/services/embedded/linux" },
            { name: "BSP Development", path: "/services/embedded/bsp" },
            { name: "Protocol Integration", path: "/services/embedded/protocol" }
          ]
        },
        {
          name: "Hardware Design",
          links: [
            { name: "PCB Design", path: "/services/hardware/pcb" },
            { name: "FPGA Design", path: "/services/hardware/fpga" },
            { name: "ASIC Design", path: "/services/hardware/asic" },
            { name: "Circuit Design", path: "/services/hardware/circuit" },
            { name: "Hardware Prototyping", path: "/services/hardware/prototyping" },
            { name: "Hardware Validation", path: "/services/hardware/validation" }
          ]
        }
      ]
    },
    "Automotive": {
      description: "Delivering next-generation automotive software, hardware, and embedded platforms.",
      categories: [
        {
          name: "Software Services",
          links: [
            { name: "Application Development", path: "/services/application-development" },
            { name: "AI & Data", path: "/services/ai-data" }
          ]
        },
        {
          name: "Embedded SW",
          links: [
            { name: "Device Drivers", path: "/services/embedded/drivers" },
            { name: "Firmware Development", path: "/services/embedded/firmware" },
            { name: "RTOS Development", path: "/services/embedded/rtos" },
            { name: "Embedded Linux", path: "/services/embedded/linux" },
            { name: "BSP Development", path: "/services/embedded/bsp" },
            { name: "Protocol Integration", path: "/services/embedded/protocol" }
          ]
        },
        {
          name: "Hardware Design",
          links: [
            { name: "PCB Design", path: "/services/hardware/pcb" },
            { name: "FPGA Design", path: "/services/hardware/fpga" },
            { name: "ASIC Design", path: "/services/hardware/asic" },
            { name: "Circuit Design", path: "/services/hardware/circuit" },
            { name: "Hardware Prototyping", path: "/services/hardware/prototyping" },
            { name: "Hardware Validation", path: "/services/hardware/validation" }
          ]
        }
      ]
    },
    "Healthcare": {
      description: "Engineering intelligent medical solutions with application, hardware, and embedded technologies.",
      categories: [
        {
          name: "Software Services",
          links: [
            { name: "Application Development", path: "/services/application-development" },
            { name: "AI & Data", path: "/services/ai-data" }
          ]
        },
        {
          name: "Embedded SW",
          links: [
            { name: "Device Drivers", path: "/services/embedded/drivers" },
            { name: "Firmware Development", path: "/services/embedded/firmware" },
            { name: "RTOS Development", path: "/services/embedded/rtos" },
            { name: "Embedded Linux", path: "/services/embedded/linux" },
            { name: "BSP Development", path: "/services/embedded/bsp" },
            { name: "Protocol Integration", path: "/services/embedded/protocol" }
          ]
        },
        {
          name: "Hardware Design",
          links: [
            { name: "PCB Design", path: "/services/hardware/pcb" },
            { name: "FPGA Design", path: "/services/hardware/fpga" },
            { name: "ASIC Design", path: "/services/hardware/asic" },
            { name: "Circuit Design", path: "/services/hardware/circuit" },
            { name: "Hardware Prototyping", path: "/services/hardware/prototyping" },
            { name: "Hardware Validation", path: "/services/hardware/validation" }
          ]
        }
      ]
    }
  };
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("India");
  const searchRef = useRef(null);

  const handleLinkClick = (e, path, name, actionFn) => {
    if (actionFn) actionFn();
  };
  const mobileMenuRef = useRef(null);
  const langRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchOpen(false);
      }
      if (langRef.current && !langRef.current.contains(event.target)) {
        setLanguageOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const menuData = {
    whatWeDo: {
      title: t("header.what_we_do"),
      sections: [
        {
          heading: t("services.categories.application.title") || "Software Services",
          links: [
            { name: t("services.categories.application.services.s1.name") || "Application Development", path: "/services/application-development" },
            { name: t("services.categories.application.services.s2.name") || "Cloud Service", path: "/services/cloud" },
            { name: t("services.categories.application.services.s3.name") || "AI & Data", path: "/services/ai-data" }
          ]
        },
        {
          heading: t("header_menu.Hardware"),
          links: [
            { name: t("header_menu.PCB Design"), path: "/services/hardware/pcb" },
            { name: t("header_menu.FPGA Design"), path: "/services/hardware/fpga" },
            { name: t("header_menu.ASIC Design"), path: "/services/hardware/asic" },
            { name: t("header_menu.Circuit Design"), path: "/services/hardware/circuit" },
            { name: t("header_menu.Hardware Prototyping"), path: "/services/hardware/prototyping" },
            { name: t("header_menu.Hardware Validation"), path: "/services/hardware/validation" }
          ]
        },
        {
          heading: t("header_menu.Embedded Design"),
          links: [
            { name: t("header_menu.Device Drivers"), path: "/services/embedded/drivers" },
            { name: t("header_menu.Firmware Development"), path: "/services/embedded/firmware" },
            { name: t("header_menu.RTOS Development"), path: "/services/embedded/rtos" },
            { name: t("header_menu.Embedded Linux"), path: "/services/embedded/linux" },
            { name: t("header_menu.BSP Development"), path: "/services/embedded/bsp" },
            { name: t("header_menu.Protocol Integration"), path: "/services/embedded/protocol" }
          ]
        },
        {
          heading: t("header_menu.Industries"),
          links: [
            { name: t("header_menu.Automotive"), path: "/industries/automotive" },
            { name: t("header_menu.Medical"), path: "/industries/medical" },
            { name: t("header_menu.Semiconductor"), path: "/industries/semiconductor" },
            { name: t("header_menu.Telecom"), path: "/industries/telecom" }
          ]
        }
      ]
    },
    whatWeThink: {
      title: t("header.what_we_think"),
      sections: [
        {
          heading: t("header_menu.Resources"),
          links: [
            { name: t("header_menu.Blogs"), path: "/resources/blogs" },
            { name: t("header_menu.Case Studies"), path: "/resources/casestudies" },
            { name: t("header_menu.Whitepapers"), path: "/resources/whitepapers" },
            { name: t("header_menu.Engineering Insights"), path: "/resources/employee-insights" }
          ]
        }
      ]
    },
    whoWeAre: {
      title: t("header.who_we_are"),
      sections: [
        {
          heading: t("header_menu.About Us"),
          links: [
            { name: t("header_menu.Company Overview"), path: "/aboutus/companyoverview" },
            { name: t("header_menu.Leadership"), path: "/aboutus/leadership" },
            { name: t("header_menu.Testimonials"), path: "/aboutus/testimonials" }
          ]
        },
        {
          heading: t("header_menu.Partnerships"),
          links: [
            { name: "RENESAS", path: "/partners/renesas" },
            { name: "NVIDIA", path: "/partners/nvidia" },
            { name: "SEMI.ORG", path: "/partners/semi-org" }
          ]
        }
      ]
    },
    careers: {
      title: t("header.careers"),
      sections: [
        {
          heading: t("header_menu.Careers"),
          links: [
            { name: t("header_menu.Jobs"), path: "/careers/jobs" }
          ]
        },
        {
          heading: t("header_menu.Life at UANDWE"),
          links: [
            { name: t("header_menu.Benefits"), path: "/careers/benefits" },
            { name: t("header_menu.Work environment"), path: "/careers/work-environment" }
          ]
        }
      ]
    }
  };

  const menuItems = [
    { name: t("header.what_we_do"), key: "whatWeDo" },
    { name: t("header.what_we_think"), key: "whatWeThink" },
    { name: t("header.who_we_are"), key: "whoWeAre" },
    { name: t("header.careers"), key: "careers" }
  ];

  // Flatten menu for search
  const allItems = Object.values(menuData).flatMap(section =>
    section.sections.flatMap(sub => sub.links)
  );

  const filteredItems = allItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);
  const toggleMobileDropdown = (key) => {
    setMobileDropdownOpen(mobileDropdownOpen === key ? null : key);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`absolute top-0 left-0 right-0 z-50 flex items-center px-[4%] h-[80px] transition-colors duration-300 ${scrolled || activeDropdown ? 'bg-[#000000] border-b border-white/10' : 'bg-transparent'}`}
      >
        {/* LEFT: LOGO */}
        <div className="flex-1 flex items-center z-50">
          <Link to="/" className="flex items-center gap-2 group">
            <img src={logo} alt="logo" className="w-15 h-15 transition-transform duration-300 group-hover:scale-110" />
            <div className="overflow-hidden w-0 opacity-0 group-hover:w-[100px] group-hover:opacity-100 transition-all duration-500 ease-in-out">
              <span className="text-white text-lg lg:text-xl font-bold tracking-tight block">UANDWE</span>
            </div>
          </Link>
        </div>

        {/* CENTER: DESKTOP MENU */}
        <div className="hidden lg:flex flex-none justify-center h-full">
          <ul className="flex h-full gap-4 lg:gap-6 xl:gap-8">
            {menuItems.map((item) => (
              <li
                key={item.key}
                onMouseEnter={() => setActiveDropdown(item.key)}
                onMouseLeave={() => setActiveDropdown(null)}
                className="h-full flex items-center px-2 lg:px-3 xl:px-4 cursor-pointer relative group"
              >
                <div className={`flex items-center gap-1.5 text-base lg:text-lg xl:text-[22px] font-bold transition-colors ${activeDropdown === item.key ? 'text-white' : 'text-white/80 group-hover:text-white'}`}>
                  {item.name}
                  <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === item.key ? 'rotate-180' : ''}`} />
                </div>

                {/* Active Indicator Line */}
                <div className={`absolute bottom-0 left-0 w-full h-[4px] bg-[#ff6b1a] transition-transform origin-left duration-300 ${activeDropdown === item.key ? 'scale-x-100' : 'scale-x-0'}`} />
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT: SEARCH & LANG */}
        <div className="hidden lg:flex flex-1 items-center justify-end gap-4 xl:gap-6 h-full">
          {/* SEARCH ICON */}
          <Search
            className="text-white/80 hover:text-white cursor-pointer transition-colors"
            onClick={() => setSearchOpen(true)}
            size={28}
          />

          {/* LANGUAGE SELECTOR */}
          <div ref={langRef} className="relative flex items-center gap-2 cursor-pointer group" onClick={() => setLanguageOpen(!languageOpen)}>
            <Globe size={28} className="text-white/80 group-hover:text-white transition-colors" />
            <span className="text-white/80 group-hover:text-white text-base lg:text-lg xl:text-[20px] font-semibold transition-colors">
              {selectedRegion}
            </span>
            <ChevronDown size={18} className={`text-white/80 group-hover:text-white transition-transform ${languageOpen ? 'rotate-180' : ''}`} />

            <AnimatePresence>
              {languageOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 top-full mt-6 w-[160px] bg-[#1a1a1a] rounded-lg shadow-2xl border border-white/10 py-2"
                >
                  {selectedRegion !== 'China' && (
                    <div
                      onClick={(e) => { e.stopPropagation(); i18n.changeLanguage('zh'); setSelectedRegion('China'); setLanguageOpen(false); }}
                      className="px-4 py-2 text-white/70 hover:text-white hover:bg-white/5 transition-colors font-medium"
                    >
                      {t("header.languages.china", "China")}
                    </div>
                  )}
                  {selectedRegion !== 'India' && (
                    <div
                      onClick={(e) => { e.stopPropagation(); i18n.changeLanguage('en'); setSelectedRegion('India'); setLanguageOpen(false); }}
                      className="px-4 py-2 text-white/70 hover:text-white hover:bg-white/5 transition-colors font-medium"
                    >
                      {t("header.languages.india", "India")}
                    </div>
                  )}
                  {selectedRegion !== 'Canada' && (
                    <div
                      onClick={(e) => { e.stopPropagation(); i18n.changeLanguage('en'); setSelectedRegion('Canada'); setLanguageOpen(false); }}
                      className="px-4 py-2 text-white/70 hover:text-white hover:bg-white/5 transition-colors font-medium"
                    >
                      {t("header.languages.canada", "Canada")}
                    </div>
                  )}
                  {selectedRegion !== 'USA' && (
                    <div
                      onClick={(e) => { e.stopPropagation(); i18n.changeLanguage('en'); setSelectedRegion('USA'); setLanguageOpen(false); }}
                      className="px-4 py-2 text-white/70 hover:text-white hover:bg-white/5 transition-colors font-medium"
                    >
                      {t("header.languages.usa", "USA")}
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* MOBILE CONTROLS */}
        <div className="flex items-center gap-4 lg:hidden z-50 ml-auto">
          <Search
            className="text-white cursor-pointer"
            onClick={() => setSearchOpen(true)}
            size={22}
          />

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* MEGA MENU BACKGROUND PANEL (DESKTOP) */}
        <AnimatePresence>
          {activeDropdown && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute top-[80px] left-0 w-full bg-[#121212] overflow-hidden shadow-2xl hidden lg:block border-b border-white/10"
              onMouseEnter={() => setActiveDropdown(activeDropdown)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div className="max-w-[1400px] mx-auto px-[5%] py-12">
                <div className="flex flex-col gap-10">
                  {/* Top Row: Big Title */}
                  <div>
                    <h2 className="text-2xl lg:text-3xl xl:text-[36px] font-bold text-white flex items-center gap-3">
                      {menuData[activeDropdown].title}
                      <span className="w-8 h-8 bg-[#ff6b1a] flex items-center justify-center text-white flex-shrink-0">
                        <ChevronRight size={20} strokeWidth={3} />
                      </span>
                    </h2>
                  </div>

                  {/* Bottom Row: Dynamic Sections */}
                  {activeDropdown === 'whatWeDo' ? (
                    <div className="flex w-full gap-8 lg:gap-16 items-stretch">
                      {/* Left Column: Master Navigation */}
                      <div className="w-1/3 flex flex-col gap-2 border-r border-white/5 pr-8">
                        {Object.keys(industriesData).map((ind) => (
                          <div
                            key={ind}
                            onMouseEnter={() => setActiveIndustry(ind)}
                            className={`relative px-6 py-5 cursor-pointer rounded-xl transition-all duration-300 flex items-center ${activeIndustry === ind
                                ? 'bg-white/5 text-white shadow-lg'
                                : 'text-white/50 hover:text-white/90 hover:bg-white/[0.02]'
                              }`}
                          >
                            {/* Orange vertical indicator */}
                            <div
                              className={`absolute left-0 top-1/2 -translate-y-1/2 w-1.5 bg-[#ff6b1a] rounded-r-md transition-all duration-300 ${activeIndustry === ind ? 'h-[60%] opacity-100' : 'h-0 opacity-0'
                                }`}
                            />
                            <span className="text-lg lg:text-xl font-bold ml-2 tracking-wide">{ind}</span>
                          </div>
                        ))}
                      </div>

                      {/* Right Panel: Detail View */}
                      <div className="w-2/3 -mt-24">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={activeIndustry}
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            transition={{ duration: 0.25 }}
                            className="w-full h-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-[20px] backdrop-blur-[18px] p-8 lg:p-10 flex flex-col shadow-2xl"
                          >
                            <h3 className="text-3xl lg:text-4xl font-black text-white mb-10 tracking-tight">{activeIndustry}</h3>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-10 flex-grow">
                              {industriesData[activeIndustry].categories.map((category, idx) => (
                                <motion.div
                                  key={category.name}
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: idx * 0.08, duration: 0.4 }}
                                  className="flex flex-col"
                                >
                                  <h4 className="text-[#ff6b1a] text-lg lg:text-xl font-bold mb-4 pb-2 border-b border-[#333333]">{category.name}</h4>
                                  <div className="flex flex-col gap-3">
                                    {category.links.map((link, i) => (
                                      <Link
                                        key={i}
                                        to={link.path}
                                        className="text-white/80 hover:text-white hover:underline decoration-1 underline-offset-4 transition-all duration-300 text-sm lg:text-base font-medium flex items-center w-fit"
                                        onClick={(e) => handleLinkClick(e, link.path, link.name, () => setActiveDropdown(null))}
                                      >
                                        {link.name}
                                      </Link>
                                    ))}
                                  </div>
                                </motion.div>
                              ))}
                            </div>

                            <div className="pt-6 border-t border-white/10 mt-auto">
                              <p className="text-white/70 text-lg lg:text-xl font-medium leading-relaxed">
                                {industriesData[activeIndustry].description}
                              </p>
                            </div>
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-8">
                      {menuData[activeDropdown].sections.map((section, idx) => (
                        <div key={idx} className="flex flex-col">
                          <h3 className="text-[#ff6b1a] text-base lg:text-lg xl:text-xl font-bold mb-6 pb-2 border-b border-[#333333]">{section.heading}</h3>
                          <div className="flex flex-col gap-4">
                            {section.links.map((link, i) => (
                              <Link
                                key={i}
                                to={link.path}
                                className="text-white hover:underline decoration-1 underline-offset-4 transition-all duration-300 text-sm lg:text-base xl:text-[16px] font-semibold flex items-center w-fit"
                                onClick={(e) => handleLinkClick(e, link.path, link.name, () => setActiveDropdown(null))}
                              >
                                {link.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-40 lg:hidden backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              ref={mobileMenuRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="absolute right-0 top-0 h-full w-[85%] max-w-[340px] bg-[#121212] shadow-2xl overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="pt-24 pb-12 px-6">
                {menuItems.map((item) => (
                  <div key={item.key} className="mb-1 border-b border-white/5">
                    <button
                      onClick={() => toggleMobileDropdown(item.key)}
                      className="flex justify-between items-center w-full py-5 text-white/80 hover:text-white group"
                    >
                      <span className="text-xl font-light group-hover:text-[#ff6b1a] transition-colors">{item.name}</span>
                      <motion.div
                        animate={{ rotate: mobileDropdownOpen === item.key ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown size={20} className={mobileDropdownOpen === item.key ? 'text-[#ff6b1a]' : 'text-white/40'} />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {mobileDropdownOpen === item.key && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 pb-5 pt-2 flex flex-col gap-6">
                            {menuData[item.key].sections.map((section, idx) => (
                              <div key={idx}>
                                <h4 className="text-white/40 text-sm mb-3 font-semibold uppercase">{section.heading}</h4>
                                <div className="flex flex-col gap-3">
                                  {section.links.map((sub, i) => (
                                    <Link
                                      key={i}
                                      to={sub.path}
                                      className="text-white/70 hover:text-[#ff6b1a] text-lg transition-colors"
                                      onClick={(e) => handleLinkClick(e, sub.path, sub.name, () => setMobileMenuOpen(false))}
                                    >
                                      {sub.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* FULL SCREEN SEARCH OVERLAY */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-[#000000]/95 backdrop-blur-md flex flex-col pt-[15vh] px-[5%] md:px-[15%]"
          >
            <button
              onClick={() => setSearchOpen(false)}
              className="absolute top-8 right-[5%] md:right-[5%] text-white/60 hover:text-white transition-colors"
            >
              <X size={40} strokeWidth={1} />
            </button>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="w-full relative max-w-5xl mx-auto"
            >
              <input
                ref={(input) => input && input.focus()}
                type="text"
                placeholder={t("header.search_placeholder")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && filteredItems.length > 0) {
                    const item = filteredItems[0];
                    navigate(item.path);
                    setSearchOpen(false);
                    setSearchQuery("");
                  }
                }}
                className="w-full bg-transparent border-b-2 border-white/20 text-3xl md:text-5xl lg:text-6xl text-white font-light pb-4 outline-none focus:border-[#ff6b1a] transition-colors placeholder:text-white/20"
              />

              {searchQuery && (
                <div className="mt-8 max-h-[50vh] overflow-y-auto custom-scrollbar">
                  <h3 className="text-[#ff6b1a] text-sm font-semibold uppercase tracking-widest mb-6">{t("header.search_results")}</h3>
                  {filteredItems.length > 0 ? (
                    <div className="flex flex-col gap-2">
                      {filteredItems.map((item, i) => (
                        <Link
                          key={i}
                          to={item.path}
                          className="text-2xl md:text-3xl text-white/70 hover:text-white transition-colors py-2 flex items-center group w-fit"
                          onClick={(e) => handleLinkClick(e, item.path, item.name, () => setSearchOpen(false))}
                        >
                          {item.name}
                          <ChevronRight size={24} className="opacity-0 group-hover:opacity-100 transition-transform translate-x-[-10px] group-hover:translate-x-0 ml-2 text-[#ff6b1a]" />
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-12 mt-4 bg-white/5 rounded-xl border border-white/10">
                      <Search size={48} className="text-[#ff6b1a] mb-4 opacity-70" />
                      <p className="text-white/90 text-2xl font-medium mb-2">Invalid Search</p>
                      <p className="text-white/50 text-lg">We couldn't find any related content for "{searchQuery}"</p>
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </>
  );
}
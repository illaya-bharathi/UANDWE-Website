import { useState } from "react";
import { useTranslation } from "react-i18next";
import SectionHeading from "./SectionHeading";
import america from "../assets/images/america.png";
import india from "../assets/images/india.png";
import china from "../assets/images/china.png";


export default function ContactUs() {
  const { t } = useTranslation();
  const [activeRegion, setActiveRegion] = useState("AMERICA");

  const regions = ["AMERICA", "INDIA", "CHINA"];

  const regionData = {
    AMERICA: {
      label: "REGION_ALPHA_US",
      city: t("contact.locations.america.city"),
      address: [t("contact.locations.america.address_1"), t("contact.locations.america.address_2"), t("contact.locations.america.address_3")].filter(Boolean),
      mapLink: "https://www.google.com/maps?q=2535+Amaryl+Dr+San+Jose",
      image: america,
      dot: { cx: 150, cy: 90 },
    },
    INDIA: {
      label: "REGION_ALPHA_IN",
      city: t("contact.locations.india.city"),
      address: [t("contact.locations.india.address_1"), t("contact.locations.india.address_2"), t("contact.locations.india.address_3")].filter(Boolean),
      mapLink: "https://www.google.com/maps?q=Novel+MSR+Building+Marathahalli+Bangalore",
      image: india,
      dot: { cx: 430, cy: 95 },
    },
    CHINA: {
      label: "REGION_ALPHA_CN",
      city: t("contact.locations.china.city"),
      address: [t("contact.locations.china.address_1"), t("contact.locations.china.address_2"), t("contact.locations.china.address_3")].filter(Boolean),
      mapLink: "https://www.google.com/maps?q=Zhangjiang+Road+665+Shanghai",
      image: china,
      dot: { cx: 490, cy: 78 },
    },
  };

  const active = regionData[activeRegion];

  return (
    <section className="relative w-full bg-[#0b0b12] px-4 sm:px-6 md:px-[5%] py-12 md:py-16 overflow-hidden">
      <SectionHeading
        titlePart1={t("contact.heading_1")}
        titlePart2={t("contact.heading_2")}
        className="w-full mx-auto !mb-6 md:!mb-10"
      />


      <div className="w-full mx-auto grid lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
        {/* LEFT MAP PANEL */}
        <div className="rounded-xl sm:rounded-2xl border border-white/10 bg-[#141414] overflow-hidden flex flex-col">
          {/* REGION SWITCH */}
          <div className="flex justify-end px-4 sm:px-5 py-3 sm:py-4 border-b border-white/10 w-full">
            <div className="flex gap-1.5 sm:gap-2 flex-wrap">
              {regions.map((r) => (
                <button
                  key={r}
                  onClick={() => setActiveRegion(r)}
                  className={`px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-[11px] font-semibold cursor-pointer tracking-wide border transition-all duration-300 whitespace-nowrap ${activeRegion === r
                    ? "bg-orange-500 text-black border-orange-500 shadow-md shadow-orange-500/30"
                    : "border-white/30 text-white/80 hover:border-orange-400 hover:text-orange-400 hover:bg-orange-500/10"
                    }`}
                >
                  {t(`contact.locations.${r.toLowerCase()}.name`)}
                </button>
              ))}
            </div>
          </div>

          {/* MAP IMAGE (CLICKABLE) */}
          <div
            onClick={() => window.open(active.mapLink, "_blank")}
            className="relative w-full flex-1 min-h-[250px] md:min-h-[300px] cursor-pointer group"
          >
            <img
              src={active.image}
              alt="map"
              className="w-full h-full object-cover brightness-[0.6] contrast-[0.9] group-hover:brightness-[1] group-hover:contrast-[1] transition-all duration-500 ease-out"
            />
          </div>

          {/* INFO */}
          <div className="px-4 sm:px-5 py-3 sm:py-4 border-t border-white/10">

            <p className="text-white font-bold mt-1 text-sm sm:text-base">
              {active.city}
            </p>

            <div className="mt-1 space-y-0.5">
              {active.address.map((line, i) => (
                <p key={i} className="text-white/40 text-xs sm:text-sm">
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="relative rounded-xl sm:rounded-2xl border border-white/10 bg-[#141414] p-4 sm:p-5 md:p-6 overflow-hidden flex flex-col justify-center h-full">
          {/* subtle glow */}
          <div
            className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-500
            bg-[radial-gradient(circle_at_80%_20%,rgba(255,115,0,0.12),transparent_60%)] pointer-events-none"
          />

          <h2 className="text-white text-center font-normal text-lg sm:text-xl mb-4 sm:mb-6 tracking-tight">
            {t("contact.form_title")}
          </h2>

          <div className="space-y-3 sm:space-y-4">
            {/* NAME */}
            <div>
              <label className="text-xs sm:text-sm text-white/50 tracking-wider mb-1.5 sm:mb-2 block uppercase">
                {t("contact.name")}
              </label>
              <input
                type="text"
                placeholder={t("contact.name_placeholder")}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-black/60 border border-white/10 rounded-lg
                text-white placeholder-white/30 text-xs sm:text-sm
                focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500
                transition-all duration-300"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="text-xs sm:text-sm text-white/50 tracking-wider mb-1.5 sm:mb-2 block uppercase">
                {t("contact.email")}
              </label>
              <input
                type="email"
                placeholder={t("contact.email_placeholder")}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-black/60 border border-white/10 rounded-lg
                text-white placeholder-white/30 text-xs sm:text-sm
                focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500
                transition-all duration-300"
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label className="text-xs sm:text-sm text-white/50 tracking-wider mb-1.5 sm:mb-2 block uppercase">
                {t("contact.message")}
              </label>
              <textarea
                rows={3}
                placeholder={t("contact.message_placeholder")}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-black/60 border border-white/10 rounded-lg
                text-white placeholder-white/30 text-xs sm:text-sm
                focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500
                transition-all duration-300 resize-none"
              />
            </div>
          </div>

          {/* BUTTON */}
          <button
            className="
            mt-6 sm:mt-7 md:mt-8 w-full py-3 sm:py-3.5 md:py-4 rounded-full font-normal tracking-wide text-sm sm:text-base
            bg-gradient-to-r from-orange-500 to-orange-600
            hover:from-orange-400 hover:to-orange-500
            transition-all duration-300
            shadow-[0_10px_30px_rgba(255,115,0,0.25)]
            hover:shadow-[0_20px_60px_rgba(255,115,0,0.45)]
            hover:-translate-y-[2px]
            active:translate-y-0
            "
          >
            {t("contact.send_button")}
          </button>
        </div>
      </div>
    </section>
  );
}
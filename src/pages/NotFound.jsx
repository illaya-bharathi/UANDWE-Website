import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0a0a0f] flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ff6b1a]/10 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center z-10"
      >
        <h1 className="text-[120px] md:text-[180px] font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#ff6b1a] to-[#ff8c4a] leading-none tracking-tighter mb-4 drop-shadow-[0_0_30px_rgba(255,107,26,0.3)]">
          404
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold text-white mb-6">
          Page Not Found
        </h2>
        <p className="text-white/60 text-lg mb-10 max-w-md mx-auto">
          The page you are looking for doesn't exist or has been moved.
        </p>

        <button
          onClick={() => navigate(-1)}
          className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-full overflow-hidden transition-all duration-300 hover:bg-white/10 hover:border-[#ff6b1a]/50 hover:shadow-[0_0_20px_rgba(255,107,26,0.2)]"
        >
          <ArrowLeft size={20} className="text-[#ff6b1a] group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="text-white font-medium tracking-wide">Go Back</span>
        </button>
      </motion.div>
    </div>
  );
};

export default NotFound;

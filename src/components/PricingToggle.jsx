import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const PricingToggle = ({ isYearly, setIsYearly }) => {
  return (
    <div className="flex justify-center items-center mb-12">
      <div className="relative flex items-center p-1 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
        <button
          onClick={() => setIsYearly(false)}
          className={`relative z-10 px-6 py-2.5 text-sm font-bold transition-colors duration-300 rounded-full ${
            !isYearly ? 'text-white' : 'text-gray-400 hover:text-white'
          }`}
        >
          Monthly
        </button>
        <button
          onClick={() => setIsYearly(true)}
          className={`relative z-10 px-6 py-2.5 text-sm font-bold transition-colors duration-300 rounded-full flex items-center gap-2 ${
            isYearly ? 'text-white' : 'text-gray-400 hover:text-white'
          }`}
        >
          Yearly
          <span className="bg-gradient-secondary text-white text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1 shadow-lg glow-cyan">
            <Sparkles size={10} />
            Save More
          </span>
        </button>

        {/* Animated Background Pill */}
        <motion.div
          className="absolute top-1 bottom-1 w-[calc(50%-4px)] bg-[#0C0BBD] rounded-full shadow-[0_0_15px_rgba(12,11,189,0.5)] z-0"
          initial={false}
          animate={{
            left: isYearly ? 'auto' : '4px',
            right: isYearly ? '4px' : 'auto',
            width: isYearly ? '140px' : '100px'
          }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        />
      </div>
    </div>
  );
};

export default PricingToggle;
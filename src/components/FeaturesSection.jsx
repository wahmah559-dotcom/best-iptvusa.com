import React from 'react';
import { motion } from 'framer-motion';
import { Tv, Zap, Wifi, Smartphone, Headphones, Rocket, Shield, Download } from 'lucide-react';

const features = [
  { icon: <Tv size={32} />, title: "Premium Broadcasts", description: "Access a massive library of premium national and international programming." },
  { icon: <Zap size={32} />, title: "Maximum Quality", description: "Experience crystal clear streams with high-resolution output." },
  { icon: <Wifi size={32} />, title: "Smooth Playback", description: "Our optimized technology ensures uninterrupted viewing experiences." },
  { icon: <Smartphone size={32} />, title: "Universal Access", description: "Watch on all your favorite modern devices seamlessly." },
  { icon: <Headphones size={32} />, title: "Round-the-Clock Support", description: "Our dedicated team is always available to help you." },
  { icon: <Rocket size={32} />, title: "Lightning Fast", description: "Premium infrastructure optimized for perfect transmission." },
  { icon: <Shield size={32} />, title: "Guaranteed Uptime", description: "Reliable systems ensure your entertainment is always online." },
  { icon: <Download size={32} />, title: "Quick Setup", description: "Get set up in minutes with our simple step-by-step instructions." }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-[#0A0A1F]" id="features">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Premium <span className="text-[#0C0BBD]">Streaming</span> Features
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need for the ultimate entertainment experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-6 rounded-xl hover:-translate-y-2 transition-transform duration-300 group border border-white/5 hover:border-[#0C0BBD]/50"
            >
              <div className="w-14 h-14 bg-[#0C0BBD]/10 rounded-lg flex items-center justify-center text-[#0C0BBD] mb-6 group-hover:bg-[#0C0BBD] group-hover:text-white transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
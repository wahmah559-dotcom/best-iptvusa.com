import React from 'react';
import { motion } from 'framer-motion';
import { Play, Tv, Sparkles, MonitorSmartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const AnimatedIPTVHeroBanner = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0E27] pt-24 pb-16">
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <img
            src="https://images.unsplash.com/photo-1593359677879-a4bb92f829d1"
            alt="Main Display Screen Background"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
        <div className="absolute inset-0 bg-[rgba(10,14,39,0.7)] z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0E27] via-[#0A0E27]/80 to-transparent z-10" />
      </div>

      <div className="absolute top-8 left-8 z-30 flex items-center gap-2 text-white/90">
        <Tv className="w-6 h-6 text-[#00D4FF]" />
        <span className="font-heading font-bold text-xl tracking-wide">
          Premium Streaming
        </span>
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl bg-[rgba(10,14,39,0.6)] p-8 md:p-10 rounded-3xl border border-white/5 backdrop-blur-sm shadow-2xl"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 bg-[#0066FF]/20 border border-[#0066FF]/40 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-[#00D4FF]" />
              <span className="text-sm text-[#00D4FF] font-bold uppercase tracking-wider">Ultimate Experience</span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white leading-tight mb-6 drop-shadow-lg"
            >
              Stream <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#0066FF]">
                Premium Content
              </span> <br />
              Anywhere
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-300 font-medium mb-10 leading-relaxed drop-shadow-md"
            >
              Access sports programming, blockbuster movies, and top-tier entertainment on all your devices with unparalleled clarity.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <Link to="/pricing" className="block w-full sm:w-auto">
                <motion.button
                  animate={{ scale: [1, 1.05, 1], boxShadow: ["0 0 0 rgba(0,212,255,0)", "0 0 20px rgba(0,212,255,0.5)", "0 0 0 rgba(0,212,255,0)"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-full bg-gradient-to-r from-[#0066FF] to-[#00D4FF] hover:from-[#0052CC] hover:to-[#00B8E6] text-white text-lg font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-3 transition-colors shadow-lg"
                >
                  <Play className="fill-white" size={24} />
                  Start Viewing
                </motion.button>
              </Link>
              <Link to="/features" className="block w-full sm:w-auto">
                <button className="w-full bg-[#1A1F3A]/80 hover:bg-[#1A1F3A] border border-[#0066FF]/30 text-white text-lg font-bold px-8 py-4 rounded-xl flex items-center justify-center transition-all hover:border-[#00D4FF]/50 backdrop-blur-md">
                  Explore Features
                </button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative hidden lg:block"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#0066FF]/30 blur-[100px] rounded-full pointer-events-none" />
            
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,102,255,0.3)] border border-white/10"
            >
              <img
                src="https://images.unsplash.com/photo-1647866307923-7853dfa28019"
                alt="Streaming Devices Showcase"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-6 left-6 bg-[#0A0E27]/90 backdrop-blur-md border border-[#00D4FF]/30 px-4 py-3 rounded-xl flex items-center gap-3 shadow-xl">
                <div className="bg-[#0066FF] p-2 rounded-lg">
                  <MonitorSmartphone className="text-white w-6 h-6" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">All Hardware Supported</p>
                  <p className="text-gray-400 text-xs">Displays, Mobile, Desktops</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedIPTVHeroBanner;
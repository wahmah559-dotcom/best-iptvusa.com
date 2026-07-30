import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const waLink = "https://wa.me/17867352904?text=I%20want%20to%20subscribe%20to%20premium%20streaming";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const trustBadges = [
  'Instant Activation',
  '55,000+ Live Channels',
  '150,000+ Movies & Series',
  '4K / FHD',
];

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative w-full min-h-[85vh] lg:min-h-[90vh] flex items-center bg-slate-950 overflow-hidden pt-24 lg:pt-0">
      {/* Background image */}
      <img
        src="/images/hero-tv.webp"
        alt="Modern luxury living room at night with a family watching a large wall-mounted Smart TV displaying a premium IPTV streaming interface"
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
        fetchpriority="high"
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />

      {/* Text content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={shouldReduceMotion ? 'visible' : 'hidden'}
          animate="visible"
          variants={containerVariants}
          className="max-w-xl text-left"
        >
          <motion.div variants={itemVariants} className="mb-8 inline-flex items-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#3B82F6]/70" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#7FB1FF] sm:text-xs">
              Premium IPTV &middot; United States
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="mb-6 text-[2.6rem] font-semibold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-5xl xl:text-6xl"
          >
            <span className="block font-normal text-slate-300">55,000+ Live TV Channels.</span>
            <span className="block text-white">Unlimited Entertainment.</span>
            <span className="block bg-gradient-to-r from-[#5B9BFF] to-[#B79BFF] bg-clip-text text-transparent">
              Instant Access.
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mb-10 max-w-lg text-lg leading-relaxed text-slate-300 sm:text-xl"
          >
            Watch live TV, sports, movies and series in stunning 4K quality across every device
            with instant activation.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col items-start gap-6 sm:flex-row sm:items-center"
          >
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="group w-full sm:w-auto">
              <Button className="h-14 w-full rounded-full bg-white px-8 text-base font-semibold tracking-tight text-[#05070B] shadow-[0_1px_0_rgba(255,255,255,0.4)_inset,0_8px_24px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-100 sm:w-auto">
                Start Free Trial
              </Button>
            </a>

            <button
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              className="group inline-flex items-center gap-2 text-base font-medium text-slate-300 transition-colors duration-300 hover:text-white"
            >
              View Pricing
            </button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            variants={itemVariants}
            className="mt-10 grid grid-cols-1 gap-x-6 gap-y-3 border-t border-white/10 pt-6 sm:grid-cols-2"
          >
            {trustBadges.map((label) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-300"
              >
                <CheckCircle2 size={16} className="shrink-0 text-[#3B82F6]" />
                {label}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

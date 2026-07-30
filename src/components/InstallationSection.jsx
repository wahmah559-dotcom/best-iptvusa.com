import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Cast, Monitor, Smartphone, Tv } from 'lucide-react';

const platforms = [
  { name: 'Firestick', icon: Cast },
  { name: 'Android TV', icon: Tv },
  { name: 'Samsung', icon: Tv },
  { name: 'LG', icon: Tv },
  { name: 'Windows', icon: Monitor },
  { name: 'iPhone', icon: Smartphone },
];

const InstallationSection = () => {
  return (
    <section className="border-t border-white/5 bg-[#05070B] py-24" id="installation">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <h2 className="mb-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Set Up on Your Device
          </h2>
          <p className="text-lg text-slate-400">
            Step-by-step installation guides for every platform we support.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {platforms.map(({ name, icon: Icon }, idx) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.07 }}
            >
              <Link
                to="/devices"
                className="group flex h-full flex-col items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#3B82F6]/40 hover:bg-white/[0.04]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0066FF]/10 text-[#5B9BFF]">
                  <Icon size={22} />
                </div>
                <span className="text-sm font-bold text-white">{name}</span>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 transition-colors group-hover:text-[#5B9BFF]">
                  Setup Guide
                  <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstallationSection;

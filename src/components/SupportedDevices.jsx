import React from 'react';
import { motion } from 'framer-motion';
import { Cast, Laptop, Monitor, Smartphone, Tv } from 'lucide-react';

const devices = [
  { name: 'Android TV', icon: Tv },
  { name: 'Firestick', icon: Cast },
  { name: 'Samsung', icon: Tv },
  { name: 'LG', icon: Tv },
  { name: 'Apple TV', icon: Tv },
  { name: 'Windows', icon: Monitor },
  { name: 'Mac', icon: Laptop },
  { name: 'Android', icon: Smartphone },
  { name: 'iPhone', icon: Smartphone },
];

const TrustBar = () => {
  return (
    <section className="border-y border-white/5 bg-[#05070B] py-16" id="devices">
      <div className="container mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center text-xs font-semibold uppercase tracking-[0.25em] text-slate-500"
        >
          Trusted by streamers nationwide &middot; Works on every screen you own
        </motion.p>

        <div className="mx-auto grid max-w-5xl grid-cols-3 gap-4 sm:grid-cols-5 sm:gap-6 lg:grid-cols-9">
          {devices.map(({ name, icon: Icon }, idx) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="flex flex-col items-center gap-2 rounded-xl border border-white/5 bg-white/[0.02] px-3 py-5 text-center transition-colors duration-300 hover:border-white/10 hover:bg-white/[0.04]"
            >
              <Icon size={22} className="text-slate-400" />
              <span className="text-xs font-medium text-slate-400">{name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;

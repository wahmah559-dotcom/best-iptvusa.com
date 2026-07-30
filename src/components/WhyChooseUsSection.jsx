import React from 'react';
import { motion } from 'framer-motion';
import { Gauge, Headphones, Library, MonitorSmartphone, ShieldCheck, Tv, Wrench, Zap } from 'lucide-react';

const reasons = [
  { icon: Zap, title: 'Ultra Fast Activation', desc: 'Get your login details and start watching within minutes of subscribing.' },
  { icon: ShieldCheck, title: '99.9% Uptime', desc: 'Redundant server infrastructure keeps you streaming without interruption.' },
  { icon: Tv, title: '4K Streaming', desc: 'Crystal-clear picture quality on every channel and on-demand title.' },
  { icon: Gauge, title: 'No Buffering', desc: 'Optimized delivery networks built to handle peak-hour demand smoothly.' },
  { icon: Headphones, title: '24/7 Support', desc: 'A real support team on WhatsApp and live chat, day or night.' },
  { icon: MonitorSmartphone, title: 'Works Everywhere', desc: 'Smart TVs, Firestick, phones, tablets and computers — all supported.' },
  { icon: Library, title: 'Huge VOD Library', desc: '150,000+ movies and series added and refreshed continuously.' },
  { icon: Wrench, title: 'Easy Setup', desc: 'Step-by-step guides get any device connected in a few minutes.' },
];

const WhyChooseUsSection = () => {
  return (
    <section className="border-t border-white/5 bg-[#05070B] py-24" id="why-choose-us">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <h2 className="mb-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Why Choose Best IPTV USA
          </h2>
          <p className="text-lg text-slate-400">
            Everything you'd expect from a premium streaming service — built on infrastructure that
            actually holds up.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ icon: Icon, title, desc }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.06 }}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition-colors duration-300 hover:border-[#3B82F6]/30 hover:bg-white/[0.04]"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#0066FF]/10 text-[#5B9BFF]">
                <Icon size={22} />
              </div>
              <h3 className="mb-2 text-lg font-bold text-white">{title}</h3>
              <p className="text-sm leading-relaxed text-slate-400">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;

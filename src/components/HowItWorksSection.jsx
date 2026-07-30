import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, KeyRound, ListChecks, PlayCircle } from 'lucide-react';

const steps = [
  { icon: ListChecks, title: 'Choose Plan', desc: 'Pick the subscription length that fits how you watch.' },
  { icon: CreditCard, title: 'Pay', desc: 'Check out securely in a couple of minutes.' },
  { icon: KeyRound, title: 'Receive Login', desc: 'Your credentials and setup guide arrive instantly.' },
  { icon: PlayCircle, title: 'Start Watching', desc: 'Connect your device and stream right away.' },
];

const HowItWorksSection = () => {
  return (
    <section className="border-t border-white/5 bg-[#05070B] py-24" id="how-it-works">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-20 max-w-2xl text-center"
        >
          <h2 className="mb-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Start Watching in Four Steps
          </h2>
          <p className="text-lg text-slate-400">From checkout to live TV, in minutes.</p>
        </motion.div>

        <div className="relative mx-auto max-w-6xl">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent lg:block" />

          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {steps.map(({ icon: Icon, title, desc }, idx) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-[#0B1120] text-[#5B9BFF] shadow-lg">
                  <Icon size={26} />
                  <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#05070B] bg-[#3B82F6] text-xs font-bold text-white">
                    {idx + 1}
                  </span>
                </div>
                <h3 className="mb-2 text-lg font-bold text-white">{title}</h3>
                <p className="max-w-[220px] text-sm leading-relaxed text-slate-400">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

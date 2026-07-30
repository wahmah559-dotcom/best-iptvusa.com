import React from 'react';
import { motion } from 'framer-motion';
import { Check, ShieldCheck, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { pricingData } from '@/data/pricingData';

const waLink = "https://wa.me/17867352904?text=I%20want%20to%20subscribe%20to%20Best%20IPTV%20USA";

const EnhancedPricingSection = () => {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-[#05070B] py-24" id="pricing">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0066FF]/10 blur-[160px]" />

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <h2 className="mb-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-slate-400">No contracts. No hidden fees. Cancel anytime.</p>
        </motion.div>

        <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pricingData.map((plan, idx) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              whileHover={{ y: -6 }}
              className={`relative flex flex-col rounded-2xl border p-8 pt-10 ${
                plan.popular
                  ? 'border-[#3B82F6]/50 bg-[#0B1120] shadow-[0_20px_60px_-15px_rgba(0,102,255,0.35)] lg:-translate-y-3'
                  : 'border-white/10 bg-white/[0.02]'
              }`}
            >
              {plan.badge && (
                <div
                  className={`absolute left-1/2 top-0 inline-flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 whitespace-nowrap rounded-full px-4 py-1.5 text-xs font-bold ${
                    plan.popular ? 'bg-[#3B82F6] text-white' : 'bg-white/10 text-white'
                  }`}
                >
                  <Sparkles size={13} />
                  {plan.badge}
                </div>
              )}

              <div className="mb-6 text-center">
                <h3 className="text-lg font-bold text-white">{plan.name}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {plan.duration}
                </p>
              </div>

              <div className="mb-2 flex items-start justify-center gap-1">
                <span className="mt-2 text-xl font-semibold text-slate-400">$</span>
                <span className="text-5xl font-bold tracking-tight text-white">{plan.price}</span>
              </div>

              <div className="mb-6 flex h-6 items-center justify-center">
                {plan.savings && (
                  <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-xs font-bold text-emerald-400">
                    {plan.savings}
                  </span>
                )}
              </div>

              <p className="mb-8 text-center text-sm leading-relaxed text-slate-400">
                {plan.description}
              </p>

              <div className="mb-8 flex-grow space-y-3.5">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <Check size={16} className="mt-0.5 shrink-0 text-[#3B82F6]" />
                    <span className="text-sm font-medium leading-tight text-slate-200">{feature}</span>
                  </div>
                ))}
              </div>

              <a href={waLink} target="_blank" rel="noopener noreferrer" className="mt-auto block">
                <Button
                  className={`h-13 w-full rounded-xl py-6 text-base font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-white text-[#05070B] hover:-translate-y-0.5 hover:bg-slate-100'
                      : 'border border-white/15 bg-transparent text-white hover:bg-white/5'
                  }`}
                >
                  Subscribe Now
                </Button>
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex items-center justify-center gap-2 text-sm font-medium text-slate-400"
        >
          <ShieldCheck size={16} className="text-[#3B82F6]" />
          Backed by a 30-day money-back guarantee
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedPricingSection;

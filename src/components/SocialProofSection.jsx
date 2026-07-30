import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'John D.',
    location: 'Texas, USA',
    text: "Best premium subscription I've ever had. Sports channels are crystal clear, absolutely no buffering during major sporting events or championship games.",
    rating: 5,
    gradient: 'from-[#0066FF] to-[#3B82F6]',
  },
  {
    name: 'Emily R.',
    location: 'Florida, USA',
    text: 'Customer service is fantastic! Setup was super easy on my device. Definitely recommend to everyone looking to upgrade their entertainment.',
    rating: 5,
    gradient: 'from-[#7C3AED] to-[#A855F7]',
  },
  {
    name: 'Michael S.',
    location: 'New York, USA',
    text: "I've tried many services over 2 years. This streaming platform is by far the most reliable. The 4K VOD section has everything I need.",
    rating: 5,
    gradient: 'from-[#F97316] to-[#FB923C]',
  },
];

const SocialProofSection = () => {
  return (
    <section className="border-t border-white/5 bg-[#05070B] py-24" id="testimonials">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <h2 className="mb-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Loved by Streamers Across America
          </h2>
          <p className="text-lg text-slate-400">Real feedback from real subscribers.</p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-8"
            >
              <div className="mb-5 flex gap-1">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="mb-8 flex-grow text-[15px] leading-relaxed text-slate-300">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 border-t border-white/10 pt-6">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br text-sm font-bold text-white ${t.gradient}`}
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;

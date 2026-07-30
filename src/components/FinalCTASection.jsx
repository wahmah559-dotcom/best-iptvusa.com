import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const waLink = "https://wa.me/17867352904?text=I%20want%20to%20subscribe%20to%20Best%20IPTV%20USA";

const FinalCTASection = () => {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-[#05070B] py-24 lg:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-full max-w-4xl -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0066FF]/10 blur-[150px]" />

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl rounded-[32px] border border-white/10 bg-white/[0.02] p-10 text-center sm:p-16"
        >
          <h2 className="mb-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Ready to Start Streaming?
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-lg text-slate-400">
            Join thousands of subscribers streaming live TV, sports, and movies in 4K — with
            instant activation.
          </p>

          <div className="flex flex-col items-center justify-center gap-5 sm:flex-row">
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <div className="flex h-16 w-full items-center justify-center gap-3 rounded-full bg-[#25D366] px-10 text-lg font-bold text-[#05070B] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#22c55e] sm:w-auto">
                <MessageCircle size={22} className="fill-[#05070B]" />
                Chat on WhatsApp
              </div>
            </a>

            <Link
              to="/pricing"
              className="inline-flex h-16 w-full items-center justify-center rounded-full border border-white/15 px-10 text-lg font-semibold text-white transition-all duration-300 hover:bg-white/5 sm:w-auto"
            >
              View Pricing
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;

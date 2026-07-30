import React from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PriceComparisonTable from '@/components/PriceComparisonTable';

const PriceComparisonSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const benefits = [
    '50,000+ Live Channels',
    'Premium 4K Streaming',
    'Unlimited VOD Library',
    'No Contracts Required',
    'No Hidden Fees',
    'Works on All Devices',
    '24/7 Customer Support',
    '30-Day Money-Back Guarantee'
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#0F172A] via-[#1E293B] to-[#0F172A] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-[#0066FF]/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[300px] bg-[#25D366]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-[#0F172A] border border-slate-700 px-4 py-2 rounded-full text-slate-300 mb-6 shadow-lg">
            <TrendingDown className="text-[#25D366]" size={18} />
            <span className="text-sm font-semibold uppercase tracking-wider">Massive Savings</span>
          </motion.div>

          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            Cable TV vs IPTV USA: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#3B82F6]">Price Comparison</span> by State
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            See how much you can save with IPTV USA in your state. Compare real prices from major cable providers and discover why millions are making the switch to IPTV.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-12"
        >
          <div className="bg-[#1E293B]/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-slate-800 shadow-2xl">
            <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-8">
              Traditional cable TV providers in the USA charge premium prices for limited channel packages, long-term contracts, and hidden fees. 
              IPTV USA delivers <strong className="text-white font-bold">50,000+ channels</strong>, 
              <strong className="text-white font-bold"> 4K streaming quality</strong>, and 
              <strong className="text-white font-bold"> unlimited entertainment</strong> at a fraction of the cost. 
              Here's how the prices compare across major US states:
            </p>

            <PriceComparisonTable />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="bg-gradient-to-br from-[#0066FF]/10 to-[#25D366]/10 rounded-2xl p-8 md:p-12 border border-slate-700 shadow-2xl backdrop-blur-sm"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
            Why Choose IPTV USA?
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex items-center gap-3 bg-[#1E293B]/50 rounded-lg p-4 border border-slate-800 hover:border-[#0066FF]/50 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#25D366] to-[#1DA851] rounded-full flex items-center justify-center shadow-lg">
                  <CheckCircle size={18} className="text-white" />
                </div>
                <span className="text-slate-200 font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>

          <div className="text-center space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mx-auto">
              Stop overpaying for cable TV! With IPTV USA, you get <strong className="text-white font-bold">unlimited access</strong> to 
              premium channels, sports, movies, series, and international content - all without contracts, installation fees, or hidden charges. 
              Join thousands of satisfied customers who are saving <strong className="text-[#25D366] font-bold">$65-$80 every month</strong>.
            </p>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link 
                to="/pricing" 
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#0066FF] to-[#3B82F6] hover:from-[#3B82F6] hover:to-[#60A5FA] text-white font-bold text-lg px-10 py-5 rounded-xl transition-all duration-300 shadow-[0_0_30px_rgba(0,102,255,0.4)] hover:shadow-[0_0_40px_rgba(0,102,255,0.6)] hover:scale-105 transform"
              >
                Get IPTV USA Today
                <ArrowRight size={22} className="animate-pulse" />
              </Link>
              <p className="text-sm text-slate-400 mt-4">
                🎁 <strong className="text-white">Special Offer:</strong> 30-Day Money-Back Guarantee + Free Trial
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PriceComparisonSection;
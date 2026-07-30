import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Check, Sparkles, Shield, Zap, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { pricingData } from '@/data/pricingData';
import Breadcrumb from '@/components/Breadcrumb';

const PricingPage = () => {
  const waLink = "https://wa.me/17867352904";

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="min-h-screen bg-[#0F172A] text-white font-sans overflow-hidden pt-24">
      <Helmet>
        <title>Pricing Plans 2026 - Best IPTV USA</title>
        <meta name="description" content="Choose your premium 2026 IPTV subscription plan. Get access to 50,000+ channels in 4K/8K quality with our flexible pricing tiers. No contracts." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-16 px-4 text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#0EA5E9]/10 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto relative z-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl mx-auto">
            <motion.div variants={fadeInUp} className="mb-6 flex justify-center">
              <Breadcrumb items={[{ label: 'Pricing', path: '/pricing' }]} />
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-white drop-shadow-lg">
              Simple, Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0EA5E9] to-[#38BDF8]">2026 Pricing</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-light drop-shadow-md">
              Choose the modern plan that best fits your ultra-HD viewing habits. No hidden fees or rigid legacy contracts required.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 relative z-10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto items-stretch">
            {pricingData.map((plan, idx) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`relative bg-[#1E293B] rounded-2xl p-8 flex flex-col h-full transition-all duration-300 ${
                  plan.popular 
                    ? 'border-2 border-[#FCD34D] shadow-[0_0_30px_rgba(252,211,77,0.15)] scale-100 lg:scale-105 z-20' 
                    : 'border border-slate-800 hover:border-[#0EA5E9]/50 hover:-translate-y-2 hover:shadow-xl'
                }`}
              >
                {plan.badge && (
                  <div className={`absolute top-0 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-b-lg text-xs font-bold flex items-center gap-2 shadow-lg whitespace-nowrap ${plan.popular ? 'bg-[#FCD34D] text-black' : 'bg-[#0EA5E9] text-white'}`}>
                    <Sparkles size={14} className={plan.popular ? 'text-black' : 'text-white'} />
                    {plan.badge.toUpperCase()}
                  </div>
                )}

                <div className="mb-6 text-center pt-4">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className={`text-sm font-bold ${plan.popular ? 'text-[#FCD34D]' : 'text-[#0EA5E9]'} mb-4 uppercase tracking-wider`}>{plan.duration}</div>
                  
                  <div className="flex justify-center items-start gap-1 mb-2 h-16 relative">
                    <span className="text-2xl text-slate-400 mt-2">$</span>
                    <span className="text-6xl font-extrabold text-white">
                      {plan.price}
                    </span>
                  </div>
                  
                  <div className="h-8 flex items-center justify-center mb-4">
                    {plan.savings && (
                      <div className="text-[#00FF88] text-sm font-bold bg-[#00FF88]/10 px-3 py-1 rounded-full border border-[#00FF88]/20">
                        {plan.savings}
                      </div>
                    )}
                  </div>
                  
                  <p className="text-slate-400 text-sm leading-relaxed min-h-[40px] flex items-center justify-center">
                    {plan.description}
                  </p>
                </div>

                <div className="flex-grow space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className={`p-1 rounded-full mt-0.5 shrink-0 ${plan.popular ? 'bg-[#FCD34D]/20' : 'bg-slate-800'}`}>
                        <Check size={16} className={plan.popular ? 'text-[#FCD34D]' : 'text-slate-400'} />
                      </div>
                      <span className="text-slate-300 text-sm font-medium leading-tight">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-6 border-t border-slate-800">
                  <a href={waLink} target="_blank" rel="noopener noreferrer" className="w-full block">
                    <Button 
                      className={`w-full py-6 text-lg rounded-xl h-[60px] ${
                        plan.popular ? 'btn-golden' : 'btn-sky-blue'
                      }`}
                    >
                      Subscribe Now
                    </Button>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-20 border-t border-slate-800 mt-12 bg-[#1E293B]/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6 glass-card rounded-2xl">
              <Shield className="w-12 h-12 text-[#0EA5E9] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Modern Secure Payment</h3>
              <p className="text-slate-400">Your transactions are encrypted with 2026 AES-256 protocols and 100% secure.</p>
            </div>
            <div className="text-center p-6 glass-card rounded-2xl">
              <Zap className="w-12 h-12 text-[#0EA5E9] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Instant Activation</h3>
              <p className="text-slate-400">Get your credentials immediately after payment without any manual delays.</p>
            </div>
            <div className="text-center p-6 glass-card rounded-2xl">
              <Headphones className="w-12 h-12 text-[#0EA5E9] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">24/7 Priority Support</h3>
              <p className="text-slate-400">We're always here to help you set up or troubleshoot with dedicated rapid response.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
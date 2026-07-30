import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { pricingData } from '@/data/pricingData';

const waLink = "https://wa.me/17867352904";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const PricingTable = ({ billingPeriod = 'monthly' }) => {
  const isYearly = billingPeriod === 'yearly';

  return (
    <section className="py-20 bg-[#0A0A1F] relative overflow-hidden" id="pricing">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#0EA5E9]/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan for your entertainment needs. All plans include full access to premium content.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto items-stretch"
        >
          {pricingData.map((plan) => {
            const currentPricing = isYearly ? plan.yearly || plan : plan.monthly || plan;
            
            return (
              <motion.div
                key={plan.id}
                variants={itemVariants}
                className={`relative bg-[#0F172A] rounded-2xl p-6 lg:p-8 flex flex-col h-full transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl ${
                  plan.popular 
                    ? 'border-2 border-[#FCD34D] shadow-[0_0_30px_rgba(252,211,77,0.15)] hover:shadow-[0_0_40px_rgba(252,211,77,0.3)] z-20' 
                    : 'border border-slate-800 hover:border-[#0EA5E9]/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FCD34D] text-black px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1 shadow-lg whitespace-nowrap z-20">
                    <Star size={14} fill="currentColor" />
                    BEST VALUE
                  </div>
                )}

                <div className="mb-6 text-center pt-2">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className={`text-sm font-bold ${plan.popular ? 'text-[#FCD34D]' : 'text-[#0EA5E9]'} mb-4 uppercase tracking-wider`}>{plan.duration}</div>
                  
                  <div className="flex justify-center items-end gap-1 mb-2">
                    <span className="text-4xl font-extrabold text-white h-12 flex items-center">
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={currentPricing.price}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                        >
                          ${currentPricing.price}
                        </motion.span>
                      </AnimatePresence>
                    </span>
                    <span className="text-gray-400 mb-2">/total</span>
                  </div>
                  
                  <div className="h-6 flex items-center justify-center">
                    {currentPricing.savings ? (
                      <motion.div
                        key={`table-savings-${currentPricing.savings}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex items-center gap-2 text-sm"
                      >
                        {currentPricing.originalPrice && <span className="text-gray-500 line-through">${currentPricing.originalPrice}</span>}
                        <span className="text-green-400 font-semibold bg-green-400/10 px-2 py-0.5 rounded text-xs">
                          {currentPricing.savings}
                        </span>
                      </motion.div>
                    ) : null}
                  </div>
                </div>

                <div className="flex-grow space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check size={20} className={plan.popular ? 'text-[#FCD34D]' : 'text-[#0EA5E9]'} />
                      <span className="text-gray-300 text-sm mt-0.5">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-4 border-t border-slate-800">
                  <a href={waLink} target="_blank" rel="noopener noreferrer" className="w-full block">
                    <Button 
                      className={`w-full py-6 text-lg rounded-xl ${
                        plan.popular ? 'btn-golden' : 'btn-sky-blue'
                      }`}
                    >
                      Subscribe Now
                    </Button>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default PricingTable;
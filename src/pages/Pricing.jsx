import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, Zap, Shield, Lock, Server, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Breadcrumb from '@/components/Breadcrumb';
import EnhancedPricingSection from '@/components/EnhancedPricingSection';

const waLink = "https://wa.me/17867352904";

const Pricing = () => {
  const breadcrumbItems = [{ label: 'Pricing Plans', path: '/pricing' }];

  const allFeatures = [
    '20,000+ Premium Broadcasters & International Content',
    'True 4K & HD Quality Streaming',
    'Works on Smart TVs, Mobile Devices, Streaming Sticks',
    'Anti-Freeze & Zero Buffering Technology',
    'Massive VOD Library with Latest Movies & Shows',
    '99.9% Server Uptime Guarantee',
    '24/7 Dedicated Customer Support',
    'Instant Automated Activation',
  ];

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Best IPTV USA Premium Subscription",
    "description": "Get access to 20,000+ premium live channels and endless VOD content.",
    "brand": {
      "@type": "Brand",
      "name": "Best IPTV USA"
    },
    "offers": {
      "@type": "AggregateOffer",
      "offerCount": "4",
      "lowPrice": "14.00",
      "highPrice": "49.00",
      "priceCurrency": "USD",
      "offers": [
        { "@type": "Offer", "name": "1 Month", "price": "14.00", "priceCurrency": "USD", "availability": "https://schema.org/InStock" },
        { "@type": "Offer", "name": "3 Months", "price": "26.00", "priceCurrency": "USD", "availability": "https://schema.org/InStock" },
        { "@type": "Offer", "name": "6 Months", "price": "37.00", "priceCurrency": "USD", "availability": "https://schema.org/InStock" },
        { "@type": "Offer", "name": "12 Months", "price": "49.00", "priceCurrency": "USD", "availability": "https://schema.org/InStock" }
      ]
    }
  };

  return (
    <>
      <Helmet>
        <title>Pricing & Plans - Best Premium Subscription | Best IPTV USA</title>
        <meta name="description" content="View affordable premium pricing plans at Best IPTV USA. Choose from 1 Month ($14), 3 Months ($26), 6 Months ($37), or 12 Months ($49). No hidden fees." />
        <script type="application/ld+json">
          {JSON.stringify(productSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen pt-32 pb-20 bg-[#0F172A]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mb-8">
             <Breadcrumb items={breadcrumbItems} />
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Affordable <span className="text-[#0066FF]">Premium</span> Subscription Plans
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-6">
              Get the best streaming subscription for your home. Choose the plan that fits your entertainment needs. No hidden fees, cancel anytime.
            </p>
            <div className="inline-flex flex-wrap justify-center items-center gap-4 mb-4">
              <div className="inline-flex items-center gap-2 bg-[#1E293B] border border-slate-800 px-6 py-3 rounded-full shadow-sm">
                <Zap size={20} className="text-[#FF6B35]" />
                <span className="text-white font-semibold">Instant Activation</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-[#1E293B] border border-[#00FF88]/30 px-6 py-3 rounded-full shadow-sm">
                <Shield size={20} className="text-[#00FF88]" />
                <span className="text-white font-semibold">30-Day Money-Back Guarantee</span>
              </div>
            </div>
          </motion.div>
        </div>

        <EnhancedPricingSection />

        <div className="container mx-auto px-4 sm:px-6 mt-16">
          
          {/* Comparison Table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-10">Compare Plan Features</h2>
            <div className="overflow-x-auto bg-[#1E293B] rounded-2xl border border-slate-800 shadow-xl">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="bg-slate-900/50 border-b border-slate-800">
                    <th className="py-5 px-6 font-bold text-white">Features</th>
                    <th className="py-5 px-6 font-bold text-center text-white">1 Month</th>
                    <th className="py-5 px-6 font-bold text-center text-white">3 Months</th>
                    <th className="py-5 px-6 font-bold text-center text-white">6 Months</th>
                    <th className="py-5 px-6 font-bold text-center text-[#0066FF]">12 Months</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {[
                    { feature: 'Price', values: ['$14', '$26', '$37', '$49'] },
                    { feature: '20,000+ Live Channels', values: [true, true, true, true] },
                    { feature: 'VOD Library (Movies/Series)', values: [true, true, true, true] },
                    { feature: '4K/FHD Quality', values: [true, true, true, true] },
                    { feature: 'Connections Included', values: ['1 Device', '1 Device', '1 Device', '2 Devices'] },
                    { feature: 'Support Level', values: ['Standard', 'Standard', 'Priority', 'VIP 24/7'] },
                    { feature: 'Setup Guide', values: [false, false, false, true] },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-slate-800 hover:bg-slate-800/30 transition-colors">
                      <td className="py-4 px-6 text-slate-300 font-medium">{row.feature}</td>
                      {row.values.map((val, j) => (
                        <td key={j} className="py-4 px-6 text-center">
                          {typeof val === 'boolean' ? (
                            val ? <Check className={`mx-auto ${j === 3 ? 'text-[#0066FF]' : 'text-[#00FF88]'}`} size={20} /> 
                                : <X className="mx-auto text-slate-500" size={20} />
                          ) : (
                            <span className={j === 3 ? 'text-[#3B82F6] font-bold' : 'text-white'}>{val}</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                  <tr>
                    <td className="py-6 px-6"></td>
                    <td className="py-6 px-6 text-center">
                      <a href={waLink} target="_blank" rel="noopener noreferrer">
                        <Button className="btn-secondary w-full">Choose</Button>
                      </a>
                    </td>
                    <td className="py-6 px-6 text-center">
                      <a href={waLink} target="_blank" rel="noopener noreferrer">
                        <Button className="btn-secondary w-full">Choose</Button>
                      </a>
                    </td>
                    <td className="py-6 px-6 text-center">
                      <a href={waLink} target="_blank" rel="noopener noreferrer">
                        <Button className="btn-secondary w-full">Choose</Button>
                      </a>
                    </td>
                    <td className="py-6 px-6 text-center">
                      <a href={waLink} target="_blank" rel="noopener noreferrer">
                        <Button className="btn-primary w-full">Best Value</Button>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
             <div className="premium-card p-6 flex items-center gap-4">
               <Lock className="text-[#0066FF] w-12 h-12 flex-shrink-0" />
               <div>
                 <h2 className="text-xl font-bold text-white mb-1">100% Secure Payment</h2>
                 <p className="text-slate-400 text-sm">All transactions are encrypted and secured using banking-level technology.</p>
               </div>
             </div>
             <div className="premium-card p-6 flex items-center gap-4">
               <Server className="text-[#0066FF] w-12 h-12 flex-shrink-0" />
               <div>
                 <h2 className="text-xl font-bold text-white mb-1">99.9% Uptime Guarantee</h2>
                 <p className="text-slate-400 text-sm">Enjoy uninterrupted streaming with our reliable, high-performance servers.</p>
               </div>
             </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="premium-card p-10 mb-16"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              Every Premium Plan Includes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {allFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check size={24} className="text-[#0066FF] flex-shrink-0" />
                  <span className="text-white text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center bg-[#1E293B] p-12 rounded-3xl border border-[#0066FF]/20 bg-gradient-to-tr from-transparent to-[#0066FF]/5 relative overflow-hidden shadow-xl"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0066FF]/10 blur-[100px] pointer-events-none rounded-full"></div>
            <Shield size={64} className="text-[#0066FF] mx-auto mb-6 relative z-10" />
            <h3 className="text-3xl font-bold text-white mb-4 relative z-10">
              Risk-Free 30-Day Money-Back Guarantee
            </h3>
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto text-lg leading-relaxed relative z-10">
              Try the best premium subscription completely risk-free. If you experience any issues or are not completely satisfied within your first 30 days, contact our support team for a full refund.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <a href={waLink} target="_blank" rel="noopener noreferrer">
                <Button className="btn-premium h-[60px] px-8 text-lg">
                  Subscribe Now
                </Button>
              </a>
              <Link to="/faq">
                <Button variant="outline" className="bg-slate-800/50 border-slate-700 text-white hover:bg-slate-800 h-[60px] px-8 text-lg rounded-xl transition-all">
                  Read FAQs
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
import React from 'react';
import { Check, X } from 'lucide-react';
import { motion } from 'framer-motion';

const PriceComparisonTable = () => {
  const comparisonData = [
    {
      state: 'Florida',
      cableProvider: 'Comcast Xfinity',
      cablePrice: 89.99,
      iptvPrice: 19.99,
      savings: 70.00,
      cableFeatures: ['Limited Channels', 'HD Only', 'Contracts Required'],
      iptvFeatures: ['50,000+ Channels', '4K Streaming', 'No Contracts']
    },
    {
      state: 'Texas',
      cableProvider: 'AT&T U-verse',
      cablePrice: 84.99,
      iptvPrice: 19.99,
      savings: 65.00,
      cableFeatures: ['Limited Channels', 'HD Only', 'Contracts Required'],
      iptvFeatures: ['50,000+ Channels', '4K Streaming', 'No Contracts']
    },
    {
      state: 'California',
      cableProvider: 'Spectrum',
      cablePrice: 99.99,
      iptvPrice: 19.99,
      savings: 80.00,
      cableFeatures: ['Limited Channels', 'HD Only', 'Contracts Required'],
      iptvFeatures: ['50,000+ Channels', '4K Streaming', 'No Contracts']
    }
  ];

  return (
    <div className="w-full overflow-hidden">
      {/* Desktop & Tablet View */}
      <div className="hidden md:block overflow-x-auto rounded-xl border border-slate-800 shadow-2xl bg-[#1E293B]/50 backdrop-blur-sm">
        <table className="w-full min-w-[700px] price-comparison-table">
          <thead>
            <tr className="bg-[#0F172A] border-b-2 border-[#0066FF]">
              <th className="py-5 px-6 text-left text-sm font-bold text-white uppercase tracking-wider">State</th>
              <th className="py-5 px-6 text-left text-sm font-bold text-white uppercase tracking-wider">Cable Provider</th>
              <th className="py-5 px-6 text-center text-sm font-bold text-white uppercase tracking-wider">Cable Price</th>
              <th className="py-5 px-6 text-center text-sm font-bold text-white uppercase tracking-wider relative">
                <div className="flex flex-col items-center gap-1">
                  <span>IPTV Price</span>
                  <span className="absolute -top-2 right-2 bg-gradient-to-r from-[#25D366] to-[#1DA851] text-white text-[10px] font-black px-3 py-1 rounded-full shadow-lg animate-pulse">
                    BEST VALUE
                  </span>
                </div>
              </th>
              <th className="py-5 px-6 text-center text-sm font-bold text-white uppercase tracking-wider">Monthly Savings</th>
              <th className="py-5 px-6 text-center text-sm font-bold text-white uppercase tracking-wider">Features</th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((row, index) => (
              <motion.tr 
                key={row.state}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`border-b border-slate-800/50 transition-all duration-300 hover:bg-[#1E293B] hover:shadow-lg ${
                  index % 2 === 0 ? 'bg-[#0F172A]/30' : 'bg-[#1E293B]/30'
                }`}
              >
                <td className="py-4 px-6 text-white font-semibold">{row.state}</td>
                <td className="py-4 px-6 text-slate-300">{row.cableProvider}</td>
                <td className="py-4 px-6 text-center">
                  <span className="text-red-400 font-bold text-lg line-through decoration-red-500/50">
                    ${row.cablePrice.toFixed(2)}
                  </span>
                </td>
                <td className="py-4 px-6 text-center bg-[#25D366]/10 border-l-2 border-r-2 border-[#25D366]/30">
                  <span className="text-[#25D366] font-black text-2xl drop-shadow-[0_0_8px_rgba(37,211,102,0.5)]">
                    ${row.iptvPrice.toFixed(2)}
                  </span>
                </td>
                <td className="py-4 px-6 text-center">
                  <span className="text-[#25D366] font-black text-xl">
                    ${row.savings.toFixed(2)}
                  </span>
                  <div className="text-xs text-slate-400 mt-1">per month</div>
                </td>
                <td className="py-4 px-6">
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-2">
                      <Check className="text-[#25D366] flex-shrink-0" size={16} />
                      <span className="text-xs text-slate-300">50K+ Channels</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="text-[#25D366] flex-shrink-0" size={16} />
                      <span className="text-xs text-slate-300">4K Streaming</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="text-[#25D366] flex-shrink-0" size={16} />
                      <span className="text-xs text-slate-300">No Contracts</span>
                    </div>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile View - Card Layout */}
      <div className="md:hidden space-y-6">
        {comparisonData.map((row, index) => (
          <motion.div
            key={row.state}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-[#1E293B] rounded-xl border border-slate-800 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <div className="bg-[#0F172A] px-6 py-4 border-b border-slate-800">
              <h3 className="text-xl font-bold text-white">{row.state}</h3>
              <p className="text-sm text-slate-400 mt-1">{row.cableProvider}</p>
            </div>
            
            <div className="p-6 space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-[#0F172A] rounded-lg border border-slate-800">
                  <div className="text-xs text-slate-400 mb-2 uppercase font-semibold">Cable Price</div>
                  <div className="text-red-400 font-bold text-xl line-through decoration-red-500/50">
                    ${row.cablePrice.toFixed(2)}
                  </div>
                </div>
                
                <div className="text-center p-4 bg-[#25D366]/10 rounded-lg border-2 border-[#25D366]/30 relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#25D366] to-[#1DA851] text-white text-[9px] font-black px-2 py-0.5 rounded-full shadow-lg">
                    BEST VALUE
                  </div>
                  <div className="text-xs text-slate-400 mb-2 uppercase font-semibold">IPTV Price</div>
                  <div className="text-[#25D366] font-black text-2xl drop-shadow-[0_0_8px_rgba(37,211,102,0.5)]">
                    ${row.iptvPrice.toFixed(2)}
                  </div>
                </div>
              </div>

              <div className="text-center p-4 bg-gradient-to-r from-[#25D366]/10 to-[#1DA851]/10 rounded-lg border border-[#25D366]/20">
                <div className="text-xs text-slate-400 mb-2 uppercase font-semibold">You Save</div>
                <div className="text-[#25D366] font-black text-3xl">
                  ${row.savings.toFixed(2)}
                </div>
                <div className="text-xs text-slate-400 mt-1">per month</div>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-800">
                <div className="text-sm font-semibold text-white mb-3">IPTV Features:</div>
                {row.iptvFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#25D366]/20 rounded-full flex items-center justify-center">
                      <Check className="text-[#25D366]" size={14} />
                    </div>
                    <span className="text-sm text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-800">
                <div className="text-sm font-semibold text-white mb-3">Cable Limitations:</div>
                {row.cableFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center">
                      <X className="text-red-400" size={14} />
                    </div>
                    <span className="text-sm text-slate-400">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PriceComparisonTable;
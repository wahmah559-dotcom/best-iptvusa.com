import React from 'react';
import { Check, X, TrendingDown } from 'lucide-react';
import { motion } from 'framer-motion';

const PricingComparisonTable = () => {
  const features = [
    {
      feature: 'Monthly Price',
      iptv: '$15.00',
      xfinity: '$89.99',
      spectrum: '$99.99',
      type: 'price'
    },
    {
      feature: 'Channel Count',
      iptv: '50,000+',
      xfinity: '125-185',
      spectrum: '125-200',
      type: 'text'
    },
    {
      feature: '4K/8K Streaming',
      iptv: true,
      xfinity: 'Limited',
      spectrum: 'Limited',
      type: 'mixed'
    },
    {
      feature: 'Video on Demand',
      iptv: 'Unlimited',
      xfinity: 'Limited',
      spectrum: 'Limited',
      type: 'text'
    },
    {
      feature: 'No Contracts',
      iptv: true,
      xfinity: false,
      spectrum: false,
      type: 'boolean'
    },
    {
      feature: 'Installation Fee',
      iptv: '$0',
      xfinity: '$100-$150',
      spectrum: '$100-$150',
      type: 'text'
    },
    {
      feature: 'Equipment Rental',
      iptv: '$0',
      xfinity: '$15/month',
      spectrum: '$15/month',
      type: 'text'
    },
    {
      feature: 'Streaming Quality',
      iptv: 'Up to 8K',
      xfinity: 'Up to 4K',
      spectrum: 'Up to 4K',
      type: 'text'
    },
    {
      feature: 'Device Compatibility',
      iptv: 'All Devices',
      xfinity: 'Limited',
      spectrum: 'Limited',
      type: 'text'
    },
    {
      feature: 'Simultaneous Streams',
      iptv: 'Unlimited',
      xfinity: '2-3',
      spectrum: '2-3',
      type: 'text'
    },
    {
      feature: 'International Channels',
      iptv: true,
      xfinity: 'Extra Cost',
      spectrum: 'Extra Cost',
      type: 'mixed'
    },
    {
      feature: 'Sports Channels',
      iptv: 'NFL, NBA, MLB, NHL',
      xfinity: 'Extra Cost',
      spectrum: 'Extra Cost',
      type: 'text'
    },
    {
      feature: 'Movie Channels',
      iptv: 'Unlimited',
      xfinity: 'Extra Cost',
      spectrum: 'Extra Cost',
      type: 'text'
    },
    {
      feature: '24/7 Support',
      iptv: true,
      xfinity: 'Limited Hours',
      spectrum: 'Limited Hours',
      type: 'mixed'
    },
    {
      feature: 'Money-Back Guarantee',
      iptv: '30 Days',
      xfinity: 'None',
      spectrum: 'None',
      type: 'text'
    }
  ];

  const renderCell = (value, type, isIPTV = false) => {
    if (type === 'boolean') {
      return value ? (
        <div className="flex items-center justify-center">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isIPTV ? 'bg-[#25D366]/20' : 'bg-red-500/20'}`}>
            {value ? <Check className="text-[#25D366]" size={18} /> : <X className="text-red-400" size={18} />}
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
            <X className="text-red-400" size={18} />
          </div>
        </div>
      );
    }

    if (type === 'price') {
      if (isIPTV) {
        return <span className="text-[#25D366] font-black text-xl">{value}</span>;
      }
      return <span className="text-red-400 font-bold text-lg">{value}</span>;
    }

    if (type === 'mixed' && value === true) {
      return (
        <div className="flex items-center justify-center">
          <div className="w-8 h-8 rounded-full bg-[#25D366]/20 flex items-center justify-center">
            <Check className="text-[#25D366]" size={18} />
          </div>
        </div>
      );
    }

    return <span className={isIPTV ? 'text-white font-semibold' : 'text-slate-400'}>{value}</span>;
  };

  return (
    <div className="w-full overflow-hidden">
      {/* Desktop & Tablet View */}
      <div className="hidden md:block overflow-x-auto rounded-xl border border-slate-800 shadow-2xl bg-[#1E293B]/50 backdrop-blur-sm">
        <table className="w-full min-w-[700px] comparison-table">
          <thead>
            <tr className="bg-[#0F172A] border-b-2 border-[#0066FF]">
              <th className="py-5 px-6 text-left text-sm font-bold text-white uppercase tracking-wider w-1/4">
                Feature
              </th>
              <th className="py-5 px-6 text-center text-sm font-bold text-white uppercase tracking-wider w-1/4 relative">
                <div className="flex flex-col items-center gap-2">
                  <span>IPTV USA</span>
                  <span className="absolute -top-2 bg-gradient-to-r from-[#25D366] to-[#1DA851] text-white text-[10px] font-black px-3 py-1 rounded-full shadow-lg animate-pulse">
                    BEST VALUE
                  </span>
                </div>
              </th>
              <th className="py-5 px-6 text-center text-sm font-bold text-white uppercase tracking-wider w-1/4">
                Xfinity
              </th>
              <th className="py-5 px-6 text-center text-sm font-bold text-white uppercase tracking-wider w-1/4">
                Spectrum
              </th>
            </tr>
          </thead>
          <tbody>
            {features.map((row, index) => (
              <motion.tr
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                className={`border-b border-slate-800/50 transition-all duration-300 hover:bg-[#1E293B] ${
                  index % 2 === 0 ? 'bg-[#0F172A]/30' : 'bg-[#1E293B]/30'
                }`}
              >
                <td className="py-4 px-6 text-white font-medium">{row.feature}</td>
                <td className="py-4 px-6 text-center bg-[#25D366]/5 border-l border-r border-[#25D366]/20">
                  {renderCell(row.iptv, row.type, true)}
                </td>
                <td className="py-4 px-6 text-center">
                  {renderCell(row.xfinity, row.type, false)}
                </td>
                <td className="py-4 px-6 text-center">
                  {renderCell(row.spectrum, row.type, false)}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile View - Card Layout */}
      <div className="md:hidden space-y-6">
        {features.map((row, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="bg-[#1E293B] rounded-xl border border-slate-800 overflow-hidden shadow-xl"
          >
            <div className="bg-[#0F172A] px-4 py-3 border-b border-slate-800">
              <h4 className="text-white font-bold text-sm">{row.feature}</h4>
            </div>
            
            <div className="p-4 space-y-3">
              <div className="flex justify-between items-center p-3 bg-[#25D366]/5 rounded-lg border border-[#25D366]/20">
                <span className="text-xs text-slate-400 font-semibold">IPTV USA</span>
                <div>{renderCell(row.iptv, row.type, true)}</div>
              </div>
              
              <div className="flex justify-between items-center p-3 bg-[#0F172A] rounded-lg">
                <span className="text-xs text-slate-400 font-semibold">Xfinity</span>
                <div>{renderCell(row.xfinity, row.type, false)}</div>
              </div>
              
              <div className="flex justify-between items-center p-3 bg-[#0F172A] rounded-lg">
                <span className="text-xs text-slate-400 font-semibold">Spectrum</span>
                <div>{renderCell(row.spectrum, row.type, false)}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PricingComparisonTable;
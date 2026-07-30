import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, TrendingDown, Award } from 'lucide-react';

const AnnualSavingsTable = () => {
  const costs = {
    iptv: {
      monthly: 15.00,
      annual: 180.00,
      setup: 0,
      equipment: 0,
      taxes: 0,
      total: 180.00
    },
    xfinity: {
      monthly: 89.99,
      annual: 1079.88,
      setup: 150,
      equipment: 180, // $15/month x 12
      taxes: 150, // Estimated
      total: 1559.88
    },
    spectrum: {
      monthly: 99.99,
      annual: 1199.88,
      setup: 150,
      equipment: 180, // $15/month x 12
      taxes: 150, // Estimated
      total: 1679.88
    }
  };

  const rows = [
    { label: 'Monthly Cost', iptv: '$15.00', xfinity: '$89.99', spectrum: '$99.99' },
    { label: 'Annual Cost (12 months)', iptv: '$180.00', xfinity: '$1,079.88', spectrum: '$1,199.88' },
    { label: 'Installation/Setup Fee', iptv: '$0', xfinity: '$150', spectrum: '$150' },
    { label: 'Equipment Rental (12 months)', iptv: '$0', xfinity: '$180', spectrum: '$180' },
    { label: 'Taxes & Hidden Fees (est.)', iptv: '$0', xfinity: '$150', spectrum: '$150' },
    { label: 'Total Cost of Ownership', iptv: '$180.00', xfinity: '$1,559.88', spectrum: '$1,679.88', highlight: true },
    { label: 'Annual Savings vs IPTV', iptv: '—', xfinity: '-$1,379.88', spectrum: '-$1,499.88', savings: true },
    { label: '5-Year Savings', iptv: '—', xfinity: '-$6,899.40', spectrum: '-$7,499.40', savings: true, big: true }
  ];

  return (
    <div className="w-full overflow-hidden">
      {/* Desktop & Tablet View */}
      <div className="hidden md:block overflow-x-auto rounded-xl border border-slate-800 shadow-2xl bg-[#1E293B]/50 backdrop-blur-sm">
        <table className="w-full min-w-[700px] savings-table">
          <thead>
            <tr className="bg-[#0F172A] border-b-2 border-[#0066FF]">
              <th className="py-5 px-6 text-left text-sm font-bold text-white uppercase tracking-wider w-2/5">
                Cost Breakdown
              </th>
              <th className="py-5 px-6 text-center text-sm font-bold text-white uppercase tracking-wider w-1/5 relative">
                <div className="flex flex-col items-center gap-2">
                  <span>IPTV USA</span>
                  <div className="flex items-center gap-1 text-[10px] bg-[#25D366]/20 text-[#25D366] px-2 py-1 rounded-full">
                    <Award size={12} />
                    <span>LOWEST</span>
                  </div>
                </div>
              </th>
              <th className="py-5 px-6 text-center text-sm font-bold text-white uppercase tracking-wider w-1/5">
                Xfinity
              </th>
              <th className="py-5 px-6 text-center text-sm font-bold text-white uppercase tracking-wider w-1/5">
                Spectrum
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <motion.tr
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className={`border-b border-slate-800/50 transition-all duration-300 hover:bg-[#1E293B] ${
                  row.highlight ? 'bg-[#0066FF]/10 border-t-2 border-b-2 border-[#0066FF]/30' : 
                  index % 2 === 0 ? 'bg-[#0F172A]/30' : 'bg-[#1E293B]/30'
                }`}
              >
                <td className={`py-4 px-6 font-semibold ${row.highlight || row.savings ? 'text-white' : 'text-slate-300'}`}>
                  {row.label}
                </td>
                <td className="py-4 px-6 text-center bg-[#25D366]/5">
                  <span className={`${
                    row.savings ? 'text-slate-500' : 
                    row.highlight ? 'text-[#25D366] font-black text-xl' : 
                    'text-[#25D366] font-bold text-lg'
                  }`}>
                    {row.iptv}
                  </span>
                </td>
                <td className="py-4 px-6 text-center">
                  <span className={`${
                    row.savings ? 'text-red-400 font-bold' : 
                    row.highlight ? 'text-red-400 font-bold text-lg' : 
                    'text-slate-300'
                  }`}>
                    {row.xfinity}
                  </span>
                </td>
                <td className="py-4 px-6 text-center">
                  <span className={`${
                    row.savings ? 'text-red-400 font-bold' : 
                    row.highlight ? 'text-red-400 font-bold text-lg' : 
                    'text-slate-300'
                  }`}>
                    {row.spectrum}
                  </span>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile View - Card Layout */}
      <div className="md:hidden space-y-6">
        {rows.map((row, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className={`rounded-xl border overflow-hidden shadow-xl ${
              row.highlight ? 'bg-[#0066FF]/10 border-[#0066FF]/50' : 'bg-[#1E293B] border-slate-800'
            }`}
          >
            <div className="bg-[#0F172A] px-4 py-3 border-b border-slate-800">
              <h4 className="text-white font-bold text-sm">{row.label}</h4>
            </div>
            
            <div className="p-4 space-y-3">
              <div className="flex justify-between items-center p-3 bg-[#25D366]/5 rounded-lg border border-[#25D366]/20">
                <span className="text-xs text-slate-400 font-semibold">IPTV USA</span>
                <span className={`${
                  row.savings ? 'text-slate-500' : 
                  row.highlight ? 'text-[#25D366] font-black text-lg' : 
                  'text-[#25D366] font-bold'
                }`}>
                  {row.iptv}
                </span>
              </div>
              
              <div className="flex justify-between items-center p-3 bg-[#0F172A] rounded-lg">
                <span className="text-xs text-slate-400 font-semibold">Xfinity</span>
                <span className={`${row.savings ? 'text-red-400 font-bold' : 'text-slate-300'}`}>
                  {row.xfinity}
                </span>
              </div>
              
              <div className="flex justify-between items-center p-3 bg-[#0F172A] rounded-lg">
                <span className="text-xs text-slate-400 font-semibold">Spectrum</span>
                <span className={`${row.savings ? 'text-red-400 font-bold' : 'text-slate-300'}`}>
                  {row.spectrum}
                </span>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Savings Highlight */}
        <div className="bg-gradient-to-r from-[#25D366]/20 to-[#1DA851]/20 rounded-xl p-6 border-2 border-[#25D366]/30 text-center">
          <TrendingDown className="mx-auto mb-3 text-[#25D366]" size={32} />
          <h3 className="text-2xl font-black text-white mb-2">Save Up To</h3>
          <p className="text-4xl font-black text-[#25D366] mb-2">$1,500/year</p>
          <p className="text-sm text-slate-300">By switching from cable to IPTV USA</p>
        </div>
      </div>
    </div>
  );
};

export default AnnualSavingsTable;
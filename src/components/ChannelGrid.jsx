import React from 'react';
import { motion } from 'framer-motion';
import { Tv, Radio, Trophy } from 'lucide-react';

const ChannelGrid = ({ channels, title, categoryBadge }) => {
  const getCategoryColor = (category) => {
    const colors = {
      'News': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      'Sports': 'bg-red-500/20 text-red-400 border-red-500/30',
      'Entertainment': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      'Regional': 'bg-green-500/20 text-green-400 border-green-500/30',
      'Spanish': 'bg-orange-500/20 text-orange-400 border-orange-500/30',
      'Cable': 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30'
    };
    return colors[category] || 'bg-slate-500/20 text-slate-400 border-slate-500/30';
  };

  const getCategoryIcon = (category) => {
    if (category === 'News') return <Radio size={14} />;
    if (category === 'Sports') return <Trophy size={14} />;
    return <Tv size={14} />;
  };

  return (
    <div className="mb-12">
      {title && (
        <div className="flex items-center gap-3 mb-6">
          <h3 className="text-2xl md:text-3xl font-bold text-white">{title}</h3>
          {categoryBadge && (
            <span className="text-xs bg-[#0066FF]/20 text-[#3B82F6] px-3 py-1 rounded-full border border-[#0066FF]/30 font-semibold">
              {categoryBadge}
            </span>
          )}
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {channels.map((channel, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="channel-card bg-[#1E293B] rounded-lg p-4 border border-slate-800 hover:border-[#0066FF]/50 hover:shadow-lg hover:shadow-[#0066FF]/10 transition-all duration-300 group"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#0066FF]/10 rounded-full flex items-center justify-center group-hover:bg-[#0066FF]/20 transition-colors">
                  <Tv size={16} className="text-[#0066FF]" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm group-hover:text-[#3B82F6] transition-colors">
                    {channel.name}
                  </h4>
                  {channel.number && (
                    <span className="text-xs text-slate-500">Ch {channel.number}</span>
                  )}
                </div>
              </div>
              <div className={`flex items-center gap-1 text-xs px-2 py-1 rounded-full border ${getCategoryColor(channel.category)}`}>
                {getCategoryIcon(channel.category)}
                <span>{channel.category}</span>
              </div>
            </div>
            
            {channel.description && (
              <p className="text-slate-400 text-xs leading-relaxed">
                {channel.description}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ChannelGrid;
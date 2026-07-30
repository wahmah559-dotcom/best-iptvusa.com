import React from 'react';
import { motion } from 'framer-motion';
import { Tv, Trophy, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Link } from 'react-router-dom';

const NBALiveSection = () => {
  const { toast } = useToast();

  const handleWatchSports = () => {
    toast({
      title: "Live Stream Encrypted 🚧",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const teams = [
    {
      name: 'Elite Division Top Tier',
      description: 'Catch the top squads live from their home arenas in stunning HD.',
      image: 'https://images.unsplash.com/photo-1651101892236-ccf3a9fb2c2e'
    },
    {
      name: 'Championship Contenders',
      description: 'Watch the historic rivalries unfold every game night.',
      image: 'https://images.unsplash.com/photo-1649872867891-9e39bfff545f'
    },
    {
      name: 'Regional Leaders',
      description: 'Stream the top athletes lighting up the field all season long.',
      image: 'https://images.unsplash.com/photo-1649871766874-5692baf18a2a'
    },
    {
      name: 'National Powerhouses',
      description: 'Experience the intense culture and dominant defensive plays live.',
      image: 'https://images.unsplash.com/photo-1559441094-603ca0cabd69'
    },
    {
      name: 'Premier Standouts',
      description: 'Don\'t miss a single highlight from the finest superstars.',
      image: 'https://images.unsplash.com/photo-1696954895441-ab130ae6c5ec'
    },
    {
      name: 'Division Challengers',
      description: 'Feel the energy of the crowd as the top contenders stampede the league.',
      image: 'https://images.unsplash.com/photo-1651101892236-ccf3a9fb2c2e'
    }
  ];

  return (
    <section id="pro-sports-live" className="py-24 bg-gradient-to-b from-[#0F172A] to-[#0A0A1F] border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Header Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 mb-4 bg-orange-500/20 text-orange-400 px-4 py-1.5 rounded-full font-bold uppercase tracking-wider text-sm border border-orange-500/30">
              <Trophy size={16} /> Live Sports Broadcasts
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Watch Pro Sports Live - <span className="text-[#0C0BBD]">Premium Stream</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Never miss a crucial moment. Stream every regular season match, the playoffs, and the championship finals with zero blackouts. Enjoy multi-game viewing and crystal-clear broadcasts exclusive to our comprehensive packages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={handleWatchSports} className="btn-primary text-lg px-8 py-6">
                <Tv size={20} className="mr-2" /> Watch Live Now
              </Button>
              <Link to="/pricing">
                <Button className="btn-secondary text-lg px-8 py-6">
                  Get Premium Pass
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="relative"
          >
             <div className="absolute inset-0 bg-[#0C0BBD] blur-[100px] opacity-20 rounded-full" />
             <div className="glass-card p-6 rounded-3xl relative z-10 border border-white/10 shadow-2xl">
               <div className="aspect-video rounded-2xl overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1559441094-603ca0cabd69" 
                    alt="Live Professional Sports Action Streaming"
                    loading="lazy" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded flex items-center gap-2 animate-pulse">
                    <div className="w-2 h-2 bg-white rounded-full" /> LIVE
                  </div>
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-20">
                     <h3 className="text-white font-bold text-2xl mb-1">Tonight's Matchup</h3>
                     <p className="text-gray-300 flex items-center gap-2">
                       <Sparkles size={16} className="text-[#0C0BBD]" /> Streaming in Highest Quality
                     </p>
                  </div>
               </div>
             </div>
          </motion.div>
        </div>

        {/* Teams Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teams.map((team, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative h-48 rounded-2xl overflow-hidden cursor-pointer"
              onClick={handleWatchSports}
            >
              <img 
                src={team.image} 
                alt={`${team.name} Live Stream`} 
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A1F] via-transparent to-transparent opacity-90" />
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {team.name}
                </h3>
                <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 line-clamp-2">
                  {team.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default NBALiveSection;
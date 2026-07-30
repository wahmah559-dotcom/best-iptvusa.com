import React from 'react';
import { motion } from 'framer-motion';
import { Baby, Clapperboard, Compass, Film, Globe, Newspaper, Trophy } from 'lucide-react';

const categories = [
  {
    name: 'Sports',
    desc: 'Live leagues, PPV events & 24/7 sports coverage',
    icon: Trophy,
    accent: '#3B82F6',
  },
  {
    name: 'Movies',
    desc: 'Blockbusters, classics & new releases',
    icon: Film,
    accent: '#A855F7',
  },
  {
    name: 'Kids',
    desc: 'Family-friendly shows and cartoons',
    icon: Baby,
    accent: '#F59E0B',
  },
  {
    name: 'News',
    desc: 'Local and global news, live and on demand',
    icon: Newspaper,
    accent: '#F87171',
  },
  {
    name: 'Entertainment',
    desc: 'Reality TV, talk shows & prime-time series',
    icon: Clapperboard,
    accent: '#22D3EE',
  },
  {
    name: 'Documentaries',
    desc: 'Nature, history, true crime & science',
    icon: Compass,
    accent: '#34D399',
  },
  {
    name: 'International',
    desc: 'Channels from every corner of the world',
    icon: Globe,
    accent: '#818CF8',
  },
];

const ContentLibrarySection = () => {
  return (
    <section className="bg-[#05070B] py-24" id="content-library">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <h2 className="mb-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            A Library Built for Every Mood
          </h2>
          <p className="text-lg text-slate-400">
            55,000+ live channels and 150,000+ movies &amp; series, organized the way you actually watch.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.06 }}
                whileHover={{ y: -6 }}
                className="group relative h-52 overflow-hidden rounded-2xl border border-white/10 bg-[#0B1120]"
              >
                <div
                  className="absolute inset-0 opacity-[0.16] transition-opacity duration-500 group-hover:opacity-[0.28]"
                  style={{
                    backgroundImage: `radial-gradient(circle at 30% 20%, ${category.accent}, transparent 65%)`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05070B] via-transparent to-transparent" />

                <Icon
                  size={72}
                  strokeWidth={1.25}
                  className="absolute -right-3 -top-3 text-white/[0.06] transition-transform duration-500 group-hover:scale-110"
                />

                <div className="relative z-10 flex h-full flex-col justify-end p-6">
                  <div
                    className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{ backgroundColor: `${category.accent}1A`, color: category.accent }}
                  >
                    <Icon size={18} />
                  </div>
                  <h3 className="mb-1 text-lg font-bold text-white">{category.name}</h3>
                  <p className="text-sm leading-snug text-slate-400">{category.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContentLibrarySection;

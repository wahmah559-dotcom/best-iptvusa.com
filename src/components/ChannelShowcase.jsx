import React from 'react';
import { motion } from 'framer-motion';

const ChannelShowcase = () => {
  const channels = [
    {
      name: 'Premium Broadcasts',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113',
      alt: 'Various high definition platforms'
    },
    {
      name: 'Entertainment Networks',
      image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6',
      alt: 'Entertainment programming'
    },
    {
      name: 'Live Sports',
      image: 'https://images.unsplash.com/photo-1615986200762-a1ed9610d3b1',
      alt: 'Athletic networks'
    },
    {
      name: 'Global News',
      image: 'https://images.unsplash.com/photo-1495020689067-958852a7765e',
      alt: 'Worldwide news reporting'
    },
    {
      name: 'Major Features',
      image: 'https://images.unsplash.com/photo-1586899028174-e7098604235b',
      alt: 'Major television features'
    },
    {
      name: 'Family Content',
      image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300',
      alt: 'Kids and family viewing'
    },
    {
      name: 'Documentary Series',
      image: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606',
      alt: 'Educational and nature content'
    },
    {
      name: 'Music & Audio',
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745',
      alt: 'Music video broadcasts'
    },
    {
      name: 'International Feeds',
      image: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70',
      alt: 'Global broadcasting'
    },
    {
      name: 'Lifestyle Programs',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf',
      alt: 'Lifestyle and reality shows'
    }
  ];

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-20 bg-[#0A0A1F]">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Massive Array of Options
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Experience the ultimate entertainment with our vast selection of premium content categories.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6"
        >
          {channels.map((channel, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative aspect-video rounded-xl overflow-hidden glass-card cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(12,11,189,0.5)]"
            >
              <img
                src={channel.image}
                alt={channel.alt}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A1F] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-semibold text-center text-sm md:text-base drop-shadow-md">
                  {channel.name}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ChannelShowcase;
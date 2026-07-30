import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Tv, Sparkles, Zap, Globe, Smartphone, Headphones, Film, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ChannelShowcase from '@/components/ChannelShowcase';
import Breadcrumb from '@/components/Breadcrumb';

const Features = () => {
  const breadcrumbItems = [{ label: 'Premium Features', path: '/features' }];

  const features = [
    {
      icon: <Tv size={48} />,
      title: 'Massive Entertainment Library',
      description: 'Access an extensive library of live broadcasts from around the world. Plus, enjoy thousands of movies, series, and documentaries on demand. Never run out of things to watch.',
      highlights: ['Live Global Content', 'Extensive VOD Library', 'Latest Cinema Releases', 'Classic Entertainment'],
    },
    {
      icon: <Trophy size={48} />,
      title: 'Ultimate Content: Sports, Movies, News',
      description: 'Get premium access to major broadcasters including top sports networks, premium entertainment brands, national news coverage, and international programming.',
      highlights: ['Major Broadcasters', 'Premium Sports Networks', 'Entertainment Feeds', 'Global News Coverage'],
    },
    {
      icon: <Sparkles size={48} />,
      title: 'True HD Quality Streaming',
      description: 'Experience crystal-clear viewing in stunning high definition. Our advanced video compression technology ensures the best possible picture quality, automatically adjusting to your network speed.',
      highlights: ['High Resolution', 'Crisp Quality', 'Auto-Bitrate Adjustment', 'Color Rich Content'],
    },
    {
      icon: <Zap size={48} />,
      title: 'Optimized Playback Technology',
      description: 'Say goodbye to frustrating lag during crucial moments. Our premium streaming service utilizes an optimized infrastructure and global delivery network to ensure smooth playback even during peak hours.',
      highlights: ['Smooth Playback', 'Instant Loading Times', 'Premium Global Network', 'High-Bandwidth Systems'],
    },
    {
      icon: <Globe size={48} />,
      title: 'Universal Multi-Device Support',
      description: 'Watch anywhere, anytime on your preferred device. Our service is fully compatible with modern displays, mobile devices, tablets, dedicated streaming hardware, and web browsers.',
      highlights: ['Display Apps', 'Mobile Ready', 'Hardware Compatible', 'Multi-Screen Viewing'],
    },
    {
      icon: <Headphones size={48} />,
      title: 'Dedicated Customer Support',
      description: 'We believe the best subscription requires the best support. Our expert technical team is available around the clock to assist you with installation, troubleshooting, or billing questions.',
      highlights: ['Available Always', 'Priority Messaging', 'Expert Technical Team', 'Fast Response Times'],
    },
  ];

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Premium Streaming Features",
    "description": "Explore the advanced features that make us the best streaming provider.",
    "itemListElement": features.map((feature, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": feature.title,
      "description": feature.description
    }))
  };

  return (
    <>
      <Helmet>
        <title>Premium Features - Quality Streaming | Best IPTV USA</title>
        <meta name="description" content="Discover premium streaming features: high-quality playback, massive live coverage, extensive on-demand content, and multi-device support." />
        <script type="application/ld+json">
          {JSON.stringify(itemListSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mb-8">
             <Breadcrumb items={breadcrumbItems} />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Premium Features & Entertainment
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore the advanced features that make us the top provider. Enjoy unrivaled quality, massive content variety, and rock-solid reliability.
            </p>
          </motion.div>

          <div className="space-y-16 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="glass-card p-10 rounded-3xl border border-white/5 hover:border-[#0C0BBD]/50 transition-colors duration-300">
                    <div className="text-[#0C0BBD] mb-6">{feature.icon}</div>
                    <h2 className="text-3xl font-bold text-white mb-4">{feature.title}</h2>
                    <p className="text-gray-300 mb-8 text-lg leading-relaxed">{feature.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {feature.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-3 bg-white/5 p-3 rounded-lg">
                          <div className="w-2 h-2 bg-[#0C0BBD] rounded-full flex-shrink-0" />
                          <span className="text-gray-200 font-medium">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="relative h-72 lg:h-[450px] rounded-3xl overflow-hidden shadow-2xl">
                    {index === 0 && (
                      <img
                        src="https://images.unsplash.com/photo-1610534005634-c469a3bacad5"
                        alt="Massive live broadcast and VOD library interface"
                        loading="lazy"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                    )}
                    {index === 2 && (
                      <img
                        src="https://images.unsplash.com/photo-1593784991095-a205069470b6"
                        alt="High quality viewing experience"
                        loading="lazy"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                    )}
                    {index !== 0 && index !== 2 && (
                      <div className="w-full h-full bg-gradient-to-br from-[#0C0BBD] to-[#4F46E5] flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-black/20" />
                        <div className="text-white text-center relative z-10 p-8">
                          <div className="mb-6 flex justify-center scale-150 opacity-80">{feature.icon}</div>
                          <p className="text-3xl font-bold max-w-md mx-auto leading-tight">{feature.title}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <ChannelShowcase />

        <div className="container mx-auto px-4 sm:px-6 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center glass-card p-14 rounded-3xl"
          >
            <Film size={64} className="text-[#0C0BBD] mx-auto mb-6" />
            <h3 className="text-4xl font-bold text-white mb-6">
              Ready to Upgrade to the Best Viewing Experience?
            </h3>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Join satisfied customers enjoying premium broadcasts, sports programming, and cinema in flawless quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link to="/pricing">
                <Button className="btn-primary text-xl px-10 py-6">
                  View Access Plans
                </Button>
              </Link>
              <Link to="/faq">
                <Button className="btn-secondary text-xl px-10 py-6">
                  Have Questions? Read FAQ
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Features;
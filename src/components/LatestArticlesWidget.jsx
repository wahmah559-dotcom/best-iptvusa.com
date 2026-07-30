import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BlogCard from '@/components/BlogCard';
import { blogArticles } from '@/data/blogArticles';

const LatestArticlesWidget = () => {
  const latestArticles = [...blogArticles]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  return (
    <section className="py-24 bg-[#050511] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#9D4EDD]/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
              Latest <span className="gradient-text">Resources</span>
            </h2>
            <p className="text-xl text-gray-400 font-medium">
              Expert guides, news, and tips to maximize your viewing setup.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link to="/blog">
              <Button variant="outline" className="glass text-white border-white/20 hover:bg-white/10 hover:text-white px-6 py-6 rounded-xl font-bold flex items-center gap-2 group transition-all">
                View All Articles
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestArticles.map((article, idx) => (
            <BlogCard key={article.id} article={article} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestArticlesWidget;
import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { BookOpen, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogArticles } from '@/data/blogArticles';
import Breadcrumb from '@/components/Breadcrumb';
import PriceComparisonSection from '@/components/PriceComparisonSection';

const BlogCard = ({ article, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-[#1E293B] border border-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-[#0066FF]/20 hover:-translate-y-2 transition-all flex flex-col h-full"
  >
    <Link to={`/blog/${article.slug}`} className="block relative h-48 overflow-hidden group">
      <img 
        src={article.featuredImage} 
        alt={article.title} 
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute top-4 left-4 bg-[#0066FF] text-white text-xs font-bold px-3 py-1 rounded-full">
        {article.category}
      </div>
    </Link>
    <div className="p-6 flex flex-col flex-grow">
      <div className="text-slate-400 text-sm mb-3 flex items-center justify-between">
        <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
        <span>{article.readTime}</span>
      </div>
      <Link to={`/blog/${article.slug}`}>
        <h2 className="text-xl font-bold text-white mb-3 hover:text-[#3B82F6] transition-colors line-clamp-2">
          {article.title}
        </h2>
      </Link>
      <p className="text-slate-400 text-sm mb-6 flex-grow line-clamp-3">
        {article.excerpt}
      </p>
      <div className="mt-auto">
        <Link 
          to={`/blog/${article.slug}`} 
          className="inline-flex items-center text-[#3B82F6] hover:text-[#60A5FA] font-medium text-sm transition-colors group"
        >
          Read Full Article 
          <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  </motion.div>
);

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(blogArticles.map(a => a.category))];

  const filteredArticles = useMemo(() => {
    return blogArticles.filter(article => {
      const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1 } 
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-[#0F172A] text-white font-sans pt-24 pb-20 overflow-hidden">
      <Helmet>
        <title>Best IPTV in USA 2026 | Entertainment Guides & Blog</title>
        <meta name="description" content="Discover the best IPTV services in the USA, detailed viewing guides, American sports streaming tips, and expert recommendations for your 2026 setup." />
        <meta name="keywords" content="IPTV USA, best IPTV USA, IPTV subscription USA, IPTV services USA, IPTV players USA, IPTV streaming USA, IPTV apps USA" />
      </Helmet>

      <section className="relative py-16 px-4 mb-8 bg-[#1E293B] border-b border-slate-800">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#0066FF]/10 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-5xl mx-auto">
            <motion.div variants={fadeInUp} className="mb-6 flex justify-center">
              <Breadcrumb items={[{ label: 'Blog (USA)', path: '/blog' }]} />
            </motion.div>
            
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-[#0F172A] border border-slate-700 px-4 py-1.5 rounded-full text-slate-300 mb-6 shadow-md">
              <BookOpen className="text-[#3B82F6]" size={16} />
              <span className="text-sm font-medium uppercase tracking-wider">USA Resources & Updates</span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-white drop-shadow-lg">
              Best IPTV in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#60A5FA]">USA 2026</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed mb-10">
              Stay updated with the latest US industry insights, comprehensive American setup instructions, NFL/NBA streaming guides, and expert tips to maximize your entertainment experience.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="w-full">
              <img 
                src="https://images.unsplash.com/photo-1593359677879-a4bb92f829d1" 
                alt="Premium smart TV setup displaying IPTV content in a modern living room" 
                loading="eager"
                className="hero-blog-image"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Price Comparison Section */}
      <PriceComparisonSection />

      <section className="py-8 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category 
                      ? 'bg-[#0066FF] text-white shadow-md' 
                      : 'bg-[#1E293B] text-slate-300 hover:bg-slate-700 border border-slate-800'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="relative w-full md:w-64">
              <input 
                type="text" 
                placeholder="Search US articles..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-[#1E293B] border border-slate-800 rounded-full py-2 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-[#0066FF] transition-colors"
              />
              <Search className="absolute left-3 top-2.5 text-slate-500" size={16} />
            </div>
          </div>

          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article, index) => (
                <BlogCard key={article.id} article={article} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-[#1E293B] rounded-2xl border border-slate-800 max-w-3xl mx-auto">
              <BookOpen size={48} className="mx-auto mb-4 text-slate-600" />
              <h3 className="text-2xl font-bold mb-2 text-white">No articles found</h3>
              <p className="text-slate-400">Try adjusting your search or category filter.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Clock, User, Calendar } from 'lucide-react';
import { blogArticles } from '@/data/blogArticles';

const categories = ["All", ...new Set(blogArticles.map(article => article.category))];

const BlogListPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredArticles = blogArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          article.keywords.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || article.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen pt-28 pb-20 bg-slate-950">
      <Helmet>
        <title>IPTV Blog - Latest Articles & Guides</title>
        <meta name="description" content="Explore our comprehensive IPTV blog with guides, comparisons, and tips for streaming services." />
      </Helmet>
      
      {/* Hero Section */}
      <div className="bg-slate-900 border-b border-slate-800 py-16 mb-12">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-6"
          >
            IPTV <span className="text-blue-500">Blog</span>
          </motion.h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg mb-8">
            Stay updated with the latest news, detailed guides, and expert tips to enhance your premium IPTV streaming experience.
          </p>
          
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-500" />
            <input 
              type="text"
              placeholder="Search articles, guides, keywords..."
              className="w-full bg-slate-950 border border-slate-800 text-white rounded-full py-3 pl-12 pr-6 focus:outline-none focus:border-blue-500 transition-colors"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat 
                  ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]' 
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800 hover:border-blue-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Article Grid */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <motion.article 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                key={article.id} 
                className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-blue-500/50 transition-all duration-300 group shadow-lg hover:shadow-blue-900/20 flex flex-col"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={article.featuredImage} 
                    alt={article.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {article.category}
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-slate-400 mb-4">
                    <span className="flex items-center gap-1"><Calendar size={14} /> {article.date}</span>
                    <span className="flex items-center gap-1"><Clock size={14} /> {article.readTime}</span>
                  </div>
                  
                  <Link to={`/blog/${article.slug}`}>
                    <h2 className="text-xl font-bold text-white mb-3 hover:text-blue-400 transition-colors line-clamp-2">
                      {article.title}
                    </h2>
                  </Link>
                  
                  <p className="text-slate-400 text-sm mb-6 line-clamp-3 flex-grow">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-800">
                    <span className="flex items-center gap-2 text-sm text-slate-300">
                      <User size={16} className="text-blue-500" /> {article.author}
                    </span>
                    <Link 
                      to={`/blog/${article.slug}`}
                      className="text-blue-500 font-semibold text-sm hover:text-blue-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                    >
                      Read More &rarr;
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-slate-400">
            <Search size={48} className="mx-auto mb-4 opacity-20" />
            <h3 className="text-xl font-semibold mb-2 text-white">No articles found</h3>
            <p>Try adjusting your search terms or filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogListPage;
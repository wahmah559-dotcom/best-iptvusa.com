import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Calendar, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const BlogCard = ({ article, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-[#1E293B] border border-slate-800 rounded-2xl overflow-hidden group flex flex-col h-full hover:border-[#0066FF]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,102,255,0.15)]"
    >
      <Link to={`/blog/${article.slug}`} className="relative h-56 overflow-hidden block">
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-[#0066FF] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
            {article.category}
          </span>
        </div>
        <img 
          src={article.featuredImage} 
          alt={article.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] to-transparent opacity-80"></div>
      </Link>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center text-slate-400 text-sm mb-3 gap-4 font-medium">
          <span className="flex items-center gap-1.5">
            <Calendar size={14} className="text-[#3B82F6]" />
            {new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={14} className="text-[#3B82F6]" />
            {article.readTime || article.readingTime}
          </span>
        </div>
        
        <Link to={`/blog/${article.slug}`}>
          <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-[#3B82F6] transition-colors leading-tight">
            {article.title}
          </h3>
        </Link>
        
        <p className="text-slate-400 mb-6 line-clamp-3 text-sm flex-grow leading-relaxed">
          {article.excerpt}
        </p>
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0066FF] to-[#3B82F6] flex items-center justify-center text-white font-bold text-xs shadow-lg">
              {article.author.charAt(0)}
            </div>
            <span className="text-sm font-medium text-slate-300">{article.author}</span>
          </div>
          <Link 
            to={`/blog/${article.slug}`}
            className="text-[#3B82F6] text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all hover:text-[#60A5FA]"
          >
            Read <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;
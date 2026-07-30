import React from 'react';
import { Search, X, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';

const BlogSearch = ({ searchTerm, setSearchTerm, activeCategory, setActiveCategory, categories, resultsCount }) => {
  return (
    <div className="glass p-6 md:p-8 rounded-2xl border border-white/10 mb-12 shadow-xl">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-grow relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search size={20} className="text-gray-400" />
          </div>
          <Input 
            type="text"
            placeholder="Search articles, guides, and news..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-10 py-6 bg-white/5 border-white/10 text-white placeholder-gray-400 rounded-xl focus:ring-[#00D9FF] focus:border-[#00D9FF] text-lg transition-all"
          />
          {searchTerm && (
            <button 
              onClick={() => setSearchTerm('')}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-white"
            >
              <X size={20} />
            </button>
          )}
        </div>
        <div className="flex items-center gap-4 text-gray-400 font-medium whitespace-nowrap px-2">
          <Filter size={20} className="text-[#00D9FF]" />
          <span>{resultsCount} {resultsCount === 1 ? 'Article' : 'Articles'} Found</span>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2 md:gap-3">
        <button
          onClick={() => setActiveCategory('All')}
          className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
            activeCategory === 'All' 
              ? 'bg-gradient-primary text-white shadow-lg glow-primary border border-transparent' 
              : 'bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10 hover:text-white'
          }`}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
              activeCategory === category 
                ? 'bg-gradient-primary text-white shadow-lg glow-primary border border-transparent' 
                : 'bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10 hover:text-white'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BlogSearch;
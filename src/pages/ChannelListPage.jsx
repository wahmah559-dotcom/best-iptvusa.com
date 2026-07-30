import React from 'react';
import { Helmet } from 'react-helmet';
import { Tv } from 'lucide-react';

const ChannelListPage = () => {
  const categories = ['Sports', 'Movies', 'News', 'Kids', 'Entertainment', 'International'];

  return (
    <div className="min-h-screen pt-32 pb-20 bg-slate-950 text-white">
      <Helmet><title>Content List | Premium Streaming</title></Helmet>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Available Categories</h1>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat, i) => (
            <button key={i} className={`px-6 py-2 rounded-full border ${i === 0 ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-800 text-slate-400 hover:border-blue-600'}`}>
              {cat}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {[...Array(24)].map((_, i) => (
            <div key={i} className="card-hover aspect-square flex flex-col items-center justify-center p-4 border border-slate-800 rounded-lg">
              <Tv size={32} className="text-slate-400 mb-2" />
              <span className="font-semibold text-sm text-center">Network {i + 1}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-slate-400 mb-4">Want to see the full extensive content list?</p>
          <a href="https://wa.me/17867352904" className="btn-primary inline-block">Request Full Breakdown</a>
        </div>
      </div>
    </div>
  );
};
export default ChannelListPage;
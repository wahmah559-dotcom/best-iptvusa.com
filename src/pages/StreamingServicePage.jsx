import React from 'react';
import { Helmet } from 'react-helmet';
import { PlayCircle, Award, LayoutGrid } from 'lucide-react';

const StreamingServicePage = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-slate-950 text-white">
      <Helmet><title>Streaming Service | Best IPTV USA</title></Helmet>
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6">Ultimate Streaming Experience</h1>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-16">Experience TV like never before with 4K quality, vast VOD libraries, and seamless playback.</p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          <div className="card-hover p-8">
            <LayoutGrid className="mx-auto text-blue-600 mb-4" size={48} />
            <h3 className="text-2xl font-bold mb-2">20k+ Channels</h3>
            <p className="text-slate-400">Live sports, news, and entertainment.</p>
          </div>
          <div className="card-hover p-8">
            <PlayCircle className="mx-auto text-blue-600 mb-4" size={48} />
            <h3 className="text-2xl font-bold mb-2">Huge VOD Library</h3>
            <p className="text-slate-400">Latest movies and TV series on demand.</p>
          </div>
          <div className="card-hover p-8">
            <Award className="mx-auto text-blue-600 mb-4" size={48} />
            <h3 className="text-2xl font-bold mb-2">Top Quality</h3>
            <p className="text-slate-400">4K, FHD, HD, and SD formats available.</p>
          </div>
        </div>
        
        <a href="https://wa.me/17867352904" className="btn-primary inline-block text-lg px-12 py-4">Start Watching Today</a>
      </div>
    </div>
  );
};
export default StreamingServicePage;
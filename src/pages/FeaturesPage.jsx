import React from 'react';
import { Helmet } from 'react-helmet';
import { Shield, Zap, Globe, Video, Smartphone, Clock } from 'lucide-react';

const FeaturesPage = () => {
  const features = [
    { icon: <Video />, title: '4K Ultra HD', desc: 'Crystal clear streaming on all channels without compression.' },
    { icon: <Globe />, title: 'Global Content', desc: 'Over 20,000 channels from USA, UK, Canada, and worldwide.' },
    { icon: <Zap />, title: 'Anti-Freeze Tech', desc: 'Proprietary technology ensures zero buffering during peak hours.' },
    { icon: <Smartphone />, title: 'Any Device', desc: 'Works on Smart TV, Firestick, PC, Android, and iOS.' },
    { icon: <Shield />, title: 'Secure & Private', desc: 'Your connection is encrypted. No logs policy.' },
    { icon: <Clock />, title: '99.9% Uptime', desc: 'Reliable servers globally distributed for maximum uptime.' }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 bg-slate-950">
      <Helmet><title>Features | Best IPTV USA</title></Helmet>
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-6 text-center text-white">Unmatched Features</h1>
        <p className="text-xl text-slate-400 text-center max-w-2xl mx-auto mb-16">Everything you need for the perfect streaming experience in one complete package.</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16 text-white">
          {features.map((f, i) => (
            <div key={i} className="card-hover p-8">
              <div className="bg-blue-600/10 w-16 h-16 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                {f.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{f.title}</h3>
              <p className="text-slate-400">{f.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <a href="https://wa.me/17867352904" className="btn-primary inline-block text-lg px-8 py-4">Get Started Now</a>
        </div>
      </div>
    </div>
  );
};
export default FeaturesPage;
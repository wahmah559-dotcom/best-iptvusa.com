import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Home, Tag, Star, LifeBuoy, Monitor, Tv, Info, MessageCircle } from 'lucide-react';

const QuickLinksPage = () => {
  const links = [
    { title: 'Home', path: '/', icon: <Home /> },
    { title: 'Pricing', path: '/pricing', icon: <Tag /> },
    { title: 'Features', path: '/features', icon: <Star /> },
    { title: 'Support', path: '/support', icon: <LifeBuoy /> },
    { title: 'Devices', path: '/devices', icon: <Monitor /> },
    { title: 'Channels', path: '/channel-list', icon: <Tv /> },
    { title: 'FAQ', path: '/faq', icon: <Info /> },
    { title: 'Live Chat', path: '/live-chat-support', icon: <MessageCircle /> },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 bg-slate-950">
      <Helmet><title>Quick Links | Best IPTV USA</title></Helmet>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center text-white">Quick Navigation</h1>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {links.map((link, i) => (
            <Link key={i} to={link.path} className="card-hover p-8 flex flex-col items-center justify-center text-center gap-4 group text-white">
              <div className="text-blue-600 group-hover:text-cyan-400 group-hover:scale-110 transition-transform">{link.icon}</div>
              <span className="font-semibold text-lg">{link.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default QuickLinksPage;
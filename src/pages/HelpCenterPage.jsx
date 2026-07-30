import React from 'react';
import { Helmet } from 'react-helmet';
import { Book, Video, Wrench, CreditCard } from 'lucide-react';

const HelpCenterPage = () => {
  const categories = [
    { title: 'Installation Guides', icon: <Book />, desc: 'Step-by-step setup instructions for all devices.' },
    { title: 'Troubleshooting', icon: <Wrench />, desc: 'Fix buffering, login issues, and errors.' },
    { title: 'Billing & Account', icon: <CreditCard />, desc: 'Manage subscriptions and payments.' },
    { title: 'Video Tutorials', icon: <Video />, desc: 'Watch how to set up your device easily.' },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 bg-slate-950 text-white">
      <Helmet><title>Help Center | Best IPTV USA</title></Helmet>
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-4xl font-bold mb-8 text-center">Help Center</h1>
        <div className="max-w-xl mx-auto mb-16">
          <input type="text" placeholder="Search for help..." className="w-full bg-slate-900 border border-slate-800 p-4 rounded-xl text-white focus:outline-none focus:border-blue-600" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((cat, i) => (
            <div key={i} className="card-hover p-8 flex items-start gap-6 cursor-pointer">
              <div className="bg-blue-600/20 p-4 rounded-xl text-blue-600">{cat.icon}</div>
              <div>
                <h3 className="text-xl font-bold mb-2">{cat.title}</h3>
                <p className="text-slate-400">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default HelpCenterPage;
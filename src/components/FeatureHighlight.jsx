import React from 'react';
import { Tv, Zap, Smartphone, Headphones, Wifi } from 'lucide-react';

const FeatureHighlight = () => {
  const features = [
    {
      icon: <Tv className="w-8 h-8 text-[#0066FF]" />,
      title: "4K Quality",
      description: "Experience crystal-clear viewing with our true 4K UHD streaming capabilities."
    },
    {
      icon: <Zap className="w-8 h-8 text-[#0066FF]" />,
      title: "Instant Delivery",
      description: "Get your login credentials immediately after purchase. No waiting."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-[#0066FF]" />,
      title: "Multi-Device Support",
      description: "Watch on Smart TVs, Firestick, Android, iOS, and PC seamlessly."
    },
    {
      icon: <Headphones className="w-8 h-8 text-[#0066FF]" />,
      title: "24/7 Customer Support",
      description: "Our dedicated team is always ready to assist you day or night."
    },
    {
      icon: <Wifi className="w-8 h-8 text-[#0066FF]" />,
      title: "No Buffering Technology",
      description: "Advanced anti-freeze servers guarantee a smooth, lag-free experience."
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12" id="features">
      <div className="col-span-full mb-4">
        <h2 className="text-3xl font-bold mb-4 text-white">Key Features</h2>
        <p className="text-slate-400 text-lg">Everything you need for the ultimate streaming experience.</p>
      </div>
      {features.map((feature, idx) => (
        <div 
          key={idx} 
          className="bg-[#0A0E17] border border-slate-800 p-6 rounded-2xl hover:shadow-lg hover:shadow-[#0066FF]/10 transition-all hover:-translate-y-1 group"
        >
          <div className="bg-[#0066FF]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            {feature.icon}
          </div>
          <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
          <p className="text-slate-400 leading-relaxed">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FeatureHighlight;
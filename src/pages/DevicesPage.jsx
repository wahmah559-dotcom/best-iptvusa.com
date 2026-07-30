import React from 'react';
import { Helmet } from 'react-helmet';
import { Tv, Smartphone, Monitor } from 'lucide-react';

const DevicesPage = () => {
  const devices = [
    { name: 'Smart TV', icon: <Tv size={48} />, apps: ['IPTV Smarters', 'TiviMate', 'Flix IPTV'] },
    { name: 'Firestick / Android', icon: <Monitor size={48} />, apps: ['Downloader App', 'XCIPTV'] },
    { name: 'Apple iOS', icon: <Smartphone size={48} />, apps: ['GSE Smart IPTV', 'IPTV Smarters Pro'] },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 bg-slate-950 text-white">
      <Helmet><title>Supported Devices | Best IPTV USA</title></Helmet>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6 text-center">Supported Devices</h1>
        <p className="text-slate-400 text-center max-w-2xl mx-auto mb-16">Our premium IPTV service is compatible with almost every device on the market.</p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {devices.map((d, i) => (
            <div key={i} className="card-hover p-8 text-center">
              <div className="flex justify-center text-blue-600 mb-6">{d.icon}</div>
              <h2 className="text-2xl font-bold mb-4">{d.name}</h2>
              <h3 className="text-sm text-slate-400 font-semibold uppercase tracking-wider mb-2">Recommended Apps</h3>
              <ul className="space-y-2">
                {d.apps.map((app, j) => <li key={j} className="text-white/80">{app}</li>)}
              </ul>
              <button className="mt-6 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white py-2 px-4 rounded-lg w-full transition-colors">Setup Guide</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default DevicesPage;
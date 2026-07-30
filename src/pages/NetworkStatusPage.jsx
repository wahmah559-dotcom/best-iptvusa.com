import React from 'react';
import { Helmet } from 'react-helmet';
import { Server, Activity, Globe } from 'lucide-react';

const NetworkStatusPage = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-slate-950">
      <Helmet><title>Network Status | Best IPTV USA</title></Helmet>
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="text-4xl font-bold mb-8 text-white">System Status</h1>
        
        <div className="bg-green-500/10 border border-green-500 p-6 rounded-xl mb-12 flex items-center gap-4">
          <div className="w-4 h-4 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-xl font-semibold text-green-500">All Systems Operational (99.9% Uptime)</span>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12 text-white">
          {['US East', 'US West', 'Europe', 'Asia', 'VOD Servers', 'Auth System'].map((server, i) => (
            <div key={i} className="card-hover p-6 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <Server className="text-slate-400" />
                <span className="font-medium">{server}</span>
              </div>
              <span className="text-green-500 font-bold">Online</span>
            </div>
          ))}
        </div>
        
        <div className="card-hover p-8 text-white">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Activity /> Performance Metrics</h2>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-slate-400 text-sm">Latency</div>
              <div className="text-2xl font-bold text-cyan-400">12ms</div>
            </div>
            <div>
              <div className="text-slate-400 text-sm">Bandwidth</div>
              <div className="text-2xl font-bold text-cyan-400">1.2 Tbps</div>
            </div>
            <div>
              <div className="text-slate-400 text-sm">Packet Loss</div>
              <div className="text-2xl font-bold text-cyan-400">0.00%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NetworkStatusPage;
import React from 'react';
import { Trophy, Film, Activity, MonitorPlay, Ticket, DownloadCloud } from 'lucide-react';

const BenefitsSection = () => {
  return (
    <div className="my-16" id="benefits">
      <h2 className="text-3xl font-bold mb-8 text-center text-white">Benefits for Different Users</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Sports Fans */}
        <div className="bg-gradient-to-b from-[#0A0E17] to-[#03030A] border border-slate-800 p-8 rounded-3xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#0066FF]/10 rounded-bl-full -z-10 group-hover:scale-110 transition-transform" />
          <h3 className="text-2xl font-bold flex items-center gap-3 mb-6 text-white">
            <Trophy className="text-[#0066FF] w-8 h-8" />
            For Sports Fans
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <Activity className="w-6 h-6 text-[#0066FF] shrink-0 mt-0.5" />
              <div>
                <strong className="block text-white">Live Global Sports</strong>
                <span className="text-slate-400 text-sm">NFL, NBA, Premier League, and PPV events included.</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MonitorPlay className="w-6 h-6 text-[#0066FF] shrink-0 mt-0.5" />
              <div>
                <strong className="block text-white">Multi-Angle Viewing</strong>
                <span className="text-slate-400 text-sm">Access different broadcast feeds for the same event.</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Activity className="w-6 h-6 text-[#0066FF] shrink-0 mt-0.5" />
              <div>
                <strong className="block text-white">Zero Lag Technology</strong>
                <span className="text-slate-400 text-sm">Don't miss a single play with our low-latency servers.</span>
              </div>
            </li>
          </ul>
        </div>

        {/* Movie Lovers */}
        <div className="bg-gradient-to-b from-[#0A0E17] to-[#03030A] border border-slate-800 p-8 rounded-3xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF6B35]/10 rounded-bl-full -z-10 group-hover:scale-110 transition-transform" />
          <h3 className="text-2xl font-bold flex items-center gap-3 mb-6 text-white">
            <Film className="text-[#FF6B35] w-8 h-8" />
            For Movie Lovers
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <Ticket className="w-6 h-6 text-[#FF6B35] shrink-0 mt-0.5" />
              <div>
                <strong className="block text-white">Latest Releases</strong>
                <span className="text-slate-400 text-sm">Massive VOD library updated daily with new cinema hits.</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MonitorPlay className="w-6 h-6 text-[#FF6B35] shrink-0 mt-0.5" />
              <div>
                <strong className="block text-white">4K Cinema Quality</strong>
                <span className="text-slate-400 text-sm">Experience movies exactly how the directors intended.</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <DownloadCloud className="w-6 h-6 text-[#FF6B35] shrink-0 mt-0.5" />
              <div>
                <strong className="block text-white">Binge-Ready Series</strong>
                <span className="text-slate-400 text-sm">Complete box sets of all major streaming platform exclusives.</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
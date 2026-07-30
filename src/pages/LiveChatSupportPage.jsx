import React from 'react';
import { Helmet } from 'react-helmet';
import { MessageSquare, Clock, Phone } from 'lucide-react';

const LiveChatSupportPage = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-slate-950">
      <Helmet><title>Live Chat Support | Best IPTV USA</title></Helmet>
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-white">Live Support</h1>
          <p className="text-slate-400 flex justify-center items-center gap-2"><Clock /> 24/7 Availability • Avg Response: 2 mins</p>
        </div>
        
        <div className="card-hover p-6 min-h-[500px] flex flex-col">
          <div className="flex-1 space-y-4 mb-4 text-white">
            <div className="bg-slate-800 p-4 rounded-xl max-w-[80%]">Hello! How can we help you with your IPTV subscription today?</div>
            <div className="bg-blue-600/20 text-right p-4 rounded-xl max-w-[80%] ml-auto">I need help setting up my Firestick.</div>
            <div className="bg-slate-800 p-4 rounded-xl max-w-[80%]">Absolutely! Please check our devices page or let me guide you step-by-step.</div>
          </div>
          <div className="flex gap-4 mt-auto">
            <input type="text" placeholder="Type your message..." className="flex-1 bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-600" />
            <button className="btn-primary"><MessageSquare /></button>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-slate-400 mb-4">Prefer WhatsApp?</p>
          <a href="https://wa.me/17867352904" className="btn-primary inline-flex items-center gap-2"><Phone /> +1 (786) 735-2904</a>
        </div>
      </div>
    </div>
  );
};
export default LiveChatSupportPage;
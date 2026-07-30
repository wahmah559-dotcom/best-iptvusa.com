import React from 'react';
import { Helmet } from 'react-helmet';
import { Mail, Phone, MessageCircle } from 'lucide-react';

const SupportPage = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-slate-950 text-white">
      <Helmet><title>Support | Best IPTV USA</title></Helmet>
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="text-4xl font-bold mb-12 text-center">Contact Support</h1>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="card-hover p-8 text-center">
            <MessageCircle className="mx-auto text-green-500 mb-4" size={40} />
            <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
            <p className="text-slate-400 mb-4">Instant reply 24/7</p>
            <a href="https://wa.me/17867352904" className="text-green-500 font-bold hover:underline">+1 (786) 735-2904</a>
          </div>
          <div className="card-hover p-8 text-center">
            <Mail className="mx-auto text-blue-600 mb-4" size={40} />
            <h3 className="text-xl font-bold mb-2">Email Us</h3>
            <p className="text-slate-400 mb-4">Reply within 12 hours</p>
            <span className="text-blue-600 font-bold">support@best-iptvusa.com</span>
          </div>
          <div className="card-hover p-8 text-center">
            <Phone className="mx-auto text-cyan-400 mb-4" size={40} />
            <h3 className="text-xl font-bold mb-2">Phone</h3>
            <p className="text-slate-400 mb-4">Mon-Fri 9am-5pm EST</p>
            <span className="text-cyan-400 font-bold">+1 (786) 735-2904</span>
          </div>
        </div>
        
        <div className="bg-slate-900 p-8 rounded-xl border border-slate-800 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Submit a Ticket</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Name" className="w-full bg-slate-950 border border-slate-800 p-3 rounded-lg text-white" />
            <input type="email" placeholder="Email" className="w-full bg-slate-950 border border-slate-800 p-3 rounded-lg text-white" />
            <textarea placeholder="Describe your issue..." rows="4" className="w-full bg-slate-950 border border-slate-800 p-3 rounded-lg text-white"></textarea>
            <button type="submit" className="btn-primary w-full">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default SupportPage;
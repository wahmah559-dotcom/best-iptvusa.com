import React from 'react';
import { Helmet } from 'react-helmet';
import { Lock } from 'lucide-react';

const CheckoutPage = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-slate-950 text-white">
      <Helmet><title>Secure Checkout | Best IPTV USA</title></Helmet>
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Secure Checkout</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
              <h2 className="text-xl font-bold mb-4">Billing Details</h2>
              <form className="space-y-4">
                <input type="text" placeholder="Full Name" className="w-full bg-slate-950 border border-slate-800 p-3 rounded-lg text-white" />
                <input type="email" placeholder="Email Address" className="w-full bg-slate-950 border border-slate-800 p-3 rounded-lg text-white" />
                <input type="text" placeholder="WhatsApp Number" className="w-full bg-slate-950 border border-slate-800 p-3 rounded-lg text-white" />
              </form>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              <div className="flex justify-between mb-2"><span>12 Months Premium</span><span>$69.00</span></div>
              <div className="flex justify-between mb-4 text-slate-400"><span>Taxes</span><span>$0.00</span></div>
              <div className="flex justify-between font-bold text-xl border-t border-slate-800 pt-4 mb-6"><span>Total</span><span>$69.00</span></div>
              
              <button className="btn-primary w-full flex justify-center items-center gap-2 mb-4">
                <Lock size={18} /> Complete Secure Purchase
              </button>
              <p className="text-center text-sm text-slate-400">Or pay via WhatsApp for instant activation</p>
              <a href="https://wa.me/17867352904" className="mt-2 block text-center text-blue-600 hover:text-cyan-400">Contact us on WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CheckoutPage;
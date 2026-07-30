import React from 'react';
import { Helmet } from 'react-helmet';
import { Star } from 'lucide-react';

const TestimonialsPage = () => {
  const reviews = [
    { name: 'John D.', location: 'Miami, FL', text: 'Best service I have ever used. No buffering during the super bowl!', rating: 5 },
    { name: 'Sarah M.', location: 'New York, NY', text: 'Huge selection of channels. Setup was incredibly easy on my Firestick.', rating: 5 },
    { name: 'David W.', location: 'Austin, TX', text: 'Customer support is top notch. Replied on WhatsApp in 2 minutes.', rating: 5 },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 bg-slate-950">
      <Helmet><title>Testimonials | Best IPTV USA</title></Helmet>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4 text-center text-white">What Our Customers Say</h1>
        <p className="text-slate-400 text-center mb-16">Over 10,000+ happy customers trust our streaming service.</p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-white">
          {reviews.map((r, i) => (
            <div key={i} className="card-hover p-8">
              <div className="flex text-cyan-400 mb-4">
                {[...Array(r.rating)].map((_, j) => <Star key={j} fill="currentColor" size={20} />)}
              </div>
              <p className="text-lg mb-6 text-white/90">"{r.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center font-bold text-blue-600">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold">{r.name}</h4>
                  <span className="text-sm text-slate-400">{r.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="https://wa.me/17867352904" className="btn-primary inline-block">Join Them Today</a>
        </div>
      </div>
    </div>
  );
};
export default TestimonialsPage;
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactBanner = () => {
  return (
    <section className="bg-gradient-to-r from-[#0A0A1F] via-[#0C0BBD]/20 to-[#0A0A1F] border-b border-white/10 pt-28 pb-12 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2000&auto=format&fit=crop')] opacity-5 bg-cover bg-center mix-blend-overlay"></div>
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0C0BBD]/20 border border-[#0C0BBD]/30 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-sm text-blue-200 font-semibold uppercase tracking-wider">24/7 Premium Support</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 drop-shadow-md">
            Contact Best IPTV USA Now
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-medium">
            Ready to upgrade your entertainment? Call or message us to get instant activation for your premium 4K streaming service.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+17867352904"
              className="w-full sm:w-auto"
            >
              <Button className="w-full h-14 px-8 text-lg font-bold bg-[#0C0BBD] hover:bg-[#0908A0] text-white shadow-[0_0_20px_rgba(12,11,189,0.5)] border-0 rounded-xl flex items-center justify-center gap-3">
                <Phone size={24} />
                Call +1 786 735 2904
              </Button>
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/17867352904"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button className="w-full h-14 px-8 text-lg font-bold bg-[#25D366] hover:bg-[#128C7E] text-white shadow-[0_0_20px_rgba(37,211,102,0.4)] border-0 rounded-xl flex items-center justify-center gap-3">
                <MessageCircle size={24} />
                WhatsApp Chat
              </Button>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactBanner;
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Shield, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  return (
    <section className="w-full bg-gradient-to-r from-[#0A0A1F] via-[#0C0BBD]/20 to-[#0A0A1F] border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden mb-16 shadow-[0_0_40px_rgba(12,11,189,0.15)]">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2000&auto=format&fit=crop')] opacity-5 bg-cover bg-center mix-blend-overlay"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0C0BBD]/20 border border-[#0C0BBD]/30 rounded-full mb-6">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-sm text-blue-200 font-semibold uppercase tracking-wider">Online & Ready to Help</span>
        </div>
        
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-white mb-6 drop-shadow-md"
        >
          Get in Touch with Best IPTV USA
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl text-gray-300 mb-10 font-medium max-w-2xl mx-auto"
        >
          Experience 24/7 premium support. Whether you need setup assistance or have billing queries, our dedicated team is just a click away.
        </motion.p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="tel:+17867352904"
            className="w-full sm:w-auto"
          >
            <Button className="w-full h-14 px-8 text-lg font-bold bg-[#0C0BBD] hover:bg-[#0908A0] text-white shadow-[0_0_20px_rgba(12,11,189,0.5)] border-0 rounded-xl flex items-center justify-center gap-3">
              <Phone size={24} />
              +1 786 735 2904
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

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center gap-6 mt-10 pt-8 border-t border-white/10"
        >
           <div className="flex items-center gap-2 text-gray-300">
              <Shield size={20} className="text-[#0C0BBD]" /> <span className="text-sm font-semibold">Secure Connection</span>
           </div>
           <div className="flex items-center gap-2 text-gray-300">
              <Clock size={20} className="text-[#0C0BBD]" /> <span className="text-sm font-semibold">Instant Reply</span>
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
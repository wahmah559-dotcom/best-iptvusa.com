import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Mail, Phone, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const SupportContactSection = () => {
  return (
    <section className="py-20 bg-[#0A0A1F]" id="support">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <img 
              src="https://images.unsplash.com/photo-1610994238985-5afed0d13d54" 
              alt="24/7 Professional Customer Support Team" 
              className="rounded-2xl shadow-[0_0_30px_rgba(12,11,189,0.3)] object-cover h-[500px] w-full"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 bg-[#0C0BBD]/20 text-[#0C0BBD] px-4 py-2 rounded-full font-bold mb-4 text-sm uppercase tracking-wider">
                <Clock size={16} /> 24/7/365 Availability
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Always Here To Help You
              </h2>
              <p className="text-lg text-gray-400">
                Our expert technical support team is standing by to assist you with installation, troubleshooting, or general questions. We guarantee a response time of under 15 minutes.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between bg-[#0F172A] p-4 rounded-xl border border-white/5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Live Chat</h4>
                    <p className="text-sm text-gray-400">Instant Response</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between bg-[#0F172A] p-4 rounded-xl border border-white/5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-full flex items-center justify-center">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Email Support</h4>
                    <p className="text-sm text-gray-400">Response in &lt;1 hr</p>
                  </div>
                </div>
                <Link to="/contact">
                  <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">Email Us</Button>
                </Link>
              </div>

              <div className="flex items-center justify-between bg-[#0F172A] p-4 rounded-xl border border-white/5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#25D366]/10 text-[#25D366] rounded-full flex items-center justify-center">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">WhatsApp</h4>
                    <p className="text-sm text-gray-400">Fast Resolution</p>
                  </div>
                </div>
                <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">Message</Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SupportContactSection;
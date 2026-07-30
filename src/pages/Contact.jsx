import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Send, Clock, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/use-toast';
import Breadcrumb from '@/components/Breadcrumb';
import ContactSection from '@/components/ContactSection';

const Contact = () => {
  const breadcrumbItems = [{ label: 'Contact Us', path: '/contact' }];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: 'Message Sent Successfully! ✉️',
      description: 'Thank you for contacting us. We will get back to you within 24 hours.',
    });
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  const contactMethods = [
    {
      icon: <Phone size={32} />,
      title: '24/7 Customer Support',
      description: '+1 (786) 735-2904',
      link: 'tel:+17867352904',
      isWhatsApp: false,
      isPhone: true
    },
    {
      icon: <Mail size={32} />,
      title: 'Email Support',
      description: 'support@premiumstreaming.example',
      link: 'mailto:support@premiumstreaming.example',
      isWhatsApp: false
    },
    {
      icon: <MessageCircle size={36} fill="currentColor" />,
      title: 'Messaging Priority Support',
      description: '+1 786 735 2904',
      link: 'https://wa.me/17867352904?text=Hello%20I%20want%20premium%20access',
      isWhatsApp: true,
      subtext: 'Get instant support via Messaging'
    },
    {
      icon: <Clock size={32} />,
      title: 'Operating Hours',
      description: '24/7 Dedicated Support',
      link: null,
      isWhatsApp: false
    },
  ];

  return (
    <>
      <Helmet>
        <title>Contact Our Team - 24/7 Customer Support</title>
        <meta name="description" content="Contact our customer support team. Get help with your premium subscription. Available 24/7 via Phone, Email and Messaging." />
      </Helmet>

      <div className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mb-8">
             <Breadcrumb items={breadcrumbItems} />
          </div>

          <ContactSection />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 mt-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card p-10 rounded-3xl"
            >
              <h2 className="text-3xl font-bold text-white mb-8">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-white mb-2 block font-medium">
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 h-12"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-white mb-2 block font-medium">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 h-12"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="subject" className="text-white mb-2 block font-medium">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 h-12"
                    placeholder="E.g., Setup Assistance, Billing Query"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-white mb-2 block font-medium">
                    Detailed Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 resize-none p-4"
                    placeholder="Please provide as much detail as possible so we can help you quickly..."
                  />
                </div>

                <Button type="submit" className="btn-primary w-full text-lg py-6 font-bold">
                  <Send className="mr-2" size={20} />
                  Submit Request
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              <div className="relative h-64 rounded-3xl overflow-hidden mb-8 shadow-[0_0_30px_rgba(12,11,189,0.2)]">
                <img
                  src="https://images.unsplash.com/photo-1703355685639-d558d1b0f63e"
                  alt="Customer support representative ready to help"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A1F]/90 via-[#0C0BBD]/30 to-transparent" />
              </div>

              {contactMethods.map((method, index) => {
                if (method.isWhatsApp) {
                  return (
                    <motion.a
                      key={index}
                      href={method.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="block p-6 rounded-2xl bg-gradient-to-r from-[#25D366] to-[#128C7E] shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] cursor-pointer text-white"
                    >
                      <div className="flex items-center gap-5">
                        <div className="bg-white/20 p-4 rounded-full text-white backdrop-blur-sm">
                          {method.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-1">{method.title}</h3>
                          <p className="text-white text-xl font-bold drop-shadow-sm">{method.description}</p>
                          <p className="text-white/90 text-sm mt-1 font-medium bg-black/10 inline-block px-3 py-1 rounded-full">{method.subtext}</p>
                        </div>
                      </div>
                    </motion.a>
                  );
                }

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className={`glass-card p-6 rounded-2xl hover:bg-white/5 transition-colors duration-300 ${method.isPhone ? 'border-l-4 border-[#00D9FF]' : ''}`}
                  >
                    <div className="flex items-center gap-5">
                      <div className="bg-[#0C0BBD]/20 p-4 rounded-full text-[#0C0BBD]">{method.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{method.title}</h3>
                        {method.link ? (
                          <a
                            href={method.link}
                            className={`text-lg font-bold transition-colors ${method.isPhone ? 'text-[#00D9FF] hover:text-white text-2xl' : 'text-gray-300 hover:text-white'}`}
                            target={method.link.startsWith('http') ? '_blank' : undefined}
                            rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          >
                            {method.description}
                          </a>
                        ) : (
                          <p className="text-gray-300 text-lg font-medium">{method.description}</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="glass-card p-8 rounded-2xl border border-blue-500/30 bg-gradient-to-br from-[#0C0BBD]/20 to-transparent"
              >
                <h3 className="text-2xl font-bold text-white mb-4">Quick Response Guarantee</h3>
                <p className="text-gray-300 leading-relaxed">
                  Our dedicated technical team typically responds within minutes. For immediate setup assistance, utilizing our direct messaging channel is the absolute fastest way to reach our technicians.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
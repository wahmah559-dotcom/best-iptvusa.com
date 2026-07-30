import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Breadcrumb from '@/components/Breadcrumb';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  Tv, PlayCircle, Zap, Headphones, Globe, Unlock, 
  Film, Monitor, Smartphone, Laptop, Apple, Server, 
  Activity, ShieldCheck, CheckCircle2, Star, Shield, 
  Clock, DollarSign, Award, Sparkles, Check
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { pricingData } from '@/data/pricingData';

const PremiumIPTVPage = () => {
  const waLink = "https://wa.me/17867352904";

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const features = [
    { icon: <Tv size={32} />, title: "8K & 4K Ultra HD", desc: "Crystal clear, cinematic picture quality using next-gen AV1 codecs." },
    { icon: <Zap size={32} />, title: "Zero Buffering", desc: "Advanced AI-routed CDN technology for seamless, lag-free viewing." },
    { icon: <Monitor size={32} />, title: "Multi-Device Support", desc: "Watch seamlessly on your 2026 display, phone, tablet, or spatial headset." },
    { icon: <Headphones size={32} />, title: "24/7 Support", desc: "Dedicated human and AI technical assistance whenever you need it." },
    { icon: <Globe size={32} />, title: "Unlimited Bandwidth", desc: "Stream as much massive data as you want without restrictive caps." },
    { icon: <Unlock size={32} />, title: "Global Access", desc: "Bypass boundaries and access premium entertainment content from anywhere." }
  ];

  const networks = [
    "Premium Cinema", "Global Sports 8K", "Pro Football Network", "Pro Basketball Live", "Pro Baseball Stream", 
    "Acclaimed Drama", "Blockbuster Hits", "Classic Movies", "Nature & Discovery", "Science & Space"
  ];

  const devices = [
    { icon: <Tv />, name: "Smart TV", desc: "2020+ Televisions" },
    { icon: <Zap />, name: "Wi-Fi 7 Sticks", desc: "All popular streaming hardware" },
    { icon: <PlayCircle />, name: "Media Players", desc: "Dedicated streaming boxes" },
    { icon: <Smartphone />, name: "Mobile", desc: "Phones & Tablets" },
    { icon: <Apple />, name: "iOS/Vision", desc: "Apple Ecosystem & Spatial" },
    { icon: <Monitor />, name: "Windows", desc: "Desktop PCs" },
    { icon: <Laptop />, name: "Mac", desc: "Laptops & Desktops" },
    { icon: <Server />, name: "Web Browsers", desc: "Direct browser streaming" }
  ];

  const qualities = [
    { title: "1080p HD", features: ["Standard High Definition", "Low bandwidth requirement", "Perfect for mobile devices", "Included in all plans"] },
    { title: "2K Quality", features: ["Quad HD Resolution", "Crisp details", "Great for standard monitors", "Included in Standard/Premium"] },
    { title: "4K Ultra HD", features: ["Cinematic Clarity", "HDR10+ Support", "Perfect for large displays", "Premium Plan standard"] },
    { title: "8K Ultra HD", features: ["The 2026 Standard", "Ultimate realism & depth", "Requires 100+ Mbps internet", "Exclusive Premium Access"] }
  ];

  const metrics = [
    { value: "99.99%", label: "Uptime Guarantee", icon: <ShieldCheck size={40} className="text-[#0EA5E9] mb-4" /> },
    { value: "<50ms", label: "Latency", icon: <Activity size={40} className="text-[#0EA5E9] mb-4" /> },
    { value: "100+ Mbps", label: "8K Streaming Ready", icon: <Zap size={40} className="text-[#0EA5E9] mb-4" /> },
    { value: "24/7", label: "AI Monitoring", icon: <Clock size={40} className="text-[#0EA5E9] mb-4" /> }
  ];

  const whyChooseUs = [
    { title: "Reliability", desc: "Our global 2026 edge-server infrastructure ensures you never miss a moment of action.", icon: <Shield /> },
    { title: "Speed", desc: "Lightning-fast sub-second zapping times and instant stream loading.", icon: <Zap /> },
    { title: "Support", desc: "Dedicated 24/7 support agents backed by advanced diagnostic tools.", icon: <Headphones /> },
    { title: "Security", desc: "AES-256 end-to-end encryption keeps your viewing habits completely private.", icon: <Unlock /> }
  ];

  const testimonials = [
    { name: "Michael R.", text: "The new 8K quality on the sports channels is indistinguishable from being in the stadium. Absolutely incredible 2026 upgrade.", rating: 5 },
    { name: "Sarah J.", text: "Set it up on my Wi-Fi 7 stick in 2 minutes. The AI-curated VOD library has everything my family wants to watch.", rating: 5 },
    { name: "David T.", text: "Finally a next-gen streaming service that doesn't buffer during major live events. Worth every penny for the Premium plan.", rating: 5 }
  ];

  return (
    <div className="min-h-screen bg-[#0F172A] text-white font-sans overflow-hidden">
      <Helmet>
        <title>Premium Streaming Service 2026 | Best IPTV USA</title>
        <meta name="description" content="Experience cinematic 4K and 8K streaming with our 2026 Premium Service. Access major broadcast networks, zero buffering, and multi-device support." />
        <meta name="keywords" content="Premium Streaming 2026, 4K Entertainment, 8K Live Broadcasts, Sports Programming, Next-Gen IPTV" />
      </Helmet>

      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-24 pb-16 px-4">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1569587889770-9134d27b292e" 
            alt="Premium 2026 Entertainment Streaming" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/95 via-[#0F172A]/80 to-[#1E293B]/60 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-[#0F172A]/60"></div>
        </div>

        <div className="container mx-auto relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl mx-auto">
            <motion.div variants={fadeInUp} className="mb-6 flex justify-center">
              <Breadcrumb items={[{ label: 'Premium Streaming', path: '/premium-iptv' }]} />
            </motion.div>
            
            <motion.div variants={fadeInUp} className="inline-block bg-[#0EA5E9]/20 border border-[#0EA5E9]/30 text-[#38BDF8] px-4 py-1.5 rounded-full font-semibold text-sm mb-6 uppercase tracking-wider backdrop-blur-sm">
              The 2026 Ultimate Viewing Experience
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight text-white drop-shadow-lg">
              Next-Gen Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0EA5E9] to-[#7DD3FC]">Streaming</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto font-light drop-shadow-md">
              Experience flawless playback with 4K and 8K cinematic quality. No buffering, no legacy contracts, just pure entertainment.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto btn-sky-blue text-lg px-8 py-4 flex items-center justify-center gap-2">
                <PlayCircle size={24} /> Subscribe Now
              </a>
              <Link to="/#pricing" className="w-full sm:w-auto bg-[#1E293B]/80 hover:bg-slate-700 text-white backdrop-blur-md border border-slate-600 text-lg px-8 py-4 rounded-lg font-bold transition-all flex items-center justify-center gap-2">
                View All Plans
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* KEY FEATURES SECTION */}
      <section className="py-20 bg-[#1E293B] border-y border-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Unmatched 2026 Features</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Everything you need for the perfect modern home entertainment setup, built into one powerful subscription.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {features.map((feature, i) => (
              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                key={i} 
                className="bg-[#0F172A] border border-slate-800 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-[#0EA5E9]/10 hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-[#0EA5E9]/10 rounded-lg flex items-center justify-center text-[#38BDF8] mb-4 group-hover:bg-[#0EA5E9] group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">{feature.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PREMIUM NETWORKS SECTION */}
      <section className="py-20 bg-[#0F172A] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0EA5E9]/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Premium Broadcasts Included</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Access all your favorite premium entertainment content globally without the exorbitant legacy fees.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {networks.map((network, i) => (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                key={i} 
                className="bg-[#1E293B] border border-slate-800 p-4 rounded-xl flex items-center justify-center gap-3 hover:border-[#0EA5E9]/50 hover:bg-slate-800 transition-colors"
              >
                <Film className="text-[#38BDF8] opacity-70" size={20} />
                <span className="font-bold text-white tracking-wide text-center">{network}</span>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="text-slate-500 text-sm">And tens of thousands more popular broadcasts from around the globe...</p>
          </div>
        </div>
      </section>

      {/* STREAMING QUALITY SECTION */}
      <section className="py-24 relative bg-[#1E293B]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1669054626218-f0b57b8ec632" 
            alt="Streaming Quality Background 2026" 
            className="w-full h-full object-cover opacity-20 mix-blend-luminosity grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B] via-[#1E293B]/90 to-[#1E293B]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Cinematic Picture Quality</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">Our AI engines automatically adjust to the best possible AV1 quality your connection can handle.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {qualities.map((q, i) => (
              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                key={i} 
                className={`bg-[#0F172A]/80 backdrop-blur-md border ${i === 3 ? 'border-[#0EA5E9] shadow-[0_0_20px_rgba(14,165,233,0.2)]' : 'border-slate-800'} p-8 rounded-2xl relative`}
              >
                {i === 3 && <div className="absolute -top-3 right-4 bg-[#0EA5E9] text-white text-xs font-bold px-3 py-1 rounded-full">New Standard</div>}
                <h3 className={`text-2xl font-black mb-6 ${i === 3 ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#0EA5E9] to-[#38BDF8]' : 'text-white'}`}>{q.title}</h3>
                <ul className="space-y-4">
                  {q.features.map((feat, j) => (
                    <li key={j} className="flex items-start gap-3 text-slate-300 text-sm">
                      <CheckCircle2 size={18} className="text-green-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PERFORMANCE METRICS SECTION */}
      <section className="py-20 bg-[#0F172A] border-y border-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {metrics.map((metric, i) => (
              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                key={i} 
                className="text-center p-8 bg-[#1E293B] rounded-2xl border border-slate-800 hover:border-[#0EA5E9]/30 transition-colors"
              >
                <div className="flex justify-center">{metric.icon}</div>
                <div className="text-4xl font-black text-white mb-2">{metric.value}</div>
                <div className="text-slate-400 font-medium uppercase tracking-wider text-sm">{metric.label}</div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/network-status" className="text-[#38BDF8] hover:text-[#7DD3FC] font-semibold inline-flex items-center gap-2 hover:underline">
              View 2026 Real-Time System Status <Activity size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* SUBSCRIPTION PLANS SECTION - UNIFORM PRICING */}
      <section className="py-24 bg-[#1E293B] border-y border-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Choose the 2026 plan that best fits your viewing habits. No hidden fees or rigid contracts required.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto items-stretch">
            {pricingData.map((plan, idx) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`relative bg-[#0F172A] rounded-xl p-8 flex flex-col h-full transition-all duration-300 border ${
                  plan.popular 
                    ? 'border-2 border-[#FCD34D] shadow-[0_0_30px_rgba(252,211,77,0.15)] scale-100 lg:scale-105 z-20' 
                    : 'border-slate-800 hover:border-[#0EA5E9]/50 hover:-translate-y-2 hover:shadow-xl'
                }`}
              >
                {plan.badge && (
                  <div className={`absolute top-0 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-b-lg text-xs font-bold flex items-center gap-2 shadow-lg whitespace-nowrap ${plan.popular ? 'bg-[#FCD34D] text-black' : 'bg-[#0EA5E9] text-white'}`}>
                    <Sparkles size={14} className={plan.popular ? 'text-black' : 'text-white'} />
                    {plan.badge.toUpperCase()}
                  </div>
                )}

                <div className="mb-6 text-center pt-4">
                  <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                  <div className={`text-xs font-bold ${plan.popular ? 'text-[#FCD34D]' : 'text-[#0EA5E9]'} mb-3 uppercase tracking-wider`}>{plan.duration}</div>
                  
                  <div className="flex justify-center items-start gap-0.5 mb-2 h-16 relative">
                    <span className="text-2xl text-slate-400 mt-1">$</span>
                    <span className="text-5xl font-extrabold text-white">
                      {plan.price}
                    </span>
                  </div>
                  
                  <div className="h-6 flex items-center justify-center mb-2">
                    {plan.savings && (
                      <div className="text-[#00FF88] text-xs font-bold bg-[#00FF88]/10 px-2 py-1 rounded-full border border-[#00FF88]/20">
                        {plan.savings}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex-grow space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className={`p-0.5 rounded-full mt-0.5 ${plan.popular ? 'bg-[#FCD34D]/20' : 'bg-slate-800'}`}>
                        <Check size={14} className={plan.popular ? 'text-[#FCD34D]' : 'text-slate-400'} />
                      </div>
                      <span className="text-white text-sm font-medium leading-tight">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto">
                  <a 
                    href={waLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full block"
                  >
                    <Button 
                      className={`w-full py-6 text-base rounded-xl h-[56px] ${
                        plan.popular ? 'btn-golden' : 'btn-sky-blue'
                      }`}
                    >
                      Subscribe Now
                    </Button>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="py-24 bg-[#0F172A]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us in 2026?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">We obliterate the competition through unmatched next-gen infrastructure and dedicated support.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {whyChooseUs.map((item, i) => (
              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                key={i} 
                className={`p-8 rounded-2xl border ${i % 2 === 0 ? 'bg-[#1E293B] border-slate-800' : 'bg-[#0EA5E9]/10 border-[#0EA5E9]/30'}`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 ${i % 2 === 0 ? 'bg-slate-800 text-[#38BDF8]' : 'bg-[#0EA5E9] text-white'}`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-20 bg-[#1E293B]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Thousands</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Don't just take our word for it. Read what our satisfied 2026 customers have to say about the premium experience.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((test, i) => (
              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                key={i} 
                className="bg-[#0F172A] border border-slate-800 p-8 rounded-2xl relative"
              >
                <div className="absolute top-4 right-6 text-6xl text-slate-800 font-serif opacity-50">"</div>
                <div className="flex gap-1 text-yellow-500 mb-6 relative z-10">
                  {[...Array(test.rating)].map((_, j) => <Star key={j} size={18} fill="currentColor" />)}
                </div>
                <p className="text-slate-300 mb-6 italic relative z-10">"{test.text}"</p>
                <div className="flex items-center gap-4 border-t border-slate-800 pt-4">
                  <div className="w-10 h-10 bg-[#0EA5E9] rounded-full flex items-center justify-center font-bold text-white">
                    {test.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{test.name}</h4>
                    <span className="text-xs text-slate-400">Verified Subscriber</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION SECTION */}
      <section className="py-24 relative overflow-hidden bg-[#0F172A]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0EA5E9]/10 to-[#0F172A]/80 z-0"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0EA5E9]/10 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#38BDF8]/10 blur-[100px] rounded-full"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#1E293B] border border-slate-700 px-4 py-2 rounded-full text-slate-300 mb-8">
              <Award className="text-yellow-500" size={18} />
              <span className="text-sm font-medium">2026 Satisfaction Guarantee</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Ready to Experience Next-Gen Entertainment?</h2>
            <p className="text-xl text-slate-300 mb-10">Join thousands of happy customers and instantly upgrade your home entertainment system today.</p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto btn-sky-blue text-lg px-10 py-5 flex items-center justify-center gap-3">
                <DollarSign size={22} /> Subscribe Now
              </a>
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-transparent border border-[#0EA5E9] text-[#38BDF8] hover:bg-[#0EA5E9]/10 text-lg px-10 py-5 rounded-lg font-bold transition-all flex items-center justify-center gap-3">
                Request Information
              </a>
            </div>
            <p className="text-slate-500 text-sm mt-6 flex items-center justify-center gap-2">
              <ShieldCheck size={14} /> Secure Payment via Messaging
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PremiumIPTVPage;
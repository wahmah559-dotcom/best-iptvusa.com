import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Calendar, User, MessageCircle, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TableOfContents from '@/components/TableOfContents';
import FeatureHighlight from '@/components/FeatureHighlight';
import BenefitsSection from '@/components/BenefitsSection';
import BlogFAQSection from '@/components/BlogFAQSection';
import StickyBuyButton from '@/components/StickyBuyButton';

const waLink = "https://wa.me/17867352904?text=I%20want%20to%20subscribe%20to%20premium%20services";

const BlogPostPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Premium Streaming Guide 2026</title>
        <meta name="description" content="Discover why premium streaming is the ultimate legacy alternative in 2026. Review our features, pricing, and why thousands are upgrading." />
      </Helmet>

      <StickyBuyButton />

      <main className="pt-32 pb-24 min-h-screen relative bg-[#03030A]">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          
          <header className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block bg-[#0066FF]/20 text-[#0066FF] px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase mb-6 border border-[#0066FF]/30">
              Complete Guide 2026
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
              The 2026 Guide to <span className="text-[#0066FF]">Premium Streaming</span>
            </h1>
            
            <div className="flex items-center justify-center gap-6 text-slate-400 text-sm font-medium">
              <span className="flex items-center gap-2"><User size={16} /> Content Team</span>
              <span className="flex items-center gap-2"><Calendar size={16} /> March 12, 2026</span>
            </div>
          </header>

          <div className="flex flex-col lg:flex-row gap-12 relative">
            <aside className="lg:w-1/4">
              <TableOfContents />
            </aside>

            <article className="lg:w-3/4 prose-like max-w-none">
              
              <section id="introduction" className="mb-16">
                <p className="text-xl text-white font-medium border-l-4 border-[#0066FF] pl-6 py-4 bg-slate-800/30 rounded-r-xl">
                  Tired of expensive bills, hidden fees, and constant buffering? In 2026, content delivery has evolved beyond recognition. Whether you're wanting to catch every athletic event, or looking for premium viewing quality, finding a reliable service changes everything.
                </p>
                <p className="mt-6 text-slate-400">
                  Legacy television is becoming a thing of the past. As we move deeper into the digital age, consumers demand more flexibility, better quality, and straightforward pricing. That's exactly where modern streaming solutions step in.
                </p>
              </section>

              <section id="why-choose" className="mb-16">
                <h2 className="text-3xl font-bold mb-6 text-white">Why Choose Premium Services?</h2>
                <p className="mb-6 text-slate-400">
                  Not all streaming solutions are created equal. Many providers boast huge libraries but fail to deliver when it comes to uptime, stability, and picture quality. We invested heavily in top-tier global infrastructure to ensure that when you press play, your content starts instantly.
                </p>
                
                <div className="bg-[#0A0E17] border border-[#0066FF]/30 p-8 rounded-2xl my-8 text-center shadow-lg">
                  <h3 className="text-2xl font-bold mb-4 text-white">Ready to upgrade?</h3>
                  <p className="mb-6 text-slate-400">Join thousands who have optimized their entertainment experience.</p>
                  <a href={waLink} target="_blank" rel="noopener noreferrer" className="inline-block">
                    <Button size="lg" className="btn-premium">
                      <Play className="w-5 h-5 fill-white" />
                      Explore Options
                    </Button>
                  </a>
                </div>
              </section>

              <FeatureHighlight />
              <BenefitsSection />

              <section id="how-it-works" className="mb-16">
                <h2 className="text-3xl font-bold mb-6 text-white">How It Works</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { step: "1", title: "Choose a Plan", desc: "Select a subscription that fits your viewing needs." },
                    { step: "2", title: "Get Your Details", desc: "Receive your access credentials instantly via secure communication." },
                    { step: "3", title: "Start Streaming", desc: "Log into your preferred application and enjoy unlimited entertainment." }
                  ].map((s, i) => (
                    <div key={i} className="bg-[#0A0E17] border border-slate-800 p-6 rounded-2xl text-center relative mt-6">
                      <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#0066FF] rounded-full flex items-center justify-center text-xl font-bold text-white border-4 border-[#03030A] shadow-lg">
                        {s.step}
                      </div>
                      <h3 className="text-xl font-bold mb-2 mt-4 text-white">{s.title}</h3>
                      <p className="text-sm text-slate-400">{s.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section id="pricing" className="mb-16">
                <h2 className="text-3xl font-bold mb-6 text-white">Transparent Options</h2>
                <p className="mb-6 text-slate-400">
                  We believe in completely transparent pricing. No hidden legacy fees, and no credit checks. Pay for exactly what you want, month by month, or choose long-term options for the best value.
                </p>
                <div className="flex justify-center my-8">
                  <a href={waLink} target="_blank" rel="noopener noreferrer">
                    <Button className="btn-premium h-[60px] text-lg">
                      <MessageCircle className="w-6 h-6" />
                      Contact Our Team
                    </Button>
                  </a>
                </div>
              </section>

              <BlogFAQSection />

              <section id="final-cta" className="mt-20">
                <div className="bg-[#0A0E17] border border-[#0066FF]/20 p-10 md:p-16 rounded-[40px] text-center relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#0066FF]/20 blur-[100px] pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FF6B35]/20 blur-[100px] pointer-events-none" />
                  
                  <div className="relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                      Don't miss out on the <span className="text-[#0066FF]">Ultimate Viewing</span> experience.
                    </h2>
                    <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
                      Get instant access to massive broadcast libraries, huge on-demand options, and premium sports coverage.
                    </p>
                    <a href={waLink} target="_blank" rel="noopener noreferrer" className="inline-block">
                      <Button className="btn-premium text-xl h-[70px] px-12">
                        Gain Access
                      </Button>
                    </a>
                  </div>
                </div>
              </section>

            </article>
          </div>
        </div>
      </main>
    </>
  );
};

export default BlogPostPage;
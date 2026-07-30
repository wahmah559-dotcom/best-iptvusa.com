import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HelpCircle, MessagesSquare, ChevronRight } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Breadcrumb from '@/components/Breadcrumb';
import { Button } from '@/components/ui/button';

const faqData = [
  {
    question: "What is IPTV in 2026?",
    answer: "IPTV (Internet Protocol Television) is a digital streaming service that delivers television programming and video content over modern high-speed internet networks. It completely bypasses traditional satellite or cable formats, offering live broadcasts, vast AI-curated video on demand (VOD) libraries, and interactive media directly to your smart devices in up to 8K resolution."
  },
  {
    question: "Is IPTV legal?",
    answer: "Yes, the technology of IPTV is completely legal. The legality depends entirely on the service provider securing proper licensing agreements for the content they distribute. We strictly provide access to properly licensed premium broadcast networks and legitimate entertainment content."
  },
  {
    question: "How to install IPTV Smarters Pro in 2026?",
    answer: (
      <div className="space-y-2">
        <p>To install the latest version of IPTV Smarters Pro, follow these steps:</p>
        <ol className="list-decimal pl-5 space-y-1">
          <li>Go to your device's app store (Google Play, Apple App Store, or Downloader app for Firestick/Android TV 14).</li>
          <li>Search for "IPTV Smarters Pro".</li>
          <li>Download and install the application.</li>
          <li>Open the app and log in using your secure Xtream Codes API credentials provided in your activation email.</li>
        </ol>
      </div>
    )
  },
  {
    question: "What is the best IPTV service this year?",
    answer: (
      <div>
        <p>The best IPTV service in 2026 offers stable 99.99% edge-server uptime, advanced zero buffering technology, high-definition 4K/8K streaming, and an immense library of live networks. Responsive 24/7 AI and human support, along with secure encryption, are standard requirements.</p>
        <p className="mt-2">
          Check out our <Link to="/pricing" className="text-[#3B82F6] hover:text-[#60A5FA] underline">Premium Plans</Link> to see next-generation features and access the ultimate streaming experience.
        </p>
      </div>
    )
  },
  {
    question: "What devices support modern IPTV?",
    answer: (
      <div className="space-y-2">
        <p>IPTV is highly versatile and fully supported on a wide array of 2026 hardware, including:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Smart TVs:</strong> Samsung Tizen, LG WebOS, Android TV 14, Google TV.</li>
          <li><strong>Streaming Sticks:</strong> Wi-Fi 7 Amazon Firestick 4K Max, Roku, Apple TV 4K.</li>
          <li><strong>Mobile & AR:</strong> iOS/Android smartphones, tablets, and spatial computing headsets (VisionOS).</li>
          <li><strong>Computers:</strong> Windows 11/12 PCs and macOS (via web browsers or dedicated applications).</li>
          <li><strong>Set-Top Boxes:</strong> Advanced MAG boxes, Formuler, and AV1-capable hardware.</li>
        </ul>
      </div>
    )
  }
];

const FAQPage = () => {
  const breadcrumbItems = [{ label: 'FAQ', path: '/faq' }];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": typeof faq.answer === 'string' ? faq.answer : faq.question // Fallback
      }
    }))
  };

  schemaData.mainEntity[2].acceptedAnswer.text = "To install IPTV Smarters Pro: 1. Go to your device's app store. 2. Search for 'IPTV Smarters Pro'. 3. Download and install the application. 4. Open the app and log in using your Xtream Codes API credentials.";
  schemaData.mainEntity[3].acceptedAnswer.text = "The best IPTV service in 2026 offers stable 99.99% uptime, zero buffering technology, 4K/8K streaming, and massive libraries. When choosing a provider, look for responsive 24/7 support and secure payment options.";
  schemaData.mainEntity[4].acceptedAnswer.text = "IPTV is supported on Smart TVs, Wi-Fi 7 Streaming Sticks, Mobile Devices, spatial headsets, Computers, and modern Set-Top Boxes.";

  const waLink = "https://wa.me/17867352904";

  return (
    <>
      <Helmet>
        <title>IPTV FAQ 2026 - Frequently Asked Questions & Setup Guides</title>
        <meta name="description" content="Find answers to common questions about IPTV in 2026, including what it is, legality, how to install IPTV Smarters Pro, best services, and supported 8K streaming devices." />
        <meta name="keywords" content="IPTV FAQ 2026, what is IPTV, install IPTV Smarters Pro, best IPTV service, supported devices, IPTV legal" />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-[#0F172A] text-white pt-32 pb-24">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="mb-8">
            <Breadcrumb items={breadcrumbItems} />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-6 bg-[#0066FF]/10 text-[#3B82F6] px-4 py-2 rounded-full font-bold uppercase tracking-wider text-sm border border-[#0066FF]/20 shadow-sm">
              <HelpCircle size={18} /> Support Center 2026
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-white drop-shadow-lg">
              IPTV FAQ - <span className="text-[#3B82F6]">Frequently Asked Questions</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Everything you need to know about next-gen premium streaming services, device compatibility, ultra-fast setup instructions, and billing.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#1E293B]/80 backdrop-blur-md rounded-2xl p-6 md:p-10 border border-slate-800 shadow-xl"
          >
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqData.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-[#0F172A] border border-slate-800 rounded-xl px-6 data-[state=open]:border-[#0066FF]/50 data-[state=open]:shadow-[0_0_15px_rgba(0,102,255,0.1)] transition-all overflow-hidden"
                >
                  <AccordionTrigger className="text-lg md:text-xl font-bold text-white hover:text-[#3B82F6] hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-300 text-base leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 text-center bg-gradient-to-br from-[#1E293B] to-[#0F172A] p-10 rounded-3xl border border-[#0066FF]/30 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0066FF]/10 blur-[80px] pointer-events-none rounded-full" />
            
            <MessagesSquare size={48} className="text-[#3B82F6] mx-auto mb-6 relative z-10" />
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 relative z-10">
              Still have questions?
            </h3>
            <p className="text-slate-400 mb-8 max-w-lg mx-auto relative z-10">
              Our 2026 technical support team is available 24/7 to assist you with AI-driven troubleshooting, installation, or general inquiries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <a href={waLink} target="_blank" rel="noopener noreferrer">
                <Button className="btn-primary text-lg px-8 py-6 h-auto w-full sm:w-auto">
                  Contact Support
                </Button>
              </a>
              <Link to="/features">
                <Button variant="outline" className="bg-[#1E293B] border-slate-700 text-white hover:bg-slate-800 hover:text-white text-lg px-8 py-6 h-auto w-full sm:w-auto transition-colors flex items-center gap-2">
                  View Features <ChevronRight size={18} />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default FAQPage;
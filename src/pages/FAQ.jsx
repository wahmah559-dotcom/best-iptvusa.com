import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Breadcrumb from '@/components/Breadcrumb';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const breadcrumbItems = [{ label: 'Frequently Asked Questions', path: '/faq' }];

  const faqs = [
    {
      question: 'What is the best streaming subscription available?',
      answer: 'Our service is widely recognized as the best premium subscription because of our unwavering commitment to quality. We offer a massive library of over 20,000 live channels, thousands of VOD titles, and comprehensive sports programming. Our dedicated servers specifically cater to audiences, ensuring ultra-fast loading speeds and a buffer-free streaming experience.',
    },
    {
      question: 'Is 4K streaming available?',
      answer: 'Yes, absolutely! We prioritize high-definition content. A vast majority of our networks and VODs support true 4K streaming and 1080p HD quality. Our intelligent streaming infrastructure automatically adjusts to your internet speed to provide the highest possible resolution without interruptions.',
    },
    {
      question: 'What devices support the service?',
      answer: 'Our affordable service is universally compatible. You can watch on Smart TVs, Android boxes and mobile devices, iOS (iPhone/iPad/Apple TV), dedicated streaming sticks, MAG boxes, and directly on your PC or Mac. We support all major media player applications.',
    },
    {
      question: 'How reliable is the streaming service?',
      answer: 'Reliability is our strongest feature. We guarantee a 99.9% uptime. Thanks to our advanced Anti-Freeze technology and global Content Delivery Network (CDN), we drastically reduce buffering and freezing, even during high-traffic events like major championship matches, global sporting events, or popular season premieres.',
    },
    {
      question: 'Do you offer a money-back guarantee?',
      answer: 'Yes, we stand behind our premium service with a 30-day money-back guarantee for all new customers. If you are not completely satisfied with our streaming quality or channel selection within your first 30 days, simply contact our support team, and we will issue a full refund—no complex questions asked.',
    },
    {
      question: 'What is the cost of the subscription?',
      answer: 'We offer highly competitive and affordable plans designed to replace expensive traditional provider bills. Our subscriptions start at just $14 for a 1-month plan, with significant discounts on longer commitments. Our 6-month and 12-month plans offer the best value. There are no hidden fees or installation charges.',
    },
    {
      question: 'Is the service secure and safe to use?',
      answer: 'Your security and privacy are paramount. Our platform utilizes advanced 256-bit SSL encryption to ensure that all your payment details and personal information remain 100% secure. We do not log your streaming activity, offering you a private and safe entertainment experience.',
    },
    {
      question: 'How is the customer support?',
      answer: 'We provide elite, 24/7 dedicated customer support. Whether you need help setting up your media app on a streaming stick or have a quick billing question, our responsive team is available around the clock via Email, WhatsApp, and live chat. We pride ourselves on resolving most inquiries within one hour.',
    },
  ];

  // Generate FAQ schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>FAQ - Common Questions About Best Streaming Subscription</title>
        <meta name="description" content="Find answers to common questions about our streaming service. Learn about 4K streaming quality, device compatibility, support, pricing, and our money-back guarantee." />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="mb-8">
             <Breadcrumb items={breadcrumbItems} />
          </div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <HelpCircle size={64} className="text-[#0C0BBD] mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              FAQ - Common Questions About Our Premium Service
            </h1>
            <p className="text-xl text-gray-300">
              Everything you need to know about setting up and enjoying the best streaming experience available.
            </p>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="glass-card rounded-xl px-6 border-none overflow-hidden"
                >
                  <AccordionTrigger className="text-left text-lg font-bold text-white hover:text-[#0C0BBD] transition-colors py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 text-base leading-relaxed pb-6 pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center glass-card p-12 rounded-3xl border border-[#0C0BBD]/20"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Still Need Help With Your Subscription?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our support team is here 24/7. Reach out to us, and we'll help you get started with the best premium entertainment experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="btn-primary text-lg px-8 py-6">
                  Contact Support Now
                </Button>
              </Link>
              <Link to="/pricing">
                <Button className="btn-secondary text-lg px-8 py-6">
                  View Pricing Plans
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { question: "What devices are supported?", answer: "Our service works on virtually all devices including Smart TVs (Samsung, LG), Amazon Firestick, Android TV, Apple TV, iOS, Android smartphones, MAG boxes, and PC/Mac." },
  { question: "How many connections allowed?", answer: "Our standard plans come with 1 connection. You can upgrade to multiple connections at checkout or contact our support team to add more devices to your account." },
  { question: "What if service stops working?", answer: "We have a 99.9% uptime guarantee. If you experience issues, our 24/7 technical support team is ready to assist you via live chat, email, or WhatsApp." },
  { question: "Can I cancel anytime?", answer: "Yes, absolutely! There are no long-term contracts or cancellation fees. You pay as you go and can cancel your subscription at any time." },
  { question: "How do I install?", answer: "Setup is incredibly simple. Upon subscribing, you'll receive an email with step-by-step instructions for your specific device. Usually takes less than 5 minutes." },
  { question: "What payment methods accepted?", answer: "We accept all major Credit/Debit cards (Visa, MasterCard, Amex), PayPal, and Crypto. All payments are securely processed with SSL encryption." },
  { question: "Is it legal?", answer: "Yes, IPTV itself is a legal technology for delivering media content over the internet. We operate within the legal boundaries of streaming service providers." },
  { question: "Do you offer refunds?", answer: "Yes, we offer a 30-Day Money Back Guarantee. If you are not completely satisfied with the service, contact us within 30 days for a full refund." }
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-[#0A0A1F]" id="faq">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-400">Everything you need to know about our IPTV USA service.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#0F172A] p-6 md:p-8 rounded-2xl border border-white/10"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-b border-white/10">
                <AccordionTrigger className="text-white hover:text-[#0C0BBD] text-left text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <div className="text-center mt-12">
          <Link to="/contact">
            <Button variant="outline" className="border-[#0C0BBD] text-white hover:bg-[#0C0BBD] px-8 py-6 text-lg">
              Still have questions? Contact us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
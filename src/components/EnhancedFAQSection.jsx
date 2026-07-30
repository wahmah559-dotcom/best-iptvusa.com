import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const waLink = "https://wa.me/17867352904?text=I%20want%20to%20subscribe%20to%20Best%20IPTV%20USA";

const faqs = [
  { question: 'What devices are supported?', answer: 'Our service works on virtually all devices including Smart TVs (Samsung, LG), Amazon Firestick, Android TV, Apple TV, iOS, Android smartphones, MAG boxes, and PC/Mac. We provide simple setup guides for all platforms.' },
  { question: 'How many connections are allowed?', answer: 'Our standard plan includes 1 connection. However, you can upgrade to our Pro plan for 2 connections, or contact support to add as many extra connections as you need for a small additional fee.' },
  { question: 'Do you offer a money-back guarantee?', answer: "Yes! We offer a hassle-free 30-Day Money Back Guarantee. If you're not completely satisfied with our streaming quality, we will refund your payment in full. No questions asked." },
  { question: 'Can I cancel anytime?', answer: 'Absolutely. Our service is month-to-month or strictly based on the term you purchase. There are no automatic renewals, long-term contracts, or hidden cancellation fees.' },
  { question: 'How quickly will I receive my login?', answer: 'Instantly. Once your secure payment is completed, our automated system immediately sends your login credentials and setup instructions to your registered email address.' },
  { question: 'Do I need a VPN?', answer: 'While a VPN is not strictly required to use our service, we fully support VPN usage. If your ISP throttles streaming traffic, a VPN can actually improve your streaming experience.' },
];

const EnhancedFAQSection = () => {
  return (
    <section className="border-t border-white/5 bg-[#05070B] py-24" id="faq">
      <div className="container relative z-10 mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-400">Everything you need to know about our service.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 sm:p-8"
        >
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={faq.question}
                value={`item-${idx}`}
                className="rounded-xl border border-white/10 bg-[#0B1120] px-6 transition-colors duration-300 data-[state=open]:border-[#3B82F6]/40"
              >
                <AccordionTrigger className="py-5 text-left text-base font-semibold text-white hover:text-[#5B9BFF] [&[data-state=open]>svg]:text-[#5B9BFF]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 pt-0 text-sm leading-relaxed text-slate-400">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <div className="mt-12 text-center">
          <a href={waLink} target="_blank" rel="noopener noreferrer">
            <Button className="h-13 rounded-full border border-white/15 bg-transparent px-8 py-6 text-base font-semibold text-white transition-all duration-300 hover:bg-white/5">
              Still have questions? Contact Support
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default EnhancedFAQSection;

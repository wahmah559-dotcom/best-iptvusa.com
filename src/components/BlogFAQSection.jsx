import React from 'react';
import { HelpCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const BlogFAQSection = () => {
  const faqs = [
    {
      q: "What devices are compatible with Best IPTV USA?",
      a: "Our service works on virtually all modern devices including Amazon Firestick, Android TV boxes, Smart TVs (Samsung, LG), Apple TV, iOS, Android smartphones, and Windows/Mac computers."
    },
    {
      q: "Do I need a VPN to use the service?",
      a: "While a VPN is not strictly required, we highly recommend using one to ensure your ISP doesn't throttle your streaming speeds and to protect your online privacy."
    },
    {
      q: "Can I watch on multiple devices at the same time?",
      a: "Yes, we offer multiple connection plans. Our standard plan includes 1 connection, but you can upgrade to 2, 3, or up to 5 simultaneous connections during checkout."
    },
    {
      q: "How fast should my internet be?",
      a: "For standard HD streaming, we recommend at least 15 Mbps. For seamless 4K/UHD streaming, a stable connection of 30 Mbps or higher is ideal."
    },
    {
      q: "Are there any contracts or hidden fees?",
      a: "No! We operate on a strict month-to-month (or prepaid multi-month) basis. There are no hidden fees, no installation charges, and you can cancel anytime."
    },
    {
      q: "What do I do if I need technical support?",
      a: "We offer 24/7 customer support via live chat, email, and WhatsApp. Our dedicated technical team is always ready to assist you with setup or troubleshooting."
    }
  ];

  return (
    <div className="my-16 bg-[#0A0E17] border border-slate-800 p-8 rounded-3xl" id="faq">
      <div className="flex items-center gap-3 mb-8">
        <HelpCircle className="w-8 h-8 text-[#0066FF]" />
        <h2 className="text-3xl font-bold m-0 text-white">Frequently Asked Questions</h2>
      </div>
      
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, idx) => (
          <AccordionItem key={idx} value={`item-${idx}`} className="border-b border-slate-800/50">
            <AccordionTrigger className="text-left font-semibold text-white hover:text-[#0066FF] transition-colors py-4 text-lg">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-slate-400 text-base leading-relaxed pb-4">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default BlogFAQSection;
import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const waLink = "https://wa.me/17867352904?text=I%20want%20to%20subscribe%20to%20Best%20IPTV%20USA";

const StickyBuyButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 transition-all duration-500 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
      }`}
    >
      <a href={waLink} target="_blank" rel="noopener noreferrer">
        <Button className="bg-primary hover:bg-primary/90 text-white font-bold py-6 px-8 rounded-full shadow-[0_0_20px_rgba(0,102,255,0.4)] hover:shadow-[0_0_30px_rgba(0,102,255,0.6)] transition-all hover:scale-105 group flex items-center gap-3 border border-primary/50 h-[60px]">
          <MessageCircle className="w-5 h-5" />
          <span className="text-lg">Subscribe Now</span>
        </Button>
      </a>
    </div>
  );
};

export default StickyBuyButton;
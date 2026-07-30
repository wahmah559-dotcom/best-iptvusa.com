import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const FloatingContactButton = () => {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const triggerBounce = async () => {
      if (!isHovered) {
        await controls.start({
          y: [0, -10, 0, -5, 0],
          transition: { duration: 0.6, ease: "easeInOut" }
        });
      }
    };

    const intervalId = setInterval(triggerBounce, 10000);
    return () => clearInterval(intervalId);
  }, [controls, isHovered]);

  return (
    <motion.a
      href="https://wa.me/17867352904"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-50 flex items-center gap-2 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white px-4 py-3 md:px-6 md:py-4 rounded-full shadow-lg cursor-pointer min-h-[44px]"
      style={{
        boxShadow: isHovered 
          ? '0 10px 25px -5px rgba(37, 211, 102, 0.5), 0 8px 10px -6px rgba(37, 211, 102, 0.1)' 
          : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)'
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div animate={controls}>
        <MessageCircle size={24} className="md:w-7 md:h-7" fill="currentColor" />
      </motion.div>
      <span className="font-bold text-sm md:text-base whitespace-nowrap">Chat Now</span>
    </motion.a>
  );
};

export default FloatingContactButton;
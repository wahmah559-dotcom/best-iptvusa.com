import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

// Homepage Section Components
import Hero from '@/components/Hero';
import SupportedDevices from '@/components/SupportedDevices';
import ContentLibrarySection from '@/components/ContentLibrarySection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import EnhancedPricingSection from '@/components/EnhancedPricingSection';
import InstallationSection from '@/components/InstallationSection';
import SocialProofSection from '@/components/SocialProofSection';
import EnhancedFAQSection from '@/components/EnhancedFAQSection';
import FinalCTASection from '@/components/FinalCTASection';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Premium Streaming USA 2026",
    "image": "https://images.unsplash.com/photo-1593784991095-a205069470b6",
    "@id": "https://premiumstreaming.example",
    "url": "https://premiumstreaming.example",
    "telephone": "+1-786-735-2904",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Miami",
      "addressRegion": "FL",
      "addressCountry": "US"
    },
    "description": "Premium 2026 streaming service offering massive AI-curated libraries and ultra-high definition 4K/8K playback."
  };

  return (
    <>
      <Helmet>
        <title>Premium Streaming Service 2026 - High Definition Access</title>
        <meta name="description" content="Deliver premium viewing with our robust 2026 network. Access massive content libraries in 4K and 8K definition. Subscribe today. Fast, reliable, and straightforward." />
        <meta name="keywords" content="premium streaming 2026, entertainment service, content access, high definition playback, 8k iptv" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>

      <div role="main">
        <Hero />
        <SupportedDevices />
        <ContentLibrarySection />
        <WhyChooseUsSection />
        <HowItWorksSection />
        <EnhancedPricingSection />
        <InstallationSection />
        <SocialProofSection />
        <EnhancedFAQSection />
        <FinalCTASection />
      </div>
    </>
  );
};

export default Home;

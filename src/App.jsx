import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import Features from '@/pages/Features';
import Contact from '@/pages/Contact';
import BlogPage from '@/pages/BlogPage';
import BlogArticlePage from '@/pages/BlogArticlePage';
import { CartProvider } from '@/hooks/useCart';

// Imported Pages
import PremiumIPTVPage from '@/pages/PremiumIPTVPage';
import NetworkStatusPage from '@/pages/NetworkStatusPage';
import FAQPage from '@/pages/FAQPage';
import QuickLinksPage from '@/pages/QuickLinksPage';
import FeaturesPage from '@/pages/FeaturesPage';
import TestimonialsPage from '@/pages/TestimonialsPage';
import DevicesPage from '@/pages/DevicesPage';
import HelpCenterPage from '@/pages/HelpCenterPage';
import StreamingServicePage from '@/pages/StreamingServicePage';
import ChannelListPage from '@/pages/ChannelListPage';
import PricingPage from '@/pages/PricingPage';

// Blog Posts
import IPTVSmarttersProPage from '@/pages/BlogPost/IPTVSmarttersProPage';
import BestIPTVPage from '@/pages/BlogPost/BestIPTVPage';
import IPTVServicesPage from '@/pages/BlogPost/IPTVServicesPage';
import IPTVEncoderPage from '@/pages/BlogPost/IPTVEncoderPage';
import IPTVSmartPlayerPage from '@/pages/BlogPost/IPTVSmartPlayerPage';
import IPTVGuideSwedenPage from '@/pages/BlogPost/IPTVGuideSwedenPage';

// New SEO Blog Posts
import BestIPTVServicesUSAPage from '@/pages/BlogPost/BestIPTVServicesUSAPage';
import IsIPTVLegalUSAPage from '@/pages/BlogPost/IsIPTVLegalUSAPage';
import TopIPTVAppsFirestickUSAPage from '@/pages/BlogPost/TopIPTVAppsFirestickUSAPage';
import HowToChooseIPTVUSAPage from '@/pages/BlogPost/HowToChooseIPTVUSAPage';

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="features" element={<Features />} />
          <Route path="contact" element={<Contact />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="faq" element={<FAQPage />} />
          
          <Route path="blog-post" element={<Navigate to="/blog" replace />} />
          <Route path="blog" element={<BlogPage />} />
          
          {/* Specific SEO Blog Posts */}
          <Route path="blog/iptv-smarters-pro" element={<IPTVSmarttersProPage />} />
          <Route path="blog/best-iptv" element={<BestIPTVPage />} />
          <Route path="blog/best-iptv-usa-2026" element={<BestIPTVPage />} />
          <Route path="blog/iptv-services" element={<IPTVServicesPage />} />
          <Route path="blog/iptv-encoder" element={<IPTVEncoderPage />} />
          <Route path="blog/iptv-smart-player" element={<IPTVSmartPlayerPage />} />
          <Route path="blog/iptv-guide-sweden" element={<IPTVGuideSwedenPage />} />
          
          <Route path="blog/best-iptv-services-usa-2026" element={<BestIPTVServicesUSAPage />} />
          <Route path="blog/is-iptv-legal-usa" element={<IsIPTVLegalUSAPage />} />
          <Route path="blog/top-iptv-apps-firestick-usa" element={<TopIPTVAppsFirestickUSAPage />} />
          <Route path="blog/how-to-choose-iptv-usa" element={<HowToChooseIPTVUSAPage />} />
          
          {/* Dynamic Fallback for old blog format if needed */}
          <Route path="blog/:slug" element={<BlogArticlePage />} />
          
          {/* Secondary Pages */}
          <Route path="premium-iptv" element={<PremiumIPTVPage />} />
          <Route path="network-status" element={<NetworkStatusPage />} />
          <Route path="quick-links" element={<QuickLinksPage />} />
          <Route path="features-list" element={<FeaturesPage />} />
          <Route path="testimonials" element={<TestimonialsPage />} />
          <Route path="devices" element={<DevicesPage />} />
          <Route path="help-center" element={<HelpCenterPage />} />
          <Route path="streaming-service" element={<StreamingServicePage />} />
          <Route path="channel-list" element={<ChannelListPage />} />
          
          {/* Fallback route for unknown paths */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </CartProvider>
  );
}

export default App;
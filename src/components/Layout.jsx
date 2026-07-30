import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsAppButton from '@/components/FloatingWhatsAppButton';
import { Toaster } from '@/components/ui/toaster';
import SEOSchema from '@/components/SEOSchema';

const Layout = () => {
  const location = useLocation();
  const canonicalUrl = `https://best-iptvusa.com${location.pathname}`;

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden flex flex-col font-sans">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#020617" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      
      <SEOSchema />
      
      <Header />
      
      <main className="flex-grow">
        <Outlet />
      </main>
      
      <Footer />
      
      {/* Floating WhatsApp Button - appears on all pages */}
      <FloatingWhatsAppButton />
      
      <Toaster />
    </div>
  );
};

export default Layout;
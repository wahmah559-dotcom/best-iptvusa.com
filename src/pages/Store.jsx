import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import ProductsList from '@/components/ProductsList';
import Breadcrumb from '@/components/Breadcrumb';

const Store = () => {
  const breadcrumbItems = [{ label: 'Store', path: '/store' }];

  return (
    <>
      <Helmet>
        <title>IPTV USA Store - Premium Channels & Content Setup</title>
        <meta name="description" content="Browse IPTV USA premium channels and content. Discover related devices and setup services. Enhance your best IPTV subscription USA experience." />
      </Helmet>
      <div className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mb-8">
             <Breadcrumb items={breadcrumbItems} />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              IPTV USA Premium Channels & Content Store
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Enhance your live TV IPTV experience. Discover our curated selection of premium channel packages, add-ons, and recommended streaming hardware.
            </p>
          </motion.div>

          <div className="mb-10">
             <h2 className="text-3xl font-bold text-white border-b border-white/10 pb-4 mb-8">
               Featured Premium Products
             </h2>
             <ProductsList />
          </div>
        </div>
      </div>
    </>
  );
};

export default Store;
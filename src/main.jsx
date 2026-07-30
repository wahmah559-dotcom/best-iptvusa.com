import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from '@/App';
import ScrollToTop from '@/components/ScrollToTop';
import { CartProvider } from '@/hooks/useCart';
import '@/index.css';

// Inject Google Search Console Verification Token before app mounts
const meta = document.createElement('meta');
meta.name = "google-site-verification";
meta.content = "<VERIFICATION_TOKEN>"; // Note: Replace <VERIFICATION_TOKEN> with your actual Google Search Console token
document.head.appendChild(meta);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      <ScrollToTop />
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
  </>
);
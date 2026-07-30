import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MessageCircle, Phone, Shield } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'Home', path: '/' },
        { name: 'Features', path: '/features' },
        { name: 'Pricing', path: '/pricing' },
        { name: 'Blog', path: '/blog' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'Installation Guides', path: '/devices' },
        { name: 'FAQ', path: '/faq' },
        { name: 'Help Center', path: '/help-center' },
        { name: 'Contact', path: '/contact' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', path: '#' },
        { name: 'Terms of Service', path: '#' },
        { name: 'Refund Policy', path: '#' },
      ],
    },
  ];

  return (
    <footer className="relative border-t border-white/5 bg-[#05070B] pb-10 pt-20">
      <div className="pointer-events-none absolute left-1/4 top-0 h-[300px] w-[300px] rounded-full bg-[#0066FF]/10 blur-[100px]" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link to="/" className="mb-5 inline-block">
              <span className="text-2xl font-extrabold tracking-tight text-white">
                Best <span className="text-[#3B82F6]">IPTV</span> USA
              </span>
            </Link>
            <p className="mb-6 max-w-md leading-relaxed text-slate-400">
              Premium live TV, sports, and on-demand entertainment streamed in 4K — with instant
              activation and support that's actually there when you need it.
            </p>
            <div className="space-y-3">
              <a href="tel:+17867352904" className="flex items-center gap-3 text-slate-400 transition-colors hover:text-white">
                <Phone size={17} className="text-[#3B82F6]" />
                <span className="font-medium">+1 (786) 735-2904</span>
              </a>
              <a href="mailto:support@premiumstream.example" className="flex items-center gap-3 text-slate-400 transition-colors hover:text-white">
                <Mail size={17} className="text-[#3B82F6]" />
                <span>Contact via Email</span>
              </a>
              <a
                href="https://wa.me/17867352904"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-400 transition-colors hover:text-white"
              >
                <MessageCircle size={17} className="text-[#25D366]" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title} className="lg:col-span-1">
              <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">{section.title}</h3>
              <ul className="space-y-3.5">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-sm text-slate-400 transition-colors duration-300 hover:text-[#5B9BFF]">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mb-8 flex items-center justify-center gap-2 border-t border-white/5 pt-8 text-center text-xs text-slate-500">
          <Shield size={14} className="shrink-0 text-slate-600" />
          <p>Best IPTV USA provides premium streaming access across the United States. All trademarks belong to their respective owners.</p>
        </div>

        <div className="text-center text-sm text-slate-500">
          <p>&copy; {currentYear} Best IPTV USA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

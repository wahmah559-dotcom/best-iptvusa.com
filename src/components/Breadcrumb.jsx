import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { Helmet } from 'react-helmet';

const Breadcrumb = ({ items }) => {
  const schemaList = items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 2,
    "name": item.label,
    "item": `https://iptvusa.com${item.path}`
  }));

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://iptvusa.com/"
      },
      ...schemaList
    ]
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>
      <nav aria-label="Breadcrumb" className="mb-6 py-2 px-4 glass-card rounded-lg inline-block">
        <ol className="flex items-center space-x-2 text-sm text-gray-400">
          <li>
            <Link to="/" className="flex items-center hover:text-[#0C0BBD] transition-colors" title="Go to Homepage">
              <Home size={14} className="mr-1" />
              <span>Home</span>
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              <ChevronRight size={14} className="mx-1" />
              {index === items.length - 1 ? (
                <span className="text-white font-medium aria-current='page'">{item.label}</span>
              ) : (
                <Link to={item.path} className="hover:text-[#0C0BBD] transition-colors">
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumb;
import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import { blogArticles } from '@/data/blogArticles';

const SEOSchema = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const baseUrl = 'https://best-iptvusa.com';
  const logoUrl = `${baseUrl}/logos/best-iptv-usa-horizontal.svg`;

  // Global Schemas
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "IPTV USA",
    "url": baseUrl,
    "logo": logoUrl,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-786-735-2904",
      "contactType": "customer service"
    }
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Best IPTV USA",
    "description": "Premium IPTV service in USA with 50,000+ live channels, movies, and 4K streaming",
    "brand": {
      "@type": "Brand",
      "name": "IPTV USA"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "30"
    },
    "url": baseUrl,
    "image": logoUrl
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Best IPTV USA",
    "url": baseUrl
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "IPTV USA",
    "url": baseUrl,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-786-735-2904",
      "contactType": "customer service"
    }
  };

  // Breadcrumb Schema
  const breadcrumbList = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": baseUrl
    }
  ];

  let blogArticle = null;

  if (currentPath.startsWith('/blog')) {
    breadcrumbList.push({
      "@type": "ListItem",
      "position": 2,
      "name": "Blog",
      "item": `${baseUrl}/blog`
    });

    if (currentPath !== '/blog' && currentPath !== '/blog/') {
      const slug = currentPath.split('/').pop();
      blogArticle = blogArticles.find(a => a.slug === slug);
      
      if (blogArticle) {
        breadcrumbList.push({
          "@type": "ListItem",
          "position": 3,
          "name": blogArticle.title,
          "item": `${baseUrl}${currentPath}`
        });
      }
    }
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbList
  };

  // BlogPosting Schema (Conditional)
  let blogPostingSchema = null;
  if (blogArticle) {
    blogPostingSchema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `${baseUrl}${currentPath}`
      },
      "headline": blogArticle.title,
      "description": blogArticle.excerpt,
      "image": blogArticle.featuredImage,
      "author": {
        "@type": "Person",
        "name": "Admin"
      },
      "publisher": {
        "@type": "Organization",
        "name": "IPTV USA",
        "logo": {
          "@type": "ImageObject",
          "url": logoUrl
        }
      },
      "datePublished": blogArticle.date,
      "dateModified": blogArticle.date
    };
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      {blogPostingSchema && (
        <script type="application/ld+json">{JSON.stringify(blogPostingSchema)}</script>
      )}
    </Helmet>
  );
};

export default SEOSchema;